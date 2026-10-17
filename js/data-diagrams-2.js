/* =====================================================================
   ESQUEMAS ADICIONALES: mapas conceptuales, clasificaciones,
   desgloses de designaciones y figuras. Se añaden a window.DIAGRAMS.
   ===================================================================== */
(function () {
const D = window.DIAGRAMS;
const T = (x, y, s, cls = "", a = "start") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${a}">${s}</text>`;
const W = (vb, body, label) => `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;
const AR = `<defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>`;
const COLS = ["#2563eb", "#0891b2", "#7c3aed", "#0d9488", "#b26a00"];

/* Mapa conceptual: raíz + grupos con elementos */
function tree(root, groups, w = 600) {
  const n = groups.length, gw = (w - 20) / n, maxItems = Math.max(...groups.map(g => g.items.length));
  const H = 118 + maxItems * 26 + 10;
  const rw = Math.max(240, root.length * 8.6 + 40); let s = `<rect x="${w / 2 - rw / 2}" y="6" width="${rw}" height="38" rx="10" class="tr-root"/>${T(w / 2, 30, root, "tr-rt", "middle")}`;
  groups.forEach((g, i) => {
    const cx = 10 + gw * i + gw / 2, c = g.color || COLS[i % COLS.length];
    s += `<path d="M${w / 2} 44V58H${cx}V72" class="tr-ln"/>`;
    s += `<rect x="${cx - gw / 2 + 6}" y="72" width="${gw - 12}" height="34" rx="9" fill="${c}"/>${T(cx, 94, g.name, "tr-gt", "middle")}`;
    g.items.forEach((it, k) => {
      const y = 116 + k * 26;
      s += `<rect x="${cx - gw / 2 + 10}" y="${y}" width="${gw - 20}" height="22" rx="6" fill="${c}14" stroke="${c}55"/>${T(cx, y + 15, it, "tr-it", "middle")}`;
    });
  });
  return W(`0 0 ${w} ${H}`, s, root);
}
/* Desglose de una designación: piezas con su significado debajo */
function decode(parts, w = 600) {
  const n = parts.length, gap = 10, pw = (w - 20 - gap * (n - 1)) / n;
  let s = "";
  parts.forEach((p, i) => {
    const x = 10 + i * (pw + gap), c = COLS[i % COLS.length];
    s += `<rect x="${x}" y="10" width="${pw}" height="54" rx="10" fill="${c}" />${T(x + pw / 2, 46, p.t, "dc-t", "middle")}`;
    s += `<path d="M${x + pw / 2} 64V80" stroke="${c}" stroke-width="2"/>`;
    p.l.split("|").forEach((ln, k) => { s += T(x + pw / 2, 98 + k * 15, ln, k ? "dc-s" : "dc-l", "middle"); });
  });
  const lines = Math.max(...parts.map(p => p.l.split("|").length));
  return W(`0 0 ${w} ${98 + lines * 15}`, s, parts.map(p => p.t).join(" "));
}
/* Flujo horizontal de pasos */
function flow(steps, w = 600, sub = []) {
  const n = steps.length, gap = 26, bw = (w - 20 - gap * (n - 1)) / n;
  let s = AR;
  steps.forEach((st, i) => {
    const x = 10 + i * (bw + gap), c = COLS[i % COLS.length];
    s += `<rect x="${x}" y="12" width="${bw}" height="46" rx="10" fill="${c}14" stroke="${c}"/>${T(x + bw / 2, 40, st, "tr-it2", "middle")}`;
    if (sub[i]) sub[i].split("|").forEach((ln, k) => { s += T(x + bw / 2, 76 + k * 14, ln, "dc-s", "middle"); });
    if (i < n - 1) s += `<path d="M${x + bw + 3} 35H${x + bw + gap - 3}" class="ah2" marker-end="url(#ar2)"/>`;
  });
  const lines = Math.max(1, ...sub.map(x => (x || "").split("|").length));
  return W(`0 0 ${w} ${sub.length ? 70 + lines * 14 : 70}`, s, steps.join(" → "));
}

/* ---------------- T1 ---------------- */
D.push({ sec: "t1-proyecto", h4: null, cap: "Ciclo de vida de una construcción (arriba) y fases del proyecto, de menos a más detalle (abajo).",
  svg: flow(["Proyecto", "Construcción", "Uso", "Demolición"], 600, ["calidad del proyecto", "calidad de productos|y de la ejecución", "gestión en|vida de servicio", "gestión de la|deconstrucción"]) +
       flow(["Anteproyecto", "Proyecto básico", "Proyecto de ejecución"], 600, ["aspectos fundamentales", "soluciones concretas|y su justificación", "todos los detalles|y especificaciones"]) });

D.push({ sec: "t1-requisitos", h4: "Requisitos de seguridad", cap: "Mapa de requisitos: las tres exigencias normativas y los cuatro requisitos de seguridad y funcionalidad.",
  svg: tree("Requisitos de las estructuras", [
    { name: "Seguridad y funcionalidad", items: ["Resistencia y estabilidad", "Aptitud al servicio", "Robustez y redundancia", "Durabilidad"] },
    { name: "Seguridad frente a incendio", items: ["Protección activa", "Protección pasiva", "Evacuación", "Sector de incendio"] },
    { name: "Higiene y medio ambiente", items: ["Mínimos residuos", "Reutilización > reciclaje", "Modularidad", "Plan de mantenimiento"] }]) });

D.push({ sec: "t1-requisitos", h4: "Modos de fallo", cap: "Rotura frágil frente a dúctil: el material dúctil sufre grandes deformaciones antes de romper, redistribuye tensiones y avisa; el frágil rompe casi sin deformarse.",
  svg: W("0 0 520 210", `${AR}<path class="ax" d="M50 180V20M50 180H490" marker-end="url(#ar2)"/>
  <path d="M50 180L150 50" stroke="#c2413b" stroke-width="2.5" fill="none"/><circle cx="150" cy="50" r="5" fill="#c2413b"/>${T(160, 46, "frágil: rompe sin aviso", "ko")}
  <path class="ln" d="M50 180L95 92C120 80 150 76 250 74C350 74 410 80 455 100"/><circle cx="455" cy="100" r="5" fill="#1e40af"/>${T(300, 64, "dúctil: gran deformación plástica", "tb", "middle")}
  <path class="fl" opacity=".35" d="M95 92C120 80 150 76 250 74C350 74 410 80 455 100V180H95Z"/>${T(270, 140, "energía absorbida / aviso", "small2", "middle")}
  ${T(490, 198, "ε", "tb", "end")}${T(40, 26, "σ", "tb", "end")}`, "Rotura dúctil y frágil") });

D.push({ sec: "t1-metodos", h4: "Tensiones admisibles", cap: "Clasificación de los métodos de cálculo (apuntes T1, diap. 14 y 18). Los códigos actuales (CE, CTE, EC) son métodos de nivel 1.",
  svg: tree("Métodos para cumplir los requisitos", [
    { name: "Deterministas", items: ["Cálculo clásico", "Tensiones admisibles", "σ ≤ σmat / FS", "Un solo FS"], color: "#64748b" },
    { name: "Probabilistas nivel 2", items: ["Distribuciones R y S", "Índice β", "pf = Φ(−β)", "Fiabilidad 1 − pf"], color: "#0891b2" },
    { name: "Probabilistas nivel 1", items: ["Valores característicos", "Coeficientes γm y γf", "Estados límite", "CE · CTE · EC"], color: "#2563eb" }]) });

D.push({ sec: "t1-el", h4: null, cap: "Árbol de estados límite: qué se comprueba en cada familia y con qué desigualdad.",
  svg: tree("Estados límite", [
    { name: "ELS · servicio · Cd ≥ Ed", items: ["Flechas verticales", "Flechas horizontales", "Vibraciones verticales", "Vibraciones horizontales", "Deslizamiento de tornillos"], color: "#0891b2" },
    { name: "ELU · último · Rd ≥ Sd", items: ["Equilibrio", "Agotamiento", "Pandeo", "Fatiga", "Adherencia"], color: "#1e40af" }], 560) });

/* ---------------- T2 ---------------- */
D.push({ sec: "t2-clasif", h4: "Según su geometría", cap: "Clasificación geométrica de los elementos estructurales.",
  svg: tree("Elementos estructurales", [
    { name: "Sin curvatura · 1D", items: ["Cable (tracción)", "Barra biarticulada", "Viga"] },
    { name: "Sin curvatura · 2D", items: ["Losa: laja / placa", "Lámina plegada", "Entramado"] },
    { name: "Curvatura simple", items: ["Arco (1D)", "Bóveda (2D)", "Cilindro"] },
    { name: "Doble curvatura", items: ["Sinclástica (cúpula)", "Anticlástica (silla)", "Paraboloide hiperb."] }], 620) });

D.push({ sec: "t2-clasif", h4: "Esfuerzos en elementos bidimensionales", cap: "Matriz para no confundirlos: según tengan o no curvatura y qué grupo de esfuerzos desarrollen.",
  svg: W("0 0 560 250", `
  ${T(205, 22, "Solo Grupo 1 (N<tspan baseline-shift='sub' font-size='9'>x</tspan>, N<tspan baseline-shift='sub' font-size='9'>y</tspan>, N<tspan baseline-shift='sub' font-size='9'>xy</tspan>)", "tb", "middle")}${T(420, 22, "Solo Grupo 2 (M, V)", "tb", "middle")}
  ${T(60, 90, "Plano", "tb", "middle")}${T(60, 190, "Curvo", "tb", "middle")}
  ${[["LAJA", "plana, solo esfuerzos en su plano", 110, 40, "#2563eb"], ["PLACA", "plana, solo flexión y cortante", 325, 40, "#0891b2"], ["MEMBRANA", "curva, solo esfuerzos en su plano", 110, 140, "#7c3aed"], ["LÁMINA A FLEXIÓN", "curva, solo flexión y cortante", 325, 140, "#0d9488"]].map(([a, b, x, y, c]) => `<rect x="${x}" y="${y}" width="195" height="88" rx="12" fill="${c}14" stroke="${c}"/>${T(x + 97, y + 38, a, "tb", "middle")}${T(x + 97, y + 58, b, "small2", "middle")}`).join("")}
  ${T(280, 245, "Lámina general = Grupo 1 + Grupo 2 · Losa general = Grupo 1 + Grupo 2", "mut", "middle")}`, "Laja, placa, membrana y lámina") });

D.push({ sec: "t2-bi", h4: "Entramados", cap: "Dos vigas cruzadas con unión no rígida: en el cruce tienen la misma flecha, así que la carga se reparte según la rigidez k = 48EI/L³. La viga corta (más rígida) se lleva la mayor parte.",
  svg: W("0 0 520 220", `${AR}
  <path class="beam" d="M60 120H460"/><path class="beam" stroke="#0891b2" d="M260 30V210" opacity=".85"/>
  <path class="ah2" d="M260 70V110" marker-end="url(#ar2)" stroke-width="2.5"/>${T(270, 82, "P", "tb")}
  ${T(60, 145, "Viga A · luz L", "small2")}${T(270, 205, "Viga B · luz L′", "small2")}
  <rect class="box" x="330" y="20" width="180" height="70" rx="10"/>${T(420, 44, "P<tspan baseline-shift='sub' font-size='8'>A</tspan> / P<tspan baseline-shift='sub' font-size='8'>B</tspan> = k<tspan baseline-shift='sub' font-size='8'>A</tspan> / k<tspan baseline-shift='sub' font-size='8'>B</tspan>", "tb", "middle")}${T(420, 64, "k = 48EI / L³", "small2", "middle")}${T(420, 80, "+ inercia → + carga", "small2", "middle")}`, "Reparto de carga en un emparrillado") });

D.push({ sec: "t2-civil", h4: "Partes de un puente", cap: "Tipos de puente según el sistema primario. Arco: compresión con empuje en los apoyos. Colgante: cable principal y péndolas (las mayores luces). Atirantado: tirantes desde las torres, en arpa o en abanico. Voladizo: ménsulas desde las pilas.",
  svg: W("0 0 620 190", `
  ${(() => { let s = ""; const pan = (x, ttl, body) => `<g transform="translate(${x},10)"><path d="M0 120H140" stroke="#1e3a8a" stroke-width="4"/>${body}${T(70, 160, ttl, "tb", "middle")}</g>`;
    s += pan(5, "Arco", `<path class="ln" d="M5 120Q70 20 135 120"/>${[30, 50, 70, 90, 110].map(x => `<path class="beam2" d="M${x} ${120 - (1 - ((x - 70) / 65) ** 2) * 50}V120"/>`).join("")}`);
    s += pan(158, "Colgante", `<path class="wall" d="M30 120V30M110 120V30"/><path class="ln" d="M-5 120L30 30Q70 95 110 30L145 120"/>${[45, 60, 70, 80, 95].map(x => `<path class="beam2" d="M${x} ${30 + 65 * (1 - ((x - 70) / 40) ** 2)}V120"/>`).join("")}`);
    s += pan(311, "Atirantado (abanico)", `<path class="wall" d="M70 120V20"/>${[5, 25, 45, 95, 115, 135].map(x => `<path class="ln3" stroke-width="1.6" d="M70 24L${x} 120"/>`).join("")}`);
    s += pan(464, "Voladizo", `<path class="wall" d="M35 120V150M105 120V150"/><path class="ln" d="M0 120L35 90L70 112L105 90L140 120"/><path class="beam2" d="M35 90V120M105 90V120M0 120L35 120"/>`);
    return s; })()}`, "Tipos de puente") });

D.push({ sec: "t2-civil", h4: "Túneles", cap: "Sección de un túnel: bóveda, hastiales y contrabóveda o solera. Líneas de excavación, sostenimiento (cara exterior) y revestimiento (cara interior).",
  svg: W("0 0 520 230", `
  <path d="M110 200V110A150 150 0 0 1 410 110V200Q260 225 110 200Z" fill="#e3dccb" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M130 195V112A130 130 0 0 1 390 112V195Q260 215 130 195Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
  <path d="M148 190V114A112 112 0 0 1 372 114V190Q260 207 148 190Z" fill="#fff" stroke="#1e40af" stroke-width="2"/>
  ${T(260, 70, "bóveda", "tb", "middle")}${T(170, 150, "hastial", "tb", "middle")}${T(350, 150, "hastial", "tb", "middle")}${T(260, 192, "solera / contrabóveda", "tb", "middle")}
  ${T(430, 60, "excavación", "small2")}${T(430, 80, "sostenimiento", "small2")}${T(430, 100, "revestimiento", "small2")}
  <path d="M428 56L392 66M428 76L380 84M428 96L366 100" class="ah2" stroke-width="1"/>`, "Sección de un túnel") });

/* ---------------- T2.3 ---------------- */
D.push({ sec: "t23-sup", h4: null, cap: "Tipos de cimentación superficial vistos en planta, de menor a mayor superficie de apoyo.",
  svg: W("0 0 620 170", `
  ${(() => { const P = (x, ttl, body) => `<g transform="translate(${x},14)"><rect x="0" y="0" width="108" height="108" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>${body}${T(54, 132, ttl, "tb", "middle")}</g>`;
    const col = (x, y) => `<rect x="${x - 5}" y="${y - 5}" width="10" height="10" fill="#1e3a8a"/>`;
    return P(4, "Aislada", `<rect class="fl" x="30" y="30" width="48" height="48" stroke="#2563eb"/>${col(54, 54)}`) +
      P(126, "Combinada", `<rect class="fl" x="14" y="36" width="80" height="36" stroke="#2563eb"/>${col(34, 54)}${col(74, 54)}`) +
      P(248, "Corrida", `<rect class="fl" x="10" y="44" width="88" height="20" stroke="#2563eb"/><rect x="10" y="50" width="88" height="8" fill="#1e3a8a"/>`) +
      P(370, "Emparrillado", `<path d="M14 24H94M14 84H94M24 14V94M84 14V94M54 14V94M14 54H94" stroke="#2563eb" stroke-width="9" opacity=".35"/>${[24, 54, 84].map(x => [24, 54, 84].map(y => col(x, y)).join("")).join("")}`) +
      P(492, "Losa", `<rect class="fl" x="10" y="10" width="88" height="88" stroke="#2563eb"/>${[24, 54, 84].map(x => [24, 54, 84].map(y => col(x, y)).join("")).join("")}`); })()}
  ${T(310, 166, "pilar ■   superficie de apoyo ▭", "mut", "middle")}`, "Tipos de cimentación superficial") });

D.push({ sec: "t23-sup", h4: "Estados límite últimos", cap: "Los cinco ELU de una cimentación superficial (también se aplican a los muros).",
  svg: W("0 0 620 160", `${AR}
  ${(() => { const P = (x, ttl, body) => `<g transform="translate(${x},10)"><path d="M0 70H110" stroke="#a8a29e" stroke-width="2"/>${body}${T(55, 128, ttl, "tb", "middle")}</g>`;
    const zap = (dx = 0, dy = 0, rot = 0) => `<g transform="translate(${dx},${dy}) rotate(${rot} 55 62)"><rect class="sec" x="30" y="56" width="50" height="14"/><rect class="sec" x="48" y="30" width="14" height="26"/></g>`;
    return P(4, "Hundimiento", zap(0, 12) + `<path d="M30 82Q55 110 80 82" class="dash"/><path class="ah2" d="M55 14V40" marker-end="url(#ar2)"/>`) +
      P(128, "Deslizamiento", zap(10, 0) + `<path class="ah2" d="M10 45H40" marker-end="url(#ar2)"/><path class="ah2" d="M60 90H95" marker-end="url(#ar2)"/>`) +
      P(252, "Vuelco", zap(0, -4, 14) + `<path class="ah2" d="M15 30H45" marker-end="url(#ar2)"/><path d="M75 92A20 20 0 0 0 95 70" class="ah2" marker-end="url(#ar2)"/>`) +
      P(376, "Estabilidad global", zap(0, 0) + `<path d="M5 70Q55 140 110 50" class="circ3"/>`) +
      P(500, "Capacidad estructural", zap(0, 0) + `<path d="M48 62L55 70L52 66L60 70" stroke="#c2413b" stroke-width="2" fill="none"/><path d="M70 58l4 12" stroke="#c2413b" stroke-width="2"/>`); })()}`, "Estados límite últimos de cimentaciones") });

D.push({ sec: "t23-prof", h4: "Efecto grupo", cap: "Coeficiente de eficiencia del grupo de pilotes η según la separación S/D: 0,7 con pilotes tangentes (S = D) y 1,0 a partir de S = 3D; entre medias se interpola.",
  svg: W("0 0 520 210", `${AR}
  <path class="ax" d="M60 180V20M60 180H480" marker-end="url(#ar2)"/>
  <path class="grid" d="M60 50H470M60 89H470"/>
  <path class="ln" d="M120 89L300 50H470"/><circle cx="120" cy="89" r="5" fill="#1e40af"/><circle cx="300" cy="50" r="5" fill="#1e40af"/>
  ${T(52, 54, "1,0", "small2", "end")}${T(52, 93, "0,7", "small2", "end")}${T(120, 198, "S = D", "small2", "middle")}${T(210, 198, "2D", "small2", "middle")}${T(300, 198, "3D", "small2", "middle")}
  <path class="dash" d="M120 89V180M300 50V180"/>${T(210, 64, "interpolar", "small2", "middle")}${T(480, 198, "S", "tb", "end")}${T(50, 26, "η", "tb", "end")}
  ${T(380, 130, "R<tspan baseline-shift='sub' font-size='8'>ckg</tspan> = η · n · R<tspan baseline-shift='sub' font-size='8'>ck</tspan>", "tb", "middle")}`, "Eficiencia del grupo de pilotes") });

D.push({ sec: "t23-cont", h4: null, cap: "Pantalla frente a muro: la pantalla se ejecuta antes de excavar y su estabilidad depende sobre todo del empotramiento bajo el fondo de excavación (es flexible). El muro mantiene un desnivel gracias a su peso y su cimiento, y el trasdós se rellena.",
  svg: W("0 0 560 220", `
  <g transform="translate(20,10)"><rect x="0" y="40" width="250" height="170" fill="#efe8d8"/><rect x="130" y="40" width="120" height="90" fill="#fff"/>
   <rect x="122" y="30" width="10" height="180" fill="#475569"/>${T(125, 22, "Pantalla", "tb", "middle")}
   <path class="dash" d="M140 130H250"/>${T(195, 124, "fondo de excavación", "small2", "middle")}
   <path d="M118 140V205" stroke="#c2413b" stroke-width="2"/>${T(100, 180, "empotramiento", "ko", "end")}
   ${T(195, 80, "se excava después", "small2", "middle")}</g>
  <g transform="translate(300,10)"><rect x="0" y="40" width="250" height="170" fill="#efe8d8"/><rect x="120" y="40" width="130" height="110" fill="#fff"/>
   <path d="M100 40H122V150H160V170H60V150H100Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>${T(110, 22, "Muro", "tb", "middle")}
   ${T(50, 80, "relleno", "small2", "middle")}${T(50, 96, "(trasdós)", "small2", "middle")}${T(190, 120, "desnivel", "small2", "middle")}</g>`, "Pantalla frente a muro") });

/* ---------------- T3 ---------------- */
D.push({ sec: "t3-intro", h4: "Propiedades mecánicas", cap: "Módulo de elasticidad de los materiales de la tabla de los apuntes (valor central del rango, en GPa). El acero es unas 7 veces más rígido que un hormigón medio.",
  svg: W("0 0 560 250", (() => { const rows = [["Acero", 207], ["Cobre", 110], ["Fundición", 122], ["Aluminio", 72], ["Vidrio", 66], ["Caliza", 58], ["Hormigón", 27], ["Ladrillo", 13.5], ["Madera", 10.5], ["Goma", 0.007]];
    return rows.map(([n, v], i) => { const y = 10 + i * 23, w = Math.max(1.5, v / 207 * 380); return `${T(100, y + 13, n, "small2", "end")}<rect x="110" y="${y + 2}" width="${w.toFixed(1)}" height="15" rx="4" fill="${n === "Acero" ? "#1e40af" : n === "Hormigón" ? "#0d9488" : "#93b4ec"}"/>${T(116 + w, y + 14, v < 1 ? "≈0,01" : String(v).replace(".", ","), "small2")}`; }).join(""); })(), "Módulos de elasticidad") });

D.push({ sec: "t3-acero", h4: "Designación", cap: "Cómo se lee la designación de un acero estructural.",
  svg: decode([{ t: "S", l: "acero|estructural (steel)" }, { t: "355", l: "f<tspan baseline-shift='sub' font-size='8'>y</tspan> mínimo|en MPa (t ≤ 40 mm)" }, { t: "J2", l: "grado|resistencia, resiliencia|y soldabilidad" }, { t: "+ H, W, N…", l: "símbolos grupo 2|H hueco · W corrosión|N normalizado" }]) });

D.push({ sec: "t3-horm", h4: null, cap: "De las materias primas al hormigón: calizas y arcillas se calcinan para obtener el clínker; con yeso se muele el cemento; con áridos, agua y, a veces, aditivos (≤ 5 % del peso del cemento) se obtiene el hormigón.",
  svg: flow(["Calizas + arcillas", "Clínker", "Cemento", "Hormigón"], 600, ["mezcla y|calcinación", "+ yeso|pulverización", "+ áridos + agua|(+ aditivos ≤ 5 %)", "fino ≤ 4 mm|grueso > 4 mm"]) });

D.push({ sec: "t3-horm", h4: "Designación", cap: "Cómo se lee la designación de un hormigón.",
  svg: decode([{ t: "HA", l: "tipo|HM masa · HA armado|HP pretensado" }, { t: "30", l: "f<tspan baseline-shift='sub' font-size='8'>ck</tspan>|en N/mm²" }, { t: "B", l: "consistencia|S · P · B · F" }, { t: "20", l: "tamaño máximo|de árido (mm)" }, { t: "XC2", l: "ambiente|carbonatación" }]) });

D.push({ sec: "t3-arm", h4: "Designación", cap: "Cómo se lee la designación de un acero para armaduras pasivas.",
  svg: decode([{ t: "B", l: "acero para|hormigón (béton)" }, { t: "500", l: "f<tspan baseline-shift='sub' font-size='8'>y</tspan>|en MPa" }, { t: "S", l: "barra corrugada|soldable" }, { t: "D", l: "alta|ductilidad" }]) });

D.push({ sec: "t3-suelo", h4: null, cap: "Arenas frente a arcillas: origen, de qué dependen sus propiedades y cómo se clasifican.",
  svg: tree("Suelos", [
    { name: "Arenas", items: ["Alteración física", "Sin resistencia a tracción", "Tamaño y compacidad", "Curvas granulométricas"], color: "#b26a00" },
    { name: "Arcillas", items: ["Alteración química", "Partículas laminares", "Composición y humedad", "Límites de Atterberg"], color: "#7c3aed" }], 560) });
})();
