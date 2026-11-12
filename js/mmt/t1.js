/* Tema 1 · Fundamentos de máquinas y motores térmicos
   fuente: T1_FundsMaqYMotTerm2026.pdf (deck "T1", 54 diapositivas; diap. N = página N del PDF) */

THEORY.T1 = {
  summary: [
    "<b>Máquina de fluido</b>: intercambia energía mecánica con el exterior a través de un <b>eje</b> mediante la variación de energía del fluido que la atraviesa. <b>Hidráulica</b> = fluido incompresible (varía su energía mecánica); <b>térmica</b> = fluido <b>compresible</b> (varía su energía térmica y mecánica).",
    "<b>Motor térmico</b>: conjunto de elementos que obtiene energía mecánica a partir del <b>estado térmico</b> generado por combustión, reacción nuclear, radiación solar concentrada o, en general, un intercambiador de calor. Un motor térmico se compone de <b>varias máquinas térmicas</b>.",
    "Máquinas térmicas <b>motoras (expansores)</b>: el fluido reduce su estado térmico y se obtiene trabajo; <b>generadoras (compresores)</b>: el fluido aumenta su estado térmico y se aporta trabajo.",
    "<b>Volumétricas</b>: variación del volumen de control, flujo discontinuo, velocidades bajas (pequeños caudales), baja fricción fluida, <b>no adiabáticas</b>; alternativas o rotativas. <b>Turbomáquinas</b>: acción dinámica, rotativas, flujo continuo, altas velocidades (grandes caudales), alta fricción, <b>adiabáticas</b>.",
    "Motores térmicos se clasifican por: renovación del fluido (<b>ciclo abierto / cerrado</b>), lugar de generación del estado térmico (<b>combustión interna / externa</b>) y forma de obtener la potencia (<b>eje rotativo / reacción</b>).",
    "Ciclo cerrado ⇒ <b>debe</b> ser de combustión externa (condiciona la T atmosférica). Combustión interna ⇒ <b>debe</b> ser de ciclo abierto (condiciona la p atmosférica). Los de combustión externa <b>suelen</b> ser de ciclo cerrado; los de ciclo abierto <b>suelen</b> ser de combustión interna.",
    "Rendimiento térmico: $\\eta_t = \\dot W_e/\\dot Q_h$ (combustión externa) y $\\eta_t = \\dot W_e/(\\dot m_f H_c)$ (combustión interna). En eje: $\\dot W_e = M_e\\,2\\pi n$; reacción: $F_p = \\dot m (V_s - V_e)$, $\\dot W_p = F_p V_0$.",
    "Cifras clave: TV hasta <b>45 %</b> (CCE, cualquier combustible, arranques lentos); TG hasta <b>40 %</b> y <b>600 MW</b> (CCI, arranques muy rápidos, combustible de alta calidad); ciclo combinado hasta <b>63 %</b> y <b>1200 MW</b>; MCIA hasta <b>52 %</b> y <b>80 MW</b>.",
    "Cohetes: llevan combustible <b>y comburente</b> (funcionan en vacío). Aerorreactores: comburente = aire; <b>sin compresor</b> (estatorreactor, pulsorreactor; no arrancan parados) o <b>con compresor</b> (turborreactor, turbofán). El <b>turbohélice no es aerorreactor</b> (potencia en eje).",
    "Máquina de vapor (≤ 5 %), Stirling (CCE, micro-CHP, disco Stirling), Wankel (CCI volumétrico rotativo), ORC (fluido orgánico, &lt; 300 ºC, ≤ 25 %), sCO2 (TG de ciclo cerrado, &gt; 550 ºC, ≤ 50 % previsto).",
    "<b>Ciclo combinado</b>: el escape de un MCI alimenta un MCE; ambos dan potencia mecánica. <b>Cogeneración</b>: energía mecánica + térmica; $\\eta_t = (\\dot W_t + \\dot Q_{pi})/(\\dot m_f H_c)$ y $\\eta_{t_{ee}} = \\dot W_t/(\\dot m_f H_c - \\dot Q_{pi}/\\eta_c)$.",
    "Combustión <b>premezclada</b> (frente de llama: deflagración subsónica o detonación supersónica; o autoinflamación) frente a combustión por <b>difusión</b> (se mezcla mientras quema).",
    "$C_xH_y + a(O_2 + 3{,}76N_2)$ con $a = x + y/4$; $F_e = \\dfrac{12x + y}{137{,}28\\,(x + y/4)}$; $F_R = F/F_e$, $\\lambda = 1/F_R$; pobre $F_R \\lt 1$, rica $F_R \\gt 1$. CO2: $44/(12 + y/x)$ kg/kg de combustible.",
    "Contaminantes <b>primarios</b> (CO, NOx, HC-COV, SOx, PM) y <b>secundarios</b> (O3, ácidos, aldehídos). El CO2 es gas de efecto invernadero (nivel <b>planetario</b>), no contaminante. NOx: máximo con $F_R \\approx 0{,}9$; CO: muerte dulce; PM &lt; 2,5 µm llegan a los alveolos."
  ],
  sections: [
    { id: "t1-definiciones", title: "1. Definiciones y cuadro de transformaciones energéticas", slides: ["T1", 4, 8], html: `
<p>El tema arranca fijando el vocabulario que usa toda la asignatura: <b>máquina de fluido</b>, <b>máquina térmica</b> y <b>motor térmico</b> no son sinónimos (diap. 4-6). Muchas preguntas de examen juegan precisamente con esa diferencia.</p>
<h4>Máquina de fluido: hidráulica frente a térmica</h4>
<p><b>Máquina de fluido</b>: conjunto de elementos mecánicos que permiten <b>intercambiar energía mecánica</b> con el exterior a través de un <b>eje</b> mediante la <b>variación de energía del fluido</b> que atraviesa la máquina (diap. 4).</p>
<ul>
<li><b>Máquina hidráulica</b>: fluido <b>incompresible</b> (o que se comporta como tal); varía la energía <b>mecánica</b> del fluido. Ejemplos de la diapositiva: bomba de engranajes, turbina Pelton, aerogenerador (el aire a baja velocidad se comporta como incompresible).</li>
<li><b>Máquina térmica</b>: fluido <b>compresible</b>; varía la energía <b>térmica (y mecánica)</b> del fluido. Ejemplos: rotor de turbina, compresor de tornillo, turbocompresor axial.</li>
</ul>
<p>Lo que distingue a una de otra no es el tamaño ni el tipo de rotor, sino si la <b>compresibilidad</b> del fluido (y por tanto su estado térmico) interviene en el intercambio de energía.</p>
<h4>Máquina térmica</h4>
<p><b>Máquina térmica</b>: máquina de fluido <b>compresible</b> que intercambia energía mecánica con el exterior a través de la variación de la <b>energía térmica de un fluido que la atraviesa</b> (diap. 5).</p>
<p>En el esquema entra un caudal $\\dot m$ con energía $E_{in}$ y sale con $E_{out}$; se intercambia el trabajo mecánico $\\dot W_e$ (flecha de <b>doble sentido</b>: se puede obtener o aportar) y hay unas pérdidas de calor $\\dot Q_{loss}$. Una sola máquina térmica (un compresor, una turbina) <b>no es un motor</b>: no genera por sí misma el estado térmico.</p>
<h4>Motor térmico</h4>
<p><b>Motor térmico</b>: conjunto de elementos mecánicos que permiten <b>obtener energía mecánica</b>, generalmente a través de un eje, mediante el <b>estado térmico generado</b> en una reacción de <b>combustión</b>, una <b>reacción nuclear</b>, <b>concentración de radiación solar</b> o, de forma general, un <b>intercambiador de calor</b> (diap. 6).</p>
<p>La diapositiva dibuja dos balances:</p>
<ul>
<li>Con aporte de calor externo: entra $\\dot Q_{hot}$, sale $\\dot W_e$, se cede $\\dot Q_{cold}$ y hay pérdidas $\\dot Q_{loss}$.</li>
<li>Con combustión en el propio fluido: entran aire $\\dot m_a$ y combustible con su energía $\\dot m_f H_c$; salen $\\dot W_e$, los gases de escape $\\dot m_{ge}$ y las pérdidas $\\dot Q_{loss}$.</li>
</ul>
<p>Un motor térmico está formado por <b>varias máquinas térmicas</b> (por ejemplo, compresor + turbina en una turbina de gas) más los elementos que generan el estado térmico (cámara de combustión, caldera, intercambiadores), que no son máquinas porque no intercambian trabajo.</p>
<h4>Cuadro de las transformaciones energéticas</h4>
<p>La diap. 8 sitúa estas definiciones en el mapa de las transformaciones entre cuatro formas de energía:</p>
<ul>
<li><b>Energía asociada a la constitución de la materia</b> → <b>energía térmica</b>: <b>combustión</b> y <b>reacción nuclear</b>. En sentido contrario, la <b>fotosíntesis</b>.</li>
<li>Materia ↔ electromagnética: <b>batería</b> (de materia a eléctrica) y <b>electrólisis</b> (de eléctrica a materia).</li>
<li>Electromagnética ↔ mecánica: <b>motor</b> eléctrico y <b>generador</b>. Electromagnética → térmica: <b>resistencia eléctrica</b>; térmica → electromagnética: <b>efecto Seebeck</b> y <b>PV</b>.</li>
<li>Térmica ↔ mecánica: la <b>máquina térmica</b>, <b>motora</b> (de térmica a mecánica) o <b>generadora</b> (de mecánica a térmica). La <b>máquina hidráulica</b> va de mecánica a mecánica.</li>
<li>Aportes directos de energía térmica: <b>geotermia</b> y <b>colector solar</b>.</li>
</ul>
<p>La zona sombreada «<b>motor térmico</b>» abarca el camino completo <b>materia → térmica → mecánica</b> (o fuente de calor → térmica → mecánica): eso es lo que hace un motor y no una máquina aislada. Una <b>pila de combustible</b> o una <b>batería</b> transforman la energía química en <b>electromagnética</b>, no pasan por el estado térmico.</p>
` },
    { id: "t1-maquinas", title: "2. Clasificación de las máquinas térmicas", slides: ["T1", 10, 13], html: `
<p>Las máquinas térmicas se clasifican con dos criterios independientes: el <b>sentido</b> del intercambio de energía (motoras o generadoras) y el <b>principio de funcionamiento</b> (volumétricas o turbomáquinas) (diap. 10).</p>
<h4>Motoras y generadoras</h4>
<ul>
<li><b>Motoras o expansores</b>: el fluido <b>reduce</b> su estado térmico; se <b>obtiene</b> energía mecánica a través de un eje (u otro elemento). En el dibujo, $E_{entrada} \\gt E_{salida}$ y $W_{obtenido}$. Ejemplos: turbinas, expansores.</li>
<li><b>Generadoras o compresores</b>: el fluido <b>aumenta</b> su estado térmico; se <b>requiere</b> energía mecánica a través de un eje. En el dibujo, $E_{entrada} \\lt E_{salida}$ y $W_{aportado}$. Ejemplos: compresores, soplantes.</li>
</ul>
<p>Ojo con los nombres: «turbocompresor» es una máquina <b>generadora</b> (aunque lleve «turbo»), y una turbina centrípeta es <b>motora</b>. Un «grupo turbo» de sobrealimentación es un conjunto de dos máquinas (turbina + compresor).</p>
<h4>Volumétricas frente a turbomáquinas</h4>
<table class="tbl"><tr><th>Volumétricas</th><th>Turbomáquinas (máquinas dinámicas)</th></tr>
<tr><td>Variación del <b>volumen de control</b></td><td><b>Acción dinámica</b> (cambio de cantidad de movimiento)</td></tr>
<tr><td>Alternativas o rotativas</td><td>Siempre <b>rotativas</b></td></tr>
<tr><td>Flujo <b>discontinuo</b></td><td>Flujo <b>continuo</b></td></tr>
<tr><td>Velocidades bajas → <b>pequeños caudales</b></td><td>Altas velocidades → <b>grandes caudales</b></td></tr>
<tr><td><b>Baja</b> fricción fluida</td><td><b>Alta</b> fricción fluida</td></tr>
<tr><td><b>No adiabáticas</b></td><td><b>Adiabáticas</b></td></tr></table>
<p>La lógica: en una turbomáquina el fluido pasa muy deprisa (no hay tiempo para intercambiar calor → adiabática) y a gran velocidad (más rozamiento). En una volumétrica el fluido permanece encerrado un tiempo en una cámara a baja velocidad (poca fricción, pero intercambia calor con las paredes).</p>
<p>Las volumétricas pueden ser <b>alternativas</b> (pistón) o <b>rotativas</b>. Que una máquina gire <b>no</b> la convierte en turbomáquina: un compresor de tornillo, uno scroll o un Wankel son volumétricos rotativos.</p>
<h4>Volumétricas con y sin compresión interna</h4>
<p><b>Con compresión interna</b> (diap. 11): el volumen de la cámara se reduce dentro de la máquina.</p>
<ul>
<li><b>Alternativo</b>: compresor (o expansor) alternativo de pistón, biela y cigüeñal.</li>
<li><b>Rotativos</b>: compresor (o expansor) de tipo <b>scroll</b> (espirales), de <b>tornillo</b> y de <b>paletas</b>.</li>
</ul>
<p><b>Sin compresión interna</b> (diap. 12): el <b>compresor de Roots</b> (rotativo de lóbulos) traslada el gas de la admisión a la descarga sin reducir su volumen; la presión sube por el reflujo desde la descarga. Fíjate en que el compresor y el expansor alternativo, scroll, de tornillo y de paletas aparecen como máquinas reversibles: la misma geometría sirve de motora o de generadora.</p>
<h4>Turbomáquinas: escalonamientos y tipos</h4>
<p>Las turbomáquinas tienen <b>estructura en escalonamientos</b> (uno o más), compuestos por <b>álabes móviles (rotor)</b> y <b>fijos (estator)</b> (diap. 13). Tipos que muestra la diapositiva:</p>
<ul>
<li><b>Turbocompresor axial</b> y <b>turbina axial</b>.</li>
<li><b>Turbocompresor axio-radial (centrífugo)</b>: el típico del turbo de un coche.</li>
<li><b>Turbina radio-axial (centrípeta)</b> y <b>turbina radial</b>.</li>
</ul>
<p>Centrífugo = el fluido sale hacia fuera (compresor); centrípeta = el fluido entra radialmente hacia el eje (turbina).</p>
` },
    { id: "t1-motores", title: "3. Clasificación de los motores térmicos", slides: ["T1", 15, 19], html: `
<p>Una vez definidas las máquinas, los <b>motores</b> se clasifican con tres criterios que se combinan entre sí (diap. 15-19).</p>
<h4>Las tres clasificaciones</h4>
<ul>
<li>Según la <b>renovación del fluido de trabajo</b>: <b>ciclo abierto</b> o <b>ciclo cerrado</b>.</li>
<li>Según el <b>lugar de generación del estado térmico</b>: <b>combustión interna</b> o <b>combustión externa</b>.</li>
<li>Según la <b>forma de obtener la potencia</b>: <b>eje rotativo</b> (motores <b>volumétricos</b> y motores de <b>flujo continuo</b>) o <b>de reacción</b> (<b>cohetes</b> y <b>aerorreactores</b>, estos <b>sin</b> o <b>con compresor</b>).</li>
</ul>
<h4>Ciclo abierto y ciclo cerrado</h4>
<table class="tbl"><tr><th>Ciclo cerrado</th><th>Ciclo abierto</th></tr>
<tr><td>El fluido se somete al ciclo de trabajo de forma <b>cíclica</b></td><td>El fluido se <b>renueva</b> de forma continua: se somete al ciclo <b>una sola vez</b></td></tr>
<tr><td>Aporte y cesión de calor mediante <b>intercambiadores de calor (HX)</b></td><td>La cesión de calor se hace enfriando el fluido <b>tras la descarga, fuera del motor</b></td></tr>
<tr><td>Variable externa que condiciona el ciclo: <b>temperatura atmosférica</b> (T máx. y mín. acotadas)</td><td>Variable externa que condiciona el ciclo: <b>presión atmosférica</b></td></tr>
<tr><td><b>Deben</b> ser de combustión externa</td><td><b>Suelen</b> ser de combustión interna; el fluido <b>no debe tener coste</b></td></tr></table>
<p>Los esquemas (diap. 16) muestran compresor + turbina: en ciclo cerrado hay un HX caliente ($\\dot Q_h$) y otro frío ($\\dot Q_c$); en ciclo abierto el caudal $\\dot m$ entra y sale del motor y no hay HX frío.</p>
<h4>Combustión externa e interna</h4>
<table class="tbl"><tr><th>Combustión externa (o aporte de calor externo)</th><th>Combustión interna</th></tr>
<tr><td>Estado térmico generado por <b>transmisión de calor</b> a través de la superficie de un intercambiador</td><td>Estado térmico generado por <b>combustión en el fluido de trabajo</b></td></tr>
<tr><td>Temperatura máxima <b>limitada</b> (materiales del HX)</td><td>Temperaturas máximas <b>muy altas</b></td></tr>
<tr><td><b>Baja</b> potencia específica</td><td><b>Alta</b> potencia específica</td></tr>
<tr><td>Combustibles de <b>baja</b> calidad</td><td>Combustibles de <b>alta</b> calidad</td></tr>
<tr><td>El fluido <b>no</b> sufre transformación química; <b>suelen</b> ser de ciclo cerrado</td><td>El fluido <b>sí</b> sufre transformación química; <b>deben</b> ser de ciclo abierto</td></tr></table>
<p>El rendimiento térmico se define con la energía que entra en cada caso (diap. 17):</p>
<div class="formula">$$\\eta_t=\\frac{\\dot W_e}{\\dot Q_h}\\ \\text{(comb. externa)}\\qquad \\eta_t=\\frac{\\dot W_e}{\\dot m_f H_c}\\ \\text{(comb. interna)}$$</div>
<p>Atención a la asimetría de los verbos: ciclo cerrado ⇒ <b>debe</b> ser combustión externa; combustión interna ⇒ <b>debe</b> ser ciclo abierto. Pero combustión externa solo «suele» ser ciclo cerrado, y ciclo abierto solo «suele» ser combustión interna.</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> ejemplos de combustión externa con ciclo abierto son la máquina de vapor que descarga el vapor a la atmósfera o una turbina de aire calentada por un intercambiador.</div>
<h4>Potencia en eje o de reacción</h4>
<p><b>Motores de potencia en un eje rotativo</b> (diap. 18): la potencia se transmite a través de un eje.</p>
<div class="formula">$$\\dot W_e=M_e\\,\\omega=M_e\\,2\\pi n$$</div>
<p>Sirven para accionar máquinas (bombas, compresores, alternadores…) y para propulsión con ruedas o hélices. Se clasifican según las máquinas que los componen: <b>motores volumétricos</b> (basados en máquinas volumétricas) y <b>motores de flujo continuo</b> (basados en turbomáquinas).</p>
<p><b>Motores de reacción</b>: la potencia se obtiene expulsando una corriente de fluido a alta velocidad. Se usan <b>únicamente para propulsión</b> y se clasifican según el <b>comburente</b> usado (cohetes o aerorreactores).</p>
<div class="formula">$$\\dot W_e=\\tfrac12\\,\\dot m\\,(V_s^2-V_e^2)\\qquad F_p=\\dot m\\,(V_s-V_e)\\qquad \\dot W_p=F_p\\,V_0$$</div>
<p>$\\dot W_e$ es la potencia que el motor comunica al chorro (aumento de energía cinética), $F_p$ el empuje y $\\dot W_p$ la potencia propulsiva (empuje por la velocidad de vuelo $V_0$). En un aerorreactor $V_e = V_0$.</p>
<h4>Cohetes frente a aerorreactores</h4>
<ul>
<li><b>Cohetes</b> (diap. 19): <b>combustible y comburente</b> son portados por el propio motor (propulsantes <b>líquidos</b> o <b>sólidos</b>). Permiten funcionar en atmósferas <b>anaerobias o en vacío</b> (vuelos espaciales).</li>
<li><b>Aerorreactores</b>: el comburente es el <b>aire atmosférico</b>, así que <b>no</b> valen para funcionar en vacío. Se dividen en <b>sin compresor</b> (no pueden arrancar a velocidad nula) y <b>con compresor</b>.</li>
</ul>
` },
    { id: "t1-turbomotores", title: "4. Turbina de vapor, turbina de gas y ciclo combinado", slides: ["T1", 21, 25], html: `
<p>Los grandes motores térmicos basados en turbomáquinas (motores de flujo continuo) dominan la generación eléctrica. La comparación de sus características es materia típica de examen (diap. 21-25).</p>
<h4>Turbina de vapor</h4>
<p><b>Características</b> (diap. 21):</p>
<ul>
<li>Motor de <b>combustión (o aporte de calor) externa</b> basado en turbomáquinas.</li>
<li><b>Grandes tamaños</b>, <b>baja potencia específica</b>.</li>
<li>Rendimientos <b>hasta 45 %</b>, con pérdidas <b>moderadas</b> a cargas parciales.</li>
<li>Arranques y paradas <b>lentos</b>. Importante coste de mantenimiento.</li>
<li><b>Apto para cualquier combustible</b> (por ser de combustión externa).</li>
</ul>
<p><b>Campos de aplicación</b>: generación eléctrica (<b>nuclear, carbón, biomasa, solar de concentración, geotérmica</b> y ciclos combinados); <b>cogeneración</b> (calefacción de distrito o <i>district heating</i>, industria química); <b>propulsión marina</b> (propulsión nuclear: grandes portaviones, submarinos).</p>
<p>Fíjate en que todas las fuentes «raras» (nuclear, solar, geotermia, biomasa) acaban en turbina de vapor: solo un motor de aporte de calor externo puede aprovecharlas.</p>
<h4>Turbina de gas</h4>
<p><b>Características</b> (diap. 23):</p>
<ul>
<li>Motor de <b>combustión interna</b> basado en turbomáquinas (compresor + cámara de combustión + turbina, diap. 24).</li>
<li>Potencias <b>hasta 600 MW</b>, con <b>muy alta potencia específica</b>.</li>
<li>Rendimientos <b>hasta 40 %</b>, con <b>altas pérdidas a cargas parciales</b>.</li>
<li>Arranques y paradas <b>muy rápidos</b>. <b>Poco</b> personal de mantenimiento.</li>
<li>Requiere un combustible de <b>alta calidad</b>.</li>
</ul>
<p><b>Campos de aplicación</b>: generación eléctrica (base en regiones desérticas, ciclos combinados, <b>puntas</b> en redes pequeñas, plataformas marinas); cogeneración (aislada o en ciclo combinado: industria química, secaderos, invernaderos); propulsión marina de <b>barcos rápidos</b> (fragatas, ferris); propulsión aérea con <b>potencia en eje</b> (turbohélices y helicópteros) y <b>de reacción</b> (turborreactores y turbofanes); accionamiento de bombas y compresores en <b>oleoductos y gasoductos</b>; bombas y generadores de emergencia.</p>
<h4>Ciclo combinado</h4>
<p><b>Características</b> (diap. 25):</p>
<ul>
<li>Motor de <b>combustión interna</b> basado en turbomáquinas (la combustión ocurre en la turbina de gas).</li>
<li>Potencias <b>hasta 1200 MW</b> con configuraciones <b>3x1</b> (tres turbinas de gas y una de vapor), con potencia específica <b>baja</b>.</li>
<li>Rendimientos <b>hasta 63 %</b>, con pérdidas <b>moderadas</b> a cargas parciales.</li>
<li>Arranques y paradas <b>relativamente lentos</b> (por el ciclo de vapor).</li>
<li>Requiere un combustible de <b>alta calidad</b> (como la turbina de gas).</li>
</ul>
<p><b>Campos de aplicación</b>: generación eléctrica <b>de base</b> y cogeneración en la industria química. El funcionamiento (escape de la TG → caldera de recuperación → turbina de vapor) se estudia en el apartado de ciclo combinado y cogeneración.</p>
` },
    { id: "t1-mcia", title: "5. Motores de combustión interna alternativos (MCIA)", slides: ["T1", 26, 32], html: `
<p>Los MCIA son el motor más versátil: desde micromotores de modelismo hasta motores marinos de 80 MW (diap. 26-32). El Tema 2 los estudia en detalle; aquí interesa situarlos frente a los demás.</p>
<h4>Características de los MCIA</h4>
<ul>
<li>Motor de <b>combustión interna</b>.</li>
<li>Motor <b>volumétrico</b> (alternativo).</li>
<li>Potencias <b>hasta 80 MW</b>, con potencia específica <b>muy alta</b> (aunque <b>menor que la TG</b>).</li>
<li>Rendimientos <b>hasta 52 %</b>, con pérdidas <b>mínimas a cargas parciales</b> (según el tipo).</li>
<li>Arranques y paradas <b>muy rápidos</b>. <b>Modulares</b>.</li>
<li><b>Bajo</b> coste de fabricación e instalación, <b>alto</b> coste de mantenimiento.</li>
</ul>
<p>Compara: el MCIA tiene el <b>mejor comportamiento a carga parcial</b> (en la tabla resumen, factor a media carga 1,0), la TG el peor (0,8-0,85).</p>
<h4>Campos de aplicación</h4>
<ul>
<li><b>Generación eléctrica</b>: generación de base en <b>redes pequeñas (islas)</b> hasta 80 MW; generadores pequeños, de generación distribuida y de emergencia; generadores marinos.</li>
<li><b>Cogeneración</b>: minería, industria alimentaria, química, petroquímica, secaderos, invernaderos.</li>
<li><b>Transporte terrestre y ferroviario</b>: motos, coches, camiones y autobuses.</li>
<li><b>Propulsión marina</b>: desde pequeños fueraborda hasta grandes buques.</li>
<li><b>Propulsión aérea</b>: aviación ligera, antiincendios y acrobacia; helicópteros y drones.</li>
<li>Maquinaria de obras públicas; accionamiento <b>agrícola</b> (tractores, bombas) e <b>industrial</b> (bombas, compresores, grúas).</li>
</ul>
<h4>Galería de motores</h4>
<p>Las diap. 28-32 enseñan la variedad: motor diésel de camión y motores de vehículos ligeros; scooter de 1 cilindro; motores de 4 cilindros refrigerados por aire o por líquido; micromotores de modelismo; motores para maquinaria agrícola y de jardinería; motores para helicópteros no tripulados (drones); grupos electrógenos; motores para maquinaria agrícola pesada y para construcción; motor de <b>gas natural de cogeneración</b>; motor diésel marino, y un motor de <b>generación eléctrica o marino de 80 MW (2300 toneladas)</b>.</p>
<p>Detalles que se preguntan: la <b>refrigeración</b> puede ser por aire o por líquido; el MCIA admite combustibles <b>líquidos o gaseosos</b> (gasóleo, gasolina, gas natural).</p>
` },
    { id: "t1-reaccion", title: "6. Motores de reacción: cohetes y aerorreactores", slides: ["T1", 33, 36], html: `
<p>Los motores de reacción solo sirven para propulsión. El criterio de clasificación es el <b>comburente</b>: si lo lleva el motor (cohete) o lo toma del aire (aerorreactor) (diap. 33-36).</p>
<h4>Cohetes químicos</h4>
<p>Resumen de aplicaciones (diap. 33): propulsantes <b>sólidos</b> → aplicaciones <b>militares (misiles)</b>; propulsantes <b>líquidos</b> → aplicaciones <b>espaciales (lanzaderas)</b>.</p>
<table class="tbl"><tr><th>Propulsantes sólidos</th><th>Propulsantes líquidos</th></tr>
<tr><td>Misiles (1 kN - 2 MN), lanzadores espaciales y <i>boosters</i> (5 - 15 MN), como los SRB de la NASA</td><td>Recolocación de satélites orbitales (mN - 100 N), lanzadores y naves espaciales (1 kN - 10 MN)</td></tr>
<tr><td>Más <b>sencillos</b>, pero menos gestionables: <b>un solo arranque</b>, <b>sin regulación</b> de la combustión</td><td>Permiten <b>regular el empuje</b> (por ejemplo, SpaceX Falcon 9)</td></tr>
<tr><td>Mezcla de <b>polvo de aluminio</b> (combustible) y <b>perclorato de amonio</b> NH<sub>4</sub>ClO<sub>4</sub> (comburente)</td><td>Combustible: <b>queroseno, H<sub>2</sub>, CH<sub>4</sub></b>; comburente: <b>O<sub>2</sub> líquido</b></td></tr></table>
<h4>Aerorreactores sin compresor</h4>
<p>Resumen (diap. 33): <b>estatorreactor</b> → incrementador de empuje (avión espía); <b>pulsorreactor</b> → sin aplicación actual (la V-1 de la Segunda Guerra Mundial).</p>
<ul>
<li><b>Estatorreactor (ramjet)</b> (diap. 35): misiles (2 - 50 kN), Lockheed SR-71 (&gt; 100 kN), <i>booster</i> en punta de pala de helicóptero. Funciona por <b>compresión dinámica</b> del aire que entra (<b>ondas de choque oblicuas + difusor</b>): entrada supersónica (M &gt; 1), compresión a M &lt; 1, combustión con estabilizador de llama y tobera (M = 1 en la garganta, M &gt; 1 a la salida). <b>No puede arrancar desde parado</b>: necesita velocidad.</li>
<li><b>Pulsorreactor (pulsejet)</b>: bomba V1 (2,7 kN). Versión <b>con válvulas de láminas</b> (impiden que los gases salgan por la admisión) y <b>sin válvulas</b> (el mayor volumen del escape y las ondas de rarefacción hacen que salgan prioritariamente por el escape). <b>Ruidoso y muy poco eficiente</b>.</li>
</ul>
<h4>Aerorreactores con compresor: turborreactor y turbofán</h4>
<ul>
<li><b>Turborreactor (turbojet)</b> (diap. 36): cazas antiguos (9 - 95 kN) y misiles (&lt; 7 kN). <b>Todo el caudal pasa por la cámara de combustión</b>; rendimiento aceptable para Mach muy alto. <b>Más baratos, más potencia específica, menos rendimiento</b>. Uso: aviación militar y uso privado.</li>
<li><b>Turbofán</b>: aviones comerciales (10 a más de 500 kN) y cazas modernos (80 - 180 kN). Parte del caudal comprimido por la(s) primera(s) etapa(s) es <b>derivada</b> (no pasa por la cámara de combustión) → <b>más rendimiento</b>. <b>Grado de derivación</b>: 0,3 - 2 en cazas y <b>5 - 12</b> en aviones comerciales. Óptimo para <b>velocidades intermedias</b>. Uso: aviación civil y parte de la militar.</li>
</ul>
<h4>Turbohélice</h4>
<p><b>Turbohélice (turboprop)</b>: una <b>turbina de gas</b> alimenta la <b>hélice</b> mediante una <b>transmisión</b> (reductora). La hélice de <b>geometría variable</b> da un gran empuje de arranque. Aplicaciones: avionetas (0,5 - 2 MW), aviones regionales de pasajeros (2 - 4 MW) y transporte militar (3 - 8 MW).</p>
<p>La diapositiva lo subraya: el turbohélice <b>no es un aerorreactor</b>; es un <b>motor de potencia en eje</b> (como el turboeje de un helicóptero). Sus máquinas térmicas son el compresor y la turbina; la hélice no es una máquina térmica.</p>
` },
    { id: "t1-otros", title: "7. Otros motores y tabla resumen", slides: ["T1", 37, 41], html: `
<p>Además de los grandes, el tema repasa motores históricos, de nicho o en desarrollo, y cierra con una tabla comparativa que conviene saberse (diap. 37-41).</p>
<h4>Máquina de vapor</h4>
<ul>
<li><b>Primer motor térmico</b>, el único durante <b>150 años</b>.</li>
<li>Puede usar <b>cualquier combustible</b> (motor de <b>combustión externa</b>).</li>
<li>Rendimiento de <b>hasta 5 %</b>.</li>
<li>En la actualidad, aplicaciones muy puntuales.</li>
</ul>
<p>Es un motor <b>volumétrico alternativo</b> (pistón movido por vapor), a diferencia de la turbina de vapor (turbomáquina).</p>
<h4>Motor Stirling</h4>
<ul>
<li>Motor de <b>combustión externa</b>.</li>
<li>Aplicación en <b>cogeneración (micro-CHP)</b> y en <b>energía solar de concentración (disco Stirling)</b>.</li>
<li>Aplicaciones puntuales: <b>submarinos</b>, motores no convencionales…</li>
<li>Los rendimientos <b>podrían ser muy altos, pero a un coste muy alto</b>.</li>
</ul>
<h4>Motor Wankel</h4>
<ul>
<li>Motor de <b>combustión interna volumétrico rotativo</b> (rotor triangular en una carcasa trocoidal).</li>
<li><b>Alta potencia específica</b>.</li>
<li>Aplicaciones puntuales en automoción.</li>
<li>Desarrollo de <b><i>range extenders</i></b> para vehículos híbridos.</li>
</ul>
<h4>ORC y ciclos de CO2 supercrítico</h4>
<table class="tbl"><tr><th>Ciclos Rankine orgánicos (ORC)</th><th>Ciclos de CO<sub>2</sub> supercrítico (sCO<sub>2</sub>)</th></tr>
<tr><td>Motor térmico tipo «<b>turbina de vapor</b>»</td><td>Motor térmico tipo «<b>turbina de gas» de ciclo cerrado</b></td></tr>
<tr><td>Fluidos <b>orgánicos</b> en vez de agua</td><td>Fluido motor: <b>CO<sub>2</sub> en estado supercrítico</b></td></tr>
<tr><td>Para temperaturas <b>&lt; 300 ºC</b></td><td>Para temperaturas <b>&gt; 550 ºC</b></td></tr>
<tr><td>Uso común en <b>geotermia</b> y <b>recuperación de energía térmica</b></td><td>Desarrollo para <b>reactores nucleares avanzados</b> y solar de concentración de alta temperatura</td></tr>
<tr><td>Los ORC pequeños pueden usar un <b>expansor volumétrico</b> en vez de turbomáquinas</td><td>Esquema con compresor principal, compresor de recompresión, recuperadores de baja y alta, calentador y turbina</td></tr>
<tr><td>Rendimientos <b>hasta 25 %</b></td><td>Rendimientos <b>previstos hasta 50 %</b></td></tr></table>
<h4>Tabla resumen</h4>
<table class="tbl"><tr><th></th><th>Motor diésel o gas natural</th><th>Turbina de gas</th><th>Turbina de vapor</th><th>Ciclo combinado</th></tr>
<tr><td>Potencia usual</td><td>&lt; 10 MW (cog.); &lt; 40 MW (g.e.)</td><td>100 kW - 600 MW</td><td>1 MW - 1600 MW</td><td>40 MW - 1200 MW</td></tr>
<tr><td>Tamaño y peso por kW</td><td>Medio</td><td><b>Bajo</b></td><td><b>Muy alto</b></td><td>Alto</td></tr>
<tr><td>Requerimientos</td><td>Cimentación resistente, aislar vibraciones, aislamiento acústico</td><td>Filtros de aire, silenciadores de escape</td><td>Manejo de cenizas, suministro de agua, limpieza de gases</td><td>Filtros de aire, suministro de agua</td></tr>
<tr><td>Rendimiento</td><td>0,20 - 0,52</td><td>0,25 - 0,40</td><td>0,35 - 0,45</td><td><b>0,48 - 0,63</b></td></tr>
<tr><td>Factor a media carga</td><td><b>1,0</b></td><td>0,8 - 0,85</td><td>0,91 - 0,96</td><td>0,84 - 0,88</td></tr>
<tr><td>Calidad de combustible</td><td>Alta a media; líquido (o gas)</td><td>Alta a media; líquido o gas</td><td><b>Media a baja</b>; líquido, sólido o gas</td><td>Alta a media; líquido o gas</td></tr>
<tr><td>Periodos de mantenimiento</td><td>Semanal y mensual</td><td>Mensual y anual</td><td>Diario</td><td>Diario</td></tr></table>
<p>(g.e. = grupo electrógeno; cog. = cogeneración.) El «factor a media carga» se lee como la fracción del rendimiento nominal que se conserva a media carga: el MCIA no pierde nada (1,0) y la TG es la que más pierde (0,8-0,85), coherente con las «altas pérdidas a cargas parciales» de la diap. 23.</p>
` },
    { id: "t1-cogeneracion", title: "8. Ciclo combinado y cogeneración", slides: ["T1", 43, 44], html: `
<p>Las dos formas de aprovechar el calor residual de un motor: convertirlo en <b>más trabajo</b> (ciclo combinado) o usarlo <b>como calor útil</b> (cogeneración) (diap. 43-44).</p>
<h4>Ciclo combinado: MCI + MCE</h4>
<ul>
<li>Utiliza la <b>potencia térmica disponible en el escape de un MCI</b> (motor de combustión interna) para alimentar a un <b>MCE</b> (motor de combustión externa) (diap. 43).</li>
<li><b>MCI y MCE producen potencia mecánica</b>.</li>
<li>Rendimiento <b>potencialmente muy alto</b>: <b>alta temperatura de foco caliente</b> (la combustión del MCI) y <b>baja temperatura de foco frío</b> (el condensador del MCE).</li>
</ul>
<p>Esquema: el MCI recibe $\\dot m_a$ y $\\dot m_f H_c$ y da $\\dot W_{MCI}$; sus gases calientes $\\dot m_{ge_h}$ pasan por la <b>caldera de recuperación de calor</b>, que los descarga fríos ($\\dot m_{ge_c}$) y entrega $\\dot Q_h$ al MCE, que da $\\dot W_{MCE}$ y cede $\\dot Q_c$.</p>
<div class="formula">$$\\eta_t=\\frac{\\dot W_{MCI}+\\dot W_{MCE}}{\\dot m_f H_c}$$</div>
<p>En el diagrama T-s de la diapositiva, el ciclo de gas (Brayton, arriba) cede su calor de escape al ciclo de vapor (Rankine, abajo); la zona rayada es el calor recuperado. Solo se quema combustible una vez: por eso en el denominador está solo $\\dot m_f H_c$.</p>
<h4>Cogeneración: qué calor se aprovecha</h4>
<p><b>Cogeneración</b>: generación combinada de <b>energía mecánica</b> y <b>energía térmica</b> (diap. 44).</p>
<ul>
<li><b>En MCI</b>: aprovechamiento de la energía <b>residual</b> de los gases de escape y/o de la refrigeración, <b>sin quitar</b> potencia mecánica.
<div class="formula">$$\\text{MCIA: }\\dot Q=\\dot m_{a+f}\\,(h_{esc}-h_{amb})+\\dot Q_{ref}\\qquad \\text{TG: }\\dot Q=\\dot m_{a+f}\\,(h_4-h_1)$$</div></li>
<li><b>En MCE</b>: se <b>disminuye la energía mecánica generable</b> para generar energía térmica (se condensa a más presión y temperatura o se extrae vapor).
<div class="formula">$$\\text{TV: }\\dot Q_{cond}=\\dot m_v\\,(h_6-h_1)$$</div></li>
</ul>
<p>Por eso la TG o el MCIA permiten cogenerar sin perder potencia útil, mientras que en la turbina de vapor el calor de cogeneración se paga con trabajo.</p>
<h4>Rendimiento global y eléctrico equivalente</h4>
<p>En el esquema de la diap. 44, el motor da $\\dot W_t$; la caldera de recuperación entrega $\\dot Q_{pi}$ al <b>proceso industrial o calefacción</b>, que cede $\\dot Q_c$.</p>
<div class="formula">$$\\eta_t=\\frac{\\dot W_t+\\dot Q_{pi}}{\\dot m_f H_c}\\qquad \\eta_{t_{ee}}=\\frac{\\dot W_t}{\\dot m_f H_c-\\dfrac{\\dot Q_{pi}}{\\eta_c}}$$</div>
<p>El <b>rendimiento energético global</b> suma trabajo y calor útil. El <b>rendimiento eléctrico equivalente</b> descuenta del combustible el que habría gastado una <b>caldera convencional</b> de rendimiento $\\eta_c$ para producir el mismo calor $\\dot Q_{pi}$, y atribuye el resto a la producción de trabajo. Siempre $\\eta_{t_{ee}} \\gt \\dot W_t/(\\dot m_f H_c)$.</p>
` },
    { id: "t1-combustion", title: "9. Combustión, estequiometría, combustibles y emisiones", slides: ["T1", 46, 53], html: `
<p>El último bloque da las herramientas de combustión que se usan en todo el curso (dosado, estequiometría) y repasa los contaminantes de los motores (diap. 46-53).</p>
<h4>Combustión premezclada y por difusión</h4>
<ul>
<li><b>Combustión de mezclas premezcladas o llamas premezcladas</b>: el aire y el combustible <b>han sido mezclados antes</b> de comenzar la reacción (diap. 46). Puede ser:
<ul><li><b>Combustión por frente de llama</b>: frente <b>subsónico</b> = <b>deflagración</b> (un frente de llama avanza por <b>difusión térmica y molecular</b> hacia la mezcla no quemada); frente <b>supersónico</b> = <b>detonación</b>.</li>
<li><b>Combustión descentralizada por autoinflamación</b>: activación térmica o por radicales activos.</li></ul></li>
<li><b>Combustión por difusión o llamas de difusión</b>: el combustible se mezcla con el aire <b>simultáneamente</b> al fenómeno de combustión.</li>
</ul>
<p>Ojo: «difusión» aparece en los dos sitios. En la deflagración es el <b>mecanismo de avance del frente</b> en una mezcla <b>ya hecha</b>; en la llama de difusión es la <b>mezcla</b> la que ocurre durante la combustión.</p>
<h4>Estequiometría y dosado</h4>
<p>Reacción de un hidrocarburo genérico sin oxígeno (diap. 47-48):</p>
<div class="formula">$$C_xH_y+a\\,(O_2+3{,}76\\,N_2)\\Rightarrow x\\,CO_2+\\tfrac{y}{2}\\,H_2O+3{,}76\\,a\\,N_2\\qquad a=x+\\tfrac{y}{4}$$</div>
<p>Los reactantes reaccionan según las <b>relaciones de masa estequiométricas</b> (masa molecular × coeficiente de ajuste). Relación de masas para una reacción completa:</p>
<div class="formula">$$(12x+y)+137{,}28\\,a\\ \\Rightarrow\\ 44x+9y+105{,}28\\,a$$</div>
<p>(137,28 = 32 + 3,76·28 es la masa de «un mol de O<sub>2</sub> con su nitrógeno»; 105,28 = 3,76·28.)</p>
<ul>
<li><b>Dosado absoluto</b>: masa de combustible frente a masa de aire de una reacción determinada, $F = \\dot m_f/\\dot m_a$.</li>
<li><b>Dosado estequiométrico</b>: el dosado absoluto de la reacción estequiométrica (completa, sin que sobre aire ni combustible):
<div class="formula">$$F_e=\\left(\\frac{\\dot m_f}{\\dot m_a}\\right)_{esteq}=\\frac{12x+y}{137{,}28\\,\\left(x+\\tfrac{y}{4}\\right)}$$</div></li>
<li><b>Dosado relativo</b>: $F_R = F/F_e$. <b>Factor lambda</b>: $\\lambda = 1/F_R$.</li>
<li><b>Mezcla pobre</b> (sobra aire): $F_R \\lt 1$, $\\lambda \\gt 1$. <b>Mezcla rica</b> (sobra combustible): $F_R \\gt 1$, $\\lambda \\lt 1$.</li>
</ul>
<p>Valores que salen de la fórmula: metano CH<sub>4</sub> → $F_e = 1/17{,}16$; propano C<sub>3</sub>H<sub>8</sub> → $1/15{,}6$; octano C<sub>8</sub>H<sub>18</sub> → $1/15{,}05$. El gráfico de barras de la diapositiva recuerda que la masa de aire es <b>mucho mayor</b> que la de combustible.</p>
<h4>Emisión de CO2</h4>
<p>La emisión de CO<sub>2</sub> es <b>inherente</b> a la combustión de reactantes que contienen carbono (diap. 48). Por la química de la combustión (x moles de CO<sub>2</sub>, de 44 g, por cada 12x + y gramos de combustible):</p>
<div class="formula">$$\\frac{44}{12+y/x}\\ \\ \\frac{\\text{kg CO}_2}{\\text{kg fuel}}$$</div>
<p>Cuanto mayor es la relación H/C ($y/x$), menos CO<sub>2</sub> por kg: metano 2,75; octano ≈ 3,09; carbono puro 44/12 ≈ 3,67. Generalmente se mide en <b>kg CO<sub>2</sub>/kWh</b>, y ahí interviene el <b>rendimiento efectivo</b> del motor:</p>
<div class="formula">$$\\frac{\\text{kg CO}_2}{\\text{kWh}}=\\frac{44}{12+y/x}\\cdot\\frac{3{,}6\\ \\text{MJ/kWh}}{\\eta_e\\,H_c}$$</div>
<h4>Propiedades de los combustibles</h4>
<ul>
<li><b>Físicas</b> (diap. 49): densidad; viscosidad y lubricidad; volatilidad y entalpía de vaporización.</li>
<li><b>Químicas</b>: poder calorífico (<b>superior</b> frente a <b>inferior</b>); dosado estequiométrico; límite de inflamabilidad; temperatura de autoinflamación; temperatura de inflamabilidad (<i>flash point</i>); temperatura adiabática de llama.</li>
</ul>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> el poder calorífico superior incluye el calor de condensación del agua de los productos; el inferior no. En motores se usa el inferior porque el agua sale en vapor. El <i>flash point</i> es la temperatura mínima a la que los vapores se inflaman con una llama; la de autoinflamación, la temperatura a la que la mezcla arde sola sin chispa.</div>
<h4>Contaminantes y niveles de emisión</h4>
<p><b>Contaminantes</b>: sustancias emitidas a la atmósfera en concentración suficiente para tener un efecto medible en los seres vivos; gases, partículas sólidas y gotas líquidas (diap. 50).</p>
<ul>
<li><b>Primarios</b>: emitidos directamente por el motor: <b>CO, NOx, HC-COV, SOx, PM</b>.</li>
<li><b>Secundarios</b>: se forman en la atmósfera por interacción entre primarios y acción fotoquímica: <b>O<sub>3</sub></b>, ácidos sulfúrico y nítrico (HNO<sub>3</sub>), aldehídos.</li>
<li><b>Gases de efecto invernadero</b>: causantes del cambio climático, principalmente <b>CO<sub>2</sub></b>. <b>No</b> son un problema local sino <b>global</b>, y <b>no son gases contaminantes</b>.</li>
</ul>
<p><b>Niveles de emisión</b> (diap. 51): <b>local</b> (garajes, túneles) → CO; <b>zonal/regional/gran urbe</b> → CO, HC, SO<sub>2</sub>, PM, NOx, O<sub>3</sub>; <b>transfronterizo</b> → SO<sub>2</sub> (ácido sulfúrico), NOx (ácido nítrico), PM<sub>2,5</sub>; <b>planetario</b> → CO<sub>2</sub>.</p>
<h4>CO, NOx, HC y partículas</h4>
<table class="tbl"><tr><th></th><th>Efecto</th><th>Formación</th></tr>
<tr><td><b>CO</b> (diap. 52)</td><td>Fuertemente <b>asfixiante</b> («muerte dulce»)</td><td>Producto <b>intermedio</b> de la combustión: $2CO + O_2 \\Leftrightarrow 2CO_2$. A <b>altas temperaturas y poco O<sub>2</sub></b> la reacción se desplaza hacia el CO; al bajar rápidamente la temperatura se <b>congela</b>. En horas, en la atmósfera, pasa a CO<sub>2</sub></td></tr>
<tr><td><b>NOx</b></td><td>El <b>NO</b> es asfixiante; el <b>NO<sub>2</sub></b> es irritante y afecta al sistema inmunológico (cambios en el tejido pulmonar, efectos a largo plazo)</td><td>$N_2 + O_2 \\Leftrightarrow 2NO$: se desplaza a la derecha a temperaturas <b>muy altas (1550 ºC)</b>; favorecido por <b>exceso de O<sub>2</sub></b> → dosado relativo de máxima emisión <b>0,9</b>. Se congela al enfriar rápido; el NO se oxida paulatinamente a NO<sub>2</sub></td></tr>
<tr><td><b>HC y COV</b> (diap. 53)</td><td>Benceno y aromáticos, <b>irritantes</b>; hay HC lineales <b>cancerígenos</b>; los COV (radicales carboxilo -CO-) reaccionan con NO<sub>2</sub> formando oxidantes</td><td><b>Apagado o no encendido</b> de la llama: mezclas <b>ricas o muy pobres</b> y <b>zonas frías</b></td></tr>
<tr><td><b>PM</b></td><td>&gt; 5 µm: retenidas en las vías respiratorias o caen al suelo; <b>&lt; 2,5 µm: llegan a los alveolos</b>, cancerígenas e irritantes, efecto acumulativo</td><td><b>Deshidrogenación</b> a muy alta temperatura en zonas <b>faltas de O<sub>2</sub></b> → hollín. Etapas: <b>nucleación</b> (esqueleto carbonoso), <b>crecimiento</b> (en llama), <b>agregación</b> (en gases de escape), <b>condensación</b> (se añaden hidrocarburos)</td></tr></table>
` }
  ],
  confusions: [
    ["<b>Máquina térmica</b>: una sola máquina de fluido compresible (compresor, turbina) que intercambia trabajo.", "<b>Motor térmico</b>: conjunto de varias máquinas térmicas + generación del estado térmico; obtiene trabajo neto de un combustible o fuente de calor."],
    ["<b>Generadora (compresor)</b>: el fluido aumenta su estado térmico; se aporta trabajo. Un «turbocompresor» es generador.", "<b>Motora (expansor)</b>: el fluido reduce su estado térmico; se obtiene trabajo. Una turbina centrípeta es motora."],
    ["<b>Volumétrica</b>: flujo discontinuo, pequeños caudales, baja fricción, no adiabática; puede ser rotativa (tornillo, scroll, paletas, Roots, Wankel).", "<b>Turbomáquina</b>: acción dinámica, flujo continuo, grandes caudales, alta fricción, adiabática; siempre rotativa."],
    ["<b>Ciclo cerrado</b>: condiciona la T atmosférica; debe ser de combustión externa.", "<b>Ciclo abierto</b>: condiciona la p atmosférica; fluido sin coste; suele ser de combustión interna."],
    ["<b>Combustión externa</b>: T máx. limitada, baja potencia específica, combustibles de baja calidad; $\\eta_t = \\dot W_e/\\dot Q_h$.", "<b>Combustión interna</b>: T máx. muy alta, alta potencia específica, combustibles de alta calidad; $\\eta_t = \\dot W_e/(\\dot m_f H_c)$."],
    ["<b>Turbohélice</b>: turbina de gas que mueve una hélice por transmisión: motor de <b>potencia en eje</b>, no aerorreactor.", "<b>Turbofán</b>: aerorreactor con compresor; parte del caudal se deriva sin pasar por la cámara de combustión."],
    ["<b>Ciclo combinado</b>: el calor de escape del MCI se convierte en <b>más trabajo</b> en un MCE.", "<b>Cogeneración</b>: el calor residual se usa <b>como calor útil</b> en un proceso o calefacción."],
    ["<b>Premezclada</b>: aire y combustible mezclados antes; deflagración (subsónica), detonación (supersónica) o autoinflamación.", "<b>Difusión</b>: la mezcla ocurre a la vez que la combustión."],
    ["<b>Mezcla pobre</b>: sobra aire; $F_R \\lt 1$, $\\lambda \\gt 1$.", "<b>Mezcla rica</b>: sobra combustible; $F_R \\gt 1$, $\\lambda \\lt 1$."],
    ["<b>Contaminante</b> (CO, NOx, HC, PM, SOx): efecto medible en los seres vivos, escala local a transfronteriza.", "<b>Gas de efecto invernadero</b> (CO<sub>2</sub>): problema global, no contaminante."]
  ]
};

