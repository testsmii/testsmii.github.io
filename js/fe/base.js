/* =====================================================================
   FUENTES DE ENERGÍA (MII, ETSII-UPM) · base de datos de la asignatura
   Cada archivo js/fe/<tema>.js rellena THEORY, LEARN, CARDS, DRILLS,
   MNEMO y DIAGRAMS a partir de las diapositivas de clase.
   Los recuadros "Ampliación" (class="gen") son conocimiento general
   que NO aparece en los apuntes.
   ===================================================================== */
const TOPICS = [
  { id: "B1", num: "1", short: "Biomasa", title: "Biomasa y residuos: composición y propiedades", file: "FE_Tema1_2026.pdf", color: "#15803d" },
  { id: "B2", num: "2", short: "Valorización", title: "Aprovechamiento energético de biomasa y residuos", file: "FE_Tema2_2026.pdf · Problemas resueltos P1–P3", color: "#65a30d" },
  { id: "B3", num: "3", short: "Biogás", title: "Biogás de aguas y residuos", file: "FE_Tema3_2026.pdf", color: "#0d9488" },
  { id: "B4", num: "4", short: "Ambiental", title: "Aspectos ambientales de la energía", file: "FE_Tema4_2025.pdf", color: "#0891b2" },
  { id: "FOS", num: "5", short: "Fósiles", title: "Petróleo, gas y carbón", file: "CombustiblesFosiles_FE_MII.pdf", color: "#78716c" },
  { id: "FIS", num: "6", short: "Fisión", title: "Energía nuclear de fisión", file: "fision_nuclear_FE_MII.pdf", color: "#7c3aed" },
  { id: "FUS", num: "7", short: "Fusión", title: "Fusión nuclear", file: "FE_Fusion_26-27_upload_v1.pdf", color: "#c026d3" },
  { id: "SOL", num: "8", short: "Solar", title: "Energía solar: recurso, térmica y fotovoltaica", file: "Energia_Solar_1, 2 y 3.pdf", color: "#d97706" },
  { id: "EOL", num: "9", short: "Eólica", title: "Energía eólica", file: "Energia_Eolica_1 y 2.pdf", color: "#2563eb" },
  { id: "HID", num: "10", short: "Hidráulica", title: "Hidroeléctrica y energías marinas", file: "UPM - MII - Fuentes de Energía: Hidro.pdf", color: "#0369a1" },
  { id: "GEN", num: "0", short: "General", title: "Introducción y sistema eléctrico", file: "Sin apuntes adjuntos (solo aparece en el examen de 2018)", color: "#475569" }
];
const MISSING_TOPICS = [];
const THEORY = {};
const DIAGRAMS = [];
const DRILLS = [];
const MNEMO = {};

/* L(tema, sección, apartado, dificultad 1-3, enunciado, [opciones], correctas, explicación, referencia)
   correctas: índice (0-3) o array si hay varias. Id estable: tema + nº dentro del tema. */
const LEARN = [];
const _lc = {};
function L(t, sec, s, d, q, o, a, e, r) {
  _lc[t] = (_lc[t] || 0) + 1;
  LEARN.push({ id: t + "-" + _lc[t], tema: t, sec: sec, apartado: s, d: d, q: q, o: o, a: Array.isArray(a) ? a : [a], multi: Array.isArray(a), exp: e, ref: r });
}
/* C(tema, sección, anverso, reverso) */
const CARDS = [];
const _cc = {};
function C(t, sec, f, b) { _cc[t] = (_cc[t] || 0) + 1; CARDS.push({ id: "K" + t + "-" + _cc[t], tema: t, sec: sec, f: f, b: b }); }
const EXAMS = [];
const EXAM_SETS = {};
