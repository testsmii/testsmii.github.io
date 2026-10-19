/* Tema SOL · Energía solar: recurso, térmica y fotovoltaica
   fuentes: Energia_Solar_1.pdf (SOL1), Energia_Solar_2.pdf (SOL2), Energia_Solar_3.pdf (SOL3) */

THEORY.SOL = {
  summary: [
    "La <b>constante solar</b> es la energía del Sol recibida por unidad de tiempo y de área sobre una superficie <b>perpendicular</b> a la radiación <b>extraterrestre</b>, a la distancia media Tierra-Sol: <b>G<sub>sc</sub> = 1353 W/m²</b>. Se corrige con el día del año: G<sub>on</sub> = G<sub>sc</sub>·(1 + 0,033·cos(360·n/365)).",
    "La <b>masa de aire</b> es el cociente <b>Y/X</b> entre el camino real de la luz en la atmósfera y el camino vertical: cuanto más largo, más absorción y dispersión. El azul se dispersa (longitud de onda parecida al tamaño de las partículas); el rojo apenas.",
    "Declinación: <b>+23,45º</b> en el solsticio de junio, <b>0º</b> en los equinoccios y <b>−23,45º</b> en el solsticio de diciembre (eje inclinado 23º 27' respecto a la eclíptica).",
    "Inclinación óptima del captador: <b>latitud</b> para todo el año, <b>latitud + 10º</b> para invierno y <b>latitud − 10º</b> para verano.",
    "En España la irradiación anual va de unos <b>1100 kWh/m²·año</b> en la cornisa cantábrica a <b>1940 kWh/m²·año</b> en Canarias; el número de horas de sol llega a ≈ <b>3000 h/año</b> en el sureste.",
    "Solar térmica: <b>baja</b> temperatura (35-90 ºC, paneles, ACS y calefacción), <b>media</b> (90-400 ºC, cilindro-parabólicos y Fresnel, uso industrial) y <b>alta</b> (&gt; 400 ºC, helióstatos y discos, centrales termoeléctricas).",
    "Colector plano: <b>Q<sub>u</sub> = A<sub>c</sub>·[S − U<sub>l</sub>·(T<sub>pm</sub> − T<sub>a</sub>)]</b> y <b>η = F<sub>R</sub>[G<sub>T</sub>(τα)<sub>av</sub> − U<sub>L</sub>(T<sub>i</sub> − T<sub>a</sub>)]/G<sub>T</sub></b>. El producto <b>(τα) = τα/[1 − (1 − α)ρ<sub>d</sub>]</b> reúne cubierta y placa y tiene dependencia espectral.",
    "Los <b>absorbentes selectivos</b> combinan alta absortancia solar (α ≈ 0,81-0,96) y baja emitancia (ε ≈ 0,06-0,17); los <b>tubos de vacío</b> reducen las pérdidas por convección y conducción.",
    "El <b>Código Técnico de la Edificación</b> obliga desde <b>2007</b> a que toda vivienda nueva tenga aporte renovable; lo más habitual es la solar térmica de apoyo a ACS.",
    "La concentración exige un <b>concentrador</b> que siga al Sol y un <b>receptor</b> bien enfocado. Límites: <b>termodinámico</b> (el Sol es un cuerpo negro a <b>5780 K</b>; c<sub>máx</sub> ≈ <b>46000</b>, en la práctica &lt; 5000) y <b>geométrico</b> (disco solar de <b>32'</b>).",
    "Razones de concentración (Solar II): CCP <b>30-90</b> (450 ºC, agua o aceite), Fresnel <b>20-50</b> (350 ºC), torre <b>200-1000</b> (565 ºC, sales), discos <b>&gt; 2000</b> (650-800 ºC, motor Stirling).",
    "Fotovoltaica 2024: <b>1852,36 GW</b> en el mundo y <b>36,24 GW</b> en España. Vida útil estimada <b>25 años</b>; se puede reciclar más del <b>95 %</b> (vidrio y aluminio).",
    "En c-Si casi el <b>20 %</b> de la energía solar no crea pares (fotones por debajo de la banda prohibida) y casi el <b>30 %</b> se pierde por exceso de energía: la eficiencia teórica máxima <b>no supera el 50 %</b>.",
    "La corriente es <b>proporcional a la irradiancia</b>; al subir la <b>temperatura</b> baja la tensión entre terminales y con ella el rendimiento. Una célula de AsGa con concentración da un <b>26 % a 1000 soles</b> (1000 soles = 1 MW/m²)."
  ],
  sections: [
    { id: "sol-recurso", title: "1. El recurso solar: constante solar, espectro y atmósfera", slides: ["SOL1", 1, 5], html: `
<p>Del Sol llega a la superficie terrestre una potencia equivalente a la producida por <b>~100 millones de centrales nucleares</b>. La cuestión es cómo aprovecharla (diap. 2).</p>
<h4>Constante solar</h4>
<p>Se define la <b>constante solar</b> como la energía procedente del Sol, recibida por unidad de tiempo sobre la unidad de área de una superficie <b>perpendicular</b> a la radiación <b>extraterrestre</b> (que no ha sufrido ninguna atenuación atmosférica), a la <b>distancia media anual</b> Tierra-Sol.</p>
<div class="formula">$$G_{sc}=1353\\ \\text{W/m}^2 \\qquad G_{on}=G_{sc}\\left(1+0{,}033\\cos\\frac{360\\,n}{365}\\right)$$</div>
<p>n es el día del año. La irradiancia extraterrestre oscila entre unos <b>1410 W/m²</b> en enero (Tierra más cerca del Sol) y unos <b>1320 W/m²</b> en julio. Datos de la figura: G<sub>sc</sub> = 1353 W/m² = 433 Btu/ft²·h = 4,87 MJ/m²·h; distancia Tierra-Sol 1,495·10<sup>11</sup> m (± 1,7 %); diámetro solar 1,39·10<sup>9</sup> m; diámetro terrestre 1,27·10<sup>7</sup> m; el Sol se ve con un ángulo de <b>32'</b>.</p>
<h4>Distribución espectral</h4>
<p>El espectro solar tiene su máximo hacia <b>0,5 µm</b> (unos 2 kW/m²·µm fuera de la atmósfera). Al nivel del suelo aparecen bandas de absorción del <b>O<sub>3</sub></b> (ultravioleta), del <b>H<sub>2</sub>O</b>, del <b>O<sub>2</sub></b> y del <b>CO<sub>2</sub></b> (infrarrojo).</p>
<p>Balance de la figura de la diap. 4 (entrada = 100 %): <b>absorbido 18 %</b> (ozono 2 %, capa de polvo alta 1 %, moléculas de aire 8 %, vapor de agua 6 %, polvo bajo 1 %), <b>dispersado al espacio 3 %</b>, <b>dispersado hacia la Tierra 7 %</b> y <b>directo a la Tierra 70 %</b>.</p>
<h4>Efecto de la atmósfera: masa de aire</h4>
<p>Cuanto mayor sea la distancia recorrida por la radiación en la atmósfera, mayor será la probabilidad de que se produzcan procesos de <b>absorción y dispersión</b>. La <b>masa de aire</b> representa la proporción de atmósfera que la luz debe atravesar respecto al camino vertical: <b>AM = Y/X</b> (con θ el ángulo cenital, geométricamente Y/X = 1/cos θ).</p>
<p>La luz <b>roja</b> tiene una longitud de onda mayor que la mayoría de las partículas y apenas se ve afectada; la luz <b>azul</b> tiene una longitud de onda similar al tamaño de las partículas y por eso <b>se dispersa</b>.</p>
` },
    { id: "sol-geometria", title: "2. Movimiento del Sol, captación y mapas de radiación", slides: ["SOL1", 6, 16], html: `
<h4>Movimiento del Sol y declinación</h4>
<p>El eje terrestre forma <b>23º 27'</b> con la perpendicular al plano de la eclíptica. Aunque es la Tierra la que gira alrededor del Sol, es más sencillo imaginar el Sol moviéndose alrededor de una Tierra fija (cambio de coordenadas). La <b>declinación</b> δ es el ángulo entre los rayos solares y el plano del ecuador:</p>
<table class="tbl"><thead><tr><th>Fecha</th><th>Evento (hemisferio norte)</th><th>Declinación</th></tr></thead><tbody>
<tr><td>21 de junio</td><td>Solsticio de verano</td><td>+23,45º (máxima)</td></tr>
<tr><td>22 de marzo / 23 de septiembre</td><td>Equinoccios</td><td>0º</td></tr>
<tr><td>22 de diciembre</td><td>Solsticio de invierno</td><td>−23,45º</td></tr>
</tbody></table>
<h4>Ángulos solares</h4>
<p><b>Ángulo cenital</b>: entre la vertical y la dirección del Sol. <b>Elevación o altitud</b>: entre el horizonte y el Sol (complementario del cenital); al amanecer y al atardecer vale <b>0º</b>. <b>Acimut</b>: medido sobre el horizonte desde el norte (N = 0º, E = 90º, S = 180º, O = 270º).</p>
<h4>Irradiación en día claro a 40º N</h4>
<table class="tbl"><thead><tr><th>Fecha</th><th>Salida</th><th>Puesta</th><th>Pico de radiación directa</th></tr></thead><tbody>
<tr><td>21 de marzo</td><td>6:01</td><td>17:58</td><td>≈ 0,9 kW/m²</td></tr>
<tr><td>21 de junio</td><td>4:34</td><td>19:25</td><td>≈ 1,05 kW/m²</td></tr>
<tr><td>21 de diciembre</td><td>7:25</td><td>16:34</td><td>≈ 0,8 kW/m²</td></tr>
</tbody></table>
<h4>Optimización de la captación</h4>
<p>Se comparan la radiación <b>incidente</b> (perpendicular al Sol), la que llega al plano <b>horizontal</b> y la que recibe el <b>módulo</b> inclinado un ángulo β. La potencia sobre una superficie es la incidente por cos θ (θ = ángulo entre el Sol y la normal a la superficie; con θ = 0, cos θ = 1).</p>
<table class="tbl cmp"><thead><tr><th>Objetivo</th><th>Inclinación del captador</th><th>Ejemplo a 40º N</th></tr></thead><tbody>
<tr><td>Todo el año</td><td>= latitud</td><td>40º</td></tr>
<tr><td>Invierno</td><td>= latitud + 10º</td><td>50º</td></tr>
<tr><td>Verano</td><td>= latitud − 10º</td><td>30º</td></tr>
</tbody></table>
<h4>Mapas de radiación y formas de aprovechamiento</h4>
<p>Mapa mundial de potencia promedio (Loster, 2006): de 0 a <b>350 W/m²</b>; los puntos negros indican la superficie que bastaría para producir <b>18 TWe</b>. Mapa de irradiación anual: zonas de <b>más de 2200 kWh/m²</b> en las zonas desérticas (suroeste de EE. UU. y México, Sáhara, Arabia, sur de África, Sudamérica andina y Australia), y valores de 400-1000 kWh/m² en latitudes altas.</p>
<p>En el mapa de España la cifra superior es la energía en <b>kWh/año que incide por m²</b> y la inferior el <b>número de horas de sol al año</b>: desde ≈ 1100 kWh/m² (cornisa cantábrica) hasta <b>1940 kWh/m²</b> en Canarias y ≈ 1800 en Murcia; las horas de sol llegan a 3052 h en Almería.</p>
<p>Formas de aprovechamiento (diap. 16): <b>heliotérmica</b> (aprovecha la radiación térmica para generar focos caloríficos), que se divide en <b>solar térmica</b> (uso directo del calor) y <b>solar termoeléctrica</b> (electricidad a partir del calor), y <b>fotovoltaica</b> (algunos fotones suficientemente energéticos crean pares electrón/hueco en un semiconductor y generan una corriente).</p>
` },
    { id: "sol-colector", title: "3. Solar térmica de baja temperatura: el colector plano", slides: ["SOL2", 2, 11], html: `
<h4>Aplicaciones térmicas solares</h4>
<table class="tbl cmp"><thead><tr><th>Nivel</th><th>Temperatura</th><th>Uso</th><th>Captadores</th></tr></thead><tbody>
<tr><td>Baja</td><td>35-90 ºC</td><td>Doméstico: ACS, calefacción, refrigeración</td><td>Paneles solares (sin concentración)</td></tr>
<tr><td>Media</td><td>90-400 ºC</td><td>Industrial; índice de concentración bajo-medio</td><td>Cilindro-parabólicos y Fresnel lineales</td></tr>
<tr><td>Alta</td><td>&gt; 400 ºC</td><td>Centrales termoeléctricas; alto índice de concentración</td><td>Helióstatos de alta concentración y discos parabólicos</td></tr>
</tbody></table>
<p>El panel <b>sin concentración</b>: aplicaciones de baja temperatura, aprovecha radiación <b>directa y difusa</b>, <b>no requiere seguimiento</b>, escaso mantenimiento y es más sencillo que las instalaciones de concentración. El <b>CTE</b> obliga <b>desde 2007</b> a que toda vivienda nueva tenga aporte de energías renovables, siendo lo más habitual la solar de apoyo a ACS.</p>
<h4>Componentes del colector de placa plana</h4>
<p>De arriba abajo: <b>cubierta transparente</b>, cámara de <b>aire</b>, placa <b>absorbente</b>, <b>tubos</b> para la circulación del fluido y <b>aislamiento</b>.</p>
<h4>Producto transmitancia-absortancia (τα)</h4>
<p>Recoge en un <b>factor unificado</b> los efectos de cubiertas y placa para evaluar la fuente de calor real que se transmite al fluido, a partir de datos de radiación solar terrestre. La radiación transmitida (τ) se absorbe en parte (α·τ); lo reflejado por la placa vuelve a la cubierta, que devuelve una fracción ρ<sub>d</sub>, y así sucesivamente:</p>
<div class="formula">$$(\\tau\\alpha)=\\tau\\alpha\\sum_{n=0}^{\\infty}\\left[(1-\\alpha)\\rho_d\\right]^n=\\frac{\\tau\\alpha}{1-(1-\\alpha)\\rho_d}$$</div>
<p>Tiene <b>dependencia espectral</b> y sirve para evaluar la porción de la radiación incidente que llega al panel absorbente. Como el denominador es menor que 1, (τα) es <b>algo mayor</b> que el simple producto τ·α.</p>
<h4>Balance y rendimiento del colector</h4>
<div class="formula">$$Q_u=A_c\\left[S-U_l\\,(T_{pm}-T_a)\\right]$$</div>
<p>A<sub>c</sub> = área del colector; S = potencia absorbida por unidad de área; el término U<sub>l</sub>(T<sub>pm</sub> − T<sub>a</sub>) es una ley de tipo Fourier que da la potencia perdida y depende del gradiente de temperatura (T<sub>pm</sub>: temperatura media de placa). La <b>eficiencia</b> es la relación entre la potencia útil y la potencia incidente:</p>
<div class="formula">$$\\eta_i=\\frac{Q_u}{A_c\\,G_T}=\\frac{F_R\\left[G_T(\\tau\\alpha)_{av}-U_L\\,(T_i-T_a)\\right]}{G_T}$$</div>
<p>Con T<sub>i</sub> = temperatura de entrada del fluido y F<sub>R</sub> = factor de evacuación de calor. El rendimiento <b>baja</b> cuando aumenta T<sub>i</sub> − T<sub>a</sub> o cuando disminuye G<sub>T</sub>.</p>
<h4>Materiales: absorbentes selectivos, tubos de vacío y fluido</h4>
<table class="tbl"><thead><tr><th>Superficie selectiva</th><th>α</th><th>ε</th></tr></thead><tbody>
<tr><td>Negro de Ni sobre Ni</td><td>0,93</td><td>0,06</td></tr>
<tr><td>Ni-Zn-S sobre Ni</td><td>0,96</td><td>0,07</td></tr>
<tr><td>Negro de Cr sobre Ni</td><td>0,92</td><td>0,10</td></tr>
<tr><td>Negro de Fe sobre acero</td><td>0,86</td><td>0,10</td></tr>
<tr><td>Negro de Cu sobre Cu</td><td>0,89</td><td>0,10</td></tr>
<tr><td>Óxido de Cu sobre Al</td><td>0,93</td><td>0,11</td></tr>
<tr><td>Óxido de Cu sobre Ni (electrodo de Cu y oxidación)</td><td>0,81</td><td>0,17</td></tr>
</tbody></table>
<p><b>Tubos de vacío</b>: se reducen las pérdidas por <b>convección y conducción</b> entre absorbedor y tubo exterior. Variantes: con <b>tubo de calor</b> (heat-pipe: el vapor caliente asciende, cede calor en la zona de transferencia y condensa) y con <b>tubo en U</b> o <b>tubos concéntricos</b> (el líquido circula por circulación forzada).</p>
<p><b>Fluido caloportador</b>: su elección depende de la función de transporte de calor entre captador y depósito y de la <b>corrosión</b> (oxidación de metales en contacto con oxígeno y corrosión galvánica). Se usan agua, mezclas agua-glicol, aceites minerales o parafinas y mezclas agua-glicerina.</p>
` },
    { id: "sol-acs", title: "4. Sistemas de ACS y calefacción solar", slides: ["SOL2", 12, 17], html: `
<h4>Almacenamiento en instalaciones pequeñas</h4>
<p>El almacenamiento es muy deseable en cualquier instalación. En plantas <b>termosolares pequeñas</b> es una <b>propiedad intrínseca</b> (al contrario que en las fotovoltaicas): en ACS la propia agua caliente actúa como almacén. Lo habitual son <b>depósitos de agua</b> con circulación natural o forzada; el coste de bombeo <b>no encarece significativamente</b>.</p>
<h4>Sistemas de agua caliente</h4>
<p><b>Convección (circulación) natural</b>: el agua calentada en el colector sube por termosifón al tanque, situado por encima; energía auxiliar en el propio tanque. <b>Convección forzada</b>: una <b>bomba</b> gobernada por un <b>control</b> (que compara temperaturas de colector y tanque) mueve el fluido; la energía auxiliar puede ir a la salida hacia la carga.</p>
<p><b>Sistemas directos</b>: el agua de consumo pasa por el colector. <b>Sistemas indirectos</b>: un circuito primario cede el calor al agua de consumo mediante un <b>intercambiador</b> (doble envolvente o serpentín). Las cuatro combinaciones (directo/indirecto × natural/forzada) aparecen en la diap. 14.</p>
<h4>Calefacción solar: sistemas de aire</h4>
<p>Almacenamiento en un <b>lecho de guijarros</b> con válvulas de 3 vías. Ventajas: se eliminan la <b>ebullición y la congelación</b> en los colectores y se reduce la <b>corrosión</b>. Inconvenientes: <b>altos costes de bombeo</b>, <b>grandes volúmenes</b> de almacenamiento, dificultades estructurales y <b>F<sub>R</sub> más bajo</b> que en colectores de líquido.</p>
<h4>Calefacción solar: sistemas de agua</h4>
<p>Depósito de agua caliente, bomba, válvulas de 3 vías y by-pass. Ventajas: <b>mayor F<sub>R</sub></b>, <b>menor volumen</b> de almacenamiento y fácil adaptación a acondicionadores que funcionan con aire. Inconvenientes: <b>corrosión y congelación</b>; en verano hay que evitar exceso de presión y ebullición, y en invierno, la congelación.</p>
<table class="tbl cmp"><thead><tr><th>Aspecto</th><th>Aire</th><th>Agua</th></tr></thead><tbody>
<tr><td>Ebullición / congelación</td><td>Se eliminan</td><td>Problemas (verano / invierno)</td></tr>
<tr><td>Corrosión</td><td>Se reduce</td><td>Problema</td></tr>
<tr><td>F<sub>R</sub></td><td>Más bajo</td><td>Mayor</td></tr>
<tr><td>Almacenamiento</td><td>Grandes volúmenes (lecho de guijarros)</td><td>Volumen menor (depósito)</td></tr>
<tr><td>Bombeo</td><td>Costes altos</td><td>—</td></tr>
</tbody></table>
` },
    { id: "sol-concentracion", title: "5. Concentración de la radiación solar", slides: ["SOL2", 18, 21], html: `
<h4>Concentrador y receptor</h4>
<p>Ejemplos históricos: los espejos de Arquímedes y la lupa. La concentración implica dos elementos: un <b>concentrador</b> que debe <b>seguir la trayectoria del Sol</b> y un <b>receptor</b> sobre el que debe estar bien enfocada la radiación. Se usan <b>medios de reflexión</b> (espejos) móviles: espejos cuasi-planos o <b>helióstatos</b>, espejos <b>cilindro-parabólicos</b> y <b>discos parabólicos</b>.</p>
<h4>Límites del factor de concentración</h4>
<ul><li><b>Termodinámicos</b>: el Sol es un cuerpo negro a <b>5780 K</b> y no se puede superar esa temperatura (<b>c = 46000</b>; en la práctica <b>&lt; 5000</b>).</li>
<li><b>Geométricos</b>: el Sol es un disco de ángulo de <b>32'</b>, lo que condiciona el punto focal.</li></ul>
<h4>Razón de concentración y temperatura máxima</h4>
<p>Razón de concentración superficial: área de apertura del concentrador entre área del receptor. El balance de un colector de concentración en equilibrio (sin extracción de calor) iguala la emisión del receptor con lo absorbido:</p>
<div class="formula">$$C=\\frac{A_a}{A_r}\\qquad \\varepsilon_{ef}\\,\\sigma\\,T_{máx}^4=\\alpha_{ef}\\,c\\,G\\;\\Rightarrow\\;T_{máx}=\\left(\\frac{\\alpha_{ef}\\,c\\,G}{\\varepsilon_{ef}\\,\\sigma}\\right)^{0{,}25}$$</div>
<p>La curva T<sub>máx</sub>(c) crece muy deprisa al principio y luego lentamente (raíz cuarta) hasta <b>5780 K</b> para c ≈ 4,6·10<sup>4</sup>. Con c = 1 es la <b>temperatura de equilibrio</b> de una placa sin concentración: depende del cociente α/ε, por eso las superficies selectivas alcanzan temperaturas mayores.</p>
<h4>Foco lineal y foco puntual</h4>
<p>Clasificación IEA (2014): <b>foco lineal</b> (Fresnel lineal con receptor fijo, cilindro-parabólico con receptor móvil) y <b>foco puntual</b> (torre central con receptor fijo, disco parabólico con receptor móvil). La eficiencia óptica aumenta hacia el foco puntual y el receptor móvil. Razón de concentración frente a temperatura: CCP ≈ 30 a ~400 ºC, receptor central ≈ 600 a ~800 ºC, disco ≈ 3000-4000 a ~1600 ºC y horno solar ≈ 10000 a ~2300 ºC.</p>
` },
    { id: "sol-termoelectrica", title: "6. Tecnologías termosolares y almacenamiento", slides: ["SOL2", 22, 33], html: `
<h4>Cilindro-parabólico y Fresnel</h4>
<table class="tbl cmp"><thead><tr><th>Dato</th><th>Cilindro-parabólico (CCP)</th><th>Fresnel lineal</th></tr></thead><tbody>
<tr><td>Concentrador</td><td>Espejo cilíndrico de sección parabólica; un eje de rotación</td><td>Espejos planos o con pequeña curvatura; un eje de seguimiento</td></tr>
<tr><td>Receptor</td><td>Lineal, a lo largo del eje del cilindro</td><td>Lineal, paralelo a los espejos</td></tr>
<tr><td>Razón de concentración</td><td>30-90</td><td>20-50</td></tr>
<tr><td>Flujo sobre el absorbente</td><td>40-60 kW/m²</td><td>15-40 kW/m²</td></tr>
<tr><td>Temperatura</td><td>450 ºC</td><td>350 ºC</td></tr>
<tr><td>Fluido caloportador</td><td>Agua o aceite</td><td>Agua o aceite</td></tr>
</tbody></table>
<p>El CCP gira alrededor de su eje de seguimiento (mañana → tarde); módulos de ≈ <b>100 m</b> de largo y <b>5,7 m</b> de apertura. Puede orientarse <b>Este-Oeste</b> o <b>Norte-Sur</b> (diap. 23).</p>
<h4>Discos parabólicos y torre central</h4>
<table class="tbl cmp"><thead><tr><th>Dato</th><th>Discos parabólicos</th><th>Torre central</th></tr></thead><tbody>
<tr><td>Concentrador</td><td>Paraboloide de revolución</td><td>Campo de helióstatos robotizados con dos ejes</td></tr>
<tr><td>Receptor</td><td>De cavidad</td><td>De cavidad, de lecho fluido, volumétrico o exterior</td></tr>
<tr><td>Razón de concentración</td><td>&gt; 2000</td><td>200-1000</td></tr>
<tr><td>Flujo de radiación</td><td>300-1000 kW/m²</td><td>300-1000 kW/m²</td></tr>
<tr><td>Temperatura</td><td>650-800 ºC</td><td>565 ºC</td></tr>
<tr><td>Fluido caloportador</td><td>Gas o líquido del motor Stirling</td><td>Sales</td></tr>
</tbody></table>
<p><b>Central de torre con sales</b> (diap. 28): (1) tanque de sales frías → (2) se bombean a lo alto de la torre → (3) en el receptor se calientan y bajan al tanque de sales calientes, donde se almacenan a <b>más de 500 º</b> → (4-5) pasan a los cambiadores de calor → (6) generan vapor → (7) turbina y generador → (8) transformador y red.</p>
<h4>Proyectos en España y estado de las tecnologías</h4>
<p>España 2007-2013: <b>45 proyectos CCP</b> de 50 MWe, <b>1 Fresnel</b> de 30 MWe y <b>3 torres</b> de 11-20 MWe; <b>49 proyectos y 2300 MWe</b> en total (p. ej. Termosol II, Badajoz).</p>
<table class="tbl cmp"><thead><tr><th>Dato</th><th>Fresnel</th><th>CCP</th><th>Receptor central</th><th>Discos</th></tr></thead><tbody>
<tr><td>Potencia (MW)</td><td>10-150</td><td>30-150</td><td>10-200</td><td>5-25</td></tr>
<tr><td>T operación (ºC)</td><td>350</td><td>390</td><td>565</td><td>750</td></tr>
<tr><td>Factor de capacidad anual</td><td>16 %</td><td>23-50 %</td><td>20-77 %</td><td>25 %</td></tr>
<tr><td>Eficiencia pico</td><td>18 %</td><td>20 %</td><td>23 %</td><td>29,4 %</td></tr>
<tr><td>Eficiencia neta anual</td><td>10-15 %</td><td>11-16 %</td><td>7-20 %</td><td>12-25 %</td></tr>
<tr><td>Estado comercial</td><td>Disponible</td><td>Disponible</td><td>Disponible</td><td>Proto-Demo</td></tr>
<tr><td>Riesgo tecnológico</td><td>Medio</td><td>Bajo</td><td>Medio</td><td>Alto</td></tr>
<tr><td>Almacenamiento</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Baterías</td></tr>
<tr><td>LEC (c€/W)</td><td>9-20</td><td>11-20</td><td>15-30</td><td>9-30</td></tr>
</tbody></table>
<p>Todas admiten diseños híbridos.</p>
<h4>Parabólico compuesto (CPC) y clasificación general</h4>
<p>El <b>CPC</b> es de <b>concentración baja sin seguimiento</b>, basado en <b>óptica sin imágenes</b>; puede incorporar seguimiento a un eje, se combina con otros sistemas de concentración y hay proyectos en Latinoamérica. Admite absorbedor plano, en aleta, en «vee invertida» o tubular.</p>
<table class="tbl"><thead><tr><th>Tipo (diap. 32)</th><th>Seguimiento</th><th>C</th><th>T (ºC)</th></tr></thead><tbody>
<tr><td>Placa plana</td><td>Estacionario</td><td>≤ 1</td><td>30-250</td></tr>
<tr><td>Tubos de vacío</td><td>Estacionario</td><td>≤ 1</td><td>50-200</td></tr>
<tr><td>Parabólico compuesto</td><td>Estacionario (absorbedor tubular)</td><td>1-15</td><td>70-300</td></tr>
<tr><td>Cilindro-parabólico</td><td>Un eje (concentrador continuo)</td><td>15-40</td><td>70-350</td></tr>
<tr><td>Fresnel</td><td>Un eje (concentrador discreto)</td><td>1-15</td><td>100-250</td></tr>
<tr><td>Disco parabólico</td><td>Dos ejes (continuo, absorbedor puntual)</td><td>100-1000</td><td>70-1500</td></tr>
<tr><td>Torre central</td><td>Dos ejes (discreto, absorbedor puntual)</td><td>100-1500</td><td>150-900</td></tr>
</tbody></table>
<p>Ojo: esta tabla de clasificación da intervalos distintos de los de las diap. 22-27 (p. ej. CCP 15-40 frente a 30-90). Cita siempre la diapositiva.</p>
<h4>Modos de almacenamiento</h4>
<ul><li><b>Térmico</b>: calor sensible, cambio de fase y reacciones químicas reversibles.</li>
<li><b>Electroquímico</b> en baterías. <b>Químico</b> en hidrógeno.</li>
<li><b>Mecánico</b>: volantes de inercia, aire comprimido o bombeo de agua a embalses.</li>
<li><b>Magnético</b> en superconductores.</li></ul>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> el <b>múltiplo solar</b> es el cociente entre la potencia térmica que da el campo solar en el punto de diseño y la que necesita el bloque de potencia. En centrales con almacenamiento se hace mayor que 1 para poder cargar los tanques mientras se alimenta la turbina.</div>
` },
    { id: "sol-fvmercado", title: "7. Fotovoltaica: mercado, ventajas y tipos de instalación", slides: ["SOL3", 2, 9], html: `
<h4>Tecnología dominante</h4>
<p>Capacidad instalada en <b>2024</b>: <b>1852,36 GW</b> en el mundo y <b>36,24 GW</b> en España. En España la capacidad se estancó en ≈ 4-5 GW entre 2008 y 2018 y se disparó desde 2019. El precio de las células de silicio cayó de <b>76 $/W (1977)</b> a <b>0,30 $/W (2015)</b>. En capacidad acumulada (2021) lidera China (&gt; 300 GW), seguida de Europa, EE. UU., Alemania, India, Italia y España.</p>
<h4>Ventajas y desventajas</h4>
<table class="tbl cmp"><thead><tr><th>Ventajas</th><th>Desventajas</th></tr></thead><tbody>
<tr><td>Limpia (al menos en operación)</td><td>Baja densidad de potencia (aunque es la mayor entre las renovables)</td></tr>
<tr><td>Versátil: potencia modulable y no localizada</td><td>Mala integración con las redes eléctricas</td></tr>
<tr><td>Robusta en operación, sin piezas móviles</td><td>Hace muy deseables los acumuladores, indispensables en autoconsumo aislado</td></tr>
<tr><td>Largo tiempo de vida, estimado en 25 años</td><td>Los acumuladores encarecen las instalaciones</td></tr>
<tr><td>Importante descenso de costes</td><td>Residuos contaminantes al final de la vida útil</td></tr>
</tbody></table>
<h4>Instalación aislada</h4>
<p>Módulos fotovoltaicos → <b>regulador</b> (al que se conectan los <b>acumuladores</b> y los consumos en corriente continua) → <b>inversor</b> → consumos en corriente alterna.</p>
<h4>Conectada a red y autoconsumo</h4>
<p><b>Conectada a red</b>: módulos → inversor → contador → red; huertos solares de <b>más de 10 MWp</b>. <b>Autoconsumo</b> con o sin excedente: inversor (CC → CA) y <b>contador bidireccional</b>; con excedente (vertido a red) se necesita gestionar un punto de suministro con la compañía distribuidora.</p>
` },
    { id: "sol-celula", title: "8. Semiconductores y efecto fotovoltaico", slides: ["SOL3", 10, 17], html: `
<h4>Semiconductores</h4>
<p>Son materiales del <b>grupo IV</b> o combinaciones <b>III-V</b> o <b>II-VI</b>. El <b>silicio</b> es el más usado (base de los circuitos integrados y de la mayoría de las células); otros comunes son el <b>germanio</b> (Ge), el <b>arseniuro de galio</b> (GaAs) y el <b>teluro de cadmio</b> (CdTe).</p>
<p>Los electrones ocupan la <b>banda de valencia</b>; separada por la <b>banda prohibida</b> está la <b>banda de conducción</b>. Un fotón con E<sub>ph</sub> = hf ≥ E<sub>G</sub> crea un par electrón-hueco; si E<sub>ph</sub> = E<sub>G</sub> se absorbe eficientemente sin desperdiciar calor.</p>
<h4>Espectro solar y eficiencia máxima del c-Si</h4>
<p>A nivel del mar: ≈ <b>2 % ultravioleta</b> (λ ≤ 0,38 µm), <b>47 % visible</b> (0,38-0,78 µm) y <b>51 % infrarrojo</b> (0,78-2,5 µm). Densidad de potencia máxima ≈ <b>1,3 W/m²·nm</b> (1300 W/m²·µm) hacia <b>0,5 µm</b>. El flujo de fotones es la densidad de potencia dividida por la energía del fotón: ≈ 2,0·10<sup>21</sup> fotones/m²·s con la densidad máxima.</p>
<p>Banda prohibida del silicio: <b>1100 nm ≈ 1,1 eV</b>. Casi el <b>20 %</b> de la energía solar no puede generar pares (fotones con menos energía que la banda prohibida) y casi el <b>30 %</b> se pierde por el exceso de energía de fotones de λ mucho menor que 1,11 µm. Por eso la eficiencia teórica máxima del <b>c-Si no puede superar el 50 %</b>.</p>
<h4>Dopado</h4>
<table class="tbl cmp"><thead><tr><th>Tipo</th><th>Dopante</th><th>Portadores mayoritarios</th><th>Iones fijos</th></tr></thead><tbody>
<tr><td>n</td><td>Átomo del grupo V (electrón extra)</td><td>Electrones (Negativos)</td><td>Donadores ionizados (+)</td></tr>
<tr><td>p</td><td>Átomo del grupo III (falta un electrón: hueco)</td><td>Huecos (Positivos)</td><td>Aceptores ionizados (−)</td></tr>
</tbody></table>
<h4>Unión p-n y efecto fotovoltaico</h4>
<p>Al unir los materiales p y n, los portadores difunden y se forma una <b>zona de deplexión</b> con un <b>campo eléctrico</b> (que apunta de n a p). En equilibrio, sin tensión aplicada, no hay corriente: la <b>difusión</b> de electrones y huecos se compensa con su <b>deriva</b> por el campo. La unión puede polarizarse en directa o en inversa.</p>
<p>Con luz, los pares creados cerca de la unión son separados por el campo: con los terminales abiertos aparece la tensión de circuito abierto <b>V<sub>oc</sub></b> y en cortocircuito circula la corriente <b>I<sub>sc</sub></b>.</p>
` },
    { id: "sol-curvaiv", title: "9. Curva I-V, máxima potencia y rendimiento", slides: ["SOL3", 18, 20], html: `
<h4>Curva I-V y punto de máxima potencia</h4>
<p>La curva I-V de un módulo arranca en I<sub>sc</sub> (V = 0), se mantiene casi plana y cae bruscamente hasta V<sub>oc</sub> (I = 0). La curva P-V (P = V·I) tiene un máximo, el <b>punto de máxima potencia</b>. En el módulo de la diap. 18, a 1000 W/m²: I<sub>sc</sub> ≈ 16 A, V<sub>oc</sub> ≈ 47 V y P<sub>máx</sub> ≈ 600 W hacia 40 V.</p>
<p>El <b>factor de forma</b> (FF) y el rendimiento (PCE) aparecen en la curva de la célula de perovskita (diap. 24): P<sub>in</sub> = 96,4 mW/cm², J<sub>sc</sub> = 20,0 mA/cm², V<sub>oc</sub> = 993 mV, FF = 0,73 y PCE = 15,0 %, que cumplen:</p>
<div class="formula">$$\\eta=\\frac{P_{máx}}{P_{in}}=\\frac{FF\\cdot J_{sc}\\cdot V_{oc}}{P_{in}}=\\frac{0{,}73\\cdot 20{,}0\\cdot 0{,}993}{96{,}4}\\approx 15\\ \\%$$</div>
<h4>Influencia de la irradiancia</h4>
<p>En general la <b>corriente de iluminación es proporcional</b> al nivel de iluminación (≈ 16 A a 1000 W/m², ≈ 12,8 A a 800 W/m², ≈ 3,2 A a 200 W/m²), mientras que V<sub>oc</sub> apenas baja (≈ 47 → 44 V). La potencia máxima pasa de ≈ 600 W (1000 W/m²) a ≈ 115 W (200 W/m²). El rendimiento <b>disminuye a partir de cierto nivel de irradiación</b>.</p>
<h4>Influencia de la temperatura</h4>
<p>El rendimiento <b>se reduce con la temperatura</b> por la <b>disminución del potencial entre terminales</b>: V<sub>oc</sub> pasa de ≈ 48 V a 10 ºC a ≈ 41 V a 70 ºC, mientras que la corriente de cortocircuito apenas cambia (aumenta ligeramente).</p>
<h4>Récords de eficiencia (NREL)</h4>
<p>Gráfico de mejores eficiencias de células de investigación: las <b>multiunión</b> con concentración alcanzan el <b>47,1 %</b> (NREL, 6 uniones, 143 soles); el silicio cristalino ronda el 26-27 %; las capas finas (CIGS, CdTe) ≈ 22-23 %; las emergentes (perovskita, orgánicas, puntos cuánticos) crecen deprisa. Aparece destacado un récord del <b>IES-UPM</b> (1026 soles).</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> el factor de forma se define como FF = P<sub>máx</sub>/(V<sub>oc</sub>·I<sub>sc</sub>); mide lo «cuadrada» que es la curva I-V. Un seguidor del punto de máxima potencia (MPPT) en el inversor ajusta la tensión de trabajo para operar siempre en ese punto.</div>
` },
    { id: "sol-tecnologias", title: "10. Tecnologías de células, concentración FV y situación en España", slides: ["SOL3", 21, 32], html: `
<h4>Generaciones de células</h4>
<table class="tbl cmp"><thead><tr><th>Generación</th><th>Tecnología</th><th>Eficiencia de módulo</th></tr></thead><tbody>
<tr><td>1ª</td><td>Silicio cristalino (mono y multi): tecnología básica limitada por las características del material</td><td>13 % → 20 %</td></tr>
<tr><td>2ª</td><td>Lámina delgada (a-Si, CdTe, CIGS): varias energías de absorción; materiales flexibles aptos para integración en edificios</td><td>9 % → 15 %</td></tr>
<tr><td>3ª</td><td>Células Dye y orgánicas: nichos de mercado, desarrollo menos maduro</td><td>4 % → 10+ %</td></tr>
</tbody></table>
<h4>Silicio cristalino, amorfo y perovskitas</h4>
<p>Célula de c-Si: superficie texturizada con capa antirreflectante (AR), contacto frontal, <b>emisor de Si tipo n</b> fino, <b>base de Si tipo p</b> gruesa y contacto trasero. Puede ser monocristalina o policristalina.</p>
<p><b>Silicio amorfo</b>: capas finas (&lt; 1 µm) que no absorben suficiente luz; para aumentar la absorción se texturiza el <b>TCO</b> (óxido conductor transparente) y se añade un espejo reflectante. Hay módulos flexibles sobre polímero o láminas metálicas.</p>
<p>Las <b>perovskitas</b> evolucionaron de la célula sensibilizada por colorante (Dye). Capas: vidrio, FTO, TiO<sub>2</sub>/CH<sub>3</sub>NH<sub>3</sub>PbI<sub>3</sub>, HTM y Au.</p>
<h4>Tipos de células y multiuniones</h4>
<p><b>Silicio cristalino</b> (200-500 µm): coeficiente de absorción reducido; mono o policristalino. <b>Lámina delgada</b>: silicio amorfo, arseniuro de galio, teluro de cadmio y diseleniuro de cobre e indio (≈ <b>1 µm</b>), y silicio cristalino de lámina delgada (10-50 µm).</p>
<p><b>Multiuniones (tándem)</b>: se apilan materiales con distinta banda prohibida, cada uno con su corte de respuesta espectral: InGaP ≈ 650 nm, GaAs ≈ 870 nm, Si ≈ 1100 nm y GaSb ≈ 1770 nm.</p>
<h4>Fotovoltaica con concentración y madurez tecnológica</h4>
<p>Dos tipologías: <b>sin concentración</b> y <b>con concentración</b>. En la célula con concentración se ahorra área de célula y se sustituye por dispositivos ópticos (lentes o espejos): <b>1000 soles = 1 MW/m²</b>; una célula de <b>AsGa</b> logra el <b>26 % a 1000 soles</b> (con disipador; módulos de ≈ 10 cm de paso y 3 cm de espesor).</p>
<p>Potencial disruptivo frente a madurez (Arthur D. Little): el <b>c-Si</b> es maduro y de bajo potencial disruptivo; CdTe y CIGS, maduros; <b>perovskita</b>, puntos cuánticos y CPV, los más potencialmente disruptivos; el grafeno, embrionario; la OPV, en investigación y con poco potencial disruptivo.</p>
<h4>Térmica frente a fotovoltaica, España 2023 y fin de vida</h4>
<table class="tbl cmp"><thead><tr><th>Térmica (termosolar)</th><th>Fotovoltaica</th></tr></thead><tbody>
<tr><td>Almacenamiento térmico</td><td>Precio bajo</td></tr>
<tr><td>Alto rendimiento</td><td>Operación y mantenimiento</td></tr>
<tr><td>Fácil integración a la red eléctrica</td><td>Generación de energía distribuida</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>RAIPEE, nov. 2023 (subgrupo b.1.1)</th><th>nº</th><th>MW</th><th>ha</th></tr></thead><tbody>
<tr><td>≤ 50 MW</td><td>63.147</td><td>19.588</td><td>39.176</td></tr>
<tr><td>&gt; 50 MW</td><td>19</td><td>4.061</td><td>8.122</td></tr>
<tr><td>Total categoría b.1.1</td><td>63.166</td><td>23.649</td><td>47.298</td></tr>
<tr><td>b.1.1 (&gt; 200 m²)</td><td>45.921</td><td>23.553</td><td>47.106</td></tr>
</tbody></table>
<p>El subgrupo b.1.1 son instalaciones que únicamente usan la radiación solar como energía primaria mediante tecnología fotovoltaica (RD 413/2014). Ocupan ≈ <b>2 ha por MW</b>.</p>
<p><b>Fin de vida</b>: ¿desmantelamiento a los 25 años?, ¿qué hacer con los materiales contaminantes (Cd)?, ¿reciclaje?, ¿quién asume los gastos? Se puede reciclar <b>más de un 95 %</b> (vidrio y aluminio); una <b>normativa europea de 2012</b> hace obligatorio el reciclaje y la <b>primera planta</b> de reciclaje de paneles de España se inauguró en <b>2024</b>.</p>
` }
  ],
  confusions: [
    ["<b>Constante solar</b> (1353 W/m²) vs <b>irradiancia en superficie</b> (≈ 1 kW/m²)", "La constante solar es <b>extraterrestre</b>, sobre superficie perpendicular y a la distancia media; varía ± 3,3 % con el día del año (G<sub>on</sub>). En el suelo, tras la atmósfera, los picos de día claro a 40º N son ≈ 0,8-1,05 kW/m²."],
    ["<b>Ángulo cenital</b> vs <b>elevación</b> vs <b>acimut</b>", "Cenital: desde la vertical. Elevación: desde el horizonte (suman 90º; al orto y al ocaso la elevación es 0º). Acimut: en el plano horizontal desde el norte (S = 180º)."],
    ["<b>Latitud + 10º</b> vs <b>latitud − 10º</b>", "En invierno el Sol va bajo, así que el captador se <b>levanta más</b> (latitud + 10º); en verano va alto y se inclina menos (latitud − 10º). Para todo el año, inclinación = latitud."],
    ["<b>Absortancia α</b> vs <b>emitancia ε</b>", "α: fracción de la radiación solar (onda corta) que absorbe la placa; conviene alta. ε: capacidad de emitir en el infrarrojo térmico; conviene baja. Un absorbente selectivo tiene α alto y ε bajo (negro de Ni: 0,93 / 0,06)."],
    ["<b>(τα)</b> vs <b>τ·α</b>", "(τα) = τα/[1 − (1 − α)ρ<sub>d</sub>] incluye las reflexiones múltiples entre placa y cubierta, así que es algo <b>mayor</b> que el producto simple τ·α."],
    ["<b>Sistema de aire</b> vs <b>sistema de agua</b> en calefacción", "Aire: sin ebullición ni congelación y menos corrosión, pero bombeo caro, grandes volúmenes (lecho de guijarros) y F<sub>R</sub> más bajo. Agua: mayor F<sub>R</sub> y menor volumen, pero corrosión, congelación y sobrepresión."],
    ["<b>Cilindro-parabólico</b> vs <b>Fresnel</b>", "Ambos son de foco lineal y un eje. CCP: espejo parabólico continuo, C = 30-90, 40-60 kW/m², 450 ºC. Fresnel: espejos planos discretos, receptor fijo, C = 20-50, 15-40 kW/m², 350 ºC (diap. 22 y 24)."],
    ["<b>Torre central</b> vs <b>disco parabólico</b>", "Ambos de foco puntual y dos ejes. Torre: helióstatos, C = 200-1000, 565 ºC, sales, comercial. Disco: paraboloide, C &gt; 2000, 650-800 ºC, motor Stirling, prototipo-demostración y riesgo alto."],
    ["<b>Límite termodinámico</b> vs <b>límite geométrico</b> de la concentración", "Termodinámico: no se puede superar la temperatura del Sol (5780 K → c ≈ 46000). Geométrico: el disco solar se ve con 32', lo que limita la imagen en el punto focal."],
    ["<b>Efecto de la irradiancia</b> vs <b>efecto de la temperatura</b> en la curva I-V", "La irradiancia cambia sobre todo la <b>corriente</b> (proporcional); la temperatura cambia sobre todo la <b>tensión</b> (V<sub>oc</sub> baja al calentarse la célula) y con ella el rendimiento."]
  ]
};

