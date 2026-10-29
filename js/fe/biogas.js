/* Temas B3 y B4 · Biogás de aguas y residuos · Aspectos ambientales de la energía
   fuentes: FE_Tema3_2026.pdf (deck B3) y FE_Tema4_2025.pdf (deck B4) */

/* =====================================================================
   TEMA B3 · Generación de biogás a partir de residuos y aguas contaminadas
   ===================================================================== */
THEORY.B3 = {
  summary: [
    "<b>Metanización</b> = transformación biológica en la que microorganismos descomponen la materia orgánica y generan un gas (<b>biogás</b>) compuesto mayoritariamente por <b>CH<sub>4</sub> y CO<sub>2</sub></b>.",
    "Tres etapas: <b>hidrólisis</b> (fase limitante en sólidos) → <b>fermentación o acidogénesis</b> (acetato, H<sub>2</sub> y CO<sub>2</sub>) → <b>metanogénesis</b> (CH<sub>4</sub> y CO<sub>2</sub>). El <b>72 %</b> del metano procede del <b>ácido acético</b> y el <b>28 %</b> del <b>H<sub>2</sub></b>.",
    "Fuentes de biogás: <b>vertederos</b>, <b>EDAR</b> (líneas de agua y de fangos), <b>agricultura y ganadería</b>, <b>biorresiduos</b> urbanos e industriales y <b>codigestión</b>. Europa: <b>1.322</b> plantas de biometano en abril de 2023 (483 en 2018, 729 en 2020, 1.023 en 2021).",
    "En la línea de agua conviene el tratamiento <b>anaerobio</b> para aguas industriales de <b>alta carga</b> (DQO ≥ <b>2.000 mg/L</b>). Cargas: laguna 0,1-2; contacto 1-5,5; filtro 10-15; UASB 15-25; lecho fluidificado e <b>IC 30-40 kg DQO/m<sup>3</sup>·d</b>.",
    "Producción teórica de metano: <b>0,35 L CH<sub>4</sub>/g DQO</b> (0,27 g CH<sub>4</sub>/g glucosa = 0,38 L, dividido entre 1,06 g O<sub>2</sub>/g glucosa). Modelo de Tchobanoglous: $M=0{,}35\\,(nQC_i-1{,}42\\,v_gV)$.",
    "Proceso anaerobio: bajo consumo energético, poca producción de fangos, DBO<sub>5</sub>/N/P = <b>100/0,5/0,1</b>; pero necesita temperatura mesófila o termófila, arranque lento y elevada inversión, y a menudo un postratamiento aerobio.",
    "En la <b>línea de fangos</b> el digestor tiene como objetivo <b>estabilizar el fango</b> (disminuir su materia orgánica) y <b>generar biogás</b>, que puede aprovecharse en <b>cogeneración</b>.",
    "Residuos <b>fermentables</b> → tratamiento biológico: <b>metanización</b> o <b>compostaje</b>. Ecuación de <b>Buswell</b> para estimar CH<sub>4</sub>, CO<sub>2</sub>, NH<sub>3</sub> y H<sub>2</sub>S a partir de C<sub>x</sub>H<sub>y</sub>O<sub>z</sub>N<sub>w</sub>S.",
    "Digestión <b>húmeda</b> (sólidos ≤ 20 %) o <b>seca</b> (sólidos ≤ 40 %); temperatura <b>mesófila 35-40 ºC</b> o <b>termófila 55-60 ºC</b>; tiempo de reacción <b>8-25 días</b>; pH neutro y sin sales inhibidoras.",
    "En el vertedero el <b>único aprovechamiento</b> es el biogás de la materia orgánica cuando los residuos se cubren con tierra. Barrera natural: <b>K ≤ 10<sup>−9</sup> m/s</b> y espesor <b>≥ 1 m</b> (no peligrosos) o <b>≥ 5 m</b> (peligrosos).",
    "Modelo IPCC de vertedero: $k = 0{,}1$ año<sup>−1</sup>, $L_0 = COD\\cdot COD_F\\cdot F\\cdot 16/12$ con COD = 0,15 (materia orgánica) o 0,4 (papel y cartón), COD<sub>F</sub> = 0,55 y F = 0,5.",
    "Composición orientativa: gas de <b>digestor</b> 35-65 % CH<sub>4</sub> y PCI <b>22-26 MJ/Nm<sup>3</sup></b>; gas de <b>vertedero</b> 25-55 % CH<sub>4</sub> y <b>18-22 MJ/Nm<sup>3</sup></b>; gas natural 93,2 % CH<sub>4</sub> y 31-35 MJ/Nm<sup>3</sup>.",
    "Tratamiento del biogás: soplantes, compresores, <b>depuración</b> (partículas, humedad, H<sub>2</sub>S, CO<sub>2</sub>, haluros, NH<sub>3</sub>, siloxanos), <b>antorcha</b> (seguridad) y <b>gasómetro</b> (almacenamiento).",
    "Fuentes de <b>biometano</b>: <b>digestión anaerobia</b> + <i>upgrading</i>, y <b>gasificación</b> + limpieza + <b>metanación</b> (200-450 ºC, 30-70 bar) + <i>upgrading</i>."
  ],
  sections: [
    { id: "b3-fundamentos", title: "1. Fundamentos de la metanización", slides: ["B3", 1, 3], html: `
<p>El tema estudia la generación de biogás en la depuración del agua (líneas de agua y de fangos), en la gestión de residuos (valorización y eliminación), el tratamiento del biogás y las fuentes de biometano (diap. 1).</p>
<h4>Definición de metanización</h4>
<p><b>Metanización</b>: transformación biológica con microorganismos que descomponen la materia orgánica (MO) y generan gas. Este gas, el <b>biogás</b>, está compuesto <b>mayoritariamente por CO<sub>2</sub> y CH<sub>4</sub></b> (diap. 2).</p>
<h4>Etapas: hidrólisis, fermentación y metanogénesis</h4>
<table class="tbl cmp"><thead><tr><th>Etapa</th><th>Qué ocurre</th></tr></thead><tbody>
<tr><td>1º Hidrólisis</td><td>Lípidos, polisacáridos, proteínas, ácidos nucleicos y otros orgánicos se transforman en <b>compuestos sencillos</b>. Es la <b>fase limitante en sólidos</b>.</td></tr>
<tr><td>2º Fermentación (acidogénesis)</td><td>Los compuestos sencillos se transforman, mediante varias fases, en <b>acetato, hidrógeno y dióxido de carbono</b>.</td></tr>
<tr><td>3º Metanogénesis</td><td>Se forman <b>metano y dióxido de carbono</b>.</td></tr>
</tbody></table>
<h4>Rutas del carbono hasta el metano</h4>
<p>Según el esquema de la diap. 2, de los <b>orgánicos complejos</b>: el <b>76 %</b> pasa a ácidos orgánicos, el <b>20 %</b> directamente a ácido acético y el <b>4 %</b> a H<sub>2</sub>. De los ácidos orgánicos, el <b>52 %</b> va a ácido acético y el <b>24 %</b> a H<sub>2</sub>. Finalmente, el metano procede en un <b>72 %</b> del <b>ácido acético</b> y en un <b>28 %</b> del <b>H<sub>2</sub></b>.</p>
<div class="formula">$$\\mathrm{CH_3COOH \\rightarrow CH_4 + CO_2}\\qquad \\mathrm{CO_2 + 4H_2 \\rightarrow CH_4 + 2H_2O}$$</div>
<h4>Crecimiento microbiano y obtención de energía</h4>
<p>Materia orgánica + microorganismos + nutrientes dan <b>simultáneamente</b> nuevos microorganismos y energía (diap. 3). La curva de log(concentración de células) frente al tiempo muestra una fase inicial lenta, un crecimiento rápido, una meseta y un declive final.</p>
<div class="formula">$$\\mathrm{C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + E}\\qquad \\mathrm{C_6H_{12}O_6 \\rightarrow 3CO_2 + 3CH_4 + E}$$</div>
<p>La primera reacción es la vía aerobia; la segunda (resaltada en los apuntes) es la vía anaerobia que produce metano. Procesos: <b>aeróbicos</b>, <b>anaeróbicos</b> y <b>anóxicos</b>.</p>
` },
    { id: "b3-fuentes", title: "2. Fuentes de biogás y biometano en Europa", slides: ["B3", 4, 5], html: `
<h4>Orígenes del biogás</h4>
<table class="tbl cmp"><thead><tr><th>Origen</th><th>Biogás generado</th></tr></thead><tbody>
<tr><td>Vertederos</td><td>Biogás generado y <b>captado</b> de vertederos</td></tr>
<tr><td>Depuradoras de agua</td><td>Biogás generado en <b>EDAR</b> (líneas de agua y de fangos)</td></tr>
<tr><td>Agricultura y ganadería</td><td>En digestores a partir de residuos ganaderos y desechos agrícolas</td></tr>
<tr><td>Municipios e industrias</td><td>En digestores a partir de <b>biorresiduos</b> (urbanos e industriales)</td></tr>
</tbody></table>
<p>Las tres últimas fuentes (EDAR, agricultura-ganadería y biorresiduos) confluyen en el <b>biogás generado en digestores por codigestión de lodos, residuos y desechos</b> (diap. 4). El vertedero queda fuera de la codigestión.</p>
<h4>Mapa europeo del biometano (EBA, 2024)</h4>
<ul><li>Europa alcanzó <b>1.322 instalaciones</b> productoras de biometano en <b>abril de 2023</b>; de ellas, <b>1.174</b> fueron localizadas por la EBA y mostradas en el mapa.</li>
<li>Son <b>299 plantas más</b> que en el mapa de 2021: casi un <b>30 %</b> más.</li>
<li>Evolución de las plantas mostradas en el mapa: <b>483</b> (2018), <b>729</b> (2020) y <b>1.023</b> (2021).</li></ul>
` },
    { id: "b3-agua", title: "3. Biogás en la línea de agua", slides: ["B3", 6, 9], html: `
<h4>Cuándo conviene el tratamiento anaerobio</h4>
<p>Es recomendable el tratamiento <b>anaeróbico frente al aeróbico</b> cuando hay que depurar <b>aguas residuales industriales con alta carga orgánica</b> (recomendable una <b>DQO ≥ 2.000 mg/L</b>). Como las <b>retenciones hidráulica y celular</b> son, generalmente, <b>mayores</b> en los procesos anaerobios que en los aerobios convencionales, la biomasa está adaptada a la contaminación entrante y degrada más eficazmente los compuestos complejos de lenta biodegradación. También es recomendable cuando el biogás se usa para generar energía eléctrica (tamaño de instalación adecuado) (diap. 6).</p>
<h4>Sistemas y cargas orgánicas</h4>
<table class="tbl"><thead><tr><th>Sistema</th><th>Carga (kg DQO/m<sup>3</sup>·d)</th></tr></thead><tbody>
<tr><td>Laguna anaeróbica</td><td>0,1 - 2</td></tr><tr><td>Reactor anaeróbico de contacto</td><td>1 - 5,5</td></tr>
<tr><td>Filtro anaeróbico</td><td>10 - 15</td></tr><tr><td>UASB</td><td>15 - 25</td></tr>
<tr><td>Lecho fluidificado</td><td>30 - 40</td></tr><tr><td>IC (<i>Internal Circulation</i>)</td><td>30 - 40</td></tr>
</tbody></table>
<p>El reactor <b>IC</b> (diap. 7) tiene, de abajo arriba: sistema de distribución del influente, compartimento de <b>lecho expandido</b>, <b>1.<sup>er</sup> separador</b>, compartimento de pulido (<i>polishing</i>), <b>2.º separador</b> y tanque de desgasificación en cabeza. El gas recogido sube por el <i>riser</i> y el agua vuelve por el <i>downer</i> (circulación interna).</p>
<h4>Características del proceso anaerobio</h4>
<table class="tbl cmp"><thead><tr><th>Ventajas</th><th>Inconvenientes</th></tr></thead><tbody>
<tr><td>Bajo consumo energético y producción de biogás</td><td>Necesidad de temperatura mesófila o termófila</td></tr>
<tr><td>Pequeña producción de fangos</td><td>Arranque lento y complejo</td></tr>
<tr><td>Costes de operación bajos</td><td>Elevada inversión</td></tr>
<tr><td>Nutrientes DBO<sub>5</sub>/N/P = 100/0,5/0,1; permite desnitrificación simultánea</td><td>En muchos casos se necesita un tratamiento posterior para conseguir la calidad de vertido</td></tr>
</tbody></table>
<p>Ejemplo (diap. 8): tanque de recogida → <i>buffer tank</i> (670 m<sup>3</sup>) → tanque de preacidificación (670 m<sup>3</sup>) → <b>reactor IC</b> (500 m<sup>3</sup>, D = 6,5 m, H = 19,6 m, Q<sub>máx</sub> = 250 m<sup>3</sup>/h) → reactor aerobio <b>CIRCOX</b> (140 m<sup>3</sup>): una etapa anaerobia seguida de otra aerobia.</p>
<h4>Producción de metano</h4>
<p>Se estima de forma <b>experimental</b> (laboratorio y planta piloto) o <b>teórica</b> (diap. 9):</p>
<div class="formula">$$\\mathrm{C_6H_{12}O_6 \\rightarrow 3CO_2 + 3CH_4}:\\ \\frac{48}{180}=0{,}27\\ \\mathrm{g\\,CH_4/g\\ glucosa}\\ (=0{,}38\\ \\mathrm{L})$$</div>
<div class="formula">$$\\mathrm{C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O}:\\ \\frac{192}{180}=1{,}06\\ \\mathrm{g\\,O_2/g\\ glucosa}$$</div>
<p>16 g de metano ocupan 22,4 L en condiciones normales. Por tanto: $\\dfrac{0{,}38\\ \\text{L CH}_4/\\text{g glucosa}}{1{,}06\\ \\text{g DQO/g glucosa}}=\\mathbf{0{,}35}$ <b>L de metano por g de DQO</b>.</p>
<h4>Modelo de Tchobanoglous para mezcla completa</h4>
<div class="formula">$$M = 0{,}35\\,(n\\,Q\\,C_i - 1{,}42\\,v_g\\,V)$$</div>
<p>M: metano producido (m<sup>3</sup>/d); n: fracción de DQO transformada; Q: caudal tratado (m<sup>3</sup>/d); C<sub>i</sub>: DQO entrante (kg/m<sup>3</sup>); v<sub>g</sub>: velocidad de generación de biomasa (kg/m<sup>3</sup>·d); V: volumen de agua en el reactor (m<sup>3</sup>). El término 1,42·v<sub>g</sub>·V descuenta la DQO que se convierte en nueva biomasa en lugar de en metano.</p>
` },
    { id: "b3-fangos", title: "4. Biogás en la línea de fangos", slides: ["B3", 10, 12], html: `
<h4>Esquema de la línea de fangos</h4>
<p>El agua pasa por el <b>sedimentador primario</b> (1→3), el <b>tratamiento biológico</b> y el <b>sedimentador secundario</b>, del que sale el agua depurada. Del secundario salen <b>lodos a reciclo</b> (vuelven al biológico) y <b>lodos secundarios</b> (4), que se unen a los primarios (2) y van al <b>espesador</b> (5). El fango espesado (6) entra al <b>digestor</b>, del que salen <b>biogás</b> (8) y <b>fango digerido</b> (7). Los <b>sobrenadantes</b> del espesador y del digestor vuelven a cabecera (diap. 10).</p>
<h4>Objetivo del digestor</h4>
<p><b>Estabilizar el fango</b> (disminuir la masa de materia orgánica) y <b>generar biogás combustible</b>.</p>
<h4>Depuradora con estabilización aeróbica</h4>
<p>La diap. 11 muestra una EDAR con <b>pretratamiento</b> (obra de llegada, pozo de gruesos, elevación, desbaste, desarenado-desengrasado, medida de caudal), <b>primario</b> (decantación, Parshall), <b>secundario</b> (biológico, clarificación) y <b>terciario</b> (depósito, filtración, desinfección → agua a reutilización). Los fangos se estabilizan de forma <b>aerobia</b> → espesamiento → depósito tampón → secado → tolva: <b>no hay biogás</b>.</p>
<h4>Depuradora con digestión y cogeneración</h4>
<p>La diap. 12 muestra un <b>secundario de doble etapa</b> (biológico de <b>alta carga</b> + decantación, biológico de <b>baja carga</b> + clarificación) y la estabilización <b>anaerobia</b> de los fangos: tamizado → espesamiento por gravedad y por flotación → homogeneizado → <b>digestión primaria</b> y <b>secundaria</b> → secado → parque de fangos. El gas va al <b>gasómetro</b>, con <b>antorcha</b>, agitación del digestor con gas y <b>cogeneración</b> (energía eléctrica y circuito de agua caliente que calienta el digestor).</p>
` },
    { id: "b3-valorizacion", title: "5. Biogás en la valorización de residuos", slides: ["B3", 13, 16], html: `
<h4>Fermentables y no fermentables</h4>
<p>Los residuos <b>fermentables</b> van a <b>tratamiento biológico</b>: <b>metanización</b> o <b>compostaje</b>; los <b>no fermentables</b>, a otros tratamientos (diap. 13). Factores para decidir: zona agrícola, problemas de desertización, disponibilidad de agua, disponibilidad de espacio para instalaciones, zona de déficit energético, residuos complementarios, cantidad de residuos y dispersión, y poblaciones.</p>
<h4>Ecuación de Buswell</h4>
<p>Materia orgánica + microorganismos → <b>biogás + digestato</b> (diap. 14):</p>
<div class="formula">$$\\mathrm{C_xH_yO_zN_wS} + \\left(x-\\tfrac{y}{4}-\\tfrac{z}{2}+\\tfrac{3w}{4}+\\tfrac12\\right)\\mathrm{H_2O} \\rightarrow \\left(\\tfrac{x}{2}-\\tfrac{y}{8}+\\tfrac{z}{4}+\\tfrac{3w}{8}+\\tfrac14\\right)\\mathrm{CO_2} + \\left(\\tfrac{x}{2}+\\tfrac{y}{8}-\\tfrac{z}{4}-\\tfrac{3w}{8}-\\tfrac14\\right)\\mathrm{CH_4} + w\\,\\mathrm{NH_3} + \\mathrm{H_2S}$$</div>
<h4>Sistemas y requisitos de la digestión anaerobia</h4>
<table class="tbl cmp"><thead><tr><th>Sistema</th><th>Sólidos</th><th>Tecnologías (diap. 14)</th></tr></thead><tbody>
<tr><td>Vía húmeda</td><td>Baja concentración, <b>≤ 20 %</b></td><td>AVECON (mesófilo y termófilo), VAGRON (termófilo), BIGADAN (mesófilo), ENVITAL/ROS ROCA (mesófilo), HAASE (mesófilo), LINDE (ambos), BTA (ambos)</td></tr>
<tr><td>Vía seca</td><td>Alta concentración, <b>≤ 40 %</b></td><td>VALORGA (mesófilo), DRANCO (ambos), KOMPOGAS (termófilo), BIOCELL (termófilo), LINDE (ambos)</td></tr>
</tbody></table>
<p><b>Requisitos del proceso</b>: baja concentración de oxígeno; temperatura estable (mesófila o termófila); pH neutro; carga de sólidos constante; tiempo de reacción de <b>8 a 25 días</b>; agitación; alcalinidad adecuada; inexistencia de sales inhibidoras.</p>
<h4>Pretratamientos y reactores</h4>
<table class="tbl cmp"><thead><tr><th>Pretratamiento</th><th>Ejemplos (diap. 15)</th></tr></thead><tbody>
<tr><td>Mecánico</td><td>Maceración, trituración, homogeneización a alta presión</td></tr>
<tr><td>Térmico</td><td>Vapor, agua caliente</td></tr>
<tr><td>Químico</td><td>Ácidos, bases, ozono</td></tr>
<tr><td>Biológico</td><td>Bacterias, enzimas</td></tr>
</tbody></table>
<p>Reactores: temperatura <b>35-40 ºC</b> (mesófila) o <b>55-60 ºC</b> (termófila); volúmenes de ejemplo <b>2.500 m<sup>3</sup></b> y <b>1.000 m<sup>3</sup></b> (fotos de digestores verticales y de un digestor horizontal KOMPOGAS).</p>
<h4>Balance de masa de una fermentación seca</h4>
<p>Ejemplo de la diap. 16 (kg; digestión <b>mesófila</b>; sólidos totales a la entrada del reactor <b>25 %</b>): 1.000 kg de frutas, verduras y residuos de jardinería (600 agua, 400 ST, 200 SV) + 570 kg de agua recirculada → pretratamiento (salen 50 kg de impurezas) → <b>1.520 kg</b> al fermentador (1.140 agua, 380 ST, 190 SV) → <b>100 kg de biogás</b> → 1.420 kg → deshidratación (770 kg de agua a tratamiento) → 650 kg → postratamiento <b>aerobio</b> (160 kg de CO<sub>2</sub> + H<sub>2</sub>O) → <b>400 kg de compost</b>. Del tratamiento de aguas salen 200 kg de agua.</p>
` },
    { id: "b3-vertedero", title: "6. Biogás en la eliminación: vertederos", slides: ["B3", 17, 20], html: `
<h4>El vertedero como eliminación</h4>
<p>En los vertederos los residuos se depositan en superficie o cubriéndolos con tierra <b>sin que se aproveche su materia ni su contenido energético</b>. El <b>único aprovechamiento</b> es el del biogás generado en la metanización de la materia orgánica <b>cuando los residuos se cubren con tierra</b>. Tipos de vertedero: <b>peligrosos</b>, <b>no peligrosos</b> e <b>inertes</b> (diap. 17).</p>
<h4>Fases del metabolismo de un vertedero</h4>
<p>Las curvas de la diap. 17 muestran cuatro fases: al principio desaparecen el <b>O<sub>2</sub></b> y el <b>N<sub>2</sub></b> del aire atrapado; en la fase ácida suben el <b>CO<sub>2</sub></b> (máximo cercano al 90 %) y aparece <b>H<sub>2</sub></b>, mientras en el lixiviado se disparan la <b>DQO</b> y los <b>ácidos grasos volátiles (VFA)</b>; en la fase metanogénica estable el <b>CH<sub>4</sub></b> supera al CO<sub>2</sub> y el pH del lixiviado se estabiliza en <b>6-7</b>.</p>
<h4>Diseño, captación de gas e impermeabilización</h4>
<p>La gestión integral incluye diseño del vertedero y de la cubierta final, drenaje de aguas superficiales, sistema de recogida de gas (pozos, tuberías horizontales, colector principal, cabeceras de pozo), conversión del gas a electricidad o <b>antorcha</b>, recogida y tratamiento de <b>lixiviados</b> (sistema con terrazas, tubería perforada, geotextil, geomembrana) y control del medio ambiente (diap. 17-18).</p>
<table class="tbl"><thead><tr><th>Capa (de arriba abajo, diap. 19)</th><th>Requisito</th></tr></thead><tbody>
<tr><td>Capa de drenaje</td><td><b>≥ 0,5 m</b>, para recogida de lixiviados</td></tr>
<tr><td>Revestimiento artificial impermeable</td><td>Lámina bajo el drenaje</td></tr>
<tr><td>Barrera geológica artificial</td><td><b>≥ 0,5 m</b> (cuando la barrera natural no cumple)</td></tr>
<tr><td>Barrera geológica natural</td><td><b>K ≤ 10<sup>−9</sup> m/s</b>; espesor <b>≥ 1 m</b> en no peligrosos y <b>≥ 5 m</b> en peligrosos</td></tr>
</tbody></table>
<h4>Cálculo del metano generado (IPCC)</h4>
<div class="formula">$$G_t = \\frac{(1-e^{-k})^2}{k}\\sum_{i=t_0}^{t} R_i\\,L_0\\,e^{-k(t-i)}\\qquad L_0 = COD\\cdot COD_F\\cdot F\\cdot\\frac{16}{12}$$</div>
<p>G<sub>t</sub>: metano generado en el año t (t); t<sub>0</sub>: año de inicio de la actividad; <b>k = 0,1 año<sup>−1</sup></b>; R<sub>i</sub>: residuos depositados en el año i (t); L<sub>0</sub>: potencial de generación (t CH<sub>4</sub>/t residuo); <b>COD = 0,15</b> para la materia orgánica y <b>0,4</b> para papel y cartón (t C biodegradable/t residuo); <b>COD<sub>F</sub> = 0,55</b> (fracción del COD que se descompone en biogás); <b>F = 0,5</b> (fracción en volumen de CH<sub>4</sub> en el biogás). Fuente: IPCC <i>Good Practice Guidance</i>.</p>
<p>Ejemplo: materia orgánica → $L_0 = 0{,}15\\cdot0{,}55\\cdot0{,}5\\cdot16/12 = 0{,}055$ t CH<sub>4</sub>/t; papel y cartón → 0,147 t CH<sub>4</sub>/t.</p>
` },
    { id: "b3-tratamiento", title: "7. Composición y tratamiento del biogás", slides: ["B3", 20, 21], html: `
<h4>Composición orientativa de gases para motores</h4>
<table class="tbl cmp"><thead><tr><th>Gas</th><th>% S</th><th>% CH<sub>4</sub></th><th>% CO<sub>2</sub></th><th>% H<sub>2</sub></th><th>% HC C2-C4</th><th>PCI (MJ/Nm<sup>3</sup>)</th></tr></thead><tbody>
<tr><td>Natural</td><td>&lt; 0,001</td><td>93,2</td><td>-</td><td>&lt; 0,1</td><td>4,9</td><td>31-35</td></tr>
<tr><td>Digestor</td><td>0,01-0,04</td><td>35-65</td><td>30-40</td><td>-</td><td>-</td><td>22-26</td></tr>
<tr><td>Vertedero</td><td>0-0,02</td><td>25-55</td><td>45-75</td><td>-</td><td>-</td><td>18-22</td></tr>
</tbody></table>
<p>Fuente: <i>Lubricación y mantenimiento de los motores de gas</i>, Tekniker (diap. 20). El gas de vertedero tiene <b>menos metano y más CO<sub>2</sub></b> que el de digestor y, por eso, menor PCI.</p>
<h4>Equipos de la instalación</h4>
<ol type="a"><li><b>Soplantes</b> (desplazamiento positivo o centrífugas) → aspiración/impulsión.</li>
<li><b>Compresores</b>.</li>
<li><b>Depuración</b> (eliminación de partículas, humedad y compuestos gaseosos) → acondicionar al uso.</li>
<li><b>Sistemas de seguridad</b>: <b>antorcha</b> (foto de Valdemingómez, Madrid).</li>
<li><b>Almacenamiento</b>: <b>gasómetro</b>.</li></ol>
<h4>Depuración: qué se elimina y cómo</h4>
<table class="tbl cmp"><thead><tr><th>Contaminante</th><th>Tratamiento (diap. 21)</th></tr></thead><tbody>
<tr><td>Partículas</td><td>Ciclones o filtros</td></tr>
<tr><td>Humedad</td><td>Cambiadores de calor (placas o tubulares), adsorción</td></tr>
<tr><td>H<sub>2</sub>S</td><td>Tratamientos biológicos, filtros de <b>Fe<sub>2</sub>O<sub>3</sub></b> (&lt; 2.500 ppm), absorción química (<b>FeCl<sub>3</sub> y NaOH</b>)</td></tr>
<tr><td>CO<sub>2</sub></td><td>Absorción química con soluciones, adsorción y membranas</td></tr>
<tr><td>Haluros</td><td>Absorción química con soluciones <b>alcalinas</b></td></tr>
<tr><td>NH<sub>3</sub></td><td>Absorción química con soluciones <b>ácidas</b></td></tr>
<tr><td>Siloxanos</td><td>Adsorción con carbón activo o con gel de sílice, absorción química con disolventes orgánicos, refrigeración</td></tr>
</tbody></table>
` },
    { id: "b3-biometano", title: "8. Fuentes de biometano y gas de síntesis", slides: ["B3", 22, 23], html: `
<h4>Biometano por digestión anaerobia</h4>
<p>Las fuentes de biometano son la <b>digestión anaeróbica</b> y la <b>gasificación</b> (diap. 22, fuente: Gas for Climate, ECOFYS 2018). Por digestión: residuos → tanque de digestión → <b>biogás</b> (que puede dar electricidad y calor) y <b>fertilizante</b> (digestato); el biogás pasa por el <b><i>gas upgrading</i></b> y se obtiene <b>biometano</b> para la <b>red de gas</b> o como <b>combustible</b> de vehículos.</p>
<h4>Biometano por gasificación</h4>
<p>Residuos → <b>gasificador</b> → enfriamiento del gas → limpieza del gas → <b>metanación</b> → <i>gas upgrading</i> → biometano (red de gas o combustible).</p>
<p><b>Metanación</b> del gas de síntesis con catalizadores metálicos a bajas temperaturas (<b>200-450 ºC</b>) y presión <b>30-70 bar</b> (diap. 23):</p>
<div class="formula">$$\\mathrm{CO + 3H_2 \\rightarrow CH_4 + H_2O}\\qquad \\mathrm{CO_2 + 4H_2 \\rightarrow CH_4 + 2H_2O}$$</div>
<h4>Otros aprovechamientos del gas de síntesis</h4>
<table class="tbl cmp"><thead><tr><th>Producto</th><th>Proceso y condiciones</th><th>Reacción</th></tr></thead><tbody>
<tr><td>Biometano</td><td>Metanación, catalizadores metálicos, 200-450 ºC, 30-70 bar</td><td>$\\mathrm{CO + 3H_{2} \\rightarrow  CH_{4} + H_{2}O}$</td></tr>
<tr><td>Gasolinas y gasóleos</td><td><b>Fischer-Tropsch</b>, catalizadores metálicos, <b>150-350 ºC</b>, <b>10-40 bar</b></td><td>$\\mathrm{nCO + (n+m/2)H_{2} \\rightarrow  C_{n}H_{m} + nH_{2}O}$</td></tr>
<tr><td>Hidrógeno</td><td><b>Water-Gas Shift</b> (uno o más reactores en serie), catalizadores metálicos, <b>200-500 ºC</b></td><td>$\\mathrm{CO + H_{2}O \\rightarrow  H_{2} + CO_{2}}$</td></tr>
<tr><td>Metanol</td><td>Catalizadores metálicos, <b>250-400 ºC</b>, <b>50-350 bar</b></td><td>$\\mathrm{CO + 2H_{2} \\rightarrow  CH_{3}OH}$; $\\mathrm{CO_{2} + 3H_{2} \\rightarrow  CH_{3}OH + H_{2}O}$</td></tr>
</tbody></table>
` }
  ],
  confusions: [
    ["<b>Hidrólisis</b> vs <b>metanogénesis</b> como etapa limitante", "En residuos <b>sólidos</b> la etapa limitante es la <b>hidrólisis</b> (romper polímeros en compuestos sencillos). La metanogénesis es la última etapa, la que produce CH<sub>4</sub> y CO<sub>2</sub>."],
    ["Metano desde <b>acético (72 %)</b> vs desde <b>H<sub>2</sub> (28 %)</b>", "La vía mayoritaria es la acetoclástica (CH<sub>3</sub>COOH → CH<sub>4</sub> + CO<sub>2</sub>). Los porcentajes 76 / 20 / 4 son los repartos de los orgánicos complejos, no del metano."],
    ["<b>0,27 g CH<sub>4</sub>/g glucosa</b> vs <b>0,35 L CH<sub>4</sub>/g DQO</b>", "0,27 g (= 0,38 L) es por gramo de <b>glucosa</b>; al dividir entre 1,06 g O<sub>2</sub>/g glucosa se pasa a gramo de <b>DQO</b>: 0,35 L CH<sub>4</sub>/g DQO."],
    ["<b>UASB</b> (15-25) vs <b>IC</b> (30-40 kg DQO/m<sup>3</sup>·d)", "El IC y el lecho fluidificado soportan las mayores cargas (30-40); el filtro anaerobio 10-15; el reactor de contacto 1-5,5 y la laguna solo 0,1-2."],
    ["Digestión <b>húmeda</b> (≤ 20 % sólidos) vs <b>seca</b> (≤ 40 %)", "Ambas se definen por la concentración de sólidos. Ojo: el balance de fermentación seca de los apuntes entra al reactor con 25 % de ST, que supera el límite de la húmeda."],
    ["<b>Mesófila</b> (35-40 ºC) vs <b>termófila</b> (55-60 ºC)", "KOMPOGAS, BIOCELL y VAGRON son solo termófilos; VALORGA, BIGADAN, HAASE y ENVITAL/ROS ROCA solo mesófilos; LINDE, DRANCO, AVECON y BTA, ambos."],
    ["Gas de <b>digestor</b> vs gas de <b>vertedero</b>", "Digestor: 35-65 % CH<sub>4</sub>, 30-40 % CO<sub>2</sub>, PCI 22-26 MJ/Nm<sup>3</sup>. Vertedero: 25-55 % CH<sub>4</sub>, 45-75 % CO<sub>2</sub>, PCI 18-22 MJ/Nm<sup>3</sup>."],
    ["<b>Barrera natural</b> vs <b>artificial</b> del vertedero", "Natural: K ≤ 10<sup>−9</sup> m/s y ≥ 1 m (no peligrosos) o ≥ 5 m (peligrosos). Artificial: ≥ 0,5 m, solo cuando la natural no cumple. El drenaje de lixiviados también es ≥ 0,5 m."],
    ["<b>COD</b> vs <b>COD<sub>F</sub></b> vs <b>F</b>", "COD = carbono orgánico degradable del residuo (0,15 MO; 0,4 papel). COD<sub>F</sub> = fracción del COD que pasa a biogás (0,55). F = fracción en volumen de CH<sub>4</sub> en el biogás (0,5)."],
    ["Haluros (soluciones <b>alcalinas</b>) vs NH<sub>3</sub> (soluciones <b>ácidas</b>)", "Los haluros son ácidos y se absorben con álcalis; el amoniaco es básico y se absorbe con ácidos. El H<sub>2</sub>S usa Fe<sub>2</sub>O<sub>3</sub>, FeCl<sub>3</sub> y NaOH; los siloxanos, carbón activo o gel de sílice."],
    ["<b>Metanación</b> vs <b>Fischer-Tropsch</b> vs <b>metanol</b>", "Metanación 200-450 ºC y 30-70 bar; FT 150-350 ºC y 10-40 bar; metanol 250-400 ºC y 50-350 bar; WGS 200-500 ºC (sin presión indicada)."]
  ]
};

