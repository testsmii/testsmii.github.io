/* Temas FUS y HID · Fusión nuclear e hidroeléctrica/energías marinas
   fuentes: FE_Fusion_26-27_upload_v1.pdf y «UPM - MII - 2526 - Fuentes de Energía: Hidro.pdf» */

/* =====================================================================
   TEMA FUS · Fusión nuclear
   ===================================================================== */
THEORY.FUS = {
  summary: [
    "Cada fuente tiene su problema: <b>fósiles</b> (reservas finitas y GEI), <b>renovables</b> (baja intensidad, grandes superficies, irregularidad) y <b>fisión</b> (radiactividad y proliferación). La fusión se plantea como solución a la escasez de combustible y al cambio climático.",
    "Densidad energética: carbón <b>20 kJ/g</b>, gasolina <b>44 kJ/g</b>, D-T <b>350.000.000 kJ/g</b>. Unos <b>3 g de D-T</b> equivalen a casi <b>30 t de carbón</b>. Hay <b>1 átomo de D por cada 6.500 de H</b>; el tritio no existe en la naturaleza y se produce a partir del <b><sup>6</sup>Li</b>.",
    "La <b>energía de enlace por nucleón</b> mide la estabilidad del núcleo; el máximo está en el <b>hierro (<sup>56</sup>Fe)</b>. Se libera energía cuando aumenta la energía de enlace: <b>fusión</b> de núcleos ligeros y <b>fisión</b> de núcleos pesados.",
    "Para fusionar hay que vencer la <b>repulsión de Coulomb</b>: acelerar haces y colisionarlos <b>no es rentable</b>; se calienta la materia (<b>fusión termonuclear</b>, como en el Sol) y solo fusionan los núcleos de la <b>cola energética</b> de la distribución.",
    "Temperaturas de ignición: <b>D-T 45 millones ºC (4 keV)</b>, D-<sup>3</sup>He 350 millones ºC (30 keV), D-D 400 millones ºC (35 keV). Se elige <b>D-T</b> porque requiere una temperatura «relativamente baja» y tiene la mayor tasa de reacción.",
    "Reacción D-T: <b>D + T → <sup>4</sup>He (3,5 MeV) + n (14,1 MeV)</b>, 17,588 MeV en total. El <b>neutrón</b> sale del plasma y calienta agua; el <b>helio</b> deposita su energía en el plasma.",
    "El <b>plasma</b> es el cuarto estado de la materia (átomos ionizados). El deuterio se ioniza a ~<b>100.000 ºC</b>; hacia <b>50.000.000 ºC</b> empiezan a fusionar algunos núcleos (velocidades ~<b>1000 km/s</b>).",
    "<b>Criterio de Lawson (triple producto)</b>: $n\\,\\tau\\,T > 3{,}5\\cdot10^{28}$ K·s/m³ para que el plasma genere más energía de la que pierde por difusión.",
    "<b>Magnético</b>: $n\\sim10^{20}$ m⁻³, $\\tau\\sim$ 1-10 s, $T\\sim10^{8}$ ºC. <b>Inercial</b>: $n\\sim10^{29}$ m⁻³, $\\tau\\sim10^{-9}$ s, $T\\sim10^{8}$ ºC. El aire tiene $n=10^{25}$ m⁻³.",
    "Con un campo $\\vec B$ (fuerza de Lorentz $\\vec F=q\\,\\vec v\\times\\vec B$) se confina en la dirección <b>perpendicular</b> al campo; las líneas se cierran en un <b>toro</b>, pero al mezclar cargas aparecen <b>inestabilidades</b> y hacen falta líneas <b>poloidales</b>: <b>tokamak</b> y <b>stellarator</b>.",
    "El <b>tokamak</b> es la configuración con mejores resultados; <b>JET</b> (UK) tiene el récord de extracción de energía ($Q\\approx0{,}6$). Reto: aumentar $\\tau$ (récord ~<b>6 s</b>). <b>ITER</b> (Francia): D = 12,4 m, V = 800 m³, <b>Q ≈ 10</b>, <b>P ≈ 500 MW<sub>th</sub></b>.",
    "<b>Confinamiento inercial</b>: la propia inercia de la materia al implosionar confina el plasma. Láseres en <b>ataque indirecto</b> (menos eficiente, compresión más homogénea) o <b>directo</b> (más eficiente, menos homogénea).",
    "<b>NIF</b> (EE. UU.): 2 MJ, 10⁻⁹ s, 1 mm³. Alcanzó la <b>ignición el 5 de diciembre de 2022</b> y el récord de <b>5,2 MJ</b> el 12 de febrero de 2024, gracias a reducir inestabilidades (<b>Rayleigh-Taylor</b>).",
    "Retos: aún <b>no hay producción neta</b> de energía en un reactor; materiales de la <b>primera pared</b>; en magnético, <b>producción de tritio</b> y tamaño (¿superconductores?); en inercial, <b>eficiencia de los láseres</b> y producción de blancos."
  ],
  sections: [
    { id: "fus-panorama", title: "1. Panorama energético y motivación", slides: ["FUS", 1, 8], html: `
<p>La presentación se organiza en cuatro bloques (diap. 2): panorama energético, el átomo y la fusión (estructura atómica, reacción, plasma y confinamiento), fusión por <b>confinamiento magnético</b> (ITER) y por <b>confinamiento inercial</b> (NIF). La fusión se presenta como solución a los paradigmas de <b>escasez de combustible</b> y <b>cambio climático</b>.</p>
<h4>Consumo mundial de energía</h4>
<p>La diap. 4 muestra el consumo global por fuente (2000-2024, en EJ), con petróleo y carbón por encima de 150 EJ y el gas natural creciendo hasta casi 150 EJ, mientras nuclear e hidráulica se mantienen bajas y eólica + solar crecen desde casi cero. Reparto de la energía primaria mundial en <b>2020</b>:</p>
<table class="tbl"><thead><tr><th>Fuente</th><th>Petróleo</th><th>Carbón</th><th>Gas natural</th><th>Hidráulica</th><th>Nuclear</th><th>Otras renovables</th></tr></thead><tbody>
<tr><td>% (2020)</td><td>31,2</td><td>27,2</td><td>24,7</td><td>6,90</td><td>4,30</td><td>5,70</td></tr></tbody></table>
<h4>Inconvenientes de cada fuente</h4>
<table class="tbl cmp"><thead><tr><th>Fuente</th><th>Inconvenientes (diap. 5)</th></tr></thead><tbody>
<tr><td>Combustibles fósiles</td><td>Reservas finitas; emisiones de gases de efecto invernadero</td></tr>
<tr><td>Renovables</td><td>Baja intensidad, grandes superficies; irregularidad en el suministro</td></tr>
<tr><td>Nuclear (fisión)</td><td>Riesgos ligados a la radiactividad; riesgos ligados a la proliferación de armas nucleares</td></tr>
</tbody></table>
<h4>El Sol, origen de casi todo</h4>
<p>El Sol es responsable de la presencia de combustibles fósiles en la Tierra y de las energías renovables. El balance de la diap. 6: llegan <b>179 PW</b> de radiación solar, de los que <b>89 PW</b> los absorben tierras y océanos. La pregunta que abre el tema: <i>¿cómo se genera energía en las estrellas?</i></p>
<h4>¿Por qué nos interesa la energía nuclear?</h4>
<table class="tbl"><thead><tr><th>Combustible</th><th>Energía por gramo</th></tr></thead><tbody>
<tr><td>«Twinkies» (alimento)</td><td>15 kJ/g</td></tr><tr><td>Carbón</td><td>20 kJ/g</td></tr><tr><td>Gasolina (gas)</td><td>44 kJ/g</td></tr><tr><td><b>Deuterio/tritio</b></td><td><b>350.000.000 kJ/g</b></td></tr>
</tbody></table>
<ul><li>Unos <b>3 g</b> de deuterio y tritio proporcionarían la misma energía que casi <b>30 t de carbón</b>.</li>
<li><b>1 átomo de D por cada 6.500 de H</b>: se encuentra en el agua de mar y océanos.</li>
<li>El <b>tritio no existe de manera natural</b>, pero se puede producir con reacciones intermedias con <b><sup>6</sup>Li</b>.</li></ul>
` },
    { id: "fus-atomo", title: "2. El átomo, energía de enlace y fusión frente a fisión", slides: ["FUS", 9, 16], html: `
<h4>Estructura del átomo</h4>
<p>El átomo tiene un <b>núcleo</b> (protones y neutrones) rodeado de <b>electrones</b> (diap. 9). Los elementos se clasifican en la tabla periódica según su <b>número de protones</b> (diap. 10).</p>
<h4>Energía de enlace</h4>
<p><b>Energía de enlace</b> (<i>binding energy</i>): energía que mantiene unido el núcleo atómico (protones y neutrones). <b>A mayor energía de enlace, más estable es el núcleo.</b> La curva de energía de enlace media por nucleón frente al número másico (diap. 12) sube muy deprisa desde el <sup>2</sup>H (~1 MeV) pasando por <sup>6</sup>Li (~5,3), <sup>4</sup>He (~7), hasta un máximo de ≈ 8,7-8,8 MeV en torno al <b><sup>56</sup>Fe</b>, el núcleo más estable, y luego baja suavemente hasta el <sup>238</sup>U (~7,6 MeV).</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> la diapositiva escribe «Fe, 56 protones», pero 56 es el número másico (protones + neutrones) del isótopo <sup>56</sup>Fe; el hierro tiene 26 protones.</div>
<h4>¿Cuándo se libera energía?</h4>
<p>En una transmutación atómica se libera energía (<b>reacción exotérmica</b>) cuando <b>aumenta la energía de enlace</b> de los núcleos (diap. 13): los núcleos ligeros ganan estabilidad <b>uniéndose</b> (<b>fusión</b>, hacia la derecha de la curva) y los pesados <b>dividiéndose</b> (<b>fisión</b>, hacia la izquierda). En la fusión D + T → He + n; en la fisión un neutrón rompe un núcleo pesado en dos fragmentos y varios neutrones (diap. 14). La fisión se cubrió en clase por E. Oliva.</p>
<h4>Fusión frente a fisión</h4>
<p>Principales ventajas de la fusión frente a la fisión (diap. 15): <b>mayor disponibilidad de combustible</b> y <b>menor riesgo de proliferación</b>.</p>
<table class="tbl cmp"><thead><tr><th></th><th>Fusión</th><th>Fisión</th></tr></thead><tbody>
<tr><td>Combustibles</td><td>Deuterio: abundante en el agua (millones de años). Tritio: se extrae del litio (y es radiactivo)</td><td>Uranio enriquecido (0,7 % del uranio total)</td></tr>
<tr><td>Seguridad</td><td>El helio es estable (aunque el neutrón genera radiactividad). No hay riesgo de reacción descontrolada</td><td>Los productos generados en la reacción son radiactivos. Riesgo de reacción descontrolada (explosión)</td></tr>
</tbody></table>
` },
    { id: "fus-termo", title: "3. Fusión termonuclear, D-T y plasma", slides: ["FUS", 17, 25], html: `
<h4>La barrera de Coulomb</h4>
<p>Dos núcleos de deuterio tienen carga positiva: <b>cargas iguales se repelen</b> y hay que vencer la <b>repulsión de Coulomb</b> (diap. 18). Para ello los núcleos necesitan mucha <b>inercia</b> (velocidad, energía). Dos opciones (diap. 19-21):</p>
<ul><li><b>a) Acelerar los protones en haces y colisionarlos</b>: <b>no rentable</b>. La distribución de velocidades son dos picos estrechos (±10 km/s en el ejemplo).</li>
<li><b>b) Calentar la materia a altas temperaturas</b> (como en el Sol): distribución ancha (campana) cuya anchura la fija la <b>temperatura</b>. Es la opción que se sigue.</li></ul>
<h4>Fusión termonuclear</h4>
<p>Solo los núcleos <b>más energéticos de la distribución</b> (la cola de alta energía) pueden fusionar (diap. 22). ¿Cuánto hay que calentar? <b>Depende de los núcleos</b> que queramos fusionar (diap. 23):</p>
<table class="tbl"><thead><tr><th>Reacción</th><th>Productos</th><th>T de ignición (millones ºC)</th><th>(keV)</th><th>Energía liberada (keV)</th></tr></thead><tbody>
<tr><td><b>D + T</b></td><td><sup>4</sup>He + n</td><td><b>45</b></td><td><b>4</b></td><td>17.600</td></tr>
<tr><td>D + <sup>3</sup>He</td><td><sup>4</sup>He + p</td><td>350</td><td>30</td><td>18.300</td></tr>
<tr><td>D + D</td><td><sup>3</sup>He + n</td><td>400</td><td>35</td><td>~4.000</td></tr>
<tr><td>D + D</td><td>T + p</td><td>400</td><td>35</td><td>~4.000</td></tr>
</tbody></table>
<h4>¿Por qué deuterio-tritio?</h4>
<p>La curva de tasa de reacción (m³/s) frente a la temperatura (diap. 24) muestra que la <b>D-T</b> tiene la mayor tasa a bajas temperaturas (máximo ≈ 10⁻²¹ m³/s hacia 10² keV), por encima de D-D y D-<sup>3</sup>He. La reacción D + T requiere una temperatura <b>«relativamente baja»</b>.</p>
<table class="tbl"><thead><tr><th>Nº</th><th>Reacción</th><th>Energía</th></tr></thead><tbody>
<tr><td>1</td><td>D + T → <sup>4</sup>He + n</td><td>+17,588 MeV</td></tr>
<tr><td>2</td><td>D + D → <sup>3</sup>He + n</td><td>+3,2689 MeV</td></tr>
<tr><td>3</td><td>D + D → T + p</td><td>+4,0327 MeV</td></tr>
<tr><td>4</td><td><sup>3</sup>He + D → <sup>4</sup>He + p</td><td>+18,353 MeV</td></tr>
<tr><td>5</td><td><sup>6</sup>Li + n → T + <sup>4</sup>He</td><td>+4,7829 MeV</td></tr>
<tr><td>6</td><td><sup>7</sup>Li + n → T + <sup>4</sup>He + n</td><td><b>−2,4670 MeV</b></td></tr>
</tbody></table>
<p>En el futuro se espera conseguir fusión a <b>mayor temperatura</b> con reacciones <b>sin tritio</b> (difícil de producir) y que <b>no generen neutrones</b> (es decir, que no generen material radiactivo).</p>
<h4>Plasma</h4>
<p>Al calentar la materia a estas temperaturas (<b>millones de ºC</b>) se genera un <b>plasma</b>: <b>cuarto estado de la materia</b>, en el que los átomos se encuentran <b>ionizados</b> (sólido → líquido → gaseoso → plasma al aumentar la temperatura, diap. 25).</p>
` },
    { id: "fus-lawson", title: "4. Receta de la fusión y criterio de Lawson", slides: ["FUS", 26, 38], html: `
<h4>Receta para obtener fusión termonuclear</h4>
<ol><li><b>Llenar un tanque de combustible</b>: deuterio (extraído del agua) + tritio (del litio).</li>
<li><b>Calentar</b> hasta que los núcleos alcancen velocidades del orden de <b>1000 km/s</b> (a 300 K la distribución de velocidades está prácticamente en cero; el «objetivo» está en ~10⁶ m/s):
<ul><li>el deuterio se <b>ioniza a ~100.000 ºC</b>;</li><li>alrededor de <b>50.000.000 ºC</b> algunos núcleos empiezan a fusionar.</li></ul></li>
<li>Las reacciones de fusión son lo suficientemente frecuentes como para <b>mantener la temperatura del plasma sin que sigamos calentando</b> (plasma termonuclear a <b>5·10<sup>7</sup> ºC</b>).</li></ol>
<h4>Reacción D-T y reparto de la energía</h4>
<div class="formula">$$ {}^{2}_{1}D + {}^{3}_{1}T \\rightarrow {}^{4}_{2}He\\,(3{,}5\\ \\text{MeV}) + n\\,(14{,}1\\ \\text{MeV})$$</div>
<ul><li>El <b>neutrón</b> (sin carga) <b>sale del tanque</b> y se utiliza para <b>calentar agua</b> (como en las centrales de fisión).</li>
<li>El <b>helio</b> deposita su energía <b>en el plasma</b>, calentándolo.</li></ul>
<h4>El gran problema: el confinamiento</h4>
<p>En un plasma termonuclear los núcleos alcanzan velocidades tan altas que es difícil confinarlos en la zona caliente. Es necesario <b>«aislar térmicamente»</b> el combustible para minimizar las <b>pérdidas por difusión de calor</b>. El <b>criterio de Lawson</b> establece las condiciones para que el plasma termonuclear genere más energía que la que pierde por difusión:</p>
<div class="formula">$$n\\times\\tau\\times T > 3{,}5\\cdot10^{28}\\ \\text{K·s/m}^3$$</div>
<p>$n$: densidad (de combustible); $\\tau$: tiempo de confinamiento; $T$: temperatura del plasma. Es el <b>triple producto</b>.</p>
<h4>Tipos de confinamiento</h4>
<table class="tbl cmp"><thead><tr><th></th><th>Confinamiento magnético</th><th>Confinamiento inercial</th></tr></thead><tbody>
<tr><td>Idea</td><td>El plasma está formado por partículas cargadas: se atrapa con campos magnéticos (tokamaks)</td><td>Basado en la idea de la bomba de hidrógeno: comprimir y calentar el combustible rápidamente para generar energía antes de que ocurran pérdidas por difusión</td></tr>
<tr><td>Densidad $n$</td><td>10<sup>20</sup> partículas/m³</td><td>10<sup>29</sup> partículas/m³</td></tr>
<tr><td>Tiempo $\\tau$</td><td>1-10 s</td><td>10<sup>−9</sup> s</td></tr>
<tr><td>Temperatura $T$</td><td>10<sup>8</sup> ºC</td><td>10<sup>8</sup> ºC</td></tr>
</tbody></table>
<p>Referencia: el aire a presión atmosférica tiene una densidad $n = 10^{25}$ partículas/m³, es decir, el plasma magnético es unas <b>10⁵ veces menos denso</b> que el aire y el inercial unas <b>10⁴ veces más denso</b>.</p>
` },
    { id: "fus-magnetico", title: "5. Confinamiento magnético: principios", slides: ["FUS", 39, 48], html: `
<h4>Partículas en campos magnéticos</h4>
<p>Como el plasma está formado por partículas con carga (<b>electrones e iones</b>), el combustible reacciona a campos magnéticos. Fuerza de <b>Lorentz</b> sobre una partícula de carga $q$ y velocidad $\\vec v$ en un campo $\\vec B$:</p>
<div class="formula">$$\\vec F = q\\cdot\\vec v\\times\\vec B$$</div>
<p>Las partículas describen <b>hélices alrededor de las líneas de campo</b>; electrones e iones giran en sentidos opuestos (diap. 40).</p>
<h4>Confinar en una dirección</h4>
<ul><li>Sin confinamiento, las partículas se escapan y el plasma se <b>difunde</b>.</li>
<li>Al aplicar un campo magnético en una dirección, se confinan las partículas en la <b>dirección perpendicular al campo</b>.</li>
<li>¿Y la otra dirección (a lo largo del campo)? <b>Se cierran las líneas de campo sobre ellas mismas</b>: configuración <b>toroidal</b>.</li></ul>
<h4>Inestabilidades</h4>
<p>La configuración toroidal puede confinar <b>un tipo de partículas cargadas durante tiempos indefinidos</b>… pero aparecen problemas cuando se <b>mezclan partículas positivas y negativas</b> (plasmas): <b>inestabilidades</b>. La diap. 47 muestra el equilibrio y las inestabilidades de <b>salchicha</b> (<i>sausage</i>) y de <b>torsión</b> (<i>kink</i>).</p>
<h4>Tokamak y stellarator</h4>
<p>Se necesitan configuraciones magnéticas <b>más complejas que la toroidal</b>, con <b>líneas poloidales</b>: el <b>TOKAMAK</b> y el <b>stellarator</b> (diap. 48).</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> en un tokamak la componente poloidal del campo la crea sobre todo una corriente que circula por el propio plasma, inducida por el solenoide central; en un stellarator, todo el campo lo generan bobinas exteriores de forma compleja, sin necesidad de corriente en el plasma.</div>
` },
    { id: "fus-iter", title: "6. Tokamaks hoy: JET, ITER y DEMO", slides: ["FUS", 49, 54], html: `
<h4>El tokamak</h4>
<p>El <b>TOKAMAK</b> es la configuración que ha obtenido <b>los mejores resultados</b>. Elementos (diap. 49): <b>cámara de vacío en forma de donut</b>, <b>bobinas electromagnéticas</b>, <b>plasma termonuclear</b> y <b>líneas de campo magnético</b> helicoidales.</p>
<h4>JET y el factor Q</h4>
<p>El tokamak <b>JET</b> (<i>Joint European Torus</i>, en <b>Reino Unido</b>) tiene el <b>récord de extracción de energía</b>. La ganancia se mide con</p>
<div class="formula">$$Q = \\frac{P_{generada}}{P_{calentamiento}}$$</div>
<p>El gráfico de la diap. 50 representa el triple producto (×10<sup>20</sup> keV·m⁻³·s) frente a la temperatura (keV) de las máquinas desde los <b>años 70</b> (T3, TFR, T10…) hasta los <b>90</b> (JET, JT-60U, TFTR, DIII-D), acercándose a las bandas <b>Q<sub>DT</sub> = 0,1</b> y <b>Q<sub>DT</sub> = 1</b>; <b>ITER</b> aparece en la zona de <b>ignición / condiciones de reactor</b>.</p>
<h4>El reto: el tiempo de confinamiento</h4>
<p>El mayor reto de los tokamaks es <b>aumentar el tiempo de confinamiento</b> (récord del orden de <b>6 s</b>) <b>reduciendo las inestabilidades</b> (objetivo: $n\\sim10^{20}$ m⁻³, $T\\sim10^8$ ºC, $\\tau\\sim$ 1-10 s). <b>Construir reactores más grandes mejora el confinamiento</b> → <b>ITER</b> (los apuntes lo desarrollan como <i>International Thermonuclear Reactor</i>), en <b>Francia</b>.</p>
<table class="tbl"><thead><tr><th></th><th>JET</th><th>ITER</th><th>DEMO</th></tr></thead><tbody>
<tr><td>Diámetro D</td><td>5,92 m</td><td>12,4 m</td><td>≈ 13-19 m</td></tr>
<tr><td>Volumen V</td><td>80 m³</td><td>800 m³</td><td>≈ 1000-3500 m³</td></tr>
<tr><td>Q</td><td>≈ 0,6</td><td>≈ 10</td><td>≈ 25</td></tr>
<tr><td>Potencia P</td><td>≈ 16 MW<sub>th</sub></td><td>≈ 500 MW<sub>th</sub></td><td>≈ 2000-4000 MW<sub>th</sub></td></tr>
</tbody></table>
<h4>Componentes de ITER</h4>
<table class="tbl cmp"><thead><tr><th>Componente</th><th>Material</th><th>Temperatura</th></tr></thead><tbody>
<tr><td>Solenoide central</td><td>Nb<sub>3</sub>Sn superconductor</td><td>−269 ºC</td></tr>
<tr><td>Bobina de campo poloidal</td><td>NbTi superconductor</td><td>−269 ºC</td></tr>
<tr><td>Bobina de campo toroidal</td><td>Nb<sub>3</sub>Sn superconductor</td><td>−269 ºC</td></tr>
<tr><td>Criostato</td><td>Acero inoxidable</td><td>—</td></tr>
<tr><td>Cámara de vacío</td><td>Acero inoxidable</td><td>200 ºC</td></tr>
<tr><td>Módulos de protección</td><td>Be – acero inoxidable</td><td>—</td></tr>
<tr><td>Desviador (<i>divertor</i>)</td><td>W – acero inoxidable</td><td>2000 ºC</td></tr>
<tr><td>Plasma</td><td>—</td><td>200 millones ºC (10.000 ºC en la zona periférica señalada)</td></tr>
</tbody></table>
<p>Además: puertas de <b>calentamiento y diagnósticos</b> y <b>bomba criogénica</b>. La diap. 54 muestra fotos del montaje en Francia (bobinas de campo toroidal y sectores de la cámara de vacío).</p>
` },
    { id: "fus-inercial", title: "7. Confinamiento inercial y NIF", slides: ["FUS", 55, 67], html: `
<h4>Principio</h4>
<p>En el confinamiento inercial es la <b>propia inercia de la materia al implosionar</b> la que confina el plasma. Se basa en <b>producir energía antes de que el plasma tenga tiempo de expandirse</b>, para lo que son necesarias condiciones de <b>presión y temperatura extremadamente elevadas</b>. Los tiempos de confinamiento son <b>mucho más cortos</b> que en el magnético, <b>~10⁻⁹ s</b>; $T\\sim10^8$ ºC; la compresión (según la diap. 59) supone una <b>reducción del volumen ×10</b> y un <b>aumento de densidad ×1000</b>.</p>
<h4>Láseres: ataque directo e indirecto</h4>
<p>¿Cómo concentrar tanta energía en tan poco espacio y tan poco tiempo? Con <b>láseres</b> (ondas electromagnéticas de alta potencia), capaces de depositar mucha energía en la materia. Dos configuraciones (diap. 61):</p>
<table class="tbl cmp"><thead><tr><th>Configuración</th><th>Cómo</th><th>Eficiencia</th><th>Compresión</th></tr></thead><tbody>
<tr><td>a) Ataque indirecto</td><td>Los láseres entran en una cavidad (<i>hohlraum</i>) que rodea la cápsula de combustible</td><td>Menos eficiente</td><td>Más homogénea</td></tr>
<tr><td>b) Ataque directo</td><td>Los haces inciden directamente sobre la cápsula</td><td>Más eficiente</td><td>Menos homogénea</td></tr>
</tbody></table>
<h4>Fases de la implosión</h4>
<p>(a) <b>Energía láser</b> sobre la cápsula; (b) el material exterior se <b>ablaciona</b> y sale hacia fuera, empujando el resto hacia dentro; (c) <b>energía térmica transportada hacia el interior</b> (compresión); (d) <b>combustión termonuclear</b> (<i>thermonuclear burn</i>) (diap. 62).</p>
<h4>NIF y otras instalaciones</h4>
<p>Hay <b>pocas instalaciones</b> con láseres de la potencia necesaria (diap. 63-64): <b>NIF</b> (<i>National Ignition Facility</i>, EE. UU.), OMEGA, NIKE y SANDIA (EE. UU.), <b>LMJ</b> (Francia) y GEKKO XII (Japón). NIF: <b>2 MJ</b>, <b>10⁻⁹ s</b>, <b>1 mm³</b>.</p>
<p>Evolución de NIF (diap. 65): en los primeros años producía una energía de fusión unas <b>1.000 veces menor</b> de la necesaria para la ignición; su objetivo inicial era la ignición a <b>finales de 2012</b>. El <b>5 de diciembre de 2022</b> alcanzó la <b>ignición</b>, y el <b>12 de febrero de 2024</b> fijó un récord de <b>5,2 MJ</b>. La mejora del rendimiento se ha obtenido gracias a la <b>reducción de inestabilidades</b> (diap. 66).</p>
<h4>Inestabilidad de Rayleigh-Taylor</h4>
<p>Al comprimir el plasma surgen <b>inestabilidades que limitan la compresión</b>: la <b>inestabilidad de Rayleigh-Taylor</b> (diap. 67).</p>
` },
    { id: "fus-retos", title: "8. Resumen, retos y mercado", slides: ["FUS", 68, 72], html: `
<h4>Resumen</h4>
<ul><li>Se puede extraer energía de reacciones nucleares en las que se <b>transmuta</b> el núcleo: en la <b>fisión</b> se divide (uranio); en la <b>fusión</b> se unen dos núcleos (deuterio y tritio).</li>
<li>Frente a la fisión, un reactor de fusión usa <b>combustibles más abundantes y asequibles</b> y generaría <b>mucha menos radiactividad</b>.</li>
<li>Para iniciar la fusión se requieren temperaturas muy altas, a las que la materia está en estado de <b>plasma</b>.</li>
<li>El mayor reto es <b>confinar el plasma</b> para que se produzca más energía de la que se aporta. Dos propuestas: <b>magnético</b> (campos magnéticos: <b>ITER</b>) e <b>inercial</b> (láseres de alta potencia: <b>NIF</b>).</li></ul>
<h4>Retos sin resolver</h4>
<ul><li>De momento <b>no se ha conseguido una producción neta de energía en un reactor</b> de fusión: hay que suministrar más energía de la que se genera.</li>
<li>Mejorar el rendimiento exige mejorar el <b>confinamiento</b>, reduciendo las pérdidas por <b>inestabilidades</b>.</li>
<li><b>Materiales de la primera pared</b>: ¿qué materiales aguantan la temperatura y la radiactividad?</li>
<li><b>Confinamiento magnético</b>: <b>producción de tritio</b>, <b>tamaño del reactor</b> (¿superconductores?).</li>
<li><b>Confinamiento inercial</b>: <b>eficiencia de los láseres</b>, <b>producción de blancos</b>.</li></ul>
<h4>Esquema de una central de fusión</h4>
<p>La diap. 70 muestra los sistemas de una futura central de tokamak: criostato, bobinas de campo poloidal y toroidal, <b>manto fértil</b> (<i>breeding blanket</i>), <b>sistemas de calentamiento y generación de corriente</b> (alimentados con <b>potencia recirculada</b>), <b>manipulación remota</b>, el <b>ciclo de combustible</b> (entran Li y D; se bombea D + T + cenizas; separación isotópica; se recupera T y sale He) y la <b>producción de electricidad</b> (sistema de conversión de potencia → red).</p>
<h4>Un nuevo mercado privado</h4>
<p>Aunque la mayor parte de la financiación es <b>pública</b>, está surgiendo un <b>nuevo mercado</b> que pretende acelerar el desarrollo de la fusión (diap. 71): la inversión privada podría superar los <b>1.000 millones de dólares en 2022</b>, y hay empresas de tokamaks/stellarators, de confinamiento inercial con láseres y de otras aproximaciones, junto a los grandes centros de investigación (ITER, CCFE, Max Planck, LLNL…).</p>
` }
  ],
  confusions: [
    ["<b>Confinamiento magnético</b> vs <b>inercial</b> (cifras)", "Magnético: n ≈ 10<sup>20</sup> m⁻³, τ ≈ 1-10 s. Inercial: n ≈ 10<sup>29</sup> m⁻³, τ ≈ 10⁻⁹ s. En ambos T ≈ 10<sup>8</sup> ºC. El aire (10<sup>25</sup>) está en medio."],
    ["<b>Ataque directo</b> vs <b>indirecto</b>", "Indirecto (hohlraum): menos eficiente pero compresión más homogénea. Directo: más eficiente pero compresión menos homogénea."],
    ["<b>3,5 MeV</b> vs <b>14,1 MeV</b>", "3,5 MeV se los lleva el <b>helio</b>, que calienta el plasma; 14,1 MeV el <b>neutrón</b>, que escapa y calienta agua. Total ≈ 17,6 MeV."],
    ["<b>100.000 ºC</b> vs <b>50.000.000 ºC</b> vs <b>45 millones ºC</b>", "~100.000 ºC: se ioniza el deuterio. ~50 millones ºC: empiezan a fusionar algunos núcleos (receta). 45 millones ºC (4 keV): temperatura de ignición D-T de la tabla."],
    ["<b>JET</b> vs <b>ITER</b> vs <b>DEMO</b>", "JET (UK): 80 m³, Q ≈ 0,6, 16 MW<sub>th</sub>. ITER (Francia): 800 m³, Q ≈ 10, 500 MW<sub>th</sub>. DEMO: 1000-3500 m³, Q ≈ 25, 2000-4000 MW<sub>th</sub>."],
    ["<b>Ignición en NIF</b> vs <b>producción neta</b>", "NIF alcanzó la ignición el 5/12/2022 (récord de 5,2 MJ en 2024), pero los apuntes recalcan que aún no hay producción neta de energía en un reactor."],
    ["<b>Rayleigh-Taylor</b> vs <b>sausage/kink</b>", "Rayleigh-Taylor: inestabilidad que limita la compresión en el confinamiento <b>inercial</b>. Salchicha y torsión (kink): inestabilidades del plasma en el confinamiento <b>magnético</b>."],
    ["<b>Bobina poloidal</b> vs <b>toroidal</b> en ITER", "Poloidal: NbTi superconductor. Toroidal y solenoide central: Nb<sub>3</sub>Sn superconductor. Todas a −269 ºC."],
    ["<b>Fusión</b> vs <b>fisión</b> en la curva de enlace", "Ambas liberan energía porque <b>aumenta</b> la energía de enlace por nucleón: la fusión desde los ligeros hacia el Fe, la fisión desde los pesados hacia el Fe."]
  ]
};

