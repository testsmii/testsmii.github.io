/* Tema 2 · Fundamentos de los motores de combustión interna alternativos (MCIA)
   fuente: T2_FundsMCIA2026.pdf (deck "T2", 66 diapositivas; diap. N = página N del PDF) */

THEORY.T2 = {
  summary: [
    "En un MCIA el <b>mecanismo biela-manivela</b> convierte la traslación del pistón en rotación del cigüeñal. Son máquinas <b>alternativas</b> de flujo <b>discontinuo</b> (por eso se usan varios cilindros) y <b>no adiabáticas</b>. El trabajo indicado es $W_i=\\oint p\\,dV$ sobre el <b>diagrama del indicador</b>.",
    "Distingue el <b>ciclo de trabajo</b> (compresión-combustión-expansión, produce trabajo) del <b>ciclo de renovación de la carga</b> (escape y admisión, lazo de bombeo que <b>consume</b> trabajo).",
    "<b>MEP</b>: mezcla premezclada, encendido por chispa, <b>deflagración</b> subsónica, combustibles ligeros volátiles (alto octano), r = 9-11. <b>MEC</b>: admite solo aire, inyección directa a alta presión al final de la compresión, <b>autoinflamación</b>, combustibles pesados (alto cetano), r = 15-18.",
    "MEP de carga <b>homogénea</b>: dosado ≈ estequiométrico (F<sub>R</sub> = 1 con catalizador de tres vías) y regulación <b>cuantitativa</b> con la mariposa (se varía η<sub>v</sub>). MEP <b>estratificado</b> y MEC: regulación <b>cualitativa</b> (se varía F<sub>R</sub>).",
    "El <b>picado</b> (knock) es la autoinflamación de la mezcla final sin quemar en un MEP: onda de choque sónica, ruido y daño térmico. Se combate con combustible de <b>mayor número de octano</b> (más T de autoinflamación y más tiempo de retraso).",
    "Fases de la combustión en el MEC: <b>tiempo de retraso</b> → <b>combustión premezclada</b> (muy rápida) → <b>combustión por difusión</b> (final impreciso).",
    "4T: un ciclo cada <b>dos vueltas</b> ($i=1/2$); 2T: uno por vuelta ($i=1$). El diagrama de distribución real adelanta las aperturas y retrasa los cierres (AAA, RCA, AAE, RCE) y crea el <b>cruce de válvulas</b>. El Wankel es rotativo: relación cigüeñal-rotor 3:1 y un ciclo por vuelta del cigüeñal.",
    "Geometría: $V_D=\\frac{\\pi D^2}{4}S$, $V_T=Z\\,V_D$, $r=\\frac{V_D+V_c}{V_c}$ y $c_m=2Sn$. Turismos: S/D ≈ 0,95-1,05; c<sub>m</sub> hasta ≈ 20 m/s en MEP y 15 m/s en MEC de automóvil.",
    "$pmi=\\frac{\\dot W_i}{V_T\\,n\\,i}$ y $pme=\\frac{\\dot W_e}{V_T\\,n\\,i}=\\frac{2\\pi M_e}{V_T\\,i}$; pme típicas: MEP 13-17 bar, MEC ≈ 23 bar. $\\eta_e=\\eta_i\\,\\eta_m$ y $g_{ef}=\\frac{1}{\\eta_e H_c}$ (MEP 210-350, MEC 180-300 g/kWh).",
    "$\\eta_v=\\frac{\\dot m_a}{n\\,i\\,Z\\,V_D\\,\\rho_{a,ref}}$: referencia <b>ambiente</b> en aspiración natural y <b>salida del compresor/postenfriador</b> en sobrealimentados. Solo en 4T; máximos de 0,9-0,95.",
    "Cadena de la potencia: $\\dot W_e=\\eta_v\\,V_T\\,\\rho_{a,ref}\\,\\frac n2\\,F_R\\,F_e\\,H_c\\,\\eta_i\\,\\eta_m$ (4T).",
    "Balance energético: P<sub>e</sub> 30-40 %, refrigeración 25-35 %, gases de escape 20-35 %, aceite 6-10 %, convección/radiación 5-8 %, auxiliares 2-4 %, inquemados 1-4 %. En cogeneración se recupera calor de escape, agua de camisas, aceite y aire de sobrealimentación.",
    "Ciclos teóricos: <b>Otto</b> (calor a v = cte, MEP) $\\eta=1-\\frac1{r^{\\gamma-1}}$; <b>Diesel</b> (p = cte, MEC lentos); <b>presión limitada</b> (mixto, MEC rápidos, misma p<sub>máx</sub> que el motor real). Coeficiente de calidad = η<sub>e</sub>/η<sub>ciclo teórico</sub>.",
    "Escalera de rendimientos: Carnot ≈ 0,85 → ciclo teórico 0,55 (MEP)-0,68 (MEC) → indicado 0,40-0,57 (pérdidas de calor, de tiempo y de escape) → efectivo 0,30-0,52 (rozamiento, bombeo y auxiliares)."
  ],
  sections: [
    { id: "t2-intro", title: "1. Principio de funcionamiento, características y elementos constructivos", slides: ["T2", 4, 11], html: `
<h4>Mecanismo biela-manivela y procesos del motor</h4>
<p>Un MCIA transforma la energía química del combustible en trabajo mecánico mediante el <b>mecanismo biela-manivela</b>: la <b>traslación</b> del pistón se convierte en <b>rotación</b> del cigüeñal (diap. 4).</p>
<ul>
<li>Son <b>máquinas alternativas</b>: el flujo es <b>discontinuo</b>, y por eso se usan <b>varios cilindros</b> para regularizar el par.</li>
<li><b>No son adiabáticos</b>: hay pérdidas de calor por las paredes.</li>
</ul>
<p>Los procesos se agrupan en dos ciclos (diap. 4):</p>
<table class="tbl"><thead><tr><th>Ciclo</th><th>Procesos</th></tr></thead><tbody>
<tr><td><b>Ciclo termodinámico o de trabajo</b></td><td>Compresión → combustión → expansión (con formación de mezcla, encendido y formación de contaminantes)</td></tr>
<tr><td><b>Ciclo de renovación de la carga</b></td><td>Escape → admisión</td></tr>
<tr><td>Otros procesos</td><td>Lubricación, refrigeración, sobrealimentación</td></tr>
</tbody></table>
<h4>Trabajo sobre el pistón y diagrama del indicador</h4>
<p>El trabajo se debe a la fuerza de la presión de los gases sobre el pistón. La presión que cuenta es la diferencia entre el cilindro y el cárter, $p=p_{cil}-p_{cárter}$ (diap. 5):</p>
<div class="formula">$$dW=F\\,dx=p\\,A_p\\,dx=p\\,dV$$ $$A_p=\\frac{\\pi D^2}{4}$$</div>
<p>El <b>ciclo termodinámico</b> (ciclo p-V o <b>diagrama del indicador</b>) es la curva de la presión en el cilindro frente al volumen libre entre culata y pistón. El <b>trabajo interno o indicado</b> de cada ciclo es la integral extendida al ciclo completo (diap. 6):</p>
<div class="formula">$$W_i=\\oint p\\,dV$$</div>
<p>En un 4T real el diagrama tiene dos lazos: el grande, recorrido en sentido horario, es el <b>ciclo de trabajo</b> (trabajo positivo); el pequeño de abajo, entre $V_c$ y $V_c+V_D$, es el <b>ciclo de renovación de la carga</b> (lazo de bombeo, que normalmente <b>absorbe</b> trabajo porque se admite a menor presión que la de escape).</p>
<h4>Características y campos de aplicación</h4>
<table class="tbl"><thead><tr><th>Características (diap. 7)</th><th>Campos de aplicación</th></tr></thead><tbody>
<tr><td>Potencia específica elevada</td><td rowspan="2">Propulsión: transporte por carretera y ferrocarril, propulsión marina y aérea</td></tr>
<tr><td>Combustibles líquidos (o gaseosos) de gran poder calorífico → gran autonomía</td></tr>
<tr><td>Rendimientos térmicos altos, <b>hasta el 52 %</b>, con <b>poca variación fuera de diseño</b></td><td>Maquinaria agrícola y obras públicas</td></tr>
<tr><td>Potencias entre <b>100 W y 80 MW</b></td><td rowspan="2">Grupos estacionarios: grupos electrógenos, accionamiento industrial y rural</td></tr>
<tr><td>Disposiciones constructivas variadas</td></tr>
</tbody></table>
<h4>Retos y competidores</h4>
<ul>
<li><b>Retos</b>: emisiones (CO<sub>2</sub> y contaminantes), ruido, dependencia de combustibles fósiles y búsqueda de nuevos combustibles sintéticos.</li>
<li><b>Competidores</b>: turbina de gas, motores eléctricos, pila de combustible y motores de aire comprimido (diap. 7).</li>
</ul>
<h4>Elementos constructivos</h4>
<p>La estructura mecánica consta de <b>cuatro partes</b> (diap. 8):</p>
<ol>
<li><b>Cadena cinemática</b>: conjunto pistón, biela y cigüeñal (con el bulón que une pistón y biela, los segmentos en las ranuras del pistón y los contrapesos del cigüeñal).</li>
<li><b>Sistema de distribución</b>: sistemas de admisión y escape (colectores, válvulas de admisión y escape, árbol de levas, empujadores, taqués hidráulicos, correa o cadena de distribución y su tensor).</li>
<li><b>Bloque</b> de cilindros y <b>culatas</b>, incluyendo la fijación del cigüeñal.</li>
<li><b>Elementos auxiliares</b>: bombas de refrigerante, aceite y combustible, alternadores, ventiladores…</li>
</ol>
<p>Además: sistema de formación de mezcla, inyectores y sistemas de inyección, bujía (MEP) y la <b>ECU</b> (unidad de control electrónico) (diap. 9-11). Ojo con las piezas «del pistón»: el <b>alojamiento del bulón</b> es parte del pistón; los segmentos son piezas aparte montadas en él, y los asientos de válvula están en la culata.</p>
` },
    { id: "t2-combustion", title: "2. Clasificación de los MCIA y combustión: MEP frente a MEC", slides: ["T2", 13, 19], html: `
<h4>Criterios de clasificación</h4>
<p>Los MCIA se clasifican según (diap. 13):</p>
<ul>
<li><b>Proceso de combustión y formación de la mezcla</b>: motores de encendido provocado (MEP), con mezcla homogénea o estratificada, y motores de encendido por compresión (MEC).</li>
<li><b>Ciclo de renovación de la carga</b>: 4 tiempos, 2 tiempos y Wankel.</li>
<li><b>Sistema de refrigeración</b>: por líquido o por aire.</li>
<li><b>Presión de admisión</b>: aspiración natural o sobrealimentados (con compresor volumétrico o turbosobrealimentados).</li>
<li><b>Número y disposición de cilindros</b>: en línea, en V y W, bóxer y estrella.</li>
</ul>
<p>La combustión libera la energía química del combustible, que pasa a energía térmica y después a energía mecánica en un eje. Se optimiza para: liberar la máxima energía, liberar el calor en la cantidad y forma apropiadas y evitar productos indeseables o contaminantes (diap. 14).</p>
<table class="tbl"><thead><tr><th colspan="2">MEP · mezcla homogénea (dosado constante en la cámara)</th><th>MEP · mezcla estratificada (dosado variable)</th><th>MEC</th></tr></thead><tbody>
<tr><td>Mezcla en el conducto de admisión</td><td>Inyección directa en el cilindro durante la <b>admisión</b></td><td>Inyección directa en el cilindro durante la carrera de <b>compresión</b></td><td>Inyección directa al <b>final de la compresión</b></td></tr>
</tbody></table>
<h4>Combustión en el MEP: deflagración</h4>
<ul>
<li>Mezcla <b>premezclada</b> antes de la combustión (combustible pulverizado en el aire), con carburación o inyección de <b>baja o media presión</b>.</li>
<li>Encendido por un <b>agente externo</b>, normalmente la chispa de una bujía.</li>
<li>Combustibles <b>ligeros y volátiles</b>: gasolina, gas natural, GLP, etanol…</li>
<li>Tras la chispa, un <b>frente de llama</b> recorre la cámara (de la ignición a la extinción). Es una <b>deflagración</b>: el frente avanza a velocidad <b>subsónica</b>, con la <b>misma presión</b> a ambos lados pero <b>distinta temperatura</b>.</li>
<li>Avanza por <b>difusión térmica y molecular</b>, favorecido por la <b>turbulencia</b>. El aumento de presión es «suave» (diap. 15).</li>
</ul>
<h4>Carga homogénea y carga estratificada</h4>
<table class="tbl"><thead><tr><th></th><th>Carga homogénea</th><th>Carga estratificada</th></tr></thead><tbody>
<tr><td>Inyección</td><td>Durante la admisión o al principio de la compresión</td><td>Directa al <b>final</b> de la compresión, concentrando la mezcla alrededor de la bujía con un pistón tallado</td></tr>
<tr><td>Dosado</td><td>Homogéneo y cercano al estequiométrico: $F_R=1$ con catalizador de tres vías; $0{,}8\\lt F_R\\lt 1{,}15$ sin él</td><td>$F_R$ local estequiométrico junto a la bujía, pero <b>$F_R$ medio pobre</b></td></tr>
<tr><td>Regulación de la carga</td><td><b>Cuantitativa</b>: estrangulando la admisión (mariposa), con dosado constante</td><td><b>Cualitativa</b>: inyectando más o menos combustible</td></tr>
<tr><td>Uso</td><td>General</td><td>Bajas cargas y bajos regímenes; mejor con combustibles ligeros (GLP, gas) para reducir partículas</td></tr>
</tbody></table>
<h4>Combustión anormal en el MEP: el picado</h4>
<p>La parte <b>final</b> de la mezcla sin quemar, comprimida y calentada por el frente de llama, puede <b>autoinflamarse</b> (encendido interno). Al superar la temperatura de autoinflamación transcurre el <b>tiempo de retraso</b> $\\tau_r$ (prerreacciones, cinética química) y después llega la reacción exotérmica explosiva (diap. 17).</p>
<ul>
<li>El fuerte gradiente de presiones genera una <b>onda de choque</b> que recorre la cámara a <b>velocidad sónica</b> (oscilaciones de presión tras el PMS).</li>
<li>Produce <b>degradación térmica</b> de las superficies y <b>ruido</b>: debe evitarse. Se llama <b>picado</b> o <i>knock</i>.</li>
<li>Menor riesgo con un combustible de mayor resistencia a la autoinflamación (<b>↑ número de octano</b>): mayor temperatura de autoinflamación y <b>mayor tiempo de retraso</b>.</li>
</ul>
<h4>Combustión en el MEC</h4>
<ul>
<li>Se admite <b>solo aire</b>; la mezcla se forma durante la combustión, con <b>inyección de alta presión</b> en el cilindro al final de la compresión. El inyector debe tener <b>varios chorros</b>.</li>
<li>Encendido por <b>autoinflamación</b>; dosado local <b>muy heterogéneo</b> en la cámara.</li>
<li>Durante la admisión y la compresión el aire adquiere un movimiento de <b>torbellino</b> en la cámara tallada en el pistón, donde se inicia la combustión.</li>
<li>Regulación de la carga por el combustible inyectado (<b>cualitativa</b>).</li>
<li>Combustibles <b>pesados, no volátiles</b> y de baja temperatura de autoinflamación (gasóleo, biodiésel). Ruido de combustión (diap. 18).</li>
</ul>
<h4>Fases de la combustión en el MEC</h4>
<ol>
<li><b>Tiempo de retraso</b>: debido a la cinética de las reacciones de precombustión.</li>
<li><b>Combustión premezclada</b>: arde muy rápido (autoinflamación) el combustible evaporado y mezclado con el aire durante el retraso; provoca el pico brusco de presión.</li>
<li><b>Combustión por difusión</b>: arde el combustible conforme se va mezclando con el aire; su final es impreciso (diap. 19).</li>
</ol>
<p>Cuanto más largo es el retraso, más combustible se acumula y más violenta es la fase premezclada. Aquí el combustible conviene que se <b>autoinflame con facilidad</b> (al revés que en el MEP).</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> la facilidad de autoinflamación de un gasóleo se mide con el <b>número de cetano</b> (alto en los combustibles de MEC), mientras que el <b>número de octano</b> mide la resistencia a la autoinflamación de las gasolinas.</div>
` },
    { id: "t2-renovacion", title: "3. Renovación de la carga: 4 tiempos, 2 tiempos y Wankel", slides: ["T2", 20, 26], html: `
<h4>Los cuatro tiempos</h4>
<p>En el motor de 4 tiempos el ciclo completo ocupa <b>dos vueltas del cigüeñal</b> (diap. 20):</p>
<ul>
<li><b>1.ª vuelta</b>: admisión (pistón baja) y compresión (pistón sube).</li>
<li><b>2.ª vuelta</b>: expansión (pistón baja) y escape (pistón sube).</li>
</ul>
<p>Por eso, en las fórmulas de potencia, el número de ciclos por vuelta es $i=1/2$.</p>
<h4>Diagrama de distribución y cruce de válvulas</h4>
<p>En el diagrama de distribución <b>teórico</b> cada carrera ocupa exactamente 180º. En el <b>real</b> las válvulas se abren antes y se cierran después de los puntos muertos (diap. 21):</p>
<table class="tbl"><thead><tr><th>Sigla</th><th>Significado</th><th>Para qué</th></tr></thead><tbody>
<tr><td>AAA</td><td>Avance a la apertura de admisión (antes del PMS)</td><td>Válvula ya abierta cuando el pistón empieza a bajar</td></tr>
<tr><td>RCA</td><td>Retraso al cierre de admisión (después del PMI)</td><td>Aprovechar la inercia del aire para llenar más</td></tr>
<tr><td>AAE</td><td>Avance a la apertura de escape (antes del PMI)</td><td>Escape espontáneo: baja la presión antes de que suba el pistón</td></tr>
<tr><td>RCE</td><td>Retraso al cierre de escape (después del PMS)</td><td>Barrer mejor los gases quemados</td></tr>
</tbody></table>
<p>Entre AAA y RCE, alrededor del PMS, están abiertas <b>las dos válvulas</b>: es el <b>cruce de válvulas</b>, un <b>cortocircuito</b> entre admisión y escape. En el diagrama del indicador la combustión se inicia <b>antes del PMS</b>, durante la carrera de compresión (diap. 21).</p>
<h4>Diagrama p-α del 4T</h4>
<p>La diap. 22 representa la presión frente al ángulo de cigüeñal en 720º: admisión (de −360º a −180º), compresión, combustión alrededor del PMS (0º; la <b>chispa</b> salta antes), expansión y escape. Debajo, el volumen del cilindro y la <b>fracción de masa quemada</b> $x_b$, que pasa de 0 a 1 en pocas decenas de grados en torno al PMS. La curva de puntos es la presión <b>sin combustión</b> (arrastre).</p>
<h4>Dos tiempos: barrido por cárter (MEP)</h4>
<p>En el 2T el ciclo se completa en <b>una vuelta</b> ($i=1$). La renovación de la carga se hace a la vez que el final de la expansión y el principio de la compresión: el <b>barrido</b> (diap. 23).</p>
<ul>
<li><b>MEP con barrido por cárter</b> y admisión y escape por <b>lumbreras</b>: simplicidad, bajo coste y bajo peso; pequeños motores; <b>aceite perdido</b> (la mezcla pasa por el cárter).</li>
<li>Admisión al cárter: lumbrera controlada por el pistón o cierre por <b>válvula de láminas</b> o <b>rotativa</b>.</li>
</ul>
<h4>Dos tiempos: barrido uniflujo (MEC)</h4>
<ul>
<li><b>MEC con barrido uniflujo</b> y <b>compresor de barrido independiente</b>: necesita <b>válvula de escape</b> en la culata y la admisión es por <b>lumbreras</b>.</li>
<li>Propio de <b>muy grandes motores lentos</b> (marinos). Secuencia: combustión → escape espontáneo → barrido (admisión + escape) → compresión (diap. 24).</li>
</ul>
<p>En el diagrama del 2T (diap. 25) no hay lazo de bombeo: la renovación (AE, AA, CE, CA) ocurre cerca del PMI, en la zona de baja presión. El trabajo de bombeo lo pone la <b>bomba de barrido</b>.</p>
<h4>Motor Wankel</h4>
<ul>
<li>Motor <b>rotativo</b> (no alternativo): un pistón <b>triangular</b> gira dentro de una <b>trocoide</b>.</li>
<li>Relación de giro cigüeñal-rotor <b>3:1</b>; <b>una vuelta completa del cigüeñal = un ciclo de trabajo</b>.</li>
<li>El piñón central está <b>fijo al cárter</b>; admisión y escape por <b>lumbreras</b> (diap. 26).</li>
</ul>
` },
    { id: "t2-config", title: "4. Refrigeración, presión de admisión y disposición de cilindros", slides: ["T2", 27, 45], html: `
<h4>Refrigeración por líquido</h4>
<ul>
<li><b>Mejor refrigeración</b>: se alcanza mayor potencia específica. Mejor control.</li>
<li>Más complicada y con más posibilidad de averías. Líquido = agua con aditivos. <b>Mayor inercia térmica</b> (diap. 27).</li>
</ul>
<table class="tbl"><thead><tr><th>N.º</th><th>Elemento</th></tr></thead><tbody>
<tr><td>1</td><td>Bomba de agua (centrífuga o de paletas)</td></tr>
<tr><td>2</td><td>Circuito, en sentido ascendente</td></tr>
<tr><td>3</td><td><b>Termostato</b> (90-120 ºC): direcciona el flujo al radiador o a la recirculación</td></tr>
<tr><td>4</td><td>Vaso de expansión</td></tr>
<tr><td>5</td><td>Válvula de seguridad, tarada a $p\\gt p_{atm}$</td></tr>
<tr><td>6</td><td>Conducto de recirculación</td></tr>
<tr><td>7</td><td>Ventilador axial, accionado por correa, motor eléctrico o hidráulico y controlado por la temperatura de entrada al motor</td></tr>
</tbody></table>
<p>En motores marinos o estacionarios el radiador se sustituye por un <b>cambiador de calor</b> con agua de mar, río o torre.</p>
<h4>Refrigeración por aire</h4>
<ul>
<li><b>Peor refrigeración</b>: potencia específica limitada.</li>
<li>Más robusta y sencilla, <b>menor inercia térmica</b> y <b>más ruido</b>. Puede ser natural (aletas) o forzada (ventilador) (diap. 28).</li>
</ul>
<h4>Aspiración natural y sobrealimentación</h4>
<table class="tbl"><thead><tr><th>Aspiración natural</th><th>Sobrealimentación</th></tr></thead><tbody>
<tr><td>El aire o la mezcla entra aspirado por el movimiento descendente del pistón</td><td>El aire o la mezcla entra tras pasar por un compresor</td></tr>
<tr><td>Presión de aspiración <b>menor</b> que la ambiente</td><td>↑ presión de admisión → ↑ aire → ↑ combustible → ↑ potencia (o ↓ cilindrada a igual potencia: <b>downsizing</b>)</td></tr>
<tr><td>Respuesta inmediata ante cambios de carga</td><td>Mecánica o turbosobrealimentación</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>Sobrealimentación mecánica</th><th>Turbosobrealimentación</th></tr></thead><tbody>
<tr><td>Compresor <b>volumétrico</b> accionado por el <b>cigüeñal</b></td><td><b>Turbocompresor</b> accionado por una <b>turbina de escape</b></td></tr>
<tr><td><b>Menor rendimiento mecánico</b> (y efectivo): resta potencia del eje</td><td>↑↑ rendimiento: aprovecha energía de los gases de escape</td></tr>
<tr><td>Respuesta inmediata</td><td><b>Turbolag</b>: retraso de respuesta</td></tr>
<tr><td>A veces en tándem con turbos</td><td>Difícil acoplarlo bien a bajas y altas cargas/regímenes</td></tr>
</tbody></table>
<h4>Postenfriamiento (intercooling)</h4>
<p>El aire se calienta al comprimirse. El <b>postenfriador</b> reduce su temperatura para (diap. 30):</p>
<ul>
<li>↑ <b>densidad</b> del aire → ↑ potencia;</li>
<li>↓ problemas térmicos;</li>
<li>↓ tendencia al <b>picado</b> en MEP.</li>
</ul>
<p>En automoción se usan postenfriadores <b>aire/aire</b>; en motores marinos, <b>aire/agua</b>. Consecuencia para el examen: en un motor sobrealimentado, las condiciones de referencia del rendimiento volumétrico son las de <b>salida del compresor</b> o, si lo hay, de <b>salida del postenfriador</b>.</p>
<h4>Número y disposición de cilindros</h4>
<p>Disposiciones: <b>en línea</b>, <b>en V</b> y <b>W</b>, <b>bóxer</b> (cilindros opuestos) y <b>estrella</b> (aviación). Ejemplos de las diap. 31-45:</p>
<ul>
<li>Automoción: 4 cilindros turbodiésel (con turbocompresor, postenfriador y catalizador de oxidación), bóxer de 6 cilindros (Porsche), 3 cilindros turbodiésel en línea (Smart), 6 en línea turbodiésel (el más común en camiones y autobuses); el coche más potente (Bugatti, 735 kW = 1000 CV, consumo urbano 43 l/100 km).</li>
<li>Motocicletas: 1 cilindro (scooter), 2 en V refrigerados por aire (Harley Davidson), bóxer de 2, 4 y 6 en línea.</li>
<li>Marinos: «high speed», «medium speed» 4T en V con <b>reductora</b> a la hélice y «low speed» 2T en línea con <b>accionamiento directo</b> de la hélice. El más potente del mundo: <b>80 000 kW</b> (110 000 CV), 14 cilindros de <b>96 cm</b> de diámetro y 2300 t.</li>
<li>Locomotoras y generación eléctrica: motores de gas natural, diésel 4T y grandes diésel de 2 tiempos.</li>
</ul>
` },
    { id: "t2-geometria", title: "5. Parámetros geométricos y cinemática biela-manivela", slides: ["T2", 47, 50], html: `
<h4>Parámetros geométricos</h4>
<ul>
<li><b>PMS</b> (punto muerto superior) y <b>PMI</b> (punto muerto inferior): posiciones extremas del pistón.</li>
<li><b>Diámetro</b> $D$: ciclomotores 30-40 mm; turismos 70-90 mm; camiones 100-150 mm; marinos/generación 100-960 mm.</li>
<li><b>Carrera</b> $S$: recorrido del pistón entre PMS y PMI ($S=2R$, con $R$ el radio de la manivela).</li>
<li><b>Número de cilindros</b> $Z$ y <b>volumen final de compresión</b> $V_c$ (el que queda con el pistón en el PMS) (diap. 47).</li>
</ul>
<h4>Relaciones: S/D, cilindrada y relación de compresión</h4>
<div class="formula">$$V_D=\\frac{\\pi D^2}{4}\\,S$$ $$V_T=Z\\,V_D$$ $$r=\\frac{V_D+V_c}{V_c}$$</div>
<table class="tbl"><thead><tr><th>Parámetro</th><th>Valores típicos</th></tr></thead><tbody>
<tr><td>S/D</td><td>Deportivos 0,8-0,9 · turismos 0,95-1,05 · industriales 1,1-1,2</td></tr>
<tr><td>r</td><td>MEP 9-11 · MEC 15-18</td></tr>
</tbody></table>
<p>Ojo: $r$ es el cociente de volúmenes <b>máximo/mínimo</b> de un cilindro: se usa la cilindrada <b>unitaria</b> $V_D$, no la total.</p>
<p><b>Ejemplo</b>: $D=S=0{,}08$ m y $V_c=40$ cm³. $V_D=\\frac{\\pi\\,0{,}08^2}{4}\\,0{,}08=402{,}1$ cm³ y $r=\\frac{402{,}1+40}{40}=11{,}05$.</p>
<h4>Cinemática y velocidad del pistón</h4>
<p>Con $R=S/2$ el radio de manivela, $L$ la longitud de la biela y $\\lambda=R/L$, la velocidad instantánea del pistón es aproximadamente (diap. 49):</p>
<div class="formula">$$c(\\alpha)=\\frac{dS(\\alpha)}{dt}\\approx 2\\pi n R\\left(\\sin\\alpha+\\frac{\\lambda}{2}\\sin 2\\alpha\\right)$$</div>
<p>Es nula en PMS y PMI y su máximo ($\\approx 1{,}6\\,c_m$) aparece algo <b>antes de los 90º</b> por el término de la biela. La <b>velocidad media del pistón</b> mide la velocidad relativa entre piezas del motor:</p>
<div class="formula">$$c_m=2\\,S\\,n$$ $$(n\\ \\text{en s}^{-1})$$</div>
<p>Relaciona <b>potencia ↔ desgaste</b> y explica el efecto de S/D: a igual $c_m$ (desgaste), una carrera corta permite girar más rápido.</p>
<table class="tbl"><thead><tr><th colspan="2">MEP</th><th>n [rpm]</th><th>c<sub>m</sub> [m/s]</th><th>MEC</th><th>n [rpm]</th><th>c<sub>m</sub> [m/s]</th></tr></thead><tbody>
<tr><td rowspan="3">4T</td><td>Automóvil</td><td>7500</td><td>20</td><td>Automóvil</td><td>5000</td><td>15</td></tr>
<tr><td>Motocicletas</td><td>13 500</td><td>19</td><td rowspan="2">Industrial / vehículo pesado</td><td rowspan="2">2200</td><td rowspan="2">13</td></tr>
<tr><td>Competición (F1)</td><td>18 000</td><td>25</td></tr>
<tr><td>2T</td><td>2T pequeños</td><td>20 000</td><td>19</td><td>2T grandes</td><td>200</td><td>8</td></tr>
</tbody></table>
<h4>Tendencias del parque de motores</h4>
<p>Las gráficas de las diap. 48 y 50 (1993-2025) muestran: cilindrada unitaria en torno a <b>400-500 cm³</b>; predominio de los <b>4 cilindros</b> (con MEP sobrealimentados de 3); relación de compresión de los MEC sobrealimentados <b>bajando</b> (de ≈ 21 a ≈ 16) y la de los MEP <b>subiendo</b> (≈ 10-13); S/D creciendo hasta ≈ 1,1-1,2 en todos; y $c_m$ a potencia máxima de ≈ 16-18 m/s en MEP frente a ≈ 12 m/s en MEC.</p>
` },
    { id: "t2-parametros", title: "6. Parámetros indicados y efectivos, consumo específico y rendimiento volumétrico", slides: ["T2", 51, 54], html: `
<h4>Trabajo indicado y presión media indicada</h4>
<p>El <b>trabajo indicado</b> es el trabajo interno obtenido por el fluido durante el ciclo de trabajo, $W_i=\\oint p\\,dV$. La <b>presión media indicada</b> es la presión que, mantenida constante durante una carrera, daría un trabajo igual al indicado (diap. 51):</p>
<div class="formula">$$pmi=\\frac{W_i}{V_D}=\\frac{Z\\,W_i}{V_T}=\\frac{\\dot W_i}{V_T\\,n\\,i}$$</div>
<h4>Potencia y rendimiento indicados</h4>
<div class="formula">$$\\dot W_i=Z\\,W_i\\,n\\,i$$ $$i=\\begin{cases}1 & \\text{2T}\\\\ 1/2 & \\text{4T}\\end{cases}$$ $$\\eta_i=\\frac{\\dot W_i}{\\dot m_f\\,H_c}$$</div>
<p>$i$ es el número de ciclos por vuelta: un 4T hace un ciclo cada dos vueltas. Con $n$ en s<sup>−1</sup> (rpm/60), presiones en Pa y volúmenes en m³ la potencia sale en W.</p>
<h4>Pérdidas mecánicas y potencia efectiva</h4>
<p>La <b>potencia efectiva</b> es la que se transmite por el eje: $\\dot W_e=M_e\\,\\omega=M_e\\,2\\pi n$. La diferencia con la indicada son las <b>pérdidas mecánicas</b>, debidas a (diap. 52):</p>
<ul>
<li><b>rozamientos</b> en cojinetes, pistón/camisa, levas y válvulas;</li>
<li>el <b>proceso de renovación de la carga</b> (bombeo);</li>
<li>el <b>accionamiento de auxiliares</b>: bombas de agua, aceite, combustible, etc.</li>
</ul>
<div class="formula">$$\\dot W_{pm}=\\dot W_i-\\dot W_e$$ $$\\eta_m=\\frac{\\dot W_e}{\\dot W_i}=1-\\frac{\\dot W_{pm}}{\\dot W_i}$$</div>
<h4>Presión media efectiva y rendimiento efectivo</h4>
<div class="formula">$$pme=\\frac{\\dot W_e}{V_T\\,n\\,i}=\\frac{2\\pi}{V_T\\,i}\\,M_e$$ $$\\eta_e=\\frac{\\dot W_e}{\\dot m_f\\,H_c}=\\eta_i\\,\\eta_m$$</div>
<p>La pme es proporcional al <b>par</b> e independiente del tamaño: permite comparar motores. Se mantiene acotada: <b>MEP 13-17 bar</b> y <b>MEC ≈ 23 bar</b>. También $pme=\\eta_m\\,pmi$.</p>
<p><b>Ejemplo</b>: un 4T de $V_T=1{,}5$ L da $M_e=250$ N·m. $pme=\\frac{2\\pi\\cdot250}{1{,}5\\cdot10^{-3}\\cdot0{,}5}=2{,}09\\cdot10^6$ Pa $=20{,}9$ bar. Si gira a 3000 rpm: $\\dot W_e=250\\cdot2\\pi\\cdot50=78{,}5$ kW.</p>
<h4>Consumo específico de combustible</h4>
<p>Consumo de combustible por unidad de energía dada por el motor, habitualmente en <b>g/kWh</b>. Es inversamente proporcional al rendimiento efectivo, luego es una característica equivalente (diap. 54):</p>
<div class="formula">$$g_{ef}=\\frac{\\dot m_f}{\\dot W_e}=\\frac{1}{\\eta_e\\,H_c}$$ $$g_{ef}\\,[\\text{g/kWh}]=\\frac{3{,}6\\cdot10^{9}}{\\eta_e\\,H_c\\,[\\text{J/kg}]}$$</div>
<p>Valores típicos: <b>MEP 210-350 g/kWh</b>; <b>MEC 180-300 g/kWh</b>.</p>
<h4>Rendimiento volumétrico</h4>
<p>Es la relación entre el caudal másico de aire y el caudal de referencia, el que habría si se llenase la cilindrada a la densidad de referencia $\\rho_{a,ref}=p/(R_a T)$. Cuantifica la <b>calidad del llenado</b> del cilindro:</p>
<div class="formula">$$\\eta_v=\\frac{\\dot m_a}{n\\,i\\,Z\\,V_D\\,\\rho_{a,ref}}$$</div>
<ul>
<li><b>Aspiración natural</b>: $p$ y $T$ <b>ambientales</b>.</li>
<li><b>Sobrealimentado</b>: $p$ y $T$ a la <b>salida del compresor</b> o del <b>postenfriador</b> si lo hay.</li>
<li>Se aplica <b>solo a motores 4T</b> ($i=1/2$), con máximos típicos de <b>0,9-0,95</b>.</li>
</ul>
<p>Error típico: tomar las condiciones ambientales en un motor turboalimentado, lo que da $\\eta_v\\gt 1$.</p>
` },
    { id: "t2-regulacion", title: "7. Regulación de la potencia, curvas características, balance energético y cogeneración", slides: ["T2", 55, 59], html: `
<h4>Cadena de la potencia efectiva</h4>
<p>Encadenando las definiciones (diap. 55):</p>
<div class="formula">$$\\dot W_e=\\dot m_f\\,H_c\\,\\eta_e$$ $$\\dot m_f=F\\,\\dot m_a$$ $$F=F_R\\,F_e$$ $$\\dot m_a=\\eta_v\\,\\frac n2\\,V_T\\,\\rho_{a,ref}$$</div>
<div class="formula">$$\\dot W_e=\\eta_v\\,V_T\\,\\rho_{a,ref}\\,\\frac n2\\,F_R\\,F_e\\,H_c\\,\\eta_i\\,\\eta_m$$</div>
<ul>
<li>$V_T$, $\\rho_{a,ref}$, $F_e$ y $H_c$: <b>constantes</b> para un motor y combustible dados.</li>
<li>$\\eta_i$ y $\\eta_m$: afectan al rendimiento efectivo.</li>
<li>$n$: regulación por <b>régimen</b>. $F_R$: regulación del <b>MEC</b>. $\\eta_v$: regulación del <b>MEP</b>.</li>
</ul>
<p>$F$ es el dosado (masa de combustible/masa de aire), $F_e$ el estequiométrico (≈ 1/14,5-1/15 para gasolina y gasóleo) y $F_R=F/F_e$ el dosado relativo.</p>
<h4>Regulación de la carga y grado de carga</h4>
<p>La potencia se regula con el <b>régimen</b> (salvo aplicaciones a régimen constante) y con el <b>par</b> (pme). La regulación del par depende del motor:</p>
<ul>
<li><b>MEP con carga estratificada y MEC</b>: variando el <b>dosado relativo</b> (regulación cualitativa).</li>
<li><b>MEP de carga homogénea</b>: variando el <b>rendimiento volumétrico</b> con la <b>válvula de mariposa</b> (regulación cuantitativa).</li>
</ul>
<div class="formula">$$g.c.=\\frac{\\dot W_e(n^*)}{\\dot W_{e,max}(n^*)}=\\begin{cases}\\dfrac{\\eta_v(n^*)}{\\eta_{v,max}(n^*)}=\\dfrac{\\dot m_a(n^*)}{\\dot m_{a,max}(n^*)} & \\text{MEP}\\\\[2mm] \\dfrac{F_R(n^*)}{F_{R,max}(n^*)}=\\dfrac{\\dot m_f(n^*)}{\\dot m_{f,max}(n^*)} & \\text{MEC}\\end{cases}$$</div>
<p>(Suponiendo iguales los rendimientos al mismo régimen $n^*$.) Estrangular la admisión <b>aumenta las pérdidas de bombeo</b>: por eso el MEP de carga homogénea rinde peor a carga parcial.</p>
<h4>Curvas características a plena carga</h4>
<p>Con la mariposa totalmente abierta (o el máximo combustible) se miden, frente al régimen, el <b>par</b> $M_e$, la <b>potencia</b> $N_e=\\dot W_e=M_e\\,2\\pi n$ y el <b>consumo específico</b> $g_{ef}$ (diap. 56):</p>
<ul>
<li>El <b>par máximo</b> aparece a un régimen intermedio; la <b>potencia máxima</b> a un régimen más alto (la potencia sigue creciendo mientras $n$ crezca más deprisa de lo que cae el par).</li>
<li>El <b>consumo específico mínimo</b> está cerca del par máximo.</li>
<li>Límites: régimen mínimo (<b>ralentí</b>) y régimen máximo.</li>
<li>Motores «<b>elásticos</b>»: par casi plano en un rango amplio (p. ej. MEC turbo Audi Q7 V12 TDI: 1000 N·m prácticamente constantes entre unas 2000 y 3000 rpm y 368 kW máximos).</li>
</ul>
<h4>Curvas de isoconsumo específico</h4>
<p>El mapa del motor (par o pme frente a régimen o $c_m$) se dibuja con curvas de igual $g_{ef}$. El <b>máximo rendimiento</b> (consumo mínimo, «ojo» del mapa) está a <b>carga alta</b> y régimen medio. A cargas bajas el consumo se dispara. En los mapas de la diap. 57, el MEP tiene su mínimo en ≈ 235 g/kWh y el MEC en ≈ 202 g/kWh.</p>
<h4>Balance energético</h4>
<div class="formula">$$\\dot m_f\\,H_c=P_e+P_{aux}+\\dot Q_r+\\dot Q_a+\\dot Q_{conv}+\\dot Q_{ge}+\\dot Q_{res}$$</div>
<table class="tbl"><thead><tr><th>Término</th><th>Significado</th><th>%</th></tr></thead><tbody>
<tr><td>$P_e$</td><td>Potencia efectiva en el eje</td><td><b>30-40</b></td></tr>
<tr><td>$P_{aux}$</td><td>Accionamiento de auxiliares</td><td>2-4</td></tr>
<tr><td>$\\dot Q_r$</td><td>Calor al sistema de refrigeración</td><td><b>25-35</b></td></tr>
<tr><td>$\\dot Q_a$</td><td>Calor al refrigerador de aceite (si existe)</td><td>6-10</td></tr>
<tr><td>$\\dot Q_{conv}$</td><td>Radiación y convección por las paredes</td><td>5-8</td></tr>
<tr><td>$\\dot Q_{ge}$</td><td>Calor equivalente de los gases de escape ($\\dot m\\,c_p\\,\\Delta T$)</td><td><b>20-35</b></td></tr>
<tr><td>$\\dot Q_{res}$</td><td>Combustión incompleta ($\\Sigma\\dot m_{res}H_c$)</td><td>1-4</td></tr>
</tbody></table>
<p>El calor de <b>rozamiento</b> $\\dot Q_{roz}$ no es un término aparte: se reparte entre refrigerante y aceite (y en muchos motores el aceite se enfría a su vez con el refrigerante) (diap. 58).</p>
<h4>Cogeneración con MCIA</h4>
<p>Los <b>grandes motores de gas</b> han ganado mucho terreno en cogeneración: se recupera calor de los <b>gases de escape</b> y del <b>líquido refrigerante</b>. Hoy son los grandes protagonistas de la cogeneración industrial, con unidades desde kW<sub>e</sub> hasta <b>20 MW<sub>e</sub></b> (diap. 59).</p>
<p>Fuentes de calor: gases de escape, agua de refrigeración de cilindros, aceite de lubricación y aire de sobrealimentación. El esquema incluye intercambiador de gases de escape, intercambiador del refrigerante, radiador (para disipar el sobrante) y el fluido caliente para su uso.</p>
` },
    { id: "t2-ciclos", title: "8. Ciclos teóricos de aire, comparación con el ciclo real y aprovechamiento energético", slides: ["T2", 61, 65], html: `
<h4>Hipótesis de los ciclos teóricos</h4>
<ul>
<li>Son <b>modelos termodinámicos sustitutivos</b> del ciclo real que, con hipótesis simplificadoras, predicen el trabajo y el rendimiento.</li>
<li><b>Proceso volumétrico</b> (volumen confinado en un cilindro) con <b>flujo no continuo</b> (el proceso se repite).</li>
<li>La combustión es un <b>aporte de calor</b> a volumen constante, a presión constante o ambos, <b>sin variación de masa</b>:</li>
</ul>
<div class="formula">$$q_{ap}=\\frac{\\dot m_f\\,H_c}{\\dot m_a+\\dot m_f}=\\frac{F\\,H_c}{1+F}$$</div>
<ul>
<li>Admiten <b>temperaturas máximas altas</b> por la corta duración de la combustión.</li>
<li>Fluido: aire ($c_p$ constante) o un fluido con $c_p$ constante o variable.</li>
<li><b>Coeficiente de calidad</b> = $\\eta_e/\\eta_{\\text{ciclo teórico}}$ (diap. 61).</li>
</ul>
<h4>Ciclo Otto (aporte de calor a volumen constante)</h4>
<p>Asociado al <b>MEP</b>; temperaturas máximas teóricas muy altas. Compresión y expansión isentrópicas ($p\\,v^{\\gamma}=k$), aporte 2→3 y cesión 4→1 a volumen constante:</p>
<div class="formula">$$\\eta_{CT,v\\,cte}=1-\\frac{1}{r^{\\gamma-1}}$$ $$r=\\frac{v_1}{v_2}$$</div>
<p>Solo depende de $r$ y $\\gamma$. Ejemplo: $r=10$, $\\gamma=1{,}4$ → $\\eta=1-10^{-0{,}4}=0{,}602$.</p>
<h4>Ciclo Diesel (aporte de calor a presión constante)</h4>
<p>Asociado a <b>MEC lentos</b> (marinos y generación eléctrica). Con $\\beta=v_3/v_2$ la relación de combustión a presión constante:</p>
<div class="formula">$$\\eta_{CT,p\\,cte}=1-\\frac{1}{r^{\\gamma-1}}\\,\\frac{\\beta^{\\gamma}-1}{\\gamma(\\beta-1)}$$</div>
<p>Como el factor $\\frac{\\beta^{\\gamma}-1}{\\gamma(\\beta-1)}$ es mayor que 1, a <b>igual $r$</b> el Diesel rinde <b>menos</b> que el Otto; y cuanto mayor $\\beta$ (más combustible, más dosado), peor.</p>
<h4>Ciclo de presión limitada (mixto)</h4>
<p>Asociado a <b>MEC rápidos</b> (automóviles, camiones). Parte del calor se aporta a volumen constante (2→3) hasta la presión máxima del motor real y el resto a presión constante (3→3A). Con $\\alpha=p_3/p_2$ y $\\beta=v_{3A}/v_2$:</p>
<div class="formula">$$\\eta_{CT,p\\,lim}=1-\\frac{1}{r^{\\gamma-1}}\\,\\frac{\\alpha\\beta^{\\gamma}-1}{\\alpha-1+\\gamma\\alpha(\\beta-1)}$$</div>
<p>Con $\\beta=1$ se reduce al Otto y con $\\alpha=1$ al Diesel. Su presión máxima es <b>la misma que la del MEC que simula</b> (diap. 62).</p>
<h4>Influencia de γ, del dosado y de la presión máxima</h4>
<ul>
<li><b>Coeficiente adiabático</b>: con gases de combustión ($\\gamma=1{,}3$) el rendimiento del Otto es claramente menor que con aire ($\\gamma=1{,}4$).</li>
<li><b>MEC frente a MEP</b>: el MEC rinde menos ante la <b>misma $r$</b>; en el Diesel, un dosado relativo <b>menor</b> (β menor) da <b>más</b> rendimiento. El modelo no tiene en cuenta que mayores dosados implican $\\gamma$ medios menores.</li>
<li><b>Presión limitada</b>: el efecto de $r$ sobre $\\eta$ es menos acusado (la curva se aplana) y mayores presiones máximas dan <b>ligeras mejoras</b> de rendimiento (diap. 63).</li>
</ul>
<h4>Comparación ciclo teórico-ciclo real</h4>
<p>Para comparar se imponen: la misma sucesión de procesos, la misma relación de compresión volumétrica, las mismas condiciones de inicio de compresión ($p_1$, $T_1$), la misma cantidad de combustible, la misma composición de mezcla, la misma presión media en escape y admisión y, en el MEC, la <b>misma presión máxima</b> (diap. 64). Diferencias del ciclo real:</p>
<table class="tbl"><thead><tr><th>Causa</th><th>Pérdida</th></tr></thead><tbody>
<tr><td>Combustión no instantánea</td><td><b>Pérdidas de tiempo</b> (zona del PMS)</td></tr>
<tr><td>Proceso no adiabático</td><td><b>Pérdidas de calor</b> (durante la expansión)</td></tr>
<tr><td>Escape no instantáneo</td><td><b>Pérdidas de escape espontáneo</b> (zona del PMI)</td></tr>
</tbody></table>
<h4>Aprovechamiento energético</h4>
<p>Escalera de rendimientos (diap. 65), partiendo de la energía introducida $\\dot m_f H_c$:</p>
<table class="tbl"><thead><tr><th>Nivel</th><th>Rendimiento</th><th>Por qué es menor que el nivel anterior</th></tr></thead><tbody>
<tr><td>Carnot ($T_{FF}$ atmósfera, $T_{FC}$ combustión, más de 2000 ºC)</td><td>$1-\\frac{T_{FF}}{T_{FC}}\\approx 0{,}85$</td><td>—</td></tr>
<tr><td>Ciclo teórico $1-1/r^{\\gamma-1}$</td><td>0,55 (MEP) - 0,68 (MEC)</td><td>El calor no se aporta ni se cede a temperatura constante (no es un ciclo de Carnot)</td></tr>
<tr><td>Ciclo real (indicado)</td><td>$\\eta_i$ = 0,40-0,57</td><td>Calor por paredes, tiempo de combustión, escape (salida no instantánea y pérdidas de carga en conductos)</td></tr>
<tr><td>Efectivo</td><td>$\\eta_e$ = 0,30-0,52</td><td>Rozamiento (lubricación hidrodinámica y mixta), <b>bombeo</b> (área de válvulas; crece al estrangular la admisión; bomba de barrido en 2T) y auxiliares (bombas de agua, aceite y combustible, alternador…)</td></tr>
</tbody></table>
` }
  ],
  confusions: [
    ["MEP: mezcla premezclada, chispa, deflagración, regulación cuantitativa (mariposa)", "MEC: solo aire, autoinflamación, combustión por difusión, regulación cualitativa (combustible)"],
    ["Picado (MEP): autoinflamación indeseada de la mezcla final; se evita con ↑ octano", "Autoinflamación (MEC): es el encendido normal; conviene que el combustible se autoinflame fácil"],
    ["Parámetros indicados: los del fluido sobre el pistón ($W_i$, pmi, $\\eta_i$)", "Parámetros efectivos: los del eje, tras pérdidas mecánicas (pme, $M_e$, $\\eta_e=\\eta_i\\eta_m$)"],
    ["4T: $i=1/2$, un ciclo cada dos vueltas, válvulas y lazo de bombeo", "2T: $i=1$, un ciclo por vuelta, lumbreras y barrido"],
    ["$\\eta_v$ en aspiración natural: p y T ambientales", "$\\eta_v$ sobrealimentado: p y T tras el compresor o el postenfriador"],
    ["Sobrealimentación mecánica: compresor volumétrico movido por el cigüeñal, respuesta inmediata, ↓ η<sub>m</sub>", "Turbosobrealimentación: turbina de escape, ↑↑ rendimiento, turbolag"],
    ["Ciclo Diesel: todo el calor a p = cte; MEC lentos", "Ciclo de presión limitada: parte a v = cte y parte a p = cte; MEC rápidos, misma p<sub>máx</sub> que el motor"],
    ["Pérdidas del ciclo real (bajan de teórico a indicado): calor, tiempo, escape", "Pérdidas mecánicas (bajan de indicado a efectivo): rozamiento, bombeo, auxiliares"]
  ]
};