/* ---------- B3 · preguntas: fundamentos, fuentes y línea de agua ---------- */
L("B3", "b3-fundamentos", "Metanización", 1, "Según los apuntes, la metanización es…",
  ["una transformación biológica en la que microorganismos descomponen la materia orgánica y generan un gas compuesto mayoritariamente por CO₂ y CH₄",
   "una transformación termoquímica en la que la materia orgánica se descompone sin oxígeno y genera un gas compuesto mayoritariamente por CO y H₂",
   "una transformación biológica en la que microorganismos oxidan la materia orgánica y generan un gas compuesto mayoritariamente por CO₂ y H₂O",
   "una transformación catalítica en la que el gas de síntesis reacciona con hidrógeno y genera un gas compuesto mayoritariamente por CH₄ y H₂O"],
  0, "Metanización = transformación biológica con microorganismos; el biogás es mayoritariamente CO₂ + CH₄. La conversión termoquímica a CO + H₂ es la gasificación y la reacción catalítica con H₂ es la metanación del gas de síntesis.", "Apuntes B3, diap. 2");
L("B3", "b3-fundamentos", "Etapas", 2, "En la digestión anaerobia de residuos sólidos, la etapa que los apuntes señalan como limitante y lo que se forma en ella es…",
  ["la hidrólisis, en la que lípidos, polisacáridos, proteínas y ácidos nucleicos se transforman en compuestos sencillos",
   "la acidogénesis, en la que los compuestos sencillos se transforman, mediante varias fases, en acetato, hidrógeno y CO₂",
   "la metanogénesis, en la que el acetato y el hidrógeno se transforman en metano y dióxido de carbono",
   "la hidrólisis, en la que los compuestos sencillos se transforman, mediante varias fases, en acetato, hidrógeno y CO₂"],
  0, "La «fase limitante en sólidos» es la hidrólisis, que rompe las macromoléculas en compuestos sencillos. Formar acetato, H₂ y CO₂ es propio de la fermentación (acidogénesis).", "Apuntes B3, diap. 2");
L("B3", "b3-fundamentos", "Rutas del metano", 3, "Según el esquema de rutas de la metanización de los apuntes, el metano producido procede…",
  ["en un 72 % del ácido acético y en un 28 % del hidrógeno",
   "en un 76 % de los ácidos orgánicos y en un 24 % del hidrógeno",
   "en un 52 % del ácido acético y en un 48 % del hidrógeno",
   "en un 28 % del ácido acético y en un 72 % del hidrógeno"],
  0, "El 72 % del CH₄ sale del acético (CH₃COOH → CH₄ + CO₂) y el 28 % del H₂ (CO₂ + 4H₂ → CH₄ + 2H₂O). El 76 % y el 24 % son repartos intermedios (orgánicos complejos → ácidos orgánicos; ácidos orgánicos → H₂).", "Apuntes B3, diap. 2");
L("B3", "b3-fundamentos", "Rutas del metano", 3, "En el esquema de rutas de la metanización, ¿qué porcentaje de los orgánicos complejos pasa directamente a ácido acético sin pasar por los ácidos orgánicos?",
  ["20 %", "4 %", "52 %", "24 %"],
  0, "De los orgánicos complejos: 76 % → ácidos orgánicos, 20 % → ácido acético directamente y 4 % → H₂. El 52 % y el 24 % salen de los ácidos orgánicos hacia el acético y el H₂, respectivamente.", "Apuntes B3, diap. 2");
L("B3", "b3-fundamentos", "Reacciones metanogénicas", 2, "¿Cuál de estas reacciones aparece en los apuntes como formación de metano a partir de hidrógeno?",
  ["$\\mathrm{CO_2 + 4H_2 \\rightarrow CH_4 + 2H_2O}$", "$\\mathrm{CO + 3H_2 \\rightarrow CH_4 + H_2O}$", "$\\mathrm{CH_3COOH \\rightarrow CH_4 + CO_2}$", "$\\mathrm{CO + H_2O \\rightarrow H_2 + CO_2}$"],
  0, "En la metanogénesis el H₂ reduce el CO₂: CO₂ + 4H₂ → CH₄ + 2H₂O. CO + 3H₂ es la metanación catalítica del gas de síntesis, el acético da la vía acetoclástica y CO + H₂O es la reacción de desplazamiento (WGS).", "Apuntes B3, diap. 2 y 23");
L("B3", "b3-fundamentos", "Crecimiento y energía", 2, "Respecto al metabolismo microbiano de la diap. 3, señale la afirmación correcta:",
  ["Materia orgánica, microorganismos y nutrientes producen simultáneamente nuevos microorganismos y energía; la glucosa da 3CO₂ + 3CH₄ en la vía anaerobia",
   "Materia orgánica, microorganismos y nutrientes producen primero nuevos microorganismos y, solo después, energía; la glucosa da 3CO₂ + 3CH₄ en la vía anaerobia",
   "Materia orgánica, microorganismos y nutrientes producen simultáneamente nuevos microorganismos y energía; la glucosa da 6CO₂ + 6CH₄ en la vía anaerobia",
   "Materia orgánica, microorganismos y nutrientes producen simultáneamente nuevos microorganismos y energía; la glucosa da 3CO₂ + 3CH₄ en la vía anóxica"],
  0, "La diap. 3 indica «simultáneamente» y escribe C₆H₁₂O₆ → 3CO₂ + 3CH₄ + E (anaerobia), frente a la vía aerobia con 6O₂ → 6CO₂ + 6H₂O. La vía anóxica es un tipo de proceso distinto.", "Apuntes B3, diap. 3");
L("B3", "b3-fuentes", "Orígenes del biogás", 2, "En el esquema de fuentes de biogás de los apuntes, ¿qué origen NO confluye en el «biogás generado en digestores por codigestión de lodos, residuos y desechos»?",
  ["Los vertederos", "Las depuradoras de agua (EDAR)", "La agricultura y la ganadería", "Los biorresiduos de municipios e industrias"],
  0, "A la codigestión llegan flechas desde las EDAR (lodos), la agricultura-ganadería y los biorresiduos urbanos e industriales. El biogás de vertedero se genera y capta en el propio vertedero.", "Apuntes B3, diap. 4");
L("B3", "b3-fuentes", "Plantas de biometano", 2, "Según el European Biomethane Map 2024 de la EBA, en abril de 2023 Europa alcanzó…",
  ["1.322 instalaciones productoras de biometano, de las que 1.174 fueron localizadas en el mapa",
   "1.174 instalaciones productoras de biometano, de las que 1.023 fueron localizadas en el mapa",
   "1.322 instalaciones productoras de biometano, de las que 1.023 fueron localizadas en el mapa",
   "1.023 instalaciones productoras de biometano, de las que 729 fueron localizadas en el mapa"],
  0, "1.322 plantas en total en abril de 2023; 1.174 localizadas y mostradas en el mapa. 1.023 es el número del mapa de 2021 y 729 el de 2020.", "Apuntes B3, diap. 5");
L("B3", "b3-fuentes", "Evolución del biometano", 3, "Sobre la evolución del número de plantas de biometano mostradas en el mapa de la EBA, señale la opción correcta:",
  ["483 en 2018, 729 en 2020 y 1.023 en 2021; el mapa de 2024 añade 299 plantas, casi un 30 % más",
   "483 en 2018, 729 en 2020 y 1.023 en 2021; el mapa de 2024 añade 299 plantas, casi un 13 % más",
   "729 en 2018, 1.023 en 2020 y 1.174 en 2021; el mapa de 2024 añade 299 plantas, casi un 30 % más",
   "483 en 2018, 729 en 2020 y 1.023 en 2021; el mapa de 2024 añade 151 plantas, casi un 15 % más"],
  0, "Cifras de la diap. 5: 483 (2018), 729 (2020), 1.023 (2021) y 299 plantas nuevas (≈ 30 % más). Comprobación: 1.023 + 299 = 1.322.", "Apuntes B3, diap. 5");
L("B3", "b3-fuentes", "Biogás de EDAR", 1, "En las EDAR, según los apuntes, el biogás se genera…",
  ["tanto en la línea de agua como en la línea de fangos",
   "solo en la línea de fangos, en el digestor",
   "solo en la línea de agua, en reactores anaerobios",
   "solo en el tratamiento terciario de afino"],
  0, "El esquema de fuentes indica «biogás generado en EDARs (líneas de agua y de fangos)», y el tema dedica un apartado a cada línea.", "Apuntes B3, diap. 4");
L("B3", "b3-agua", "Cuándo usar anaerobio", 1, "Según los apuntes, el tratamiento anaerobio es recomendable frente al aerobio para aguas residuales industriales con alta carga orgánica, en concreto con una DQO…",
  ["≥ 2.000 mg/L", "≥ 200 mg/L", "≥ 20.000 mg/L", "≥ 2.000 g/L"],
  0, "La diap. 6 recomienda el anaerobio con DQO ≥ 2.000 mg/L.", "Apuntes B3, diap. 6");
L("B3", "b3-agua", "Por qué funciona mejor", 3, "¿Por qué, según los apuntes, la biomasa anaerobia degrada más eficazmente los compuestos complejos de lenta biodegradación?",
  ["Porque las retenciones hidráulica y celular son, generalmente, mayores que en los procesos aerobios convencionales y la biomasa se adapta a la contaminación entrante",
   "Porque las retenciones hidráulica y celular son, generalmente, menores que en los procesos aerobios convencionales y la biomasa se renueva más deprisa",
   "Porque las retenciones hidráulica y celular son siempre mayores que en los procesos aerobios y la temperatura termófila acelera la hidrólisis",
   "Porque la producción de fangos es mayor que en los procesos aerobios convencionales y la biomasa se adapta a la contaminación entrante"],
  0, "Los apuntes dicen «generalmente mayores» (no «siempre») retenciones hidráulica y celular, lo que adapta la biomasa a la contaminación. La producción de fangos del anaerobio es pequeña, no mayor.", "Apuntes B3, diap. 6");
L("B3", "b3-agua", "Cargas orgánicas", 2, "¿Qué sistemas anaerobios admiten la mayor carga orgánica volumétrica según la tabla de los apuntes (30-40 kg DQO/m<sup>3</sup>·d)?",
  ["El lecho fluidificado y el reactor IC", "El UASB y el reactor IC", "El filtro anaerobio y el lecho fluidificado", "El UASB y el filtro anaerobio"],
  0, "Lecho fluidificado e IC: 30-40. UASB: 15-25. Filtro anaerobio: 10-15.", "Apuntes B3, diap. 6");
L("B3", "b3-agua", "Cargas orgánicas", 3, "Señale la pareja sistema–carga (kg DQO/m<sup>3</sup>·d) que NO coincide con la tabla de los apuntes:",
  ["UASB: 30 - 40", "Reactor anaeróbico de contacto: 1 - 5,5", "Filtro anaeróbico: 10 - 15", "Laguna anaeróbica: 0,1 - 2"],
  0, "El UASB trabaja a 15-25 kg DQO/m³·d; 30-40 corresponde al lecho fluidificado y al IC.", "Apuntes B3, diap. 6");
L("B3", "b3-agua", "Reactor IC", 2, "En el reactor IC (<i>Internal Circulation</i>) de los apuntes, el orden de abajo arriba de sus zonas es…",
  ["distribución del influente, lecho expandido, 1.ᵉʳ separador, compartimento de pulido, 2.º separador",
   "distribución del influente, compartimento de pulido, 1.ᵉʳ separador, lecho expandido, 2.º separador",
   "distribución del influente, lecho expandido, 2.º separador, compartimento de pulido, 1.ᵉʳ separador",
   "tanque de desgasificación, lecho expandido, 1.ᵉʳ separador, compartimento de pulido, 2.º separador"],
  0, "Abajo el sistema de distribución y el lecho expandido; encima el primer separador, después el compartimento de pulido (polishing) y el segundo separador; el tanque de desgasificación está en cabeza.", "Apuntes B3, diap. 7");
L("B3", "b3-agua", "Características", 3, "¿Cuál de estas afirmaciones sobre el proceso anaerobio de la línea de agua es FALSA según los apuntes?",
  ["Tiene un arranque rápido y sencillo, por lo que la inversión es moderada",
   "Permite la desnitrificación simultánea",
   "En muchos casos es necesario un tratamiento posterior para alcanzar la calidad de vertido",
   "Necesita temperatura mesófila o termófila"],
  0, "Los apuntes indican «arranque lento y complejo» y «elevada inversión». Las otras tres sí aparecen entre las características.", "Apuntes B3, diap. 8");
L("B3", "b3-agua", "Nutrientes", 2, "La relación de nutrientes DBO<sub>5</sub>/N/P que figura en las características del proceso anaerobio es…",
  ["100 / 0,5 / 0,1", "100 / 5 / 1", "100 / 0,5 / 1", "100 / 1 / 0,5"],
  0, "Los apuntes dan DBO₅/N/P = 100/0,5/0,1; las necesidades de nutrientes son bajas porque se produce poco fango.", "Apuntes B3, diap. 8");
L("B3", "b3-agua", "Esquema anaerobio + aerobio", 3, "En el esquema de proceso de la diap. 8 (una etapa anaerobia seguida de otra aerobia), el reactor IC y el posterior reactor aerobio son, respectivamente…",
  ["un IC de 500 m³ ($Q_{\\text{máx}}$ 250 m³/h) y un CIRCOX de 140 m³",
   "un IC de 670 m³ ($Q_{\\text{máx}}$ 250 m³/h) y un CIRCOX de 500 m³",
   "un IC de 140 m³ ($Q_{\\text{máx}}$ 500 m³/h) y un CIRCOX de 670 m³",
   "un IC de 500 m³ ($Q_{\\text{máx}}$ 140 m³/h) y un CIRCOX de 250 m³"],
  0, "IC: V = 500 m³, D = 6,5 m, H = 19,6 m, $Q_{\\text{máx}}$ = 250 m³/h. CIRCOX: V = 140 m³. Los 670 m³ son el buffer tank y el tanque de preacidificación.", "Apuntes B3, diap. 8");
L("B3", "b3-agua", "Producción teórica", 2, "La producción teórica de metano por unidad de DQO eliminada que deducen los apuntes es…",
  ["0,35 L CH₄/g DQO", "0,38 L CH₄/g DQO", "0,27 L CH₄/g DQO", "1,06 L CH₄/g DQO"],
  0, "Deducción de los apuntes (Apuntes B3, diap. 9) con la glucosa como sustrato modelo. Metano formado y oxígeno que equivale a su DQO: $$\\mathrm{C_6H_{12}O_6\\rightarrow3\\,CH_4+3\\,CO_2}\\Rightarrow0{,}27\\ \\tfrac{\\text{g CH}_4}{\\text{g glucosa}}\\equiv0{,}38\\ \\tfrac{\\text{L CH}_4}{\\text{g glucosa}}$$ $$\\mathrm{C_6H_{12}O_6+6\\,O_2\\rightarrow6\\,CO_2+6\\,H_2O}\\Rightarrow\\frac{6\\cdot32}{180}=1{,}06\\ \\tfrac{\\text{g O}_2}{\\text{g glucosa}}=1{,}06\\ \\tfrac{\\text{g DQO}}{\\text{g glucosa}}$$ $$\\frac{0{,}38\\ \\text{L CH}_4/\\text{g glucosa}}{1{,}06\\ \\text{g DQO/g glucosa}}=\\boxed{0{,}35\\ \\text{L CH}_4/\\text{g DQO}}$$ 0,38 L es por gramo de glucosa, 0,27 son gramos (no litros) de CH₄ y 1,06 es la DQO de la glucosa.", "Apuntes B3, diap. 9");
L("B3", "b3-agua", "Producción teórica", 3, "En la deducción de los 0,35 L CH<sub>4</sub>/g DQO, el factor 1,06 representa…",
  ["los gramos de oxígeno necesarios para oxidar completamente un gramo de glucosa (192/180)",
   "los gramos de metano producidos por gramo de glucosa degradada en condiciones anaerobias (48/180)",
   "los litros de metano que ocupa un gramo de metano en condiciones normales (22,4/16)",
   "los gramos de oxígeno necesarios para oxidar completamente un gramo de metano (64/16)"],
  0, "C₆H₁₂O₆ + 6O₂: 192 g O₂ por 180 g de glucosa = 1,06 g O₂/g, es decir, la DQO de la glucosa. 48/180 = 0,27 es el metano por gramo de glucosa.", "Apuntes B3, diap. 9");
L("B3", "b3-agua", "Modelo de Tchobanoglous", 3, "Un reactor anaerobio de mezcla completa trata Q = 100 m<sup>3</sup>/d con C<sub>i</sub> = 5 kg DQO/m<sup>3</sup>, n = 0,8, v<sub>g</sub> = 0,1 kg/m<sup>3</sup>·d y V = 500 m<sup>3</sup>. Según el modelo de Tchobanoglous, el metano producido es aproximadamente…",
  ["115 m³/d", "140 m³/d", "175 m³/d", "165 m³/d"],
  0, "Modelo de Tchobanoglous para un reactor de mezcla completa (Apuntes B3, diap. 9): el metano es 0,35 m³ por kg de DQO eliminada, descontando la DQO que pasa a biomasa (1,42 kg DQO por kg de biomasa). $$M=0{,}35\\,(n\\,Q\\,C_i-1{,}42\\,v_g\\,V)$$ $$n\\,Q\\,C_i=0{,}8\\cdot100\\cdot5=400\\ \\text{kg DQO/d}\\qquad1{,}42\\,v_gV=1{,}42\\cdot0{,}1\\cdot500=71\\ \\text{kg DQO/d}$$ $$M=0{,}35\\,(400-71)=0{,}35\\cdot329\\approx\\boxed{115\\ \\text{m}^3\\ \\text{CH}_4/\\text{d}}$$ Olvidar el término de biomasa da 140; sumarlo en lugar de restarlo, ≈ 165; usar n = 1 sin restar biomasa, 175.", "Apuntes B3, diap. 9");