/* ---------- Preguntas · 1. Recurso solar ---------- */
L("SOL", "sol-recurso", "Constante solar", 2, "Según los apuntes, la constante solar es la energía procedente del Sol, recibida por unidad de tiempo y de área…",
  ["sobre una superficie perpendicular a la radiación extraterrestre, sin atenuación atmosférica, a la distancia media anual Tierra-Sol",
   "sobre una superficie horizontal situada en el límite superior de la atmósfera, a la distancia media anual Tierra-Sol",
   "sobre una superficie perpendicular a la radiación, a nivel del mar, con cielo despejado y masa de aire igual a la unidad",
   "sobre una superficie perpendicular a la radiación extraterrestre, sin atenuación atmosférica, en el perihelio de la órbita terrestre"],
  0, "La definición exige superficie perpendicular, radiación extraterrestre (sin atenuación) y distancia media anual. En el perihelio la irradiancia es mayor (≈ 1410 W/m² en enero), por eso se corrige con G<sub>on</sub>; a nivel del mar ya hay atenuación atmosférica.", "Apuntes SOL1, diap. 3");
L("SOL", "sol-recurso", "Constante solar", 1, "¿Qué valor de la constante solar G<sub>sc</sub> se usa en los apuntes?",
  ["1353 W/m²", "1367 W/m²", "1410 W/m²", "1000 W/m²"],
  0, "Los apuntes toman G<sub>sc</sub> = 1353 W/m² (= 4,87 MJ/m²·h). 1410 W/m² es aproximadamente el máximo de G<sub>on</sub> en enero, y 1000 W/m² es un valor típico de irradiancia en superficie.", "Apuntes SOL1, diap. 3");