/* ===================== PREGUNTAS · problemas numéricos ===================== */
L("T2", "t2-geometria", "Cilindrada", 1, "Un motor de 4 cilindros tiene un diámetro de 79,5 mm y una carrera de 80,5 mm. ¿Cuál es su cilindrada total?",
  ["1598 cm³", "400 cm³", "6394 cm³", "1618 cm³", "3196 cm³"],
  0, "<b>Datos:</b> $Z=4$, $D=7{,}95$ cm, $S=8{,}05$ cm. $$V_D=\\frac{\\pi D^2}{4}S=\\frac{\\pi\\cdot7{,}95^2}{4}\\cdot8{,}05=399{,}6\\ \\text{cm}^3$$ $$V_T=Z\\,V_D=4\\cdot399{,}6=\\boxed{1598\\ \\text{cm}^3}$$ Errores típicos: quedarse en la cilindrada unitaria (400 cm³), olvidar el /4 del área (6394 cm³) o intercambiar diámetro y carrera (1618 cm³).", "Apuntes T2, diap. 47");
L("T2", "t2-geometria", "Relación de compresión", 2, "Un MEC de 4 cilindros tiene D = 82 mm, S = 90,4 mm y un volumen de la cámara de combustión (volumen final de compresión) de 30 cm³ por cilindro. ¿Cuál es su relación de compresión?",
  ["16,9", "15,9", "18,5", "64,7", "5,0"],
  0, "<b>1. Cilindrada unitaria:</b> $$V_D=\\frac{\\pi\\cdot8{,}2^2}{4}\\cdot9{,}04=477{,}4\\ \\text{cm}^3$$ <b>2. Relación de compresión</b> (por cilindro, con $V_D$, no con $V_T$): $$r=\\frac{V_D+V_c}{V_c}=\\frac{477{,}4+30}{30}=\\boxed{16{,}9}$$ Valor típico de MEC (15-18). Errores: $V_D/V_c$ sin sumar $V_c$ (15,9), usar la cilindrada total (64,7), intercambiar D y S (18,5) o tomar D como radio (5,0).", "Apuntes T2, diap. 47");