L("B3", "b3-agua", "Modelo de Tchobanoglous", 2, "En el modelo de Tchobanoglous $M=0{,}35\\,(nQC_i-1{,}42\\,v_gV)$, el término $1{,}42\\,v_gV$ representa…",
  ["la DQO que se transforma en nueva biomasa y que, por tanto, no se convierte en metano",
   "la DQO que sale con el efluente sin haber sido degradada en el reactor",
   "el oxígeno consumido por la biomasa aerobia del postratamiento",
   "el metano que se pierde disuelto en el efluente del reactor"],
  0, "$v_{g}$ es la velocidad de generación de biomasa (kg/m³·d) y V el volumen: 1,42·$v_{g}$·V es la DQO equivalente de la biomasa producida, que se descuenta de la DQO transformada (n·Q·$C_{i}$).", "Apuntes B3, diap. 9");

/* ---------- B3 · preguntas: fangos, valorización y vertedero ---------- */
L("B3", "b3-fangos", "Objetivo del digestor", 1, "Según los apuntes, el objetivo del digestor de la línea de fangos es…",
  ["estabilizar el fango (disminuir la masa de materia orgánica) y generar biogás combustible",
   "espesar el fango (disminuir su contenido de agua) y generar biogás combustible",
   "estabilizar el fango (disminuir la masa de materia orgánica) y eliminar los nutrientes N y P",
   "higienizar el fango (eliminar patógenos) y recircular los lodos al tratamiento biológico"],
  0, "Objetivo del digestor (diap. 10): estabilizar el fango, es decir, reducir su materia orgánica, y generar biogás combustible. Reducir el agua es la función del espesador.", "Apuntes B3, diap. 10");
L("B3", "b3-fangos", "Esquema de la línea de fangos", 2, "En el esquema de la línea de fangos, ¿qué corrientes llegan al espesador antes del digestor?",
  ["Los lodos del sedimentador primario junto con los lodos secundarios del sedimentador secundario",
   "Solo los lodos secundarios, ya que los primarios se recirculan al tratamiento biológico",
   "Los lodos a reciclo del sedimentador secundario y el sobrenadante del digestor",
   "Solo los lodos primarios, porque los secundarios van directamente al digestor"],
  0, "Los lodos secundarios (4) se unen a los primarios (2) y van al espesador (5); el fango espesado (6) entra al digestor. Los lodos a reciclo vuelven al biológico y los sobrenadantes, a cabecera.", "Apuntes B3, diap. 10");
L("B3", "b3-fangos", "EDAR con estabilización aerobia", 2, "En la depuradora de la diap. 11 (con tratamiento terciario), los fangos…",
  ["se estabilizan de forma aerobia, se espesan, pasan por un depósito tampón y se secan, sin producir biogás",
   "se digieren de forma anaerobia en una etapa y el biogás se quema en antorcha sin aprovechamiento",
   "se estabilizan de forma aerobia y el biogás producido se almacena en un gasómetro",
   "se digieren de forma anaerobia en dos etapas y el biogás alimenta una cogeneración"],
  0, "La diap. 11 es una EDAR con estabilización aeróbica de fangos (estabilización aerobia → espesamiento → depósito tampón → secado → tolva): no hay digestor ni biogás. La digestión con cogeneración es la de la diap. 12.", "Apuntes B3, diap. 11");
L("B3", "b3-fangos", "Tratamiento terciario", 2, "En el esquema de EDAR de los apuntes, el tratamiento terciario está formado por…",
  ["depósito de agua, filtración, desinfección y depósito de agua para reutilización",
   "decantación, medida en canal Parshall, biológico y clarificación",
   "desbaste, desarenado-desengrasado, medida de caudal y arqueta de reparto",
   "espesamiento, depósito tampón, secado y tolva de fango deshidratado"],
  0, "Terciario: depósito, filtración, desinfección, depósito → agua a reutilización. Decantación y Parshall forman el primario; biológico y clarificación, el secundario; desbaste y desarenado, el pretratamiento; espesamiento y secado son la línea de fangos.", "Apuntes B3, diap. 11");
L("B3", "b3-fangos", "EDAR con digestión", 3, "En la depuradora de la diap. 12 (estabilización anaerobia con cogeneración), señale la afirmación correcta:",
  ["El secundario es de doble etapa (biológico de alta carga y de baja carga) y hay digestión primaria y secundaria; el calor de la cogeneración calienta el digestor",
   "El secundario es de una sola etapa de baja carga y hay digestión primaria y secundaria; el calor de la cogeneración se exporta a la red de calor",
   "El secundario es de doble etapa (biológico de alta carga y de baja carga) y hay una única digestión; el biogás se quema en antorcha de forma continua",
   "El secundario es de doble etapa con tratamiento terciario y estabilización aerobia de fangos; la electricidad se obtiene en un motor de gas natural"],
  0, "Diap. 12: biológico de alta carga + decantación y biológico de baja carga + clarificación; digestión primaria y secundaria; gasómetro, antorcha (seguridad), agitación con gas y cogeneración con circuito de agua caliente para calentar el fango.", "Apuntes B3, diap. 12");
L("B3", "b3-valorizacion", "Tratamiento biológico", 1, "Según los apuntes, los residuos fermentables se destinan a tratamiento biológico, que puede ser…",
  ["metanización o compostaje", "metanización o gasificación", "compostaje o incineración", "gasificación o pirólisis"],
  0, "Residuos fermentables → T. biológico → metanización o compostaje. Los no fermentables van a «otros tratamientos».", "Apuntes B3, diap. 13");
L("B3", "b3-valorizacion", "Ecuación de Buswell", 3, "Aplicando la ecuación de Buswell tal como figura en los apuntes a un sustrato C<sub>5</sub>H<sub>7</sub>O<sub>2</sub>NS (x = 5, y = 7, z = 2, w = 1), los moles de CH<sub>4</sub> y de CO<sub>2</sub> por mol de sustrato son…",
  ["2,25 de CH₄ y 2,75 de CO₂", "2,75 de CH₄ y 2,25 de CO₂", "2,50 de CH₄ y 2,50 de CO₂", "3,00 de CH₄ y 2,00 de CO₂"],
  0, "Ecuación de Buswell tal como figura en los apuntes (Apuntes B3, diap. 14), con x = 5, y = 7, z = 2 y w = 1: $$n_{CH_4}=\\frac{x}{2}+\\frac{y}{8}-\\frac{z}{4}-\\frac{3w}{8}-\\frac14=2{,}5+0{,}875-0{,}5-0{,}375-0{,}25=\\boxed{2{,}25}$$ $$n_{CO_2}=\\frac{x}{2}-\\frac{y}{8}+\\frac{z}{4}+\\frac{3w}{8}+\\frac14=2{,}5-0{,}875+0{,}5+0{,}375+0{,}25=\\boxed{2{,}75}$$ Comprobación: 2,25 + 2,75 = 5 = x, todo el carbono acaba en CH₄ o CO₂. La segunda opción intercambia los dos valores.", "Apuntes B3, diap. 14");
L("B3", "b3-valorizacion", "Húmeda y seca", 2, "En los sistemas de digestión anaerobia de residuos, la fermentación húmeda y la seca se caracterizan por una concentración de sólidos de…",
  ["≤ 20 % (húmeda) y ≤ 40 % (seca)", "≤ 10 % (húmeda) y ≤ 20 % (seca)", "≤ 20 % (húmeda) y ≥ 40 % (seca)", "≤ 40 % (húmeda) y ≤ 60 % (seca)"],
  0, "Húmeda: baja concentración de sólidos, ≤ 20 %. Seca: alta concentración, ≤ 40 %.", "Apuntes B3, diap. 14");
L("B3", "b3-valorizacion", "Requisitos del proceso", 3, "¿Cuál de los siguientes NO figura entre los requisitos del proceso de digestión anaerobia de los apuntes?",
  ["Tiempo de reacción de 25 a 40 días", "Alcalinidad adecuada", "Carga de sólidos constante", "Inexistencia de sales inhibidoras"],
  0, "El tiempo de reacción indicado es de 8 a 25 días. Los demás (alcalinidad adecuada, carga de sólidos constante, sin sales inhibidoras) sí están, junto con baja concentración de O₂, temperatura estable, pH neutro y agitación.", "Apuntes B3, diap. 14");
L("B3", "b3-valorizacion", "Tecnologías", 3, "Según la tabla de tecnologías de digestión de los apuntes, ¿cuáles son de vía seca y exclusivamente termófilas?",
  ["KOMPOGAS y BIOCELL", "VALORGA y DRANCO", "VAGRON y KOMPOGAS", "BIOCELL y LINDE"],
  0, "Vía seca: VALORGA (mesófilo), DRANCO (ambos), KOMPOGAS (termófilo), BIOCELL (termófilo) y LINDE (ambos). VAGRON es termófilo pero de vía húmeda.", "Apuntes B3, diap. 14");
L("B3", "b3-valorizacion", "Tecnologías", 3, "¿Qué tecnologías aparecen en los apuntes tanto en la vía húmeda como en la seca, o funcionando en régimen mesófilo y termófilo? (Puede haber varias correctas)",
  ["LINDE, que aparece en ambas vías y en régimen mesófilo y termófilo",
   "DRANCO, de vía seca, en régimen mesófilo y termófilo",
   "BIGADAN, de vía húmeda, en régimen mesófilo y termófilo",
   "VALORGA, que aparece en ambas vías en régimen mesófilo"],
  [0, 1], "LINDE figura en las dos columnas (mesófilo y termófilo) y DRANCO es seca, mesófila y termófila. BIGADAN es solo mesófilo y VALORGA solo aparece en la vía seca.", "Apuntes B3, diap. 14");
L("B3", "b3-valorizacion", "Pretratamientos", 2, "Según los apuntes, el ozono y la homogeneización a alta presión son, respectivamente, pretratamientos…",
  ["químico y mecánico", "químico y térmico", "biológico y mecánico", "térmico y químico"],
  0, "Mecánico: maceración, trituración, homogeneización a alta presión. Térmico: vapor, agua caliente. Químico: ácidos, bases, ozono. Biológico: bacterias, enzimas.", "Apuntes B3, diap. 15");
L("B3", "b3-valorizacion", "Temperaturas de los reactores", 2, "Los intervalos de temperatura de los reactores de metanización indicados en los apuntes son…",
  ["35-40 ºC y 55-60 ºC", "25-30 ºC y 45-50 ºC", "35-40 ºC y 65-70 ºC", "30-35 ºC y 50-55 ºC"],
  0, "Diap. 15: 35-40 ºC (mesófilo) y 55-60 ºC (termófilo).", "Apuntes B3, diap. 15");
L("B3", "b3-valorizacion", "Balance de fermentación seca", 3, "En el balance de masa de la fermentación seca de los apuntes (1.000 kg de frutas, verduras y residuos de jardinería, digestión mesófila), se obtienen…",
  ["100 kg de biogás y 400 kg de compost, con un 25 % de sólidos totales a la entrada del reactor",
   "100 kg de biogás y 650 kg de compost, con un 25 % de sólidos totales a la entrada del reactor",
   "160 kg de biogás y 400 kg de compost, con un 40 % de sólidos totales a la entrada del reactor",
   "100 kg de biogás y 400 kg de compost, con un 40 % de sólidos totales a la entrada del reactor"],
  0, "Biogás 100 kg; compost 400 kg (tras deshidratar y someter a postratamiento aerobio los 650 kg de digestato; 650 kg es lo que entra a ese postratamiento). Entrada al reactor: 380 ST / 1.520 kg = 25 %. El 40 % de ST es el residuo de partida (400/1.000).", "Apuntes B3, diap. 16");
L("B3", "b3-valorizacion", "Balance de fermentación seca", 3, "En ese mismo balance, ¿cuántos kg de sólidos volátiles (SV) se convierten en biogás y qué fracción de los SV que entran al fermentador representa?",
  ["100 kg, algo más del 50 % de los 190 kg de SV de entrada",
   "100 kg, el 25 % de los 400 kg de SV de entrada",
   "90 kg, algo menos del 50 % de los 190 kg de SV de entrada",
   "110 kg, algo menos del 60 % de los 190 kg de SV de entrada"],
  0, "Balance de sólidos volátiles de la fermentación seca (Apuntes B3, diap. 16): al fermentador entran 190 kg de SV y el biogás que sale (100 kg) procede de los SV degradados. $$SV_{\\to biogás}=190-90=100\\ \\text{kg}\\qquad\\frac{100}{190}=0{,}53\\Rightarrow\\boxed{\\approx53\\ \\%}$$ Algo más de la mitad de los SV de entrada. Los 400 kg son sólidos totales del residuo, no SV; 90 kg son los SV que quedan sin degradar.", "Apuntes B3, diap. 16");
L("B3", "b3-vertedero", "Aprovechamiento del vertedero", 2, "Según los apuntes, en un vertedero…",
  ["el único aprovechamiento es el biogás de la metanización de la materia orgánica cuando los residuos se cubren con tierra",
   "el único aprovechamiento es el biogás de la metanización de la materia orgánica, tanto si los residuos se cubren con tierra como si no",
   "se aprovecha el contenido energético de los residuos mediante su combustión controlada en celdas cubiertas con tierra",
   "se aprovechan la materia y el biogás de la metanización de la materia orgánica cuando los residuos se cubren con tierra"],
  0, "En el vertedero no se aprovecha ni la materia ni el contenido energético; el único aprovechamiento es el biogás generado cuando los residuos se cubren con tierra (condiciones anaerobias).", "Apuntes B3, diap. 17");
L("B3", "b3-vertedero", "Tipos de vertedero", 1, "Los tipos de vertedero que recogen los apuntes son…",
  ["peligrosos, no peligrosos e inertes", "urbanos, industriales y agrícolas", "peligrosos, urbanos y de construcción", "controlados, incontrolados e inertes"],
  0, "Diap. 17: peligrosos, no peligrosos e inertes.", "Apuntes B3, diap. 17");
L("B3", "b3-vertedero", "Fases del vertedero", 3, "Según las curvas de las fases del metabolismo de un vertedero de los apuntes, señale la opción correcta:",
  ["En la fase final estable el CH₄ supera al CO₂ y el pH del lixiviado se mantiene en torno a 6-7",
   "En la fase final estable el CO₂ supera al CH₄ y el pH del lixiviado se mantiene en torno a 4-5",
   "El máximo de DQO y de ácidos grasos volátiles del lixiviado coincide con la fase final de metano estable",
   "El H₂ alcanza su máximo en la fase final, cuando el O₂ y el N₂ del aire ya han desaparecido"],
  0, "En la fase IV el CH₄ (≈ 55-60 %) queda por encima del CO₂ y el lixiviado se estabiliza a pH 6-7. Los máximos de DQO, VFA y H₂ se dan en las fases intermedias (ácidas).", "Apuntes B3, diap. 17");
L("B3", "b3-vertedero", "Barrera geológica", 2, "Para la barrera geológica natural de un vertedero, los apuntes exigen…",
  ["K ≤ 10⁻⁹ m/s y espesor ≥ 1 m en no peligrosos y ≥ 5 m en peligrosos",
   "K ≤ 10⁻⁹ m/s y espesor ≥ 0,5 m en no peligrosos y ≥ 1 m en peligrosos",
   "K ≤ 10⁻⁷ m/s y espesor ≥ 1 m en no peligrosos y ≥ 5 m en peligrosos",
   "K ≥ 10⁻⁹ m/s y espesor ≥ 1 m en no peligrosos y ≥ 5 m en peligrosos"],
  0, "Barrera natural: permeabilidad K ≤ 10⁻⁹ m/s; ≥ 1 m (no peligrosos) y ≥ 5 m (peligrosos). Los 0,5 m corresponden a la capa de drenaje y a la barrera artificial.", "Apuntes B3, diap. 19");
L("B3", "b3-vertedero", "Capas de impermeabilización", 3, "Sobre el sistema de impermeabilización del fondo de un vertedero, señale la opción correcta:",
  ["La barrera geológica artificial (≥ 0,5 m) solo se dispone cuando la natural no cumple, y sobre ella van el revestimiento impermeable y la capa de drenaje (≥ 0,5 m)",
   "La barrera geológica artificial (≥ 1 m) se dispone siempre, y sobre ella van el revestimiento impermeable y la capa de drenaje (≥ 0,5 m)",
   "La barrera geológica artificial (≥ 0,5 m) solo se dispone cuando la natural no cumple, y sobre ella va la capa de drenaje y, encima, el revestimiento impermeable",
   "La capa de drenaje (≥ 0,5 m) se coloca bajo el revestimiento impermeable para recoger los lixiviados que lo atraviesan"],
  0, "De arriba abajo: masa de residuos, capa de drenaje ≥ 0,5 m (lixiviados), revestimiento artificial impermeable, barrera geológica artificial ≥ 0,5 m (cuando la natural no cumple) y barrera natural.", "Apuntes B3, diap. 19");
L("B3", "b3-vertedero", "Modelo IPCC", 2, "En el modelo IPCC de los apuntes, el potencial de generación de metano de la materia orgánica es…",
  ["$L_0 = 0{,}15\\cdot0{,}55\\cdot0{,}5\\cdot16/12 \\approx 0{,}055$ t CH₄/t residuo",
   "$L_0 = 0{,}4\\cdot0{,}55\\cdot0{,}5\\cdot16/12 \\approx 0{,}147$ t CH₄/t residuo",
   "$L_0 = 0{,}15\\cdot0{,}55\\cdot0{,}5\\cdot12/16 \\approx 0{,}031$ t CH₄/t residuo",
   "$L_0 = 0{,}15\\cdot0{,}1\\cdot0{,}5\\cdot16/12 \\approx 0{,}010$ t CH₄/t residuo"],
  0, "Modelo IPCC de los apuntes (Apuntes B3, diap. 20): el potencial de generación de metano es el carbono orgánico degradable que se descompone, por la fracción de CH₄ en el biogás y por 16/12 para pasar de carbono a metano. $$L_0=COD\\cdot COD_F\\cdot F\\cdot\\frac{16}{12}$$ $$L_0=0{,}15\\cdot0{,}55\\cdot0{,}5\\cdot\\frac{16}{12}\\approx\\boxed{0{,}055\\ \\text{t CH}_4/\\text{t}}$$ Con COD = 0,4 (papel y cartón) sale 0,147; invertir 16/12 da 0,031; k = 0,1 es la constante de velocidad y no interviene en $L_0$.", "Apuntes B3, diap. 20");
L("B3", "b3-vertedero", "Modelo IPCC", 3, "Un vertedero recibe 10.000 t de materia orgánica solo en el año 2020. Con el modelo IPCC de los apuntes (k = 0,1 año<sup>−1</sup>, L<sub>0</sub> = 0,055 t/t), el metano generado en 2021 es aproximadamente…",
  ["45 t", "50 t", "498 t", "550 t"],
  0, "Modelo IPCC de los apuntes (Apuntes B3, diap. 20) con un único depósito R = 10.000 t en i = 2020: $$G_t=\\frac{(1-e^{-k})^2}{k}\\,R_i\\,L_0\\,e^{-k(t-i)}$$ $$\\frac{(1-e^{-0{,}1})^2}{0{,}1}=\\frac{0{,}0952^2}{0{,}1}=0{,}0906\\qquad R\\,L_0=10.000\\cdot0{,}055=550\\ \\text{t}$$ $$G_{2021}=0{,}0906\\cdot550\\cdot e^{-0{,}1\\cdot1}=0{,}0906\\cdot550\\cdot0{,}905\\approx\\boxed{45\\ \\text{t CH}_4}$$ Para 2020 (t − i = 0) saldrían ≈ 50 t; 550 t es el potencial total R·L₀ y 498 t olvida el factor (1 − e⁻ᵏ)²/k.", "Apuntes B3, diap. 20");
L("B3", "b3-vertedero", "Parámetros IPCC", 3, "Respecto a los parámetros del modelo IPCC de los apuntes, señale la opción FALSA:",
  ["F = 0,55 es la fracción en volumen de CH₄ en el biogás y $\\mathrm{COD}_{F}$ = 0,5 la fracción de COD que se descompone",
   "k = 0,1 año⁻¹ es el ratio de generación de metano",
   "COD vale 0,15 para la materia orgánica y 0,4 para el papel y el cartón",
   "$R_{i}$ es la cantidad de residuos depositada en el año i, en toneladas"],
  0, "Están intercambiados: $\\mathrm{COD}_{F}$ = 0,55 (fracción del COD que se descompone en biogás) y F = 0,5 (fracción en volumen de CH₄).", "Apuntes B3, diap. 20");

/* ---------- B3 · preguntas: tratamiento del biogás y biometano ---------- */
L("B3", "b3-tratamiento", "Composición de gases", 2, "Según la tabla de composición orientativa de gases para motores (Tekniker), el gas de vertedero tiene…",
  ["25-55 % de CH₄, 45-75 % de CO₂ y un PCI de 18-22 MJ/Nm³",
   "35-65 % de CH₄, 30-40 % de CO₂ y un PCI de 22-26 MJ/Nm³",
   "25-55 % de CH₄, 30-40 % de CO₂ y un PCI de 22-26 MJ/Nm³",
   "35-65 % de CH₄, 45-75 % de CO₂ y un PCI de 18-22 MJ/Nm³"],
  0, "Vertedero: 25-55 % CH₄, 45-75 % CO₂, PCI 18-22 MJ/Nm³. Digestor: 35-65 % CH₄, 30-40 % CO₂, PCI 22-26 MJ/Nm³.", "Apuntes B3, diap. 20");
L("B3", "b3-tratamiento", "Composición de gases", 3, "Comparando el gas de digestor con el gas natural de la tabla de los apuntes, señale la opción correcta:",
  ["El gas de digestor tiene más azufre (0,01-0,04 %) que el natural (< 0,001 %) y un PCI menor (22-26 frente a 31-35 MJ/Nm³)",
   "El gas de digestor tiene menos azufre (0,01-0,04 %) que el natural (< 0,1 %) y un PCI menor (22-26 frente a 31-35 MJ/Nm³)",
   "El gas de digestor tiene más azufre (0,01-0,04 %) que el natural (< 0,001 %) y un PCI menor (18-22 frente a 31-35 MJ/Nm³)",
   "El gas de digestor tiene más azufre (0-0,02 %) que el natural (< 0,001 %) y hidrocarburos C2-C4 en torno al 4,9 %"],
  0, "Digestor: S 0,01-0,04 %, PCI 22-26. Gas natural: S < 0,001 %, 93,2 % CH₄, 4,9 % de hidrocarburos C2-C4, H₂ < 0,1 %, PCI 31-35. El 0-0,02 % de S y los 18-22 MJ/Nm³ son del gas de vertedero.", "Apuntes B3, diap. 20");
L("B3", "b3-tratamiento", "Depuración de H2S", 2, "Según los apuntes, el H<sub>2</sub>S del biogás se elimina mediante…",
  ["tratamientos biológicos, filtros de Fe₂O₃ (< 2.500 ppm) y absorción química con FeCl₃ y NaOH",
   "tratamientos biológicos, filtros de Fe₂O₃ (> 2.500 ppm) y absorción química con soluciones ácidas",
   "adsorción con carbón activo, adsorción con gel de sílice y refrigeración",
   "absorción química con soluciones, adsorción y membranas"],
  0, "H₂S: biológicos, filtros de Fe₂O₃ (< 2.500 ppm) y absorción química (FeCl₃ y NaOH). Carbón activo, gel de sílice y refrigeración son para siloxanos; absorción, adsorción y membranas, para el CO₂.", "Apuntes B3, diap. 21");
L("B3", "b3-tratamiento", "Depuración", 3, "Señale la pareja contaminante–tratamiento que NO coincide con los apuntes:",
  ["NH₃: absorción química con soluciones alcalinas", "Haluros: absorción química con soluciones alcalinas", "Humedad: cambiadores de calor (placas o tubulares) y adsorción", "Partículas: ciclones o filtros"],
  0, "El NH₃ se absorbe con soluciones ácidas; las alcalinas son para los haluros.", "Apuntes B3, diap. 21");
L("B3", "b3-tratamiento", "Equipos", 2, "En una instalación de tratamiento del biogás, la antorcha y el gasómetro cumplen, respectivamente, la función de…",
  ["sistema de seguridad y almacenamiento", "depuración y almacenamiento", "almacenamiento y sistema de seguridad", "aspiración/impulsión y depuración"],
  0, "Diap. 21: d) sistemas de seguridad: antorcha; e) almacenamiento: gasómetro. La aspiración/impulsión la hacen las soplantes.", "Apuntes B3, diap. 21");
L("B3", "b3-tratamiento", "Siloxanos", 3, "¿Qué técnicas de eliminación de siloxanos recogen los apuntes? (Puede haber varias correctas)",
  ["Adsorción con carbón activo o con gel de sílice", "Refrigeración", "Filtros de Fe₂O₃", "Absorción química con soluciones ácidas"],
  [0, 1], "Siloxanos: adsorción con C activo, adsorción con silicagel, absorción química con disolventes orgánicos y refrigeración. Los filtros de Fe₂O₃ son para el H₂S y las soluciones ácidas, para el NH₃.", "Apuntes B3, diap. 21");
L("B3", "b3-biometano", "Fuentes de biometano", 1, "Según los apuntes, las fuentes de biometano son…",
  ["la digestión anaerobia y la gasificación", "la digestión anaerobia y el compostaje", "la gasificación y la pirólisis", "la digestión aerobia y la gasificación"],
  0, "Diap. 22: «Las fuentes de biometano son la digestión anaeróbica y la gasificación».", "Apuntes B3, diap. 22");
L("B3", "b3-biometano", "Ruta por gasificación", 2, "En el esquema de obtención de biometano por gasificación, el orden de las etapas es…",
  ["gasificador, enfriamiento del gas, limpieza del gas, metanación y upgrading",
   "gasificador, limpieza del gas, metanación, enfriamiento del gas y upgrading",
   "gasificador, enfriamiento del gas, metanación, limpieza del gas y upgrading",
   "gasificador, upgrading, enfriamiento del gas, limpieza del gas y metanación"],
  0, "Gasifier → gas cooling → gas cleaning → methanation → gas upgrading → biometano (red de gas o combustible).", "Apuntes B3, diap. 22");
