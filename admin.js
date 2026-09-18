/* PULCE Connect admin console — demo data seeded to the spec's figures (450 users, 320 active, 180 completed chapters, 95 certificates) */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const LS = 'pulce.admin', DEMO_PASSWORD = 'pulce';
  const CH = ['Chapter 1 — Manila', 'Chapter 2 — Bangkok', 'Chapter 3 — Jakarta'];
  // Country split follows the spec's proportions (PH 120 / TH 85 / ID 75 / MY 45 / others 35) scaled to 450 users
  const COUNTRY_MIX = [['Philippines', 150], ['Thailand', 106], ['Indonesia', 94], ['Malaysia', 56], ['Singapore', 16], ['Vietnam', 10], ['Sri Lanka', 8], ['Cambodia', 5], ['Myanmar', 3], ['Other', 2]];
  const ROLES = ['Cardiologist', 'Heart failure specialist', 'Internal medicine physician', 'Cardiology fellow / resident', 'General practitioner', 'Other'];
  const FIRST = ['Maria', 'Jose', 'Somchai', 'Ananya', 'Budi', 'Dewi', 'Ahmad', 'Siti', 'Wei', 'Nguyen', 'Kumar', 'Sok', 'Aung', 'Grace', 'Ramon', 'Nattapong', 'Rina', 'Farah', 'Lim', 'Chan'];
  const LAST = ['Santos', 'Reyes', 'Cruz', 'Wong', 'Tan', 'Suwan', 'Prasert', 'Wijaya', 'Putra', 'Rahman', 'Abdullah', 'Perera', 'Tran', 'Le', 'Min', 'Bautista', 'Garcia', 'Lim', 'Chen', 'Ng'];
  const INST = { Philippines: ['Philippine Heart Center', "St. Luke's Medical Center", 'Makati Medical Center', 'UP-PGH'], Thailand: ['Siriraj Hospital', 'Chulalongkorn Hospital', 'Bumrungrad', 'Ramathibodi'], Indonesia: ['Harapan Kita', 'RSCM', 'RS Siloam', 'RSUP Sardjito'], Malaysia: ['IJN Kuala Lumpur', 'UMMC', 'Hospital Selayang'], Singapore: ['NHCS', 'NUHCS'], Vietnam: ['Cho Ray Hospital'], 'Sri Lanka': ['NHSL Colombo'], Cambodia: ['Calmette Hospital'], Myanmar: ['Yangon General'], Other: ['Regional hospital'] };
  let seed = 11; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }; const pick = (a) => a[Math.floor(rnd() * a.length)];

  // 450 registered · 320 active (logged in) · 95 attended ≥1 chapter (participation certificates)
  // Chapter completions (feedback submitted) 81 / 62 / 37 = 180, i.e. 85% / 65% / 40% of attendees
  const USERS = []; let id = 1;
  for (const [country, n] of COUNTRY_MIX) for (let k = 0; k < n; k++) USERS.push({ id: id++, name: 'Dr ' + pick(FIRST) + ' ' + pick(LAST), role: pick(ROLES), country, institution: pick(INST[country]), days: Math.floor(rnd() * 100), active: false, joined: 0, done: 0 });
  const order = USERS.map((_, i) => i).sort(() => rnd() - 0.5);
  order.slice(0, 320).forEach((i) => { USERS[i].active = true; });
  order.slice(0, 95).forEach((i, k) => { const u = USERS[i]; u.joined = k < 93 ? 3 : 2; u.done = k < 37 ? 3 : k < 62 ? 2 : k < 81 ? 1 : 0; });
  USERS.forEach((u) => { u.registered = new Date(Date.now() - u.days * 864e5); u.status = u.done === 3 ? 'Completed' : u.joined > 0 ? 'Attending' : u.active ? 'Active' : 'Registered'; u.email = u.name.toLowerCase().replace(/^dr /, '').replace(/[^a-z]+/g, '.') + '@hospital.example'; });

  const authed = () => sessionStorage.getItem(LS) === '1';
  function show() { $('adm-login').hidden = authed(); $('adm').hidden = !authed(); if (authed()) init(); }
  $('adm-form').addEventListener('submit', (e) => { e.preventDefault(); const f = new FormData(e.target); if (String(f.get('password')) === DEMO_PASSWORD && String(f.get('email')).includes('@')) { sessionStorage.setItem(LS, '1'); show(); } else { $('adm-err').textContent = 'Incorrect email or password.'; $('adm-err').classList.add('err'); } });
  $('adm-logout').addEventListener('click', () => { sessionStorage.removeItem(LS); location.reload(); });

  let sortK = 'registered', sortDir = -1, initialised = false;
  const filtered = () => { const ch = $('f-ch').value, c = $('f-country').value, d = $('f-period').value; return USERS.filter((u) => (ch === 'all' || u.joined >= +ch) && (c === 'all' || u.country === c) && (d === 'all' || u.days <= +d)); };

  function init() {
    if (initialised) return; initialised = true;
    $('f-country').innerHTML += COUNTRY_MIX.map(([c]) => `<option>${c}</option>`).join('');
    ['f-ch', 'f-country', 'f-period'].forEach((k) => $(k).addEventListener('change', renderAll));
    $('adm-tabs').addEventListener('click', (e) => { const b = e.target.closest('[data-tab]'); if (!b) return; document.querySelectorAll('#adm-tabs .tab').forEach((t) => t.classList.toggle('active', t === b)); document.querySelectorAll('.adm-main > section').forEach((s) => { s.hidden = s.dataset.tab !== b.dataset.tab; }); });
    $('u-search').addEventListener('input', renderUsers);
    $('u-table').querySelector('thead').addEventListener('click', (e) => { const th = e.target.closest('th[data-k]'); if (!th) return; sortDir = sortK === th.dataset.k ? -sortDir : 1; sortK = th.dataset.k; renderUsers(); });
    document.querySelectorAll('[data-export]').forEach((b) => b.addEventListener('click', () => doExport(b.dataset.export)));
    $('sched-save').addEventListener('click', () => toast('Report scheduled. The first run will be emailed on the next occurrence.'));
    renderAll(); setInterval(tickAudit, 9000);
  }
  function renderAll() { renderKpis(); renderCharts(); renderUsers(); renderGeo(); renderAudit(); }

  function renderKpis() {
    const u = filtered(), active = u.filter((x) => x.active).length, completedCh = u.reduce((s, x) => s + x.done, 0);
    const part = u.filter((x) => x.joined > 0).length, adv = u.filter((x) => x.done === 3).length;
    $('kpis').innerHTML = [['Total users', u.length, 'registered participants'], ['Active users', active, 'logged in and engaged'], ['Completed chapters', completedCh, 'chapter completions (feedback submitted)'], ['Certificates issued', part, 'participation certificates \u00b7 ' + adv + ' advanced learning']]
      .map(([l, v, s]) => `<div class="card kpi"><span>${l}</span><b>${v}</b><small><i></i>${s}</small></div>`).join('');
  }
  function bars(el, rows, cls = '') { const max = Math.max(1, ...rows.map((r) => r[1])); $(el).innerHTML = rows.map(([l, v, suf = '']) => `<div class="bar-row"><span>${esc(l)}</span><div class="bar-track"><div class="bar-fill ${cls}" style="width:${Math.round(v / max * 100)}%"></div></div><b>${v}${suf}</b></div>`).join(''); }
  function renderCharts() {
    const u = filtered();
    bars('chart-ch', CH.map((c, i) => { const att = u.filter((x) => x.joined > i).length; return [c, att ? Math.round(u.filter((x) => x.done > i).length / att * 100) : 0, '%']; }));
    const total = u.length || 1, colors = ['#E0242B', '#2F5DA8', '#17305F', '#F0553C', '#7C88A3', '#C4161C'];
    const segs = ROLES.map((r, i) => [r, u.filter((x) => x.role === r).length, colors[i]]); let acc = 0;
    $('chart-roles').innerHTML = segs.map(([, v, c]) => { const len = v / total * 314.16, s = `<circle r="50" cx="60" cy="60" fill="none" stroke="${c}" stroke-width="20" stroke-dasharray="${len} 314.16" stroke-dashoffset="${-acc}"/>`; acc += len; return s; }).join('');
    $('legend-roles').innerHTML = segs.map(([l, v, c]) => `<div><i style="background:${c}"></i>${l} <b>&nbsp;${v}</b></div>`).join('');
    heat('chart-geo', u);
  }
  function heat(el, u) { const counts = COUNTRY_MIX.map(([c]) => [c, u.filter((x) => x.country === c).length]).filter((r) => r[1] > 0).sort((a, b) => b[1] - a[1]); const max = Math.max(1, ...counts.map((r) => r[1])); $(el).innerHTML = counts.map(([c, v]) => `<div style="background:rgba(224,36,43,${(.25 + v / max * .75).toFixed(2)})"><b>${v}</b><span>${c}</span></div>`).join('') || '<p class="small">No registrations for this filter.</p>'; }
  function renderGeo() { const u = filtered(); heat('geo-full', u); bars('geo-rate', COUNTRY_MIX.map(([c]) => { const g = u.filter((x) => x.country === c); return [c, g.length ? Math.round(g.filter((x) => x.done === 3).length / g.length * 100) : 0, '%']; }).filter((r) => u.some((x) => x.country === r[0])).sort((a, b) => b[1] - a[1]), 'c'); }
  function renderUsers() {
    const q = $('u-search').value.trim().toLowerCase();
    const rows = filtered().filter((u) => !q || [u.name, u.email, u.institution, u.country].join(' ').toLowerCase().includes(q)).sort((a, b) => { const x = a[sortK], y = b[sortK]; return (x > y ? 1 : x < y ? -1 : 0) * sortDir; });
    document.querySelectorAll('#u-table th').forEach((th) => { th.classList.remove('asc', 'desc'); if (th.dataset.k === sortK) th.classList.add(sortDir > 0 ? 'asc' : 'desc'); });
    $('u-table').querySelector('tbody').innerHTML = rows.slice(0, 200).map((u) => `<tr><td class="name">${esc(u.name)}<small>${esc(u.email)}</small></td><td>${u.role}</td><td>${u.country}</td><td>${esc(u.institution)}</td><td>${u.registered.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td><td>${u.done}/3</td><td><span class="status ${u.status === 'Completed' ? 's-done' : u.status === 'Attending' ? 's-live' : u.status === 'Active' ? 's-upcoming' : ''}">${u.status}</span></td></tr>`).join('') || '<tr><td colspan="7" class="small">No participants match.</td></tr>';
  }
  const AUDIT = []; const certId = (u, k) => 'PC26-' + String(u.id).padStart(4, '0') + (k === 'Advanced' ? 'A' : 'P');
  (function seedAudit() { USERS.filter((u) => u.joined > 0).sort((a, b) => a.days - b.days).slice(0, 20).forEach((u, i) => AUDIT.push({ t: new Date(Date.now() - (i + 1) * 41 * 60e3), u, kind: u.done === 3 ? 'Advanced' : 'Participation', ch: u.done === 3 ? 'All 3' : 'Chapter ' + Math.max(1, u.done) })); })();
  function renderAudit(fresh) { const c = $('f-country').value; const rows = AUDIT.filter((a) => c === 'all' || a.u.country === c); $('c-table').querySelector('tbody').innerHTML = rows.map((a, i) => `<tr class="${fresh && i === 0 ? 'new' : ''}"><td class="mono">${a.t.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} · ${a.t.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</td><td class="name">${esc(a.u.name)}</td><td><span class="status ${a.kind === 'Advanced' ? 's-done' : 's-upcoming'}">${a.kind}</span></td><td>${a.ch}</td><td>${a.u.country}</td><td class="mono">${certId(a.u, a.kind)}</td></tr>`).join(''); }
  function tickAudit() { const u = pick(USERS.filter((x) => x.joined > 0)); AUDIT.unshift({ t: new Date(), u, kind: u.done === 3 ? 'Advanced' : 'Participation', ch: u.done === 3 ? 'All 3' : 'Chapter ' + Math.max(1, u.done) }); renderAudit(true); }
  function doExport(kind) {
    if (kind === 'schedule') { $('sched').hidden = !$('sched').hidden; return; }
    if (kind === 'pdf') { window.print(); return; }
    const rows = filtered(), head = ['Name', 'Email', 'Role', 'Country', 'Institution', 'Registered', 'Chapters completed', 'Status'];
    const csv = [head, ...rows.map((u) => [u.name, u.email, u.role, u.country, u.institution, u.registered.toISOString().slice(0, 10), u.done, u.status])].map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv' })); a.download = 'pulce-connect-participants.csv'; a.click(); toast(`${rows.length} participants exported as CSV.`);
  }
  function toast(msg) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(t._h); t._h = setTimeout(() => { t.hidden = true; }, 4000); }
  show();
})();
