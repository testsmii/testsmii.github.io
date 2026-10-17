/* =====================================================================
   DIAGRAMAS (SVG) que ilustran los conceptos de los apuntes.
   Se insertan en las lecciones y en el temario: { sec, h4, svg, cap }
   h4 = texto (parcial) del subtítulo donde se coloca; null = inicio.
   ===================================================================== */
(function () {
const W = (vb, body, label) => `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;
const T = (x, y, s, cls = "", anchor = "start") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${s}</text>`;
const arrowDefs = `<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="ah"/></marker><marker id="arR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c2413b"/></marker></defs>`;
function normal(mu, sd, amp, x0, x1, base) {
  let d = ""; for (let x = x0; x <= x1; x += 2) { const y = base - amp * Math.exp(-0.5 * ((x - mu) / sd) ** 2); d += (d ? "L" : "M") + x + " " + y.toFixed(1); } return d;
}
function normalArea(mu, sd, amp, x0, x1, base) { return normal(mu, sd, amp, x0, x1, base) + `L${x1} ${base}L${x0} ${base}Z`; }

const D = [];

/* ---------- T1 ---------- */
D.push({ sec: "t1-requisitos", h4: "Cálculo elástico y plástico", cap: "Diagrama momento-curvatura de una sección. El cálculo elástico se queda en M<sub>y</sub>; el plástico aprovecha la reserva hasta M<sub>p</sub> (rótula plástica), por eso da secciones menores.",
  svg: W("0 0 520 230", `${arrowDefs}
  <path class="ax" d="M50 200V20M50 200H500" marker-end="url(#ar)"/>
  <path class="fl" d="M170 108 C 215 80, 245 66, 300 62 L480 60 L480 108Z" opacity=".7"/>
  <path class="ln" d="M50 200L170 108 C 215 80, 245 66, 300 62 L480 60"/>
  <path class="dash" d="M50 108H480M50 60H480"/>
  ${T(58, 102, "M<tspan baseline-shift='sub' font-size='9'>y</tspan> · fin del rango elástico", "mut")}${T(58, 54, "M<tspan baseline-shift='sub' font-size='9'>p</tspan> · momento plástico", "mut")}
  ${T(330, 92, "reserva plástica", "tb")}
  ${T(95, 175, "elástico lineal", "small2")}
  ${T(36, 26, "M", "tb", "end")}${T(500, 218, "curvatura φ", "tb", "end")}`, "Diagrama momento-curvatura") });

D.push({ sec: "t1-metodos", h4: "Base probabilista", cap: "Solicitación S y resistencia R son variables aleatorias. La zona en que se solapan (R &lt; S) representa la probabilidad de fallo p<sub>f</sub>; la fiabilidad es 1 − p<sub>f</sub>.",
  svg: W("0 0 520 220", `
  <path class="ax" d="M30 190H500"/>
  <path class="fl" d="${normalArea(190, 42, 140, 60, 340, 190)}" opacity=".55"/>
  <path class="fl3" d="${normalArea(330, 48, 125, 180, 480, 190)}" opacity=".55"/>
  <path fill="#c2413b" opacity=".55" d="${(() => { let d = "M250 190"; for (let x = 250; x <= 290; x += 2) { const y1 = 190 - 140 * Math.exp(-0.5 * ((x - 190) / 42) ** 2), y2 = 190 - 125 * Math.exp(-0.5 * ((x - 330) / 48) ** 2); d += `L${x} ${Math.max(y1, y2).toFixed(1)}`; } return d + "L290 190Z"; })()}"/>
  <path class="ln" d="${normal(190, 42, 140, 60, 340, 190)}"/>
  <path class="ln3" d="${normal(330, 48, 125, 180, 480, 190)}"/>
  ${T(190, 40, "S · solicitación", "tb", "middle")}${T(330, 55, "R · resistencia", "tb", "middle")}
  ${T(270, 212, "p<tspan baseline-shift='sub' font-size='9'>f</tspan> (R &lt; S)", "ko", "middle")}
  <path d="M270 198L270 182" stroke="#c2413b" stroke-width="1.5"/>`, "Distribuciones de solicitación y resistencia") });

D.push({ sec: "t1-metodos", h4: "Valores característicos", cap: "Valor característico: 5 % de probabilidad de una resistencia menor (cola izquierda de R) o de una acción mayor (cola derecha de S). Los coeficientes parciales los alejan aún más: R<sub>d</sub> = R<sub>k</sub>/γ<sub>m</sub> y S<sub>d</sub> = γ<sub>f</sub>·S<sub>k</sub>, y se comprueba R<sub>d</sub> ≥ S<sub>d</sub>.",
  svg: W("0 0 520 230", `${arrowDefs}
  <path class="ax" d="M20 180H505"/>
  <path class="fl" d="${normalArea(150, 38, 120, 30, 290, 180)}" opacity=".45"/>
  <path class="fl3" d="${normalArea(370, 40, 112, 240, 500, 180)}" opacity=".45"/>
  <path class="fl" d="${normalArea(150, 38, 120, 213, 290, 180)}"/>
  <path class="fl3" d="${normalArea(370, 40, 112, 240, 305, 180)}"/>
  <path class="ln" d="${normal(150, 38, 120, 30, 290, 180)}"/><path class="ln3" d="${normal(370, 40, 112, 240, 500, 180)}"/>
  <path class="dash" d="M213 180V95M305 180V95"/>
  ${T(213, 88, "S<tspan baseline-shift='sub' font-size='9'>k</tspan>", "tb", "middle")}${T(305, 88, "R<tspan baseline-shift='sub' font-size='9'>k</tspan>", "tb", "middle")}
  ${T(232, 172, "5 %", "small2", "middle")}${T(285, 172, "5 %", "small2", "middle")}
  <path class="ln" d="M213 200H250" marker-end="url(#ar)"/><path class="ln3" d="M305 200H268" marker-end="url(#ar)"/>
  ${T(150, 204, "S<tspan baseline-shift='sub' font-size='9'>d</tspan> = γ<tspan baseline-shift='sub' font-size='9'>f</tspan>·S<tspan baseline-shift='sub' font-size='9'>k</tspan> →", "small2", "middle")}${T(380, 204, "← R<tspan baseline-shift='sub' font-size='9'>d</tspan> = R<tspan baseline-shift='sub' font-size='9'>k</tspan>/γ<tspan baseline-shift='sub' font-size='9'>m</tspan>", "small2", "middle")}
  ${T(150, 50, "Acción S", "tb", "middle")}${T(370, 58, "Resistencia R", "tb", "middle")}`, "Valores característicos y de cálculo") });

D.push({ sec: "t1-el", h4: "Cálculo mediante estados límite", cap: "Proceso de cálculo por estados límite (apuntes T1, diap. 27).",
  svg: W("0 0 560 170", `${arrowDefs}
  ${[["Acción", "normalizada", 10], ["Estructura", "idealización", 140], ["Respuesta", "esfuerzos, desplaz.", 270]].map(([a, b, x]) => `<rect class="box" x="${x}" y="40" width="110" height="54" rx="10"/>${T(x + 55, 63, a, "tb", "middle")}${T(x + 55, 80, b, "small2", "middle")}`).join("")}
  <path class="ln" d="M120 67H136M250 67H266M380 67H400" marker-end="url(#ar)"/>
  <path class="box" d="M455 30L510 67L455 104L400 67Z"/>${T(455, 64, "¿Cumple", "tb", "middle")}${T(455, 78, "criterios?", "tb", "middle")}
  <path class="ln" d="M510 67H545V130" marker-end="url(#ar)"/>${T(528, 60, "Sí", "ok2")}
  ${T(545, 150, "Aceptación", "tb", "end")}
  <path class="ln" stroke-dasharray="5 4" d="M455 104V140H195V98" marker-end="url(#ar)"/>${T(325, 158, "No → se modifica la estructura", "ko", "middle")}`, "Diagrama de flujo del cálculo por estados límite") });

/* ---------- T2 ---------- */
D.push({ sec: "t2-intro", h4: "Escala", cap: "Ley de escala (Galileo): al multiplicar las dimensiones por λ, el peso crece con λ³ y la sección resistente solo con λ². Por eso las estructuras grandes no pueden ser simples ampliaciones.",
  svg: W("0 0 520 230", `${arrowDefs}
  <path class="ax" d="M50 200V20M50 200H490" marker-end="url(#ar)"/>
  <path class="grid" d="M50 140H480M50 80H480"/>
  <path class="ln" d="${(() => { let d = ""; for (let l = 1; l <= 3.001; l += .05) { const x = 50 + (l - 1) * 210, y = 200 - (l ** 3 - 1) * 6.9; d += (d ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); } return d; })()}"/>
  <path class="ln3" d="${(() => { let d = ""; for (let l = 1; l <= 3.001; l += .05) { const x = 50 + (l - 1) * 210, y = 200 - (l ** 2 - 1) * 6.9; d += (d ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1); } return d; })()}"/>
  ${T(440, 30, "peso ∝ λ³", "tb", "end")}${T(470, 135, "resistencia ∝ λ²", "tb", "end")}
  ${T(50, 216, "1", "mut", "middle")}${T(260, 216, "2", "mut", "middle")}${T(470, 216, "3", "mut", "middle")}${T(490, 200, "λ", "tb")}`, "Peso frente a resistencia según la escala") });

D.push({ sec: "t2-mono", h4: "Cables", cap: "Formas de equilibrio de un cable: con una carga, flecha óptima D/2; con varias cargas, polígono funicular; con muchas cargas, parábola (cargas uniformes en horizontal) o catenaria (uniformes a lo largo del cable), ambas con flecha óptima ≈ D/3. Invertido, el cable da el arco funicular, que trabaja solo a compresión.",
  svg: W("0 0 560 210", `${arrowDefs}
  <g transform="translate(10,20)"><path class="ax" d="M0 20H120"/><path class="ln" d="M0 20L60 80L120 20"/><path class="ah2" d="M60 80V110" marker-end="url(#ar)"/>
  <path class="dash" d="M135 20V80"/>${T(140, 55, "D/2", "small2")}${T(60, 150, "1 carga", "tb", "middle")}</g>
  <g transform="translate(165,20)"><path class="ax" d="M0 20H120"/><path class="ln" d="M0 20L30 58L60 70L90 58L120 20"/>
  ${[30, 60, 90].map(x => `<path class="ah2" d="M${x} ${x === 60 ? 70 : 58}V${x === 60 ? 96 : 84}" marker-end="url(#ar)"/>`).join("")}${T(60, 150, "polígono funicular", "tb", "middle")}</g>
  <g transform="translate(310,20)"><path class="ax" d="M0 20H120"/>
  <path class="ln" d="${(() => { let d = ""; for (let x = 0; x <= 120; x += 4) { const y = 20 + 40 * (1 - ((x - 60) / 60) ** 2); d += (d ? "L" : "M") + x + " " + y.toFixed(1); } return d; })()}"/>
  <path class="ln3" stroke-dasharray="4 3" d="${(() => { let d = ""; const a = 48; const c0 = Math.cosh(60 / a); for (let x = 0; x <= 120; x += 4) { const y = 20 + 40 * (c0 - Math.cosh((x - 60) / a)) / (c0 - 1); d += (d ? "L" : "M") + x + " " + y.toFixed(1); } return d; })()}"/>
  <path class="dash" d="M135 20V60"/>${T(140, 45, "≈D/3", "small2")}${T(60, 135, "parábola —", "small2", "middle")}${T(60, 150, "catenaria - -", "small2", "middle")}</g>
  <g transform="translate(455,20)"><path class="ax" d="M0 100H90"/>
  <path class="ln" d="${(() => { let d = ""; for (let x = 0; x <= 90; x += 3) { const y = 100 - 55 * (1 - ((x - 45) / 45) ** 2); d += (d ? "L" : "M") + x + " " + y.toFixed(1); } return d; })()}"/>
  ${T(45, 150, "arco funicular", "tb", "middle")}${T(45, 165, "(compresión)", "small2", "middle")}</g>
  ${T(70, 200, "D", "mut", "middle")}`, "Formas de un cable y arco funicular") });

D.push({ sec: "t2-mono", h4: "Vigas", cap: "En flexión la tensión normal crece linealmente desde la fibra neutra. En la sección rectangular solo las fibras extremas llegan a σ<sub>max</sub>; el perfil I lleva el material a las alas (que resisten la flexión) y deja el alma para el cortante.",
  svg: W("0 0 520 200", `
  <g transform="translate(40,20)"><rect class="sec" x="0" y="0" width="60" height="150"/>
  <path class="ax" d="M90 0V150M70 75H190"/><path class="fl" d="M90 0L150 0L90 75L30 150L90 150Z" transform="translate(0,0)" opacity="0"/>
  <path class="fl3" d="M90 0H150L90 75Z" opacity=".6"/><path class="fl" d="M90 150H30L90 75Z" opacity=".6"/>
  <path class="ln" d="M150 0L30 150"/>${T(155, 12, "+σ<tspan baseline-shift='sub' font-size='9'>max</tspan>", "small2")}${T(25, 165, "−σ<tspan baseline-shift='sub' font-size='9'>max</tspan>", "small2", "end")}
  ${T(30, -5, "Rectangular", "tb", "middle")}</g>
  <g transform="translate(300,20)"><path class="sec" d="M0 0H90V18H52V132H90V150H0V132H38V18H0Z"/>
  ${T(110, 14, "ala → flexión", "small2")}${T(110, 80, "alma → cortante", "small2")}${T(110, 146, "ala → flexión", "small2")}
  <path class="ah2" d="M95 10H105M95 140H105M60 75H105" stroke-width="1"/>${T(45, -5, "Perfil I", "tb", "middle")}</g>`, "Tensiones de flexión en sección rectangular y perfil I") });

D.push({ sec: "t2-edif", h4: "Sistemas para acciones horizontales", cap: "Deformada bajo carga horizontal. El pórtico se deforma sobre todo por cortante (la deriva entre plantas es mayor abajo); la pantalla trabaja como un voladizo y se deforma por flexión (la deriva es mayor arriba).",
  svg: W("0 0 520 262", `${arrowDefs}
  <g transform="translate(40,20)">
   ${[0, 1, 2, 3, 4].map(i => `<path class="ax" d="M0 ${200 - i * 45}H120" opacity="${i ? .35 : 1}"/>`).join("")}
   <path class="ax" opacity=".35" d="M0 200V20M120 200V20"/>
   <path class="ln" d="${(() => { let d = ""; for (let i = 0; i <= 4; i++) { const h = i / 4, u = 70 * (1 - (1 - h) ** 2); d += (d ? "L" : "M") + (u).toFixed(1) + " " + (200 - i * 45); } return d; })()}"/>
   <path class="ln" d="${(() => { let d = ""; for (let i = 0; i <= 4; i++) { const h = i / 4, u = 70 * (1 - (1 - h) ** 2); d += (d ? "L" : "M") + (120 + u).toFixed(1) + " " + (200 - i * 45); } return d; })()}"/>
   ${T(95, 225, "Pórtico · cortante", "tb", "middle")}</g>
  <g transform="translate(300,20)">
   <rect class="sec" x="0" y="20" width="30" height="180" opacity=".35"/>
   <path class="ln" d="${(() => { let d = ""; for (let i = 0; i <= 20; i++) { const h = i / 20, u = 80 * h * h * (3 - h) / 2; d += (d ? "L" : "M") + (15 + u).toFixed(1) + " " + (200 - h * 180).toFixed(1); } return d; })()}"/>
   <path class="ax" d="M-15 200H50"/>${T(60, 225, "Pantalla · flexión", "tb", "middle")}</g>
  ${[60, 110, 160].map(y => `<path class="ah2" d="M8 ${y}H34" marker-end="url(#ar)"/>`).join("")}`, "Deformada de pórtico y pantalla") });

D.push({ sec: "t2-civil", h4: "Deformaciones térmicas", cap: "Con un apoyo deslizante (estructura isostática) la viga dilata libremente: hay movimiento ΔL = L·α·ΔT pero no tensión. Si ambos extremos están fijos (hiperestática), la dilatación impedida produce una compresión ε<sub>m</sub> = −α·ΔT.",
  svg: W("0 0 520 200", `${arrowDefs}
  <g transform="translate(30,30)"><path class="beam" d="M0 30H200"/><path class="sup" d="M0 32l-10 18h20z"/><circle class="sup" cx="200" cy="40" r="8"/><path class="ax" d="M180 52H225"/>
  <path class="ln3" stroke-dasharray="5 4" d="M200 18H232" marker-end="url(#ar)"/>${T(240, 22, "ΔL", "tb")}${T(100, 85, "Isostática: se mueve, σ = 0", "tb", "middle")}</g>
  <g transform="translate(30,120)"><path class="beam" d="M0 30H200"/><path class="wall" d="M-8 5V55M208 5V55"/>
  <path class="ln" stroke="#c2413b" d="M60 30H20" marker-end="url(#arR)"/><path class="ln" stroke="#c2413b" d="M140 30H180" marker-end="url(#arR)" transform="rotate(180 160 30)"/>
  ${T(100, 70, "Hiperestática: N de compresión", "tb", "middle")}</g>
  <g transform="translate(330,40)"><rect class="box" x="0" y="0" width="170" height="120" rx="10"/>${T(85, 30, "Ejemplo de los apuntes", "tb", "middle")}
  ${T(85, 55, "L = 100 m, α = 10⁻⁵ ºC⁻¹", "small2", "middle")}${T(85, 75, "ΔT = 40 ºC", "small2", "middle")}${T(85, 97, "ΔL = 0,04 m", "tb", "middle")}${T(85, 113, "ε<tspan baseline-shift='sub' font-size='8'>m</tspan> = −0,0004", "small2", "middle")}</g>`, "Efecto térmico en estructuras isostáticas e hiperestáticas") });

D.push({ sec: "t2-ind", h4: null, cap: "Viga triangulada biapoyada con carga centrada. Si las diagonales bajan hacia el centro (tipo Pratt) trabajan a tracción; si suben hacia el centro (tipo Howe), a compresión. En la Warren se alternan. Es la idea de la pregunta 18 del examen PA1 2025.",
  svg: W("0 0 560 230", `
  ${[["Pratt · diagonales a tracción", 20, "t"], ["Howe · diagonales a compresión", 300, "c"]].map(([ttl, x0, k]) => {
    const w = 240, n = 6, dx = w / n, top = 50, bot = 110; let s = `<g transform="translate(${x0},0)"><path class="beam2" d="M0 ${top}H${w}M0 ${bot}H${w}"/>`;
    for (let i = 0; i <= n; i++) s += `<path class="beam2" d="M${i * dx} ${top}V${bot}"/>`;
    for (let i = 0; i < n; i++) { const left = i < n / 2; const down = k === "t" ? left : !left;
      const d = down ? `M${i * dx} ${top}L${(i + 1) * dx} ${bot}` : `M${i * dx} ${bot}L${(i + 1) * dx} ${top}`;
      const dd = left ? d : (k === "t" ? `M${i * dx} ${bot}L${(i + 1) * dx} ${top}` : `M${i * dx} ${top}L${(i + 1) * dx} ${bot}`);
      s += `<path d="${dd}" stroke="${k === "t" ? "#2563eb" : "#c2413b"}" stroke-width="3"/>`; }
    s += `<path class="sup" d="M0 112l-8 14h16z"/><path class="sup" d="M${w} 112l-8 14h16z"/><path stroke="#0f1f3d" stroke-width="2" d="M${w / 2} 112V140"/><path fill="#0f1f3d" d="M${w / 2 - 5} 136h10l-5 9z"/>`;
    return s + T(w / 2, 165, "P", "tb", "middle") + T(w / 2, 30, ttl, "tb", "middle") + "</g>"; }).join("")}
  <g transform="translate(20,190)"><path stroke="#2563eb" stroke-width="3" d="M0 10H24"/>${T(30, 14, "tracción", "small2")}<path stroke="#c2413b" stroke-width="3" d="M110 10H134"/>${T(140, 14, "compresión", "small2")}</g>`, "Esfuerzos en diagonales de cerchas Pratt y Howe") });

/* ---------- T2.3 ---------- */
D.push({ sec: "t23-sup", h4: "Estados límite de servicio", cap: "Asiento s de cada punto, asiento diferencial δs = s₂ − s₁ y distorsión angular β = δs/L (es lo que limita el CTE: 1/300, 1/500, 1/700…).",
  svg: W("0 0 520 190", `${arrowDefs}
  <path class="ax" opacity=".4" d="M40 50H480"/>
  <rect class="sec" x="80" y="58" width="60" height="20"/><rect class="sec" x="380" y="88" width="60" height="20"/>
  <path class="ln" d="M110 68L410 98" stroke-dasharray="6 4"/>
  <path class="ah2" d="M110 50V66" marker-end="url(#ar)"/>${T(118, 62, "s₁", "small2")}
  <path class="ah2" d="M410 50V96" marker-end="url(#ar)"/>${T(418, 75, "s₂", "small2")}
  <path class="dash" d="M110 140H410"/>${T(260, 158, "L", "tb", "middle")}
  ${T(260, 180, "β = δs / L = (s₂ − s₁) / L", "tb", "middle")}
  <path class="dash" d="M410 68V98"/>${T(455, 86, "δs", "tb")}`, "Asiento diferencial y distorsión angular") });

D.push({ sec: "t23-sup", h4: "Hundimiento", cap: "Criterio de Mohr-Coulomb: τ = c + σ·tg φ. El círculo A es seguro, el B toca la recta (estado límite) y el C la corta (estado imposible).",
  svg: W("0 0 520 220", `${arrowDefs}
  <path class="ax" d="M40 190H500M60 200V20" marker-end="url(#ar)"/>
  <path class="ln" d="M60 130L490 44"/>${T(486, 36, "τ = c + σ·tg φ", "tb", "end")}
  <path class="dash" d="M60 130H50"/>${T(48, 134, "c", "tb", "end")}
  ${(() => { const m = 0.2, cx = 300, d = (m * (cx - 60) + 60) / Math.sqrt(1 + m * m); const semi = (r, cls) => `<path class="${cls}" d="M${cx - r} 190A${r} ${r} 0 0 1 ${cx + r} 190"/>`; return semi(60, "circ") + semi(+d.toFixed(1), "circ2") + semi(140, "circ3") + T(cx, 182, "A", "tb", "middle") + T(cx - d + 12, 182, "B", "tb", "middle") + T(cx - 128, 182, "C", "ko", "middle"); })()}
  ${T(500, 210, "σ", "tb", "end")}${T(48, 26, "τ", "tb", "end")}`, "Círculos de Mohr y recta de Coulomb") });

D.push({ sec: "t23-sup", h4: "Zapatas rígidas y flexibles", cap: "Reparto de presiones bajo una zapata rígida de ancho L según la excentricidad e. Dentro del núcleo central (e ≤ L/6) toda la base está comprimida; fuera, parte de la base se despega y la presión se concentra en L₀ = 3(L/2 − e).",
  svg: W("0 0 560 220", `${arrowDefs}
  ${[["e < L/6", 0.10, 20], ["e = L/6", 1 / 6, 200], ["e > L/6", 0.25, 380]].map(([ttl, ef, x0]) => {
    const L = 150, N = 1; const e = ef * L; let poly;
    if (ef <= 1 / 6 + 1e-9) { const s1 = 1 + 6 * ef, s2 = 1 - 6 * ef; const k = 32; poly = `M0 80L0 ${80 + k * s2}L${L} ${80 + k * s1}L${L} 80Z`; }
    else { const L0 = 3 * (L / 2 - e); const smax = 4 / (3 * (1 - 2 * ef)); poly = `M${L - L0} 80L${L} ${80 + 32 * smax}L${L} 80Z`; }
    return `<g transform="translate(${x0},20)">${T(L / 2, 0, ttl, "tb", "middle")}<rect class="sec" x="0" y="55" width="${L}" height="25"/><rect class="sec" x="${L / 2 - 12}" y="20" width="24" height="35"/>
    <path class="ah2" d="M${L / 2 + e} 6V50" marker-end="url(#ar)"/>${T(L / 2 + e + 6, 22, "N", "small2")}
    <path class="fl" d="${poly}"/><path class="ln" d="${poly}" fill="none"/>
    ${ef > 1 / 6 ? `<path class="dash" d="M${L - 3 * (L / 2 - e)} 175H${L}"/>${T(L - 1.5 * (L / 2 - e), 190, "L₀", "small2", "middle")}` : `${T(L / 2, 175, ef === 1 / 6 ? "σ<tspan baseline-shift='sub' font-size='9'>min</tspan> = 0" : "trapecio", "small2", "middle")}`}</g>`; }).join("")}`, "Presiones bajo zapata rígida según la excentricidad") });

D.push({ sec: "t23-prof", h4: null, cap: "Carga de hundimiento de un pilote: R<sub>ck</sub> = R<sub>pk</sub> (punta) + R<sub>fk</sub> (fuste). El pilote «columna» trabaja sobre todo por punta, apoyado en un estrato resistente; el «flotante», por fuste. Con rozamiento negativo, el terreno que asienta más que el pilote lo carga hacia abajo.",
  svg: W("0 0 520 240", `${arrowDefs}
  <rect x="0" y="40" width="520" height="200" fill="#f3efe6"/><rect x="0" y="190" width="520" height="50" fill="#e3dccb"/>${T(510, 210, "estrato resistente", "small2", "end")}
  <g transform="translate(110,0)"><rect class="sec" x="0" y="30" width="26" height="165"/><path class="ah2" d="M13 0V26" marker-end="url(#ar)"/>${T(22, 14, "R<tspan baseline-shift='sub' font-size='9'>ck</tspan>", "tb")}
  ${[60, 95, 130, 165].map(y => `<path class="ln3" d="M-4 ${y + 12}V${y - 6}M30 ${y + 12}V${y - 6}" marker-end="url(#ar)"/>`).join("")}${T(-10, 115, "R<tspan baseline-shift='sub' font-size='9'>fk</tspan> fuste", "small2", "end")}
  <path class="ln" d="M13 228V200" marker-end="url(#ar)"/>${T(22, 226, "R<tspan baseline-shift='sub' font-size='9'>pk</tspan> punta", "small2")}${T(13, 58, "", "")}</g>
  <g transform="translate(330,0)"><rect class="sec" x="0" y="30" width="26" height="165"/>
  ${[60, 95].map(y => `<path stroke="#c2413b" stroke-width="2" d="M-4 ${y - 6}V${y + 12}M30 ${y - 6}V${y + 12}" marker-end="url(#arR)"/>`).join("")}
  ${[140, 170].map(y => `<path class="ln3" d="M-4 ${y + 12}V${y - 6}M30 ${y + 12}V${y - 6}" marker-end="url(#ar)"/>`).join("")}
  ${T(40, 82, "rozamiento negativo", "ko")}${T(40, 98, "(el terreno asienta más)", "small2")}</g>`, "Resistencia por punta y fuste de un pilote") });

D.push({ sec: "t23-cont", h4: "Estados de empuje", cap: "Coeficiente de empuje K según el movimiento del muro. Basta un desplazamiento muy pequeño hacia fuera para llegar al empuje activo (mínimo, K<sub>a</sub>); el pasivo (máximo, K<sub>p</sub>) exige desplazamientos mucho mayores contra el terreno. Sin movimiento, empuje en reposo K<sub>0</sub>.",
  svg: W("0 0 520 230", `${arrowDefs}
  <path class="ax" d="M260 210V20M30 190H500" marker-end="url(#ar)"/>
  <path class="ln" d="M60 162 C 160 162, 240 166, 250 150 C 255 142, 258 136, 260 130 C 300 90, 380 55, 490 40"/>
  <path class="dash" d="M30 162H250M260 130H230M260 40H490"/>
  ${T(36, 156, "K<tspan baseline-shift='sub' font-size='9'>a</tspan> activo (mín.)", "tb")}${T(225, 125, "K<tspan baseline-shift='sub' font-size='9'>0</tspan> reposo", "tb", "end")}${T(486, 34, "K<tspan baseline-shift='sub' font-size='9'>p</tspan> pasivo (máx.)", "tb", "end")}
  ${T(140, 208, "← el muro se aleja del terreno", "small2", "middle")}${T(380, 208, "el muro empuja contra el terreno →", "small2", "middle")}${T(268, 28, "K", "tb")}`, "Coeficiente de empuje frente al desplazamiento") });

/* ---------- T3 ---------- */
D.push({ sec: "t3-acero", h4: "Diagrama tensión-deformación", cap: "Acero de dureza natural: zona elástica, escalón de fluencia, endurecimiento hasta σ<sub>max</sub> (= f<sub>u</sub>) y estricción. En el diagrama ingenieril la tensión de rotura σ<sub>r</sub> es menor que σ<sub>max</sub>; la tensión verdadera sigue creciendo.",
  svg: W("0 0 520 240", `${arrowDefs}
  <path class="ax" d="M50 210V20M50 210H500" marker-end="url(#ar)"/>
  <path class="ln" d="M50 210L80 100L84 92L88 102L150 102 C 220 60, 300 48, 360 50 C 400 52, 430 70, 455 95"/>
  <path class="ln3" stroke-dasharray="5 4" d="M150 102 C 220 58, 300 40, 360 36 C 400 30, 430 24, 455 18"/>
  <circle cx="455" cy="95" r="4" fill="#c2413b"/>
  <path class="dash" d="M50 49H360M50 95H455M50 102H88"/>
  ${T(46, 53, "σ<tspan baseline-shift='sub' font-size='9'>max</tspan>", "tb", "end")}${T(46, 99, "σ<tspan baseline-shift='sub' font-size='9'>r</tspan>", "tb", "end")}${T(96, 90, "σ<tspan baseline-shift='sub' font-size='9'>e</tspan> / fluencia", "small2")}
  ${T(62, 190, "elástica", "small2")}${T(118, 120, "fluencia", "small2", "middle")}${T(255, 90, "endurecimiento", "small2", "middle")}${T(420, 120, "estricción", "small2", "middle")}${T(440, 14, "tensión verdadera", "small2", "end")}
  ${T(500, 228, "ε", "tb", "end")}${T(40, 26, "σ", "tb", "end")}`, "Diagrama tensión-deformación del acero") });

D.push({ sec: "t3-horm", h4: "Características reológicas", cap: "Bajo carga constante aplicada en t₀, el hormigón tiene una deformación instantánea σ/E y después una deformación diferida (fluencia) que crece con el tiempo de forma asintótica, φ(t,t₀)·σ/E₂₈. A mayor humedad relativa y mayor edad de puesta en carga, menos fluencia.",
  svg: W("0 0 520 220", `${arrowDefs}
  <path class="ax" d="M50 190V20M50 190H500" marker-end="url(#ar)"/>
  <path class="ln" d="M50 190H110V130 C 180 90, 260 66, 480 52"/>
  <path class="dash" d="M110 130H480"/>
  ${T(118, 160, "instantánea σ/E", "small2")}${T(330, 105, "diferida: fluencia", "tb")}${T(110, 205, "t₀", "tb", "middle")}
  ${T(500, 208, "t", "tb", "end")}${T(40, 26, "ε", "tb", "end")}`, "Deformación por fluencia en el tiempo") });

D.push({ sec: "t3-horm", h4: "Características mecánicas", cap: "Diagrama parábola-rectángulo de cálculo (f<sub>ck</sub> ≤ 50 MPa): parábola hasta ε<sub>c0</sub> = 0,002 y tramo constante f<sub>cd</sub> hasta ε<sub>cu</sub> = 0,0035.",
  svg: W("0 0 520 220", `${arrowDefs}
  <path class="ax" d="M50 190V20M50 190H500" marker-end="url(#ar)"/>
  <path class="fl" opacity=".5" d="${(() => { let d = "M50 190"; for (let e = 0; e <= 2.0001; e += .1) { const s = 1 - (1 - e / 2) ** 2; d += `L${50 + e * 120} ${190 - s * 130}`; } return d + "L470 60L470 190Z"; })()}"/>
  <path class="ln" d="${(() => { let d = "M50 190"; for (let e = 0; e <= 2.0001; e += .1) { const s = 1 - (1 - e / 2) ** 2; d += `L${(50 + e * 120).toFixed(1)} ${(190 - s * 130).toFixed(1)}`; } return d + "L470 60"; })()}"/>
  <path class="dash" d="M290 60V190M470 60V190M50 60H290"/>
  ${T(290, 206, "ε<tspan baseline-shift='sub' font-size='9'>c0</tspan> = 0,002", "small2", "middle")}${T(470, 206, "ε<tspan baseline-shift='sub' font-size='9'>cu</tspan> = 0,0035", "small2", "middle")}
  ${T(44, 64, "f<tspan baseline-shift='sub' font-size='9'>cd</tspan>", "tb", "end")}${T(160, 110, "parábola (n = 2)", "small2", "middle")}${T(380, 52, "rectángulo", "small2", "middle")}${T(40, 26, "σ<tspan baseline-shift='sub' font-size='9'>c</tspan>", "tb", "end")}`, "Diagrama parábola-rectángulo") });

D.push({ sec: "t3-suelo", h4: "Estructura de las arcillas", cap: "Estados de una arcilla según su humedad w y los límites de Atterberg: límite de retracción, límite plástico (PL) y límite líquido (LL).",
  svg: W("0 0 560 130", `${arrowDefs}
  ${[["Sólido", "#dbe5f5", 20, 110], ["Semisólido", "#c8d8f2", 130, 110], ["Plástico", "#a9c3ee", 240, 140], ["Semilíquido", "#86a9e6", 380, 150]].map(([n, c, x, w]) => `<rect x="${x}" y="30" width="${w}" height="44" fill="${c}"/>${T(x + w / 2, 57, n, "tb", "middle")}`).join("")}
  <path class="ax" d="M20 90H545" marker-end="url(#ar)"/>${T(545, 108, "humedad w", "small2", "end")}
  ${[[130, "L. retracción"], [240, "PL"], [380, "LL"]].map(([x, l]) => `<path class="ln" d="M${x} 24V96"/>${T(x, 18, l, "small2", "middle")}`).join("")}`, "Límites de Atterberg") });

D.push({ sec: "t3-suelo", h4: "Fases y agua en el suelo", cap: "Diagrama de fases: volumen de huecos V<sub>h</sub> = V<sub>a</sub> + V<sub>w</sub>. Índice de huecos e = V<sub>h</sub>/V<sub>s</sub>; porosidad n = V<sub>h</sub>/V<sub>m</sub> = e/(1+e); humedad w = W<sub>w</sub>/W<sub>s</sub>; saturación S = V<sub>w</sub>/V<sub>h</sub>.",
  svg: W("0 0 520 220", `
  <rect x="190" y="20" width="140" height="40" fill="#f4f7fb" stroke="#94a3b8"/><rect x="190" y="60" width="140" height="50" fill="#bfdbfe" stroke="#94a3b8"/><rect x="190" y="110" width="140" height="90" fill="#d6c7a8" stroke="#94a3b8"/>
  ${T(260, 45, "Aire", "tb", "middle")}${T(260, 90, "Agua", "tb", "middle")}${T(260, 160, "Sólido", "tb", "middle")}
  <path class="ax" d="M175 20V200M170 20H180M170 110H180M170 200H180M150 20V60M150 60V110M145 60H155"/>
  ${T(140, 44, "V<tspan baseline-shift='sub' font-size='9'>a</tspan>", "small2", "end")}${T(140, 90, "V<tspan baseline-shift='sub' font-size='9'>w</tspan>", "small2", "end")}${T(165, 70, "V<tspan baseline-shift='sub' font-size='9'>h</tspan>", "small2", "end")}${T(165, 160, "V<tspan baseline-shift='sub' font-size='9'>s</tspan>", "small2", "end")}
  ${T(110, 214, "volúmenes", "mut", "middle")}${T(410, 214, "pesos", "mut", "middle")}
  <path class="ax" d="M345 60V200M340 60H350M340 110H350M340 200H350"/>${T(355, 90, "W<tspan baseline-shift='sub' font-size='9'>w</tspan>", "small2")}${T(355, 160, "W<tspan baseline-shift='sub' font-size='9'>s</tspan>", "small2")}${T(355, 45, "W<tspan baseline-shift='sub' font-size='9'>a</tspan> ≈ 0", "small2")}`, "Diagrama de fases del suelo") });

D.push({ sec: "t3-suelo", h4: "Principio de Terzaghi", cap: "Perfiles de tensión total σ, presión intersticial u y tensión efectiva σ′ = σ − u con el nivel freático a profundidad H. Por encima de H, σ′ = γz; por debajo, la pendiente pasa a γ′ = γ<sub>sat</sub> − γ<sub>w</sub>.",
  svg: W("0 0 540 240", `${arrowDefs}
  ${[["σ total", 30, [[0, 0], [60, 70], [150, 200]]], ["u", 210, [[0, 0], [0, 70], [65, 200]]], ["σ′ efectiva", 380, [[0, 0], [60, 70], [95, 200]]]].map(([n, x0, pts]) => `<g transform="translate(${x0},20)">
    <path class="ax" d="M0 0H150M0 0V210" marker-end="url(#ar)"/>${T(75, -6, n, "tb", "middle")}
    <path class="fl" opacity=".5" d="M0 0${pts.map(p => `L${p[0]} ${p[1]}`).join("")}L0 200Z"/><path class="ln" d="M${pts.map(p => p[0] + " " + p[1]).join("L")}"/>
    <path class="water" d="M-6 70H150"/></g>`).join("")}
  ${T(22, 94, "H", "tb", "end")}${T(22, 228, "z", "tb", "end")}${T(95, 60, "γ", "small2")}${T(130, 150, "γ<tspan baseline-shift='sub' font-size='9'>sat</tspan>", "small2")}${T(255, 150, "γ<tspan baseline-shift='sub' font-size='9'>w</tspan>", "small2")}${T(450, 150, "γ′", "small2")}${T(445, 60, "γ", "small2")}
  ${T(200, 88, "nivel freático", "water-t")}`, "Perfiles de tensión total, presión intersticial y tensión efectiva") });

window.DIAGRAMS = D;
})();