L("SOL", "sol-recurso", "Corrección por la distancia Tierra-Sol", 3, "Con la expresión de los apuntes G<sub>on</sub> = G<sub>sc</sub>·(1 + 0,033·cos(360·n/365)), ¿qué irradiancia extraterrestre corresponde al 1 de enero (n = 1)?",
  ["≈ 1398 W/m²", "≈ 1353 W/m²", "≈ 1308 W/m²", "≈ 1375 W/m²"],
  0, "cos(360·1/365) ≈ 1, así que G<sub>on</sub> ≈ 1353·1,033 ≈ 1398 W/m². El valor 1308 W/m² corresponde a principios de julio (coseno ≈ −1) y 1353 W/m² a los días en que el coseno se anula (≈ abril y octubre).", "Apuntes SOL1, diap. 3");
L("SOL", "sol-recurso", "Balance de la atmósfera", 2, "En el balance de la radiación solar a su paso por la atmósfera (diap. 4), con una entrada del 100 %, ¿qué fracción llega a la Tierra como radiación directa?",
  ["70 %", "77 %", "82 %", "88 %"],
  0, "La figura da: absorbido 18 %, dispersado al espacio 3 %, dispersado hacia la Tierra 7 % y directo a la Tierra 70 %. El 77 % sumaría directa y dispersada hacia la Tierra; el 82 % sería 100 − 18.", "Apuntes SOL1, diap. 4");
L("SOL", "sol-recurso", "Espectro solar", 2, "Según la figura del espectro solar (diap. 4), ¿qué especies producen bandas de absorción en el espectro que llega a la superficie? (varias respuestas)",
  ["Ozono (O<sub>3</sub>)", "Vapor de agua (H<sub>2</sub>O)", "Dióxido de carbono (CO<sub>2</sub>)", "Nitrógeno molecular (N<sub>2</sub>)"],
  [0, 1, 2], "La figura marca absorciones de O<sub>3</sub> en el ultravioleta y de H<sub>2</sub>O, O<sub>2</sub> y CO<sub>2</sub> en el visible-infrarrojo. El N<sub>2</sub> no aparece como absorbente. En el balance, el ozono absorbe el 2 % y el vapor de agua el 6 %.", "Apuntes SOL1, diap. 4");
L("SOL", "sol-recurso", "Masa de aire", 3, "La masa de aire es, según la diap. 5, el cociente Y/X entre el camino de la luz en la atmósfera y el camino vertical. Si el Sol está a 60º del cénit (θ = 60º), la masa de aire vale aproximadamente…",
  ["2,0", "0,5", "1,15", "1,73"],
  0, "Por la geometría de la figura, Y = X/cos θ, así que AM = 1/cos 60º = 2. El 0,5 es cos 60º; el 1,15 sería 1/cos 30º (elevación confundida con ángulo cenital) y el 1,73 es tan 60º.", "Apuntes SOL1, diap. 5");
L("SOL", "sol-recurso", "Dispersión", 2, "Según los apuntes, la luz azul se ve más afectada por la atmósfera que la roja porque…",
  ["su longitud de onda es similar al tamaño de las partículas de la atmósfera y por eso se dispersa",
   "su longitud de onda es mayor que el tamaño de la mayoría de las partículas y por eso se absorbe",
   "es absorbida preferentemente por la capa de ozono situada entre 20 y 40 km",
   "es absorbida preferentemente por el vapor de agua de los 3 km inferiores"],
  0, "La diap. 5: la luz roja tiene una longitud de onda mayor que la mayoría de las partículas y no se ve afectada; la azul tiene una longitud de onda similar al tamaño de las partículas y se dispersa. El ozono absorbe en el ultravioleta, y el vapor de agua sobre todo en el infrarrojo.", "Apuntes SOL1, diap. 5");

/* ---------- Preguntas · 2. Geometría y captación ---------- */
L("SOL", "sol-geometria", "Declinación", 2, "¿Cuál de las siguientes afirmaciones sobre la declinación solar es correcta?",
  ["Es máxima (+23,45º) en el solsticio de junio y nula en los equinoccios de marzo y septiembre",
   "Es máxima (+23,45º) en el equinoccio de marzo y nula en los solsticios de junio y diciembre",
   "Es el ángulo entre el eje terrestre y el plano de la eclíptica, y vale siempre 23º 27'",
   "Es máxima (+66,5º) en el solsticio de junio y nula en los equinoccios de marzo y septiembre"],
  0, "Declinación: +23,45º el 21 de junio, 0º en los equinoccios y −23,45º el 22 de diciembre. Los 23º 27' son la inclinación fija del eje, no la declinación, que varía a lo largo del año. 66,5º es la latitud del círculo polar.", "Apuntes SOL1, diap. 6-7");
