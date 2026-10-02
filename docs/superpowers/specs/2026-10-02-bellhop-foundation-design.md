# Bellhop — Foundation Design

Date: 2026-10-02
Status: Approved for milestone 0 planning

## What this is

Bellhop is a student app for college and K-12 that turns a photograph of a
schedule into a clean, editable timetable, plus the study tools that hang off
it: pomodoro timer, to-do list, and AI Q&A grounded in the student's own notes.

The name is a hotel bellhop — someone whose job is to carry your things so you
don't have to.

## Core promise

Photograph your schedule. Get a clean, editable table.

This is the only promise the landing page leads with. "All your school in one
app" is too broad to survive a hero section.

## Stack

| Layer | Choice | Rationale |
|---|---|---|
| Landing page | Next.js 15 (App Router), TypeScript | Static marketing site, fast deploy |
| Mobile app | Expo SDK 54 + React Native, TypeScript | Native camera, gesture-driven grid editing |
| Navigation | expo-router | File-based, deep-link friendly |
| Backend | Supabase *(proposed, needs confirmation)* | Postgres, auth, storage in one place |
| Local dev | `supabase start` (Docker) | Real Postgres + auth emulator, schema parity with prod |
| AI | Claude vision + structured JSON output | Schedule extraction, notes Q&A |
| Widgets | Kotlin `AppWidgetProvider` + `RemoteViews` | Android first |

### Monorepo layout

```
apps/web       Next.js landing page
apps/mobile    Expo app, prebuild enabled
packages/      shared types, schedule logic, AI prompts
```

### Why Expo and not Capacitor or native SwiftUI

Home screen widgets are hand-written native code in every option — no
framework provides them. The choice is what language the other 95% of the app
is written in.

Capacitor was considered and rejected: a web app in a WebView means no native
camera capture, no smooth gesture-driven grid editing, and scroll behaviour
that reads as a web app pretending. The core interaction of this product is
*photograph a thing, then drag things around in a table*, which React Native
does natively.

Native SwiftUI is the correct choice if widgets were the primary product. They
are not.

### Why not a PWA

iOS does not permit home screen widgets for progressive web apps. There is no
workaround. Widgets on both platforms require native apps, so the PWA path was
abandoned.

## Widgets

**Android ships first.** Reasons: the developer owns an Android device and can
test on it, and `AppWidgetProvider` + `RemoteViews` is simpler than Glance for a
next-class countdown. iOS follows in milestone 7.

### How widgets get data

Widgets are not React. They are a small native extension that knows nothing
about the app's code.

The RN layer writes the current day's schedule into shared preferences on every
sync. The widget reads that cache and renders it. No shared logic, no bridge, and
it survives app restarts.

The cache write must happen on: app foreground, schedule mutation, and midnight
rollover. A widget showing stale data is worse than no widget.

Expected size: roughly 150 lines of native Kotlin.

## Build order

| # | Milestone | Rationale |
|---|---|---|
| 0 | Landing page | Proves the pitch before building the product |
| 1 | Auth, app shell, profile | Nothing works without it |
| 2 | Schedule CRUD by hand | Get the week view and editing right on a trusted schema |
| 3 | OCR + AI import | Bolt photo import onto a known-good schema |
| 4 | Pomodoro + tasks | Independent, cheap, immediately visible to users |
| 5 | Android widget | Schedule data now exists to display |
| 6 | AI notes Q&A | Requires notes infrastructure |
| 7 | iOS widget + store release | Hardest native work; benefits from everything above |

Widgets deliberately land at milestone 5. A widget built before schedule data
exists has nothing to render.

## Schedule import pipeline

Chosen approach is hybrid: on-device OCR extracts text cheaply, then an AI model
restructures it into a typed timetable.

**Known risk:** schedule grids are visually structured, and OCR frequently loses
which column a class belongs to. Tesseract-style output for a 7-column period
grid is frequently unusable.

Mitigation: keep a vision-model path as a fallback, triggered when the
structured parse fails validation or confidence is low. The AI layer is the same
call with an image attached instead of text. This is insurance, not a rewrite.

Validation before persisting anything: every entry must resolve to a valid day
and a plausible time range. Reject and show the raw text rather than writing
garbage into the schedule.

## Milestone 0 — Landing page design

### Visual direction: editorial restraint

The risk being actively managed: lavender and gradients are the current
aesthetic of AI-generated landing pages. Purple-to-pink glow, blurred orbs, and
glassmorphic cards read as machine-generated. The design escapes that through
restraint rather than by abandoning lavender.

Rules:

- Lavender (around `#7C6AF0`) is an **accent**: primary buttons, one hero
  element, section tints. Not full-bleed washes.
- Typography with character — **General Sans**. Not Inter.
- Warm off-white canvas, not pure white. Strict grid, generous whitespace.
- **No floating blurred orbs. No glassmorphism.**
- One deliberate moment of motion — the photograph resolving into the table —
  rather than decoration everywhere.

### Sections, in order

1. Hero with the photograph-to-table demo
2. One line on why this beats retyping
3. Schedule editing
4. Study tools, shown rather than described
5. AI notes Q&A
6. Call to action

### Hero

Single promise, single demo. The centerpiece is the product doing the thing: a
photograph of a messy printed schedule beside the clean extracted table. Real
looking, not stock illustration. This asset is the entire argument for the app.

**The demo is a scripted animation, not a working demo.** The app does not
exist yet, so the sequence is two images and a timeline: photograph on the left,
table on the right, a wipe or crossfade between them on a loop. No real model
call, no capture, no upload. It must also degrade to a static side-by-side if
`prefers-reduced-motion` is set.

### Call to action

The app does not exist at milestone 0, so the CTA cannot link to a download.
It captures an email address for launch notification and links to nothing else.
One field, one button, no second option competing for attention.

Pricing copy assumes a free tier. That assumption needs confirmation before
any paywall language is written.

### Copy

Specific over clever. "Photograph your schedule and edit it in seconds" beats
"unlock your academic potential."

The demo input should look like a real student schedule — photographed,
slightly skewed, uneven lighting.

### Landing page scope limit

The page must not promise widgets on desktop. Widgets are phone-only and will
ship in milestone 5, long after the page exists. Nothing on the page may
describe a feature the build order cannot deliver.

## Non-goals

- Native desktop apps
- Widgets on web, in any form
- Institution-wide features (admin panels, SIS integration)
- Sharing or collaboration between students

## Open questions

- Backend confirmation: Supabase is used as the working default throughout but
  was not explicitly approved. Must be settled before milestone 1.
- Pricing: undecided. The landing page assumes a free tier; no paywall
  language until that is confirmed.
- AI cost control: rate limits and per-user quotas need a plan before
  milestone 3 ships, since vision calls are the expensive part.
- Landing page hosting: Vercel assumed. Unconfirmed.