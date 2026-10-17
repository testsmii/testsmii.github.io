/* =====================================================================
   Cálculo y Diseño de Estructuras · App de estudio (SPA sin dependencias)
   v2: plan diario, lecciones guiadas con diagramas, tarjetas con
   repetición espaciada, test, exámenes reales y panel de gráficas.
   ===================================================================== */
(function () {
"use strict";

/* ---------- utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const LET = ["A", "B", "C", "D", "E"];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
const fmt1 = n => (Math.round(n * 100) / 100).toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtTime = s => { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60), r = s % 60; return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0"); };
const fmtDate = t => new Date(t).toLocaleString("es-ES", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
const dayKey = (t = Date.now()) => { const d = new Date(t); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const DAY = 86400000;
const topicById = id => TOPICS.find(t => t.id === id);
const DIFF = { 1: "Básica", 2: "Media", 3: "Avanzada" };
const ICON = {
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7M8 11h5"/>',
  cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  redo: '<path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5"/>',
  exam: '<path d="M9 4h6l1 2h3v15H5V6h3zM9 12l2 2 4-4M9 17h6"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
};
const ic = (k, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24">${ICON[k]}</svg>`;

/* ---------- persistencia ---------- */
const LS_KEY = "cde_estructuras_v1";
const blank = () => ({ qs: {}, failed: {}, history: [], sessions: [], exam: null, quiz: null, lessons: {}, cards: {}, days: {}, rev: null });
let S = blank();
try { const raw = localStorage.getItem(LS_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* almacenamiento no disponible */ }
function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ } }
const bump = () => { const k = dayKey(); S.days[k] = (S.days[k] || 0) + 1; };

/* ---------- bancos de preguntas ---------- */
const QMAP = {};
LEARN.forEach(q => { q.bank = "learn"; q.src = "Banco de aprendizaje · " + q.ref; QMAP[q.id] = q; });
const EXAM_Q = {};
EXAMS.forEach(ex => { EXAM_Q[ex.id] = buildExamQuestions(ex); EXAM_Q[ex.id].forEach(q => { q.bank = "exam"; q.examId = ex.id; QMAP[q.id] = q; }); });
const EXAM_POOL = EXAM_Q["PA1-2025-T1"].map(q => q.id).concat(["PA1-2025-T3-P1"]);
const inPool = q => q.bank === "learn" || EXAM_POOL.includes(q.id);
const fixedOrder = q => q.bank === "exam" || q.o.some(o => /anteriores|Alguna de/i.test(o));

/* apartado → lección (sección del temario) */
const SEC_RULES = {
  T1: [[/Proyecto estructural/, "t1-proyecto"], [/Requisitos|Modos de fallo|elástico y plástico|Estabilidad|Fuego|Medio ambiente|Vida de servicio/, "t1-requisitos"], [/Estados límite|Parámetros/, "t1-el"], [/./, "t1-metodos"]],
  T2: [[/Introducción|Escala|Geometría|Proyecto/, "t2-intro"], [/Clasificación/, "t2-clasif"], [/Cables|Arcos|Compresión|Vigas/, "t2-mono"], [/Entramados|Losas|Láminas|Membranas/, "t2-bi"], [/Edificación|Estructuras$/, "t2-edif"], [/Puentes|Térmica|térmicas|Túneles/, "t2-civil"], [/./, "t2-ind"]],
  T23: [[/Profundas/, "t23-prof"], [/Contención|contención/, "t23-cont"], [/./, "t23-sup"]],
  T3: [[/Introducción/, "t3-intro"], [/Acero/, "t3-acero"], [/Hormigón/, "t3-horm"], [/Armaduras/, "t3-arm"], [/./, "t3-suelo"]]
};
Object.values(QMAP).forEach(q => { q.sec = SEC_RULES[q.tema].find(([re]) => re.test(q.apartado))[1]; });

/* ---------- lecciones (secciones del temario troceadas por subtítulos) ---------- */
const figHtml = d => `<figure class="dgfig">${d.svg}<figcaption>${d.cap}</figcaption></figure>`;
const LESSONS = [];
TOPICS.forEach(t => THEORY[t.id].sections.forEach((s, idx) => {
  const parts = s.html.split(/(?=<h4>)/).map(x => x.trim()).filter(Boolean);
  let steps = parts.map(p => { const m = p.match(/^<h4>(.*?)<\/h4>/); return { title: m ? m[1] : s.title.replace(/^[\d.]+\s*/, ""), html: m ? p.slice(m[0].length) : p }; });
  if (steps.length > 1 && steps[0].html.replace(/<[^>]+>/g, "").trim().length < 40) { steps[1].html = steps[0].html + steps[1].html; steps.shift(); }
  DIAGRAMS.filter(d => d.sec === s.id).forEach(d => {
    const st = d.h4 ? steps.find(x => x.title.includes(d.h4)) : steps[0];
    (st || steps[0]).html = figHtml(d) + (st || steps[0]).html;
  });
  LESSONS.push({ id: s.id, tema: t.id, idx, title: s.title, steps, qids: Object.values(QMAP).filter(q => q.sec === s.id && inPool(q)).map(q => q.id) });
}));
const lessonById = id => LESSONS.find(l => l.id === id);
const theoryWithDiagrams = s => {
  let h = s.html;
  DIAGRAMS.filter(d => d.sec === s.id).forEach(d => {
    if (!d.h4) { h = figHtml(d) + h; return; }
    const i = h.indexOf("<h4>" + d.h4) >= 0 ? h.indexOf("<h4>" + d.h4) : h.search(new RegExp("<h4>[^<]*" + d.h4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    if (i >= 0) { const j = h.indexOf("</h4>", i) + 5; h = h.slice(0, j) + figHtml(d) + h.slice(j); } else h = figHtml(d) + h;
  });
  return h;
};

/* ---------- puntuación (sistema oficial del examen) ---------- */
function scoreQ(q, sel) {
  sel = sel || [];
  if (!sel.length) return { score: 0, status: "blank" };
  const c = sel.filter(i => q.a.includes(i)).length, w = sel.length - c;
  const score = 0.5 * Math.max(0, (c - w) / q.a.length);
  return { score, status: score >= 0.5 - 1e-9 ? "ok" : score > 0 ? "partial" : "ko" };
}
function recordAnswer(q, status) {
  const st = S.qs[q.id] || (S.qs[q.id] = { n: 0, ok: 0, last: null });
  st.n++; if (status === "ok") st.ok++; st.last = status; st.t = Date.now();
  if (status === "ok") delete S.failed[q.id]; else if (status !== "blank") S.failed[q.id] = Date.now();
  if (status !== "blank") bump();
}

/* ---------- estadísticas ---------- */
// Dominio = % de preguntas del conjunto cuya última respuesta fue correcta
function mastery(qs) { const n = qs.length; if (!n) return 0; return pct(qs.filter(q => S.qs[q.id] && S.qs[q.id].last === "ok").length, n); }
function topicQs(tid) { return Object.values(QMAP).filter(q => q.tema === tid && inPool(q)); }
function topicStats(tid) {
  const qs = topicQs(tid); let n = 0, ok = 0, seen = 0;
  qs.forEach(q => { const st = S.qs[q.id]; if (st) { n += st.n; ok += st.ok; seen++; } });
  return { n, ok, seen, total: qs.length, p: pct(ok, n), m: mastery(qs) };
}
function lessonMastery(l) { return mastery(l.qids.map(id => QMAP[id])); }
function apartadoStats() {
  const m = {};
  Object.values(QMAP).forEach(q => { const st = S.qs[q.id]; if (!st) return; const k = q.tema + "|" + q.apartado; const r = m[k] || (m[k] = { tema: q.tema, apartado: q.apartado, n: 0, ok: 0 }); r.n += st.n; r.ok += st.ok; });
  return Object.values(m).map(r => Object.assign(r, { p: pct(r.ok, r.n) }));
}
function globalStats() {
  let n = 0, ok = 0, seen = 0;
  Object.values(S.qs).forEach(st => { n += st.n; ok += st.ok; seen++; });
  const all = Object.values(QMAP).filter(inPool);
  return { n, ok, seen, p: pct(ok, n), m: mastery(all), failed: failedIds().length, best: S.history.length ? Math.max(...S.history.map(h => h.grade)) : null, exams: S.history.length };
}
const failedIds = () => Object.keys(S.failed).filter(id => QMAP[id]);
function streak() { let s = 0, t = Date.now(); if (!S.days[dayKey(t)]) t -= DAY; while (S.days[dayKey(t)]) { s++; t -= DAY; } return s; }
function nextLesson() { return LESSONS.find(l => !(S.lessons[l.id] && S.lessons[l.id].done)) || null; }

/* ---------- tarjetas: repetición espaciada (Leitner) ---------- */
const BOX_DAYS = [0, 1, 3, 7, 16, 35];
const cardDue = () => CARDS.filter(c => S.cards[c.id] && S.cards[c.id].due <= Date.now());
const cardNew = () => CARDS.filter(c => !S.cards[c.id] && S.lessons[c.sec] && S.lessons[c.sec].done);
function reviewQueue() { return cardDue().concat(cardNew().slice(0, 12)); }

/* ---------- router ---------- */
const app = $("#app");
let timerId = null;
function go(h) { if (location.hash === h) route(); else location.hash = h; }
window.addEventListener("hashchange", route);
function route() {
  clearInterval(timerId); timerId = null;
  const md = $("#modal"); if (!md.hidden && !md.dataset.keep) { md.hidden = true; md.innerHTML = ""; } delete md.dataset.keep;
  const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").map(decodeURIComponent);
  const [p0, p1, p2] = parts;
  const nav = { "": "home", aprender: "aprender", tema: "aprender", leccion: "aprender", tarjetas: "aprender", repaso: "aprender", practicar: "aprender", falladas: "aprender", quiz: S.quiz && S.quiz.fromExam ? "examenes" : "aprender", examenes: "examenes", examen: "examenes", resultado: "examenes", progreso: "progreso" }[p0 || ""];
  $$("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === nav));
  try {
    switch (p0 || "") {
      case "": viewHome(); break;
      case "aprender": viewLearn(); break;
      case "tema": viewTopic(p1, p2 || "lecciones"); break;
      case "leccion": viewLesson(p1, +(p2 || 0)); break;
      case "tarjetas": viewCards(); break;
      case "repaso": viewReview(); break;
      case "practicar": viewPracticeSetup(p1); break;
      case "quiz": viewQuiz(); break;
      case "falladas": viewFailed(); break;
      case "examenes": viewExams(); break;
      case "examen": viewExamRunner(); break;
      case "resultado": viewResult(p1); break;
      case "progreso": viewProgress(); break;
      default: viewHome();
    }
  } catch (err) { console.error(err); app.innerHTML = `<div class="card"><h2>Se ha producido un error</h2><p class="muted">${esc(err.message)}</p><a class="btn" href="#/">Volver al inicio</a></div>`; }
  updateBanner(); renderMath(app);
  if (!/^(quiz|examen|repaso)$/.test(p0)) window.scrollTo(0, 0);
}
function renderMath(el) {
  if (window.renderMathInElement) { try { renderMathInElement(el, { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }], throwOnError: false }); } catch (e) { /* noop */ } }
}
function updateBanner() {
  const b = $("#resume-banner");
  const onExam = /^#\/examen(\/|$)/.test(location.hash);
  if (S.exam && !onExam) {
    const ex = EXAMS.find(e => e.id === S.exam.examId);
    const left = S.exam.mode === "sim" ? " · quedan " + fmtTime((S.exam.deadline - Date.now()) / 1000) : "";
    b.innerHTML = `Examen ${esc(ex ? ex.version : "")} en curso${left}. <a href="#/examen"><b>Continuar →</b></a>`;
    b.hidden = false;
  } else b.hidden = true;
}
function confirmBox(title, html, okText, onOk, opts = {}) {
  const m = $("#modal");
  m.innerHTML = `<div class="box" role="dialog" aria-modal="true"><h3>${title}</h3><div class="muted">${html}</div>
  <div class="actions">${opts.noCancel ? "" : `<button class="btn ghost" id="m-no">${opts.cancel || "Cancelar"}</button>`}<button class="btn ${opts.danger ? "danger" : "primary"}" id="m-ok">${okText}</button></div></div>`;
  m.hidden = false;
  const close = () => { m.hidden = true; m.innerHTML = ""; };
  if ($("#m-no")) $("#m-no").onclick = close;
  m.onclick = e => { if (e.target === m) close(); };
  $("#m-ok").onclick = () => { close(); onOk(); };
}
function chooseBox(title, sub, options) {
  const m = $("#modal");
  m.innerHTML = `<div class="box" role="dialog" aria-modal="true"><h3>${title}</h3><p class="muted small">${sub}</p>
  <div class="choices">${options.map((o, i) => `<button class="choice" data-c="${i}"><span class="ic-sq">${ic(o.icon)}</span><span><b>${o.title}</b><small>${o.sub}</small></span>${ic("arrow", "chev")}</button>`).join("")}</div>
  <div class="actions"><button class="btn ghost" id="m-no">Cancelar</button></div></div>`;
  m.hidden = false;
  const close = () => { m.hidden = true; m.innerHTML = ""; };
  $("#m-no").onclick = close; m.onclick = e => { if (e.target === m) close(); };
  $$("[data-c]", m).forEach(b => b.onclick = () => { close(); options[+b.dataset.c].run(); });
}

/* =====================================================================
   GRÁFICAS (SVG)
   ===================================================================== */
const SEQ = ["#eef3fb", "#c9d9f5", "#93b4ec", "#5a8be0", "#1e40af"];
function donut(p, label, sub, color = "#2563eb", size = 150) {
  const r = 56, c = 2 * Math.PI * r, v = Math.max(0, Math.min(100, p));
  return `<svg class="donut" viewBox="0 0 150 150" width="${size}" height="${size}" role="img" aria-label="${label}: ${v}%">
  <circle cx="75" cy="75" r="${r}" fill="none" stroke="#e6edf8" stroke-width="14"/>
  ${v > 0 ? "" : "<!--"}<circle cx="75" cy="75" r="${r}" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${(c * v / 100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 75 75)"/>${v > 0 ? "" : "-->"}
  <text x="75" y="76" text-anchor="middle" class="d-v">${v}%</text><text x="75" y="96" text-anchor="middle" class="d-l">${label}</text>${sub ? `<title>${sub}</title>` : ""}</svg>`;
}
function hbars(rows, opts = {}) {
  return `<div class="hbars" role="list" aria-label="${esc(opts.label || "Gráfico de barras")}" style="--lw:${opts.labelW || 150}px">${rows.map(r => `<div class="hb-row" role="listitem" title="${esc(r.label)}: ${r.value}%${r.tip ? " · " + esc(r.tip) : ""}">
    <span class="hb-l">${esc(r.label)}</span><span class="hb-track"><i style="width:${r.value > 0 ? Math.max(2, r.value) : 0}%;background:${r.color || "#2563eb"}"></i></span><span class="hb-v">${r.value}%</span></div>`).join("")}</div>`;
}
function heatmap(weeks = 12) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const dow = (today.getDay() + 6) % 7; // lunes = 0
  const start = today.getTime() - (weeks - 1) * 7 * DAY - dow * DAY;
  const cs = 15, gap = 3, left = 22, top = 16;
  const vals = []; for (let i = 0; i < weeks * 7; i++) { const t = start + i * DAY; if (t > today.getTime()) break; vals.push({ t, v: S.days[dayKey(t)] || 0 }); }
  const max = Math.max(5, ...vals.map(x => x.v));
  const lvl = v => v === 0 ? 0 : v < max * .25 ? 1 : v < max * .5 ? 2 : v < max * .8 ? 3 : 4;
  const W = left + weeks * (cs + gap) + 4, H = top + 7 * (cs + gap) + 22;
  const months = []; let lastM = -1;
  for (let w = 0; w < weeks; w++) { const d = new Date(start + w * 7 * DAY); if (d.getMonth() !== lastM) { months.push([w, d.toLocaleString("es-ES", { month: "short" })]); lastM = d.getMonth(); } }
  return `<svg class="chart heat" viewBox="0 0 ${W} ${H}" style="max-width:${Math.round(W * 1.35)}px" role="img" aria-label="Actividad diaria de las últimas ${weeks} semanas">
  ${months.map(([w, m]) => `<text x="${left + w * (cs + gap)}" y="10" class="c-ax">${m}</text>`).join("")}
  ${["L", "", "X", "", "V", "", "D"].map((d, i) => d ? `<text x="0" y="${top + i * (cs + gap) + 11}" class="c-ax">${d}</text>` : "").join("")}
  ${vals.map((x, i) => { const w = Math.floor(i / 7), d = i % 7; return `<rect x="${left + w * (cs + gap)}" y="${top + d * (cs + gap)}" width="${cs}" height="${cs}" rx="3" fill="${SEQ[lvl(x.v)]}"><title>${new Date(x.t).toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" })}: ${x.v} respuestas</title></rect>`; }).join("")}
  <text x="${W - 120}" y="${H - 4}" class="c-ax">menos</text>${SEQ.map((c, i) => `<rect x="${W - 82 + i * 13}" y="${H - 14}" width="11" height="11" rx="2" fill="${c}"/>`).join("")}<text x="${W - 14}" y="${H - 4}" class="c-ax" text-anchor="end"></text></svg>
  <div class="tiny muted" style="text-align:right;margin-top:-4px">más →</div>`;
}
function lineChart(vals, max, labels, unit = "", ref) {
  const W = 520, H = 190, pl = 34, pr = 12, pt = 14, pb = 26, n = vals.length;
  const x = i => pl + (n === 1 ? (W - pl - pr) / 2 : i * (W - pl - pr) / (n - 1)), y = v => pt + (H - pt - pb) * (1 - v / max);
  const grid = [0, .5, 1].map(f => `<line x1="${pl}" x2="${W - pr}" y1="${y(max * f)}" y2="${y(max * f)}" stroke="#e6edf8"/><text x="${pl - 6}" y="${y(max * f) + 4}" text-anchor="end" class="c-ax">${max * f}${unit}</text>`).join("");
  const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolución">${grid}
  ${ref != null ? `<line x1="${pl}" x2="${W - pr}" y1="${y(ref)}" y2="${y(ref)}" stroke="#c2413b" stroke-dasharray="4 4" opacity=".55"/><text x="${W - pr}" y="${y(ref) - 5}" text-anchor="end" class="c-ax">aprobado</text>` : ""}
  <polyline points="${pts}" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  ${vals.map((v, i) => `<g><circle cx="${x(i)}" cy="${y(v)}" r="10" fill="transparent"/><circle cx="${x(i)}" cy="${y(v)}" r="4.5" fill="#fff" stroke="#2563eb" stroke-width="2"/><title>${esc(labels[i])}: ${max === 10 ? fmt1(v) : v + unit}</title></g>`).join("")}
  ${labels.map((l, i) => n <= 10 || i % Math.ceil(n / 10) === 0 ? `<text x="${x(i)}" y="${H - 7}" text-anchor="middle" class="c-ax">${esc(String(l).slice(0, 8))}</text>` : "").join("")}</svg>`;
}
function lessonGrid() {
  return `<div class="lgrid">${TOPICS.map(t => `<div class="lg-row"><span class="lg-t" style="color:${t.color}">${t.num}</span><div class="lg-cells">${LESSONS.filter(l => l.tema === t.id).map(l => {
    const m = lessonMastery(l), done = S.lessons[l.id] && S.lessons[l.id].done;
    const lv = !done && !m ? 0 : m < 25 ? 1 : m < 50 ? 2 : m < 75 ? 3 : 4;
    return `<a class="lg-c" href="#/leccion/${l.id}" style="background:${SEQ[lv]};color:${lv >= 3 ? "#fff" : "var(--ink-2)"}" title="${esc(l.title)}: ${done ? "completada" : "pendiente"} · dominio ${m}%"><span>${esc(l.title.replace(/^[\d.]+\s*/, ""))}</span><b>${done || m ? m + "%" : ""}</b></a>`; }).join("")}</div></div>`).join("")}</div>
  <div class="legend"><span>Dominio:</span>${SEQ.map((c, i) => `<span><i style="background:${c};border-color:${c}"></i>${["sin empezar", "<25 %", "<50 %", "<75 %", "≥75 %"][i]}</span>`).join("")}</div>`;
}

/* =====================================================================
   INICIO
   ===================================================================== */
function planItems() {
  const items = [];
  const nl = nextLesson();
  const rq = reviewQueue().length, nf = failedIds().length;
  if (rq) items.push({ icon: "cards", title: `Repasar ${rq} tarjeta${rq > 1 ? "s" : ""}`, sub: "Repetición espaciada · unos " + Math.max(1, Math.round(rq * 0.25)) + " min", href: "#/repaso", run: startReview });
  if (nl) items.push({ icon: "book", title: `Lección: ${nl.title.replace(/^[\d.]+\s*/, "")}`, sub: `Tema ${topicById(nl.tema).num} · ${nl.steps.length} pasos y ${Math.min(5, nl.qids.length)} preguntas`, href: `#/leccion/${nl.id}` });
  if (nf) items.push({ icon: "redo", title: `Corregir ${nf} pregunta${nf > 1 ? "s" : ""} fallada${nf > 1 ? "s" : ""}`, sub: "Hasta que las aciertes", run: startFailedQuiz });
  if (!nl && !rq) items.push({ icon: "exam", title: "Simulacro de examen", sub: "40 minutos · versión al azar", run: () => startExam(EXAMS[Math.floor(Math.random() * EXAMS.length)].id, "sim") });
  return items.slice(0, 3);
}
function viewHome() {
  const g = globalStats(), plan = planItems(), st = streak();
  const doneL = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
  app.innerHTML = `
  <section class="today">
    <div class="today-main">
      <div class="eyebrow">${new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}${st ? ` · 🔥 ${st} día${st > 1 ? "s" : ""} seguidos` : ""}</div>
      <h1>Tu plan de hoy</h1>
      <div class="plan">${plan.map((p, i) => `<a class="plan-item" ${p.href && !p.run ? `href="${p.href}"` : `href="javascript:void 0" data-plan="${i}"`}><span class="ic-sq">${ic(p.icon)}</span><span><b>${esc(p.title)}</b><small>${esc(p.sub)}</small></span>${ic("arrow", "chev")}</a>`).join("")}</div>
      <button class="btn primary big" id="h-go">${ic("play")} ${g.n ? "Continuar" : "Empezar a estudiar"}</button>
    </div>
    <div class="today-side">
      ${donut(g.m, "dominio", "Preguntas cuya última respuesta fue correcta")}
      <div class="mini-stats"><div><b>${doneL}/${LESSONS.length}</b><span>lecciones</span></div><div><b>${g.n ? g.p + "%" : "—"}</b><span>aciertos</span></div><div><b>${g.best != null ? fmt1(g.best) : "—"}</b><span>mejor nota</span></div></div>
    </div>
  </section>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Dominio por tema</h3><a class="small" href="#/progreso">Detalle</a></div>
      ${hbars(TOPICS.map(t => { const s = topicStats(t.id); return { label: t.num + ". " + t.short, value: s.m, color: t.color, tip: `${s.seen}/${s.total} vistas` }; }), { label: "Dominio por tema" })}</div>
    <div class="card"><div class="card-h"><h3>Actividad</h3><span class="small muted">${Object.values(S.days).reduce((a, b) => a + b, 0)} respuestas</span></div>${heatmap(12)}</div>
  </div>
  <div class="grid g2 mt">
    <a class="card mode" href="#/aprender"><span class="ic-sq">${ic("book")}</span><div><h3>Aprendizaje</h3><p class="muted small mb0">${LESSONS.length} lecciones guiadas con diagramas, ${CARDS.length} tarjetas y ${LEARN.length} preguntas.</p></div>${ic("arrow", "chev")}</a>
    <a class="card mode" href="#/examenes"><span class="ic-sq">${ic("exam")}</span><div><h3>Exámenes anteriores</h3><p class="muted small mb0">PA1 2025 (4 versiones) con solución oficial, simulacro de 40 min y revisión.</p></div>${ic("arrow", "chev")}</a>
  </div>`;
  $$("[data-plan]").forEach(a => a.onclick = () => plan[+a.dataset.plan].run());
  $("#h-go").onclick = () => { const p = plan[0]; if (!p) return go("#/aprender"); p.run ? p.run() : go(p.href); };
}

/* =====================================================================
   APRENDIZAJE: ruta de lecciones
   ===================================================================== */
function learnTabs(active) {
  return `<div class="seg">${[["aprender", "Lecciones"], ["tarjetas", "Tarjetas"], ["practicar", "Test libre"]].map(([k, l]) => `<a class="${k === active ? "on" : ""}" href="#/${k}">${l}</a>`).join("")}</div>`;
}
function lessonRow(l, i) {
  const done = S.lessons[l.id] && S.lessons[l.id].done, m = lessonMastery(l), isNext = nextLesson() === l;
  return `<a class="lrow ${done ? "done" : ""} ${isNext ? "next" : ""}" href="#/leccion/${l.id}">
    <span class="lnum">${done ? ic("check") : i + 1}</span>
    <span class="ltxt"><b>${esc(l.title.replace(/^[\d.]+\s*/, ""))}</b><small>${l.steps.length} pasos · ${l.qids.length} preguntas${done ? ` · dominio ${m}%` : ""}</small></span>
    ${isNext ? `<span class="tag brand">Siguiente</span>` : done ? `<span class="minibar"><i style="width:${m}%"></i></span>` : ""}</a>`;
}
function viewLearn() {
  const nl = nextLesson();
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("aprender")}
  ${nl ? `<a class="card resume" href="#/leccion/${nl.id}"><span class="ic-sq">${ic("play")}</span><div><div class="eyebrow">Continúa por aquí</div><b>${esc(nl.title)}</b><div class="small muted">Tema ${topicById(nl.tema).num} · ${esc(topicById(nl.tema).title)}</div></div>${ic("arrow", "chev")}</a>` : `<div class="notice">Has completado todas las lecciones. Sigue con las tarjetas y los simulacros.</div>`}
  <div class="grid g2 mt">
  ${TOPICS.map(t => { const ls = LESSONS.filter(l => l.tema === t.id), s = topicStats(t.id), done = ls.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
    return `<section class="card topic" style="--c:${t.color}"><div class="topic-h"><div>${donut(s.m, "", "", t.color, 54)}</div>
      <div><a href="#/tema/${t.id}" class="th-link"><span class="num">Tema ${t.num}</span><h3>${esc(t.title)}</h3></a><div class="tiny muted">${done}/${ls.length} lecciones · dominio ${s.m}%</div></div></div>
      <div class="lpath">${ls.map((l, i) => lessonRow(l, i)).join("")}</div></section>`; }).join("")}
  </div>
  <div class="missing">${MISSING_TOPICS.map(m => `<div><b>Tema ${m.num}.</b> ${esc(m.title)} — <span class="muted">${esc(m.note)}</span></div>`).join("")}</div>`;
}

function viewTopic(tid, tab) {
  const t = topicById(tid); if (!t) return go("#/aprender");
  const th = THEORY[tid], ls = LESSONS.filter(l => l.tema === tid);
  const tabs = [["lecciones", "Lecciones"], ["resumen", "Resumen"], ["temario", "Temario completo"], ["confusiones", "Confusiones"]];
  let body = "";
  if (tab === "lecciones") {
    body = `<div class="card"><div class="lpath">${ls.map((l, i) => lessonRow(l, i)).join("")}</div></div>
    <div class="card mt"><div class="card-h"><h3>Dominio por lección</h3></div>${hbars(ls.map(l => ({ label: l.title.replace(/^[\d.]+\s*/, "").slice(0, 26), value: lessonMastery(l), color: t.color })), { labelW: 190 })}
    <button class="btn soft mt" id="t-prac">Practicar todo el tema</button></div>`;
  } else if (tab === "resumen") {
    body = `<div class="card"><ol class="summary-list">${th.summary.map(s => `<li>${s}</li>`).join("")}</ol></div>`;
  } else if (tab === "temario") {
    body = `<div class="theory">${th.sections.map((s, i) => `<details class="sec" ${i === 0 ? "open" : ""}><summary>${esc(s.title)}</summary><div class="body">${theoryWithDiagrams(s)}</div></details>`).join("")}</div>
    <p class="tiny muted">Los recuadros amarillos («Ampliación») son conocimiento general que no aparece en tus apuntes.</p>`;
  } else {
    body = `<div class="card">${th.confusions.map(c => `<div class="conf"><div>${c[0]}</div><div>${c[1]}</div></div>`).join("")}</div>`;
  }
  app.innerHTML = `<div class="crumbs"><a href="#/aprender">Aprendizaje</a> › Tema ${t.num}</div>
  <h1>${t.num}. ${esc(t.title)}</h1><div class="tiny muted">Fuente: ${esc(t.file)}</div>
  <div class="tabs">${tabs.map(([k, l]) => `<button class="${k === tab ? "active" : ""}" data-tab="${k}">${l}</button>`).join("")}</div>${body}`;
  $$("[data-tab]").forEach(b => b.onclick = () => go(`#/tema/${tid}/${b.dataset.tab}`));
  const tp = $("#t-prac"); if (tp) tp.onclick = () => startQuiz({ ids: shuffle(topicQs(tid).map(q => q.id)).slice(0, 15), title: "Tema " + t.num });
}

/* ---------- lección guiada ---------- */
function viewLesson(id, step) {
  const l = lessonById(id); if (!l) return go("#/aprender");
  const t = topicById(l.tema), n = l.steps.length;
  step = Math.max(0, Math.min(step, n - 1));
  const st = l.steps[step], last = step === n - 1;
  const lsT = LESSONS.filter(x => x.tema === l.tema);
  S.lessons[id] = Object.assign(S.lessons[id] || {}, { step }); save();
  app.innerHTML = `<div class="crumbs"><a href="#/aprender">Aprendizaje</a> › <a href="#/tema/${t.id}">Tema ${t.num}</a> › Lección ${lsT.indexOf(l) + 1} de ${lsT.length}</div>
  <div class="lesson-head"><h1>${esc(l.title.replace(/^[\d.]+\s*/, ""))}</h1>
  <div class="steps">${l.steps.map((_, i) => `<a href="#/leccion/${id}/${i}" class="${i < step ? "past" : i === step ? "cur" : ""}" aria-label="Paso ${i + 1}"></a>`).join("")}<span class="sq ${last ? "" : ""}" title="Comprobación final">✓</span></div></div>
  <article class="card lesson">
    <div class="eyebrow">Paso ${step + 1} de ${n}</div>
    <h2>${st.title}</h2>
    <div class="theory">${st.html}</div>
  </article>
  <div class="lesson-nav">
    ${step > 0 ? `<a class="btn ghost" href="#/leccion/${id}/${step - 1}">${ic("back")} Anterior</a>` : `<span></span>`}
    ${last ? `<button class="btn primary big" id="l-check">Comprobar lo aprendido ${ic("arrow")}</button>` : `<a class="btn primary big" href="#/leccion/${id}/${step + 1}">Continuar ${ic("arrow")}</a>`}
  </div>`;
  const ck = $("#l-check");
  if (ck) ck.onclick = () => {
    const qs = l.qids.map(i => QMAP[i]);
    const pick = shuffle(qs.filter(q => !S.qs[q.id] || S.qs[q.id].last !== "ok")).concat(shuffle(qs.filter(q => S.qs[q.id] && S.qs[q.id].last === "ok"))).slice(0, 5);
    if (!pick.length) { S.lessons[id] = Object.assign(S.lessons[id], { done: true, t: Date.now() }); save(); return go("#/aprender"); }
    startQuiz({ ids: shuffle(pick.map(q => q.id)), title: "Comprobación · " + l.title.replace(/^[\d.]+\s*/, ""), lesson: id });
  };
}

/* ---------- tarjetas ---------- */
function viewCards() {
  const due = cardDue().length, nw = cardNew().length, q = reviewQueue().length;
  const learned = CARDS.filter(c => S.cards[c.id] && S.cards[c.id].box >= 3).length;
  const locked = CARDS.filter(c => !S.cards[c.id] && !(S.lessons[c.sec] && S.lessons[c.sec].done)).length;
  const boxes = TOPICS.map(t => { const cs = CARDS.filter(c => c.tema === t.id); const b = [0, 0, 0, 0, 0, 0]; let un = 0; cs.forEach(c => { const s = S.cards[c.id]; if (!s) un++; else b[Math.min(5, s.box)]++; }); return { t, cs, b, un }; });
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("tarjetas")}
  <div class="card hero-card"><div><div class="eyebrow">Repetición espaciada</div><h2 class="mb0">${q ? `${q} tarjeta${q > 1 ? "s" : ""} para hoy` : "Nada pendiente por hoy"}</h2>
  <p class="muted small">${due} para repasar · ${Math.min(12, nw)} nuevas. Las tarjetas que dominas vuelven cada vez más tarde (1, 3, 7, 16 y 35 días); las que fallas, enseguida.${locked ? ` Se desbloquean ${locked} más al completar lecciones.` : ""}</p>
  ${q ? `<button class="btn primary big" id="c-go">${ic("play")} Repasar ahora</button>` : nw === 0 && locked ? `<a class="btn soft" href="#/aprender">Completar una lección</a>` : ""}</div>
  ${donut(pct(learned, CARDS.length), "aprendidas", `${learned} de ${CARDS.length} tarjetas en caja 3 o superior`, "#0f8a5f", 130)}</div>
  <div class="card mt"><div class="card-h"><h3>Estado de las tarjetas por tema</h3></div>
  <div class="stack-chart">${boxes.map(({ t, cs, b, un }) => `<div class="sc-row"><span class="sc-l">${t.num}. ${esc(t.short)}</span><div class="sc-bar">${un ? `<i style="flex:${un};background:#f1f5fb" title="Sin estudiar: ${un}"></i>` : ""}${b.map((v, i) => v ? `<i style="flex:${v};background:${SEQ[Math.min(4, i + 1)]}" title="Caja ${i}: ${v}"></i>` : "").join("")}</div><span class="sc-n">${cs.length}</span></div>`).join("")}</div>
  <div class="legend"><span><i style="background:#f1f5fb"></i>sin estudiar</span>${[1, 2, 3, 4].map(i => `<span><i style="background:${SEQ[i]};border-color:${SEQ[i]}"></i>${["nueva / fallada", "1–3 días", "7 días", "16+ días"][i - 1]}</span>`).join("")}</div></div>`;
  const b = $("#c-go"); if (b) b.onclick = startReview;
}
function startReview() {
  const q = reviewQueue(); if (!q.length) return go("#/tarjetas");
  S.rev = { ids: shuffle(q.map(c => c.id)), i: 0, flip: false, ok: 0, n: 0 }; save(); go("#/repaso");
}
function viewReview() {
  const R = S.rev; if (!R) return go("#/tarjetas");
  if (R.i >= R.ids.length) {
    app.innerHTML = `<div class="card center-card">${donut(pct(R.ok, R.n), "recordadas", "", "#0f8a5f", 150)}<h2>Repaso terminado</h2><p class="muted">${R.ok} de ${R.n} tarjetas recordadas. Las demás volverán pronto.</p><a class="btn primary big" href="#/">Volver al inicio</a></div>`;
    S.rev = null; save(); return;
  }
  const c = CARDS.find(x => x.id === R.ids[R.i]), t = topicById(c.tema);
  app.innerHTML = `<div class="quiz-head"><a class="small muted" href="#/tarjetas">✕ Salir</a><div class="bar"><i style="width:${pct(R.i, R.ids.length)}%"></i></div><span class="small muted">${R.i + 1}/${R.ids.length}</span></div>
  <div class="flash ${R.flip ? "flipped" : ""}" id="fl" tabindex="0" role="button" aria-label="Girar tarjeta">
    <div class="face front"><span class="tag" style="background:${t.color}1a;color:${t.color}">Tema ${t.num}</span><div class="f-txt">${c.f}</div><div class="tiny muted">Piensa la respuesta y toca para girar</div></div>
    <div class="face back"><span class="tag" style="background:${t.color}1a;color:${t.color}">${c.f}</span><div class="b-txt">${c.b}</div></div>
  </div>
  <div class="rate" ${R.flip ? "" : "hidden"}><button class="btn rate-ko" data-r="0">No la sabía</button><button class="btn rate-mid" data-r="1">Dudé</button><button class="btn rate-ok" data-r="2">La sabía</button></div>`;
  const flip = () => { if (!R.flip) { R.flip = true; save(); viewReview(); renderMath(app); } };
  $("#fl").onclick = flip; $("#fl").onkeydown = e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } };
  $$("[data-r]").forEach(b => b.onclick = () => {
    const r = +b.dataset.r, s = S.cards[c.id] || { box: 0 };
    s.box = r === 0 ? 0 : r === 1 ? Math.max(1, s.box) : Math.min(5, s.box + 1);
    s.due = Date.now() + (r === 0 ? 10 * 60000 : BOX_DAYS[s.box] * DAY - 3600000);
    S.cards[c.id] = s; R.n++; if (r > 0) R.ok++; bump();
    if (r === 0) R.ids.push(c.id);
    R.i++; R.flip = false; save(); viewReview(); renderMath(app);
  });
}

/* ---------- test libre ---------- */
function viewPracticeSetup() {
  const cfg = Object.assign({ temas: TOPICS.map(t => t.id), bank: "both", diff: "all", n: "20", filter: "all" }, JSON.parse(localStorage.getItem("cde_cfg") || "null") || {});
  const chip = (name, val, label, on) => `<label class="chip ${on ? "on" : ""}"><input type="${name === "temas" ? "checkbox" : "radio"}" name="${name}" value="${val}" ${on ? "checked" : ""}>${label}</label>`;
  const nf = failedIds().length;
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("practicar")}
  <div class="card" id="cfg">
    <div class="field"><span class="lbl">Temas</span><div class="chips">${TOPICS.map(t => chip("temas", t.id, t.num + ". " + t.short, cfg.temas.includes(t.id))).join("")}</div></div>
    <div class="field"><span class="lbl">Número de preguntas</span><div class="chips">${["10", "20", "30", "all"].map(n => chip("n", n, n === "all" ? "Todas" : n, cfg.n === n)).join("")}</div></div>
    <details class="more"><summary>Más opciones</summary>
      <div class="field mt"><span class="lbl">Banco</span><div class="chips">${chip("bank", "both", "Todo", cfg.bank === "both")}${chip("bank", "learn", "Solo nuevas", cfg.bank === "learn")}${chip("bank", "exam", "Solo de examen", cfg.bank === "exam")}</div></div>
      <div class="field"><span class="lbl">Dificultad</span><div class="chips">${chip("diff", "all", "Todas", cfg.diff === "all")}${chip("diff", "1", "Básica", cfg.diff === "1")}${chip("diff", "2", "Media", cfg.diff === "2")}${chip("diff", "3", "Avanzada", cfg.diff === "3")}</div></div>
      <div class="field mb0"><span class="lbl">Preguntas</span><div class="chips">${chip("filter", "all", "Todas", cfg.filter === "all")}${chip("filter", "new", "No vistas", cfg.filter === "new")}${chip("filter", "failed", "Falladas", cfg.filter === "failed")}</div></div>
    </details>
    <div class="row between mt"><span class="small muted" id="c-count"></span><button class="btn primary big" id="c-go">${ic("play")} Empezar</button></div>
  </div>
  ${nf ? `<a class="card resume mt" href="#/falladas"><span class="ic-sq">${ic("redo")}</span><div><b>${nf} pregunta${nf > 1 ? "s" : ""} fallada${nf > 1 ? "s" : ""}</b><div class="small muted">Repítelas hasta acertarlas</div></div>${ic("arrow", "chev")}</a>` : ""}`;
  const read = () => { const v = n => ($(`input[name=${n}]:checked`) || {}).value; return { temas: $$('input[name=temas]:checked').map(i => i.value), bank: v("bank"), diff: v("diff"), filter: v("filter"), n: v("n") || "20" }; };
  const pool = c => {
    let qs = [];
    if (c.bank !== "exam") qs = qs.concat(LEARN.filter(q => c.temas.includes(q.tema) && (c.diff === "all" || String(q.d) === c.diff)));
    if (c.bank !== "learn") qs = qs.concat(EXAM_POOL.map(id => QMAP[id]).filter(q => c.temas.includes(q.tema)));
    if (c.filter === "new") qs = qs.filter(q => !S.qs[q.id]);
    if (c.filter === "failed") qs = qs.filter(q => S.failed[q.id]);
    return qs;
  };
  const refresh = () => {
    $$("#cfg .chip").forEach(l => { const i = $("input", l); l.classList.toggle("on", i.checked); });
    const c = read(), p = pool(c), n = c.n === "all" ? p.length : Math.min(+c.n, p.length);
    $("#c-count").textContent = p.length ? `${n} preguntas al azar de ${p.length} disponibles` : "No hay preguntas con esta selección";
    $("#c-go").disabled = !p.length;
  };
  $("#cfg").addEventListener("change", refresh);
  $("#c-go").onclick = () => { const c = read(); localStorage.setItem("cde_cfg", JSON.stringify(c)); const p = shuffle(pool(c)); startQuiz({ ids: p.slice(0, c.n === "all" ? p.length : +c.n).map(q => q.id), title: "Test libre" }); };
  refresh();
}