L("SOL", "sol-geometria", "Ángulos solares", 2, "Al amanecer y al atardecer, ¿cuánto valen los ángulos solares definidos en los apuntes?",
  ["Elevación 0º y ángulo cenital 90º", "Elevación 90º y ángulo cenital 0º", "Acimut 0º y elevación 90º", "Acimut 180º y ángulo cenital 0º"],
  0, "La diap. 8 indica que al amanecer y al atardecer la elevación es 0º; como cenital y elevación son complementarios, el ángulo cenital es 90º. El acimut en ese momento depende de la época del año (próximo al este u oeste).", "Apuntes SOL1, diap. 8");
L("SOL", "sol-geometria", "Día claro a 40º N", 3, "Según las simulaciones de día claro a 40º de latitud norte, ¿cuáles de las siguientes afirmaciones son correctas? (varias respuestas)",
  ["El 21 de junio el Sol sale hacia las 4:34 y se pone hacia las 19:25, casi 15 h de sol",
   "El 21 de diciembre el pico de radiación directa ronda los 0,8 kW/m²",
   "El 21 de marzo el día dura unas 12 h (salida 6:01, puesta 17:58)",
   "El 21 de junio el pico de radiación directa supera los 1,3 kW/m²"],
  [0, 1, 2], "Los datos de la diap. 10: marzo 6:01-17:58 (≈ 12 h) y pico ≈ 0,9 kW/m²; junio 4:34-19:25 (≈ 14,9 h) y pico ≈ 1,05 kW/m²; diciembre 7:25-16:34 (≈ 9,2 h) y pico ≈ 0,8 kW/m². En superficie nunca se alcanza la constante solar.", "Apuntes SOL1, diap. 10");
L("SOL", "sol-geometria", "Inclinación óptima", 2, "Una instalación situada a 40º N quiere optimizar la captación en invierno. Según los apuntes, el captador debe inclinarse unos…",
  ["50º", "30º", "40º", "63,5º"],
  0, "Regla de la diap. 12: todo el año → inclinación = latitud (40º); invierno → latitud + 10º (50º), porque el Sol va más bajo; verano → latitud − 10º (30º). 63,5º sería sumar la declinación máxima, que no es la regla de los apuntes.", "Apuntes SOL1, diap. 12");
L("SOL", "sol-geometria", "Inclinación óptima", 3, "En la comparación de la diap. 12 a 40º N, ¿qué ocurre al pasar de una inclinación de 40º a una de 30º?",
  ["Mejora la captación en verano a costa de captar menos en invierno",
   "Mejora la captación en invierno a costa de captar menos en verano",
   "Mejora la captación en todas las estaciones, porque el módulo se acerca al plano horizontal",
   "No cambia la energía anual, porque la radiación incidente es la misma en ambos casos"],
  0, "Inclinación = latitud − 10º optimiza el verano (el Sol va alto); el módulo pierde algo de captación en invierno respecto a la inclinación igual a la latitud, que optimiza el año completo.", "Apuntes SOL1, diap. 11-12");
L("SOL", "sol-geometria", "Mapa de España", 1, "En el mapa de radiación de España de los apuntes, las dos cifras de cada provincia representan…",
  ["arriba, la energía en kWh/año que incide por m²; abajo, el número de horas de sol al año",
   "arriba, el número de horas de sol al año; abajo, la energía en kWh/año que incide por m²",
   "arriba, la energía anual sobre superficie inclinada óptima; abajo, la energía sobre superficie horizontal",
   "arriba, la potencia media en W/m²; abajo, el número de horas de sol al año"],
  0, "La diap. 15 lo indica literalmente: la cifra superior es la energía en kWh/año que incide por m² y la inferior, el número de horas de sol al año (p. ej. Canarias 1940 / 2897).", "Apuntes SOL1, diap. 15");
L("SOL", "sol-geometria", "Mapa de España", 3, "Según el mapa de la diap. 15, ¿qué zona presenta la mayor energía incidente anual por m²?",
  ["Canarias, con unos 1940 kWh/m²·año", "Almería, con unos 3052 kWh/m²·año", "Murcia, con unos 2200 kWh/m²·año", "Huelva, con unos 2818 kWh/m²·año"],
  0, "El máximo de energía es 1940 kWh/m²·año en Canarias. Las cifras 3052 y 2818 son horas de sol (Almería y Huelva), no kWh/m², y en Murcia la energía es ≈ 1800 kWh/m²·año.", "Apuntes SOL1, diap. 15");
L("SOL", "sol-geometria", "Formas de aprovechamiento", 2, "Según la clasificación de la diap. 16, la solar termoeléctrica es…",
  ["una forma fotovoltaica que genera electricidad a partir de los pares electrón/hueco creados en un semiconductor",
   "una forma heliotérmica que aprovecha directamente el calor generado por la radiación solar, sin conversión eléctrica",
   "una forma heliotérmica que genera electricidad a partir del calor producido por la radiación solar",
   "Ninguna de las otras opciones"],
  2, "La heliotérmica se divide en solar térmica (uso directo del calor) y solar termoeléctrica (electricidad a partir del calor). La fotovoltaica es la otra gran forma, con pares electrón/hueco.", "Apuntes SOL1, diap. 16");

/* ---------- Preguntas · 3. Colector plano ---------- */
L("SOL", "sol-colector", "Aplicaciones térmicas", 2, "Según los apuntes, la transformación solar térmica de media temperatura…",
  ["abarca 90-400 ºC, es de uso industrial y emplea colectores cilindro-parabólicos y Fresnel lineales con índice de concentración bajo-medio",
   "abarca 35-90 ºC, es de uso doméstico y emplea paneles solares sin concentración para ACS, calefacción y refrigeración",
   "abarca 90-400 ºC, se usa en centrales termoeléctricas y emplea helióstatos y discos parabólicos con alto índice de concentración",
   "abarca más de 400 ºC, es de uso industrial y emplea colectores cilindro-parabólicos y Fresnel lineales con índice de concentración bajo-medio"],
  0, "Baja: 35-90 ºC, paneles (ACS, calefacción, refrigeración). Media: 90-400 ºC, uso industrial, CCP y Fresnel, concentración baja-media. Alta: &gt; 400 ºC, centrales termoeléctricas con helióstatos y discos, concentración alta.", "Apuntes SOL2, diap. 3");
L("SOL", "sol-colector", "Panel sin concentración", 2, "¿Cuál de las siguientes NO es una característica del panel solar sin concentración según los apuntes?",
  ["Aprovecha solo la radiación directa, por lo que debe orientarse con precisión hacia el Sol",
   "No requiere seguimiento de la trayectoria solar",
   "Requiere escaso mantenimiento",
   "Es más sencillo que las instalaciones con colector de concentración"],
  0, "El panel sin concentración aprovecha radiación directa y difusa (es la concentración la que solo puede usar la directa y exige seguimiento). Las demás son características literales de la diap. 4.", "Apuntes SOL2, diap. 4");
L("SOL", "sol-colector", "Código Técnico de la Edificación", 1, "Según los apuntes, el Código Técnico de la Edificación obliga a que toda vivienda de nueva construcción tenga aporte de energías renovables…",
  ["desde 2007, siendo lo más habitual la energía solar térmica de apoyo a ACS",
   "desde 2007, siendo lo más habitual la fotovoltaica de autoconsumo sin excedentes",
   "desde 2013, siendo lo más habitual la energía solar térmica de apoyo a ACS",
   "desde 2013, siendo lo más habitual la fotovoltaica de autoconsumo sin excedentes"],
  0, "Diap. 5: el CTE obliga desde 2007 y lo más habitual es la solar de apoyo a ACS.", "Apuntes SOL2, diap. 5");
L("SOL", "sol-colector", "Producto transmitancia-absortancia", 3, "Una cubierta tiene τ = 0,90 y la placa α = 0,93; la reflectancia difusa de la cubierta es ρ<sub>d</sub> = 0,15. Con la expresión de los apuntes, (τα) vale aproximadamente…",
  ["0,846", "0,837", "0,828", "0,900"],
  0, "(τα) = τα/[1 − (1 − α)ρ<sub>d</sub>] = 0,837/(1 − 0,07·0,15) = 0,837/0,9895 ≈ 0,846. El 0,837 es el producto simple τ·α (sin reflexiones múltiples) y el 0,828 resulta de multiplicar por el denominador en lugar de dividir.", "Apuntes SOL2, diap. 7");
L("SOL", "sol-colector", "Producto transmitancia-absortancia", 3, "Sobre el producto transmitancia-absortancia (τα) del colector plano, ¿qué afirmación es correcta según los apuntes?",
  ["Reúne en un factor los efectos de cubiertas y placa, tiene dependencia espectral y es algo mayor que el producto simple τ·α",
   "Reúne en un factor los efectos de cubiertas y placa, no depende de la longitud de onda y es algo menor que el producto simple τ·α",
   "Reúne las pérdidas térmicas por convección y radiación entre placa y cubierta, y tiene dependencia espectral",
   "Reúne las pérdidas ópticas de la cubierta y las térmicas del aislamiento, y es igual al producto simple τ·α"],
  0, "(τα) evalúa la fuente de calor real que llega al absorbente: incluye las reflexiones múltiples entre placa y cubierta (serie geométrica), por eso es ligeramente mayor que τ·α, y tiene dependencia espectral. Las pérdidas térmicas van en el término U<sub>L</sub>(T − T<sub>a</sub>).", "Apuntes SOL2, diap. 7");
L("SOL", "sol-colector", "Rendimiento del colector", 3, "Un colector tiene F<sub>R</sub> = 0,9, (τα)<sub>av</sub> = 0,8 y U<sub>L</sub> = 5 W/m²·K. Si T<sub>i</sub> − T<sub>a</sub> = 40 K y G<sub>T</sub> = 800 W/m², su rendimiento instantáneo es…",
  ["0,495", "0,470", "0,540", "0,550"],
  0, "η = F<sub>R</sub>[(τα) − U<sub>L</sub>(T<sub>i</sub> − T<sub>a</sub>)/G<sub>T</sub>] = 0,9·(0,8 − 5·40/800) = 0,9·0,55 = 0,495. El 0,55 olvida F<sub>R</sub>; el 0,470 aplica F<sub>R</sub> solo al término óptico; el 0,540 usa 1000 W/m².", "Apuntes SOL2, diap. 8");
L("SOL", "sol-colector", "Rendimiento del colector", 2, "Según la ecuación de eficiencia del colector de los apuntes, el rendimiento instantáneo de un colector plano…",
  ["disminuye al aumentar la diferencia entre la temperatura de entrada del fluido y la ambiente",
   "aumenta al aumentar la diferencia entre la temperatura de entrada del fluido y la ambiente",
   "no depende de la irradiancia G<sub>T</sub>, porque esta aparece en el numerador y en el denominador",
   "depende del producto emitancia-absortancia de la placa, y no de la cubierta"],
  0, "η = F<sub>R</sub>[(τα) − U<sub>L</sub>(T<sub>i</sub> − T<sub>a</sub>)/G<sub>T</sub>]: las pérdidas crecen con T<sub>i</sub> − T<sub>a</sub>, y G<sub>T</sub> no se cancela en el término de pérdidas. Interviene el producto transmitancia (cubierta)-absortancia (placa).", "Apuntes SOL2, diap. 8");
L("SOL", "sol-colector", "Absorbentes selectivos", 3, "De la tabla de superficies selectivas de los apuntes, ¿cuál tiene la mayor absortancia?",
  ["Ni-Zn-S sobre Ni (α = 0,96)", "Negro de Ni sobre Ni (α = 0,93)", "Óxido de Cu sobre Al (α = 0,93)", "Negro de Cr sobre Ni (α = 0,92)"],
  0, "La mayor absortancia es la del Ni-Zn-S sobre Ni (0,96, ε = 0,07). El negro de Ni sobre Ni tiene la menor emitancia (0,06), pero su α es 0,93, igual que el óxido de Cu sobre Al (ε = 0,11).", "Apuntes SOL2, diap. 9");
L("SOL", "sol-colector", "Tubos de vacío", 3, "Según los apuntes, la principal ventaja de los captadores de tubos de vacío es que…",
  ["reducen las pérdidas por radiación infrarroja entre el absorbedor y el tubo exterior",
   "reducen las pérdidas ópticas por reflexión en la cubierta de vidrio",
   "eliminan la necesidad de un fluido caloportador entre captador y depósito",
   "Ninguna de las otras opciones"],
  3, "Ninguna es correcta: según la diap. 10 reducen las pérdidas por convección y conducción entre el absorbedor y el tubo exterior. El vacío suprime el medio que transmite calor por convección y conducción (diap. 10). La radiación no necesita medio, y sigue habiendo fluido (heat-pipe, tubo en U o concéntricos).", "Apuntes SOL2, diap. 10");
L("SOL", "sol-colector", "Fluido caloportador", 3, "¿Cuáles de los siguientes fluidos caloportadores aparecen en la lista de la diap. 11 para colectores solares? (varias respuestas)",
  ["Mezclas agua-glicol", "Aceites minerales o parafinas", "Mezclas agua-glicerina", "Sales fundidas"],
  [0, 1, 2], "La diap. 11 cita agua, mezclas agua-glicol, aceites minerales o parafinas y mezclas agua-glicerina. Las sales son el fluido de las centrales de torre (diap. 27), no de esta lista.", "Apuntes SOL2, diap. 11");

/* ---------- Preguntas · 4. ACS y calefacción ---------- */
L("SOL", "sol-acs", "Almacenamiento en instalaciones pequeñas", 2, "Según los apuntes, en las plantas termosolares pequeñas (por ejemplo, ACS)…",
  ["el almacenamiento es una propiedad intrínseca, al contrario que en las fotovoltaicas, y el coste de bombeo no encarece significativamente",
   "el almacenamiento es una propiedad intrínseca, igual que en las fotovoltaicas, y el coste de bombeo encarece significativamente",
   "el almacenamiento requiere baterías, al contrario que en las fotovoltaicas, y el coste de bombeo no encarece significativamente",
   "el almacenamiento es poco deseable, porque reduce el rendimiento del colector al aumentar su temperatura media"],
  0, "Diap. 12: el agua caliente actúa como almacén, lo habitual son depósitos con circulación natural o forzada y el bombeo no encarece significativamente. En la fotovoltaica, en cambio, el almacenamiento (baterías) encarece la instalación.", "Apuntes SOL2, diap. 12");
L("SOL", "sol-acs", "Sistemas de agua caliente", 2, "En un sistema de agua caliente por convección natural como el de los apuntes…",
  ["no hay bomba: el tanque se sitúa por encima del colector y el agua calentada asciende por sí sola",
   "una bomba gobernada por un control mueve el agua cuando el colector está más caliente que el tanque",
   "el tanque se sitúa por debajo del colector para que el agua fría descienda hacia él",
   "el agua de consumo nunca pasa por el colector, porque siempre hay un intercambiador"],
  0, "En circulación natural (termosifón) el tanque está por encima y no hay bomba; la bomba con control es lo propio de la convección forzada. Puede ser directo (el agua de consumo pasa por el colector) o indirecto (con intercambiador).", "Apuntes SOL2, diap. 13-14");
L("SOL", "sol-acs", "Sistemas directos e indirectos", 3, "¿Qué distingue un sistema de ACS indirecto de uno directo, según los esquemas de los apuntes?",
  ["En el indirecto el agua circula por convección natural y en el directo siempre por convección forzada",
   "En el indirecto el fluido del colector cede su calor al agua de consumo a través de un intercambiador (serpentín o doble envolvente)",
   "En el indirecto el agua de consumo pasa por el colector y en el directo se calienta con energía auxiliar",
   "Ninguna de las otras opciones"],
  1, "La diap. 14 muestra las cuatro combinaciones: directos e indirectos pueden ser de circulación natural o forzada. En los indirectos hay un circuito primario separado y un intercambiador; en los directos el agua de consumo atraviesa el colector.", "Apuntes SOL2, diap. 14");
L("SOL", "sol-acs", "Calefacción por aire", 3, "¿Cuál de las siguientes es un INCONVENIENTE de los sistemas activos de calefacción solar que emplean aire?",
  ["El factor F<sub>R</sub> es más bajo que en los colectores de líquido",
   "Hay problemas de ebullición y congelación en los colectores",
   "Aumentan los problemas de corrosión",
   "En verano hay que evitar el exceso de presión en el circuito"],
  0, "Con aire se eliminan la ebullición y la congelación y se reduce la corrosión (son ventajas). Sus inconvenientes son el bombeo caro, los grandes volúmenes de almacenamiento, las dificultades estructurales y un F<sub>R</sub> más bajo. La sobrepresión en verano es un problema de los sistemas de agua.", "Apuntes SOL2, diap. 16");
L("SOL", "sol-acs", "Calefacción por agua", 2, "Frente a los de aire, los sistemas de calefacción solar que emplean agua…",
  ["tienen mayor F<sub>R</sub> y menor volumen de almacenamiento, pero presentan problemas de corrosión y congelación",
   "tienen menor F<sub>R</sub> y mayor volumen de almacenamiento, pero eliminan la corrosión y la congelación",
   "tienen mayor F<sub>R</sub> y menor volumen de almacenamiento, y eliminan los problemas de ebullición en verano",
   "tienen mayor F<sub>R</sub>, pero no pueden adaptarse a acondicionadores que funcionan con aire"],
  0, "Diap. 17: ventajas del agua → mayor F<sub>R</sub>, volumen de almacenamiento menor y fácil adaptación a acondicionadores de aire. Inconvenientes → corrosión y congelación; en verano hay que evitar sobrepresión y ebullición.", "Apuntes SOL2, diap. 17");

