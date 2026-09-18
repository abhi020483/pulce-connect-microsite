# PULCE Connect 2026 — Heart Failure Educational Series

Participant microsite + admin console for **PULCE Connect** (Progressive Updates & Learning Symposia in Cardio-Endocrinology), a 3-part hybrid cardiovascular & heart-failure education series across Asia. A Hetero initiative, endorsed by ESC.

**Live:** https://pulce-connect.vercel.app · **Admin:** https://pulce-connect.vercel.app/admin (demo password `pulce`)

## Chapters
| # | Title | Venue | Date |
|---|---|---|---|
| 1 | Closing the GDMT Gap: From Evidence to Early Implementation | Manila | 28 Oct 2026, 7–9 PM PHT |
| 2 | Managing Challenging Heart Failure Patients | Bangkok | 30 Oct 2026, 3–5 PM ICT |
| 3 | Personalizing Cardiovascular Care Through Patient Profiling | Jakarta | 31 Oct 2026, 3:30–5:30 PM WIB |

## Participant journey
Landing / registration (open to all) → Thank-you → Dashboard → Program Overview → Chapter detail (objectives, agenda, faculty, calendar, join) → Live session page → Feedback survey → next chapter unlocks → Participation certificates → Advanced Learning Certificate after all 3. Plus Resources, Profile, About & Faculty.

## Stack
Static HTML / CSS / vanilla JS. No backend — registration, progress and admin auth live in the browser (`localStorage` / `sessionStorage`); admin data is a seeded demo set matching the spec's figures. Deployed on Vercel.

```
index.html  app.js  style.css      participant site
admin.html  admin.js admin.css     admin console
assets/                            brand assets (Hetero, PULCE logo, ESC endorsement, partners strip, key visual, faculty)
```