L("T2", "t2-geometria", "Velocidad media del pistón", 1, "Un MEP de automóvil tiene una carrera de 86 mm y gira a 6000 min⁻¹. ¿Cuál es la velocidad media del pistón?",
  ["17,2 m/s", "8,6 m/s", "34,4 m/s", "27,0 m/s", "1032 m/s"],
  0, "$n=6000/60=100$ s⁻¹. $$c_m=2\\,S\\,n=2\\cdot0{,}086\\cdot100=\\boxed{17{,}2\\ \\text{m/s}}$$ En cada vuelta el pistón recorre dos carreras (baja y sube). Coherente con la tabla de la diap. 49 (MEP de automóvil, hasta ≈ 20 m/s). Errores: olvidar el 2 (8,6), usar rpm (1032) o calcular $\\pi S n$, que es la velocidad a 90º sin efecto de biela (27,0).", "Apuntes T2, diap. 49");
L("T2", "t2-geometria", "Velocidad instantánea del pistón", 3, "Un motor tiene una carrera de 80 mm, gira a 6000 min⁻¹ y su relación λ = R/L vale 0,25. Con la expresión aproximada de los apuntes, ¿cuál es la velocidad del pistón cuando la manivela ha girado α = 60º desde el PMS?",
  ["24,5 m/s", "21,8 m/s", "27,2 m/s", "16,0 m/s", "49,0 m/s", "25,1 m/s"],
  0, "<b>Datos:</b> $R=S/2=0{,}04$ m, $n=100$ s⁻¹, $\\lambda=0{,}25$. $$c(\\alpha)\\approx2\\pi nR\\left(\\sin\\alpha+\\frac{\\lambda}{2}\\sin2\\alpha\\right)=2\\pi\\cdot100\\cdot0{,}04\\,(0{,}866+0{,}125\\cdot0{,}866)$$ $$c(60^\\circ)=25{,}13\\cdot0{,}974=\\boxed{24{,}5\\ \\text{m/s}}$$ Errores: olvidar el término de biela (21,8), usar $\\lambda$ en vez de $\\lambda/2$ (27,2), usar $S$ en lugar de $R$ (49,0), dar $c_m=2Sn=16$ m/s o el valor sin biela a 90º, $2\\pi nR=25{,}1$ m/s.", "Apuntes T2, diap. 49");
L("T2", "t2-parametros", "Presión media efectiva a partir del par", 2, "Un MEC de 4 tiempos de 1968 cm³ da un par efectivo máximo de 380 N·m. ¿Qué presión media efectiva tiene en ese punto?",
  ["24,3 bar", "12,1 bar", "48,5 bar", "3,86 bar", "1,93 bar"],
  0, "Con la expresión de la diap. 52 y $i=1/2$ (4T): $$pme=\\frac{2\\pi\\,M_e}{V_T\\,i}=\\frac{2\\pi\\cdot380}{1{,}968\\cdot10^{-3}\\cdot0{,}5}=2{,}43\\cdot10^{6}\\ \\text{Pa}=\\boxed{24{,}3\\ \\text{bar}}$$ Del orden del valor típico de un MEC sobrealimentado (≈ 23 bar). Errores: $i=1$ (12,1 bar, sería un 2T), $i=1/4$ (48,5 bar) u olvidar el $2\\pi$ (3,86 bar).", "Apuntes T2, diap. 52");
L("T2", "t2-parametros", "Potencia efectiva de un 2T marino", 2, "Un MEC lento de 2 tiempos de 6 cilindros, con D = 0,60 m y S = 2,40 m, gira a 100 min⁻¹ con una presión media efectiva de 19 bar. ¿Qué potencia efectiva da?",
  ["12,9 MW", "6,45 MW", "2,15 MW", "774 MW", "25,8 MW"],
  0, "<b>1. Cilindrada:</b> $$V_T=Z\\,\\frac{\\pi D^2}{4}S=6\\cdot\\frac{\\pi\\cdot0{,}6^2}{4}\\cdot2{,}4=4{,}072\\ \\text{m}^3$$ <b>2. Potencia</b> (2T: $i=1$; $n=100/60$ s⁻¹): $$\\dot W_e=pme\\,V_T\\,n\\,i=19\\cdot10^5\\cdot4{,}072\\cdot\\frac{100}{60}\\cdot1=\\boxed{12{,}9\\ \\text{MW}}$$ Errores: $i=1/2$ como si fuera 4T (6,45 MW), usar un solo cilindro (2,15 MW) o rpm sin pasar a s⁻¹ (774 MW).", "Apuntes T2, diap. 24 y 52");
L("T2", "t2-parametros", "Potencia efectiva a partir de la velocidad media", 3, "Un MEP de 4 tiempos y 4 cilindros con D = 86 mm y S/D = 1 trabaja con una presión media efectiva de 12 bar cuando la velocidad media del pistón es de 15 m/s. ¿Qué potencia efectiva desarrolla?",
  ["104,6 kW", "209,1 kW", "26,1 kW", "418,2 kW", "52,3 kW"],
  0, "<b>1. Régimen:</b> $$n=\\frac{c_m}{2S}=\\frac{15}{2\\cdot0{,}086}=87{,}2\\ \\text{s}^{-1}\\ (5233\\ \\text{min}^{-1})$$ <b>2. Cilindrada:</b> $V_T=4\\cdot\\frac{\\pi\\cdot0{,}086^2}{4}\\cdot0{,}086=1{,}998\\cdot10^{-3}$ m³. <b>3. Potencia</b> ($i=1/2$): $$\\dot W_e=pme\\,V_T\\,n\\,i=12\\cdot10^5\\cdot1{,}998\\cdot10^{-3}\\cdot87{,}2\\cdot0{,}5=\\boxed{104{,}6\\ \\text{kW}}$$ Errores: olvidar $i=1/2$ (209,1 kW) o tomar $n=c_m/S$ (también 209,1 kW; con ambos fallos, 418,2 kW), o calcular con un solo cilindro (26,1 kW).", "Apuntes T2, diap. 47, 49 y 52");
L("T2", "t2-parametros", "Par efectivo", 1, "Un motor da una potencia efectiva de 110 kW a 4000 min⁻¹. ¿Cuál es el par efectivo?",
  ["262,6 N·m", "27,5 N·m", "1650 N·m", "4,38 N·m", "525,2 N·m"],
  0, "$\\dot W_e=M_e\\,\\omega=M_e\\,2\\pi n$, con $n=4000/60=66{,}67$ s⁻¹: $$M_e=\\frac{\\dot W_e}{2\\pi n}=\\frac{110\\,000}{2\\pi\\cdot66{,}67}=\\boxed{262{,}6\\ \\text{N·m}}$$ Errores: dividir por las rpm (27,5), olvidar el $2\\pi$ (1650), usar rpm con $2\\pi$ (4,38) o $\\pi n$ (525,2).", "Apuntes T2, diap. 52 y 56");
L("T2", "t2-parametros", "Rendimiento mecánico", 2, "En un MEP de 4 tiempos y 6 cilindros (V<sub>T</sub> = 3,0 L) que gira a 3000 min⁻¹, el trabajo indicado por cilindro y ciclo es de 900 J. Si la potencia efectiva es de 105 kW, ¿cuál es el rendimiento mecánico?",
  ["77,8 %", "38,9 %", "22,2 %", "128,6 %", "155,6 %"],
  0, "<b>1. Potencia indicada</b> ($n=50$ s⁻¹, $i=1/2$): $$\\dot W_i=Z\\,W_i\\,n\\,i=6\\cdot900\\cdot50\\cdot0{,}5=135\\ \\text{kW}$$ (equivale a $pmi=W_i/V_D=900/0{,}5\\cdot10^{-3}=18$ bar). <b>2. Rendimiento mecánico:</b> $$\\eta_m=\\frac{\\dot W_e}{\\dot W_i}=\\frac{105}{135}=\\boxed{77{,}8\\ \\%}$$ Errores: $i=1$ (38,9 %), dar la fracción de pérdidas $\\dot W_{pm}/\\dot W_i$ (22,2 %) o invertir el cociente (128,6 %).", "Apuntes T2, diap. 51-52");
L("T2", "t2-parametros", "Presión media de pérdidas mecánicas", 2, "Un MEC tiene una presión media indicada de 14 bar y un rendimiento mecánico del 82 %. Definiendo la presión media de pérdidas mecánicas como pmpm = pmi − pme, ¿cuánto vale?",
  ["2,52 bar", "3,07 bar", "11,48 bar", "17,07 bar", "2,07 bar"],
  0, "Como $pmi$ y $pme$ se obtienen dividiendo $\\dot W_i$ y $\\dot W_e$ por el mismo $V_T\\,n\\,i$, $\\eta_m=\\dot W_e/\\dot W_i=pme/pmi$: $$pme=\\eta_m\\,pmi=0{,}82\\cdot14=11{,}48\\ \\text{bar}$$ $$pmpm=pmi-pme=14-11{,}48=\\boxed{2{,}52\\ \\text{bar}}$$ Errores: dividir en vez de multiplicar ($pmi/\\eta_m=17{,}07$ y $17{,}07-14=3{,}07$) o dar la pme (11,48).", "Apuntes T2, diap. 51-52");
L("T2", "t2-parametros", "Rendimiento efectivo y consumo específico", 2, "Un MEC de camión tiene un consumo específico mínimo de 205 g/kWh con un gasóleo de H<sub>c</sub> = 42,8 MJ/kg. ¿Cuál es su rendimiento efectivo máximo?",
  ["41,0 %", "11,4 %", "4,1 %", "243,7 %", "0,041 %"],
  0, "$g_{ef}=\\frac{1}{\\eta_e H_c}\\Rightarrow\\eta_e=\\frac{1}{g_{ef}H_c}$. Pasando a unidades coherentes, $g_{ef}=205\\ \\text{g/kWh}=\\frac{0{,}205\\ \\text{kg}}{3{,}6\\cdot10^6\\ \\text{J}}=5{,}694\\cdot10^{-8}$ kg/J: $$\\eta_e=\\frac{1}{5{,}694\\cdot10^{-8}\\cdot42{,}8\\cdot10^{6}}=\\boxed{0{,}410}$$ Está dentro del rango de la diap. 65 (0,30-0,52). Errores: tomar 1 kWh = 1000 kJ (11,4 %) o multiplicar en vez de dividir (243,7 %).", "Apuntes T2, diap. 54 y 65");