/* ---------- Preguntas · 5. Concentración ---------- */
L("SOL", "sol-concentracion", "Concentrador y receptor", 2, "Según los apuntes, la concentración solar implica dos elementos fundamentales:",
  ["un concentrador que debe seguir la trayectoria del Sol y un receptor sobre el que debe estar bien enfocada la radiación",
   "un concentrador fijo orientado al sur y un receptor que se desplaza siguiendo la imagen del Sol",
   "un concentrador que debe seguir la trayectoria del Sol y un almacenamiento térmico que absorba los transitorios",
   "un receptor que debe seguir la trayectoria del Sol y un campo de lentes fijas que enfoque la radiación difusa"],
  0, "Diap. 18: el concentrador sigue al Sol y el receptor debe recibir bien enfocada la radiación. La concentración solo aprovecha la radiación directa, no la difusa.", "Apuntes SOL2, diap. 18");
L("SOL", "sol-concentracion", "Límites de la concentración", 2, "El límite termodinámico del factor de concentración que dan los apuntes se resume en:",
  ["el Sol es un cuerpo negro a 5780 K que no se puede superar; c<sub>máx</sub> = 46000 y en la práctica &lt; 5000",
   "el Sol es un cuerpo negro a 5780 K que no se puede superar; c<sub>máx</sub> = 5000 y en la práctica &lt; 2000",
   "el Sol es un disco de 32' que condiciona el punto focal; c<sub>máx</sub> = 46000 y en la práctica &lt; 5000",
   "el Sol es un cuerpo negro a 6000 K que no se puede superar; c<sub>máx</sub> = 4600 y en la práctica &lt; 1000"],
  0, "Diap. 19: limitación termodinámica → 5780 K (c = 46000, práctica &lt; 5000). El disco de 32' es la limitación geométrica, no la termodinámica.", "Apuntes SOL2, diap. 19");
L("SOL", "sol-concentracion", "Temperatura máxima", 3, "Con el balance de los apuntes T<sub>máx</sub> = (α<sub>ef</sub>·c·G/(ε<sub>ef</sub>·σ))<sup>0,25</sup>, un receptor con α<sub>ef</sub> = ε<sub>ef</sub>, c = 1000 y G = 1000 W/m² (σ = 5,67·10<sup>−8</sup> W/m²·K⁴) alcanzaría como máximo unos…",
  ["2050 K", "364 K", "1150 K", "5780 K"],
  0, "T = (1000·1000/5,67·10<sup>−8</sup>)<sup>1/4</sup> = (1,76·10<sup>13</sup>)<sup>1/4</sup> ≈ 2050 K. 364 K corresponde a c = 1, 1150 K a c = 100, y 5780 K es el techo termodinámico (c ≈ 46000).", "Apuntes SOL2, diap. 20");
L("SOL", "sol-concentracion", "Temperatura de equilibrio", 3, "Una placa sin concentración (c = 1) recibe G = 1000 W/m² y está en equilibrio radiante, sin extracción de calor ni convección. Con el mismo balance de los apuntes, ¿qué temperatura alcanza si es de negro de Ni sobre Ni (α = 0,93; ε = 0,06)?",
  ["≈ 723 K", "≈ 364 K", "≈ 358 K", "≈ 538 K"],
  0, "T = (α·G/(ε·σ))<sup>1/4</sup> = (0,93·1000/(0,06·5,67·10<sup>−8</sup>))<sup>1/4</sup> ≈ 723 K. Con α = ε (superficie no selectiva) serían 364 K; usar solo α sin ε da 358 K; 538 K sería el óxido de Cu sobre Ni (0,81/0,17). La temperatura de equilibrio depende del cociente α/ε.", "Apuntes SOL2, diap. 9 y 20");
L("SOL", "sol-concentracion", "Razón de concentración", 1, "La razón de concentración (superficial) C se define en los apuntes como…",
  ["el área de apertura del concentrador dividida por el área del receptor",
   "el área del receptor dividida por el área de apertura del concentrador",
   "el flujo de radiación sobre el receptor dividido por la constante solar",
   "la temperatura del receptor dividida por la temperatura del Sol"],
  0, "C = A<sub>a</sub>/A<sub>r</sub> (diap. 20). Es mayor que 1 en cualquier colector de concentración; un colector plano tiene C ≤ 1.", "Apuntes SOL2, diap. 20");
L("SOL", "sol-concentracion", "Foco lineal y foco puntual", 2, "En la clasificación de tecnologías termosolares de la IEA (diap. 21), ¿qué tecnología combina foco puntual con receptor fijo?",
  ["La torre de receptor central", "El disco parabólico", "El reflector Fresnel lineal", "El colector cilindro-parabólico"],
  0, "Foco lineal: Fresnel (receptor fijo) y cilindro-parabólico (receptor móvil). Foco puntual: torre central (receptor fijo) y disco parabólico (receptor móvil, que se mueve con el reflector).", "Apuntes SOL2, diap. 21");

/* ---------- Preguntas · 6. Tecnologías termosolares ---------- */
L("SOL", "sol-termoelectrica", "Cilindro-parabólico", 3, "Según la diap. 22, el colector cilindro-parabólico trabaja con…",
  ["razón de concentración 30-90, flujos de 40-60 kW/m² sobre el absorbente, 450 ºC y agua o aceite",
   "razón de concentración 20-50, flujos de 15-40 kW/m² sobre el absorbente, 350 ºC y agua o aceite",
   "razón de concentración 200-1000, flujos de 300-1000 kW/m² sobre el absorbente, 565 ºC y sales",
   "razón de concentración 30-90, flujos de 300-1000 kW/m² sobre el absorbente, 565 ºC y sales"],
  0, "CCP: 30-90, 40-60 kW/m², 450 ºC, agua o aceite. Los datos 20-50 / 15-40 kW/m² / 350 ºC son del Fresnel, y 200-1000 / 300-1000 kW/m² / 565 ºC / sales, de la torre.", "Apuntes SOL2, diap. 22");
L("SOL", "sol-termoelectrica", "Fresnel", 2, "¿Qué describe correctamente el colector Fresnel lineal de los apuntes?",
  ["Espejos planos o con pequeña curvatura, un eje de rotación y receptor lineal paralelo a los espejos",
   "Espejo cilíndrico de sección parabólica, un eje de rotación y receptor lineal a lo largo del eje del cilindro",
   "Espejos planos robotizados con dos ejes y receptor de cavidad en lo alto de una torre",
   "Lentes de Fresnel de dos ejes que concentran la radiación sobre un receptor puntual de cavidad"],
  0, "Diap. 24: concentrador de espejos planos o con pequeña curvatura, un eje para el seguimiento y receptor lineal paralelo a los espejos (fijo). La segunda opción es el CCP y la tercera, la torre.", "Apuntes SOL2, diap. 24");
L("SOL", "sol-termoelectrica", "Discos parabólicos", 3, "¿Cuál de las siguientes afirmaciones sobre los discos parabólicos es FALSA según los apuntes?",
  ["Su fluido caloportador son sales fundidas y trabajan a unos 565 ºC",
   "Tienen receptor de cavidad y razón de concentración superior a 2000",
   "Soportan flujos de radiación de 300-1000 kW/m²",
   "Están en fase de prototipo-demostración y su riesgo tecnológico es alto"],
  0, "Los discos usan gas o líquido de un motor Stirling y alcanzan 650-800 ºC (750 ºC en la tabla de la diap. 30). Las sales y los 565 ºC son de la torre central.", "Apuntes SOL2, diap. 26 y 30");
L("SOL", "sol-termoelectrica", "Central termosolar de torre", 2, "En la central de torre con sales del esquema de los apuntes…",
  ["las sales frías se bombean a lo alto de la torre, se calientan en el receptor y se almacenan en un tanque a más de 500 º",
   "las sales calientes se bombean a lo alto de la torre para generar vapor directamente en el receptor",
   "el vapor de agua se genera en el receptor de la torre y las sales solo enfrían el condensador",
   "las sales se calientan en los helióstatos y se almacenan en la torre a más de 500 º"],
  0, "Diap. 28: tanque de sales frías → bombeo a la torre → receptor → tanque de sales calientes (&gt; 500 º) → cambiadores de calor donde se genera vapor → turbina y generador → transformador y red.", "Apuntes SOL2, diap. 28");
L("SOL", "sol-termoelectrica", "Proyectos en España", 2, "Sobre los proyectos termosolares en España entre 2007 y 2013 (diap. 29), ¿qué afirmación es correcta?",
  ["45 de los 49 proyectos fueron cilindro-parabólicos de 50 MWe, para un total de unos 2300 MWe",
   "45 de los 49 proyectos fueron de torre central de 11-20 MWe, para un total de unos 2300 MWe",
   "45 de los 49 proyectos fueron cilindro-parabólicos de 50 MWe, para un total de unos 230 MWe",
   "45 de los 49 proyectos fueron Fresnel de 30 MWe, para un total de unos 2300 MWe"],
  0, "La tabla: CCP 45 proyectos (50 MWe), Fresnel 1 (30 MWe), torre 3 (11-20 MWe); total 49 y 2300 MWe. 45 × 50 = 2250 MWe, coherente con el total.", "Apuntes SOL2, diap. 29");
L("SOL", "sol-termoelectrica", "Estado de las tecnologías", 3, "Según la tabla del estado de las tecnologías termosolares (diap. 30), ¿qué afirmaciones son correctas? (varias respuestas)",
  ["Los cilindro-parabólicos son la única tecnología con riesgo tecnológico bajo",
   "Los discos parabólicos tienen la eficiencia pico más alta (29,4 %)",
   "El receptor central presenta el intervalo de factor de capacidad anual más amplio (20-77 %)",
   "El Fresnel es la tecnología de mayor temperatura de operación (750 ºC)"],
  [0, 1, 2], "Riesgo: Fresnel medio, CCP bajo, torre medio, discos alto. Eficiencia pico: 18, 20, 23 y 29,4 %. Factor de capacidad: 16 %, 23-50 %, 20-77 % y 25 %. Temperatura: 350, 390, 565 y 750 ºC (750 ºC son los discos, no el Fresnel).", "Apuntes SOL2, diap. 30");
L("SOL", "sol-termoelectrica", "Parabólico compuesto", 2, "El colector parabólico compuesto (CPC) de los apuntes es un colector…",
  ["de concentración baja sin seguimiento, basado en óptica sin imágenes, que puede incorporar seguimiento a un eje",
   "de concentración alta con seguimiento a dos ejes, basado en óptica formadora de imágenes",
   "de concentración baja que exige seguimiento a un eje, basado en óptica formadora de imágenes",
   "de concentración media con seguimiento a un eje, equivalente a un cilindro-parabólico de gran apertura"],
  0, "Diap. 31: concentración baja sin seguimiento, óptica sin imágenes, puede incorporar seguimiento a un eje y se combina con otros sistemas de concentración; proyectos en Latinoamérica.", "Apuntes SOL2, diap. 31");
L("SOL", "sol-termoelectrica", "Clasificación de tecnologías", 3, "En la tabla de clasificación de tecnologías termosolares (diap. 32), ¿qué colector es estacionario, con absorbedor tubular y razón de concentración 1 &lt; C &lt; 15?",
  ["El colector parabólico compuesto", "El colector Fresnel", "El captador de tubos de vacío", "El colector cilindro-parabólico"],
  0, "CPC: estacionario, absorbedor tubular, 1 &lt; C &lt; 15, 70-300 ºC. El Fresnel también tiene 1 &lt; C &lt; 15 en esa tabla, pero con seguimiento a un eje; los tubos de vacío tienen C ≤ 1; el CCP, 15 &lt; C &lt; 40 con un eje.", "Apuntes SOL2, diap. 32");
L("SOL", "sol-termoelectrica", "Almacenamiento de energía", 2, "Según los modos de almacenamiento de los apuntes, ¿cuáles se clasifican como almacenamiento térmico? (varias respuestas)",
  ["En forma de calor sensible", "Por cambio de fase", "En reacciones químicas reversibles", "En hidrógeno"],
  [0, 1, 2], "Diap. 33: térmico = calor sensible, cambio de fase y reacciones químicas reversibles. El hidrógeno es almacenamiento químico; además hay electroquímico (baterías), mecánico (volantes, aire comprimido, bombeo) y magnético (superconductores).", "Apuntes SOL2, diap. 33");

/* ---------- Preguntas · 7. Fotovoltaica: mercado y sistemas ---------- */
L("SOL", "sol-fvmercado", "Capacidad instalada", 1, "Según los apuntes, la capacidad fotovoltaica instalada en 2024 era de…",
  ["1852,36 GW en el mundo y 36,24 GW en España", "1852,36 GW en el mundo y 23,65 GW en España",
   "1405 GW en el mundo y 36,24 GW en España", "185,24 GW en el mundo y 3,62 GW en España"],
  0, "Diap. 3: mundo 1852,36 GW y España 36,24 GW (2024). Los 23,65 GW son la potencia de la categoría b.1.1 del RAIPEE en noviembre de 2023 (diap. 31), y ≈ 1400 GW es la barra mundial de 2023.", "Apuntes SOL3, diap. 3");
L("SOL", "sol-fvmercado", "Ventajas y desventajas", 3, "¿Cuál de las siguientes afirmaciones sobre la fotovoltaica recogen los apuntes?",
  ["Tiene baja densidad de potencia, aunque es la mayor entre las renovables, y una vida útil estimada de 25 años",
   "Tiene alta densidad de potencia, la mayor entre todas las fuentes, y una vida útil estimada de 25 años",
   "Tiene baja densidad de potencia, aunque es la mayor entre las renovables, y una vida útil estimada de 40 años",
   "Tiene buena integración con las redes eléctricas, lo que hace innecesarios los acumuladores"],
  0, "Diap. 6: desventaja → baja densidad de potencia (aunque la mayor entre las renovables) y mala integración con las redes, lo que hace muy deseables los acumuladores (indispensables en autoconsumo aislado). Ventaja → largo tiempo de vida, estimado en 25 años.", "Apuntes SOL3, diap. 6");
L("SOL", "sol-fvmercado", "Instalación aislada", 1, "En el esquema de instalación fotovoltaica aislada de los apuntes, los acumuladores y los consumos en corriente continua se conectan…",
  ["al regulador", "al inversor", "a un contador bidireccional", "directamente a los consumos de corriente alterna"],
  0, "Diap. 7: módulos → regulador (con acumuladores y consumos en CC) → inversor → consumos en CA (lavadora, televisor). El contador bidireccional es propio del autoconsumo conectado a red.", "Apuntes SOL3, diap. 7");
L("SOL", "sol-fvmercado", "Conexión a red y autoconsumo", 3, "Sobre las instalaciones conectadas a red y de autoconsumo de los apuntes, ¿qué afirmación es correcta?",
  ["En autoconsumo con excedente (vertido a red) hay que gestionar un punto de suministro con la compañía distribuidora",
   "En autoconsumo sin excedente hay que gestionar un punto de suministro con la compañía distribuidora para verter a red",
   "Los huertos solares conectados a red se definen como instalaciones de menos de 10 MWp",
   "En autoconsumo con excedente no se necesita inversor, porque la energía se vierte a la red en corriente continua"],
  0, "Diap. 8-9: los huertos solares tienen más de 10 MWp; en autoconsumo con excedente se necesita gestionar un punto de suministro con la distribuidora, y el inversor convierte la CC del campo en CA, con contador bidireccional.", "Apuntes SOL3, diap. 8-9");

/* ---------- Preguntas · 8. Semiconductores y efecto FV ---------- */
L("SOL", "sol-celula", "Semiconductores", 1, "Según los apuntes, los semiconductores utilizados en fotovoltaica son materiales…",
  ["del grupo IV, o combinaciones de los grupos III y V, o de los grupos II y VI",
   "del grupo IV, o combinaciones de los grupos III y V, o de los grupos I y VII",
   "exclusivamente del grupo IV (Si y Ge), porque los compuestos no tienen banda prohibida",
   "del grupo IV, o combinaciones de los grupos IV y VI, o de los grupos II y V"],
  0, "Diap. 10: grupo IV, III-V (p. ej. GaAs) o II-VI (p. ej. CdTe). El silicio es el más usado; también germanio, arseniuro de galio y teluro de cadmio.", "Apuntes SOL3, diap. 10");
L("SOL", "sol-celula", "Espectro solar", 1, "Según los apuntes, el espectro solar a nivel del mar contiene aproximadamente…",
  ["un 2 % de ultravioleta, un 47 % de visible y un 51 % de infrarrojo",
   "un 2 % de ultravioleta, un 51 % de visible y un 47 % de infrarrojo",
   "un 7 % de ultravioleta, un 47 % de visible y un 46 % de infrarrojo",
   "un 5 % de ultravioleta, un 43 % de visible y un 52 % de infrarrojo"],
  0, "Diap. 12: UV ≈ 2 % (λ ≤ 0,38 µm), visible ≈ 47 % (0,38-0,78 µm) e infrarrojo ≈ 51 % (0,78-2,5 µm); máximo de ≈ 1,3 W/m²·nm hacia 0,5 µm.", "Apuntes SOL3, diap. 12");