/* ---------- Preguntas: definiciones y máquinas térmicas ---------- */
L("T1", "t1-definiciones", "Máquina de fluido", 2, "Según las definiciones de los apuntes, ¿qué distingue a una máquina térmica de una máquina hidráulica?",
  ["En la térmica el fluido es compresible y varía su energía térmica (y mecánica); en la hidráulica es incompresible (o se comporta como tal) y solo varía su energía mecánica",
   "En la térmica siempre se obtiene trabajo del fluido y en la hidráulica siempre se le aporta",
   "La térmica intercambia calor con el exterior a través del eje y la hidráulica intercambia trabajo",
   "La térmica es siempre una turbomáquina y la hidráulica es siempre volumétrica"],
  0, "Diap. 4: ambas son máquinas de fluido (intercambian energía mecánica a través de un eje mediante la variación de energía del fluido). La diferencia es la <b>compresibilidad</b>: hidráulica → fluido incompresible, variación de energía mecánica; térmica → fluido compresible, variación de energía térmica (y mecánica). Ambas pueden ser motoras o generadoras, y volumétricas o turbomáquinas (la bomba de engranajes de la diapositiva es hidráulica y volumétrica).", "Apuntes T1, diap. 4");
L("T1", "t1-definiciones", "Máquina de fluido", 2, "En la diapositiva de máquinas de fluido aparece un aerogenerador. Según la definición de los apuntes, es…",
  ["una máquina hidráulica, porque el aire, a esas velocidades, se comporta como un fluido incompresible",
   "una máquina térmica motora, porque el fluido de trabajo es un gas",
   "un motor térmico de flujo continuo, porque produce energía mecánica en un eje",
   "una turbomáquina térmica, porque tiene rotor de álabes"],
  0, "Diap. 4: el aerogenerador se muestra en la columna de <b>máquinas hidráulicas</b> (junto a la bomba de engranajes y la turbina Pelton): fluido incompresible «o que se comporta como tal». El aire a baja velocidad apenas cambia de densidad, así que solo varía su energía mecánica (cinética). Que sea un gas o que tenga álabes no la convierte en máquina térmica, y no es un motor porque no genera ningún estado térmico.", "Apuntes T1, diap. 4");
