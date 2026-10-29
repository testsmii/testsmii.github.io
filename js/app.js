/* =====================================================================
   App de estudio (SPA sin dependencias) · varias asignaturas.
   Los datos y la configuración de cada asignatura (window.SUBJECT) se
   cargan antes desde js/subjects.js.
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
  split: '<path d="M12 3v18M4 7h5M4 12h5M15 12h5M15 17h5M4 17h5M15 7h5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
};
const ic = (k, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24">${ICON[k]}</svg>`;

/* ---------- persistencia ---------- */
const SUBJ = window.SUBJECT;
const LS_KEY = SUBJ.lsKey;
const blank = () => ({ qs: {}, failed: {}, history: [], sessions: [], exam: null, quiz: null, lessons: {}, cards: {}, days: {}, rev: null, drills: {}, seenUpdates: null, settings: {} });
let S = blank();
try { const raw = localStorage.getItem(LS_KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* almacenamiento no disponible */ }
function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { /* ignorar */ } if (window.CLOUD) CLOUD.onSave(S); }
const quizOn = () => !(S.settings && S.settings.lessonQuiz === false);
function toggleQuiz() { S.settings = Object.assign({}, S.settings, { lessonQuiz: !quizOn() }); save(); route(); }
const quizToggle = () => `<label class="qtoggle no-print" title="Activa o desactiva el test corto al final de cada lección"><input type="checkbox" id="qt-on" ${quizOn() ? "checked" : ""}><span class="sw"></span><span>Test al final de cada lección</span></label>`;
document.addEventListener("change", e => { if (e.target && e.target.id === "qt-on") toggleQuiz(); });
const bump = () => { const k = dayKey(); S.days[k] = (S.days[k] || 0) + 1; };

/* ---------- bancos de preguntas ---------- */
const QMAP = {};
LEARN.forEach(q => { q.bank = "learn"; q.src = "Banco de aprendizaje · " + q.ref; QMAP[q.id] = q; });
const EXAM_Q = {};
EXAMS.forEach(ex => { EXAM_Q[ex.id] = buildExamQuestions(ex); EXAM_Q[ex.id].forEach(q => { q.bank = "exam"; q.examId = ex.id; QMAP[q.id] = q; }); });
// Pool de práctica (sin duplicar versiones): solo preguntas de la PEC1 (part P1) con clave
const EXAM_POOL = SUBJ.examPool(EXAM_Q);
const exById = id => EXAMS.find(e => e.id === id);
const exLabel = q => { const e = exById(q.examId); return e.short + " " + e.version; };
const inPool = q => q.bank === "learn" || EXAM_POOL.includes(q.id);
const fixedOrder = q => q.bank === "exam" || q.o.some(o => /anteriores|Alguna de/i.test(o));

/* ---------- novedades de contenido ---------- */
function updateQids(u) { return u.exams.flatMap(id => (EXAM_Q[id] || []).filter(q => EXAM_POOL.includes(q.id)).map(q => q.id)); }
function pendingUpdates() {
  if (typeof UPDATES_ENABLED === "undefined") return [];
  if (!UPDATES_ENABLED) { if (!S.seenUpdates || S.seenUpdates.length !== UPDATES.length) { S.seenUpdates = UPDATES.map(u => u.id); save(); } return []; }
  if (S.seenUpdates == null) { // usuario nuevo: no tiene sentido avisarle; usuario previo: sí
    const used = Object.keys(S.qs).length || S.history.length || Object.keys(S.lessons).length;
    S.seenUpdates = used ? [] : UPDATES.map(u => u.id); save();
  }
  return UPDATES.filter(u => !S.seenUpdates.includes(u.id));
}
function dismissUpdates() { S.seenUpdates = UPDATES.map(u => u.id); save(); }
function updatesBanner() {
  const ups = pendingUpdates(); if (!ups.length) return "";
  const ids = [...new Set(ups.flatMap(updateQids))].filter(id => !S.qs[id]);
  const total = Object.values(QMAP).filter(inPool).length;
  return `<section class="card news"><div class="news-h"><span class="news-badge">¡Novedad!</span><b>Hay preguntas nuevas</b><button class="linkbtn" id="nw-x" aria-label="Descartar">✕</button></div>
  <ul>${ups.map(u => `<li><b>${esc(u.title)}</b> — <span class="muted">${esc(u.desc)}</span></li>`).join("")}</ul>
  <p class="small muted mb0">Tu progreso se ha recalculado: ahora hay <b>${total}</b> preguntas de la PEC1 en la app y tu dominio cuenta también las nuevas.</p>
  <div class="row mt">${ids.length ? `<button class="btn primary" id="nw-go">${ic("play")} Empezar test con las ${ids.length} nuevas</button>` : ""}<a class="btn soft" href="#/examenes" id="nw-ex">Ver exámenes</a></div></section>`;
}
function wireUpdates() {
  const x = $("#nw-x"); if (x) x.onclick = () => { dismissUpdates(); route(); };
  const g = $("#nw-go"); if (g) g.onclick = () => { const ids = [...new Set(pendingUpdates().flatMap(updateQids))].filter(id => !S.qs[id]); dismissUpdates(); startQuiz({ ids: shuffle(ids), title: "Preguntas nuevas", fromExam: true }); };
  const e = $("#nw-ex"); if (e) e.onclick = () => dismissUpdates();
}

/* apartado → lección (sección del temario) */
const SEC_RULES = SUBJ.secRules || {};
Object.values(QMAP).forEach(q => { if (!q.sec) q.sec = SEC_RULES[q.tema].find(([re]) => new RegExp(re.source, "i").test(q.apartado))[1]; });