L("SOL", "sol-celula", "Eficiencia máxima del c-Si", 3, "¿Por qué la eficiencia teórica máxima de una célula de silicio cristalino no puede superar el 50 % según los apuntes?",
  ["Casi un 20 % de la energía llega en fotones con menos energía que la banda prohibida y casi un 30 % se pierde por el exceso de energía de los fotones de λ mucho menor que 1,11 µm",
   "Casi un 30 % de la energía llega en fotones con menos energía que la banda prohibida y casi un 20 % se pierde por el exceso de energía de los fotones de λ mucho menor que 1,11 µm",
   "Casi un 20 % de la energía llega en fotones con menos energía que la banda prohibida y casi un 30 % se pierde por el exceso de energía de los fotones de λ mucho mayor que 1,11 µm",
   "Casi un 20 % de la energía se refleja en la superficie de la célula y casi un 30 % se pierde por recombinación de pares en la zona de deplexión"],
  0, "Diap. 13: ≈ 20 % no genera pares (E<sub>ph</sub> &lt; E<sub>G</sub>, λ &gt; 1,11 µm) y ≈ 30 % se pierde como calor en fotones muy energéticos (λ mucho más corta que 1,11 µm). 100 − 20 − 30 = 50 %.", "Apuntes SOL3, diap. 13");
L("SOL", "sol-celula", "Dopado", 3, "En un semiconductor de tipo n como el de los apuntes…",
  ["el dopante es un átomo del grupo V, los portadores mayoritarios son electrones y quedan donadores ionizados positivos",
   "el dopante es un átomo del grupo III, los portadores mayoritarios son electrones y quedan aceptores ionizados negativos",
   "el dopante es un átomo del grupo V, los portadores mayoritarios son huecos y quedan donadores ionizados positivos",
   "el dopante es un átomo del grupo V, los portadores mayoritarios son electrones y quedan aceptores ionizados negativos"],
  0, "Diap. 14: tipo n → átomo del grupo V que aporta un electrón extra; mayoritarios electrones (Negativos), iones fijos donadores (+). Tipo p → grupo III, falta un electrón (hueco), mayoritarios huecos (Positivos), aceptores ionizados (−).", "Apuntes SOL3, diap. 14");
L("SOL", "sol-celula", "Unión p-n", 2, "En una unión p-n en equilibrio, sin tensión aplicada ni iluminación…",
  ["no circula corriente: la difusión de portadores se compensa con su deriva en el campo de la zona de deplexión",
   "circula una pequeña corriente de difusión de electrones desde n hacia p que no se compensa",
   "no existe campo eléctrico, porque la zona de deplexión solo se forma al polarizar en directa",
   "circula la corriente de cortocircuito I<sub>sc</sub>, porque el campo separa los pares térmicos"],
  0, "Diap. 15-17: al unir p y n los portadores difunden y queda una zona de deplexión con un campo moderado; en equilibrio (tensión nula) no circula corriente porque difusión y deriva se equilibran. I<sub>sc</sub> y V<sub>oc</sub> aparecen solo con luz.", "Apuntes SOL3, diap. 16-17");

/* ---------- Preguntas · 9. Curva I-V y rendimiento ---------- */
L("SOL", "sol-curvaiv", "Influencia de la irradiancia", 2, "Según los apuntes y las curvas I-V del módulo de la diap. 18, al reducir la irradiancia de 1000 a 200 W/m²…",
  ["la corriente baja casi en proporción a la irradiancia, mientras que la tensión de circuito abierto apenas disminuye",
   "la tensión de circuito abierto baja en proporción a la irradiancia, mientras que la corriente apenas disminuye",
   "la corriente y la tensión de circuito abierto bajan ambas en proporción a la irradiancia",
   "la corriente apenas cambia y la potencia máxima se mantiene, porque el rendimiento aumenta"],
  0, "La corriente de iluminación es proporcional al nivel de iluminación (≈ 16 A → ≈ 3,2 A), mientras que V<sub>oc</sub> pasa solo de ≈ 47 a ≈ 44 V. La potencia máxima cae de ≈ 600 W a ≈ 115 W.", "Apuntes SOL3, diap. 18");
L("SOL", "sol-curvaiv", "Influencia de la irradiancia", 3, "El módulo de la diap. 18 da una corriente de cortocircuito de ≈ 16 A a 1000 W/m². Aplicando la regla de los apuntes, ¿qué corriente de cortocircuito cabe esperar a 600 W/m²?",
  ["≈ 9,6 A", "≈ 12,8 A", "≈ 16 A", "≈ 6,4 A"],
  0, "La corriente es proporcional a la irradiancia: 16·600/1000 ≈ 9,6 A (la curva de 600 W/m² de la figura corta el eje hacia 9,5 A). 12,8 A corresponde a 800 W/m² y 6,4 A a 400 W/m².", "Apuntes SOL3, diap. 18");
L("SOL", "sol-curvaiv", "Influencia de la temperatura", 3, "Según la diap. 19, al pasar la célula de 10 ºC a 70 ºC…",
  ["la corriente de cortocircuito baja de ≈ 16 A a ≈ 10 A, la tensión de circuito abierto apenas varía y el rendimiento disminuye",
   "la tensión de circuito abierto baja de ≈ 48 V a ≈ 41 V, la corriente de cortocircuito apenas varía y el rendimiento disminuye",
   "la tensión de circuito abierto sube de ≈ 41 V a ≈ 48 V, la corriente apenas varía y el rendimiento aumenta",
   "Ninguna de las otras opciones"],
  1, "El rendimiento se reduce con la temperatura por la disminución del potencial entre terminales: V<sub>oc</sub> ≈ 48 V a 10 ºC y ≈ 41 V a 70 ºC, mientras que la corriente de cortocircuito (≈ 16 A) apenas cambia.", "Apuntes SOL3, diap. 19");
L("SOL", "sol-curvaiv", "Factor de forma y rendimiento", 3, "La célula de perovskita de los apuntes tiene J<sub>sc</sub> = 20,0 mA/cm², V<sub>oc</sub> = 993 mV y FF = 0,73, con P<sub>in</sub> = 96,4 mW/cm². Su rendimiento es aproximadamente…",
  ["15,0 %", "20,6 %", "14,5 %", "11,0 %"],
  0, "P<sub>máx</sub> = FF·J<sub>sc</sub>·V<sub>oc</sub> = 0,73·20,0·0,993 ≈ 14,5 mW/cm²; η = 14,5/96,4 ≈ 15,0 % (el PCE indicado en la diap. 24). Sin el FF saldría 20,6 %; 14,5 es la potencia en mW/cm², no el rendimiento.", "Apuntes SOL3, diap. 24");
L("SOL", "sol-curvaiv", "Récords de eficiencia", 3, "En el gráfico de mejores eficiencias de células de investigación (NREL) de los apuntes, el récord absoluto (47,1 %) corresponde a…",
  ["una célula multiunión de 6 uniones con concentración (143 soles)",
   "una célula de silicio monocristalino con concentración (143 soles)",
   "una célula multiunión de 6 uniones sin concentración",
   "una célula tándem perovskita/silicio sin concentración"],
  0, "El 47,1 % es de NREL con 6 uniones y 143 soles (concentrador). Sin concentración, la multiunión de 6 uniones de NREL da 39,2 %; el silicio cristalino ronda el 26-27 %.", "Apuntes SOL3, diap. 20");

/* ---------- Preguntas · 10. Tecnologías, CPV y España ---------- */
L("SOL", "sol-tecnologias", "Generaciones de células", 2, "Según la diap. 21, la evolución de la eficiencia de módulo de cada generación es…",
  ["silicio cristalino 13 → 20 %, lámina delgada 9 → 15 % y células Dye y orgánicas 4 → 10+ %",
   "silicio cristalino 9 → 15 %, lámina delgada 13 → 20 % y células Dye y orgánicas 4 → 10+ %",
   "silicio cristalino 13 → 20 %, lámina delgada 4 → 10+ % y células Dye y orgánicas 9 → 15 %",
   "silicio cristalino 20 → 26 %, lámina delgada 13 → 20 % y células Dye y orgánicas 9 → 15 %"],
  0, "1ª generación (c-Si mono y multi): 13 → 20 %. 2ª (lámina delgada a-Si, CdTe, CIGS; flexible e integrable en edificios): 9 → 15 %. 3ª (Dye y orgánicas, nichos y menos madura): 4 → 10+ %.", "Apuntes SOL3, diap. 21");
L("SOL", "sol-tecnologias", "Tipos de células", 2, "Según la clasificación de tipos de células de los apuntes…",
  ["el silicio cristalino necesita 200-500 µm por su coeficiente de absorción reducido, y la lámina delgada de a-Si, GaAs, CdTe o CIS ronda 1 µm",
   "el silicio cristalino necesita 10-50 µm por su coeficiente de absorción elevado, y la lámina delgada de a-Si, GaAs, CdTe o CIS ronda 1 µm",
   "el silicio cristalino necesita 200-500 µm por su coeficiente de absorción elevado, y la lámina delgada de a-Si, GaAs, CdTe o CIS ronda 10 µm",
   "el silicio amorfo necesita 200-500 µm por su coeficiente de absorción reducido, y el silicio cristalino de lámina delgada ronda 1 µm"],
  0, "Diap. 26: c-Si de 200-500 µm (coeficiente de absorción reducido; mono o policristalino). Lámina delgada: a-Si, arseniuro de galio, teluro de cadmio y diseleniuro de cobre e indio ≈ 1 µm; silicio cristalino de lámina delgada 10-50 µm.", "Apuntes SOL3, diap. 26");
L("SOL", "sol-tecnologias", "Fotovoltaica de concentración", 3, "Una célula de AsGa de 1 cm² trabaja a 1000 soles con el rendimiento indicado en los apuntes. ¿Qué potencia eléctrica entrega aproximadamente?",
  ["≈ 26 W", "≈ 2,6 W", "≈ 0,026 W", "≈ 260 W"],
  0, "1000 soles = 1 MW/m², así que sobre 1 cm² (10<sup>−4</sup> m²) inciden 100 W; con un 26 % se obtienen ≈ 26 W. 0,026 W sería la misma célula a 1 sol (1 kW/m²).", "Apuntes SOL3, diap. 28");
L("SOL", "sol-tecnologias", "España 2023", 3, "Según la tabla del RAIPEE (noviembre de 2023) de los apuntes, las instalaciones fotovoltaicas de más de 50 MW…",
  ["son 19 y suman 4.061 MW, en torno al 17 % de la potencia de la categoría b.1.1",
   "son 19 y suman 19.588 MW, en torno al 83 % de la potencia de la categoría b.1.1",
   "son 63.147 y suman 4.061 MW, en torno al 17 % de la potencia de la categoría b.1.1",
   "son 19 y suman 4.061 MW, en torno al 50 % de la potencia de la categoría b.1.1"],
  0, "Tabla de la diap. 31: ≤ 50 MW → 63.147 instalaciones y 19.588 MW; &gt; 50 MW → 19 instalaciones y 4.061 MW; total b.1.1 → 63.166 y 23.649 MW (47.298 ha). 4.061/23.649 ≈ 17 %.", "Apuntes SOL3, diap. 31");
L("SOL", "sol-tecnologias", "Fin de vida", 2, "Sobre el fin de vida de los paneles fotovoltaicos, los apuntes indican que…",
  ["se puede reciclar más de un 95 % (vidrio y aluminio), el reciclaje es obligatorio por una normativa europea de 2012 y la primera planta española se inauguró en 2024",
   "se puede reciclar más de un 95 % (vidrio y aluminio), el reciclaje es obligatorio por una normativa europea de 2024 y la primera planta española se inauguró en 2012",
   "se puede reciclar en torno a un 75 % (vidrio y silicio), el reciclaje es obligatorio por una normativa europea de 2012 y la primera planta española se inauguró en 2024",
   "se puede reciclar más de un 95 % (vidrio y aluminio), pero el reciclaje sigue siendo voluntario en la Unión Europea"],
  0, "Diap. 32: más del 95 % reciclable (vidrio y aluminio), normativa europea de 2012 que lo hace obligatorio y primera planta de reciclaje en España en 2024. Preocupan los materiales contaminantes (Cd) y quién asume los gastos.", "Apuntes SOL3, diap. 32");
L("SOL", "sol-tecnologias", "Térmica frente a fotovoltaica", 1, "En la comparativa de los apuntes entre energía solar térmica y fotovoltaica, ¿cuál de estas ventajas se atribuye a la TÉRMICA?",
  ["Fácil integración a la red eléctrica", "Generación de energía distribuida", "Precio bajo", "Operación y mantenimiento"],
  0, "Diap. 30: térmica → almacenamiento térmico, alto rendimiento y fácil integración a la red; fotovoltaica → precio bajo, operación y mantenimiento, y generación distribuida.", "Apuntes SOL3, diap. 30");

/* ---------- Tarjetas ---------- */
C("SOL", "sol-recurso", "Constante solar G<sub>sc</sub> (valor y definición)", "<b>1353 W/m²</b>: energía del Sol por unidad de tiempo y área sobre superficie <b>perpendicular</b>, radiación <b>extraterrestre</b>, a la distancia media Tierra-Sol.");
C("SOL", "sol-recurso", "Corrección de G<sub>sc</sub> con el día del año", "G<sub>on</sub> = G<sub>sc</sub>·(1 + 0,033·cos(360·n/365)): ≈ 1410 W/m² en enero y ≈ 1320 W/m² en julio.");
C("SOL", "sol-recurso", "Masa de aire", "Cociente <b>Y/X</b> entre el camino real de la luz en la atmósfera y el vertical (= 1/cos θ<sub>z</sub>). Más camino → más absorción y dispersión.");
C("SOL", "sol-geometria", "Declinación en solsticios y equinoccios", "<b>+23,45º</b> (21 de junio), <b>0º</b> (equinoccios), <b>−23,45º</b> (22 de diciembre).");
C("SOL", "sol-geometria", "Inclinación óptima del captador", "Todo el año = <b>latitud</b>; invierno = <b>latitud + 10º</b>; verano = <b>latitud − 10º</b>.");
C("SOL", "sol-colector", "Niveles de temperatura de la solar térmica", "Baja <b>35-90 ºC</b> (paneles, ACS); media <b>90-400 ºC</b> (CCP, Fresnel; industria); alta <b>&gt; 400 ºC</b> (helióstatos, discos; centrales).");
C("SOL", "sol-colector", "Expresión de (τα)", "(τα) = τα / [1 − (1 − α)ρ<sub>d</sub>]: reflexiones múltiples placa-cubierta; dependencia espectral.");
C("SOL", "sol-colector", "Rendimiento del colector plano", "η = F<sub>R</sub>[G<sub>T</sub>(τα)<sub>av</sub> − U<sub>L</sub>(T<sub>i</sub> − T<sub>a</sub>)] / G<sub>T</sub>");
C("SOL", "sol-colector", "¿Qué reducen los tubos de vacío?", "Las pérdidas por <b>convección y conducción</b> entre absorbedor y tubo exterior.");
C("SOL", "sol-acs", "Aire frente a agua en calefacción solar", "Aire: sin ebullición ni congelación, menos corrosión; pero bombeo caro, grandes volúmenes y <b>F<sub>R</sub> menor</b>. Agua: <b>F<sub>R</sub> mayor</b> y menor volumen; corrosión y congelación.");
C("SOL", "sol-concentracion", "Límites de la concentración", "<b>Termodinámico</b>: Sol = cuerpo negro a 5780 K (c = 46000; práctica &lt; 5000). <b>Geométrico</b>: disco solar de 32'.");
C("SOL", "sol-concentracion", "Temperatura máxima de un receptor", "T<sub>máx</sub> = (α<sub>ef</sub>·c·G / (ε<sub>ef</sub>·σ))<sup>0,25</sup>; con C = A<sub>a</sub>/A<sub>r</sub>.");
C("SOL", "sol-termoelectrica", "CCP: C, flujo, T y fluido", "C = <b>30-90</b>, 40-60 kW/m², <b>450 ºC</b>, agua o aceite; un eje.");
C("SOL", "sol-termoelectrica", "Torre central: C, flujo, T y fluido", "Helióstatos de dos ejes; C = <b>200-1000</b>, 300-1000 kW/m², <b>565 ºC</b>, <b>sales</b>.");
C("SOL", "sol-termoelectrica", "Discos parabólicos: C, T y fluido", "Paraboloide, receptor de cavidad; C &gt; <b>2000</b>, 300-1000 kW/m², <b>650-800 ºC</b>, motor <b>Stirling</b>; proto-demo, riesgo alto.");
C("SOL", "sol-fvmercado", "Capacidad FV 2024", "Mundo <b>1852,36 GW</b>; España <b>36,24 GW</b>.");
C("SOL", "sol-celula", "Pérdidas que limitan el c-Si al 50 %", "≈ <b>20 %</b> fotones con E &lt; E<sub>G</sub> (λ &gt; 1,11 µm) + ≈ <b>30 %</b> exceso de energía de fotones muy energéticos.");
C("SOL", "sol-celula", "Tipo n frente a tipo p", "n: grupo V, mayoritarios <b>electrones</b>, donadores (+). p: grupo III, mayoritarios <b>huecos</b>, aceptores (−).");
C("SOL", "sol-curvaiv", "Efecto de G y de T en la curva I-V", "G ↑ → <b>corriente</b> ↑ (proporcional). T ↑ → <b>tensión</b> ↓ y rendimiento ↓.");
C("SOL", "sol-tecnologias", "1000 soles", "= <b>1 MW/m²</b>. Célula de AsGa: <b>26 % a 1000 soles</b>.");
C("SOL", "sol-tecnologias", "Reciclaje de paneles FV", "&gt; <b>95 %</b> reciclable (vidrio y aluminio); obligatorio por normativa europea de <b>2012</b>; primera planta española en <b>2024</b>.");