L("T1", "t1-definiciones", "Motor térmico", 3, "¿Cuál de estos conjuntos encaja en la definición de <b>motor térmico</b> de los apuntes?",
  ["Un disco parabólico que concentra radiación solar sobre un motor Stirling que acciona un alternador",
   "Una pila de combustible de hidrógeno que alimenta un motor eléctrico",
   "El grupo turbocompresor de sobrealimentación de un motor diésel",
   "Una turbina Pelton accionada por un salto de agua"],
  0, "Diap. 6: motor térmico = elementos que obtienen energía mecánica mediante el <b>estado térmico</b> generado por combustión, reacción nuclear, <b>concentración de radiación solar</b> o, en general, un intercambiador de calor. El disco Stirling cumple (diap. 38). La pila de combustible convierte energía química en eléctrica sin pasar por el estado térmico; el grupo turbo son dos máquinas térmicas que no generan estado térmico propio, y la Pelton es una máquina hidráulica.", "Apuntes T1, diap. 6");
L("T1", "t1-definiciones", "Máquina térmica", 2, "Un compresor de tornillo que comprime aire para la red neumática de una fábrica es…",
  ["una máquina térmica generadora volumétrica rotativa",
   "un motor térmico volumétrico rotativo",
   "una turbomáquina generadora, porque es rotativa",
   "una máquina hidráulica generadora, porque no hay combustión"],
  0, "Diap. 5, 10 y 11: comprime un fluido compresible (aire) aumentando su estado térmico con trabajo aportado por el eje → máquina térmica <b>generadora</b>. Varía el volumen de una cámara → <b>volumétrica</b>, de tipo <b>rotativo</b> (diap. 11). Que gire no la hace turbomáquina, y no es un motor: no obtiene trabajo ni genera un estado térmico.", "Apuntes T1, diap. 11");
L("T1", "t1-definiciones", "Cuadro de transformaciones", 2, "En el cuadro de transformaciones energéticas (diap. 8), ¿qué camino queda dentro de la zona sombreada «motor térmico»?",
  ["Combustión o reacción nuclear (materia → térmica) seguida de la máquina térmica motora (térmica → mecánica)",
   "Batería (materia → electromagnética) seguida del motor eléctrico (electromagnética → mecánica)",
   "Resistencia eléctrica (electromagnética → térmica) seguida de la máquina térmica generadora (mecánica → térmica)",
   "Efecto Seebeck (térmica → electromagnética) seguido del motor eléctrico (electromagnética → mecánica)"],
  0, "Diap. 8: la zona «motor térmico» abarca la energía asociada a la constitución de la materia, la energía térmica y la energía mecánica, unidas por la combustión/reacción nuclear y la máquina térmica motora (también entran geotermia y colector solar como aportes de calor). Batería, motor eléctrico y efecto Seebeck pasan por la energía electromagnética, fuera de esa zona.", "Apuntes T1, diap. 8");
L("T1", "t1-definiciones", "Cuadro de transformaciones", 1, "En el cuadro de transformaciones energéticas, una máquina térmica <b>generadora</b> transforma…",
  ["energía mecánica en energía térmica", "energía térmica en energía mecánica", "energía electromagnética en energía térmica", "energía de la materia en energía térmica"],
  0, "Diap. 8: entre la energía térmica y la mecánica está la máquina térmica, <b>motora</b> en el sentido térmica → mecánica y <b>generadora</b> en el sentido mecánica → térmica (un compresor gasta trabajo y aumenta el estado térmico del fluido). Electromagnética → térmica es la resistencia eléctrica; materia → térmica, la combustión.", "Apuntes T1, diap. 8");
L("T1", "t1-definiciones", "Motor térmico", 3, "En el balance de un motor térmico de combustión interna de la diap. 6, ¿qué flujos intervienen?",
  ["Entran $\\dot m_a$ y $\\dot m_f H_c$; salen $\\dot W_e$, $\\dot Q_{loss}$ y los gases de escape $\\dot m_{ge}$",
   "Entra $\\dot Q_{hot}$; salen $\\dot W_e$, $\\dot Q_{cold}$ y $\\dot Q_{loss}$",
   "Entran $\\dot m_a$ y $\\dot m_f H_c$; salen $\\dot W_e$, $\\dot Q_{cold}$ y $\\dot Q_{loss}$, sin gases de escape porque el fluido recircula",
   "Entra $\\dot m$ con $E_{in}$ y sale con $E_{out}$; $\\dot W_e$ puede entrar o salir"],
  0, "Diap. 6: el segundo esquema (combustión) recibe aire y combustible ($\\dot m_a$, $\\dot m_f H_c$) y entrega $\\dot W_e$, pérdidas $\\dot Q_{loss}$ y gases de escape $\\dot m_{ge}$ (el calor se cede con los gases, ciclo abierto). El balance con $\\dot Q_{hot}$ y $\\dot Q_{cold}$ es el del aporte de calor externo; el de $E_{in}$/$E_{out}$ con trabajo en doble sentido es el de una <b>máquina</b> térmica (diap. 5).", "Apuntes T1, diap. 6");

L("T1", "t1-maquinas", "Volumétricas y turbomáquinas", 2, "¿Cuál de estas características corresponde a las turbomáquinas y NO a las máquinas volumétricas?",
  ["Son adiabáticas", "Tienen baja fricción fluida", "Trabajan con flujo discontinuo", "Pueden ser rotativas"],
  0, "Diap. 10: turbomáquinas → acción dinámica, rotativas, flujo continuo, altas velocidades y grandes caudales, alta fricción fluida, <b>adiabáticas</b>. Volumétricas → variación del volumen de control, flujo discontinuo, bajas velocidades y pequeños caudales, baja fricción, no adiabáticas, y pueden ser alternativas <b>o rotativas</b> (por eso «pueden ser rotativas» no las distingue).", "Apuntes T1, diap. 10");
