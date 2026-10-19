/* Configuración de la asignatura «Cálculo y Diseño de Estructuras» */
window.SUBJECT = {
  id: "est", lsKey: "cde_estructuras_v1",
  name: "Cálculo y Diseño de Estructuras", brand: "Estructuras", sub: "Cálculo y Diseño de Estructuras",
  examPool: EQ => EQ["PA1-2025-T1"].map(q => q.id).concat(["PA1-2025-T3-P1"], EQ["PA1-2024-T1"].map(q => q.id), EQ["EF2-2026-T1"].filter(q => q.part !== "P2").map(q => q.id), EQ["EF2-2025-T1"].filter(q => !q.noKey && q.part !== "P2").map(q => q.id), EQ["EF1-2024-T1"].filter(q => q.part !== "P2").map(q => q.id)),
  secRules: {
    T1: [[/Proyecto estructural/, "t1-proyecto"], [/Requisitos|Modos de fallo|elástico y plástico|Estabilidad|Fuego|Medio ambiente|Vida de servicio/, "t1-requisitos"], [/Estados límite|Parámetros/, "t1-el"], [/./, "t1-metodos"]],
    T2: [[/Introducción|Escala|Geometría|Proyecto/, "t2-intro"], [/Clasificación/, "t2-clasif"], [/Cables|Arcos|Compresión|Vigas/, "t2-mono"], [/Entramados|Losas|Láminas|Membranas/, "t2-bi"], [/Edificación|Estructuras$/, "t2-edif"], [/Puentes|Térmica|térmicas|Túneles/, "t2-civil"], [/./, "t2-ind"]],
    T23: [[/Profundas/, "t23-prof"], [/Contención|contención/, "t23-cont"], [/./, "t23-sup"]],
    T3: [[/Introducción/, "t3-intro"], [/Acero/, "t3-acero"], [/Hormigón/, "t3-horm"], [/Armaduras/, "t3-arm"], [/./, "t3-suelo"]]
  },
  decks: { "T1": { dir: "T1", pages: 29, off: 1, name: "Tema 1 · Introducción y objetivos" }, "T2.1": { dir: "T2", pages: 91, off: 1, name: "Tema 2.1 · Tipologías estructurales" },
    "T2.3": { dir: "T23", pages: 34, off: 1, name: "Tema 2.3 · Cimentaciones" }, "T3": { dir: "T3", pages: 52, off: 1, name: "Tema 3 · Materiales" } },
  temaDeck: { T1: "T1", T2: "T2.1", T23: "T2.3", T3: "T3" },
  secSlides: { "t1-proyecto": [2, 3], "t1-requisitos": [4, 13], "t1-metodos": [14, 22], "t1-el": [22, 28], "t2-intro": [2, 6], "t2-clasif": [7, 9], "t2-mono": [10, 21], "t2-bi": [22, 41], "t2-edif": [42, 57], "t2-civil": [58, 75], "t2-ind": [76, 90],
    "t23-sup": [2, 21], "t23-prof": [22, 26], "t23-cont": [27, 33], "t3-intro": [2, 9], "t3-acero": [10, 17], "t3-horm": [18, 33], "t3-arm": [34, 38], "t3-suelo": [39, 51] },
  slideDir: "slides/",
  p2: true,
  examsBlurb: "PA1 2025 y PA1 2024 (4 versiones cada una) con solución oficial, y exámenes finales. Simulacro de 40 min y revisión.",
  examIntro: "Preguntas originales y corrección con la hoja oficial. Cada pregunta vale 0,5; en las de varias respuestas, 0,5 × máx(0, (correctas − incorrectas marcadas)/nº de correctas).",
  examKinds: [["PEC1", "PEC1 · Pruebas de la primera parte", "Corresponden a los temas de las diapositivas de clase (1, 2.1, 2.3 y 3)."], ["Final", "Exámenes finales (toda la asignatura)", "Incluyen sobre todo preguntas de la PEC1. Las de la <b>2ª parte</b> están marcadas y no cuentan para tu preparación de la PEC1."]],
  examFoot: "En cada convocatoria, las versiones T1–T4 tienen las mismas preguntas en distinto orden. * Nota estimada con solución no oficial."
};
