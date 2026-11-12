/* =====================================================================
   MÁQUINAS Y MOTORES TÉRMICOS (MII, ETSII-UPM) · base de datos de la asignatura
   Cada archivo js/mmt/<tema>.js rellena THEORY, LEARN, CARDS, DRILLS,
   MNEMO y DIAGRAMS a partir de las diapositivas de clase.
   Los recuadros "Ampliación" (class="gen") son conocimiento general
   que NO aparece en los apuntes.
   ===================================================================== */
const TOPICS = [
  { id: "T1", num: "1", short: "Fundamentos", title: "Fundamentos de máquinas y motores térmicos", file: "T1_FundsMaqYMotTerm2026.pdf", color: "#c2410c" },
  { id: "T2", num: "2", short: "MCIA", title: "Fundamentos de motores de combustión interna alternativos (MCIA)", file: "T2_FundsMCIA2026.pdf", color: "#1d4ed8" }
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
