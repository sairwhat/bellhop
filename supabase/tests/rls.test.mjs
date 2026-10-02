// RLS integration checks. Run with `npm run test:db`.
//
// Self-configuring: reads keys from `supabase status -o env` so there is
// nothing to set up. Override by exporting ANON_KEY and SERVICE_ROLE_KEY.
//
// These hit the real auth and REST endpoints, so `supabase start` must be
// running. Each check creates throwaway users and deletes them at the end.

import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const PASSWORD = 'correct-horse-battery';

// npm run already puts node_modules/.bin on PATH, but that shim is a .cmd on
// Windows and Node refuses to spawn those without a shell. The CLI is a plain
// JS entry, so running it through this same node binary avoids the problem.
const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..');
const CLI = path.join(repoRoot, 'node_modules', 'supabase', 'dist', 'supabase.js');

function loadConfig() {
  if (process.env.ANON_KEY && process.env.SERVICE_ROLE_KEY) {
    return {
      API: process.env.API_URL ?? 'http://127.0.0.1:54321',
      ANON: process.env.ANON_KEY,
      SECRET: process.env.SERVICE_ROLE_KEY,
    };
  }

  let out;
  try {
    out = execFileSync(process.execPath, [CLI, 'status', '-o', 'env'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  } catch (err) {
    console.error('Could not read `supabase status`. Is the local stack running?');
    console.error('Start it with: npm run db:start');
    if (err.stderr) console.error(String(err.stderr).trim());
    process.exit(2);
  }

  const vars = Object.fromEntries(
    out
      .split('\n')
      .map((line) => line.match(/^([A-Z0-9_]+)="(.*)"$/))
      .filter(Boolean)
      .map(([, k, v]) => [k, v])
  );

  if (!vars.ANON_KEY || !vars.SERVICE_ROLE_KEY) {
    console.error('Supabase reported no keys. Try `npx supabase start`.');
    process.exit(2);
  }

  return { API: vars.API_URL, ANON: vars.ANON_KEY, SECRET: vars.SERVICE_ROLE_KEY };
}

const { API, ANON, SECRET } = loadConfig();

const headers = (key, extra = {}) => ({
  apikey: key,
  Authorization: `Bearer ${key}`,
  'Content-Type': 'application/json',
  ...extra,
});

async function call(url, opts) {
  const res = await fetch(url, opts);
  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  return { status: res.status, body };
}

const post = (url, key, payload, extra = {}) =>
  call(url, { method: 'POST', headers: headers(key, extra), body: JSON.stringify(payload) });

async function makeUser(tag) {
  const email = `${tag}-${Date.now()}@test.local`;
  const created = await post(`${API}/auth/v1/admin/users`, SECRET, {
    email,
    password: PASSWORD,
    email_confirm: true,
  });
  if (created.status >= 300) {
    throw new Error(`create ${tag} failed: ${created.status} ${JSON.stringify(created.body)}`);
  }

  const login = await post(`${API}/auth/v1/token?grant_type=password`, ANON, {
    email,
    password: PASSWORD,
  });
  if (login.status >= 300) {
    throw new Error(`login ${tag} failed: ${login.status} ${JSON.stringify(login.body)}`);
  }

  return { tag, id: created.body.id, token: login.body.access_token };
}

let passed = 0;
let failed = 0;

function check(name, ok, detail = '') {
  if (ok) passed++;
  else failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `\n      ${detail}` : ''}`);
}

const first = (body) => (Array.isArray(body) ? body[0] : body);

async function run() {
  const alice = await makeUser('alice');
  const bob = await makeUser('bob');

  const profile = await call(`${API}/rest/v1/profiles?id=eq.${alice.id}&select=id,role`, {
    headers: headers(alice.token),
  });
  const prof = first(profile.body);
  check('signup trigger creates a profile row', profile.status === 200 && prof?.id === alice.id, JSON.stringify(profile.body));
  check('new profiles default to role=user', prof?.role === 'user', `role=${prof?.role}`);

  const created = await post(
    `${API}/rest/v1/courses`,
    alice.token,
    { user_id: alice.id, name: 'Calculus II', teacher: 'Dr. Reyes', room: 'B-204' },
    { Prefer: 'return=representation' }
  );
  const course = first(created.body);
  check('user can insert their own course', created.status === 201 && !!course?.id, `${created.status} ${JSON.stringify(created.body)}`);

  const own = await call(`${API}/rest/v1/courses?select=id,name`, { headers: headers(alice.token) });
  check('user reads their own course', own.status === 200 && own.body?.length === 1, JSON.stringify(own.body));

  const leaked = await call(`${API}/rest/v1/courses?select=id,name`, { headers: headers(bob.token) });
  check("another user cannot read it", leaked.status === 200 && leaked.body?.length === 0, JSON.stringify(leaked.body));

  const forged = await post(`${API}/rest/v1/courses`, bob.token, { user_id: alice.id, name: 'Stolen' });
  check('cannot insert a course owned by someone else', forged.status >= 400, `${forged.status} ${JSON.stringify(forged.body)}`);

  // RLS turns this into a silent zero-row update rather than an error, so the
  // only reliable assertion is that the row is unchanged afterwards.
  await call(`${API}/rest/v1/courses?id=eq.${course.id}`, {
    method: 'PATCH',
    headers: headers(bob.token),
    body: JSON.stringify({ name: 'Hijacked' }),
  });
  const after = await call(`${API}/rest/v1/courses?id=eq.${course.id}&select=name`, {
    headers: headers(alice.token),
  });
  check("another user's update is a no-op", first(after.body)?.name === 'Calculus II', JSON.stringify(after.body));

  const escalate = await call(`${API}/rest/v1/profiles?id=eq.${bob.id}`, {
    method: 'PATCH',
    headers: headers(bob.token),
    body: JSON.stringify({ role: 'admin' }),
  });
  check('a user cannot promote themselves to admin', escalate.status >= 400, `${escalate.status} ${JSON.stringify(escalate.body)}`);

  const allowed = await call(`${API}/rest/v1/profiles?id=eq.${bob.id}`, {
    method: 'PATCH',
    headers: headers(bob.token, { Prefer: 'return=representation' }),
    body: JSON.stringify({ first_name: 'Bob', student_type: 'college_student' }),
  });
  check('a user can update their own allowed columns', allowed.status === 200 && first(allowed.body)?.first_name === 'Bob', `${allowed.status}`);

  const backwards = await post(`${API}/rest/v1/course_meetings`, alice.token, {
    course_id: course.id,
    day_of_week: 2,
    start_time: '11:00:00',
    end_time: '10:00:00',
  });
  check('meeting rejects end_time <= start_time', backwards.status >= 400, `${backwards.status}`);

  const badDay = await post(`${API}/rest/v1/course_meetings`, alice.token, {
    course_id: course.id,
    day_of_week: 9,
    start_time: '10:00:00',
    end_time: '11:15:00',
  });
  check('meeting rejects day_of_week outside 0-6', badDay.status >= 400, `${badDay.status}`);

  const good = await post(
    `${API}/rest/v1/course_meetings`,
    alice.token,
    { course_id: course.id, day_of_week: 2, start_time: '10:00:00', end_time: '11:15:00' },
    { Prefer: 'return=representation' }
  );
  check('user can insert a valid meeting', good.status === 201, `${good.status} ${JSON.stringify(good.body)}`);

  const bobMeetings = await call(`${API}/rest/v1/course_meetings?select=id`, { headers: headers(bob.token) });
  check("meetings inherit the parent's ownership rules", bobMeetings.status === 200 && bobMeetings.body?.length === 0, JSON.stringify(bobMeetings.body));

  const anonRead = await call(`${API}/rest/v1/courses?select=name`);
  check('anon key alone cannot read any course', anonRead.status >= 400 || (anonRead.body?.length ?? 0) === 0, `${anonRead.status} ${JSON.stringify(anonRead.body)}`);

  for (const user of [alice, bob]) {
    await call(`${API}/auth/v1/admin/users/${user.id}`, { method: 'DELETE', headers: headers(SECRET) });
  }
  console.log('\nthrowaway users removed');
}

run()
  .then(() => {
    console.log(`\n${passed} passed, ${failed} failed`);
    process.exit(failed === 0 ? 0 : 1);
  })
  .catch((err) => {
    console.error('ERROR', err.message);
    process.exit(1);
  });