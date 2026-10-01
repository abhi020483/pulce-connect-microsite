# PULCE Connect 2026 — Design Handoff

**For:** whoever picks this up next (Claude Design, another designer/developer, or the client team) · **Updated:** 1 Oct 2026

> **Status — rounds 1 and 2 complete.** The Claude Design revamp (`Pulce Connect website revamp-handoff.zip`) was implemented, followed by a full round of client design direction: white background, PULCE logo lockup in the hero and header, ONCOSPHERE-style registration card, programme content moved behind registration, light/dark themes, real faculty headshots, learning-objective cards and a phone optimisation pass. Section 3 below describes the **current** system. Everything else in this brief still applies for further rounds.

**Purpose:** hand over a complete, working microsite — source, assets, live deployment and the automation that keeps it in sync with the client's spec.

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

## 3. Brand — current system

All tokens live on `:root` in `style.css`; the dark theme redefines them under `html[data-theme="dark"]`.

| Token | Value | Use |
|---|---|---|
| Paper / white | `#FFFFFF` · `#F5F5F5` | Page and card surfaces (client: white background only) |
| Navy | `#0E1A2B` | Headings, ink, dark panels, chapter heroes |
| Burgundy | `#8E2637` | Eyebrows, rules, links, secondary CTA |
| Rose | `#E2A0AC` | Accents on dark panels |
| PULCE red | `#E01C24` (dark `#C4161C`) | Register CTA only — sampled from the logo |
| Ink | `#0E1A2B` · `#3B4654` · `#5C6675` | Text hierarchy |
| Rules | `#DCD5CA` · `#E2DACE` · `#C9BFB0` | Borders and dividers |
| State | green `#1F6B45` · amber `#8A5A00` · live `#F7E1E5` | Completed / replay / live pills |
| Type | **Mulish** 300–800 (Google Fonts) — the ESC website font | Everything |

**Dark theme:** toggled by the sun/moon button in the header, remembered per browser; `?theme=dark` / `?theme=light` force it. Page `#0B1220`, surfaces `#152238`, lifted burgundy `#D4536A`. Brand logos sit on white plates so they stay legible. Certificates always print light. The admin console stays light.

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
| `cities/{manila,bangkok,jakarta}.jpg` | Per-chapter crops of the key-visual used on chapter cards, dashboard rows and heroes |
| `cardio/ecg-paper.jpg` | Faint ECG-paper texture behind the landing hero |
| `cardio/{ecg,monitor,heart-model,heart-illustration,echo}.jpg` | Cardio imagery: statement band, live-session frame, thank-you, programme, about |
| `faculty/savarese.jpg` | Dr Gianluigi Savarese (supplied by the client) |
| `faculty/patricio.jpg` | Dr Marion Patricio — ESC 365 profile photo, used with the client's stated consent |
| `faculty/tiongco.jpg` | Dr Richard Henry Tiongco II — ManilaMed profile photo, same basis |

All three headshots are cropped to one rule: face centred, eyes on the same line, identical head-to-frame ratio, 600×600. **Still missing:** Dr Glenn Rose Advincula (hospital profile page is bot-blocked) and "Dr Don" (no surname in the spec). Both render as initials in a circle until files are dropped into `assets/faculty/` and a `photo:` path is added to `FACULTY` in `app.js`.

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
- Photos for Dr Patricio and Dr Tiongco were sourced online on the client's instruction that the faculty are participating with consent; Dr Advincula and Dr Don remain initials placeholders.
- **Login is not a real gate** — this is a static site, so "Log in" accepts any name/email without verifying a prior registration. A backend is required to fix it.
- Resident content (statement band, programme summary, what-you-will-learn, faculty) sits on **Program Overview**, behind registration; the landing page keeps hero + registration + chapter cards + partner strip.

## 8. Technical notes for the return trip

- Static HTML / CSS / vanilla JS; no framework, no backend. Registration, progress and admin auth are `localStorage` / `sessionStorage`. Admin data is a seeded demo set.
- Files: `index.html` · `app.js` · `style.css` (participant) · `admin.html` · `admin.js` · `admin.css` · `assets/` · `vercel.json`.
- Hand back a Claude Design export bundle (the `*-handoff.zip` with `project/*.dc.html`) and it will be re-implemented onto the same Vercel URL and pushed as a follow-up PR.

## 9. Deployment and sync automation

- **Vercel ← GitHub.** The Vercel project `pulce-connect` is linked to the repo with its **production branch set to `feat/pulce-connect-microsite`** (not `main`, which is only an empty scaffold). Every push to that branch auto-deploys to https://pulce-connect.vercel.app.
- **Spec mirror.** `.github/workflows/mirror-spec.yml` (lives on `main`, because GitHub only schedules workflows from the default branch) exports the client's Google Doc as plain text every 15 minutes and commits `spec.txt` to the site branch when it changes.
- **Corrections routine.** A cloud routine runs every 6 hours, reads `spec.txt`, takes everything after the last heading containing "CORRECTIONS", diffs it against `.corrections-seen.txt`, applies genuinely new items to the site and pushes them to the site branch (commits prefixed `Apply doc corrections:`). It never edits `spec.txt`, `.github/` or `main`. The client adds change requests by appending them under that heading at the end of the doc.
- To hand this to someone else: they need write access to the GitHub repo and the Vercel project; the routine is tied to the account that created it and would need recreating.
