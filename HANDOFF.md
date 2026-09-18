# PULCE Connect 2026 — Design Handoff

**For:** Claude Design (claude.ai/design) · **From:** first-version build, 18 Sep 2026
**Purpose:** take the working v1 microsite, refine the visual design, and hand a bundle back for implementation.

---

## 1. Links

| | |
|---|---|
| Live participant site | https://pulce-connect.vercel.app |
| Admin console | https://pulce-connect.vercel.app/admin — email: any, password: `pulce` |
| Source (GitHub) | https://github.com/abhi020483/pulce-connect-microsite · branch `feat/pulce-connect-microsite` · [PR #1](https://github.com/abhi020483/pulce-connect-microsite/pull/1) |
| Client spec | Google Doc "ESC content" — `1b4wEdEpE155eXI9pDv5IS1UrrGZutQZNHuAI3NAukf4` |
| Brand assets (Drive) | https://drive.google.com/drive/folders/1AgHgcG5VJZQZyCuDgKPw-2b7kFmN2mmU |

## 2. What the product is

**PULCE Connect** — *Progressive Updates & Learning Symposia in Cardio-Endocrinology* — Heart Failure Educational Series. A 3-part **hybrid** meeting series across Asia for cardiologists and heart-failure specialists. A **Hetero** initiative, **endorsed by ESC** (European Society of Cardiology). Marketing arms: Hetero Healthcare · Camber · Seven Pharma · Amarox; technical support by AlphaMed.

| Chapter | Title | Venue | Date / time |
|---|---|---|---|
| 1 | Closing the GDMT Gap: From Evidence to Early Implementation | Manila, Philippines | 28 Oct 2026 · 7:00–9:00 PM PHT |
| 2 | Managing Challenging Heart Failure Patients | Bangkok, Thailand | 30 Oct 2026 · 3:00–5:00 PM ICT |
| 3 | Personalizing Cardiovascular Care Through Patient Profiling | Jakarta, Indonesia | 31 Oct 2026 · 3:30–5:30 PM WIB |

**Access model:** registration is open to all; every inner page is gated behind registration; chapters unlock **sequentially** — chapter N+1 opens only after the feedback survey for chapter N is submitted.

## 3. Brand

| Token | Value | Use |
|---|---|---|
| Hetero red | `#E0242B` (dark `#C4161C`) | Primary CTA, eyebrows, live state, accents |
| PULCE blue | `#2F5DA8` (dark `#1F4E9C`) | Secondary buttons, links, progress |
| Navy | `#17305F` | Headings on imagery, admin badge, footer text |
| Ink | `#1B2438` · `#2E3A55` · `#4C5A78` | Text hierarchy |
| Lines / backgrounds | `#E4E8F0` · `#F2F5FA` · `#FBFCFE` | Borders, cards, page |
| Gradient | `linear-gradient(94deg,#E0242B,#2F5DA8)` | Active tab, progress bar, headline |
| Type | **Manrope** 400–800 (Google Fonts) | Everything |

Logo rules (from the client): **Hetero and PULCE logos substantially visible on every page.** Current placement: header = Hetero · divider · PULCE Connect 2026 lockup, with ESC endorsement on the right; footer = partner strip + ESC endorsement.

### Assets (`assets/` in the repo, originals in Drive)
| File | What |
|---|---|
| `pulce-logo.png` | PULCE Connect 2026 campaign lockup (1858×749, transparent) |
| `hetero.png` | Hetero circle wordmark |
| `esc-endorsed.png` | "Endorsed by ESC — European Society of Cardiology" |
| `partners-strip.png` | "An educational initiative brought to you by" Hetero Healthcare · Camber · Seven Pharma · Amarox · Technical support by AlphaMed · "in the interest of Heart Failure Care" |
| `keyvisual.jpg` | Portrait key-visual (Asian skylines + heart artwork, 1400×2088) |
| `skyline.jpg` | Landscape crop of the key-visual: Manila cathedral · Bangkok Grand Palace · Jakarta Monas (1600×573) — used as landing visual and chapter hero |
| `faculty/savarese.jpg` | Dr Gianluigi Savarese portrait (the only faculty photo supplied) |

## 4. Page inventory (what to import)

The site is a single-page app. Only the landing page is visible without a session. To see the rest in an imported view: **register once, then open each hash route.**