/* ---------- Ejercicios ---------- */
DRILLS.push({ id: "sol-c-temperatura", type: "classify", tema: "SOL", sec: "sol-colector", title: "¿Baja, media o alta temperatura? (diap. 3)", cats: ["Baja (35-90 ºC)", "Media (90-400 ºC)", "Alta (> 400 ºC)"], items: [
  ["Paneles solares para ACS", 0], ["Calefacción doméstica", 0], ["Refrigeración solar doméstica", 0], ["Colector cilindro-parabólico", 1], ["Colector lineal Fresnel", 1], ["Uso industrial con concentración bajo-media", 1], ["Helióstatos de alta concentración", 2], ["Discos parabólicos", 2], ["Centrales termoeléctricas", 2]] });
DRILLS.push({ id: "sol-m-concentradores", type: "match", tema: "SOL", sec: "sol-termoelectrica", title: "Tecnología ↔ razón de concentración (diap. 22-27 y 32)", pairs: [
  ["Cilindro-parabólico", "30-90"], ["Fresnel lineal", "20-50"], ["Torre central", "200-1000"], ["Disco parabólico", "> 2000"], ["Placa plana", "≤ 1"], ["Parabólico compuesto", "1-15"]] });
DRILLS.push({ id: "sol-m-cifras", type: "match", tema: "SOL", sec: "sol-recurso", title: "Cifra ↔ dato del tema", pairs: [
  ["1353 W/m²", "Constante solar"], ["5780 K", "Temperatura del Sol (cuerpo negro)"], ["46000", "Concentración máxima teórica"], ["32'", "Ángulo del disco solar"], ["23,45º", "Declinación máxima"], ["36,24 GW", "FV en España (2024)"], ["25 años", "Vida útil estimada de la FV"]] });
DRILLS.push({ id: "sol-c-fv", type: "classify", tema: "SOL", sec: "sol-fvmercado", title: "Fotovoltaica: ¿ventaja o desventaja? (diap. 6)", cats: ["Ventaja", "Desventaja"], items: [
  ["Limpia, al menos en operación", 0], ["Potencia modulable y no localizada", 0], ["Sin piezas móviles", 0], ["Vida estimada de 25 años", 0], ["Importante descenso de costes", 0], ["Baja densidad de potencia", 1], ["Mala integración con redes eléctricas", 1], ["Los acumuladores encarecen la instalación", 1], ["Residuos contaminantes al final de la vida útil", 1]] });
DRILLS.push({ id: "sol-c-aireagua", type: "classify", tema: "SOL", sec: "sol-acs", title: "Calefacción solar: ¿aire o agua? (diap. 16-17)", cats: ["Sistemas de aire", "Sistemas de agua"], items: [
  ["Se eliminan ebullición y congelación", 0], ["Se reduce la corrosión", 0], ["Altos costes de bombeo", 0], ["Grandes volúmenes de almacenamiento", 0], ["Factor FR más bajo", 0], ["Mayor factor FR", 1], ["Volumen de almacenamiento menor", 1], ["Fácil adaptación a acondicionadores de aire", 1], ["Riesgo de sobrepresión en verano", 1]] });

/* ---------- Trucos de memoria ---------- */
MNEMO["sol-recurso"] = ["«<b>1353</b>»: «uno-tres-cinco-tres», la constante del Sol en W/m² (fuera de la atmósfera).", "Balance «<b>70-18-7-3</b>»: 70 directo, 18 absorbido, 7 difuso a tierra, 3 al espacio.", "«El cielo es azul porque el azul se dispersa»: λ parecida al tamaño de las partículas."];
MNEMO["sol-geometria"] = ["«<b>Invierno, más inclinado</b>»: el Sol va bajo, el panel se levanta (latitud + 10º).", "Declinación: «junio arriba (+23,45), diciembre abajo (−23,45), equinoccios en cero».", "Acimut como una brújula: N 0, E 90, S 180, O 270."];
MNEMO["sol-colector"] = ["«<b>35-90-400</b>»: los dos cortes entre baja, media y alta temperatura.", "Selectivo = «<b>come mucho sol y suda poco</b>»: α alto, ε bajo.", "(τα) &gt; τ·α: lo que rebota en la placa «vuelve a por más» tras reflejarse en la cubierta."];
MNEMO["sol-acs"] = ["«El <b>aire</b> ni hierve ni se hiela, pero <b>pesa</b> (volumen) y cuesta moverlo».", "Natural = tanque <b>arriba</b> (el agua caliente sube sola); forzada = bomba + control."];
MNEMO["sol-concentracion"] = ["«<b>5780 y 46000</b>»: no puedes estar más caliente que el Sol, ni concentrar más de 46000 veces.", "Raíz cuarta: para doblar la temperatura hay que multiplicar la concentración por 16."];
MNEMO["sol-termoelectrica"] = ["Escalera de concentración: «Fresnel 20-50 &lt; CCP 30-90 &lt; torre 200-1000 &lt; disco &gt; 2000».", "Temperaturas de la diap. 30: «<b>350-390-565-750</b>» (Fresnel, CCP, torre, discos).", "Torre = «<b>sal</b> en lo alto»: sales a 565 ºC; disco = «<b>Stirling</b> en el foco»."];
MNEMO["sol-fvmercado"] = ["«<b>1852 y 36</b>»: GW FV en el mundo y en España (2024).", "Aislada: «<b>R</b>egulador con <b>R</b>eservas» (los acumuladores cuelgan del regulador)."];
MNEMO["sol-celula"] = ["«<b>2-47-51</b>»: UV, visible e infrarrojo a nivel del mar.", "«<b>20 + 30 = 50</b>»: lo que pierde el c-Si y por qué no pasa del 50 %.", "n de <b>N</b>egativo (electrones, grupo V); p de <b>P</b>ositivo (huecos, grupo III)."];
MNEMO["sol-curvaiv"] = ["«La <b>luz</b> mueve la <b>corriente</b>; el <b>calor</b> roba <b>tensión</b>».", "Perovskita: «<b>20 × 1 × 0,73 ≈ 15</b>» (J<sub>sc</sub> × V<sub>oc</sub> × FF ≈ PCE con ≈ 100 mW/cm²)."];
MNEMO["sol-tecnologias"] = ["Generaciones «<b>13→20, 9→15, 4→10</b>».", "«Mil soles, un megavatio»: 1000 soles = 1 MW/m².", "Reciclaje «<b>95 · 2012 · 2024</b>»: porcentaje, normativa europea y primera planta española."];