/* ---------- motor de test con corrección inmediata ---------- */
function startQuiz({ ids, title, fromExam, lesson }) {
  if (!ids || !ids.length) { confirmBox("Sin preguntas", "No hay preguntas disponibles para esta selección.", "Aceptar", () => {}, { noCancel: true }); return; }
  const perm = {};
  ids.forEach(id => { const q = QMAP[id]; perm[id] = fixedOrder(q) ? q.o.map((_, i) => i) : shuffle(q.o.map((_, i) => i)); });
  S.quiz = { ids, title, perm, i: 0, ans: {}, sel: {}, start: Date.now(), fromExam: !!fromExam, lesson: lesson || null, done: false };
  save(); go("#/quiz");
}
function startFailedQuiz() { const ids = failedIds(); if (!ids.length) return go("#/aprender"); startQuiz({ ids: shuffle(ids).slice(0, 20), title: "Corregir falladas" }); }
const explainHtml = q => `${q.official ? `<div class="official">${q.official}</div>` : ""}${q.bank === "exam" ? `<b>${q.official ? "Comentario" : "Explicación orientativa (no oficial)"}:</b> ` : ""}${esc(q.exp)}
  <div class="src">${q.bank === "exam" ? "Solución oficial: " + esc(q.keyText) + " · " : ""}${esc(q.src)}${q.sec && lessonById(q.sec) ? ` · <a href="#/leccion/${q.sec}">Repasar la lección</a>` : ""}</div>`;