L("T1", "t1-maquinas", "Volumétricas y turbomáquinas", 2, "Una máquina térmica trabaja con flujo discontinuo, baja velocidad de paso del fluido, pequeños caudales y baja fricción fluida. Según los apuntes, esa máquina…",
  ["puede ser alternativa o rotativa, y no es adiabática",
   "es necesariamente alternativa y adiabática",
   "es una turbomáquina radial, porque las radiales mueven caudales pequeños",
   "es adiabática por la baja velocidad del fluido"],
  0, "Diap. 10: esas características son las de las <b>volumétricas</b>, que pueden ser <b>alternativas</b> o <b>rotativas</b> y son <b>no adiabáticas</b> (el fluido permanece en la cámara e intercambia calor con las paredes). Las adiabáticas son las turbomáquinas, que siempre trabajan con flujo continuo y grandes caudales, sean axiales o radiales.", "Apuntes T1, diap. 10");
L("T1", "t1-maquinas", "Compresión interna", 1, "¿Cuál de estas máquinas es una máquina térmica volumétrica <b>sin</b> compresión interna?",
  ["Compresor de Roots", "Compresor scroll", "Compresor de paletas", "Compresor de tornillo"],
  0, "Diap. 11-12: el compresor alternativo, el scroll, el de tornillo y el de paletas son volumétricos <b>con</b> compresión interna (reducen el volumen de la cámara dentro de la máquina). El <b>Roots</b> (lóbulos) es el ejemplo de volumétrico rotativo <b>sin</b> compresión interna: traslada el gas sin reducir su volumen.", "Apuntes T1, diap. 12");
L("T1", "t1-maquinas", "Compresión interna", 3, "¿Cuál de las siguientes afirmaciones sobre las máquinas de la diap. 11 es correcta?",
  ["El scroll, el de tornillo y el de paletas son volumétricos rotativos con compresión interna, y pueden trabajar como compresores o como expansores",
   "El de tornillo es una turbomáquina axial, porque el fluido avanza a lo largo del eje de los rotores",
   "El de paletas es volumétrico sin compresión interna, igual que el Roots",
   "El scroll es volumétrico alternativo, porque una de las espirales oscila respecto a la otra"],
  0, "Diap. 11 («máquinas térmicas volumétricas con compresión interna»): «compresor (o expansor) alternativo», «de tipo scroll», «de tornillo» y «de paletas»; los tres últimos con la etiqueta <b>Rotativo</b>. El tornillo es volumétrico aunque el flujo sea axial (encierra el gas entre lóbulos); el único sin compresión interna es el Roots (diap. 12).", "Apuntes T1, diap. 11");
L("T1", "t1-maquinas", "Turbomáquinas", 1, "Una turbina radio-axial (centrípeta) como la de la diap. 13 es…",
  ["una turbomáquina motora", "una turbomáquina generadora", "una máquina volumétrica rotativa motora", "una máquina volumétrica generadora"],
  0, "Diap. 13: las turbinas (axial, radio-axial centrípeta, radial) son turbomáquinas <b>motoras</b>: el fluido reduce su estado térmico y se obtiene trabajo (diap. 10). El turbocompresor axio-radial (centrífugo) es la generadora.", "Apuntes T1, diap. 13");
L("T1", "t1-maquinas", "Turbomáquinas", 2, "Según los apuntes, la estructura de una turbomáquina es…",
  ["en escalonamientos (uno o más), compuestos por álabes móviles (rotor) y fijos (estator)",
   "en cámaras de volumen variable selladas por segmentos o lóbulos",
   "un único rotor sin estator, que por sí solo constituye el escalonamiento",
   "en escalonamientos de al menos dos rotores contrarrotativos"],
  0, "Diap. 13: «Estructura en escalonamientos (&gt;=1), compuestos por álabes móviles (rotor) y fijos (estator)». Las cámaras de volumen variable son propias de las volumétricas.", "Apuntes T1, diap. 13");

/* ---------- Preguntas: clasificación de los motores ---------- */
L("T1", "t1-motores", "Ciclo abierto y cerrado", 2, "Según los apuntes, un motor de ciclo cerrado…",
  ["debe ser de combustión externa", "suele ser de combustión interna", "debe trabajar con un fluido sin coste", "tiene el ciclo condicionado por la presión atmosférica"],
  0, "Diap. 16: en ciclo cerrado el fluido recorre el ciclo de forma cíclica y el calor se aporta y cede mediante intercambiadores, así que el estado térmico no puede generarse quemando en el propio fluido: <b>deben</b> ser de combustión externa. «Fluido sin coste» y «presión atmosférica» son rasgos del ciclo <b>abierto</b>; el ciclo cerrado está condicionado por la <b>temperatura</b> atmosférica.", "Apuntes T1, diap. 16");
L("T1", "t1-motores", "Ciclo abierto y cerrado", 2, "¿Qué variable externa condiciona el ciclo de un motor de <b>ciclo abierto</b>, según los apuntes?",
  ["La presión atmosférica", "La temperatura atmosférica", "La temperatura máxima que admiten los materiales del intercambiador", "La humedad del aire"],
  0, "Diap. 16: ciclo abierto → la variable externa es la <b>presión atmosférica</b> (el fluido entra y se descarga a la atmósfera). Ciclo cerrado → la <b>temperatura atmosférica</b>, con temperaturas máxima y mínima acotadas. La temperatura máxima limitada por el intercambiador es una característica de la combustión externa (diap. 17).", "Apuntes T1, diap. 16");
L("T1", "t1-motores", "Combustión interna y externa", 3, "¿Cuál de las siguientes afirmaciones es <b>FALSA</b> según los apuntes?",
  ["Todo motor de combustión externa es de ciclo cerrado",
   "Todo motor de ciclo cerrado es de combustión externa",
   "Todo motor de combustión interna es de ciclo abierto",
   "En un motor de combustión interna el fluido motor sufre transformación química"],
  0, "Diap. 16-17: ciclo cerrado → «<b>deben</b> ser motor de combustión externa»; combustión interna → «<b>deben</b> ser de ciclo abierto» y el fluido sufre transformación química. Pero la combustión externa solo «<b>suelen</b> ser de ciclo cerrado»: no es una regla.", "Apuntes T1, diap. 17");
L("T1", "t1-motores", "Combustión interna y externa", 2, "Frente a un motor de combustión interna, un motor de combustión externa tiene, según los apuntes…",
  ["temperatura máxima limitada, baja potencia específica y admite combustibles de baja calidad",
   "temperatura máxima muy alta, baja potencia específica y necesita combustibles de alta calidad",
   "temperatura máxima limitada, alta potencia específica y necesita combustibles de alta calidad",
   "temperatura máxima muy alta, alta potencia específica y admite combustibles de baja calidad"],
  0, "Diap. 17: externa → estado térmico generado por transmisión de calor a través de un intercambiador: <b>T máx. limitada</b>, <b>baja potencia específica</b>, <b>combustibles de baja calidad</b>. Interna → combustión en el fluido de trabajo: T máx. muy altas, alta potencia específica, combustibles de alta calidad.", "Apuntes T1, diap. 17");
L("T1", "t1-motores", "Rendimiento térmico", 1, "¿Cómo se define en los apuntes el rendimiento térmico de un motor de combustión <b>externa</b>?",
  ["$\\eta_t = \\dot W_e/\\dot Q_h$", "$\\eta_t = \\dot W_e/(\\dot m_f H_c)$", "$\\eta_t = \\dot W_e/\\dot Q_c$", "$\\eta_t = (\\dot W_e + \\dot Q_c)/\\dot Q_h$"],
  0, "Diap. 17: en combustión externa la energía que entra al motor es el calor aportado por el foco caliente, $\\eta_t = \\dot W_e/\\dot Q_h$. La expresión con $\\dot m_f H_c$ es la de combustión interna, donde lo que entra es el combustible.", "Apuntes T1, diap. 17");
L("T1", "t1-motores", "Motores de reacción", 1, "¿Con qué criterio se clasifican los motores de reacción, según los apuntes?",
  ["Según el comburente usado: cohetes y aerorreactores",
   "Según las máquinas térmicas que los componen: volumétricos y de flujo continuo",
   "Según el estado del propulsante: sólidos y líquidos",
   "Según el lugar de la combustión: interna y externa"],
  0, "Diap. 18: los motores de <b>eje rotativo</b> se clasifican por las máquinas que los componen (volumétricos o de flujo continuo); los de <b>reacción</b>, por el <b>comburente</b> usado (cohetes, que lo llevan a bordo, y aerorreactores, que usan el aire). Sólido/líquido es una subdivisión de los cohetes.", "Apuntes T1, diap. 18");
L("T1", "t1-motores", "Cohetes y aerorreactores", 3, "Un aerorreactor <b>sin compresor</b>…",
  ["no puede arrancar a velocidad nula",
   "puede funcionar en el vacío porque no necesita compresor",
   "lleva el comburente a bordo, como los cohetes",
   "es un motor de potencia en eje"],
  0, "Diap. 19: aerorreactores → el comburente es el aire atmosférico, así que <b>no</b> valen para el vacío; los <b>sin compresor</b> «no pueden arrancar a velocidad nula» (necesitan la compresión dinámica de la entrada, diap. 35). Los que llevan comburente y funcionan en vacío son los cohetes.", "Apuntes T1, diap. 19");
L("T1", "t1-motores", "Potencia en eje", 2, "Un motor diésel de grupo electrógeno da un par efectivo de 850 N·m a 1800 min<sup>−1</sup>. ¿Cuál es su potencia efectiva?",
  ["160,2 kW", "9613 kW", "25,5 kW", "80,1 kW", "4,06 kW", "117,8 kW"],
  0, "Datos: $M_e = 850$ N·m, $n = 1800$ min<sup>−1</sup> $= 30$ s<sup>−1</sup>. Potencia en eje (Apuntes T1, diap. 18): $$\\dot W_e=M_e\\,2\\pi n$$ $$=850\\cdot2\\pi\\cdot30\\ \\text{W}$$ $$=\\boxed{160{,}2\\ \\text{kW}}$$ 9613 kW sale de no pasar las rpm a s<sup>−1</sup>; 25,5 kW, de olvidar el $2\\pi$; 80,1 kW, de usar $\\pi$; 4,06 kW, de dividir por $2\\pi$; 117,8 kW, de dividir además entre 1,36 (confusión con CV).", "Apuntes T1, diap. 18");
L("T1", "t1-motores", "Rendimiento térmico", 2, "Un MCIA da 160 kW efectivos consumiendo 36 kg/h de gasóleo ($H_c$ = 42,5 MJ/kg). ¿Cuál es su rendimiento térmico (efectivo)?",
  ["37,6 %", "10,5 %", "62,4 %", "3,76 %", "26,6 %"],
  0, "Combustión interna (Apuntes T1, diap. 17): $$\\eta_t=\\frac{\\dot W_e}{\\dot m_f H_c}$$ con $\\dot m_f = 36/3600 = 0{,}01$ kg/s: $$\\dot m_f H_c=0{,}01\\cdot42500=425\\ \\text{kW}$$ $$\\eta_t=\\frac{160}{425}=\\boxed{37{,}6\\ \\%}$$ 62,4 % es $1-\\eta_t$ (la fracción perdida); 10,5 % sale de tomar 36·42,5 = 1530 como si fueran kW; 3,76 %, de equivocarse en un factor 10 al pasar a kg/s; 26,6 % es el inverso mal escalado (425/160 = 2,66).", "Apuntes T1, diap. 17");
L("T1", "t1-motores", "Rendimiento térmico", 3, "En banco de ensayo, un motor da un par de 1200 N·m a 1500 min<sup>−1</sup> consumiendo 40 kg/h de combustible de $H_c$ = 42,7 MJ/kg. ¿Cuál es su rendimiento térmico?",
  ["39,7 %", "6,32 %", "19,9 %", "60,3 %", "11,0 %"],
  0, "Paso 1, potencia (Apuntes T1, diap. 18): $$\\dot W_e=M_e\\,2\\pi n=1200\\cdot2\\pi\\cdot\\frac{1500}{60}$$ $$=188{,}5\\ \\text{kW}$$ Paso 2, potencia del combustible: $$\\dot m_f H_c=\\frac{40}{3600}\\cdot42700=474{,}4\\ \\text{kW}$$ Paso 3 (diap. 17): $$\\eta_t=\\frac{188{,}5}{474{,}4}=\\boxed{39{,}7\\ \\%}$$ 6,32 % sale de olvidar el $2\\pi$ (30 kW); 19,9 %, de usar $\\pi$; 60,3 % es $1-\\eta_t$; 11,0 %, de no pasar el consumo de kg/h a kg/s de forma coherente (188,5/(40·42,7)).", "Apuntes T1, diap. 18");
L("T1", "t1-motores", "Rendimiento térmico", 2, "Una central de turbina de vapor recibe $\\dot Q_h$ = 850 MW en la caldera, cede $\\dot Q_c$ = 480 MW en el condensador y tiene unas pérdidas $\\dot Q_{loss}$ = 20 MW. ¿Cuál es su rendimiento térmico?",
  ["41,2 %", "43,5 %", "56,5 %", "58,8 %", "72,9 %", "45,9 %"],
  0, "Balance (Apuntes T1, diap. 6 y 17): $$\\dot W_e=\\dot Q_h-\\dot Q_c-\\dot Q_{loss}$$ $$=850-480-20=350\\ \\text{MW}$$ Motor de combustión externa: $$\\eta_t=\\frac{\\dot W_e}{\\dot Q_h}=\\frac{350}{850}=\\boxed{41{,}2\\ \\%}$$ 43,5 % olvida las pérdidas; 56,5 % es $\\dot Q_c/\\dot Q_h$; 58,8 % es $1-\\eta_t$; 72,9 % divide entre $\\dot Q_c$; 45,9 % suma las pérdidas en vez de restarlas.", "Apuntes T1, diap. 17");
L("T1", "t1-motores", "Motores de reacción", 2, "Un turborreactor vuela a $V_0$ = 250 m/s con un gasto de 100 kg/s, y el chorro sale a $V_s$ = 600 m/s. Despreciando el gasto de combustible, ¿cuál es la potencia propulsiva $\\dot W_p$?",
  ["8,75 MW", "14,88 MW", "21,0 MW", "15,0 MW", "6,13 MW", "0,035 MW"],
  0, "En un aerorreactor el aire entra a la velocidad de vuelo, $V_e = V_0$ (Apuntes T1, diap. 18): $$F_p=\\dot m\\,(V_s-V_e)=100\\cdot(600-250)$$ $$=35\\ \\text{kN}$$ $$\\dot W_p=F_p\\,V_0=35000\\cdot250$$ $$=\\boxed{8{,}75\\ \\text{MW}}$$ 14,88 MW es $\\dot W_e=\\tfrac12\\dot m(V_s^2-V_e^2)$, la potencia comunicada al chorro; 21,0 MW multiplica el empuje por $V_s$; 15,0 MW es $\\dot m V_s V_0$; 6,13 MW es $\\tfrac12\\dot m(V_s-V_e)^2$; 0,035 MW confunde el empuje (kN) con la potencia.", "Apuntes T1, diap. 18");
L("T1", "t1-motores", "Motores de reacción", 3, "Para el mismo turborreactor ($V_0$ = 250 m/s, $V_s$ = 600 m/s, 100 kg/s), ¿qué fracción de la potencia comunicada al chorro, $\\dot W_e$, se convierte en potencia propulsiva $\\dot W_p$?",
  ["0,588", "0,417", "0,583", "0,412", "1,70"],
  0, "Con las expresiones de la diap. 18 (Apuntes T1): $$\\dot W_e=\\tfrac12\\,\\dot m\\,(V_s^2-V_e^2)=\\tfrac12\\cdot100\\cdot(600^2-250^2)$$ $$=14{,}875\\ \\text{MW}$$ $$\\dot W_p=F_pV_0=8{,}75\\ \\text{MW}$$ $$\\frac{\\dot W_p}{\\dot W_e}=\\frac{8{,}75}{14{,}875}=\\boxed{0{,}588}$$ (equivale a $2V_0/(V_s+V_0)$). 0,417 es $V_0/V_s$; 0,583 es $(V_s-V_0)/V_s$; 0,412 es $1-0{,}588$; 1,70 es el cociente invertido.", "Apuntes T1, diap. 18");

/* ---------- Preguntas: tipos de motores ---------- */
L("T1", "t1-turbomotores", "Turbina de gas", 2, "¿Qué motor tiene, según los apuntes, rendimientos de hasta el 40 %, altas pérdidas a cargas parciales, arranques y paradas muy rápidos y poco personal de mantenimiento?",
  ["Turbina de gas", "Turbina de vapor", "Ciclo combinado", "MCIA"],
  0, "Diap. 23: turbina de gas → CCI basado en turbomáquinas, hasta 600 MW, muy alta potencia específica, rendimientos hasta <b>40 %</b> con <b>altas pérdidas a cargas parciales</b>, arranques <b>muy rápidos</b>, poco personal. La TV llega al 45 % con arranques lentos; el ciclo combinado al 63 % con arranques relativamente lentos; el MCIA al 52 % con pérdidas mínimas a carga parcial.", "Apuntes T1, diap. 23");
L("T1", "t1-turbomotores", "Turbina de vapor", 2, "¿Por qué la turbina de vapor es el motor de las centrales nucleares, de biomasa, solares de concentración y geotérmicas?",
  ["Porque es un motor de combustión (o aporte de calor) externa, apto para cualquier combustible o fuente de calor",
   "Porque es el motor de mayor potencia específica",
   "Porque arranca y para con mucha rapidez, como exigen esas fuentes",
   "Porque es el motor de mayor rendimiento de la tabla resumen"],
  0, "Diap. 21: la TV es un motor de <b>combustión (o aporte de calor) externa</b> basado en turbomáquinas, <b>apto para cualquier combustible</b>: el calor de un reactor, de biomasa, del sol o del subsuelo se transmite al vapor en un intercambiador. Tiene baja potencia específica, arranques lentos, y su rendimiento (hasta 45 %) es menor que el del ciclo combinado.", "Apuntes T1, diap. 21");
L("T1", "t1-turbomotores", "Ciclo combinado", 3, "Sobre el ciclo combinado, según las características de la diap. 25, ¿cuál es correcta?",
  ["Es un motor de combustión interna basado en turbomáquinas, con potencia específica baja",
   "Es un motor de combustión externa, porque la turbina de vapor recibe el calor de una caldera",
   "Arranca y para muy rápido, como la turbina de gas que lo encabeza",
   "Admite combustibles de baja calidad, como la turbina de vapor que incluye"],
  0, "Diap. 25: «Motor de Combustión Interna basado en turbomáquinas»; hasta 1200 MW (configuraciones 3x1) con <b>potencia específica baja</b>; hasta 63 %; arranques y paradas <b>relativamente lentos</b>; requiere combustible de <b>alta calidad</b> (como la turbina de gas). El combustible solo se quema en la TG, por eso es CCI aunque contenga un ciclo de vapor.", "Apuntes T1, diap. 25");
L("T1", "t1-turbomotores", "Turbina de gas", 2, "¿En qué aplicación aeronáutica se usa la turbina de gas como motor de <b>potencia en eje</b>, según la diap. 23?",
  ["Turbohélices y helicópteros", "Turbofanes", "Turborreactores", "Estatorreactores"],
  0, "Diap. 23: propulsión aérea con <b>potencia en eje</b> (turbohélices y helicópteros) y <b>de reacción</b> (turborreactores y turbofanes). El estatorreactor no lleva turbina de gas: es un aerorreactor sin compresor (diap. 35).", "Apuntes T1, diap. 23");
