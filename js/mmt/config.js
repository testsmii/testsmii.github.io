/* Configuración de la asignatura «Máquinas y Motores Térmicos» */
(function () {
const D = (dir, pages, label, name) => ({ dir, pages, off: 0, label, name });
TOPICS.forEach(t => { if (!THEORY[t.id]) THEORY[t.id] = { summary: ["Contenido en preparación."], sections: [{ id: t.id.toLowerCase() + "-pend", title: "1. En preparación", html: "<p>Contenido en preparación.</p>" }], confusions: [] }; });
const secRules = {};
TOPICS.forEach(t => { secRules[t.id] = [[/./, THEORY[t.id].sections[0].id]]; });
// Sección de cada pregunta de examen: la del tema cuyo texto comparte más palabras con la pregunta
const norm = s => String(s).replace(/<[^>]+>/g, " ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ");
Object.entries(MMT_EX).forEach(([id, ex]) => {
  MMT_SEC[id] = ex.qs.map(([tema, ap, q, o]) => {
    const words = [...new Set(norm(ap + " " + ap + " " + q + " " + o.join(" ")).split(" ").filter(w => w.length > 4))];
    let best = THEORY[tema].sections[0].id, bs = -1;
    THEORY[tema].sections.forEach(s => { const tx = " " + norm(s.title + " " + s.title + " " + s.html) + " "; const sc = words.reduce((a, w) => a + (tx.includes(" " + w) ? 1 : 0), 0); if (sc > bs) { bs = sc; best = s.id; } });
    return best;
  });
});
window.SUBJECT = {
  id: "mmt", lsKey: "mmt_motores_v1",
  name: "Máquinas y Motores Térmicos", logo: "img/logo-mmt.svg", brand: "Motores", sub: "Máquinas y Motores Térmicos · MII",
  examPool: EQ => Object.values(EQ).flat().map(q => q.id),
  secRules,
  decks: { T1: D("T1", 54, "Tema 1", "Tema 1 · Fundamentos de máquinas y motores térmicos"), T2: D("T2", 66, "Tema 2", "Tema 2 · Fundamentos de los MCIA") },
  temaDeck: {}, secSlides: {}, slideDir: "slides/mmt/",
  p2: false,
  examsBlurb: "Ejemplos de examen de teoría (20 preguntas) y de problemas de MCIA (3 problemas) con la respuesta oficial marcada.",
  examIntro: "Ejemplos publicados por la asignatura, con la respuesta marcada. En teoría, cada fallo resta 1/(nº de opciones − 1); en problemas, el fallo no resta. La nota se escala a 10.",
  examKinds: [["Ejemplo", "Exámenes de ejemplo", "Formato real del examen: test de teoría y test de problemas numéricos (15 opciones por problema)."]],
  examFoot: "Las explicaciones son de la app; la respuesta correcta es la marcada en el ejemplo."
};
})();