function viewQuiz() {
  const Z = S.quiz;
  if (!Z) return go("#/aprender");
  if (Z.done) return viewQuizSummary();
  const id = Z.ids[Z.i], q = QMAP[id], order = Z.perm[id];
  const answered = Z.ans[id], sel = answered ? answered.sel : (Z.sel[id] || []);
  const t = topicById(q.tema);
  const optHtml = order.map((oi, k) => {
    let cls = "";
    if (answered) { const isC = q.a.includes(oi), isS = sel.includes(oi); cls = isC && isS ? "correct" : isS ? "wrong" : isC ? "correct missed" : "dim"; }
    else if (sel.includes(oi)) cls = "sel";
    return `<button class="opt ${cls}" data-oi="${oi}" ${answered ? "disabled" : ""}><span class="k">${LET[k]}</span><span class="t">${esc(q.o[oi])}</span></button>`;
  }).join("");
  let fb = "";
  if (answered) {
    const s = answered.status, showExp = Z.showExp != null ? Z.showExp : s !== "ok";
    fb = `<div class="feedback ${s}">${s === "ok" ? ic("check") + " ¡Correcta!" : s === "partial" ? "Parcialmente correcta · " + fmt1(answered.score) + " / 0,5" : "Incorrecta"}
      <button class="linkbtn" id="z-exp">${showExp ? "Ocultar explicación" : "Ver explicación"}</button></div>
      ${showExp ? `<div class="explain">${explainHtml(q)}</div>` : ""}`;
  }
  app.innerHTML = `
  <div class="quiz-head"><a class="small muted" href="javascript:void 0" id="z-end">✕ ${Object.keys(Z.ans).length ? "Terminar" : "Salir"}</a><div class="bar"><i style="width:${pct(Z.i + (answered ? 1 : 0), Z.ids.length)}%"></i></div><span class="small muted">${Z.i + 1}/${Z.ids.length}</span></div>
  <article class="qcard">
    <div class="qmeta"><span class="tag" style="background:${t.color}1a;color:${t.color}">Tema ${t.num} · ${esc(q.apartado)}</span>
    ${q.bank === "exam" ? `<span class="tag brand">Examen real ${esc(q.examId.slice(-2))} · P${q.n}</span>` : `<span class="tag">${DIFF[q.d]}</span>`}${q.multi ? `<span class="tag warn">Varias respuestas</span>` : ""}</div>
    <div class="qtext">${esc(q.q)}</div>
    ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}" loading="lazy"><figcaption>Figura original del examen</figcaption></figure>` : ""}
    <div class="opts">${optHtml}</div>
    ${!answered && q.multi ? `<p class="tiny muted mt">Marca todas las que correspondan. Puntúa 0,5 × máx(0, (aciertos − fallos)/nº correctas).</p>` : ""}
    ${fb}
  </article>
  <div class="lesson-nav">${Z.i > 0 ? `<button class="btn ghost" id="z-prev">${ic("back")}</button>` : "<span></span>"}
    ${!answered && q.multi ? `<button class="btn primary big" id="z-check" ${sel.length ? "" : "disabled"}>Comprobar</button>` : answered ? `<button class="btn primary big" id="z-next">${Z.i < Z.ids.length - 1 ? "Siguiente" : "Ver resultado"} ${ic("arrow")}</button>` : "<span></span>"}</div>`;
  const rer = () => { save(); viewQuiz(); renderMath(app); };
  const answer = selArr => { const r = scoreQ(q, selArr); Z.ans[id] = { sel: selArr, score: r.score, status: r.status }; recordAnswer(q, r.status); Z.showExp = null; rer(); };
  $$(".opt").forEach(b => b.onclick = () => { const oi = +b.dataset.oi; if (q.multi) { const s = new Set(Z.sel[id] || []); s.has(oi) ? s.delete(oi) : s.add(oi); Z.sel[id] = Array.from(s); rer(); } else answer([oi]); });
  const chk = $("#z-check"); if (chk) chk.onclick = () => answer(Z.sel[id] || []);
  const ex = $("#z-exp"); if (ex) ex.onclick = () => { const cur = Z.showExp != null ? Z.showExp : answered.status !== "ok"; Z.showExp = !cur; rer(); };
  const pv = $("#z-prev"); if (pv) pv.onclick = () => { Z.i--; Z.showExp = null; rer(); };
  const nx = $("#z-next"); if (nx) nx.onclick = () => { if (Z.i < Z.ids.length - 1) { Z.i++; Z.showExp = null; rer(); window.scrollTo(0, 0); } else finishQuiz(); };
  $("#z-end").onclick = () => { if (!Object.keys(Z.ans).length) { S.quiz = null; save(); return history.back(); } confirmBox("Terminar", `Has respondido ${Object.keys(Z.ans).length} de ${Z.ids.length}. Las no respondidas no cuentan.`, "Ver resultado", finishQuiz); };
}
function finishQuiz() {
  const Z = S.quiz; if (!Z) return;
  Z.done = true;
  const vals = Object.values(Z.ans);
  if (vals.length) S.sessions.push({ t: Date.now(), n: vals.length, ok: vals.filter(a => a.status === "ok").length, title: Z.title });
  if (S.sessions.length > 200) S.sessions = S.sessions.slice(-200);
  if (Z.lesson) S.lessons[Z.lesson] = Object.assign(S.lessons[Z.lesson] || {}, { done: true, t: Date.now(), score: pct(vals.filter(a => a.status === "ok").length, Z.ids.length) });
  save(); viewQuiz(); renderMath(app); window.scrollTo(0, 0);
}
function viewQuizSummary() {
  const Z = S.quiz;
  const vals = Z.ids.map(id => Z.ans[id]);
  const ok = vals.filter(a => a && a.status === "ok").length, ko = vals.filter(a => a && a.status === "ko").length, pa = vals.filter(a => a && a.status === "partial").length, bl = vals.filter(a => !a).length;
  const p = pct(ok, Z.ids.length - bl || 1);
  const wrongIds = Z.ids.filter(id => Z.ans[id] && Z.ans[id].status !== "ok");
  const nl = Z.lesson ? nextLesson() : null;
  const msg = p >= 80 ? "¡Muy bien!" : p >= 50 ? "Vas por buen camino" : "Conviene repasar";
  const byAp = {}; Z.ids.forEach(id => { const a = Z.ans[id]; if (!a) return; const k = QMAP[id].apartado; const r = byAp[k] || (byAp[k] = { n: 0, ok: 0, tema: QMAP[id].tema }); r.n++; if (a.status === "ok") r.ok++; });
  app.innerHTML = `<div class="card center-card">
    ${donut(p, "aciertos", "", p >= 70 ? "#0f8a5f" : p >= 50 ? "#2563eb" : "#c2413b", 150)}
    <h2>${msg}</h2><p class="muted mb0">${esc(Z.title)} · ${ok} correctas, ${ko} incorrectas${pa ? `, ${pa} parciales` : ""}${bl ? `, ${bl} sin responder` : ""}</p>
    <div class="row center mt">
      ${Z.lesson ? (nl ? `<a class="btn primary big" href="#/leccion/${nl.id}">Siguiente lección ${ic("arrow")}</a>` : `<a class="btn primary big" href="#/aprender">Ver la ruta</a>`) : wrongIds.length ? `<button class="btn primary big" id="s-wrong">Repetir las ${wrongIds.length} falladas</button>` : `<a class="btn primary big" href="${Z.fromExam ? "#/examenes" : "#/"}">Continuar</a>`}
    </div>
    ${Z.lesson && wrongIds.length ? `<a class="small" href="#/leccion/${Z.lesson}">Volver a leer la lección</a>` : ""}
  </div>
  ${Object.keys(byAp).length > 1 ? `<div class="card mt"><div class="card-h"><h3>Por apartado</h3></div>${hbars(Object.entries(byAp).map(([k, r]) => ({ label: k.slice(0, 24), value: pct(r.ok, r.n), color: topicById(r.tema).color, tip: `${r.ok}/${r.n}` })), { labelW: 180 })}</div>` : ""}
  <details class="card mt"><summary class="sum-h">Revisar las ${Z.ids.length} preguntas</summary>
  ${Z.ids.map((id, k) => reviewItem(QMAP[id], Z.ans[id] ? Z.ans[id].sel : [], k + 1, Z.perm[id])).join("")}</details>`;
  const w = $("#s-wrong"); if (w) w.onclick = () => startQuiz({ ids: wrongIds, title: Z.title + " · falladas", fromExam: Z.fromExam });
}
function reviewItem(q, sel, n, order) {
  sel = sel || []; order = order || q.o.map((_, i) => i);
  const r = scoreQ(q, sel);
  const tag = { ok: `<span class="tag ok">Correcta · ${fmt1(r.score)}</span>`, ko: `<span class="tag ko">Incorrecta · 0,00</span>`, partial: `<span class="tag warn">Parcial · ${fmt1(r.score)}</span>`, blank: `<span class="tag">En blanco · 0,00</span>` }[r.status];
  return `<div class="review-item"><div class="rh"><b>Pregunta ${n}</b>${tag}</div>
  <div style="font-weight:600;margin-bottom:8px;white-space:pre-line">${esc(q.q)}</div>
  ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}" loading="lazy"></figure>` : ""}
  ${order.map((oi, k) => { const isC = q.a.includes(oi), isS = sel.includes(oi);
    return `<div class="ropt ${isC ? "correct" : isS ? "wrong" : ""}"><span class="k">${LET[k]}</span><span style="white-space:pre-line">${esc(q.o[oi])}</span><span class="who">${isS ? "Tu respuesta" + (isC ? " ✓" : " ✗") : isC ? "Correcta" : ""}</span></div>`; }).join("")}
  <details class="mt"><summary class="small linkish">Explicación</summary><div class="explain">${explainHtml(q)}</div></details></div>`;
}

/* ---------- falladas ---------- */
function viewFailed() {
  const ids = failedIds().sort((a, b) => S.failed[b] - S.failed[a]);
  const by = {}; ids.forEach(id => { const t = QMAP[id].tema; by[t] = (by[t] || 0) + 1; });
  app.innerHTML = `<div class="crumbs"><a href="#/practicar">Test libre</a> › Falladas</div><h1>Preguntas falladas</h1>
  ${ids.length ? `<div class="card"><div class="card-h"><h3>${ids.length} pendientes</h3><button class="btn primary" id="f-all">${ic("play")} Corregirlas</button></div>
  ${hbars(TOPICS.filter(t => by[t.id]).map(t => ({ label: t.num + ". " + t.short, value: pct(by[t.id], ids.length), color: t.color, tip: by[t.id] + " preguntas" })), { label: "Reparto de falladas" })}
  <p class="tiny muted mb0">Porcentaje del total de falladas en cada tema. Una pregunta sale de la lista cuando la aciertas.</p></div>
  <div class="card mt"><ul class="list">${ids.map(id => { const q = QMAP[id], t = topicById(q.tema); return `<li class="clickable" data-fq="${id}"><span><span class="dot" style="background:${t.color}"></span> ${esc(q.q.length > 120 ? q.q.slice(0, 120) + "…" : q.q)}</span>${ic("arrow", "chev")}</li>`; }).join("")}</ul></div>
  <button class="linkbtn danger mt" id="f-clear">Vaciar la lista</button>`
  : `<div class="card center-card">${ic("check", "big-ic")}<h2>Nada pendiente</h2><p class="muted">No tienes preguntas falladas.</p><a class="btn soft" href="#/practicar">Hacer un test</a></div>`}`;
  const fa = $("#f-all"); if (fa) fa.onclick = startFailedQuiz;
  $$("[data-fq]").forEach(b => b.onclick = () => startQuiz({ ids: [b.dataset.fq], title: "Repaso" }));
  const fc = $("#f-clear"); if (fc) fc.onclick = () => confirmBox("Vaciar falladas", "Se quitarán todas las preguntas de la lista. Tus estadísticas no cambian.", "Vaciar", () => { S.failed = {}; save(); route(); }, { danger: true });
}

/* =====================================================================
   EXÁMENES ANTERIORES
   ===================================================================== */
function viewExams() {
  const hist = S.history.slice();
  app.innerHTML = `<h1>Exámenes anteriores</h1>
  <p class="muted">Preguntas originales y corrección con la hoja oficial. Cada pregunta vale 0,5; en las de varias respuestas, 0,5 × máx(0, (correctas − incorrectas marcadas)/nº de correctas).</p>
  <div class="section-title"><h2>PA1 · 11 de noviembre de 2025</h2><span class="tag ok">Solución oficial</span></div>
  <div class="grid g4">${EXAMS.map(e => { const att = hist.filter(h => h.examId === e.id), best = att.length ? Math.max(...att.map(h => h.grade)) : null;
    return `<button class="card exam-tile" data-ex="${e.id}"><span class="v-badge">${e.version}</span><b>Versión ${e.version}</b><small>20 preguntas · 40 min</small>
    <span class="score-line">${best != null ? `<span class="minibar"><i style="width:${best * 10}%;background:${best >= 5 ? "var(--ok)" : "var(--ko)"}"></i></span><span>${fmt1(best)}</span>` : `<span class="muted">Sin intentos</span>`}</span></button>`; }).join("")}</div>
  <p class="tiny muted">Las cuatro versiones tienen las mismas 20 preguntas en distinto orden.</p>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Evolución de tus notas</h3><span class="small muted">${hist.length} intento${hist.length === 1 ? "" : "s"}</span></div>
    ${hist.length ? lineChart(hist.slice(-15).map(h => h.grade), 10, hist.slice(-15).map(h => h.examId.slice(-2) + " " + new Date(h.t).toLocaleDateString("es-ES", { day: "numeric", month: "numeric" })), "", 5) : `<div class="empty">Haz un examen para ver tu evolución.</div>`}</div>
    <div class="card"><div class="card-h"><h3>Preguntas de examen por tema</h3></div>
    ${hbars(TOPICS.map(t => { const qs = EXAM_POOL.map(id => QMAP[id]).filter(q => q.tema === t.id); return { label: t.num + ". " + t.short + " (" + qs.length + ")", value: mastery(qs), color: t.color }; }), { labelW: 170 })}
    <div class="chips mt">${TOPICS.map(t => `<a class="chip" href="javascript:void 0" data-et="${t.id}">Practicar ${t.num}</a>`).join("")}</div></div>
  </div>
  ${hist.length ? `<div class="section-title"><h2>Últimos intentos</h2></div><div class="card"><ul class="list">${hist.slice().reverse().slice(0, 8).map(h => `<li class="clickable" data-h="${h.id}"><span><b>${fmt1(h.grade)}</b> <span class="muted small">· Versión ${h.examId.slice(-2)} · ${h.mode === "sim" ? "simulacro" : "sin tiempo"} · ${fmtDate(h.t)}</span></span><span class="small muted">${h.ok}✓ ${h.ko}✗ ${h.partial ? h.partial + "◐ " : ""}${h.blank}○ ${ic("arrow", "chev")}</span></li>`).join("")}</ul></div>` : ""}
  <details class="card mt"><summary class="sum-h">PA1 · 12 de noviembre de 2024 <span class="tag warn">Sin enunciados</span></summary>
  <p class="small muted">Solo está disponible la hoja oficial de soluciones; los enunciados no se adjuntaron, así que estas preguntas no se pueden responder.</p>
  <div style="overflow-x:auto"><table class="keytbl"><thead><tr><th>P</th><th>Test 1</th><th>Test 2</th><th>Test 3</th><th>Test 4</th></tr></thead><tbody>
  ${EXAM_KEYS_2024.T1.map((_, i) => `<tr><td>${i + 1}</td>${["T1", "T2", "T3", "T4"].map(v => `<td>${esc(EXAM_KEYS_2024[v][i])}</td>`).join("")}</tr>`).join("")}</tbody></table></div></details>
  ${hist.length ? `<button class="linkbtn danger mt" id="h-clear">Borrar historial de exámenes</button>` : ""}`;
  $$("[data-ex]").forEach(b => b.onclick = () => { const id = b.dataset.ex, v = id.slice(-2);
    chooseBox("Versión " + v, "Prueba adelantada PA1 · 11/11/2025 · 20 preguntas", [
      { icon: "exam", title: "Simulacro de examen", sub: "40 minutos, se entrega solo al acabar el tiempo", run: () => startExam(id, "sim") },
      { icon: "book", title: "Examen sin tiempo", sub: "Respondes todo y corriges al entregar", run: () => startExam(id, "full") },
      { icon: "check", title: "Pregunta a pregunta", sub: "Corrección inmediata con explicación", run: () => startQuiz({ ids: EXAM_Q[id].map(q => q.id), title: "PA1 2025 " + v, fromExam: true }) }]); });
  $$("[data-et]").forEach(b => b.onclick = () => startQuiz({ ids: shuffle(EXAM_POOL.filter(id => QMAP[id].tema === b.dataset.et)), title: "Examen · Tema " + topicById(b.dataset.et).num, fromExam: true }));
  $$("[data-h]").forEach(li => li.onclick = () => go("#/resultado/" + li.dataset.h));
  const hc = $("#h-clear"); if (hc) hc.onclick = () => confirmBox("Borrar historial", "Se eliminarán todos los intentos de examen guardados.", "Borrar", () => { S.history = []; save(); route(); }, { danger: true });
}
function startExam(id, mode) {
  const begin = () => { const ex = EXAMS.find(e => e.id === id); S.exam = { examId: id, mode, start: Date.now(), deadline: mode === "sim" ? Date.now() + ex.time * 60000 : null, ans: {}, cur: 0 }; save(); go("#/examen"); };
  if (S.exam) confirmBox("Examen en curso", "Ya tienes un examen sin entregar. Si empiezas otro, se descartará.", "Empezar nuevo", begin, { danger: true });
  else begin();
}
function viewExamRunner() {
  const E = S.exam;
  if (!E) return go("#/examenes");
  const ex = EXAMS.find(e => e.id === E.examId), qs = EXAM_Q[E.examId];
  const q = qs[E.cur], sel = E.ans[q.n] || [];
  const nAns = qs.filter(x => (E.ans[x.n] || []).length).length;
  app.innerHTML = `<div class="exam-top"><span class="small"><b>PA1 2025 · ${ex.version}</b> <span class="muted">${E.mode === "sim" ? "simulacro" : "sin límite"}</span></span>
    <span class="timer" id="e-timer">--:--</span><button class="btn primary sm" id="e-submit">Entregar</button></div>
  <div class="exam-layout"><div>
    <article class="qcard">
      <div class="qmeta"><span class="tag brand">Pregunta ${q.n} de ${qs.length}</span>${q.multi ? `<span class="tag warn">Puede haber más de una</span>` : ""}</div>
      <div class="qtext">${esc(q.q)}</div>
      ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}"><figcaption>Figura original del examen</figcaption></figure>` : ""}
      <div class="opts">${q.o.map((o, i) => `<button class="opt ${sel.includes(i) ? "sel" : ""}" data-i="${i}"><span class="k">${"abcd"[i]}</span><span class="t">${esc(o)}</span></button>`).join("")}</div>
      ${sel.length ? `<button class="linkbtn mt" id="e-clear">Dejar en blanco</button>` : ""}
    </article>
    <div class="lesson-nav">${E.cur > 0 ? `<button class="btn ghost" id="e-prev">${ic("back")} Anterior</button>` : "<span></span>"}${E.cur < qs.length - 1 ? `<button class="btn primary big" id="e-next">Siguiente ${ic("arrow")}</button>` : `<button class="btn primary big" id="e-submit2">Entregar examen</button>`}</div>
  </div>
  <aside class="exam-side card"><div class="small muted">${nAns} de ${qs.length} respondidas</div>
    <div class="qgrid">${qs.map((x, k) => `<button class="${(E.ans[x.n] || []).length ? "ans" : ""} ${k === E.cur ? "cur" : ""}" data-go="${k}" aria-label="Pregunta ${x.n}">${x.n}</button>`).join("")}</div>
    <div class="side-links"><button class="linkbtn" id="e-exit">Salir y continuar luego</button><button class="linkbtn danger" id="e-restart">Reiniciar examen</button></div>
  </aside></div>`;
  const tick = () => {
    const el = $("#e-timer"); if (!el || !S.exam) return;
    if (E.mode === "sim") { const left = (E.deadline - Date.now()) / 1000; el.textContent = "⏱ " + fmtTime(left); el.classList.toggle("low", left < 300); if (left <= 0) { clearInterval(timerId); submitExam(true); } }
    else el.textContent = "⏱ " + fmtTime((Date.now() - E.start) / 1000);
  };
  tick(); timerId = setInterval(tick, 1000);
  const rerender = () => { clearInterval(timerId); save(); viewExamRunner(); renderMath(app); };
  $$(".opt").forEach(b => b.onclick = () => { const i = +b.dataset.i; let s = new Set(E.ans[q.n] || []); if (q.multi) s.has(i) ? s.delete(i) : s.add(i); else s = s.has(i) ? new Set() : new Set([i]); E.ans[q.n] = Array.from(s); rerender(); });
  const cl = $("#e-clear"); if (cl) cl.onclick = () => { E.ans[q.n] = []; rerender(); };
  const pv = $("#e-prev"); if (pv) pv.onclick = () => { E.cur--; rerender(); window.scrollTo(0, 0); };
  const nx = $("#e-next"); if (nx) nx.onclick = () => { E.cur++; rerender(); window.scrollTo(0, 0); };
  $$("[data-go]").forEach(b => b.onclick = () => { E.cur = +b.dataset.go; rerender(); });
  const askSubmit = () => { const nb = qs.length - qs.filter(x => (E.ans[x.n] || []).length).length; confirmBox("Entregar examen", nb ? `Te quedan <b>${nb}</b> pregunta${nb > 1 ? "s" : ""} en blanco. ¿Entregar igualmente?` : "Has respondido todas las preguntas. ¿Entregar ahora?", "Entregar", () => submitExam(false)); };
  $("#e-submit").onclick = askSubmit; const s2 = $("#e-submit2"); if (s2) s2.onclick = askSubmit;
  $("#e-restart").onclick = () => confirmBox("Reiniciar examen", "Se borrarán tus respuestas y el tiempo empezará de nuevo.", "Reiniciar", () => { E.ans = {}; E.cur = 0; E.start = Date.now(); if (E.mode === "sim") E.deadline = Date.now() + ex.time * 60000; rerender(); }, { danger: true });
  $("#e-exit").onclick = () => go("#/examenes");
}
function submitExam(auto) {
  const E = S.exam; if (!E) return;
  const qs = EXAM_Q[E.examId];
  let total = 0, ok = 0, ko = 0, partial = 0, blankN = 0;
  qs.forEach(q => { const r = scoreQ(q, E.ans[q.n]); total += r.score; if (r.status === "ok") ok++; else if (r.status === "ko") ko++; else if (r.status === "partial") partial++; else blankN++; recordAnswer(q, r.status); });
  const dur = E.mode === "sim" ? Math.min((Date.now() - E.start) / 1000, (E.deadline - E.start) / 1000) : (Date.now() - E.start) / 1000;
  const h = { id: "h" + Date.now(), examId: E.examId, mode: E.mode, t: Date.now(), grade: Math.round(total * 1000) / 1000, ok, ko, partial, blank: blankN, dur: Math.round(dur), ans: E.ans, auto: !!auto };
  S.history.push(h); S.exam = null; save();
  go("#/resultado/" + h.id);
  if (auto) setTimeout(() => confirmBox("Tiempo agotado", "Se acabaron los 40 minutos y el examen se ha entregado automáticamente.", "Ver resultado", () => {}, { noCancel: true }), 50);
}
function viewResult(hid) {
  const h = S.history.find(x => x.id === hid);
  if (!h) return go("#/examenes");
  const ex = EXAMS.find(e => e.id === h.examId), qs = EXAM_Q[h.examId];
  const filt = viewResult.filter || "all";
  const show = qs.filter(q => { const st = scoreQ(q, h.ans[q.n]).status; return filt === "all" || (filt === "wrong" ? (st === "ko" || st === "partial") : filt === st); });
  const byT = {}; qs.forEach(q => { const r = scoreQ(q, h.ans[q.n]); const b = byT[q.tema] || (byT[q.tema] = { s: 0, n: 0 }); b.s += r.score; b.n += 0.5; });
  app.innerHTML = `<div class="crumbs"><a href="#/examenes">Exámenes</a> › Resultado</div>
  <div class="card result-hero">
    ${donut(Math.round(h.grade * 10), "", "", h.grade >= 5 ? "#0f8a5f" : "#c2413b", 150).replace(/>\d+%<\/text>/, `>${fmt1(h.grade)}</text>`).replace('class="d-l"></text>', 'class="d-l">sobre 10</text>')}
    <div class="rh-main"><div class="eyebrow">PA1 2025 · Versión ${ex.version} · ${h.mode === "sim" ? "simulacro" : "sin tiempo"} · ${fmtTime(h.dur)}${h.auto ? " · entregado automáticamente" : ""}</div>
      <h2>${h.grade >= 5 ? "Aprobado" : "Suspenso"} · ${fmt1(h.grade)}</h2>
      <div class="kpis"><div class="kpi ok"><b>${h.ok}</b><span>aciertos</span></div><div class="kpi ko"><b>${h.ko}</b><span>errores</span></div><div class="kpi partial"><b>${h.partial}</b><span>parciales</span></div><div class="kpi"><b>${h.blank}</b><span>en blanco</span></div></div>
      <div class="qgrid res">${qs.map(q => { const st = scoreQ(q, h.ans[q.n]).status; return `<button class="r-${st}" data-jump="${q.n}" title="Pregunta ${q.n}">${q.n}</button>`; }).join("")}</div></div></div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Puntos obtenidos por tema</h3></div>${hbars(Object.entries(byT).map(([t, b]) => ({ label: topicById(t).num + ". " + topicById(t).short, value: pct(b.s, b.n), color: topicById(t).color, tip: fmt1(b.s) + " de " + fmt1(b.n) + " puntos" })), { labelW: 150 })}</div>
    <div class="card"><div class="card-h"><h3>¿Y ahora?</h3></div><p class="small muted">Corrección con la hoja oficial de soluciones (11/11/2025).</p>
      <div class="row">${h.ko + h.partial ? `<button class="btn primary" id="r-wrong">Practicar las falladas</button>` : ""}<button class="btn soft" id="r-retry">Repetir examen</button></div></div>
  </div>
  <div class="section-title"><h2>Revisión</h2></div>
  <div class="tabs">${[["all", "Todas"], ["wrong", "Falladas"], ["blank", "En blanco"], ["ok", "Correctas"]].map(([k, l]) => `<button class="${filt === k ? "active" : ""}" data-f="${k}">${l}</button>`).join("")}</div>
  ${show.length ? show.map(q => `<div id="rq${q.n}">${reviewItem(q, h.ans[q.n], q.n)}</div>`).join("") : `<div class="card empty">No hay preguntas en este filtro.</div>`}`;
  $$("[data-f]").forEach(b => b.onclick = () => { viewResult.filter = b.dataset.f; viewResult(hid); renderMath(app); });
  $$("[data-jump]").forEach(b => b.onclick = () => { viewResult.filter = "all"; viewResult(hid); renderMath(app); const el = document.getElementById("rq" + b.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth" }); });
  $("#r-retry").onclick = () => startExam(h.examId, h.mode);
  const rw = $("#r-wrong"); if (rw) rw.onclick = () => startQuiz({ ids: qs.filter(q => { const st = scoreQ(q, h.ans[q.n]).status; return st === "ko" || st === "partial"; }).map(q => q.id), title: "Falladas del examen " + ex.version, fromExam: true });
}

/* =====================================================================
   PROGRESO
   ===================================================================== */
function viewProgress() {
  const g = globalStats();
  const ap = apartadoStats().filter(r => r.n >= 1).sort((a, b) => a.p - b.p || b.n - a.n).slice(0, 8);
  const sess = S.sessions.slice(-20), hist = S.history.slice(-15);
  const byD = [1, 2, 3].map(d => { let n = 0, ok = 0; LEARN.filter(q => q.d === d).forEach(q => { const s = S.qs[q.id]; if (s) { n += s.n; ok += s.ok; } }); return { d, n, ok }; });
  app.innerHTML = `<h1>Tu progreso</h1>
  <div class="card kpi-row">
    <div>${donut(g.m, "dominio", "", "#2563eb", 120)}</div>
    <div class="kstat"><b>${LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length}/${LESSONS.length}</b><span>lecciones completadas</span></div>
    <div class="kstat"><b>${g.seen}</b><span>preguntas distintas vistas</span></div>
    <div class="kstat"><b>${g.n ? g.p + "%" : "—"}</b><span>aciertos (${g.ok}/${g.n})</span></div>
    <div class="kstat"><b>${streak()}</b><span>días seguidos</span></div>
  </div>
  <div class="card mt"><div class="card-h"><h3>Mapa de lecciones</h3><span class="small muted">Toca una lección para abrirla</span></div>${lessonGrid()}</div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Dominio por tema</h3></div>${hbars(TOPICS.map(t => { const s = topicStats(t.id); return { label: t.num + ". " + t.short, value: s.m, color: t.color, tip: `${s.seen}/${s.total} vistas · ${s.p}% aciertos` }; }))}</div>
    <div class="card"><div class="card-h"><h3>Aciertos por dificultad</h3></div>${hbars(byD.map(r => ({ label: DIFF[r.d], value: pct(r.ok, r.n), color: SEQ[r.d + 1], tip: `${r.ok}/${r.n} respuestas` })), { labelW: 110 })}</div>
    <div class="card"><div class="card-h"><h3>Notas de examen</h3></div>${hist.length ? lineChart(hist.map(h => h.grade), 10, hist.map(h => h.examId.slice(-2)), "", 5) : `<div class="empty">Aún no hay exámenes.</div>`}</div>
    <div class="card"><div class="card-h"><h3>Aciertos en tus últimos test</h3></div>${sess.length ? lineChart(sess.map(s => pct(s.ok, s.n)), 100, sess.map(s => s.title), "%") : `<div class="empty">Aún no hay test completados.</div>`}</div>
  </div>
  <div class="card mt"><div class="card-h"><h3>Actividad</h3></div>${heatmap(window.innerWidth < 600 ? 10 : 20)}</div>
  ${ap.length ? `<div class="card mt"><div class="card-h"><h3>Apartados para reforzar</h3><span class="small muted">Toca para practicar</span></div>
    ${hbars(ap.map(r => ({ label: r.apartado.slice(0, 24), value: r.p, color: topicById(r.tema).color, tip: `${r.ok}/${r.n}` })), { labelW: 180 })}
    <div class="chips">${ap.slice(0, 4).map((r, i) => `<a class="chip" href="javascript:void 0" data-wk="${i}">${esc(r.apartado)}</a>`).join("")}</div></div>` : ""}
  <details class="card mt"><summary class="sum-h">Guardar o reiniciar el progreso</summary>
    <p class="small muted">El progreso se guarda en este navegador. Puedes exportarlo e importarlo en otro dispositivo.</p>
    <div class="row"><button class="btn" id="p-exp">Exportar</button><label class="btn" style="cursor:pointer">Importar<input type="file" id="p-imp" accept="application/json" hidden></label><button class="btn ghost danger" id="p-reset">Reiniciar todo</button></div></details>`;
  $$("[data-wk]").forEach(b => b.onclick = () => { const r = ap[+b.dataset.wk]; startQuiz({ ids: shuffle(Object.values(QMAP).filter(q => q.tema === r.tema && q.apartado === r.apartado && inPool(q)).map(q => q.id)), title: "Refuerzo: " + r.apartado }); });
  $("#p-exp").onclick = () => { const blob = new Blob([JSON.stringify(S)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "progreso-estructuras.json"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
  $("#p-imp").onchange = e => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { try { const d = JSON.parse(rd.result); if (!d || typeof d !== "object" || !d.qs) throw new Error(); S = Object.assign(blank(), d); save(); route(); } catch (err) { confirmBox("Archivo no válido", "No se ha podido leer el archivo.", "Aceptar", () => {}, { noCancel: true }); } }; rd.readAsText(f); };
  $("#p-reset").onclick = () => confirmBox("Reiniciar progreso", "Se borrará todo: estadísticas, lecciones, tarjetas, falladas e historial. No se puede deshacer.", "Borrar todo", () => { S = blank(); save(); route(); }, { danger: true });
}

/* arranque */
if (S.exam && S.exam.mode === "sim" && Date.now() > S.exam.deadline) submitExam(true); else route();
})();