L("T2", "t2-parametros", "Consumo específico", 2, "Un MEP tiene un rendimiento indicado del 42 % y un rendimiento mecánico del 83 %. Con una gasolina de H<sub>c</sub> = 43,5 MJ/kg, ¿cuál es su consumo específico efectivo?",
  ["237,4 g/kWh", "197,0 g/kWh", "163,5 g/kWh", "99,7 g/kWh", "132,4 g/kWh"],
  0, "<b>1.</b> $\\eta_e=\\eta_i\\,\\eta_m=0{,}42\\cdot0{,}83=0{,}3486$. <b>2.</b> $$g_{ef}=\\frac{1}{\\eta_e H_c}=\\frac{3{,}6\\cdot10^{9}\\ \\text{g·J/(kg·kWh)}}{0{,}3486\\cdot43{,}5\\cdot10^{6}\\ \\text{J/kg}}=\\boxed{237{,}4\\ \\text{g/kWh}}$$ Dentro del rango típico de un MEP (210-350 g/kWh). Errores: usar solo $\\eta_i$ (197,0, sería el consumo indicado), dividir $\\eta_i/\\eta_m$ (163,5) o usar solo $\\eta_m$ (99,7).", "Apuntes T2, diap. 52 y 54");
L("T2", "t2-parametros", "Rendimiento volumétrico en aspiración natural", 2, "Un MEP de aspiración natural y 4 tiempos, de 1,4 L, aspira 0,0675 kg/s de aire a 5500 min⁻¹. Condiciones ambientales: 1 bar y 20 ºC; R<sub>a</sub> = 287 J/kg·K. ¿Cuál es su rendimiento volumétrico?",
  ["88,5 %", "44,3 %", "6,0 %", "177 %", "354 %"],
  0, "<b>1. Densidad de referencia</b> (aspiración natural: ambiente): $$\\rho_{a,ref}=\\frac{p}{R_aT}=\\frac{10^5}{287\\cdot293{,}15}=1{,}189\\ \\text{kg/m}^3$$ <b>2. Rendimiento volumétrico</b> ($n=91{,}67$ s⁻¹, $i=1/2$): $$\\eta_v=\\frac{\\dot m_a}{n\\,i\\,V_T\\,\\rho_{a,ref}}=\\frac{0{,}0675}{91{,}67\\cdot0{,}5\\cdot1{,}4\\cdot10^{-3}\\cdot1{,}189}=\\boxed{88{,}5\\ \\%}$$ Errores: $i=1$ (44,3 %), temperatura en ºC (6,0 %) o $i=1/4$ (177 %).", "Apuntes T2, diap. 54");
L("T2", "t2-parametros", "Rendimiento volumétrico con postenfriador", 3, "Un MEC turboalimentado de 4 tiempos con postenfriador, de 2,0 L, admite 0,112 kg/s de aire a 3500 min⁻¹. Ambiente: 1 bar y 25 ºC; salida del compresor: 2,2 bar y 120 ºC; salida del postenfriador: 2,1 bar y 45 ºC. Con R<sub>a</sub> = 287 J/kg·K, ¿cuál es el rendimiento volumétrico?",
  ["83,5 %", "98,5 %", "164,3 %", "41,7 %", "49,2 %"],
  0, "Con postenfriador, la referencia son las condiciones <b>a la salida del postenfriador</b>: $$\\rho_{a,ref}=\\frac{2{,}1\\cdot10^5}{287\\cdot318{,}15}=2{,}300\\ \\text{kg/m}^3$$ $$\\eta_v=\\frac{\\dot m_a}{n\\,i\\,V_T\\,\\rho_{a,ref}}=\\frac{0{,}112}{\\frac{3500}{60}\\cdot0{,}5\\cdot2\\cdot10^{-3}\\cdot2{,}300}=\\boxed{83{,}5\\ \\%}$$ Errores: tomar la salida del compresor (98,5 %, solo válida sin postenfriador), el ambiente (164,3 %, imposible) u olvidar $i=1/2$ (41,7 % o 49,2 %).", "Apuntes T2, diap. 30 y 54");
L("T2", "t2-regulacion", "Dosado relativo", 3, "Un MEC sobrealimentado de 4 tiempos y 2,0 L da 120 kW a 4000 min⁻¹. Tras el postenfriador el aire está a 2,2 bar y 50 ºC. Los rendimientos volumétrico, indicado y mecánico son 90 %, 46 % y 82 %. Con F<sub>e</sub> = 1/14,5, H<sub>c</sub> = 42,5 MJ/kg y R<sub>a</sub> = 287 J/kg·K, ¿cuál es el dosado relativo?",
  ["0,763", "0,381", "0,053", "0,625", "0,513", "1,548"],
  0, "<b>1. Aire:</b> $\\rho=\\frac{2{,}2\\cdot10^5}{287\\cdot323{,}15}=2{,}372$ kg/m³; $$\\dot m_a=\\eta_v\\,\\rho\\,V_T\\,n\\,i=0{,}9\\cdot2{,}372\\cdot2\\cdot10^{-3}\\cdot66{,}67\\cdot0{,}5=0{,}1423\\ \\text{kg/s}$$ <b>2. Combustible</b> ($\\eta_e=0{,}46\\cdot0{,}82=0{,}3772$): $$\\dot m_f=\\frac{\\dot W_e}{\\eta_e H_c}=\\frac{120\\,000}{0{,}3772\\cdot42{,}5\\cdot10^6}=7{,}485\\cdot10^{-3}\\ \\text{kg/s}$$ <b>3.</b> $F=\\dot m_f/\\dot m_a=0{,}0526$ y $$F_R=\\frac{F}{F_e}=0{,}0526\\cdot14{,}5=\\boxed{0{,}763}$$ Pobre, como corresponde a un MEC. Errores: $i=1$ (0,381), dar $F$ y no $F_R$ (0,053), usar solo $\\eta_i$ (0,625) o el ambiente como referencia.", "Apuntes T2, diap. 54-55");
L("T2", "t2-regulacion", "Potencia efectiva por la cadena de rendimientos", 3, "Un MEP de carga homogénea de aspiración natural y 4 tiempos, con catalizador de tres vías, tiene 1,6 L y gira a 6000 min⁻¹ con η<sub>v</sub> = 85 %. Ambiente: 1 bar y 25 ºC (R<sub>a</sub> = 287 J/kg·K). Con F<sub>e</sub> = 1/14,7, H<sub>c</sub> = 43 MJ/kg, η<sub>i</sub> = 38 % y η<sub>m</sub> = 85 %, ¿qué potencia efectiva da?",
  ["75,1 kW", "150,2 kW", "88,3 kW", "103,9 kW", "63,8 kW"],
  0, "Catalizador de tres vías ⇒ $F_R=1$. $\\rho_{a,ref}=\\frac{10^5}{287\\cdot298{,}15}=1{,}169$ kg/m³. $$\\dot W_e=\\eta_v\\,V_T\\,\\rho_{a,ref}\\,\\frac n2\\,F_R\\,F_e\\,H_c\\,\\eta_i\\,\\eta_m$$ $$\\dot m_a=0{,}85\\cdot1{,}6\\cdot10^{-3}\\cdot1{,}169\\cdot\\frac{100}{2}=0{,}07947\\ \\text{kg/s}\\ ;\\ \\dot m_f=\\frac{0{,}07947}{14{,}7}=5{,}406\\cdot10^{-3}\\ \\text{kg/s}$$ $$\\dot W_e=5{,}406\\cdot10^{-3}\\cdot43\\cdot10^6\\cdot0{,}38\\cdot0{,}85=\\boxed{75{,}1\\ \\text{kW}}$$ Errores: olvidar el /2 del 4T (150,2), quedarse en la potencia indicada (88,3) o dividir por $\\eta_m$ (103,9).", "Apuntes T2, diap. 16 y 55");
L("T2", "t2-regulacion", "Grado de carga en un MEC", 2, "Un MEC funciona a 2000 min⁻¹ con un dosado relativo de 0,45. A plena carga y a ese mismo régimen el dosado relativo máximo es 0,78. Suponiendo iguales η<sub>v</sub> y los rendimientos, ¿cuál es el grado de carga?",
  ["57,7 %", "45,0 %", "78,0 %", "173 %", "33,0 %"],
  0, "En el MEC la carga se regula con el combustible (dosado), con el aire casi constante: $$g.c.=\\frac{\\dot W_e(n^*)}{\\dot W_{e,max}(n^*)}=\\frac{F_R(n^*)}{F_{R,max}(n^*)}=\\frac{0{,}45}{0{,}78}=\\boxed{57{,}7\\ \\%}$$ Errores: dar el propio $F_R$ (45 %), invertir el cociente (173 %) o restar (33 %).", "Apuntes T2, diap. 55");
L("T2", "t2-ciclos", "Rendimiento del ciclo Otto", 1, "¿Cuál es el rendimiento del ciclo teórico Otto de aire (γ = 1,4) para una relación de compresión de 10,5?",
  ["0,610", "0,506", "0,963", "0,905", "0,453"],
  0, "$$\\eta_{CT,v\\,cte}=1-\\frac{1}{r^{\\gamma-1}}=1-\\frac{1}{10{,}5^{0{,}4}}=1-0{,}390=\\boxed{0{,}610}$$ Errores: usar γ = 1,3 (0,506), elevar a γ en vez de a γ − 1 (0,963) o calcular $1-1/r$ (0,905).", "Apuntes T2, diap. 62");
L("T2", "t2-ciclos", "Rendimiento del ciclo Diesel", 3, "Un ciclo teórico Diesel de aire (γ = 1,4) tiene una relación de compresión de 18 y una relación de combustión a presión constante β = v<sub>3</sub>/v<sub>2</sub> = 2,2. ¿Cuál es su rendimiento?",
  ["0,622", "0,685", "0,471", "0,260", "0,519"],
  0, "$$\\eta_{CT,p\\,cte}=1-\\frac{1}{r^{\\gamma-1}}\\,\\frac{\\beta^{\\gamma}-1}{\\gamma(\\beta-1)}=1-\\frac{1}{18^{0{,}4}}\\cdot\\frac{2{,}2^{1{,}4}-1}{1{,}4\\cdot1{,}2}$$ $$=1-0{,}3147\\cdot\\frac{3{,}016-1}{1{,}68}=1-0{,}3147\\cdot1{,}200=\\boxed{0{,}622}$$ Menor que el Otto de igual $r$ (0,685), como dicen los apuntes. Errores: olvidar la γ del denominador (0,471), multiplicar por γ (0,260) o usar γ = 1,3 (0,519).", "Apuntes T2, diap. 62-63");
L("T2", "t2-ciclos", "Rendimiento del ciclo de presión limitada", 3, "Un ciclo teórico de presión limitada (γ = 1,4) tiene r = 16, α = p<sub>3</sub>/p<sub>2</sub> = 1,6 y β = v<sub>3A</sub>/v<sub>2</sub> = 1,4. ¿Cuál es su rendimiento?",
  ["0,655", "0,670", "0,646", "0,556", "0,862"],
  0, "$$\\eta_{CT,p\\,lim}=1-\\frac{1}{r^{\\gamma-1}}\\,\\frac{\\alpha\\beta^{\\gamma}-1}{\\alpha-1+\\gamma\\alpha(\\beta-1)}=1-\\frac{1}{16^{0{,}4}}\\cdot\\frac{1{,}6\\cdot1{,}4^{1{,}4}-1}{0{,}6+1{,}4\\cdot1{,}6\\cdot0{,}4}$$ $$=1-0{,}3299\\cdot\\frac{1{,}5627}{1{,}496}=1-0{,}3299\\cdot1{,}0446=\\boxed{0{,}655}$$ Queda entre el Diesel con β = 1,4 (0,646, que sería α = 1) y el Otto (0,670, que sería β = 1). Error típico: olvidar α en el término $\\gamma\\alpha(\\beta-1)$ (0,556).", "Apuntes T2, diap. 62");
L("T2", "t2-ciclos", "Coeficiente de calidad", 2, "Un MEP con relación de compresión 10 tiene un rendimiento efectivo del 33 %. Tomando como referencia el ciclo Otto de aire (γ = 1,4), ¿cuál es su coeficiente de calidad?",
  ["0,548", "1,824", "0,199", "0,662", "0,670"],
  0, "<b>1.</b> $\\eta_{Otto}=1-10^{-0{,}4}=0{,}602$. <b>2.</b> El coeficiente de calidad es el cociente entre el rendimiento efectivo y el del ciclo teórico: $$\\frac{\\eta_e}{\\eta_{CT}}=\\frac{0{,}33}{0{,}602}=\\boxed{0{,}548}$$ Errores: invertir el cociente (1,824), multiplicar (0,199) o usar γ = 1,3 (0,662).", "Apuntes T2, diap. 61-62");
L("T2", "t2-ciclos", "Calor aportado en el ciclo teórico", 2, "Un MEC trabaja con un dosado relativo de 0,8, con F<sub>e</sub> = 1/14,5 y H<sub>c</sub> = 42,5 MJ/kg. ¿Qué calor por unidad de masa de fluido de trabajo hay que aportar en el ciclo teórico equivalente?",
  ["2,22 MJ/kg", "2,34 MJ/kg", "2,74 MJ/kg", "40,3 MJ/kg", "0,123 MJ/kg"],
  0, "$F=F_R\\,F_e=0{,}8/14{,}5=0{,}05517$. Como el ciclo teórico no tiene variación de masa, el calor se reparte entre aire y combustible: $$q_{ap}=\\frac{F\\,H_c}{1+F}=\\frac{0{,}05517\\cdot42{,}5}{1{,}05517}=\\boxed{2{,}22\\ \\text{MJ/kg}}$$ Errores: olvidar el $1+F$ (2,34, calor por kg de aire), ignorar $F_R$ (2,74) o calcular $H_c/(1+F)$ (40,3).", "Apuntes T2, diap. 61");
L("T2", "t2-regulacion", "Balance energético: gases de escape", 3, "Un MEC da 200 kW con un rendimiento efectivo del 36 % (H<sub>c</sub> = 42,7 MJ/kg) y trabaja con F<sub>R</sub> = 0,65 (F<sub>e</sub> = 1/14,5). Los gases de escape salen 420 K por encima de la temperatura ambiente con c<sub>p</sub> = 1,1 kJ/kg·K. ¿Qué fracción de la energía del combustible se va con los gases de escape?",
  ["25,2 %", "24,1 %", "70,1 %", "36,0 %", "1,1 %"],
  0, "<b>1. Combustible:</b> $\\dot m_f=\\frac{200}{0{,}36\\cdot42\\,700}=0{,}01301$ kg/s; $\\dot m_fH_c=555{,}6$ kW. <b>2. Aire:</b> $\\dot m_a=\\frac{\\dot m_f}{F_RF_e}=\\frac{0{,}01301\\cdot14{,}5}{0{,}65}=0{,}2902$ kg/s. <b>3. Escape</b> (aire + combustible): $$\\dot Q_{ge}=(\\dot m_a+\\dot m_f)\\,c_p\\,\\Delta T=0{,}3033\\cdot1{,}1\\cdot420=140{,}1\\ \\text{kW}$$ $$\\frac{\\dot Q_{ge}}{\\dot m_fH_c}=\\frac{140{,}1}{555{,}6}=\\boxed{25{,}2\\ \\%}$$ Dentro del 20-35 % del balance típico. Errores: olvidar la masa de combustible (24,1 %) o referirlo a la potencia efectiva (70,1 %).", "Apuntes T2, diap. 58");

/* ===================== PREGUNTAS · teoría ===================== */
L("T2", "t2-intro", "Ciclo de trabajo y renovación de la carga", 1, "¿Cuál de estos procesos de un MCIA forma parte del ciclo de renovación de la carga y no del ciclo termodinámico o de trabajo?",
  ["Escape", "Combustión", "Expansión", "Compresión"],
  0, "Los apuntes separan el <b>ciclo de trabajo</b> (compresión, combustión y expansión) del <b>ciclo de renovación de la carga</b> (escape y admisión).", "Apuntes T2, diap. 4");
L("T2", "t2-intro", "Principio de funcionamiento", 1, "¿Por qué los MCIA suelen tener varios cilindros?",
  ["Porque son máquinas alternativas de flujo discontinuo", "Porque no son adiabáticos y así reparten las pérdidas de calor", "Porque la combustión en un solo cilindro sería una detonación", "Porque el mecanismo biela-manivela solo puede mover un cigüeñal con varios pistones"],
  0, "Al ser máquinas <b>alternativas</b>, el flujo y el par son <b>discontinuos</b>; varios cilindros desfasados regularizan la entrega. Que no sean adiabáticos es otra característica, pero no la razón de usar varios cilindros.", "Apuntes T2, diap. 4");
L("T2", "t2-intro", "Diagrama del indicador", 2, "En el diagrama del indicador de un motor real de 4 tiempos aparece un lazo pequeño en la zona de baja presión, entre V<sub>c</sub> y V<sub>c</sub> + V<sub>D</sub>. ¿Qué representa?",
  ["El ciclo de renovación de la carga, que normalmente absorbe trabajo", "El ciclo de trabajo, cuya área es el trabajo indicado útil", "Las pérdidas mecánicas por rozamiento entre pistón y camisa", "La compresión, cuyo trabajo se recupera íntegramente en la expansión"],
  0, "El lazo grande es el ciclo de trabajo; el pequeño, recorrido mientras el pistón expulsa los gases y aspira carga fresca, es el <b>ciclo de renovación de la carga</b>: con presión de admisión menor que la de escape absorbe trabajo (lazo de bombeo). Las pérdidas por rozamiento no se ven en el diagrama p-V.", "Apuntes T2, diap. 6 y 21");
L("T2", "t2-intro", "Trabajo sobre el pistón", 3, "Según los apuntes, la presión que hay que integrar sobre el volumen para obtener el trabajo que los gases transmiten al pistón es…",
  ["la diferencia entre la presión del cilindro y la del cárter", "la presión absoluta en el cilindro", "la diferencia entre la presión del cilindro y la de admisión", "la presión media efectiva del motor"],
  0, "Sobre el pistón actúan los gases del cilindro por arriba y la presión del cárter por abajo: $p=p_{cil}-p_{cárter}$, y $dW=p\\,A_p\\,dx=p\\,dV$. La pme es un parámetro de comparación, no la presión que actúa en cada instante.", "Apuntes T2, diap. 5");
L("T2", "t2-intro", "Características y campos de aplicación", 2, "¿Cuál de las siguientes es una característica de los MCIA según los apuntes?",
  ["Rendimientos térmicos altos, de hasta el 52 %, con poca variación fuera de diseño", "Rendimiento muy sensible a la carga, por lo que solo se usan a régimen constante", "Potencias entre 1 kW y 1000 MW, como las turbinas de vapor", "Flujo continuo, que permite un funcionamiento con un único cilindro"],
  0, "La diap. 7 cita potencia específica elevada, combustibles de gran poder calorífico, rendimientos de hasta el 52 % con poca variación fuera de diseño, potencias entre 100 W y 80 MW y disposiciones variadas. El flujo es discontinuo.", "Apuntes T2, diap. 7");
L("T2", "t2-intro", "Elementos constructivos", 2, "En la división de la estructura de un MCIA en cuatro partes, ¿a cuál pertenece el árbol de levas?",
  ["Al sistema de distribución", "A la cadena cinemática", "Al bloque de cilindros y culatas", "A los elementos auxiliares"],
  0, "Sistema de distribución = admisión y escape: colectores, válvulas y <b>árbol de levas</b>. La cadena cinemática es pistón-biela-cigüeñal; el bloque incluye culatas y la fijación del cigüeñal; los auxiliares son bombas, alternador, ventiladores…", "Apuntes T2, diap. 8");
L("T2", "t2-combustion", "Combustión en el MEP", 2, "La combustión normal en un MEP es una deflagración. Eso significa que el frente de llama avanza…",
  ["a velocidad subsónica, con la misma presión a ambos lados y distinta temperatura", "a velocidad sónica, como una onda de choque que recorre la cámara", "a velocidad subsónica, con la misma temperatura a ambos lados y distinta presión", "por autoinflamación simultánea de toda la mezcla de la cámara"],
  0, "La deflagración avanza por difusión térmica y molecular, ayudada por la turbulencia, a velocidad <b>subsónica</b>: presión igual a ambos lados del frente, temperatura no. La onda de choque sónica es la del <b>picado</b>.", "Apuntes T2, diap. 15 y 17");
L("T2", "t2-combustion", "Carga homogénea", 2, "En un MEP de carga homogénea con catalizador de tres vías, el dosado relativo de funcionamiento es…",
  ["F<sub>R</sub> = 1", "0,8 &lt; F<sub>R</sub> &lt; 1,15", "pobre en media y estequiométrico junto a la bujía", "variable entre 0,3 y 0,8 según la carga"],
  0, "Con catalizador de tres vías, $F_R=1$; sin él, $1{,}15\\gt F_R\\gt0{,}8$. El dosado medio pobre con zona estequiométrica junto a la bujía es la carga <b>estratificada</b>, y el dosado variable con la carga es propio del MEC.", "Apuntes T2, diap. 16");