/* ---------- Diagramas ---------- */
DIAGRAMS.push({ sec: "sol-recurso", h4: "Distribución espectral", cap: "Balance de la radiación solar a su paso por la atmósfera según la figura de la diap. 4: llega directa el 70 %, se absorbe el 18 % (sobre todo moléculas de aire y vapor de agua), un 7 % llega dispersada y un 3 % vuelve al espacio.", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Barra con el reparto de la radiación solar en la atmósfera">
<text x="40" y="24" class="tb">Radiación solar extraterrestre = 100 %</text>
<rect x="40.0" y="40" width="308.0" height="44" fill="#fef3c7" stroke="#d97706"/>
<text x="194.0" y="67" text-anchor="middle" class="tb">70 %</text>
<rect x="348.0" y="40" width="79.2" height="44" fill="#fde2e1" stroke="#c2413b"/>
<text x="387.6" y="67" text-anchor="middle" class="tb">18 %</text>
<rect x="427.2" y="40" width="30.8" height="44" fill="#dcfce7" stroke="#0d9488"/>
<rect x="458.0" y="40" width="13.2" height="44" fill="#eef3fb" stroke="#2563eb"/>
<text x="194" y="104" text-anchor="middle" class="small2">directa a la Tierra</text>
<text x="387" y="104" text-anchor="middle" class="small2">absorbida</text>
<line x1="455" y1="84" x2="455" y2="120" class="dash"/><text x="455" y="132" text-anchor="middle" class="small2">7 % difusa a tierra</text>
<line x1="474" y1="84" x2="490" y2="144" class="dash"/><text x="480" y="156" text-anchor="middle" class="small2">3 % al espacio</text>
<text x="40" y="186" class="tb">Reparto del 18 % absorbido</text>
<rect x="40" y="194" width="10" height="10" fill="#fde2e1" stroke="#c2413b"/><text x="56" y="204" class="small2">Ozono: 2 %</text>
<rect x="205" y="194" width="10" height="10" fill="#fde2e1" stroke="#c2413b"/><text x="221" y="204" class="small2">Polvo alto: 1 %</text>
<rect x="370" y="194" width="10" height="10" fill="#fde2e1" stroke="#c2413b"/><text x="386" y="204" class="small2">Moléculas de aire: 8 %</text>
<rect x="40" y="216" width="10" height="10" fill="#fde2e1" stroke="#c2413b"/><text x="56" y="226" class="small2">Vapor de agua: 6 %</text>
<rect x="205" y="216" width="10" height="10" fill="#fde2e1" stroke="#c2413b"/><text x="221" y="226" class="small2">Polvo bajo: 1 %</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-geometria", h4: "Irradiación en día claro", cap: "Radiación directa en día claro a 40º N (diap. 10): en junio el día dura casi 15 h y el pico ronda 1,05 kW/m²; en diciembre, unas 9 h y ≈ 0,8 kW/m². Curvas esquemáticas con las horas de salida y puesta de la simulación.", svg: `<svg class="dg" viewBox="0 0 560 240" role="img" aria-label="Curvas de radiación directa diaria en marzo, junio y diciembre a 40 grados norte">
<line x1="60" y1="210" x2="500" y2="210" class="ax"/><line x1="60" y1="210" x2="60" y2="40" class="ax"/>
<line x1="60" y1="182.7" x2="500" y2="182.7" class="grid"/><text x="54" y="186.7" text-anchor="end" class="small2">0,2</text>
<line x1="60" y1="155.5" x2="500" y2="155.5" class="grid"/><text x="54" y="159.5" text-anchor="end" class="small2">0,4</text>
<line x1="60" y1="128.2" x2="500" y2="128.2" class="grid"/><text x="54" y="132.2" text-anchor="end" class="small2">0,6</text>
<line x1="60" y1="100.9" x2="500" y2="100.9" class="grid"/><text x="54" y="104.9" text-anchor="end" class="small2">0,8</text>
<line x1="60" y1="73.6" x2="500" y2="73.6" class="grid"/><text x="54" y="77.6" text-anchor="end" class="small2">1,0</text>
<text x="60.0" y="226" text-anchor="middle" class="small2">0 h</text>
<text x="170.0" y="226" text-anchor="middle" class="small2">6 h</text>
<text x="280.0" y="226" text-anchor="middle" class="small2">12 h</text>
<text x="390.0" y="226" text-anchor="middle" class="small2">18 h</text>
<text x="500.0" y="226" text-anchor="middle" class="small2">24 h</text>
<text x="64" y="34" class="small2 mut">radiación directa (kW/m²)</text>
<path d="M143.7,210.0 L152.8,158.2 L161.9,139.4 L170.9,125.6 L180.0,114.5 L189.1,105.2 L198.2,97.3 L207.2,90.5 L216.3,84.7 L225.4,79.8 L234.5,75.8 L243.5,72.5 L252.6,70.0 L261.7,68.2 L270.8,67.2 L279.8,66.8 L288.9,67.2 L298.0,68.2 L307.1,70.0 L316.1,72.5 L325.2,75.8 L334.3,79.8 L343.4,84.7 L352.4,90.5 L361.5,97.3 L370.6,105.2 L379.7,114.5 L388.7,125.6 L397.8,139.4 L406.9,158.2 L416.0,210.0" fill="none" stroke="#d97706" stroke-width="2.2"/>
<path d="M170.3,210.0 L177.6,165.6 L184.9,149.5 L192.2,137.7 L199.5,128.1 L206.8,120.2 L214.1,113.4 L221.4,107.6 L228.7,102.6 L236.0,98.4 L243.3,95.0 L250.6,92.2 L257.9,90.0 L265.2,88.5 L272.5,87.6 L279.8,87.3 L287.1,87.6 L294.5,88.5 L301.8,90.0 L309.1,92.2 L316.4,95.0 L323.7,98.4 L331.0,102.6 L338.3,107.6 L345.6,113.4 L352.9,120.2 L360.2,128.1 L367.5,137.7 L374.8,149.5 L382.1,165.6 L389.4,210.0" fill="none" stroke="#2563eb" stroke-width="2.2"/>
<path d="M196.0,210.0 L201.6,171.0 L207.2,156.9 L212.7,146.5 L218.3,138.1 L223.9,131.1 L229.5,125.2 L235.1,120.1 L240.7,115.7 L246.3,112.1 L251.9,109.0 L257.5,106.6 L263.1,104.7 L268.7,103.3 L274.3,102.5 L279.8,102.3 L285.4,102.5 L291.0,103.3 L296.6,104.7 L302.2,106.6 L307.8,109.0 L313.4,112.1 L319.0,115.7 L324.6,120.1 L330.2,125.2 L335.8,131.1 L341.4,138.1 L346.9,146.5 L352.5,156.9 L358.1,171.0 L363.7,210.0" fill="none" stroke="#0891b2" stroke-width="2.2"/>
<line x1="400" y1="56" x2="418" y2="56" stroke="#d97706" stroke-width="3"/><text x="404" y="70" class="small2"> </text>
<text x="422" y="60" class="small2">21 jun: pico ≈ 1,05</text>
<text x="422" y="73" class="small2 mut">4:34-19:25</text>
<line x1="400" y1="90" x2="418" y2="90" stroke="#2563eb" stroke-width="3"/><text x="404" y="104" class="small2"> </text>
<text x="422" y="94" class="small2">21 mar: pico ≈ 0,9</text>
<text x="422" y="107" class="small2 mut">6:01-17:58</text>
<line x1="400" y1="124" x2="418" y2="124" stroke="#0891b2" stroke-width="3"/><text x="404" y="138" class="small2"> </text>
<text x="422" y="128" class="small2">21 dic: pico ≈ 0,8</text>
<text x="422" y="141" class="small2 mut">7:25-16:34</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-colector", h4: "Componentes del colector de placa plana", cap: "Sección del colector plano (diap. 6) y origen del producto (τα) (diap. 7): la radiación transmitida por la cubierta se absorbe en la placa y lo que esta refleja vuelve en parte desde la cubierta, en una serie geométrica.", svg: `<svg class="dg" viewBox="0 0 520 256" role="img" aria-label="Sección de un colector plano con las reflexiones múltiples entre placa y cubierta">
<defs><marker id="solAr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#c2413b"/></marker></defs>
<rect x="40" y="60" width="300" height="14" fill="#93c5fd" stroke="#1e40af"/>
<rect x="40" y="74" width="300" height="56" fill="#ecfeff" stroke="#0891b2"/>
<rect x="40" y="130" width="300" height="10" fill="#fdba74" stroke="#c2413b"/>
<rect x="40" y="140" width="300" height="60" fill="#fef3c7" stroke="#d97706"/>
<circle cx="90" cy="158" r="14" fill="#64748b"/><circle cx="90" cy="158" r="8" fill="#bfdbfe"/>
<circle cx="190" cy="158" r="14" fill="#64748b"/><circle cx="190" cy="158" r="8" fill="#bfdbfe"/>
<circle cx="290" cy="158" r="14" fill="#64748b"/><circle cx="290" cy="158" r="8" fill="#bfdbfe"/>
<line x1="70" y1="18" x2="110" y2="62" stroke="#c2413b" stroke-width="2.5" marker-end="url(#solAr)"/>
<text x="58" y="16" class="small2 tb">G</text>
<line x1="112" y1="74" x2="130" y2="128" stroke="#c2413b" stroke-width="1.8" marker-end="url(#solAr)"/>
<text x="108" y="106" text-anchor="end" class="small2">τ</text>
<line x1="132" y1="129" x2="170" y2="76" stroke="#c2413b" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#solAr)"/>
<text x="156" y="124" class="small2">(1−α)τ</text>
<line x1="172" y1="76" x2="230" y2="128" stroke="#c2413b" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#solAr)"/>
<text x="222" y="100" class="small2">(1−α)τρ<tspan baseline-shift="sub" font-size="9">d</tspan></text>
<text x="350" y="70" class="small2 tb">Cubierta transparente</text>
<text x="350" y="104" class="small2">Cámara de aire</text>
<text x="350" y="139" class="small2 tb">Placa absorbente</text>
<text x="350" y="162" class="small2">Tubos con el fluido</text>
<text x="350" y="190" class="small2">Aislamiento</text>
<text x="40" y="226" class="small2">Cada rebote placa-cubierta devuelve una fracción (1−α)ρ<tspan baseline-shift="sub" font-size="9">d</tspan>:</text>
<text x="40" y="244" class="small2 tb">(τα) = τα / [1 − (1 − α)ρ<tspan baseline-shift="sub" font-size="9">d</tspan>]  &gt;  τ·α</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-concentracion", h4: "Razón de concentración y temperatura máxima", cap: "Temperatura máxima de equilibrio de un receptor, T = (α·c·G/(ε·σ))<sup>1/4</sup>, con α = ε y G = 1353 W/m² (diap. 20). Por la raíz cuarta, cada década de concentración multiplica la temperatura solo por 10<sup>1/4</sup> ≈ 1,78, hasta el techo de 5780 K.", svg: `<svg class="dg" viewBox="0 0 520 260" role="img" aria-label="Curva de temperatura máxima frente a razón de concentración">
<line x1="70" y1="220" x2="480" y2="220" class="ax"/><line x1="70" y1="220" x2="70" y2="40" class="ax"/>
<line x1="70" y1="191.7" x2="480" y2="191.7" class="grid"/><text x="64" y="195.7" text-anchor="end" class="small2">1000</text>
<line x1="70" y1="163.3" x2="480" y2="163.3" class="grid"/><text x="64" y="167.3" text-anchor="end" class="small2">2000</text>
<line x1="70" y1="135.0" x2="480" y2="135.0" class="grid"/><text x="64" y="139.0" text-anchor="end" class="small2">3000</text>
<line x1="70" y1="106.7" x2="480" y2="106.7" class="grid"/><text x="64" y="110.7" text-anchor="end" class="small2">4000</text>
<line x1="70" y1="78.3" x2="480" y2="78.3" class="grid"/><text x="64" y="82.3" text-anchor="end" class="small2">5000</text>
<line x1="70" y1="50.0" x2="480" y2="50.0" class="grid"/><text x="64" y="54.0" text-anchor="end" class="small2">6000</text>
<text x="70.0" y="236" text-anchor="middle" class="small2">1</text>
<text x="155.8" y="236" text-anchor="middle" class="small2">10</text>
<text x="241.6" y="236" text-anchor="middle" class="small2">10²</text>
<text x="327.4" y="236" text-anchor="middle" class="small2">10³</text>
<text x="413.1" y="236" text-anchor="middle" class="small2">10⁴</text>
<path d="M70.0,208.9 L78.0,208.2 L86.0,207.6 L94.0,206.9 L102.0,206.2 L110.0,205.4 L118.0,204.6 L126.0,203.8 L134.0,202.9 L142.0,201.9 L150.0,201.0 L158.0,199.9 L166.0,198.8 L174.0,197.6 L182.0,196.4 L190.0,195.1 L198.0,193.7 L206.0,192.3 L214.0,190.7 L222.0,189.1 L230.0,187.4 L238.0,185.6 L246.0,183.7 L254.0,181.7 L262.0,179.6 L270.0,177.4 L278.0,175.0 L286.0,172.6 L294.0,169.9 L302.0,167.2 L310.0,164.3 L318.0,161.2 L326.0,157.9 L334.0,154.5 L342.0,150.9 L350.0,147.1 L358.0,143.1 L366.0,138.8 L374.0,134.4 L382.0,129.6 L390.0,124.7 L398.0,119.4 L406.0,113.9 L414.0,108.0 L422.0,101.8 L430.0,95.3 L438.0,88.4 L446.0,81.2 L454.0,73.5 L462.0,65.4 L470.0,56.9" class="ln" fill="none"/>
<line x1="70" y1="56.2" x2="470" y2="56.2" class="dash"/>
<text x="80" y="50.2" class="small2 ko">T del Sol = 5780 K (c ≈ 46000)</text>
<circle cx="70.0" cy="208.9" r="3.5" fill="#d97706"/><text x="78.0" y="200.9" class="small2">≈ 390 K</text>
<circle cx="241.6" cy="184.8" r="3.5" fill="#d97706"/><text x="249.6" y="198.8" class="small2">≈ 1240 K</text>
<circle cx="327.4" cy="157.4" r="3.5" fill="#d97706"/><text x="335.4" y="171.4" class="small2">≈ 2210 K</text>
<circle cx="413.1" cy="108.6" r="3.5" fill="#d97706"/><text x="421.1" y="122.6" class="small2">≈ 3930 K</text>
<text x="275" y="252" text-anchor="middle" class="small2 mut">razón de concentración c (escala logarítmica)</text>
<text x="74" y="34" class="small2 mut">T máx (K), α = ε, G = 1353 W/m²</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-termoelectrica", h4: "Discos parabólicos y torre central", cap: "Razones de concentración, temperaturas y fluidos de las cuatro tecnologías de concentración según las diap. 22-27. Foco lineal (Fresnel, CCP) frente a foco puntual (torre, disco). La barra del disco solo indica «más de 2000».", svg: `<svg class="dg" viewBox="0 0 520 244" role="img" aria-label="Barras de razón de concentración de Fresnel, cilindro-parabólico, torre y disco">
<line x1="150" y1="200" x2="486" y2="200" class="ax"/>
<line x1="150.0" y1="30" x2="150.0" y2="200" class="grid"/><text x="150.0" y="216" text-anchor="middle" class="small2">1</text>
<line x1="230.0" y1="30" x2="230.0" y2="200" class="grid"/><text x="230.0" y="216" text-anchor="middle" class="small2">10</text>
<line x1="310.0" y1="30" x2="310.0" y2="200" class="grid"/><text x="310.0" y="216" text-anchor="middle" class="small2">100</text>
<line x1="390.0" y1="30" x2="390.0" y2="200" class="grid"/><text x="390.0" y="216" text-anchor="middle" class="small2">1000</text>
<line x1="470.0" y1="30" x2="470.0" y2="200" class="grid"/><text x="470.0" y="216" text-anchor="middle" class="small2">10⁴</text>
<text x="144" y="52" text-anchor="end" class="small2 tb">Fresnel lineal</text>
<rect x="254.1" y="39" width="31.8" height="18" rx="3" fill="#0891b2" opacity="0.85"/>
<text x="291.9" y="52" text-anchor="start" class="small2">20-50</text>
<text x="270.0" y="72" text-anchor="middle" class="small2 mut">350 ºC · agua/aceite</text>
<text x="144" y="92" text-anchor="end" class="small2 tb">Cilindro-parabólico</text>
<rect x="268.2" y="79" width="38.2" height="18" rx="3" fill="#2563eb" opacity="0.85"/>
<text x="312.3" y="92" text-anchor="start" class="small2">30-90</text>
<text x="287.3" y="112" text-anchor="middle" class="small2 mut">450 ºC · agua/aceite</text>
<text x="144" y="132" text-anchor="end" class="small2 tb">Torre central</text>
<rect x="334.1" y="119" width="55.9" height="18" rx="3" fill="#d97706" opacity="0.85"/>
<text x="396.0" y="132" text-anchor="start" class="small2">200-1000</text>
<text x="362.0" y="152" text-anchor="middle" class="small2 mut">565 ºC · sales</text>
<text x="144" y="172" text-anchor="end" class="small2 tb">Disco parabólico</text>
<rect x="414.1" y="159" width="48.2" height="18" rx="3" fill="#c2413b" opacity="0.85"/>
<text x="408.1" y="172" text-anchor="end" class="small2">&gt; 2000</text>
<text x="462.2" y="192" text-anchor="end" class="small2 mut">650-800 ºC · Stirling</text>
<text x="318" y="234" text-anchor="middle" class="small2 mut">razón de concentración (escala logarítmica)</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-celula", h4: "Espectro solar y eficiencia máxima del c-Si", cap: "Arriba, reparto del espectro solar a nivel del mar. Abajo, por qué una célula de silicio cristalino no puede superar el 50 %: un 20 % de la energía no llega a crear pares y un 30 % se pierde como exceso de energía.", svg: `<svg class="dg" viewBox="0 0 560 236" role="img" aria-label="Barras del espectro solar y de las pérdidas en una célula de silicio">
<text x="40" y="24" class="tb">Espectro a nivel del mar (diap. 12)</text>
<rect x="40.0" y="34" width="8.8" height="34" fill="#ede9fe" stroke="#7c3aed"/>
<rect x="48.8" y="34" width="206.8" height="34" fill="#fef3c7" stroke="#d97706"/>
<text x="152.2" y="56" text-anchor="middle" class="small2 tb">Visible 47 %</text>
<rect x="255.6" y="34" width="224.4" height="34" fill="#fde2e1" stroke="#c2413b"/>
<text x="367.8" y="56" text-anchor="middle" class="small2 tb">Infrarrojo 51 %</text>
<text x="44" y="84" class="small2">UV 2 % (λ ≤ 0,38 µm)</text><text x="480" y="84" text-anchor="end" class="small2">0,78-2,5 µm</text>
<text x="40" y="118" class="tb">Energía solar en una célula de c-Si (diap. 13)</text>
<rect x="40.0" y="128" width="220.0" height="34" fill="#dcfce7" stroke="#0d9488"/>
<text x="150.0" y="150" text-anchor="middle" class="small2 tb">Aprovechable ≤ 50 %</text>
<rect x="260.0" y="128" width="132.0" height="34" fill="#fef3c7" stroke="#d97706"/>
<text x="326.0" y="150" text-anchor="middle" class="small2 tb">Exceso ≈ 30 %</text>
<rect x="392.0" y="128" width="88.0" height="34" fill="#eef3fb" stroke="#64748b"/>
<text x="436.0" y="150" text-anchor="middle" class="small2 tb">E &lt; E<tspan baseline-shift='sub' font-size='9'>G</tspan> ≈ 20 %</text>
<text x="40" y="186" class="small2">• ≈ 20 %: fotones con menos energía que la banda prohibida (λ &gt; 1,11 µm): no crean pares.</text>
<text x="40" y="204" class="small2">• ≈ 30 %: exceso de energía de fotones de λ mucho menor que 1,11 µm (se pierde como calor).</text>
<text x="40" y="222" class="small2">• Banda prohibida del Si: 1100 nm ≈ 1,1 eV.</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-curvaiv", h4: "Influencia de la irradiancia", cap: "Curvas I-V esquemáticas del módulo de las diap. 18-19: la irradiancia escala la corriente (16 → 3,2 A) y apenas mueve V<sub>oc</sub>; la temperatura recorta la tensión (≈ 48 → 41 V) y casi no cambia la corriente.", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Curvas I-V frente a irradiancia y temperatura">
<line x1="55" y1="210" x2="250" y2="210" class="ax"/><line x1="55" y1="210" x2="55" y2="50" class="ax"/>
<line x1="55" y1="174.7" x2="250" y2="174.7" class="grid"/><text x="50" y="178.7" text-anchor="end" class="small2">4</text>
<line x1="55" y1="139.4" x2="250" y2="139.4" class="grid"/><text x="50" y="143.4" text-anchor="end" class="small2">8</text>
<line x1="55" y1="104.1" x2="250" y2="104.1" class="grid"/><text x="50" y="108.1" text-anchor="end" class="small2">12</text>
<line x1="55" y1="68.8" x2="250" y2="68.8" class="grid"/><text x="50" y="72.8" text-anchor="end" class="small2">16</text>
<text x="55.0" y="226" text-anchor="middle" class="small2">0</text>
<text x="131.0" y="226" text-anchor="middle" class="small2">20</text>
<text x="207.0" y="226" text-anchor="middle" class="small2">40</text>
<text x="152" y="34" text-anchor="middle" class="small2 tb">Efecto de la irradiancia (25 ºC)</text>
<text x="152" y="242" text-anchor="middle" class="small2 mut">tensión (V) · corriente (A)</text>
<line x1="305" y1="210" x2="500" y2="210" class="ax"/><line x1="305" y1="210" x2="305" y2="50" class="ax"/>
<line x1="305" y1="174.7" x2="500" y2="174.7" class="grid"/><text x="300" y="178.7" text-anchor="end" class="small2">4</text>
<line x1="305" y1="139.4" x2="500" y2="139.4" class="grid"/><text x="300" y="143.4" text-anchor="end" class="small2">8</text>
<line x1="305" y1="104.1" x2="500" y2="104.1" class="grid"/><text x="300" y="108.1" text-anchor="end" class="small2">12</text>
<line x1="305" y1="68.8" x2="500" y2="68.8" class="grid"/><text x="300" y="72.8" text-anchor="end" class="small2">16</text>
<text x="305.0" y="226" text-anchor="middle" class="small2">0</text>
<text x="381.0" y="226" text-anchor="middle" class="small2">20</text>
<text x="457.0" y="226" text-anchor="middle" class="small2">40</text>
<text x="402" y="34" text-anchor="middle" class="small2 tb">Efecto de la temperatura (1000 W/m²)</text>
<text x="402" y="242" text-anchor="middle" class="small2 mut">tensión (V) · corriente (A)</text>
<path d="M55.0,68.8 L144.3,68.8 L180.0,68.8 L197.9,69.2 L206.8,70.5 L212.2,73.0 L215.7,76.3 L219.3,82.3 L222.9,93.1 L226.5,112.4 L230.0,147.3 L231.8,174.1 L233.6,210.0" fill="none" stroke="#d97706" stroke-width="2"/>
<text x="70" y="63.8" class="small2">1000 W/m²: ≈ 16 A</text>
<path d="M55.0,125.3 L142.4,125.3 L177.4,125.3 L194.8,125.6 L203.6,126.4 L208.8,128.0 L212.3,130.1 L215.8,133.8 L219.3,140.4 L222.8,152.1 L226.3,173.0 L228.1,188.8 L229.8,210.0" fill="none" stroke="#2563eb" stroke-width="2"/>
<text x="70" y="120.3" class="small2">600 W/m²: ≈ 9,6 A</text>
<path d="M55.0,181.8 L138.6,181.8 L172.0,181.8 L188.8,181.9 L197.1,182.2 L202.1,182.8 L205.5,183.6 L208.8,184.9 L212.2,187.2 L215.5,191.2 L218.9,198.1 L220.5,203.2 L222.2,210.0" fill="none" stroke="#0891b2" stroke-width="2"/>
<text x="70" y="176.8" class="small2">200 W/m²: ≈ 3,2 A</text>
<path d="M305.0,70.6 L397.1,70.6 L434.0,70.7 L452.4,71.7 L461.7,74.3 L467.2,78.2 L470.9,82.9 L474.6,90.6 L478.2,103.1 L481.9,123.4 L485.6,156.4 L487.5,180.0 L489.3,210.0" fill="none" stroke="#2563eb" stroke-width="2"/>
<path d="M305.0,69.7 L393.4,69.7 L428.7,69.8 L446.4,71.0 L455.2,74.0 L460.5,78.3 L464.0,83.4 L467.6,91.5 L471.1,104.5 L474.6,125.1 L478.2,157.8 L479.9,180.9 L481.7,210.0" fill="none" stroke="#0d9488" stroke-width="2"/>
<path d="M305.0,67.9 L383.9,67.9 L415.4,68.2 L431.2,70.2 L439.0,74.3 L443.8,79.7 L446.9,85.8 L450.1,95.0 L453.2,108.8 L456.4,129.9 L459.5,161.7 L461.1,183.4 L462.7,210.0" fill="none" stroke="#c2413b" stroke-width="2"/>
<line x1="316" y1="106" x2="330" y2="106" stroke="#2563eb" stroke-width="3"/><text x="334" y="110" class="small2">10 ºC: V<tspan baseline-shift="sub" font-size="9">oc</tspan> ≈ 48,5 V</text>
<line x1="316" y1="126" x2="330" y2="126" stroke="#0d9488" stroke-width="3"/><text x="334" y="130" class="small2">25 ºC: V<tspan baseline-shift="sub" font-size="9">oc</tspan> ≈ 46,5 V</text>
<line x1="316" y1="146" x2="330" y2="146" stroke="#c2413b" stroke-width="3"/><text x="334" y="150" class="small2">70 ºC: V<tspan baseline-shift="sub" font-size="9">oc</tspan> ≈ 41,5 V</text>
</svg>` });
DIAGRAMS.push({ sec: "sol-fvmercado", h4: "Instalación aislada", cap: "Esquema de una instalación fotovoltaica aislada (diap. 7): el regulador gobierna la carga de los acumuladores y alimenta los consumos en continua; el inversor alimenta los de alterna. En los esquemas de conexión a red y de autoconsumo no aparecen acumuladores: el inversor va a un contador (bidireccional en autoconsumo, diap. 8-9).", svg: `<svg class="dg" viewBox="0 0 520 240" role="img" aria-label="Esquema de bloques de una instalación fotovoltaica aislada">
<defs><marker id="solAr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e40af"/></marker></defs>
<rect x="20" y="90" width="110" height="44" rx="6" fill="#fef3c7" stroke="#d97706"/>
<text x="75.0" y="109.0" text-anchor="middle" class="small2 tb">Módulos FV</text>
<text x="75.0" y="124.0" text-anchor="middle" class="small2">corriente continua</text>
<rect x="175" y="90" width="100" height="44" rx="6" fill="#eef3fb" stroke="#2563eb"/>
<text x="225.0" y="116.0" text-anchor="middle" class="small2 tb">Regulador</text>
<rect x="320" y="90" width="90" height="44" rx="6" fill="#eef3fb" stroke="#2563eb"/>
<text x="365.0" y="109.0" text-anchor="middle" class="small2 tb">Inversor</text>
<text x="365.0" y="124.0" text-anchor="middle" class="small2">CC → CA</text>
<rect x="175" y="190" width="100" height="40" rx="6" fill="#dcfce7" stroke="#0d9488"/>
<text x="225.0" y="214.0" text-anchor="middle" class="small2 tb">Acumuladores</text>
<rect x="175" y="10" width="100" height="40" rx="6" fill="#f1f5fd" stroke="#64748b"/>
<text x="225.0" y="34.0" text-anchor="middle" class="small2 tb">Consumos CC</text>
<rect x="440" y="90" width="70" height="44" rx="6" fill="#f1f5fd" stroke="#64748b"/>
<text x="475.0" y="109.0" text-anchor="middle" class="small2 tb">Consumos</text>
<text x="475.0" y="124.0" text-anchor="middle" class="small2">CA</text>
<line x1="130" y1="112" x2="173" y2="112" stroke="#1e40af" stroke-width="1.8" marker-end="url(#solAr2)"/>
<line x1="275" y1="112" x2="318" y2="112" stroke="#1e40af" stroke-width="1.8" marker-end="url(#solAr2)"/>
<line x1="410" y1="112" x2="438" y2="112" stroke="#1e40af" stroke-width="1.8" marker-end="url(#solAr2)"/>
<line x1="225" y1="90" x2="225" y2="52" stroke="#1e40af" stroke-width="1.8" marker-end="url(#solAr2)"/>
<line x1="225" y1="134" x2="225" y2="188" stroke="#1e40af" stroke-width="1.8" marker-end="url(#solAr2)"/>
<text x="232" y="166" class="small2 mut">carga y descarga</text>
</svg>` });