L("T1", "t1-turbomotores", "Comparativa", 2, "Ordena de mayor a menor rendimiento máximo los motores de las diap. 21-26.",
  ["Ciclo combinado &gt; MCIA &gt; turbina de vapor &gt; turbina de gas",
   "Ciclo combinado &gt; turbina de vapor &gt; MCIA &gt; turbina de gas",
   "MCIA &gt; ciclo combinado &gt; turbina de gas &gt; turbina de vapor",
   "Ciclo combinado &gt; MCIA &gt; turbina de gas &gt; turbina de vapor"],
  0, "Rendimientos máximos: ciclo combinado <b>63 %</b> (diap. 25), MCIA <b>52 %</b> (diap. 26), turbina de vapor <b>45 %</b> (diap. 21) y turbina de gas <b>40 %</b> (diap. 23).", "Apuntes T1, diap. 21-26");
L("T1", "t1-turbomotores", "Turbina de gas", 3, "¿Qué motor citan los apuntes para generación de <b>base en regiones desérticas</b> y generación de <b>puntas en redes pequeñas</b>?",
  ["Turbina de gas", "MCIA", "Turbina de vapor", "Ciclo combinado"],
  0, "Diap. 23: entre los campos de aplicación de la turbina de gas están la generación de base en regiones desérticas (no necesita agua de refrigeración), la generación de puntas en redes pequeñas y las plataformas marinas. El MCIA se cita para generación de base en <b>redes pequeñas (islas)</b> hasta 80 MW (diap. 27): es el distractor más cercano.", "Apuntes T1, diap. 23");

L("T1", "t1-mcia", "Características", 2, "¿Qué combinación de características corresponde a los MCIA según la diap. 26?",
  ["Potencia específica muy alta (menor que la TG), hasta 52 %, pérdidas mínimas a carga parcial y bajo coste de fabricación con alto coste de mantenimiento",
   "Potencia específica mayor que la TG, hasta 52 %, altas pérdidas a carga parcial y bajo coste de mantenimiento",
   "Potencia específica baja, hasta 45 %, pérdidas moderadas a carga parcial y arranques lentos",
   "Potencia específica muy alta (menor que la TG), hasta 63 %, pérdidas mínimas a carga parcial y alto coste de fabricación"],
  0, "Diap. 26: MCIA → combustión interna, volumétrico, hasta <b>80 MW</b>, potencia específica <b>muy alta (menos que TG)</b>, rendimientos hasta <b>52 %</b> con pérdidas <b>mínimas</b> a cargas parciales, arranques muy rápidos, modulares, <b>bajo coste de fabricación e instalación y alto coste de mantenimiento</b>. 45 % y arranques lentos son de la TV; 63 %, del ciclo combinado.", "Apuntes T1, diap. 26");
L("T1", "t1-mcia", "Características", 1, "¿Hasta qué potencia llegan los MCIA según los apuntes?",
  ["80 MW", "600 MW", "40 MW", "1200 MW"],
  0, "Diap. 26 y 32: hasta <b>80 MW</b> (el motor de generación eléctrica o marino de 80 MW pesa 2300 t). 600 MW es la TG; 1200 MW, el ciclo combinado; 40 MW es la potencia usual de un grupo electrógeno en la tabla resumen (diap. 41).", "Apuntes T1, diap. 26");
L("T1", "t1-mcia", "Clasificación", 2, "Con las clasificaciones del tema, un MCIA es un motor…",
  ["de combustión interna, ciclo abierto, potencia en eje y volumétrico",
   "de combustión interna, ciclo cerrado, potencia en eje y volumétrico",
   "de combustión interna, ciclo abierto, potencia en eje y de flujo continuo",
   "de combustión externa, ciclo abierto, potencia en eje y volumétrico"],
  0, "Diap. 15-18 y 26: combustión <b>interna</b> (luego <b>debe</b> ser de ciclo abierto), motor <b>volumétrico</b> (basado en máquinas volumétricas) con potencia en un <b>eje</b> rotativo. Los de flujo continuo son los basados en turbomáquinas.", "Apuntes T1, diap. 26");
L("T1", "t1-mcia", "Aplicaciones", 3, "¿Cuál de estos campos de aplicación NO aparece entre los del MCIA en los apuntes?",
  ["Propulsión aérea de aviones comerciales de largo recorrido",
   "Generación de base en redes pequeñas (islas)",
   "Helicópteros y drones",
   "Cogeneración en minería e industria alimentaria"],
  0, "Diap. 27: propulsión aérea del MCIA → aviación <b>ligera</b>, antiincendios y acrobacia, helicópteros y drones. También generación de base en islas (hasta 80 MW) y cogeneración (minería, alimentaria, química…). Los aviones comerciales usan turbofanes (diap. 36).", "Apuntes T1, diap. 27");

L("T1", "t1-reaccion", "Cohetes químicos", 2, "¿Cuál de estas afirmaciones sobre los cohetes de propulsante <b>sólido</b> es correcta?",
  ["Usan polvo de aluminio como combustible y perclorato de amonio como comburente; son sencillos pero tienen un solo arranque y no regulan la combustión",
   "Usan queroseno, H<sub>2</sub> o CH<sub>4</sub> con O<sub>2</sub> líquido y permiten regular el empuje",
   "Usan polvo de aluminio como comburente y perclorato de amonio como combustible; permiten varios arranques",
   "Se emplean sobre todo para recolocar satélites, con empujes de mN a 100 N"],
  0, "Diap. 34: sólidos → misiles (1 kN - 2 MN), lanzadores y boosters (5 - 15 MN); más sencillos pero menos gestionables (<b>un solo arranque, sin regulación</b>); mezcla de <b>aluminio</b> (combustible) y <b>perclorato de amonio</b> NH<sub>4</sub>ClO<sub>4</sub> (comburente). Queroseno/H<sub>2</sub>/CH<sub>4</sub> + O<sub>2</sub> líquido, regulación del empuje y recolocación de satélites son de los <b>líquidos</b>.", "Apuntes T1, diap. 34");
L("T1", "t1-reaccion", "Aerorreactores sin compresor", 3, "¿En qué se basa el funcionamiento del estatorreactor (ramjet)?",
  ["En la compresión dinámica del aire que entra, mediante ondas de choque oblicuas y un difusor",
   "En un compresor centrífugo accionado por una pequeña turbina",
   "En válvulas de láminas que impiden que los gases salgan por la admisión",
   "En las ondas de rarefacción del escape, que aspiran aire fresco en cada ciclo"],
  0, "Diap. 35: estatorreactor → «funcionamiento basado en compresión dinámica del aire que entra (ondas de choque oblicuas + difusor)»; por eso no puede arrancar parado. Las válvulas de láminas y las ondas de rarefacción son del <b>pulsorreactor</b>; un compresor accionado por turbina ya sería un aerorreactor con compresor.", "Apuntes T1, diap. 35");
L("T1", "t1-reaccion", "Aerorreactores sin compresor", 1, "Según los apuntes, el pulsorreactor…",
  ["se usó en la bomba V1 (2,7 kN), es ruidoso y muy poco eficiente, y hoy no tiene aplicación",
   "se usa como incrementador de empuje en aviones espía como el SR-71",
   "se usa en la punta de las palas de helicóptero como booster",
   "es el aerorreactor más eficiente a velocidades intermedias"],
  0, "Diap. 33 y 35: pulsorreactor → sin aplicación actual (V-1 de la Segunda Guerra Mundial, 2,7 kN), con o sin válvulas de láminas, <b>ruidoso y muy poco eficiente</b>. El SR-71 y las puntas de pala de helicóptero son aplicaciones del <b>estatorreactor</b>; el óptimo a velocidades intermedias es el turbofán.", "Apuntes T1, diap. 35");
L("T1", "t1-reaccion", "Turbofán", 3, "Sobre el turbofán de un avión comercial, ¿cuál es correcta según la diap. 36?",
  ["Parte del caudal comprimido por las primeras etapas no pasa por la cámara de combustión, lo que aumenta el rendimiento; grado de derivación de 5 a 12",
   "Parte del caudal no pasa por la cámara de combustión, lo que aumenta la potencia específica; grado de derivación de 0,3 a 2",
   "Todo el caudal pasa por la cámara de combustión, lo que da un rendimiento aceptable a Mach muy alto",
   "Una turbina de gas mueve el fan a través de una transmisión con hélice de geometría variable"],
  0, "Diap. 36: turbofán → una parte del caudal es <b>derivada</b> (no pasa por la C.C.) → <b>↑ rendimiento</b>; grados de derivación <b>0,3-2 en cazas</b> y <b>5-12 en comerciales</b>; óptimo a velocidades intermedias. Que todo el caudal pase por la cámara es el turborreactor (más potencia específica, menos rendimiento); la transmisión con hélice de geometría variable es el turbohélice.", "Apuntes T1, diap. 36");
L("T1", "t1-reaccion", "Turbohélice", 2, "¿Por qué la diap. 36 indica que el turbohélice «no es aerorreactor»?",
  ["Porque es un motor de potencia en eje: una turbina de gas mueve la hélice a través de una transmisión",
   "Porque no tiene compresor y no puede arrancar parado",
   "Porque lleva a bordo el comburente, como un cohete",
   "Porque su chorro de gases no produce ningún empuje"],
  0, "Diap. 33 y 36: turbohélice → «una turbina de gas alimenta la hélice mediante una transmisión»; «motor potencia en eje». Sí tiene compresor y usa el aire como comburente; la propulsión la da la hélice movida por el eje, no la reacción del chorro.", "Apuntes T1, diap. 36");
L("T1", "t1-reaccion", "Turborreactor", 3, "Frente al turbofán, el turborreactor es…",
  ["más barato y de más potencia específica, pero de menor rendimiento; aceptable a Mach muy alto",
   "más caro y de menos potencia específica, pero de mayor rendimiento a velocidades intermedias",
   "más barato y de menor potencia específica, pensado para aviones comerciales",
   "de mayor rendimiento a cualquier velocidad porque todo el caudal pasa por la cámara de combustión"],
  0, "Diap. 36: turborreactor → todo el caudal pasa por la cámara de combustión; rendimiento aceptable para M↑↑; <b>más baratos, más potencia específica, menos rendimiento</b>; cazas antiguos (9 - 95 kN) y misiles (&lt; 7 kN). El turbofán es el óptimo a velocidades intermedias y el de la aviación comercial.", "Apuntes T1, diap. 36");

L("T1", "t1-otros", "Máquina de vapor", 1, "Según los apuntes, la máquina de vapor…",
  ["fue el primer motor térmico, el único durante 150 años, con rendimientos de hasta el 5 %",
   "es un motor de combustión interna con rendimientos de hasta el 25 %",
   "solo puede usar carbón, por eso se abandonó",
   "fue el primer motor térmico, con rendimientos de hasta el 45 %"],
  0, "Diap. 37: primer motor térmico, único durante 150 años; puede usar <b>cualquier combustible</b> (combustión externa); rendimiento de <b>hasta 5 %</b>; hoy, aplicaciones muy puntuales. El 45 % es el de la turbina de vapor y el 25 % el de los ORC.", "Apuntes T1, diap. 37");
L("T1", "t1-otros", "Motor Wankel", 2, "¿Cómo se clasifica el motor Wankel?",
  ["Motor de combustión interna volumétrico rotativo",
   "Motor de combustión interna de flujo continuo (turbomáquina)",
   "Motor de combustión externa volumétrico rotativo",
   "Motor de combustión interna volumétrico alternativo"],
  0, "Diap. 39: «Motor de combustión interna volumétrico rotativo», de alta potencia específica, con aplicaciones puntuales en automoción y desarrollo de <i>range extenders</i> para híbridos. Gira, pero es volumétrico (varía el volumen de las cámaras entre rotor y carcasa), no una turbomáquina.", "Apuntes T1, diap. 39");
L("T1", "t1-otros", "Motor Stirling", 2, "¿Qué conjunto de características corresponde al motor Stirling según los apuntes?",
  ["Combustión externa; micro-CHP y disco Stirling solar; rendimientos que podrían ser muy altos, pero a un coste muy alto",
   "Combustión interna volumétrico rotativo; range extenders para vehículos híbridos",
   "Combustión externa; primer motor térmico, con rendimientos de hasta el 5 %",
   "Ciclo cerrado de CO<sub>2</sub> supercrítico; reactores nucleares avanzados"],
  0, "Diap. 38: Stirling → combustión externa; cogeneración (<b>micro-CHP</b>); solar de concentración (<b>disco Stirling</b>); aplicaciones puntuales (submarinos…); rendimientos que «podrían ser muy altos, pero a un coste muy alto». Range extenders → Wankel; 5 % → máquina de vapor; reactores avanzados → sCO<sub>2</sub>.", "Apuntes T1, diap. 38");
L("T1", "t1-otros", "ORC y sCO2", 3, "¿Qué emparejamiento entre ORC y ciclo de CO<sub>2</sub> supercrítico es correcto?",
  ["ORC: tipo «turbina de vapor» con fluido orgánico, &lt; 300 ºC, hasta 25 %. sCO<sub>2</sub>: tipo «turbina de gas» de ciclo cerrado, &gt; 550 ºC, hasta 50 % previsto",
   "ORC: tipo «turbina de gas» de ciclo cerrado, &lt; 300 ºC, hasta 25 %. sCO<sub>2</sub>: tipo «turbina de vapor», &gt; 550 ºC, hasta 50 % previsto",
   "ORC: tipo «turbina de vapor» con fluido orgánico, &gt; 550 ºC, hasta 50 %. sCO<sub>2</sub>: tipo «turbina de gas» de ciclo abierto, &lt; 300 ºC, hasta 25 %",
   "ORC: tipo «turbina de vapor» con agua a baja presión, &lt; 300 ºC, hasta 25 %. sCO<sub>2</sub>: tipo «turbina de gas» de ciclo abierto, &gt; 550 ºC, hasta 50 %"],
  0, "Diap. 40: <b>ORC</b> → motor «turbina de vapor» con fluidos <b>orgánicos</b> en vez de agua, para &lt; 300 ºC (geotermia, recuperación de calor), puede usar expansor volumétrico si es pequeño, hasta <b>25 %</b>. <b>sCO<sub>2</sub></b> → motor «turbina de gas» de <b>ciclo cerrado</b> con CO<sub>2</sub> supercrítico, para &gt; 550 ºC (nuclear avanzada, solar de alta temperatura), hasta <b>50 %</b> previsto.", "Apuntes T1, diap. 40");
L("T1", "t1-otros", "Tabla resumen", 3, "Según la tabla resumen, ¿qué motor tiene el mayor tamaño y peso por kW, requiere manejo de cenizas y limpieza de gases, y mantenimiento diario?",
  ["Turbina de vapor", "Ciclo combinado", "Turbina de gas", "Motor diésel o de gas natural"],
  0, "Diap. 41: turbina de vapor → tamaño y peso por kW <b>muy alto</b>; requerimientos: manejo de cenizas, suministro de agua y limpieza de gases; mantenimiento <b>diario</b>; combustible de calidad media a baja (líquido, sólido o gas). El ciclo combinado también tiene mantenimiento diario, pero su tamaño es «alto» y sus requerimientos son filtros de aire y agua.", "Apuntes T1, diap. 41");
L("T1", "t1-otros", "Tabla resumen", 3, "¿Qué pareja motor ↔ factor a media carga es la de la tabla resumen?",
  ["Turbina de vapor: 0,91 - 0,96", "Turbina de gas: 1,0", "Ciclo combinado: 0,91 - 0,96", "Motor diésel o gas natural: 0,8 - 0,85"],
  0, "Diap. 41: factor a media carga → motor diésel o gas natural <b>1,0</b>; turbina de gas <b>0,8 - 0,85</b>; turbina de vapor <b>0,91 - 0,96</b>; ciclo combinado <b>0,84 - 0,88</b>. Coherente con las «pérdidas mínimas» del MCIA y las «altas pérdidas» de la TG a cargas parciales.", "Apuntes T1, diap. 41");
L("T1", "t1-otros", "Tabla resumen", 2, "Según la tabla resumen, ¿qué motor tiene un rango de potencia usual de 100 kW a 600 MW, el menor tamaño y peso por kW y mantenimiento mensual y anual?",
  ["Turbina de gas", "Motor diésel o gas natural", "Turbina de vapor", "Ciclo combinado"],
  0, "Diap. 41: turbina de gas → 100 kW - 600 MW, tamaño y peso por kW <b>bajo</b>, filtros de aire y silenciadores de escape, rendimiento 0,25 - 0,40, mantenimiento <b>mensual y anual</b>. El motor diésel o de gas: &lt; 10 MW (cogeneración) o &lt; 40 MW (g.e.), tamaño medio, mantenimiento semanal y mensual.", "Apuntes T1, diap. 41");

/* ---------- Preguntas: ciclo combinado y cogeneración ---------- */
L("T1", "t1-cogeneracion", "Ciclo combinado", 2, "¿Por qué el rendimiento de un ciclo combinado es «potencialmente muy alto», según los apuntes?",
  ["Porque combina una alta temperatura de foco caliente (la combustión del MCI) con una baja temperatura de foco frío (la cesión del MCE)",
   "Porque se quema combustible tanto en el MCI como en la caldera del MCE",
   "Porque la caldera de recuperación aporta calor adicional al del combustible",
   "Porque el MCE no tiene pérdidas al trabajar con el calor residual"],
  0, "Diap. 43: «Rendimiento potencialmente muy alto: alta temperatura de foco caliente y baja temperatura de foco frío». Solo se quema combustible en el MCI (en el denominador de $\\eta_t$ solo aparece $\\dot m_f H_c$); la caldera de recuperación únicamente traslada el calor de escape al MCE.", "Apuntes T1, diap. 43");
L("T1", "t1-cogeneracion", "Cogeneración", 3, "¿En qué motor la cogeneración se consigue <b>disminuyendo la energía mecánica generable</b>, según los apuntes?",
  ["En la turbina de vapor (motor de combustión externa)",
   "En la turbina de gas, porque se aprovecha el calor del escape",
   "En el MCIA, porque se aprovecha el agua de refrigeración",
   "En ninguno: la cogeneración nunca reduce la energía mecánica"],
  0, "Diap. 44: en <b>MCI</b> (MCIA y TG) se aprovecha energía <b>residual</b> de escape y/o refrigeración, sin quitar potencia mecánica. En <b>MCE</b> (TV) hay «disminución de la energía mecánica generable para generar energía térmica»: el calor útil es el de condensación $\\dot Q_{cond} = \\dot m_v(h_6-h_1)$, que exige condensar a más presión o extraer vapor.", "Apuntes T1, diap. 44");
L("T1", "t1-cogeneracion", "Rendimiento eléctrico equivalente", 2, "Una planta de cogeneración consume $\\dot m_f H_c$ = 10 MW de combustible y produce $\\dot W_t$ = 4 MW mecánicos y $\\dot Q_{pi}$ = 4,5 MW de calor útil. Con un rendimiento de caldera convencional de referencia $\\eta_c$ = 0,9, ¿cuál es el rendimiento eléctrico equivalente?",
  ["0,800", "0,850", "0,400", "0,672", "0,727", "0,267"],
  0, "Expresión de la diap. 44 (Apuntes T1): $$\\eta_{t_{ee}}=\\frac{\\dot W_t}{\\dot m_f H_c-\\dfrac{\\dot Q_{pi}}{\\eta_c}}$$ $$=\\frac{4}{10-\\dfrac{4{,}5}{0{,}9}}=\\frac{4}{10-5}$$ $$=\\boxed{0{,}800}$$ 0,850 es el rendimiento energético global $(4+4{,}5)/10$; 0,400 es $\\dot W_t/(\\dot m_fH_c)$; 0,672 multiplica por $\\eta_c$ en vez de dividir; 0,727 olvida $\\eta_c$; 0,267 suma en lugar de restar.", "Apuntes T1, diap. 44");
