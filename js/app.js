/* =====================================================================
   Cálculo y Diseño de Estructuras · App de estudio (SPA sin dependencias)
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
const fmtDate = t => new Date(t).toLocaleString("es-ES", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
const topicById = id => TOPICS.find(t => t.id === id);
const DIFF = { 1: "Básica", 2: "Media", 3: "Avanzada" };

/* ---------- persistencia ---------- */
const LS_KEY = "cde_estructuras_v1";
const blank = () => ({ qs: {}, failed: {}, history: [], sessions: [], exam: null, quiz: null });
let S = blank();
try { const raw = localStorage.getItem(LS_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* almacenamiento no disponible */ }
function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ } }

/* ---------- bancos de preguntas ---------- */
const QMAP = {};
LEARN.forEach(q => { q.bank = "learn"; q.src = "Banco de aprendizaje · " + q.ref; QMAP[q.id] = q; });
const EXAM_Q = {};
EXAMS.forEach(ex => { EXAM_Q[ex.id] = buildExamQuestions(ex); EXAM_Q[ex.id].forEach(q => { q.bank = "exam"; q.examId = ex.id; QMAP[q.id] = q; }); });
// Pool de práctica de exámenes reales sin duplicados: versión T1 + la variante de T3 (P1)
const EXAM_POOL = EXAM_Q["PA1-2025-T1"].map(q => q.id).concat(["PA1-2025-T3-P1"]);
const fixedOrder = q => q.bank === "exam" || q.o.some(o => /anteriores|Alguna de/i.test(o));

/* ---------- puntuación (sistema oficial del examen) ---------- */
function scoreQ(q, sel) {
  sel = sel || [];
  if (!sel.length) return { score: 0, status: "blank" };
  const c = sel.filter(i => q.a.includes(i)).length, w = sel.length - c;
  const score = 0.5 * Math.max(0, (c - w) / q.a.length);
  const status = score >= 0.5 - 1e-9 ? "ok" : score > 0 ? "partial" : "ko";
  return { score, status };
}
function recordAnswer(q, status) {
  const st = S.qs[q.id] || (S.qs[q.id] = { n: 0, ok: 0, last: null });
  st.n++; if (status === "ok") st.ok++; st.last = status; st.t = Date.now();
  if (status === "ok") delete S.failed[q.id]; else if (status !== "blank") S.failed[q.id] = Date.now();
}

/* ---------- estadísticas ---------- */
function topicStats(tid) {
  let n = 0, ok = 0, seen = 0, total = 0;
  Object.values(QMAP).forEach(q => {
    if (q.tema !== tid) return;
    if (q.bank === "exam" && !EXAM_POOL.includes(q.id) && !S.qs[q.id]) return;
    total++;
    const st = S.qs[q.id]; if (st) { n += st.n; ok += st.ok; seen++; }
  });
  return { n, ok, seen, total, p: pct(ok, n) };
}
function apartadoStats(tid) {
  const m = {};
  Object.values(QMAP).forEach(q => {
    if (tid && q.tema !== tid) return;
    const st = S.qs[q.id]; if (!st) return;
    const k = q.tema + "|" + q.apartado;
    const r = m[k] || (m[k] = { tema: q.tema, apartado: q.apartado, n: 0, ok: 0 });
    r.n += st.n; r.ok += st.ok;
  });
  return Object.values(m).map(r => Object.assign(r, { p: pct(r.ok, r.n) }));
}
function globalStats() {
  let n = 0, ok = 0, seen = 0;
  Object.values(S.qs).forEach(st => { n += st.n; ok += st.ok; seen++; });
  const sims = S.history.filter(h => h.mode === "sim");
  const best = S.history.length ? Math.max(...S.history.map(h => h.grade)) : null;
  return { n, ok, seen, p: pct(ok, n), failed: Object.keys(S.failed).filter(id => QMAP[id]).length, best, sims: sims.length, exams: S.history.length };
}