L("B3", "b3-biometano", "Metanación", 2, "La metanación del gas de síntesis se realiza, según los apuntes, con catalizadores metálicos a…",
  ["200-450 ºC y 30-70 bar", "150-350 ºC y 10-40 bar", "250-400 ºC y 50-350 bar", "200-500 ºC y 30-70 bar"],
  0, "Metanación: 200-450 ºC y 30-70 bar. Fischer-Tropsch: 150-350 ºC y 10-40 bar. Metanol: 250-400 ºC y 50-350 bar. WGS: 200-500 ºC.", "Apuntes B3, diap. 23");
L("B3", "b3-biometano", "Gas de síntesis", 3, "Sobre los aprovechamientos del gas de síntesis de los apuntes, señale la afirmación correcta:",
  ["La reacción de Water-Gas Shift ($\\mathrm{CO + H_2O \\rightarrow H_2 + CO_2}$) se usa para producir H₂, con uno o más reactores en serie a 200-500 ºC",
   "La síntesis de Fischer-Tropsch ($\\mathrm{CO + 2H_2 \\rightarrow CH_3OH}$) produce gasolinas y gasóleos a 150-350 ºC y 10-40 bar",
   "La producción de metanol ($\\mathrm{nCO + (n+m/2)H_2 \\rightarrow C_nH_m + nH_2O}$) se realiza a 250-400 ºC y 50-350 bar",
   "La metanación ($\\mathrm{CO + H_2O \\rightarrow H_2 + CO_2}$) se realiza a altas temperaturas, por encima de 500 ºC"],
  0, "WGS: CO + H₂O → H₂ + CO₂, 200-500 ºC, uno o más reactores en serie. En las demás opciones las reacciones están intercambiadas; la metanación es a «bajas temperaturas» (200-450 ºC).", "Apuntes B3, diap. 23");
L("B3", "b3-biometano", "Digestión y biometano", 3, "En el esquema de obtención de biometano por digestión anaerobia (Gas for Climate, ECOFYS 2018), señale la opción correcta:",
  ["El biogás del tanque de digestión se inyecta directamente en la red de gas sin necesidad de upgrading",
   "El tanque de digestión solo produce biogás; el fertilizante procede del upgrading",
   "El biometano se obtiene por metanación catalítica del biogás a 200-450 ºC",
   "Ninguna de las otras opciones"],
  3, "En el esquema, el tanque de digestión produce biogás y fertilizante (digestato); el biogás puede dar electricidad y calor o pasar por el gas upgrading para obtener biometano (red de gas o combustible). La metanación es propia de la ruta de gasificación.", "Apuntes B3, diap. 22");

/* ---------- B3 · tarjetas ---------- */
C("B3", "b3-fundamentos", "¿Cuáles son las tres etapas de la metanización y cuál limita en sólidos?", "<b>Hidrólisis</b> (limitante en sólidos) → <b>fermentación/acidogénesis</b> (acetato, H<sub>2</sub>, CO<sub>2</sub>) → <b>metanogénesis</b> (CH<sub>4</sub> + CO<sub>2</sub>).");
C("B3", "b3-fundamentos", "¿De dónde procede el metano en la metanización?", "<b>72 %</b> del ácido acético (CH<sub>3</sub>COOH → CH<sub>4</sub> + CO<sub>2</sub>) y <b>28 %</b> del H<sub>2</sub> (CO<sub>2</sub> + 4H<sub>2</sub> → CH<sub>4</sub> + 2H<sub>2</sub>O).");
C("B3", "b3-fuentes", "Plantas de biometano en Europa (EBA)", "<b>1.322</b> en abril de 2023 (1.174 en el mapa); 483 (2018), 729 (2020), 1.023 (2021); +299 (≈ 30 %).");
C("B3", "b3-fuentes", "¿Qué fuentes alimentan la codigestión?", "Lodos de <b>EDAR</b>, residuos <b>ganaderos y agrícolas</b> y <b>biorresiduos</b> urbanos e industriales (no el vertedero).");
C("B3", "b3-agua", "¿Cuándo conviene el tratamiento anaerobio de aguas?", "Aguas industriales de alta carga: <b>DQO ≥ 2.000 mg/L</b>, y cuando el biogás se usa para generar electricidad.");
C("B3", "b3-agua", "Cargas de los reactores anaerobios (kg DQO/m<sup>3</sup>·d)", "Laguna 0,1-2 · contacto 1-5,5 · filtro 10-15 · UASB 15-25 · lecho fluidificado 30-40 · <b>IC 30-40</b>.");
C("B3", "b3-agua", "Producción teórica de metano por DQO", "<b>0,35 L CH<sub>4</sub>/g DQO</b> = (0,27 g CH<sub>4</sub>/g glucosa = 0,38 L) / (1,06 g O<sub>2</sub>/g glucosa).");
C("B3", "b3-agua", "Modelo de Tchobanoglous", "$M = 0{,}35\\,(nQC_i - 1{,}42\\,v_gV)$, M en m<sup>3</sup> CH<sub>4</sub>/d; el segundo término descuenta la DQO que pasa a biomasa.");
C("B3", "b3-fangos", "Objetivo del digestor de fangos", "<b>Estabilizar</b> el fango (reducir su materia orgánica) y <b>generar biogás</b> combustible.");
C("B3", "b3-valorizacion", "Digestión húmeda frente a seca", "Húmeda: sólidos <b>≤ 20 %</b>. Seca: sólidos <b>≤ 40 %</b>. Mesófila 35-40 ºC; termófila 55-60 ºC; 8-25 días.");
C("B3", "b3-valorizacion", "Requisitos de la digestión anaerobia", "Poco O<sub>2</sub>, T estable, pH neutro, carga de sólidos constante, 8-25 días, agitación, alcalinidad adecuada, sin sales inhibidoras.");
C("B3", "b3-valorizacion", "Balance de fermentación seca (1.000 kg)", "<b>100 kg de biogás</b> y <b>400 kg de compost</b>; 25 % de ST a la entrada del reactor; digestión mesófila.");
C("B3", "b3-vertedero", "Barrera geológica natural del vertedero", "<b>K ≤ 10<sup>−9</sup> m/s</b>; espesor ≥ <b>1 m</b> (no peligrosos) y ≥ <b>5 m</b> (peligrosos). Artificial y drenaje: ≥ 0,5 m.");
C("B3", "b3-vertedero", "Parámetros del modelo IPCC de vertedero", "k = 0,1 año<sup>−1</sup>; L<sub>0</sub> = COD·COD<sub>F</sub>·F·16/12; COD 0,15 (MO) o 0,4 (papel); COD<sub>F</sub> 0,55; F 0,5.");
C("B3", "b3-tratamiento", "PCI del gas natural, de digestor y de vertedero", "Natural <b>31-35</b>, digestor <b>22-26</b>, vertedero <b>18-22</b> MJ/Nm<sup>3</sup>.");
C("B3", "b3-tratamiento", "¿Cómo se elimina el H<sub>2</sub>S del biogás?", "Tratamientos biológicos, filtros de <b>Fe<sub>2</sub>O<sub>3</sub></b> (&lt; 2.500 ppm) y absorción química con <b>FeCl<sub>3</sub> y NaOH</b>.");
C("B3", "b3-biometano", "Dos rutas al biometano", "<b>Digestión anaerobia</b> → biogás → <i>upgrading</i>; <b>gasificación</b> → enfriamiento → limpieza → metanación → <i>upgrading</i>.");
C("B3", "b3-biometano", "Condiciones de la metanación", "Catalizadores metálicos, <b>200-450 ºC</b> y <b>30-70 bar</b>: CO + 3H<sub>2</sub> → CH<sub>4</sub> + H<sub>2</sub>O.");

/* ---------- B3 · ejercicios ---------- */
DRILLS.push({ id: "b3-c-reactores", type: "classify", tema: "B3", sec: "b3-agua", title: "Carga orgánica del sistema anaerobio", cats: ["≤ 5,5 kg DQO/m³·d", "10-25 kg DQO/m³·d", "30-40 kg DQO/m³·d"], items: [
  ["Laguna anaeróbica", 0], ["Reactor anaeróbico de contacto", 0], ["Filtro anaeróbico", 1], ["UASB", 1], ["Lecho fluidificado", 2], ["IC (Internal Circulation)", 2] ] });
DRILLS.push({ id: "b3-c-tecnologias", type: "classify", tema: "B3", sec: "b3-valorizacion", title: "Tecnología de digestión: ¿vía húmeda o seca?", cats: ["Vía húmeda", "Vía seca"], items: [
  ["AVECON", 0], ["VAGRON", 0], ["BIGADAN", 0], ["ENVITAL/ROS ROCA", 0], ["HAASE", 0], ["BTA", 0], ["VALORGA", 1], ["DRANCO", 1], ["KOMPOGAS", 1], ["BIOCELL", 1] ] });
DRILLS.push({ id: "b3-m-depuracion", type: "match", tema: "B3", sec: "b3-tratamiento", title: "Contaminante del biogás ↔ tratamiento", pairs: [
  ["Partículas", "Ciclones o filtros"], ["Humedad", "Cambiadores de calor, adsorción"], ["H₂S", "Filtros de Fe₂O₃, FeCl₃ y NaOH"], ["CO₂", "Absorción, adsorción y membranas"],
  ["Haluros", "Soluciones alcalinas"], ["NH₃", "Soluciones ácidas"], ["Siloxanos", "Carbón activo o gel de sílice"] ] });
DRILLS.push({ id: "b3-m-cifras", type: "match", tema: "B3", sec: "b3-vertedero", title: "Cifra ↔ parámetro", pairs: [
  ["0,1 año⁻¹", "k del modelo IPCC"], ["0,55", "COD_F"], ["0,15", "COD de la materia orgánica"], ["0,4", "COD de papel y cartón"],
  ["10⁻⁹ m/s", "Permeabilidad de la barrera natural"], ["≥ 5 m", "Barrera natural en peligrosos"], ["0,35 L/g", "CH₄ por g de DQO"] ] });
DRILLS.push({ id: "b3-m-syngas", type: "match", tema: "B3", sec: "b3-biometano", title: "Uso del gas de síntesis ↔ condiciones", pairs: [
  ["Metanación", "200-450 ºC, 30-70 bar"], ["Fischer-Tropsch", "150-350 ºC, 10-40 bar"], ["Metanol", "250-400 ºC, 50-350 bar"], ["Water-Gas Shift", "200-500 ºC, reactores en serie"], ["Digestión mesófila", "35-40 ºC"], ["Digestión termófila", "55-60 ºC"] ] });

/* ---------- B3 · reglas mnemotécnicas ---------- */
MNEMO["b3-fundamentos"] = ["«<b>H-A-M</b>»: Hidrólisis, Acidogénesis, Metanogénesis; la H va primero y es la que «frena» en sólidos.", "Metano «<b>72-28</b>»: casi tres cuartos del acético; el resto, del hidrógeno.", "Orgánicos complejos «<b>76-20-4</b>»: ácidos orgánicos, acético directo y H<sub>2</sub> (suman 100)."];
MNEMO["b3-fuentes"] = ["Biometano en Europa «<b>483 → 729 → 1.023 → 1.322</b>»: casi se triplica de 2018 a 2023.", "Codigestión = «todo menos el vertedero»: lodos, estiércoles y biorresiduos."];
MNEMO["b3-agua"] = ["«<b>Dos mil</b> para pasarse al anaerobio»: DQO ≥ 2.000 mg/L.", "Escalera de cargas: Laguna &lt; Contacto &lt; Filtro &lt; UASB &lt; Lecho/IC («<b>La Casa Fría Usa Leña</b>»).", "«0,27 g → 0,38 L → ÷1,06 → <b>0,35</b>»: tres pasos de la glucosa a la DQO."];
MNEMO["b3-fangos"] = ["El espesador quita <b>agua</b>; el digestor quita <b>materia orgánica</b> (y da biogás).", "Diap. 11 = fangos «al aire» (aerobio, sin biogás); diap. 12 = fangos «a oscuras» (digestión + cogeneración)."];
MNEMO["b3-valorizacion"] = ["Húmeda «<b>20</b>», seca «<b>40</b>»: la seca admite el doble de sólidos.", "Temperaturas «<b>35-40 / 55-60</b>»: mesófila como el cuerpo humano; termófila, 20 ºC más.", "Balance «<b>1.000 → 100 + 400</b>»: una tonelada da 100 kg de biogás y 400 kg de compost."];
MNEMO["b3-vertedero"] = ["Barrera natural «<b>9-1-5</b>»: K ≤ 10<sup>−9</sup>, 1 m no peligrosos, 5 m peligrosos; lo artificial y el drenaje, «medio metro».", "IPCC «<b>0,1 · 0,15 · 0,55 · 0,5</b>»: k, COD, COD<sub>F</sub> y F (la F, de «fracción de metano», es la mitad).", "16/12 pasa del carbono (12) al metano (16)."];
MNEMO["b3-tratamiento"] = ["PCI «<b>33 · 24 · 20</b>» (centros de 31-35, 22-26 y 18-22): natural, digestor, vertedero.", "«Lo ácido se lava con base y lo básico con ácido»: haluros con álcalis, NH<sub>3</sub> con ácidos.", "Antorcha = <b>A</b>larma/seguridad; Gasómetro = <b>G</b>uardar."];
MNEMO["b3-biometano"] = ["Gasificación al biometano «<b>G-E-L-M-U</b>»: Gasificar, Enfriar, Limpiar, Metanar, Upgrading.", "Presiones «<b>30-70 metano, 10-40 FT, 50-350 metanol</b>»: el metanol es el que más aprieta."];

/* ---------- B3 · diagramas ---------- */
DIAGRAMS.push({ sec: "b3-fundamentos", h4: "Rutas del carbono", cap: "Rutas de la metanización según los apuntes: reparto de los orgánicos complejos (76 / 20 / 4 %), de los ácidos orgánicos (52 / 24 %) y origen del metano (72 % del acético y 28 % del H<sub>2</sub>). Los colores siguen los de la diap. 2; las flechas marrones son la metanogénesis.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Rutas de la metanización con porcentajes">
<defs><marker id="b3ArG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#0d9488"/></marker>
<marker id="b3ArR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#c2413b"/></marker>
<marker id="b3ArB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#92400e"/></marker></defs>
<ellipse cx="62" cy="125" rx="54" ry="30" fill="#eef3fb" stroke="#2563eb"/>
<text x="62" y="121" text-anchor="middle" class="small2 tb">Orgánicos</text><text x="62" y="135" text-anchor="middle" class="small2 tb">complejos</text>
<ellipse cx="230" cy="125" rx="58" ry="24" fill="#f1f5fd" stroke="#2563eb"/>
<text x="230" y="129" text-anchor="middle" class="small2 tb">Ácidos orgánicos</text>
<ellipse cx="380" cy="40" rx="44" ry="22" fill="#f1f5fd" stroke="#2563eb"/>
<text x="380" y="45" text-anchor="middle" class="tb">H<tspan baseline-shift='sub' font-size='9'>2</tspan></text>
<ellipse cx="380" cy="210" rx="52" ry="22" fill="#f1f5fd" stroke="#2563eb"/>
<text x="380" y="214" text-anchor="middle" class="small2 tb">Ácido acético</text>
<ellipse cx="486" cy="125" rx="46" ry="24" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<text x="486" y="129" text-anchor="middle" class="tb">Metano</text>
<line x1="116" y1="125" x2="168" y2="125" stroke="#0d9488" stroke-width="2" marker-end="url(#b3ArG)"/>
<text x="142" y="117" text-anchor="middle" class="small2 tb ok2">76 %</text>
<line x1="100" y1="103" x2="334" y2="40" stroke="#0d9488" stroke-width="2" marker-end="url(#b3ArG)"/>
<text x="200" y="64" text-anchor="middle" class="small2 tb ok2">4 %</text>
<line x1="100" y1="147" x2="326" y2="210" stroke="#0d9488" stroke-width="2" marker-end="url(#b3ArG)"/>
<text x="196" y="192" text-anchor="middle" class="small2 tb ok2">20 %</text>
<line x1="268" y1="107" x2="342" y2="56" stroke="#c2413b" stroke-width="2" marker-end="url(#b3ArR)"/>
<text x="318" y="96" class="small2 tb ko">24 %</text>
<line x1="268" y1="143" x2="342" y2="194" stroke="#c2413b" stroke-width="2" marker-end="url(#b3ArR)"/>
<text x="318" y="163" class="small2 tb ko">52 %</text>
<line x1="414" y1="54" x2="468" y2="100" stroke="#92400e" stroke-width="2.5" marker-end="url(#b3ArB)"/>
<text x="452" y="66" class="small2 tb" fill="#92400e">28 %</text>
<line x1="418" y1="195" x2="468" y2="150" stroke="#92400e" stroke-width="2.5" marker-end="url(#b3ArB)"/>
<text x="452" y="190" class="small2 tb" fill="#92400e">72 %</text>
<text x="10" y="240" class="small2 mut">CH₃COOH → CH₄ + CO₂ · CO₂ + 4H₂ → CH₄ + 2H₂O</text>
</svg>` });

DIAGRAMS.push({ sec: "b3-agua", h4: "Sistemas y cargas", cap: "Intervalos de carga orgánica volumétrica admisible (kg DQO/m<sup>3</sup>·d) de los sistemas anaerobios de la línea de agua. El lecho fluidificado y el IC alcanzan 30-40; la laguna, solo 0,1-2.", svg: `<svg class="dg" viewBox="0 0 540 260" role="img" aria-label="Cargas orgánicas de los reactores anaerobios">
<line x1="190" y1="20" x2="190" y2="214" class="ax"/><line x1="190" y1="214" x2="520" y2="214" class="ax"/>
<g class="small2 mut" text-anchor="middle">
<text x="190" y="230">0</text><text x="272" y="230">10</text><text x="355" y="230">20</text><text x="437" y="230">30</text><text x="520" y="230">40</text></g>
<line x1="272" y1="20" x2="272" y2="214" class="grid"/><line x1="355" y1="20" x2="355" y2="214" class="grid"/><line x1="437" y1="20" x2="437" y2="214" class="grid"/><line x1="520" y1="20" x2="520" y2="214" class="grid"/>
<text x="355" y="250" text-anchor="middle" class="small2">Carga (kg DQO/m³·d)</text>
<g class="small2" text-anchor="end">
<text x="182" y="40">Laguna anaeróbica</text><text x="182" y="72">Reactor de contacto</text><text x="182" y="104">Filtro anaeróbico</text>
<text x="182" y="136">UASB</text><text x="182" y="168">Lecho fluidificado</text><text x="182" y="200">IC</text></g>
<rect x="191" y="28" width="16" height="16" fill="#94a3b8"/><text x="212" y="40" class="small2">0,1-2</text>
<rect x="198" y="60" width="37" height="16" fill="#64748b"/><text x="240" y="72" class="small2">1-5,5</text>
<rect x="272" y="92" width="41" height="16" fill="#0891b2"/><text x="318" y="104" class="small2">10-15</text>
<rect x="313" y="124" width="83" height="16" fill="#2563eb"/><text x="401" y="136" class="small2">15-25</text>
<rect x="437" y="156" width="83" height="16" fill="#1e40af"/><text x="432" y="168" text-anchor="end" class="small2">30-40</text>
<rect x="437" y="188" width="83" height="16" fill="#0d9488"/><text x="432" y="200" text-anchor="end" class="small2">30-40</text>
</svg>` });

DIAGRAMS.push({ sec: "b3-fangos", h4: "Esquema de la línea de fangos", cap: "Línea de agua (arriba) y línea de fangos (abajo) de una EDAR: los lodos primarios y secundarios se espesan y se digieren; el digestor estabiliza el fango y produce biogás. Los sobrenadantes vuelven a cabecera.", svg: `<svg class="dg" viewBox="0 0 540 270" role="img" aria-label="Esquema de línea de agua y de fangos">
<defs><marker id="b3ArF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#475569"/></marker></defs>
<text x="8" y="44" class="small2 mut">Agua</text>
<line x1="8" y1="52" x2="48" y2="52" stroke="#2563eb" stroke-width="2" marker-end="url(#b3ArF)"/>
<rect x="50" y="30" width="100" height="44" class="box"/><text x="100" y="48" text-anchor="middle" class="small2 tb">Sedimentador</text><text x="100" y="62" text-anchor="middle" class="small2 tb">primario</text>
<line x1="150" y1="52" x2="198" y2="52" stroke="#2563eb" stroke-width="2" marker-end="url(#b3ArF)"/>
<rect x="200" y="30" width="110" height="44" class="box"/><text x="255" y="48" text-anchor="middle" class="small2 tb">Tratamiento</text><text x="255" y="62" text-anchor="middle" class="small2 tb">biológico</text>
<line x1="310" y1="52" x2="358" y2="52" stroke="#2563eb" stroke-width="2" marker-end="url(#b3ArF)"/>
<rect x="360" y="30" width="100" height="44" class="box"/><text x="410" y="48" text-anchor="middle" class="small2 tb">Sedimentador</text><text x="410" y="62" text-anchor="middle" class="small2 tb">secundario</text>
<line x1="460" y1="52" x2="530" y2="52" stroke="#2563eb" stroke-width="2" marker-end="url(#b3ArF)"/>
<text x="495" y="44" text-anchor="middle" class="small2 mut">Agua dep.</text>
<path d="M410,74 V100 H255 V76" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArF)"/>
<text x="332" y="94" text-anchor="middle" class="small2 mut">lodos a reciclo</text>
<path d="M430,74 V130 H100" fill="none" stroke="#92400e" stroke-width="1.5"/>
<text x="300" y="124" text-anchor="middle" class="small2" fill="#92400e">lodos secundarios</text>
<line x1="100" y1="74" x2="100" y2="166" stroke="#92400e" stroke-width="1.8" marker-end="url(#b3ArF)"/>
<text x="106" y="112" class="small2" fill="#92400e">lodos primarios</text>
<rect x="50" y="168" width="100" height="40" class="box"/><text x="100" y="192" text-anchor="middle" class="small2 tb">Espesador</text>
<line x1="150" y1="188" x2="268" y2="188" stroke="#92400e" stroke-width="1.8" marker-end="url(#b3ArF)"/>
<text x="210" y="181" text-anchor="middle" class="small2" fill="#92400e">fango espesado</text>
<rect x="270" y="164" width="120" height="48" fill="#fef3c7" stroke="#d97706"/><text x="330" y="186" text-anchor="middle" class="small2 tb">Digestor</text><text x="330" y="201" text-anchor="middle" class="small2">estabiliza el fango</text>
<line x1="390" y1="176" x2="470" y2="176" stroke="#0d9488" stroke-width="2" marker-end="url(#b3ArF)"/><text x="476" y="180" class="small2 tb ok2">Biogás</text>
<line x1="390" y1="202" x2="470" y2="202" stroke="#92400e" stroke-width="1.8" marker-end="url(#b3ArF)"/><text x="476" y="206" class="small2">Fango</text><text x="476" y="219" class="small2">digerido</text>
<path d="M330,212 V250 H24 V60" fill="none" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1.2" marker-end="url(#b3ArF)"/>
<line x1="100" y1="208" x2="100" y2="250" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1.2"/>
<text x="200" y="244" text-anchor="middle" class="small2 mut">sobrenadantes a cabecera</text>
</svg>` });

DIAGRAMS.push({ sec: "b3-valorizacion", h4: "Balance de masa", cap: "Balance de masa (kg) de la fermentación seca de 1.000 kg de frutas, verduras y residuos de jardinería (digestión mesófila, 25 % de sólidos totales a la entrada del reactor). Valores tal como aparecen en la diap. 16.", svg: `<svg class="dg" viewBox="0 0 540 330" role="img" aria-label="Balance de masa de una fermentación seca">
<defs><marker id="b3ArM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#475569"/></marker></defs>
<text x="270" y="18" text-anchor="middle" class="small2 tb">Residuo: 1.000 (600 agua · 400 ST · 200 SV)</text>
<line x1="270" y1="24" x2="270" y2="40" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/>
<rect x="190" y="42" width="160" height="30" class="box"/><text x="270" y="62" text-anchor="middle" class="small2 tb">Pretratamiento</text>
<line x1="110" y1="57" x2="188" y2="57" stroke="#2563eb" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="10" y="54" class="small2">Agua recirc.</text><text x="10" y="68" class="small2">570</text>
<line x1="350" y1="57" x2="420" y2="57" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="426" y="61" class="small2">Impurezas 50</text>
<line x1="270" y1="72" x2="270" y2="104" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="278" y="92" class="small2">1.520 (1.140 agua · 380 ST · 190 SV)</text>
<rect x="190" y="106" width="160" height="30" fill="#fef3c7" stroke="#d97706"/><text x="270" y="126" text-anchor="middle" class="small2 tb">Fermentación</text>
<line x1="350" y1="121" x2="420" y2="121" stroke="#0d9488" stroke-width="2" marker-end="url(#b3ArM)"/><text x="426" y="118" class="small2 tb ok2">Biogás 100</text><text x="426" y="131" class="small2 mut">(100 ST · 100 SV)</text>
<line x1="270" y1="136" x2="270" y2="168" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="278" y="156" class="small2">1.420 (1.140 agua · 280 ST · 90 SV)</text>
<rect x="190" y="170" width="160" height="30" class="box"/><text x="270" y="190" text-anchor="middle" class="small2 tb">Deshidratación</text>
<line x1="190" y1="185" x2="112" y2="185" stroke="#2563eb" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="10" y="182" class="small2">Agua 770 → trat.</text><text x="10" y="196" class="small2">de aguas → 200</text>
<line x1="270" y1="200" x2="270" y2="232" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="278" y="220" class="small2">650 (390 agua · 260 ST · 80 SV)</text>
<rect x="190" y="234" width="160" height="34" class="box"/><text x="270" y="249" text-anchor="middle" class="small2 tb">Postratamiento</text><text x="270" y="262" text-anchor="middle" class="small2 tb">aerobio</text>
<line x1="350" y1="251" x2="420" y2="251" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/><text x="426" y="255" class="small2">CO₂ + H₂O 160</text>
<line x1="270" y1="268" x2="270" y2="292" stroke="#475569" stroke-width="1.5" marker-end="url(#b3ArM)"/>
<text x="270" y="310" text-anchor="middle" class="tb" fill="#0d9488">Compost 400 (160 agua · 240 ST · 60 SV)</text>
</svg>` });

DIAGRAMS.push({ sec: "b3-vertedero", h4: "Diseño, captación", cap: "Sistema de impermeabilización del fondo de un vertedero (de arriba abajo), con los espesores y la permeabilidad que exigen los apuntes. La barrera artificial solo se dispone cuando la natural no cumple.", svg: `<svg class="dg" viewBox="0 0 520 270" role="img" aria-label="Capas de impermeabilización del vertedero">
<rect x="30" y="16" width="190" height="70" fill="#a3c76d" stroke="#64748b"/>
<rect x="30" y="86" width="190" height="40" fill="#99e2e0" stroke="#64748b"/>
<rect x="30" y="126" width="190" height="8" fill="#1f2937"/>
<rect x="30" y="134" width="190" height="46" fill="#f9c6dd" stroke="#64748b"/>
<rect x="30" y="180" width="190" height="72" fill="#f5efc6" stroke="#64748b"/>
<text x="125" y="56" text-anchor="middle" class="tb">Masa de residuos</text>
<text x="240" y="102" class="small2 tb">Capa de drenaje ≥ 0,5 m</text><text x="240" y="116" class="small2">para recogida de lixiviados</text>
<text x="240" y="134" class="small2 tb">Revestimiento artificial impermeable</text>
<text x="240" y="154" class="small2 tb">Barrera geológica artificial ≥ 0,5 m</text><text x="240" y="168" class="small2">(cuando la barrera natural no cumple)</text>
<text x="240" y="198" class="small2 tb">Barrera geológica natural</text>
<text x="240" y="213" class="small2">K ≤ 10⁻⁹ m/s</text>
<text x="240" y="228" class="small2">Espesor ≥ 1 m en no peligrosos</text>
<text x="240" y="243" class="small2">Espesor ≥ 5 m en peligrosos</text>
<line x1="222" y1="130" x2="236" y2="130" stroke="#475569"/>
</svg>` });

DIAGRAMS.push({ sec: "b3-tratamiento", h4: "Composición orientativa", cap: "Contenido de metano (% en volumen) y PCI (MJ/Nm<sup>3</sup>) del gas natural, el gas de digestor y el gas de vertedero según la tabla de Tekniker. El gas de vertedero tiene menos CH<sub>4</sub> (y más CO<sub>2</sub>, 45-75 %) que el de digestor.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Metano y PCI de gas natural, digestor y vertedero">
<text x="110" y="18" class="small2 tb">% CH₄ (volumen)</text>
<line x1="110" y1="26" x2="110" y2="128" class="ax"/><line x1="110" y1="128" x2="510" y2="128" class="ax"/>
<g class="small2 mut" text-anchor="middle"><text x="110" y="142">0</text><text x="210" y="142">25</text><text x="310" y="142">50</text><text x="410" y="142">75</text><text x="510" y="142">100</text></g>
<text x="102" y="48" text-anchor="end" class="small2">Natural</text><rect x="110" y="36" width="373" height="16" fill="#64748b"/><text x="489" y="48" class="small2">93,2</text>
<text x="102" y="80" text-anchor="end" class="small2">Digestor</text><rect x="250" y="68" width="120" height="16" fill="#0d9488"/><text x="376" y="80" class="small2">35-65</text>
<text x="102" y="112" text-anchor="end" class="small2">Vertedero</text><rect x="210" y="100" width="120" height="16" fill="#d97706"/><text x="336" y="112" class="small2">25-55</text>
<text x="110" y="170" class="small2 tb">PCI (MJ/Nm³)</text>
<line x1="110" y1="176" x2="110" y2="236" class="ax"/><line x1="110" y1="236" x2="510" y2="236" class="ax"/>
<g class="small2 mut" text-anchor="middle"><text x="110" y="249">0</text><text x="210" y="249">10</text><text x="310" y="249">20</text><text x="410" y="249">30</text><text x="510" y="249">40</text></g>
<rect x="420" y="180" width="40" height="14" fill="#64748b"/><text x="102" y="191" text-anchor="end" class="small2">Natural</text><text x="466" y="191" class="small2">31-35</text>
<rect x="330" y="200" width="40" height="14" fill="#0d9488"/><text x="102" y="211" text-anchor="end" class="small2">Digestor</text><text x="376" y="211" class="small2">22-26</text>
<rect x="290" y="220" width="40" height="14" fill="#d97706"/><text x="102" y="231" text-anchor="end" class="small2">Vertedero</text><text x="336" y="231" class="small2">18-22</text>
</svg>` });