L("T1", "t1-cogeneracion", "Calor de cogeneración", 3, "Un MCIA de cogeneración descarga $\\dot m_{a+f}$ = 2,5 kg/s de gases a 420 ºC, que se enfrían en la caldera de recuperación hasta la temperatura ambiente de 20 ºC ($c_p$ = 1,1 kJ/kg·K), y además se aprovechan $\\dot Q_{ref}$ = 1,2 MW del circuito de refrigeración. ¿Qué potencia térmica útil se obtiene, según la expresión de los apuntes?",
  ["2,30 MW", "1,10 MW", "3,11 MW", "2,36 MW", "1,20 MW", "0,10 MW"],
  0, "Expresión para MCIA (Apuntes T1, diap. 44): $$\\dot Q=\\dot m_{a+f}\\,(h_{esc}-h_{amb})+\\dot Q_{ref}$$ $$=2{,}5\\cdot1{,}1\\cdot(420-20)+1200\\ \\text{kW}$$ $$=1100+1200=\\boxed{2{,}30\\ \\text{MW}}$$ 1,10 MW olvida la refrigeración; 1,20 MW es solo la refrigeración; 3,11 MW usa la temperatura absoluta del escape (693 K) en lugar del salto; 2,36 MW toma 420 K de salto; 0,10 MW resta los términos.", "Apuntes T1, diap. 44");
L("T1", "t1-cogeneracion", "Calor de cogeneración", 3, "Una turbina de gas trasiega $\\dot m_a$ = 80 kg/s de aire con un dosado absoluto $F$ = 0,02. Los gases salen de la turbina a $T_4$ = 550 ºC y se aprovechan en una caldera hasta $T_1$ = 15 ºC ($c_p$ = 1,08 kJ/kg·K). ¿Qué potencia térmica de cogeneración da la expresión de los apuntes?",
  ["47,1 MW", "46,2 MW", "48,5 MW", "72,5 MW", "0,92 MW", "71,2 MW"],
  0, "Caudal de gases: $$\\dot m_{a+f}=\\dot m_a\\,(1+F)=80\\cdot1{,}02=81{,}6\\ \\text{kg/s}$$ Expresión para TG (Apuntes T1, diap. 44): $$\\dot Q=\\dot m_{a+f}\\,(h_4-h_1)$$ $$=81{,}6\\cdot1{,}08\\cdot(550-15)\\ \\text{kW}$$ $$=\\boxed{47{,}1\\ \\text{MW}}$$ 46,2 MW olvida el combustible ($\\dot m_a$ solo); 48,5 MW toma 550 K de salto; 72,5 MW usa $T_4$ absoluta; 71,2 MW resta 15 a la $T_4$ en kelvin; 0,92 MW usa solo el caudal de combustible.", "Apuntes T1, diap. 44");
L("T1", "t1-cogeneracion", "Rendimiento del ciclo combinado", 3, "En un ciclo combinado, la turbina de gas recibe $\\dot m_f H_c$ = 700 MW de combustible y da 270 MW. La caldera de recuperación transfiere $\\dot Q_h$ = 380 MW al ciclo de vapor, cuyo rendimiento térmico es 0,36. ¿Cuál es el rendimiento térmico del ciclo combinado?",
  ["58,1 %", "38,6 %", "92,9 %", "74,6 %", "60,7 %", "37,7 %"],
  0, "Potencia del MCE: $$\\dot W_{MCE}=\\eta_{MCE}\\,\\dot Q_h=0{,}36\\cdot380=136{,}8\\ \\text{MW}$$ Rendimiento del conjunto (Apuntes T1, diap. 43): $$\\eta_t=\\frac{\\dot W_{MCI}+\\dot W_{MCE}}{\\dot m_f H_c}$$ $$=\\frac{270+136{,}8}{700}=\\boxed{58{,}1\\ \\%}$$ 38,6 % es solo la TG; 92,9 % suma el calor recuperado como si fuera trabajo; 74,6 % suma los dos rendimientos; 60,7 % supone que se recupera todo el calor no convertido por la TG (430 MW); 37,7 % añade $\\dot Q_h$ al denominador como si fuera combustible.", "Apuntes T1, diap. 43");
L("T1", "t1-cogeneracion", "Consumo de combustible", 2, "Un ciclo combinado de 800 MW funciona con un rendimiento del 60 % quemando gas natural de $H_c$ = 50 MJ/kg. ¿Qué gasto de combustible necesita?",
  ["26,7 kg/s", "9,6 kg/s", "16,0 kg/s", "44,4 kg/s", "96,0 kg/s", "0,0267 kg/s"],
  0, "De la definición de rendimiento (Apuntes T1, diap. 43): $$\\dot m_f=\\frac{\\dot W}{\\eta_t\\,H_c}=\\frac{800\\ \\text{MW}}{0{,}6\\cdot50\\ \\text{MJ/kg}}$$ $$=\\boxed{26{,}7\\ \\text{kg/s}}$$ (≈ 96 t/h). 9,6 kg/s multiplica por $\\eta$ en vez de dividir; 16,0 kg/s ignora el rendimiento; 44,4 kg/s divide dos veces por 0,6; 96,0 kg/s confunde t/h con kg/s; 0,0267 kg/s mezcla MW con kJ/kg.", "Apuntes T1, diap. 43");

/* ---------- Preguntas: combustión y emisiones ---------- */
L("T1", "t1-combustion", "Tipos de combustión", 1, "¿Qué define a una combustión por <b>difusión</b> (llama de difusión)?",
  ["El combustible se mezcla con el aire simultáneamente al fenómeno de combustión",
   "Aire y combustible se mezclan antes de empezar la reacción y un frente de llama avanza por difusión térmica y molecular",
   "La mezcla se inflama de forma descentralizada por activación térmica o radicales activos",
   "Un frente de llama supersónico recorre la mezcla"],
  0, "Diap. 46: llama de difusión → mezcla <b>simultánea</b> a la combustión. Las otras tres opciones son combustiones <b>premezcladas</b>: deflagración (frente subsónico que avanza por difusión térmica y molecular), autoinflamación y detonación (frente supersónico).", "Apuntes T1, diap. 46");
L("T1", "t1-combustion", "Tipos de combustión", 3, "Según los apuntes, una <b>deflagración</b> es…",
  ["una combustión premezclada por frente de llama subsónico, que avanza por difusión térmica y molecular hacia la mezcla no quemada",
   "una combustión por difusión, porque el frente avanza por difusión térmica y molecular",
   "una combustión premezclada por frente de llama supersónico",
   "una combustión premezclada descentralizada por autoinflamación"],
  0, "Diap. 46: premezclada → (a) por frente de llama: <b>subsónico = deflagración</b> (avanza por difusión térmica y molecular hacia la mezcla no quemada) o supersónico = detonación; (b) descentralizada por autoinflamación. La palabra «difusión» en la deflagración describe cómo avanza el frente, no cómo se mezclan los reactantes: no es una llama de difusión.", "Apuntes T1, diap. 46");
L("T1", "t1-combustion", "Dosado estequiométrico", 2, "Con la expresión de los apuntes, ¿cuál es el dosado estequiométrico del propano (C<sub>3</sub>H<sub>8</sub>)?",
  ["1/15,6", "1/17,16", "1/15,05", "1/21,84", "1/3,64", "1/23,8"],
  0, "Apuntes T1, diap. 48, con $x = 3$, $y = 8$: $$F_e=\\frac{12x+y}{137{,}28\\left(x+\\tfrac{y}{4}\\right)}=\\frac{36+8}{137{,}28\\cdot5}$$ $$=\\frac{44}{686{,}4}=0{,}0641=\\boxed{1/15{,}6}$$ 1/17,16 es el del metano y 1/15,05 el del octano; 1/21,84 usa $a = x + y/2$; 1/3,64 usa solo la masa de O<sub>2</sub> (32 en vez de 137,28); 1/23,8 confunde la relación másica con los moles de aire por mol de combustible (4,76·5).", "Apuntes T1, diap. 48");
L("T1", "t1-combustion", "Dosado estequiométrico", 3, "Un combustible modelo de queroseno es el dodecano, C<sub>12</sub>H<sub>26</sub>. ¿Cuál es su dosado estequiométrico según la expresión de los apuntes?",
  ["1/14,94", "1/20,19", "1/3,48", "1/30,69", "1/15,05", "1/17,16"],
  0, "Apuntes T1, diap. 47-48: $a = x + y/4 = 12 + 6{,}5 = 18{,}5$. $$F_e=\\frac{12\\cdot12+26}{137{,}28\\cdot18{,}5}$$ $$=\\frac{170}{2539{,}7}=0{,}0669=\\boxed{1/14{,}94}$$ 1/20,19 usa $a = x + y/2$; 1/3,48 usa solo el O<sub>2</sub>; 1/30,69 usa $a = x + y$; 1/15,05 y 1/17,16 son el octano y el metano.", "Apuntes T1, diap. 48");
L("T1", "t1-combustion", "Dosado relativo", 2, "Un motor de propano ($F_e$ = 1/15,6) aspira 120 g/s de aire y consume 6 g/s de combustible. ¿Cuál es el factor lambda?",
  ["1,28", "0,78", "20,0", "0,050", "1,00", "0,0032"],
  0, "Apuntes T1, diap. 47: $$F=\\frac{\\dot m_f}{\\dot m_a}=\\frac{6}{120}=0{,}05$$ $$F_R=\\frac{F}{F_e}=0{,}05\\cdot15{,}6=0{,}78$$ $$\\lambda=\\frac{1}{F_R}=\\boxed{1{,}28}$$ Mezcla <b>pobre</b> ($F_R \\lt 1$, $\\lambda \\gt 1$). 0,78 es $F_R$; 20,0 es la relación aire/combustible; 0,050 es el dosado absoluto; 0,0032 divide $F$ entre 15,6.", "Apuntes T1, diap. 47");
L("T1", "t1-combustion", "Dosado relativo", 3, "Un motor diésel trabaja con dosado relativo $F_R$ = 0,6 consumiendo 18 kg/h de gasóleo ($F_e$ = 1/14,5). ¿Cuál es el gasto másico de gases de escape?",
  ["0,126 kg/s", "0,121 kg/s", "0,0485 kg/s", "0,0775 kg/s", "0,116 kg/s", "0,0050 kg/s"],
  0, "Apuntes T1, diap. 47: $F = F_R\\,F_e = 0{,}6/14{,}5$. $$\\dot m_a=\\frac{\\dot m_f}{F_R\\,F_e}=\\frac{18\\cdot14{,}5}{0{,}6}=435\\ \\text{kg/h}$$ $$\\dot m_{ge}=\\dot m_a+\\dot m_f=453\\ \\text{kg/h}$$ $$=\\boxed{0{,}126\\ \\text{kg/s}}$$ 0,121 kg/s es solo el aire; 0,0485 kg/s multiplica por $F_R$ en vez de dividir; 0,0775 kg/s es el estequiométrico; 0,116 kg/s resta el combustible; 0,0050 kg/s es solo el combustible.", "Apuntes T1, diap. 47");
L("T1", "t1-combustion", "Dosado relativo", 3, "Una turbina de gas trasiega 500 kg/s de aire con dosado relativo $F_R$ = 0,35 quemando metano ($F_e$ = 1/17,16; $H_c$ = 50 MJ/kg). Si su rendimiento térmico es del 38 %, ¿qué potencia efectiva da?",
  ["193,8 MW", "553,6 MW", "509,9 MW", "1582 MW", "73,6 MW"],
  0, "Gasto de combustible (Apuntes T1, diap. 47): $$\\dot m_f=\\dot m_a\\,F_R\\,F_e=\\frac{500\\cdot0{,}35}{17{,}16}=10{,}20\\ \\text{kg/s}$$ Potencia (diap. 17): $$\\dot W_e=\\eta_t\\,\\dot m_f H_c=0{,}38\\cdot10{,}20\\cdot50$$ $$=\\boxed{193{,}8\\ \\text{MW}}$$ 553,6 MW ignora $F_R$ (dosado estequiométrico); 509,9 MW es $\\dot m_f H_c$ sin rendimiento; 1582 MW divide entre $F_R$ en vez de multiplicar; 73,6 MW aplica el rendimiento dos veces.", "Apuntes T1, diap. 47");
L("T1", "t1-combustion", "Emisión de CO2", 1, "Con la expresión de los apuntes, ¿cuántos kg de CO<sub>2</sub> se emiten por kg de metano (CH<sub>4</sub>) quemado?",
  ["2,75", "3,67", "3,09", "1,375", "3,00", "2,25"],
  0, "Apuntes T1, diap. 48, con $y/x = 4$: $$\\frac{44}{12+y/x}=\\frac{44}{16}=\\boxed{2{,}75\\ \\tfrac{\\text{kg CO}_2}{\\text{kg fuel}}}$$ 3,67 = 44/12 (ignora el hidrógeno, como si fuera carbono puro); 3,09 es el octano y 3,00 el propano; 1,375 = 44/32; 2,25 es el agua por kg de metano (9·4/16).", "Apuntes T1, diap. 48");
L("T1", "t1-combustion", "Emisión de CO2", 3, "Un motor de gas natural (supuesto metano puro, $H_c$ = 50 MJ/kg) trabaja con un rendimiento efectivo del 40 %. ¿Cuánto CO<sub>2</sub> emite por kWh efectivo?",
  ["0,495 kg/kWh", "0,198 kg/kWh", "0,180 kg/kWh", "0,660 kg/kWh", "0,0792 kg/kWh", "0,1375 kg/kWh"],
  0, "Apuntes T1, diap. 48: por kg de combustible, $44/(12+4) = 2{,}75$ kg CO<sub>2</sub>. Combustible por kWh efectivo (1 kWh = 3,6 MJ): $$\\frac{3{,}6}{\\eta_e\\,H_c}=\\frac{3{,}6}{0{,}4\\cdot50}=0{,}18\\ \\text{kg/kWh}$$ $$2{,}75\\cdot0{,}18=\\boxed{0{,}495\\ \\text{kg CO}_2/\\text{kWh}}$$ 0,198 olvida el rendimiento; 0,180 es el combustible, no el CO<sub>2</sub>; 0,660 usa 44/12; 0,0792 multiplica por $\\eta$; 0,1375 no convierte 1 kWh a 3,6 MJ.", "Apuntes T1, diap. 48");
L("T1", "t1-combustion", "Contaminantes", 2, "Según los apuntes, el CO<sub>2</sub> emitido por un motor térmico…",
  ["es un gas de efecto invernadero que actúa a nivel planetario y no se considera gas contaminante",
   "es un contaminante primario de nivel zonal, como el NOx",
   "es un contaminante secundario, formado en la atmósfera a partir del CO",
   "es un contaminante de nivel local, típico de garajes y túneles"],
  0, "Diap. 50-51: gases de efecto invernadero → causantes del cambio climático (principalmente CO<sub>2</sub>); <b>no</b> son un problema local sino global; <b>no son gases contaminantes</b>. Nivel planetario → CO<sub>2</sub>. El de nivel local (garajes, túneles) es el <b>CO</b>.", "Apuntes T1, diap. 50");
L("T1", "t1-combustion", "Niveles de emisión", 3, "¿Qué emisiones asignan los apuntes al nivel <b>transfronterizo</b>?",
  ["SO<sub>2</sub> (que da ácido sulfúrico), NOx (que da ácido nítrico) y PM<sub>2,5</sub>",
   "CO, HC, SO<sub>2</sub>, PM, NOx y O<sub>3</sub>",
   "CO",
   "CO<sub>2</sub>"],
  0, "Diap. 51: local (garajes, túneles) → CO; zonal/regional/gran urbe → CO, HC, SO<sub>2</sub>, PM, NOx, O<sub>3</sub>; <b>transfronterizo</b> → SO<sub>2</sub> → ácido sulfúrico, NOx → ácido nítrico, PM<sub>2,5</sub>; planetario → CO<sub>2</sub>.", "Apuntes T1, diap. 51");
L("T1", "t1-combustion", "NOx", 3, "Sobre la formación de NOx, ¿cuál es correcta según los apuntes?",
  ["$N_2 + O_2 \\Leftrightarrow 2NO$ se desplaza a la derecha a temperaturas muy altas (1550 ºC) y con exceso de O<sub>2</sub>; la máxima emisión se da con $F_R \\approx 0{,}9$",
   "Se forma sobre todo en mezclas ricas, con máxima emisión hacia $F_R \\approx 1{,}1$, porque falta oxígeno",
   "Se forma a temperaturas moderadas; al bajar rápidamente la temperatura, el NO se descompone en N<sub>2</sub> y O<sub>2</sub>",
   "El NO<sub>2</sub> es el asfixiante y el NO es el irritante que afecta al sistema inmunológico"],
  0, "Diap. 52: $N_2 + O_2 \\Leftrightarrow 2NO$ se desplaza a la derecha a temperaturas <b>muy altas (1550 ºC)</b>; está favorecido por <b>exceso de O<sub>2</sub></b> → dosado relativo de máxima emisión <b>0,9</b> (ligeramente pobre). Al enfriar rápido la reacción se <b>congela</b> (el NO no se descompone) y el NO se oxida poco a poco a NO<sub>2</sub>. El NO es el asfixiante; el NO<sub>2</sub>, el irritante.", "Apuntes T1, diap. 52");
L("T1", "t1-combustion", "Partículas", 3, "Sobre las partículas (PM), ¿cuál es correcta según los apuntes?",
  ["Las menores de 2,5 µm llegan a los alveolos pulmonares; se forman por deshidrogenación a muy alta temperatura en zonas faltas de O<sub>2</sub>, con nucleación, crecimiento, agregación y condensación",
   "Las menores de 5 µm quedan retenidas en las vías respiratorias; se forman por apagado de la llama en zonas frías",
   "Las mayores de 5 µm llegan a los alveolos; se forman en zonas con exceso de O<sub>2</sub> a muy alta temperatura",
   "Se forman por condensación, crecimiento, nucleación y agregación, en ese orden, todo ello en el escape"],
  0, "Diap. 53: &gt; 5 µm → retenidas en las vías respiratorias o caen al suelo; <b>&lt; 2,5 µm → alveolos</b>, cancerígenas e irritantes, efecto acumulativo. Formación: <b>deshidrogenación</b> a muy alta T en zonas <b>faltas de O<sub>2</sub></b> → hollín; <b>nucleación</b> (esqueleto carbonoso), <b>crecimiento</b> (en llama), <b>agregación</b> (en gases de escape), <b>condensación</b> (se añaden hidrocarburos). El apagado de llama en zonas frías forma <b>HC</b>.", "Apuntes T1, diap. 53");
L("T1", "t1-combustion", "CO", 2, "Sobre el monóxido de carbono, ¿cuál es correcta según los apuntes?",
  ["Es un producto intermedio de la combustión; a alta temperatura y con poco O<sub>2</sub> la reacción $2CO + O_2 \\Leftrightarrow 2CO_2$ se desplaza hacia el CO y se congela si la temperatura baja rápido",
   "Se forma por exceso de O<sub>2</sub> a muy alta temperatura, con máximo hacia $F_R \\approx 0{,}9$",
   "Es irritante y afecta al sistema inmunológico, y en la atmósfera persiste durante años",
   "Es un contaminante secundario que se forma en la atmósfera por acción fotoquímica"],
  0, "Diap. 52: CO → fuertemente asfixiante («muerte dulce»); producto <b>intermedio</b> de la combustión ($2CO + O_2 \\Leftrightarrow 2CO_2$); a <b>altas temperaturas y poca presencia de O<sub>2</sub></b> la reacción se desplaza; al bajar rápido la temperatura se congela; en <b>horas</b>, en la atmósfera, pasa a CO<sub>2</sub>. El máximo en $F_R \\approx 0{,}9$ y el carácter irritante son del NOx; es un contaminante <b>primario</b>.", "Apuntes T1, diap. 52");