/* ---------- FUS · preguntas ---------- */
L("FUS", "fus-panorama", "Inconvenientes de las fuentes", 2, "Según la diapositiva de motivación del tema, ¿qué par de inconvenientes se atribuye a las energías renovables?",
  ["Baja intensidad, que exige grandes superficies, e irregularidad en el suministro",
   "Reservas finitas y emisiones de gases de efecto invernadero",
   "Baja intensidad, que exige grandes superficies, y riesgos ligados a la proliferación",
   "Irregularidad en el suministro y riesgos ligados a la radiactividad de los residuos"],
  0, "Renovables: baja intensidad/grandes superficies e irregularidad. Reservas finitas y GEI son de los fósiles; radiactividad y proliferación, de la fisión.", "Apuntes FUS, diap. 5");
L("FUS", "fus-panorama", "Energía primaria 2020", 2, "En el reparto mundial de energía primaria por tipo en 2020 que muestran los apuntes, ¿qué afirmación es correcta?",
  ["El petróleo (31,2 %) supera al carbón (27,2 %) y al gas natural (24,7 %); la nuclear es el 4,30 %",
   "El carbón (31,2 %) supera al petróleo (27,2 %) y al gas natural (24,7 %); la nuclear es el 4,30 %",
   "El petróleo (31,2 %) supera al gas natural (27,2 %) y al carbón (24,7 %); la nuclear es el 6,90 %",
   "El petróleo (31,2 %) supera al carbón (27,2 %) y al gas natural (24,7 %); la nuclear es el 6,90 %"],
  0, "2020: petróleo 31,2 %, carbón 27,2 %, gas 24,7 %, hidráulica 6,90 %, nuclear 4,30 %, otras renovables 5,70 %. El 6,90 % es la hidráulica.", "Apuntes FUS, diap. 4");
L("FUS", "fus-panorama", "Densidad energética", 2, "Según los apuntes, la energía liberada por gramo de combustible deuterio/tritio es del orden de…",
  ["350.000.000 kJ/g, frente a 20 kJ/g del carbón y 44 kJ/g de la gasolina",
   "35.000.000 kJ/g, frente a 20 kJ/g del carbón y 44 kJ/g de la gasolina",
   "350.000.000 kJ/g, frente a 44 kJ/g del carbón y 20 kJ/g de la gasolina",
   "3.500.000 kJ/g, frente a 15 kJ/g del carbón y 44 kJ/g de la gasolina"],
  0, "D/T: 350.000.000 kJ/g; carbón 20 kJ/g; gasolina 44 kJ/g; los 15 kJ/g son del alimento («Twinkies»).", "Apuntes FUS, diap. 8");
L("FUS", "fus-panorama", "Densidad energética", 3, "Con los valores por gramo de la diapositiva, ¿cuántas veces más energía por unidad de masa libera el combustible D-T que el carbón?",
  ["≈ 1,75·10<sup>7</sup> veces", "≈ 1,75·10<sup>6</sup> veces", "≈ 8·10<sup>6</sup> veces", "≈ 1,75·10<sup>8</sup> veces"],
  0, "350.000.000 / 20 = 1,75·10⁷. Frente a la gasolina sería 350.000.000 / 44 ≈ 8·10⁶.", "Apuntes FUS, diap. 8");
L("FUS", "fus-panorama", "Deuterio y tritio", 3, "Sobre la disponibilidad del combustible de fusión, señale la afirmación correcta según los apuntes:",
  ["Hay 1 átomo de D por cada 6.500 de H en el agua de mar; el tritio no existe de forma natural y se produce con reacciones intermedias con ⁶Li",
   "Hay 1 átomo de D por cada 65.000 de H en el agua de mar; el tritio no existe de forma natural y se produce con reacciones intermedias con ⁶Li",
   "Hay 1 átomo de D por cada 6.500 de H en el agua de mar; el tritio se extrae, como el deuterio, del agua de mar por destilación",
   "Hay 1 átomo de D por cada 6.500 de H en el agua de mar; el tritio no existe de forma natural y se produce a partir de ²³⁸U"],
  0, "1 D por cada 6.500 H. El tritio se obtiene del litio (⁶Li + n → T + ⁴He). Unos 3 g de D-T equivalen a casi 30 t de carbón.", "Apuntes FUS, diap. 8");

L("FUS", "fus-atomo", "Energía de enlace", 1, "La energía de enlace de un núcleo atómico es…",
  ["la energía que mantiene unidos protones y neutrones; a mayor energía de enlace, más estable es el núcleo",
   "la energía que mantiene unidos los electrones al núcleo; a mayor energía de enlace, más estable es el átomo",
   "la energía que mantiene unidos protones y neutrones; a mayor energía de enlace, más inestable es el núcleo",
   "la energía necesaria para ionizar el átomo; a menor energía de enlace, más estable es el núcleo"],
  0, "Binding energy: energía que mantiene unido el núcleo (protones y neutrones). Más energía de enlace = núcleo más estable.", "Apuntes FUS, diap. 11");
L("FUS", "fus-atomo", "Curva de enlace", 2, "En la curva de energía de enlace media por nucleón de los apuntes, el núcleo más estable es…",
  ["el hierro (⁵⁶Fe), con algo menos de 9 MeV por nucleón", "el helio (⁴He), con algo más de 7 MeV por nucleón", "el uranio (²³⁸U), con unos 7,6 MeV por nucleón", "el carbono (¹²C), con algo más de 7,5 MeV por nucleón"],
  0, "El máximo de la curva (≈ 8,7-8,8 MeV/nucleón) está en el ⁵⁶Fe. El ⁴He tiene un pico local (~7 MeV), pero no es el máximo absoluto.", "Apuntes FUS, diap. 12");
L("FUS", "fus-atomo", "Reacción exotérmica", 3, "Según los apuntes, en una transmutación nuclear se libera energía (reacción exotérmica) cuando…",
  ["aumenta la energía de enlace de los núcleos, tanto si se unen núcleos ligeros como si se dividen núcleos pesados",
   "disminuye la energía de enlace de los núcleos, tanto si se unen núcleos ligeros como si se dividen núcleos pesados",
   "aumenta la energía de enlace de los núcleos, pero solo si se unen núcleos más ligeros que el hierro",
   "aumenta el número de protones del núcleo resultante, independientemente de su energía de enlace"],
  0, "Se libera energía cuando aumenta la energía de enlace: fusión de ligeros y fisión de pesados, ambos hacia el Fe.", "Apuntes FUS, diap. 13");
L("FUS", "fus-atomo", "Ventajas de la fusión", 2, "¿Cuáles de las siguientes figuran en los apuntes como principales ventajas de la fusión frente a la fisión? (puede haber varias)",
  ["Mayor disponibilidad de combustible", "Menor riesgo de proliferación", "Ausencia total de radiactividad en la instalación", "Menor temperatura de operación del combustible"],
  [0, 1], "Diap. 15: mayor disponibilidad de combustible y menor riesgo de proliferación. Sí hay radiactividad (el neutrón activa materiales y el tritio es radiactivo) y la temperatura es de millones de ºC.", "Apuntes FUS, diap. 15");
L("FUS", "fus-atomo", "Fusión frente a fisión", 3, "En la tabla comparativa fusión-fisión de los apuntes, ¿cuál es FALSA?",
  ["En la fusión, el helio producido es radiactivo, pero no hay riesgo de reacción descontrolada",
   "En la fusión, el tritio se extrae del litio y es radiactivo",
   "En la fisión, el combustible es uranio enriquecido, que la tabla cifra en el 0,7 % del uranio total",
   "En la fisión, los productos de la reacción son radiactivos y existe riesgo de reacción descontrolada"],
  0, "El helio es estable; la radiactividad en la fusión procede del neutrón (y del tritio). El resto coincide con la tabla.", "Apuntes FUS, diap. 16");

L("FUS", "fus-termo", "Repulsión de Coulomb", 1, "¿Cuál es el obstáculo fundamental que hay que superar para que dos núcleos de deuterio fusionen?",
  ["La repulsión de Coulomb entre sus cargas positivas", "La atracción gravitatoria entre los núcleos", "La repulsión entre sus electrones de valencia", "La fuerza nuclear fuerte, que repele los núcleos a corta distancia"],
  0, "Cargas iguales se repelen: hay que vencer la repulsión de Coulomb dando a los núcleos mucha energía.", "Apuntes FUS, diap. 18");
L("FUS", "fus-termo", "Haces o calentamiento", 2, "Para vencer la repulsión entre núcleos, los apuntes plantean dos opciones. ¿Qué se dice de ellas?",
  ["Acelerar los núcleos en haces y colisionarlos no es rentable; se opta por calentar la materia a altas temperaturas, como en el Sol",
   "Calentar la materia a altas temperaturas no es rentable; se opta por acelerar los núcleos en haces y colisionarlos",
   "Ambas son rentables, pero se prefiere acelerar haces porque su distribución de velocidades es más ancha",
   "Acelerar haces no es rentable porque la distribución de velocidades que se obtiene es una campana ancha"],
  0, "Los haces dan dos picos estrechos de velocidad y no son rentables; el calentamiento da una distribución ancha, cuya anchura fija la temperatura.", "Apuntes FUS, diap. 19-21");
L("FUS", "fus-termo", "Reacciones con neutrones", 3, "De las reacciones de fusión de la lista de la diap. 24, ¿cuáles producen un neutrón? (puede haber varias)",
  ["D + T → ⁴He + …", "D + D → ³He + …", "D + D → T + …", "³He + D → ⁴He + …"],
  [0, 1], "D + T → ⁴He + n (17,588 MeV) y D + D → ³He + n (3,2689 MeV). D + D → T + p y ³He + D → ⁴He + p producen un protón: de ahí el interés futuro por reacciones sin neutrones.", "Apuntes FUS, diap. 24");
L("FUS", "fus-termo", "Temperaturas de ignición", 2, "Según la tabla de reacciones de los apuntes, la temperatura de ignición de la reacción D-T es de…",
  ["45 millones de ºC (4 keV)", "350 millones de ºC (30 keV)", "400 millones de ºC (35 keV)", "200 millones de ºC (17 keV)"],
  0, "D-T: 45 M ºC (4 keV). D-³He: 350 M ºC (30 keV). D-D: 400 M ºC (35 keV).", "Apuntes FUS, diap. 23");
L("FUS", "fus-termo", "Temperaturas de ignición", 3, "Ordene de menor a mayor temperatura de ignición las reacciones de la tabla de los apuntes:",
  ["D-T &lt; D-³He &lt; D-D", "D-T &lt; D-D &lt; D-³He", "D-D &lt; D-T &lt; D-³He", "D-³He &lt; D-T &lt; D-D"],
  0, "D-T 45 M ºC, D-³He 350 M ºC, D-D 400 M ºC. Ojo: la D-³He libera más energía (18.300 keV) que la D-T (17.600 keV), pero necesita mucha más temperatura.", "Apuntes FUS, diap. 23");
L("FUS", "fus-termo", "Energías de reacción", 3, "Según la lista de reacciones de la diap. 24, ¿cuál de ellas es endotérmica?",
  ["⁷Li + n → T + ⁴He + n", "⁶Li + n → T + ⁴He", "D + D → T + p", "³He + D → ⁴He + p"],
  0, "⁷Li + n → T + ⁴He + n tiene −2,4670 MeV. La del ⁶Li libera +4,7829 MeV; D + D → T + p, +4,0327 MeV; ³He + D, +18,353 MeV.", "Apuntes FUS, diap. 24");
L("FUS", "fus-termo", "¿Por qué D-T?", 2, "¿Cuál es la razón que dan los apuntes para utilizar la reacción deuterio-tritio?",
  ["Requiere una temperatura «relativamente baja», con la mayor tasa de reacción a bajas temperaturas",
   "Es la reacción que más energía libera por reacción de todas las de la tabla",
   "Ambos isótopos son naturales, estables y muy abundantes en el agua",
   "No produce neutrones y, por tanto, no genera material radiactivo"],
  0, "D-T requiere una temperatura «relativamente baja». La que más energía libera es la D-³He (18,3 MeV); el tritio no es natural ni estable; y la D-T sí produce un neutrón de 14,1 MeV.", "Apuntes FUS, diap. 23-24");
L("FUS", "fus-termo", "Reacciones futuras", 3, "Según los apuntes, en el futuro se espera conseguir fusión con otras reacciones que…",
  ["funcionen a mayor temperatura, sin tritio y sin generación de neutrones",
   "funcionen a menor temperatura, sin tritio y sin generación de neutrones",
   "funcionen a mayor temperatura, sin deuterio y con mayor flujo de neutrones",
   "funcionen a menor temperatura, con litio como único combustible"],
  0, "Se espera fusión a mayor temperatura con reacciones sin tritio (difícil de producir) y que no generen neutrones (material radiactivo).", "Apuntes FUS, diap. 24");
L("FUS", "fus-termo", "Plasma", 1, "El plasma se define en los apuntes como…",
  ["el cuarto estado de la materia, en el que los átomos se encuentran ionizados",
   "un gas a muy alta presión en el que los átomos están neutros",
   "el cuarto estado de la materia, en el que los núcleos ya han fusionado",
   "un líquido de partículas cargadas que solo existe en el interior del Sol"],
  0, "Al calentar a millones de ºC se genera un plasma: cuarto estado de la materia con átomos ionizados.", "Apuntes FUS, diap. 25");

L("FUS", "fus-lawson", "Receta", 3, "Según la receta de los apuntes, al calentar deuterio, ¿qué ocurre a ~100.000 ºC y a ~50.000.000 ºC?",
  ["A ~100.000 ºC el deuterio se ioniza; hacia 50.000.000 ºC algunos núcleos empiezan a fusionar",
   "A ~100.000 ºC algunos núcleos empiezan a fusionar; hacia 50.000.000 ºC se alcanza la ignición D-D",
   "A ~100.000 ºC el deuterio se disocia en átomos; hacia 50.000.000 ºC se ioniza por completo",
   "A ~100.000 ºC el deuterio se ioniza; hacia 50.000.000 ºC todos los núcleos fusionan de forma simultánea"],
  0, "Ionización a ~100.000 ºC; fusión de algunos núcleos hacia 5·10⁷ ºC. La ignición D-D requiere unos 400 M ºC.", "Apuntes FUS, diap. 30-31");
L("FUS", "fus-lawson", "Reparto de energía D-T", 2, "En la reacción D + T → ⁴He + n de los apuntes, ¿cómo se reparte la energía y qué destino tiene cada producto?",
  ["El neutrón lleva 14,1 MeV y sale del plasma para calentar agua; el helio lleva 3,5 MeV y calienta el plasma",
   "El helio lleva 14,1 MeV y sale del plasma para calentar agua; el neutrón lleva 3,5 MeV y calienta el plasma",
   "El neutrón lleva 14,1 MeV y calienta el plasma; el helio lleva 3,5 MeV y sale del plasma para calentar agua",
   "El neutrón lleva 3,5 MeV y sale del plasma para calentar agua; el helio lleva 14,1 MeV y queda confinado"],
  0, "El ⁴He (3,5 MeV) deposita su energía en el plasma; el neutrón (14,1 MeV), sin carga, sale del tanque y calienta agua como en una central de fisión.", "Apuntes FUS, diap. 32-33");
L("FUS", "fus-lawson", "Reparto de energía D-T", 3, "Con los datos de la reacción D-T de los apuntes, ¿qué fracción aproximada de la energía liberada se lleva el neutrón?",
  ["≈ 80 %", "≈ 20 %", "≈ 50 %", "≈ 67 %"],
  0, "14,1 / (14,1 + 3,5) = 14,1 / 17,6 ≈ 0,80. El helio se lleva ≈ 20 %, que es lo que calienta el plasma.", "Apuntes FUS, diap. 32");
L("FUS", "fus-lawson", "Autosostenimiento", 2, "El tercer paso de la receta, cuando el plasma termonuclear está a ~5·10⁷ ºC, consiste en que…",
  ["las reacciones de fusión son tan frecuentes que mantienen la temperatura del plasma sin seguir calentando",
   "se retira el combustible quemado para evitar que el helio enfríe el plasma",
   "el flujo de neutrones calienta el plasma y mantiene su temperatura sin aporte exterior",
   "se deja de confinar el plasma, porque una vez iniciada la reacción ya es autosostenida"],
  0, "Paso 3: las reacciones mantienen la temperatura sin calentar desde fuera. Lo que calienta el plasma es el helio, no los neutrones, y el confinamiento sigue siendo imprescindible.", "Apuntes FUS, diap. 33-34");
L("FUS", "fus-lawson", "Criterio de Lawson", 1, "El criterio de Lawson (triple producto) de los apuntes establece que…",
  ["$n\\,\\tau\\,T > 3{,}5\\cdot10^{28}$ K·s/m³", "$n\\,\\tau\\,T > 3{,}5\\cdot10^{20}$ K·s/m³", "$n\\,\\tau\\,T > 3{,}5\\cdot10^{25}$ K·s/m³", "$n\\,\\tau / T > 3{,}5\\cdot10^{28}$ s/(K·m³)"],
  0, "Densidad × tiempo de confinamiento × temperatura > 3,5·10²⁸ K·s/m³: el plasma genera más energía de la que pierde por difusión.", "Apuntes FUS, diap. 36");
