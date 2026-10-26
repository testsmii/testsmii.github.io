/* Configuración de la asignatura «Fuentes de Energía» */
(function () {
const D = (dir, pages, label, name) => ({ dir, pages, off: 0, label, name });
// Tema cuyo archivo aún no existe: marcador para no romper la app
TOPICS.forEach(t => { if (!THEORY[t.id]) THEORY[t.id] = { summary: ["Contenido en preparación."], sections: [{ id: t.id.toLowerCase() + "-pend", title: "1. En preparación", html: "<p>Contenido en preparación.</p>" }], confusions: [] }; });
const secRules = {};
TOPICS.forEach(t => { secRules[t.id] = [[/./, THEORY[t.id].sections[0].id]]; });
window.SUBJECT = {
  id: "fe", lsKey: "fe_energia_v1",
  name: "Fuentes de Energía", logo: "img/logo-fe.svg", brand: "Energía", sub: "Fuentes de Energía · MII",
  examPool: EQ => Object.values(EQ).flat().map(q => q.id),
  secRules,
  decks: { B1: D("B1", 52, "Biomasa T1", "Tema 1 · Biomasa y residuos: composición"), B2: D("B2", 39, "Biomasa T2", "Tema 2 · Aprovechamiento energético de biomasa"),
    B3: D("B3", 23, "Biogás T3", "Tema 3 · Biogás de aguas y residuos"), B4: D("B4", 15, "Ambiental T4", "Tema 4 · Aspectos ambientales"),
    FOS: D("FOS", 89, "Fósiles", "Petróleo, gas y carbón"), FIS: D("FIS", 60, "Fisión", "Energía nuclear: fisión"), FUS: D("FUS", 73, "Fusión", "Fusión nuclear"),
    SOL1: D("SOL1", 16, "Solar I", "Solar I · Recurso solar"), SOL2: D("SOL2", 33, "Solar II", "Solar II · Solar térmica"), SOL3: D("SOL3", 32, "Solar III", "Solar III · Fotovoltaica"),
    EOL1: D("EOL1", 17, "Eólica I", "Eólica I"), EOL2: D("EOL2", 56, "Eólica II", "Eólica II"), HID: D("HID", 58, "Hidro", "Hidroeléctrica y marinas"),
    P1: D("P1", 7, "Problema 1", "Resolución del problema 1"), P2: D("P2", 4, "Problema 2", "Resolución del problema 2"), P3: D("P3", 3, "Problema 3", "Resolución del problema 3") },
  temaDeck: {}, secSlides: {}, slideDir: "slides/fe/",
  p2: false,
  examsBlurb: "Exámenes tipo test de convocatorias anteriores y test de biomasa, con solución propuesta y razonada. Penaliza −0,3 por fallo.",
  examIntro: "Preguntas originales de los exámenes. Puntuación como en el examen de 2018: acierto +1, fallo −0,3 y blanco 0, escalado a 10. Ninguno tiene hoja de soluciones oficial: la clave es una propuesta razonada, o las respuestas marcadas en el documento original, y se indica en cada caso.",
  examKinds: [["Test", "Exámenes tipo test", "No hay hojas de soluciones oficiales. Algunas cifras (potencia instalada, cobertura de la demanda…) han cambiado desde entonces: en la explicación se indica el dato actual de tus apuntes."]],
  examFoot: "* Nota estimada con la solución propuesta (no oficial)."
};
})();
