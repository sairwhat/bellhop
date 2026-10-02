-- Initial Bellhop schema.
-- Profiles, courses, and recurring weekly meetings.

create extension if not exists citext with schema extensions;

create type public.student_type as enum ('k12_student', 'college_student', 'other');
create type public.user_role as enum ('user', 'admin');

-- Profiles -----------------------------------------------------------------
-- One row per auth user, created automatically on signup by the trigger below.
-- Age and date of birth are deliberately not stored: age is derived and goes
-- stale, and storing a minor's exact age carries legal obligations. Grade level
-- and year of study cover the same UI need without the data.

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username extensions.citext unique,
  first_name text not null default '',
  last_name text not null default '',
  middle_name text,
  student_type public.student_type not null default 'other',
  grade_level text,
  year_of_study text,
  role public.user_role not null default 'user',
  created_at timestamptz not null default now(),
  constraint profiles_grade_or_year check (
    grade_level is null or year_of_study is null
  )
);

comment on column public.profiles.username is
  'Nullable so signup can succeed before onboarding collects it.';

comment on column public.profiles.role is
  'Privileged. Never writable by the owning user; see grants below.';

-- Courses ------------------------------------------------------------------

create table public.courses (
  id uuid primary key default gen_random_uuid (),
  user_id uuid not null references public.profiles (id) on delete cascade,
  name text not null,
  teacher text,
  room text,
  color text,
  archived boolean not null default false,
  created_at timestamptz not null default now()
);

create index courses_user_id_idx on public.courses (user_id);

-- Meetings -----------------------------------------------------------------
-- A meeting recurs weekly on day_of_week. Optional term bounds let a class
-- exist only for part of the year without extra rows.

create table public.course_meetings (
  id uuid primary key default gen_random_uuid (),
  course_id uuid not null references public.courses (id) on delete cascade,
  day_of_week smallint not null,
  start_time time not null,
  end_time time not null,
  start_date date,
  end_date date,
  created_at timestamptz not null default now(),
  constraint course_meetings_day_range check (day_of_week between 0 and 6),
  constraint course_meetings_time_order check (start_time < end_time),
  constraint course_meetings_term_order check (
    end_date is null or start_date is null or start_date <= end_date
  )
);

create index course_meetings_course_id_idx on public.course_meetings (course_id);
create index course_meetings_day_idx on public.course_meetings (day_of_week);

-- Signup trigger -----------------------------------------------------------
-- Security definer so it can insert despite RLS being enabled on profiles.

create function public.handle_new_user ()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user ();

-- Row level security -------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.course_meetings enable row level security;

create policy "profiles_select_own" on public.profiles
  for select to authenticated using (auth.uid() = id);

create policy "profiles_update_own" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- role is excluded from column grants below, so this policy cannot escalate.

create policy "courses_select_own" on public.courses
  for select to authenticated using (auth.uid() = user_id);

create policy "courses_insert_own" on public.courses
  for insert to authenticated with check (auth.uid() = user_id);

create policy "courses_update_own" on public.courses
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "courses_delete_own" on public.courses
  for delete to authenticated using (auth.uid() = user_id);

create policy "meetings_select_own" on public.course_meetings
  for select to authenticated using (
    exists (
      select 1 from public.courses c
      where c.id = course_id and c.user_id = auth.uid ()
    )
  );

create policy "meetings_insert_own" on public.course_meetings
  for insert to authenticated with check (
    exists (
      select 1 from public.courses c
      where c.id = course_id and c.user_id = auth.uid ()
    )
  );

create policy "meetings_update_own" on public.course_meetings
  for update to authenticated using (
    exists (
      select 1 from public.courses c
      where c.id = course_id and c.user_id = auth.uid ()
    )
  ) with check (
    exists (
      select 1 from public.courses c
      where c.id = course_id and c.user_id = auth.uid ()
    )
  );

create policy "meetings_delete_own" on public.course_meetings
  for delete to authenticated using (
    exists (
      select 1 from public.courses c
      where c.id = course_id and c.user_id = auth.uid ()
    )
  );

-- Column grants ------------------------------------------------------------
-- RLS decides which rows a user may touch; these decide which columns. This is
-- what stops a user writing their own role to admin.

revoke update on public.profiles from authenticated;

grant update (username, first_name, last_name, middle_name, student_type, grade_level, year_of_study)
  on public.profiles to authenticated;

grant insert, delete on public.profiles to authenticated;
grant select on public.profiles to authenticated;