L("FUS", "fus-lawson", "Triple producto", 2, "¿Qué magnitudes intervienen en el triple producto del criterio de Lawson? (puede haber varias)",
  ["La densidad de combustible", "El tiempo de confinamiento", "La temperatura del plasma", "La intensidad del campo magnético"],
  [0, 1, 2], "n × τ × T: densidad, tiempo de confinamiento y temperatura. El campo magnético es solo un medio para confinar (no aparece en el criterio, que vale también para el inercial).", "Apuntes FUS, diap. 36");
L("FUS", "fus-lawson", "Criterio de Lawson", 3, "Un plasma de confinamiento magnético tiene $n = 10^{20}$ m⁻³ y $T = 10^{8}$ K. Según el criterio de Lawson de los apuntes, ¿qué tiempo de confinamiento mínimo necesita?",
  ["3,5 s", "0,35 s", "35 s", "3,5·10⁻⁹ s"],
  0, "τ > 3,5·10²⁸ / (10²⁰ · 10⁸) = 3,5 s, dentro del rango 1-10 s del confinamiento magnético.", "Apuntes FUS, diap. 36-38");
L("FUS", "fus-lawson", "Tipos de confinamiento", 2, "Según los apuntes, los valores típicos de densidad y tiempo de confinamiento en el confinamiento inercial son…",
  ["$n\\sim10^{29}$ m⁻³ y $\\tau\\sim10^{-9}$ s", "$n\\sim10^{20}$ m⁻³ y $\\tau\\sim10^{-9}$ s", "$n\\sim10^{29}$ m⁻³ y $\\tau\\sim$ 1-10 s", "$n\\sim10^{25}$ m⁻³ y $\\tau\\sim10^{-6}$ s"],
  0, "Inercial: 10²⁹ m⁻³ y 10⁻⁹ s. Magnético: 10²⁰ m⁻³ y 1-10 s. 10²⁵ m⁻³ es la densidad del aire a presión atmosférica.", "Apuntes FUS, diap. 38");
L("FUS", "fus-lawson", "Tipos de confinamiento", 3, "Comparando con el aire a presión atmosférica ($n = 10^{25}$ m⁻³), la densidad del plasma en el confinamiento magnético es…",
  ["unas 10⁵ veces menor, y la del inercial unas 10⁴ veces mayor", "unas 10⁵ veces mayor, y la del inercial unas 10⁴ veces menor", "unas 10⁴ veces menor, y la del inercial unas 10⁵ veces mayor", "del mismo orden, y la del inercial unas 10⁴ veces mayor"],
  0, "10²⁵/10²⁰ = 10⁵ (magnético, menos denso) y 10²⁹/10²⁵ = 10⁴ (inercial, más denso).", "Apuntes FUS, diap. 38");

L("FUS", "fus-magnetico", "Fuerza de Lorentz", 1, "¿Qué expresión de la fuerza sobre una partícula cargada en un campo magnético usan los apuntes para explicar el confinamiento?",
  ["$\\vec F = q\\,\\vec v\\times\\vec B$", "$\\vec F = q\\,\\vec B\\times\\vec E$", "$\\vec F = q\\,\\vec E$", "$\\vec F = m\\,\\vec v\\times\\vec B$"],
  0, "Fuerza de Lorentz magnética: F = q·v × B. Por eso el plasma, formado por electrones e iones, responde a campos magnéticos.", "Apuntes FUS, diap. 40");
L("FUS", "fus-magnetico", "Dirección de confinamiento", 2, "Al aplicar un campo magnético en una dirección, según los apuntes, las partículas cargadas quedan confinadas…",
  ["en la dirección perpendicular al campo, pero pueden escapar a lo largo de él",
   "en la dirección paralela al campo, pero pueden escapar en la perpendicular",
   "en todas las direcciones, siempre que el campo sea suficientemente intenso",
   "en la dirección perpendicular al campo, y también a lo largo de él si es uniforme"],
  0, "B confina en la dirección perpendicular; para la otra dirección se cierran las líneas de campo sobre sí mismas (toro).", "Apuntes FUS, diap. 42-45");
L("FUS", "fus-magnetico", "Configuración toroidal", 3, "Sobre la configuración toroidal simple (líneas de campo cerradas sobre sí mismas), los apuntes indican que…",
  ["puede confinar un tipo de partículas cargadas durante tiempos indefinidos, pero al mezclar positivas y negativas aparecen inestabilidades",
   "puede confinar un plasma de partículas positivas y negativas durante tiempos indefinidos sin inestabilidades",
   "no puede confinar ningún tipo de partícula cargada, porque las líneas cerradas no tienen componente perpendicular",
   "puede confinar un tipo de partículas cargadas, pero solo durante 10⁻⁹ s antes de que aparezcan inestabilidades"],
  0, "Un solo tipo de carga: tiempos indefinidos. Un plasma (mezcla de cargas): inestabilidades, por lo que hacen falta líneas poloidales.", "Apuntes FUS, diap. 46-47");
L("FUS", "fus-magnetico", "Inestabilidades", 2, "¿Qué inestabilidades del plasma confinado magnéticamente se ilustran en los apuntes junto al estado de equilibrio?",
  ["La de salchicha (sausage) y la de torsión (kink)", "La de Rayleigh-Taylor y la de torsión (kink)", "La de salchicha (sausage) y la de Rayleigh-Taylor", "La de Kelvin-Helmholtz y la de Rayleigh-Taylor"],
  0, "Diap. 47: equilibrio, sausage instability y kink instability. Rayleigh-Taylor aparece en el confinamiento inercial.", "Apuntes FUS, diap. 47");
L("FUS", "fus-magnetico", "Tokamak y stellarator", 2, "Para evitar las inestabilidades de la configuración toroidal simple, los apuntes indican que se necesitan…",
  ["configuraciones más complejas con líneas poloidales, como el tokamak y el stellarator",
   "configuraciones más simples con un campo puramente toroidal, como el tokamak y el stellarator",
   "configuraciones con líneas poloidales, como el tokamak y el ataque indirecto",
   "configuraciones lineales abiertas, sin cerrar las líneas de campo sobre sí mismas"],
  0, "Se necesitan configuraciones más complejas que la toroidal, con líneas poloidales: TOKAMAK y stellarator.", "Apuntes FUS, diap. 48");
L("FUS", "fus-magnetico", "Confinamiento magnético", 3, "Señale la afirmación INCORRECTA sobre el confinamiento magnético según los apuntes:",
  ["El plasma se confina porque los neutrones, al no tener carga, siguen las líneas de campo",
   "El plasma responde a campos magnéticos porque está formado por electrones e iones",
   "Sin confinamiento, las partículas escapan y el plasma se difunde",
   "Cerrar las líneas de campo sobre sí mismas resuelve el escape a lo largo del campo"],
  0, "Los neutrones no tienen carga: no sienten la fuerza de Lorentz y escapan del plasma (por eso se usan para calentar agua).", "Apuntes FUS, diap. 33 y 40-45");

L("FUS", "fus-iter", "Factor Q", 2, "El factor Q que se usa en los apuntes para medir el rendimiento de un reactor de fusión se define como…",
  ["$Q = P_{generada}/P_{calentamiento}$", "$Q = P_{calentamiento}/P_{generada}$", "$Q = n\\,\\tau\\,T / 3{,}5\\cdot10^{28}$", "$Q = P_{eléctrica}/P_{térmica}$"],
  0, "Q = potencia generada / potencia de calentamiento. Q = 1 es el equilibrio (breakeven).", "Apuntes FUS, diap. 50");
L("FUS", "fus-iter", "JET", 2, "Sobre el tokamak JET, los apuntes indican que…",
  ["está en Reino Unido, tiene el récord de extracción de energía y alcanzó Q ≈ 0,6 con unos 16 MW<sub>th</sub>",
   "está en Francia, tiene el récord de extracción de energía y alcanzó Q ≈ 0,6 con unos 16 MW<sub>th</sub>",
   "está en Reino Unido, tiene el récord de extracción de energía y alcanzó Q ≈ 10 con unos 500 MW<sub>th</sub>",
   "está en Reino Unido, tiene el récord de tiempo de confinamiento y alcanzó Q ≈ 1,6 con unos 16 MW<sub>th</sub>"],
  0, "JET (Joint European Torus, UK): D = 5,92 m, V = 80 m³, Q ≈ 0,6, P ≈ 16 MW<sub>th</sub>. ITER (Francia): Q ≈ 10, 500 MW<sub>th</sub>.", "Apuntes FUS, diap. 50-52");
L("FUS", "fus-iter", "ITER", 2, "Según los apuntes, los parámetros previstos de ITER son…",
  ["D = 12,4 m, V = 800 m³, Q ≈ 10 y P ≈ 500 MW<sub>th</sub>",
   "D = 5,92 m, V = 80 m³, Q ≈ 0,6 y P ≈ 16 MW<sub>th</sub>",
   "D = 12,4 m, V = 800 m³, Q ≈ 25 y P ≈ 2000 MW<sub>th</sub>",
   "D = 12,4 m, V = 8000 m³, Q ≈ 10 y P ≈ 500 MW<sub>e</sub>"],
  0, "ITER: 12,4 m, 800 m³, Q ≈ 10, 500 MW térmicos. DEMO: 13-19 m, 1000-3500 m³, Q ≈ 25, 2000-4000 MW<sub>th</sub>.", "Apuntes FUS, diap. 52");
L("FUS", "fus-iter", "ITER", 3, "Si ITER alcanza los valores de la diapositiva (Q ≈ 10 y P ≈ 500 MW<sub>th</sub>), ¿qué potencia de calentamiento habrá que aportar al plasma?",
  ["≈ 50 MW", "≈ 5 MW", "≈ 500 MW", "≈ 5000 MW"],
  0, "Q = P<sub>generada</sub>/P<sub>calentamiento</sub> → P<sub>cal</sub> = 500/10 = 50 MW.", "Apuntes FUS, diap. 50 y 52");
L("FUS", "fus-iter", "Tiempo de confinamiento", 3, "Según los apuntes, el mayor reto de los tokamaks y la vía para afrontarlo son…",
  ["aumentar el tiempo de confinamiento (récord del orden de 6 s) reduciendo inestabilidades; reactores más grandes lo mejoran",
   "aumentar la densidad del plasma hasta 10²⁹ m⁻³ reduciendo inestabilidades; reactores más pequeños lo mejoran",
   "aumentar el tiempo de confinamiento (récord del orden de 60 s) reduciendo inestabilidades; reactores más grandes lo mejoran",
   "aumentar la temperatura hasta 10¹⁰ ºC; reactores más grandes empeoran el confinamiento"],
  0, "Reto: aumentar τ (récord ~6 s) reduciendo las inestabilidades. Construir reactores más grandes mejora el confinamiento → ITER.", "Apuntes FUS, diap. 51-52");
L("FUS", "fus-iter", "DEMO", 2, "En la comparación JET-ITER-DEMO de los apuntes, DEMO se caracteriza por…",
  ["Q ≈ 25 y P ≈ 2000-4000 MW<sub>th</sub>, con un volumen de ≈ 1000-3500 m³",
   "Q ≈ 10 y P ≈ 2000-4000 MW<sub>th</sub>, con un volumen de ≈ 800 m³",
   "Q ≈ 25 y P ≈ 500 MW<sub>th</sub>, con un volumen de ≈ 1000-3500 m³",
   "Q ≈ 50 y P ≈ 2000-4000 MW<sub>th</sub>, con un volumen de ≈ 10.000 m³"],
  0, "DEMO: D ≈ 13-19 m, V ≈ 1000-3500 m³, Q ≈ 25, P ≈ 2000-4000 MW<sub>th</sub>.", "Apuntes FUS, diap. 52");
L("FUS", "fus-iter", "Componentes de ITER", 3, "En el esquema de componentes de ITER de los apuntes, ¿qué asociación es correcta?",
  ["Bobina de campo poloidal: NbTi superconductor a −269 ºC",
   "Bobina de campo poloidal: Nb₃Sn superconductor a −269 ºC",
   "Desviador: berilio y acero inoxidable a 200 ºC",
   "Cámara de vacío: wolframio y acero inoxidable a 2000 ºC"],
  0, "Poloidal: NbTi. Solenoide central y toroidal: Nb₃Sn. Desviador: W-acero inox, 2000 ºC. Cámara de vacío: acero inox, 200 ºC. Módulos de protección: Be-acero inox.", "Apuntes FUS, diap. 53");
L("FUS", "fus-iter", "Componentes de ITER", 3, "¿Qué temperatura indica el esquema de ITER de los apuntes para el plasma?",
  ["200 millones de ºC", "45 millones de ºC", "50 millones de ºC", "2000 ºC"],
  0, "El esquema de ITER señala 200 M ºC en el plasma. 45 M ºC es la ignición D-T de la tabla y 2000 ºC el desviador.", "Apuntes FUS, diap. 53");
L("FUS", "fus-iter", "Superconductores de ITER", 3, "En el esquema de ITER de los apuntes, ¿qué componentes son de Nb₃Sn superconductor? (puede haber varias)",
  ["El solenoide central", "La bobina de campo toroidal", "La bobina de campo poloidal", "El desviador"],
  [0, 1], "Solenoide central y bobina toroidal: Nb₃Sn-SC; bobina poloidal: NbTi-SC (todas a −269 ºC). Desviador: W-acero inoxidable a 2000 ºC.", "Apuntes FUS, diap. 53");
L("FUS", "fus-iter", "Diagrama de Lawson", 3, "En el diagrama de triple producto frente a temperatura de los apuntes, ¿qué afirmación es correcta?",
  ["Las máquinas de los años 90 (JET, JT-60U, TFTR) se sitúan cerca de las bandas Q<sub>DT</sub> = 0,1-1, e ITER en la zona de ignición/condiciones de reactor",
   "Las máquinas de los años 70 (T3, TFR) ya alcanzaron la banda Q<sub>DT</sub> = 1, e ITER se sitúa por debajo de Q<sub>DT</sub> = 0,1",
   "Las máquinas de los años 90 (JET, JT-60U, TFTR) ya superaron la zona de ignición, e ITER se sitúa en la banda Q<sub>DT</sub> = 0,1",
   "Todas las máquinas se sitúan a la misma temperatura (≈ 1 keV) y solo difieren en el triple producto"],
  0, "El gráfico muestra la progresión desde los 70 (T3, ~0,002) a los 90 (JET, JT-60U, TFTR, cerca de Q = 1); ITER está en la zona de ignición/reactor.", "Apuntes FUS, diap. 50");

L("FUS", "fus-inercial", "Principio", 2, "En el confinamiento inercial, según los apuntes, lo que confina el plasma es…",
  ["la propia inercia de la materia al implosionar, que permite producir energía antes de que el plasma se expanda",
   "un campo magnético pulsado muy intenso, que comprime el plasma durante unos 10⁻⁹ s",
   "la propia inercia de la materia al implosionar, que mantiene el plasma confinado durante 1-10 s",
   "la presión de radiación de los láseres, que mantiene el plasma confinado de forma estacionaria"],
  0, "Es la inercia de la materia al implosionar; se produce energía antes de que el plasma tenga tiempo de expandirse (τ ~ 10⁻⁹ s).", "Apuntes FUS, diap. 57-59");
L("FUS", "fus-inercial", "Compresión", 3, "Según la diap. 59, la compresión del blanco en el confinamiento inercial supone…",
  ["una reducción del volumen ×10 y un aumento de densidad ×1000, con T ~ 10⁸ ºC y τ ~ 10⁻⁹ s",
   "una reducción del volumen ×1000 y un aumento de densidad ×10, con T ~ 10⁸ ºC y τ ~ 10⁻⁹ s",
   "una reducción del volumen ×10 y un aumento de densidad ×1000, con T ~ 10⁸ ºC y τ ~ 1-10 s",
   "una reducción del volumen ×10 y un aumento de densidad ×10, con T ~ 10⁷ ºC y τ ~ 10⁻⁹ s"],
  0, "La diapositiva indica «reducción del volumen ×10, aumento de densidad ×1000», T = 10⁸ ºC y tiempos ~10⁻⁹ s, mucho más cortos que en el magnético.", "Apuntes FUS, diap. 59");
L("FUS", "fus-inercial", "Ataque directo e indirecto", 2, "Sobre las dos configuraciones de ataque láser en confinamiento inercial, los apuntes indican que el ataque indirecto es…",
  ["menos eficiente, pero consigue una compresión más homogénea",
   "más eficiente, pero consigue una compresión menos homogénea",
   "menos eficiente y además consigue una compresión menos homogénea",
   "más eficiente y además consigue una compresión más homogénea"],
  0, "Indirecto (hohlraum): menos eficiente, compresión más homogénea. Directo: más eficiente, compresión menos homogénea.", "Apuntes FUS, diap. 61");
L("FUS", "fus-inercial", "Ataque directo e indirecto", 3, "¿Cuál de estas afirmaciones sobre el ataque láser es correcta según los apuntes?",
  ["En el ataque indirecto los haces entran en una cavidad (hohlraum) que rodea la cápsula de combustible",
   "En el ataque directo los haces entran en una cavidad (hohlraum) que rodea la cápsula de combustible",
   "En el ataque indirecto los haces inciden directamente sobre la cápsula, lo que homogeneiza la compresión",
   "El ataque directo es menos eficiente porque parte de la energía se pierde en el hohlraum"],
  0, "El hohlraum es propio del ataque indirecto (diap. 61). En el directo los haces inciden sobre la cápsula: más eficiente, menos homogéneo.", "Apuntes FUS, diap. 61");
L("FUS", "fus-inercial", "Fases de la implosión", 3, "Ordene las fases de la implosión de un blanco de confinamiento inercial que muestran los apuntes:",
  ["Energía láser → material ablacionado → energía térmica transportada hacia dentro → combustión termonuclear",
   "Material ablacionado → energía láser → combustión termonuclear → energía térmica transportada hacia dentro",
   "Energía láser → energía térmica transportada hacia dentro → material ablacionado → combustión termonuclear",
   "Energía láser → combustión termonuclear → material ablacionado → energía térmica transportada hacia dentro"],
  0, "Diap. 62: (a) laser energy, (b) ablated material, (c) inward transported thermal energy, (d) thermonuclear burn.", "Apuntes FUS, diap. 62");
L("FUS", "fus-inercial", "NIF", 2, "Según los apuntes, la instalación NIF (National Ignition Facility) trabaja con…",
  ["2 MJ, 10⁻⁹ s y 1 mm³", "2 MJ, 10⁻⁶ s y 1 cm³", "20 MJ, 10⁻⁹ s y 1 mm³", "2 kJ, 10⁻⁹ s y 1 mm³"],
  0, "NIF: 2 MJ, 10⁻⁹ s, 1 mm³ (diap. 64).", "Apuntes FUS, diap. 64");
L("FUS", "fus-inercial", "NIF", 2, "¿Cuándo alcanzó NIF la ignición, según el gráfico de los apuntes?",
  ["El 5 de diciembre de 2022", "A finales de 2012", "El 12 de febrero de 2024", "El 5 de diciembre de 2021"],
  0, "Ignición: 5/12/2022. Finales de 2012 era el objetivo inicial (incumplido). 12/2/2024: récord de 5,2 MJ.", "Apuntes FUS, diap. 65");
L("FUS", "fus-inercial", "NIF", 3, "Con los datos de los apuntes, el récord de NIF del 12 de febrero de 2024 equivale a una energía de fusión unas … veces la energía láser de la instalación.",
  ["2,6", "0,26", "26", "1,0"],
  0, "5,2 MJ de energía de fusión / 2 MJ de láser ≈ 2,6.", "Apuntes FUS, diap. 64-65");
L("FUS", "fus-inercial", "Instalaciones", 3, "De las instalaciones láser del mapa de los apuntes, ¿cuáles están en Estados Unidos? (puede haber varias)",
  ["LMJ", "OMEGA", "GEKKO XII", "NIKE"],
  [1, 3], "En EE. UU.: NIF, OMEGA, NIKE y SANDIA. LMJ está en Francia y GEKKO XII en Japón.", "Apuntes FUS, diap. 64");
L("FUS", "fus-inercial", "Rayleigh-Taylor", 2, "Según los apuntes, la mejora del rendimiento de NIF se debe a…",
  ["la reducción de inestabilidades, como la de Rayleigh-Taylor, que limitan la compresión",
   "el aumento del tiempo de confinamiento hasta el orden de 6 s",
   "la sustitución del ataque indirecto por el ataque directo, más homogéneo",
   "la reducción de inestabilidades de tipo kink, que limitan el campo magnético"],
  0, "La mejora se ha obtenido reduciendo inestabilidades; al comprimir surge la de Rayleigh-Taylor, que limita la compresión. El récord de ~6 s es de los tokamaks.", "Apuntes FUS, diap. 66-67");

L("FUS", "fus-retos", "Producción neta", 3, "Teniendo en cuenta el resumen y los retos de los apuntes, ¿qué afirmación es correcta?",
  ["NIF alcanzó la ignición en 2022, pero aún no se ha conseguido producción neta de energía en un reactor de fusión",
   "JET obtuvo en 2022 producción neta de energía en un tokamak, con Q ≈ 10",
   "No se ha alcanzado la ignición en ninguna instalación, ni magnética ni inercial",
   "ITER ya funciona en Francia con Q ≈ 10 y vierte 500 MW a la red"],
  0, "Diap. 65: ignición en NIF el 5/12/2022. Diap. 69: «de momento no se ha conseguido una producción neta de energía en un reactor de fusión». JET tiene Q ≈ 0,6.", "Apuntes FUS, diap. 65 y 69");
L("FUS", "fus-retos", "Retos tecnológicos", 2, "Según los apuntes, ¿cuáles de estos son retos específicos del confinamiento magnético? (puede haber varias)",
  ["La producción de tritio", "El tamaño del reactor (¿superconductores?)", "La eficiencia de los láseres", "La producción de blancos"],
  [0, 1], "Magnético: producción de tritio y tamaño del reactor (¿superconductores?). Inercial: eficiencia de los láseres y producción de blancos. Común: materiales de la primera pared.", "Apuntes FUS, diap. 69");
L("FUS", "fus-retos", "Retos tecnológicos", 3, "¿Cuál de los siguientes NO figura entre los retos sin resolver de la fusión en los apuntes?",
  ["Evitar el riesgo de reacción en cadena descontrolada del combustible",
   "Encontrar materiales de primera pared que soporten la temperatura y la radiactividad",
   "Producir tritio y reducir el tamaño del reactor en el confinamiento magnético",
   "Mejorar el confinamiento reduciendo las pérdidas por inestabilidades"],
  0, "En la fusión no hay riesgo de reacción descontrolada (diap. 16). Los otros tres son retos de la diap. 69.", "Apuntes FUS, diap. 16 y 69");
L("FUS", "fus-retos", "Resumen", 2, "Según el resumen final de los apuntes, comparado con un reactor de fisión, un reactor de fusión…",
  ["usa combustibles más abundantes y asequibles y generaría mucha menos radiactividad",
   "usa combustibles más abundantes y asequibles y no generaría ninguna radiactividad",
   "usa combustibles menos abundantes pero generaría mucha menos radiactividad",
   "requiere temperaturas más bajas y generaría mucha menos radiactividad"],
  0, "«Combustibles más abundantes y asequibles, y generaría mucha menos radiactividad». No «ninguna»: los neutrones activan materiales.", "Apuntes FUS, diap. 68");
L("FUS", "fus-retos", "Central de fusión", 3, "En el esquema de central de fusión de los apuntes, ¿qué entra en el ciclo de combustible y qué sale como residuo?",
  ["Entran litio y deuterio; sale helio", "Entran tritio y deuterio; sale litio", "Entran litio y tritio; sale deuterio", "Entran deuterio y helio; sale tritio"],
  0, "Ciclo de combustible: entran Li y D; el tritio se genera en el manto fértil (breeding blanket) y se recupera por separación isotópica; sale He.", "Apuntes FUS, diap. 70");
L("FUS", "fus-retos", "Mercado", 1, "Según los apuntes, ¿cómo se financia mayoritariamente la investigación en fusión?",
  ["Es mayoritariamente pública, aunque surge un mercado privado que pretende acelerar su desarrollo",
   "Es mayoritariamente privada, aunque los Estados financian los grandes centros como ITER",
   "Es exclusivamente pública, porque el sector privado no puede invertir en fusión",
   "Es mayoritariamente privada desde 2016, con más de 10.000 M$ anuales"],
  0, "«A pesar de que la mayor parte de la financiación es pública, está surgiendo un nuevo mercado…». La inversión privada podría superar los 1.000 M$ en 2022.", "Apuntes FUS, diap. 71");

