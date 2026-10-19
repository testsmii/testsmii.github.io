/* =====================================================================
   Selector de asignatura y carga de sus datos.
   Cada asignatura tiene sus propios archivos de datos y su propio
   progreso (clave de localStorage distinta).
   ===================================================================== */
(function () {
"use strict";
const SUBJECTS = [
  { id: "est", name: "Cálculo y Diseño de Estructuras", short: "Estructuras", color: "#1e40af", icon: "img/logo.svg",
    desc: "PEC1: temas 1, 2.1, 2.3 y 3. Exámenes PA1 2024-2025 y finales con solución oficial.",
    scripts: ["js/data-theory.js", "js/data-diagrams.js", "js/data-diagrams-2.js", "js/data-cards.js", "js/data-drills.js", "js/data-updates.js", "js/data-exams.js", "js/data-exams-2.js", "js/data-learn-1.js", "js/data-learn-2.js", "js/est-config.js"] },
  { id: "fe", name: "Fuentes de Energía", short: "Energía", color: "#0f766e", icon: "img/logo-fe.svg",
    desc: "Biomasa, biogás, fósiles, fisión, fusión, solar, eólica e hidráulica. Examen de 2018 con solución propuesta. Temas en preparación: se van añadiendo.",
    scripts: ["js/fe/base.js", "js/fe/biomasa.js", "js/fe/biogas.js", "js/fe/fosiles-fision.js", "js/fe/fusion-hidro.js", "js/fe/solar.js", "js/fe/eolica.js", "js/fe/general.js", "js/fe/exam-2018.js", "js/fe/config.js"] }
];
const KEY = "testsmii_subject";
const get = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
const set = v => { try { localStorage.setItem(KEY, v); } catch (e) { /* noop */ } };
const V = "?v=" + (document.currentScript && document.currentScript.dataset.v || "1");

function picker() {
  document.body.classList.add("picking");
  const app = document.getElementById("app"), cur = get();
  app.innerHTML = `<section class="subj-pick"><img src="img/logo-estudio.svg" alt="" width="72" height="72" class="sp-logo"><div class="sp-brand">Estudio <b>ETSII</b></div>
  <h1>¿Qué asignatura quieres estudiar?</h1><p class="muted">Cada asignatura guarda su propio progreso. Podrás cambiar cuando quieras desde la cabecera.</p>
  <div class="subj-grid">${SUBJECTS.map(s => `<button class="card subj-card${s.id === cur ? " cur" : ""}" data-subj="${s.id}" style="--c:${s.color}">
    <img src="${s.icon}" alt="" width="52" height="52"><span><b>${s.name}</b><small>${s.desc}</small></span>${s.id === cur ? `<span class="tag brand">Actual</span>` : ""}</button>`).join("")}</div></section>`;
  app.querySelectorAll("[data-subj]").forEach(b => b.onclick = () => choose(b.dataset.subj));
}
function choose(id) {
  const was = get(); set(id);
  if (window.APP && was === id) { document.body.classList.remove("picking"); location.hash = "#/"; return; }
  location.hash = "#/"; location.reload();
}
function load(s) {
  document.body.dataset.subject = s.id;
  const list = s.scripts.concat(["js/cloud.js", "js/app.js"]);
  list.forEach(src => { const el = document.createElement("script"); el.src = src + V; el.async = false; document.body.appendChild(el); });
}
window.SUBJECTS = SUBJECTS;
window.showSubjectPicker = picker;
const params = new URLSearchParams(location.search), forced = params.get("asignatura");
if (forced && SUBJECTS.some(s => s.id === forced)) set(forced);
const id = get(), s = SUBJECTS.find(x => x.id === id);
if (!s) picker(); else load(s);
window.addEventListener("hashchange", () => { if (/^#\/asignatura/.test(location.hash) && !window.APP) picker(); });
})();