L("T2", "t2-combustion", "Regulación de la carga", 3, "¿Qué motores regulan la carga variando el dosado relativo (regulación cualitativa)?",
  ["El MEC y el MEP de carga estratificada", "Solo el MEC", "El MEC y el MEP de carga homogénea", "Los MEP de carga homogénea y estratificada"],
  0, "El MEP de carga <b>homogénea</b> mantiene el dosado y regula estrangulando la admisión (cuantitativa, con la mariposa). El MEP <b>estratificado</b> y el <b>MEC</b> inyectan más o menos combustible (cualitativa).", "Apuntes T2, diap. 16, 18 y 55");
L("T2", "t2-combustion", "Picado", 3, "¿Qué reduce la probabilidad de picado en un MEP?",
  ["Un combustible de mayor número de octano, que alarga el tiempo de retraso de la mezcla final", "Un combustible que acorte el tiempo de retraso de la mezcla final sin quemar", "Un combustible con menor temperatura de autoinflamación", "Suprimir el postenfriador para que la carga entre más caliente"],
  0, "El picado aparece si la mezcla final se autoinflama antes de que llegue el frente. Un combustible más resistente a la autoinflamación (↑ octano) tiene <b>mayor</b> temperatura de autoinflamación y <b>mayor</b> tiempo de retraso. El postenfriador <b>reduce</b> la tendencia al picado.", "Apuntes T2, diap. 17 y 30");
L("T2", "t2-combustion", "Fases de la combustión en el MEC", 3, "En la combustión de un MEC, ¿en qué fase se produce el aumento brusco de presión y qué combustible arde en ella?",
  ["En la combustión premezclada: el combustible evaporado y mezclado con el aire durante el tiempo de retraso", "En la combustión por difusión: el combustible que se va mezclando con el aire después del retraso", "En el tiempo de retraso: las prerreacciones liberan la mayor parte del calor", "En la combustión por difusión: el combustible evaporado durante el tiempo de retraso"],
  0, "Orden: <b>tiempo de retraso</b> (cinética de precombustión, apenas libera calor) → <b>combustión premezclada</b> (muy rápida, arde lo mezclado durante el retraso: pico de presión) → <b>combustión por difusión</b> (arde lo que se va mezclando; final impreciso).", "Apuntes T2, diap. 19");
L("T2", "t2-combustion", "Motor de encendido por compresión", 2, "¿Cuál de las siguientes características es propia del MEC?",
  ["Inyector de varios chorros y combustión que se inicia en la cámara tallada en el pistón", "Inyección de baja o media presión en el conducto de admisión", "Dosado local homogéneo en toda la cámara de combustión", "Combustibles volátiles con alta temperatura de autoinflamación"],
  0, "El MEC admite solo aire, inyecta a <b>alta presión</b> al final de la compresión con un inyector de <b>varios chorros</b>; el torbellino de la cámara tallada en el pistón ayuda a la mezcla, que es <b>muy heterogénea</b>. Usa combustibles pesados y de baja temperatura de autoinflamación.", "Apuntes T2, diap. 18");
L("T2", "t2-combustion", "Combustibles", 1, "Según los apuntes, ¿qué propiedades tienen los combustibles propios del MEC?",
  ["Pesados, poco volátiles y con baja temperatura de autoinflamación", "Ligeros, volátiles y con alta temperatura de autoinflamación", "Pesados, poco volátiles y con alta temperatura de autoinflamación", "Ligeros, volátiles y con baja temperatura de autoinflamación"],
  0, "El MEC usa combustibles <b>pesados, no volátiles</b> y de <b>baja temperatura de autoinflamación</b> (gasóleo, biodiésel), porque el encendido es por autoinflamación. El MEP usa combustibles <b>ligeros y volátiles</b> (gasolina, gas natural, GLP, etanol) que resistan la autoinflamación.", "Apuntes T2, diap. 15 y 18");
L("T2", "t2-combustion", "Carga estratificada", 3, "Un MEP de inyección directa trabaja en modo de carga estratificada. ¿Qué afirmación es correcta?",
  ["El F<sub>R</sub> medio es pobre, la carga se regula con el combustible y se usa a bajas cargas y regímenes", "El F<sub>R</sub> medio es estequiométrico y la carga se regula con la mariposa de admisión", "La mezcla es pobre junto a la bujía y rica en el resto de la cámara", "Se usa a plena carga, inyectando durante la admisión para maximizar la potencia"],
  0, "En la carga estratificada se inyecta al <b>final de la compresión</b> y un pistón tallado concentra una mezcla estequiométrica <b>junto a la bujía</b>; el resto es aire, así que el F<sub>R</sub> medio es pobre. Regulación cualitativa y uso a bajas cargas y bajos regímenes.", "Apuntes T2, diap. 16");
L("T2", "t2-combustion", "Clasificación de los MCIA", 2, "¿Cuál de estos criterios de clasificación de los MCIA y sus tipos está bien emparejado?",
  ["Presión de admisión: aspiración natural o sobrealimentados (compresor volumétrico o turbo)", "Ciclo de renovación de la carga: aspiración natural o sobrealimentados", "Formación de la mezcla: 4 tiempos, 2 tiempos y Wankel", "Disposición de cilindros: refrigeración por líquido o por aire"],
  0, "Criterios de la diap. 13: combustión y formación de mezcla (MEP homogéneo o estratificado, MEC), renovación de la carga (4T, 2T, Wankel), refrigeración (líquido, aire), presión de admisión (aspiración natural, sobrealimentados) y número y disposición de cilindros (línea, V y W, bóxer, estrella).", "Apuntes T2, diap. 13");
L("T2", "t2-renovacion", "Cruce de válvulas", 2, "En el diagrama de distribución real de un 4T, ¿cuándo se produce el cruce de válvulas?",
  ["Entre el AAA y el RCE, alrededor del PMS, con ambas válvulas abiertas", "Entre el AAE y el RCA, alrededor del PMI, con ambas válvulas abiertas", "Entre el RCA y el AAE, durante compresión y expansión", "Entre el AAA y el RCA, durante toda la admisión"],
  0, "La admisión se abre antes del PMS (AAA) y el escape se cierra después (RCE): entre ambos, en torno al PMS de fin de escape, las dos válvulas están abiertas. Los apuntes lo llaman <b>cortocircuito</b> entre admisión y escape.", "Apuntes T2, diap. 21");
L("T2", "t2-renovacion", "Diagrama de distribución", 3, "¿Para qué se retrasa el cierre de la válvula de admisión (RCA) más allá del PMI?",
  ["Para aprovechar la inercia del aire que entra y mejorar el llenado", "Para que la válvula esté ya abierta cuando el pistón empieza a bajar", "Para que los gases quemados salgan espontáneamente antes de que suba el pistón", "Para barrer los gases residuales con aire fresco gracias al cortocircuito"],
  0, "Cada avance o retraso tiene su papel: AAA, válvula ya abierta al empezar a bajar el pistón; RCA, seguir llenando con la inercia de la columna de aire aunque el pistón ya suba; AAE, escape espontáneo; RCE y cruce, barrido de residuales.", "Apuntes T2, diap. 21-22");
L("T2", "t2-renovacion", "Dos tiempos con barrido por cárter", 2, "¿Qué caracteriza al MEP de dos tiempos con barrido por cárter?",
  ["Admisión y escape por lumbreras, simplicidad y bajo peso, pero con aceite perdido", "Válvula de escape en la culata y compresor de barrido independiente", "Barrido uniflujo con admisión por válvulas en la culata", "Uso en muy grandes motores lentos de propulsión marina"],
  0, "El 2T por cárter es simple, barato y ligero (pequeños motores), con lumbreras y <b>aceite perdido</b>; la admisión al cárter puede ser por lumbrera, por válvula de láminas o rotativa. Válvula de escape + compresor de barrido + grandes motores lentos describen el MEC uniflujo.", "Apuntes T2, diap. 23-24");
L("T2", "t2-renovacion", "Dos tiempos con barrido uniflujo", 3, "En un gran MEC marino de dos tiempos con barrido uniflujo, ¿cómo se hacen la admisión y el escape?",
  ["Admisión por lumbreras y escape por válvula en la culata, con compresor de barrido independiente", "Admisión y escape por lumbreras, con barrido por cárter", "Admisión por válvula de láminas y escape por lumbreras", "Admisión por válvulas en la culata y escape por lumbreras"],
  0, "En el barrido uniflujo el aire entra por <b>lumbreras</b> abajo y sale por una <b>válvula de escape</b> arriba, en un único sentido. Necesita un compresor de barrido independiente. Secuencia: combustión, escape espontáneo, barrido y compresión.", "Apuntes T2, diap. 24");
L("T2", "t2-renovacion", "Motor Wankel", 2, "Sobre el motor Wankel, según los apuntes:",
  ["la relación de giro cigüeñal-rotor es 3:1 y cada vuelta completa del cigüeñal corresponde a un ciclo de trabajo", "la relación de giro cigüeñal-rotor es 1:3 y el ciclo dura dos vueltas, como en un 4T", "es un motor alternativo con un pistón triangular y válvulas de admisión y escape", "el piñón central gira solidario con el rotor y el cárter actúa de trocoide"],
  0, "El Wankel es <b>rotativo</b>: un pistón triangular gira en una trocoide, el piñón central está <b>fijo al cárter</b>, la relación cigüeñal-rotor es <b>3:1</b>, cada vuelta del cigüeñal da un ciclo y admisión y escape son por lumbreras.", "Apuntes T2, diap. 26");
L("T2", "t2-renovacion", "Dos tiempos", 3, "En el diagrama del indicador de un motor de dos tiempos, a diferencia del de 4 tiempos…",
  ["no aparece lazo de bombeo: la renovación ocurre cerca del PMI y el trabajo de barrido lo aporta la bomba de barrido", "aparece un lazo de bombeo mayor, porque el pistón expulsa los gases en una carrera completa", "la combustión empieza después del PMS para dejar tiempo al barrido", "la apertura del escape se produce después de la apertura de la admisión"],
  0, "En el 2T la renovación (AE, AA, CE, CA) ocupa la zona del PMI entre el final de la expansión y el inicio de la compresión; no hay carreras dedicadas de escape y admisión ni lazo de bombeo, y el bombeo se paga en la <b>bomba de barrido</b>. El escape se abre <b>antes</b> que la admisión (escape espontáneo).", "Apuntes T2, diap. 24-25 y 65");
L("T2", "t2-config", "Refrigeración", 2, "Frente a la refrigeración por aire, la refrigeración por líquido…",
  ["permite mayor potencia específica y tiene mayor inercia térmica, a costa de más complejidad y averías", "es más robusta y sencilla y tiene menor inercia térmica", "produce más ruido, pero permite un control más preciso de la temperatura", "limita la potencia específica pero tiene menos averías"],
  0, "Líquido: mejor refrigeración (↑ potencia específica), mejor control, más complicada y con más averías, <b>mayor</b> inercia térmica. Aire: peor refrigeración (potencia específica limitada), más robusta y sencilla, menor inercia y más ruido.", "Apuntes T2, diap. 27-28");
L("T2", "t2-config", "Circuito de refrigeración", 3, "En el circuito de refrigeración por líquido de los apuntes, ¿cuál es la función del termostato?",
  ["Dirigir el flujo hacia el radiador o hacia el conducto de recirculación, en torno a 90-120 ºC", "Impulsar el refrigerante en sentido ascendente por el bloque", "Abrir el circuito cuando la presión supera la atmosférica", "Arrancar el ventilador axial en función de la temperatura de salida del radiador"],
  0, "El termostato (90-120 ºC) <b>direcciona el flujo</b>: con el motor frío lo recircula sin pasar por el radiador. La bomba (centrífuga o de paletas) impulsa, la válvula de seguridad está tarada a $p\\gt p_{atm}$ y el ventilador se controla con la temperatura de <b>entrada al motor</b>.", "Apuntes T2, diap. 27");
L("T2", "t2-config", "Sobrealimentación mecánica y turbo", 2, "¿Qué afirmación sobre la sobrealimentación es correcta?",
  ["La mecánica usa un compresor volumétrico movido por el cigüeñal: respuesta inmediata, pero menor rendimiento mecánico", "La turbosobrealimentación tiene respuesta inmediata y menor rendimiento, porque la turbina frena el escape", "La mecánica aumenta mucho el rendimiento al aprovechar la energía de los gases de escape", "El turbocompresor lo acciona el cigüeñal mediante una correa, lo que provoca el turbolag"],
  0, "Mecánica: compresor <b>volumétrico</b> accionado por el <b>cigüeñal</b>, respuesta inmediata, ↓ η<sub>m</sub> (y η<sub>e</sub>). Turbo: compresor accionado por una <b>turbina de escape</b>, ↑↑ rendimiento, pero con <b>turbolag</b> y difícil acople a todas las cargas y regímenes.", "Apuntes T2, diap. 29");
L("T2", "t2-config", "Postenfriamiento", 3, "¿Cuál de los siguientes NO es un objetivo del postenfriamiento del aire de admisión?",
  ["Reducir el trabajo que consume el compresor", "Aumentar la densidad del aire para obtener más potencia", "Reducir los problemas térmicos del motor", "Reducir la tendencia al picado en los MEP"],
  0, "El postenfriador está <b>después</b> del compresor: enfría un aire ya comprimido, así que no cambia el trabajo de compresión. Sus objetivos (diap. 30) son ↑ densidad → ↑ potencia, ↓ problemas térmicos y ↓ picado en MEP.", "Apuntes T2, diap. 30");
L("T2", "t2-config", "Disposición de cilindros y motores marinos", 3, "En propulsión marina, según los ejemplos de los apuntes:",
  ["los motores lentos (low speed) de 2 tiempos accionan directamente la hélice y los semirrápidos (medium speed) de 4 tiempos usan reductora", "los semirrápidos de 4 tiempos accionan directamente la hélice y los lentos de 2 tiempos usan reductora", "todos usan reductora porque la hélice debe girar más rápido que el motor", "los lentos son de 4 tiempos en V y los semirrápidos de 2 tiempos en línea"],
  0, "La diap. 41 muestra un «medium speed» de 4 tiempos en V (16 cilindros) con reductora a la hélice y un «low speed» de 2 tiempos en línea con accionamiento directo. El más potente del mundo (diap. 42) da 80 000 kW con 14 cilindros de 96 cm de diámetro.", "Apuntes T2, diap. 40-42");
L("T2", "t2-geometria", "Relación carrera/diámetro", 2, "Los motores deportivos suelen tener una relación S/D de 0,8-0,9. ¿Por qué?",
  ["Porque con una carrera corta se puede girar más rápido sin superar la velocidad media del pistón admisible", "Porque una carrera larga reduce la velocidad media del pistón a igual régimen", "Porque con S/D &lt; 1 aumenta la relación de compresión", "Porque así la cilindrada unitaria es mayor a igual diámetro"],
  0, "La velocidad media $c_m=2Sn$ mide el desgaste. Con $S$ corta se alcanza más $n$ (y más potencia) con la misma $c_m$. Turismos 0,95-1,05; industriales 1,1-1,2 (más carrera, menos régimen).", "Apuntes T2, diap. 47 y 49");
L("T2", "t2-geometria", "Relación de compresión", 1, "¿Qué valores típicos de relación de compresión dan los apuntes?",
  ["MEP 9-11 y MEC 15-18", "MEP 15-18 y MEC 9-11", "MEP 5-7 y MEC 9-11", "MEP 9-11 y MEC 25-30"],
  0, "MEP: 9-11 (limitada por el picado). MEC: 15-18 (necesita alta temperatura al final de la compresión para autoinflamar el combustible).", "Apuntes T2, diap. 47");
L("T2", "t2-geometria", "Velocidad del pistón", 3, "Con la expresión $c(\\alpha)\\approx2\\pi nR(\\sin\\alpha+\\frac{\\lambda}{2}\\sin2\\alpha)$, ¿dónde alcanza el pistón su velocidad máxima durante la carrera descendente?",
  ["Algo antes de los 90º de giro, por el término de la biela, con un valor de unas 1,6 veces c<sub>m</sub>", "Exactamente a 90º, con un valor igual a la velocidad media c<sub>m</sub>", "En el PMS, donde la presión de los gases es máxima", "Algo después de los 90º, con un valor igual a 2c<sub>m</sub>"],
  0, "En PMS y PMI la velocidad es nula. Sin biela el máximo estaría a 90º con $2\\pi nR=\\frac{\\pi}{2}c_m$; el término $\\frac{\\lambda}{2}\\sin2\\alpha$ es positivo antes de 90º y desplaza el máximo hacia ángulos <b>menores</b>, hasta ≈ 1,6 c<sub>m</sub> (gráfica de la diap. 49).", "Apuntes T2, diap. 49");
L("T2", "t2-parametros", "Presión media indicada", 2, "La presión media indicada es…",
  ["la presión que, mantenida constante durante una carrera, daría un trabajo igual al trabajo indicado", "la media temporal de la presión en el cilindro a lo largo del ciclo", "la media aritmética entre la presión máxima de combustión y la de admisión", "la presión que, mantenida durante una carrera, daría el trabajo efectivo en el eje"],
  0, "$pmi=W_i/V_D$: el rectángulo de altura pmi y base $V_D$ tiene la misma área que el ciclo. Con el trabajo efectivo se define la <b>pme</b>.", "Apuntes T2, diap. 51-52");
L("T2", "t2-parametros", "Presión media efectiva", 2, "¿Qué valores máximos típicos de presión media efectiva dan los apuntes?",
  ["MEP 13-17 bar y MEC ≈ 23 bar", "MEP ≈ 23 bar y MEC 13-17 bar", "MEP 3-5 bar y MEC 8-10 bar", "MEP 50-60 bar y MEC 80-100 bar"],
  0, "La pme se mantiene acotada: <b>MEP 13-17 bar</b>, <b>MEC ≈ 23 bar</b> (diap. 52). Las gráficas de la diap. 53 muestran ≈ 12 bar en MEP atmosféricos y 20-25 bar en sobrealimentados.", "Apuntes T2, diap. 52-53");
L("T2", "t2-parametros", "Pérdidas mecánicas", 2, "¿Cuál de las siguientes NO forma parte de las pérdidas mecánicas de un MCIA según los apuntes?",
  ["Las pérdidas de calor a través de las paredes del cilindro", "El trabajo del proceso de renovación de la carga", "El accionamiento de las bombas de agua, aceite y combustible", "Los rozamientos en cojinetes, pistón/camisa, levas y válvulas"],
  0, "Pérdidas mecánicas = rozamientos + renovación de la carga (bombeo) + auxiliares. Las pérdidas de calor por paredes ocurren antes, en el propio ciclo, y explican la diferencia entre el ciclo teórico y el indicado.", "Apuntes T2, diap. 52 y 64-65");
L("T2", "t2-parametros", "Rendimiento volumétrico", 3, "¿Qué afirmación sobre el rendimiento volumétrico es correcta según los apuntes?",
  ["Se aplica solo a motores de 4 tiempos y sus valores máximos típicos son 0,9-0,95", "En los motores sobrealimentados se calcula con las condiciones ambientales, por eso puede superar la unidad", "Cuantifica la calidad de la combustión, comparando el combustible quemado con el inyectado", "En los 2 tiempos se calcula igual tomando i = 1"],
  0, "$\\eta_v$ compara el aire admitido con el que llenaría la cilindrada a $\\rho_{a,ref}$ y mide la calidad del <b>llenado</b>. Se aplica solo a 4T ($i=1/2$), con máximos de 0,9-0,95. En sobrealimentados la referencia es la salida del compresor/postenfriador.", "Apuntes T2, diap. 54");
L("T2", "t2-parametros", "Rendimientos indicado, mecánico y efectivo", 3, "Si en un motor se reducen los rozamientos (sube η<sub>m</sub>) sin cambiar la pmi, el régimen ni el gasto de combustible…",
  ["aumentan la pme y el rendimiento efectivo y disminuye el consumo específico", "aumenta la pmi y se mantiene la pme", "aumenta la pme pero el rendimiento efectivo no cambia, porque η<sub>i</sub> es el mismo", "aumenta el consumo específico, porque la potencia indicada es la misma"],
  0, "$pme=\\eta_m\\,pmi$ y $\\eta_e=\\eta_i\\,\\eta_m$: con η<sub>i</sub> y pmi fijos, subir η<sub>m</sub> sube la pme y η<sub>e</sub>, y como $g_{ef}=1/(\\eta_eH_c)$, el consumo específico <b>baja</b>.", "Apuntes T2, diap. 52 y 54");
L("T2", "t2-regulacion", "Regulación de la potencia", 3, "¿Por qué el MEP de carga homogénea empeora su rendimiento efectivo a carga parcial?",
  ["Porque estrangular la admisión con la mariposa aumenta las pérdidas de bombeo", "Porque el dosado se empobrece y la llama avanza más despacio", "Porque el rendimiento volumétrico aumenta y aparece picado", "Porque la relación de compresión geométrica disminuye al cerrar la mariposa"],
  0, "Al cerrar la mariposa baja la presión de admisión y crece el lazo de bombeo: las pérdidas de bombeo «crecen al estrangular la admisión» (diap. 65). El dosado se mantiene constante (F<sub>R</sub> ≈ 1) y la relación de compresión geométrica no cambia.", "Apuntes T2, diap. 55 y 65");