C("FUS", "fus-panorama", "Energía por gramo: carbón, gasolina y D-T", "Carbón <b>20 kJ/g</b>, gasolina <b>44 kJ/g</b>, D-T <b>350.000.000 kJ/g</b>. 3 g de D-T ≈ casi 30 t de carbón.");
C("FUS", "fus-panorama", "¿Cuánto deuterio hay en el agua?", "<b>1 átomo de D por cada 6.500 de H</b> (agua de mar y océanos). El tritio no es natural: se produce a partir del <b>⁶Li</b>.");
C("FUS", "fus-atomo", "¿Cuándo es exotérmica una transmutación nuclear?", "Cuando <b>aumenta la energía de enlace</b> por nucleón: fusión de ligeros o fisión de pesados, ambas hacia el máximo del <b>⁵⁶Fe</b>.");
C("FUS", "fus-atomo", "Ventajas de la fusión frente a la fisión", "<b>Mayor disponibilidad de combustible</b> y <b>menor riesgo de proliferación</b>; además, el He es estable y no hay riesgo de reacción descontrolada.");
C("FUS", "fus-termo", "Temperaturas de ignición D-T, D-³He y D-D", "D-T <b>45 M ºC (4 keV)</b>; D-³He 350 M ºC (30 keV); D-D 400 M ºC (35 keV).");
C("FUS", "fus-termo", "¿Por qué se usa D-T?", "Requiere una temperatura <b>«relativamente baja»</b> (mayor tasa de reacción a baja T). Inconvenientes: tritio difícil de producir y genera <b>neutrones</b>.");
C("FUS", "fus-termo", "Reacciones del litio en la lista de los apuntes", "⁶Li + n → T + ⁴He <b>+4,7829 MeV</b>; ⁷Li + n → T + ⁴He + n <b>−2,4670 MeV</b> (endotérmica).");
C("FUS", "fus-termo", "¿Qué es un plasma?", "El <b>cuarto estado de la materia</b>, con los átomos <b>ionizados</b>; aparece al calentar a millones de ºC.");
C("FUS", "fus-lawson", "Reacción D-T y reparto de energía", "D + T → ⁴He (<b>3,5 MeV</b>, calienta el plasma) + n (<b>14,1 MeV</b>, sale y calienta agua). Total 17,588 MeV.");
C("FUS", "fus-lawson", "Criterio de Lawson", "$n\\,\\tau\\,T > 3{,}5\\cdot10^{28}$ K·s/m³ (densidad × tiempo de confinamiento × temperatura).");
C("FUS", "fus-lawson", "Magnético vs inercial: n, τ, T", "Magnético: 10²⁰ m⁻³, 1-10 s, 10⁸ ºC. Inercial: 10²⁹ m⁻³, 10⁻⁹ s, 10⁸ ºC. Aire: 10²⁵ m⁻³.");
C("FUS", "fus-lawson", "Temperaturas de la receta", "Ionización del D a <b>~100.000 ºC</b>; empiezan a fusionar a <b>~50.000.000 ºC</b>; velocidades ~<b>1000 km/s</b>.");
C("FUS", "fus-magnetico", "¿En qué dirección confina un campo magnético?", "En la <b>perpendicular</b> al campo. A lo largo del campo se escapan: se cierran las líneas en un <b>toro</b>.");
C("FUS", "fus-magnetico", "¿Por qué no basta un toro con campo toroidal?", "Confina un solo tipo de carga indefinidamente, pero en un plasma (± mezcladas) aparecen <b>inestabilidades</b> (sausage, kink): hacen falta <b>líneas poloidales</b> (tokamak, stellarator).");
C("FUS", "fus-iter", "JET, ITER y DEMO: Q y potencia", "JET Q ≈ 0,6, 16 MW<sub>th</sub>; ITER Q ≈ 10, 500 MW<sub>th</sub>; DEMO Q ≈ 25, 2000-4000 MW<sub>th</sub>.");
C("FUS", "fus-iter", "Récord de tiempo de confinamiento en tokamaks", "Del orden de <b>6 s</b>. Reactores más grandes mejoran el confinamiento.");
C("FUS", "fus-iter", "Materiales de las bobinas de ITER", "Solenoide central y bobina toroidal: <b>Nb₃Sn</b>-SC; bobina poloidal: <b>NbTi</b>-SC; todas a <b>−269 ºC</b>.");
C("FUS", "fus-inercial", "Ataque directo vs indirecto", "Indirecto (hohlraum): <b>menos eficiente</b>, compresión <b>más homogénea</b>. Directo: más eficiente, menos homogénea.");
C("FUS", "fus-inercial", "NIF: cifras", "2 MJ, 10⁻⁹ s, 1 mm³. Ignición el <b>5/12/2022</b>; récord de <b>5,2 MJ</b> el 12/2/2024.");
C("FUS", "fus-inercial", "¿Qué inestabilidad limita la compresión inercial?", "La de <b>Rayleigh-Taylor</b>. Reducir inestabilidades es lo que ha mejorado el rendimiento de NIF.");
C("FUS", "fus-retos", "Retos sin resolver", "Producción neta; primera pared; magnético: tritio y tamaño (¿superconductores?); inercial: eficiencia láser y blancos.");

DRILLS.push({ id: "fus-c-confin", type: "classify", tema: "FUS", sec: "fus-lawson", title: "¿Confinamiento magnético o inercial?", cats: ["Magnético", "Inercial"], items: [
  ["n ≈ 10²⁰ partículas/m³", 0], ["τ ≈ 1-10 s", 0], ["Tokamak y stellarator", 0], ["ITER, JET y DEMO", 0], ["Inestabilidades sausage y kink", 0], ["Reto: producción de tritio y tamaño", 0],
  ["n ≈ 10²⁹ partículas/m³", 1], ["τ ≈ 10⁻⁹ s", 1], ["Idea de la bomba de hidrógeno", 1], ["NIF, LMJ, OMEGA", 1], ["Inestabilidad de Rayleigh-Taylor", 1], ["Reto: eficiencia de láseres y blancos", 1] ] });
DRILLS.push({ id: "fus-m-temps", type: "match", tema: "FUS", sec: "fus-termo", title: "Temperatura ↔ qué ocurre", pairs: [
  ["~100.000 ºC", "Se ioniza el deuterio"], ["~50.000.000 ºC", "Empiezan a fusionar núcleos"], ["45 M ºC (4 keV)", "Ignición D-T"], ["350 M ºC (30 keV)", "Ignición D-³He"],
  ["400 M ºC (35 keV)", "Ignición D-D"], ["200 M ºC", "Plasma de ITER"], ["−269 ºC", "Bobinas superconductoras de ITER"] ] });
DRILLS.push({ id: "fus-m-maquinas", type: "match", tema: "FUS", sec: "fus-iter", title: "Máquina ↔ dato", pairs: [
  ["JET", "Q ≈ 0,6 · 80 m³ · UK"], ["ITER", "Q ≈ 10 · 800 m³ · Francia"], ["DEMO", "Q ≈ 25 · 2000-4000 MW<sub>th</sub>"], ["NIF", "2 MJ · 10⁻⁹ s · 1 mm³"],
  ["LMJ", "Láseres en Francia"], ["GEKKO XII", "Láseres en Japón"] ] });
DRILLS.push({ id: "fus-c-iter", type: "classify", tema: "FUS", sec: "fus-iter", title: "Material de cada componente de ITER", cats: ["Nb₃Sn superconductor", "NbTi superconductor", "Acero inox. (solo o con otro metal)"], items: [
  ["Solenoide central", 0], ["Bobina de campo toroidal", 0], ["Bobina de campo poloidal", 1], ["Criostato", 2], ["Cámara de vacío (200 ºC)", 2], ["Desviador (W, 2000 ºC)", 2], ["Módulos de protección (Be)", 2] ] });

MNEMO["fus-panorama"] = ["«20-44-350 millones»: carbón, gasolina y D-T en kJ/g; el D-T gana por un factor de ~10⁷.", "«Un D cada 6.500 H»: un vaso de agua lleva su pizca de combustible de fusión."];
MNEMO["fus-atomo"] = ["La curva de enlace es una «montaña con la cima en el hierro»: se baja hacia ella (más estable) uniendo ligeros o rompiendo pesados.", "Ventajas «C-P»: más Combustible, menos Proliferación."];
MNEMO["fus-termo"] = ["D-T, la «barata»: 45 millones y 4 keV; las demás piden ~10 veces más (350-400 M ºC, 30-35 keV).", "En la lista, el ⁷Li es el «raro»: su reacción es la única con energía negativa."];
MNEMO["fus-lawson"] = ["«14 fuera, 3,5 dentro»: el neutrón (14,1 MeV) escapa al agua; el helio (3,5 MeV) se queda calentando el plasma.", "Lawson «3,5·10²⁸»: el mismo 3,5 que la energía del helio, ahora con 28 ceros.", "Magnético = «poca densidad, mucho tiempo» (10²⁰, segundos); inercial = «mucha densidad, nada de tiempo» (10²⁹, nanosegundos). El aire, 10²⁵, en medio."];
MNEMO["fus-magnetico"] = ["El campo B es un «raíl»: la partícula gira alrededor y solo puede avanzar a lo largo de él; por eso se cierra el raíl en un donut.", "Inestabilidades magnéticas = «salchicha y torsión» (sausage y kink)."];
MNEMO["fus-iter"] = ["«JET 0,6 → ITER 10 → DEMO 25»: cada generación multiplica el volumen (80 → 800 → hasta 3500 m³).", "ITER «500 entre 10»: 500 MW<sub>th</sub> con 50 MW de calentamiento.", "En ITER, «Ti solo en el polo»: NbTi en la bobina poloidal; Nb₃Sn en el resto."];
MNEMO["fus-inercial"] = ["«El indirecto da un rodeo»: los láseres pasan por el hohlraum, se pierde eficiencia pero la compresión es más homogénea; el directo, al revés.", "NIF «2-9-1»: 2 MJ, 10⁻⁹ s, 1 mm³. Ignición en el «5-12-22».", "Rayleigh-Taylor = la inestabilidad del «aceite sobre agua» que arruga la cápsula al comprimirla."];
MNEMO["fus-retos"] = ["Retos «pared + tritio + láser»: primera pared (ambos), tritio y tamaño (magnético), láseres y blancos (inercial).", "Ignición ≠ producción neta: NIF ha encendido la «cerilla», pero ningún reactor da aún más energía de la que consume."];

DIAGRAMS.push({ sec: "fus-atomo", h4: "¿Cuándo se libera energía?", cap: "Energía de enlace media por nucleón frente al número másico (valores aproximados leídos de la curva de los apuntes). El máximo está en el <b>⁵⁶Fe</b>: la fusión de núcleos ligeros y la fisión de núcleos pesados se mueven hacia él y liberan energía.", svg: `<svg class="dg" viewBox="0 0 520 270" role="img" aria-label="Curva de energía de enlace por nucleón">
<defs><marker id="fusAr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#2563eb"/></marker>
<marker id="fusAr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#c2413b"/></marker></defs>
<line class="grid" x1="60" y1="68" x2="490" y2="68"/><line class="grid" x1="60" y1="106" x2="490" y2="106"/><line class="grid" x1="60" y1="144" x2="490" y2="144"/><line class="grid" x1="60" y1="182" x2="490" y2="182"/><line class="grid" x1="60" y1="30" x2="490" y2="30"/>
<line class="ax" x1="60" y1="220" x2="490" y2="220"/><line class="ax" x1="60" y1="30" x2="60" y2="220"/>
<text x="52" y="224" text-anchor="end" class="small2">0</text><text x="52" y="186" text-anchor="end" class="small2">2</text><text x="52" y="148" text-anchor="end" class="small2">4</text><text x="52" y="110" text-anchor="end" class="small2">6</text><text x="52" y="72" text-anchor="end" class="small2">8</text><text x="52" y="34" text-anchor="end" class="small2">10</text>
<text x="60" y="236" text-anchor="middle" class="small2">0</text><text x="146" y="236" text-anchor="middle" class="small2">50</text><text x="232" y="236" text-anchor="middle" class="small2">100</text><text x="318" y="236" text-anchor="middle" class="small2">150</text><text x="404" y="236" text-anchor="middle" class="small2">200</text><text x="490" y="236" text-anchor="middle" class="small2">250</text>
<text x="275" y="256" text-anchor="middle" class="small2 mut">número másico A</text>
<text x="16" y="125" text-anchor="middle" class="small2 mut" transform="rotate(-90 16 125)">MeV por nucleón</text>
<polyline class="ln" fill="none" points="63.4,198.9 66.9,85.7 70.3,118.7 75.5,97.3 80.6,74.1 87.5,68.4 94.4,67.4 111.6,58.5 156.3,53.0 197.6,54.7 232.0,56.6 300.8,60.4 369.6,67.0 404.0,69.9 469.4,76.2 490.0,77.5"/>
<circle cx="63.4" cy="198.9" r="3.5" fill="#c2413b"/><text x="72" y="202" class="small2">²H ≈ 1,1</text>
<circle cx="66.9" cy="85.7" r="3.5" fill="#c2413b"/><text x="94" y="100" class="small2">⁴He ≈ 7</text>
<circle cx="70.3" cy="118.7" r="3.5" fill="#c2413b"/><text x="80" y="130" class="small2">⁶Li ≈ 5,3</text>
<circle cx="156.3" cy="53.0" r="4" fill="#d97706"/><text x="156" y="44" text-anchor="middle" class="small2 tb">⁵⁶Fe ≈ 8,8 (máx.)</text>
<circle cx="469.4" cy="76.2" r="3.5" fill="#c2413b"/><text x="469" y="96" text-anchor="middle" class="small2">²³⁸U ≈ 7,6</text>
<line x1="110" y1="160" x2="190" y2="160" stroke="#2563eb" stroke-width="5" marker-end="url(#fusAr1)"/>
<text x="150" y="182" text-anchor="middle" class="tb" fill="#2563eb">Fusión</text>
<line x1="440" y1="140" x2="350" y2="140" stroke="#c2413b" stroke-width="5" marker-end="url(#fusAr2)"/>
<text x="395" y="162" text-anchor="middle" class="tb ko">Fisión</text>
<text x="275" y="200" text-anchor="middle" class="small2 mut">ambas aumentan la energía de enlace → exotérmicas</text>
</svg>` });

DIAGRAMS.push({ sec: "fus-termo", h4: "Fusión termonuclear", cap: "Temperatura de ignición de cada reacción (tabla de los apuntes, en millones de ºC y keV) y energía liberada. La D-T se enciende a una temperatura unas 8-9 veces menor que la D-³He o la D-D.", svg: `<svg class="dg" viewBox="0 0 520 230" role="img" aria-label="Temperaturas de ignición por reacción">
<text x="20" y="22" class="tb">Temperatura de ignición (millones de ºC)</text>
<line class="ax" x1="110" y1="40" x2="110" y2="190"/>
<text x="100" y="69" text-anchor="end" class="tb">D + T</text>
<rect x="110" y="52" width="38" height="26" fill="#c026d3"/><text x="156" y="70" class="small2">45 M ºC · 4 keV · 17.600 keV</text>
<text x="100" y="114" text-anchor="end" class="tb">D + ³He</text>
<rect x="110" y="97" width="297" height="26" fill="#eef3fb" stroke="#2563eb"/><text x="120" y="115" class="small2">350 M ºC · 30 keV · 18.300 keV</text>
<text x="100" y="159" text-anchor="end" class="tb">D + D</text>
<rect x="110" y="142" width="340" height="26" fill="#eef3fb" stroke="#2563eb"/><text x="120" y="160" class="small2">400 M ºC · 35 keV · ~4.000 keV (2 ramas)</text>
<line class="ax" x1="110" y1="190" x2="460" y2="190"/>
<text x="110" y="205" text-anchor="middle" class="small2">0</text><text x="280" y="205" text-anchor="middle" class="small2">200</text><text x="450" y="205" text-anchor="middle" class="small2">400</text>
<text x="20" y="224" class="small2 mut">Energía liberada en keV (última cifra de cada barra)</text>
</svg>` });

DIAGRAMS.push({ sec: "fus-lawson", h4: "Reacción D-T y reparto de la energía", cap: "Reacción D-T: el helio (3,5 MeV, con carga) se queda en el plasma y lo calienta; el neutrón (14,1 MeV, sin carga) escapa del campo y su energía se recoge en un flujo de agua, como en una central de fisión.", svg: `<svg class="dg" viewBox="0 0 520 220" role="img" aria-label="Esquema de la reacción deuterio-tritio">
<defs><marker id="fusAr3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<rect x="10" y="20" width="300" height="180" rx="22" fill="#fef3c7" stroke="#d97706"/>
<text x="160" y="40" text-anchor="middle" class="small2 tb">Plasma termonuclear (~5·10⁷ ºC)</text>
<circle cx="50" cy="80" r="14" fill="#c2413b"/><circle cx="62" cy="90" r="14" fill="#cbd5e1"/><text x="56" y="122" text-anchor="middle" class="small2">D</text>
<circle cx="50" cy="155" r="14" fill="#c2413b"/><circle cx="62" cy="165" r="14" fill="#cbd5e1"/><circle cx="40" cy="168" r="14" fill="#cbd5e1"/><text x="54" y="196" text-anchor="middle" class="small2">T</text>
<line x1="80" y1="92" x2="128" y2="115" stroke="#64748b" stroke-width="2" marker-end="url(#fusAr3)"/>
<line x1="80" y1="155" x2="128" y2="130" stroke="#64748b" stroke-width="2" marker-end="url(#fusAr3)"/>
<circle cx="150" cy="122" r="16" fill="#d97706"/><text x="150" y="126" text-anchor="middle" class="small2 tb" fill="#fff">17,6</text>
<text x="150" y="152" text-anchor="middle" class="small2 mut">MeV</text>
<line x1="168" y1="112" x2="222" y2="80" stroke="#64748b" stroke-width="2" marker-end="url(#fusAr3)"/>
<circle cx="238" cy="72" r="13" fill="#c2413b"/><circle cx="250" cy="80" r="13" fill="#cbd5e1"/>
<text x="245" y="108" text-anchor="middle" class="small2 tb">⁴He · 3,5 MeV</text>
<text x="245" y="122" text-anchor="middle" class="small2">calienta el plasma</text>
<line x1="168" y1="132" x2="380" y2="150" stroke="#2563eb" stroke-width="2.5" marker-end="url(#fusAr3)"/>
<circle cx="395" cy="151" r="10" fill="#cbd5e1" stroke="#64748b"/>
<text x="395" y="180" text-anchor="middle" class="small2 tb">n · 14,1 MeV</text>
<text x="395" y="194" text-anchor="middle" class="small2">sale y calienta agua</text>
<rect x="450" y="30" width="44" height="170" fill="#2563eb" opacity="0.85"/>
<text x="472" y="22" text-anchor="middle" class="small2">agua</text>
<text x="330" y="60" class="small2 mut">≈ 80 % neutrón</text><text x="330" y="76" class="small2 mut">≈ 20 % helio</text>
</svg>` });

DIAGRAMS.push({ sec: "fus-lawson", h4: "Tipos de confinamiento", cap: "Densidad y tiempo de confinamiento típicos en escala logarítmica. El confinamiento magnético trabaja con un plasma 10⁵ veces menos denso que el aire durante segundos; el inercial, 10⁴ veces más denso que el aire durante nanosegundos. En ambos T ≈ 10⁸ ºC y el triple producto debe superar 3,5·10²⁸ K·s/m³.", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Comparación de densidad y tiempo de confinamiento">
<text x="20" y="24" class="tb">Densidad n (partículas/m³)</text>
<line class="ax" x1="40" y1="70" x2="490" y2="70"/>
<text x="40" y="90" text-anchor="middle" class="small2">10¹⁸</text><text x="152" y="90" text-anchor="middle" class="small2">10²¹</text><text x="265" y="90" text-anchor="middle" class="small2">10²⁴</text><text x="377" y="90" text-anchor="middle" class="small2">10²⁷</text><text x="490" y="90" text-anchor="middle" class="small2">10³⁰</text>
<circle cx="115" cy="70" r="8" fill="#2563eb"/><text x="115" y="52" text-anchor="middle" class="small2 tb" fill="#2563eb">magnético 10²⁰</text>
<circle cx="302" cy="70" r="7" fill="#64748b"/><text x="302" y="52" text-anchor="middle" class="small2 mut">aire 10²⁵</text>
<circle cx="452" cy="70" r="8" fill="#c026d3"/><text x="452" y="52" text-anchor="middle" class="small2 tb" fill="#c026d3">inercial 10²⁹</text>
<text x="20" y="134" class="tb">Tiempo de confinamiento τ (s)</text>
<line class="ax" x1="40" y1="180" x2="490" y2="180"/>
<text x="40" y="200" text-anchor="middle" class="small2">10⁻¹⁰</text><text x="152" y="200" text-anchor="middle" class="small2">10⁻⁷</text><text x="265" y="200" text-anchor="middle" class="small2">10⁻⁴</text><text x="377" y="200" text-anchor="middle" class="small2">10⁻¹</text><text x="490" y="200" text-anchor="middle" class="small2">10²</text>
<circle cx="77" cy="180" r="8" fill="#c026d3"/><text x="77" y="162" text-anchor="middle" class="small2 tb" fill="#c026d3">inercial 10⁻⁹</text>
<rect x="415" y="172" width="37" height="16" rx="8" fill="#2563eb"/><text x="434" y="162" text-anchor="middle" class="small2 tb" fill="#2563eb">magnético 1-10</text>
<text x="260" y="236" text-anchor="middle" class="small2 mut">T ≈ 10⁸ ºC en los dos · Lawson: n·τ·T &gt; 3,5·10²⁸ K·s/m³</text>
</svg>` });

DIAGRAMS.push({ sec: "fus-magnetico", h4: "Confinar en una dirección", cap: "Una partícula cargada gira en hélice alrededor de la línea de campo (fuerza de Lorentz): queda atrapada en la dirección perpendicular a B, pero puede avanzar a lo largo de B. Por eso las líneas se cierran en un toro y, para evitar inestabilidades, se añaden líneas poloidales (tokamak, stellarator).", svg: `<svg class="dg" viewBox="0 0 520 240" role="img" aria-label="Trayectoria helicoidal y configuración toroidal">
<defs><marker id="fusAr4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#c2413b"/></marker></defs>
<line x1="20" y1="70" x2="300" y2="70" stroke="#c2413b" stroke-width="3" marker-end="url(#fusAr4)"/>
<text x="306" y="74" class="tb ko">B</text>
<path d="M30,70 C40,40 60,40 60,70 C60,100 80,100 90,70 C100,40 120,40 120,70 C120,100 140,100 150,70 C160,40 180,40 180,70 C180,100 200,100 210,70 C220,40 240,40 240,70 C240,100 260,100 270,70" fill="none" stroke="#2563eb" stroke-width="2"/>
<text x="20" y="124" class="small2">⟂ B: la partícula gira → confinada</text>
<text x="20" y="140" class="small2">∥ B: avanza libremente → se escapa</text>
<text x="20" y="22" class="small2 mut">Fuerza de Lorentz: F = q · v × B</text>
<ellipse cx="420" cy="80" rx="80" ry="34" fill="none" stroke="#c2413b" stroke-width="3"/>
<ellipse cx="420" cy="80" rx="46" ry="14" fill="none" stroke="#c2413b" stroke-width="1.5" class="dash"/>
<text x="420" y="134" text-anchor="middle" class="small2 tb">Líneas cerradas: toro</text>
<text x="420" y="150" text-anchor="middle" class="small2">un solo tipo de carga:</text><text x="420" y="164" text-anchor="middle" class="small2">confinado indefinidamente</text>
<rect x="20" y="174" width="480" height="58" rx="8" class="box"/>
<text x="260" y="196" text-anchor="middle" class="small2 tb">Plasma (cargas + y −) → inestabilidades (sausage, kink)</text>
<text x="260" y="216" text-anchor="middle" class="small2">→ se añaden líneas poloidales: TOKAMAK y stellarator</text>
</svg>` });

DIAGRAMS.push({ sec: "fus-iter", h4: "El reto: el tiempo de confinamiento", cap: "JET, ITER y DEMO según los apuntes: al crecer el tamaño mejora el confinamiento y aumentan la ganancia Q y la potencia térmica. Para DEMO se dan rangos (tramo discontinuo).", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Comparación JET ITER DEMO">
<text x="130" y="22" text-anchor="middle" class="tb">Ganancia Q</text>
<line class="ax" x1="30" y1="200" x2="230" y2="200"/>
<rect x="45" y="198" width="40" height="2" fill="#64748b"/><text x="65" y="190" text-anchor="middle" class="small2">0,6</text>
<rect x="110" y="140" width="40" height="60" fill="#2563eb"/><text x="130" y="132" text-anchor="middle" class="small2">10</text>
<rect x="175" y="50" width="40" height="150" fill="#c026d3"/><text x="195" y="42" text-anchor="middle" class="small2">25</text>
<text x="65" y="218" text-anchor="middle" class="small2 tb">JET</text><text x="130" y="218" text-anchor="middle" class="small2 tb">ITER</text><text x="195" y="218" text-anchor="middle" class="small2 tb">DEMO</text>
<text x="380" y="22" text-anchor="middle" class="tb">Potencia térmica (MW)</text>
<line class="ax" x1="280" y1="200" x2="490" y2="200"/>
<rect x="295" y="199" width="40" height="1" fill="#64748b"/><text x="315" y="190" text-anchor="middle" class="small2">16</text>
<rect x="360" y="181" width="40" height="19" fill="#2563eb"/><text x="380" y="173" text-anchor="middle" class="small2">500</text>
<rect x="425" y="125" width="40" height="75" fill="#c026d3"/><rect x="425" y="50" width="40" height="75" fill="#f5d0fe" stroke="#c026d3" class="dash"/><text x="445" y="42" text-anchor="middle" class="small2">2000-4000</text>
<text x="315" y="218" text-anchor="middle" class="small2 tb">JET</text><text x="380" y="218" text-anchor="middle" class="small2 tb">ITER</text><text x="445" y="218" text-anchor="middle" class="small2 tb">DEMO</text>
<text x="260" y="242" text-anchor="middle" class="small2 mut">Volumen: 80 m³ → 800 m³ → 1000-3500 m³</text>
</svg>` });