/* ---------- router ---------- */
const app = $("#app");
let timerId = null;
function go(h) { if (location.hash === h) route(); else location.hash = h; }
window.addEventListener("hashchange", route);
function route() {
  clearInterval(timerId); timerId = null;
  const md = $("#modal"); if (!md.hidden && !md.dataset.keep) { md.hidden = true; md.innerHTML = ""; }
  delete md.dataset.keep;
  const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").map(decodeURIComponent);
  const [p0, p1, p2] = parts;
  const navKey = { "": "home", aprender: "aprender", tema: "aprender", practicar: "aprender", quiz: null, falladas: "aprender", examenes: "examenes", examen: "examenes", resultado: "examenes", progreso: "progreso" }[p0 || ""];
  $$("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === (navKey || (p0 === "quiz" ? (S.quiz && S.quiz.fromExam ? "examenes" : "aprender") : ""))));
  try {
    switch (p0 || "") {
      case "": viewHome(); break;
      case "aprender": viewLearn(); break;
      case "tema": viewTopic(p1, p2 || "resumen"); break;
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
  updateBanner();
  renderMath(app);
  if (!/^(quiz|examen)$/.test(p0)) window.scrollTo(0, 0);
}
function renderMath(el) {
  if (window.renderMathInElement) {
    try { renderMathInElement(el, { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }], throwOnError: false }); } catch (e) { /* noop */ }
  }
}
function updateBanner() {
  const b = $("#resume-banner");
  const onExam = location.hash.startsWith("#/examen") && !location.hash.startsWith("#/examenes");
  if (S.exam && !onExam) {
    const ex = EXAMS.find(e => e.id === S.exam.examId);
    const left = S.exam.mode === "sim" ? " · quedan " + fmtTime((S.exam.deadline - Date.now()) / 1000) : "";
    b.innerHTML = `Tienes un examen en curso (${esc(ex ? ex.version : "")}${S.exam.mode === "sim" ? ", simulacro" : ""}${left}). <button class="btn sm primary" id="bn-resume">Continuar</button>`;
    b.hidden = false; $("#bn-resume").onclick = () => go("#/examen");
  } else b.hidden = true;
}

/* ---------- modal ---------- */
function confirmBox(title, html, okText, onOk, opts = {}) {
  const m = $("#modal");
  m.innerHTML = `<div class="box" role="dialog" aria-modal="true"><h3>${title}</h3><div class="muted">${html}</div>
  <div class="actions"><button class="btn ghost" id="m-no">${opts.cancel || "Cancelar"}</button><button class="btn ${opts.danger ? "danger" : "primary"}" id="m-ok">${okText}</button></div></div>`;
  m.hidden = false;
  const close = () => { m.hidden = true; m.innerHTML = ""; };
  $("#m-no").onclick = close; m.onclick = e => { if (e.target === m) close(); };
  $("#m-ok").onclick = () => { close(); onOk(); };
}

/* =====================================================================
   INICIO
   ===================================================================== */
function viewHome() {
  const g = globalStats();
  const nLearn = LEARN.length, nExam = Object.values(EXAM_Q).reduce((a, x) => a + x.length, 0);
  const weak = apartadoStats().filter(r => r.n >= 2).sort((a, b) => a.p - b.p).slice(0, 4);
  app.innerHTML = `
  <section class="hero">
    <svg class="deco" viewBox="0 0 240 160" fill="none" stroke="#fff" stroke-width="3"><path d="M10 150h220M20 150V90l40-40 40 40v60M100 150V70l60-50 60 50v80M20 90h80M100 70h120M60 50v100M160 20v130M120 150l40-40 40 40M120 110l40-40 40 40"/></svg>
    <h1>Prepara Cálculo y Diseño de Estructuras</h1>
    <p>Temario de tus apuntes, ${nLearn} preguntas nuevas de aprendizaje y ${nExam} preguntas reales de examen corregidas con la solución oficial.</p>
  </section>
  <div class="grid g4 mt">
    <div class="stat"><div class="v">${g.n}</div><div class="l">Respuestas registradas</div></div>
    <div class="stat"><div class="v">${g.n ? g.p + "%" : "—"}</div><div class="l">Porcentaje de aciertos</div></div>
    <div class="stat"><div class="v">${g.failed}</div><div class="l">Preguntas falladas por repasar</div></div>
    <div class="stat"><div class="v">${g.best != null ? fmt1(g.best) : "—"}</div><div class="l">Mejor nota de examen (/10)</div></div>
  </div>
  <div class="grid g2 mt">
    <a class="card mode" href="#/aprender">
      <span class="ic"><svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7M8 11h5"/></svg></span>
      <h2>Modo 1 · Aprendizaje</h2>
      <ul><li>Temario, resúmenes y confusiones frecuentes</li><li>Test nuevos con corrección y explicación inmediatas</li><li>Por tema, combinados o de todo el temario, con niveles de dificultad</li></ul>
    </a>
    <a class="card mode" href="#/examenes">
      <span class="ic"><svg viewBox="0 0 24 24"><path d="M9 4h6l1 2h3v15H5V6h3zM9 12l2 2 4-4M9 17h6"/></svg></span>
      <h2>Modo 2 · Exámenes anteriores</h2>
      <ul><li>Preguntas originales con sus figuras, sin abrir los PDF</li><li>Examen completo, simulacro de 40 min o preguntas sueltas</li><li>Nota oficial, revisión de respuestas e historial</li></ul>
    </a>
  </div>
  <div class="grid g3 mt">
    <button class="btn soft btn-block" id="h-quick">Test rápido: 10 preguntas al azar</button>
    <button class="btn soft btn-block" id="h-failed" ${g.failed ? "" : "disabled"}>Repasar falladas (${g.failed})</button>
    <button class="btn soft btn-block" id="h-sim">Simulacro de 40 min al azar</button>
  </div>
  <div class="section-title"><h2>Progreso por tema</h2><a class="small" href="#/progreso">Ver detalle</a></div>
  <div class="card">${TOPICS.map(t => topicRow(t)).join("")}</div>
  ${weak.length ? `<div class="section-title"><h2>Apartados para reforzar</h2></div>
  <div class="card"><ul class="list">${weak.map(r => `<li><span><span class="tag" style="background:${topicById(r.tema).color}1a;color:${topicById(r.tema).color}">${topicById(r.tema).num}</span> ${esc(r.apartado)}</span><span class="row"><b class="${r.p < 50 ? "" : ""}">${r.p}%</b><button class="btn sm" data-weak="${esc(r.tema)}|${esc(r.apartado)}">Practicar</button></span></li>`).join("")}</ul></div>` : ""}
  <p class="tiny muted mt2">Tu progreso se guarda en este navegador. Fuentes: apuntes de los temas 1, 2.1, 2.3 (cimentaciones) y 3; examen PA1 de 11/11/2025 (versiones T1–T4) con su hoja oficial de soluciones; hoja oficial de soluciones de la PA1 de 12/11/2024 (sin enunciados).</p>`;
  $("#h-quick").onclick = () => startQuiz({ ids: shuffle(LEARN.map(q => q.id)).slice(0, 10), title: "Test rápido" });
  $("#h-failed").onclick = () => startFailedQuiz();
  $("#h-sim").onclick = () => startExam(EXAMS[Math.floor(Math.random() * EXAMS.length)].id, "sim");
  $$("[data-weak]").forEach(b => b.onclick = () => { const [t, a] = b.dataset.weak.split("|"); startQuiz({ ids: shuffle(Object.values(QMAP).filter(q => q.tema === t && q.apartado === a && (q.bank === "learn" || EXAM_POOL.includes(q.id))).map(q => q.id)), title: "Refuerzo: " + a }); });
}
function topicRow(t) {
  const s = topicStats(t.id);
  return `<div class="topic-row"><div><a href="#/tema/${t.id}" style="text-decoration:none;color:inherit"><b>${t.num}. ${esc(t.short)}</b></a><div class="tiny muted">${s.seen}/${s.total} preguntas vistas · ${s.n} respuestas</div></div>
  <div class="bar ${s.p >= 70 ? "ok" : ""}"><i style="width:${s.n ? s.p : 0}%;${s.p < 70 ? "background:" + t.color : ""}"></i></div><div class="pct">${s.n ? s.p + "%" : "—"}</div></div>`;
}

/* =====================================================================
   MODO APRENDIZAJE
   ===================================================================== */
function viewLearn() {
  const nf = globalStats().failed;
  app.innerHTML = `
  <div class="crumbs"><a href="#/">Inicio</a> › Aprendizaje</div>
  <h1>Modo aprendizaje</h1>
  <p class="muted">Estudia el temario por apartados y practica con preguntas nuevas, generadas a partir de tus apuntes con el estilo de los exámenes.</p>
  <div class="grid g3 mt">
    <a class="btn primary btn-block" href="#/practicar">Configurar un test</a>
    <button class="btn soft btn-block" id="l-all">Todo el temario (20 al azar)</button>
    <a class="btn soft btn-block" href="#/falladas">Preguntas falladas (${nf})</a>
  </div>
  <div class="section-title"><h2>Temario</h2><span class="small muted">${TOPICS.length} temas con apuntes</span></div>
  <div class="grid g2">
    ${TOPICS.map(t => { const s = topicStats(t.id); const nq = LEARN.filter(q => q.tema === t.id).length; const ne = EXAM_POOL.filter(id => QMAP[id].tema === t.id).length;
      return `<a class="card topic-card" href="#/tema/${t.id}" style="--c:${t.color}">
      <span class="num">TEMA ${t.num}</span><h3>${esc(t.title)}</h3>
      <div class="tiny muted">${esc(t.file)}</div>
      <div class="row small muted"><span>${THEORY[t.id].sections.length} apartados</span>·<span>${nq} preguntas nuevas</span>·<span>${ne} de examen</span></div>
      <div class="bar"><i style="width:${s.n ? s.p : 0}%;background:${t.color}"></i></div>
      <div class="tiny muted">${s.n ? s.p + "% de aciertos" : "Sin practicar todavía"}</div></a>`; }).join("")}
    ${MISSING_TOPICS.map(m => `<div class="card topic-card missing"><span class="num">TEMA ${m.num}</span><h3>${esc(m.title)}</h3><div class="tiny muted">${esc(m.note)}</div></div>`).join("")}
  </div>`;
  $("#l-all").onclick = () => startQuiz({ ids: shuffle(LEARN.map(q => q.id)).slice(0, 20), title: "Todo el temario" });
}

function viewTopic(tid, tab) {
  const t = topicById(tid); if (!t) return go("#/aprender");
  const th = THEORY[tid];
  const tabs = [["resumen", "Resumen"], ["temario", "Temario completo"], ["confusiones", "Confusiones frecuentes"], ["practicar", "Practicar"]];
  let body = "";
  if (tab === "resumen") {
    body = `<div class="card"><h2>Lo más importante del tema</h2><ol class="summary-list">${th.summary.map(s => `<li>${s}</li>`).join("")}</ol></div>`;
  } else if (tab === "temario") {
    body = `<div class="toc">${th.sections.map(s => `<a href="javascript:void 0" data-sec="${s.id}">${esc(s.title)}</a>`).join("")}</div>
    <div class="theory">${th.sections.map((s, i) => `<details class="sec" id="${s.id}" ${i === 0 ? "open" : ""}><summary>${esc(s.title)}</summary><div class="body">${s.html}</div></details>`).join("")}</div>
    <p class="tiny muted">Los recuadros amarillos («Ampliación») son conocimiento general de ingeniería que no aparece en tus apuntes.</p>`;
  } else if (tab === "confusiones") {
    body = `<div class="card"><h2>Conceptos que suelen confundirse</h2>${th.confusions.map(c => `<div class="conf"><div>${c[0]}</div><div>${c[1]}</div></div>`).join("")}</div>`;
  } else {
    const s = topicStats(tid);
    const aps = {}; Object.values(QMAP).filter(q => q.tema === tid && (q.bank === "learn" || EXAM_POOL.includes(q.id))).forEach(q => { (aps[q.apartado] = aps[q.apartado] || []).push(q); });
    const ast = {}; apartadoStats(tid).forEach(r => ast[r.apartado] = r);
    body = `<div class="grid g3">
      <div class="stat"><div class="v">${s.n ? s.p + "%" : "—"}</div><div class="l">Aciertos en el tema</div></div>
      <div class="stat"><div class="v">${s.seen}/${s.total}</div><div class="l">Preguntas vistas</div></div>
      <div class="stat"><div class="v">${Object.keys(S.failed).filter(id => QMAP[id] && QMAP[id].tema === tid).length}</div><div class="l">Falladas pendientes</div></div></div>
    <div class="grid g3 mt">
      <button class="btn primary btn-block" data-start="learn">10 preguntas nuevas</button>
      <button class="btn soft btn-block" data-start="exam">Preguntas reales de examen</button>
      <button class="btn soft btn-block" data-start="all">Todas las del tema</button></div>
    <div class="section-title"><h2>Por apartado</h2></div>
    <div class="card"><ul class="list">${Object.entries(aps).map(([a, qs]) => { const r = ast[a]; return `<li><span>${esc(a)} <span class="tiny muted">· ${qs.length} preg.</span></span>
      <span class="row">${r ? `<span class="tag ${r.p >= 70 ? "ok" : r.p < 50 ? "ko" : "warn"}">${r.p}%</span>` : `<span class="tag">sin datos</span>`}<button class="btn sm" data-ap="${esc(a)}">Practicar</button></span></li>`; }).join("")}</ul></div>`;
  }
  app.innerHTML = `<div class="crumbs"><a href="#/">Inicio</a> › <a href="#/aprender">Aprendizaje</a> › Tema ${t.num}</div>
  <h1>${t.num}. ${esc(t.title)}</h1><div class="tiny muted">Fuente: ${esc(t.file)}</div>
  <div class="tabs">${tabs.map(([k, l]) => `<button class="${k === tab ? "active" : ""}" data-tab="${k}">${l}</button>`).join("")}</div>${body}`;
  $$("[data-tab]").forEach(b => b.onclick = () => go(`#/tema/${tid}/${b.dataset.tab}`));
  $$("[data-sec]").forEach(a => a.onclick = () => { const d = document.getElementById(a.dataset.sec); d.open = true; d.scrollIntoView({ behavior: "smooth", block: "start" }); });
  $$("[data-start]").forEach(b => b.onclick = () => {
    const k = b.dataset.start;
    let ids = k === "exam" ? EXAM_POOL.filter(id => QMAP[id].tema === tid) : LEARN.filter(q => q.tema === tid).map(q => q.id);
    if (k === "all") ids = ids.concat(EXAM_POOL.filter(id => QMAP[id].tema === tid));
    ids = shuffle(ids); if (k === "learn") ids = ids.slice(0, 10);
    startQuiz({ ids, title: `Tema ${t.num}${k === "exam" ? " · examen" : ""}` });
  });
  $$("[data-ap]").forEach(b => b.onclick = () => startQuiz({ ids: shuffle(Object.values(QMAP).filter(q => q.tema === tid && q.apartado === b.dataset.ap && (q.bank === "learn" || EXAM_POOL.includes(q.id))).map(q => q.id)), title: b.dataset.ap }));
}

/* ---------- configuración de test ---------- */
function viewPracticeSetup(preTopic) {
  const cfg = Object.assign({ temas: TOPICS.map(t => t.id), bank: "learn", diff: "all", n: "20", filter: "all" }, JSON.parse(localStorage.getItem("cde_cfg") || "null") || {});
  if (preTopic && topicById(preTopic)) cfg.temas = [preTopic];
  const chip = (name, val, label, on, count) => `<label class="chip ${on ? "on" : ""}"><input type="${name === "temas" ? "checkbox" : "radio"}" name="${name}" value="${val}" ${on ? "checked" : ""}>${label}${count != null ? ` <span class="count">${count}</span>` : ""}</label>`;
  app.innerHTML = `<div class="crumbs"><a href="#/">Inicio</a> › <a href="#/aprender">Aprendizaje</a> › Configurar test</div>
  <h1>Configurar un test</h1>
  <div class="card" id="cfg">
    <div class="field"><span class="lbl">Temas</span><div class="chips">${TOPICS.map(t => chip("temas", t.id, t.num + ". " + t.short, cfg.temas.includes(t.id))).join("")}</div>
      <div class="row mt"><button class="btn sm ghost" id="c-all">Seleccionar todos</button><button class="btn sm ghost" id="c-none">Ninguno</button></div></div>
    <div class="field"><span class="lbl">Banco de preguntas</span><div class="chips">
      ${chip("bank", "learn", "Aprendizaje (nuevas)", cfg.bank === "learn")}${chip("bank", "exam", "Exámenes reales", cfg.bank === "exam")}${chip("bank", "both", "Ambos", cfg.bank === "both")}</div></div>
    <div class="field"><span class="lbl">Dificultad <span class="tiny muted">(solo banco de aprendizaje)</span></span><div class="chips">
      ${chip("diff", "all", "Todas", cfg.diff === "all")}${chip("diff", "1", "Básica", cfg.diff === "1")}${chip("diff", "2", "Media", cfg.diff === "2")}${chip("diff", "3", "Avanzada", cfg.diff === "3")}</div></div>
    <div class="field"><span class="lbl">Qué preguntas</span><div class="chips">
      ${chip("filter", "all", "Todas", cfg.filter === "all")}${chip("filter", "new", "No vistas", cfg.filter === "new")}${chip("filter", "failed", "Solo falladas", cfg.filter === "failed")}</div></div>
    <div class="field"><span class="lbl">Número de preguntas</span><div class="chips">
      ${["10", "20", "30", "50", "all"].map(n => chip("n", n, n === "all" ? "Todas" : n, cfg.n === n)).join("")}
      <label class="chip ${!["10", "20", "30", "50", "all"].includes(cfg.n) ? "on" : ""}">Otro: <input type="number" id="c-num" min="1" max="500" style="position:static;opacity:1;pointer-events:auto;width:76px;min-height:32px;padding:4px 8px" value="${!["10", "20", "30", "50", "all"].includes(cfg.n) ? cfg.n : ""}"></label></div></div>
    <div class="notice" id="c-count"></div>
    <div class="row mt"><button class="btn primary" id="c-go">Empezar test</button><a class="btn ghost" href="#/aprender">Cancelar</a></div>
  </div>`;
  const read = () => {
    const temas = $$('input[name=temas]:checked').map(i => i.value);
    const v = n => ($(`input[name=${n}]:checked`) || {}).value;
    const custom = $("#c-num").value;
    return { temas, bank: v("bank"), diff: v("diff"), filter: v("filter"), n: custom ? String(custom) : v("n") || "20" };
  };
  const pool = c => {
    let qs = [];
    if (c.bank !== "exam") qs = qs.concat(LEARN.filter(q => c.temas.includes(q.tema) && (c.diff === "all" || String(q.d) === c.diff)));
    if (c.bank !== "learn") qs = qs.concat(EXAM_POOL.map(id => QMAP[id]).filter(q => c.temas.includes(q.tema)));
    if (c.filter === "new") qs = qs.filter(q => !S.qs[q.id]);
    if (c.filter === "failed") qs = qs.filter(q => S.failed[q.id]);
    return qs;
  };
  const refresh = () => {
    $$(".chip").forEach(l => { const i = $("input", l); if (i && i.type !== "number") l.classList.toggle("on", i.checked); });
    const c = read(), p = pool(c), n = c.n === "all" ? p.length : Math.min(+c.n || 0, p.length);
    $("#c-count").textContent = p.length ? `Hay ${p.length} preguntas disponibles con esta selección. El test tendrá ${n}, en orden aleatorio.` : "No hay preguntas con esta selección.";
    $("#c-go").disabled = !p.length || !c.temas.length;
  };
  $("#cfg").addEventListener("change", refresh);
  $("#c-num").addEventListener("input", () => { $$('input[name=n]').forEach(i => i.checked = false); refresh(); });
  $$('input[name=n]').forEach(i => i.addEventListener("change", () => { $("#c-num").value = ""; }));
  $("#c-all").onclick = () => { $$('input[name=temas]').forEach(i => i.checked = true); refresh(); };
  $("#c-none").onclick = () => { $$('input[name=temas]').forEach(i => i.checked = false); refresh(); };
  $("#c-go").onclick = () => {
    const c = read(); localStorage.setItem("cde_cfg", JSON.stringify(c));
    const p = shuffle(pool(c)); const n = c.n === "all" ? p.length : Math.min(+c.n, p.length);
    startQuiz({ ids: p.slice(0, n).map(q => q.id), title: "Test personalizado" });
  };
  refresh();
}

/* ---------- motor de test con corrección inmediata ---------- */
function startQuiz({ ids, title, fromExam, keepOrder }) {
  if (!ids || !ids.length) { confirmBox("Sin preguntas", "No hay preguntas disponibles para esta selección.", "Aceptar", () => {}); return; }
  const perm = {};
  ids.forEach(id => { const q = QMAP[id]; perm[id] = fixedOrder(q) ? q.o.map((_, i) => i) : shuffle(q.o.map((_, i) => i)); });
  S.quiz = { ids, title, perm, i: 0, ans: {}, sel: {}, start: Date.now(), fromExam: !!fromExam, done: false };
  save(); go("#/quiz");
}
function startFailedQuiz() {
  const ids = Object.keys(S.failed).filter(id => QMAP[id]);
  startQuiz({ ids: shuffle(ids), title: "Repaso de falladas" });
}
function viewQuiz() {
  const Z = S.quiz;
  if (!Z) return go("#/aprender");
  if (Z.done) return viewQuizSummary();
  const id = Z.ids[Z.i], q = QMAP[id], order = Z.perm[id];
  const answered = Z.ans[id];
  const sel = answered ? answered.sel : (Z.sel[id] || []);
  const nAns = Object.keys(Z.ans).length;
  const t = topicById(q.tema);
  const optHtml = order.map((oi, k) => {
    let cls = "";
    if (answered) {
      const isC = q.a.includes(oi), isS = sel.includes(oi);
      cls = isC && isS ? "correct" : isS ? "wrong" : isC ? "correct missed" : "";
    } else if (sel.includes(oi)) cls = "sel";
    const mark = answered ? (q.a.includes(oi) ? `<svg class="mk" viewBox="0 0 24 24" fill="none" stroke="#0f8a5f" stroke-width="2.5"><path d="M5 12l5 5 9-10"/></svg>` : sel.includes(oi) ? `<svg class="mk" viewBox="0 0 24 24" fill="none" stroke="#c2413b" stroke-width="2.5"><path d="M6 6l12 12M18 6L6 18"/></svg>` : "") : "";
    return `<button class="opt ${cls}" data-oi="${oi}" ${answered ? "disabled" : ""}><span class="k">${LET[k]}</span><span class="t">${esc(q.o[oi])}</span>${mark}</button>`;
  }).join("");
  let fb = "";
  if (answered) {
    const st = answered.status;
    const correctLetters = order.map((oi, k) => q.a.includes(oi) ? LET[k] : null).filter(Boolean).join(", ");
    fb = `<div class="feedback ${st}">${st === "ok" ? "✓ Correcta" : st === "partial" ? "◐ Parcialmente correcta (" + fmt1(answered.score) + " / 0,5)" : "✗ Incorrecta"} · Respuesta${q.a.length > 1 ? "s" : ""} correcta${q.a.length > 1 ? "s" : ""}: ${correctLetters}</div>
    <div class="row mt"><button class="btn sm soft" id="z-exp" aria-expanded="${Z.showExp ? "true" : "false"}">${Z.showExp ? "Ocultar explicación" : "Ver explicación"}</button></div>
    <div class="explain" id="z-expbox" ${Z.showExp ? "" : "hidden"}>${q.official ? `<div class="official">${q.official}</div>` : ""}${q.bank === "exam" ? `<b>${q.official ? "Comentario" : "Explicación orientativa (no oficial)"}:</b> ` : ""}${esc(q.exp)}
    <div class="src">${q.bank === "exam" ? "Solución oficial: " + esc(q.keyText) + " · " : ""}${esc(q.src)}</div></div>`;
  }
  app.innerHTML = `
  <div class="crumbs"><a href="${Z.fromExam ? "#/examenes" : "#/aprender"}">${Z.fromExam ? "Exámenes" : "Aprendizaje"}</a> › ${esc(Z.title)}</div>
  <div class="quiz-head"><span class="small muted" style="white-space:nowrap">${Z.i + 1} / ${Z.ids.length}</span><div class="bar"><i style="width:${pct(nAns, Z.ids.length)}%"></i></div>
  <button class="btn sm ghost" id="z-end">Terminar</button></div>
  <article class="qcard">
    <div class="qmeta"><span class="tag" style="background:${t.color}1a;color:${t.color}">Tema ${t.num}</span><span class="tag">${esc(q.apartado)}</span>
    ${q.bank === "exam" ? `<span class="tag brand">Examen real · ${esc(q.examId.replace("PA1-", "PA1 "))} · P${q.n}</span>` : `<span class="tag">${DIFF[q.d]}</span>`}
    ${q.multi ? `<span class="tag warn">Varias respuestas</span>` : ""}</div>
    <div class="qtext">${esc(q.q)}</div>
    ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}" loading="lazy"><figcaption>Figura original del examen</figcaption></figure>` : ""}
    <div class="opts">${optHtml}</div>
    ${!answered && q.multi ? `<p class="tiny muted mt">Marca todas las opciones que correspondan y pulsa «Comprobar». Puntuación: 0,5 × máx(0, (aciertos − fallos) / nº de correctas).</p>` : ""}
    ${fb}
    <div class="quiz-actions">
      <button class="btn" id="z-prev" ${Z.i === 0 ? "disabled" : ""}>← Anterior</button>
      <div class="right">
        ${!answered && q.multi ? `<button class="btn primary" id="z-check" ${sel.length ? "" : "disabled"}>Comprobar</button>` : ""}
        ${!answered ? `<button class="btn ghost" id="z-skip">Saltar</button>` : ""}
        ${answered ? (Z.i < Z.ids.length - 1 ? `<button class="btn primary" id="z-next">Siguiente →</button>` : `<button class="btn primary" id="z-finish">Ver resultados</button>`) : ""}
      </div>
    </div>
  </article>`;
  const answer = (selArr) => {
    const r = scoreQ(q, selArr);
    Z.ans[id] = { sel: selArr, score: r.score, status: r.status };
    recordAnswer(q, r.status); Z.showExp = false; save(); viewQuiz(); renderMath(app);
  };
  $$(".opt").forEach(b => b.onclick = () => {
    const oi = +b.dataset.oi;
    if (q.multi) { const s = new Set(Z.sel[id] || []); s.has(oi) ? s.delete(oi) : s.add(oi); Z.sel[id] = Array.from(s); save(); viewQuiz(); renderMath(app); }
    else answer([oi]);
  });
  const chk = $("#z-check"); if (chk) chk.onclick = () => answer(Z.sel[id] || []);
  const ex = $("#z-exp"); if (ex) ex.onclick = () => { Z.showExp = !Z.showExp; save(); viewQuiz(); renderMath(app); };
  $("#z-prev").onclick = () => { Z.i--; Z.showExp = false; save(); viewQuiz(); renderMath(app); };
  const nx = $("#z-next"); if (nx) nx.onclick = () => { Z.i++; Z.showExp = false; save(); viewQuiz(); renderMath(app); window.scrollTo(0, 0); };
  const sk = $("#z-skip"); if (sk) sk.onclick = () => { if (Z.i < Z.ids.length - 1) { Z.i++; save(); viewQuiz(); renderMath(app); } else finishQuiz(); };
  const fi = $("#z-finish"); if (fi) fi.onclick = finishQuiz;
  $("#z-end").onclick = () => confirmBox("Terminar el test", `Has respondido ${nAns} de ${Z.ids.length} preguntas. Las no respondidas no cuentan.`, "Ver resultados", finishQuiz);
}
function finishQuiz() {
  const Z = S.quiz; if (!Z) return;
  Z.done = true;
  const vals = Object.values(Z.ans);
  if (vals.length) S.sessions.push({ t: Date.now(), n: vals.length, ok: vals.filter(a => a.status === "ok").length, title: Z.title });
  if (S.sessions.length > 200) S.sessions = S.sessions.slice(-200);
  save(); viewQuiz(); renderMath(app); window.scrollTo(0, 0);
}
function viewQuizSummary() {
  const Z = S.quiz;
  const vals = Z.ids.map(id => Z.ans[id]);
  const ok = vals.filter(a => a && a.status === "ok").length, ko = vals.filter(a => a && a.status === "ko").length,
    pa = vals.filter(a => a && a.status === "partial").length, bl = vals.filter(a => !a).length;
  const answered = Z.ids.length - bl, p = pct(ok, answered);
  const wrongIds = Z.ids.filter(id => Z.ans[id] && Z.ans[id].status !== "ok");
  const byTopic = {};
  Z.ids.forEach(id => { const a = Z.ans[id]; if (!a) return; const tt = QMAP[id].tema; const r = byTopic[tt] || (byTopic[tt] = { n: 0, ok: 0 }); r.n++; if (a.status === "ok") r.ok++; });
  app.innerHTML = `<div class="crumbs"><a href="${Z.fromExam ? "#/examenes" : "#/aprender"}">${Z.fromExam ? "Exámenes" : "Aprendizaje"}</a> › Resultados</div>
  <h1>Resultados · ${esc(Z.title)}</h1>
  <div class="card"><div class="grade">
    <div class="ring" style="--p:${p};--rc:${p >= 70 ? "var(--ok)" : p >= 50 ? "var(--brand-2)" : "var(--ko)"}"><div><div><b>${p}%</b><br><small>aciertos</small></div></div></div>
    <div class="kpis"><div class="kpi ok"><b>${ok}</b><span>Correctas</span></div><div class="kpi ko"><b>${ko}</b><span>Incorrectas</span></div>
    <div class="kpi partial"><b>${pa}</b><span>Parciales</span></div><div class="kpi"><b>${bl}</b><span>Sin responder</span></div></div></div>
    ${Object.keys(byTopic).length > 1 ? `<div class="mt">${Object.entries(byTopic).map(([tt, r]) => `<div class="topic-row"><div><b>${topicById(tt).num}. ${esc(topicById(tt).short)}</b></div><div class="bar"><i style="width:${pct(r.ok, r.n)}%;background:${topicById(tt).color}"></i></div><div class="pct">${pct(r.ok, r.n)}%</div></div>`).join("")}</div>` : ""}
    <div class="row mt"><button class="btn primary" id="s-again">Repetir este test</button>
    ${wrongIds.length ? `<button class="btn soft" id="s-wrong">Repetir las ${wrongIds.length} falladas</button>` : ""}
    <a class="btn ghost" href="${Z.fromExam ? "#/examenes" : "#/aprender"}">Volver</a></div></div>
  <div class="section-title"><h2>Revisión</h2></div>
  ${Z.ids.map((id, k) => reviewItem(QMAP[id], Z.ans[id] ? Z.ans[id].sel : [], k + 1, Z.perm[id])).join("")}`;
  $("#s-again").onclick = () => startQuiz({ ids: Z.fromExam ? Z.ids : shuffle(Z.ids), title: Z.title, fromExam: Z.fromExam });
  const w = $("#s-wrong"); if (w) w.onclick = () => startQuiz({ ids: wrongIds, title: Z.title + " · falladas", fromExam: Z.fromExam });
}
function reviewItem(q, sel, n, order) {
  sel = sel || []; order = order || q.o.map((_, i) => i);
  const r = scoreQ(q, sel);
  const tag = { ok: `<span class="tag ok">Correcta · ${fmt1(r.score)}</span>`, ko: `<span class="tag ko">Incorrecta · 0,00</span>`, partial: `<span class="tag warn">Parcial · ${fmt1(r.score)}</span>`, blank: `<span class="tag">En blanco · 0,00</span>` }[r.status];
  return `<div class="review-item"><div class="rh"><b>Pregunta ${n}</b>${tag}</div>
  <div class="qmeta"><span class="tag">${esc(topicById(q.tema).num)} · ${esc(q.apartado)}</span>${q.bank === "exam" ? `<span class="tag brand">Examen real</span>` : ""}${q.multi ? `<span class="tag warn">Varias respuestas</span>` : ""}</div>
  <div style="font-weight:600;margin-bottom:8px;white-space:pre-line">${esc(q.q)}</div>
  ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}" loading="lazy"></figure>` : ""}
  ${order.map((oi, k) => { const isC = q.a.includes(oi), isS = sel.includes(oi);
    return `<div class="ropt ${isC ? "correct" : isS ? "wrong" : ""}"><span class="k">${LET[k]}</span><span style="white-space:pre-line">${esc(q.o[oi])}</span><span class="who">${isS ? "Tu respuesta" : ""}${isS && isC ? " ✓" : isS ? " ✗" : ""}${!isS && isC ? "Correcta" : ""}</span></div>`; }).join("")}
  <details class="mt"><summary class="small" style="cursor:pointer;color:var(--brand-2);font-weight:600">Ver explicación</summary><div class="explain">${q.official ? `<div class="official">${q.official}</div>` : ""}${q.bank === "exam" ? `<b>${q.official ? "Comentario" : "Explicación orientativa (no oficial)"}:</b> ` : ""}${esc(q.exp)}<div class="src">${q.bank === "exam" ? "Solución oficial: " + esc(q.keyText) + " · " : ""}${esc(q.src)}</div></div></details></div>`;
}

/* ---------- falladas ---------- */
function viewFailed() {
  const ids = Object.keys(S.failed).filter(id => QMAP[id]).sort((a, b) => S.failed[b] - S.failed[a]);
  const by = {}; ids.forEach(id => { const t = QMAP[id].tema; (by[t] = by[t] || []).push(id); });
  app.innerHTML = `<div class="crumbs"><a href="#/">Inicio</a> › <a href="#/aprender">Aprendizaje</a> › Falladas</div>
  <h1>Preguntas falladas</h1>
  <p class="muted">Aquí se guardan las preguntas que has fallado o acertado solo en parte, tanto en los test como en los exámenes. Cuando la aciertes, sale de la lista.</p>
  ${ids.length ? `<div class="row"><button class="btn primary" id="f-all">Repasar todas (${ids.length})</button>${TOPICS.filter(t => by[t.id]).map(t => `<button class="btn soft" data-ft="${t.id}">Tema ${t.num} (${by[t.id].length})</button>`).join("")}
  <button class="btn ghost danger" id="f-clear">Vaciar lista</button></div>
  <div class="card mt"><ul class="list">${ids.map(id => { const q = QMAP[id]; const st = S.qs[id] || { n: 0, ok: 0 };
    return `<li><span><span class="tag" style="background:${topicById(q.tema).color}1a;color:${topicById(q.tema).color}">${topicById(q.tema).num}</span> ${esc(q.q.length > 110 ? q.q.slice(0, 110) + "…" : q.q)}<br><span class="tiny muted">${q.bank === "exam" ? "Examen real · " + esc(q.examId) + " P" + q.n : "Aprendizaje"} · ${st.ok}/${st.n} aciertos</span></span><button class="btn sm" data-fq="${id}">Repetir</button></li>`; }).join("")}</ul></div>`
  : `<div class="card empty"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg><p>No tienes preguntas falladas pendientes.</p><a class="btn soft" href="#/practicar">Hacer un test</a></div>`}`;
  const fa = $("#f-all"); if (fa) fa.onclick = startFailedQuiz;
  $$("[data-ft]").forEach(b => b.onclick = () => startQuiz({ ids: shuffle(by[b.dataset.ft]), title: "Falladas · Tema " + topicById(b.dataset.ft).num }));
  $$("[data-fq]").forEach(b => b.onclick = () => startQuiz({ ids: [b.dataset.fq], title: "Repaso" }));
  const fc = $("#f-clear"); if (fc) fc.onclick = () => confirmBox("Vaciar falladas", "Se quitarán todas las preguntas de la lista de falladas. Tus estadísticas no cambian.", "Vaciar", () => { S.failed = {}; save(); route(); }, { danger: true });
}

/* =====================================================================
   MODO EXÁMENES ANTERIORES
   ===================================================================== */
function viewExams() {
  const years = [...new Set(EXAMS.map(e => e.year))].sort((a, b) => b - a);
  const hist = S.history.slice().reverse();
  app.innerHTML = `<div class="crumbs"><a href="#/">Inicio</a> › Exámenes</div>
  <h1>Exámenes anteriores</h1>
  <p class="muted">Preguntas originales transcritas literalmente de los PDF, con sus figuras, y corregidas con la hoja oficial de soluciones. Cada pregunta vale 0,5 puntos; en las de varias respuestas se aplica 0,5 × máx(0, (correctas marcadas − incorrectas marcadas) / nº de correctas). Nota máxima: 10.</p>
  ${S.exam ? `<div class="notice warn">Tienes un examen en curso. <a href="#/examen">Continuar</a></div>` : ""}
  ${years.map(y => `<div class="section-title"><h2>${y}</h2></div>
    <div class="card mb0"><div class="row between"><div><h3 class="mb0">Prueba adelantada PA1 · 11 de noviembre de 2025</h3><div class="small muted">Test de 20 preguntas · 40 minutos · 4 versiones (T1–T4) con las mismas preguntas en distinto orden</div></div>
    <span class="tag ok">Solución oficial disponible</span></div></div>
    <div class="grid g2 mt">${EXAMS.filter(e => e.year === y).map(e => examCard(e)).join("")}</div>`).join("")}
  <div class="section-title"><h2>Preguntas de examen por tema</h2></div>
  <div class="card"><p class="small muted mb0">Practica las 20 preguntas reales (más la variante de la versión T3) agrupadas por tema, con corrección inmediata.</p>
  <div class="row mt">${TOPICS.map(t => { const n = EXAM_POOL.filter(id => QMAP[id].tema === t.id).length; return n ? `<button class="btn soft" data-et="${t.id}">Tema ${t.num} · ${esc(t.short)} (${n})</button>` : ""; }).join("")}
  <button class="btn soft" data-et="all">Todas en orden aleatorio (${EXAM_POOL.length})</button></div></div>
  <div class="section-title"><h2>2024</h2></div>
  <div class="card"><div class="row between"><div><h3 class="mb0">Prueba anticipada PA1 · 12 de noviembre de 2024</h3><div class="small muted">Solo está disponible la hoja oficial de soluciones; <b>los enunciados no se han adjuntado</b>, así que estas preguntas no se pueden responder en la app.</div></div><span class="tag warn">Sin enunciados</span></div>
  <details class="mt"><summary class="small" style="cursor:pointer;color:var(--brand-2);font-weight:600">Ver la hoja oficial de soluciones 2024 (transcripción)</summary>
  <div style="overflow-x:auto" class="mt"><table class="keytbl"><thead><tr><th>Pregunta</th><th>Test 1</th><th>Test 2</th><th>Test 3</th><th>Test 4</th></tr></thead><tbody>
  ${EXAM_KEYS_2024.T1.map((_, i) => `<tr><td>${i + 1}</td>${["T1", "T2", "T3", "T4"].map(v => `<td>${esc(EXAM_KEYS_2024[v][i])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
  <p class="tiny muted">Las etiquetas entre paréntesis (norma, acción, acero, horm, zap, corte, tri) aparecen así en la hoja oficial e indican el bloque temático. La hoja incluye además ejercicios resueltos (forjado, zapata, tensiones efectivas y fiabilidad); los de tensiones efectivas y fiabilidad se han usado en el banco de aprendizaje.</p></details></div>
  <div class="section-title"><h2>Historial de intentos</h2>${hist.length ? `<button class="btn sm ghost danger" id="h-clear">Borrar historial</button>` : ""}</div>
  <div class="card">${hist.length ? `<div style="overflow-x:auto"><table class="tbl" style="display:table"><thead><tr><th>Fecha</th><th>Examen</th><th>Modo</th><th>Nota</th><th>Aciertos</th><th>Errores</th><th>Parciales</th><th>Blanco</th><th>Tiempo</th><th></th></tr></thead><tbody>
  ${hist.map(h => `<tr><td>${fmtDate(h.t)}</td><td>${esc(h.examId.replace("PA1-", "PA1 "))}</td><td>${h.mode === "sim" ? "Simulacro" : "Completo"}</td><td><b>${fmt1(h.grade)}</b></td><td>${h.ok}</td><td>${h.ko}</td><td>${h.partial}</td><td>${h.blank}</td><td>${fmtTime(h.dur)}</td><td><a href="#/resultado/${h.id}">Revisar</a></td></tr>`).join("")}</tbody></table></div>`
  : `<div class="empty"><p>Todavía no has hecho ningún examen.</p></div>`}</div>`;
  $$("[data-ex]").forEach(b => b.onclick = () => {
    const [id, mode] = b.dataset.ex.split("|");
    if (mode === "practice") return startQuiz({ ids: EXAM_Q[id].map(q => q.id), title: id.replace("PA1-", "PA1 ") + " · práctica", fromExam: true });
    if (mode === "practiceR") return startQuiz({ ids: shuffle(EXAM_Q[id].map(q => q.id)), title: id.replace("PA1-", "PA1 ") + " · práctica aleatoria", fromExam: true });
    startExam(id, mode);
  });
  $$("[data-et]").forEach(b => b.onclick = () => { const t = b.dataset.et; startQuiz({ ids: shuffle(EXAM_POOL.filter(id => t === "all" || QMAP[id].tema === t)), title: t === "all" ? "Preguntas de examen" : "Examen · Tema " + topicById(t).num, fromExam: true }); });
  const hc = $("#h-clear"); if (hc) hc.onclick = () => confirmBox("Borrar historial", "Se eliminarán todos los intentos de examen guardados.", "Borrar", () => { S.history = []; save(); route(); }, { danger: true });
}
function examCard(e) {
  const att = S.history.filter(h => h.examId === e.id);
  const best = att.length ? Math.max(...att.map(h => h.grade)) : null;
  return `<div class="card exam-card"><div class="row between"><h3>Versión ${e.version}</h3>${best != null ? `<span class="tag ${best >= 5 ? "ok" : "ko"}">Mejor: ${fmt1(best)}</span>` : `<span class="tag">Sin intentos</span>`}</div>
  <div class="small muted">${esc(e.conv)} · 20 preguntas · ${att.length} intento${att.length === 1 ? "" : "s"}</div>
  <div class="exam-actions"><button class="btn primary sm" data-ex="${e.id}|sim">Simulacro 40 min</button><button class="btn soft sm" data-ex="${e.id}|full">Examen sin tiempo</button>
  <button class="btn sm" data-ex="${e.id}|practice">Preguntas sueltas</button><button class="btn sm ghost" data-ex="${e.id}|practiceR">Aleatorio</button></div></div>`;
}
function startExam(id, mode) {
  const begin = () => {
    const ex = EXAMS.find(e => e.id === id);
    S.exam = { examId: id, mode, start: Date.now(), deadline: mode === "sim" ? Date.now() + ex.time * 60000 : null, ans: {}, cur: 0 };
    save(); go("#/examen");
  };
  if (S.exam) confirmBox("Examen en curso", "Ya tienes un examen sin entregar. Si empiezas otro, se descartará el actual.", "Empezar nuevo", begin, { danger: true });
  else if (mode === "sim") confirmBox("Simulacro con temporizador", "Tendrás 40 minutos. Puedes avanzar, retroceder, cambiar respuestas y dejar preguntas en blanco. Al agotarse el tiempo se entrega automáticamente.", "Empezar", begin);
  else begin();
}
function viewExamRunner() {
  const E = S.exam;
  if (!E) return go("#/examenes");
  const ex = EXAMS.find(e => e.id === E.examId), qs = EXAM_Q[E.examId];
  const q = qs[E.cur], sel = E.ans[q.n] || [];
  const nAns = qs.filter(x => (E.ans[x.n] || []).length).length;
  app.innerHTML = `<div class="crumbs"><a href="#/examenes">Exámenes</a> › ${esc(ex.conv)} · Versión ${ex.version}</div>
  <div class="exam-layout">
    <div>
      <article class="qcard">
        <div class="row between"><div class="qmeta mb0"><span class="tag brand">Pregunta ${q.n} de ${qs.length}</span>${q.multi ? `<span class="tag warn">Puede haber más de una</span>` : ""}</div>
        <button class="btn sm ghost" id="e-clear" ${sel.length ? "" : "disabled"}>Dejar en blanco</button></div>
        <div class="qtext mt">${esc(q.q)}</div>
        ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}"><figcaption>Figura original del examen</figcaption></figure>` : ""}
        <div class="opts">${q.o.map((o, i) => `<button class="opt ${sel.includes(i) ? "sel" : ""}" data-i="${i}"><span class="k">${"abcd"[i]}</span><span class="t">${esc(o)}</span></button>`).join("")}</div>
        <div class="quiz-actions"><button class="btn" id="e-prev" ${E.cur === 0 ? "disabled" : ""}>← Anterior</button>
        <div class="right">${E.cur < qs.length - 1 ? `<button class="btn primary" id="e-next">Siguiente →</button>` : `<button class="btn primary" id="e-submit2">Entregar examen</button>`}</div></div>
      </article>
    </div>
    <aside class="exam-side card">
      <div class="row between"><span class="small muted">${E.mode === "sim" ? "Tiempo restante" : "Tiempo empleado"}</span><span class="tag ${E.mode === "sim" ? "brand" : ""}">${E.mode === "sim" ? "Simulacro" : "Sin límite"}</span></div>
      <div class="timer" id="e-timer">--:--</div>
      <div class="small muted mt">${nAns} de ${qs.length} respondidas</div>
      <div class="qgrid">${qs.map((x, k) => `<button class="${(E.ans[x.n] || []).length ? "ans" : ""} ${k === E.cur ? "cur" : ""}" data-go="${k}" aria-label="Pregunta ${x.n}">${x.n}</button>`).join("")}</div>
      <div class="legend"><span><i style="background:var(--brand-soft);border-color:var(--brand-2)"></i>Respondida</span><span><i></i>En blanco</span></div>
      <button class="btn primary btn-block mt" id="e-submit">Entregar examen</button>
      <button class="btn ghost btn-block danger" id="e-restart">Reiniciar examen</button>
      <button class="btn ghost btn-block" id="e-exit">Salir (se guarda)</button>
    </aside>
  </div>`;
  const tick = () => {
    const el = $("#e-timer"); if (!el || !S.exam) return;
    if (E.mode === "sim") {
      const left = (E.deadline - Date.now()) / 1000;
      el.textContent = fmtTime(left); el.classList.toggle("low", left < 300);
      if (left <= 0) { clearInterval(timerId); submitExam(true); }
    } else el.textContent = fmtTime((Date.now() - E.start) / 1000);
  };
  tick(); timerId = setInterval(tick, 1000);
  const rerender = () => { clearInterval(timerId); save(); viewExamRunner(); renderMath(app); };
  $$(".opt").forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    let s = new Set(E.ans[q.n] || []);
    if (q.multi) s.has(i) ? s.delete(i) : s.add(i); else s = s.has(i) ? new Set() : new Set([i]);
    E.ans[q.n] = Array.from(s); rerender();
  });
  $("#e-clear").onclick = () => { E.ans[q.n] = []; rerender(); };
  $("#e-prev").onclick = () => { E.cur--; rerender(); window.scrollTo(0, 0); };
  const nx = $("#e-next"); if (nx) nx.onclick = () => { E.cur++; rerender(); window.scrollTo(0, 0); };
  $$("[data-go]").forEach(b => b.onclick = () => { E.cur = +b.dataset.go; rerender(); });
  const askSubmit = () => { const nb = qs.length - qs.filter(x => (E.ans[x.n] || []).length).length;
    confirmBox("Entregar examen", nb ? `Te quedan <b>${nb}</b> pregunta${nb > 1 ? "s" : ""} en blanco. ¿Quieres entregar igualmente?` : "Has respondido todas las preguntas. ¿Entregar ahora?", "Entregar", () => submitExam(false)); };
  $("#e-submit").onclick = askSubmit; const s2 = $("#e-submit2"); if (s2) s2.onclick = askSubmit;
  $("#e-restart").onclick = () => confirmBox("Reiniciar examen", "Se borrarán tus respuestas y el temporizador empezará de nuevo.", "Reiniciar", () => { E.ans = {}; E.cur = 0; E.start = Date.now(); if (E.mode === "sim") E.deadline = Date.now() + ex.time * 60000; rerender(); }, { danger: true });
  $("#e-exit").onclick = () => go("#/examenes");
}
function submitExam(auto) {
  const E = S.exam; if (!E) return;
  const qs = EXAM_Q[E.examId];
  let total = 0, ok = 0, ko = 0, partial = 0, blankN = 0;
  qs.forEach(q => {
    const r = scoreQ(q, E.ans[q.n]);
    total += r.score;
    if (r.status === "ok") ok++; else if (r.status === "ko") ko++; else if (r.status === "partial") partial++; else blankN++;
    recordAnswer(q, r.status);
  });
  const dur = E.mode === "sim" ? Math.min((Date.now() - E.start) / 1000, (E.deadline - E.start) / 1000) : (Date.now() - E.start) / 1000;
  const h = { id: "h" + Date.now(), examId: E.examId, mode: E.mode, t: Date.now(), grade: Math.round(total * 1000) / 1000, ok, ko, partial, blank: blankN, dur: Math.round(dur), ans: E.ans, auto: !!auto };
  S.history.push(h); S.exam = null; save();
  go("#/resultado/" + h.id);
  if (auto) setTimeout(() => confirmBox("Tiempo agotado", "Se acabaron los 40 minutos y el examen se ha entregado automáticamente.", "Ver resultados", () => {}, { cancel: "Cerrar" }), 50);
}
function viewResult(hid) {
  const h = S.history.find(x => x.id === hid);
  if (!h) return go("#/examenes");
  const ex = EXAMS.find(e => e.id === h.examId), qs = EXAM_Q[h.examId];
  const filt = viewResult.filter || "all";
  const p = Math.round(h.grade * 10);
  const show = qs.filter(q => { const st = scoreQ(q, h.ans[q.n]).status; return filt === "all" || (filt === "wrong" ? (st === "ko" || st === "partial") : filt === st); });
  app.innerHTML = `<div class="crumbs"><a href="#/examenes">Exámenes</a> › Resultado</div>
  <h1>Resultado · ${esc(ex.conv)} · ${ex.version}</h1>
  <div class="small muted">${fmtDate(h.t)} · ${h.mode === "sim" ? "Simulacro con temporizador" : "Examen sin límite de tiempo"} · Tiempo: ${fmtTime(h.dur)}${h.auto ? " · entregado automáticamente" : ""}</div>
  <div class="card mt"><div class="grade">
    <div class="ring" style="--p:${p};--rc:${h.grade >= 5 ? "var(--ok)" : "var(--ko)"}"><div><div><b>${fmt1(h.grade)}</b><br><small>sobre 10</small></div></div></div>
    <div class="kpis"><div class="kpi ok"><b>${h.ok}</b><span>Aciertos</span></div><div class="kpi ko"><b>${h.ko}</b><span>Errores</span></div>
    <div class="kpi partial"><b>${h.partial}</b><span>Parciales</span></div><div class="kpi"><b>${h.blank}</b><span>Sin responder</span></div></div></div>
    <div class="qgrid" style="grid-template-columns:repeat(10,1fr)">${qs.map(q => { const st = scoreQ(q, h.ans[q.n]).status; return `<button class="r-${st}" data-jump="${q.n}" title="Pregunta ${q.n}">${q.n}</button>`; }).join("")}</div>
    <div class="legend"><span><i style="background:var(--ok-soft);border-color:var(--ok)"></i>Correcta</span><span><i style="background:var(--ko-soft);border-color:var(--ko)"></i>Incorrecta</span><span><i style="background:var(--warn-soft);border-color:var(--warn)"></i>Parcial</span><span><i style="border-style:dashed"></i>En blanco</span></div>
    <div class="row mt"><button class="btn primary" id="r-retry">Repetir este examen</button>${h.ko + h.partial ? `<button class="btn soft" id="r-wrong">Practicar las falladas</button>` : ""}<a class="btn ghost" href="#/examenes">Volver a exámenes</a></div>
    <p class="tiny muted mb0 mt">Corrección con la hoja oficial de soluciones (PA1, 11/11/2025). Nota = Σ 0,5 × máx(0, (aciertos − fallos) / soluciones posibles).</p></div>
  <div class="section-title"><h2>Revisión de respuestas</h2></div>
  <div class="tabs">${[["all", "Todas"], ["wrong", "Falladas y parciales"], ["blank", "En blanco"], ["ok", "Correctas"]].map(([k, l]) => `<button class="${filt === k ? "active" : ""}" data-f="${k}">${l}</button>`).join("")}</div>
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
  const ap = apartadoStats().filter(r => r.n >= 1).sort((a, b) => a.p - b.p || b.n - a.n);
  const sess = S.sessions.slice(-20);
  const hist = S.history.slice(-20);
  app.innerHTML = `<div class="crumbs"><a href="#/">Inicio</a> › Progreso</div>
  <h1>Tu progreso</h1>
  <div class="grid g4">
    <div class="stat"><div class="v">${g.seen}</div><div class="l">Preguntas distintas vistas</div></div>
    <div class="stat"><div class="v">${g.n ? g.p + "%" : "—"}</div><div class="l">Aciertos globales (${g.ok}/${g.n})</div></div>
    <div class="stat"><div class="v">${g.exams}</div><div class="l">Exámenes realizados</div></div>
    <div class="stat"><div class="v">${g.best != null ? fmt1(g.best) : "—"}</div><div class="l">Mejor nota</div></div>
  </div>
  <div class="section-title"><h2>Aciertos por tema</h2></div>
  <div class="card">${TOPICS.map(t => topicRow(t)).join("")}</div>
  <div class="grid g2 mt">
    <div class="card"><h3>Evolución de notas de examen</h3>${hist.length ? lineChart(hist.map(h => h.grade), 10, hist.map(h => h.examId.slice(-2))) : `<div class="empty small">Haz un examen para ver tu evolución.</div>`}</div>
    <div class="card"><h3>Aciertos en tus últimos test</h3>${sess.length ? lineChart(sess.map(s => pct(s.ok, s.n)), 100, sess.map((_, i) => String(i + 1)), "%") : `<div class="empty small">Completa un test para ver tu evolución.</div>`}</div>
  </div>
  <div class="section-title"><h2>Apartados que necesitas reforzar</h2></div>
  <div class="card">${ap.length ? `<ul class="list">${ap.slice(0, 15).map(r => `<li><span><span class="tag" style="background:${topicById(r.tema).color}1a;color:${topicById(r.tema).color}">${topicById(r.tema).num}</span> ${esc(r.apartado)} <span class="tiny muted">· ${r.ok}/${r.n}</span></span>
    <span class="row"><span class="tag ${r.p >= 70 ? "ok" : r.p < 50 ? "ko" : "warn"}">${r.p}%</span><button class="btn sm" data-wk="${esc(r.tema)}|${esc(r.apartado)}">Practicar</button></span></li>`).join("")}</ul>` : `<div class="empty">Aún no hay datos. Empieza con un test.</div>`}</div>
  <div class="section-title"><h2>Datos</h2></div>
  <div class="card"><p class="small muted">El progreso se guarda solo en este navegador y dispositivo. Puedes exportarlo e importarlo en otro dispositivo.</p>
  <div class="row"><button class="btn" id="p-exp">Exportar progreso</button><label class="btn" style="cursor:pointer">Importar progreso<input type="file" id="p-imp" accept="application/json" hidden></label>
  <button class="btn ghost danger" id="p-reset">Reiniciar todo el progreso</button></div></div>`;
  $$("[data-wk]").forEach(b => b.onclick = () => { const [t, a] = b.dataset.wk.split("|"); startQuiz({ ids: shuffle(Object.values(QMAP).filter(q => q.tema === t && q.apartado === a && (q.bank === "learn" || EXAM_POOL.includes(q.id))).map(q => q.id)), title: "Refuerzo: " + a }); });
  $("#p-exp").onclick = () => { const blob = new Blob([JSON.stringify(S)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "progreso-estructuras.json"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
  $("#p-imp").onchange = e => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { try { const d = JSON.parse(rd.result); if (!d || typeof d !== "object" || !d.qs) throw new Error(); S = Object.assign(blank(), d); save(); route(); } catch (err) { confirmBox("Archivo no válido", "No se ha podido leer el archivo de progreso.", "Aceptar", () => {}); } }; rd.readAsText(f); };
  $("#p-reset").onclick = () => confirmBox("Reiniciar progreso", "Se borrarán estadísticas, preguntas falladas, historial de exámenes y el examen en curso. No se puede deshacer.", "Borrar todo", () => { S = blank(); save(); route(); }, { danger: true });
}
function lineChart(vals, max, labels, unit = "") {
  const W = 460, H = 180, pl = 30, pr = 10, pt = 12, pb = 24, n = vals.length;
  const x = i => pl + (n === 1 ? (W - pl - pr) / 2 : i * (W - pl - pr) / (n - 1)), y = v => pt + (H - pt - pb) * (1 - v / max);
  const grid = [0, .5, 1].map(f => `<line x1="${pl}" x2="${W - pr}" y1="${y(max * f)}" y2="${y(max * f)}" stroke="#dce5f2"/><text x="${pl - 6}" y="${y(max * f) + 4}" text-anchor="end">${max * f}${unit}</text>`).join("");
  const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const ref = max === 10 ? `<line x1="${pl}" x2="${W - pr}" y1="${y(5)}" y2="${y(5)}" stroke="#c2413b" stroke-dasharray="4 4" opacity=".5"/>` : "";
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfico de evolución">${grid}${ref}
  <polyline points="${pts}" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"/>
  ${vals.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="#fff" stroke="#2563eb" stroke-width="2"><title>${max === 10 ? fmt1(v) : v + unit}</title></circle>`).join("")}
  ${labels.map((l, i) => n <= 12 || i % 2 === 0 ? `<text x="${x(i)}" y="${H - 6}" text-anchor="middle">${esc(l)}</text>` : "").join("")}</svg>`;
}

/* arranque */
if (S.exam && S.exam.mode === "sim" && Date.now() > S.exam.deadline) { submitExam(true); }
else route();
})();