L("T2", "t2-regulacion", "Curvas características", 2, "En las curvas características a plena carga de un MCIA, ¿qué afirmación es correcta?",
  ["La potencia máxima se alcanza a un régimen mayor que el del par máximo", "El par máximo y la potencia máxima se dan siempre al mismo régimen", "El consumo específico mínimo coincide con el punto de potencia máxima", "El par máximo se da al régimen de ralentí"],
  0, "Como $N_e=M_e\\,2\\pi n$, pasado el par máximo la potencia sigue creciendo mientras $n$ aumente más deprisa de lo que cae el par. El consumo mínimo queda cerca del par máximo, no en la potencia máxima.", "Apuntes T2, diap. 56");
L("T2", "t2-regulacion", "Curvas de isoconsumo", 3, "En un mapa de curvas de isoconsumo específico, ¿dónde suele estar el punto de máximo rendimiento efectivo?",
  ["A carga alta (pme elevada) y régimen intermedio", "A carga baja y régimen alto, donde las pérdidas de bombeo son mínimas", "A plena carga y régimen máximo, en el punto de potencia máxima", "En ralentí, donde el consumo horario es mínimo"],
  0, "El «ojo» del mapa (≈ 245 g/kWh en la diap. 57; ≈ 235 g/kWh en el MEP y ≈ 202 g/kWh en el MEC de los otros mapas) está a pme alta y régimen o c<sub>m</sub> medios. A cargas bajas el consumo <b>específico</b> se dispara aunque el consumo horario sea pequeño.", "Apuntes T2, diap. 57");
L("T2", "t2-regulacion", "Balance energético", 2, "Según el balance energético de los apuntes, ¿qué fracción de la energía del combustible se va con los gases de escape?",
  ["20-35 %", "6-10 %", "1-4 %", "45-55 %"],
  0, "Balance típico: P<sub>e</sub> 30-40 %, refrigeración 25-35 %, <b>gases de escape 20-35 %</b>, aceite 6-10 %, convección y radiación 5-8 %, auxiliares 2-4 % e inquemados 1-4 %.", "Apuntes T2, diap. 58");
L("T2", "t2-regulacion", "Balance energético", 3, "En el balance energético de un MCIA, ¿dónde aparece la energía perdida por rozamiento?",
  ["Repartida entre el calor cedido al refrigerante y el cedido al aceite", "En el término de combustión incompleta, $\\dot Q_{res}$", "Como un término independiente que se suma a la potencia efectiva", "Íntegramente en el calor de los gases de escape"],
  0, "El rozamiento se convierte en calor en las superficies en contacto, que se lleva el refrigerante o el aceite (que a su vez suele enfriarse con el refrigerante). Por eso $\\dot Q_{roz}$ no aparece como sumando en la ecuación del balance.", "Apuntes T2, diap. 58");
L("T2", "t2-regulacion", "Cogeneración con MCIA", 2, "En la cogeneración con grandes motores de gas, ¿cuál de las siguientes NO es una de las fuentes de calor recuperable citadas en los apuntes?",
  ["El aire de admisión antes de entrar en el compresor", "El agua de refrigeración de los cilindros", "El aceite de lubricación", "El aire de sobrealimentación"],
  0, "Fuentes de calor: <b>gases de escape</b>, <b>agua de refrigeración de cilindros</b>, <b>aceite</b> y <b>aire de sobrealimentación</b> (calentado al comprimirse). El aire antes del compresor está a temperatura ambiente. Estos motores llegan hasta unos 20 MW<sub>e</sub>.", "Apuntes T2, diap. 59");
L("T2", "t2-ciclos", "Ciclos teóricos", 2, "¿Qué ciclo teórico de aire se asocia a los MEC rápidos de automóviles y camiones?",
  ["El ciclo de presión limitada", "El ciclo Diesel, con todo el calor aportado a presión constante", "El ciclo Otto, con el calor aportado a volumen constante", "El ciclo de Carnot entre la temperatura de combustión y la atmosférica"],
  0, "Otto (v = cte) → MEP; Diesel (p = cte) → MEC <b>lentos</b> (marinos, generación); presión limitada (parte a v = cte y parte a p = cte) → MEC <b>rápidos</b>.", "Apuntes T2, diap. 62");
L("T2", "t2-ciclos", "Comparación de ciclos teóricos", 3, "Comparando los ciclos teóricos de los apuntes, ¿qué afirmación es correcta?",
  ["A igual relación de compresión el Diesel rinde menos que el Otto, y rinde más cuanto menor es el dosado relativo", "A igual relación de compresión el Diesel rinde más que el Otto, porque aporta el calor a presión constante", "En el Diesel, un mayor dosado relativo aumenta el rendimiento al aumentar β", "El rendimiento del Diesel solo depende de r y γ, igual que el del Otto"],
  0, "El factor $\\frac{\\beta^{\\gamma}-1}{\\gamma(\\beta-1)}\\gt1$ hace que el Diesel rinda menos que el Otto a igual $r$; más dosado ⇒ más β ⇒ menos rendimiento (curvas de F<sub>R</sub> = 1; 0,75; 0,5 de la diap. 63). El MEC rinde más en la práctica porque trabaja con <b>mayor</b> r.", "Apuntes T2, diap. 62-63");
L("T2", "t2-ciclos", "Comparación teórico-real", 3, "Al comparar el ciclo real con el teórico, ¿a qué causa se deben las «pérdidas de tiempo»?",
  ["A que la combustión no es instantánea", "A que el proceso no es adiabático", "A que el escape no es instantáneo", "A las pérdidas de carga en los conductos de admisión"],
  0, "Combustión no instantánea → <b>pérdidas de tiempo</b> (zona del PMS); no adiabático → pérdidas de <b>calor</b> (expansión); escape no instantáneo → pérdidas de <b>escape espontáneo</b> (zona del PMI).", "Apuntes T2, diap. 64");
L("T2", "t2-ciclos", "Comparación teórico-real", 3, "¿Cuál de las siguientes condiciones NO se impone al comparar un ciclo real con su ciclo teórico?",
  ["La misma temperatura máxima de combustión", "La misma relación de compresión volumétrica", "Las mismas condiciones de inicio de la compresión (p<sub>1</sub>, T<sub>1</sub>)", "En el MEC, la misma presión máxima de combustión"],
  0, "Se imponen la misma sucesión de procesos, r, p<sub>1</sub> y T<sub>1</sub>, cantidad de combustible, composición de la mezcla, presión media de escape y admisión y, en MEC, la misma <b>presión</b> máxima. La temperatura máxima teórica sale <b>mucho mayor</b> que la real.", "Apuntes T2, diap. 61 y 64");
L("T2", "t2-ciclos", "Aprovechamiento energético", 2, "Según la escalera de rendimientos de los apuntes, ¿qué rango corresponde al rendimiento indicado del ciclo real?",
  ["0,40-0,57", "0,30-0,52", "0,55-0,68", "≈ 0,85"],
  0, "Carnot ≈ 0,85 → ciclo teórico 0,55 (MEP)-0,68 (MEC) → <b>indicado 0,40-0,57</b> → efectivo 0,30-0,52.", "Apuntes T2, diap. 65");
L("T2", "t2-ciclos", "Efecto del coeficiente adiabático", 1, "Si en el ciclo Otto se usa γ = 1,3 (gases de combustión) en lugar de γ = 1,4 (aire), a igual relación de compresión el rendimiento…",
  ["disminuye", "aumenta", "no cambia, porque solo depende de r", "aumenta solo si r es mayor que 10"],
  0, "$\\eta=1-1/r^{\\gamma-1}$: con γ menor el exponente baja y el rendimiento también (diap. 63: con r = 10, de ≈ 0,60 a ≈ 0,50).", "Apuntes T2, diap. 63");
L("T2", "t2-ciclos", "Ciclo de presión limitada", 2, "En el ciclo teórico de presión limitada, ¿qué efecto tienen la relación de compresión y la presión máxima?",
  ["El efecto de r sobre el rendimiento es menos acusado y una mayor presión máxima da ligeras mejoras", "El rendimiento crece con r igual que en el Otto, y la presión máxima no influye", "Una mayor presión máxima empeora el rendimiento al aumentar las pérdidas de calor", "A partir de r = 10 el rendimiento disminuye al aumentar r"],
  0, "Con la presión máxima limitada, al subir r cada vez queda menos margen para aportar calor a volumen constante: la curva η-r se aplana. Con 180 bar en lugar de 130 bar el rendimiento mejora ligeramente (diap. 63). El modelo de aire no incluye pérdidas de calor.", "Apuntes T2, diap. 63");

/* ===================== TARJETAS ===================== */
C("T2", "t2-intro", "Ciclo de trabajo frente a ciclo de renovación de la carga", "Trabajo: compresión → combustión → expansión (produce trabajo). Renovación: escape → admisión (lazo de bombeo, normalmente absorbe trabajo).");
C("T2", "t2-intro", "Trabajo indicado y presión que actúa sobre el pistón", "$W_i=\\oint p\\,dV$, con $p=p_{cil}-p_{cárter}$ y $dW=p\\,A_p\\,dx=p\\,dV$.");
C("T2", "t2-intro", "Las cuatro partes de la estructura de un MCIA", "Cadena cinemática (pistón, biela, cigüeñal) · sistema de distribución (colectores, válvulas, árbol de levas) · bloque y culatas · elementos auxiliares (bombas, alternador, ventiladores).");
C("T2", "t2-intro", "Cifras de los MCIA (diap. 7)", "Rendimiento térmico hasta el 52 % con poca variación fuera de diseño; potencias de 100 W a 80 MW. Competidores: turbina de gas, motor eléctrico, pila de combustible, aire comprimido.");
C("T2", "t2-combustion", "MEP frente a MEC en una línea", "MEP: premezcla + chispa + deflagración + combustible volátil + r 9-11. MEC: solo aire + inyección a alta presión al final de la compresión + autoinflamación + combustible pesado + r 15-18.");
C("T2", "t2-combustion", "Carga homogénea frente a estratificada (MEP)", "Homogénea: inyección en admisión, F<sub>R</sub> ≈ 1, regulación cuantitativa (mariposa). Estratificada: inyección directa al final de la compresión, F<sub>R</sub> medio pobre, regulación cualitativa, bajas cargas.");
C("T2", "t2-combustion", "Picado (knock)", "Autoinflamación de la mezcla final sin quemar tras el tiempo de retraso → onda de choque sónica, ruido y daño térmico. Remedio: ↑ número de octano (↑ T de autoinflamación y ↑ τ<sub>r</sub>).");
C("T2", "t2-combustion", "Fases de la combustión en el MEC", "1) Tiempo de retraso (cinética de precombustión). 2) Combustión premezclada (muy rápida, lo mezclado durante el retraso). 3) Combustión por difusión (final impreciso).");
C("T2", "t2-renovacion", "AAA, RCA, AAE, RCE", "Avance a la apertura de admisión, retraso al cierre de admisión, avance a la apertura de escape, retraso al cierre de escape. Entre AAA y RCE: cruce de válvulas (cortocircuito).");
C("T2", "t2-renovacion", "2T por cárter frente a 2T uniflujo", "Cárter (MEP): lumbreras, simple y ligero, aceite perdido, motores pequeños. Uniflujo (MEC): lumbreras de admisión + válvula de escape + compresor de barrido, grandes motores lentos.");
C("T2", "t2-renovacion", "Motor Wankel", "Rotativo, pistón triangular en una trocoide, piñón central fijo al cárter, relación cigüeñal-rotor 3:1, un ciclo por vuelta del cigüeñal, lumbreras.");
C("T2", "t2-config", "Sobrealimentación mecánica frente a turbo", "Mecánica: compresor volumétrico movido por el cigüeñal, respuesta inmediata, ↓ η<sub>m</sub>. Turbo: turbina de escape, ↑↑ rendimiento, turbolag.");
C("T2", "t2-config", "Objetivos del postenfriador", "↑ densidad → ↑ potencia; ↓ problemas térmicos; ↓ picado en MEP. Aire/aire en automoción, aire/agua en marinos.");
C("T2", "t2-geometria", "Fórmulas geométricas", "$V_D=\\frac{\\pi D^2}{4}S$ · $V_T=Z\\,V_D$ · $r=\\frac{V_D+V_c}{V_c}$ · $c_m=2Sn$ · $c(\\alpha)\\approx2\\pi nR(\\sin\\alpha+\\frac{\\lambda}{2}\\sin2\\alpha)$, $\\lambda=R/L$.");
C("T2", "t2-geometria", "Valores típicos de S/D y c<sub>m</sub>", "S/D: deportivos 0,8-0,9; turismos 0,95-1,05; industriales 1,1-1,2. c<sub>m</sub>: MEP automóvil 20 m/s (7500 rpm), F1 25 m/s; MEC automóvil 15 m/s, pesado 13 m/s, 2T grandes 8 m/s (200 rpm).");
C("T2", "t2-parametros", "pmi y pme", "$pmi=\\frac{\\dot W_i}{V_T\\,n\\,i}$ · $pme=\\frac{\\dot W_e}{V_T\\,n\\,i}=\\frac{2\\pi M_e}{V_T\\,i}$ · $i=1$ (2T), $1/2$ (4T). pme típica: MEP 13-17 bar, MEC ≈ 23 bar.");
C("T2", "t2-parametros", "Rendimientos y consumo específico", "$\\eta_i=\\frac{\\dot W_i}{\\dot m_fH_c}$ · $\\eta_m=\\frac{\\dot W_e}{\\dot W_i}$ · $\\eta_e=\\eta_i\\eta_m$ · $g_{ef}=\\frac{1}{\\eta_eH_c}$ (MEP 210-350, MEC 180-300 g/kWh).");
C("T2", "t2-parametros", "Rendimiento volumétrico: fórmula y referencia", "$\\eta_v=\\frac{\\dot m_a}{n\\,i\\,Z\\,V_D\\,\\rho_{a,ref}}$. Referencia: ambiente (aspiración natural) o salida del compresor/postenfriador (sobrealimentado). Solo 4T; máximo 0,9-0,95.");
C("T2", "t2-regulacion", "Cadena de la potencia efectiva (4T)", "$\\dot W_e=\\eta_v\\,V_T\\,\\rho_{a,ref}\\,\\frac n2\\,F_R\\,F_e\\,H_c\\,\\eta_i\\,\\eta_m$. MEP homogéneo regula con η<sub>v</sub>; MEC y MEP estratificado con F<sub>R</sub>.");
C("T2", "t2-regulacion", "Balance energético típico", "P<sub>e</sub> 30-40 · refrigeración 25-35 · escape 20-35 · aceite 6-10 · convección 5-8 · auxiliares 2-4 · inquemados 1-4 (%). El rozamiento se reparte entre refrigerante y aceite.");
C("T2", "t2-ciclos", "Rendimientos de los ciclos teóricos", "Otto: $1-\\frac1{r^{\\gamma-1}}$. Diesel: $1-\\frac1{r^{\\gamma-1}}\\frac{\\beta^\\gamma-1}{\\gamma(\\beta-1)}$. Presión limitada: $1-\\frac1{r^{\\gamma-1}}\\frac{\\alpha\\beta^\\gamma-1}{\\alpha-1+\\gamma\\alpha(\\beta-1)}$.");
C("T2", "t2-ciclos", "Escalera de rendimientos", "Carnot ≈ 0,85 → teórico 0,55 (MEP)-0,68 (MEC) → indicado 0,40-0,57 (calor, tiempo, escape) → efectivo 0,30-0,52 (rozamiento, bombeo, auxiliares).");
C("T2", "t2-ciclos", "Calor aportado y coeficiente de calidad", "$q_{ap}=\\frac{F\\,H_c}{1+F}$ (sin variación de masa). Coeficiente de calidad = η<sub>e</sub>/η<sub>ciclo teórico</sub>.");

/* ===================== EJERCICIOS ===================== */
DRILLS.push({ id: "t2-c-mepmec", type: "classify", tema: "T2", sec: "t2-combustion", title: "¿MEP o MEC? (diap. 15-19)", cats: ["MEP", "MEC"], items: [
  ["Encendido por chispa (agente externo)", 0], ["Encendido por autoinflamación", 1], ["Deflagración subsónica con frente de llama", 0], ["Inyector de varios chorros a alta presión", 1],
  ["Combustibles ligeros y volátiles (GLP, etanol)", 0], ["Gasóleo y biodiésel", 1], ["Relación de compresión 9-11", 0], ["Relación de compresión 15-18", 1],
  ["Riesgo de picado: interesa alto número de octano", 0], ["Combustión premezclada seguida de combustión por difusión", 1], ["Se admite solo aire", 1], ["Catalizador de tres vías con dosado relativo 1", 0]] });
DRILLS.push({ id: "t2-c-regulacion", type: "classify", tema: "T2", sec: "t2-regulacion", title: "¿Regulación cuantitativa o cualitativa? (diap. 16, 18 y 55)", cats: ["Cuantitativa (rendimiento volumétrico, mariposa)", "Cualitativa (dosado relativo, combustible)"], items: [
  ["MEP de carga homogénea", 0], ["MEP de carga estratificada", 1], ["MEC", 1], ["Grado de carga = ηv / ηv,máx", 0], ["Grado de carga = FR / FR,máx", 1], ["Dosado constante, se estrangula la admisión", 0], ["Más pérdidas de bombeo a carga parcial", 0], ["Se inyecta más o menos combustible", 1]] });
DRILLS.push({ id: "t2-m-distribucion", type: "match", tema: "T2", sec: "t2-renovacion", title: "Siglas del diagrama de distribución (diap. 21)", pairs: [
  ["AAA", "La admisión se abre antes del PMS"], ["RCA", "La admisión se cierra después del PMI para aprovechar la inercia del aire"], ["AAE", "El escape se abre antes del PMI (escape espontáneo)"], ["RCE", "El escape se cierra después del PMS"], ["Cruce de válvulas", "Ambas válvulas abiertas alrededor del PMS: cortocircuito"]] });
DRILLS.push({ id: "t2-m-formulas", type: "match", tema: "T2", sec: "t2-parametros", title: "Parámetro ↔ fórmula (diap. 47-54)", pairs: [
  ["Velocidad media del pistón", "2·S·n"], ["Presión media efectiva", "2π·Me / (VT·i)"], ["Rendimiento mecánico", "Ẇe / Ẇi"], ["Consumo específico", "1 / (ηe·Hc)"], ["Rendimiento volumétrico", "ṁa / (n·i·Z·VD·ρa,ref)"], ["Relación de compresión", "(VD + Vc) / Vc"]] });
DRILLS.push({ id: "t2-m-perdidas", type: "match", tema: "T2", sec: "t2-ciclos", title: "Causa ↔ pérdida (diap. 64-65)", pairs: [
  ["Combustión no instantánea", "Pérdidas de tiempo"], ["Proceso no adiabático", "Pérdidas de calor"], ["Escape no instantáneo", "Pérdidas de escape espontáneo"], ["Estrangulamiento de la admisión", "Pérdidas de bombeo"], ["Cojinetes, pistón/camisa, levas", "Pérdidas por rozamiento"]] });
DRILLS.push({ id: "t2-c-sobrealim", type: "classify", tema: "T2", sec: "t2-config", title: "¿Mecánica, turbo o aspiración natural? (diap. 29)", cats: ["Aspiración natural", "Sobrealimentación mecánica", "Turbosobrealimentación"], items: [
  ["Presión de aspiración menor que la ambiente", 0], ["Compresor volumétrico accionado por el cigüeñal", 1], ["Compresor accionado por una turbina de escape", 2], ["Turbolag", 2], ["Menor rendimiento mecánico pero respuesta inmediata", 1], ["↑↑ rendimiento", 2], ["Carga aspirada por el descenso del pistón", 0]] });