DIAGRAMS.push({ sec: "fus-inercial", h4: "Fases de la implosión", cap: "Fases del confinamiento inercial (diap. 62): (a) los láseres depositan energía en la cápsula; (b) la capa exterior se ablaciona hacia fuera y empuja el resto hacia dentro; (c) la energía térmica se transporta hacia el interior y comprime el combustible; (d) combustión termonuclear.", svg: `<svg class="dg" viewBox="0 0 520 200" role="img" aria-label="Fases de la implosión en confinamiento inercial">
<defs><marker id="fusAr5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0L10,5L0,10z" fill="#1e40af"/></marker>
<marker id="fusAr6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0L10,5L0,10z" fill="#d97706"/></marker></defs>
<circle cx="65" cy="90" r="28" fill="#94a3b8" stroke="#d97706" stroke-width="3"/>
<line x1="65" y1="30" x2="65" y2="56" stroke="#1e40af" stroke-width="3" marker-end="url(#fusAr5)"/><line x1="65" y1="150" x2="65" y2="124" stroke="#1e40af" stroke-width="3" marker-end="url(#fusAr5)"/>
<line x1="8" y1="90" x2="33" y2="90" stroke="#1e40af" stroke-width="3" marker-end="url(#fusAr5)"/><line x1="122" y1="90" x2="97" y2="90" stroke="#1e40af" stroke-width="3" marker-end="url(#fusAr5)"/>
<circle cx="195" cy="90" r="36" fill="#fef3c7" stroke="#d97706"/><circle cx="195" cy="90" r="16" fill="#94a3b8"/>
<line x1="220" y1="65" x2="240" y2="45" stroke="#d97706" stroke-width="2.5" marker-end="url(#fusAr6)"/><line x1="170" y1="65" x2="150" y2="45" stroke="#d97706" stroke-width="2.5" marker-end="url(#fusAr6)"/>
<line x1="220" y1="115" x2="240" y2="135" stroke="#d97706" stroke-width="2.5" marker-end="url(#fusAr6)"/><line x1="170" y1="115" x2="150" y2="135" stroke="#d97706" stroke-width="2.5" marker-end="url(#fusAr6)"/>
<circle cx="325" cy="90" r="34" fill="#fde68a" stroke="#d97706"/><circle cx="325" cy="90" r="9" fill="#475569"/>
<line x1="325" y1="58" x2="325" y2="78" stroke="#c2413b" stroke-width="2.5" marker-end="url(#fusAr5)"/><line x1="325" y1="122" x2="325" y2="102" stroke="#c2413b" stroke-width="2.5" marker-end="url(#fusAr5)"/>
<line x1="293" y1="90" x2="313" y2="90" stroke="#c2413b" stroke-width="2.5" marker-end="url(#fusAr5)"/><line x1="357" y1="90" x2="337" y2="90" stroke="#c2413b" stroke-width="2.5" marker-end="url(#fusAr5)"/>
<circle cx="455" cy="90" r="38" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><circle cx="455" cy="90" r="22" fill="#fff7d6"/>
<text x="65" y="172" text-anchor="middle" class="small2 tb">(a) Energía láser</text>
<text x="195" y="172" text-anchor="middle" class="small2 tb">(b) Ablación</text>
<text x="325" y="172" text-anchor="middle" class="small2 tb">(c) Compresión</text>
<text x="455" y="172" text-anchor="middle" class="small2 tb">(d) Combustión</text>
<text x="325" y="190" text-anchor="middle" class="small2 mut">energía térmica hacia dentro</text>
<text x="455" y="190" text-anchor="middle" class="small2 mut">termonuclear</text>
</svg>` });

/* =====================================================================
   TEMA HID · Hidroeléctrica y energías marinas
   ===================================================================== */
THEORY.HID = {
  summary: [
    "Energía máxima de un caudal másico $\\dot m$ que cae una altura H: <b>$W_{max} = \\dot m\\,g\\,H$</b>. La turbina extrae menos por su <b>rendimiento, típicamente 72-84 %</b>. Las grandes plantas tienen <b>5-30 canales</b> hacia turbinas en paralelo.",
    "La energía potencial específica es muy baja: 1 kg de agua con 30 m de salto tiene <b>0,294 kJ/kg</b>, frente a ~<b>3000 kJ/kg</b> de energía interna del vapor (×10.000). La gran potencia hidráulica viene de los <b>enormes caudales</b> (10⁴-10⁵ m³/s): con 30 m y 75 % se obtienen <b>2.200-22.000 MW</b> (una CN típica ≈ 1.000 MW).",
    "Mundo: <b>~770 GW</b> instalados (2009), capaces de producir <b>6.754 TWh</b> (≈ 1/3 de la demanda, ~20.000 TWh). En 2009 se produjeron <b>3.200 TWh</b>: factor de carga <b>47 %</b>, <b>16 %</b> de la demanda eléctrica y <b>más del 90 %</b> de la electricidad renovable.",
    "Mayores centrales de la tabla: <b>Tres Gargantas 18.200 MW</b> (22.500 MW previstos en 2012), Itaipú 12.600, Guri 10.300, La Grande 10.000. Mayor potencia instalada por país: China 172 GW; mayor % de su electricidad: Noruega 98 %, Brasil 86 %.",
    "Operación <b>sencilla y rápida</b> (ajuste del caudal); se usa en <b>horas de mayor demanda</b>. Vida muy larga (<b>&gt; 80 años</b>), limitada por la <b>sedimentación</b> del embalse (favorecida por la floculación). Electricidad más barata que la térmica, sin combustible.",
    "Expansión futura en países en desarrollo: China (+70.000 MW en proyectos), Brasil y Argentina (~10.000 MW), <b>Gran Inga</b> (RD Congo, 40.000 MW). En países saturados: <b>pequeñas</b> (&lt; 30 MW) y <b>micro</b> (&lt; 1 MW) centrales.",
    "Impactos: presa y embalse (&gt; 50 m de altura), inundación, barrera a los peces; aguas abajo: sedimentación, fluctuación de caudal y <b>menos oxígeno disuelto</b>. Gran riesgo: <b>fallo de presas</b>.",
    "España: <b>55.000 hm³</b> de embalses, el <b>40 %</b> hidroeléctricos. <b>Agua fluyente</b>: &lt; 5 MW, <b>75 %</b> del mercado; <b>pie de presa</b>: &gt; 5 MW, ~<b>20 %</b> (incluye bombeo). <b>Minihidráulica &lt; 10 MW</b>; microturbinas &lt; 10 kW. ~<b>800 centrales</b>; 20 de &gt; 200 MW suman el 50 %.",
    "REE 2023: total <b>125.620 MW</b>; hidráulica <b>13,6 %</b> de la potencia y <b>9,5 %</b> de la cobertura de demanda (turbinación bombeo 2,7 % y 1,9 %).",
    "<b>Bombeo</b>: dos embalses; se bombea en horas valle y se turbina en horas pico. Es <b>la forma más económica de almacenar electricidad</b>. <b>Puro</b> (sin aportes al superior) o <b>mixto</b>. Gran inversión, suelen superar <b>500 MW</b>. <b>La Muela</b>: 630 + 852 MW (2013), la mayor de Europa.",
    "<b>Mareas</b>: Luna (más cerca) y Sol. Vivas con los tres alineados, muertas en triángulo rectángulo; 2 + 2 por ciclo lunar (≈ 29,5 días). Abultamiento máximo teórico <b>0,36 m</b> (medido ~0,5 m); período <b>12 h 25 min ≈ 45.000 s</b>; c ≈ 200 m/s, λ ≈ <b>9.000 km</b>.",
    "Piscina única: $W=\\tfrac12 A\\eta\\rho g H^2$ por llenado y $\\dot W = A\\eta\\rho g H^2/T$ de media (dos ráfagas por marea, de 20-30 min). Inconvenientes: picos sin demanda, turbinas muy caras, desgaste por arranques. Ejemplo: <b>Rance</b> (Francia).",
    "<b>Olas</b>: causadas por el viento (indirectamente por el Sol); 20-80 kW/m en costas del Atlántico y Pacífico; $\\dot W/L \\propto \\rho\\,a^2 g\\sqrt{g\\lambda}$. La energía está en las ondas de <b>gran longitud de onda y amplitud</b>. Fuerzas mayores que en eólica, corrosión, anclajes.",
    "<b>OTEC</b>: superficie 27-32 ºC y fondo 5-8 ºC; Carnot <b>&lt; 9 %</b>, real <b>1-2 %</b>; continua y limpia, pero corrosión y algas hicieron fallar las plantas piloto en pocos meses."
  ],
  sections: [
    { id: "hid-fundamentos", title: "1. Fundamentos de la energía hidroeléctrica", slides: ["HID", 1, 6], html: `
<h4>Energía máxima de un salto</h4>
<p>La cantidad máxima de energía que se puede producir con un flujo de agua de caudal másico $\\dot m$ que cae una altura H es (diap. 3):</p>
<div class="formula">$$W_{max} = \\dot m\\,g\\,H \\qquad P_{el} \\approx \\eta\\,\\rho\\,Q\\,g\\,H$$</div>
<p>El trabajo extraído por una turbina es inferior por su eficiencia, <b>típicamente del 72-84 %</b>. Una planta grande tiene varios <b>canales (5-30)</b> que llevan el agua a varias turbinas en paralelo. El río abastece un embalse artificial y el caudal debe bastar para mantener el nivel H aproximadamente constante. El esquema de la diap. 4 muestra embalse, presa, tubería forzada (<i>penstock</i>), turbina, salto Δz y salida al río.</p>
<h4>Energía específica: baja frente a la térmica</h4>
<ul><li>1 kg de agua con un salto de <b>30 m</b> tiene $g\\,H$ = <b>0,294 kJ/kg</b>.</li>
<li>1 kg de vapor tiene una energía interna específica de unos <b>3000 kJ/kg</b> (×10.000).</li>
<li>Incluso con la limitación de Carnot de una máquina térmica (<b>30-40 %</b>), la energía específica térmica es muy superior a la potencial.</li></ul>
<h4>La clave: el caudal</h4>
<p>La gran potencia de las hidroeléctricas proviene de la <b>enorme cantidad de agua</b>: <b>10⁴-10⁵ m³/s</b> en un río muy caudaloso. Con estos caudales, un salto de 30 m y un rendimiento del 75 %, se obtienen <b>entre 2.200 y 22.000 MW</b> eléctricos. Una central nuclear típica tiene unos <b>1.000 MW</b>.</p>
<p>Salvo la presa de las <b>Tres Gargantas</b> (China), la mayoría de las grandes hidroeléctricas del mundo son <b>instalaciones viejas</b>, algunas operando desde los <b>años 1930</b> (Krasnoyarsk, presa Hoover…).</p>
` },
    { id: "hid-mundo", title: "2. Hidroeléctrica en el mundo: datos, vida útil y expansión", slides: ["HID", 7, 13], html: `
<h4>Grandes centrales y países líderes</h4>
<table class="tbl"><thead><tr><th>Central</th><th>Río/país</th><th>MW</th></tr></thead><tbody>
<tr><td>Presa Hoover</td><td>Colorado/EE. UU.</td><td>1.500</td></tr><tr><td>Cataratas del Niágara</td><td>Niágara/EE. UU.</td><td>1.950</td></tr>
<tr><td>Grand Coulee</td><td>Columbia/EE. UU.</td><td>6.500</td></tr><tr><td>La Grande</td><td>St. Lawrence/Canadá</td><td>10.000</td></tr>
<tr><td>Itaipú</td><td>Paraná/Paraguay-Brasil</td><td>12.600</td></tr><tr><td><b>Tres Gargantas</b>*</td><td>Yangtsé/China</td><td><b>18.200</b></td></tr>
<tr><td>Krasnoyarsk</td><td>Yeniséi/Rusia</td><td>6.400</td></tr><tr><td>Guri</td><td>Caroní/Venezuela</td><td>10.300</td></tr>
</tbody></table>
<p class="small">* Instalada en 2009, con aumento previsto a 22.500 MW en 2012 (Tabla 11.1).</p>
<table class="tbl"><thead><tr><th>País</th><th>GW</th><th>TWh</th><th>% de su electricidad</th></tr></thead><tbody>
<tr><td>Brasil</td><td>69</td><td>364</td><td>86</td></tr><tr><td>Canadá</td><td>89</td><td>370</td><td>61</td></tr><tr><td><b>China</b></td><td><b>172</b></td><td><b>585</b></td><td>17</td></tr>
<tr><td>India</td><td>34</td><td>116</td><td>16</td></tr><tr><td>Japón</td><td>27</td><td>69</td><td>7</td></tr><tr><td><b>Noruega</b></td><td>28</td><td>140</td><td><b>98</b></td></tr>
<tr><td>Rusia</td><td>45</td><td>167</td><td>18</td></tr><tr><td>Suecia</td><td>26</td><td>65</td><td>44</td></tr><tr><td>EE. UU.</td><td>80</td><td>251</td><td>6</td></tr>
</tbody></table>
<h4>Producción mundial</h4>
<ul><li>Potencia instalada <b>~770 GW (2009)</b>; capacidad de producir <b>6.754 TWh</b>, aproximadamente <b>un tercio</b> de la demanda eléctrica mundial (~20.000 TWh).</li>
<li>Control y operación <b>muy sencillos y rápidos</b>: se ajusta el caudal dirigido a las turbinas. Se usan en los momentos de <b>mayor demanda</b> y no suelen producir de forma continua a su capacidad nominal.</li>
<li>En <b>2009</b> se produjeron unos <b>3.200 TWh</b>: factor de carga medio del <b>47 %</b>, ≈ <b>16 %</b> de la demanda eléctrica global y <b>más del 90 %</b> de la electricidad renovable.</li></ul>
<h4>Vida útil y sedimentación</h4>
<p>Las plantas se diseñan para una vida muy larga. Las <b>turbinas</b> necesitan mantenimiento frecuente e incluso sustitución; canales, válvulas y compuertas no tienen partes móviles y son muy duraderos. La vida queda limitada por la <b>acumulación de sedimentos</b> aguas arriba de la presa: en la región de estancamiento el agua se detiene, la turbulencia baja y el limo cae al fondo; la <b>floculación</b> favorece el proceso (granos mayores). Reduce la capacidad del embalse y, si no se trata, puede obligar a cerrarlo.</p>
<h4>Costes y expansión futura</h4>
<p>Salvo el coste de construir el embalse, son relativamente simples de operar, de construcción barata y <b>no requieren combustible</b>. Las grandes centrales funcionan <b>más de 80 años</b> con mantenimiento relativamente bajo, por lo que producen electricidad a un coste significativamente <b>menor que las térmicas</b>.</p>
<ul><li>Casi toda la expansión inmediata será en <b>países en desarrollo</b> (China, Sudamérica, África): proyectos en China que suman <b>70.000 MW</b> además de Tres Gargantas; Brasil y Argentina ~<b>10.000 MW</b>; <b>Gran Inga</b> (RD del Congo) <b>40.000 MW</b>.</li>
<li>En países que ya han usado sus grandes recursos: <b>pequeñas centrales (&lt; 30 MW)</b> o <b>micro (&lt; 1 MW)</b>, de producción local. Un río con <b>10³ m³/s</b> y <b>4 m</b> de salto puede producir <b>39,2 MW</b>; ríos de 100-500 m³/s, <b>3-15 MW</b>.</li></ul>
` },
    { id: "hid-impacto", title: "3. Impacto ambiental y seguridad", slides: ["HID", 14, 15], html: `
<h4>Problemas ambientales de la construcción</h4>
<p>La hidroeléctrica es esencialmente <b>limpia y renovable</b>, pero las grandes centrales plantean problemas (diap. 14):</p>
<ul><li>La <b>presa y el embalse</b>: las presas a menudo superan los <b>50 m de altura y 20 m de ancho</b> y requieren mucho material, sobre todo <b>hormigón</b>.</li>
<li>La <b>inundación</b> de un área muy grande aguas arriba.</li>
<li>Impide la <b>migración de peces</b> y restringe las vías fluviales.</li></ul>
<h4>Efectos aguas abajo</h4>
<p>La generación altera el entorno aguas abajo: <b>sedimentación</b>, <b>fluctuación del caudal</b> del río y <b>reducción del oxígeno disuelto</b>.</p>
<h4>Balance y seguridad</h4>
<p>Los impactos son <b>relativamente pocos y benignos</b> comparados con los de las centrales fósiles. Pero un problema importante de seguridad son los <b>fallos de las presas</b>, que han provocado varios de los <b>mayores desastres</b> causados por el hombre en la historia de la generación eléctrica (diap. 15).</p>
` },
    { id: "hid-espana", title: "4. Hidroeléctrica en España", slides: ["HID", 16, 24], html: `
<h4>Embalses y madurez</h4>
<p>Es la renovable <b>más consolidada y madura</b> en España, gracias a la orografía y a las numerosas presas. Capacidad total de embalses: <b>55.000 hm³</b>, de los que el <b>40 %</b> son hidroeléctricos, una de las proporciones más altas de Europa y del mundo.</p>
<h4>Tipologías de aprovechamiento</h4>
<table class="tbl cmp"><thead><tr><th>Tipo</th><th>Funcionamiento</th><th>Potencia</th><th>Mercado</th></tr></thead><tbody>
<tr><td>Centrales de agua fluyente</td><td>Captan una parte del caudal del río, lo turbinan y lo devuelven. Incluyen las <b>centrales en canal de riego</b></td><td>Normalmente &lt; 5 MW</td><td>75 %</td></tr>
<tr><td>Centrales de pie de presa</td><td>Con una presa (nueva o existente) <b>regulan los caudales</b>. Incluyen las de <b>bombeo o reversibles</b></td><td>&gt; 5 MW</td><td>~20 %</td></tr>
</tbody></table>
<p>Esquema de una central (diap. 18 y 22): embalse, presa, rejas filtradoras, tubería forzada, grupo turbina-alternador (turbina hidráulica, eje, generador), transformadores y líneas de transporte.</p>
<h4>Evolución y datos de REE</h4>
<p>La evolución ha sido creciente, pero en los últimos años su <b>aportación porcentual</b> ha disminuido al entrar otras renovables (diap. 19). La serie 1990-2013 (diap. 24) muestra la hidráulica oscilando en torno a 20.000-40.000 GWh según el año hidrológico, mientras la generación neta crecía hasta ~280.000 GWh.</p>
<table class="tbl"><thead><tr><th>2023 (REE)</th><th>Hidráulica</th><th>Turbinación bombeo</th><th>Nuclear</th><th>Ciclo combinado</th><th>Eólica</th><th>Solar FV</th></tr></thead><tbody>
<tr><td>Potencia instalada (total 125.620 MW)</td><td><b>13,6 %</b></td><td>2,7 %</td><td>5,7 %</td><td>20,9 %</td><td>24,5 %</td><td>20,3 %</td></tr>
<tr><td>Cobertura de demanda</td><td><b>9,5 %</b></td><td>1,9 %</td><td>20,3 %</td><td>17,3 %</td><td>23,5 %</td><td>14,0 %</td></tr>
</tbody></table>
<h4>Minihidráulica y parque actual</h4>
<ul><li><b>Minihidráulica</b>: potencia instalada <b>menor de 10 MW</b>, de agua fluyente o de pie de presa; costes bastante competitivos.</li>
<li><b>Microturbinas</b> de <b>menos de 10 kW</b>: aprovechan la fuerza cinética de los ríos en zonas aisladas, producen directamente en <b>corriente alterna</b> y no necesitan caídas de agua, infraestructuras adicionales ni mantenimiento caro.</li>
<li>El sector se orienta a mayor eficiencia: <b>rehabilitación, modernización, mejora o ampliación</b> de las centrales existentes.</li>
<li>España tiene unas <b>800 centrales</b>: <b>20 de más de 200 MW</b> suman el <b>50 %</b> de la potencia hidroeléctrica; decenas de pequeñas presas de menos de 20 MW.</li></ul>
` },
    { id: "hid-bombeo", title: "5. Hidráulica de bombeo", slides: ["HID", 25, 28], html: `
<h4>Funcionamiento</h4>
<p>Una central de bombeo tiene <b>dos embalses</b>: el agua del <b>inferior</b> se bombea en las horas de <b>menor demanda</b> al <b>superior</b>, para turbinarla después en las horas de <b>mayor consumo</b>. Mejora la eficiencia económica del sistema al almacenar electricidad como agua embalsada: es <b>en la actualidad la forma más económica de almacenar energía eléctrica</b>.</p>
<h4>Clasificación</h4>
<table class="tbl cmp"><thead><tr><th>Criterio</th><th>Opción</th><th>Descripción</th></tr></thead><tbody>
<tr><td>Tipo de operación</td><td>Turbina y bombas</td><td>Cada equipo funciona independientemente según se bombee o se genere</td></tr>
<tr><td>Tipo de operación</td><td>Turbina reversible</td><td>Funciona como turbina (generación) o como <b>bomba centrífuga</b> (bombeo)</td></tr>
<tr><td>Embalse superior</td><td>Bombeo puro</td><td>Solo recibe el caudal bombeado desde el inferior (sin aportaciones significativas)</td></tr>
<tr><td>Embalse superior</td><td>Bombeo mixto</td><td>Recibe el caudal bombeado y además aportes de agua (efluentes)</td></tr>
</tbody></table>
<h4>Ventajas e inconvenientes</h4>
<ul><li>Almacenamiento: la energía de las bombas se convierte en <b>potencial</b> reutilizable; proviene de fuentes <b>no regulables</b> como la solar o la <b>nuclear</b>. Rentable si se bombea en <b>horas valle</b> para producir al máximo en <b>horas pico</b>.</li>
<li>Pueden funcionar en <b>circuito cerrado</b>: bombear y turbinar la misma agua sin pérdida hidráulica.</li>
<li>Mayor problema: la <b>inversión inicial</b> (dos balsas y equipos). Estos proyectos suelen tener <b>más de 500 MW</b>.</li></ul>
<h4>Ejemplo: La Muela (Comunidad Valenciana)</h4>
<p>Sistema turbina-bomba de <b>630 MW</b>; un depósito de <b>23 hm³</b> hace de balsa superior y el <b>embalse de Cortes</b>, de inferior. Se llena de noche con la energía de la <b>central nuclear de Cofrentes</b>. Una ampliación terminada en <b>2013</b> añadió <b>852 MW</b> y la convirtió en la <b>mayor central de bombeo de Europa</b>.</p>
` },
    { id: "hid-mareas", title: "6. Energía maremotriz", slides: ["HID", 29, 40], html: `
<h4>Origen de las mareas</h4>
<p>Las mareas se deben a los efectos gravitacionales y cinemáticos de la Tierra, la <b>Luna</b> y el <b>Sol</b>. La Luna, aunque mucho menos masiva que el Sol, influye más porque está <b>mucho más cerca</b>: «arrastra» el agua y crea una protuberancia, modificada por el Sol.</p>
<ul><li>Tierra, Luna y Sol <b>alineados</b>: mareas amplificadas, <b>vivas</b> (de primavera).</li>
<li>Los tres en <b>triángulo rectángulo</b>: <b>mareas muertas</b>.</li>
<li><b>Dos</b> períodos de vivas y <b>dos</b> de muertas en cada ciclo lunar (≈ <b>29,5 días</b>).</li></ul>
<h4>Altura, período y longitud de onda</h4>
<div class="formula">$$h(\\theta)=\\frac{r^4 m}{M d^3}\\left(\\frac32\\cos^2\\theta-\\frac12\\right)$$</div>
<p>θ: ángulo entre la línea Tierra-Luna y la línea centro-punto; M, m: masas de Tierra y Luna (m/M = 0,0123); r ≈ 6.387 km; d ≈ 384.420 km. <b>Abultamiento máximo: 0,36 m</b>, cerca de la altura media medida (~<b>0,5 m</b>). El <b>rango de marea H</b> es la diferencia entre alturas máxima y mínima; el promedio en océanos es el doble de la altura máxima, ≈ <b>1 m</b>. Siempre hay <b>dos pleamares y dos bajamares</b>.</p>
<p>La Tierra gira en 24 h y la Luna aparenta girar en <b>24 h 50 min</b>; las ondas de marea tienen la mitad de ese período: <b>12 h 25 min ≈ 45.000 s</b>. Con velocidades de ≈ <b>200 m/s</b> y $c=\\lambda/T$, la longitud de onda es ≈ <b>9.000 km</b>, mayor que el ancho del Atlántico y del orden del ancho máximo del Pacífico.</p>
<h4>Sistema de piscina única (barrera de marea)</h4>
<p>Energía <b>perfectamente predecible</b> (T = 12 h 25 min), pero no coincide con la demanda, por lo que debería almacenarse. Una <b>presa de marea</b> separa el océano de una cuenca (golfo o estuario); las compuertas cerca del fondo llevan a <b>turbinas de baja presión reversibles</b>, que producen con el agua fluyendo en <b>cualquier dirección</b>. Ejemplo: <b>estuario del Rance (Francia)</b>.</p>
<div class="formula">$$W=\\int_0^H \\eta g h\\,A\\rho\\,dh=\\tfrac12 A\\eta\\rho g H^2 \\qquad \\dot W=\\frac{A\\eta\\rho g H^2}{T}$$</div>
<p>Se produce energía al <b>llenar</b> la piscina (pleamar) y otra vez al <b>vaciarla</b> (bajamar): el doble por período, de ahí $\\dot W$ con T = 12,5 h = 45.000 s.</p>
<h4>Inconvenientes</h4>
<p>No produce continuamente: genera en <b>dos «ráfagas»</b> de unos <b>20-30 minutos</b> y está inactiva el resto del tiempo. Desventajas: potencia muy alta en períodos muy cortos, quizá <b>sin demanda</b> (obliga a fluctuar otras centrales); turbinas de <b>muy alta potencia</b>, más caras; y el encendido y apagado frecuente <b>desgasta</b> turbinas, excitadores y generadores.</p>
` },
    { id: "hid-olas", title: "7. Energía undimotriz (olas)", slides: ["HID", 41, 51], html: `
<h4>Origen y recurso</h4>
<p>Las olas las causa <b>directamente el viento</b> e <b>indirectamente la energía solar</b>. Como los océanos cubren <b>más del 70 %</b> de la superficie terrestre, la energía de las olas es abundante.</p>
<h4>Mecánica de ondas</h4>
<p>Parámetros: <b>amplitud a</b> (mitad de la distancia vertical cresta-valle), <b>longitud de onda λ</b> (distancia horizontal entre crestas), <b>período</b> (tiempo entre dos crestas en un punto), frecuencia = 1/período y velocidad c = λ/período. Las partículas de fluido realizan <b>oscilaciones circulares</b> (diap. 43).</p>
<div class="formula">$$\\frac{\\dot W}{L}=\\frac{\\rho a^2 g\\sqrt{g\\lambda}}{\\sqrt{8\\pi}} \\qquad \\frac{\\dot W}{A}=\\frac{\\rho a^2 g\\sqrt{g}}{\\sqrt{8\\pi\\lambda}}$$</div>
<p>Densidades típicas por unidad de ancho cerca de las costas del Atlántico y el Pacífico: <b>20-80 kW/m</b>; en <b>tormentas</b> la potencia es mucho mayor y los sistemas deben soportar fuerzas muy altas.</p>
<h4>Sistemas de aprovechamiento</h4>
<p>Las olas son la <b>superposición</b> de ondas de distintas longitudes, frecuencias y velocidades; <b>la mayor parte de la energía está en las de gran longitud de onda y gran amplitud</b>, que los dispositivos deben absorber eficientemente. Ejemplos de los apuntes: <b>pato de Salter</b> (leva flotante que gira alrededor de un eje), <b>pistón-cilindro invertido</b> (comprime aire hacia tierra), <b>columna de agua oscilante</b> de Mutriku (el agua sube y comprime el aire, baja y lo succiona: la turbina gira en ambos sentidos), <b>Pelamis</b> (serpiente articulada con motores hidráulicos), sistemas con <b>boyas</b>, y sistemas <b>anclados al litoral o al fondo</b> con brazos flotantes.</p>
<h4>Efectos ambientales y retos</h4>
<ul><li>Limpia, renovable, <b>casi continua</b>; en mar abierto, afecta menos a la costa que las mareas.</li>
<li>Al ser baja la densidad de potencia, los sistemas son <b>masivos</b>; son <b>largos</b> y obstruyen la navegación; sus <b>partes móviles</b> pueden matar peces.</li>
<li>Condiciones adversas: por la <b>alta densidad del agua</b>, las fuerzas son <b>mucho mayores que en eólica</b>; <b>corrosión</b> salina; anclajes no a prueba de fallos; algunos (Dam-Atoll) lejos de la costa.</li>
<li>Ventaja: <b>alta correlación</b> entre el viento predominante y las olas de alta energía.</li></ul>
` },
    { id: "hid-otec", title: "8. Energía maremotérmica (OTEC)", slides: ["HID", 52, 58], html: `
<h4>Principio</h4>
<p>En latitudes tropicales la superficie del mar alcanza <b>27-32 ºC</b>; como la luz no penetra más allá de unos <b>30 m</b>, el agua del fondo de bahías profundas está a <b>5-8 ºC</b>. Son los dos focos de un motor térmico.</p>
<h4>Rendimiento</h4>
<ul><li>Rendimiento de Carnot del ciclo OTEC <b>inferior al 9 %</b>.</li><li>Plantas reales: <b>1-2 %</b>.</li>
<li>Pero el calor extraíble es <b>casi inagotable y gratuito</b>.</li></ul>
<p>Esquemas (diap. 54): ciclo cerrado con fluido de trabajo (evaporador con agua caliente superficial, turbina-generador, condensador con agua fría profunda, ~1 km) y <b>ciclo Claude</b> (abierto, con bomba de vacío). Ejemplo de Makai (Hawái, diap. 55 y 58): OTEC en tierra de <b>100 kW</b> operativa y un futuro OTEC marino de <b>100 MW</b>; usos complementarios: agua desalada, maricultura, refrigeración y aire acondicionado.</p>
<h4>Efectos ambientales y problemas</h4>
<ul><li>Limpia y renovable; como el gradiente existe todo el año, puede ser una fuente <b>continua y bastante confiable</b>.</li>
<li>Impactos muy bajos y <b>localizados</b>: perturbación local de la vida acuática y pequeños impedimentos a la navegación.</li>
<li>Desventaja inherente: <b>baja diferencia de temperatura</b> y bajos rendimientos; hay que optimizar todo. El <b>agua salada</b> corroe y el <b>crecimiento de algas</b> ensucia intercambiadores, tuberías y bombas: por eso las pocas plantas piloto <b>fallaron y se retiraron tras pocos meses</b>.</li></ul>
` }
  ],
  confusions: [
    ["<b>Rendimiento de turbina 72-84 %</b> vs <b>Carnot 30-40 %</b>", "72-84 % es el rendimiento típico de la turbina hidráulica; 30-40 % es la limitación de Carnot de una máquina térmica, que se cita para comparar energías específicas."],
    ["<b>770 GW / 6.754 TWh</b> vs <b>3.200 TWh</b>", "770 GW (2009) podrían producir 6.754 TWh (≈ 1/3 de la demanda); lo producido en 2009 fueron 3.200 TWh (16 % de la demanda, factor de carga 47 %)."],
    ["<b>Pequeña &lt; 30 MW / micro &lt; 1 MW</b> vs <b>minihidráulica &lt; 10 MW / microturbinas &lt; 10 kW</b>", "Los primeros límites se dan en el contexto mundial (diap. 13); los segundos, en el apartado de España (diap. 23)."],
    ["<b>Agua fluyente</b> vs <b>pie de presa</b>", "Fluyente: capta parte del caudal, &lt; 5 MW, 75 % del mercado. Pie de presa: regula caudales, &gt; 5 MW, ~20 % del mercado; incluye bombeo."],
    ["<b>Bombeo puro</b> vs <b>mixto</b>", "Puro: el embalse superior solo recibe agua bombeada. Mixto: además recibe aportes naturales."],
    ["<b>Mareas vivas</b> vs <b>muertas</b>", "Vivas: Tierra, Luna y Sol alineados. Muertas: forman un triángulo rectángulo. Hay dos de cada por ciclo lunar (29,5 días)."],
    ["<b>0,36 m</b> vs <b>0,5 m</b> vs <b>1 m</b>", "0,36 m: abultamiento máximo teórico; 0,5 m: altura media medida; 1 m: rango medio (doble de la altura máxima)."],
    ["<b>Potencia hidráulica: 13,6 %</b> vs <b>cobertura: 9,5 %</b> (REE 2023)", "13,6 % es la cuota en potencia instalada (de 125.620 MW); 9,5 % la cobertura de la demanda. Bombeo: 2,7 % y 1,9 %."],
    ["<b>Carnot OTEC &lt; 9 %</b> vs <b>real 1-2 %</b>", "El límite teórico por la pequeña diferencia de temperatura es &lt; 9 %; las plantas reales esperadas, 1-2 %."]
  ]
};