/* ---------- Tarjetas ---------- */
C("T1", "t1-definiciones", "Máquina de fluido", "Conjunto de elementos mecánicos que intercambian <b>energía mecánica</b> con el exterior a través de un <b>eje</b> mediante la variación de energía del fluido que la atraviesa.");
C("T1", "t1-definiciones", "Máquina hidráulica frente a térmica", "Hidráulica: fluido <b>incompresible</b>, varía su energía mecánica. Térmica: fluido <b>compresible</b>, varía su energía térmica (y mecánica).");
C("T1", "t1-definiciones", "Motor térmico", "Obtiene energía mecánica (normalmente en un eje) del <b>estado térmico</b> generado por combustión, reacción nuclear, radiación solar concentrada o un intercambiador de calor. Contiene varias máquinas térmicas.");
C("T1", "t1-maquinas", "Motoras y generadoras", "Motora (expansor): el fluido <b>reduce</b> su estado térmico, se obtiene trabajo. Generadora (compresor): lo <b>aumenta</b>, se aporta trabajo.");
C("T1", "t1-maquinas", "Volumétricas (5 rasgos)", "Variación del volumen de control · flujo discontinuo · bajas velocidades → pequeños caudales · baja fricción · <b>no adiabáticas</b>. Alternativas o rotativas.");
C("T1", "t1-maquinas", "Turbomáquinas (6 rasgos)", "Acción dinámica · rotativas · flujo continuo · altas velocidades → grandes caudales · alta fricción · <b>adiabáticas</b>. Escalonamientos de rotor + estator.");
C("T1", "t1-motores", "Ciclo cerrado frente a abierto", "Cerrado: HX caliente y frío, condiciona la <b>T</b> atmosférica, <b>debe</b> ser CCE. Abierto: fluido renovado y sin coste, condiciona la <b>p</b> atmosférica, <b>suele</b> ser CCI.");
C("T1", "t1-motores", "Combustión externa frente a interna", "CCE: T máx. limitada, baja potencia específica, combustibles de baja calidad, fluido sin transformación química, $\\eta_t = \\dot W_e/\\dot Q_h$. CCI: lo contrario, <b>debe</b> ser de ciclo abierto, $\\eta_t = \\dot W_e/(\\dot m_f H_c)$.");
C("T1", "t1-motores", "Potencia en eje y de reacción", "Eje: $\\dot W_e = M_e 2\\pi n$. Reacción: $\\dot W_e = \\tfrac12\\dot m(V_s^2 - V_e^2)$, $F_p = \\dot m(V_s - V_e)$, $\\dot W_p = F_p V_0$; solo propulsión.");
C("T1", "t1-turbomotores", "Turbina de vapor: cifras", "CCE con turbomáquinas; hasta <b>45 %</b>; baja potencia específica; arranques lentos; cualquier combustible; nuclear, carbón, biomasa, solar, geotermia, district heating, propulsión naval nuclear.");
C("T1", "t1-turbomotores", "Turbina de gas: cifras", "CCI con turbomáquinas; hasta <b>600 MW</b> y <b>40 %</b>; muy alta potencia específica; altas pérdidas a carga parcial; arranques muy rápidos; combustible de alta calidad.");
C("T1", "t1-turbomotores", "Ciclo combinado: cifras", "CCI con turbomáquinas; hasta <b>1200 MW</b> (3x1) y <b>63 %</b>; potencia específica baja; arranques relativamente lentos; generación de base.");
C("T1", "t1-mcia", "MCIA: cifras", "CCI volumétrico; hasta <b>80 MW</b> y <b>52 %</b>; potencia específica muy alta (menor que TG); pérdidas mínimas a carga parcial; modular; barato de fabricar y caro de mantener.");
C("T1", "t1-reaccion", "Cohetes sólidos frente a líquidos", "Sólidos: Al + perclorato de amonio, un solo arranque, sin regulación, misiles y boosters. Líquidos: queroseno/H<sub>2</sub>/CH<sub>4</sub> + O<sub>2</sub> líquido, empuje regulable.");
C("T1", "t1-reaccion", "Aerorreactores", "Sin compresor: estatorreactor (compresión dinámica, no arranca parado) y pulsorreactor (V1, ruidoso). Con compresor: turborreactor (todo el caudal por la C.C.) y turbofán (derivación 5-12 en comerciales). Turbohélice: potencia en eje, <b>no</b> es aerorreactor.");
C("T1", "t1-otros", "Vapor, Stirling, Wankel", "Máquina de vapor: CCE, primer motor, ≤ 5 %. Stirling: CCE, micro-CHP, disco Stirling. Wankel: CCI volumétrico rotativo, range extenders.");
C("T1", "t1-otros", "ORC frente a sCO2", "ORC: «turbina de vapor» con fluido orgánico, &lt; 300 ºC, ≤ 25 %. sCO<sub>2</sub>: «turbina de gas» de ciclo cerrado, &gt; 550 ºC, ≤ 50 % previsto.");
C("T1", "t1-otros", "Tabla resumen: rendimientos y media carga", "Diésel/gas 0,20-0,52 (1,0) · TG 0,25-0,40 (0,8-0,85) · TV 0,35-0,45 (0,91-0,96) · CC 0,48-0,63 (0,84-0,88).");
C("T1", "t1-cogeneracion", "Rendimientos de la cogeneración", "Global: $\\eta_t = (\\dot W_t + \\dot Q_{pi})/(\\dot m_f H_c)$. Eléctrico equivalente: $\\eta_{t_{ee}} = \\dot W_t/(\\dot m_f H_c - \\dot Q_{pi}/\\eta_c)$.");
C("T1", "t1-combustion", "Dosado estequiométrico de $C_xH_y$", "$F_e = \\dfrac{12x + y}{137{,}28\\,(x + y/4)}$. CH<sub>4</sub> 1/17,16; C<sub>3</sub>H<sub>8</sub> 1/15,6; C<sub>8</sub>H<sub>18</sub> 1/15,05.");
C("T1", "t1-combustion", "Dosado relativo y lambda", "$F_R = F/F_e$, $\\lambda = 1/F_R$. Pobre: $F_R \\lt 1$, $\\lambda \\gt 1$ (sobra aire). Rica: $F_R \\gt 1$, $\\lambda \\lt 1$.");
C("T1", "t1-combustion", "CO<sub>2</sub> por kg de combustible", "$44/(12 + y/x)$ kg CO<sub>2</sub>/kg. Metano 2,75; octano 3,09; carbono puro 3,67. Por kWh interviene el rendimiento efectivo.");
C("T1", "t1-combustion", "NOx: formación", "$N_2 + O_2 \\Leftrightarrow 2NO$ a T muy altas (1550 ºC) y con exceso de O<sub>2</sub>; máxima emisión con $F_R \\approx 0{,}9$; se congela al enfriar; NO → NO<sub>2</sub> poco a poco.");
C("T1", "t1-combustion", "Niveles de emisión", "Local: CO. Zonal/gran urbe: CO, HC, SO<sub>2</sub>, PM, NOx, O<sub>3</sub>. Transfronterizo: ácidos de SO<sub>2</sub> y NOx, PM<sub>2,5</sub>. Planetario: CO<sub>2</sub>.");

/* ---------- Ejercicios ---------- */
DRILLS.push({ id: "t1-c-maquinas", type: "classify", tema: "T1", sec: "t1-maquinas", title: "¿Volumétrica o turbomáquina? (diap. 10-13)", cats: ["Volumétrica", "Turbomáquina"], items: [
  ["Compresor scroll", 0], ["Compresor de tornillo", 0], ["Compresor de paletas", 0], ["Compresor de Roots", 0], ["Compresor alternativo de pistón", 0], ["Flujo discontinuo y baja fricción", 0], ["No adiabática", 0],
  ["Turbocompresor axio-radial (centrífugo)", 1], ["Turbina radio-axial (centrípeta)", 1], ["Turbina axial", 1], ["Escalonamientos de rotor y estator", 1], ["Grandes caudales y alta fricción", 1], ["Adiabática", 1]] });
DRILLS.push({ id: "t1-c-combustion", type: "classify", tema: "T1", sec: "t1-motores", title: "¿Combustión interna o externa? (diap. 17-40)", cats: ["Combustión interna", "Combustión externa"], items: [
  ["Turbina de gas de ciclo abierto", 0], ["Motor Wankel", 0], ["MCIA diésel", 0], ["Ciclo combinado", 0], ["Turborreactor", 0], ["Fluido que sufre transformación química", 0], ["Alta potencia específica", 0],
  ["Turbina de vapor", 1], ["Máquina de vapor", 1], ["Motor Stirling", 1], ["Ciclo de CO2 supercrítico", 1], ["Ciclo Rankine orgánico", 1], ["Combustibles de baja calidad", 1]] });
DRILLS.push({ id: "t1-m-cifras", type: "match", tema: "T1", sec: "t1-turbomotores", title: "Motor ↔ rendimiento máximo (diap. 21-40)", pairs: [
  ["Ciclo combinado", "63 %"], ["MCIA", "52 %"], ["sCO2 (previsto)", "50 %"], ["Turbina de vapor", "45 %"], ["Turbina de gas", "40 %"], ["ORC", "25 %"], ["Máquina de vapor", "5 %"]] });
DRILLS.push({ id: "t1-m-reaccion", type: "match", tema: "T1", sec: "t1-reaccion", title: "Motor de reacción ↔ aplicación (diap. 33-36)", pairs: [
  ["Cohete de propulsante sólido", "Misiles y boosters"], ["Cohete de propulsante líquido", "Lanzadores con empuje regulable"], ["Estatorreactor", "Incrementador de empuje (avión espía)"], ["Pulsorreactor", "Bomba V1"], ["Turborreactor", "Cazas antiguos y misiles"], ["Turbofán", "Aviación comercial"], ["Turbohélice", "Avionetas y regionales"]] });
DRILLS.push({ id: "t1-c-emisiones", type: "classify", tema: "T1", sec: "t1-combustion", title: "¿Primario, secundario o efecto invernadero? (diap. 50)", cats: ["Contaminante primario", "Contaminante secundario", "Gas de efecto invernadero"], items: [
  ["CO", 0], ["NOx", 0], ["HC-COV", 0], ["SOx", 0], ["PM", 0], ["O3", 1], ["HNO3", 1], ["Aldehídos", 1], ["CO2", 2]] });
DRILLS.push({ id: "t1-m-dosado", type: "match", tema: "T1", sec: "t1-combustion", title: "Concepto de dosado ↔ expresión (diap. 47-48)", pairs: [
  ["Dosado absoluto", "F = ṁf/ṁa"], ["Dosado estequiométrico", "(ṁf/ṁa) de la reacción completa"], ["Dosado relativo", "FR = F/Fe"], ["Factor lambda", "λ = 1/FR"], ["Mezcla pobre", "FR < 1, λ > 1"], ["Mezcla rica", "FR > 1, λ < 1"], ["Oxígeno estequiométrico", "a = x + y/4"]] });

/* ---------- Trucos de memoria ---------- */
MNEMO["t1-definiciones"] = ["«<b>Máquina</b> = una pieza; <b>motor</b> = el equipo completo»: un compresor solo no es un motor.", "Hidráulica o térmica: pregunta «¿se comprime el fluido?». El viento del aerogenerador no: hidráulica."];
MNEMO["t1-maquinas"] = ["Turbomáquina = «<b>TAC</b>»: <b>T</b>odo continuo, <b>A</b>diabática, <b>C</b>audal grande.", "«<b>Roots no aprieta</b>»: el único volumétrico sin compresión interna.", "«Girar no es ser turbo»: tornillo, scroll, paletas, Roots y Wankel giran y son volumétricos."];
MNEMO["t1-motores"] = ["«<b>Cerrado debe ser externo; interno debe ser abierto</b>». Lo demás «suele».", "Cerrado mira el <b>termómetro</b> (T atm.); abierto mira el <b>barómetro</b> (p atm.).", "Reacción: «<b>cohete lleva su oxígeno</b>; aerorreactor lo respira»."];
MNEMO["t1-turbomotores"] = ["Escalera «<b>40-45-52-63</b>»: TG, TV, MCIA, CC.", "Potencias «<b>600-1200</b>»: la TG hasta 600 MW; el ciclo combinado, el doble.", "«La TG es un <b>velocista</b>» (arranque muy rápido) y «la TV un <b>fondista</b>» (lenta, pero quema cualquier cosa)."];
MNEMO["t1-mcia"] = ["MCIA «<b>80 y 52</b>»: 80 MW y 52 %.", "«Barato de comprar, caro de cuidar»: bajo coste de fabricación, alto de mantenimiento."];
MNEMO["t1-reaccion"] = ["«<b>Sólido = soldado</b>» (misiles); «<b>líquido = lanzadera</b>» (espacial, regulable).", "«El estato está <b>estático</b> si está parado»: sin compresor no arranca a velocidad nula.", "Turbohélice: «la hélice va por <b>eje</b>, no por chorro» → no es aerorreactor."];
MNEMO["t1-otros"] = ["«<b>5 % de vapor</b>»: la máquina de vapor, primer motor, apenas 5 %.", "«<b>ORC frío, sCO2 caliente</b>»: &lt; 300 ºC y 25 %; &gt; 550 ºC y 50 %.", "Wankel = «<b>rotativo pero volumétrico</b>»."];
MNEMO["t1-cogeneracion"] = ["Combinado = «el calor se hace <b>trabajo</b>»; cogeneración = «el calor se queda como <b>calor</b>».", "En $\\eta_{t_{ee}}$ «<b>le quito al combustible lo que gastaría la caldera</b>»: $\\dot Q_{pi}/\\eta_c$.", "MCI cogenera «gratis» (calor residual); la TV «paga» el calor con trabajo."];
MNEMO["t1-combustion"] = ["«<b>137,28</b> = 32 + 3,76 × 28»: un mol de O<sub>2</sub> con su nitrógeno.", "«<b>Pobre de combustible, rico en aire</b>»: $F_R \\lt 1$, $\\lambda \\gt 1$.", "NOx «<b>0,9 y 1550</b>»: algo pobre y muy caliente.", "PM «<b>N-C-A-C</b>»: nucleación, crecimiento, agregación, condensación."];