/* ---------- lecciones (secciones del temario troceadas por subtítulos) ---------- */
const figHtml = d => d.img ? `<figure class="dgfig photo"><img src="${d.img}" alt="${esc(d.alt || "")}" loading="lazy"><figcaption>${d.cap}</figcaption></figure>` : `<figure class="dgfig">${d.svg}<figcaption>${d.cap}</figcaption></figure>`;
const LESSONS = [];
TOPICS.forEach(t => THEORY[t.id].sections.forEach((s, idx) => {
  const parts = s.html.split(/(?=<h4>)/).map(x => x.trim()).filter(Boolean);
  let steps = parts.map(p => { const m = p.match(/^<h4>(.*?)<\/h4>/); return { title: m ? m[1] : s.title.replace(/^[\d.]+\s*/, ""), html: m ? p.slice(m[0].length) : p }; });
  if (steps.length > 1 && steps[0].html.replace(/<[^>]+>/g, "").trim().length < 40) { steps[1].html = steps[0].html + steps[1].html; steps.shift(); }
  // primero el texto resumido y debajo las figuras (en el orden de siempre: la última añadida, arriba)
  DIAGRAMS.filter(d => d.sec === s.id).reverse().forEach(d => {
    const st = (d.h4 ? steps.find(x => x.title.includes(d.h4)) : steps[0]) || steps[0];
    st.figs = (st.figs || "") + figHtml(d);
  });
  steps.forEach(st => { if (st.figs) { st.html += `<div class="step-figs">${st.figs}</div>`; delete st.figs; } });
  LESSONS.push({ id: s.id, tema: t.id, idx, title: s.title, steps, qids: Object.values(QMAP).filter(q => q.sec === s.id && inPool(q)).map(q => q.id) });
}));
const lessonById = id => LESSONS.find(l => l.id === id);
const theoryWithDiagrams = s => {
  let h = s.html;
  DIAGRAMS.filter(d => d.sec === s.id).reverse().forEach(d => {
    // la figura va al final del bloque de su subtítulo (antes del siguiente <h4>)
    let i = !d.h4 ? 0 : h.indexOf("<h4>" + d.h4) >= 0 ? h.indexOf("<h4>" + d.h4) : h.search(new RegExp("<h4>[^<]*" + d.h4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    if (i < 0) i = 0;
    const j = h.indexOf("</h4>", i) >= 0 && d.h4 ? h.indexOf("</h4>", i) + 5 : i;
    let k = h.indexOf("<h4>", j); if (k < 0) k = h.length;
    if (!d.h4 && h.indexOf("<h4>") > 0) k = h.indexOf("<h4>");
    h = h.slice(0, k) + figHtml(d) + h.slice(k);
  });
  return h;
};

/* ---------- diapositivas originales de los apuntes ---------- */
const DECKS = SUBJ.decks, TEMA_DECK = SUBJ.temaDeck || {};
// rango de diapositivas de cada sección: { deck, a, b }
const SEC_SLIDES = {};
Object.entries(SUBJ.secSlides || {}).forEach(([sec, r]) => { const l = LESSONS.find(x => x.id === sec); if (l) SEC_SLIDES[sec] = { deck: TEMA_DECK[l.tema], a: r[0], b: r[1] }; });
TOPICS.forEach(t => THEORY[t.id].sections.forEach(s => { if (s.slides && DECKS[s.slides[0]]) SEC_SLIDES[s.id] = { deck: s.slides[0], a: s.slides[1], b: s.slides[2] }; }));
const slideSrc = (deck, n) => `${SUBJ.slideDir}${DECKS[deck].dir}/p-${String(n + DECKS[deck].off).padStart(2, "0")}.jpg`;
const deckLabel = d => DECKS[d].label || d;
const DECK_RE = new RegExp("(" + Object.keys(DECKS).sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")\\s*,\\s*diap(?:s)?\\.\\s*([\\d\\s,y–\\-]+)", "g");
function slideRefs(text) {
  const out = [], seen = new Set();
  const re = new RegExp(DECK_RE.source, "g"); let m;
  while ((m = re.exec(text || ""))) {
    const deck = m[1];
    m[2].split(/,|\by\b/).forEach(part => {
      const r = part.trim().match(/^(\d+)(?:\s*[-–]\s*(\d+))?/); if (!r) return;
      const a = Math.max(1, +r[1]), b = Math.min(r[2] ? +r[2] : a, DECKS[deck].pages - DECKS[deck].off), k = deck + "|" + a + "|" + b;
      if (a <= b && !seen.has(k)) { seen.add(k); out.push({ deck, a, b }); }
    });
  }
  return out.slice(0, 4);
}
function slideButtons(q) {
  const refs = slideRefs([q.ref, q.exp, q.official].join(" "));
  if (!refs.length) return "";
  return `<div class="slide-btns">${refs.map(r => `<button class="btn sm soft" data-slide="${r.deck}|${r.a}|${r.b}">📄 Ver diapositiva original · ${esc(deckLabel(r.deck))} diap. ${r.a}${r.b > r.a ? "–" + r.b : ""}</button>`).join("")}</div>`;
}
function openSlide(deck, n, range) {
  const m = $("#modal"), D = DECKS[deck];
  const lo = range ? range[0] : 1, hi = range ? range[1] : D.pages - D.off;
  n = Math.max(lo, Math.min(hi, n));
  m.innerHTML = `<div class="box slidebox" role="dialog" aria-modal="true" aria-label="Diapositiva original">
    <div class="sb-h"><div><b>${esc(D.name)}</b> <span class="muted small">· diapositiva ${n}${range ? ` (${lo}–${hi})` : ""}</span></div><button class="linkbtn" id="sb-x" aria-label="Cerrar">✕ Cerrar</button></div>
    <div class="sb-img"><img src="${slideSrc(deck, n)}" alt="Diapositiva ${n} de los apuntes: ${esc(D.name)}"></div>
    <div class="sb-nav"><button class="btn sm" id="sb-p" ${n <= lo ? "disabled" : ""}>${ic("back")} Anterior</button><span class="small muted">Captura de los apuntes originales</span><button class="btn sm" id="sb-n" ${n >= hi ? "disabled" : ""}>Siguiente ${ic("arrow")}</button></div></div>`;
  m.hidden = false;
  const close = () => { m.hidden = true; m.innerHTML = ""; document.removeEventListener("keydown", key); };
  const key = e => { if (e.key === "Escape") close(); if (e.key === "ArrowLeft" && n > lo) { document.removeEventListener("keydown", key); openSlide(deck, n - 1, range); } if (e.key === "ArrowRight" && n < hi) { document.removeEventListener("keydown", key); openSlide(deck, n + 1, range); } };
  document.addEventListener("keydown", key);
  $("#sb-x").onclick = close; m.onclick = e => { if (e.target === m) close(); };
  $("#sb-p").onclick = () => { document.removeEventListener("keydown", key); openSlide(deck, n - 1, range); };
  $("#sb-n").onclick = () => { document.removeEventListener("keydown", key); openSlide(deck, n + 1, range); };
}
/* ---------- practicar desde cualquier % de dominio ---------- */
function pmQs(key) {
  const [k, v] = key.split(":");
  if (k === "tema") return topicQs(v);
  if (k === "lesson") { const l = lessonById(v); return l ? l.qids.map(id => QMAP[id]) : []; }
  if (k === "exam") return EXAM_POOL.map(id => QMAP[id]);
  if (k === "examtema") return EXAM_POOL.map(id => QMAP[id]).filter(q => q.tema === v);
  return Object.values(QMAP).filter(inPool);
}
function pmTitle(key) {
  const [k, v] = key.split(":");
  if (k === "tema") return "Tema " + topicById(v).num + " · " + topicById(v).short;
  if (k === "lesson") return lessonById(v).title.replace(/^[\d.]+\s*/, "");
  if (k === "examtema") return "Examen · Tema " + topicById(v).num;
  return k === "exam" ? "Preguntas de examen" : "Toda la asignatura";
}
function practiceMenu(key) {
  const qs = pmQs(key), title = pmTitle(key);
  const pending = qs.filter(q => !S.qs[q.id] || S.qs[q.id].last !== "ok"), unseen = qs.filter(q => !S.qs[q.id]), failed = qs.filter(q => S.failed[q.id]);
  const okN = qs.length - pending.length;
  const opt = (icon, t, list, sub, ordered) => ({ icon, title: `${t} (${list.length})`, sub, run: () => list.length ? startQuiz({ ids: ordered ? list.map(q => q.id) : shuffle(list.map(q => q.id)), title: title + " · " + t.toLowerCase() }) : confirmBox("Nada que practicar", "No hay preguntas en este grupo. ¡Bien hecho!", "Aceptar", () => {}, { noCancel: true }) });
  chooseBox(esc(title), `Dominio ${pct(okN, qs.length)} %: ${okN} de ${qs.length} preguntas acertadas en su último intento. Puedes dejar cualquier test a medias y continuar luego.`, [
    opt("play", "Las que me faltan", pending, "Sin hacer o no acertadas la última vez · hasta llegar al 100 %"),
    opt("book", "Solo las no vistas", unseen, "Preguntas que aún no has respondido nunca"),
    opt("redo", "Las falladas", failed, "Hasta que las aciertes"),
    opt("exam", "Todas", qs, "El conjunto completo, en orden aleatorio")]);
}
document.addEventListener("click", e => { const t = e.target.closest("[data-pm]"); if (t) { e.preventDefault(); go("#/dominio/" + t.dataset.pm); } });
document.addEventListener("keydown", e => { if (e.key === "Enter") { const t = e.target.closest && e.target.closest(".hb-row[data-pm]"); if (t) go("#/dominio/" + t.dataset.pm); } });

/* ---------- resumen de tema, temario seguido y página de dominio ---------- */
const isLastOfTopic = id => { const l = lessonById(id); if (!l) return false; const ls = LESSONS.filter(x => x.tema === l.tema); return ls[ls.length - 1] === l; };
const summaryRow = t => `<a class="lrow sumrow" href="#/tema/${t.id}/resumen"><span class="lnum">📋</span><span class="ltxt"><b>Resumen del tema</b><small>Ideas clave y confusiones frecuentes para repasar al final</small></span></a>`;
function topicSummaryHtml(t) {
  const th = THEORY[t.id];
  return `<div class="card sum-card" style="--c:${t.color}"><div class="card-h"><h3>📋 Resumen · Tema ${t.num}</h3></div><ol class="summary-list">${th.summary.map(x => `<li>${x}</li>`).join("")}</ol></div>
  ${th.confusions && th.confusions.length ? `<div class="card mt"><div class="card-h"><h3>⚠️ No confundas</h3></div>${th.confusions.map(c => `<div class="conf"><div>${c[0]}</div><div>${c[1]}</div></div>`).join("")}</div>` : ""}`;
}
function viewSyllabus(tid) {
  const tps = tid && topicById(tid) ? [topicById(tid)] : TOPICS;
  app.innerHTML = `<h1>Temario</h1>${learnTabs("temario")}
  <p class="muted small">Todo el temario seguido, sin preguntas por medio: texto, esquemas y figuras de las diapositivas, con el resumen al final de cada tema.</p>
  <nav class="syl-index card">${TOPICS.map(t => `<a class="chip ${tps.length === 1 && tps[0] === t ? "on" : ""}" href="#/temario/${t.id}" style="--c:${t.color}">${t.num}. ${esc(t.short)}</a>`).join("")}${tps.length === 1 ? `<a class="chip" href="#/temario">Todos</a>` : ""}</nav>
  ${tps.map(t => `<section class="syl-topic" id="syl-${t.id}"><h2 style="color:${t.color}">Tema ${t.num} · ${esc(t.title)}</h2>
    <div class="syl-toc small">${THEORY[t.id].sections.map(sc => `<a href="javascript:void 0" data-goto="syl-${sc.id}">${esc(sc.title)}</a>`).join(" · ")}</div>
    ${THEORY[t.id].sections.map(sc => `<article class="card syl-sec theory" id="syl-${sc.id}"><div class="row between"><h3 class="mb0">${esc(sc.title)}</h3>${secSlidesBtn(sc.id, "Diapositivas")}</div>${theoryWithDiagrams(sc)}</article>`).join("")}
    ${topicSummaryHtml(t)}</section>`).join("")}
  <p class="tiny muted">Los recuadros amarillos («Ampliación») son conocimiento general que no aparece en tus apuntes.</p>`;
  $$("[data-goto]").forEach(a => a.onclick = () => { const el = document.getElementById(a.dataset.goto); if (el) el.scrollIntoView({ behavior: "smooth" }); });
}
function viewMastery(key) {
  let qs; try { qs = pmQs(key); } catch (e) { return go("#/progreso"); }
  const title = pmTitle(key), stat = q => { const s = S.qs[q.id]; return !s ? "new" : s.last === "ok" ? "ok" : s.last === "partial" ? "partial" : "ko"; };
  const ok = qs.filter(q => stat(q) === "ok"), ko = qs.filter(q => stat(q) === "ko" || stat(q) === "partial"), nw = qs.filter(q => stat(q) === "new");
  const m = pct(ok.length, qs.length), [k, v] = key.split(":");
  const lessonsIn = k === "lesson" ? [] : LESSONS.filter(l => (k === "tema" || k === "examtema") ? l.tema === v : true).filter(l => qs.some(q => q.sec === l.id));
  const byL = l => qs.filter(q => q.sec === l.id);
  const groups = (k === "lesson" ? [lessonById(v)] : lessonsIn).map(l => ({ l, items: byL(l).filter(q => stat(q) !== "ok").sort((x, y) => (stat(x) === "new") - (stat(y) === "new")) })).filter(g => g.items.length);
  const badge = q => ({ ko: `<span class="tag ko">Fallada</span>`, partial: `<span class="tag warn">Parcial</span>`, new: `<span class="tag">No vista</span>` })[stat(q)];
  const back = k === "tema" ? `#/tema/${v}` : k === "lesson" ? `#/leccion/${v}` : k === "examtema" || k === "exam" ? "#/examenes" : "#/progreso";
  app.innerHTML = `<div class="crumbs"><a href="${back}">Volver</a> › Dominio</div><h1>${esc(title)}</h1>
  <div class="card kpi-row">${donut(m, "dominio", "", m >= 75 ? "#0f8a5f" : "#2563eb", 120)}
    <div class="kstat"><b>${ok.length}</b><span>dominadas (última respuesta correcta)</span></div>
    <div class="kstat"><b>${ko.length}</b><span>falladas o parciales</span></div>
    <div class="kstat"><b>${nw.length}</b><span>sin hacer</span></div></div>
  <div class="row mt">${ko.length + nw.length ? `<button class="btn primary big" data-run="pend">${ic("play")} Practicar lo que no domino (${ko.length + nw.length})</button>` : `<span class="notice">¡Lo dominas todo! 🎉</span>`}
    ${ko.length ? `<button class="btn soft" data-run="ko">Solo las falladas (${ko.length})</button>` : ""}${nw.length ? `<button class="btn soft" data-run="new">Solo las no vistas (${nw.length})</button>` : ""}<button class="btn ghost" data-run="all">Todas (${qs.length})</button></div>
  ${lessonsIn.length > 1 ? `<div class="card mt"><div class="card-h"><h3>Dominio por lección</h3><span class="small muted">Toca una para ver el detalle</span></div>${hbars(lessonsIn.map(l => ({ label: l.title.replace(/^[\d.]+\s*/, "").slice(0, 30), value: mastery(byL(l)), color: topicById(l.tema).color, pm: "lesson:" + l.id, tip: `${byL(l).filter(q => stat(q) === "ok").length}/${byL(l).length}` })), { labelW: 210 })}</div>` : ""}
  <div class="section-title"><h2>Lo que aún no dominas</h2></div>
  ${groups.length ? groups.map(g => `<details class="card mt mgroup" ${groups.length <= 3 ? "open" : ""}><summary class="sum-h"><b>${esc(g.l.title.replace(/^[\d.]+\s*/, ""))}</b> <span class="muted small">· ${g.items.length} pendiente${g.items.length > 1 ? "s" : ""}</span></summary>
    <div class="row mt"><button class="btn sm primary" data-runl="${g.l.id}">Repetir estas ${g.items.length}</button><a class="btn sm soft" href="#/leccion/${g.l.id}">Releer la lección</a></div>
    <ul class="list mt">${g.items.slice(0, 40).map(q => `<li class="clickable" data-one="${q.id}"><span>${badge(q)} ${esc(q.q.length > 140 ? q.q.slice(0, 140) + "…" : q.q)}</span>${ic("arrow", "chev")}</li>`).join("")}</ul>
    ${g.items.length > 40 ? `<p class="tiny muted">…y ${g.items.length - 40} más.</p>` : ""}</details>`).join("") : `<div class="card empty">No hay nada pendiente aquí.</div>`}`;
  const run = (list, t) => list.length && startQuiz({ ids: shuffle(list.map(q => q.id)), title: title + " · " + t });
  $$("[data-run]").forEach(b => b.onclick = () => { const r = b.dataset.run; run(r === "pend" ? ko.concat(nw) : r === "ko" ? ko : r === "new" ? nw : qs, { pend: "lo que no domino", ko: "falladas", new: "no vistas", all: "todas" }[r]); });
  $$("[data-runl]").forEach(b => b.onclick = () => { const g = groups.find(x => x.l.id === b.dataset.runl); run(g.items, g.l.title.replace(/^[\d.]+\s*/, "")); });
  $$("[data-one]").forEach(li => li.onclick = () => startQuiz({ ids: [li.dataset.one], title: "Repaso" }));
}

/* ---------- todos los resúmenes juntos ---------- */
function viewSummaries() {
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("resumenes")}
  <div class="row between no-print"><p class="muted small mb0">Los resúmenes de todos los temas en una página: ideas clave y lo que no hay que confundir.</p><button class="btn ghost sm" id="rs-print">🖨 Imprimir / PDF</button></div>
  <nav class="syl-index card no-print">${TOPICS.map(t => `<a class="chip" href="javascript:void 0" data-goto="rs-${t.id}" style="--c:${t.color}">${t.num}. ${esc(t.short)}</a>`).join("")}</nav>
  <h2 class="print-only">${esc(SUBJ.name)} · Resúmenes</h2>
  ${TOPICS.map(t => `<section id="rs-${t.id}" class="syl-sec">${topicSummaryHtml(t)}<div class="row mt no-print"><a class="small" href="#/temario/${t.id}">Leer el tema completo</a> · <a class="small" href="#/dominio/tema:${t.id}">Ver qué no domino</a></div></section>`).join("")}`;
  $$("[data-goto]").forEach(a => a.onclick = () => { const el = document.getElementById(a.dataset.goto); if (el) el.scrollIntoView({ behavior: "smooth" }); });
  $("#rs-print").onclick = () => window.print();
}

/* ---------- hoja de definiciones y diferencias ---------- */
let GL = { q: "", t: "all" };
function viewGlossary(tab) {
  const strip = h => String(h).replace(/<[^>]+>/g, "");
  const tOk = tid => GL.t === "all" || GL.t === tid;
  const defs = CARDS.map(c => ({ tema: c.tema, sec: c.sec, f: c.f, b: c.b }))
    .concat(DRILLS.filter(d => d.type === "match").flatMap(d => d.pairs.map(pr => ({ tema: d.tema, sec: d.sec, f: pr[0], b: pr[1], from: d.title }))));
  const difs = TOPICS.flatMap(t => (THEORY[t.id].confusions || []).map(c => ({ tema: t.id, a: c[0], b: c[1] })));
  const tables = DRILLS.filter(d => d.type === "classify");
  const nq = normT(GL.q).trim(), hit = txt => !nq || normT(txt).includes(nq);
  const lessonT = sec => { const l = lessonById(sec); return l ? l.title.replace(/^[\d.]+\s*/, "") : ""; };
  let body = "";
  if (tab === "def") {
    const list = defs.filter(d => tOk(d.tema) && hit(d.f + " " + d.b));
    body = TOPICS.filter(t => tOk(t.id)).map(t => { const ds = list.filter(d => d.tema === t.id); if (!ds.length) return "";
      return `<section class="card gl-sec" style="--c:${t.color}"><h3>Tema ${t.num} · ${esc(t.short)} <span class="muted small">(${ds.length})</span></h3><dl class="gl-dl">${ds.map(d => `<div class="gl-item"><dt>${d.f}</dt><dd>${d.b}${d.sec && lessonById(d.sec) ? ` <a class="gl-lnk" href="#/leccion/${d.sec}" title="${esc(lessonT(d.sec))}">→ lección</a>` : ""}</dd></div>`).join("")}</dl></section>`; }).join("") || `<div class="card empty">No hay definiciones con «${esc(GL.q)}».</div>`;
  } else {
    const list = difs.filter(d => tOk(d.tema) && hit(d.a + " " + d.b));
    const tbs = tables.filter(d => tOk(d.tema) && hit(d.title + " " + d.cats.join(" ") + " " + d.items.map(i => i[0]).join(" ")));
    body = TOPICS.filter(t => tOk(t.id)).map(t => { const ds = list.filter(d => d.tema === t.id), ts = tbs.filter(d => d.tema === t.id); if (!ds.length && !ts.length) return "";
      return `<section class="card gl-sec" style="--c:${t.color}"><h3>Tema ${t.num} · ${esc(t.short)}</h3>
      ${ds.map(d => `<div class="conf"><div>${d.a}</div><div>${d.b}</div></div>`).join("")}
      ${ts.map(d => `<div class="gl-cmp"><div class="card-h"><b>${esc(d.title)}</b><a class="small no-print" href="#/ejercicio/${d.id}">Ponerte a prueba</a></div><div class="cmp-grid" style="--n:${d.cats.length}">${d.cats.map((c, ci) => `<div class="cmp-col"><div class="cmp-h">${esc(c)}</div><ul>${d.items.filter(it => it[1] === ci).map(it => `<li>${esc(it[0])}</li>`).join("")}</ul></div>`).join("")}</div></div>`).join("")}</section>`; }).join("") || `<div class="card empty">No hay diferencias con «${esc(GL.q)}».</div>`;
  }
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("definiciones")}
  <div class="card gl-bar no-print">
    <div class="tabs mb0">${[["def", "📘 Definiciones"], ["dif", "⇄ Diferencias"]].map(([k, l]) => `<button class="${k === tab ? "active" : ""}" data-gt="${k}">${l}</button>`).join("")}</div>
    <div class="row mt"><input class="inp" id="gl-q" type="search" placeholder="Buscar término… (p. ej. robustez, ELU, PCI)" value="${esc(GL.q)}"><button class="btn ghost" id="gl-print">🖨 Imprimir / PDF</button></div>
    <div class="chips mt">${[{ id: "all", num: "", short: "Todos" }].concat(TOPICS).map(t => `<button class="chip ${GL.t === t.id ? "on" : ""}" data-gf="${t.id}">${t.num ? t.num + ". " : ""}${esc(t.short)}</button>`).join("")}</div>
  </div>
  <h2 class="print-only">${esc(SUBJ.name)} · ${tab === "def" ? "Definiciones" : "Diferencias"}</h2>
  ${body}
  <p class="tiny muted">Hoja generada con las tarjetas, las confusiones frecuentes y los ejercicios de la app, basados en tus apuntes.</p>`;
  $$("[data-gt]").forEach(b => b.onclick = () => go("#/definiciones/" + b.dataset.gt));
  $$("[data-gf]").forEach(b => b.onclick = () => { GL.t = b.dataset.gf; viewGlossary(tab); renderMath(app); });
  const qi = $("#gl-q"); let tm; qi.oninput = () => { clearTimeout(tm); tm = setTimeout(() => { GL.q = qi.value; const pos = qi.selectionStart; viewGlossary(tab); renderMath(app); const n = $("#gl-q"); n.focus(); n.setSelectionRange(pos, pos); }, 200); };
  $("#gl-print").onclick = () => window.print();
}

/* ---------- teoría de una pregunta en una ventana (sin salir del test o examen) ---------- */
function bestStep(l, q) {
  const words = [...new Set(toksT([q.q, q.a.map(i => q.o[i]).join(" "), q.exp, q.apartado].join(" ")))];
  let best = 0, bs = -1;
  l.steps.forEach((st, i) => { const tx = " " + normT(st.title + " " + st.html) + " "; const sc = words.reduce((a, w) => a + (tx.includes(" " + w) ? 1 : 0), 0) + (normT(st.title).includes(normT(q.apartado)) ? 3 : 0); if (sc > bs) { bs = sc; best = i; } });
  return best;
}
const normT = t => String(t || "").replace(/<[^>]+>/g, " ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9ñ]+/g, " ");
const toksT = t => normT(t).split(" ").filter(w => w.length > 4);
function openTheory(qid, stepIdx) {
  const q = QMAP[qid], l = q && lessonById(q.sec); if (!l) return;
  const i = stepIdx == null ? bestStep(l, q) : Math.max(0, Math.min(l.steps.length - 1, stepIdx)), st = l.steps[i];
  const m = $("#modal");
  m.innerHTML = `<div class="box theorybox" role="dialog" aria-modal="true" aria-label="Teoría relacionada">
    <div class="sb-h"><div><b>${esc(l.title.replace(/^[\d.]+\s*/, ""))}</b> <span class="muted small">· Tema ${topicById(l.tema).num} · paso ${i + 1} de ${l.steps.length}</span></div><button class="linkbtn" id="th-x">✕ Volver a la pregunta</button></div>
    <div class="th-body theory"><h3>${st.title}</h3>${st.html}</div>
    <div class="sb-nav"><button class="btn sm" id="th-p" ${i <= 0 ? "disabled" : ""}>${ic("back")} Anterior</button><span>${secSlidesBtn(l.id, "Diapositivas")}</span><button class="btn sm" id="th-n" ${i >= l.steps.length - 1 ? "disabled" : ""}>Siguiente ${ic("arrow")}</button></div></div>`;
  m.hidden = false; renderMath(m); m.querySelector(".th-body").scrollTop = 0;
  const close = () => { m.hidden = true; m.innerHTML = ""; document.removeEventListener("keydown", key); };
  const key = e => { if (e.key === "Escape") close(); };
  document.addEventListener("keydown", key);
  $("#th-x").onclick = close; m.onclick = e => { if (e.target === m) close(); };
  $("#th-p").onclick = () => { document.removeEventListener("keydown", key); openTheory(qid, i - 1); };
  $("#th-n").onclick = () => { document.removeEventListener("keydown", key); openTheory(qid, i + 1); };
}
document.addEventListener("click", e => {
  const th = e.target.closest("[data-theory]"); if (th) { e.preventDefault(); openTheory(th.dataset.theory); return; }
  const b = e.target.closest("[data-slide]"); if (b) { e.preventDefault(); const [d, x, y] = b.dataset.slide.split("|"); openSlide(d, +x, +y > +x ? [+x, +y] : null); return; }
  const r = e.target.closest("[data-slides]"); if (r) { e.preventDefault(); const rg = SEC_SLIDES[r.dataset.slides]; openSlide(rg.deck, rg.a, [rg.a, rg.b]); }
});
const secSlidesBtn = (sec, label) => SEC_SLIDES[sec] ? `<button class="btn sm ghost" data-slides="${sec}">📄 ${label || "Ver diapositivas originales"} (${SEC_SLIDES[sec].deck === TEMA_DECK[lessonById(sec).tema] ? "" : esc(deckLabel(SEC_SLIDES[sec].deck)) + " "}${SEC_SLIDES[sec].a}–${SEC_SLIDES[sec].b})</button>` : "";

/* ---------- puntuación (sistema oficial del examen) ---------- */
function scoreQ(q, sel) {
  sel = sel || [];
  if (!sel.length) return { score: 0, status: "blank" };
  if (!q.a.length) return { score: 0, status: "nokey" };
  if (q.pts != null && !q.multi) return q.a.includes(sel[0]) ? { score: q.pts, status: "ok" } : { score: -q.pen, status: "ko" };
  const c = sel.filter(i => q.a.includes(i)).length, w = sel.length - c;
  const score = 0.5 * Math.max(0, (c - w) / q.a.length);
  return { score, status: score >= 0.5 - 1e-9 ? "ok" : score > 0 ? "partial" : "ko" };
}
function recordAnswer(q, status) {
  if (status === "nokey") return;
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
  return { n, ok, seen, p: pct(ok, n), m: mastery(all), failed: failedIds().length, best: S.history.filter(h => h.official !== false).length ? Math.max(...S.history.filter(h => h.official !== false).map(h => h.grade)) : null, exams: S.history.length };
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
  const nav = { "": "home", aprender: "aprender", tema: "aprender", leccion: "aprender", tarjetas: "aprender", repaso: "aprender", diferenciar: "aprender", ejercicio: "aprender", practicar: "aprender", falladas: "aprender", quiz: S.quiz && S.quiz.fromExam ? "examenes" : "aprender", examenes: "examenes", examen: "examenes", resultado: "examenes", progreso: "progreso", cuenta: "progreso", ranking: "progreso", admin: "progreso", consulta: "consulta", temario: "aprender", definiciones: "aprender", resumenes: "aprender", dominio: "progreso" }[p0 || ""];
  $$("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === nav));
  try {
    switch (p0 || "") {
      case "": viewHome(); break;
      case "aprender": viewLearn(); break;
      case "tema": viewTopic(p1, p2 || "lecciones"); break;
      case "leccion": viewLesson(p1, +(p2 || 0)); break;
      case "tarjetas": viewCards(); break;
      case "repaso": viewReview(); break;
      case "diferenciar": viewDrills(); break;
      case "ejercicio": viewDrill(p1); break;
      case "practicar": viewPracticeSetup(p1); break;
      case "quiz": viewQuiz(); break;
      case "falladas": viewFailed(); break;
      case "examenes": viewExams(); break;
      case "examen": viewExamRunner(); break;
      case "resultado": viewResult(p1); break;
      case "progreso": viewProgress(); break;
      case "asignatura": window.showSubjectPicker(); break;
      case "consulta": viewAsk(); break;
      case "temario": viewSyllabus(p1); break;
      case "definiciones": viewGlossary(p1 || "def"); break;
      case "resumenes": viewSummaries(); break;
      case "dominio": viewMastery(p1 || "all"); break;
      default: if (!(window.CLOUD && CLOUD.view(p0, p1))) viewHome();
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
  const onQuiz = /^#\/quiz(\/|$)/.test(location.hash);
  if (!S.exam && S.quiz && !S.quiz.done && !onQuiz && Object.keys(S.quiz.ans).length) {
    b.innerHTML = `Test «${esc(S.quiz.title)}» a medias (pregunta ${S.quiz.i + 1} de ${S.quiz.ids.length}). <a href="#/quiz"><b>Continuar donde lo dejaste →</b></a>`;
    b.hidden = false; return;
  }
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
  return `<div class="hbars" role="list" aria-label="${esc(opts.label || "Gráfico de barras")}" style="--lw:${opts.labelW || 150}px">${rows.map(r => `<div class="hb-row${r.pm ? " pm" : ""}" ${r.pm ? `data-pm="${r.pm}" tabindex="0"` : ""} role="listitem" title="${esc(r.label)}: ${r.value}%${r.tip ? " · " + esc(r.tip) : ""}">
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
  const dr = DRILLS.find(d => S.lessons[d.sec] && S.lessons[d.sec].done && !(S.drills[d.id] && S.drills[d.id].best >= 80));
  if (dr && items.length < 2) items.push({ icon: "split", title: `Diferenciar: ${dr.title}`, sub: dr.type === "match" ? "Relaciona parejas · 1-2 min" : "Clasifica afirmaciones · 2 min", href: "#/ejercicio/" + dr.id });
  if (nf) items.push({ icon: "redo", title: `Corregir ${nf} pregunta${nf > 1 ? "s" : ""} fallada${nf > 1 ? "s" : ""}`, sub: "Hasta que las aciertes", run: startFailedQuiz });
  if (!nl && !rq) items.push({ icon: "exam", title: "Simulacro de examen", sub: "Con tiempo real · versión al azar", run: () => startExam(EXAMS[Math.floor(Math.random() * EXAMS.length)].id, "sim") });
  return items.slice(0, 3);
}
function viewHome() {
  const g = globalStats(), plan = planItems(), st = streak();
  const doneL = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
  app.innerHTML = `
  ${updatesBanner()}
  ${window.CLOUD ? CLOUD.homeBanner() : ""}
  <section class="today">
    <div class="today-main">
      <div class="eyebrow">${new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}${st ? ` · 🔥 ${st} día${st > 1 ? "s" : ""} seguidos` : ""}</div>
      <h1>Tu plan de hoy</h1>
      <div class="plan">${plan.map((p, i) => `<a class="plan-item" ${p.href && !p.run ? `href="${p.href}"` : `href="javascript:void 0" data-plan="${i}"`}><span class="ic-sq">${ic(p.icon)}</span><span><b>${esc(p.title)}</b><small>${esc(p.sub)}</small></span>${ic("arrow", "chev")}</a>`).join("")}</div>
      <button class="btn primary big" id="h-go">${ic("play")} ${g.n ? "Continuar" : "Empezar a estudiar"}</button>
    </div>
    <div class="today-side">
      <button class="pm-donut" data-pm="all" title="Practicar lo que te falta">${donut(g.m, "dominio", "Preguntas cuya última respuesta fue correcta")}<span class="pm-hint">Practicar lo que falta ›</span></button>
      <div class="mini-stats"><div><b>${doneL}/${LESSONS.length}</b><span>lecciones</span></div><div><b>${g.n ? g.p + "%" : "—"}</b><span>aciertos</span></div><div><b>${g.best != null ? fmt1(g.best) : "—"}</b><span>mejor nota</span></div></div>
    </div>
  </section>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Dominio por tema</h3><a class="small" href="#/progreso">Detalle</a></div>
      ${hbars(TOPICS.map(t => { const s = topicStats(t.id); return { label: t.num + ". " + t.short, value: s.m, color: t.color, tip: `${s.seen}/${s.total} vistas`, pm: "tema:" + t.id }; }), { label: "Dominio por tema" })}<p class="tiny muted mb0">Toca un tema para practicar lo que te falta.</p></div>
    <div class="card"><div class="card-h"><h3>Actividad</h3><span class="small muted">${Object.values(S.days).reduce((a, b) => a + b, 0)} respuestas</span></div>${heatmap(12)}</div>
  </div>
  <div class="grid g2 mt">
    <a class="card mode" href="#/aprender"><span class="ic-sq">${ic("book")}</span><div><h3>Aprendizaje</h3><p class="muted small mb0">${LESSONS.length} lecciones con ${DIAGRAMS.length} esquemas, ${DRILLS.length} ejercicios para diferenciar, ${CARDS.length} tarjetas y ${LEARN.length} preguntas.</p></div>${ic("arrow", "chev")}</a>
    <a class="card mode" href="#/examenes"><span class="ic-sq">${ic("exam")}</span><div><h3>Exámenes anteriores</h3><p class="muted small mb0">${SUBJ.examsBlurb}</p></div>${ic("arrow", "chev")}</a>
  </div>
  <footer class="about"><img src="img/logo-estudio-full.svg" alt="Estudio ETSII" width="262" height="52"><span class="tiny muted">App de estudio no oficial basada en los apuntes y exámenes de ${esc(SUBJ.name)}. El progreso se guarda en este dispositivo. <a href="#/asignatura">Cambiar de asignatura</a></span></footer>`;
  wireUpdates();
  $$("[data-plan]").forEach(a => a.onclick = () => plan[+a.dataset.plan].run());
  $("#h-go").onclick = () => { const p = plan[0]; if (!p) return go("#/aprender"); p.run ? p.run() : go(p.href); };
}

/* =====================================================================
   APRENDIZAJE: ruta de lecciones
   ===================================================================== */
function learnTabs(active) {
  return `<div class="seg">${[["aprender", "Lecciones"], ["temario", "Temario"], ["resumenes", "Resúmenes"], ["definiciones", "Definiciones"], ["tarjetas", "Tarjetas"], ["diferenciar", "Diferenciar"], ["practicar", "Test libre"]].map(([k, l]) => `<a class="${k === active ? "on" : ""}" href="#/${k}">${l}</a>`).join("")}</div>`;
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
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("aprender")}<div class="row between mb-s">${quizToggle()}<a class="small" href="#/resumenes">📋 Ver todos los resúmenes</a></div>
  ${nl ? `<a class="card resume" href="#/leccion/${nl.id}"><span class="ic-sq">${ic("play")}</span><div><div class="eyebrow">Continúa por aquí</div><b>${esc(nl.title)}</b><div class="small muted">Tema ${topicById(nl.tema).num} · ${esc(topicById(nl.tema).title)}</div></div>${ic("arrow", "chev")}</a>` : `<div class="notice">Has completado todas las lecciones. Sigue con las tarjetas y los simulacros.</div>`}
  <div class="grid g2 mt">
  ${TOPICS.map(t => { const ls = LESSONS.filter(l => l.tema === t.id), s = topicStats(t.id), done = ls.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
    return `<section class="card topic" style="--c:${t.color}"><div class="topic-h"><button class="pm-donut sm" data-pm="tema:${t.id}" title="Practicar lo que te falta del tema">${donut(s.m, "", "", t.color, 54)}</button>
      <div><a href="#/tema/${t.id}" class="th-link"><span class="num">Tema ${t.num}</span><h3>${esc(t.title)}</h3></a><div class="tiny muted">${done}/${ls.length} lecciones · dominio ${s.m}% · <a href="javascript:void 0" data-pm="tema:${t.id}">practicar lo que falta</a></div></div></div>
      <div class="lpath">${ls.map((l, i) => lessonRow(l, i)).join("")}${summaryRow(t)}</div></section>`; }).join("")}
  </div>
  <div class="missing">${MISSING_TOPICS.map(m => `<div><b>Tema ${m.num}.</b> ${esc(m.title)} — <span class="muted">${esc(m.note)}</span></div>`).join("")}</div>`;
}

function viewTopic(tid, tab) {
  const t = topicById(tid); if (!t) return go("#/aprender");
  const th = THEORY[tid], ls = LESSONS.filter(l => l.tema === tid);
  const tabs = [["lecciones", "Lecciones"], ["esquemas", "Esquemas"], ["resumen", "Resumen"], ["temario", "Temario completo"], ["confusiones", "Confusiones"]];
  let body = "";
  if (tab === "lecciones") {
    body = `<div class="card"><div class="lpath">${ls.map((l, i) => lessonRow(l, i)).join("")}${summaryRow(t)}</div></div>
    <div class="card mt"><div class="card-h"><h3>Dominio por lección</h3></div>${hbars(ls.map(l => ({ label: l.title.replace(/^[\d.]+\s*/, "").slice(0, 26), value: lessonMastery(l), color: t.color, pm: "lesson:" + l.id })), { labelW: 190 })}
    <button class="btn soft mt" data-pm="tema:${tid}">Practicar el tema (lo que falta, no vistas, falladas o todas)</button></div>
    <div class="card mt"><div class="card-h"><h3>Ejercicios para diferenciar</h3></div><div class="drill-grid">${DRILLS.filter(d => d.tema === tid).map(drillCard).join("")}</div></div>`;
  } else if (tab === "esquemas") {
    body = `<p class="muted small">Todos los esquemas y figuras del tema. Úsalos para repasar de un vistazo.</p>
    <div class="gallery">${th.sections.map(sct => { const ds = DIAGRAMS.filter(d => d.sec === sct.id); return ds.length ? `<h3 class="gal-h">${esc(sct.title)}</h3>${ds.map(figHtml).join("")}` : ""; }).join("")}</div>
    <div class="section-title"><h2>Cuadros comparativos</h2></div>
    ${DRILLS.filter(d => d.tema === tid && d.type === "classify").map(d => `<div class="card mt"><div class="card-h"><h3>${esc(d.title)}</h3><a class="small" href="#/ejercicio/${d.id}">Ponerte a prueba</a></div>
      <div class="cmp-grid" style="--n:${d.cats.length}">${d.cats.map((c, ci) => `<div class="cmp-col"><div class="cmp-h">${esc(c)}</div><ul>${d.items.filter(it => it[1] === ci).map(it => `<li>${esc(it[0])}</li>`).join("")}</ul></div>`).join("")}</div></div>`).join("")}
    ${DRILLS.filter(d => d.tema === tid && d.type === "match").map(d => `<div class="card mt"><div class="card-h"><h3>${esc(d.title)}</h3><a class="small" href="#/ejercicio/${d.id}">Ponerte a prueba</a></div>
      <table class="tbl" style="display:table"><tbody>${d.pairs.map(pr => `<tr><td><b>${esc(pr[0])}</b></td><td>${esc(pr[1])}</td></tr>`).join("")}</tbody></table></div>`).join("")}
    <div class="card mt"><div class="card-h"><h3>Trucos para recordar</h3></div>${ls.map(l => MNEMO[l.id] ? `<div class="mn-sec"><b>${esc(l.title.replace(/^[\d.]+\s*/, ""))}</b>${mnemoBox(MNEMO[l.id], true)}</div>` : "").join("")}</div>`;
  } else if (tab === "resumen") {
    body = topicSummaryHtml(t) + `<div class="row mt"><a class="btn soft" href="#/temario/${t.id}">📖 Leer el temario del tema seguido</a><a class="btn soft" href="#/dominio/tema:${t.id}">Ver qué no domino</a></div>`;
  } else if (tab === "temario") {
    body = `<div class="theory">${th.sections.map((s, i) => `<details class="sec" ${i === 0 ? "open" : ""}><summary>${esc(s.title)}</summary><div class="body"><div class="mb-s">${secSlidesBtn(s.id)}</div>${theoryWithDiagrams(s)}</div></details>`).join("")}</div>
    <p class="tiny muted">Los recuadros amarillos («Ampliación») son conocimiento general que no aparece en tus apuntes.</p>`;
  } else {
    body = `<div class="card">${th.confusions.map(c => `<div class="conf"><div>${c[0]}</div><div>${c[1]}</div></div>`).join("")}</div>`;
  }
  app.innerHTML = `<div class="crumbs"><a href="#/aprender">Aprendizaje</a> › Tema ${t.num}</div>
  <h1>${t.num}. ${esc(t.title)}</h1><div class="tiny muted">Fuente: ${esc(t.file)}</div>
  <div class="tabs">${tabs.map(([k, l]) => `<button class="${k === tab ? "active" : ""}" data-tab="${k}">${l}</button>`).join("")}</div>${body}`;
  $$("[data-tab]").forEach(b => b.onclick = () => go(`#/tema/${tid}/${b.dataset.tab}`));
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
    <div class="row between"><div class="eyebrow">Paso ${step + 1} de ${n}</div>${secSlidesBtn(id, "Diapositivas originales")}</div>
    <h2>${st.title}</h2>
    <div class="theory">${st.html}</div>
    ${last && MNEMO[id] ? mnemoBox(MNEMO[id]) : ""}
  </article>
  <div class="lesson-nav">
    ${step > 0 ? `<a class="btn ghost" href="#/leccion/${id}/${step - 1}">${ic("back")} Anterior</a>` : `<span></span>`}
    ${last ? (quizOn() ? `<button class="btn primary big" id="l-check">Comprobar lo aprendido ${ic("arrow")}</button>` : `<button class="btn primary big" id="l-done">Terminar lección ${ic("check")}</button>`) : `<a class="btn primary big" href="#/leccion/${id}/${step + 1}">Continuar ${ic("arrow")}</a>`}
  </div>
  ${last ? `<div class="qt-wrap">${quizToggle()}</div>` : ""}`;
  const dn = $("#l-done");
  if (dn) dn.onclick = () => { S.lessons[id] = Object.assign(S.lessons[id] || {}, { done: true, t: Date.now() }); save();
    if (isLastOfTopic(id)) return go(`#/tema/${l.tema}/resumen`); const nx = LESSONS[LESSONS.indexOf(l) + 1]; go(nx ? `#/leccion/${nx.id}` : "#/aprender"); };
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

/* ---------- trucos de memoria y ejercicios de diferenciación ---------- */
function mnemoBox(list, plain) {
  return `<div class="mnemo${plain ? " plain" : ""}">${plain ? "" : `<div class="mn-h">💡 Para recordar <span class="tiny muted">(trucos de la app, no están en los apuntes)</span></div>`}<ul>${list.map(x => `<li>${x}</li>`).join("")}</ul></div>`;
}
const drillsFor = sec => DRILLS.filter(d => d.sec === sec);
const drillChip = d => `<a class="chip" href="#/ejercicio/${d.id}">${d.type === "match" ? "🔗" : "⇄"} ${esc(d.title)}</a>`;
function drillCard(d) {
  const st = S.drills[d.id], t = topicById(d.tema);
  return `<a class="drill-card" href="#/ejercicio/${d.id}" style="--c:${t.color}"><span class="dk">${d.type === "match" ? "Relacionar" : "Clasificar"}</span><b>${esc(d.title)}</b>
  <small>${d.type === "match" ? d.pairs.length + " parejas" : d.items.length + " afirmaciones · " + d.cats.length + " categorías"}</small>
  <span class="score-line">${st ? `<span class="minibar"><i style="width:${st.best}%;background:${st.best >= 80 ? "var(--ok)" : "var(--brand-2)"}"></i></span><span>${st.best}%</span>` : `<span class="muted">Sin hacer</span>`}</span></a>`;
}
function viewDrills() {
  const done = DRILLS.filter(d => S.drills[d.id]).length;
  app.innerHTML = `<h1>Aprendizaje</h1>${learnTabs("diferenciar")}
  <div class="card hero-card"><div><div class="eyebrow">Entender y diferenciar</div><h2 class="mb0">Ejercicios rápidos de 1-2 minutos</h2>
  <p class="muted small mb0"><b>Clasificar</b>: decide a qué concepto pertenece cada afirmación y termina con una tabla comparativa. <b>Relacionar</b>: une cada término con su significado o su valor.</p></div>
  ${donut(pct(DRILLS.filter(d => S.drills[d.id] && S.drills[d.id].best >= 80).length, DRILLS.length), "dominados", "", "#0f8a5f", 120)}</div>
  ${TOPICS.map(t => `<div class="section-title"><h2 style="color:${t.color}">Tema ${t.num} · ${esc(t.short)}</h2></div><div class="drill-grid">${DRILLS.filter(d => d.tema === t.id).map(drillCard).join("")}</div>`).join("")}
  <p class="tiny muted mt">${done} de ${DRILLS.length} ejercicios hechos. Un ejercicio cuenta como dominado a partir del 80 %.</p>`;
}
let DR = null;
function viewDrill(id) {
  const d = DRILLS.find(x => x.id === id); if (!d) return go("#/diferenciar");
  if (!DR || DR.id !== id || DR.fresh) {
    DR = d.type === "classify" ? { id, i: 0, order: shuffle(d.items.map((_, k) => k)), ans: {}, fresh: false }
      : { id, left: shuffle(d.pairs.map((_, k) => k)), right: shuffle(d.pairs.map((_, k) => k)), done: {}, sel: null, err: 0, fresh: false, bad: null };
  }
  const t = topicById(d.tema);
  const head = `<div class="crumbs"><a href="#/diferenciar">Diferenciar</a> › Tema ${t.num}</div><h1>${esc(d.title)}</h1>`;
  if (d.type === "classify") return runClassify(d, head);
  return runMatch(d, head);
}
function finishDrill(d, score) {
  const st = S.drills[d.id] || { best: 0, n: 0 }; st.best = Math.max(st.best, score); st.n++; st.last = score; st.t = Date.now(); S.drills[d.id] = st; bump(); save();
}
function runClassify(d, head) {
  const n = d.order ? 0 : 0, R = DR, total = d.items.length;
  if (R.i >= total) {
    const ok = Object.values(R.ans).filter(a => a.ok).length, sc = pct(ok, total);
    if (!R.saved) { finishDrill(d, sc); R.saved = true; }
    app.innerHTML = `${head}<div class="card center-card">${donut(sc, "aciertos", "", sc >= 80 ? "#0f8a5f" : "#2563eb", 130)}<h2>${ok} de ${total}</h2>
    <div class="row center"><button class="btn primary big" id="d-again">Repetir</button><a class="btn ghost" href="#/diferenciar">Otros ejercicios</a></div></div>
    <div class="card mt"><div class="card-h"><h3>Tabla comparativa</h3><span class="small muted">✗ = la que fallaste</span></div>
    <div class="cmp-grid" style="--n:${d.cats.length}">${d.cats.map((c, ci) => `<div class="cmp-col"><div class="cmp-h">${esc(c)}</div><ul>${d.items.map((it, k) => it[1] === ci ? `<li class="${R.ans[k] && !R.ans[k].ok ? "miss" : ""}">${esc(it[0])}${R.ans[k] && !R.ans[k].ok ? " ✗" : ""}</li>` : "").join("")}</ul></div>`).join("")}</div>
    ${d.general ? `<p class="tiny muted mb0">La clasificación de acciones procede de la normativa (tema 4, sin apuntes adjuntos): conocimiento general.</p>` : ""}</div>`;
    $("#d-again").onclick = () => { DR.fresh = true; viewDrill(d.id); };
    return;
  }
  const k = R.order[R.i], it = d.items[k], a = R.ans[k];
  app.innerHTML = `${head}<div class="quiz-head"><a class="small muted" href="#/diferenciar">✕ Salir</a><div class="bar"><i style="width:${pct(R.i + (a ? 1 : 0), total)}%"></i></div><span class="small muted">${R.i + 1}/${total}</span></div>
  <div class="qcard cls-card"><div class="eyebrow">¿A qué corresponde?</div><div class="cls-stmt">${esc(it[0])}</div>
  <div class="cls-cats" style="--n:${d.cats.length}">${d.cats.map((c, ci) => `<button class="cls-btn ${a ? (ci === it[1] ? "correct" : ci === a.pick ? "wrong" : "dim") : ""}" data-c="${ci}" ${a ? "disabled" : ""}>${esc(c)}</button>`).join("")}</div>
  ${a ? `<div class="feedback ${a.ok ? "ok" : "ko"}">${a.ok ? "¡Correcto!" : "Es: " + esc(d.cats[it[1]])}</div>` : ""}</div>
  ${a ? `<div class="lesson-nav"><span></span><button class="btn primary big" id="d-next">Siguiente ${ic("arrow")}</button></div>` : ""}`;
  $$(".cls-btn").forEach(b => b.onclick = () => {
    const pick = +b.dataset.c; R.ans[k] = { pick, ok: pick === it[1] }; runClassify(d, head);
    if (pick === it[1]) setTimeout(() => { if (DR === R && R.order[R.i] === k) { R.i++; runClassify(d, head); } }, 650);
  });
  const nx = $("#d-next"); if (nx) nx.onclick = () => { R.i++; runClassify(d, head); };
}
function runMatch(d, head) {
  const R = DR, n = d.pairs.length, nDone = Object.keys(R.done).length;
  if (nDone === n) {
    const sc = pct(n, n + R.err);
    if (!R.saved) { finishDrill(d, sc); R.saved = true; }
    app.innerHTML = `${head}<div class="card center-card">${donut(sc, "precisión", "", sc >= 80 ? "#0f8a5f" : "#2563eb", 130)}<h2>${R.err ? R.err + " error" + (R.err > 1 ? "es" : "") : "¡Sin errores!"}</h2>
    <div class="row center"><button class="btn primary big" id="d-again">Repetir</button><a class="btn ghost" href="#/diferenciar">Otros ejercicios</a></div></div>
    <div class="card mt"><div class="card-h"><h3>Resumen</h3></div><table class="tbl" style="display:table"><tbody>${d.pairs.map(p => `<tr><td><b>${esc(p[0])}</b></td><td>${esc(p[1])}</td></tr>`).join("")}</tbody></table></div>`;
    $("#d-again").onclick = () => { DR.fresh = true; viewDrill(d.id); };
    return;
  }
  app.innerHTML = `${head}<p class="muted small">Toca un término de la izquierda y después su pareja de la derecha.</p>
  <div class="quiz-head"><a class="small muted" href="#/diferenciar">✕ Salir</a><div class="bar"><i style="width:${pct(nDone, n)}%"></i></div><span class="small muted">${nDone}/${n} · ${R.err} errores</span></div>
  <div class="match">
    <div class="m-col">${R.left.map(k => `<button class="m-item ${R.done[k] ? "ok" : R.sel === k ? "sel" : ""}" data-l="${k}" ${R.done[k] ? "disabled" : ""}>${esc(d.pairs[k][0])}</button>`).join("")}</div>
    <div class="m-col">${R.right.map(k => `<button class="m-item r ${R.done[k] ? "ok" : R.bad === k ? "bad" : ""}" data-r="${k}" ${R.done[k] ? "disabled" : ""}>${esc(d.pairs[k][1])}</button>`).join("")}</div>
  </div>`;
  $$("[data-l]").forEach(b => b.onclick = () => { R.sel = +b.dataset.l; R.bad = null; runMatch(d, head); });
  $$("[data-r]").forEach(b => b.onclick = () => {
    if (R.sel == null) return;
    const k = +b.dataset.r;
    if (k === R.sel) { R.done[k] = true; R.sel = null; R.bad = null; } else { R.err++; R.bad = k; }
    runMatch(d, head);
  });
}

/* ---------- test libre ---------- */
function viewPracticeSetup() {
  const cfg = Object.assign({ temas: TOPICS.map(t => t.id), bank: "both", diff: "all", n: "20", filter: "all" }, JSON.parse(localStorage.getItem(LS_KEY + "_cfg") || "null") || {});
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
  $("#c-go").onclick = () => { const c = read(); localStorage.setItem(LS_KEY + "_cfg", JSON.stringify(c)); const p = shuffle(pool(c)); startQuiz({ ids: p.slice(0, c.n === "all" ? p.length : +c.n).map(q => q.id), title: "Test libre" }); };
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
// Resalta las negaciones del enunciado («incorrecta», «falsa», «no»…) para que no se lean como «correcta»
// Escapa el texto pero respeta etiquetas inofensivas de formato (sub, sup, b, i, br) y entidades ya escritas en los datos
const escF = t => esc(t).replace(/&lt;(\/?)(sub|sup|b|i|br)\s*\/?&gt;/g, "<$1$2>").replace(/&amp;(lt|gt|amp|nbsp|le|ge|middot|minus|asymp|deg);/g, "&$1;");
const qText = t => escF(t).replace(/\b(incorrectas?|falsas?|INCORRECTAS?|FALSAS?|NO es|no es|no son|NO|no corresponde|excepto|EXCEPTO)\b/g, m => `<b class="neg">${m.toUpperCase()}</b>`);
const explainHtml = q => `${q.official ? `<div class="official">${q.official}</div>` : ""}${q.bank === "exam" ? `<b>${q.official ? "Comentario" : "Explicación orientativa (no oficial)"}:</b> ` : ""}${escF(q.exp)}
  <div class="src">${q.bank === "exam" ? (q.unofficial ? (q.noKey ? "<b>Sin solución oficial ni propuesta</b> · " : (q.keyBy === "doc" ? "<b>Respuesta marcada en el documento original (no oficial): " + esc(q.keyText) + "</b> · " : "<b>Solución PROPUESTA por IA (no oficial): " + esc(q.keyText) + " · confianza " + esc(q.conf) + "</b> · ")) : "Solución oficial: " + esc(q.keyText) + " · ") : ""}${esc(q.src)}</div>${q.sec && lessonById(q.sec) ? `<div class="slide-btns"><button class="btn sm soft" data-theory="${q.id}">📘 Ver la teoría de esta pregunta</button></div>` : ""}${slideButtons(q)}`;
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
    return `<button class="opt ${cls}" data-oi="${oi}" ${answered ? "disabled" : ""}><span class="k">${LET[k]}</span><span class="t">${escF(q.o[oi])}</span></button>`;
  }).join("");
  let fb = "";
  if (answered) {
    const s = answered.status, showExp = Z.showExp != null ? Z.showExp : s !== "ok";
    fb = `<div class="feedback ${s === "nokey" ? "partial" : s}">${s === "nokey" ? "Esta pregunta no tiene solución oficial ni propuesta" : s === "ok" ? ic("check") + " ¡Correcta!" : s === "partial" ? "Parcialmente correcta · " + fmt1(answered.score) + " / 0,5" : "Incorrecta"}${q.unofficial && !q.noKey ? " · según la solución propuesta (no oficial)" : ""}
      <button class="linkbtn" id="z-exp">${showExp ? "Ocultar explicación" : "Ver explicación"}</button></div>
      ${showExp ? `<div class="explain">${explainHtml(q)}</div>` : ""}`;
  }
  app.innerHTML = `
  <div class="quiz-head"><a class="small muted" href="javascript:void 0" id="z-end">✕ ${Object.keys(Z.ans).length ? "Terminar" : "Salir"}</a><div class="bar"><i style="width:${pct(Z.i + (answered ? 1 : 0), Z.ids.length)}%"></i></div><span class="small muted">${Z.i + 1}/${Z.ids.length}</span></div>
  <article class="qcard">
    <div class="qmeta"><span class="tag" style="background:${t.color}1a;color:${t.color}">Tema ${t.num} · ${esc(q.apartado)}</span>
    ${q.bank === "exam" ? `<span class="tag brand">Examen real ${esc(exLabel(q))} · P${q.n}</span>${q.unofficial ? `<span class="tag warn">Sin solución oficial</span>` : ""}${q.part === "P2" ? `<span class="tag p2">2ª parte · no entra en la PEC1</span>` : ""}` : `<span class="tag">${DIFF[q.d]}</span>`}${q.multi ? `<span class="tag warn">Varias respuestas</span>` : ""}</div>
    <div class="qtext">${qText(q.q)}</div>
    ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}" loading="lazy"><figcaption>Figura original del examen</figcaption></figure>` : ""}
    <div class="opts">${optHtml}</div>
    ${!answered ? `<button class="linkbtn mt" id="z-idk">No lo sé · ver la solución explicada</button>` : ""}
    ${!answered && q.multi ? `<p class="tiny muted mt">Marca todas las que correspondan. Puntúa 0,5 × máx(0, (aciertos − fallos)/nº correctas).</p>` : ""}
    ${fb}
  </article>
  <div class="lesson-nav">${Z.i > 0 ? `<button class="btn ghost" id="z-prev">${ic("back")}</button>` : "<span></span>"}
    ${!answered && q.multi ? `<button class="btn primary big" id="z-check" ${sel.length ? "" : "disabled"}>Comprobar</button>` : answered ? `<button class="btn primary big" id="z-next">${Z.i < Z.ids.length - 1 ? "Siguiente" : "Ver resultado"} ${ic("arrow")}</button>` : "<span></span>"}</div>`;
  const rer = () => { save(); viewQuiz(); renderMath(app); };
  const answer = selArr => { const r = scoreQ(q, selArr); Z.ans[id] = { sel: selArr, score: r.score, status: r.status }; recordAnswer(q, r.status); Z.showExp = null; rer(); };
  $$(".opt").forEach(b => b.onclick = () => { const oi = +b.dataset.oi; if (q.multi) { const s = new Set(Z.sel[id] || []); s.has(oi) ? s.delete(oi) : s.add(oi); Z.sel[id] = Array.from(s); rer(); } else answer([oi]); });
  const chk = $("#z-check"); if (chk) chk.onclick = () => answer(Z.sel[id] || []);
  const idk = $("#z-idk"); if (idk) idk.onclick = () => { Z.ans[id] = { sel: [], score: 0, status: q.a.length ? "ko" : "nokey", idk: true }; recordAnswer(q, q.a.length ? "ko" : "nokey"); Z.showExp = true; rer(); };
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
      ${Z.lesson && isLastOfTopic(Z.lesson) ? `<a class="btn primary big" href="#/tema/${lessonById(Z.lesson).tema}/resumen">📋 Resumen del tema ${ic("arrow")}</a>` : Z.lesson ? (nl ? `<a class="btn primary big" href="#/leccion/${nl.id}">Siguiente lección ${ic("arrow")}</a>` : `<a class="btn primary big" href="#/aprender">Ver la ruta</a>`) : wrongIds.length ? `<button class="btn primary big" id="s-wrong">Repetir las ${wrongIds.length} falladas</button>` : `<a class="btn primary big" href="${Z.fromExam ? "#/examenes" : "#/"}">Continuar</a>`}
    </div>
    ${Z.lesson && wrongIds.length ? `<a class="small" href="#/leccion/${Z.lesson}">Volver a leer la lección</a>` : ""}
    ${Z.lesson && drillsFor(Z.lesson).length ? `<div class="drill-suggest">${drillsFor(Z.lesson).map(drillChip).join("")}</div>` : ""}
  </div>
  ${Object.keys(byAp).length > 1 ? `<div class="card mt"><div class="card-h"><h3>Por apartado</h3></div>${hbars(Object.entries(byAp).map(([k, r]) => ({ label: k.slice(0, 24), value: pct(r.ok, r.n), color: topicById(r.tema).color, tip: `${r.ok}/${r.n}` })), { labelW: 180 })}</div>` : ""}
  <details class="card mt"><summary class="sum-h">Revisar las ${Z.ids.length} preguntas</summary>
  ${Z.ids.map((id, k) => reviewItem(QMAP[id], Z.ans[id] ? Z.ans[id].sel : [], k + 1, Z.perm[id])).join("")}</details>`;
  const w = $("#s-wrong"); if (w) w.onclick = () => startQuiz({ ids: wrongIds, title: Z.title + " · falladas", fromExam: Z.fromExam });
}
function reviewItem(q, sel, n, order) {
  sel = sel || []; order = order || q.o.map((_, i) => i);
  const r = scoreQ(q, sel);
  const tag = { ok: `<span class="tag ok">Correcta · ${fmt1(r.score)}</span>`, ko: `<span class="tag ko">Incorrecta · ${fmt1(r.score)}</span>`, partial: `<span class="tag warn">Parcial · ${fmt1(r.score)}</span>`, blank: `<span class="tag">En blanco · 0,00</span>`, nokey: `<span class="tag warn">Sin solución</span>` }[q.noKey && r.status === "blank" ? "nokey" : r.status];
  return `<div class="review-item"><div class="rh"><b>Pregunta ${n}</b>${tag}</div>
  <div style="font-weight:600;margin-bottom:8px;white-space:pre-line">${qText(q.q)}</div>
  ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}" loading="lazy"></figure>` : ""}
  ${order.map((oi, k) => { const isC = q.a.includes(oi), isS = sel.includes(oi);
    return `<div class="ropt ${isC ? "correct" : isS ? "wrong" : ""}"><span class="k">${LET[k]}</span><span style="white-space:pre-line">${escF(q.o[oi])}</span><span class="who">${isS ? "Tu respuesta" + (isC ? " ✓" : " ✗") : isC ? "Correcta" : ""}</span></div>`; }).join("")}
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
  <p class="muted">${SUBJ.examIntro}</p>
  ${updatesBanner()}
  ${SUBJ.examKinds.map(([kind, kt, kd]) => `<div class="kind-h"><h2>${kt}</h2><p class="small muted mb0">${kd}</p></div>` +
  Object.entries(EXAM_SETS).filter(([, st]) => st.kind === kind).map(([sk, st]) => `<div class="section-title"><h3 class="mb0">${esc(st.title)} · ${esc(st.date)}</h3>${st.official ? `<span class="tag ok">Solución oficial</span>` : `<span class="tag warn">Sin solución oficial</span>`}</div>
  ${st.official ? "" : `<p class="small muted">No hay hoja de soluciones de este examen. La app corrige con una <b>solución propuesta por IA (no oficial)</b>, razonada en cada pregunta y con su nivel de confianza (alta, media o baja). La nota es solo una estimación.</p>`}
  <div class="grid g4">${EXAMS.filter(e => e.set === sk).map(e => { const att = hist.filter(h => h.examId === e.id), best = att.length ? Math.max(...att.map(h => h.grade)) : null;
    return `<button class="card exam-tile" data-ex="${e.id}"><span class="v-badge">${e.version}</span><b>${esc(st.short)} · ${e.version}</b><small>${EXAM_Q[e.id].length} preguntas · ${e.time} min</small>
    <span class="score-line">${best != null ? `<span class="minibar"><i style="width:${best * 10}%;background:${best >= 5 ? "var(--ok)" : "var(--ko)"}"></i></span><span>${fmt1(best)}${st.official ? "" : "*"}</span>` : `<span class="muted">Sin intentos</span>`}</span></button>`; }).join("")}</div>`).join("")).join("")}
  <p class="tiny muted">${SUBJ.examFoot}</p>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Evolución de tus notas</h3><span class="small muted">${hist.length} intento${hist.length === 1 ? "" : "s"}</span></div>
    ${hist.length ? lineChart(hist.slice(-15).map(h => h.grade), 10, hist.slice(-15).map(h => exById(h.examId).short + " " + exById(h.examId).version), "", 5) : `<div class="empty">Haz un examen para ver tu evolución.</div>`}</div>
    <div class="card"><div class="card-h"><h3>Preguntas de examen por tema</h3></div>
    ${hbars(TOPICS.map(t => { const qs = EXAM_POOL.map(id => QMAP[id]).filter(q => q.tema === t.id); return { label: t.num + ". " + t.short + " (" + qs.length + ")", value: mastery(qs), color: t.color, pm: "examtema:" + t.id }; }), { labelW: 170 })}
    <div class="chips mt">${TOPICS.map(t => `<a class="chip" href="javascript:void 0" data-et="${t.id}">Practicar ${t.num}</a>`).join("")}</div></div>
  </div>
  ${hist.length ? `<div class="section-title"><h2>Últimos intentos</h2></div><div class="card"><ul class="list">${hist.slice().reverse().slice(0, 8).map(h => `<li class="clickable" data-h="${h.id}"><span><b>${fmt1(h.grade)}${h.official === false ? "*" : ""}</b> <span class="muted small">· ${esc(exById(h.examId).short)} ${exById(h.examId).version} · ${h.mode === "sim" ? "simulacro" : "sin tiempo"} · ${fmtDate(h.t)}</span></span><span class="small muted">${h.ok}✓ ${h.ko}✗ ${h.partial ? h.partial + "◐ " : ""}${h.blank}○ ${ic("arrow", "chev")}</span></li>`).join("")}</ul></div>` : ""}
  ${hist.length ? `<button class="linkbtn danger mt" id="h-clear">Borrar historial de exámenes</button>` : ""}`;
  wireUpdates();
  $$("[data-ex]").forEach(b => b.onclick = () => { const id = b.dataset.ex, ex = exById(id), v = ex.version;
    chooseBox(ex.short + " · " + v, esc(ex.conv) + " · " + EXAM_Q[id].length + " preguntas" + (ex.official ? "" : " · <b>sin solución oficial</b>"), [
      { icon: "exam", title: "Simulacro de examen", sub: ex.time + " minutos, se entrega solo al acabar el tiempo", run: () => startExam(id, "sim") },
      { icon: "book", title: "Examen sin tiempo", sub: "Respondes todo y corriges al entregar", run: () => startExam(id, "full") },
      { icon: "check", title: "Pregunta a pregunta", sub: "Corrección inmediata con explicación", run: () => startQuiz({ ids: EXAM_Q[id].map(q => q.id), title: ex.short + " " + v, fromExam: true }) }]
      .concat(SUBJ.p2 && ex.kind === "Final" ? [{ icon: "split", title: "Solo las preguntas de la PEC1", sub: EXAM_Q[id].filter(q => q.part !== "P2").length + " preguntas, corrección inmediata", run: () => startQuiz({ ids: EXAM_Q[id].filter(q => q.part !== "P2").map(q => q.id), title: ex.short + " · PEC1", fromExam: true }) }] : [])); });
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
  E.peek = E.peek || {}; E.show = E.show || {};
  const peek = !!E.show[q.n];
  const nAns = qs.filter(x => (E.ans[x.n] || []).length).length;
  app.innerHTML = `<div class="exam-top"><span class="small"><b>${esc(ex.short)} · ${ex.version}</b> <span class="muted">${E.mode === "sim" ? "simulacro" : "sin límite"}</span></span>
    <span class="timer" id="e-timer">--:--</span><button class="btn primary sm" id="e-submit">Entregar</button></div>
  <div class="exam-layout"><div>
    <article class="qcard">
      <div class="qmeta"><span class="tag brand">Pregunta ${q.n} de ${qs.length}</span>${q.part === "P2" ? `<span class="tag p2">2ª parte · no entra en la PEC1</span>` : ""}${q.multi ? `<span class="tag warn">Puede haber más de una</span>` : ""}</div>
      <div class="qtext">${qText(q.q)}</div>
      ${q.fig ? `<figure class="qfig"><img src="${q.fig}" alt="${esc(q.figAlt || "Figura")}"><figcaption>Figura original del examen</figcaption></figure>` : ""}
      <div class="opts">${q.o.map((o, i) => `<button class="opt ${sel.includes(i) ? "sel" : ""} ${peek && q.a.includes(i) ? "peek-ok" : ""}" data-i="${i}"><span class="k">${"abcd"[i]}</span><span class="t">${escF(o)}</span></button>`).join("")}</div>
      <div class="row between mt">${sel.length ? `<button class="linkbtn" id="e-clear">Dejar en blanco</button>` : "<span></span>"}${q.noKey ? "" : `<button class="btn sm ${peek ? "ghost" : "soft"}" id="e-peek">${peek ? "Ocultar solución" : "💡 Ver solución explicada"}</button>`}</div>
      ${peek ? `<div class="explain mt"><div class="peek-key">Respuesta${q.a.length > 1 ? "s" : ""} ${q.unofficial ? "propuesta" + (q.a.length > 1 ? "s" : "") + " (no oficial)" : "correcta" + (q.a.length > 1 ? "s" : "")}: <b>${q.a.map(i => "abcd"[i]).join(", ")}</b></div>${explainHtml(q)}</div>` : ""}
    </article>
    <div class="lesson-nav">${E.cur > 0 ? `<button class="btn ghost" id="e-prev">${ic("back")} Anterior</button>` : "<span></span>"}${E.cur < qs.length - 1 ? `<button class="btn primary big" id="e-next">Siguiente ${ic("arrow")}</button>` : `<button class="btn primary big" id="e-submit2">Entregar examen</button>`}</div>
  </div>
  <aside class="exam-side card"><div class="small muted">${nAns} de ${qs.length} respondidas</div>
    <div class="qgrid">${qs.map((x, k) => `<button class="${(E.ans[x.n] || []).length ? "ans" : ""} ${k === E.cur ? "cur" : ""} ${E.peek[x.n] ? "peeked" : ""}" data-go="${k}" aria-label="Pregunta ${x.n}${E.peek[x.n] ? " (solución consultada)" : ""}">${x.n}</button>`).join("")}</div>
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
  const pk = $("#e-peek"); if (pk) pk.onclick = () => {
    if (peek) { E.show[q.n] = false; return rerender(); }
    const go = () => { E.peek[q.n] = true; E.show[q.n] = true; rerender(); };
    if (E.peek[q.n] || E.mode !== "sim") go(); else confirmBox("Ver la solución", "Estás en un <b>simulacro</b>. Puedes ver la solución explicada, pero la pregunta quedará marcada como «consultada» en el resultado. El tiempo sigue corriendo.", "Ver solución", go);
  };
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
  let total = 0, ok = 0, ko = 0, partial = 0, blankN = 0, nokey = 0;
  qs.forEach(q => { const r = scoreQ(q, E.ans[q.n]); total += r.score; if (q.noKey) nokey++; else if (r.status === "ok") ok++; else if (r.status === "ko") ko++; else if (r.status === "partial") partial++; else blankN++; recordAnswer(q, r.status); });
  const ex = exById(E.examId), keyed = qs.length - nokey;
  if (ex.neg) total = Math.max(0, total);
  if (!ex.official && keyed) total = total * qs.length / keyed;
  const dur = E.mode === "sim" ? Math.min((Date.now() - E.start) / 1000, (E.deadline - E.start) / 1000) : (Date.now() - E.start) / 1000;
  const h = { id: "h" + Date.now(), examId: E.examId, mode: E.mode, t: Date.now(), grade: Math.round(total * 1000) / 1000, ok, ko, partial, blank: blankN, nokey, official: ex.official, dur: Math.round(dur), ans: E.ans, auto: !!auto, peek: Object.keys(E.peek || {}).filter(k => E.peek[k]).map(Number) };
  S.history.push(h); S.exam = null; save(); if (window.CLOUD) CLOUD.recordAttempt(h, exById(h.examId));
  go("#/resultado/" + h.id);
  if (auto) setTimeout(() => confirmBox("Tiempo agotado", "Se acabaron los " + exById(h.examId).time + " minutos y el examen se ha entregado automáticamente.", "Ver resultado", () => {}, { noCancel: true }), 50);
}
function viewResult(hid) {
  const h = S.history.find(x => x.id === hid);
  if (!h) return go("#/examenes");
  const ex = EXAMS.find(e => e.id === h.examId), qs = EXAM_Q[h.examId];
  const filt = viewResult.filter || "all";
  const show = qs.filter(q => { const st = scoreQ(q, h.ans[q.n]).status; return filt === "all" || (filt === "wrong" ? (st === "ko" || st === "partial") : filt === st); });
  const byT = {}; qs.filter(q => !q.noKey).forEach(q => { const r = scoreQ(q, h.ans[q.n]); const b = byT[q.tema] || (byT[q.tema] = { s: 0, n: 0 }); b.s += Math.max(0, r.score); b.n += q.pts != null ? q.pts : 0.5; });
  app.innerHTML = `<div class="crumbs"><a href="#/examenes">Exámenes</a> › Resultado</div>
  <div class="card result-hero">
    ${donut(Math.round(h.grade * 10), "", "", h.grade >= 5 ? "#0f8a5f" : "#c2413b", 150).replace(/>\d+%<\/text>/, `>${fmt1(h.grade)}</text>`).replace('class="d-l"></text>', 'class="d-l">sobre 10</text>')}
    <div class="rh-main"><div class="eyebrow">${esc(ex.short)} · Versión ${ex.version} · ${h.mode === "sim" ? "simulacro" : "sin tiempo"} · ${fmtTime(h.dur)}${h.auto ? " · entregado automáticamente" : ""}</div>
      <h2>${h.official === false ? "Nota estimada" : h.grade >= 5 ? "Aprobado" : "Suspenso"} · ${fmt1(h.grade)}</h2>
      <div class="kpis"><div class="kpi ok"><b>${h.ok}</b><span>aciertos</span></div><div class="kpi ko"><b>${h.ko}</b><span>errores</span></div><div class="kpi partial"><b>${h.partial}</b><span>parciales</span></div><div class="kpi"><b>${h.blank}</b><span>en blanco</span></div></div>${h.peek && h.peek.length ? `<p class="tiny muted mb0">💡 Consultaste la solución de ${h.peek.length} pregunta${h.peek.length > 1 ? "s" : ""} (${h.peek.join(", ")}) durante el examen.</p>` : ""}${h.nokey ? `<p class="tiny muted mb0">${h.nokey} preguntas sin solución (no puntúan). Nota estimada con solución no oficial.</p>` : ""}
      <div class="qgrid res">${qs.map(q => { const st = q.noKey ? "nokey" : scoreQ(q, h.ans[q.n]).status; return `<button class="r-${st}" data-jump="${q.n}" title="Pregunta ${q.n}">${q.n}</button>`; }).join("")}</div></div></div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Puntos obtenidos por tema</h3></div>${hbars(Object.entries(byT).map(([t, b]) => ({ label: topicById(t).num + ". " + topicById(t).short, value: pct(b.s, b.n), color: topicById(t).color, tip: fmt1(b.s) + " de " + fmt1(b.n) + " puntos" })), { labelW: 150 })}</div>
    <div class="card"><div class="card-h"><h3>¿Y ahora?</h3></div><p class="small muted">${ex.official ? "Corrección con la hoja oficial de soluciones (" + esc(EXAM_SETS[ex.set].date) + ")." : "<b>Nota estimada</b> con la solución propuesta por la app (no oficial). " + qs.filter(q => q.noKey).length + " preguntas sin clave no puntúan; la nota se escala sobre las demás."}</p>
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
    <button class="pm-donut" data-pm="all">${donut(g.m, "dominio", "", "#2563eb", 120)}<span class="pm-hint">Practicar ›</span></button>
    <div class="kstat"><b>${LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length}/${LESSONS.length}</b><span>lecciones completadas</span></div>
    <div class="kstat"><b>${g.seen}</b><span>preguntas distintas vistas</span></div>
    <div class="kstat"><b>${g.n ? g.p + "%" : "—"}</b><span>aciertos (${g.ok}/${g.n})</span></div>
    <div class="kstat"><b>${streak()}</b><span>días seguidos</span></div>
  </div>
  <div class="card mt"><div class="card-h"><h3>Mapa de lecciones</h3><span class="small muted">Toca una lección para abrirla</span></div>${lessonGrid()}</div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Dominio por tema</h3></div>${hbars(TOPICS.map(t => { const s = topicStats(t.id); return { label: t.num + ". " + t.short, value: s.m, color: t.color, tip: `${s.seen}/${s.total} vistas · ${s.p}% aciertos`, pm: "tema:" + t.id }; }))}<p class="tiny muted mb0">Toca un tema para practicar.</p></div>
    <div class="card"><div class="card-h"><h3>Aciertos por dificultad</h3></div>${hbars(byD.map(r => ({ label: DIFF[r.d], value: pct(r.ok, r.n), color: SEQ[r.d + 1], tip: `${r.ok}/${r.n} respuestas` })), { labelW: 110 })}</div>
    <div class="card"><div class="card-h"><h3>Notas de examen</h3></div>${hist.length ? lineChart(hist.map(h => h.grade), 10, hist.map(h => exById(h.examId).short + " " + exById(h.examId).version), "", 5) : `<div class="empty">Aún no hay exámenes.</div>`}</div>
    <div class="card"><div class="card-h"><h3>Aciertos en tus últimos test</h3></div>${sess.length ? lineChart(sess.map(s => pct(s.ok, s.n)), 100, sess.map(s => s.title), "%") : `<div class="empty">Aún no hay test completados.</div>`}</div>
  </div>
  <div class="card mt"><div class="card-h"><h3>Ejercicios para diferenciar</h3><a class="small" href="#/diferenciar">Ver todos</a></div>
    ${Object.keys(S.drills).length ? hbars(DRILLS.filter(d => S.drills[d.id]).map(d => ({ label: d.title, value: S.drills[d.id].best, color: topicById(d.tema).color, tip: S.drills[d.id].n + " intentos" })), { labelW: 220 }) : `<div class="empty">Aún no has hecho ningún ejercicio.</div>`}</div>
  <div class="card mt"><div class="card-h"><h3>Actividad</h3></div>${heatmap(window.innerWidth < 600 ? 10 : 20)}</div>
  ${ap.length ? `<div class="card mt"><div class="card-h"><h3>Apartados para reforzar</h3><span class="small muted">Toca para practicar</span></div>
    ${hbars(ap.map(r => ({ label: r.apartado.slice(0, 24), value: r.p, color: topicById(r.tema).color, tip: `${r.ok}/${r.n}` })), { labelW: 180 })}
    <div class="chips">${ap.slice(0, 4).map((r, i) => `<a class="chip" href="javascript:void 0" data-wk="${i}">${esc(r.apartado)}</a>`).join("")}</div></div>` : ""}
  <details class="card mt"><summary class="sum-h">Guardar o reiniciar el progreso</summary>
    <p class="small muted">El progreso se guarda en este navegador. Puedes exportarlo e importarlo en otro dispositivo.</p>
    <div class="row"><button class="btn" id="p-exp">Exportar</button><label class="btn" style="cursor:pointer">Importar<input type="file" id="p-imp" accept="application/json" hidden></label><button class="btn ghost danger" id="p-reset">Reiniciar todo</button></div></details>`;
  $$("[data-wk]").forEach(b => b.onclick = () => { const r = ap[+b.dataset.wk]; startQuiz({ ids: shuffle(Object.values(QMAP).filter(q => q.tema === r.tema && q.apartado === r.apartado && inPool(q)).map(q => q.id)), title: "Refuerzo: " + r.apartado }); });
  $("#p-exp").onclick = () => { const blob = new Blob([JSON.stringify(S)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "progreso-" + SUBJ.id + ".json"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
  $("#p-imp").onchange = e => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { try { const d = JSON.parse(rd.result); if (!d || typeof d !== "object" || !d.qs) throw new Error(); S = Object.assign(blank(), d); save(); route(); } catch (err) { confirmBox("Archivo no válido", "No se ha podido leer el archivo.", "Aceptar", () => {}, { noCancel: true }); } }; rd.readAsText(f); };
  $("#p-reset").onclick = () => confirmBox("Reiniciar progreso", "Se borrará todo: estadísticas, lecciones, tarjetas, falladas e historial. No se puede deshacer.", "Borrar todo", () => { S = blank(); save(); route(); }, { danger: true });
}

/* =====================================================================
   CONSULTA: buscador en los apuntes + IA gratuita opcional (Gemini)
   ===================================================================== */
const norm = t => String(t || "").replace(/<[^>]+>/g, " ").replace(/\$[^$]*\$/g, " ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const STOP = new Set("el la los las un una unos unas de del al a en y o u e que es son se por para con sin su sus lo como mas mas muy ya le les este esta estos estas ese esa eso cual cuales quien donde cuando sobre entre hay ser tiene tienen puede pueden porque pero tambien no si me mi tu te nos que explica explicame dime significa".split(" "));
const toks = t => norm(t).split(/[^a-z0-9ñ.,]+/).map(w => w.replace(/[.,]+$/, "")).filter(w => w.length > 1 && !STOP.has(w));
const stem = w => w.length > 5 ? w.replace(/(aciones|acion|amientos|amiento|mente|ciones|cion|idades|idad|ismos|ismo|istas|ista|ores|ora|or|es|as|os|s|a|o|e)$/, "") : w;
let ASKIDX = null;
function askIndex() {
  if (ASKIDX) return ASKIDX;
  const docs = [];
  LESSONS.forEach(l => l.steps.forEach((st, i) => docs.push({ kind: "teoria", title: st.title, sub: "Tema " + topicById(l.tema).num + " · " + l.title.replace(/^[\d.]+\s*/, ""), html: st.html.replace(/<figure[\s\S]*?<\/figure>/g, ""), href: `#/leccion/${l.id}/${i}`, sec: l.id, tema: l.tema })));
  TOPICS.forEach(t => (THEORY[t.id].confusions || []).forEach(c => docs.push({ kind: "confusion", title: c[0].replace(/<[^>]+>/g, ""), sub: "Confusiones frecuentes · Tema " + t.num, html: c[1], href: `#/tema/${t.id}/confusiones`, tema: t.id })));
  CARDS.forEach(c => docs.push({ kind: "tarjeta", title: c.f.replace(/<[^>]+>/g, ""), sub: "Tarjeta · Tema " + topicById(c.tema).num, html: c.b, tema: c.tema, sec: c.sec }));
  Object.values(QMAP).forEach(q => { if (q.bank === "exam" && !EXAM_POOL.includes(q.id)) return; docs.push({ kind: q.bank === "exam" ? "examen" : "pregunta", title: q.q, sub: q.bank === "exam" ? "Examen real " + exLabel(q) + " · P" + q.n : "Pregunta del banco · " + q.apartado, html: "<b>Respuesta:</b> " + q.a.map(i => esc(q.o[i])).join(" · ") + "<br>" + (q.official ? q.official + "<br>" : "") + esc(q.exp), extra: q.o.join(" "), q, tema: q.tema }); });
  const df = {};
  docs.forEach(d => { d.terms = toks(d.title + " " + d.title + " " + d.html + " " + (d.extra || "")).map(stem); d.text = norm(d.title + " " + d.html + " " + (d.extra || "")).replace(/[^a-z0-9ñ]+/g, " "); new Set(d.terms).forEach(w => df[w] = (df[w] || 0) + 1); });
  ASKIDX = { docs, df, N: docs.length };
  return ASKIDX;
}
function askSearch(query) {
  const { docs, df, N } = askIndex();
  const qt = [...new Set(toks(query).map(stem))]; if (!qt.length) return [];
  const qn = norm(query).replace(/[¿?¡!]/g, "").trim();
  const words = qn.split(/[^a-z0-9ñ]+/).filter(Boolean);
  return docs.map(d => {
    let sc = 0, hit = 0;
    qt.forEach(w => { const tf = d.terms.filter(x => x === w).length; if (tf) { hit++; sc += (1 + Math.log(tf)) * Math.log(1 + N / (df[w] || 1)); } });
    if (!hit) return null;
    sc *= hit / qt.length;
    for (let i = 0; i + 1 < words.length; i++) if (!(STOP.has(words[i]) && STOP.has(words[i + 1])) && d.text.includes(" " + words[i] + " " + words[i + 1] + " ")) sc *= 1.8;
    if (qn.length > 6 && d.text.includes(qn.replace(/[^a-z0-9ñ]+/g, " ").trim())) sc *= 2;
    if (d.kind === "teoria") sc *= 1.25; else if (d.kind === "examen") sc *= 1.1;
    return { d, sc };
  }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 12).map(x => x.d);
}
const AI_LS = "testsmii_ai_key";
const aiKey = () => { try { return localStorage.getItem(AI_LS) || window.AI_KEY || null; } catch (e) { return window.AI_KEY || null; } };
async function askAI(question, ctx) {
  const context = ctx.slice(0, 8).map((d, i) => `[${i + 1}] (${d.sub}) ${d.title}${d.q ? "\nOpciones: " + d.q.o.join(" | ") : ""}\n${d.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 1400)}`).join("\n\n");
  const sys = `Eres un profesor de la asignatura «${SUBJ.name}» (Máster en Ingeniería Industrial, ETSII-UPM). Responde SIEMPRE en español de España, claro y breve (máximo unas 180 palabras). Apóyate SOBRE TODO en los fragmentos de los apuntes y exámenes que te doy y cítalos como [1], [2]… Si la respuesta no está en los fragmentos, dilo expresamente y responde con conocimiento general avisando de que no está en los apuntes. No inventes datos, cifras ni normativa.`;
  const user = `Fragmentos de los apuntes y exámenes:\n${context || "(ninguno)"}\n\nPregunta del alumno: ${question}`;
  const key = aiKey();
  if (key) {
    for (const m of [window.AI_MODEL || "gemini-flash-latest", "gemini-2.5-flash", "gemini-2.0-flash"]) {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${encodeURIComponent(key)}`, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemInstruction: { parts: [{ text: sys }] }, contents: [{ role: "user", parts: [{ text: user }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 800 } }) }).catch(() => null);
      if (!r || r.status === 404) continue;
      const j = await r.json().catch(() => ({}));
      if (!r.ok) break; // si falla Gemini, se prueba la IA gratuita sin clave
      const parts = (((j.candidates || [])[0] || {}).content || {}).parts;
      const t = (parts || []).map(p => p.text || "").join("").trim(); if (t) return { text: t, by: "Gemini (Google)" };
    }
  }
  const r = await fetch("https://text.pollinations.ai/openai", { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "openai", temperature: 0.3, messages: [{ role: "system", content: sys }, { role: "user", content: user }] }) });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { const e = new Error((j.error && (j.error.message || j.error)) || "HTTP " + r.status); e.status = r.status; throw e; }
  const t = ((((j.choices || [])[0] || {}).message || {}).content || "").trim();
  if (!t) throw new Error("respuesta vacía");
  return { text: t, by: "IA gratuita (Pollinations · " + (j.model || "código abierto") + ")" };
}
const mdLite = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|\n)\s*[-*] (.+)/g, "$1• $2").replace(/\[(\d+)\]/g, '<sup class="cite">[$1]</sup>').replace(/\n/g, "<br>");
function askCard(d, i) {
  const slides = d.q ? slideButtons(d.q) : d.sec && SEC_SLIDES[d.sec] && d.kind === "teoria" ? `<div class="slide-btns">${secSlidesBtn(d.sec)}</div>` : "";
  const t = topicById(d.tema);
  return `<div class="ask-hit"><div class="ah-h"><span class="ah-n">${i + 1}</span><span class="tag" style="background:${t.color}1a;color:${t.color}">${esc(d.sub)}</span></div>
  <b class="ah-t">${esc(d.title.length > 220 ? d.title.slice(0, 220) + "…" : d.title)}</b>
  ${d.q ? `<ul class="ah-opts">${d.q.o.map((o, k) => `<li class="${d.q.a.includes(k) ? "ok" : ""}">${escF(o)}${d.q.a.includes(k) ? " ✓" : ""}</li>`).join("")}</ul>` : ""}
  <div class="ah-b theory">${d.q ? d.html.replace(/^<b>Respuesta:<\/b>[^<]*<br>/, "") : d.html}</div>
  <div class="row">${d.href ? `<a class="btn sm soft" href="${d.href}">Abrir en la app</a>` : ""}${d.q ? `<button class="btn sm soft" data-askq="${d.q.id}">Responder esta pregunta</button>` : ""}</div>${slides}</div>`;
}
let ASK = { q: "", hits: [], ai: null, err: null, busy: false };
function viewAsk() {
  const key = aiKey();
  app.innerHTML = `<h1>Consulta</h1>
  <p class="muted small">Pregunta lo que quieras de ${esc(SUBJ.name)}: se busca en tus apuntes, las tarjetas y los exámenes, y una IA gratuita te lo explica con esos fragmentos.</p>
  <form class="card ask-box" id="ask-f"><textarea id="ask-q" rows="2" placeholder="Por ejemplo: ¿qué es un anteproyecto tipo B?" aria-label="Tu pregunta">${esc(ASK.q)}</textarea>
  <div class="row between"><span class="tiny muted">IA gratuita + tus apuntes · Intro para enviar</span><button class="btn primary" ${ASK.busy ? "disabled" : ""}>${ASK.busy ? "Pensando…" : "Preguntar"}</button></div></form>
  ${ASK.q ? `${ASK.ai ? `<div class="card ask-ai"><div class="eyebrow">Respuesta de la IA <span class="tiny muted">· ${esc(ASK.ai.by)} · puede equivocarse: compruébala con los fragmentos de abajo</span></div><div class="ai-txt">${mdLite(ASK.ai.text)}</div></div>` : ""}
    ${ASK.err ? `<div class="notice">${ASK.err}</div>` : ""}
    ${ASK.busy ? `<div class="card empty">La IA está redactando la respuesta…</div>` : ""}
    <div class="section-title"><h2>${ASK.hits.length ? "Lo que dicen tus apuntes" : "Sin resultados"}</h2></div>
    ${ASK.hits.length ? ASK.hits.slice(0, 6).map(askCard).join("") : `<div class="card empty">No he encontrado nada parecido. Prueba con otras palabras (por ejemplo, el término técnico).</div>`}` : ""}
  <details class="card mt"><summary class="sum-h">Sobre la IA ${key ? "· Gemini activado ✓" : ""}</summary>
    <p class="small muted">Por defecto se usa una IA gratuita y sin registro (Pollinations, con un modelo de código abierto). La pregunta se envía junto con los fragmentos de los apuntes encontrados, así que no escribas datos personales. Si quieres respuestas de más calidad, puedes usar Gemini de Google, también gratis: crea una clave en <a href='https://aistudio.google.com/apikey' target='_blank' rel='noopener'>aistudio.google.com/apikey</a> (con tu cuenta de Google y sin tarjeta) y pégala aquí. Se guarda solo en este navegador.</p>
    ${window.AI_KEY ? "" : `<div class="row"><input id="ai-k" class="inp" type="password" placeholder="Clave de Gemini (AIza…)" value="${esc(localStorage.getItem(AI_LS) || "")}"><button class="btn" id="ai-s">Guardar</button></div>`}</details>`;
  const f = $("#ask-f"), ta = $("#ask-q");
  ta.onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); f.requestSubmit(); } };
  f.onsubmit = async e => {
    e.preventDefault(); const q = ta.value.trim(); if (!q || ASK.busy) return;
    ASK = { q, hits: askSearch(q), ai: null, err: null, busy: true }; viewAsk(); renderMath(app);
    try { ASK.ai = await askAI(q, ASK.hits); }
    catch (err) { ASK.err = err.status === 429 ? "La IA gratuita está saturada ahora mismo; inténtalo en un minuto. Abajo tienes lo que dicen los apuntes." : "No se ha podido contactar con la IA (" + esc(err.message) + "). Abajo tienes lo que dicen los apuntes."; }
    ASK.busy = false; if (/^#\/consulta/.test(location.hash)) { viewAsk(); renderMath(app); }
  };
  $$("[data-askq]").forEach(b => b.onclick = () => startQuiz({ ids: [b.dataset.askq], title: "Consulta" }));
  const ks = $("#ai-s"); if (ks) ks.onclick = () => { const v = $("#ai-k").value.trim(); try { v ? localStorage.setItem(AI_LS, v) : localStorage.removeItem(AI_LS); } catch (e) { } viewAsk(); };
  if (!ASK.q) ta.focus();
}

/* arranque */
window.APP = { get S() { return S; }, set S(v) { S = Object.assign(blank(), v); try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) { } },
  route, go, esc, ic, confirmBox, donut, hbars, globalStats, streak, fmt1, fmtDate, topicStats, lessonsDone: () => LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length, nLessons: LESSONS.length, exById, TOPICS };
document.title = SUBJ.brand + " ETSII · " + SUBJ.name;
$("#brand-n").textContent = SUBJ.brand; $("#brand-logo").src = SUBJ.logo || "img/logo.svg"; $("#brand-s").textContent = SUBJ.sub; $("#subj-sw").hidden = false;
if (window.CLOUD) CLOUD.init();
if (S.exam && S.exam.mode === "sim" && Date.now() > S.exam.deadline) submitExam(true); else route();
})();