/* ---------- HID · preguntas ---------- */
L("HID", "hid-fundamentos", "Energía máxima", 1, "Según los apuntes, la energía máxima que puede producir un caudal de agua m que cae desde una altura H es…",
  ["$W_{max}=m\\,g\\,H$", "$W_{max}=\\tfrac12\\,m\\,g\\,H$", "$W_{max}=\\tfrac12\\,m\\,v^2$", "$W_{max}=m\\,g\\,H^2$"],
  0, "W<sub>max</sub> = m·g·H. El factor ½ y H² aparecen en la energía del llenado de una piscina mareomotriz (½AηρgH²).", "Apuntes HID, diap. 3");
L("HID", "hid-fundamentos", "Rendimiento de la turbina", 2, "El rendimiento típico de una turbina hidráulica que dan los apuntes es…",
  ["72-84 %", "30-40 %", "85-95 %", "47 %"],
  0, "72-84 %. El 30-40 % es la limitación de Carnot de una máquina térmica (diap. 5) y el 47 % el factor de carga medio de las hidroeléctricas.", "Apuntes HID, diap. 3");
L("HID", "hid-fundamentos", "Energía específica", 2, "¿Qué energía específica tiene 1 kg de agua con un salto de 30 m, según los apuntes?",
  ["0,294 kJ/kg", "2,94 kJ/kg", "29,4 kJ/kg", "0,0294 kJ/kg"],
  0, "g·H = 9,8 · 30 ≈ 294 J/kg = 0,294 kJ/kg, unas 10.000 veces menos que los ~3000 kJ/kg del vapor.", "Apuntes HID, diap. 5");
L("HID", "hid-fundamentos", "Energía específica", 3, "Sobre la comparación entre la energía potencial del agua y la energía térmica, ¿qué afirman los apuntes?",
  ["La energía específica potencial es muy baja; incluso con la limitación de Carnot (30-40 %), la térmica es muy superior",
   "La energía específica potencial es comparable a la térmica una vez se aplica la limitación de Carnot (30-40 %)",
   "La energía específica potencial es muy baja, pero supera a la térmica cuando el salto es mayor de 300 m",
   "La energía específica potencial es unas 100 veces menor que la energía interna del vapor"],
  0, "0,294 kJ/kg frente a ~3000 kJ/kg (×10.000): ni con el 30-40 % de Carnot se compensa. La potencia hidráulica sale de los grandes caudales.", "Apuntes HID, diap. 5");
L("HID", "hid-fundamentos", "Caudal y potencia", 3, "Con un caudal de 10⁴ m³/s, un salto de 30 m y un rendimiento del 75 %, ¿qué potencia eléctrica se obtiene aproximadamente?",
  ["≈ 2.200 MW", "≈ 22.000 MW", "≈ 2.900 MW", "≈ 220 MW"],
  0, "P = η·ρ·Q·g·H = 0,75 · 1000 · 10⁴ · 9,8 · 30 ≈ 2,2·10⁹ W. Con 10⁵ m³/s serían ≈ 22.000 MW (el rango de los apuntes); sin el 75 % saldrían ≈ 2.900 MW.", "Apuntes HID, diap. 6");
L("HID", "hid-fundamentos", "Canales y antigüedad", 2, "Señale la afirmación correcta según los apuntes:",
  ["Las grandes plantas tienen varios canales (5-30) hacia turbinas en paralelo, y la mayoría son instalaciones viejas, salvo Tres Gargantas",
   "Las grandes plantas tienen una única tubería forzada hacia una turbina, y la mayoría son instalaciones recientes",
   "Las grandes plantas tienen varios canales (50-300) hacia turbinas en serie, y la mayoría son instalaciones viejas",
   "Las grandes plantas tienen varios canales (5-30) hacia turbinas en serie, y la mayoría son posteriores a 1980"],
  0, "5-30 canales hacia turbinas en paralelo; salvo Tres Gargantas, la mayoría son viejas, algunas desde los años 1930 (Krasnoyarsk, Hoover).", "Apuntes HID, diap. 3 y 6");
L("HID", "hid-fundamentos", "Comparación con la nuclear", 1, "En los apuntes se compara la potencia de una gran hidroeléctrica con la de una central nuclear típica, que tiene unos…",
  ["1.000 MW", "2.200 MW", "500 MW", "10.000 MW"],
  0, "Una CN típica ≈ 1.000 MW, frente a los 2.200-22.000 MW posibles con caudales de 10⁴-10⁵ m³/s.", "Apuntes HID, diap. 6");

L("HID", "hid-mundo", "Grandes centrales", 2, "Según la tabla de grandes centrales de los apuntes, ¿cuál es la de mayor potencia y cuánta tiene?",
  ["Tres Gargantas, 18.200 MW (con 22.500 MW previstos para 2012)", "Itaipú, 18.200 MW (con 22.500 MW previstos para 2012)", "Tres Gargantas, 12.600 MW (con 18.200 MW previstos para 2012)", "Guri, 10.300 MW (con 12.600 MW previstos para 2012)"],
  0, "Tres Gargantas (Yangtsé): 18.200 MW en 2009, 22.500 previstos en 2012. Itaipú 12.600 MW; Guri 10.300 MW.", "Apuntes HID, diap. 7");
L("HID", "hid-mundo", "Países líderes", 3, "En la tabla de países líderes de los apuntes, ¿qué afirmación es correcta?",
  ["China tiene la mayor potencia (172 GW), pero Noruega obtiene el mayor porcentaje de su electricidad (98 %)",
   "Brasil tiene la mayor potencia (172 GW), pero Noruega obtiene el mayor porcentaje de su electricidad (98 %)",
   "China tiene la mayor potencia (172 GW) y también el mayor porcentaje de su electricidad (86 %)",
   "Canadá tiene la mayor potencia (89 GW), pero Brasil obtiene el mayor porcentaje de su electricidad (98 %)"],
  0, "China 172 GW (17 %); Noruega 98 %; Brasil 86 %; Canadá 89 GW (61 %).", "Apuntes HID, diap. 10");
L("HID", "hid-mundo", "Producción mundial", 2, "Según los apuntes, las centrales hidroeléctricas actuales (~770 GW en 2009) tendrían capacidad para producir…",
  ["6.754 TWh, aproximadamente un tercio de la demanda eléctrica mundial", "3.200 TWh, aproximadamente un tercio de la demanda eléctrica mundial", "6.754 TWh, aproximadamente el 16 % de la demanda eléctrica mundial", "20.000 TWh, aproximadamente la demanda eléctrica mundial"],
  0, "Capacidad: 6.754 TWh ≈ 1/3 de ~20.000 TWh. Lo realmente producido en 2009 fueron ~3.200 TWh (16 %).", "Apuntes HID, diap. 8");
L("HID", "hid-mundo", "Producción mundial", 3, "Sobre la producción hidroeléctrica mundial de 2009, ¿qué datos dan los apuntes?",
  ["≈ 3.200 TWh, factor de carga medio del 47 %, ≈ 16 % de la demanda y más del 90 % de la electricidad renovable",
   "≈ 6.754 TWh, factor de carga medio del 47 %, ≈ 33 % de la demanda y más del 90 % de la electricidad renovable",
   "≈ 3.200 TWh, factor de carga medio del 74 %, ≈ 16 % de la demanda y más del 50 % de la electricidad renovable",
   "≈ 3.200 TWh, factor de carga medio del 47 %, ≈ 16 % de la demanda y el 60 % de la electricidad renovable"],
  0, "3.200 TWh, 47 % de factor de carga, 16 % de la demanda y > 90 % de la renovable. Comprobación: 3.200 TWh / (770 GW · 8.760 h) ≈ 0,47.", "Apuntes HID, diap. 8");
L("HID", "hid-mundo", "Operación", 2, "¿Por qué las hidroeléctricas no suelen producir de forma continua a su capacidad nominal, según los apuntes?",
  ["Porque su control es sencillo y rápido (ajuste del caudal) y se utilizan sobre todo en los momentos de mayor demanda",
   "Porque su control es lento y complejo, y solo pueden arrancar cuando el embalse está lleno",
   "Porque la sedimentación obliga a parar las turbinas la mitad del tiempo",
   "Porque la normativa obliga a desembalsar un caudal ecológico constante que no se puede turbinar"],
  0, "Operación muy sencilla y rápida, ajustando el caudal; se usan en horas de mayor demanda, lo que explica el factor de carga del 47 %.", "Apuntes HID, diap. 8");
L("HID", "hid-mundo", "Vida útil", 3, "Según los apuntes, ¿qué limita la vida de una central hidroeléctrica?",
  ["La acumulación de sedimentos en el embalse aguas arriba de la presa, favorecida por la floculación de partículas",
   "El desgaste de canales, válvulas y compuertas, que son las partes con más piezas móviles",
   "La acumulación de sedimentos aguas abajo de la presa, favorecida por la turbulencia del agua turbinada",
   "La fatiga del hormigón de la presa, que obliga a cerrarla a los 30-40 años"],
  0, "La sedimentación aguas arriba (región de estancamiento, floculación) reduce la capacidad y puede obligar a cerrar el embalse. Canales, válvulas y compuertas no tienen partes móviles; las turbinas sí necesitan mantenimiento.", "Apuntes HID, diap. 9");
L("HID", "hid-mundo", "Costes", 2, "Según los apuntes, las grandes centrales hidroeléctricas producen electricidad a un coste significativamente menor que las térmicas porque…",
  ["funcionan más de 80 años con mantenimiento relativamente bajo y no necesitan combustible",
   "su embalse es barato de construir y las turbinas no necesitan mantenimiento",
   "funcionan unos 30 años con mantenimiento nulo y reciben primas a la producción",
   "funcionan de forma continua a su capacidad nominal, con factores de carga superiores al 90 %"],
  0, "Excepto el embalse, son simples, baratas y sin combustible; funcionan > 80 años con poco mantenimiento.", "Apuntes HID, diap. 11");
L("HID", "hid-mundo", "Expansión", 3, "Sobre la expansión futura de la hidroeléctrica, señale la afirmación correcta:",
  ["El proyecto Gran Inga (RD del Congo) produciría 40.000 MW y hay proyectos en China que suman 70.000 MW",
   "El proyecto Gran Inga (RD del Congo) produciría 70.000 MW y hay proyectos en China que suman 40.000 MW",
   "El proyecto Gran Inga (Brasil) produciría 40.000 MW y hay proyectos en Argentina que suman 70.000 MW",
   "La expansión se concentrará en Europa y Norteamérica, con pequeñas centrales que suman 40.000 MW"],
  0, "Gran Inga: 40.000 MW; China: 70.000 MW además de Tres Gargantas; Brasil y Argentina: ~10.000 MW. La expansión será en países en desarrollo.", "Apuntes HID, diap. 12");
L("HID", "hid-mundo", "Pequeñas centrales", 3, "Un río con un caudal de 10³ m³/s y un salto de 4 m tiene, según los apuntes, capacidad para producir…",
  ["39,2 MW", "3,92 MW", "392 MW", "29,4 MW"],
  0, "ρ·Q·g·H = 1000 · 10³ · 9,8 · 4 = 39,2 MW (potencia bruta, sin rendimiento). Con un 75 % saldrían ≈ 29,4 MW.", "Apuntes HID, diap. 13");
L("HID", "hid-mundo", "Pequeñas centrales", 2, "En el contexto mundial de los apuntes, las «pequeñas» y las «micro» hidroeléctricas se definen como las de menos de…",
  ["30 MW y 1 MW, respectivamente", "10 MW y 10 kW, respectivamente", "5 MW y 1 MW, respectivamente", "30 MW y 100 kW, respectivamente"],
  0, "Diap. 13: pequeñas < 30 MW, micro < 1 MW. Los 10 MW (minihidráulica) y 10 kW (microturbinas) aparecen en el apartado de España.", "Apuntes HID, diap. 13 y 23");

L("HID", "hid-impacto", "Impactos aguas abajo", 2, "¿Qué efectos aguas abajo de la generación hidroeléctrica citan los apuntes? (puede haber varias)",
  ["Sedimentación", "Fluctuación del caudal del río", "Reducción del oxígeno disuelto", "Aumento de la temperatura del agua por encima de 30 ºC"],
  [0, 1, 2], "Aguas abajo: sedimentación, fluctuación del caudal y reducción del oxígeno disuelto. El calentamiento del agua no figura.", "Apuntes HID, diap. 14");
L("HID", "hid-impacto", "Presas", 2, "Según los apuntes, las presas de las grandes centrales…",
  ["a menudo superan los 50 m de altura y 20 m de ancho, requieren mucho hormigón e impiden la migración de peces",
   "a menudo superan los 500 m de altura y 200 m de ancho, requieren mucho acero e impiden la migración de peces",
   "a menudo superan los 50 m de altura y 20 m de ancho, requieren mucho hormigón y favorecen la migración de peces",
   "rara vez superan los 20 m de altura, por lo que su impacto se limita a la inundación aguas abajo"],
  0, "> 50 m de altura y 20 m de ancho, sobre todo hormigón; inundan una gran área aguas arriba e impiden la migración de peces.", "Apuntes HID, diap. 14");
L("HID", "hid-impacto", "Seguridad", 1, "¿Cuál es, según los apuntes, el problema de seguridad más importante de la hidroeléctrica?",
  ["Los fallos de las presas, causa de algunos de los mayores desastres de la generación eléctrica", "La emisión de metano de los embalses", "La radiactividad natural acumulada en los sedimentos", "Los incendios en las salas de turbinas"],
  0, "Los fallos de presas han provocado varios de los mayores desastres causados por el hombre en la generación eléctrica.", "Apuntes HID, diap. 15");
L("HID", "hid-impacto", "Balance ambiental", 3, "¿Cuál de las siguientes afirmaciones sobre el impacto ambiental es FALSA según los apuntes?",
  ["Los impactos de las represas son mayores que los de las centrales de combustibles fósiles",
   "La hidroeléctrica es esencialmente una fuente limpia y renovable",
   "La presa inunda un área muy grande aguas arriba, que se convierte en el depósito",
   "La generación reduce el oxígeno disuelto en el agua aguas abajo"],
  0, "Los apuntes dicen lo contrario: los impactos son relativamente pocos y benignos frente a los de las centrales fósiles.", "Apuntes HID, diap. 14-15");

L("HID", "hid-espana", "Embalses", 2, "Según los apuntes, la capacidad total de embalses en España y la fracción hidroeléctrica son…",
  ["55.000 hm³, de los que el 40 % son embalses hidroeléctricos", "55.000 hm³, de los que el 75 % son embalses hidroeléctricos", "23.000 hm³, de los que el 40 % son embalses hidroeléctricos", "5.500 hm³, de los que el 40 % son embalses hidroeléctricos"],
  0, "55.000 hm³ con un 40 % hidroeléctrico, de las proporciones más altas de Europa y del mundo. 23 hm³ es el depósito superior de La Muela; 75 % la cuota de mercado del agua fluyente.", "Apuntes HID, diap. 16");