/* ---------- Esquemas propios ---------- */
(function () {
  const MK = `<defs><marker id="t1ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#475569"/></marker><marker id="t1ao" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c2410c"/></marker><marker id="t1at" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3.6" markerHeight="3.6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#0f766e"/></marker><marker id="t1ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#1d4ed8"/></marker></defs>`;
  const T = (x, y, s, c, a) => `<text x="${x}" y="${y}"${c ? ` class="${c}"` : ""}${a ? ` text-anchor="${a}"` : ""}>${s}</text>`;
  const B = (x, y, w, h, fill, stroke, lines, cls) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/>` + lines.map((l, i) => T(x + w / 2, y + h / 2 + 5 + (i - (lines.length - 1) / 2) * 15, l, cls || "tb", "middle")).join("");
  const A = (d, m, col, dash) => `<path d="${d}" fill="none" stroke="${col || "#475569"}" stroke-width="1.8"${dash ? ' stroke-dasharray="5 4"' : ""} marker-end="url(#${m || "t1ar"})"/>`;
  const S = (vb, label, body) => `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}">${MK}${body}</svg>`;

  /* 1. Máquina térmica frente a motor térmico */
  DIAGRAMS.push({ sec: "t1-definiciones", h4: "Motor térmico", cap: "Balances de las diap. 5 y 6. A la izquierda, una <b>máquina</b> térmica: el fluido entra y sale y el trabajo puede ir en los dos sentidos (motora o generadora). A la derecha, un <b>motor</b> térmico de combustión interna: entran aire y combustible y sale trabajo neto, con pérdidas y gases de escape.", svg: S("0 0 540 250", "Balance de una máquina térmica y de un motor térmico de combustión interna",
    T(135, 22, "Máquina térmica (diap. 5)", "tb", "middle") + T(405, 22, "Motor térmico de CI (diap. 6)", "tb", "middle") +
    B(80, 95, 110, 56, "#f3e8ff", "#7c3aed", ["Máquina", "térmica"]) +
    A("M20 70Q60 70 78 100") + T(16, 62, "ṁ, E<tspan baseline-shift=\"sub\" font-size=\"9\">in</tspan>", "small2") +
    A("M150 151Q170 195 205 205") + T(208, 210, "ṁ, E<tspan baseline-shift=\"sub\" font-size=\"9\">out</tspan>", "small2") +
    `<path d="M200 123H244" stroke="#0f766e" stroke-width="3" marker-end="url(#t1at)" marker-start="url(#t1at)"/>` + T(222, 108, "Ẇ<tspan baseline-shift=\"sub\" font-size=\"9\">e</tspan>", "tb", "middle") + T(222, 142, "± (obtenido", "small2 mut", "middle") + T(222, 155, "o aportado)", "small2 mut", "middle") +
    A("M165 95L185 68", "t1ao", "#c2410c") + T(188, 64, "Q̇<tspan baseline-shift=\"sub\" font-size=\"9\">loss</tspan>", "small2") +
    `<line x1="270" y1="34" x2="270" y2="236" class="dash"/>` +
    B(350, 95, 110, 56, "#ffedd5", "#c2410c", ["Motor", "térmico"]) +
    A("M290 70Q330 70 348 104") + T(286, 44, "ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">a</tspan>", "small2") + T(286, 62, "ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">f</tspan>·H<tspan baseline-shift=\"sub\" font-size=\"9\">c</tspan>", "small2") +
    `<path d="M464 123H516" stroke="#0f766e" stroke-width="3.5" marker-end="url(#t1at)"/>` + T(490, 108, "Ẇ<tspan baseline-shift=\"sub\" font-size=\"9\">e</tspan>", "tb", "middle") +
    A("M435 95L455 68", "t1ao", "#c2410c") + T(458, 64, "Q̇<tspan baseline-shift=\"sub\" font-size=\"9\">loss</tspan>", "small2") +
    A("M420 151Q440 195 475 205", "t1ao", "#c2410c") + T(478, 210, "ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">ge</tspan>", "small2") +
    T(405, 236, "η<tspan baseline-shift=\"sub\" font-size=\"9\">t</tspan> = Ẇ<tspan baseline-shift=\"sub\" font-size=\"9\">e</tspan> / (ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">f</tspan>·H<tspan baseline-shift=\"sub\" font-size=\"9\">c</tspan>)", "small2", "middle") +
    T(135, 236, "Una sola máquina: no es un motor", "small2 mut", "middle")) });

  /* 2. Árbol de clasificación de las máquinas térmicas */
  const leaf = (x, y, w, s, c) => `<rect x="${x}" y="${y}" width="${w}" height="24" rx="6" fill="${c}14" stroke="${c}66"/>` + T(x + w / 2, y + 16, s, "tr-it", "middle");
  DIAGRAMS.push({ sec: "t1-maquinas", h4: "Volumétricas frente a turbomáquinas", cap: "Los dos criterios de la diap. 10 son independientes: cualquier máquina es motora o generadora <b>y</b>, además, volumétrica o turbomáquina. Entre paréntesis, los ejemplos de las diap. 11-13.", svg: S("0 0 560 294", "Árbol de clasificación de las máquinas térmicas",
    `<rect x="190" y="6" width="180" height="34" rx="10" class="tr-root"/>` + T(280, 28, "Máquinas térmicas", "tr-rt", "middle") +
    `<path d="M280 40V52H110V64M280 52H420V64" class="tr-ln"/>` +
    `<rect x="20" y="64" width="180" height="30" rx="9" fill="#c2410c"/>` + T(110, 84, "Según el intercambio", "tr-gt", "middle") +
    `<rect x="250" y="64" width="290" height="30" rx="9" fill="#1d4ed8"/>` + T(395, 84, "Según el principio", "tr-gt", "middle") +
    leaf(20, 104, 180, "Motoras (expansores)", "#c2410c") + T(110, 144, "el fluido reduce su estado", "small2 mut", "middle") + T(110, 158, "térmico; se obtiene trabajo", "small2 mut", "middle") +
    leaf(20, 172, 180, "Generadoras (compresores)", "#c2410c") + T(110, 212, "el fluido aumenta su estado", "small2 mut", "middle") + T(110, 226, "térmico; se aporta trabajo", "small2 mut", "middle") +
    `<path d="M395 94V104H317V112M395 104H472V112" class="tr-ln"/>` +
    leaf(240, 112, 155, "Volumétricas", "#1d4ed8") + leaf(405, 112, 135, "Turbomáquinas", "#0f766e") +
    leaf(240, 146, 155, "Alternativas (pistón)", "#1d4ed8") +
    leaf(240, 176, 155, "Rotativas con comp. int.", "#1d4ed8") + T(317, 214, "(scroll, tornillo, paletas)", "small2 mut", "middle") +
    leaf(240, 222, 155, "Rotativas sin comp. int.", "#1d4ed8") + T(317, 260, "(Roots)", "small2 mut", "middle") +
    leaf(405, 146, 135, "Axiales", "#0f766e") + T(472, 184, "(turbocompresor, turbina)", "small2 mut", "middle") +
    leaf(405, 192, 135, "Radiales", "#0f766e") + T(472, 230, "(centrífugo, centrípeta)", "small2 mut", "middle") +
    T(280, 284, "Volumétricas: flujo discontinuo, baja fricción, no adiabáticas", "small2", "middle")) });

  /* 3. Árbol de clasificación de los motores térmicos */
  DIAGRAMS.push({ sec: "t1-motores", h4: "Las tres clasificaciones", cap: "Las tres clasificaciones de la diap. 15. Las flechas rojas recuerdan las dos implicaciones obligatorias de las diap. 16-17: ciclo cerrado ⇒ combustión externa y combustión interna ⇒ ciclo abierto.", svg: S("0 0 560 290", "Árbol de clasificación de los motores térmicos",
    `<rect x="195" y="6" width="170" height="34" rx="10" class="tr-root"/>` + T(280, 28, "Motores térmicos", "tr-rt", "middle") +
    `<path d="M280 40V52H90V64M280 52V64M280 52H460V64" class="tr-ln"/>` +
    `<rect x="10" y="64" width="160" height="40" rx="9" fill="#7c3aed"/>` + T(90, 81, "Renovación", "tr-gt", "middle") + T(90, 96, "del fluido", "tr-gt", "middle") +
    `<rect x="190" y="64" width="180" height="40" rx="9" fill="#c2410c"/>` + T(280, 81, "Lugar del", "tr-gt", "middle") + T(280, 96, "estado térmico", "tr-gt", "middle") +
    `<rect x="390" y="64" width="160" height="40" rx="9" fill="#0f766e"/>` + T(470, 81, "Forma de obtener", "tr-gt", "middle") + T(470, 96, "la potencia", "tr-gt", "middle") +
    leaf(20, 118, 140, "Ciclo abierto", "#7c3aed") + leaf(20, 180, 140, "Ciclo cerrado", "#7c3aed") +
    leaf(200, 118, 160, "Combustión interna", "#c2410c") + leaf(200, 180, 160, "Combustión externa", "#c2410c") +
    A("M160 192H198", "t1ao", "#b91c1c") + A("M200 130H162", "t1ao", "#b91c1c") + T(180, 166, "deben", "small2 ko", "middle") +
    leaf(400, 118, 140, "Eje rotativo", "#0f766e") + leaf(410, 146, 130, "Volumétricos", "#0f766e") + leaf(410, 174, 130, "De flujo continuo", "#0f766e") +
    leaf(400, 208, 140, "De reacción", "#0f766e") + leaf(410, 236, 130, "Cohetes", "#0f766e") + leaf(410, 264, 130, "Aerorreactores", "#0f766e") +
    T(90, 230, "abierto: p atm.", "small2 mut", "middle") + T(90, 245, "cerrado: T atm.", "small2 mut", "middle") +
    T(280, 230, "interna: T máx. alta,", "small2 mut", "middle") + T(280, 245, "alta potencia específica", "small2 mut", "middle") + T(280, 270, "aerorreactores: sin o con compresor", "small2 mut", "middle")) });

  /* 4. Rendimientos de la tabla resumen y de los otros motores */
  const X = v => 150 + v * 5.1;
  const bar = (y, a, b, name, col, note, dash) => `<rect x="${X(a)}" y="${y}" width="${X(b) - X(a)}" height="18" rx="4" fill="${col}"${dash ? ' fill-opacity="0.35" stroke="' + col + '" stroke-dasharray="4 3"' : ""}/>` + T(144, y + 14, name, "small2", "end") + T(X(b) + 6, y + 14, note, "small2 mut");
  DIAGRAMS.push({ sec: "t1-otros", h4: "Tabla resumen", cap: "Rangos de rendimiento de la tabla resumen (diap. 41) y máximos citados para los demás motores (diap. 37 y 40). Si solo se da un máximo («hasta…»), la barra empieza en cero. El sCO<sub>2</sub>, rayado, es un valor <b>previsto</b>.", svg: S("0 0 560 296", "Barras de rendimiento de los distintos motores térmicos",
    [0, 10, 20, 30, 40, 50, 60, 70].map(v => `<line x1="${X(v)}" y1="30" x2="${X(v)}" y2="238" class="grid"/>` + T(X(v), 254, v + " %", "small2", "middle")).join("") +
    `<line x1="150" y1="238" x2="${X(70)}" y2="238" class="ax"/>` + T(150, 20, "Rendimiento térmico", "tb") +
    bar(38, 0, 5, "Máquina de vapor", "#64748b", "≤ 5 %") +
    bar(66, 0, 25, "ORC", "#0891b2", "≤ 25 %") +
    bar(94, 25, 40, "Turbina de gas", "#c2410c", "0,25-0,40") +
    bar(122, 35, 45, "Turbina de vapor", "#1d4ed8", "0,35-0,45") +
    bar(150, 20, 52, "Diésel o gas", "#b45309", "0,20-0,52") +
    bar(178, 0, 50, "sCO2", "#7c3aed", "≤ 50 % previsto", true) +
    bar(206, 48, 63, "Ciclo combinado", "#0f766e", "0,48-0,63") +
    T(20, 274, "Factor a media carga (diap. 41): diésel/gas 1,0 · TV 0,91-0,96", "small2") + T(20, 290, "CC 0,84-0,88 · TG 0,8-0,85", "small2")) });

  /* 5. Ciclo combinado con números */
  DIAGRAMS.push({ sec: "t1-cogeneracion", h4: "Ciclo combinado: MCI + MCE", cap: "Esquema de la diap. 43 con los números de una de las preguntas del tema: 700 MW de combustible, 270 MW en la turbina de gas, 380 MW recuperados en la caldera y un ciclo de vapor con η = 0,36. Solo se quema combustible una vez: η<sub>t</sub> = (270 + 136,8)/700 = 58,1 %.", svg: S("0 0 560 270", "Diagrama de bloques de un ciclo combinado con balance de potencias",
    B(170, 20, 170, 50, "#fee2e2", "#b91c1c", ["MCI (turbina de gas)"]) +
    A("M40 45H166") + T(40, 36, "ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">f</tspan>·H<tspan baseline-shift=\"sub\" font-size=\"9\">c</tspan> = 700 MW", "small2") +
    `<path d="M344 45H430" stroke="#0f766e" stroke-width="3.5" marker-end="url(#t1at)"/>` + T(438, 50, "Ẇ<tspan baseline-shift=\"sub\" font-size=\"9\">MCI</tspan> = 270 MW", "tb") +
    A("M255 70V98", "t1ao", "#c2410c") + T(262, 89, "gases calientes ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">ge,h</tspan> (430 MW)", "small2") +
    `<ellipse cx="255" cy="125" rx="95" ry="25" fill="#ffedd5" stroke="#c2410c" stroke-width="1.6"/>` + T(255, 122, "Caldera de recuperación", "tb", "middle") + T(255, 137, "de calor", "tb", "middle") +
    A("M350 125H430", "t1ao", "#c2410c") + T(438, 122, "gases fríos ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">ge,c</tspan>", "small2") + T(438, 136, "50 MW", "small2 mut") +
    A("M255 150V180", "t1ao", "#c2410c") + T(262, 171, "Q̇<tspan baseline-shift=\"sub\" font-size=\"9\">h</tspan> = 380 MW", "small2") +
    B(170, 182, 170, 50, "#dbeafe", "#1d4ed8", ["MCE (ciclo de vapor)", "η = 0,36"]) +
    `<path d="M344 207H430" stroke="#0f766e" stroke-width="3.5" marker-end="url(#t1at)"/>` + T(438, 212, "Ẇ<tspan baseline-shift=\"sub\" font-size=\"9\">MCE</tspan> = 136,8 MW", "tb") +
    A("M255 232V258", "t1ab", "#1d4ed8") + T(262, 252, "Q̇<tspan baseline-shift=\"sub\" font-size=\"9\">c</tspan> = 243,2 MW (condensador)", "small2") +
    T(20, 140, "η<tspan baseline-shift=\"sub\" font-size=\"9\">t</tspan> = 58,1 %", "tb") + T(20, 156, "(TG sola: 38,6 %)", "small2 mut")) });

  /* 6. Escala de dosado relativo */
  const F = v => 40 + (v - 0.4) * 400;
  DIAGRAMS.push({ sec: "t1-combustion", h4: "Estequiometría y dosado", cap: "Escala de dosado relativo (diap. 47): a la izquierda de F<sub>R</sub> = 1 la mezcla es pobre (sobra aire, λ &gt; 1); a la derecha, rica (sobra combustible, λ &lt; 1). Se marcan el máximo de NOx en F<sub>R</sub> ≈ 0,9 (diap. 52) y las zonas en que aparecen HC por apagado de llama (diap. 53). Abajo, F<sub>e</sub> calculado con la fórmula de la diap. 48.", svg: S("0 0 560 250", "Escala de dosado relativo con zonas pobre y rica",
    `<rect x="${F(0.4)}" y="60" width="${F(1) - F(0.4)}" height="34" fill="#dbeafe"/><rect x="${F(1)}" y="60" width="${F(1.6) - F(1)}" height="34" fill="#fee2e2"/>` +
    T((F(0.4) + F(1)) / 2, 82, "POBRE: sobra aire", "tb", "middle") + T((F(1) + F(1.6)) / 2, 82, "RICA: sobra combustible", "tb", "middle") +
    `<line x1="${F(1)}" y1="40" x2="${F(1)}" y2="118" stroke="#0f172a" stroke-width="2"/>` + T(F(1) + 6, 50, "estequiométrica (F<tspan baseline-shift=\"sub\" font-size=\"9\">R</tspan> = 1)", "small2") +
    `<line x1="${F(0.4)}" y1="118" x2="${F(1.6)}" y2="118" class="ax"/>` +
    [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6].map(v => `<line x1="${F(v)}" y1="114" x2="${F(v)}" y2="122" class="ax"/>` + T(F(v), 136, String(v.toFixed(1)).replace(".", ","), "small2", "middle")).join("") +
    T(F(1.6) + 4, 122, "F<tspan baseline-shift=\"sub\" font-size=\"9\">R</tspan>", "tb") +
    T(F(0.7), 152, "F<tspan baseline-shift=\"sub\" font-size=\"9\">R</tspan> &lt; 1 · λ &gt; 1", "small2", "middle") + T(F(1.3), 152, "F<tspan baseline-shift=\"sub\" font-size=\"9\">R</tspan> &gt; 1 · λ &lt; 1", "small2", "middle") +
    A(`M${F(0.9)} 46V58`, "t1ao", "#b91c1c") + T(F(0.9) - 4, 44, "máx. NOx (0,9)", "small2 ko", "end") +
    `<path d="M${F(0.4)} 100H${F(0.55)}M${F(1.25)} 100H${F(1.6)}" stroke="#b45309" stroke-width="3"/>` + T(F(0.48), 112, "HC", "small2", "middle") + T(F(1.42), 112, "HC", "small2", "middle") +
    T(40, 182, "F<tspan baseline-shift=\"sub\" font-size=\"9\">e</tspan> = (12x + y) / [137,28·(x + y/4)]", "tb") +
    T(40, 208, "CH4: 1/17,16", "small2") + T(160, 208, "C3H8: 1/15,6", "small2") + T(280, 208, "C8H18: 1/15,05", "small2") + T(410, 208, "C12H26: 1/14,94", "small2") +
    T(40, 234, "F = ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">f</tspan>/ṁ<tspan baseline-shift=\"sub\" font-size=\"9\">a</tspan> · F<tspan baseline-shift=\"sub\" font-size=\"9\">R</tspan> = F/F<tspan baseline-shift=\"sub\" font-size=\"9\">e</tspan> · λ = 1/F<tspan baseline-shift=\"sub\" font-size=\"9\">R</tspan>", "small2")) });

  /* 7. Niveles de emisión */
  const lvl = (i, name, sp, col) => { const w = 130 + i * 110, x = 280 - w / 2, y = 186 - i * 44; return `<rect x="${x}" y="${y}" width="${w}" height="40" rx="8" fill="${col}22" stroke="${col}"/>` + T(280, y + 17, name, "tb", "middle") + T(280, y + 33, sp, "small2", "middle"); };
  DIAGRAMS.push({ sec: "t1-combustion", h4: "Contaminantes y niveles de emisión", cap: "Niveles de emisión de la diap. 51, de lo local (abajo) a lo planetario (arriba). El CO<sub>2</sub> ocupa solo el nivel planetario: es gas de efecto invernadero, no contaminante (diap. 50).", svg: S("0 0 560 240", "Pirámide invertida de niveles de emisión de local a planetario",
    lvl(3, "Planetario", "CO2 (efecto invernadero)", "#7c3aed") +
    lvl(2, "Transfronterizo", "SO2 → ácido sulfúrico · NOx → ácido nítrico · PM2,5", "#1d4ed8") +
    lvl(1, "Zonal / regional / gran urbe", "CO, HC, SO2, PM, NOx, O3", "#c2410c") +
    lvl(0, "Local", "CO (garajes, túneles)", "#b91c1c") +
    T(280, 18, "Escala espacial del efecto", "small2 mut", "middle")) });
})();

/* ---------- Figuras originales ---------- */
DIAGRAMS.push({ sec: "t1-definiciones", h4: "Cuadro de las transformaciones energéticas", img: "img/fig/mmt-t1-transformaciones.jpg", alt: "Cuadro de las transformaciones entre energía de la materia, electromagnética, térmica y mecánica, diapositiva 8", cap: "<b>Figura original (Tema 1, diap. 8)</b>: sigue las flechas rojas oscuras. De la materia a la térmica (combustión, reacción nuclear) y de la térmica a la mecánica (máquina térmica motora): ese recorrido, sombreado, es el <b>motor térmico</b>. Las flechas grises (batería, electrólisis, motor, generador, Seebeck, PV) pasan por la energía electromagnética." });
DIAGRAMS.push({ sec: "t1-maquinas", h4: "Volumétricas con y sin compresión interna", img: "img/fig/mmt-t1-volumetricas.jpg", alt: "Compresores volumétricos alternativo, scroll, de tornillo y de paletas, diapositiva 11", cap: "<b>Figura original (Tema 1, diap. 11)</b>: máquinas volumétricas <b>con compresión interna</b>. Una alternativa (pistón, biela y cigüeñal) y tres rotativas: scroll (dos espirales), tornillo (dos rotores helicoidales) y paletas (rotor excéntrico con paletas deslizantes, donde se ve cómo se reduce el volumen). Todas pueden trabajar como compresor o como expansor." });
DIAGRAMS.push({ sec: "t1-maquinas", h4: "Turbomáquinas: escalonamientos y tipos", img: "img/fig/mmt-t1-turbomaquinas.jpg", alt: "Turbocompresor axial, turbina axial, turbocompresor centrífugo, turbina centrípeta y turbina radial, diapositiva 13", cap: "<b>Figura original (Tema 1, diap. 13)</b>: arriba, un turbocompresor axial con muchos escalonamientos y una turbina axial con menos escalonamientos. Abajo, el turbocompresor centrífugo de un turbo, la rueda de una turbina centrípeta y una turbina radial." });
DIAGRAMS.push({ sec: "t1-motores", h4: "Ciclo abierto y ciclo cerrado", img: "img/fig/mmt-t1-ciclos.jpg", alt: "Esquemas de un motor de ciclo cerrado y de uno de ciclo abierto, diapositiva 16", cap: "<b>Figura original (Tema 1, diap. 16)</b>: el mismo compresor (azul) y la misma turbina (roja) en dos montajes: ciclo cerrado a la izquierda y ciclo abierto a la derecha. En ciclo cerrado hay dos intercambiadores: el caliente recibe Q̇<sub>h</sub> y el frío cede Q̇<sub>c</sub>. En ciclo abierto el fluido ṁ entra desde la atmósfera y se descarga a ella: el «foco frío» es la propia atmósfera." });
DIAGRAMS.push({ sec: "t1-turbomotores", h4: "Turbina de gas", img: "img/fig/mmt-t1-tg.jpg", alt: "Cortes de turbinas de gas industriales con compresor, cámara de combustión y turbina, diapositiva 24", cap: "<b>Figura original (Tema 1, diap. 24)</b>: a la derecha, el recorrido del aire: entra por el compresor axial, se quema en la cámara de combustión y se expande en la turbina antes de salir por el escape. Son dos máquinas térmicas (compresor y turbina) en un mismo eje." });
DIAGRAMS.push({ sec: "t1-reaccion", h4: "Aerorreactores sin compresor", img: "img/fig/mmt-t1-sincompresor.jpg", alt: "Estatorreactor y pulsorreactor con sus esquemas y aplicaciones, diapositiva 35", cap: "<b>Figura original (Tema 1, diap. 35)</b>: en el estatorreactor fíjate en los números de Mach: entra supersónico (M &gt; 1), se comprime hasta M &lt; 1 sin ninguna máquina, se quema tras el estabilizador de llama y sale por la tobera (M = 1 en la garganta). En el pulsorreactor, las dos fases: carga con la válvula abierta y explosión con la válvula cerrada." });
DIAGRAMS.push({ sec: "t1-reaccion", h4: "Aerorreactores con compresor: turborreactor y turbofán", img: "img/fig/mmt-t1-concompresor.jpg", alt: "Turborreactor, turbofán y turbohélice con sus aplicaciones, diapositiva 36", cap: "<b>Figura original (Tema 1, diap. 36)</b>: compara el turborreactor (todo el aire pasa por admisión, compresión, combustión y escape) con el turbofán (el fan envía buena parte del aire por fuera del núcleo). Abajo, el turbohélice: la turbina mueve la hélice a través de una reductora, por eso es un motor de potencia en eje." });
DIAGRAMS.push({ sec: "t1-otros", h4: "Tabla resumen", img: "img/fig/mmt-t1-resumen.jpg", alt: "Tabla comparativa de motor diésel o gas, turbina de gas, turbina de vapor y ciclo combinado, diapositiva 41", cap: "<b>Figura original (Tema 1, diap. 41)</b>: lee la tabla por filas. Las más preguntadas: rendimiento, factor a media carga (el motor diésel o de gas es el único que no pierde), tamaño por kW (TG bajo, TV muy alto) y calidad del combustible (la TV es la única que admite media a baja y sólidos)." });
DIAGRAMS.push({ sec: "t1-cogeneracion", h4: "Ciclo combinado: MCI + MCE", img: "img/fig/mmt-t1-cc.jpg", alt: "Esquema de bloques y diagrama T-s del ciclo combinado, diapositiva 43", cap: "<b>Figura original (Tema 1, diap. 43)</b>: en el diagrama T-s, el ciclo de gas (rojo) está por encima del de vapor (azul); el calor de escape del primero, en la zona rayada, calienta el segundo. En el esquema de bloques solo entra combustible en el MCI." });
DIAGRAMS.push({ sec: "t1-cogeneracion", h4: "Cogeneración: qué calor se aprovecha", img: "img/fig/mmt-t1-cogeneracion.jpg", alt: "Expresiones del calor de cogeneración y de los rendimientos, con esquema de bloques, diapositiva 44", cap: "<b>Figura original (Tema 1, diap. 44)</b>: el esquema es el del ciclo combinado, pero el segundo bloque ya no es un motor sino un <b>proceso industrial o calefacción</b> que recibe Q̇<sub>pi</sub>. Recuadradas en rojo, las dos definiciones de rendimiento." });