DIAGRAMS.push({ sec: "b3-biometano", h4: "Biometano por gasificación", cap: "Las dos rutas de obtención de biometano de los apuntes (Gas for Climate, ECOFYS 2018): digestión anaerobia con <i>upgrading</i> del biogás, y gasificación con enfriamiento, limpieza y metanación del gas de síntesis.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Rutas de obtención de biometano">
<defs><marker id="b3ArBm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#475569"/></marker></defs>
<text x="10" y="20" class="small2 tb" fill="#0d9488">Digestión anaerobia</text>
<rect x="10" y="40" width="70" height="34" class="box"/><text x="45" y="61" text-anchor="middle" class="small2">Residuos</text>
<line x1="80" y1="57" x2="100" y2="57" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="102" y="40" width="88" height="34" fill="#dcfce7" stroke="#0d9488"/><text x="146" y="55" text-anchor="middle" class="small2">Tanque de</text><text x="146" y="68" text-anchor="middle" class="small2">digestión</text>
<line x1="190" y1="57" x2="210" y2="57" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="212" y="40" width="70" height="34" fill="#dcfce7" stroke="#0d9488"/><text x="247" y="61" text-anchor="middle" class="small2 tb">Biogás</text>
<line x1="282" y1="57" x2="302" y2="57" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="304" y="40" width="86" height="34" fill="#dcfce7" stroke="#0d9488"/><text x="347" y="61" text-anchor="middle" class="small2"><tspan font-style="italic">Upgrading</tspan></text>
<line x1="390" y1="57" x2="410" y2="57" stroke="#475569" marker-end="url(#b3ArBm)"/>
<line x1="146" y1="74" x2="146" y2="94" stroke="#475569" marker-end="url(#b3ArBm)"/><text x="146" y="108" text-anchor="middle" class="small2 mut">Fertilizante</text>
<line x1="247" y1="74" x2="247" y2="94" stroke="#475569" marker-end="url(#b3ArBm)"/><text x="247" y="108" text-anchor="middle" class="small2 mut">Electricidad, calor</text>
<text x="10" y="140" class="small2 tb" fill="#2563eb">Gasificación</text>
<rect x="10" y="160" width="56" height="34" class="box"/><text x="38" y="181" text-anchor="middle" class="small2">Residuos</text>
<line x1="66" y1="177" x2="78" y2="177" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="80" y="160" width="72" height="34" fill="#eef3fb" stroke="#2563eb"/><text x="116" y="181" text-anchor="middle" class="small2">Gasificador</text>
<line x1="152" y1="177" x2="164" y2="177" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="166" y="160" width="62" height="34" fill="#eef3fb" stroke="#2563eb"/><text x="197" y="175" text-anchor="middle" class="small2">Enfria-</text><text x="197" y="188" text-anchor="middle" class="small2">miento</text>
<line x1="228" y1="177" x2="240" y2="177" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="242" y="160" width="62" height="34" fill="#eef3fb" stroke="#2563eb"/><text x="273" y="181" text-anchor="middle" class="small2">Limpieza</text>
<line x1="304" y1="177" x2="316" y2="177" stroke="#475569" marker-end="url(#b3ArBm)"/>
<rect x="318" y="160" width="72" height="34" fill="#fef3c7" stroke="#d97706"/><text x="354" y="181" text-anchor="middle" class="small2 tb">Metanación</text>
<text x="354" y="212" text-anchor="middle" class="small2 mut">200-450 ºC · 30-70 bar</text>
<ellipse cx="466" cy="117" rx="68" ry="30" fill="#fef3c7" stroke="#0d9488" stroke-width="2"/>
<text x="466" y="113" text-anchor="middle" class="tb">Biometano</text><text x="466" y="128" text-anchor="middle" class="small2">red de gas o</text><text x="466" y="141" text-anchor="middle" class="small2">combustible</text>
<line x1="410" y1="57" x2="450" y2="88" stroke="#475569" marker-end="url(#b3ArBm)"/>
<line x1="390" y1="170" x2="430" y2="146" stroke="#475569" marker-end="url(#b3ArBm)"/>
<text x="410" y="186" class="small2"><tspan font-style="italic">+ upgrading</tspan></text>
</svg>` });

/* =====================================================================
   TEMA B4 · Aspectos ambientales de la generación y uso de la energía
   ===================================================================== */
THEORY.B4 = {
  summary: [
    "Factores <b>sociales, económicos y medioambientales</b> afectan a la salud; interaccionan con la edad, el sexo y la dotación genética. El <b>objetivo fundamental de la calidad del ambiente es no poner en riesgo la salud</b>.",
    "Calidad del aire: fundamentalmente <b>partículas (PM), ozono troposférico, SO<sub>2</sub>, NO<sub>2</sub> e hidrocarburos aromáticos policíclicos</b>. El <b>radón</b> es la <b>segunda causa de cáncer pulmonar en Europa</b>.",
    "El biogás y el biometano cierran ciclos en la <b>economía circular</b> (Hoja de ruta del biogás, MITERD 2022): residuos → planta de biogás → calor, electricidad, carburante y digestato a la agricultura.",
    "La valorización de biomasa y residuos incide en el <b>aire</b> (NO<sub>x</sub>, SO<sub>2</sub>, partículas), el <b>agua</b> (pesticidas, materia en suspensión, consumo de los cultivos), el <b>cambio climático</b> (menor incidencia por el CO<sub>2</sub> que consumen los cultivos) y el <b>suelo</b> (ocupación, residuos).",
    "Oxígeno estequiométrico de C<sub>x</sub>H<sub>y</sub>S<sub>z</sub>O<sub>w</sub>: <b>x + y/4 + z − w/2</b>; con aire se añaden (0,79/0,21) moles de N<sub>2</sub> por mol de O<sub>2</sub>. La combustión real no es estequiométrica y da CO, NO, NO<sub>2</sub>, N<sub>2</sub>O, C<sub>p</sub>H<sub>q</sub> y O<sub>2</sub>.",
    "Tres mecanismos de NO<sub>x</sub>: <b>térmico</b> (Zeldovich, N<sub>2</sub> y O<sub>2</sub> del aire, importante a <b>T &gt; 1.300 ºC</b>), <b>del nitrógeno del combustible</b> (a cualquier temperatura y régimen de mezcla) y <b>por radicales</b> de la combustión (zonas ricas en combustible).",
    "Relación de equivalencia $\\lambda=(A/F)_{actual}/(A/F)_{esteq}$ y dosado relativo $F_R$. El NO del combustible alcanza ≈ <b>500 ppm</b> en ≈ 0,5 ms; el NO térmico crece casi linealmente (≈ 200 ppm a 1,5 ms).",
    "<b>Lluvia ácida</b>: el radical <b>OH</b> (de O + H<sub>2</sub>O) oxida NO<sub>2</sub> a <b>HNO<sub>3</sub></b> y SO<sub>2</sub> a SO<sub>3</sub> → <b>H<sub>2</sub>SO<sub>4</sub></b>; con partículas minerales forma sulfatos (<b>deposición seca</b>).",
    "<b>Ozono troposférico</b>: NO<sub>2</sub> + hν (λ ≤ <b>420 nm</b>) → NO + O; O + O<sub>2</sub> → O<sub>3</sub>; O<sub>3</sub> + NO → NO<sub>2</sub> + O<sub>2</sub>. Los hidrocarburos generan radicales peroxiacilo que producen O<sub>3</sub> y <b>PAN</b>.",
    "<b>Forzamiento radiativo</b>: cambio del flujo neto de energía radiativa hacia la superficie medido en el borde superior de la troposfera (≈ <b>12.000 m</b>), en <b>W/m<sup>2</sup></b>; positivo calienta, negativo enfría.",
    "GWP (IPCC 2001): CO<sub>2</sub> <b>1</b>, CH<sub>4</sub> <b>23</b>, N<sub>2</sub>O <b>296</b>, HFC-23 <b>12.000</b>, CF<sub>4</sub> 5.700, C<sub>2</sub>F<sub>6</sub> 11.900 y SF<sub>6</sub> <b>22.200</b> (el mayor).",
    "Balance de CO<sub>2</sub>: CO<sub>2</sub> + H<sub>2</sub>O → CH<sub>2</sub>O + O<sub>2</sub>; <b>masa de CO<sub>2</sub>/masa de biomasa ≈ 1,5</b>.",
    "Partículas: sedimentables <b>&gt; 20 µm</b>; <b>PM10</b> &lt; 10 µm (generalmente naturales); <b>PM2,5</b> &lt; 2,5 µm (combustión y polvo del viento); ultrafinas &lt; 0,1 µm. Modas: nucleación &lt; 0,02; Aitken 0,02-0,1; acumulación 0,1-1; gruesa &gt; 1 µm.",
    "Todas las partículas son peligrosas para la salud, <b>especialmente las PM2,5</b>. Las arrastradas por los gases son <b>cenizas volantes</b>; parte es <b>hollín</b> (C, sales inorgánicas y carbono orgánico con HPA como el <b>benzo(a)pireno</b>); el BC contribuye al calentamiento."
  ],
  sections: [
    { id: "b4-calidad", title: "1. Calidad ambiental y salud", slides: ["B4", 1, 3], html: `
<p>El tema tiene dos partes: la <b>calidad ambiental</b> y la <b>incidencia de la valorización de biomasa y residuos en la calidad ambiental</b> (diap. 1).</p>
<h4>Factores que afectan a la salud</h4>
<p>Factores <b>sociales, económicos y medioambientales</b>, entre otros, afectan a nuestra salud: condiciones de vida y de trabajo e influencias culturales, que en la red de relaciones humanas interaccionan con la <b>edad, el sexo y la dotación genética</b> de cada persona. Igual que los contaminantes influyen en la salud, lo hacen las <b>modificaciones demográficas</b> y las condiciones de vida y trabajo (diap. 2).</p>
<p>El esquema de la EEA (<i>Environmental indicator report 2013</i>) sitúa el <b>bienestar y la salud humana</b> en el centro, rodeados por los recursos de <b>alimentos, agua, energía y materiales</b>, dentro de los ecosistemas europeos y globales.</p>
<h4>Biogás y biometano en la economía circular</h4>
<p>Según la <b>Hoja de ruta del biogás (MITERD, 2022)</b>, la planta de biogás recibe residuos de agricultura, ganadería, industria agroalimentaria y hogares; produce <b>biogás</b> (calor y electricidad), <b>biometano</b> (suministro de carburante y transporte) y <b>digerido</b>, que vuelve a la agricultura.</p>
<h4>Parámetros que influyen en la calidad del ambiente</h4>
<p>El <b>objetivo fundamental de la calidad del ambiente es no poner en riesgo la salud</b> (diap. 3).</p>
<table class="tbl cmp"><thead><tr><th>Parámetro</th><th>Detalle de los apuntes</th></tr></thead><tbody>
<tr><td>Productos químicos</td><td>Medicamentos, productos de higiene personal y limpieza</td></tr>
<tr><td>Calidad del aire</td><td>Fundamentalmente partículas (PM), ozono troposférico, SO<sub>2</sub>, NO<sub>2</sub>, hidrocarburos aromáticos policíclicos</td></tr>
<tr><td>Aire interior</td><td>Productos químicos, partículas (mohos y otros microorganismos)</td></tr>
<tr><td>Radón</td><td><b>Segunda causa de cáncer pulmonar en Europa</b></td></tr>
<tr><td>Calidad del agua</td><td>Pesticidas, medicamentos, productos de higiene y limpieza</td></tr>
<tr><td>Disponibilidad de agua</td><td>Agricultura y cambio climático</td></tr>
<tr><td>Ruido</td><td>Aeropuertos y tráfico rodado</td></tr>
<tr><td>Radiación ultravioleta</td><td>La disminución de la capa de ozono <b>estratosférico</b> facilita la llegada de más radiación</td></tr>
<tr><td>Nanotecnología</td><td>Las nanopartículas favorecen la inflamación de tejidos → fibrosis y cáncer</td></tr>
<tr><td>Cambio climático</td><td>Favorece, p. ej., la proliferación de patógenos resistentes</td></tr>
</tbody></table>
<p>También: campos electromagnéticos y disponibilidad de espacios verdes.</p>
` },
    { id: "b4-incidencia", title: "2. Incidencia de la valorización de biomasa y residuos", slides: ["B4", 4, 4], html: `
<h4>Medios afectados</h4>
<table class="tbl cmp"><thead><tr><th>Medio</th><th>Incidencia (diap. 4)</th></tr></thead><tbody>
<tr><td>Calidad del aire</td><td>Emisiones de <b>NO<sub>x</sub></b>, de <b>SO<sub>2</sub></b> y de <b>partículas</b></td></tr>
<tr><td>Calidad del agua</td><td>Vertidos con <b>pesticidas</b> y con <b>materia en suspensión</b></td></tr>
<tr><td>Disponibilidad del agua</td><td><b>Consumo para el crecimiento de los cultivos</b></td></tr>
<tr><td>Cambio climático</td><td><b>Menor incidencia</b> por el consumo de CO<sub>2</sub> que hacen los cultivos</td></tr>
<tr><td>Suelo</td><td><b>Ocupación del suelo</b> por cultivos y <b>generación de residuos</b> en la valorización</td></tr>
</tbody></table>
<h4>Lectura del cuadro</h4>
<p>El único efecto que los apuntes presentan como <b>favorable</b> es el del cambio climático: el CO<sub>2</sub> emitido en la valorización lo han consumido antes los cultivos. Los demás medios (aire, agua, disponibilidad de agua y suelo) reciben impactos que hay que controlar; los de la calidad del aire se desarrollan en el resto del tema (NO<sub>x</sub>, SO<sub>2</sub> → lluvia ácida, ozono, partículas).</p>
` },
    { id: "b4-nox", title: "3. Combustión y formación de NOx", slides: ["B4", 5, 6], html: `
<h4>Combustión estequiométrica y real</h4>
<p><b>Oxígeno estequiométrico</b>: el necesario para completar la combustión estequiométrica (diap. 5):</p>
<div class="formula">$$\\mathrm{C_xH_yS_zO_w} + \\left(x+\\tfrac{y}{4}+z-\\tfrac{w}{2}\\right)\\mathrm{O_2} + \\tfrac{0{,}79}{0{,}21}\\left(x+\\tfrac{y}{4}+z-\\tfrac{w}{2}\\right)\\mathrm{N_2} \\rightarrow x\\,\\mathrm{CO_2} + \\tfrac{y}{2}\\mathrm{H_2O} + z\\,\\mathrm{SO_2} + \\tfrac{0{,}79}{0{,}21}\\left(x+\\tfrac{y}{4}+z-\\tfrac{w}{2}\\right)\\mathrm{N_2}$$</div>
<p>La combustión <b>no se realiza en condiciones estequiométricas</b>. El esquema real es:</p>
<div class="formula">$$a\\,\\mathrm{C_vH_wO_xN_yS_z} + n\\left(\\mathrm{O_2}+\\tfrac{0{,}79}{0{,}21}\\mathrm{N_2}\\right) \\rightarrow b\\,\\mathrm{CO_2}+c\\,\\mathrm{H_2O}+d\\,\\mathrm{SO_2}+e\\,\\mathrm{N_2}+f\\,\\mathrm{CO}+g\\,\\mathrm{NO}+h\\,\\mathrm{NO_2}+i\\,\\mathrm{C_pH_q}+j\\,\\mathrm{N_2O}+k\\,\\mathrm{O_2}$$</div>
<h4>Mecanismos de formación de NOx</h4>
<table class="tbl cmp"><thead><tr><th>Mecanismo</th><th>Origen del N y condiciones</th><th>Reacciones</th></tr></thead><tbody>
<tr><td>Térmico (Zeldovich)</td><td>N<sub>2</sub> y O<sub>2</sub> del aire a alta temperatura; <b>importante a T &gt; 1.300 ºC</b></td><td>$\\mathrm{N_{2} + O = NO + N}$; $\\mathrm{O_{2} + N = NO + O}$; $\\mathrm{OH^{\\bullet} + N = NO + H}$</td></tr>
<tr><td>Del combustible</td><td>Nitrógeno contenido en el combustible; <b>a cualquier temperatura y régimen de mezcla</b></td><td>—</td></tr>
<tr><td>Por radicales</td><td>Radicales derivados de la combustión; <b>importante en zonas ricas en combustible</b></td><td>$\\mathrm{CH^{\\bullet} + N_{2} \\rightarrow  HCN + N}$; $\\mathrm{N + OH^{\\bullet} \\rightarrow  NO + H}$; $\\mathrm{N + O_{2} \\rightarrow  NO + O}$; $\\mathrm{HCN + O_{2} \\rightarrow  NO + CO + H}$</td></tr>
</tbody></table>
<h4>Influencia del tiempo de reacción</h4>
<p>En la gráfica de NO<sub>x</sub> (ppm) frente al <b>tiempo de residencia</b> (ms) de la diap. 6, el <b>NO del combustible</b> sube muy deprisa (≈ 290 ppm a 0,14 ms; ≈ 460 ppm a 0,43 ms) y se estabiliza en torno a <b>490-500 ppm</b>, mientras que el <b>NO térmico</b> crece casi <b>linealmente</b> y lentamente (≈ 75 ppm a 0,5 ms; ≈ 215 ppm a 1,45 ms).</p>
<h4>Influencia de la concentración de oxígeno</h4>
<p>La gráfica de la combustión <b>propano-aire</b> da la fracción molar (ppm, escala logarítmica) de CO, O<sub>2</sub>, H<sub>2</sub>, NO, OH, O y H frente a la relación de equivalencia (0,7-1,3). Al aumentar la proporción de combustible, el <b>O<sub>2</sub> cae</b> y <b>CO y H<sub>2</sub> suben</b>; el <b>NO</b> es máximo (≈ 3.000 ppm) en torno a 0,9-0,95, es decir, ligeramente <b>pobre</b>, y cae con fuerza en mezclas ricas.</p>
<div class="formula">$$F_R=\\left(\\frac{m_f}{m_a}\\right)\\Big/\\left(\\frac{m_f}{m_a}\\right)_{esteq}\\qquad \\lambda=\\frac{(A/F)_{actual}}{(A/F)_{esteq}}$$</div>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> $F_R$ (dosado relativo, combustible/aire) y $\\lambda$ (aire/combustible) son inversos: $F_R = 1/\\lambda$. Una mezcla pobre tiene $F_R&lt;1$ y $\\lambda&gt;1$.</div>
` },
    { id: "b4-acida", title: "4. Lluvia ácida y ozono troposférico", slides: ["B4", 7, 8], html: `
<h4>Lluvia ácida</h4>
<p>El <b>ozono</b> da <b>átomos de oxígeno</b>, que con agua forman el <b>radical hidroxilo</b> (diap. 7):</p>
<table class="tbl"><thead><tr><th>Reacción</th><th>Producto</th></tr></thead><tbody>
<tr><td>$\\mathrm{O + H_{2}O \\rightarrow  2\\,HO}$</td><td>Radical hidroxilo</td></tr>
<tr><td>$\\mathrm{OH + NO_{2} \\rightarrow  HNO_{3}}$</td><td><b>Ácido nítrico</b> → lluvia ácida</td></tr>
<tr><td>$\\mathrm{OH + SO_{2} + O_{2} \\rightarrow  SO_{3} + HO_{2}}$</td><td>Radical <b>hidroperoxilo</b></td></tr>
<tr><td>$\\mathrm{SO_{3} + H_{2}O \\rightarrow  H_{2}SO_{4}}$</td><td><b>Ácido sulfúrico</b> → lluvia ácida</td></tr>
<tr><td>$\\mathrm{NO + HO_{2} \\rightarrow  NO_{2} + OH}$</td><td>Regenera OH</td></tr>
<tr><td>$\\mathrm{HO_{2} + H_{2}O \\rightarrow  H_{2}O_{2} + OH}$</td><td>Agua oxigenada</td></tr>
<tr><td>$\\mathrm{H_{2}O_{2} + SO_{2} \\rightarrow  H_{2}SO_{4}}$</td><td>+ partículas minerales → <b>partículas de sulfatos (deposición seca)</b></td></tr>
<tr><td>$\\mathrm{HO + CO + O_{2} \\rightarrow  CO_{2} + HO_{2}}$</td><td>Lluvia ácida</td></tr>
</tbody></table>
<h4>Ozono troposférico: ciclo fotoquímico</h4>
<div class="formula">$$\\mathrm{NO_2} + h\\nu \\rightarrow \\mathrm{NO} + \\mathrm{O}\\ \\ (\\lambda \\le 420\\ \\mathrm{nm});\\quad \\mathrm{O}+\\mathrm{O_2}\\rightarrow\\mathrm{O_3};\\quad \\mathrm{O_3}+\\mathrm{NO}\\rightarrow\\mathrm{NO_2}+\\mathrm{O_2}$$</div>
<p>Además, $\\mathrm{N_{2}O + O \\rightarrow  2NO}$ (diap. 8).</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> el ciclo NO<sub>2</sub>/NO/O<sub>3</sub> por sí solo no acumula ozono, porque el NO formado lo vuelve a destruir; los hidrocarburos rompen ese equilibrio al convertir NO en NO<sub>2</sub> sin gastar O<sub>3</sub>.</div>
<h4>Papel de los hidrocarburos y el PAN</h4>
<p>Los hidrocarburos (HC) reaccionan con el O atómico: $\\mathrm{HC + O \\rightarrow  RCO^{*}}$ (radical), p. ej. el propeno $\\mathrm{CH_{3}{-}CH=CH_{2} + O \\rightarrow  \\ldots  \\rightarrow  CH_{3}^{*} + CH_{3}{-}C=O^{*}}$. <b>Reacciones en cadena</b>:</p>
<ul><li>$\\mathrm{RCO^{*} + O_{2} \\rightarrow  RCO_{3}^{*}}$ (radical <b>peroxiacilo</b>)</li>
<li>$\\mathrm{RCO_{3}^{*} + HC \\rightarrow  RCO_{2}^{*}}$ (radical <b>aciloxi</b>) + $\\mathrm{R'CHO}$ (<b>aldehído</b>)</li>
<li>$\\mathrm{RCO_{3}^{*} + O_{2} \\rightarrow  RCO_{2}^{*} + O_{3}}$</li>
<li>$\\mathrm{RCO_{3}^{*} + NO \\rightarrow  RCO_{2}^{*} + NO_{2}}$</li>
<li>$\\mathrm{CH_{3}CO_{3}^{*} + NO_{2} \\rightarrow  RCO_{3}NO_{2}}$ (<b>peroxiacetilnitrato, PAN</b>; «peroxiacetilnitrilo» en los apuntes)</li></ul>
<h4>Diagrama de isopletas de ozono</h4>
<p>El diagrama de la diap. 8 da las isopletas de O<sub>3</sub> (0,08 a 0,40 ppm) en función de NO<sub>x</sub> (ppm, 0-0,28) y VOC (ppmC, 0-2,0), con rectas VOC/NO<sub>x</sub> = 4/1, 8/1 y 15/1. Distingue una región <b>limitada por VOC</b> (punto A, mucho NO<sub>x</sub> y pocos VOC) y otra <b>limitada por NO<sub>x</sub></b> (punto C). Las fotos muestran Madrid con y sin contaminación fotoquímica.</p>
` },
    { id: "b4-invernadero", title: "5. Efecto invernadero y balance de CO2", slides: ["B4", 9, 11], html: `
<h4>Forzamiento radiativo</h4>
<p>Se denomina <b>forzamiento radiativo</b> al cambio en el flujo neto de energía radiativa hacia la superficie de la Tierra, medido en el <b>borde superior de la troposfera (a unos 12.000 m)</b>, como resultado de cambios internos en la composición de la atmósfera o de cambios en el aporte externo de energía solar. Se expresa en <b>W/m<sup>2</sup></b>. Positivo → calienta la superficie; negativo → la enfría (diap. 9).</p>
<p>La gráfica de la EPA muestra el forzamiento de los gases de larga vida entre 1980 y ≈ 2013: crece de ≈ 1,7 a ≈ 2,9 W/m<sup>2</sup>, dominado por el <b>CO<sub>2</sub></b>, seguido del <b>metano</b>, el óxido nitroso, el CFC-12, el CFC-11 y otros 15 gases. El eje derecho es el <i>Annual Greenhouse Gas Index</i>, con <b>1990 = 1</b>.</p>
<h4>Por qué atrapa calor la atmósfera</h4>
<p>Las curvas de emisión de cuerpo negro de la diap. 9 corresponden al <b>Sol (T ≈ 6.000 K)</b>, con máximo en torno a 0,5 µm, y a la <b>Tierra (T ≈ 288 K)</b>, con máximo en el infrarrojo (≈ 10 µm). La atmósfera deja pasar buena parte de la radiación visible, pero absorbe gran parte del infrarrojo terrestre (bandas de H<sub>2</sub>O, CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O, O<sub>3</sub>), como el vidrio de un invernadero o de un coche: «la luz visible atraviesa el vidrio; la emisión infrarroja queda bloqueada».</p>
<h4>Potencial de calentamiento global (GWP)</h4>
<table class="tbl"><thead><tr><th>Gas</th><th>Fórmula</th><th>GWP (IPCC 2001)</th></tr></thead><tbody>
<tr><td>Dióxido de carbono</td><td>CO<sub>2</sub></td><td>1</td></tr><tr><td>Metano</td><td>CH<sub>4</sub></td><td><b>23</b></td></tr>
<tr><td>Óxido nitroso</td><td>N<sub>2</sub>O</td><td><b>296</b></td></tr><tr><td>HFC-23</td><td>CHF<sub>3</sub></td><td>12.000</td></tr>
<tr><td>HFC-32 / HFC-41</td><td>CH<sub>2</sub>F<sub>2</sub> / CH<sub>3</sub>F</td><td>550 / 97</td></tr>
<tr><td>HFC-125 / HFC-134a / HFC-152a</td><td>C<sub>2</sub>HF<sub>5</sub> / CH<sub>2</sub>FCF<sub>3</sub> / CH<sub>3</sub>CHF<sub>2</sub></td><td>3.400 / 1.300 / 120</td></tr>
<tr><td>HFC-143a / HFC-236fa</td><td>CF<sub>3</sub>CH<sub>3</sub> / C<sub>3</sub>H<sub>2</sub>F<sub>6</sub></td><td>4.300 / 9.400</td></tr>
<tr><td>Perfluorometano / perfluoroetano</td><td>CF<sub>4</sub> / C<sub>2</sub>F<sub>6</sub></td><td>5.700 / 11.900</td></tr>
<tr><td>Perfluorociclobutano</td><td>c-C<sub>4</sub>F<sub>8</sub></td><td>10.000</td></tr>
<tr><td>Hexafluoruro de azufre</td><td>SF<sub>6</sub></td><td><b>22.200</b></td></tr>
</tbody></table>
<p>La tabla completa (diap. 10) incluye además HFC-43-10mee (1.500), HFC-134 (1.100), HFC-143 (330), HFC-227ea (3.500), HFC-245ca (640), perfluoropropano y perfluorobutano (8.600), perfluoropentano (8.900) y perfluorohexano (9.000).</p>
<h4>Balance de CO2 de la biomasa</h4>
<p>El esquema de la diap. 11 (C. Mota) muestra cuatro flujos: <b>1</b> fotosíntesis (la atmósfera cede CO<sub>2</sub> a la biomasa), <b>2</b> respiración y compost, <b>3</b> quemas, tala y pestes (devuelven CO<sub>2</sub>), y <b>4</b> energía fósil (emisión a la atmósfera desde un carbono almacenado fuera del ciclo de la biomasa). La fotosíntesis combina la fotofosforilación con el ciclo de Calvin-Benson:</p>
<div class="formula">$$\\mathrm{CO_2 + H_2O \\rightarrow CH_2O + O_2}\\qquad \\frac{\\text{masa CO}_2}{\\text{masa biomasa}} \\approx 1{,}5$$</div>
<p>Por tanto, cada tonelada de biomasa ha retirado de la atmósfera ≈ 1,5 t de CO<sub>2</sub> (44/30 ≈ 1,47).</p>
` },
    { id: "b4-particulas", title: "6. Material particulado: definición y tamaños", slides: ["B4", 12, 13], html: `
<h4>Definiciones y clasificaciones</h4>
<p>El <b>material particulado</b> está constituido por partículas <b>sólidas o líquidas</b>. Se clasifica según su <b>origen</b> (natural o antropogénico), su <b>mecanismo de producción</b> (primario o secundario) o su <b>tamaño</b> (diap. 12).</p>
<p><b>Diámetro aerodinámico</b>: diámetro de una esfera hipotética de <b>densidad 1 g/cm<sup>3</sup></b> que tenga la misma velocidad final debida a la fuerza gravitatoria, en aire en calma, que la partícula, bajo las condiciones existentes de temperatura, presión y humedad relativa.</p>
<p><b>Aerosol</b>: mezcla de partículas (sólidas o líquidas) en suspensión en el aire o en otro gas.</p>
<h4>Clasificación según tamaño</h4>
<table class="tbl cmp"><thead><tr><th>Tipo</th><th>Diámetro aerodinámico</th><th>Origen según los apuntes</th></tr></thead><tbody>
<tr><td>Sedimentables</td><td>&gt; 20 µm</td><td>—</td></tr>
<tr><td>En suspensión gruesas (PM10)</td><td>&lt; 10 µm</td><td><b>Generalmente origen natural</b></td></tr>
<tr><td>En suspensión finas (PM2,5)</td><td>&lt; 2,5 µm</td><td>Suelen proceder de <b>procesos de combustión</b> (transporte, generación de energía, plantas industriales) y del <b>polvo que transporta el viento</b></td></tr>
<tr><td>Ultrafinas</td><td>&lt; 0,1 µm</td><td>Proceden de <b>emisiones gaseosas</b>, como las finas</td></tr>
</tbody></table>
<p>Modas de tamaño: <b>nucleación</b> (&lt; 0,02 µm), <b>Aitken</b> (0,02-0,1 µm), <b>acumulación</b> (0,1-1 µm) y <b>gruesa</b> (&gt; 1 µm).</p>
<h4>Tamaños típicos y penetración en el organismo</h4>
<p>La diap. 13 compara intervalos de tamaño (0,001-100 µm) de partículas naturales (verde: núcleos de combustión, polvo del viento, emisiones volcánicas, sal marina, polen, hollín, virus, bacterias) y antropogénicas o de lugar de trabajo (rojo: humos de soldadura, escape diésel, cenizas volantes, pigmentos, negro de carbono, humo de tabaco, polvo de carbón, construcción). En el cuerpo humano: las partículas gruesas (<b>Dp &lt; 10 µm</b>) quedan en las vías respiratorias superiores; las finas (<b>Dp &lt; 2,5 µm</b>) llegan a las inferiores; las inhalables <b>&lt; 1 µm</b> alcanzan los alvéolos y las ultrafinas (<b>&lt; 100 nm</b>) pasan a la sangre.</p>
` },
    { id: "b4-formacion", title: "7. Partículas en la atmósfera y en la combustión de biomasa", slides: ["B4", 14, 15], html: `
<h4>Evolución de las modas en la atmósfera</h4>
<table class="tbl cmp"><thead><tr><th>Moda</th><th>Tamaño</th><th>Comportamiento (diap. 14)</th></tr></thead><tbody>
<tr><td>Nucleación</td><td>&lt; 0,02 µm</td><td>Vida media de <b>horas</b>: coagulan con otras partículas o crecen por condensación</td></tr>
<tr><td>Aitken</td><td>0,02-0,1 µm</td><td>Vida media de <b>horas</b>, por la misma evolución; una parte es el <b><i>soot</i></b> de la combustión</td></tr>
<tr><td>Acumulación</td><td>0,1-1 µm</td><td>Se forman a partir de las Aitken mediante <b>reacciones en fase líquida en el agua de las nubes</b>; pueden permanecer <b>semanas y meses</b></td></tr>
<tr><td>Gruesa</td><td>&gt; 1 µm</td><td>Fundamentalmente de <b>origen primario</b>; las secundarias se forman por reacciones entre aerosoles marinos y gases ($\\mathrm{HNO_{3} + NaCl \\rightarrow  NaNO_{3}}$)</td></tr>
</tbody></table>
<h4>Fuentes de las partículas atmosféricas</h4>
<p>El esquema de Lazaridis (2011) muestra que una partícula recibe aportes primarios (sal marina, emisiones de partículas inorgánicas como polvo y cenizas volantes, partículas orgánicas primarias OC y EC) y secundarios: vapores de compuestos orgánicos semivolátiles (de la fotoquímica de gases orgánicos primarios), HNO<sub>3</sub> (de las emisiones de NO<sub>x</sub>), NH<sub>3</sub>, H<sub>2</sub>O y H<sub>2</sub>SO<sub>4</sub> (de las emisiones de SO<sub>2</sub> o directamente emitido).</p>
<h4>Formación de partículas en la combustión de biomasa</h4>
<p>Según Van Loo y Koppejan (<i>The handbook of biomass combustion and co-firing</i>), en la parrilla se distinguen el <b>carbonizado (<i>char</i>)</b> y los <b>inquemados</b> (diap. 15):</p>
<ul><li><b>Partículas gruesas de cenizas volantes</b> (<b>10-200 µm</b>): cenizas arrastradas desde el lecho (Ca, Mg, Si, K, Al), sobre las que además condensan compuestos.</li>
<li><b>Aerosoles (partículas finas)</b> (<b>0,01-10 µm</b>): los vapores de K, Na, S, Cl y metales pesados liberados del combustible reaccionan en fase gas (KCl, K<sub>2</sub>SO<sub>4</sub>, compuestos de metales pesados), y en la fase de enfriamiento <b>nuclean y condensan</b> (también sobre núcleos de CaO) y aglomeran.</li></ul>
<h4>Cenizas volantes, hollín y salud</h4>
<p>Las partículas arrastradas por los gases se denominan <b>cenizas volantes</b>. Parte de ellas son <b>hollín (<i>soot</i>)</b>, que contiene carbono, sales inorgánicas y <b>carbono orgánico (OC)</b>, que incluye los <b>hidrocarburos poliaromáticos (HPA, PAH)</b>; uno de los más peligrosos es el <b>benzo(a)pireno</b>. El <b>BC</b> (<i>black carbon</i>) presente en el hollín contribuye al <b>calentamiento global</b>.</p>
<p><b>Partículas peligrosas para la salud: TODAS. Especialmente peligrosas: PM2,5.</b></p>
` }
  ],
  confusions: [
    ["Ozono <b>troposférico</b> vs ozono <b>estratosférico</b>", "El troposférico es un <b>contaminante</b> de la calidad del aire (fotoquímica NO<sub>2</sub> + hν). La <b>disminución</b> del estratosférico es la que deja pasar más radiación UV."],
    ["NO<sub>x</sub> <b>térmico</b> vs NO<sub>x</sub> <b>del combustible</b>", "Térmico (Zeldovich): N<sub>2</sub> del aire, importante a T &gt; 1.300 ºC y crece lentamente con el tiempo. Del combustible: N del combustible, a cualquier temperatura y régimen de mezcla; en la gráfica, ≈ 500 ppm en 0,5 ms."],
    ["NO<sub>x</sub> <b>por radicales</b> vs <b>térmico</b>", "El de radicales (CH• + N<sub>2</sub> → HCN + N) es importante en zonas <b>ricas en combustible</b>; el térmico, a alta temperatura con O<sub>2</sub> disponible."],
    ["$F_R$ vs $\\lambda$", "$F_R$ compara combustible/aire con el estequiométrico; $\\lambda$ compara aire/combustible (A/F). Son inversos."],
    ["<b>HNO<sub>3</sub></b> vs <b>H<sub>2</sub>SO<sub>4</sub></b> en la lluvia ácida", "OH + NO<sub>2</sub> → HNO<sub>3</sub> directamente; el SO<sub>2</sub> necesita dos pasos (OH + SO<sub>2</sub> + O<sub>2</sub> → SO<sub>3</sub> + HO<sub>2</sub>; SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub>) o la vía del H<sub>2</sub>O<sub>2</sub>."],
    ["Radical <b>peroxiacilo</b> (RCO<sub>3</sub>*) vs <b>aciloxi</b> (RCO<sub>2</sub>*)", "RCO* + O<sub>2</sub> da el peroxiacilo; este, al ceder un O (a HC, O<sub>2</sub> o NO), pasa a aciloxi y genera aldehído, O<sub>3</sub> o NO<sub>2</sub>. Con NO<sub>2</sub> forma PAN."],
    ["<b>GWP del CH<sub>4</sub></b> (23) vs <b>N<sub>2</sub>O</b> (296) vs <b>SF<sub>6</sub></b> (22.200)", "Valores del IPCC 2001 de los apuntes. HFC-23 = 12.000 y C<sub>2</sub>F<sub>6</sub> = 11.900 son los siguientes más altos tras el SF<sub>6</sub>."],
    ["<b>PM10</b> vs <b>PM2,5</b>", "PM10 &lt; 10 µm, generalmente de origen natural. PM2,5 &lt; 2,5 µm, de combustión y polvo del viento, y las especialmente peligrosas."],
    ["Moda de <b>acumulación</b> vs moda de <b>Aitken</b>", "Aitken (0,02-0,1 µm) vive horas e incluye el soot; acumulación (0,1-1 µm) se forma desde las Aitken en el agua de las nubes y dura semanas o meses."],
    ["<b>Cenizas volantes gruesas</b> (10-200 µm) vs <b>aerosoles</b> (0,01-10 µm)", "Las gruesas son ceniza arrastrada del lecho (Ca, Mg, Si, K, Al); los aerosoles nacen de vapores de K, Na, S, Cl y metales pesados por nucleación y condensación."]
  ]
};

/* ---------- B4 · preguntas: calidad ambiental, incidencia y NOx ---------- */
L("B4", "b4-calidad", "Objetivo de la calidad ambiental", 1, "Según los apuntes, el objetivo fundamental de la calidad del ambiente es…",
  ["no poner en riesgo la salud", "reducir las emisiones de gases de efecto invernadero", "garantizar la disponibilidad de agua y de espacios verdes", "cumplir los valores límite de emisión de la normativa"],
  0, "Diap. 3: «El objetivo fundamental de la calidad del ambiente es no poner en riesgo la salud».", "Apuntes B4, diap. 3");
L("B4", "b4-calidad", "Radón", 2, "Entre los parámetros que influyen en la calidad del ambiente, los apuntes señalan que el radón es…",
  ["la segunda causa de cáncer pulmonar en Europa", "la primera causa de cáncer pulmonar en Europa", "la segunda causa de cáncer de piel en Europa", "el principal contaminante del aire interior en Europa"],
  0, "Diap. 3: «Radón (segunda causa de cáncer pulmonar en Europa)». El aire interior se cita aparte (productos químicos y partículas como mohos).", "Apuntes B4, diap. 3");
L("B4", "b4-calidad", "Calidad del aire", 2, "Según los apuntes, la calidad del aire depende fundamentalmente de…",
  ["partículas (PM), ozono troposférico, SO₂, NO₂ e hidrocarburos aromáticos policíclicos",
   "partículas (PM), ozono estratosférico, SO₂, NO₂ e hidrocarburos aromáticos policíclicos",
   "partículas (PM), ozono troposférico, CO₂, CH₄ y N₂O",
   "mohos y otros microorganismos, productos químicos, SO₂ y radón"],
  0, "La lista de la diap. 3 es PM, ozono troposférico, SO₂, NO₂ y HAP. El ozono estratosférico se relaciona con la radiación UV; mohos y microorganismos son del aire interior.", "Apuntes B4, diap. 3");
L("B4", "b4-calidad", "Radiación UV", 3, "¿Cómo relacionan los apuntes la radiación ultravioleta con la calidad del ambiente?",
  ["La disminución de la capa de ozono estratosférico facilita la llegada de mayor cantidad de radiación",
   "El aumento del ozono troposférico facilita la llegada de mayor cantidad de radiación",
   "La disminución de la capa de ozono troposférico facilita la llegada de mayor cantidad de radiación",
   "El aumento de las partículas finas facilita la llegada de mayor cantidad de radiación"],
  0, "La UV aumenta por la disminución del ozono estratosférico. El ozono troposférico es un contaminante del aire, no un filtro de UV en los apuntes.", "Apuntes B4, diap. 3");
L("B4", "b4-calidad", "Parámetros de calidad", 3, "Señale la asociación parámetro–detalle que NO coincide con la lista de los apuntes:",
  ["Disponibilidad de agua: pesticidas, medicamentos y productos de higiene personal y limpieza",
   "Nanotecnología: las nanopartículas favorecen la inflamación de tejidos, lo que puede provocar fibrosis y cáncer",
   "Cambio climático: favorece, por ejemplo, la proliferación de patógenos resistentes",
   "Ruido: por ejemplo, aeropuertos y tráfico rodado"],
  0, "Pesticidas, medicamentos y productos de higiene se citan en la calidad del agua; la disponibilidad de agua se asocia a la agricultura y al cambio climático.", "Apuntes B4, diap. 3");
L("B4", "b4-calidad", "Factores de salud", 2, "Según la diap. 2, los factores sociales, económicos y medioambientales que afectan a la salud interaccionan, en la red de relaciones humanas, con…",
  ["la edad, el sexo y la dotación genética de cada persona",
   "la renta, el nivel educativo y el lugar de residencia de cada persona",
   "la dieta, la actividad física y el consumo de tabaco de cada persona",
   "la edad, la renta y el acceso a la sanidad de cada persona"],
  0, "Los apuntes citan condiciones de vida y de trabajo e influencias culturales, que interaccionan con la edad, el sexo y la dotación genética.", "Apuntes B4, diap. 2");
L("B4", "b4-calidad", "Economía circular", 2, "En el esquema del papel del biogás en la economía circular (Hoja de ruta del biogás, MITERD 2022), el producto que vuelve de la planta de biogás a la agricultura es…",
  ["el digerido", "el biometano", "el compost aerobio", "el CO₂ separado en el upgrading"],
  0, "La flecha de la planta de biogás hacia la agricultura es el «digerido»; el biometano va al suministro de carburante y la recogida de residuos, y el biogás a calor y electricidad.", "Apuntes B4, diap. 2");
L("B4", "b4-incidencia", "Cambio climático", 2, "Según el cuadro de incidencia de la valorización de biomasa y residuos, en el cambio climático la valorización tiene…",
  ["menor incidencia por el consumo de CO₂ que hacen los cultivos",
   "mayor incidencia por las emisiones de NOₓ y SO₂ de la combustión",
   "una incidencia nula, porque el CO₂ emitido no se contabiliza",
   "menor incidencia por la captura del CO₂ en el digestato"],
  0, "Diap. 4: «Menor incidencia por el consumo de CO₂ que hacen los cultivos». Los apuntes no hablan de incidencia nula ni de captura en el digestato.", "Apuntes B4, diap. 4");
L("B4", "b4-incidencia", "Suelo", 2, "En el cuadro de incidencia de la valorización, los efectos sobre el suelo son…",
  ["la ocupación del suelo por cultivos y la generación de residuos en la valorización",
   "la ocupación del suelo por cultivos y los vertidos con materia en suspensión",
   "la generación de residuos en la valorización y el consumo de agua de los cultivos",
   "la erosión por el laboreo de los cultivos y los vertidos con pesticidas"],
  0, "Suelo: ocupación por cultivos y generación de residuos. Los vertidos (pesticidas, materia en suspensión) son de calidad del agua y el consumo de agua, de disponibilidad del agua.", "Apuntes B4, diap. 4");
L("B4", "b4-incidencia", "Calidad del agua", 1, "En la valorización de biomasa y residuos, la calidad del agua se ve afectada, según los apuntes, por…",
  ["vertidos con pesticidas y con materia en suspensión", "el consumo de agua para el crecimiento de los cultivos", "las emisiones de NOₓ, SO₂ y partículas", "la ocupación del suelo por cultivos"],
  0, "Calidad del agua: vertidos con pesticidas y con materia en suspensión. El consumo para cultivos corresponde a la disponibilidad del agua.", "Apuntes B4, diap. 4");
L("B4", "b4-incidencia", "Calidad del aire", 2, "¿Qué emisiones recogen los apuntes como incidencia de la valorización en la calidad del aire?",
  ["NOₓ, SO₂ y partículas", "CO₂, CH₄ y N₂O", "NOₓ, CO y ozono troposférico", "SO₂, HCl y dioxinas"],
  0, "Diap. 4: emisiones de NOₓ, de SO₂ y de partículas.", "Apuntes B4, diap. 4");
L("B4", "b4-incidencia", "Cuadro de incidencias", 3, "Sobre el cuadro de incidencia de la valorización de biomasa y residuos en la calidad ambiental, señale la opción correcta:",
  ["La disponibilidad del agua se ve afectada por el consumo para el crecimiento de los cultivos",
   "El suelo se ve afectado por la generación de residuos en la valorización",
   "La calidad del aire se ve afectada por las emisiones de partículas",
   "Todas las otras opciones son correctas"],
  3, "Las tres afirmaciones figuran en la diap. 4, por lo que la respuesta es «Todas las otras opciones son correctas».", "Apuntes B4, diap. 4");
L("B4", "b4-nox", "Oxígeno estequiométrico", 2, "Para un combustible C<sub>x</sub>H<sub>y</sub>S<sub>z</sub>O<sub>w</sub>, los moles de O<sub>2</sub> estequiométricos por mol de combustible son, según los apuntes…",
  ["$x + y/4 + z - w/2$", "$x + y/2 + z - w/2$", "$x + y/4 + z + w/2$", "$x + y/4 + 2z - w$"],
  0, "Cada elemento del combustible $C_xH_yS_zO_w$ consume el oxígeno de su producto de combustión completa (Apuntes B4, diap. 5): $$\\underbrace{x}_{C\\to CO_2}+\\underbrace{\\frac{y}{4}}_{H\\to H_2O}+\\underbrace{z}_{S\\to SO_2}-\\underbrace{\\frac{w}{2}}_{\\text{O propio}}$$ El hidrógeno da y/2 moléculas de H₂O, que necesitan y/4 de O₂; el oxígeno del combustible aporta w/2 moléculas de O₂ que no hay que suministrar.", "Apuntes B4, diap. 5");
L("B4", "b4-nox", "Aire estequiométrico", 3, "Con la ecuación estequiométrica de los apuntes, la combustión completa de 1 mol de propano (C<sub>3</sub>H<sub>8</sub>) con aire requiere…",
  ["5 mol de O₂ acompañados de ≈ 18,8 mol de N₂ (≈ 23,8 mol de aire)",
   "5 mol de O₂ acompañados de ≈ 23,8 mol de N₂ (≈ 28,8 mol de aire)",
   "7 mol de O₂ acompañados de ≈ 26,3 mol de N₂ (≈ 33,3 mol de aire)",
   "4 mol de O₂ acompañados de ≈ 15,0 mol de N₂ (≈ 19,0 mol de aire)"],
  0, "Ecuación estequiométrica de los apuntes (Apuntes B4, diap. 5) para el propano, $C_3H_8$ (x = 3, y = 8): $$n_{O_2}=x+\\frac{y}{4}=3+2=5\\ \\text{mol}$$ $$n_{N_2}=\\frac{0{,}79}{0{,}21}\\cdot5\\approx18{,}8\\ \\text{mol}\\qquad n_{aire}=\\frac{5}{0{,}21}\\approx\\boxed{23{,}8\\ \\text{mol}}$$ La segunda opción toma 23,8 mol como N₂ (es el aire); 7 mol saldría con y/2 en vez de y/4.", "Apuntes B4, diap. 5");
L("B4", "b4-nox", "Combustión real", 2, "Según los apuntes, en el esquema real de combustión (no estequiométrica) aparecen entre los productos…",
  ["CO, NO, NO₂, hidrocarburos $C_{p}H_{q}$, N₂O y O₂, además de CO₂, H₂O, SO₂ y N₂",
   "CO, NO, NO₂, SO₃, H₂S y O₃, además de CO₂, H₂O, SO₂ y N₂",
   "solo CO₂, H₂O, SO₂ y N₂, en proporciones distintas a las estequiométricas",
   "CO, H₂, NH₃, HCN y N₂O, además de CO₂, H₂O, SO₂ y N₂"],
  0, "Esquema real: $b\\,\\mathrm{CO_2}+c\\,\\mathrm{H_2O}+d\\,\\mathrm{SO_2}+e\\,\\mathrm{N_2}+f\\,\\mathrm{CO}+g\\,\\mathrm{NO}+h\\,\\mathrm{NO_2}+i\\,\\mathrm{C_pH_q}+j\\,\\mathrm{N_2O}+k\\,\\mathrm{O_2}$.", "Apuntes B4, diap. 5");
L("B4", "b4-nox", "Mecanismo de Zeldovich", 2, "El mecanismo de Zeldovich de formación de NO<sub>x</sub>…",
  ["forma NO a partir del N₂ y el O₂ del aire a alta temperatura y es importante a T > 1.300 ºC",
   "forma NO a partir del N₂ y el O₂ del aire a alta temperatura y es importante a T > 1.000 ºC",
   "forma NO a partir del nitrógeno del combustible y es importante a T > 1.300 ºC",
   "forma NO a partir de radicales CH• y es importante en zonas ricas en combustible"],
  0, "Zeldovich = NO térmico (N₂ + O = NO + N; O₂ + N = NO + O; OH• + N = NO + H), importante a T > 1.300 ºC.", "Apuntes B4, diap. 5");
L("B4", "b4-nox", "Mecanismos de NOx", 3, "¿Qué mecanismo de formación de NO<sub>x</sub> actúa, según los apuntes, a cualquier temperatura y régimen de mezcla?",
  ["El del nitrógeno contenido en el combustible", "El térmico de Zeldovich", "El de radicales derivados de la combustión", "Ninguna de las otras opciones"],
  0, "El NOₓ del combustible se forma «a cualquier temperatura y régimen de mezcla». El térmico requiere T > 1.300 ºC y el de radicales es importante en zonas ricas.", "Apuntes B4, diap. 5");
L("B4", "b4-nox", "NOx por radicales", 3, "Sobre el mecanismo de formación de NO<sub>x</sub> a partir de radicales derivados de la combustión, señale la opción correcta:",
  ["Es importante en zonas ricas en combustible e incluye la reacción $\\mathrm{CH^{\\bullet} + N_2 \\rightarrow HCN + N}$",
   "Es importante en zonas pobres en combustible e incluye la reacción $\\mathrm{CH^{\\bullet} + N_2 \\rightarrow HCN + N}$",
   "Es importante en zonas ricas en combustible e incluye la reacción $\\mathrm{N_2 + O = NO + N}$",
   "Es importante a T > 1.300 ºC e incluye la reacción $\\mathrm{HCN + O_2 \\rightarrow NO + CO + H}$"],
  0, "Radicales: zonas ricas en combustible; CH• + N₂ → HCN + N, N + OH• → NO + H, N + O₂ → NO + O, HCN + O₂ → NO + CO + H. N₂ + O = NO + N es de Zeldovich.", "Apuntes B4, diap. 5");
L("B4", "b4-nox", "Tiempo de residencia", 3, "En la gráfica de NO<sub>x</sub> frente al tiempo de residencia de los apuntes, señale la afirmación correcta:",
  ["El NO del combustible alcanza ≈ 500 ppm en torno a 0,5 ms y se estabiliza, mientras el NO térmico crece casi linealmente hasta ≈ 200 ppm a 1,5 ms",
   "El NO térmico alcanza ≈ 500 ppm en torno a 0,5 ms y se estabiliza, mientras el NO del combustible crece casi linealmente hasta ≈ 200 ppm a 1,5 ms",
   "El NO del combustible alcanza ≈ 200 ppm en torno a 0,5 ms y se estabiliza, mientras el NO térmico crece casi linealmente hasta ≈ 500 ppm a 1,5 ms",
   "Ambos alcanzan ≈ 500 ppm en torno a 0,5 ms y se estabilizan, porque dependen de la misma reacción"],
  0, "Curva superior (NO combustible): ≈ 460 ppm a 0,43 ms y meseta ≈ 490-500 ppm. Curva inferior (NO térmico): recta, ≈ 215 ppm a 1,45 ms.", "Apuntes B4, diap. 6");
L("B4", "b4-nox", "Relación de equivalencia", 3, "En la gráfica de la combustión propano-aire (fracción molar frente a la relación de equivalencia de 0,7 a 1,3), ¿qué ocurre al pasar de mezclas pobres a ricas en combustible?",
  ["El O₂ disminuye, el CO y el H₂ aumentan y el NO, máximo hacia 0,9-0,95, cae con fuerza",
   "El O₂ aumenta, el CO y el H₂ disminuyen y el NO, máximo hacia 1,2, cae con fuerza",
   "El O₂ disminuye, el CO y el H₂ aumentan y el NO crece de forma continua hasta 1,3",
   "El O₂ disminuye, el CO y el H₂ disminuyen y el NO se mantiene en ≈ 3.000 ppm"],
  0, "Con más combustible ($F_{R}$ creciente) baja el O₂, suben CO y H₂, y el NO tiene su máximo ligeramente por debajo de 1 y desciende a ≈ 50 ppm en 1,3.", "Apuntes B4, diap. 6");

/* ---------- B4 · preguntas: lluvia ácida, ozono e invernadero ---------- */
L("B4", "b4-acida", "Radical hidroxilo", 2, "En el esquema de lluvia ácida de los apuntes, el radical hidroxilo se forma mediante…",
  ["$\\mathrm{O + H_2O \\rightarrow 2\\,HO}$, a partir del oxígeno atómico procedente del ozono",
   "$\\mathrm{O_3 + H_2O \\rightarrow H_2O_2 + O_2}$, a partir del ozono troposférico",
   "$\\mathrm{HO_2 + H_2O \\rightarrow H_2O_2 + OH}$, como única vía de formación",
   "$\\mathrm{NO_2} + h\\nu \\rightarrow \\mathrm{NO + O}$, a partir del dióxido de nitrógeno"],
  0, "O₃ → O (átomo de oxígeno); O + H₂O → 2 HO. El OH también se regenera (NO + HO₂, HO₂ + H₂O), pero no es la única vía.", "Apuntes B4, diap. 7");
L("B4", "b4-acida", "Ácido sulfúrico", 3, "Según los apuntes, ¿qué vías conducen a la formación de H<sub>2</sub>SO<sub>4</sub>? (Puede haber varias correctas)",
  ["$\\mathrm{OH + SO_2 + O_2 \\rightarrow SO_3 + HO_2}$, seguida de $\\mathrm{SO_3 + H_2O \\rightarrow H_2SO_4}$",
   "$\\mathrm{H_2O_2 + SO_2 \\rightarrow H_2SO_4}$",
   "$\\mathrm{OH + NO_2 \\rightarrow H_2SO_4}$, en presencia de partículas minerales",
   "$\\mathrm{HO + CO + O_2 \\rightarrow H_2SO_4 + HO_2}$"],
  [0, 1], "Las dos vías del sulfúrico son la del OH (vía SO₃) y la del agua oxigenada. OH + NO₂ da HNO₃ y HO + CO + O₂ da CO₂ + HO₂.", "Apuntes B4, diap. 7");
L("B4", "b4-acida", "Deposición seca", 2, "En el esquema de los apuntes, la deposición seca corresponde a…",
  ["partículas de sulfatos formadas por H₂SO₄ y partículas minerales",
   "partículas de nitratos formadas por HNO₃ y sal marina",
   "gotas de lluvia con H₂SO₄ y HNO₃ disueltos",
   "partículas de hollín con hidrocarburos aromáticos policíclicos"],
  0, "H₂O₂ + SO₂ → H₂SO₄ + partículas minerales → partículas de sulfatos (deposición seca). Los ácidos disueltos forman la lluvia ácida (deposición húmeda).", "Apuntes B4, diap. 7");
L("B4", "b4-acida", "Radical hidroperoxilo", 2, "En el esquema de la lluvia ácida, el radical hidroperoxilo (HO<sub>2</sub>) se forma en la reacción…",
  ["$\\mathrm{OH + SO_2 + O_2 \\rightarrow SO_3 + HO_2}$", "$\\mathrm{NO + HO_2 \\rightarrow NO_2 + OH}$", "$\\mathrm{O + H_2O \\rightarrow 2\\,HO}$", "$\\mathrm{OH + NO_2 \\rightarrow HNO_3}$"],
  0, "El HO₂ (hidroperoxilo) aparece en OH + SO₂ + O₂ y en HO + CO + O₂; NO + HO₂ lo consume para regenerar OH.", "Apuntes B4, diap. 7");
L("B4", "b4-acida", "Fotólisis del NO2", 2, "La fotólisis del NO<sub>2</sub> que inicia la formación de ozono troposférico se produce, según los apuntes, con radiación de longitud de onda…",
  ["λ ≤ 420 nm", "λ ≥ 420 nm", "λ ≤ 240 nm", "λ ≤ 700 nm"],
  0, "NO₂ + hν → NO + O con λ ≤ 420 nm; después O + O₂ → O₃.", "Apuntes B4, diap. 8");
L("B4", "b4-acida", "PAN", 3, "En las reacciones en cadena del ozono troposférico, el peroxiacetilnitrato (PAN) se forma a partir de…",
  ["$\\mathrm{CH_3CO_3^{*} + NO_2}$", "$\\mathrm{RCO_3^{*} + NO}$", "$\\mathrm{RCO^{*} + O_2}$", "$\\mathrm{RCO_3^{*} + HC}$"],
  0, "CH₃CO₃* + NO₂ → RCO₃NO₂ (PAN). RCO₃* + NO da RCO₂* + NO₂; RCO* + O₂ da el peroxiacilo; RCO₃* + HC da aciloxi + aldehído.", "Apuntes B4, diap. 8");
L("B4", "b4-acida", "Radicales del ozono", 3, "Sobre los radicales de la química del ozono troposférico, señale la opción correcta:",
  ["RCO₃* es el radical peroxiacilo, y al reaccionar con O₂ forma RCO₂* (aciloxi) y O₃",
   "RCO₃* es el radical aciloxi, y al reaccionar con O₂ forma RCO₂* (peroxiacilo) y O₃",
   "RCO₂* es el radical peroxiacilo, y al reaccionar con HC forma un aldehído y O₃",
   "RCO₃* es el radical peroxiacilo, y al reaccionar con NO forma RCO₂* y O₃"],
  0, "RCO* + O₂ → RCO₃* (peroxiacilo); RCO₃* + O₂ → RCO₂* (aciloxi) + O₃; con NO da RCO₂* + NO₂.", "Apuntes B4, diap. 8");
L("B4", "b4-acida", "Isopletas de ozono", 3, "En el diagrama de isopletas de ozono de los apuntes (NO<sub>x</sub> frente a VOC), un punto con mucho NO<sub>x</sub> y pocos VOC, como el punto A, se encuentra en la región…",
  ["limitada por VOC, donde reducir VOC es lo que más rebaja el ozono",
   "limitada por NOₓ, donde reducir NOₓ es lo que más rebaja el ozono",
   "limitada por VOC, donde reducir NOₓ es lo que más rebaja el ozono",
   "de máxima formación de ozono, con concentraciones superiores a 0,36 ppm"],
  0, "El punto A está en la zona «VOC limited» (arriba a la izquierda, isopletas ≈ 0,12 ppm). El punto C, con poco NOₓ, está en la zona «NOₓ limited».", "Apuntes B4, diap. 8");
L("B4", "b4-invernadero", "Forzamiento radiativo", 2, "Según los apuntes, el forzamiento radiativo es el cambio en el flujo neto de energía radiativa hacia la superficie de la Tierra medido…",
  ["en el borde superior de la troposfera, a unos 12.000 m, y se expresa en W/m²",
   "en el borde superior de la estratosfera, a unos 50.000 m, y se expresa en W/m²",
   "en la superficie terrestre, a nivel del mar, y se expresa en W/m²",
   "en el borde superior de la troposfera, a unos 12.000 m, y se expresa en kWh/m²·año"],
  0, "Diap. 9: medido en el borde superior de la troposfera (≈ 12.000 m s. n. m.), en W/m². Positivo calienta y negativo enfría.", "Apuntes B4, diap. 9");
L("B4", "b4-invernadero", "Forzamiento radiativo", 3, "¿Qué puede originar, según la definición de los apuntes, un forzamiento radiativo? (Puede haber varias correctas)",
  ["Cambios internos en la composición de la atmósfera", "Cambios en el aporte externo de energía solar", "Cambios en la temperatura del manto terrestre", "Cambios en la rotación de la Tierra"],
  [0, 1], "La definición cita los cambios internos en la composición de la atmósfera o los cambios en el aporte externo de energía solar.", "Apuntes B4, diap. 9");
L("B4", "b4-invernadero", "GWP", 1, "Según la tabla de potenciales de calentamiento global (IPCC 2001) de los apuntes, el GWP del metano es…",
  ["23", "296", "21", "1"],
  0, "CH₄ = 23 y N₂O = 296 (CO₂ = 1).", "Apuntes B4, diap. 10");
L("B4", "b4-invernadero", "GWP", 2, "¿Qué gas de la tabla de los apuntes tiene el mayor potencial de calentamiento global?",
  ["Hexafluoruro de azufre (SF₆), 22.200", "HFC-23 (CHF₃), 12.000", "Perfluoroetano (C₂F₆), 11.900", "Perfluorociclobutano (c-C₄F₈), 10.000"],
  0, "SF₆ = 22.200 es el mayor; le siguen HFC-23 (12.000), C₂F₆ (11.900) y c-C₄F₈ (10.000).", "Apuntes B4, diap. 10");
L("B4", "b4-invernadero", "CO2 equivalente", 3, "Usando los GWP de los apuntes (IPCC 2001), la emisión de 100 kg de CH<sub>4</sub> y 10 kg de N<sub>2</sub>O equivale a…",
  ["5.260 kg de CO₂ equivalente", "5.060 kg de CO₂ equivalente", "2.596 kg de CO₂ equivalente", "29.830 kg de CO₂ equivalente"],
  0, "El CO₂ equivalente es la suma de cada masa por su GWP (IPCC 2001, Apuntes B4, diap. 10): CH₄ = 23 y N₂O = 296. $$m_{CO_2\\text{-eq}}=100\\cdot23+10\\cdot296=2300+2960=\\boxed{5260\\ \\text{kg}}$$ Con GWP = 21 para el metano (no es el valor de los apuntes) saldría 5.060; intercambiar los GWP da 29.830; 2.596 no multiplica el GWP del N₂O por los 10 kg.", "Apuntes B4, diap. 10");
L("B4", "b4-invernadero", "Forzamiento por gas", 2, "En la gráfica de forzamiento radiativo de la EPA (1980-2013) de los apuntes, los dos gases que más contribuyen son…",
  ["el dióxido de carbono y el metano", "el metano y el óxido nitroso", "el dióxido de carbono y el CFC-12", "el óxido nitroso y el CFC-11"],
  0, "La banda mayor es la del CO₂ y la segunda la del metano; después vienen el óxido nitroso, el CFC-12, el CFC-11 y otros 15 gases. El índice anual toma 1990 = 1.", "Apuntes B4, diap. 9");
L("B4", "b4-invernadero", "Balance de CO2", 2, "Según el balance de CO<sub>2</sub> de los apuntes (CO<sub>2</sub> + H<sub>2</sub>O → CH<sub>2</sub>O + O<sub>2</sub>), la masa de CO<sub>2</sub> fijada por unidad de masa de biomasa es aproximadamente…",
  ["1,5", "0,68", "3,67", "1,0"],
  0, "Con la reacción de fijación de los apuntes (Apuntes B4, diap. 11), una unidad de biomasa $CH_2O$ (30 g/mol) fija un mol de CO₂ (44 g/mol): $$\\mathrm{CO_2+H_2O\\rightarrow CH_2O+O_2}\\qquad\\frac{m_{CO_2}}{m_{biomasa}}=\\frac{44}{30}\\approx\\boxed{1{,}5}$$ 0,68 es la relación inversa (30/44) y 3,67 la relación CO₂/C (44/12).", "Apuntes B4, diap. 11");
L("B4", "b4-invernadero", "Balance de CO2", 3, "En el esquema de balance de CO<sub>2</sub> (C. Mota) de los apuntes, ¿qué flujo aporta a la atmósfera CO<sub>2</sub> procedente de la energía fósil y no del ciclo de la biomasa?",
  ["El flujo 4", "El flujo 3 (quemas, tala y pestes)", "El flujo 2 (respiración y compost)", "El flujo 1 (fotosíntesis)"],
  0, "1: fotosíntesis (absorbe CO₂); 2: respiración y compost; 3: quemas, tala y pestes; 4: energía fósil.", "Apuntes B4, diap. 11");
L("B4", "b4-invernadero", "Cuerpo negro", 3, "Las dos curvas de emisión de cuerpo negro de la diap. 9 (efecto invernadero) corresponden a temperaturas de…",
  ["6.000 K (Sol) y 288 K (Tierra)", "5.800 K (Sol) y 255 K (Tierra)", "6.000 K (Sol) y 255 K (Tierra)", "5.800 K (Sol) y 288 K (Tierra)"],
  0, "Las curvas están rotuladas T = 6000 K y T = 288 K: el máximo solar cae en el visible (≈ 0,5 µm) y el terrestre en el infrarrojo.", "Apuntes B4, diap. 9");

/* ---------- B4 · preguntas: material particulado ---------- */
L("B4", "b4-particulas", "Diámetro aerodinámico", 2, "Según los apuntes, el diámetro aerodinámico de una partícula es el diámetro de una esfera hipotética…",
  ["de densidad 1 g/cm³ con la misma velocidad final por gravedad, en aire en calma, que la partícula",
   "de la misma densidad que la partícula y con su misma velocidad final por gravedad, en aire en calma",
   "de densidad 1 g/cm³ con la misma masa que la partícula, en las condiciones de temperatura y presión existentes",
   "de densidad 2,5 g/cm³ con la misma velocidad final por gravedad, en aire en calma, que la partícula"],
  0, "Esfera de densidad 1 g/cm³ con la misma velocidad final debida a la gravedad, en aire en calma, en las condiciones existentes de T, P y humedad relativa.", "Apuntes B4, diap. 12");
L("B4", "b4-particulas", "PM10 y PM2,5", 2, "Según los apuntes, las partículas PM10 y las PM2,5 suelen tener, respectivamente, origen…",
  ["generalmente natural, y en procesos de combustión y polvo transportado por el viento",
   "en procesos de combustión, y generalmente natural",
   "generalmente natural, y en emisiones gaseosas como las ultrafinas exclusivamente",
   "en el polvo transportado por el viento, y en la sal marina"],
  0, "PM10 (< 10 µm): generalmente origen natural. PM2,5 (< 2,5 µm): combustión (transporte, generación de energía, plantas industriales) y polvo del viento.", "Apuntes B4, diap. 12");
L("B4", "b4-particulas", "Clasificación por tamaño", 3, "Señale la opción que NO coincide con la clasificación por tamaño de los apuntes:",
  ["Partículas sedimentables: diámetro aerodinámico > 10 µm",
   "Partículas en suspensión ultrafinas: diámetro aerodinámico < 0,1 µm",
   "Moda Aitken: 0,02-0,1 µm",
   "Moda de acumulación: 0,1-1 µm"],
  0, "Las sedimentables tienen un diámetro aerodinámico > 20 µm; 10 µm es el límite de las PM10.", "Apuntes B4, diap. 12");
L("B4", "b4-particulas", "Clasificaciones", 2, "Los apuntes clasifican el material particulado según su origen, su mecanismo de producción y su tamaño. Las categorías por mecanismo de producción son…",
  ["primario o secundario", "natural o antropogénico", "sedimentable o en suspensión", "sólido o líquido"],
  0, "Origen: natural o antropogénico. Mecanismo de producción: primario o secundario. Tamaño: modas, PM10, PM2,5…", "Apuntes B4, diap. 12");
L("B4", "b4-particulas", "Aerosol", 1, "Según los apuntes, un aerosol es…",
  ["una mezcla de partículas sólidas o líquidas en suspensión en el aire o en otro gas",
   "una mezcla de partículas solo líquidas en suspensión en el aire",
   "el conjunto de partículas sedimentables de diámetro aerodinámico superior a 20 µm",
   "el conjunto de cenizas volantes arrastradas por los gases de combustión"],
  0, "Aerosol = mezcla de partículas (sólidas o líquidas) en suspensión en el aire o en otro gas.", "Apuntes B4, diap. 12");
L("B4", "b4-particulas", "Penetración en el organismo", 3, "Según la figura de penetración de partículas en el aparato respiratorio de los apuntes, ¿qué partículas alcanzan los alvéolos?",
  ["Las inhalables, con Dp < 1 µm", "Las gruesas, con Dp < 10 µm", "Las finas, con Dp < 2,5 µm, que se quedan en la tráquea", "Las sedimentables, con Dp > 20 µm"],
  0, "Gruesas (Dp < 10 µm): vías superiores. Finas (Dp < 2,5 µm): vías inferiores. Inhalables (Dp < 1 µm): alvéolos. Ultrafinas (< 100 nm): pasan a la sangre.", "Apuntes B4, diap. 13");
L("B4", "b4-formacion", "Moda de acumulación", 3, "Según los apuntes, las partículas de la moda de acumulación (0,1-1 µm)…",
  ["se forman a partir de las Aitken mediante reacciones en fase líquida en el agua de las nubes y pueden permanecer semanas y meses",
   "se forman a partir de las de nucleación por coagulación y tienen una vida media de horas",
   "se forman a partir de las Aitken mediante reacciones en fase gas y pueden permanecer horas",
   "son fundamentalmente de origen primario y se forman por reacción entre aerosoles marinos y gases"],
  0, "Acumulación: desde las Aitken, en fase líquida en el agua de las nubes, permanencia de semanas y meses. Nucleación y Aitken viven horas; la moda gruesa es fundamentalmente primaria.", "Apuntes B4, diap. 14");
L("B4", "b4-formacion", "Moda gruesa", 2, "Las partículas secundarias de la moda gruesa (&gt; 1 µm) se forman, según los apuntes, por…",
  ["reacciones entre aerosoles marinos y gases, como ácido nítrico + NaCl → NaNO₃",
   "reacciones en fase líquida en el agua de las nubes a partir de partículas Aitken",
   "coagulación de partículas de nucleación y condensación de vapores",
   "reacciones entre SO₂ y partículas minerales, que dan partículas de sulfatos"],
  0, "Moda gruesa: fundamentalmente primaria; las secundarias se forman por reacción de aerosoles marinos con gases (HNO₃ + NaCl → NaNO₃).", "Apuntes B4, diap. 14");
L("B4", "b4-formacion", "Vida media de las modas", 2, "¿Qué modas de partículas tienen, según los apuntes, una vida media de horas?",
  ["Las de nucleación y las de Aitken", "Las de Aitken y las de acumulación", "Las de acumulación y las gruesas", "Solo las de nucleación"],
  0, "Nucleación: horas (coagulan o crecen por condensación). Aitken: horas, por la misma evolución. Acumulación: semanas y meses.", "Apuntes B4, diap. 14");
L("B4", "b4-formacion", "Formación en la combustión", 3, "En el esquema de formación de partículas en la combustión de biomasa (Van Loo y Koppejan), señale la opción correcta:",
  ["Las cenizas gruesas (10-200 µm) proceden de la ceniza arrastrada del lecho (Ca, Mg, Si, K, Al), y los aerosoles (0,01-10 µm), de la nucleación y condensación de vapores de K, Na, S, Cl y metales pesados",
   "Las cenizas gruesas (0,01-10 µm) proceden de la ceniza arrastrada del lecho (Ca, Mg, Si, K, Al), y los aerosoles (10-200 µm), de la nucleación y condensación de vapores de K, Na, S, Cl y metales pesados",
   "Las cenizas gruesas (10-200 µm) proceden de la nucleación de vapores de K, Na, S y Cl, y los aerosoles (0,01-10 µm), de la ceniza arrastrada del lecho (Ca, Mg, Si, K, Al)",
   "Las cenizas gruesas (10-200 µm) y los aerosoles (0,01-10 µm) proceden exclusivamente de la ceniza arrastrada del lecho (Ca, Mg, Si, K, Al)"],
  0, "Diap. 15: partículas gruesas 10-200 µm (ceniza arrastrada del lecho y condensación sobre superficies); aerosoles 0,01-10 µm (vapores de K, Na, S, Cl y metales pesados → reacciones en fase gas → nucleación, condensación sobre núcleos de CaO y aglomeración).", "Apuntes B4, diap. 15");
L("B4", "b4-formacion", "Hollín", 3, "Sobre el hollín (<i>soot</i>) según los apuntes, señale la opción correcta:",
  ["Contiene carbono, sales inorgánicas y carbono orgánico con HPA como el benzo(a)pireno, y su BC contribuye al calentamiento global",
   "Contiene carbono, sales inorgánicas y carbono orgánico con HPA como el benzo(a)pireno, y su BC contribuye al enfriamiento global",
   "Contiene solo carbono elemental, sin compuestos orgánicos, y su BC contribuye al calentamiento global",
   "Es la fracción de las cenizas volantes que se deposita en la parrilla como carbonizado (char)"],
  0, "Parte de las cenizas volantes es hollín: C, sales inorgánicas y OC (que incluye HPA/PAH, como el benzo(a)pireno). El BC del hollín contribuye al calentamiento global. El char queda en la parrilla.", "Apuntes B4, diap. 15");
L("B4", "b4-formacion", "Peligrosidad", 1, "Según los apuntes, ¿qué partículas son peligrosas para la salud?",
  ["Todas, y especialmente las PM2,5", "Solo las PM2,5 y las ultrafinas", "Todas, y especialmente las PM10", "Solo las que contienen benzo(a)pireno"],
  0, "Diap. 15: «Partículas peligrosas para la salud: TODAS. Especialmente peligrosas: PM2,5».", "Apuntes B4, diap. 15");

/* ---------- B4 · tarjetas ---------- */
C("B4", "b4-calidad", "Objetivo fundamental de la calidad del ambiente", "<b>No poner en riesgo la salud.</b>");
C("B4", "b4-calidad", "Contaminantes fundamentales de la calidad del aire", "<b>PM</b>, <b>ozono troposférico</b>, <b>SO<sub>2</sub></b>, <b>NO<sub>2</sub></b> e <b>hidrocarburos aromáticos policíclicos</b>.");
C("B4", "b4-calidad", "¿Qué dicen los apuntes del radón?", "Es la <b>segunda causa de cáncer pulmonar en Europa</b>.");
C("B4", "b4-incidencia", "Incidencia de la valorización en el cambio climático", "<b>Menor incidencia</b>, por el consumo de CO<sub>2</sub> que hacen los cultivos.");
C("B4", "b4-incidencia", "Incidencia de la valorización en el suelo", "<b>Ocupación</b> del suelo por cultivos y <b>generación de residuos</b> en la valorización.");
C("B4", "b4-nox", "O<sub>2</sub> estequiométrico de C<sub>x</sub>H<sub>y</sub>S<sub>z</sub>O<sub>w</sub>", "$x + y/4 + z - w/2$ moles; el aire aporta además $0{,}79/0{,}21$ mol de N<sub>2</sub> por mol de O<sub>2</sub>.");
C("B4", "b4-nox", "Tres mecanismos de formación de NO<sub>x</sub>", "<b>Térmico</b> (Zeldovich, T &gt; 1.300 ºC), <b>del combustible</b> (cualquier T y mezcla) y <b>por radicales</b> (zonas ricas en combustible).");
C("B4", "b4-nox", "NO del combustible frente a NO térmico con el tiempo de residencia", "Combustible: ≈ <b>500 ppm</b> en ≈ 0,5 ms y meseta. Térmico: crecimiento casi lineal, ≈ 215 ppm a 1,45 ms.");
C("B4", "b4-acida", "¿Cómo se forman los ácidos de la lluvia ácida?", "OH + NO<sub>2</sub> → <b>HNO<sub>3</sub></b>; OH + SO<sub>2</sub> + O<sub>2</sub> → SO<sub>3</sub> + HO<sub>2</sub> y SO<sub>3</sub> + H<sub>2</sub>O → <b>H<sub>2</sub>SO<sub>4</sub></b>; también H<sub>2</sub>O<sub>2</sub> + SO<sub>2</sub> → H<sub>2</sub>SO<sub>4</sub>.");
C("B4", "b4-acida", "Ciclo fotoquímico del ozono troposférico", "NO<sub>2</sub> + hν (λ ≤ <b>420 nm</b>) → NO + O; O + O<sub>2</sub> → O<sub>3</sub>; O<sub>3</sub> + NO → NO<sub>2</sub> + O<sub>2</sub>.");
C("B4", "b4-acida", "¿Qué es el PAN y cómo se forma?", "Peroxiacetilnitrato (RCO<sub>3</sub>NO<sub>2</sub>): CH<sub>3</sub>CO<sub>3</sub>* + NO<sub>2</sub>.");
C("B4", "b4-invernadero", "Forzamiento radiativo", "Cambio del flujo neto radiativo hacia la superficie, medido en el borde superior de la troposfera (≈ <b>12.000 m</b>), en <b>W/m<sup>2</sup></b>; positivo calienta.");
C("B4", "b4-invernadero", "GWP (IPCC 2001) de CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O y SF<sub>6</sub>", "<b>1</b>, <b>23</b>, <b>296</b> y <b>22.200</b>.");
C("B4", "b4-invernadero", "Masa de CO<sub>2</sub> por masa de biomasa", "≈ <b>1,5</b> (CO<sub>2</sub> + H<sub>2</sub>O → CH<sub>2</sub>O + O<sub>2</sub>; 44/30).");
C("B4", "b4-particulas", "Diámetro aerodinámico", "Diámetro de una esfera de <b>1 g/cm<sup>3</sup></b> con la misma velocidad final por gravedad, en aire en calma, que la partícula.");
C("B4", "b4-particulas", "Límites de tamaño de las partículas", "Sedimentables &gt; 20 µm · PM10 &lt; 10 µm · PM2,5 &lt; 2,5 µm · ultrafinas &lt; 0,1 µm.");
C("B4", "b4-formacion", "Modas de partículas y su vida media", "Nucleación &lt; 0,02 µm y Aitken 0,02-0,1 µm: <b>horas</b>. Acumulación 0,1-1 µm: <b>semanas y meses</b>. Gruesa &gt; 1 µm: sobre todo primaria.");
C("B4", "b4-formacion", "Composición del hollín", "Carbono, sales inorgánicas y <b>carbono orgánico</b> (HPA, p. ej. <b>benzo(a)pireno</b>); su BC contribuye al calentamiento.");

/* ---------- B4 · ejercicios ---------- */
DRILLS.push({ id: "b4-c-incidencia", type: "classify", tema: "B4", sec: "b4-incidencia", title: "¿A qué medio afecta cada incidencia de la valorización?", cats: ["Aire", "Agua (calidad o disponibilidad)", "Suelo", "Cambio climático"], items: [
  ["Emisiones de NOx", 0], ["Emisiones de SO₂", 0], ["Emisiones de partículas", 0], ["Vertidos con pesticidas", 1], ["Vertidos con materia en suspensión", 1],
  ["Consumo para crecimiento de cultivos", 1], ["Ocupación por cultivos", 2], ["Residuos de la valorización", 2], ["Consumo de CO₂ por los cultivos", 3] ] });
DRILLS.push({ id: "b4-c-nox", type: "classify", tema: "B4", sec: "b4-nox", title: "Mecanismo de formación de NOx", cats: ["Térmico (Zeldovich)", "Del combustible", "Por radicales"], items: [
  ["N₂ + O = NO + N", 0], ["O₂ + N = NO + O", 0], ["Importante a T > 1.300 ºC", 0], ["A cualquier temperatura y mezcla", 1], ["N contenido en el combustible", 1],
  ["CH• + N₂ → HCN + N", 2], ["HCN + O₂ → NO + CO + H", 2], ["Importante en zonas ricas en combustible", 2] ] });
DRILLS.push({ id: "b4-m-gwp", type: "match", tema: "B4", sec: "b4-invernadero", title: "Gas ↔ GWP (IPCC 2001)", pairs: [
  ["CO₂", "1"], ["CH₄", "23"], ["N₂O", "296"], ["HFC-23", "12.000"], ["CF₄", "5.700"], ["SF₆", "22.200"], ["HFC-134a", "1.300"] ] });
DRILLS.push({ id: "b4-m-modas", type: "match", tema: "B4", sec: "b4-particulas", title: "Partícula o moda ↔ tamaño", pairs: [
  ["Moda de nucleación", "< 0,02 µm"], ["Moda Aitken", "0,02-0,1 µm"], ["Moda de acumulación", "0,1-1 µm"], ["Sedimentables", "> 20 µm"],
  ["PM2,5", "< 2,5 µm"], ["Cenizas volantes gruesas", "10-200 µm"], ["Aerosoles de combustión", "0,01-10 µm"] ] });

/* ---------- B4 · reglas mnemotécnicas ---------- */
MNEMO["b4-calidad"] = ["Aire «<b>P-O-S-N-H</b>»: Partículas, Ozono troposférico, SO<sub>2</sub>, NO<sub>2</sub>, HAP.", "Radón = «medalla de <b>plata</b>»: segunda causa de cáncer de pulmón en Europa.", "UV ↑ cuando el ozono de <b>arriba</b> (estratosférico) ↓."];
MNEMO["b4-incidencia"] = ["Cinco medios «<b>A-A-D-C-S</b>»: Aire, Agua, Disponibilidad de agua, Clima, Suelo; solo el Clima sale «ganando».", "Agua: lo que se <b>vierte</b> (calidad) frente a lo que se <b>bebe</b> el cultivo (disponibilidad)."];
MNEMO["b4-nox"] = ["«<b>Zeldovich</b> = calor»: NO térmico, T &gt; 1.300 ºC; «combustible = siempre»; «radicales = rico».", "O<sub>2</sub> estequiométrico: «<b>x + y/4 + z − w/2</b>»: el carbono pide 1, el hidrógeno ¼, el azufre 1 y el oxígeno propio descuenta ½.", "Gráfica de tiempo: el NO del combustible «<b>sprinta</b>» a 500 ppm; el térmico «<b>camina</b>» en línea recta."];
MNEMO["b4-acida"] = ["«OH es la llave»: OH + NO<sub>2</sub> → nítrico; OH + SO<sub>2</sub> → SO<sub>3</sub> → sulfúrico.", "Fotólisis del NO<sub>2</sub> por debajo de <b>420 nm</b>: «4-2-0, la luz azul rompe el NO<sub>2</sub>».", "Peroxi<b>acilo</b> tiene <b>3</b> O (RCO<sub>3</sub>*); aciloxi tiene <b>2</b> (RCO<sub>2</sub>*)."];
MNEMO["b4-invernadero"] = ["GWP «<b>1 - 23 - 296 - 22.200</b>»: CO<sub>2</sub>, CH<sub>4</sub>, N<sub>2</sub>O, SF<sub>6</sub>.", "Forzamiento a «<b>12 km</b>», techo de la troposfera, en W/m<sup>2</sup>.", "Biomasa «<b>uno y medio</b>»: 1 t de biomasa ≈ 1,5 t de CO<sub>2</sub>."];
MNEMO["b4-particulas"] = ["Escalera «<b>20 - 10 - 2,5 - 0,1</b>»: sedimentables, PM10, PM2,5, ultrafinas.", "PM<b>10</b> natural, PM<b>2,5</b> de combustión: cuanto más pequeña, más «humo».", "Diámetro aerodinámico = la esfera «de agua» (1 g/cm<sup>3</sup>) que cae igual."];
MNEMO["b4-formacion"] = ["Modas «<b>N-A-A-G</b>» (Nucleación, Aitken, Acumulación, Gruesa): las dos primeras viven horas; la de acumulación, semanas.", "Combustión de biomasa: «<b>gruesas = lecho</b> (Ca, Mg, Si, K, Al); <b>finas = vapor</b> (K, Na, S, Cl)».", "Peligrosas: «<b>TODAS</b>, y sobre todo las 2,5»."];

/* ---------- B4 · diagramas ---------- */
DIAGRAMS.push({ sec: "b4-nox", h4: "Mecanismos de formación", cap: "Los tres mecanismos de formación de NO<sub>x</sub> de los apuntes, con el origen del nitrógeno y las condiciones en que cada uno es importante.", svg: `<svg class="dg" viewBox="0 0 540 230" role="img" aria-label="Mecanismos de formación de NOx">
<defs><marker id="b4ArN" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#475569"/></marker></defs>
<rect x="200" y="12" width="140" height="34" fill="#fef3c7" stroke="#d97706"/><text x="270" y="34" text-anchor="middle" class="tb">Formación de NOx</text>
<line x1="230" y1="46" x2="95" y2="80" stroke="#475569" marker-end="url(#b4ArN)"/><line x1="270" y1="46" x2="270" y2="80" stroke="#475569" marker-end="url(#b4ArN)"/><line x1="310" y1="46" x2="445" y2="80" stroke="#475569" marker-end="url(#b4ArN)"/>
<rect x="10" y="82" width="170" height="134" class="box"/>
<text x="95" y="102" text-anchor="middle" class="tb" fill="#c2413b">Térmico (Zeldovich)</text>
<text x="20" y="124" class="small2">N₂ y O₂ del aire</text><text x="20" y="140" class="small2">a alta temperatura</text>
<text x="20" y="160" class="small2 tb">Importante a T &gt; 1.300 ºC</text>
<text x="20" y="182" class="small2 mut">N₂ + O = NO + N</text><text x="20" y="198" class="small2 mut">O₂ + N = NO + O</text>
<rect x="188" y="82" width="164" height="134" class="box"/>
<text x="270" y="102" text-anchor="middle" class="tb" fill="#2563eb">Del combustible</text>
<text x="198" y="124" class="small2">N contenido en el</text><text x="198" y="140" class="small2">combustible</text>
<text x="198" y="160" class="small2 tb">A cualquier temperatura</text><text x="198" y="176" class="small2 tb">y régimen de mezcla</text>
<rect x="360" y="82" width="170" height="134" class="box"/>
<text x="445" y="102" text-anchor="middle" class="tb" fill="#0d9488">Por radicales</text>
<text x="370" y="124" class="small2">Radicales derivados</text><text x="370" y="140" class="small2">de la combustión</text>
<text x="370" y="160" class="small2 tb">Zonas ricas en combustible</text>
<text x="370" y="182" class="small2 mut">CH• + N₂ → HCN + N</text><text x="370" y="198" class="small2 mut">HCN + O₂ → NO + CO + H</text>
</svg>` });

DIAGRAMS.push({ sec: "b4-nox", h4: "Influencia del tiempo", cap: "NO<sub>x</sub> (ppm) frente al tiempo de residencia (ms), redibujado de la gráfica de los apuntes: el NO del combustible se forma muy deprisa y se estabiliza en ≈ 500 ppm; el NO térmico crece casi linealmente.", svg: `<svg class="dg" viewBox="0 0 540 260" role="img" aria-label="NOx frente al tiempo de residencia">
<line x1="60" y1="30" x2="60" y2="210" class="ax"/><line x1="60" y1="210" x2="510" y2="210" class="ax"/>
<g class="small2 mut" text-anchor="end"><text x="54" y="214">0</text><text x="54" y="184">100</text><text x="54" y="154">200</text><text x="54" y="124">300</text><text x="54" y="94">400</text><text x="54" y="64">500</text><text x="54" y="34">600</text></g>
<line x1="60" y1="150" x2="500" y2="150" class="grid"/><line x1="60" y1="90" x2="500" y2="90" class="grid"/><line x1="60" y1="60" x2="500" y2="60" class="grid"/>
<g class="small2 mut" text-anchor="middle"><text x="60" y="226">0,0</text><text x="207" y="226">0,5</text><text x="353" y="226">1,0</text><text x="500" y="226">1,5</text></g>
<text x="280" y="248" text-anchor="middle" class="small2">Tiempo de residencia (ms)</text>
<text x="16" y="120" class="small2" transform="rotate(-90 16 120)" text-anchor="middle">NOx (ppm)</text>
<polyline points="60,210 101,123 142,94 186,72 265,64 353,63 456,62 485,62" fill="none" stroke="#c2413b" stroke-width="2.5"/>
<polyline points="60,210 133,199 207,188 280,177 353,166 456,150 485,146" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="6 4"/>
<text x="300" y="52" class="small2 tb ko">NO del combustible ≈ 490-500 ppm</text>
<text x="330" y="140" class="small2 tb" fill="#2563eb">NO térmico (≈ 215 ppm a 1,45 ms)</text>
</svg>` });

DIAGRAMS.push({ sec: "b4-acida", h4: "Lluvia ácida", cap: "Esquema de la lluvia ácida de los apuntes: el ozono da oxígeno atómico, que con el agua forma el radical OH; el OH oxida el NO<sub>2</sub> a ácido nítrico y el SO<sub>2</sub> a SO<sub>3</sub> y ácido sulfúrico. Con partículas minerales se forman sulfatos (deposición seca).", svg: `<svg class="dg" viewBox="0 0 540 270" role="img" aria-label="Esquema de formación de la lluvia ácida">
<defs><marker id="b4ArA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#475569"/></marker></defs>
<rect x="225" y="10" width="90" height="28" class="box"/><text x="270" y="29" text-anchor="middle" class="tb">O₃</text>
<line x1="270" y1="38" x2="270" y2="54" stroke="#475569" marker-end="url(#b4ArA)"/>
<rect x="200" y="56" width="140" height="28" class="box"/><text x="270" y="75" text-anchor="middle" class="small2 tb">O + H₂O → 2 OH</text>
<line x1="230" y1="84" x2="110" y2="112" stroke="#475569" marker-end="url(#b4ArA)"/><line x1="310" y1="84" x2="400" y2="112" stroke="#475569" marker-end="url(#b4ArA)"/>
<rect x="20" y="114" width="180" height="30" fill="#eef3fb" stroke="#2563eb"/><text x="110" y="134" text-anchor="middle" class="small2">OH + NO₂ → HNO₃</text>
<rect x="300" y="114" width="220" height="30" fill="#eef3fb" stroke="#2563eb"/><text x="410" y="134" text-anchor="middle" class="small2">OH + SO₂ + O₂ → SO₃ + HO₂</text>
<line x1="410" y1="144" x2="410" y2="160" stroke="#475569" marker-end="url(#b4ArA)"/>
<rect x="300" y="162" width="220" height="30" fill="#eef3fb" stroke="#2563eb"/><text x="410" y="182" text-anchor="middle" class="small2">SO₃ + H₂O → H₂SO₄</text>
<line x1="110" y1="144" x2="110" y2="226" stroke="#475569" marker-end="url(#b4ArA)"/>
<line x1="450" y1="192" x2="450" y2="226" stroke="#475569" marker-end="url(#b4ArA)"/>
<rect x="150" y="208" width="200" height="30" fill="#fef3c7" stroke="#d97706"/><text x="250" y="228" text-anchor="middle" class="small2">H₂O₂ + SO₂ → H₂SO₄ + minerales</text>
<line x1="250" y1="238" x2="250" y2="250" stroke="#475569"/>
<text x="250" y="264" text-anchor="middle" class="small2 tb" fill="#d97706">Sulfatos (deposición seca)</text>
<text x="110" y="244" text-anchor="middle" class="small2 tb ko">Lluvia ácida</text>
<text x="450" y="244" text-anchor="middle" class="small2 tb ko">Lluvia ácida</text>
<text x="118" y="170" class="small2 mut">NO + HO₂ → NO₂ + OH</text><text x="118" y="185" class="small2 mut">(regenera OH)</text>
</svg>` });

DIAGRAMS.push({ sec: "b4-acida", h4: "Ozono troposférico", cap: "Ciclo fotoquímico NO<sub>2</sub>/NO/O<sub>3</sub>: la luz (λ ≤ 420 nm) rompe el NO<sub>2</sub>, el O atómico forma O<sub>3</sub> y el NO lo destruye regenerando NO<sub>2</sub>. Los hidrocarburos, a través del radical peroxiacilo, generan O<sub>3</sub>, NO<sub>2</sub> y PAN.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Ciclo del ozono troposférico">
<defs><marker id="b4ArO" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#2563eb"/></marker>
<marker id="b4ArO2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#c2413b"/></marker></defs>
<circle cx="70" cy="125" r="34" fill="#eef3fb" stroke="#2563eb"/><text x="70" y="130" text-anchor="middle" class="tb">NO₂</text>
<circle cx="230" cy="45" r="30" fill="#eef3fb" stroke="#2563eb"/><text x="230" y="50" text-anchor="middle" class="tb">NO + O</text>
<circle cx="230" cy="205" r="30" fill="#fef3c7" stroke="#d97706"/><text x="230" y="210" text-anchor="middle" class="tb">O₃</text>
<path d="M95,100 Q140,50 198,45" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#b4ArO)"/>
<text x="92" y="36" class="small2">hν, λ ≤ 420 nm</text>
<line x1="230" y1="76" x2="230" y2="172" stroke="#2563eb" stroke-width="2" marker-end="url(#b4ArO)"/>
<text x="238" y="128" class="small2">O + O₂ → O₃</text>
<path d="M200,208 Q120,205 92,152" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#b4ArO)"/>
<text x="60" y="222" class="small2">O₃ + NO → NO₂ + O₂</text>
<rect x="330" y="20" width="200" height="210" fill="#fff7ed" stroke="#c2413b"/>
<text x="430" y="40" text-anchor="middle" class="small2 tb ko">Con hidrocarburos (HC)</text>
<text x="340" y="64" class="small2">HC + O → RCO*</text>
<text x="340" y="88" class="small2">RCO* + O₂ → RCO₃*</text><text x="340" y="102" class="small2 mut">(peroxiacilo)</text>
<text x="340" y="126" class="small2">RCO₃* + O₂ → RCO₂* + O₃</text>
<text x="340" y="150" class="small2">RCO₃* + NO → RCO₂* + NO₂</text>
<text x="340" y="174" class="small2">RCO₃* + HC → RCO₂* + R'CHO</text>
<text x="340" y="198" class="small2">CH₃CO₃* + NO₂ → PAN</text>
<line x1="330" y1="126" x2="264" y2="196" stroke="#c2413b" stroke-width="1.5" marker-end="url(#b4ArO2)"/>
</svg>` });

DIAGRAMS.push({ sec: "b4-invernadero", h4: "Potencial de calentamiento", cap: "Potencial de calentamiento global (IPCC 2001) de algunos gases de la tabla de los apuntes, en escala logarítmica: el SF<sub>6</sub> (22.200) es el mayor de la tabla; el metano vale 23 y el N<sub>2</sub>O, 296 (CO<sub>2</sub> = 1).", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="GWP de gases de efecto invernadero en escala logarítmica">
<line x1="150" y1="16" x2="150" y2="206" class="ax"/><line x1="150" y1="206" x2="510" y2="206" class="ax"/>
<g class="small2 mut" text-anchor="middle"><text x="150" y="222">1</text><text x="222" y="222">10</text><text x="294" y="222">100</text><text x="366" y="222">1.000</text><text x="438" y="222">10⁴</text><text x="510" y="222">10⁵</text></g>
<line x1="222" y1="16" x2="222" y2="206" class="grid"/><line x1="294" y1="16" x2="294" y2="206" class="grid"/><line x1="366" y1="16" x2="366" y2="206" class="grid"/><line x1="438" y1="16" x2="438" y2="206" class="grid"/>
<text x="330" y="242" text-anchor="middle" class="small2">GWP (escala logarítmica)</text>
<g class="small2" text-anchor="end"><text x="142" y="34">CO₂</text><text x="142" y="64">CH₄</text><text x="142" y="94">N₂O</text><text x="142" y="124">CF₄</text><text x="142" y="154">HFC-23</text><text x="142" y="184">SF₆</text></g>
<rect x="150" y="24" width="3" height="14" fill="#64748b"/><text x="158" y="35" class="small2 tb">1</text>
<rect x="150" y="54" width="98" height="14" fill="#0d9488"/><text x="254" y="65" class="small2 tb">23</text>
<rect x="150" y="84" width="178" height="14" fill="#0891b2"/><text x="334" y="95" class="small2 tb">296</text>
<rect x="150" y="114" width="270" height="14" fill="#2563eb"/><text x="426" y="125" class="small2 tb">5.700</text>
<rect x="150" y="144" width="294" height="14" fill="#1e40af"/><text x="450" y="155" class="small2 tb">12.000</text>
<rect x="150" y="174" width="313" height="14" fill="#c2413b"/><text x="469" y="185" class="small2 tb">22.200</text>
</svg>` });

DIAGRAMS.push({ sec: "b4-particulas", h4: "Clasificación según tamaño", cap: "Escala logarítmica de tamaños (diámetro aerodinámico, µm) con las modas de partículas y los límites PM10, PM2,5, ultrafinas y sedimentables de los apuntes.", svg: `<svg class="dg" viewBox="0 0 560 250" role="img" aria-label="Escala de tamaños de partículas">
<line x1="40" y1="150" x2="520" y2="150" class="ax"/>
<g class="small2 mut" text-anchor="middle"><text x="40" y="166">0,001</text><text x="136" y="166">0,01</text><text x="232" y="166">0,1</text><text x="328" y="166">1</text><text x="424" y="166">10</text><text x="520" y="166">100</text></g>
<g stroke="#64748b"><line x1="40" y1="146" x2="40" y2="154"/><line x1="136" y1="146" x2="136" y2="154"/><line x1="232" y1="146" x2="232" y2="154"/><line x1="328" y1="146" x2="328" y2="154"/><line x1="424" y1="146" x2="424" y2="154"/><line x1="520" y1="146" x2="520" y2="154"/></g>
<text x="280" y="184" text-anchor="middle" class="small2">Diámetro aerodinámico (µm)</text>
<rect x="40" y="104" width="125" height="30" fill="#eef3fb" stroke="#2563eb"/><text x="102" y="123" text-anchor="middle" class="small2 tb">Nucleación</text>
<rect x="165" y="104" width="67" height="30" fill="#dcfce7" stroke="#0d9488"/><text x="198" y="123" text-anchor="middle" class="small2 tb">Aitken</text>
<rect x="232" y="104" width="96" height="30" fill="#fef3c7" stroke="#d97706"/><text x="280" y="123" text-anchor="middle" class="small2 tb">Acumulación</text>
<rect x="328" y="104" width="192" height="30" fill="#fde2e1" stroke="#c2413b"/><text x="424" y="123" text-anchor="middle" class="small2 tb">Gruesa</text>
<text x="102" y="96" text-anchor="middle" class="small2 mut">&lt; 0,02 · horas</text><text x="198" y="96" text-anchor="middle" class="small2 mut">horas</text><text x="280" y="96" text-anchor="middle" class="small2 mut">semanas-meses</text><text x="424" y="96" text-anchor="middle" class="small2 mut">sobre todo primaria</text>
<line x1="232" y1="20" x2="232" y2="150" stroke="#0891b2" stroke-dasharray="4 3"/><text x="228" y="30" text-anchor="end" class="small2 tb" fill="#0891b2">Ultrafinas &lt; 0,1</text>
<line x1="366" y1="36" x2="366" y2="150" stroke="#c2413b" stroke-dasharray="4 3"/><text x="362" y="48" text-anchor="end" class="small2 tb ko">PM2,5</text>
<line x1="424" y1="52" x2="424" y2="150" stroke="#d97706" stroke-dasharray="4 3"/><text x="428" y="64" class="small2 tb" fill="#d97706">PM10</text>
<line x1="453" y1="20" x2="453" y2="150" stroke="#64748b" stroke-dasharray="4 3"/><text x="449" y="30" text-anchor="end" class="small2 tb mut">Sedimentables &gt; 20</text>
<text x="40" y="214" class="small2">Salud: gruesas (&lt; 10 µm) → vías superiores; finas (&lt; 2,5 µm) → vías</text>
<text x="40" y="230" class="small2">inferiores; &lt; 1 µm → alvéolos; &lt; 100 nm → sangre.</text>
</svg>` });