L("HID", "hid-espana", "Tipologías", 3, "Sobre las dos tipologías de aprovechamiento en España, ¿qué afirmación es correcta según los apuntes?",
  ["Las de agua fluyente suelen ser de menos de 5 MW y suponen un 75 % del mercado; las de pie de presa, de más de 5 MW, cerca del 20 %",
   "Las de agua fluyente suelen ser de más de 5 MW y suponen un 20 % del mercado; las de pie de presa, de menos de 5 MW, un 75 %",
   "Las de agua fluyente suelen ser de menos de 10 MW y suponen un 75 % del mercado; las de pie de presa, de más de 10 MW, cerca del 20 %",
   "Las de agua fluyente suelen ser de menos de 5 MW y suponen un 50 % del mercado; las de pie de presa, de más de 5 MW, el otro 50 %"],
  0, "Fluyente: < 5 MW, 75 %; pie de presa: > 5 MW, ~20 %. Los 10 MW son el límite de la minihidráulica.", "Apuntes HID, diap. 17");
L("HID", "hid-espana", "Tipologías", 2, "Las «centrales en canal de riego» y las «centrales de bombeo» pertenecen, respectivamente, a…",
  ["las centrales de agua fluyente y las centrales de pie de presa", "las centrales de pie de presa y las centrales de agua fluyente", "las centrales de agua fluyente en ambos casos", "las centrales de pie de presa en ambos casos"],
  0, "Las de canal de riego se incluyen en las de agua fluyente; las de bombeo o reversibles, en las de pie de presa.", "Apuntes HID, diap. 17");
L("HID", "hid-espana", "Datos REE", 3, "Según los datos de REE de 2023 de los apuntes, la hidráulica (sin bombeo) supuso…",
  ["el 13,6 % de la potencia instalada y el 9,5 % de la cobertura de la demanda",
   "el 9,5 % de la potencia instalada y el 13,6 % de la cobertura de la demanda",
   "el 13,6 % de la potencia instalada y el 20,3 % de la cobertura de la demanda",
   "el 2,7 % de la potencia instalada y el 1,9 % de la cobertura de la demanda"],
  0, "Hidráulica 13,6 % de potencia y 9,5 % de cobertura; turbinación bombeo 2,7 % y 1,9 %; 20,3 % es la nuclear en cobertura (y la FV en potencia).", "Apuntes HID, diap. 20-21");
L("HID", "hid-espana", "Datos REE", 3, "Con el total de 125.620 MW instalados en 2023 y la cuota hidráulica de la diapositiva, ¿qué potencia hidráulica (sin bombeo) había aproximadamente?",
  ["≈ 17.100 MW", "≈ 11.900 MW", "≈ 3.400 MW", "≈ 25.500 MW"],
  0, "0,136 · 125.620 ≈ 17.084 MW. Con el 9,5 % (cobertura) saldría ≈ 11.900 MW y con el 2,7 % (bombeo) ≈ 3.400 MW, pero no son cuotas de potencia hidráulica.", "Apuntes HID, diap. 20");
L("HID", "hid-espana", "Minihidráulica", 2, "En el apartado de España, una central se considera minihidráulica si su potencia instalada es menor de…",
  ["10 MW, y puede ser de agua fluyente o de pie de presa", "10 MW, y solo puede ser de agua fluyente", "30 MW, y puede ser de agua fluyente o de pie de presa", "5 MW, y solo puede ser de pie de presa"],
  0, "Minihidráulica < 10 MW, fluyente o pie de presa. El límite de 30 MW es el de «pequeñas centrales» en el contexto mundial.", "Apuntes HID, diap. 23");
L("HID", "hid-espana", "Microturbinas", 3, "¿Qué características de las microturbinas hidráulicas (< 10 kW) recogen los apuntes? (puede haber varias)",
  ["Aprovechan la fuerza cinética de los ríos en zonas aisladas", "Producen electricidad directamente en corriente alterna", "Necesitan un salto de agua mínimo de 4 m", "Requieren infraestructuras adicionales y un mantenimiento caro"],
  [0, 1], "Aprovechan la energía cinética del río, dan corriente alterna y NO necesitan caídas de agua, infraestructuras adicionales ni costes altos de mantenimiento.", "Apuntes HID, diap. 23");
L("HID", "hid-espana", "Parque español", 2, "Según los apuntes, España cuenta con unas 800 centrales hidroeléctricas, de las cuales…",
  ["20 de más de 200 MW representan en conjunto el 50 % de la potencia hidroeléctrica",
   "200 de más de 20 MW representan en conjunto el 50 % de la potencia hidroeléctrica",
   "20 de más de 200 MW representan en conjunto el 75 % de la potencia hidroeléctrica",
   "50 de más de 200 MW representan en conjunto el 20 % de la potencia hidroeléctrica"],
  0, "20 centrales > 200 MW = 50 % de la potencia; además, decenas de pequeñas presas de < 20 MW.", "Apuntes HID, diap. 23");
L("HID", "hid-espana", "Evolución", 1, "Según los apuntes, en los últimos años la aportación de la hidroeléctrica a la producción total de electricidad en España…",
  ["ha disminuido de forma importante, al introducirse otras renovables en el mix", "ha aumentado de forma importante, al construirse nuevos grandes embalses", "se ha mantenido constante en torno al 40 % de la producción", "ha desaparecido prácticamente por la sequía"],
  0, "La evolución ha sido creciente, pero su aportación porcentual ha bajado al entrar otras renovables.", "Apuntes HID, diap. 19");

L("HID", "hid-bombeo", "Funcionamiento", 1, "En una central hidroeléctrica de bombeo, el agua se bombea al embalse superior…",
  ["en las horas de menor demanda, para turbinarla después en las de mayor consumo", "en las horas de mayor demanda, para turbinarla después en las de menor consumo", "de forma continua, para mantener constante el salto H", "solo en épocas de sequía, para reponer el caudal ecológico"],
  0, "Se bombea en horas valle (menor demanda) y se turbina en horas pico.", "Apuntes HID, diap. 25");
L("HID", "hid-bombeo", "Almacenamiento", 2, "Según los apuntes, las centrales de bombeo constituyen en la actualidad…",
  ["la forma más económica de almacenar energía eléctrica", "la forma más eficiente de generar energía eléctrica renovable", "la única forma de almacenar energía eléctrica a gran escala sin pérdidas", "la forma más barata de construir una central hidroeléctrica"],
  0, "«Constituye en la actualidad la forma más económica de almacenar energía eléctrica». Su mayor problema es precisamente la gran inversión inicial.", "Apuntes HID, diap. 25");
L("HID", "hid-bombeo", "Puro y mixto", 2, "Una central de bombeo cuyo embalse superior recibe, además del agua bombeada, aportaciones naturales significativas es una central de…",
  ["bombeo mixto", "bombeo puro", "agua fluyente", "turbina reversible"],
  0, "Bombeo puro: el superior solo se alimenta del caudal bombeado. Mixto: también recibe aportes. «Turbina reversible» es un tipo de operación, no de embalse.", "Apuntes HID, diap. 25-26");
L("HID", "hid-bombeo", "Tipo de operación", 3, "Sobre los tipos de operación de las centrales de bombeo, señale la afirmación correcta según los apuntes:",
  ["Con turbina reversible, el mismo equipo funciona como turbina para generar o como bomba centrífuga para bombear",
   "Con turbina reversible, la turbina y la bomba son equipos independientes que funcionan por separado",
   "Con turbina y bombas, el mismo equipo funciona como turbina o como bomba centrífuga según el modo",
   "La turbina reversible solo puede emplearse en centrales de bombeo mixto"],
  0, "Turbina reversible: un único equipo, turbina o bomba centrífuga. Instalación de turbina y bombas: equipos independientes. La clasificación por operación es independiente de la de puro/mixto.", "Apuntes HID, diap. 26");
L("HID", "hid-bombeo", "Ventajas e inconvenientes", 3, "Según los apuntes, ¿qué afirmaciones sobre el bombeo son correctas? (puede haber varias)",
  ["La energía que se almacena puede provenir de fuentes no regulables como la solar o la nuclear",
   "Puede funcionar en circuito cerrado, bombeando y turbinando la misma agua",
   "Su principal problema es la inversión inicial; los proyectos suelen superar los 500 MW",
   "Su principal ventaja es que la inversión inicial es reducida al bastar con un solo embalse"],
  [0, 1, 2], "Las tres primeras están en la diap. 27. Necesita dos balsas, y la inversión inicial es su mayor problema.", "Apuntes HID, diap. 27");
L("HID", "hid-bombeo", "La Muela", 2, "Sobre el sistema de bombeo de La Muela (Comunidad Valenciana), los apuntes indican que…",
  ["tiene 630 MW de turbina-bomba, un depósito superior de 23 hm³ y el embalse de Cortes como inferior",
   "tiene 852 MW de turbina-bomba, un depósito superior de 23 hm³ y el embalse de Cofrentes como inferior",
   "tiene 630 MW de turbina-bomba, un depósito superior de 55 hm³ y el embalse de Cortes como inferior",
   "tiene 630 MW de turbina-bomba, el embalse de Cortes como superior y un depósito de 23 hm³ como inferior"],
  0, "630 MW, depósito superior de 23 hm³, Cortes aguas abajo; se llena de noche con energía de la CN de Cofrentes; ampliación de 852 MW en 2013.", "Apuntes HID, diap. 28");
L("HID", "hid-bombeo", "La Muela", 3, "Tras la ampliación terminada en 2013, ¿qué potencia de bombeo totaliza La Muela con los datos de los apuntes y qué la caracteriza?",
  ["≈ 1.482 MW; es la mayor central hidroeléctrica de bombeo de Europa", "≈ 852 MW; es la mayor central hidroeléctrica de bombeo de Europa", "≈ 1.482 MW; es la mayor central hidroeléctrica de España, pero no de bombeo", "≈ 2.200 MW; es la mayor central hidroeléctrica de bombeo del mundo"],
  0, "630 + 852 = 1.482 MW; los apuntes la califican como la mayor central hidroeléctrica de bombeo de Europa.", "Apuntes HID, diap. 28");

L("HID", "hid-mareas", "Origen de las mareas", 2, "¿Por qué la Luna desempeña un papel más importante que el Sol en la creación de las mareas?",
  ["Porque, aunque su masa es mucho menor, está significativamente más cerca de la Tierra",
   "Porque su masa es mayor que la del Sol",
   "Porque gira alrededor de la Tierra con un período de 12 h 25 min",
   "Porque el Sol solo influye en las mareas cuando forma un triángulo rectángulo con la Tierra y la Luna"],
  0, "La Luna está mucho más cerca. Su período aparente es de 24 h 50 min (el de las mareas, la mitad: 12 h 25 min).", "Apuntes HID, diap. 30");
L("HID", "hid-mareas", "Vivas y muertas", 2, "Según los apuntes, las mareas muertas se producen cuando…",
  ["la Tierra, la Luna y el Sol forman un triángulo rectángulo", "la Tierra, la Luna y el Sol están alineados", "la Luna está en su punto más alejado de la Tierra", "la Tierra está en su punto más cercano al Sol"],
  0, "Alineados: mareas vivas (de primavera). Triángulo rectángulo: mareas muertas. Dos de cada tipo por ciclo lunar (~29,5 días).", "Apuntes HID, diap. 30");
L("HID", "hid-mareas", "Predictibilidad", 3, "¿Qué afirmaciones sobre la energía mareomotriz recogen los apuntes? (puede haber varias)",
  ["Su variabilidad es perfectamente predecible (T = 12 h 25 min)",
   "Su producción no coincide necesariamente con la demanda, por lo que convendría almacenarla",
   "El sistema de piscina única produce energía de forma continua",
   "Las turbinas de la barrera de marea operan a alta presión y en un solo sentido"],
  [0, 1], "Es predecible pero no coincide con la demanda. La piscina única produce en dos ráfagas de 20-30 min, con turbinas de baja presión y reversibles.", "Apuntes HID, diap. 35 y 38");
L("HID", "hid-mareas", "Altura de la marea", 3, "Según el modelo de los apuntes, el abultamiento máximo de la superficie oceánica, la altura media medida y el rango medio de marea son, respectivamente…",
  ["0,36 m, ≈ 0,5 m y ≈ 1 m", "0,5 m, ≈ 0,36 m y ≈ 1 m", "0,36 m, ≈ 1 m y ≈ 0,5 m", "0,36 m, ≈ 0,5 m y ≈ 0,72 m"],
  0, "Teórico 0,36 m (m/M = 0,0123); medido ≈ 0,5 m; el rango medio es el doble de la altura máxima, ≈ 1 m.", "Apuntes HID, diap. 32-33");
L("HID", "hid-mareas", "Período y longitud de onda", 3, "Con un período de marea de ≈ 45.000 s y una velocidad de propagación de ≈ 200 m/s, la longitud de onda de las mareas es de unos…",
  ["9.000 km, mayor que el ancho del Atlántico", "900 km, menor que el ancho del Atlántico", "90.000 km, mayor que el ancho del Pacífico", "9.000 km, menor que el ancho del Atlántico"],
  0, "λ = c·T = 200 · 45.000 = 9·10⁶ m = 9.000 km, mayor que el ancho del Atlántico y del orden del ancho máximo del Pacífico.", "Apuntes HID, diap. 33-34");
L("HID", "hid-mareas", "Período", 2, "El período de las mareas oceánicas es de unas 12 h 25 min porque…",
  ["es la mitad del período aparente de rotación de la Luna alrededor de la Tierra (24 h 50 min)",
   "es la mitad del período de rotación de la Tierra (24 h)",
   "es el período de rotación de la Luna dividido entre los dos períodos de mareas vivas",
   "es el doble del período aparente de rotación de la Luna alrededor de la Tierra"],
  0, "Hay dos pleamares y dos bajamares: la onda tiene la mitad del período aparente de la Luna (24 h 50 min → 12 h 25 min ≈ 45.000 s).", "Apuntes HID, diap. 33");
L("HID", "hid-mareas", "Piscina única", 3, "Una central mareomotriz de piscina única con A = 10 km², rango H = 5 m y η = 0,8 produce, según la expresión de los apuntes, una potencia media de unos…",
  ["44 MW", "22 MW", "9 MW", "87 MW"],
  0, "Ẇ = AηρgH²/T = 10⁷ · 0,8 · 1000 · 9,8 · 25 / 45.000 ≈ 43,6 MW. 22 MW sería tomar solo un llenado (½AηρgH²/T) y 9 MW usar H en vez de H².", "Apuntes HID, diap. 36");
L("HID", "hid-mareas", "Piscina única", 2, "En el sistema de piscina única de los apuntes, las turbinas…",
  ["operan a baja presión y son reversibles, y producen energía tanto al llenar como al vaciar la piscina",
   "operan a alta presión y son reversibles, y solo producen energía al llenar la piscina",
   "operan a baja presión y no son reversibles, y producen energía tanto al llenar como al vaciar la piscina",
   "operan a baja presión y son reversibles, y producen energía de forma continua durante toda la marea"],
  0, "Turbinas de baja presión reversibles, que producen con el agua fluyendo en cualquier dirección: dos veces por período, pero no de forma continua.", "Apuntes HID, diap. 35-36");
L("HID", "hid-mareas", "Inconvenientes", 3, "¿Cuál de los siguientes NO es un inconveniente del sistema de piscina única según los apuntes?",
  ["Que la producción de energía sea impredecible por la variabilidad de las mareas",
   "Que la potencia muy alta solo se produzca en períodos cortos, cuando puede no haber demanda",
   "Que se necesiten turbinas de muy alta potencia, más caras",
   "Que el encendido y apagado frecuente desgaste los equipos y acorte su vida útil"],
  0, "La energía de las mareas es perfectamente predecible (T = 12 h 25 min); el problema es que no coincide con la demanda y llega en dos ráfagas de 20-30 min.", "Apuntes HID, diap. 35 y 38-39");
L("HID", "hid-mareas", "Rance", 1, "¿Qué central mareomotriz se muestra en los apuntes como ejemplo?",
  ["La del estuario del río Rance (Francia)", "La de Mutriku (País Vasco)", "La de La Muela (Comunidad Valenciana)", "La de Makai (Hawái)"],
  0, "Rance (Francia). Mutriku es de columna de agua oscilante (olas); La Muela, bombeo; Makai, OTEC.", "Apuntes HID, diap. 31");

L("HID", "hid-olas", "Origen", 2, "Según los apuntes, las olas oceánicas son causadas…",
  ["directamente por el viento e, indirectamente, por la energía solar", "directamente por la atracción de la Luna e, indirectamente, por el Sol", "directamente por la energía solar e, indirectamente, por el viento", "directamente por la rotación de la Tierra e, indirectamente, por el viento"],
  0, "Viento (directo) y Sol (indirecto). Las mareas son las que se deben a la Luna y al Sol.", "Apuntes HID, diap. 42");
L("HID", "hid-olas", "Densidad de potencia", 2, "¿Qué potencia típica por unidad de ancho de ola dan los apuntes cerca de las costas del Atlántico y del Pacífico?",
  ["20-80 kW/m", "2-8 kW/m", "200-800 kW/m", "20-80 W/m²"],
  0, "20-80 kW/m; en tormentas, mucho más.", "Apuntes HID, diap. 44");
L("HID", "hid-olas", "Potencia de las olas", 3, "Según la expresión de los apuntes, $\\dot W/L=\\rho a^2 g\\sqrt{g\\lambda}/\\sqrt{8\\pi}$. Si la amplitud de las olas se duplica (misma longitud de onda), la potencia por unidad de ancho…",
  ["se multiplica por 4", "se multiplica por 2", "se multiplica por √2", "se multiplica por 8"],
  0, "Depende de a²: al duplicar a, se cuadruplica. Por eso en tormentas la potencia crece mucho y los sistemas deben resistir fuerzas muy altas.", "Apuntes HID, diap. 44");
L("HID", "hid-olas", "Energía de las ondas", 3, "Según los apuntes, la mayor parte de la energía de las olas está contenida en las ondas de…",
  ["gran longitud de onda y gran amplitud", "pequeña longitud de onda y gran amplitud", "gran longitud de onda y pequeña amplitud", "alta frecuencia y pequeña amplitud"],
  0, "Las olas son superposición de ondas; la energía está en las de gran λ y gran amplitud, que los dispositivos deben absorber eficientemente.", "Apuntes HID, diap. 45");
L("HID", "hid-olas", "Dispositivos", 2, "En el sistema de Mutriku de los apuntes (columna de agua oscilante), la turbina…",
  ["es accionada por el aire comprimido cuando el agua sube y por el aire succionado cuando baja",
   "es accionada directamente por el agua que entra y sale del dique",
   "es accionada por el aire comprimido solo cuando el agua sube; al bajar se detiene",
   "es accionada por motores hidráulicos situados en las articulaciones de una serpiente flotante"],
  0, "A: el agua interior sube y comprime el aire; B: baja y lo succiona; en ambos casos el aire acciona la turbina. Los motores hidráulicos articulados son del Pelamis.", "Apuntes HID, diap. 47-48");
L("HID", "hid-olas", "Retos", 3, "Sobre los sistemas de energía de las olas, ¿qué afirmaciones recogen los apuntes? (puede haber varias)",
  ["Por la alta densidad del agua, soportan fuerzas mucho mayores que los sistemas eólicos",
   "Son sistemas masivos porque la densidad de potencia es relativamente baja",
   "Existe una alta correlación entre el viento predominante y las olas de alta energía",
   "Afectan a la ecología costera más que los sistemas de mareas"],
  [0, 1, 2], "Las tres primeras están en las diap. 50-51. Los sistemas de olas, en mar abierto, afectan a la costa menos que los de mareas.", "Apuntes HID, diap. 50-51");
L("HID", "hid-olas", "Impactos", 2, "¿Cuál de los siguientes es un efecto ambiental de la energía de las olas citado en los apuntes?",
  ["Sus partes móviles podrían matar peces y otros animales marinos atrapados", "La emisión de gases de efecto invernadero durante su operación", "La reducción del oxígeno disuelto aguas abajo", "La inundación de grandes superficies costeras"],
  0, "Sistemas masivos, obstrucción de la navegación y partes móviles peligrosas para la fauna. La reducción de oxígeno disuelto es propia de las hidroeléctricas.", "Apuntes HID, diap. 50");

L("HID", "hid-otec", "Temperaturas", 2, "Según los apuntes, en latitudes tropicales las temperaturas del agua superficial y del fondo de las bahías profundas son, respectivamente…",
  ["27-32 ºC y 5-8 ºC", "17-22 ºC y 5-8 ºC", "27-32 ºC y 0-2 ºC", "32-37 ºC y 15-18 ºC"],
  0, "Superficie 27-32 ºC; fondo 5-8 ºC (la luz no penetra más allá de unos 30 m).", "Apuntes HID, diap. 53");
L("HID", "hid-otec", "Rendimiento", 2, "El rendimiento de Carnot del ciclo OTEC y el rendimiento esperado de las plantas reales son, según los apuntes…",
  ["inferior al 9 % y 1-2 %", "inferior al 30 % y 9 %", "inferior al 9 % y 5-8 %", "inferior al 2 % y 0,5 %"],
  0, "Carnot < 9 %; plantas reales 1-2 %. Aun así, el calor es casi inagotable y gratuito.", "Apuntes HID, diap. 53");
L("HID", "hid-otec", "Rendimiento", 3, "Con agua superficial a 32 ºC y agua profunda a 5 ºC (extremos de los rangos de los apuntes), el rendimiento de Carnot es de aproximadamente…",
  ["8,8 %", "84 %", "0,88 %", "15,6 %"],
  0, "η = 1 − 278,15/305,15 ≈ 0,088 → 8,8 %, coherente con el «inferior al 9 %». 84 % sería usar ºC en lugar de K.", "Apuntes HID, diap. 53");
L("HID", "hid-otec", "Ventajas", 3, "¿Qué afirmaciones sobre la OTEC son correctas según los apuntes? (puede haber varias)",
  ["Puede ser una fuente continua y bastante confiable, porque la diferencia de temperatura existe todo el año",
   "Sus efectos ambientales son muy bajos y se localizan en las proximidades de la planta",
   "Es una fuente intermitente, porque la diferencia de temperatura solo existe en verano",
   "Las plantas piloto construidas en la costa han funcionado sin problemas durante décadas"],
  [0, 1], "Continua y confiable; efectos muy bajos y localizados (perturbación local de la vida acuática, pequeños impedimentos a la navegación). Las plantas piloto fallaron tras pocos meses por la corrosión y las algas.", "Apuntes HID, diap. 56-57");
L("HID", "hid-otec", "Problemas", 2, "¿Por qué fallaron y se retiraron tras pocos meses las pocas plantas piloto OTEC, según los apuntes?",
  ["Por la corrosión del agua salada y el ensuciamiento por algas de intercambiadores, tuberías y bombas",
   "Por la falta de diferencia de temperatura durante el invierno tropical",
   "Por la obstrucción grave a la navegación y la oposición de los pescadores",
   "Por el agotamiento del agua fría profunda tras pocos meses de bombeo"],
  0, "Corrosión y crecimiento de algas en el medio marino/costero, además de la baja eficiencia inherente.", "Apuntes HID, diap. 57");