/* ===================== TRUCOS ===================== */
MNEMO["t2-intro"] = ["«<b>C-C-E</b> trabaja, <b>E-A</b> respira»: compresión-combustión-expansión es el ciclo de trabajo; escape-admisión, la renovación de la carga.", "Cuatro partes «<b>Ca-Di-Blo-Au</b>»: cadena cinemática, distribución, bloque, auxiliares. El árbol de levas «distribuye»."];
MNEMO["t2-combustion"] = ["MEP = «<b>chispa y paciencia</b>» (resiste la autoinflamación: octano). MEC = «<b>se enciende solo</b>» (se autoinflama fácil: cetano).", "MEC en tres tiempos: «<b>espera, explota, difunde</b>» (retraso, premezclada, difusión).", "Homogénea = cantidad (mariposa); estratificada y MEC = calidad (dosado)."];
MNEMO["t2-renovacion"] = ["Las siglas se leen «<b>A</b>vance <b>A</b>pertura <b>A</b>dmisión»: A-A-A; el cruce va de AAA a RCE, «abro admisión antes, cierro escape después».", "Wankel «<b>3 a 1</b>»: tres vueltas del cigüeñal por vuelta del rotor, y un ciclo por vuelta del cigüeñal."];
MNEMO["t2-config"] = ["Líquido = «<b>lento y fuerte</b>» (más inercia, más potencia); aire = «<b>ruidoso y robusto</b>».", "Turbo «<b>gratis pero tarde</b>» (energía de escape, turbolag); mecánico «<b>inmediato pero caro</b>» (roba potencia al cigüeñal)."];
MNEMO["t2-geometria"] = ["r: «<b>diez</b> para la gasolina, <b>dieciséis</b> para el diésel» (9-11 y 15-18).", "c<sub>m</sub> = 2Sn: «dos carreras por vuelta»."];
MNEMO["t2-parametros"] = ["El <b>i</b> es «ciclos por vuelta»: 4T hace medio ciclo por vuelta (i = 1/2). Si te sale el doble o la mitad, revisa el i.", "pme: «<b>15 la gasolina, 23 el diésel</b>». g<sub>ef</sub> en g/kWh = 3,6·10<sup>9</sup>/(η<sub>e</sub>·H<sub>c</sub>[J/kg]).", "η<sub>v</sub>: «la densidad de <b>la puerta</b> del cilindro»: ambiente si no hay compresor; tras el compresor o el postenfriador si lo hay."];
MNEMO["t2-regulacion"] = ["Cadena «<b>V-T-ρ-n/2-F<sub>R</sub>-F<sub>e</sub>-H<sub>c</sub>-η<sub>i</sub>-η<sub>m</sub></b>»: aire que entra × combustible por kg de aire × energía × rendimientos.", "Balance «<b>un tercio, un tercio, un tercio</b>»: eje, refrigeración y escape (≈ 30-40, 25-35, 20-35 %)."];
MNEMO["t2-ciclos"] = ["Otto «<b>v</b>», Diesel «<b>p</b>», presión limitada «<b>v + p</b>»; con β = 1 vuelve a Otto, con α = 1 vuelve a Diesel.", "Escalera «<b>85-60-50-40</b>»: Carnot, teórico, indicado y efectivo (cifras redondas)."];

/* ===================== ESQUEMAS PROPIOS ===================== */
DIAGRAMS.push({ sec: "t2-combustion", h4: "Criterios de clasificación", cap: "Los cinco criterios de clasificación de los MCIA de la diap. 13, con sus tipos. El primero (combustión y formación de la mezcla) es el que separa MEP de MEC y, dentro del MEP, carga homogénea de estratificada.", svg: `<svg class="dg" viewBox="0 0 560 260" role="img" aria-label="Árbol de clasificación de los motores de combustión interna alternativos">
<rect x="225" y="8" width="110" height="30" rx="6" fill="#1d4ed8"/><text x="280.0" y="28.0" class="tb" style="fill:#fff" text-anchor="middle">MCIA</text>
<path d="M280 38V52H58V66" class="tr-ln"/>
<rect x="6" y="66" width="104" height="40" rx="6" class="box"/>
<text x="58.0" y="83.0" class="small2 tb" text-anchor="middle">Combustión</text><text x="58.0" y="98.0" class="small2 tb" text-anchor="middle">y mezcla</text>
<text x="14.0" y="126.0" class="small2 tb" text-anchor="start">MEP</text>
<text x="14.0" y="143.0" class="small2" text-anchor="start">· homogénea</text>
<text x="14.0" y="160.0" class="small2" text-anchor="start">· estratificada</text>
<text x="14.0" y="177.0" class="small2 tb" text-anchor="start">MEC</text>
<path d="M280 38V52H169V66" class="tr-ln"/>
<rect x="117" y="66" width="104" height="40" rx="6" class="box"/>
<text x="169.0" y="83.0" class="small2 tb" text-anchor="middle">Renovación</text><text x="169.0" y="98.0" class="small2 tb" text-anchor="middle">de la carga</text>
<text x="125.0" y="126.0" class="small2 tb" text-anchor="start">4 tiempos</text>
<text x="125.0" y="143.0" class="small2 tb" text-anchor="start">2 tiempos</text>
<text x="125.0" y="160.0" class="small2 tb" text-anchor="start">Wankel</text>
<path d="M280 38V52H280V66" class="tr-ln"/>
<rect x="228" y="66" width="104" height="40" rx="6" class="box"/>
<text x="280.0" y="91.0" class="small2 tb" text-anchor="middle">Refrigeración</text>
<text x="236.0" y="126.0" class="small2 tb" text-anchor="start">Por líquido</text>
<text x="236.0" y="143.0" class="small2 tb" text-anchor="start">Por aire</text>
<path d="M280 38V52H391V66" class="tr-ln"/>
<rect x="339" y="66" width="104" height="40" rx="6" class="box"/>
<text x="391.0" y="83.0" class="small2 tb" text-anchor="middle">Presión de</text><text x="391.0" y="98.0" class="small2 tb" text-anchor="middle">admisión</text>
<text x="347.0" y="126.0" class="small2 tb" text-anchor="start">Aspiración</text>
<text x="347.0" y="143.0" class="small2" text-anchor="start">natural</text>
<text x="347.0" y="160.0" class="small2 tb" text-anchor="start">Sobrealim.:</text>
<text x="347.0" y="177.0" class="small2" text-anchor="start">· mecánica</text>
<text x="347.0" y="194.0" class="small2" text-anchor="start">· turbo</text>
<path d="M280 38V52H502V66" class="tr-ln"/>
<rect x="450" y="66" width="104" height="40" rx="6" class="box"/>
<text x="502.0" y="83.0" class="small2 tb" text-anchor="middle">Número y</text><text x="502.0" y="98.0" class="small2 tb" text-anchor="middle">disposición</text>
<text x="458.0" y="126.0" class="small2 tb" text-anchor="start">En línea</text>
<text x="458.0" y="143.0" class="small2 tb" text-anchor="start">En V y W</text>
<text x="458.0" y="160.0" class="small2 tb" text-anchor="start">Bóxer</text>
<text x="458.0" y="177.0" class="small2 tb" text-anchor="start">Estrella</text>
<text x="280.0" y="250.0" class="small2 mut" text-anchor="middle">MEP: encendido provocado · MEC: encendido por compresión</text>
</svg>` });
DIAGRAMS.push({ sec: "t2-geometria", h4: "Relaciones: S/D, cilindrada y relación de compresión", cap: "Mecanismo biela-manivela con la manivela a 50º del PMS. El volumen final de compresión V<sub>c</sub> queda entre la culata y el pistón en el PMS; la cilindrada unitaria V<sub>D</sub> es el volumen barrido entre PMS y PMI, a lo largo de la carrera S = 2R.", svg: `<svg class="dg" viewBox="0 0 560 300" role="img" aria-label="Esquema del mecanismo biela-manivela con PMS, PMI, carrera, diámetro y volúmenes">
<defs><marker id="t2ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#475569"/></marker></defs>
<path d="M150 30V215M250 30V215" class="wall" style="stroke-width:4"/><path d="M146 30H254" stroke="#334155" stroke-width="6"/>
<rect x="153" y="75.6" width="94" height="46" rx="3" class="sec"/>
<circle cx="200" cy="105.6" r="5" class="sup"/>
<line x1="200" y1="105.6" x2="238.3" y2="229.9" class="beam"/>
<line x1="200" y1="262" x2="238.3" y2="229.9" stroke="#c2413b" stroke-width="6" stroke-linecap="round"/>
<circle cx="200" cy="262" r="50" class="dash"/><circle cx="200" cy="262" r="4" fill="#334155"/><circle cx="238.3" cy="229.9" r="4" fill="#334155"/>
<line x1="200" y1="262" x2="200" y2="204" class="dash"/>
<path d="M200 240 A22 22 0 0 1 216.9 247.9" fill="none" stroke="#c2413b" stroke-width="1.5"/><text x="208.0" y="236.0" class="small2 ko" text-anchor="start">α</text>
<text x="246.3" y="247.9" class="small2 ko" text-anchor="start">R = S/2</text><text x="207.2" y="177.7" class="small2 tb" text-anchor="end">L (biela)</text>
<line x1="120" y1="52" x2="290" y2="52" class="dash"/><line x1="120" y1="152" x2="290" y2="152" class="dash"/>
<text x="296.0" y="56.0" class="small2 tb" text-anchor="start">PMS</text><text x="296.0" y="156.0" class="small2 tb" text-anchor="start">PMI</text>
<path d="M275 52V152" stroke="#475569" stroke-width="1.5" marker-start="url(#t2ar)" marker-end="url(#t2ar)"/><text x="280.0" y="104.0" class="tb" text-anchor="start">S</text>
<path d="M135 30V52" stroke="#0891b2" stroke-width="2"/><text x="130.0" y="45.0" class="small2" text-anchor="end">V<tspan dy='3' font-size='9'>c</tspan></text>
<path d="M135 52V152" stroke="#1d4ed8" stroke-width="2"/><text x="130.0" y="106.0" class="small2" text-anchor="end">V<tspan dy='3' font-size='9'>D</tspan></text>
<path d="M152 22H248" stroke="#475569" stroke-width="1.5" marker-start="url(#t2ar)" marker-end="url(#t2ar)"/><text x="200.0" y="16.0" class="tb" text-anchor="middle">D</text>
<text x="340.0" y="60.0" class="small2 tb" text-anchor="start">V<tspan dy='3' font-size='9'>D</tspan><tspan dy='-3'> </tspan> = πD²·S/4</text>
<text x="340.0" y="86.0" class="small2 " text-anchor="start">V<tspan dy='3' font-size='9'>T</tspan><tspan dy='-3'> </tspan> = Z·V<tspan dy='3' font-size='9'>D</tspan><tspan dy='-3'> </tspan></text>
<text x="340.0" y="112.0" class="small2 " text-anchor="start">r = (V<tspan dy='3' font-size='9'>D</tspan><tspan dy='-3'> </tspan> + V<tspan dy='3' font-size='9'>c</tspan><tspan dy='-3'> </tspan>)/V<tspan dy='3' font-size='9'>c</tspan><tspan dy='-3'> </tspan></text>
<text x="340.0" y="138.0" class="small2 tb" text-anchor="start">c<tspan dy='3' font-size='9'>m</tspan><tspan dy='-3'> </tspan> = 2·S·n</text>
<text x="340.0" y="164.0" class="small2 " text-anchor="start">c(α) ≈ 2πnR(sen α + λ/2·sen 2α)</text>
<text x="340.0" y="190.0" class="small2 " text-anchor="start">λ = R/L</text>
<text x="340.0" y="230.0" class="small2 mut" text-anchor="start">MEP r = 9-11 · MEC r = 15-18</text>
</svg>` });
DIAGRAMS.push({ sec: "t2-parametros", h4: "Pérdidas mecánicas y potencia efectiva", cap: "Del combustible al eje: el rendimiento indicado recoge las pérdidas del propio ciclo (calor, tiempo, escape) y el mecánico las pérdidas mecánicas (rozamiento, bombeo y auxiliares). La pme se obtiene de la pmi multiplicando por η<sub>m</sub>.", svg: `<svg class="dg" viewBox="0 0 560 268" role="img" aria-label="Cascada de potencias desde la energía del combustible hasta la potencia efectiva">
<defs><marker id="t2ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#475569"/></marker></defs>
<rect x="100" y="20" width="300" height="34" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="90.0" y="42.0" class="tb" text-anchor="end">ṁ<tspan dy='3' font-size='9'>f</tspan><tspan dy='-3'> </tspan>·H<tspan dy='3' font-size='9'>c</tspan><tspan dy='-3'> </tspan></text><text x="110.0" y="42.0" class="small2 tb" text-anchor="start">energía del combustible · 100 %</text>
<rect x="100" y="90" width="135.0" height="34" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="235.0" y="90" width="165.0" height="34" fill="#fde2e1" stroke="#c2413b" stroke-dasharray="4 3"/>
<text x="90.0" y="112.0" class="tb" text-anchor="end">Ẇ<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan></text><text x="108.0" y="112.0" class="small2 tb" text-anchor="start">η<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan>≈ 45 %</text><text x="243.0" y="104.0" class="small2 ko" text-anchor="start">pérdidas del ciclo real:</text><text x="243.0" y="119.0" class="small2 ko" text-anchor="start">calor, tiempo, escape</text>
<rect x="100" y="160" width="114.0" height="34" fill="#dcfce7" stroke="#0f8a5f" stroke-width="1.5"/><rect x="214.0" y="160" width="21.000000000000004" height="34" fill="#fde2e1" stroke="#c2413b" stroke-dasharray="4 3"/>
<text x="90.0" y="182.0" class="tb" text-anchor="end">Ẇ<tspan dy='3' font-size='9'>e</tspan><tspan dy='-3'> </tspan></text><text x="106.0" y="182.0" class="small2 tb" text-anchor="start">η<tspan dy='3' font-size='9'>e</tspan><tspan dy='-3'> </tspan>≈ 38 %</text>
<path d="M224.5 198V214H255.0" class="ah2" marker-end="url(#t2ar)"/><text x="261.0" y="218.0" class="small2 ko" text-anchor="start">pérdidas mecánicas Ẇ<tspan dy='3' font-size='9'>pm</tspan><tspan dy='-3'> </tspan>= Ẇ<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan>− Ẇ<tspan dy='3' font-size='9'>e</tspan><tspan dy='-3'> </tspan></text>
<text x="261.0" y="233.0" class="small2 ko" text-anchor="start">rozamiento · bombeo · auxiliares</text>
<path d="M120 56V88" class="ah2" marker-end="url(#t2ar)"/><text x="128.0" y="76.0" class="small2 tb" text-anchor="start">× η<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan></text>
<path d="M120 126V158" class="ah2" marker-end="url(#t2ar)"/><text x="128.0" y="146.0" class="small2 tb" text-anchor="start">× η<tspan dy='3' font-size='9'>m</tspan><tspan dy='-3'> </tspan></text>
<text x="420.0" y="42.0" class="small2" text-anchor="start">pmi = Ẇ<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan>/(V<tspan dy='3' font-size='9'>T</tspan><tspan dy='-3'> </tspan>·n·i)</text>
<text x="420.0" y="112.0" class="small2" text-anchor="start">pme = η<tspan dy='3' font-size='9'>m</tspan><tspan dy='-3'> </tspan>·pmi</text>
<text x="420.0" y="140.0" class="small2" text-anchor="start">η<tspan dy='3' font-size='9'>e</tspan><tspan dy='-3'> </tspan>= η<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan>·η<tspan dy='3' font-size='9'>m</tspan><tspan dy='-3'> </tspan></text>
<text x="420.0" y="168.0" class="small2" text-anchor="start">g<tspan dy='3' font-size='9'>ef</tspan><tspan dy='-3'> </tspan>= 1/(η<tspan dy='3' font-size='9'>e</tspan><tspan dy='-3'> </tspan>·H<tspan dy='3' font-size='9'>c</tspan><tspan dy='-3'> </tspan>)</text>
<text x="40.0" y="258.0" class="small2 mut" text-anchor="start">Cifras de ejemplo (η<tspan dy='3' font-size='9'>i</tspan><tspan dy='-3'> </tspan>= 0,45; η<tspan dy='3' font-size='9'>m</tspan><tspan dy='-3'> </tspan>= 0,85), no de un motor concreto.</text>
</svg>` });
DIAGRAMS.push({ sec: "t2-regulacion", h4: "Balance energético", cap: "Rangos del balance energético de la diap. 58. Eje, refrigeración y escape se llevan casi un tercio cada uno; el rozamiento no aparece aparte porque acaba en el refrigerante y en el aceite.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Barras con los rangos de cada término del balance energético de un MCIA">
<line x1="180.0" y1="22" x2="180.0" y2="222" class="grid"/><text x="180.0" y="238.0" class="small2" text-anchor="middle">0 %</text>
<line x1="260.0" y1="22" x2="260.0" y2="222" class="grid"/><text x="260.0" y="238.0" class="small2" text-anchor="middle">10 %</text>
<line x1="340.0" y1="22" x2="340.0" y2="222" class="grid"/><text x="340.0" y="238.0" class="small2" text-anchor="middle">20 %</text>
<line x1="420.0" y1="22" x2="420.0" y2="222" class="grid"/><text x="420.0" y="238.0" class="small2" text-anchor="middle">30 %</text>
<line x1="500.0" y1="22" x2="500.0" y2="222" class="grid"/><text x="500.0" y="238.0" class="small2" text-anchor="middle">40 %</text>
<text x="172.0" y="43.0" class="small2 tb" text-anchor="end">P<tspan dy='3' font-size='9'>e</tspan><tspan dy='-3'> (eje)</tspan></text>
<rect x="420.0" y="30" width="80.0" height="18" rx="3" fill="#0f8a5f" opacity=".85"/>
<text x="506.0" y="43.0" class="small2" text-anchor="start">30-40</text>
<text x="172.0" y="70.0" class="small2 tb" text-anchor="end">Refrigeración</text>
<rect x="380.0" y="57" width="80.0" height="18" rx="3" fill="#0891b2" opacity=".85"/>
<text x="466.0" y="70.0" class="small2" text-anchor="start">25-35</text>
<text x="172.0" y="97.0" class="small2 tb" text-anchor="end">Gases de escape</text>
<rect x="340.0" y="84" width="120.0" height="18" rx="3" fill="#c2413b" opacity=".85"/>
<text x="466.0" y="97.0" class="small2" text-anchor="start">20-35</text>
<text x="172.0" y="124.0" class="small2 tb" text-anchor="end">Aceite</text>
<rect x="228.0" y="111" width="32.0" height="18" rx="3" fill="#b26a00" opacity=".85"/>
<text x="266.0" y="124.0" class="small2" text-anchor="start">6-10</text>
<text x="172.0" y="151.0" class="small2 tb" text-anchor="end">Convección y radiación</text>
<rect x="220.0" y="138" width="24.0" height="18" rx="3" fill="#7c3aed" opacity=".85"/>
<text x="250.0" y="151.0" class="small2" text-anchor="start">5-8</text>
<text x="172.0" y="178.0" class="small2 tb" text-anchor="end">Auxiliares</text>
<rect x="196.0" y="165" width="16.0" height="18" rx="3" fill="#475569" opacity=".85"/>
<text x="218.0" y="178.0" class="small2" text-anchor="start">2-4</text>
<text x="172.0" y="205.0" class="small2 tb" text-anchor="end">Inquemados</text>
<rect x="188.0" y="192" width="24.0" height="18" rx="3" fill="#94a3b8" opacity=".85"/>
<text x="218.0" y="205.0" class="small2" text-anchor="start">1-4</text>
<text x="180.0" y="14.0" class="small2 mut" text-anchor="start">Fracción de ṁ<tspan dy='3' font-size='9'>f</tspan><tspan dy='-3'>·H</tspan><tspan dy='3' font-size='9'>c</tspan></text>
</svg>` });
DIAGRAMS.push({ sec: "t2-ciclos", h4: "Ciclo de presión limitada (mixto)", cap: "Diagramas p-v de los tres ciclos teóricos de aire (esquemáticos, r = 8, γ = 1,4, misma escala). En el Otto el calor entra en 2→3 a volumen constante; en el Diesel, a presión constante; en el de presión limitada, una parte a volumen constante hasta p<sub>máx</sub> (2→3) y el resto a presión constante (3→3A). En los tres el calor se cede a volumen constante (4→1).", svg: `<svg class="dg" viewBox="0 0 560 264" role="img" aria-label="Diagramas presión-volumen de los ciclos Otto, Diesel y de presión limitada">
<path d="M30 200H180M30 200V22" class="ax"/><text x="182.0" y="204.0" class="small2" text-anchor="start">v</text><text x="36.0" y="24.0" class="small2" text-anchor="start">p</text>
<path d="M170.0,196.0 L164.4,195.8 L158.8,195.6 L153.2,195.4 L147.6,195.1 L142.0,194.8 L136.4,194.5 L130.8,194.1 L125.2,193.7 L119.6,193.3 L114.0,192.8 L108.4,192.2 L102.8,191.5 L97.2,190.8 L91.6,189.9 L86.0,188.8 L80.4,187.5 L74.8,186.0 L69.2,184.1 L63.6,181.7 L58.0,178.7 L52.4,174.6 L46.8,169.1 L41.2,161.0 L35.6,148.6 L30.0,127.4 L30.0,40.3 L35.6,86.9 L41.2,114.3 L46.8,132.0 L52.4,144.2 L58.0,153.1 L63.6,159.8 L69.2,165.0 L74.8,169.2 L80.4,172.6 L86.0,175.4 L91.6,177.7 L97.2,179.7 L102.8,181.4 L108.4,182.8 L114.0,184.1 L119.6,185.2 L125.2,186.2 L130.8,187.1 L136.4,187.9 L142.0,188.6 L147.6,189.3 L153.2,189.8 L158.8,190.4 L164.4,190.9 L170.0,191.3 L170.0,196.0" class="ln" fill="#c9d9f5" fill-opacity=".45"/>
<text x="25.0" y="123.4" class="small2 tb" text-anchor="end">2</text>
<text x="25.0" y="36.3" class="small2 tb" text-anchor="end">3</text>
<text x="176.0" y="189.3" class="small2 tb" text-anchor="start">4</text>
<text x="176.0" y="200.0" class="small2 tb" text-anchor="start">1</text>
<text x="105.0" y="222.0" class="tb" text-anchor="middle">Otto</text><text x="105.0" y="240.0" class="small2 mut" text-anchor="middle">calor a v = cte</text><text x="105.0" y="256.0" class="small2 mut" text-anchor="middle">MEP</text>
<path d="M208 200H358M208 200V22" class="ax"/><text x="360.0" y="204.0" class="small2" text-anchor="start">v</text><text x="214.0" y="24.0" class="small2" text-anchor="start">p</text>
<path d="M348.0,196.0 L342.4,195.8 L336.8,195.6 L331.2,195.4 L325.6,195.1 L320.0,194.8 L314.4,194.5 L308.8,194.1 L303.2,193.7 L297.6,193.3 L292.0,192.8 L286.4,192.2 L280.8,191.5 L275.2,190.8 L269.6,189.9 L264.0,188.8 L258.4,187.5 L252.8,186.0 L247.2,184.1 L241.6,181.7 L236.0,178.7 L230.4,174.6 L224.8,169.1 L219.2,161.0 L213.6,148.6 L208.0,127.4 L234.0,127.4 L238.6,136.4 L243.1,143.6 L247.7,149.6 L252.2,154.5 L256.8,158.7 L261.4,162.2 L265.9,165.3 L270.5,167.9 L275.0,170.3 L279.6,172.3 L284.2,174.1 L288.7,175.8 L293.3,177.2 L297.8,178.5 L302.4,179.7 L307.0,180.8 L311.5,181.8 L316.1,182.7 L320.6,183.5 L325.2,184.3 L329.8,185.0 L334.3,185.6 L338.9,186.2 L343.4,186.8 L348.0,187.3 L348.0,196.0" class="ln" fill="#c9d9f5" fill-opacity=".45"/>
<text x="203.0" y="123.4" class="small2 tb" text-anchor="end">2</text>
<text x="240.0" y="123.4" class="small2 tb" text-anchor="start">3</text>
<text x="354.0" y="185.3" class="small2 tb" text-anchor="start">4</text>
<text x="354.0" y="200.0" class="small2 tb" text-anchor="start">1</text>
<text x="283.0" y="222.0" class="tb" text-anchor="middle">Diesel</text><text x="283.0" y="240.0" class="small2 mut" text-anchor="middle">calor a p = cte</text><text x="283.0" y="256.0" class="small2 mut" text-anchor="middle">MEC lentos</text>
<path d="M386 200H536M386 200V22" class="ax"/><text x="538.0" y="204.0" class="small2" text-anchor="start">v</text><text x="392.0" y="24.0" class="small2" text-anchor="start">p</text>
<path d="M526.0,196.0 L520.4,195.8 L514.8,195.6 L509.2,195.4 L503.6,195.1 L498.0,194.8 L492.4,194.5 L486.8,194.1 L481.2,193.7 L475.6,193.3 L470.0,192.8 L464.4,192.2 L458.8,191.5 L453.2,190.8 L447.6,189.9 L442.0,188.8 L436.4,187.5 L430.8,186.0 L425.2,184.1 L419.6,181.7 L414.0,178.7 L408.4,174.6 L402.8,169.1 L397.2,161.0 L391.6,148.6 L386.0,127.4 L386.0,83.8 L398.0,83.8 L403.1,105.6 L408.2,121.2 L413.4,132.9 L418.5,141.9 L423.6,149.0 L428.7,154.7 L433.8,159.4 L439.0,163.4 L444.1,166.7 L449.2,169.5 L454.3,172.0 L459.4,174.1 L464.6,175.9 L469.7,177.6 L474.8,179.1 L479.9,180.4 L485.0,181.5 L490.2,182.6 L495.3,183.5 L500.4,184.4 L505.5,185.2 L510.6,185.9 L515.8,186.6 L520.9,187.2 L526.0,187.8 L526.0,196.0" class="ln" fill="#c9d9f5" fill-opacity=".45"/>
<text x="381.0" y="123.4" class="small2 tb" text-anchor="end">2</text>
<text x="381.0" y="79.8" class="small2 tb" text-anchor="end">3</text>
<text x="404.0" y="79.8" class="small2 tb" text-anchor="start">3A</text>
<text x="532.0" y="185.8" class="small2 tb" text-anchor="start">4</text>
<text x="532.0" y="200.0" class="small2 tb" text-anchor="start">1</text>
<text x="461.0" y="222.0" class="tb" text-anchor="middle">Presión limitada</text><text x="461.0" y="240.0" class="small2 mut" text-anchor="middle">v = cte + p = cte</text><text x="461.0" y="256.0" class="small2 mut" text-anchor="middle">MEC rápidos</text>
</svg>` });
DIAGRAMS.push({ sec: "t2-ciclos", h4: "Influencia de γ, del dosado y de la presión máxima", cap: "Rendimiento de los ciclos teóricos calculado con las fórmulas de la diap. 62 (los Diesel con γ = 1,4). Con γ = 1,3 el Otto pierde unos 10 puntos a r = 10; el Diesel queda por debajo del Otto a igual r y empeora al aumentar β (más dosado), como en las curvas de F<sub>R</sub> de la diap. 63.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Curvas de rendimiento frente a relación de compresión de los ciclos Otto y Diesel">
<line x1="60" y1="210.0" x2="500" y2="210.0" class="grid"/><text x="54.0" y="214.0" class="small2" text-anchor="end">0,2</text>
<line x1="60" y1="179.2" x2="500" y2="179.2" class="grid"/><text x="54.0" y="183.2" class="small2" text-anchor="end">0,3</text>
<line x1="60" y1="148.3" x2="500" y2="148.3" class="grid"/><text x="54.0" y="152.3" class="small2" text-anchor="end">0,4</text>
<line x1="60" y1="117.5" x2="500" y2="117.5" class="grid"/><text x="54.0" y="121.5" class="small2" text-anchor="end">0,5</text>
<line x1="60" y1="86.7" x2="500" y2="86.7" class="grid"/><text x="54.0" y="90.7" class="small2" text-anchor="end">0,6</text>
<line x1="60" y1="55.8" x2="500" y2="55.8" class="grid"/><text x="54.0" y="59.8" class="small2" text-anchor="end">0,7</text>
<line x1="60" y1="25.0" x2="500" y2="25.0" class="grid"/><text x="54.0" y="29.0" class="small2" text-anchor="end">0,8</text>
<text x="107.1" y="226.0" class="small2" text-anchor="middle">5</text>
<text x="185.7" y="226.0" class="small2" text-anchor="middle">10</text>
<text x="264.3" y="226.0" class="small2" text-anchor="middle">15</text>
<text x="342.9" y="226.0" class="small2" text-anchor="middle">20</text>
<text x="421.4" y="226.0" class="small2" text-anchor="middle">25</text>
<text x="500.0" y="226.0" class="small2" text-anchor="middle">30</text>
<path d="M60 210H500M60 210V25" class="ax"/><text x="280.0" y="244.0" class="small2" text-anchor="middle">relación de compresión r</text><text x="16.0" y="17.0" class="small2 tb" text-anchor="start">η</text>
<path d="M63.1,188.3 L69.4,173.7 L75.7,162.0 L82.0,152.3 L88.3,144.1 L94.6,137.0 L100.9,130.8 L107.1,125.3 L113.4,120.4 L119.7,116.0 L126.0,111.9 L132.3,108.3 L138.6,104.9 L144.9,101.8 L151.1,98.9 L157.4,96.2 L163.7,93.7 L170.0,91.4 L176.3,89.2 L182.6,87.1 L188.9,85.1 L195.1,83.3 L201.4,81.5 L207.7,79.8 L214.0,78.2 L220.3,76.7 L226.6,75.2 L232.9,73.9 L239.1,72.5 L245.4,71.2 L251.7,70.0 L258.0,68.8 L264.3,67.7 L270.6,66.6 L276.9,65.6 L283.1,64.5 L289.4,63.6 L295.7,62.6 L302.0,61.7 L308.3,60.8 L314.6,59.9 L320.9,59.1 L327.1,58.3 L333.4,57.5 L339.7,56.7 L346.0,56.0 L352.3,55.3 L358.6,54.6 L364.9,53.9 L371.1,53.2 L377.4,52.6 L383.7,51.9 L390.0,51.3 L396.3,50.7 L402.6,50.1 L408.9,49.5 L415.1,49.0 L421.4,48.4 L427.7,47.9 L434.0,47.4 L440.3,46.8 L446.6,46.3 L452.9,45.8 L459.1,45.4 L465.4,44.9 L471.7,44.4 L478.0,44.0 L484.3,43.5 L490.6,43.1 L496.9,42.6" stroke="#1d4ed8" stroke-width="2.4" fill="none"/>
<path d="M63.1,206.7 L69.4,194.8 L75.7,185.1 L82.0,176.9 L88.3,169.9 L94.6,163.8 L100.9,158.4 L107.1,153.6 L113.4,149.2 L119.7,145.3 L126.0,141.7 L132.3,138.4 L138.6,135.3 L144.9,132.5 L151.1,129.8 L157.4,127.3 L163.7,125.0 L170.0,122.8 L176.3,120.8 L182.6,118.8 L188.9,117.0 L195.1,115.2 L201.4,113.5 L207.7,111.9 L214.0,110.4 L220.3,108.9 L226.6,107.5 L232.9,106.2 L239.1,104.9 L245.4,103.6 L251.7,102.4 L258.0,101.3 L264.3,100.2 L270.6,99.1 L276.9,98.1 L283.1,97.0 L289.4,96.1 L295.7,95.1 L302.0,94.2 L308.3,93.3 L314.6,92.5 L320.9,91.6 L327.1,90.8 L333.4,90.0 L339.7,89.2 L346.0,88.5 L352.3,87.7 L358.6,87.0 L364.9,86.3 L371.1,85.6 L377.4,85.0 L383.7,84.3 L390.0,83.7 L396.3,83.1 L402.6,82.5 L408.9,81.9 L415.1,81.3 L421.4,80.7 L427.7,80.2 L434.0,79.6 L440.3,79.1 L446.6,78.6 L452.9,78.0 L459.1,77.5 L465.4,77.0 L471.7,76.6 L478.0,76.1 L484.3,75.6 L490.6,75.2 L496.9,74.7" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
<path d="M94.6,178.9 L100.9,171.2 L107.1,164.4 L113.4,158.3 L119.7,152.8 L126.0,147.8 L132.3,143.3 L138.6,139.1 L144.9,135.2 L151.1,131.6 L157.4,128.3 L163.7,125.2 L170.0,122.3 L176.3,119.5 L182.6,116.9 L188.9,114.5 L195.1,112.2 L201.4,110.0 L207.7,107.9 L214.0,105.9 L220.3,104.1 L226.6,102.2 L232.9,100.5 L239.1,98.9 L245.4,97.3 L251.7,95.8 L258.0,94.3 L264.3,92.9 L270.6,91.5 L276.9,90.2 L283.1,89.0 L289.4,87.7 L295.7,86.6 L302.0,85.4 L308.3,84.3 L314.6,83.2 L320.9,82.2 L327.1,81.2 L333.4,80.2 L339.7,79.3 L346.0,78.3 L352.3,77.5 L358.6,76.6 L364.9,75.7 L371.1,74.9 L377.4,74.1 L383.7,73.3 L390.0,72.5 L396.3,71.8 L402.6,71.0 L408.9,70.3 L415.1,69.6 L421.4,68.9 L427.7,68.3 L434.0,67.6 L440.3,67.0 L446.6,66.4 L452.9,65.7 L459.1,65.1 L465.4,64.6 L471.7,64.0 L478.0,63.4 L484.3,62.9 L490.6,62.3 L496.9,61.8" stroke="#c2413b" stroke-width="2.2" fill="none"/>
<path d="M78.9,177.9 L85.1,168.0 L91.4,159.6 L97.7,152.3 L104.0,145.8 L110.3,140.0 L116.6,134.9 L122.9,130.2 L129.1,126.0 L135.4,122.1 L141.7,118.5 L148.0,115.2 L154.3,112.1 L160.6,109.2 L166.9,106.5 L173.1,104.0 L179.4,101.6 L185.7,99.4 L192.0,97.3 L198.3,95.2 L204.6,93.3 L210.9,91.5 L217.1,89.8 L223.4,88.2 L229.7,86.6 L236.0,85.1 L242.3,83.6 L248.6,82.2 L254.9,80.9 L261.1,79.6 L267.4,78.4 L273.7,77.2 L280.0,76.1 L286.3,74.9 L292.6,73.9 L298.9,72.8 L305.1,71.8 L311.4,70.9 L317.7,69.9 L324.0,69.0 L330.3,68.1 L336.6,67.3 L342.9,66.4 L349.1,65.6 L355.4,64.8 L361.7,64.1 L368.0,63.3 L374.3,62.6 L380.6,61.9 L386.9,61.2 L393.1,60.5 L399.4,59.8 L405.7,59.2 L412.0,58.5 L418.3,57.9 L424.6,57.3 L430.9,56.7 L437.1,56.2 L443.4,55.6 L449.7,55.0 L456.0,54.5 L462.3,54.0 L468.6,53.4 L474.9,52.9 L481.1,52.4 L487.4,51.9 L493.7,51.5 L500.0,51.0" stroke="#c2413b" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
<line x1="330" y1="146" x2="352" y2="146" stroke="#1d4ed8" stroke-width="2.2" stroke-dasharray="none"/><text x="358.0" y="150.0" class="small2" text-anchor="start">Otto γ = 1,4</text>
<line x1="330" y1="161" x2="352" y2="161" stroke="#1d4ed8" stroke-width="2.2" stroke-dasharray="6 4"/><text x="358.0" y="165.0" class="small2" text-anchor="start">Otto γ = 1,3</text>
<line x1="330" y1="176" x2="352" y2="176" stroke="#c2413b" stroke-width="2.2" stroke-dasharray="3 3"/><text x="358.0" y="180.0" class="small2" text-anchor="start">Diesel β = 1,6 (− dosado)</text>
<line x1="330" y1="191" x2="352" y2="191" stroke="#c2413b" stroke-width="2.2" stroke-dasharray="none"/><text x="358.0" y="195.0" class="small2" text-anchor="start">Diesel β = 2,5 (+ dosado)</text>
<circle cx="185.7" cy="86.1" r="3.5" fill="#1d4ed8"/><text x="181.7" y="78.1" class="small2 tb" text-anchor="end">0,60</text>
<circle cx="185.7" cy="117.9" r="3.5" fill="#1d4ed8"/><text x="191.7" y="131.9" class="small2 tb" text-anchor="start">0,50</text>
</svg>` });


