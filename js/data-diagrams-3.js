/* =====================================================================
   DIAGRAMAS (3): esquemas visuales para pasos con mucho texto.
   Mismo formato que data-diagrams.js: { sec, h4, svg, cap }.
   Si varios comparten paso, el último que se añade aparece primero.
   ===================================================================== */
(function () {
const T = (x, y, s, cls = "", a = "start") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${a}">${s}</text>`;
const W = (vb, body, label) => `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;
const MK = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#475569"/></marker><marker id="${id}r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c2413b"/></marker></defs>`;
const D = [];

/* ---------- T2.1 · Losas (diap. 25-28) ---------- */
// 3) losa cuadrada (isostáticas e inversión de momentos) y losas nervadas
D.push({ sec: "t2-bi", h4: "Losas", cap: "<b>Izquierda</b>: losa cuadrada apoyada en sus lados con carga uniforme (diap. 27). Las isostáticas, en dos familias perpendiculares, marcan el recorrido de las tensiones. En las <b>esquinas</b> la curvatura se invierte y la losa tiende a levantarse: es la <b>inversión de momentos</b>. <b>Derecha</b>: las <b>losas nervadas</b> (diap. 28) alejan el material del plano medio con nervios en una dirección o en dos (forjado reticular), y así ganan eficiencia. Las curvas de la izquierda son un esquema; la figura exacta está en la diapositiva.",
  svg: W("0 0 560 262", `${MK("ls3")}
  <g transform="translate(0,12)"><rect x="30" y="40" width="160" height="160" rx="3" fill="#f1f5fd" stroke="#1e3a8a" stroke-width="2.5"/>
  ${[0.2, 0.4, 0.6, 0.8].map(f => { const o = 160 * f; return `<path d="M30 ${40 + o}Q110 ${40 + o + (f - 0.5) * -60} 190 ${40 + o}" fill="none" stroke="#2563eb" stroke-width="1.3"/><path d="M${30 + o} 40Q${30 + o + (f - 0.5) * -60} 120 ${30 + o} 200" fill="none" stroke="#0891b2" stroke-width="1.3"/>`; }).join("")}
  ${[[30, 40, -1, -1], [190, 40, 1, -1], [30, 200, -1, 1], [190, 200, 1, 1]].map(([x, y, sx, sy]) => `<circle cx="${x - sx * 9}" cy="${y - sy * 9}" r="9" fill="#fee2e2" stroke="#c2413b" stroke-width="1.5"/>${T(x - sx * 9, y - sy * 9 + 4, "±", "small2 ko", "middle")}`).join("")}</g>
  ${T(110, 22, "Losa cuadrada · carga uniforme", "tb", "middle")}
  ${T(110, 236, "isostáticas = recorrido", "small2", "middle")}
  ${T(110, 252, "± esquinas: curvatura invertida", "small2 ko", "middle")}
  <line x1="262" y1="20" x2="262" y2="235" class="dash"/>
  ${T(410, 22, "Losas nervadas", "tb", "middle")}
  <g transform="translate(290,44)">
    <rect x="0" y="0" width="110" height="26" fill="#c9d9f5" stroke="#1e3a8a" stroke-width="1.5"/>
    <path d="M0 13H110" stroke="#c2413b" stroke-dasharray="4 3"/>
    ${T(120, 14, "maciza:", "small2 tb")}
    ${T(120, 28, "material junto al", "small2")}${T(120, 42, "plano medio (- - -)", "small2 mut")}
  </g>
  <g transform="translate(290,104)">
    <path d="M0 0H110V10H96V36H84V10H62V36H50V10H28V36H16V10H0Z" fill="#bfe8f1" stroke="#0e7490" stroke-width="1.5"/>
    ${T(120, 14, "nervada (1 dir.):", "small2 tb")}
    ${T(120, 28, "material en", "small2")}${T(120, 42, "los nervios", "small2")}
  </g>
  <g transform="translate(290,166)">
    <rect x="0" y="0" width="110" height="62" fill="#f1f5fd" stroke="#0e7490" stroke-width="1.5"/>
    ${[18, 40, 62, 84].map(x => `<path d="M${x + 4} 0V62" stroke="#0e7490" stroke-width="5" opacity=".55"/>`).join("")}${[14, 31, 48].map(y => `<path d="M0 ${y}H110" stroke="#0e7490" stroke-width="5" opacity=".55"/>`).join("")}
    ${T(120, 20, "nervada (2 dir.)", "small2 tb")}
    ${T(120, 34, "= forjado reticular", "small2")}
    ${T(120, 48, "visto desde abajo", "small2 mut")}
  </g>`, "Losa cuadrada con isostáticas e inversión de momentos, y losas nervadas") });

D.push({ sec: "t2-bi", h4: "Losas", img: "img/fig/t2-losa-nervadas.jpg", alt: "Losas nervadas, diapositiva 28", cap: "<b>Figura original (diap. 28)</b>: losas nervadas en una y dos direcciones, y la Sala de Audiencias del Vaticano (Nervi), con nervios que siguen las isostáticas." });
D.push({ sec: "t2-bi", h4: "Losas", img: "img/fig/t2-losa-isostaticas.jpg", alt: "Isostáticas y deformada de una losa cuadrada, diapositiva 27", cap: "<b>Figura original (diap. 27)</b>: red de isostáticas de la losa cuadrada apoyada con carga uniforme, y su deformada. En las esquinas se invierte la curvatura (inversión de momentos)." });
// 2) reserva de resistencia: redistribución (líneas de articulación) y acción de membrana
D.push({ sec: "t2-bi", h4: "Losas", cap: "<b>Reserva de resistencia</b> de una losa (diap. 26): dos mecanismos extra, además de la flexión. <b>1. Redistribución</b>: las zonas más cargadas plastifican y se forman <b>líneas de articulación</b> hasta llegar al mecanismo; en la placa cuadrada son las diagonales. <b>2. Acción de membrana</b>: la losa deformada es una superficie no desarrollable, así que su plano medio se estira y aparecen <b>tracciones</b>, como un cable en 2D. Existe aunque los bordes se muevan, pero es <b>mucho mayor con los bordes impedidos</b>.",
  svg: W("0 0 560 240", `${MK("ls2")}
  ${T(130, 22, "1 · Redistribución de tensiones", "tb", "middle")}
  <rect x="55" y="40" width="150" height="150" fill="#f1f5fd" stroke="#1e3a8a" stroke-width="2.5"/>
  <path d="M55 40L205 190M205 40L55 190" stroke="#c2413b" stroke-width="3" stroke-dasharray="9 5"/>
  <circle cx="130" cy="115" r="6" fill="#c2413b"/>
  ${T(130, 210, "fluencia plástica →", "small2", "middle")}${T(130, 226, "líneas de articulación → mecanismo", "small2 tb", "middle")}
  <line x1="272" y1="16" x2="272" y2="232" class="dash"/>
  ${T(420, 22, "2 · Acción de membrana", "tb", "middle")}
  <path d="M300 70H540" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${T(420, 90, "plano medio antes de cargar", "small2 mut", "middle")}
  <path d="M300 70Q420 175 540 70" fill="none" stroke="#1e3a8a" stroke-width="7" stroke-linecap="round"/>
  <path d="M300 70h-12M540 70h12" stroke="#334155" stroke-width="6"/>
  <path d="M300 62v-18M540 62v-18" stroke="#334155" stroke-width="2"/>${T(300, 40, "borde", "small2", "middle")}${T(540, 40, "borde", "small2", "middle")}
  ${[330, 370, 410, 450, 490, 520].map(x => `<path d="M${x} 46v${12}" stroke="#475569" stroke-width="1.6" marker-end="url(#ls2)"/>`).join("")}
  <path d="M380 136L330 104" stroke="#c2413b" stroke-width="2.4" marker-end="url(#ls2r)"/><path d="M460 136L510 104" stroke="#c2413b" stroke-width="2.4" marker-end="url(#ls2r)"/>
  ${T(420, 150, "TRACCIONES en el plano medio", "small2 ko", "middle")}
  ${T(420, 180, "superficie no desarrollable → se estira", "small2", "middle")}
  ${T(420, 198, "≈ «acción de cable» en dos dimensiones", "small2 tb", "middle")}
  ${T(420, 222, "con bordes impedidos: MUCHO mayor", "small2 ok2", "middle")}`, "Reserva de resistencia: líneas de articulación y acción de membrana") });

D.push({ sec: "t2-bi", h4: "Losas", img: "img/fig/t2-losa-articulacion.jpg", alt: "Líneas de articulación de una placa cuadrada, diapositiva 26", cap: "<b>Figura original (diap. 26)</b>: líneas de articulación de una placa cuadrada (las diagonales)." });
// 1) acción de placa = viga en x + viga en y + torsión (50 % en placa cuadrada)
D.push({ sec: "t2-bi", h4: "Losas", cap: "<b>Acción de placa</b> (diap. 25): la losa se comporta como infinitas vigas rígidamente unidas que trabajan en <b>dos direcciones</b> (flexión y cortante) y, además, como están unidas, se <b>retuercen</b>: los esfuerzos torsores aparecen distribuidos uniformemente. En una <b>placa cuadrada la torsión lleva el 50 % de la carga</b>. Por eso una losa es más eficiente que un emparrillado de vigas sueltas.",
  svg: W("0 0 560 210", `${MK("ls1")}
  <g transform="translate(20,50)">
    <rect x="0" y="0" width="100" height="100" fill="#f8fafc" stroke="#94a3b8"/>
    <rect x="0" y="38" width="100" height="24" fill="#93b4ec"/>
    ${T(50, -10, "viga en x", "small2 tb", "middle")}${T(50, 122, "flexión + cortante", "small2", "middle")}
  </g>
  ${T(140, 106, "+", "tb", "middle")}
  <g transform="translate(160,50)">
    <rect x="0" y="0" width="100" height="100" fill="#f8fafc" stroke="#94a3b8"/>
    <rect x="38" y="0" width="24" height="100" fill="#67c6dc"/>
    ${T(50, -10, "viga en y", "small2 tb", "middle")}${T(50, 122, "flexión + cortante", "small2", "middle")}
  </g>
  ${T(280, 106, "+", "tb", "middle")}
  <g transform="translate(300,50)">
    <rect x="0" y="0" width="100" height="100" fill="#f8fafc" stroke="#94a3b8"/>
    <path d="M18 30a14 14 0 1 1 0 20" fill="none" stroke="#c2413b" stroke-width="2.2" marker-end="url(#ls1r)"/>
    <path d="M82 70a14 14 0 1 1 0-20" fill="none" stroke="#c2413b" stroke-width="2.2" marker-end="url(#ls1r)"/>
    ${T(50, -10, "torsión", "small2 tb", "middle")}${T(50, 122, "las vigas se retuercen", "small2", "middle")}
  </g>
  ${T(420, 106, "=", "tb", "middle")}
  <g transform="translate(436,30)">
    <rect x="0" y="0" width="110" height="34" rx="8" fill="#1e40af"/>${T(55, 22, "ACCIÓN DE PLACA", "small2", "middle").replace('class="small2"', 'class="small2" fill="#fff" style="fill:#fff;font-weight:700"')}
    ${T(55, 60, "placa cuadrada:", "small2 tb", "middle")}
    <rect x="5" y="72" width="50" height="22" fill="#5a8be0"/><rect x="55" y="72" width="50" height="22" fill="#c2413b" opacity=".85"/>
    ${T(30, 87, "50 %", "small2", "middle").replace('class="small2"', 'class="small2" style="fill:#fff;font-weight:700"')}${T(80, 87, "50 %", "small2", "middle").replace('class="small2"', 'class="small2" style="fill:#fff;font-weight:700"')}
    ${T(30, 110, "flexión x-y", "small2", "middle")}${T(80, 110, "torsión", "small2 ko", "middle")}
    ${T(55, 132, "de la carga aplicada", "small2 mut", "middle")}
  </g>`, "Acción de placa: viga en x más viga en y más torsión") });

D.push({ sec: "t2-bi", h4: "Losas", img: "img/fig/t2-losa-placa.jpg", alt: "Acción de placa, diapositiva 25", cap: "<b>Figura original (diap. 25)</b>: acción de placa en una dirección (ídem en la perpendicular). Las franjas alabeadas transmiten carga por torsión; la central, sin alabeo, solo por flexión." });
D.forEach(d => window.DIAGRAMS.push(d));
})();