C("HID", "hid-fundamentos", "Energía máxima de un salto y rendimiento de turbina", "$W_{max}=m\\,g\\,H$; la turbina extrae menos, con un rendimiento típico del <b>72-84 %</b>.");
C("HID", "hid-fundamentos", "Energía específica: agua con 30 m frente a vapor", "Agua: <b>0,294 kJ/kg</b>; vapor: ~<b>3000 kJ/kg</b> (×10.000). La potencia hidráulica viene del <b>caudal</b> (10⁴-10⁵ m³/s).");
C("HID", "hid-fundamentos", "Potencia con 10⁴-10⁵ m³/s, 30 m y 75 %", "<b>2.200-22.000 MW</b> eléctricos (una CN típica ≈ 1.000 MW).");
C("HID", "hid-mundo", "Hidroeléctrica mundial (2009)", "~<b>770 GW</b>; capacidad 6.754 TWh (≈ 1/3 de la demanda). Producido: <b>3.200 TWh</b>, FC <b>47 %</b>, 16 % de la demanda, &gt; 90 % de la renovable.");
C("HID", "hid-mundo", "Las mayores centrales de la tabla", "Tres Gargantas <b>18.200 MW</b> (22.500 en 2012), Itaipú 12.600, Guri 10.300, La Grande 10.000.");
C("HID", "hid-mundo", "¿Qué limita la vida de una central hidroeléctrica?", "La <b>sedimentación</b> del embalse aguas arriba (región de estancamiento, floculación). Las grandes centrales duran &gt; 80 años.");
C("HID", "hid-mundo", "Pequeña y micro hidroeléctrica (contexto mundial)", "Pequeña &lt; <b>30 MW</b>; micro &lt; <b>1 MW</b>. 10³ m³/s y 4 m → 39,2 MW.");
C("HID", "hid-impacto", "Efectos aguas abajo", "Sedimentación, fluctuación del caudal y reducción del oxígeno disuelto. Mayor riesgo: <b>fallo de presas</b>.");
C("HID", "hid-espana", "Embalses en España", "<b>55.000 hm³</b>, el <b>40 %</b> hidroeléctricos.");
C("HID", "hid-espana", "Agua fluyente vs pie de presa", "Fluyente: &lt; 5 MW, <b>75 %</b> del mercado (incluye canal de riego). Pie de presa: &gt; 5 MW, ~<b>20 %</b> (incluye bombeo).");
C("HID", "hid-espana", "Minihidráulica y microturbinas (España)", "Mini &lt; <b>10 MW</b>; microturbinas &lt; <b>10 kW</b> (energía cinética del río, corriente alterna, sin salto).");
C("HID", "hid-espana", "REE 2023: hidráulica", "Total 125.620 MW. Hidráulica <b>13,6 %</b> de potencia y <b>9,5 %</b> de cobertura; bombeo 2,7 % y 1,9 %.");
C("HID", "hid-bombeo", "Bombeo puro vs mixto", "Puro: el embalse superior solo recibe agua bombeada. Mixto: además recibe aportes naturales.");
C("HID", "hid-bombeo", "La Muela", "630 MW + 852 MW (2013); depósito superior de 23 hm³, inferior Cortes; noche con energía de Cofrentes. Mayor bombeo de Europa.");
C("HID", "hid-mareas", "Mareas vivas y muertas", "Vivas: Tierra, Luna y Sol <b>alineados</b>. Muertas: <b>triángulo rectángulo</b>. Dos de cada en ~29,5 días.");
C("HID", "hid-mareas", "Período y longitud de onda de las mareas", "T = 12 h 25 min ≈ <b>45.000 s</b>; c ≈ 200 m/s → λ ≈ <b>9.000 km</b>.");
C("HID", "hid-mareas", "Potencia media de una piscina única", "$\\dot W = A\\eta\\rho g H^2/T$ (dos llenados/vaciados de $\\tfrac12 A\\eta\\rho g H^2$ por período).");
C("HID", "hid-olas", "Potencia de las olas en costas", "<b>20-80 kW/m</b> (Atlántico y Pacífico); $\\dot W/L \\propto a^2\\sqrt{\\lambda}$.");
C("HID", "hid-otec", "OTEC: temperaturas y rendimientos", "Superficie 27-32 ºC, fondo 5-8 ºC. Carnot &lt; <b>9 %</b>; real <b>1-2 %</b>.");
C("HID", "hid-otec", "¿Por qué fallaron las plantas piloto OTEC?", "<b>Corrosión</b> por agua salada y <b>algas</b> que ensucian intercambiadores, tuberías y bombas.");

DRILLS.push({ id: "hid-m-centrales", type: "match", tema: "HID", sec: "hid-mundo", title: "Central ↔ potencia (Tabla 11.1)", pairs: [
  ["Tres Gargantas", "18.200 MW"], ["Itaipú", "12.600 MW"], ["Guri", "10.300 MW"], ["La Grande", "10.000 MW"], ["Grand Coulee", "6.500 MW"], ["Krasnoyarsk", "6.400 MW"], ["Hoover", "1.500 MW"] ] });
DRILLS.push({ id: "hid-c-tipos", type: "classify", tema: "HID", sec: "hid-espana", title: "¿Agua fluyente o pie de presa?", cats: ["Agua fluyente", "Pie de presa"], items: [
  ["Capta una parte del caudal y lo devuelve al río", 0], ["Normalmente menos de 5 MW", 0], ["≈ 75 % del mercado", 0], ["Centrales en canal de riego", 0],
  ["Regula los caudales con una presa", 1], ["Más de 5 MW", 1], ["≈ 20 % del mercado", 1], ["Centrales de bombeo o reversibles", 1] ] });
DRILLS.push({ id: "hid-c-marinas", type: "classify", tema: "HID", sec: "hid-olas", title: "¿Mareomotriz, undimotriz u OTEC?", cats: ["Mareomotriz", "Undimotriz (olas)", "OTEC"], items: [
  ["Rance (Francia)", 0], ["Período de 12 h 25 min", 0], ["Turbinas reversibles de baja presión", 0], ["Producción en dos ráfagas de 20-30 min", 0],
  ["Mutriku (columna de agua oscilante)", 1], ["Pelamis y pato de Salter", 1], ["20-80 kW/m", 1], ["Causada por el viento", 1],
  ["Superficie 27-32 ºC, fondo 5-8 ºC", 2], ["Rendimiento real del 1-2 %", 2], ["Ciclo Claude", 2], ["Makai (Hawái)", 2] ] });
DRILLS.push({ id: "hid-m-cifras", type: "match", tema: "HID", sec: "hid-fundamentos", title: "Cifra ↔ significado", pairs: [
  ["72-84 %", "Rendimiento de turbina"], ["0,294 kJ/kg", "Agua con 30 m de salto"], ["47 %", "Factor de carga mundial (2009)"], ["~770 GW", "Potencia mundial (2009)"],
  ["55.000 hm³", "Embalses en España"], ["0,36 m", "Abultamiento máximo de marea"], ["&lt; 9 %", "Carnot del ciclo OTEC"] ] });

MNEMO["hid-fundamentos"] = ["«m·g·H y un 80 % largo»: la turbina rinde 72-84 %.", "«30 metros = 0,3 kJ/kg»: el agua pesa poco energéticamente; lo que manda es el caudal (10⁴-10⁵ m³/s → 2,2-22 GW)."];
MNEMO["hid-mundo"] = ["2009: «770 – 3.200 – 47 – 16 – 90»: GW, TWh, factor de carga, % demanda y % de la renovable.", "«Noruega 98, Brasil 86»: casi toda su electricidad es hidráulica; China es la que más potencia tiene (172 GW).", "Gran Inga «40», China «70», Brasil-Argentina «10» (miles de MW)."];
MNEMO["hid-impacto"] = ["Aguas abajo, «SFO»: Sedimentación, Fluctuación del caudal y Oxígeno disuelto (menos).", "Presa «50 × 20»: más de 50 m de alto y 20 m de ancho."];
MNEMO["hid-espana"] = ["«Fluyente: 5 MW y 75 %; presa: más de 5 y 20 %».", "Escala de tamaños: microturbina &lt; 10 kW · micro &lt; 1 MW · mini &lt; 10 MW · pequeña &lt; 30 MW.", "REE 2023 «13,6 instalada, 9,5 cubierta»."];
MNEMO["hid-bombeo"] = ["«Bombeo en valle, turbino en pico».", "«Puro = sin río»: el superior solo recibe lo que se bombea.", "La Muela «630 + 852»: Cortes abajo, Cofrentes de noche."];
MNEMO["hid-mareas"] = ["«Alineados = vivas»: los tres tiran juntos; en ángulo recto se estorban (muertas).", "«0,36 – 0,5 – 1»: teórico, medido y rango.", "Marea «12-25»: 12 h 25 min ≈ 45.000 s; × 200 m/s = 9.000 km."];
MNEMO["hid-olas"] = ["Olas = hijas del viento y nietas del Sol.", "«Al cuadrado»: doble amplitud, cuádruple potencia; por eso las tormentas son el gran enemigo.", "«20-80 kW por metro» de frente de ola."];
MNEMO["hid-otec"] = ["OTEC «30 arriba, 5 abajo»: ~27-32 ºC frente a 5-8 ºC → Carnot &lt; 9 %, real 1-2 %.", "Lo que mata a la OTEC: «sal y algas»."];

DIAGRAMS.push({ sec: "hid-fundamentos", h4: "Energía máxima de un salto", cap: "Esquema de una central de embalse (diap. 4): el agua del embalse baja por la tubería forzada hasta la turbina con un salto H. La potencia eléctrica es la máxima (ṁ·g·H) multiplicada por el rendimiento de la turbina.", svg: `<svg class="dg" viewBox="0 0 520 240" role="img" aria-label="Esquema de central hidroeléctrica de embalse">
<defs><marker id="hidAr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#1e40af"/></marker>
<marker id="hidAr2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<polygon points="20,60 250,60 250,200 20,200" fill="#dbeafe"/>
<text x="100" y="110" text-anchor="middle" class="tb" fill="#1e40af">Embalse</text>
<polygon points="250,40 290,40 340,200 250,200" fill="#cbd5e1" stroke="#64748b"/>
<text x="290" y="34" text-anchor="middle" class="small2">Presa</text>
<path d="M240,150 L330,188" stroke="#2563eb" stroke-width="8" fill="none"/>
<text x="210" y="178" text-anchor="middle" class="small2">tubería forzada</text>
<circle cx="345" cy="192" r="13" fill="#fff" stroke="#1e40af" stroke-width="2"/><text x="345" y="226" text-anchor="middle" class="small2 tb">Turbina</text>
<rect x="358" y="186" width="150" height="16" fill="#dbeafe"/>
<line x1="380" y1="194" x2="470" y2="194" stroke="#1e40af" stroke-width="2" marker-end="url(#hidAr1)"/><text x="480" y="182" text-anchor="end" class="small2">río</text>
<line x1="388" y1="62" x2="388" y2="180" stroke="#64748b" stroke-width="1.5" marker-start="url(#hidAr2)" marker-end="url(#hidAr2)"/>
<line x1="250" y1="60" x2="400" y2="60" class="dash" stroke="#64748b"/>
<text x="398" y="125" class="tb">H</text>
<text x="420" y="88" class="small2">W<tspan baseline-shift='sub' font-size='9'>max</tspan> = ṁ·g·H</text>
<text x="420" y="106" class="small2">η<tspan baseline-shift='sub' font-size='9'>turbina</tspan> = 72-84 %</text>
<text x="420" y="124" class="small2 mut">5-30 canales</text>
<text x="420" y="140" class="small2 mut">en paralelo</text>
</svg>` });

DIAGRAMS.push({ sec: "hid-mundo", h4: "Grandes centrales y países líderes", cap: "Potencia de las mayores centrales de la Tabla 11.1 de los apuntes (MW). Tres Gargantas estaba instalada en 2009 con 18.200 MW y prevista para 22.500 MW en 2012.", svg: `<svg class="dg" viewBox="0 0 520 280" role="img" aria-label="Potencia de las mayores centrales hidroeléctricas">
<line class="ax" x1="130" y1="20" x2="130" y2="250"/>
<text x="122" y="40" text-anchor="end" class="small2 tb">Tres Gargantas</text><rect x="130" y="28" width="291" height="18" fill="#0369a1"/><rect x="421" y="28" width="69" height="18" fill="#e0f2fe" stroke="#0369a1" class="dash"/><text x="425" y="41" class="small2">→ 22.500</text>
<text x="122" y="68" text-anchor="end" class="small2">Itaipú</text><rect x="130" y="56" width="202" height="18" fill="#0891b2"/><text x="338" y="69" class="small2">12.600</text>
<text x="122" y="96" text-anchor="end" class="small2">Guri</text><rect x="130" y="84" width="165" height="18" fill="#0891b2"/><text x="301" y="97" class="small2">10.300</text>
<text x="122" y="124" text-anchor="end" class="small2">La Grande</text><rect x="130" y="112" width="160" height="18" fill="#0891b2"/><text x="296" y="125" class="small2">10.000</text>
<text x="122" y="152" text-anchor="end" class="small2">Grand Coulee</text><rect x="130" y="140" width="104" height="18" fill="#0891b2"/><text x="240" y="153" class="small2">6.500</text>
<text x="122" y="180" text-anchor="end" class="small2">Krasnoyarsk</text><rect x="130" y="168" width="102" height="18" fill="#0891b2"/><text x="238" y="181" class="small2">6.400</text>
<text x="122" y="208" text-anchor="end" class="small2">Niágara</text><rect x="130" y="196" width="31" height="18" fill="#0891b2"/><text x="167" y="209" class="small2">1.950</text>
<text x="122" y="236" text-anchor="end" class="small2">Hoover</text><rect x="130" y="224" width="24" height="18" fill="#0891b2"/><text x="160" y="237" class="small2">1.500</text>
<line class="ax" x1="130" y1="250" x2="490" y2="250"/>
<text x="130" y="266" text-anchor="middle" class="small2">0</text><text x="290" y="266" text-anchor="middle" class="small2">10.000</text><text x="450" y="266" text-anchor="middle" class="small2">20.000 MW</text>
</svg>` });

DIAGRAMS.push({ sec: "hid-espana", h4: "Evolución y datos de REE", cap: "España 2023 (REE): cuota de cada tecnología en la potencia instalada (125.620 MW) y en la cobertura de la demanda. La hidráulica pesa más en potencia (13,6 %) que en energía (9,5 %); con la nuclear ocurre lo contrario (5,7 % frente a 20,3 %).", svg: `<svg class="dg" viewBox="0 0 520 260" role="img" aria-label="Potencia instalada y cobertura de demanda en España 2023">
<rect x="300" y="12" width="12" height="12" fill="#0369a1"/><text x="318" y="22" class="small2">potencia instalada</text>
<rect x="420" y="12" width="12" height="12" fill="#7dd3fc"/><text x="438" y="22" class="small2">cobertura</text>
<line class="ax" x1="130" y1="35" x2="130" y2="230"/>
<text x="122" y="52" text-anchor="end" class="small2 tb">Hidráulica</text><rect x="130" y="40" width="82" height="11" fill="#0369a1"/><text x="216" y="50" class="small2">13,6</text><rect x="130" y="52" width="57" height="11" fill="#7dd3fc"/><text x="191" y="62" class="small2">9,5</text>
<text x="122" y="84" text-anchor="end" class="small2">Bombeo</text><rect x="130" y="72" width="16" height="11" fill="#0369a1"/><text x="150" y="82" class="small2">2,7</text><rect x="130" y="84" width="11" height="11" fill="#7dd3fc"/><text x="145" y="94" class="small2">1,9</text>
<text x="122" y="116" text-anchor="end" class="small2">Nuclear</text><rect x="130" y="104" width="34" height="11" fill="#0369a1"/><text x="168" y="114" class="small2">5,7</text><rect x="130" y="116" width="122" height="11" fill="#7dd3fc"/><text x="256" y="126" class="small2">20,3</text>
<text x="122" y="148" text-anchor="end" class="small2">Ciclo comb.</text><rect x="130" y="136" width="125" height="11" fill="#0369a1"/><text x="259" y="146" class="small2">20,9</text><rect x="130" y="148" width="104" height="11" fill="#7dd3fc"/><text x="238" y="158" class="small2">17,3</text>
<text x="122" y="180" text-anchor="end" class="small2">Eólica</text><rect x="130" y="168" width="147" height="11" fill="#0369a1"/><text x="281" y="178" class="small2">24,5</text><rect x="130" y="180" width="141" height="11" fill="#7dd3fc"/><text x="275" y="190" class="small2">23,5</text>
<text x="122" y="212" text-anchor="end" class="small2">Solar FV</text><rect x="130" y="200" width="122" height="11" fill="#0369a1"/><text x="256" y="210" class="small2">20,3</text><rect x="130" y="212" width="84" height="11" fill="#7dd3fc"/><text x="218" y="222" class="small2">14,0</text>
<line class="ax" x1="130" y1="230" x2="310" y2="230"/>
<text x="130" y="246" text-anchor="middle" class="small2">0</text><text x="190" y="246" text-anchor="middle" class="small2">10</text><text x="250" y="246" text-anchor="middle" class="small2">20</text><text x="310" y="246" text-anchor="middle" class="small2">30 %</text>
</svg>` });

DIAGRAMS.push({ sec: "hid-espana", h4: "Minihidráulica y parque actual", cap: "Escala de tamaños de los apuntes. Ojo: los límites de «pequeña» (&lt; 30 MW) y «micro» (&lt; 1 MW) se dan en el contexto mundial; el de minihidráulica (&lt; 10 MW), las microturbinas (&lt; 10 kW) y el umbral de 5 MW entre agua fluyente y pie de presa, en el apartado de España.", svg: `<svg class="dg" viewBox="0 0 520 220" role="img" aria-label="Escala de tamaños de centrales hidroeléctricas">
<line class="ax" x1="30" y1="110" x2="500" y2="110"/>
<text x="30" y="130" text-anchor="middle" class="small2">1 kW</text><text x="124" y="130" text-anchor="middle" class="small2">10 kW</text><text x="218" y="130" text-anchor="middle" class="small2">1 MW</text><text x="312" y="130" text-anchor="middle" class="small2">10 MW</text><text x="406" y="130" text-anchor="middle" class="small2">100 MW</text><text x="500" y="130" text-anchor="middle" class="small2">1 GW</text>
<line x1="124" y1="100" x2="124" y2="120" stroke="#0d9488" stroke-width="3"/><text x="124" y="92" text-anchor="middle" class="small2 tb">microturbina &lt; 10 kW</text><text x="124" y="78" text-anchor="middle" class="small2 mut">(España)</text>
<line x1="218" y1="100" x2="218" y2="120" stroke="#d97706" stroke-width="3"/><text x="218" y="160" text-anchor="middle" class="small2 tb">micro &lt; 1 MW</text><text x="218" y="174" text-anchor="middle" class="small2 mut">(mundo)</text>
<line x1="283" y1="100" x2="283" y2="120" stroke="#2563eb" stroke-width="3"/><text x="270" y="60" text-anchor="middle" class="small2 tb">5 MW: fluyente | pie de presa</text><line x1="283" y1="66" x2="283" y2="98" class="dash" stroke="#2563eb"/>
<line x1="312" y1="100" x2="312" y2="120" stroke="#0d9488" stroke-width="3"/><text x="320" y="92" text-anchor="start" class="small2 tb">mini &lt; 10 MW</text><text x="320" y="78" text-anchor="start" class="small2 mut">(España)</text>
<line x1="357" y1="100" x2="357" y2="120" stroke="#d97706" stroke-width="3"/><text x="357" y="160" text-anchor="middle" class="small2 tb">pequeña &lt; 30 MW</text><text x="357" y="174" text-anchor="middle" class="small2 mut">(mundo)</text>
<line x1="434" y1="100" x2="434" y2="120" stroke="#0369a1" stroke-width="3"/><text x="452" y="160" text-anchor="middle" class="small2 tb">20 centrales &gt; 200 MW</text><text x="452" y="174" text-anchor="middle" class="small2 mut">= 50 % (España)</text>
<text x="260" y="206" text-anchor="middle" class="small2 mut">escala logarítmica de potencia</text>
</svg>` });

DIAGRAMS.push({ sec: "hid-bombeo", h4: "Funcionamiento", cap: "Central de bombeo: en horas valle se consume electricidad (por ejemplo, nuclear o solar no regulables) para subir agua al embalse superior; en horas pico se turbina. En bombeo puro el embalse superior no recibe aportes naturales; en mixto, sí.", svg: `<svg class="dg" viewBox="0 0 520 230" role="img" aria-label="Esquema de una central de bombeo">
<defs><marker id="hidAr3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#0d9488"/></marker>
<marker id="hidAr4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#d97706"/></marker></defs>
<rect x="20" y="30" width="150" height="50" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="95" y="52" text-anchor="middle" class="tb" fill="#1e40af">Embalse superior</text><text x="95" y="70" text-anchor="middle" class="small2">La Muela: depósito 23 hm³</text>
<rect x="330" y="160" width="170" height="50" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="415" y="182" text-anchor="middle" class="tb" fill="#1e40af">Embalse inferior</text><text x="415" y="200" text-anchor="middle" class="small2">La Muela: embalse de Cortes</text>
<circle cx="250" cy="125" r="22" fill="#fff" stroke="#1e40af" stroke-width="2"/><text x="250" y="122" text-anchor="middle" class="small2 tb">T/B</text><text x="250" y="135" text-anchor="middle" class="small2">reversible</text>
<path d="M160,85 Q200,110 228,118" fill="none" stroke="#d97706" stroke-width="3" marker-end="url(#hidAr4)"/>
<path d="M272,135 Q310,150 340,160" fill="none" stroke="#d97706" stroke-width="3" marker-end="url(#hidAr4)"/>
<path d="M360,155 Q330,120 272,112" fill="none" stroke="#0d9488" stroke-width="3" class="dash" marker-end="url(#hidAr3)"/>
<path d="M232,105 Q200,80 175,62" fill="none" stroke="#0d9488" stroke-width="3" class="dash" marker-end="url(#hidAr3)"/>
<text x="330" y="60" class="small2 tb" fill="#d97706">Horas pico: turbinar</text><text x="330" y="76" class="small2">genera electricidad</text>
<text x="20" y="150" class="small2 tb" fill="#0d9488">Horas valle: bombear</text><text x="20" y="166" class="small2">consume electricidad</text>
<text x="20" y="182" class="small2 mut">(La Muela: de noche,</text><text x="20" y="196" class="small2 mut">con energía de Cofrentes)</text>
</svg>` });

DIAGRAMS.push({ sec: "hid-mareas", h4: "Inconvenientes", cap: "Sistema de piscina única (esquema cualitativo inspirado en la diap. 40): el nivel del océano y el de la piscina oscilan desfasados; la planta produce dos «ráfagas» de potencia por período (al llenar y al vaciar) y está parada el resto del tiempo.", svg: `<svg class="dg" viewBox="0 0 520 220" role="img" aria-label="Niveles y potencia en una central mareomotriz de piscina única">
<line class="ax" x1="40" y1="180" x2="500" y2="180"/><line class="ax" x1="40" y1="20" x2="40" y2="180"/>
<path d="M40,130 C120,80 180,80 230,100 C290,130 330,180 390,180 C430,180 470,160 500,140" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M40,178 C100,175 150,160 230,104 C280,80 330,80 380,110 C420,140 460,170 500,178" fill="none" stroke="#0d9488" stroke-width="2" class="dash"/>
<path d="M52,180 L52,110 C60,60 90,40 110,45 C140,55 150,90 158,180 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<path d="M300,180 L300,110 C308,60 338,40 358,45 C388,55 398,90 406,180 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="105" y="36" text-anchor="middle" class="small2 tb">potencia (llenado)</text>
<text x="353" y="36" text-anchor="middle" class="small2 tb">potencia (vaciado)</text>
<text x="230" y="76" text-anchor="middle" class="small2" fill="#2563eb">nivel del océano</text>
<text x="450" y="130" text-anchor="middle" class="small2" fill="#0d9488">nivel de la piscina</text>
<text x="230" y="200" text-anchor="middle" class="small2 mut">tiempo → (período ≈ 12 h 25 min; cada ráfaga, 20-30 min)</text>
<text x="230" y="168" text-anchor="middle" class="small2 mut">sin producción</text>
</svg>` });

DIAGRAMS.push({ sec: "hid-otec", h4: "Principio", cap: "OTEC: el agua superficial tropical (27-32 ºC) evapora el fluido de trabajo, que mueve la turbina, y el agua fría profunda (5-8 ºC) lo condensa. El pequeño salto térmico limita el rendimiento de Carnot a menos del 9 % (real 1-2 %).", svg: `<svg class="dg" viewBox="0 0 520 240" role="img" aria-label="Esquema de una planta OTEC">
<defs><marker id="hidAr5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<rect x="0" y="120" width="520" height="120" fill="#e0f2fe"/>
<rect x="0" y="120" width="520" height="30" fill="#fde2e1" opacity="0.7"/>
<text x="10" y="140" class="small2 tb ko">superficie 27-32 ºC</text>
<text x="10" y="228" class="small2 tb" fill="#1e40af">fondo 5-8 ºC (más allá de ~30 m no llega la luz)</text>
<rect x="60" y="40" width="90" height="44" rx="6" fill="#fde2e1" stroke="#c2413b"/><text x="105" y="66" text-anchor="middle" class="small2 tb">Evaporador</text>
<rect x="370" y="40" width="90" height="44" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="415" y="66" text-anchor="middle" class="small2 tb">Condensador</text>
<polygon points="230,40 290,28 290,96 230,84" fill="#f1f5fd" stroke="#1e40af"/><text x="260" y="66" text-anchor="middle" class="small2 tb">Turbina</text>
<text x="260" y="20" text-anchor="middle" class="small2">→ generador</text>
<line x1="150" y1="55" x2="228" y2="55" stroke="#64748b" stroke-width="2" marker-end="url(#hidAr5)"/>
<line x1="292" y1="55" x2="368" y2="55" stroke="#64748b" stroke-width="2" marker-end="url(#hidAr5)"/>
<line x1="370" y1="78" x2="152" y2="78" stroke="#64748b" stroke-width="1.5" class="dash" marker-end="url(#hidAr5)"/>
<text x="260" y="112" text-anchor="middle" class="small2 mut">fluido de trabajo (bomba)</text>
<line x1="105" y1="135" x2="105" y2="88" stroke="#c2413b" stroke-width="3" marker-end="url(#hidAr5)"/>
<line x1="415" y1="210" x2="415" y2="88" stroke="#1e40af" stroke-width="3" marker-end="url(#hidAr5)"/>
<text x="260" y="180" text-anchor="middle" class="small2 tb">Carnot &lt; 9 % · real 1-2 %</text>
</svg>` });