/* ===================== FIGURAS ORIGINALES ===================== */
DIAGRAMS.push({ sec: "t2-intro", h4: "Trabajo sobre el pistón y diagrama del indicador", img: "img/fig/mmt-t2-indicador.jpg", alt: "Diagrama del indicador real de un motor de 4 tiempos con el ciclo de trabajo y el de renovación de la carga, diapositiva 6", cap: "<b>Figura original (Tema 2, diap. 6)</b>: diagrama del indicador de un 4T real. Fíjate en los dos lazos: el grande (ciclo de trabajo, en sentido horario, trabajo positivo) y el estrecho de abajo (renovación de la carga), entre V<sub>c</sub> y V<sub>c</sub> + V<sub>D</sub>." });
DIAGRAMS.push({ sec: "t2-intro", h4: "Elementos constructivos", img: "img/fig/mmt-t2-elementos.jpg", alt: "Vista de un motor de cuatro cilindros en línea con sus piezas rotuladas, diapositiva 8", cap: "<b>Figura original (Tema 2, diap. 8)</b>: en rojo, la cadena cinemática (pistones, bielas, cigüeñal con sus contrapesos); en azul, la distribución (árbol de levas, correa, taqués, válvulas); en verde, el bloque. Localiza el bulón y los segmentos en el pistón." });
DIAGRAMS.push({ sec: "t2-combustion", h4: "Combustión anormal en el MEP: el picado", img: "img/fig/mmt-t2-picado.jpg", alt: "Esquema de la autoinflamación de la mezcla final, curva de presión con oscilaciones tras el PMS y surtidores de gasolina 95 y 98, diapositiva 17", cap: "<b>Figura original (Tema 2, diap. 17)</b>: la mezcla final (en azul, al otro lado del frente de llama) se autoinflama. La presión oscila con fuerza tras el PMS: es la onda de choque que produce el ruido. La gasolina de 98 octanos resiste mejor que la de 95." });
DIAGRAMS.push({ sec: "t2-combustion", h4: "Fases de la combustión en el MEC", img: "img/fig/mmt-t2-fases-mec.jpg", alt: "Chorros de combustible en las tres fases y curva de presión con retraso, combustión premezclada y por difusión, diapositiva 19", cap: "<b>Figura original (Tema 2, diap. 19)</b>: con una ley de inyección rectangular, la presión primero sigue la curva de arrastre (retraso), luego sube de golpe (premezclada) y se mantiene mientras arde lo que se va mezclando (difusión). La línea discontinua es la presión sin combustión." });
DIAGRAMS.push({ sec: "t2-renovacion", h4: "Diagrama de distribución y cruce de válvulas", img: "img/fig/mmt-t2-distribucion.jpg", alt: "Diagrama del indicador de 4 tiempos con AA, CA, AE y CE y diagramas de distribución teórico y real con el cruce de válvulas, diapositiva 21", cap: "<b>Figura original (Tema 2, diap. 21)</b>: a la izquierda, dónde caen AA, CA, AE, CE y el inicio de la combustión en el diagrama p-V. A la derecha, el paso del diagrama de distribución teórico (cada carrera 180º) al real, con el cruce de válvulas alrededor del PMS." });
DIAGRAMS.push({ sec: "t2-renovacion", h4: "Dos tiempos: barrido uniflujo (MEC)", img: "img/fig/mmt-t2-uniflujo.jpg", alt: "Secuencia combustión, escape espontáneo, barrido y compresión en un motor de dos tiempos uniflujo, diapositiva 24", cap: "<b>Figura original (Tema 2, diap. 24)</b>: el escape sale por la válvula de la culata; el aire de barrido entra por las lumbreras inferiores cuando el pistón las descubre, y empuja los gases de abajo arriba (uniflujo)." });
DIAGRAMS.push({ sec: "t2-config", h4: "Refrigeración por líquido", img: "img/fig/mmt-t2-refrigeracion.jpg", alt: "Esquema numerado del circuito de refrigeración por líquido con bomba, termostato, vaso de expansión, radiador y ventilador, diapositiva 27", cap: "<b>Figura original (Tema 2, diap. 27)</b>: sigue el circuito desde la bomba (1) por el bloque (2) hasta el termostato (3), que manda el líquido al radiador o lo recircula por (6). A la izquierda, la alternativa con cambiador de calor y agua de mar, río o torre." });
DIAGRAMS.push({ sec: "t2-regulacion", h4: "Curvas características a plena carga", img: "img/fig/mmt-t2-curvas.jpg", alt: "Curvas de par, potencia y consumo específico a plena carga y curvas de un MEC turbo Audi Q7 V12 TDI, diapositiva 56", cap: "<b>Figura original (Tema 2, diap. 56)</b>: el par máximo (verde) llega antes que la potencia máxima (roja) y el consumo mínimo (azul) cae cerca del par máximo. A la derecha, un motor «elástico»: 1000 N·m casi constantes en un amplio rango de régimen." });
DIAGRAMS.push({ sec: "t2-regulacion", h4: "Curvas de isoconsumo específico", img: "img/fig/mmt-t2-isoconsumo.jpg", alt: "Mapas de curvas de isoconsumo específico de un motor y de un MEP y un MEC en función de la pme y la velocidad media del pistón, diapositiva 57", cap: "<b>Figura original (Tema 2, diap. 57)</b>: el «ojo» de cada mapa es el punto de máximo rendimiento, a carga alta y régimen medio. Compara los mínimos: ≈ 235 g/kWh en el MEP frente a ≈ 202 g/kWh en el MEC, que además llega a pme mucho mayores." });
DIAGRAMS.push({ sec: "t2-ciclos", h4: "Comparación ciclo teórico-ciclo real", img: "img/fig/mmt-t2-teorico-real.jpg", alt: "Superposición del ciclo teórico y el real con las pérdidas de tiempo, de calor y de escape espontáneo, diapositiva 64", cap: "<b>Figura original (Tema 2, diap. 64)</b>: las tres áreas que separan el ciclo real del teórico: rayado rojo junto al PMS (pérdidas de tiempo), rayado azul a lo largo de la expansión (pérdidas de calor) y punteado naranja junto al PMI (escape espontáneo)." });
