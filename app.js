/* PULCE Connect — Heart Failure Educational Series
   Landing/Registration → Thank you → Dashboard → Overview → Chapter → Live / Feedback → Certificates */
(() => {
  'use strict';

  /* ================================================================ DATA */
  const CHAPTERS = [
    {
      n: 1, city: 'Manila', country: 'Philippines', venue: 'Manila, Philippines',
      title: 'Closing the GDMT Gap: From Evidence to Early Implementation',
      short: 'Closing the GDMT Gap',
      date: '28 October 2026', dateShort: '28 Oct 2026', time: '7:00–9:00 PM PHT',
      start: '2026-10-28T19:00:00+08:00', end: '2026-10-28T21:00:00+08:00', tz: 'Asia/Manila',
      objectives: [
        'Understand the current treatment gap in Heart Failure and its impact on patient outcomes',
        'Review the latest evidence supporting early and comprehensive initiation of Guideline-Directed Medical Therapy (GDMT) in HFrEF patients',
        'Recognize the clinical benefits of rapid GDMT implementation compared with traditional sequential treatment approaches',
        'Identify barriers leading to clinical inertia and delayed optimization of heart failure therapy',
        'Explore practical strategies to ensure seamless transition from hospital-based care to long-term outpatient management while maintaining GDMT adherence',
        'Develop actionable approaches for translating guideline recommendations into routine clinical practice to improve patient survival and quality of life'
      ],
      agenda: [
        ['19:00–19:05', 'Welcome & Introduction of PULCE Connect', 'Hetero Corporate', '—'],
        ['19:05–19:15', 'Welcome Remark & Brief — Bridging the Heart Failure Treatment Gap', '—', 'Dr Don, Chairperson @Philippines'],
        ['19:15–19:45', 'Closing the GDMT Gap: From Evidence to Early Implementation — Why Early Initiation Matters: Evidence Supporting Rapid GDMT Implementation', 'Dr Gianluigi Savarese', 'Dr Marion Patricio'],
        ['19:45–20:00', 'Rapid GDMT Implementation in Heart Failure: Why Waiting Costs Lives (Early initiation versus sequential therapy)', 'Dr Glenny Advincula', '—'],
        ['20:00–20:20', 'Panel Discussion: From Hospital to Home — Overcoming Clinical Inertia in Heart Failure Management', 'Panelists: Dr from Malaysia (Virtual) · Dr from Indonesia (Virtual) · Dr Richard Tiongco · Dr Gianluigi Savarese', 'Dr Marion Patricio'],
        ['20:20–20:30', 'Q&A', '—', '—'],
        ['20:30–20:35', 'Take Home Message', '—', 'Dr Don, Chairperson @Philippines'],
        ['20:35–20:40', 'Closing Note — Day 1', 'Country Team', '—']
      ],
      faculty: ['savarese', 'advincula', 'don', 'patricio', 'tiongco', 'panel-my', 'panel-id'],
      nowPlaying: 2, upNext: [4, 5, 6]
    },
    {
      n: 2, city: 'Bangkok', country: 'Thailand', venue: 'Bangkok, Thailand',
      title: 'Managing Challenging Heart Failure Patients',
      short: 'Managing Challenging HF Patients',
      date: '30 October 2026', dateShort: '30 Oct 2026', time: '3:00–5:00 PM ICT',
      start: '2026-10-30T15:00:00+07:00', end: '2026-10-30T17:00:00+07:00', tz: 'Asia/Bangkok',
      objectives: [
        'Understand the challenges of implementing GDMT in complex heart failure patients with low blood pressure, chronic kidney disease, and other high-risk clinical conditions',
        'Learn evidence-based approaches for optimizing heart failure therapies in patients with multiple comorbidities',
        'Evaluate practical titration strategies to achieve target doses while maintaining safety and tolerability',
        'Gain confidence in managing treatment-related concerns such as hypotension, renal dysfunction, electrolyte imbalance, and drug interactions',
        'Discuss real-world barriers to GDMT implementation and explore solutions from regional and international expert experiences',
        'Apply guideline recommendations effectively in challenging clinical scenarios to maximize patient outcomes'
      ],
      agenda: [
        ['15:00–15:10', 'Welcome Note & Brief on Day 1 Agenda: Closing the GDMT Gap', '—', 'Moderator from Bangkok'],
        ['15:15–15:45', 'Navigating GDMT in Complex Heart Failure Patients: Low Blood Pressure, CKD and Other Clinical Challenges', 'Dr Gianluigi Savarese', 'Moderator from Bangkok'],
        ['15:45–16:10', 'Optimizing Guideline-Directed Therapy in Heart Failure with Multiple Comorbidities', 'Speaker from Bangkok', '—'],
        ['16:10–16:30', 'Panel Discussion: From Guidelines to Practice — Practical Titration Strategies and Overcoming Treatment Barriers', 'Panelists: Dr from Sri Lanka (Virtual) · Dr from Malaysia (Virtual) · Dr from Cambodia (Virtual) · Dr Gianluigi Savarese', 'Moderator from Bangkok'],
        ['16:30–16:40', 'Q&A', '—', '—'],
        ['16:40–16:45', 'Take Home Message', '—', 'Moderator from Bangkok'],
        ['16:45–16:50', 'Thank You Note', 'Country Team', '—']
      ],
      criteria: [
        ['Moderator', 'Top KOL or Subject Matter Expert from the country, 20+ years experience, authority to influence other HCPs'],
        ['Speaker & Panel', 'Cardiologists with minimum 12+ years experience']
      ],
      faculty: ['savarese', 'speaker-bkk', 'mod-bkk', 'panel-lk', 'panel-my', 'panel-kh'],
      nowPlaying: 1, upNext: [3, 4, 5]
    },
    {
      n: 3, city: 'Jakarta', country: 'Indonesia', venue: 'Jakarta, Indonesia',
      title: 'Personalizing Cardiovascular Care Through Patient Profiling',
      short: 'Personalizing CV Care',
      date: '31 October 2026', dateShort: '31 Oct 2026', time: '3:30–5:30 PM WIB',
      start: '2026-10-31T15:30:00+07:00', end: '2026-10-31T17:30:00+07:00', tz: 'Asia/Jakarta',
      objectives: [
        'Understand the role of patient profiling in enabling individualized cardiovascular and heart failure treatment decisions',
        'Identify the most appropriate heart failure patient populations for ARNI therapy across different stages of the treatment journey',
        'Learn how clinical characteristics, risk factors, and comorbidities influence therapeutic selection and outcomes',
        'Develop a precision medicine approach for balancing thrombotic and bleeding risks in cardiovascular patients',
        'Translate patient profiles into evidence-based therapeutic choices to achieve better clinical outcomes',
        'Explore emerging concepts in personalized cardiovascular medicine and their application in everyday practice'
      ],
      agenda: [
        ['15:30–15:40', 'Welcome Note & Brief on Day 2 Agenda: Managing Challenging Heart Failure Patients', '—', 'Moderator from Indonesia'],
        ['15:40–16:10', 'Personalizing Cardiovascular Care Through Patient Profiling — The Right Heart Failure Patient for the Right Therapy: Positioning ARNI Across the Patient Journey', 'Dr Gianluigi Savarese', 'Moderator from Indonesia'],
        ['16:10–16:35', 'Balancing Bleeding and Thrombotic Risk: A Precision Medicine Approach', 'Speaker from Indonesia', '—'],
        ['16:35–16:55', 'Panel Discussion: Precision-Based Cardiovascular Care — Translating Patient Profiles into Therapeutic Decisions', 'Panelists: Dr from Malaysia (Virtual) · Dr from Vietnam (Virtual) · Dr from Myanmar (Virtual) · Dr Gianluigi Savarese', 'Moderator from Indonesia'],
        ['16:55–17:05', 'Q&A', '—', '—'],
        ['17:05–17:10', 'Take Home Message', '—', 'Moderator from Indonesia'],
        ['17:10–17:15', 'Thank You Note', 'Country Team', '—']
      ],
      faculty: ['savarese', 'speaker-id', 'mod-id', 'panel-my', 'panel-vn', 'panel-mm'],
      nowPlaying: 1, upNext: [3, 4, 5]
    }
  ];

  const FACULTY = {
    'savarese':    { name: 'Dr Gianluigi Savarese', role: 'Speaker', chapters: [1, 2, 3], photo: 'assets/faculty/savarese.jpg', cred: 'Karolinska Institutet, Stockholm · Heart failure specialist' },
    'advincula':   { name: 'Dr Glenny Advincula', role: 'Speaker', chapters: [1], cred: 'Cardiologist, Philippines' },
    'don':         { name: 'Dr Don', role: 'Chairperson, Philippines', chapters: [1], cred: 'Chairperson · Philippines' },
    'patricio':    { name: 'Dr Marion Patricio', role: 'Moderator', chapters: [1], cred: 'Cardiologist, Philippines' },
    'tiongco':     { name: 'Dr Richard Tiongco', role: 'Panelist', chapters: [1], cred: 'Cardiologist, Philippines' },
    'speaker-bkk': { name: 'Speaker from Bangkok', role: 'Speaker', chapters: [2], cred: 'Cardiologist, Thailand · To be announced', tba: true },
    'mod-bkk':     { name: 'Moderator from Bangkok', role: 'Moderator', chapters: [2], cred: 'Top KOL, Thailand · To be announced', tba: true },
    'speaker-id':  { name: 'Speaker from Indonesia', role: 'Speaker', chapters: [3], cred: 'Cardiologist, Indonesia · To be announced', tba: true },
    'mod-id':      { name: 'Moderator from Indonesia', role: 'Moderator', chapters: [3], cred: 'Top KOL, Indonesia · To be announced', tba: true },
    'panel-my':    { name: 'Panelist — Malaysia', role: 'Panelist (Virtual)', chapters: [1, 2, 3], cred: 'To be announced', tba: true },
    'panel-id':    { name: 'Panelist — Indonesia', role: 'Panelist (Virtual)', chapters: [1], cred: 'To be announced', tba: true },
    'panel-lk':    { name: 'Panelist — Sri Lanka', role: 'Panelist (Virtual)', chapters: [2], cred: 'To be announced', tba: true },
    'panel-kh':    { name: 'Panelist — Cambodia', role: 'Panelist (Virtual)', chapters: [2], cred: 'To be announced', tba: true },
    'panel-vn':    { name: 'Panelist — Vietnam', role: 'Panelist (Virtual)', chapters: [3], cred: 'To be announced', tba: true },
    'panel-mm':    { name: 'Panelist — Myanmar', role: 'Panelist (Virtual)', chapters: [3], cred: 'To be announced', tba: true }
  };
  const FACULTY_ORDER = ['savarese', 'advincula', 'don', 'patricio', 'tiongco', 'speaker-bkk', 'mod-bkk', 'speaker-id', 'mod-id', 'panel-my', 'panel-id', 'panel-lk', 'panel-kh', 'panel-vn', 'panel-mm'];

  const RESOURCES = [
    { title: 'Closing the GDMT Gap — Slides', ch: 1, type: 'PDF', size: '4.2 MB' },
    { title: 'Managing Challenging HF Patients — Slides', ch: 2, type: 'PDF', size: '3.8 MB' },
    { title: 'Personalizing CV Care — Slides', ch: 3, type: 'PDF', size: '3.5 MB' },
    { title: 'GDMT Quick Reference Guide', ch: 0, type: 'PDF', size: '1.1 MB' },
    { title: 'ARNI Positioning Guide', ch: 0, type: 'PDF', size: '0.9 MB' },
    { title: 'Post-event Synopsis', ch: 0, type: 'PDF', size: '2.0 MB' },
    { title: 'Highlight Videos', ch: 0, type: 'MP4', size: '180 MB' }
  ];

  const FEEDBACK = [
    { key: 'useful',    type: 'faces',  q: 'Was this chapter useful?', options: ['😞', '👎', '😐', '👍', '😄'], hint: 'Tap one face' },
    { key: 'quality',   type: 'single', q: 'How would you rate the overall quality of the session?', options: ['Excellent', 'Good', 'Average', 'Poor', 'Very poor'], hint: 'Select one' },
    { key: 'relevance', type: 'single', q: 'How relevant was the content to your day-to-day practice?', options: ['Extremely relevant', 'Very relevant', 'Moderately relevant', 'Slightly relevant', 'Not relevant'], hint: 'Select one' },
    { key: 'improve',   type: 'multi',  q: 'What should we improve?', options: ['More case discussions', 'Shorter sessions', 'More Q&A time', 'Better visuals', 'More regional data', 'Nothing — it was good'], hint: 'Tap all that apply' },
    { key: 'change',    type: 'text',   q: 'Will this session change anything in your practice? (optional)', hint: 'One or two lines' }
  ];

  const COUNTRIES = ['Philippines', 'Thailand', 'Indonesia', 'Malaysia', 'Singapore', 'Vietnam', 'Cambodia', 'Myanmar', 'Sri Lanka', 'Bangladesh', 'Nepal', 'India', 'Other'];
  const ROLES = ['Cardiologist', 'Heart failure specialist', 'Internal medicine physician', 'General practitioner', 'Cardiology fellow / resident', 'Nurse / allied health', 'Pharmacist', 'Other'];
  const SPECIALTIES = ['Heart failure', 'Interventional cardiology', 'Clinical cardiology', 'Cardio-endocrinology', 'Electrophysiology', 'Cardiac imaging', 'Internal medicine', 'Other'];

  const TABS = [['dashboard', 'Dashboard'], ['overview', 'Program Overview'], ['resources', 'Resources'], ['certificates', 'Certificates'], ['about', 'About & Faculty'], ['profile', 'Profile']];
  const VIEWS = ['landing', 'thanks', 'dashboard', 'overview', 'chapter', 'live', 'feedback', 'resources', 'certificates', 'profile', 'about'];
  const LS_USER = 'pulce.user', LS_PROG = 'pulce.progress';

  /* =============================================================== STATE */
  const state = {
    view: 'landing',
    user: load(LS_USER),
    progress: Object.assign({ feedback: {}, completedAt: {} }, load(LS_PROG) || {}),
    chapter: 0,
    fb: {},
    editing: false,
    resFilter: { ch: 'all', type: 'all', q: '' }
  };
  function load(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } }
  function save(k, v) { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch {} }

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const isDone = (i) => state.progress.feedback[i] != null;
  const isUnlocked = (i) => i === 0 || isDone(i - 1);
  const doneCount = () => CHAPTERS.filter((_, i) => isDone(i)).length;
  const fmtDate = (d = new Date()) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const drName = () => { const n = (state.user?.name || '').trim(); return /^dr\.?\s/i.test(n) ? n : 'Dr. ' + n; };
  const initials = (n) => n.replace(/^(Dr\.?|Panelist|Speaker|Moderator)\s*(from|—)?\s*/i, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('') || 'TBA';

  /** live status of a chapter: 'done' | 'live' | 'upcoming' | 'replay' | 'locked' */
  function status(i) {
    if (isDone(i)) return 'done';
    if (!isUnlocked(i)) return 'locked';
    const c = CHAPTERS[i], now = Date.now(), s = Date.parse(c.start), e = Date.parse(c.end);
    if (now >= s && now <= e) return 'live';
    return now > e ? 'replay' : 'upcoming';
  }
  const STATUS_LABEL = { done: '✅ Completed', live: '🔴 Live Now', upcoming: '🗓 Upcoming', replay: '▶ Replay available', locked: '🔒 Locked' };

  /* ========================================================== NAVIGATION */
  function go(view, { push = true } = {}) {
    if (!VIEWS.includes(view)) view = 'landing';
    if (!state.user && view !== 'landing') view = 'landing';
    if (state.user && view === 'landing') view = 'dashboard';
    state.view = view;
    if (push) history.pushState(null, '', view === 'landing' ? location.pathname : '#' + view);
    render();
    window.scrollTo({ top: 0 });
  }
  function openChapter(i, view = 'chapter') {
    if (!isUnlocked(i)) return;
    state.chapter = i; state.fb = {};
    go(view);
  }

  /* ============================================================== RENDER */
  function render() {
    const v = state.view;
    document.body.classList.toggle('registered', !!state.user);
    document.querySelectorAll('[data-view]').forEach((el) => { el.hidden = el.dataset.view !== v; });
    document.title = (v === 'landing' ? 'Register' : titleFor(v)) + ' · PULCE Connect 2026';

    $('hdr-auth').innerHTML = state.user
      ? `<span class="hdr-user">${esc(drName())}</span><button class="btn btn-outline sm" data-logout>Log out</button>`
      : `<button class="btn btn-primary sm" data-show-login>Log in</button>`;
    $('tabs').innerHTML = state.user ? TABS.map(([id, label]) => {
      const active = v === id || (id === 'overview' && ['chapter', 'live', 'feedback'].includes(v));
      return `<button class="tab${active ? ' active' : ''}" data-go="${id}"${active ? ' aria-current="page"' : ''}>${label}</button>`;
    }).join('') : '';

    if (v === 'landing') renderLanding();
    if (v === 'thanks') renderThanks();
    if (v === 'dashboard') renderDashboard();
    if (v === 'overview') renderOverview();
    if (v === 'chapter') renderChapter();
    if (v === 'live') renderLive();
    if (v === 'feedback') renderFeedback();
    if (v === 'resources') renderResources();
    if (v === 'certificates') renderCertificates();
    if (v === 'profile') renderProfile();
    if (v === 'about') renderAbout();
  }
  function titleFor(v) {
    return { thanks: 'Registered', dashboard: 'Dashboard', overview: 'Program Overview', chapter: 'Chapter ' + (state.chapter + 1), live: 'Live Session', feedback: 'Feedback', resources: 'Resources', certificates: 'Certificates', profile: 'Profile', about: 'About & Faculty' }[v] || 'PULCE Connect';
  }

  const eventRows = (cls = '') => CHAPTERS.map((c) => `<tr class="${cls}"><td><b>Chapter ${c.n}</b></td><td>${c.venue}</td><td>${c.date}</td><td>${c.time}</td></tr>`).join('');
  const facultyCard = (id, size = '') => {
    const f = FACULTY[id];
    return `<div class="fac ${size}${f.tba ? ' tba' : ''}">
      <div class="fac-photo">${f.photo ? `<img src="${f.photo}" alt="${esc(f.name)}">` : `<span>${initials(f.name)}</span>`}</div>
      <div class="fac-body"><b>${esc(f.name)}</b><span>${esc(f.role)}${f.chapters.length ? ' · Chapter' + (f.chapters.length > 1 ? 's ' : ' ') + f.chapters.join(', ') : ''}</span><small>${esc(f.cred)}</small></div>
    </div>`;
  };

  /* ---- Landing ---- */
  function renderLanding() {
    $('land-events').innerHTML = eventRows();
    $('land-faculty').innerHTML = ['savarese', 'advincula', 'don', 'patricio', 'tiongco'].map((id) => `<span class="fac-chip">${esc(FACULTY[id].name)}</span>`).join('');
    const c = $('reg-country');
    if (!c.options.length) {
      c.innerHTML = '<option value="">Select country</option>' + COUNTRIES.map((x) => `<option>${x}</option>`).join('');
      $('reg-role').innerHTML = '<option value="">Select role</option>' + ROLES.map((x) => `<option>${x}</option>`).join('');
      $('reg-specialty').innerHTML = '<option value="">Select specialty</option>' + SPECIALTIES.map((x) => `<option>${x}</option>`).join('');
    }
  }

  /* ---- Thank you ---- */
  function renderThanks() {
    $('thanks-name').textContent = 'Welcome to PULCE Connect, ' + drName();
    $('thanks-email').textContent = state.user.email || '';
    $('thanks-events').innerHTML = eventRows();
    $('thanks-faculty').innerHTML = FACULTY_ORDER.slice(0, 9).map((id) => facultyCard(id, 'sm')).join('');
  }

  /* ---- Dashboard ---- */
  function renderDashboard() {
    const n = doneCount();
    $('dash-welcome').textContent = 'Welcome back, ' + drName();
    $('dash-sub').textContent = `You have completed ${n} of 3 chapters.`;
    $('dash-cards').innerHTML = CHAPTERS.map((c, i) => {
      const s = status(i);
      const action = s === 'locked' ? '<span class="muted">Complete the previous chapter to unlock</span>'
        : s === 'live' ? `<button class="btn btn-live md" data-chapter="${i}" data-target="live">Join Now</button>`
        : s === 'done' ? `<button class="btn btn-outline md" data-chapter="${i}">View</button>`
        : `<button class="btn btn-primary md" data-chapter="${i}">View chapter →</button>`;
      return `<div class="card ch-card s-${s}${s === 'locked' ? ' locked' : ''}">
        <div class="ch-n">Chapter ${c.n}</div><b>${esc(c.title)}</b>
        <div class="ch-meta"><span>📍 ${c.city}</span><span>📅 ${c.dateShort}</span></div>
        <div class="ch-status">${STATUS_LABEL[s]}</div><div class="ch-action">${action}</div></div>`;
    }).join('');
    const pct = Math.round(n / 3 * 100);
    $('dash-bar').style.width = pct + '%'; $('dash-pct').textContent = pct + '%';
    const next = CHAPTERS.findIndex((_, i) => !isDone(i));
    if (next === -1) $('dash-upcoming').innerHTML = '<p>All three chapters complete — your Advanced Learning Certificate is ready.</p><button class="btn btn-primary md" data-go="certificates">View certificates →</button>';
    else { const c = CHAPTERS[next]; $('dash-upcoming').innerHTML = `<p><b>Chapter ${c.n} — ${c.city}</b> | ${c.dateShort} | ${c.time.split('–')[0].trim()}</p><div class="btn-row"><button class="btn btn-outline md" data-ics="${next}">📅 Add to Calendar</button><button class="btn btn-primary md" data-chapter="${next}" data-target="live">🔗 Join Link</button></div>`; }
    $('dash-certs').innerHTML = n === 0 ? '<p class="muted">No certificates yet. Complete all 3 chapters to earn your Advanced Learning Certificate.</p>'
      : `<p>${n} participation certificate${n > 1 ? 's' : ''} available${n === 3 ? ' · Advanced Learning Certificate unlocked' : ''}.</p><button class="btn btn-outline md" data-go="certificates">My certificates →</button>`;
  }

  /* ---- Overview ---- */
  function renderOverview() {
    $('ov-chapters').innerHTML = CHAPTERS.map((c, i) => {
      const s = status(i);
      return `<div class="card ov-ch${s === 'locked' ? ' locked' : ''}"><div class="ov-ch-head"><span class="ch-n">Chapter ${c.n}</span><span class="pill-status s-${s}">${STATUS_LABEL[s]}</span></div>
        <h3>${esc(c.title)}</h3>
        <div class="ch-meta"><span>📍 ${c.venue}</span><span>📅 ${c.date} | ${c.time}</span></div>
        <div class="ov-fac">${c.faculty.slice(0, 4).map((id) => `<span class="fac-mini" title="${esc(FACULTY[id].name)}">${FACULTY[id].photo ? `<img src="${FACULTY[id].photo}" alt="">` : initials(FACULTY[id].name)}</span>`).join('')}</div>
        <button class="btn btn-primary md" data-chapter="${i}" ${s === 'locked' ? 'disabled' : ''}>View Chapter →</button></div>`;
    }).join('');
    $('ov-faculty').innerHTML = FACULTY_ORDER.map((id) => facultyCard(id, 'sm')).join('');
  }

  /* ---- Chapter detail ---- */
  function renderChapter() {
    const i = state.chapter, c = CHAPTERS[i], s = status(i);
    $('ch-n').textContent = 'Chapter ' + c.n;
    $('ch-title').textContent = c.title;
    $('ch-venue').textContent = c.venue; $('ch-date').textContent = `${c.date} | ${c.time}`;
    $('ch-status').innerHTML = `<span class="pill-status s-${s}">${STATUS_LABEL[s]}</span>`;
    $('ch-objectives').innerHTML = c.objectives.map((o) => `<li>${esc(o)}</li>`).join('');
    $('ch-agenda').innerHTML = c.agenda.map(([t, sess, sp, mod]) => `<tr><td class="mono">${t}</td><td>${esc(sess)}</td><td>${esc(sp)}</td><td>${esc(mod)}</td></tr>`).join('');
    $('ch-faculty').innerHTML = c.faculty.map((id) => facultyCard(id, 'sm')).join('');
    $('ch-criteria').hidden = !c.criteria;
    if (c.criteria) $('ch-criteria-rows').innerHTML = c.criteria.map(([r, d]) => `<tr><td><b>${r}</b></td><td>${esc(d)}</td></tr>`).join('');
    $('ch-join').textContent = s === 'live' ? '🔴 Join live session' : s === 'replay' || s === 'done' ? '▶ Watch replay' : 'Join live session';
    $('ch-join').classList.toggle('btn-live', s === 'live');
    $('ch-join').dataset.chapter = i; $('ch-ics').dataset.ics = i;
    $('ch-feedback').textContent = isDone(i) ? 'Feedback submitted ✓' : 'Take chapter feedback →';
    $('ch-feedback').disabled = isDone(i); $('ch-feedback').dataset.chapter = i;
    $('ch-complete').hidden = isDone(i);
  }

  /* ---- Live / session page ---- */
  function renderLive() {
    const i = state.chapter, c = CHAPTERS[i], s = status(i);
    $('live-n').innerHTML = `Chapter ${c.n} — ${s === 'live' ? '<span class="live-tag">🔴 LIVE NOW</span>' : s === 'upcoming' ? 'UPCOMING' : 'REPLAY'}`;
    $('live-title').textContent = c.title;
    $('live-embed').innerHTML = s === 'live'
      ? `<div class="embed-msg"><span class="live-dot"></span>LIVE<small>Stream player embeds here (Zoom / YouTube Live / Vimeo)</small></div>`
      : s === 'upcoming' ? `<div class="embed-msg">📺<small>The live stream opens on ${c.date} at ${c.time.split('–')[0].trim()} ${c.time.split(' ').pop()}</small></div>`
      : `<div class="embed-msg">▶<small>Session replay — player embeds here after the event</small></div>`;
    const np = c.agenda[c.nowPlaying];
    $('live-now').innerHTML = `<b>${esc(np[1])}</b><span>Speaker: ${esc(np[2] === '—' ? np[3] : np[2])}</span>`;
    $('live-next').innerHTML = c.upNext.map((k) => `<li><span class="mono">${c.agenda[k][0].split('–')[0]}</span>${esc(c.agenda[k][1].split(':')[0])}</li>`).join('');
    $('live-back').dataset.chapter = i;
  }

  /* ---- Feedback ---- */
  function renderFeedback() {
    const i = state.chapter, c = CHAPTERS[i];
    $('fb-n').textContent = `Chapter ${c.n} · ${c.city}`;
    $('fb-title').textContent = c.title;
    $('fb-body').innerHTML = FEEDBACK.map((q, qi) => {
      const val = state.fb[q.key];
      let body;
      if (q.type === 'text') body = `<textarea class="input" rows="3" data-fbtext="${q.key}" placeholder="Type here…">${esc(val || '')}</textarea>`;
      else {
        const cls = q.type === 'faces' ? 'faces' : q.type === 'multi' ? 'checks' : 'singles';
        body = `<div class="${cls}">${q.options.map((o, oi) => {
          const on = q.type === 'multi' ? (val || []).includes(oi) : val === oi;
          return `<button type="button" class="fb-opt${on ? ' on' : ''}" data-fb="${q.key}" data-o="${oi}" data-type="${q.type}">${q.type === 'multi' ? '<span class="box"></span>' : q.type === 'single' ? '<span class="radio"></span>' : ''}${o}</button>`;
        }).join('')}</div>`;
      }
      return `<div class="qblock"><div class="qtext">${qi + 1}. ${esc(q.q)}</div><div class="qhint">${q.hint}</div>${body}</div>`;
    }).join('');
    const complete = FEEDBACK.filter((q) => q.type !== 'text').every((q) => state.fb[q.key] != null && (q.type !== 'multi' || state.fb[q.key].length));
    $('fb-submit').disabled = !complete;
    $('fb-submit').textContent = i < 2 ? 'Submit feedback & complete chapter →' : 'Submit feedback & unlock certificate →';
  }

  /* ---- Resources ---- */
  function renderResources() {
    const f = state.resFilter;
    const rows = RESOURCES.filter((r) => (f.ch === 'all' || String(r.ch) === f.ch) && (f.type === 'all' || r.type === f.type) && (!f.q || r.title.toLowerCase().includes(f.q)));
    $('res-list').innerHTML = rows.map((r) => `<div class="card res"><span class="res-icon">${r.type === 'MP4' ? '🎬' : '📄'}</span><div class="res-text"><b>${esc(r.title)}</b><span>${r.ch ? 'Chapter ' + r.ch : 'All chapters'} · ${r.type} · ${r.size}</span></div><button class="btn btn-soft" data-download="${esc(r.title)}">Download</button></div>`).join('') || '<p class="muted">No resources match.</p>';
    $('res-ch').value = f.ch; $('res-type').value = f.type;
  }

  /* ---- Certificates ---- */
  function renderCertificates() {
    const n = doneCount(), u = state.user, pct = Math.round(n / 3 * 100);
    $('cert-part-list').innerHTML = CHAPTERS.map((c, i) => {
      const done = isDone(i), d = done ? new Date(state.progress.completedAt[i]) : null;
      return `<div class="card cert${done ? '' : ' locked'}">
        <div class="cert-preview" data-cert="p${i}">
          <div class="cp-logos"><img src="assets/pulce-logo.png" alt="PULCE Connect"><img src="assets/hetero.png" alt="Hetero"><img src="assets/esc-endorsed.png" alt="Endorsed by ESC"></div>
          <div class="cp-kicker">Participation Certificate</div><div class="cp-awarded">This certifies that</div>
          <div class="cp-name">${esc(drName())}</div>
          <div class="cp-awarded">participated in Chapter ${c.n} — ${c.city}</div><div class="cp-prog">${esc(c.title)}</div>
          <div class="cp-date">${c.date} · Issued ${done ? fmtDate(d) : '—'}</div>
          <img class="cp-strip" src="assets/partners-strip.png" alt="Partners">
        </div>
        <div class="cert-foot"><div><b>🏆 Participation Certificate</b><span>For completing Chapter ${c.n} — ${c.city} · Status: ${done ? '✅ Available' : '🔒 Locked — complete Chapter ' + c.n}</span></div>
        <div class="btn-row"><button class="btn btn-primary md" data-print="p${i}" ${done ? '' : 'disabled'}>Download PDF</button><a class="btn btn-outline md${done ? '' : ' disabled'}" target="_blank" rel="noopener" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.origin + location.pathname)}">Share to LinkedIn</a></div></div>
      </div>`;
    }).join('');
    const all = n === 3;
    $('cert-adv').classList.toggle('locked', !all);
    $('cert-adv-status').innerHTML = all ? '✅ Available' : `🔒 Locked — complete all chapters`;
    $('cert-adv-progress').innerHTML = `Progress: ${n} of 3 chapters completed<div class="bar"><i style="width:${pct}%"></i></div><span class="pct">${pct}%</span>`;
    $('ca-name').textContent = drName();
    const stamps = Object.values(state.progress.completedAt).map((d) => new Date(d)).sort((a, b) => b - a);
    $('ca-date').textContent = 'Issued ' + fmtDate(all ? stamps[0] : new Date());
    $('cert-adv-btn').disabled = !all;
    const trail = CHAPTERS.map((c, i) => isDone(i) ? { d: new Date(state.progress.completedAt[i]), type: 'Participation', ch: 'Chapter ' + c.n, k: 'p' + i } : null).filter(Boolean);
    if (all) trail.push({ d: stamps[0], type: 'Advanced Learning', ch: 'All 3', k: 'adv' });
    $('cert-trail').innerHTML = trail.length ? trail.sort((a, b) => a.d - b.d).map((t) => `<tr><td>${t.d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td><td>${t.type}</td><td>${t.ch}</td><td><button class="link" data-print="${t.k}">✅ Download</button></td></tr>`).join('') : '<tr><td colspan="4" class="muted">No certificates issued yet.</td></tr>';
  }

  /* ---- Profile ---- */
  function renderProfile() {
    const u = state.user, f = $('profile-form');
    $('profile-view').hidden = state.editing; f.hidden = !state.editing;
    $('profile-rows').innerHTML = [['Full Name', drName()], ['Email', u.email], ['Country', u.country], ['Role', u.role], ['Specialty', u.specialty], ['License No.', u.license || '—'], ['Institution', u.institution || '—']].map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join('');
    if (state.editing) {
      if (!f.country.options.length) { f.country.innerHTML = COUNTRIES.map((x) => `<option>${x}</option>`).join(''); f.role.innerHTML = ROLES.map((x) => `<option>${x}</option>`).join(''); f.specialty.innerHTML = SPECIALTIES.map((x) => `<option>${x}</option>`).join(''); }
      f.name.value = u.name; f.email.value = u.email; f.country.value = u.country; f.role.value = u.role; f.specialty.value = u.specialty; f.license.value = u.license || ''; f.institution.value = u.institution || '';
    }
  }

  /* ---- About / faculty ---- */
  function renderAbout() { $('about-faculty').innerHTML = FACULTY_ORDER.map((id) => facultyCard(id)).join(''); }

  /* ------------------------------------------------------- Calendar (.ics) */
  function downloadIcs(i) {
    const c = CHAPTERS[i], f = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PULCE Connect//EN', 'BEGIN:VEVENT', `UID:pulce-ch${c.n}@hetero`, `DTSTAMP:${f(new Date().toISOString())}`, `DTSTART:${f(c.start)}`, `DTEND:${f(c.end)}`, `SUMMARY:PULCE Connect — Chapter ${c.n}: ${c.title}`, `LOCATION:${c.venue} (Hybrid)`, `DESCRIPTION:Heart Failure Educational Series. Join link: ${location.origin}${location.pathname}#live`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = `pulce-connect-chapter-${c.n}.ics`; a.click();
  }

  /* ============================================================== EVENTS */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-chapter],[data-ics],[data-fb],[data-print],[data-download],[data-logout],[data-show-login],[data-show-register],[data-edit],#fb-submit,#ch-complete');
    if (!t) return;
    if (t.classList.contains('disabled')) { e.preventDefault(); return; }

    if (t.dataset.logout != null) { state.user = null; save(LS_USER, null); state.progress = { feedback: {}, completedAt: {} }; save(LS_PROG, null); $('reg-form').reset(); showLogin(false); return go('landing'); }
    if (t.dataset.showLogin != null) return showLogin(true);
    if (t.dataset.showRegister != null) return showLogin(false);
    if (t.dataset.go) return go(t.dataset.go);
    if (t.dataset.chapter !== undefined) return openChapter(+t.dataset.chapter, t.dataset.target || (t.id === 'ch-feedback' || t.id === 'ch-complete' ? 'feedback' : t.id === 'ch-join' ? 'live' : 'chapter'));
    if (t.dataset.ics !== undefined) return downloadIcs(+t.dataset.ics);
    if (t.dataset.edit != null) { state.editing = !state.editing; return render(); }
    if (t.dataset.download) { toast(`"${t.dataset.download}" will download once the file is published.`); return; }
    if (t.dataset.print) { document.body.dataset.print = t.dataset.print; window.print(); return; }

    if (t.dataset.fb) {
      const k = t.dataset.fb, o = +t.dataset.o;
      if (t.dataset.type === 'multi') { const cur = new Set(state.fb[k] || []); cur.has(o) ? cur.delete(o) : cur.add(o); state.fb[k] = [...cur]; }
      else state.fb[k] = o;
      return render();
    }
    if (t.id === 'fb-submit') {
      state.progress.feedback[state.chapter] = state.fb; state.progress.completedAt[state.chapter] = new Date().toISOString(); save(LS_PROG, state.progress);
      return go(state.chapter < 2 ? 'dashboard' : 'certificates');
    }
  });
  document.addEventListener('input', (e) => { const t = e.target; if (t.dataset.fbtext) state.fb[t.dataset.fbtext] = t.value; });

  // Registration
  $('reg-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target), name = String(f.get('name') || '').trim();
    if (!name || !f.get('email') || !f.get('country') || !f.get('role') || !f.get('specialty')) { e.target.reportValidity(); return; }
    state.user = { name, email: f.get('email'), country: f.get('country'), role: f.get('role'), specialty: f.get('specialty'), license: f.get('license') || '', institution: f.get('institution') || '', registeredAt: new Date().toISOString() };
    save(LS_USER, state.user); state.progress = { feedback: {}, completedAt: {} }; save(LS_PROG, state.progress);
    go('thanks');
  });
  function showLogin(on) { $('login-card').hidden = !on; $('reg-card').hidden = on; if (on) $('login-email').focus(); }
  $('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(e.target), email = String(f.get('email') || '').trim(), name = String(f.get('name') || '').trim();
    if (!email && !name) return;
    const saved = load(LS_USER), match = saved && ((email && saved.email === email) || (name && saved.name === name));
    state.user = match ? saved : { name: name || email.split('@')[0], email, country: '', role: '', specialty: '', registeredAt: new Date().toISOString() };
    save(LS_USER, state.user); if (!match) { state.progress = { feedback: {}, completedAt: {} }; save(LS_PROG, state.progress); }
    go('dashboard');
  });
  // Profile edit
  $('profile-form').addEventListener('submit', (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    Object.assign(state.user, { name: f.get('name'), email: f.get('email'), country: f.get('country'), role: f.get('role'), specialty: f.get('specialty'), license: f.get('license'), institution: f.get('institution') });
    save(LS_USER, state.user); state.editing = false; render(); toast('Profile updated.');
  });
  // Resource filters
  $('res-ch').addEventListener('change', (e) => { state.resFilter.ch = e.target.value; renderResources(); });
  $('res-type').addEventListener('change', (e) => { state.resFilter.type = e.target.value; renderResources(); });
  $('res-q').addEventListener('input', (e) => { state.resFilter.q = e.target.value.trim().toLowerCase(); renderResources(); });

  function toast(msg) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(t._h); t._h = setTimeout(() => { t.hidden = true; }, 3500); }
  window.addEventListener('popstate', () => go(location.hash.slice(1) || (state.user ? 'dashboard' : 'landing'), { push: false }));
  window.addEventListener('afterprint', () => { delete document.body.dataset.print; });

  /* ================================================================ BOOT */
  go(location.hash.slice(1) || (state.user ? 'dashboard' : 'landing'), { push: false });
})();