| # | Page | Route | Key elements |
|---|---|---|---|
| 1 | Landing / Registration | `/` | Hero (title, sub-headline), skyline visual, event strip table, programme summary, "What you will learn" (3 items), trust bar, registration form (Full name · Email · Country ▼ · Role ▼ · Specialty ▼ · optional Licence · Institution · REGISTER →), "Already registered? Log in" |
| 2 | Thank you | `#thanks` | "✅ You're registered!", "Welcome to PULCE Connect, Dr. [Name]", confirmation table, "📧 A confirmation email has been sent to [email]", Go to My Dashboard →, faculty grid |
| 3 | Dashboard | `#dashboard` | "Welcome back, Dr. [Name]", "You have completed N of 3 chapters", 3 chapter status cards (✅ Completed / 🔴 Live Now / 🗓 Upcoming / 🔒 Locked), My Progress bar %, Upcoming (Add to Calendar · Join Link), My Certificates |
| 4 | Program Overview | `#overview` | 3 chapter cards (title, venue, date, faculty avatars, View Chapter →), full faculty grid |
| 5–7 | Chapter detail | `#chapter` (state-driven, ch 1/2/3) | Skyline hero with title + 📍 venue 📅 date 🎥 Hybrid, Join live session · Add to calendar, Key learning objectives (6), Faculty for this chapter, Agenda table (Time · Session · Speaker · Chair/Moderator), Selection criteria (ch 2 only), Post-session: Take chapter feedback · Download slides · Mark complete |
| 8 | Live / session | `#live` | "Chapter N — 🔴 LIVE NOW / UPCOMING / REPLAY", 16:9 stream placeholder, Now Playing, Up Next, 💬 Ask a question · 📥 Download slides |
| 9 | Feedback survey | `#feedback` | 5 questions: faces (useful) · quality (single) · relevance (single) · improve (multi) · free text; submit completes the chapter |
| 10 | Resources | `#resources` | Filters (All chapters ▼ · All types ▼ · Search 🔍), list of 7 resources with Download |
| 11 | Certificates | `#certificates` | 3 Participation certificate previews (locked until chapter done), Advanced Learning Certificate (locked until all 3), Download PDF · Share to LinkedIn, progress bar, Certificate audit trail table |
| 12 | Profile | `#profile` | Key/value table (Full Name · Email · Country · Role · Specialty · License No. · Institution), Edit profile form |
| 13 | About & Faculty | `#about` | Intro paragraph, logo lockup + tagline, 15 faculty cards (photo/initials, name, role, chapters, credentials), Endorsed by (ESC · Hetero · partner strip) |
| A | Admin (separate page) | `/admin` | Login; header with logo + Chapter/Country/Period filters; tabs Overview · Users · Geography · Certificates · Reports; KPI cards 450 / 320 / 180 / 95; chapter completion bars 85 / 65 / 40 %; role donut; country heatmap tiles; sortable/searchable participant table; live certificate log; Export CSV · Export PDF · Schedule report |

Shared chrome on every gated page: sticky header (Hetero · PULCE · ESC · user name · Log out) and a sticky tab row (Dashboard · Program Overview · Resources · Certificates · About & Faculty · Profile).

## 5. Faculty roster

| Name | Role | Chapters | Photo |
|---|---|---|---|
| Dr Gianluigi Savarese | Speaker | 1, 2, 3 | ✅ supplied |
| Dr Glenny Advincula | Speaker | 1 | placeholder |
| Dr Don | Chairperson, Philippines | 1 | placeholder |
| Dr Marion Patricio | Moderator | 1 | placeholder |
| Dr Richard Tiongco | Panelist | 1 | placeholder |
| Speaker from Bangkok · Moderator from Bangkok | — | 2 | TBA |
| Speaker from Indonesia · Moderator from Indonesia | — | 3 | TBA |
| Virtual panelists: Malaysia (1,2,3) · Indonesia (1) · Sri Lanka (2) · Cambodia (2) · Vietnam (3) · Myanmar (3) | Panelist | as listed | TBA |

Placeholders are initials in a circle; TBA ones use a dashed ring. Design should keep a **photo slot per faculty** (client asked for visual placeholders with credentials).

## 6. Design brief — what to improve

The v1 is functional and on-brand but built for speed. Priorities for the design pass:

1. **Landing page hierarchy.** The hero, skyline, event strip, summary, learn-list and trust bar currently stack in one long column beside the form. Consider a stronger above-the-fold composition (key-visual as backdrop?), and a tighter, more premium registration card.
2. **Chapter status language.** Four states (Completed / Live Now / Upcoming / Locked) need a consistent, instantly scannable visual system across dashboard cards, overview cards and the chapter hero pill.
3. **Live session page.** Make it feel like an event: bigger stream frame, agenda timeline for Now/Next, faculty strip.
4. **Certificates.** The printable certificate (A4 landscape) should look like something a cardiologist would frame — logo lockup, ESC endorsement, partner strip, signature line(s).
5. **Faculty cards.** Two sizes (compact chip on chapter pages, full card on About). Photo-first.
6. **Mobile.** Everything already collapses to one column with no overflow; keep it that way.
7. **Admin.** Fine as a utilitarian dashboard; consistent red/blue only, no new palette.

Keep: sequential-unlock model, all copy verbatim from the spec, both logos on every page, Manrope.

## 7. Decisions already taken (confirm or override)

- **Brand spelled "PULCE"** (per the logo); the spec body says "PULSE".
- **Feedback questions** (5) and **dropdown options** (country / role / specialty) were authored by us — the spec leaves them unspecified.
- **Live status is date-driven** — 🔴 LIVE appears only inside each chapter's real time window; before it, "Upcoming"; after, "Replay".
- **Certificate dates** use the real completion timestamp.
- No real photos were sourced for the named Philippine faculty (consent/licensing) — placeholders until supplied.

## 8. Technical notes for the return trip

- Static HTML / CSS / vanilla JS; no framework, no backend. Registration, progress and admin auth are `localStorage` / `sessionStorage`. Admin data is a seeded demo set.
- Files: `index.html` · `app.js` · `style.css` (participant) · `admin.html` · `admin.js` · `admin.css` · `assets/` · `vercel.json`.
- Hand back a Claude Design export bundle (the `*-handoff.zip` with `project/*.dc.html`) and it will be re-implemented onto the same Vercel URL and pushed as a follow-up PR.
