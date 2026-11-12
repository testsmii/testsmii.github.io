/* Tema 3 (parte 1) · Fundamentos de los motores térmicos basados en turbomáquinas: introducción y turbinas de vapor
   fuente: T3_FundsMotsTurboMaq2026_parte_1.pdf (deck "T3", 36 diapositivas; diap. N = página N del PDF) */

THEORY.T3 = {
  summary: [
    "En una máquina térmica de flujo continuo (adiabática) el trabajo específico interno es el salto de entalpía real: <b>motora</b> $w_i = h_A - h_B$; <b>generadora</b> $w_i = h_B - h_A$. La potencia interna es $\\dot W_i = \\dot m\\,w_i$.",
    "Rendimiento interno: en la <b>motora</b> $\\eta_i = \\Delta h_{real}/\\Delta h_{isentr}$ (real arriba); en la <b>generadora</b> $\\eta_i = \\Delta h_{isentr}/\\Delta h_{real}$ (real abajo). Siempre entre las mismas $p_A$ y $p_B$ y siempre menor que 1.",
    "Pérdidas mecánicas $\\dot W_{pm} = \\dot W_{roz} + \\dot W_{aux}$: en la <b>motora</b> $\\dot W_e = \\dot W_i - \\dot W_{pm} = \\eta_m \\dot W_i$; en la <b>generadora</b> $\\dot W_e = \\dot W_i + \\dot W_{pm} = \\dot W_i/\\eta_m$ (la potencia en el eje <b>aumenta</b>).",
    "En el ciclo, turbina y bomba/compresor son adiabáticos ($w = \\Delta h$) y los intercambiadores no dan trabajo ($q = \\Delta h$): $w_i = w_T - w_{C/B} = q_{a.c.} - q_{c.c.}$ y $\\eta_i = w_i/q_{a.c.}$.",
    "<b>Ciclo de Carnot equivalente</b>: mismo calor aportado y cedido, con las temperaturas medias $\\bar T_{a.c.} = q_{a.c.}/(s_3-s_2)$ y $\\bar T_{c.c.}$: $\\eta = 1 - \\bar T_{c.c.}/\\bar T_{a.c.}$. Toda modificación que suba $\\bar T_{a.c.}$ sin cambiar $\\bar T_{c.c.}$ mejora el rendimiento.",
    "Rendimientos típicos: turbina 0,80-0,93; compresor 0,75-0,87; MCIA 0,35-0,52; <b>turbina de vapor 0,35-0,45</b> ($\\dot W_e/\\dot Q_{g.v.}$); turbina de gas 0,30-0,40.",
    "La turbina de vapor es un motor de <b>combustión externa</b> y <b>ciclo cerrado</b>, válido para cualquier fuente térmica, de <b>baja potencia específica</b> (por volumen de planta) y gran potencia (hasta <b>1750 MW</b> en nucleares).",
    "Ciclo simple: 1 condensador → bomba → 2 → economizador → 3 (líquido saturado, calderín) → evaporador → 4 (vapor saturado) → sobrecalentador → 5 → turbina → 6 → condensador. $w_t = h_5 - h_6 = \\eta_t(h_5 - h_{6s})$, $w_b = (p_2 - p_1)/(\\rho_a \\eta_b)$, $\\eta_i = [(h_5-h_6)-(h_2-h_1)]/(h_5-h_2)$.",
    "Variables de diseño: $T_5$, $p_5$ y $p_6$ ($T_6$). Indicadores: $\\eta_i$, $w_i$ y el título $x_6$ (mínimo permitido ≈ <b>0,85-0,90</b> por la erosión).",
    "$T_5 \\uparrow$: sube η, w y $x_6$ (todo positivo; lo limitan los materiales). $p_5 \\uparrow$: sube η, w sube o baja y <b>baja $x_6$</b>. $p_6 \\downarrow$: sube η <b>notablemente</b> y w, baja ligeramente $x_6$; lo limita el refrigerante: $T_6 = T_{er} + \\Delta T + \\delta T$.",
    "Ciclo simple de diseño: 350 ºC → 32 bar; 450 ºC → 70 bar; 550 ºC → 140 bar; 600 ºC → 195 bar. El rendimiento de la turbina fija la pendiente de la línea de expansión.",
    "<b>Recalentamiento</b> a mitad de expansión (hasta 2 en supercríticos): con mismos $p_5$ y $T_6$ suben η, w y $x_6$; con mismos $T_5$ y $x_6$ permite subir $p_5$. <b>Regenerativo</b>: se extrae una fracción α para calentar el agua de alimentación (sube $\\bar T_{a.c.}$); 4-9 extracciones, una de mezcla (desgasificador) y el resto de superficie.",
    "Montaje: 1-3 cuerpos (alta/media/baja), baja con <b>flujos contrapuestos</b>; <b>discos</b> (acción, admisión parcial, sin empuje axial) frente a <b>tambor</b> (reacción, empuje axial); carcasas partidas por el plano horizontal, <b>doble carcasa</b> en alta; cierres laberínticos; erosión por gotas tras la <b>zona de Wilson</b> (≈ 1 % de rendimiento por cada 1 % de humedad)."
  ],
  sections: [
    { id: "t3-maquinas", title: "1. Trabajos, potencias y rendimientos de las máquinas de flujo continuo", slides: ["T3", 2, 5], html: `
<h4>Contenido del tema</h4>
<p>El tema 3 trata los motores térmicos basados en <b>turbomáquinas</b>: introducción, <b>turbinas de vapor</b>, turbinas de gas, ciclos combinados y cogeneración (diap. 2-3). Esta primera parte cubre la <b>introducción</b> (trabajos, potencias y rendimientos; diagramas h-s y T-s; ciclo de Carnot equivalente) y las <b>turbinas de vapor</b>.</p>
<p>Las turbomáquinas trabajan en <b>flujo continuo</b>: un gasto másico $\\dot m$ atraviesa la máquina de forma estacionaria y, al considerarse <b>adiabáticas</b>, todo el intercambio de energía con el fluido es trabajo y se mide como salto de entalpía.</p>
<h4>Máquina motora: trabajo y rendimiento interno</h4>
<p>En una máquina térmica <b>motora</b> (turbina) el fluido entra en A y sale en B a menor presión, cediendo energía (diap. 4):</p>
<div class="formula">$$w_i=\\Delta h_{real}=h_A-h_B \\qquad \\dot W_i=\\dot m\\,w_i=\\dot m\\,(h_A-h_B)$$</div>
<p><b>Trabajo específico interno</b>: el realizado <b>por el fluido</b> por unidad de masa. <b>Potencia interna</b>: ese trabajo por unidad de tiempo. El <b>rendimiento interno</b> compara el proceso real con el ideal (isentrópico) <b>entre las mismas presiones</b> $p_A$ y $p_B$:</p>
<div class="formula">$$\\eta_i=\\frac{\\Delta h_{real}}{\\Delta h_{isentr\\acute opica}}=\\frac{h_A-h_B}{h_A-h_{Bs}}\\lt 1$$</div>
<p>Por las irreversibilidades, la expansión real termina en un punto B con <b>más entropía y más entalpía</b> que el isentrópico $B_s$: se obtiene <b>menos</b> trabajo del ideal, por eso el real va en el <b>numerador</b>.</p>
<h4>Máquina motora: pérdidas mecánicas y potencia efectiva</h4>
<p>La <b>potencia de pérdidas mecánicas</b> es la que se consume en el rozamiento de cojinetes y cierres y en el accionamiento de auxiliares: $\\dot W_{pm}=\\dot W_{roz}+\\dot W_{aux}$. La <b>potencia efectiva</b> es la <b>entregada en el eje</b>:</p>
<div class="formula">$$\\dot W_e=\\dot W_i-\\dot W_{pm}=\\dot W_i\\,\\eta_m \\qquad \\eta_m=\\frac{\\dot W_e}{\\dot W_i}=1-\\frac{\\dot W_{pm}}{\\dot W_i}$$</div>
<h4>Máquina generadora</h4>
<p>En una máquina <b>generadora</b> (bomba o compresor) el trabajo se realiza <b>sobre</b> el fluido, que pasa de A a B a mayor presión (diap. 5):</p>
<div class="formula">$$w_i=h_B-h_A \\qquad \\dot W_i=\\dot m\\,(h_B-h_A) \\qquad \\eta_i=\\frac{\\Delta h_{isentr\\acute opica}}{\\Delta h_{real}}=\\frac{h_{Bs}-h_A}{h_B-h_A}\\lt 1$$</div>
<p>Ahora el proceso real necesita <b>más</b> trabajo que el ideal, así que el real va en el <b>denominador</b>. La potencia efectiva es la <b>absorbida por el eje</b>: hay que dar la interna <b>más</b> las pérdidas.</p>
<div class="formula">$$\\dot W_e=\\dot W_i+\\dot W_{pm}=\\frac{\\dot W_i}{\\eta_m} \\qquad \\eta_m=\\frac{\\dot W_i}{\\dot W_e}=1-\\frac{\\dot W_{pm}}{\\dot W_e}$$</div>
<h4>Motora frente a generadora</h4>
<table class="tbl cmp"><thead><tr><th></th><th>Motora (turbina)</th><th>Generadora (bomba, compresor)</th></tr></thead><tbody>
<tr><td>Trabajo específico</td><td>$h_A-h_B$ (lo da el fluido)</td><td>$h_B-h_A$ (se da al fluido)</td></tr>
<tr><td>Rendimiento interno</td><td>$\\Delta h_{real}/\\Delta h_{s}$</td><td>$\\Delta h_{s}/\\Delta h_{real}$</td></tr>
<tr><td>Potencia efectiva</td><td>$\\dot W_i-\\dot W_{pm}=\\eta_m\\dot W_i$ (entregada)</td><td>$\\dot W_i+\\dot W_{pm}=\\dot W_i/\\eta_m$ (absorbida)</td></tr>
<tr><td>Rendimiento mecánico</td><td>$1-\\dot W_{pm}/\\dot W_i$</td><td>$1-\\dot W_{pm}/\\dot W_e$</td></tr>
<tr><td>Más pérdidas mecánicas…</td><td>…menos potencia en el eje</td><td>…más potencia que hay que dar en el eje</td></tr>
</tbody></table>
<p>Regla para no equivocarse: <b>lo real siempre es «peor»</b>. En la motora se saca menos de lo ideal y menos aún en el eje; en la generadora se gasta más de lo ideal y más aún en el eje. Por eso ambos rendimientos quedan por debajo de 1.</p>
` },
    { id: "t3-ciclos", title: "2. Diagramas h-s y T-s, ciclo de Carnot equivalente y rendimientos", slides: ["T3", 6, 9], html: `
<h4>Turbomáquinas e intercambiadores en el diagrama h-s</h4>
<p>Las diap. 6-7 dibujan en h-s y en T-s el ciclo de la <b>turbina de vapor</b> (1-2 bomba, 2-3 caldera, 3-4 turbina, 4-1 condensador, con la campana de saturación) y el de la <b>turbina de gas</b> (1-2 compresor, 2-3 cámara de combustión, 3-4 turbina, 4-1 enfriador o mezcla con el ambiente). En ambos se usa la misma notación:</p>
<ul>
<li><b>Turbomáquinas</b>, consideradas <b>adiabáticas</b>: $w_i=\\Delta h$; turbina $w_T=h_3-h_4$; compresor o bomba $w_{C/B}=h_2-h_1$.</li>
<li><b>Intercambiadores de calor</b>, donde <b>no hay trabajo</b>: $q=\\Delta h$; aporte $q_{a.c.}=h_3-h_2$ (caldera o cámara de combustión) y cesión $q_{c.c.}=h_4-h_1$ (condensador o enfriador/mezcla con el ambiente).</li>
</ul>
<p>En el ciclo de vapor el tramo 1-2 (bomba de líquido) es casi inapreciable: el líquido es casi incompresible y su trabajo de bombeo es muy pequeño frente al de la turbina. En el de gas, en cambio, el compresor 1-2 es un tramo largo.</p>
<h4>Trabajo neto, potencias y rendimiento del ciclo</h4>
<p>El trabajo interno específico neto es igual al <b>calor neto intercambiado</b> (primer principio en el ciclo):</p>
<div class="formula">$$w_i=w_T-w_{C/B}=q_{a.c.}-q_{c.c.}$$</div>
<div class="formula">$$\\dot W_i=\\dot m\\,w_i \\qquad \\dot Q_{a.c.}=\\dot m\\,q_{a.c.} \\qquad \\dot Q_{c.c.}=\\dot m\\,q_{c.c.} \\qquad \\eta_i=\\frac{w_i}{q_{a.c.}}=\\frac{\\dot W_i}{\\dot Q_{a.c.}}$$</div>
<p>Ojo con la notación: aquí $\\eta_i$ es el <b>rendimiento interno del ciclo</b> (trabajo neto entre calor aportado), no el rendimiento interno de una máquina aislada. Como todo es por unidad de masa, el rendimiento del ciclo <b>no depende del gasto</b>: duplicar $\\dot m$ duplica potencias y calores, no el rendimiento.</p>
<h4>Ciclo de Carnot equivalente</h4>
<p>Cualquier ciclo se puede convertir en un <b>ciclo de Carnot equivalente</b> con el <b>mismo calor aportado</b> en el foco caliente y el <b>mismo calor cedido</b> al foco frío; por consiguiente, con el <b>mismo trabajo y rendimiento</b> (diap. 8). Sus temperaturas son las <b>temperaturas medias</b> de aportación y de cesión de calor, supuestos procesos reversibles:</p>
<div class="formula">$$\\bar T_{a.c.}=\\frac{Q_{a.c.}}{\\int_2^3 \\frac{dQ_{a.c.}}{T}}=\\frac{1}{s_3-s_2}\\int_2^3 T\\,ds \\qquad \\bar T_{c.c.}=\\frac{1}{s_4-s_1}\\int_1^4 T\\,ds$$</div>
<div class="formula">$$\\eta=1-\\frac{Q_{c.c.}}{Q_{a.c.}}=1-\\frac{\\bar T_{c.c.}}{\\bar T_{a.c.}}$$</div>
<p>Con $q=\\Delta h$ en los intercambiadores, la temperatura media se calcula de forma muy sencilla: $\\bar T_{a.c.}=(h_3-h_2)/(s_3-s_2)$. En un ciclo de vapor la cesión es una condensación a presión constante, así que $\\bar T_{c.c.}$ es prácticamente la <b>temperatura de saturación del condensador</b>.</p>
<h4>Modificación de un ciclo y beneficio</h4>
<p>Si al ciclo base C se le añade un ciclo B (a la derecha, a temperaturas altas), cada minicíclo añadido tiene <b>mayor $\\bar T_{a.c.}$ y la misma $\\bar T_{c.c.}$</b>: el ciclo C+B tiene mayor $\\bar T_{a.c.}$ con la misma $\\bar T_{c.c.}$ y, por tanto, <b>aumenta el rendimiento</b>. Si se le añade el ciclo A (a la izquierda, a temperaturas bajas), ocurre lo contrario. Si se añaden A y B a la vez, <b>no se puede saber</b> si el rendimiento sube o baja sin cálculo previo.</p>
<p>El <b>beneficio</b> de una modificación es la reducción porcentual del calor aportado en el foco caliente <b>manteniendo la potencia</b>:</p>
<div class="formula">$$B=\\frac{\\dot Q_{orig}-\\dot Q_{modif}}{\\dot Q_{orig}}=1-\\frac{\\eta_{orig}}{\\eta_{modif}}$$</div>
<p>(La segunda forma sale de $\\dot Q=\\dot W/\\eta$ con la misma $\\dot W$.) Esta idea guía todo el tema: el sobrecalentamiento, el recalentamiento y la regeneración funcionan porque <b>suben $\\bar T_{a.c.}$</b>, y bajar la presión del condensador funciona porque <b>baja $\\bar T_{c.c.}$</b>.</p>
<h4>Rendimientos típicos de máquinas y motores</h4>
<table class="tbl"><thead><tr><th>Sistema</th><th>Definición</th><th>Valores típicos</th></tr></thead><tbody>
<tr><td>Máquina térmica motora (turbina)</td><td>$\\eta_T=\\Delta h_{0\\,real}/\\Delta h_{0\\,isentr}$</td><td>0,80-0,93</td></tr>
<tr><td>Máquina térmica generadora (compresor)</td><td>$\\eta_C=\\Delta h_{0\\,isentr}/\\Delta h_{0\\,real}$</td><td>0,75-0,87</td></tr>
<tr><td>Motor alternativo (MCIA)</td><td>$\\dot W_{ef}/(\\dot m_f H_c)$</td><td>0,35-0,52</td></tr>
<tr><td>Turbina de vapor (planta)</td><td>$\\dot W_{ef}/\\dot Q_{g.v.}$</td><td>0,35-0,45</td></tr>
<tr><td>Turbina de gas</td><td>$\\dot W_{ef}/(\\dot m_f H_c)$</td><td>0,30-0,40</td></tr>
</tbody></table>
<p>En las máquinas aisladas se usan entalpías de <b>parada</b> ($h_0$, diap. 9). En la turbina de vapor el denominador es el calor del <b>generador de vapor</b> $\\dot Q_{g.v.}$ (combustión externa), no $\\dot m_f H_c$ como en los motores de combustión interna.</p>
` },
    { id: "t3-planta", title: "3. La planta de turbina de vapor: características, aplicaciones y esquema", slides: ["T3", 10, 15], html: `
<h4>Características</h4>
<p>La planta de turbina de vapor (diap. 11) es un <b>motor de combustión externa</b>:</p>
<ul>
<li><b>De ciclo cerrado</b>: el agua recorre siempre el mismo circuito.</li>
<li><b>Válido para cualquier fuente térmica</b>: carbón, biomasa, geotermia, radiación directa concentrada, calor residual (el calor se transmite a través de una pared, así que el fluido de trabajo no se contamina).</li>
<li><b>Potencia específica baja</b> por volumen de planta: la caldera y el condensador son enormes.</li>
<li>Potencia en <b>un eje</b>, basado en <b>turbomáquinas</b>: grandes potencias, <b>hasta 1750 MW</b> en centrales nucleares.</li>
</ul>
<h4>Aplicaciones</h4>
<ul>
<li><b>Plantas de generación eléctrica</b>: carbón, nuclear, biomasa, geotermia, solar de concentración y <b>ciclos combinados</b>.</li>
<li><b>Cogeneración</b>: calefacción de distrito (<i>district heating</i>) y plantas industriales (industria química).</li>
<li><b>Propulsión marina</b>: metaneros y propulsión nuclear.</li>
<li><b>Accionamiento de bombas auxiliares</b> de centrales térmicas.</li>
</ul>
<p>Las fotos de la diap. 12 muestran el tamaño de estas máquinas: una línea de ejes con varios cuerpos de turbina y el generador.</p>
<h4>Esquema de la planta</h4>
<p>Numeración de los puntos que se usa en todo el tema (diap. 13):</p>
<table class="tbl"><thead><tr><th>Punto</th><th>Estado</th><th>Equipo siguiente</th></tr></thead><tbody>
<tr><td>1</td><td>Líquido saturado a la salida del condensador ($p_6$)</td><td><b>Bomba de condensado</b> ($\\dot W_b$)</td></tr>
<tr><td>2</td><td>Líquido comprimido a la presión de caldera</td><td><b>Economizador</b> (calienta el líquido)</td></tr>
<tr><td>3</td><td>Líquido saturado en el <b>calderín</b></td><td><b>Evaporador</b> (paredes del hogar, vaporiza)</td></tr>
<tr><td>4</td><td>Vapor saturado (sale del calderín)</td><td><b>Sobrecalentador</b></td></tr>
<tr><td>5</td><td>Vapor sobrecalentado («vapor vivo»), $\\dot m_v$</td><td><b>Turbina</b> ($\\dot W_t$, mueve el alternador)</td></tr>
<tr><td>6</td><td>Vapor húmedo a la presión del condensador</td><td><b>Condensador</b>, refrigerado con $\\dot m_r$</td></tr>
</tbody></table>
<p>La <b>caldera</b> agrupa economizador, evaporador y sobrecalentador. El calderín separa las dos fases: el líquido baja por los tubos de bajada al evaporador y vuelve como mezcla; el vapor saturado sale por arriba hacia el sobrecalentador. </p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> en el esquema el sobrecalentador está en la zona más caliente de los gases y el economizador en la más fría, cerca de la salida de humos, para aprovechar al máximo el calor de los humos.</div>
<h4>El ciclo en los diagramas T-s y h-s</h4>
<p>En T-s (diap. 14-15): 1-2 es una línea casi vertical pegada a la curva de líquido (bomba, apenas se ve; la diap. 15 lo amplía), 2-3 sigue la curva de líquido saturado (economizador), 3-4 es el <b>escalón horizontal</b> de evaporación a $p_5$ ($T_{sat}$ ≈ 310 ºC en el ejemplo), 4-5 sube por el sobrecalentamiento hasta unos 500 ºC, 5-6 es la expansión hasta la presión del condensador, dentro de la campana, y 6-1 es otro escalón horizontal a la temperatura de condensación (≈ 40 ºC).</p>
<p>En h-s, el aporte de calor 2-5 es una subida de varios miles de kJ/kg, mientras que el trabajo de bomba 1-2 es casi nulo: por eso el trabajo neto del ciclo de vapor es prácticamente el de la turbina.</p>
` },
    { id: "t3-simple", title: "4. Ciclo simple: trabajo, rendimiento e indicadores de comportamiento", slides: ["T3", 16, 18], html: `
<h4>Trabajo de turbina y de bomba</h4>
<p>Con la numeración de la planta (diap. 16), y el punto $6s$ como final de la expansión isentrópica desde 5 hasta $p_6$:</p>
<div class="formula">$$w_t=h_5-h_6=\\eta_t\\,(h_5-h_{6s})$$</div>
<div class="formula">$$w_b=h_2-h_1=\\frac{h_{2s}-h_1}{\\eta_b}=\\frac{p_2-p_1}{\\rho_a\\,\\eta_b}$$</div>
<p>La última forma de $w_b$ usa que el agua líquida es casi incompresible: el trabajo isentrópico es $v\\,\\Delta p=\\Delta p/\\rho_a$. Unidades: con $p$ en kPa y $v$ en m³/kg sale directamente en kJ/kg (1 bar = 100 kPa).</p>
<p>Cálculo típico del punto 6: con $s_{6s}=s_5$ y los datos de saturación a $p_6$, el título isentrópico es $x_{6s}=(s_5-s_f)/(s_g-s_f)$, la entalpía $h_{6s}=h_f+x_{6s}(h_g-h_f)$; después $h_6=h_5-\\eta_t(h_5-h_{6s})$ y $x_6=(h_6-h_f)/(h_g-h_f)$. Como $h_6 \\gt h_{6s}$, <b>el título real es mayor que el isentrópico</b>.</p>
<h4>Trabajo neto y rendimiento del ciclo</h4>
<div class="formula">$$w_i=w_t-w_b=(h_5-h_6)-(h_2-h_1)$$</div>
<div class="formula">$$\\eta_i=\\frac{w_t-w_b}{q_c}=\\frac{(h_5-h_6)-(h_2-h_1)}{h_5-h_2}$$</div>
<p>El calor $q_c=h_5-h_2$ es el que recibe el agua en la caldera desde la salida de la bomba (no desde 1). Potencias: $\\dot W_i=\\dot m_v\\,w_i$; calor en caldera $\\dot Q_c=\\dot m_v (h_5-h_2)$; calor en el condensador $\\dot Q_{cond}=\\dot m_v (h_6-h_1)$, que se lleva el refrigerante: $\\dot m_r\\,c_p\\,\\Delta T=\\dot m_v (h_6-h_1)$.</p>
<h4>Variables de diseño</h4>
<p>Las variables que el diseñador elige en el ciclo simple son tres (diap. 17):</p>
<ul>
<li>La <b>temperatura de entrada a la turbina</b>, $T_5$ (sobrecalentamiento).</li>
<li>La <b>presión del calderín</b>, $p_5$.</li>
<li>La <b>presión (temperatura) del condensador</b>, $p_6$ ($T_6$).</li>
</ul>
<h4>Indicadores de comportamiento: η, w y x6</h4>
<ul>
<li><b>Rendimiento $\\eta_i$</b>: objetivo, minimizar el consumo de fuente térmica. Cuanto mayor sea el coste relativo de la fuente de energía (por coste o por tamaño), más importante es.</li>
<li><b>Trabajo específico $w_i$</b>: mayores trabajos específicos llevan a máquinas más pequeñas para la misma potencia. Su importancia es <b>limitada</b> por tratarse de motores de combustión externa, donde lo que manda en tamaño es la caldera y los intercambiadores.</li>
<li><b>Título a la salida $x_6$</b>: la humedad del vapor en los últimos escalonamientos <b>erosiona los álabes</b>. Las gotas, condensadas tras la <b>zona de Wilson</b>, son arrastradas por el vapor e impactan sobre la parte posterior del frente del álabe. Títulos de <b>0,85-0,90</b> son próximos al mínimo permitido.</li>
</ul>
` },
    { id: "t3-diseno", title: "5. Variables de diseño (T5, p5, p6) y diseño del ciclo simple", slides: ["T3", 19, 23], html: `
<h4>Temperatura de entrada a la turbina, T5</h4>
<p>Subir $T_5$ (de 400 a 500 ºC en la figura de la diap. 19) añade un trozo de ciclo a temperatura alta: sube $\\bar T_{a.c.}$ y la expansión se desplaza a la derecha, hacia la zona seca.</p>
<div class="formula">$$T_5\\Uparrow \\;\\Rightarrow\\; \\eta_i\\Uparrow,\\quad w_i\\Uparrow,\\quad x_6\\Uparrow$$</div>
<ul><li><b>Positivo en todos sus efectos.</b></li>
<li>Limitado por el <b>coste de los materiales</b>: la caldera y los intercambiadores tienen una superficie enorme, así que el coste del material resistente a alta temperatura es esencial.</li></ul>
<h4>Presión de entrada a la turbina, p5</h4>
<p>Con la misma $T_5$, subir $p_5$ (100, 180 y 285 bar en la diap. 20) eleva la temperatura de evaporación y con ella $\\bar T_{a.c.}$, pero el punto 5 se desplaza hacia la <b>izquierda</b> (menos entropía), así que la expansión acaba más dentro de la campana:</p>
<div class="formula">$$p_5\\Uparrow \\;\\Rightarrow\\; \\eta_i\\Uparrow,\\quad w_i\\Uparrow\\Downarrow,\\quad x_6\\Downarrow$$</div>
<ul><li>Aumenta el rendimiento, <b>pero también la humedad</b>. El trabajo puede subir o bajar.</li>
<li>Grandes presiones llevan a <b>ciclos supercríticos</b>, donde no hay separación entre fases líquida y vapor (la curva de 285 bar de la figura ya no tiene escalón de evaporación).</li>
<li>Inconvenientes: <b>grosor de tubería</b>, coste estructural de la caldera y turbina con <b>mayor número de escalonamientos</b>.</li></ul>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> el punto crítico del agua está en unos 221 bar y 374 ºC.</div>
<h4>Presión del condensador, p6</h4>
<p>Bajar $p_6$ (de $T_6$ = 40 a 20 ºC en la diap. 21) baja la temperatura de cesión $\\bar T_{c.c.}$ y alarga la expansión:</p>
<div class="formula">$$p_6\\Downarrow \\;\\Rightarrow\\; \\eta_i\\Uparrow,\\quad w_i\\Uparrow,\\quad x_6\\Downarrow$$</div>
<ul><li>Aumenta el rendimiento <b>notablemente</b>, aumentando <b>ligeramente</b> la humedad.</li>
<li>Está limitado por la <b>temperatura del refrigerante</b>.</li></ul>
<h4>Temperatura de condensación y sistema de refrigeración</h4>
<p>El vapor condensa a $T_6$, que debe estar por encima de la temperatura del refrigerante (diap. 22):</p>
<div class="formula">$$T_6=T_{er}+\\Delta T+\\delta T \\qquad T_{er}=f(T_{amb}) \\qquad \\Delta T=f\\!\\left(\\frac{\\dot m_r}{\\dot m_v}\\right) \\qquad \\delta T=f\\!\\left(\\frac 1 A,\\,U\\right)$$</div>
<ul>
<li>$T_{er}$: temperatura de <b>entrada</b> del refrigerante, que depende del ambiente.</li>
<li>$\\Delta T$: calentamiento del refrigerante ($T_{sr}-T_{er}$); cuanto más caudal de refrigerante por kg de vapor, menor.</li>
<li>$\\delta T$: diferencia mínima con la salida del refrigerante (pinch); disminuye con más área $A$ y mejor coeficiente global $U$.</li>
</ul>
<p>El fluido refrigerante puede ser <b>agua de río o embalse</b> ($T_{er}$ bajo y estable), <b>agua de una torre de refrigeración</b> ($T_{er}$ medio y menos estable) o <b>aire atmosférico</b> (altas variaciones de $T_{er}$ entre verano e invierno). La presión del condensador es la de saturación a $T_6$: a 20 ºC ≈ 2,3 kPa, a 33 ºC ≈ 5 kPa, a 40 ºC ≈ 7,4 kPa. El condensador de la diap. 22 es de carcasa y tubos (el agua circula por los tubos y el condensado se recoge abajo, en el <i>hotwell</i>), conectado a un sistema de vacío por eyectores.</p>
<h4>Diseño del ciclo simple</h4>
<p>En la práctica las variables no son libres (diap. 23):</p>
<ul>
<li>La <b>presión del condensador</b> está dada por el sistema de <b>refrigeración</b>.</li>
<li>La <b>humedad a la salida</b> la fija la tecnología de los <b>escalonamientos de baja presión</b>.</li>
<li>La <b>temperatura de entrada</b> la fijan los <b>materiales</b> de la caldera.</li>
<li>El <b>rendimiento de la turbina</b> fija la <b>pendiente de la línea de expansión</b>.</li>
</ul>
<p>Fijados $p_6$, $x_6$, $T_5$ y $\\eta_t$, la línea de expansión que pasa por el punto de salida admisible corta la isoterma $T_5$ en un único punto: queda determinada <b>la presión $p_5$ máxima</b> para el ciclo simple.</p>
<table class="tbl"><thead><tr><th>$T_5$</th><th>$p_5$</th></tr></thead><tbody>
<tr><td>350 ºC</td><td>32 bar</td></tr><tr><td>450 ºC</td><td>70 bar</td></tr><tr><td>550 ºC</td><td>140 bar</td></tr><tr><td>600 ºC</td><td>195 bar</td></tr>
</tbody></table>
<p>Para usar presiones mayores sin pasarse de humedad hace falta <b>recalentamiento intermedio</b>.</p>
` },
    { id: "t3-recal", title: "6. Recalentamiento intermedio", slides: ["T3", 24, 25], html: `
<h4>Qué es y dónde se hace</h4>
<p>El vapor se <b>recalienta, hasta una temperatura parecida a la de entrada a la turbina, a mitad de expansión</b> (diap. 24):</p>
<ul>
<li>Generalmente <b>entre la turbina de alta presión y la de media/baja</b>.</li>
<li>Puede hacerse <b>pasando por la caldera</b> (recalentador, en el paso de gases) o <b>con vapor vivo</b> (centrales <b>nucleares</b>, donde no hay gases calientes).</li>
<li>Puede haber <b>hasta dos recalentamientos</b> intermedios (ciclos <b>supercríticos</b>).</li>
</ul>
<p>Notación del esquema: el vapor vivo entra en 5, se expande en el cuerpo de alta hasta $6'$, vuelve a la caldera, sale recalentado en $5'$ y se expande hasta 6 en el cuerpo de media/baja.</p>
<h4>Efecto con mismos p5 y T6</h4>
<p>El efecto sobre el ciclo es <b>similar a un aumento de $T_5$</b>: se añade un trozo de ciclo a temperatura alta y la expansión final se desplaza a la derecha.</p>
<div class="formula">$$\\text{mismos } p_5 \\text{ y } T_6:\\quad \\eta\\uparrow,\\quad w_i\\uparrow,\\quad x_6\\uparrow$$</div>
<h4>Efecto con mismos T5 y x6</h4>
<p>Visto desde el diseño (diap. 25): si se mantienen la temperatura máxima y la humedad admisible, el recalentamiento permite <b>subir la presión del calderín</b> sin que la salida se humedezca más.</p>
<div class="formula">$$\\text{mismos } T_5 \\text{ y } x_6:\\quad \\eta\\uparrow,\\quad w_i\\uparrow,\\quad p_5\\uparrow$$</div>
<p>La figura de la diap. 25 lo muestra con $T_{entrada}$ = 500 ºC y $x_{salida}$ = 0,90: sin recalentamiento el ciclo se queda en <b>50 bar</b>; con recalentamiento a 50 bar se puede ir a <b>200 bar</b>.</p>
<h4>Trabajo y calor con recalentamiento</h4>
<p>Aplicando los balances de la diap. 16 a cada equipo del esquema de la diap. 24:</p>
<div class="formula">$$w_t=(h_5-h_{6'})+(h_{5'}-h_6) \\qquad q_c=(h_5-h_2)+(h_{5'}-h_{6'})$$</div>
<div class="formula">$$\\eta_i=\\frac{(h_5-h_{6'})+(h_{5'}-h_6)-(h_2-h_1)}{(h_5-h_2)+(h_{5'}-h_{6'})}$$</div>
<p>Error típico: olvidar el calor del recalentador en el denominador (sale un rendimiento disparatado). Cuanto más alta es la <b>presión de recalentamiento</b> $p_{6'}$, a la misma temperatura $T_{5'}$, menor es la entropía de $5'$ y <b>más húmeda</b> acaba la expansión de baja (es el mismo efecto que subir $p_5$).</p>
` },
    { id: "t3-regen", title: "7. Ciclo regenerativo y ejemplos de plantas", slides: ["T3", 26, 30], html: `
<h4>Objetivo e idea</h4>
<p><b>Objetivo</b>: aumentar el rendimiento <b>eliminando de la caldera el calentamiento de agua fría</b>, es decir, aumentando $\\bar T_{a.c.}$ (diap. 26). Se extrae una fracción de vapor, $\\alpha$, en un punto intermedio $a$ de la expansión; su condensación (y enfriamiento) se usa para calentar el agua bombeada antes de que entre en la caldera.</p>
<p>El calor que deja de aportar la caldera es justo el de la parte más fría del calentamiento del líquido, la que tenía la $T$ más baja: la temperatura media de aportación sube, y el vapor extraído no cede su calor latente en el condensador. Hay <b>dos posibilidades</b>: intercambiador de <b>superficie</b> o de <b>mezcla</b>.</p>
<h4>Calentador de superficie (cerrado)</h4>
<p>El vapor extraído y el agua de alimentación no se mezclan: intercambian calor a través de tubos. Tras condensarse, el vapor extraído (purga, estado $a'$) se envía al <b>depósito inmediatamente anterior en presión</b> previa <b>laminación</b> (válvula). Balance del calentador por kg de vapor vivo:</p>
<div class="formula">$$\\alpha\\,(h_a-h_{a'})=h_{2'}-h_2 \\quad\\Rightarrow\\quad \\alpha=\\frac{h_{2'}-h_2}{h_a-h_{a'}}$$</div>
<p>Basta una bomba (la de condensado lleva el agua a presión de caldera antes del calentador). El agua sale en $2'$ algo por debajo de la temperatura de saturación del vapor extraído.</p>
<h4>Calentador de mezcla (abierto, desgasificador)</h4>
<p>El vapor extraído <b>se mezcla</b> con el líquido bombeado (diap. 27). A la salida hay líquido saturado a la presión de la extracción ($1'=a'$), que necesita <b>otra bomba</b> (de alimentación, $\\dot W_{b.al.}$) además de la de condensado ($\\dot W_{b.con.}$). Se usa como <b>desgasificador</b> (elimina los gases disueltos en el agua). Balance:</p>
<div class="formula">$$\\alpha\\,(h_a-h_{1'})=(1-\\alpha)\\,(h_{1'}-h_2) \\quad\\Rightarrow\\quad \\alpha=\\frac{h_{1'}-h_2}{h_a-h_2}$$</div>
<p>Trabajo de la turbina con una extracción: el gasto completo se expande de 5 a $a$ y solo $(1-\\alpha)$ sigue hasta 6:</p>
<div class="formula">$$w_t=(h_5-h_a)+(1-\\alpha)\\,(h_a-h_6)$$</div>
<p>El trabajo específico <b>baja</b> (menos vapor llega al final), pero el calor aportado baja más y el <b>rendimiento sube</b>.</p>
<h4>Varias extracciones</h4>
<p>Generalmente hay <b>entre 4 y 9 extracciones</b> regenerativas (diap. 28):</p>
<ul><li>Generalmente con el <b>mismo Δh</b> entre extracciones.</li>
<li><b>Una</b> usada como <b>desgasificador</b> (mezcla).</li>
<li>El resto, con intercambiadores de <b>superficie</b>.</li></ul>
<p>A mayor número de extracciones, mayor rendimiento, pero <b>la mejora disminuye</b> con el número de extracciones. En el esquema de la diap. 28 hay tres extracciones: $a$ (calentador de superficie de alta, tras la bomba de alimentación), $b$ (desgasificador) y $c$ (superficie de baja, tras la bomba de condensado); por el condensador pasa $\\dot m_v(1-\\alpha-\\beta-\\gamma)$. Las purgas de los calentadores de superficie se laminan hacia el depósito anterior en presión.</p>
<h4>Ejemplos: central de 800 MW y central de carbón</h4>
<p>La diap. 29 muestra una <b>central térmica de 800 MW</b> con $p_5$ = <b>23,5 MPa</b> (supercrítica) y $T_5$ = <b>560 ºC</b>: un cuerpo de alta, uno de media tras el <b>recalentamiento</b> y <b>tres de baja</b> de doble flujo; ocho calentadores (H1-H8) más el desgasificador (D); la bomba de alimentación está accionada por una <b>turbina de vapor auxiliar</b> (una de las aplicaciones de la diap. 11).</p>
<p>La diap. 30 es el esquema de una <b>central de carbón</b>: turbinas de alta, media y baja; caldera con economizador, sobrecalentador, recalentador y calderín; precalentadores de alta y de baja, desgasificador, bombas de alta y de baja; y en el lado de humos, molinos de carbón, precalentador de aire, precipitador electrostático y chimenea.</p>
` },
    { id: "t3-montaje", title: "8. Montaje de turbinas de vapor y erosión por gotas", slides: ["T3", 31, 36], html: `
<h4>Estructura en cuerpos</h4>
<ul>
<li>Estructura en <b>1, 2 o 3 secciones</b> (alta / media / baja), diap. 31.</li>
<li>Cada sección puede tener <b>varias turbinas en paralelo</b>.</li>
<li>Los cuerpos de baja tienen casi siempre <b>flujos contrapuestos</b> (el vapor entra en el centro y se reparte hacia los dos extremos), que <b>contrarrestan los empujes axiales</b>.</li>
</ul>
<h4>Montaje en discos y en tambor</h4>
<table class="tbl cmp"><thead><tr><th>Montaje en discos</th><th>Montaje en tambor</th></tr></thead><tbody>
<tr><td>Discos (rotor) y diafragmas (estator)</td><td>Rotor y estator similares</td></tr>
<tr><td>Turbinas de <b>acción</b>, con mayor salto de presión por escalonamiento</td><td>Turbinas de <b>reacción</b>: más escalonamientos, luego cuerpos más largos o más cuerpos</td></tr>
<tr><td>Permite <b>admisión parcial</b></td><td>—</td></tr>
<tr><td><b>Sin empuje axial</b></td><td><b>Empuje axial</b></td></tr>
</tbody></table>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> en la acción la caída de presión del escalonamiento ocurre en el estator (toberas del diafragma) y el disco trabaja a presión casi uniforme, de ahí que no haya empuje axial; en la reacción también cae presión en el rotor y la diferencia de presiones sobre el tambor produce empuje. Los flujos contrapuestos de baja, además, reparten el enorme caudal volumétrico entre dos salidas.</div>
<h4>Álabes: llantas y fijación</h4>
<p>Formas de unir los álabes entre sí (diap. 32):</p>
<ul>
<li><b>Zunchados</b> (alambres de amarre): reducen vibraciones; se apilan por paquetes; pero introducen <b>pérdidas aerodinámicas y concentración de tensiones</b>.</li>
<li><b>Llanta incorporada</b>: la llanta forma parte del álabe; gran rigidez; reduce pérdidas intersticiales.</li>
<li><b>Llanta remachada</b>: reduce vibraciones, aumenta la rigidez y reduce pérdidas intersticiales.</li>
</ul>
<p>Formas de fijar el álabe al rotor (diap. 33):</p>
<ul>
<li><b>Axial con raíz de abeto</b>: álabes con <b>mucha carga</b>.</li>
<li><b>Tangencial en cola de milano</b>: álabes <b>cortos</b> (alta/media); ranura torneada, <b>bajo coste</b>.</li>
<li><b>En horquilla (radial) con pasadores</b>: <b>últimas etapas</b> (baja); <b>fácil sustitución</b> de álabes.</li>
</ul>
<h4>Carcasas y cierres laberínticos</h4>
<p><b>Carcasas</b> (diap. 34): van <b>partidas por el plano horizontal</b> para montar el rotor. La unión se hace con bridas y espárragos enormes que se aprietan <b>en caliente</b>, calentándolos para conseguir la precarga. En <b>alta presión</b>, <b>doble carcasa</b> (interior y exterior): reparte las tensiones y reduce el espesor de las bridas (menos tensiones térmicas). En <b>baja presión</b>, carcasa de <b>chapa soldada</b>.</p>
<p><b>Cierres laberínticos</b> (diap. 35):</p>
<ul>
<li><b>Eje de alta presión</b>: evitar la <b>salida de vapor</b>; el vapor recogido en las cámaras intermedias se lleva a puntos de menor presión.</li>
<li><b>Eje de baja presión</b>: evitar la <b>entrada de aire</b> (la carcasa está en vacío); se inyecta <b>vapor de sellado</b> y la mezcla de vapor y aire se extrae a un <b>condensador de vahos</b>, ligeramente por debajo de la presión atmosférica.</li>
<li><b>En diafragma</b>: evitar el paso de vapor entre escalonamientos.</li>
</ul>
<h4>Erosión por gotas condensadas</h4>
<p>El vapor que se expande en la turbina de baja llega a formar pequeñas gotas de agua <b>tras la zona de Wilson</b>, que en el diagrama h-s de la diap. 36 queda algo por debajo de la línea de saturación.</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> la expansión es tan rápida que el vapor no condensa al cruzar la línea de saturación: se subenfría (vapor metaestable) hasta la zona de Wilson, donde condensa de golpe en gotitas.</div>
<ul>
<li>Las gotas impactan sobre la <b>zona alta del álabe</b> (por la fuerza centrífuga, en la punta, donde la velocidad periférica es mayor), en el <b>dorso</b>.</li>
<li>Consecuencias: <b>disminución de rendimiento</b> por el impacto y por el efecto fluidodinámico de las gotas (<b>1 % por cada 1 % de humedad</b>) y <b>erosión</b> de la superficie del álabe.</li>
<li>Protección: zona de impacto <b>endurecida</b> o con capa de <b>estelita</b> protectora.</li>
</ul>
<p>Por eso el título a la salida no se deja bajar de ≈ 0,85-0,90 (diap. 18), y por eso se recalienta.</p>
` }
  ],
  confusions: [
    ["Rendimiento interno de <b>motora</b> vs de <b>generadora</b>", "Motora: $\\Delta h_{real}/\\Delta h_{s}$ (se saca menos de lo ideal). Generadora: $\\Delta h_{s}/\\Delta h_{real}$ (se gasta más de lo ideal). Los dos son menores que 1."],
    ["Potencia efectiva de <b>turbina</b> vs de <b>compresor</b>", "Turbina: $\\dot W_e=\\dot W_i-\\dot W_{pm}$ (las pérdidas la reducen). Compresor: $\\dot W_e=\\dot W_i+\\dot W_{pm}$ (las pérdidas aumentan lo que hay que dar en el eje)."],
    ["$\\eta_i$ del <b>ciclo</b> vs $\\eta_t$ de la <b>turbina</b>", "En el tema, $\\eta_i=w_i/q_c$ es el rendimiento del ciclo; $\\eta_t=(h_5-h_6)/(h_5-h_{6s})$ es el rendimiento interno de la turbina (pendiente de la línea de expansión). $T_5$ sube el primero, pero no fija el segundo."],
    ["Efecto de <b>$T_5$</b> vs de <b>$p_5$</b> sobre $x_6$", "Subir $T_5$ seca la salida ($x_6\\uparrow$). Subir $p_5$ la humedece ($x_6\\downarrow$). Los dos suben el rendimiento."],
    ["Bajar <b>$p_6$</b> vs subir <b>$p_5$</b>", "Ambos suben η y bajan $x_6$, pero bajar $p_6$ sube η <b>notablemente</b> con un aumento <b>ligero</b> de humedad, y siempre sube w; subir $p_5$ puede subir o bajar w."],
    ["Calentador de <b>superficie</b> vs de <b>mezcla</b>", "Superficie: no se mezclan, purga laminada al depósito anterior, $\\alpha(h_a-h_{a'})=h_{2'}-h_2$. Mezcla: se mezclan, sale líquido saturado, necesita otra bomba, hace de desgasificador, $\\alpha(h_a-h_{1'})=(1-\\alpha)(h_{1'}-h_2)$."],
    ["<b>Recalentamiento</b> vs <b>regeneración</b>", "Recalentar sube η, w y $x_6$ (o permite más $p_5$). Regenerar sube η pero <b>baja</b> el trabajo específico (parte del vapor no llega al final) y no cambia $x_6$."],
    ["Montaje en <b>discos</b> vs en <b>tambor</b>", "Discos: acción, mayor salto por escalonamiento, admisión parcial, sin empuje axial. Tambor: reacción, más escalonamientos, empuje axial."],
    ["Cierre laberíntico en eje de <b>alta</b> vs de <b>baja</b>", "Alta: evitar que salga vapor (se lleva a puntos de menor presión). Baja: evitar que entre aire (vapor de sellado y condensador de vahos)."]
  ]
};

/* ===================== PREGUNTAS ===================== */
/* --- 1. Máquinas de flujo continuo --- */
L("T3", "t3-maquinas", "Trabajo específico interno", 1, "En una máquina térmica <b>motora</b> de flujo continuo, que se considera adiabática, el trabajo específico interno es:",
 ["$h_A - h_B$, el salto de entalpía real entre la entrada y la salida.", "$h_A - h_{Bs}$, el salto de entalpía isentrópico entre las presiones de entrada y salida.", "$h_B - h_A$, ya que el fluido sale con menor entalpía."], 0,
 "El trabajo específico interno es el realizado <b>por el fluido</b> por unidad de masa y vale el salto de entalpía <b>real</b>: $w_i=\\Delta h_{real}=h_A-h_B$. El salto isentrópico $h_A-h_{Bs}$ solo sirve como referencia para el rendimiento interno, y $h_B-h_A$ es la expresión de la máquina generadora (Apuntes T3, diap. 4).", "Apuntes T3, diap. 4");
L("T3", "t3-maquinas", "Rendimiento interno de la generadora", 2, "Según los apuntes, el rendimiento interno de una máquina térmica <b>generadora</b> de flujo continuo que comprime de A a B es:",
 ["$\\eta_i = \\dfrac{h_{Bs}-h_A}{h_B-h_A}$", "$\\eta_i = \\dfrac{h_B-h_A}{h_{Bs}-h_A}$", "$\\eta_i = \\dfrac{h_A-h_B}{h_A-h_{Bs}}$", "$\\eta_i = \\dfrac{h_B-h_{Bs}}{h_B-h_A}$"], 0,
 "En la generadora el proceso real necesita <b>más</b> trabajo que el isentrópico entre las mismas presiones, así que el real va en el denominador para que $\\eta_i\\lt 1$: $\\eta_i=\\Delta h_{isentr}/\\Delta h_{real}=(h_{Bs}-h_A)/(h_B-h_A)$. La forma $(h_A-h_B)/(h_A-h_{Bs})$ es la de la motora, y la inversa de la correcta daría un valor mayor que 1 (Apuntes T3, diap. 5).", "Apuntes T3, diap. 5");
L("T3", "t3-maquinas", "Rendimiento interno", 2, "El rendimiento interno de una máquina térmica de flujo continuo compara el proceso real con el ideal isentrópico que tiene:",
 ["Las mismas presiones de entrada y de salida, $p_A$ y $p_B$.", "Las mismas entalpías de entrada y de salida.", "La misma temperatura de salida.", "El mismo estado de salida, B."], 0,
 "La comparación se hace <b>entre las mismas $p_A$ y $p_B$</b>: el ideal parte de A y llega a la presión $p_B$ con la entropía de A (punto $B_s$). Si tuviera las mismas entalpías o el mismo estado de salida, el salto sería idéntico y el rendimiento valdría siempre 1 (Apuntes T3, diap. 4-5).", "Apuntes T3, diap. 4-5");
L("T3", "t3-maquinas", "Potencia de pérdidas mecánicas", 2, "La potencia de pérdidas mecánicas de una turbomáquina incluye:",
 ["El rozamiento en cojinetes y cierres y el accionamiento de los elementos auxiliares.", "El rozamiento del fluido con los álabes y las fugas por los intersticios.", "El calor perdido a través de la carcasa más el rozamiento en los cojinetes.", "La energía cinética del fluido a la salida de la máquina."], 0,
 "$\\dot W_{pm}=\\dot W_{roz}+\\dot W_{aux}$: rozamiento en <b>cojinetes y cierres</b> y <b>accionamiento de auxiliares</b>. El rozamiento del fluido y las fugas son pérdidas <b>internas</b> (ya están en $\\eta_i$, porque cambian el estado de salida), y las turbomáquinas se consideran adiabáticas (Apuntes T3, diap. 4).", "Apuntes T3, diap. 4");
L("T3", "t3-maquinas", "Motora frente a generadora", 3, "Con el mismo gasto, el mismo salto de presiones y el mismo rendimiento interno, si aumentan las pérdidas mecánicas de una máquina térmica:",
 ["En una turbina baja la potencia efectiva y en un compresor sube.", "Baja la potencia efectiva tanto en una turbina como en un compresor.", "Sube la potencia interna en ambas máquinas, porque hay que vencer más rozamiento.", "En una turbina sube la potencia efectiva y en un compresor baja."], 0,
 "La potencia interna no cambia (depende de $\\dot m$ y del salto real, fijados). En la <b>turbina</b> $\\dot W_e=\\dot W_i-\\dot W_{pm}$: más pérdidas, menos potencia en el eje. En el <b>compresor</b> $\\dot W_e=\\dot W_i+\\dot W_{pm}$: más pérdidas, más potencia que hay que dar en el eje (Apuntes T3, diap. 4-5).", "Apuntes T3, diap. 4-5");
L("T3", "t3-maquinas", "Rendimiento interno de la motora", 2, "Una turbina adiabática recibe vapor con $h_A$ = 3230 kJ/kg. A la salida, $h_B$ = 2680 kJ/kg, y la expansión isentrópica hasta la misma presión daría $h_{Bs}$ = 2590 kJ/kg. ¿Cuál es su rendimiento interno?",
 ["0,859", "0,836", "0,141", "0,966", "0,830"], 0,
 "<b>Datos:</b> $h_A=3230$, $h_B=2680$, $h_{Bs}=2590$ kJ/kg. Máquina <b>motora</b>, el salto real va arriba: $$\\eta_i=\\frac{h_A-h_B}{h_A-h_{Bs}}=\\frac{3230-2680}{3230-2590}=\\frac{550}{640}=\\boxed{0{,}859}$$ Errores típicos: $1-(h_B-h_{Bs})/(h_A-h_B)=0{,}836$ (dividir la pérdida entre el salto real) o $(h_B-h_{Bs})/(h_A-h_{Bs})=0{,}141$, que es la fracción perdida, no el rendimiento (Apuntes T3, diap. 4).", "Apuntes T3, diap. 4");
L("T3", "t3-maquinas", "Potencia efectiva de un compresor", 3, "Un compresor de flujo continuo trata 15 kg/s de aire. La entalpía pasa de $h_A$ = 290 kJ/kg a $h_B$ = 610 kJ/kg (valores reales) con un rendimiento interno de 0,86. La potencia de pérdidas mecánicas es de 150 kW. ¿Qué potencia hay que aportar en el eje?",
 ["4950 kW", "4650 kW", "4800 kW", "5731 kW", "4278 kW", "5581 kW"], 0,
 "<b>Datos:</b> $\\dot m=15$ kg/s, $h_B-h_A=320$ kJ/kg (real), $\\dot W_{pm}=150$ kW. El salto ya es el <b>real</b>, así que el rendimiento interno no hace falta (es un dato trampa). $$\\dot W_i=\\dot m\\,(h_B-h_A)=15\\cdot320=4800\\ \\text{kW}$$ Máquina <b>generadora</b>: la potencia efectiva es la absorbida por el eje, $$\\dot W_e=\\dot W_i+\\dot W_{pm}=4800+150=\\boxed{4950\\ \\text{kW}}$$ Errores típicos: restar las pérdidas como en una turbina (4650 kW) o volver a dividir por $\\eta_i$ (5581 o 5731 kW) (Apuntes T3, diap. 5).", "Apuntes T3, diap. 5");
L("T3", "t3-maquinas", "Potencia efectiva de una turbina", 3, "Por una turbina de vapor pasan 40 kg/s. La entalpía de entrada es 3400 kJ/kg y la de salida isentrópica, a la presión de escape, 2500 kJ/kg. Con un rendimiento interno de 0,88 y un rendimiento mecánico de 0,985, ¿qué potencia entrega en el eje?",
 ["31,2 MW", "31,7 MW", "32,2 MW", "35,5 MW", "36,0 MW", "40,3 MW"], 0,
 "<b>Datos:</b> $\\dot m=40$ kg/s, $h_A-h_{Bs}=900$ kJ/kg, $\\eta_i=0{,}88$, $\\eta_m=0{,}985$. Salto real (motora): $h_A-h_B=\\eta_i\\,(h_A-h_{Bs})=0{,}88\\cdot900=792$ kJ/kg. $$\\dot W_i=40\\cdot792=31\\,680\\ \\text{kW}$$ $$\\dot W_e=\\eta_m\\,\\dot W_i=0{,}985\\cdot31\\,680=31\\,205\\ \\text{kW}\\approx\\boxed{31{,}2\\ \\text{MW}}$$ Errores típicos: quedarse en la interna (31,7 MW), dividir por $\\eta_m$ como en una generadora (32,2 MW) u olvidar $\\eta_i$ (35,5 MW) (Apuntes T3, diap. 4).", "Apuntes T3, diap. 4");
L("T3", "t3-maquinas", "Rendimiento mecánico de una bomba", 2, "Una bomba de alimentación recibe del fluido una potencia interna de 100 kW y tiene unas pérdidas mecánicas de 5 kW. Según la definición de los apuntes para máquinas generadoras, su rendimiento mecánico es:",
 ["0,952", "0,950", "1,050", "0,048"], 0,
 "En la generadora $\\dot W_e=\\dot W_i+\\dot W_{pm}=105$ kW y $$\\eta_m=\\frac{\\dot W_i}{\\dot W_e}=1-\\frac{\\dot W_{pm}}{\\dot W_e}=\\frac{100}{105}=\\boxed{0{,}952}$$ El 0,950 sale de usar la fórmula de la motora, $1-\\dot W_{pm}/\\dot W_i$, 1,05 es el cociente invertido y 0,048 es la fracción de pérdidas, $5/105$ (Apuntes T3, diap. 5).", "Apuntes T3, diap. 5");

/* --- 2. Diagramas, Carnot equivalente y rendimientos --- */
L("T3", "t3-ciclos", "Rendimiento del ciclo y gasto", 2, "En una planta de turbina de vapor se duplica el gasto másico de vapor manteniendo todos los estados del ciclo. El rendimiento interno del ciclo:",
 ["No cambia: se duplican la potencia y el calor aportado.", "Aumenta, porque se duplica la potencia interna.", "Disminuye, porque se duplica el calor cedido en el condensador.", "Se duplica, igual que la potencia."], 0,
 "$\\eta_i=w_i/q_{a.c.}=\\dot W_i/\\dot Q_{a.c.}$ con $\\dot W_i=\\dot m\\,w_i$ y $\\dot Q_{a.c.}=\\dot m\\,q_{a.c.}$: el gasto se simplifica. Si los estados no cambian, el rendimiento tampoco (Apuntes T3, diap. 6).", "Apuntes T3, diap. 6");
L("T3", "t3-ciclos", "Ciclo de Carnot equivalente", 2, "El ciclo de Carnot equivalente de un ciclo cualquiera se construye de modo que tenga:",
 ["El mismo calor aportado en el foco caliente y el mismo calor cedido al foco frío.", "Las mismas temperaturas máxima y mínima que el ciclo real.", "El mismo trabajo y la misma temperatura máxima.", "La misma temperatura media de aporte y la temperatura máxima del ciclo como foco frío."], 0,
 "El Carnot equivalente conserva el <b>calor aportado</b> y el <b>calor cedido</b>, y por tanto el trabajo y el rendimiento. Sus focos son las <b>temperaturas medias</b> de aportación y de cesión, $\\bar T_{a.c.}$ y $\\bar T_{c.c.}$, no las extremas: un Carnot entre las temperaturas máxima y mínima tendría un rendimiento mucho mayor que el ciclo real (Apuntes T3, diap. 8).", "Apuntes T3, diap. 8");
L("T3", "t3-ciclos", "Modificación de un ciclo", 3, "Al ciclo base C se le añaden a la vez un ciclo A, con aporte de calor a temperaturas inferiores a las del ciclo base, y un ciclo B, con aporte a temperaturas superiores, ambos con la misma temperatura de cesión. El rendimiento del ciclo resultante:",
 ["No se puede saber si aumenta o disminuye sin un cálculo previo.", "Aumenta siempre, porque el ciclo B compensa al A.", "Disminuye siempre, porque el ciclo A baja la temperatura media de aporte.", "No cambia, porque la temperatura de cesión es la misma."], 0,
 "B sube $\\bar T_{a.c.}$ (mejora el rendimiento) y A la baja (lo empeora), con la misma $\\bar T_{c.c.}$. El resultado depende de cuánto calor se aporta en cada uno: según los apuntes, <b>no se puede saber sin cálculo previo</b> (Apuntes T3, diap. 8).", "Apuntes T3, diap. 8");
L("T3", "t3-ciclos", "Temperatura media de aporte", 3, "En un ciclo de vapor se aporta calor desde la salida de la bomba ($h_2$ = 186,4 kJ/kg, $s_2$ = 0,5925 kJ/kg·K) hasta la entrada a la turbina ($h_5$ = 3375,1 kJ/kg, $s_5$ = 6,5993 kJ/kg·K), todo a presión constante. ¿Cuál es la temperatura media termodinámica de aportación de calor?",
 ["530,8 K", "257,7 K", "543,9 K", "511,4 K", "483,2 K", "773,2 K"], 0,
 "A presión constante $q=\\Delta h$ y, reversible, $q=\\int T\\,ds$, así que $$\\bar T_{a.c.}=\\frac{q_{a.c.}}{s_5-s_2}=\\frac{3375{,}1-186{,}4}{6{,}5993-0{,}5925}=\\frac{3188{,}7}{6{,}0068}=\\boxed{530{,}8\\ \\text{K}}$$ (257,7 ºC). Errores típicos: dar 257,7 como si fueran kelvin, usar la media aritmética de las temperaturas extremas (543,9 K) o dividir $h_5$ entre $s_5$ (511,4 K). La temperatura media queda muy por debajo de los 500 ºC de entrada a turbina porque gran parte del calor entra a la temperatura de evaporación (Apuntes T3, diap. 8).", "Apuntes T3, diap. 8");
L("T3", "t3-ciclos", "Rendimiento del Carnot equivalente", 3, "El ciclo de la pregunta anterior tiene una temperatura media de aportación de 530,8 K y condensa a 41,5 ºC. Suponiendo procesos reversibles, ¿cuál es el rendimiento de su ciclo de Carnot equivalente?",
 ["0,407", "0,839", "0,593", "0,609", "0,922"], 0,
 "La cesión es una condensación a temperatura constante: $\\bar T_{c.c.}=41{,}5+273{,}15=314{,}65$ K. $$\\eta=1-\\frac{\\bar T_{c.c.}}{\\bar T_{a.c.}}=1-\\frac{314{,}65}{530{,}8}=\\boxed{0{,}407}$$ Errores típicos: operar en ºC (0,839) o usar la temperatura máxima, 773 K, como foco caliente (0,593), que es el Carnot entre extremos, no el equivalente. Comprobación: el ciclo de Rankine ideal con esos estados da $\\eta=0{,}408$ (Apuntes T3, diap. 8).", "Apuntes T3, diap. 8");
L("T3", "t3-ciclos", "Beneficio de una modificación", 2, "Una modificación del ciclo de una central de 400 MW sube su rendimiento de 0,36 a 0,40, manteniendo la potencia. ¿Cuál es el beneficio, definido en los apuntes como la reducción porcentual del calor aportado en el foco caliente?",
 ["10,0 %", "4,0 %", "11,1 %", "36,0 %", "90,0 %"], 0,
 "$\\dot Q=\\dot W/\\eta$: $\\dot Q_{orig}=400/0{,}36=1111{,}1$ MW y $\\dot Q_{modif}=400/0{,}40=1000$ MW. $$B=\\frac{\\dot Q_{orig}-\\dot Q_{modif}}{\\dot Q_{orig}}=\\frac{111{,}1}{1111{,}1}=1-\\frac{0{,}36}{0{,}40}=\\boxed{10{,}0\\ \\%}$$ Errores típicos: restar los rendimientos (4 puntos) o dividir entre el calor modificado (11,1 %) (Apuntes T3, diap. 8).", "Apuntes T3, diap. 8");
L("T3", "t3-ciclos", "Rendimientos típicos", 2, "¿Qué intervalo de rendimiento dan los apuntes para una planta de turbina de vapor, definido como potencia efectiva entre calor aportado en el generador de vapor?",
 ["0,35-0,45", "0,30-0,40", "0,35-0,52", "0,80-0,93"], 0,
 "Turbina de vapor: $\\eta_{TV}=\\dot W_{ef}/\\dot Q_{g.v.}$ ≈ <b>0,35-0,45</b>. 0,30-0,40 es el de la turbina de gas, 0,35-0,52 el del MCIA, y 0,80-0,93 es el rendimiento de una máquina motora aislada (una turbina), no el de una planta (Apuntes T3, diap. 9).", "Apuntes T3, diap. 9");
L("T3", "t3-ciclos", "Rendimiento de la planta de vapor", 2, "Una planta de vapor produce 380 MW efectivos con 300 kg/s de vapor que entra en el generador de vapor con 200 kJ/kg y sale con 3400 kJ/kg. Con la definición de los apuntes, su rendimiento es:",
 ["0,396", "0,373", "0,604", "0,450"], 0,
 "$\\dot Q_{g.v.}=\\dot m_v\\,(h_{sal}-h_{ent})=300\\cdot(3400-200)=960\\,000$ kW = 960 MW. $$\\eta_{TV}=\\frac{\\dot W_{ef}}{\\dot Q_{g.v.}}=\\frac{380}{960}=\\boxed{0{,}396}$$ dentro del intervalo 0,35-0,45. Errores típicos: usar solo la entalpía de salida, $300\\cdot3400$ (0,373), o dar la fracción perdida, $1-0{,}396=0{,}604$ (Apuntes T3, diap. 9).", "Apuntes T3, diap. 9");
L("T3", "t3-ciclos", "Definición de rendimientos", 3, "¿Cuál es la diferencia entre la definición de rendimiento de una planta de turbina de vapor y la de una turbina de gas en los apuntes?",
 ["En la de vapor se divide por el calor del generador de vapor; en la de gas, por $\\dot m_f H_c$.", "En la de vapor se divide por $\\dot m_f H_c$; en la de gas, por el calor de la cámara de combustión.", "Ninguna: en ambas es la potencia efectiva entre $\\dot m_f H_c$.", "En la de vapor se usa la potencia interna; en la de gas, la efectiva."], 0,
 "$\\eta_{TV}=\\dot W_{ef}/\\dot Q_{g.v.}$: como la combustión es <b>externa</b>, se toma el calor que recibe el vapor (no se incluyen las pérdidas de la caldera). $\\eta_{TG}=\\dot W_{ef}/(\\dot m_f H_c)$, como en el MCIA, porque el combustible se quema en el propio fluido. En ambas se usa la potencia <b>efectiva</b> (Apuntes T3, diap. 9).", "Apuntes T3, diap. 9");

/* --- 3. La planta --- */
L("T3", "t3-planta", "Características", 1, "¿Qué combinación describe la planta de turbina de vapor según los apuntes?",
 ["Motor de combustión externa y de ciclo cerrado.", "Motor de combustión interna y de ciclo abierto.", "Motor de combustión externa y de ciclo abierto.", "Motor de combustión interna y de ciclo cerrado."], 0,
 "La planta de vapor es un motor de <b>combustión externa</b> (el calor se genera fuera del fluido y se transmite al agua en la caldera) y de <b>ciclo cerrado</b> (el agua condensada vuelve a la caldera). Por eso vale para cualquier fuente térmica (Apuntes T3, diap. 11).", "Apuntes T3, diap. 11");
L("T3", "t3-planta", "Características", 2, "Según los apuntes, ¿cuál es una característica de la planta de turbina de vapor?",
 ["Potencia específica baja por volumen de la planta, aunque se alcanzan potencias de hasta 1750 MW.", "Potencia específica alta por volumen de la planta, por eso se usa en propulsión marina.", "Potencias limitadas a unos 175 MW por el tamaño del condensador.", "Necesita un combustible líquido o gaseoso de alta calidad."], 0,
 "La planta tiene <b>potencia específica baja</b> por volumen (caldera y condensador enormes), pero al ser una turbomáquina con la potencia en un eje alcanza <b>grandes potencias, hasta 1750 MW</b> en centrales nucleares. Al ser de combustión externa vale para <b>cualquier fuente térmica</b>: carbón, biomasa, geotermia, radiación concentrada o calor residual (Apuntes T3, diap. 11).", "Apuntes T3, diap. 11");
L("T3", "t3-planta", "Aplicaciones", 2, "¿Cuál de estas aplicaciones <b>no</b> aparece en los apuntes como aplicación de la turbina de vapor?",
 ["Propulsión de aviones comerciales.", "Propulsión de metaneros.", "Accionamiento de bombas auxiliares de centrales térmicas.", "Calefacción de distrito por cogeneración."], 0,
 "Aplicaciones de los apuntes: generación eléctrica (carbón, nuclear, biomasa, geotermia, solar de concentración, ciclos combinados), cogeneración (calefacción de distrito, industria química), propulsión marina (metaneros, nuclear) y accionamiento de bombas auxiliares. Para un avión la baja potencia específica de una planta de vapor la descarta (Apuntes T3, diap. 11).", "Apuntes T3, diap. 11");
L("T3", "t3-planta", "Esquema de la planta", 2, "En la caldera de la planta, ¿en qué orden recorre el agua los equipos desde la bomba de condensado hasta la turbina?",
 ["Economizador, calderín y evaporador, sobrecalentador.", "Evaporador, economizador, sobrecalentador.", "Sobrecalentador, evaporador, economizador.", "Economizador, sobrecalentador, evaporador."], 0,
 "Del punto 2 (salida de bomba) el líquido se calienta en el <b>economizador</b> hasta 3 (líquido saturado en el calderín), se vaporiza en el <b>evaporador</b> hasta 4 (vapor saturado, separado en el calderín) y se recalienta en el <b>sobrecalentador</b> hasta 5, entrada a la turbina (Apuntes T3, diap. 13).", "Apuntes T3, diap. 13");
L("T3", "t3-planta", "Ciclo en el diagrama T-s", 3, "En el diagrama T-s del ciclo simple, ¿qué dos tramos son a la vez isobaros e isotermos?",
 ["3-4 (evaporación) y 6-1 (condensación).", "2-3 (economizador) y 4-5 (sobrecalentador).", "1-2 (bomba) y 5-6 (turbina).", "3-4 (evaporación) y 4-5 (sobrecalentamiento)."], 0,
 "Dentro de la campana un cambio de fase a presión constante ocurre a temperatura constante: son los escalones horizontales 3-4 (evaporación a $p_5$) y 6-1 (condensación a $p_6$). En 2-3 y 4-5 la presión es constante pero la temperatura sube; 1-2 y 5-6 son las turbomáquinas (Apuntes T3, diap. 14).", "Apuntes T3, diap. 14");
L("T3", "t3-planta", "Trabajo de la bomba", 2, "En el diagrama h-s de una planta de vapor, el tramo de la bomba (1-2) casi no se aprecia. ¿Por qué?",
 ["Porque bombea líquido, casi incompresible, y su trabajo $\\Delta p/\\rho$ es muy pequeño frente al de la turbina.", "Porque la bomba se considera isoterma y no cambia la entalpía.", "Porque la bomba trabaja con vapor a baja presión.", "Porque la bomba no es una turbomáquina y no se representa."], 0,
 "La bomba comprime <b>líquido</b>: su trabajo es $w_b\\approx\\Delta p/(\\rho_a\\eta_b)$, del orden de 10-25 kJ/kg, frente a más de 1000 kJ/kg de la turbina. Por eso el tramo 1-2 es un punto en la escala del diagrama y las diap. 14-15 lo marcan con un círculo ampliado (Apuntes T3, diap. 14-16).", "Apuntes T3, diap. 14-16");

/* --- 4. Ciclo simple --- */
L("T3", "t3-simple", "Rendimiento del ciclo", 2, "En la expresión del rendimiento del ciclo simple, $\\eta_i=\\dfrac{(h_5-h_6)-(h_2-h_1)}{q_c}$, el calor aportado $q_c$ es:",
 ["$h_5-h_2$", "$h_5-h_1$", "$h_5-h_3$", "$h_5-h_6$"], 0,
 "El agua entra en la caldera tras la bomba (punto 2) y sale sobrecalentada en 5: $q_c=h_5-h_2$. Con $h_5-h_1$ se contaría como calor el trabajo de la bomba; $h_5-h_3$ olvidaría el economizador (Apuntes T3, diap. 16).", "Apuntes T3, diap. 16");
L("T3", "t3-simple", "Título a la salida", 2, "Comparando la expansión real de la turbina con la isentrópica hasta la misma presión del condensador, el título del vapor a la salida:",
 ["Es mayor en la real, porque las pérdidas dejan el vapor con más entalpía.", "Es menor en la real, porque las pérdidas condensan parte del vapor.", "Es el mismo, porque lo fija la presión del condensador.", "Es mayor en la isentrópica, porque tiene más entropía."], 0,
 "$h_6=h_5-\\eta_t(h_5-h_{6s})\\gt h_{6s}$: el punto real está a la derecha del isentrópico (más entropía) sobre la misma isobara, dentro de la campana, así que tiene <b>más título</b>. La presión fija la temperatura de saturación, no el título (Apuntes T3, diap. 16).", "Apuntes T3, diap. 16");
L("T3", "t3-simple", "Variables de diseño", 1, "¿Cuál <b>no</b> es una de las tres variables de diseño del ciclo simple de turbina de vapor según los apuntes?",
 ["El gasto de vapor $\\dot m_v$.", "La temperatura de entrada a la turbina, $T_5$.", "La presión del calderín, $p_5$.", "La presión (temperatura) del condensador, $p_6$ ($T_6$)."], 0,
 "Las variables de diseño son $T_5$, $p_5$ y $p_6$ ($T_6$): fijan los estados y con ellos el rendimiento, el trabajo específico y el título. El gasto solo escala la potencia (Apuntes T3, diap. 17).", "Apuntes T3, diap. 17");
L("T3", "t3-simple", "Indicadores de comportamiento", 1, "¿Qué títulos a la salida de la turbina se consideran próximos al mínimo permitido?",
 ["0,85-0,90", "0,60-0,70", "0,97-0,99", "0,75-0,80"], 0,
 "Títulos de <b>0,85-0,90</b> son próximos al mínimo permitido: con más humedad las gotas erosionan los álabes de los últimos escalonamientos (Apuntes T3, diap. 18).", "Apuntes T3, diap. 18");
L("T3", "t3-simple", "Indicadores de comportamiento", 3, "Según los apuntes, ¿por qué el trabajo específico tiene una importancia limitada en una planta de turbina de vapor?",
 ["Porque al ser un motor de combustión externa el tamaño lo dominan la caldera y los intercambiadores de calor.", "Porque el trabajo de la bomba es despreciable.", "Porque el trabajo específico no cambia con las variables de diseño.", "Porque lo importante es el título y no el tamaño de la turbina."], 0,
 "Un mayor trabajo específico da máquinas más pequeñas para la misma potencia, pero en un motor de <b>combustión externa</b> lo grande es la caldera (o los intercambiadores), así que reducir la turbomáquina influye poco. El indicador principal es el rendimiento, más cuanto mayor sea el coste relativo de la fuente (Apuntes T3, diap. 18).", "Apuntes T3, diap. 18");
L("T3", "t3-simple", "Título a la salida de turbina", 3, "Ciclo simple: vapor a la entrada de turbina a 100 bar y 500 ºC ($h_5$ = 3375,1 kJ/kg; $s_5$ = 6,5993 kJ/kg·K); condensador a 8 kPa ($h_f$ = 173,9; $h_g$ = 2576,2 kJ/kg; $s_f$ = 0,5925; $s_g$ = 8,2274 kJ/kg·K). Rendimiento interno de la turbina 0,85. ¿Cuál es el título a la salida de la turbina?",
 ["0,869", "0,787", "0,669", "0,926", "0,810", "0,877"], 0,
 "<b>1. Expansión isentrópica</b> ($s_{6s}=s_5$): $$x_{6s}=\\frac{s_5-s_f}{s_g-s_f}=\\frac{6{,}5993-0{,}5925}{8{,}2274-0{,}5925}=0{,}7868$$ $$h_{6s}=h_f+x_{6s}(h_g-h_f)=173{,}9+0{,}7868\\cdot2402{,}3=2063{,}9\\ \\text{kJ/kg}$$ <b>2. Expansión real:</b> $$h_6=h_5-\\eta_t(h_5-h_{6s})=3375{,}1-0{,}85\\cdot1311{,}2=2260{,}6\\ \\text{kJ/kg}$$ $$x_6=\\frac{h_6-h_f}{h_g-h_f}=\\frac{2260{,}6-173{,}9}{2402{,}3}=\\boxed{0{,}869}$$ Errores típicos: quedarse en el isentrópico (0,787), multiplicar o dividir el título por $\\eta_t$ (0,669 o 0,926) o dividir por $h_g$ en lugar de $h_g-h_f$ (0,810) (Apuntes T3, diap. 16).", "Apuntes T3, diap. 16");
L("T3", "t3-simple", "Rendimiento del ciclo simple", 3, "En el ciclo anterior (100 bar, 500 ºC, 8 kPa, $\\eta_t$ = 0,85) la turbina sale con $h_6$ = 2260,6 kJ/kg. La bomba ($\\eta_b$ = 0,80; $v_f$ = 0,001008 m³/kg) toma líquido saturado del condensador ($h_1$ = 173,9 kJ/kg). ¿Cuál es el rendimiento del ciclo?",
 ["0,346", "0,350", "0,408", "0,326", "0,353", "0,294"], 0,
 "<b>Bomba:</b> $$w_b=\\frac{v_f\\,(p_2-p_1)}{\\eta_b}=\\frac{0{,}001008\\cdot(10\\,000-8)}{0{,}80}=12{,}6\\ \\text{kJ/kg}\\qquad h_2=186{,}5\\ \\text{kJ/kg}$$ <b>Turbina:</b> $w_t=3375{,}1-2260{,}6=1114{,}5$ kJ/kg. <b>Calor:</b> $q_c=h_5-h_2=3188{,}6$ kJ/kg. $$\\eta_i=\\frac{w_t-w_b}{q_c}=\\frac{1114{,}5-12{,}6}{3188{,}6}=\\boxed{0{,}346}$$ Errores típicos: olvidar la bomba (0,350), sumarla (0,353), tomar el ciclo ideal con $\\eta_t=1$ (0,408) dividir por $h_5$ (0,326) o aplicar $\\eta_t$ dos veces (0,294) (Apuntes T3, diap. 16).", "Apuntes T3, diap. 16");
L("T3", "t3-simple", "Trabajo de la bomba", 2, "Una bomba de condensado eleva agua de 8 kPa a 100 bar. Con $v_f$ = 0,001008 m³/kg y $\\eta_b$ = 0,80, ¿cuál es su trabajo específico?",
 ["12,6 kJ/kg", "10,1 kJ/kg", "8,1 kJ/kg", "1259 kJ/kg", "0,126 kJ/kg"], 0,
 "Con las presiones en kPa (100 bar = 10 000 kPa) sale directamente en kJ/kg: $$w_b=\\frac{p_2-p_1}{\\rho_a\\,\\eta_b}=\\frac{0{,}001008\\cdot(10\\,000-8)}{0{,}80}=\\frac{10{,}07}{0{,}80}=\\boxed{12{,}6\\ \\text{kJ/kg}}$$ Errores típicos: el isentrópico sin $\\eta_b$ (10,1), multiplicar por $\\eta_b$ (8,1) o meter las presiones en bar ×100 de más (1259) (Apuntes T3, diap. 16).", "Apuntes T3, diap. 16");
L("T3", "t3-simple", "Gasto de vapor", 3, "Una central de ciclo simple trabaja a 140 bar y 550 ºC ($h_5$ = 3461,0 kJ/kg) con condensador a 5 kPa ($h_1$ = 137,8 kJ/kg). Con $\\eta_t$ = 0,88 la turbina sale con $h_6$ = 2176,2 kJ/kg, y la bomba consume 17,6 kJ/kg. ¿Qué gasto de vapor hace falta para 300 MW de potencia interna neta?",
 ["236,7 kg/s", "233,5 kg/s", "208,0 kg/s", "90,8 kg/s", "86,7 kg/s", "230,3 kg/s"], 0,
 "$$w_i=w_t-w_b=(3461{,}0-2176{,}2)-17{,}6=1284{,}8-17{,}6=1267{,}2\\ \\text{kJ/kg}$$ $$\\dot m_v=\\frac{\\dot W_i}{w_i}=\\frac{300\\,000}{1267{,}2}=\\boxed{236{,}7\\ \\text{kg/s}}$$ Errores típicos: usar solo el trabajo de turbina (233,5 kg/s), la expansión isentrópica (208,0 kg/s), sumar la bomba (230,3 kg/s), dividir por el calor aportado (90,8 kg/s) o por $h_5$ (86,7 kg/s) (Apuntes T3, diap. 16).", "Apuntes T3, diap. 16");
L("T3", "t3-simple", "Caudal de refrigerante", 3, "En la central anterior circulan 236,7 kg/s de vapor que salen de la turbina con $h_6$ = 2176,2 kJ/kg y del condensador como líquido saturado con $h_1$ = 137,8 kJ/kg. Si el agua de refrigeración ($c_p$ = 4,18 kJ/kg·K) se calienta 10 K, ¿qué caudal de refrigerante hace falta?",
 ["11 543 kg/s", "13 721 kg/s", "10 551 kg/s", "23 086 kg/s", "48 249 kg/s", "1154 kg/s"], 0,
 "<b>Calor cedido en el condensador:</b> $$\\dot Q_{cond}=\\dot m_v\\,(h_6-h_1)=236{,}7\\cdot(2176{,}2-137{,}8)=482\\,489\\ \\text{kW}$$ <b>Balance del refrigerante:</b> $$\\dot m_r=\\frac{\\dot Q_{cond}}{c_p\\,\\Delta T}=\\frac{482\\,489}{4{,}18\\cdot10}=\\boxed{11\\,543\\ \\text{kg/s}}$$ unas 49 veces el gasto de vapor. Errores típicos: condensar desde vapor saturado, $h_g$ (13 721), usar la salida isentrópica (10 551), tomar $\\Delta T$ = 5 K (23 086) u olvidar $c_p$ (48 249). Según la diap. 22, el calentamiento $\\Delta T$ depende precisamente de $\\dot m_r/\\dot m_v$ (Apuntes T3, diap. 16 y 22).", "Apuntes T3, diap. 16 y 22");

/* --- 5. Variables de diseño --- */
L("T3", "t3-diseno", "Temperatura de entrada a la turbina", 2, "En un ciclo simple de vapor, a igualdad de $p_5$ y $p_6$, un aumento de la temperatura de entrada a la turbina $T_5$ produce:",
 ["Mayor rendimiento, mayor trabajo específico y mayor título a la salida.", "Mayor rendimiento y mayor trabajo específico, pero menor título a la salida.", "Mayor rendimiento, trabajo específico que puede subir o bajar y menor título.", "Mayor trabajo específico, pero menor rendimiento por las mayores pérdidas en la caldera."], 0,
 "$T_5\\Uparrow$: $\\eta_i\\Uparrow$, $w_i\\Uparrow$, $x_6\\Uparrow$. Es <b>positivo en todos sus efectos</b>: sube la temperatura media de aporte y desplaza la expansión hacia la zona seca. Su límite es el coste de los materiales de la caldera. La combinación «η sube, w sube o baja, x baja» es la de subir $p_5$ (Apuntes T3, diap. 19).", "Apuntes T3, diap. 19");
L("T3", "t3-diseno", "Presión de entrada a la turbina", 3, "En un ciclo de vapor simple, a igualdad de la temperatura del vapor vivo y de la presión del condensador, un aumento de la presión del calderín implica:",
 ["Menor título del vapor a la salida de la turbina.", "Mayor título del vapor a la salida de la turbina.", "Menor rendimiento térmico del ciclo.", "Mayor trabajo específico en cualquier caso."], 0,
 "$p_5\\Uparrow$: $\\eta_i\\Uparrow$, $w_i\\Uparrow\\Downarrow$, $x_6\\Downarrow$. A la misma $T_5$ el punto 5 tiene menos entropía y la expansión acaba más dentro de la campana: <b>más humedad</b>. El rendimiento sube, y el trabajo puede subir o bajar, así que «en cualquier caso» es falso (Apuntes T3, diap. 20).", "Apuntes T3, diap. 20");
L("T3", "t3-diseno", "Presión del condensador", 2, "¿Qué variable de diseño, según los apuntes, «aumenta el rendimiento notablemente, aumentando ligeramente la humedad»?",
 ["Reducir la presión del condensador, $p_6$.", "Aumentar la presión del calderín, $p_5$.", "Aumentar la temperatura de entrada a la turbina, $T_5$.", "Aumentar la presión del condensador, $p_6$."], 0,
 "$p_6\\Downarrow$: $\\eta_i\\Uparrow$ (notablemente), $w_i\\Uparrow$, $x_6\\Downarrow$ (ligeramente). Subir $p_5$ también sube la humedad, pero los apuntes no lo describen como ligero; subir $T_5$ reduce la humedad (Apuntes T3, diap. 21).", "Apuntes T3, diap. 21");
L("T3", "t3-diseno", "Límites de las variables de diseño", 1, "¿Qué limita la reducción de la presión del condensador?",
 ["La temperatura del fluido refrigerante.", "El coste de los materiales de la caldera.", "El grosor de las tuberías.", "El número de escalonamientos de alta presión."], 0,
 "El vapor solo puede condensar por encima de la temperatura del refrigerante, así que $p_6$ está limitada por la <b>temperatura del refrigerante</b>. Los materiales limitan $T_5$; el grosor de tubería es un inconveniente de subir $p_5$ (Apuntes T3, diap. 21-22).", "Apuntes T3, diap. 21-22");
L("T3", "t3-diseno", "Temperatura de condensación", 3, "En la expresión $T_6=T_{er}+\\Delta T+\\delta T$ de la temperatura de condensación, ¿qué término se reduce aumentando el área de intercambio del condensador?",
 ["$\\delta T$", "$\\Delta T$", "$T_{er}$", "Ninguno: el área solo cambia el caudal de refrigerante."], 0,
 "$\\delta T=f(1/A,\\,U)$ es la diferencia entre la condensación y la salida del refrigerante: disminuye con más área y mejor coeficiente global. $\\Delta T=f(\\dot m_r/\\dot m_v)$ es el calentamiento del refrigerante (se reduce con más caudal de refrigerante) y $T_{er}=f(T_{amb})$ depende del ambiente (Apuntes T3, diap. 22).", "Apuntes T3, diap. 22");
L("T3", "t3-diseno", "Sistema de refrigeración", 1, "¿Con qué fluido refrigerante es mayor la variación de la temperatura de entrada al condensador entre verano e invierno?",
 ["Aire atmosférico.", "Agua de río o embalse.", "Agua de una torre de refrigeración.", "Es igual en los tres casos, porque depende solo de $T_{amb}$."], 0,
 "Agua de río o embalse: $T_{er}$ bajo y estable; torre de refrigeración: medio y menos estable; <b>aire atmosférico</b>: altas variaciones entre verano e invierno (Apuntes T3, diap. 22).", "Apuntes T3, diap. 22");
L("T3", "t3-diseno", "Presión del condensador", 2, "El agua de refrigeración entra al condensador a 15 ºC, se calienta 10 K y la diferencia mínima de temperaturas con el vapor que condensa es de 8 K. Con $p_{sat}$(25 ºC) = 3,17 kPa, $p_{sat}$(30 ºC) = 4,25 kPa, $p_{sat}$(33 ºC) = 5,04 kPa y $p_{sat}$(40 ºC) = 7,38 kPa, ¿a qué presión trabaja el condensador?",
 ["5,04 kPa", "3,17 kPa", "4,25 kPa", "7,38 kPa", "1,01 bar"], 0,
 "$$T_6=T_{er}+\\Delta T+\\delta T=15+10+8=33\\ \\text{ºC}\\quad\\Rightarrow\\quad p_6=p_{sat}(33\\ \\text{ºC})=\\boxed{5{,}04\\ \\text{kPa}}$$ Errores típicos: olvidar $\\delta T$ (25 ºC, 3,17 kPa) o tomar la salida del refrigerante, $T_{er}+\\Delta T$, como temperatura de condensación. El condensador trabaja en vacío, muy lejos de la presión atmosférica (Apuntes T3, diap. 22).", "Apuntes T3, diap. 22");
L("T3", "t3-diseno", "Diseño del ciclo simple", 2, "En el diseño de una turbina de vapor de ciclo simple, ¿qué fija la pendiente de la línea de expansión en el diagrama h-s?",
 ["El rendimiento de la turbina.", "La temperatura de entrada, fijada por los materiales de la caldera.", "La presión del condensador, fijada por la refrigeración.", "La tecnología de los escalonamientos de baja presión."], 0,
 "Según los apuntes: la refrigeración fija $p_6$, la tecnología de los escalonamientos de baja fija la humedad admisible, los materiales fijan $T_5$ y <b>el rendimiento de la turbina fija la pendiente</b> de la línea de expansión. Con todo ello queda determinada $p_5$ (Apuntes T3, diap. 23).", "Apuntes T3, diap. 23");
L("T3", "t3-diseno", "Diseño del ciclo simple", 3, "Para un ciclo simple (sin recalentamiento) con temperatura de entrada a la turbina de 550 ºC, ¿qué presión de entrada recogen los apuntes?",
 ["140 bar", "70 bar", "195 bar", "235 bar"], 0,
 "Tabla de la diap. 23: 350 ºC → 32 bar; 450 ºC → 70 bar; <b>550 ºC → 140 bar</b>; 600 ºC → 195 bar. A más temperatura se puede usar más presión sin pasar del título mínimo a la salida. 235 bar (23,5 MPa) es la central de 800 MW de la diap. 29, que tiene recalentamiento (Apuntes T3, diap. 23).", "Apuntes T3, diap. 23");
L("T3", "t3-diseno", "Presión de entrada a la turbina", 3, "¿Cuál de los siguientes <b>no</b> es un inconveniente de aumentar la presión de entrada a la turbina según los apuntes?",
 ["Bajar la temperatura de evaporación del agua.", "Mayor grosor de las tuberías.", "Mayor coste estructural de la caldera.", "Turbina con mayor número de escalonamientos."], 0,
 "Los inconvenientes listados son grosor de tubería, coste estructural de caldera y turbina con más escalonamientos (además de más humedad). Al subir la presión la temperatura de evaporación <b>sube</b>, no baja; y a presiones muy grandes el ciclo pasa a ser supercrítico, sin separación entre líquido y vapor (Apuntes T3, diap. 20).", "Apuntes T3, diap. 20");

/* --- 6. Recalentamiento --- */
L("T3", "t3-recal", "Recalentamiento intermedio", 2, "En una central nuclear, el recalentamiento intermedio del vapor se hace normalmente:",
 ["Con vapor vivo.", "Pasando el vapor por la caldera.", "Con los gases de escape de una turbina de gas.", "No se hace: las centrales nucleares no recalientan."], 0,
 "El recalentamiento puede ser por paso por la caldera o <b>con vapor vivo (nucleares)</b>: en un reactor no hay gases calientes por los que pasar el vapor, así que se recalienta con vapor tomado antes de la turbina (Apuntes T3, diap. 24).", "Apuntes T3, diap. 24");
L("T3", "t3-recal", "Recalentamiento intermedio", 2, "¿Cuántos recalentamientos intermedios puede llegar a tener un ciclo de vapor según los apuntes?",
 ["Hasta dos, en ciclos supercríticos.", "Uno como máximo.", "Entre 4 y 9.", "Uno por cada cuerpo de baja presión."], 0,
 "Puede haber <b>hasta dos</b> recalentamientos intermedios, en ciclos supercríticos. «Entre 4 y 9» es el número habitual de <b>extracciones regenerativas</b>, no de recalentamientos (Apuntes T3, diap. 24 y 28).", "Apuntes T3, diap. 24");
L("T3", "t3-recal", "Efecto del recalentamiento", 2, "Con la misma presión de entrada a la turbina y la misma temperatura de condensación, añadir un recalentamiento intermedio:",
 ["Aumenta el rendimiento, el trabajo específico y el título a la salida.", "Aumenta el trabajo específico y el título, pero reduce siempre el rendimiento.", "Aumenta el rendimiento, pero reduce el trabajo específico.", "Aumenta el rendimiento y reduce el título a la salida."], 0,
 "El efecto es similar a aumentar $T_5$: con mismos $p_5$ y $T_6$, $\\uparrow\\eta$, $\\uparrow w_i$, $\\uparrow x_6$. Reducir el trabajo específico es propio de la <b>regeneración</b>, no del recalentamiento (Apuntes T3, diap. 24).", "Apuntes T3, diap. 24");
L("T3", "t3-recal", "Efecto del recalentamiento", 3, "En el diseño, si se mantienen la temperatura de entrada a la turbina y el título admisible a la salida, el recalentamiento intermedio permite:",
 ["Aumentar la presión de entrada a la turbina, con mayor rendimiento y trabajo específico.", "Reducir la presión del condensador sin que cambie la humedad.", "Bajar la temperatura de entrada sin perder rendimiento.", "Eliminar la bomba de alimentación."], 0,
 "Con mismos $T_5$ y $x_6$: $\\uparrow\\eta$, $\\uparrow w_i$, $\\uparrow p_5$. La figura de la diap. 25 lo muestra con 500 ºC y $x_6$ = 0,90: sin recalentamiento el ciclo simple se queda en 50 bar; con recalentamiento a 50 bar se puede subir a 200 bar (Apuntes T3, diap. 25).", "Apuntes T3, diap. 25");
L("T3", "t3-recal", "Presión de recalentamiento", 3, "En un ciclo con recalentamiento, a igualdad de temperatura de recalentamiento y de gasto, si se <b>aumenta</b> la presión a la que se recalienta:",
 ["Aumenta la humedad a la salida de la turbina de baja.", "Disminuye la humedad a la salida de la turbina de baja.", "No cambia la humedad, porque la fija el condensador.", "Disminuye el rendimiento del ciclo porque se duplica el caudal recalentado."], 0,
 "A la misma temperatura $T_{5'}$, más presión significa menos entropía en $5'$: la expansión de baja empieza más a la izquierda y termina más dentro de la campana, con <b>más humedad</b>. Es el mismo efecto que subir $p_5$ en el ciclo simple ($p_5\\Uparrow\\Rightarrow x_6\\Downarrow$) (Apuntes T3, diap. 20 y 24-25).", "Apuntes T3, diap. 20 y 24-25");
L("T3", "t3-recal", "Rendimiento con recalentamiento", 3, "Ciclo con recalentamiento: entrada a 200 bar y 500 ºC ($h_5$ = 3241,0 kJ/kg); el cuerpo de alta ($\\eta_t$ = 0,88) expande hasta 50 bar, donde la salida isentrópica sería $h_{6's}$ = 2888,0 kJ/kg; se recalienta a 500 ºC ($h_{5'}$ = 3434,5 kJ/kg) y el cuerpo de baja sale a 8 kPa con $h_6$ = 2333,2 kJ/kg. La bomba deja el agua con $h_2$ = 199,1 kJ/kg (consume 25,2 kJ/kg). ¿Cuál es el rendimiento del ciclo?",
 ["0,391", "0,456", "0,398", "0,429", "0,303"], 0,
 "<b>Salida del cuerpo de alta:</b> $h_{6'}=h_5-\\eta_t(h_5-h_{6's})=3241{,}0-0{,}88\\cdot353{,}0=2930{,}4$ kJ/kg. <b>Trabajo de turbina:</b> $$w_t=(h_5-h_{6'})+(h_{5'}-h_6)=310{,}6+1101{,}3=1411{,}9\\ \\text{kJ/kg}$$ <b>Calor aportado</b> (caldera + recalentador): $$q_c=(h_5-h_2)+(h_{5'}-h_{6'})=3041{,}9+504{,}1=3546{,}0\\ \\text{kJ/kg}$$ $$\\eta_i=\\frac{w_t-w_b}{q_c}=\\frac{1411{,}9-25{,}2}{3546{,}0}=\\boxed{0{,}391}$$ Errores típicos: olvidar el calor del recalentador (0,456), olvidar la bomba (0,398) tomar $q_c=h_{5'}-h_2$ (0,429) o contar solo el trabajo del cuerpo de baja (0,303) (Apuntes T3, diap. 16 y 24).", "Apuntes T3, diap. 16 y 24");
L("T3", "t3-recal", "Título con recalentamiento", 3, "En el ciclo anterior, el vapor recalentado ($s_{5'}$ = 6,9778 kJ/kg·K, $h_{5'}$ = 3434,5 kJ/kg) se expande con $\\eta_t$ = 0,88 hasta 8 kPa ($h_f$ = 173,9; $h_g$ = 2576,2 kJ/kg; $s_f$ = 0,5925; $s_g$ = 8,2274 kJ/kg·K). ¿Cuál es el título a la salida?",
 ["0,899", "0,836", "0,950", "0,736", "0,793"], 0,
 "$$x_{6s}=\\frac{s_{5'}-s_f}{s_g-s_f}=\\frac{6{,}9778-0{,}5925}{7{,}6349}=0{,}8363\\qquad h_{6s}=173{,}9+0{,}8363\\cdot2402{,}3=2183{,}0\\ \\text{kJ/kg}$$ $$h_6=h_{5'}-\\eta_t(h_{5'}-h_{6s})=3434{,}5-0{,}88\\cdot1251{,}5=2333{,}2\\ \\text{kJ/kg}$$ $$x_6=\\frac{2333{,}2-173{,}9}{2402{,}3}=\\boxed{0{,}899}$$ Justo el 0,90 de la figura de la diap. 25, Sin recalentar, la expansión desde 200 bar y 500 ºC con el mismo $\\eta_t$ acabaría con $x_6$ = 0,793, por debajo del mínimo admisible (es otra opción trampa). Errores típicos: el isentrópico (0,836) o dividir o multiplicar el título por $\\eta_t$ (0,950 o 0,736) (Apuntes T3, diap. 16 y 25).", "Apuntes T3, diap. 16 y 25");

/* --- 7. Regenerativo --- */
L("T3", "t3-regen", "Objetivo del ciclo regenerativo", 2, "Según los apuntes, el ciclo regenerativo aumenta el rendimiento porque:",
 ["Elimina de la caldera el calentamiento del agua fría, lo que aumenta la temperatura media de aportación de calor.", "Reduce la temperatura media de cesión de calor en el condensador.", "Aumenta el trabajo específico de la turbina.", "Aumenta el título del vapor a la salida de la turbina."], 0,
 "Objetivo: aumentar el rendimiento <b>eliminando de la caldera el calentamiento de agua fría</b>, es decir, subiendo $\\bar T_{a.c.}$. La temperatura de condensación no cambia, el trabajo específico <b>baja</b> (parte del vapor no llega al final) y el título de salida no se modifica (Apuntes T3, diap. 26).", "Apuntes T3, diap. 26");
L("T3", "t3-regen", "Efecto de las extracciones", 3, "Respecto al ciclo simple con el mismo gasto de vapor vivo y los mismos estados, añadir una extracción regenerativa:",
 ["Reduce el trabajo de la turbina, pero reduce más aún el calor aportado: sube el rendimiento.", "Aumenta el trabajo de la turbina y el calor aportado en la misma proporción.", "Mantiene el trabajo de la turbina y reduce el calor aportado.", "Reduce el calor cedido en el condensador, pero también el rendimiento."], 0,
 "Con una extracción $w_t=(h_5-h_a)+(1-\\alpha)(h_a-h_6)\\lt h_5-h_6$: la fracción α deja de expandirse de $a$ a 6. Pero el agua llega más caliente a la caldera y $q_c$ baja proporcionalmente más, así que el rendimiento <b>sube</b> (Apuntes T3, diap. 26-27).", "Apuntes T3, diap. 26-27");
L("T3", "t3-regen", "Calentador de superficie", 2, "En un calentador regenerativo de superficie (cerrado), ¿qué se hace con el vapor extraído una vez condensado?",
 ["Se envía al depósito inmediatamente anterior en presión, previa laminación.", "Se mezcla directamente con el agua de alimentación a la salida del calentador.", "Se envía a la caldera con una bomba propia.", "Se descarga a la atmósfera por el condensador de vahos."], 0,
 "En el intercambiador de <b>superficie</b> el vapor y el agua no se mezclan; tras condensarse, el vapor extraído (purga, $a'$) se envía al <b>depósito inmediatamente anterior en presión</b> previa <b>laminación</b> en una válvula (Apuntes T3, diap. 26).", "Apuntes T3, diap. 26");
L("T3", "t3-regen", "Calentador de mezcla", 2, "¿Cuál de estas afirmaciones sobre el calentador regenerativo de mezcla (abierto) es correcta?",
 ["Se usa como desgasificador y obliga a poner una bomba de alimentación además de la de condensado.", "No necesita bombas adicionales, porque trabaja a la presión de la caldera.", "Las purgas se laminan hacia el condensador.", "En la planta suele haber varios, uno por extracción."], 0,
 "En el de <b>mezcla</b> el vapor extraído se mezcla con el líquido bombeado: a la salida hay líquido saturado a la presión de la extracción, que hay que llevar a presión de caldera con <b>otra bomba</b> ($\\dot W_{b.al.}$ además de $\\dot W_{b.con.}$). Se usa como <b>desgasificador</b>, y de las 4-9 extracciones solo <b>una</b> es de mezcla (Apuntes T3, diap. 27-28).", "Apuntes T3, diap. 27-28");
L("T3", "t3-regen", "Número de extracciones", 1, "En las plantas reales, según los apuntes, el número de extracciones regenerativas es generalmente:",
 ["Entre 4 y 9, con una usada como desgasificador y el resto de superficie.", "Entre 1 y 2, ambas de mezcla.", "Entre 4 y 9, todas de mezcla.", "Una por cada cuerpo de la turbina."], 0,
 "Generalmente <b>entre 4 y 9</b>, con el mismo $\\Delta h$ entre extracciones, <b>una</b> como desgasificador (mezcla) y <b>el resto con intercambiadores de superficie</b>. La central de 800 MW de la diap. 29 tiene 8 calentadores más el desgasificador (Apuntes T3, diap. 28-29).", "Apuntes T3, diap. 28");
L("T3", "t3-regen", "Número de extracciones", 3, "¿Qué ocurre al aumentar el número de extracciones regenerativas?",
 ["El rendimiento aumenta, pero la mejora es cada vez menor.", "El rendimiento aumenta linealmente con el número de extracciones.", "El rendimiento tiene un máximo con dos extracciones y luego baja.", "El rendimiento no cambia; solo mejora el título a la salida."], 0,
 "«A mayor número de extracciones, mayor rendimiento, pero la mejora <b>disminuye</b> con el número de extracciones»: cada extracción adicional aporta menos, y llega un punto en que no compensa el coste de otro calentador (Apuntes T3, diap. 28).", "Apuntes T3, diap. 28");
L("T3", "t3-regen", "Caudales con varias extracciones", 3, "En el esquema de los apuntes con tres extracciones (α a un calentador de superficie de alta, β al desgasificador y γ a un calentador de superficie de baja, cuya purga se lamina al condensador), ¿qué caudal pasa por la bomba de condensado?",
 ["$\\dot m_v(1-\\alpha-\\beta)$", "$\\dot m_v(1-\\alpha-\\beta-\\gamma)$", "$\\dot m_v$", "$\\dot m_v(1-\\gamma)$"], 0,
 "Por el condensador pasa el vapor no extraído, $\\dot m_v(1-\\alpha-\\beta-\\gamma)$, más la purga γ laminada desde el calentador de baja: la bomba de condensado mueve $\\dot m_v(1-\\alpha-\\beta)$ hasta el desgasificador. Allí se juntan β y la purga α, y la bomba de alimentación mueve el gasto completo $\\dot m_v$ (Apuntes T3, diap. 28).", "Apuntes T3, diap. 28");
L("T3", "t3-regen", "Calentador de mezcla", 3, "Un desgasificador recibe vapor extraído a 5 bar con $h_a$ = 2762,3 kJ/kg y agua de la bomba de condensado con $h_2$ = 174,5 kJ/kg. Sale líquido saturado a 5 bar ($h_{1'}$ = 640,2 kJ/kg). ¿Qué fracción α del vapor vivo hay que extraer?",
 ["0,180", "0,219", "0,169", "0,820", "0,239"], 0,
 "Balance del calentador de mezcla por kg de vapor vivo: $$\\alpha\\,(h_a-h_{1'})=(1-\\alpha)\\,(h_{1'}-h_2)\;\\Rightarrow\;\\alpha=\\frac{h_{1'}-h_2}{h_a-h_2}=\\frac{640{,}2-174{,}5}{2762{,}3-174{,}5}=\\frac{465{,}7}{2587{,}8}=\\boxed{0{,}180}$$ Errores típicos: olvidar el factor $(1-\\alpha)$, que da $(h_{1'}-h_2)/(h_a-h_{1'})=0{,}219$, dividir entre $h_a$ (0,169) dar la fracción que no se extrae (0,820) o restar $h_{1'}$ también abajo, $(h_{1'}-h_2)/(h_a-h_{1'}-h_2)=0{,}239$ (Apuntes T3, diap. 27).", "Apuntes T3, diap. 27");
L("T3", "t3-regen", "Calentador de superficie", 3, "En un calentador de superficie, el agua de alimentación se calienta de $h_2$ = 186,4 kJ/kg a $h_{2'}$ = 856,0 kJ/kg con vapor extraído a 20 bar ($h_a$ = 2970,0 kJ/kg), que sale como líquido saturado ($h_{a'}$ = 908,6 kJ/kg) y se lamina al depósito anterior. ¿Qué fracción α de vapor vivo se extrae?",
 ["0,325", "0,241", "0,317", "0,675", "0,259"], 0,
 "Balance del calentador de superficie (el agua que se calienta es todo el gasto): $$\\alpha\\,(h_a-h_{a'})=h_{2'}-h_2\;\\Rightarrow\;\\alpha=\\frac{856{,}0-186{,}4}{2970{,}0-908{,}6}=\\frac{669{,}6}{2061{,}4}=\\boxed{0{,}325}$$ Errores típicos: usar el balance de mezcla, $(h_{2'}-h_2)/(h_a-h_2)=0{,}241$, o dividir entre $h_a-h_{2'}$ (0,317) (Apuntes T3, diap. 26).", "Apuntes T3, diap. 26");
L("T3", "t3-regen", "Trabajo con extracción", 3, "Una turbina recibe vapor con $h_5$ = 3375,1 kJ/kg, extrae una fracción α = 0,18 en un punto con $h_a$ = 2780,0 kJ/kg y el resto sale al condensador con $h_6$ = 2260,6 kJ/kg. ¿Cuál es el trabajo de la turbina por kg de vapor vivo?",
 ["1021,0 kJ/kg", "1114,5 kJ/kg", "913,9 kJ/kg", "1007,4 kJ/kg", "688,6 kJ/kg"], 0,
 "Todo el vapor se expande de 5 a $a$; solo $(1-\\alpha)$ sigue de $a$ a 6: $$w_t=(h_5-h_a)+(1-\\alpha)(h_a-h_6)=595{,}1+0{,}82\\cdot519{,}4=\\boxed{1021{,}0\\ \\text{kJ/kg}}$$ Errores típicos: ignorar la extracción (1114,5), aplicar $(1-\\alpha)$ a toda la expansión (913,9) o al primer tramo en lugar del segundo (1007,4) (Apuntes T3, diap. 26-27).", "Apuntes T3, diap. 26-27");
L("T3", "t3-regen", "Ejemplos de turbinas de vapor", 2, "La central térmica de 800 MW de los apuntes trabaja con $p_5$ = 23,5 MPa y $T_5$ = 560 ºC. ¿Qué se puede afirmar de ella?",
 ["Es un ciclo supercrítico con recalentamiento y numerosos calentadores regenerativos.", "Es un ciclo simple, porque la tabla de diseño permite 235 bar a 560 ºC.", "Es un ciclo subcrítico sin desgasificador.", "Es una central nuclear, porque supera los 750 MW."], 0,
 "23,5 MPa = 235 bar, por encima de los 195 bar que la tabla del ciclo simple admite incluso a 600 ºC: necesita <b>recalentamiento</b> (cuerpo de alta, recalentamiento y cuerpo de media). Con presiones tan grandes el ciclo es <b>supercrítico</b>, y el esquema tiene ocho calentadores más el desgasificador (Apuntes T3, diap. 20, 23 y 29).", "Apuntes T3, diap. 29");

/* --- 8. Montaje --- */
L("T3", "t3-montaje", "Estructura en cuerpos", 1, "¿Por qué los cuerpos de baja presión de las turbinas de vapor tienen casi siempre flujos contrapuestos?",
 ["Para contrarrestar los empujes axiales.", "Para permitir la admisión parcial.", "Para reducir la erosión por gotas.", "Para poder montar los álabes en tambor."], 0,
 "La estructura es de 1, 2 o 3 secciones (alta/media/baja), cada una puede tener varias turbinas en paralelo, y los cuerpos de baja tienen casi siempre <b>flujos contrapuestos, que contrarrestan los empujes axiales</b> (Apuntes T3, diap. 31).", "Apuntes T3, diap. 31");
L("T3", "t3-montaje", "Montaje en discos y en tambor", 2, "¿Qué tipo de montaje del rotor permite la admisión parcial y no tiene empuje axial?",
 ["Montaje en discos, propio de las turbinas de acción.", "Montaje en tambor, propio de las turbinas de reacción.", "Montaje en discos, propio de las turbinas de reacción.", "Montaje en tambor, propio de las turbinas de acción."], 0,
 "<b>Discos</b> (y diafragmas): turbinas de <b>acción</b>, mayor salto de presión por escalonamiento, <b>admisión parcial</b>, <b>sin empuje axial</b>. <b>Tambor</b>: turbinas de <b>reacción</b>, rotor y estator similares, más escalonamientos (cuerpos más largos o más cuerpos) y <b>empuje axial</b> (Apuntes T3, diap. 31).", "Apuntes T3, diap. 31");
L("T3", "t3-montaje", "Fijación de los álabes", 3, "¿Qué fijación de los álabes al rotor se usa en las últimas etapas de baja presión y facilita su sustitución?",
 ["Montaje en horquilla (radial) con pasadores.", "Montaje axial con raíz de abeto.", "Montaje tangencial en cola de milano.", "Zunchado con alambres de amarre."], 0,
 "Raíz de abeto (axial): álabes con mucha carga. Cola de milano (tangencial): álabes cortos de alta/media, ranura torneada de bajo coste. <b>Horquilla con pasadores (radial)</b>: <b>últimas etapas</b> (baja) y <b>fácil sustitución</b> de álabes. El zunchado no es una fijación al rotor, sino una unión entre álabes (Apuntes T3, diap. 32-33).", "Apuntes T3, diap. 33");
L("T3", "t3-montaje", "Unión entre álabes", 2, "¿Qué inconveniente tiene unir los álabes mediante zunchado (alambres de amarre) frente a una llanta?",
 ["Introduce pérdidas aerodinámicas y concentración de tensiones.", "No reduce las vibraciones.", "Aumenta las pérdidas intersticiales en la punta, que la llanta elimina por completo.", "Impide apilar los álabes por paquetes."], 0,
 "El zunchado reduce vibraciones y se apila por paquetes, pero produce <b>pérdidas aerodinámicas y concentración de tensiones</b>. La llanta incorporada o remachada da rigidez y <b>reduce</b> las pérdidas intersticiales (no las elimina por completo) (Apuntes T3, diap. 32).", "Apuntes T3, diap. 32");
L("T3", "t3-montaje", "Carcasas", 3, "En las carcasas de las turbinas de vapor, ¿cuál es la solución que dan los apuntes para el cuerpo de <b>alta</b> presión?",
 ["Doble carcasa, interior y exterior, para repartir tensiones y reducir el espesor de las bridas.", "Carcasa de chapa soldada, para reducir peso.", "Carcasa de una pieza sin partir, para evitar fugas por el plano de junta.", "Doble carcasa para poder trabajar en vacío sin que entre aire."], 0,
 "Todas las carcasas van <b>partidas por el plano horizontal</b> para montar el rotor, unidas con bridas y espárragos enormes apretados en caliente. En <b>alta</b>: <b>doble carcasa</b> (reparto de tensiones y menos espesor de bridas, menos tensiones térmicas). En <b>baja</b>: carcasa de <b>chapa soldada</b> (Apuntes T3, diap. 34).", "Apuntes T3, diap. 34");
L("T3", "t3-montaje", "Cierres laberínticos", 3, "En el cierre laberíntico del eje de un cuerpo de <b>baja</b> presión:",
 ["Se inyecta vapor de sellado y la mezcla de vapor y aire se lleva a un condensador de vahos ligeramente por debajo de la presión atmosférica.", "El vapor que se escapa se recoge en cámaras intermedias y se lleva a puntos de menor presión.", "No hace falta cierre, porque la presión interior es casi la atmosférica.", "Se inyecta aire comprimido para impedir que salga vapor."], 0,
 "En baja presión la carcasa está en <b>vacío</b>: el objetivo es <b>evitar la entrada de aire</b>, así que se inyecta vapor de sellado y la mezcla vapor-aire va a un <b>condensador de vahos</b> ligeramente por debajo de la atmosférica. Recoger el vapor en cámaras intermedias y llevarlo a puntos de menor presión es lo del eje de <b>alta</b> (evitar salida de vapor) (Apuntes T3, diap. 35).", "Apuntes T3, diap. 35");
L("T3", "t3-montaje", "Erosión por gotas", 1, "¿En qué zona de los álabes de baja presión impactan las gotas de agua condensadas, según los apuntes?",
 ["En la zona alta del álabe (por la fuerza centrífuga), en el dorso.", "En la raíz del álabe, en la cara de presión.", "En el borde de salida, a media altura.", "Uniformemente en toda la cara de presión."], 0,
 "Las gotas, formadas tras la zona de Wilson, impactan sobre la <b>zona alta</b> del álabe (fuerza centrífuga), <b>en el dorso</b>. Se protege con zona <b>endurecida</b> o capa de <b>estelita</b> (Apuntes T3, diap. 36).", "Apuntes T3, diap. 36");
L("T3", "t3-montaje", "Erosión por gotas", 2, "Por un cambio de diseño, el título a la salida de la turbina de baja pasa de 0,93 a 0,88. Con la regla de los apuntes para el efecto de la humedad, ¿cuánto baja aproximadamente el rendimiento de los últimos escalonamientos?",
 ["Unos 5 puntos porcentuales.", "Unos 12 puntos porcentuales.", "Unos 0,5 puntos porcentuales.", "Nada: la humedad solo produce erosión."], 0,
 "La humedad pasa de 7 % a 12 %: 5 puntos más. Con la regla de los apuntes, <b>1 % de rendimiento por cada 1 % de humedad</b>, el rendimiento baja ≈ <b>5 puntos</b>, por el impacto y por el efecto fluidodinámico de las gotas, además de la erosión. 12 puntos sería la humedad total, no el cambio (Apuntes T3, diap. 36).", "Apuntes T3, diap. 36");

/* ===================== TARJETAS ===================== */
C("T3", "t3-maquinas", "Rendimiento interno: motora vs generadora", "Motora: $\\eta_i=\\dfrac{h_A-h_B}{h_A-h_{Bs}}$ (real arriba). Generadora: $\\eta_i=\\dfrac{h_{Bs}-h_A}{h_B-h_A}$ (real abajo). Siempre entre las mismas $p_A$ y $p_B$.");
C("T3", "t3-maquinas", "Potencia efectiva: motora vs generadora", "Motora (entregada): $\\dot W_e=\\dot W_i-\\dot W_{pm}=\\eta_m\\dot W_i$. Generadora (absorbida): $\\dot W_e=\\dot W_i+\\dot W_{pm}=\\dot W_i/\\eta_m$.");
C("T3", "t3-maquinas", "Potencia de pérdidas mecánicas", "$\\dot W_{pm}=\\dot W_{roz}+\\dot W_{aux}$: rozamiento en cojinetes y cierres + accionamiento de auxiliares.");
C("T3", "t3-ciclos", "Trabajo neto y rendimiento del ciclo", "$w_i=w_T-w_{C/B}=q_{a.c.}-q_{c.c.}$; $\\eta_i=w_i/q_{a.c.}=\\dot W_i/\\dot Q_{a.c.}$. Turbomáquinas adiabáticas ($w=\\Delta h$), intercambiadores sin trabajo ($q=\\Delta h$).");
C("T3", "t3-ciclos", "Ciclo de Carnot equivalente", "Mismo calor aportado y cedido (mismo trabajo y rendimiento). $\\bar T_{a.c.}=\\dfrac{1}{s_3-s_2}\\int_2^3T\\,ds$; $\\eta=1-\\bar T_{c.c.}/\\bar T_{a.c.}$.");
C("T3", "t3-ciclos", "Beneficio de una modificación", "$B=\\dfrac{\\dot Q_{orig}-\\dot Q_{modif}}{\\dot Q_{orig}}$ a igual potencia $=1-\\eta_{orig}/\\eta_{modif}$.");
C("T3", "t3-ciclos", "Rendimientos típicos", "Turbina 0,80-0,93 · compresor 0,75-0,87 · MCIA 0,35-0,52 · <b>TV 0,35-0,45</b> ($\\dot W_e/\\dot Q_{g.v.}$) · TG 0,30-0,40 ($\\dot W_e/\\dot m_fH_c$).");
C("T3", "t3-planta", "Características de la planta de vapor", "Combustión externa, ciclo cerrado, cualquier fuente térmica, potencia específica baja (por volumen), un eje, turbomáquinas, hasta 1750 MW (nucleares).");
C("T3", "t3-planta", "Aplicaciones de la turbina de vapor", "Generación eléctrica (carbón, nuclear, biomasa, geotermia, solar de concentración, ciclos combinados), cogeneración (district heating, industria química), propulsión marina (metaneros, nuclear), bombas auxiliares de centrales.");
C("T3", "t3-planta", "Puntos 1-6 de la planta", "1 líquido sat. (condensador) → bomba → 2 → economizador → 3 líquido sat. (calderín) → evaporador → 4 vapor sat. → sobrecalentador → 5 → turbina → 6 → condensador.");
C("T3", "t3-simple", "Trabajos del ciclo simple", "$w_t=h_5-h_6=\\eta_t(h_5-h_{6s})$; $w_b=h_2-h_1=\\dfrac{p_2-p_1}{\\rho_a\\eta_b}$.");
C("T3", "t3-simple", "Rendimiento del ciclo simple", "$\\eta_i=\\dfrac{(h_5-h_6)-(h_2-h_1)}{h_5-h_2}$");
C("T3", "t3-simple", "Indicadores de comportamiento", "$\\eta_i$ (consumo de fuente), $w_i$ (tamaño; importancia limitada en combustión externa) y $x_6$ (erosión; mínimo ≈ 0,85-0,90).");
C("T3", "t3-diseno", "Efecto de $T_5\\uparrow$", "$\\eta\\Uparrow$, $w\\Uparrow$, $x_6\\Uparrow$. Todo positivo; límite: coste de materiales (gran superficie de caldera).");
C("T3", "t3-diseno", "Efecto de $p_5\\uparrow$", "$\\eta\\Uparrow$, $w\\Uparrow\\Downarrow$, $x_6\\Downarrow$. Lleva a supercríticos; inconvenientes: grosor de tubería, coste de caldera, más escalonamientos.");
C("T3", "t3-diseno", "Efecto de $p_6\\downarrow$", "$\\eta\\Uparrow$ (notablemente), $w\\Uparrow$, $x_6\\Downarrow$ (ligeramente). Límite: temperatura del refrigerante.");
C("T3", "t3-diseno", "Temperatura de condensación", "$T_6=T_{er}+\\Delta T+\\delta T$; $T_{er}=f(T_{amb})$, $\\Delta T=f(\\dot m_r/\\dot m_v)$, $\\delta T=f(1/A,U)$. Río: bajo y estable; torre: medio; aire: muy variable.");
C("T3", "t3-diseno", "Tabla del ciclo simple ($T_5$ → $p_5$)", "350 ºC → 32 bar · 450 ºC → 70 bar · 550 ºC → 140 bar · 600 ºC → 195 bar.");
C("T3", "t3-recal", "Recalentamiento intermedio", "A mitad de expansión (entre alta y media/baja), hasta una T parecida a $T_5$; por caldera o con vapor vivo (nucleares); hasta 2 (supercríticos). Mismos $p_5,T_6$: η↑ w↑ $x_6$↑. Mismos $T_5,x_6$: η↑ w↑ $p_5$↑.");
C("T3", "t3-regen", "Balances de los calentadores", "Superficie: $\\alpha(h_a-h_{a'})=h_{2'}-h_2$ (purga laminada al depósito anterior). Mezcla: $\\alpha(h_a-h_{1'})=(1-\\alpha)(h_{1'}-h_2)$ (desgasificador, otra bomba).");
C("T3", "t3-regen", "Extracciones regenerativas en plantas reales", "4-9, mismo Δh entre ellas, una de mezcla (desgasificador) y el resto de superficie. Más extracciones → más η, con mejora decreciente.");
C("T3", "t3-montaje", "Discos vs tambor", "Discos: acción, más salto por escalonamiento, admisión parcial, sin empuje axial. Tambor: reacción, más escalonamientos, empuje axial.");
C("T3", "t3-montaje", "Fijación de álabes", "Raíz de abeto (axial): mucha carga · cola de milano (tangencial): álabes cortos, barata · horquilla con pasadores (radial): últimas etapas, fácil sustitución.");
C("T3", "t3-montaje", "Erosión por gotas", "Gotas tras la zona de Wilson; impactan en la zona alta del álabe, en el dorso; −1 % de η por cada 1 % de humedad; protección: endurecido o estelita.");

/* ===================== EJERCICIOS ===================== */
DRILLS.push({ id: "t3-c-motgen", type: "classify", tema: "T3", sec: "t3-maquinas", title: "¿Máquina motora o generadora?", cats: ["Motora (turbina)", "Generadora (bomba, compresor)"], items: [
  ["wᵢ = h entrada − h salida", 0], ["wᵢ = h salida − h entrada", 1], ["ηᵢ = Δh real / Δh isentrópico", 0], ["ηᵢ = Δh isentrópico / Δh real", 1],
  ["Potencia efectiva = interna − pérdidas mecánicas", 0], ["Potencia efectiva = interna / ηm", 1], ["ηm = 1 − pérdidas / potencia interna", 0], ["ηm = 1 − pérdidas / potencia efectiva", 1],
  ["Rendimiento típico 0,80-0,93", 0], ["Rendimiento típico 0,75-0,87", 1], ["Potencia efectiva «entregada en el eje»", 0], ["Potencia efectiva «absorbida por el eje»", 1] ] });
DRILLS.push({ id: "t3-c-efectos", type: "classify", tema: "T3", sec: "t3-diseno", title: "¿Qué le pasa al título x₆ a la salida de la turbina?", cats: ["x₆ sube (más seco)", "x₆ baja (más húmedo)"], items: [
  ["Subir T₅", 0], ["Subir p₅ con la misma T₅", 1], ["Bajar p₆", 1], ["Añadir un recalentamiento con mismos p₅ y T₆", 0],
  ["Subir la presión de recalentamiento con la misma temperatura de recalentamiento", 1], ["Mejorar el rendimiento interno de la turbina", 0], ["Pasar a un ciclo supercrítico sin recalentar", 1], ["Usar refrigerante más frío (río en vez de aire en verano)", 1] ] });
DRILLS.push({ id: "t3-m-planta", type: "match", tema: "T3", sec: "t3-planta", title: "Equipos y puntos de la planta", pairs: [
  ["Bomba de condensado", "1 → 2: eleva el líquido a presión de caldera"], ["Economizador", "2 → 3: calienta el líquido hasta saturación"], ["Evaporador", "3 → 4: vaporiza en las paredes del hogar"],
  ["Calderín", "Separa líquido saturado (3) y vapor saturado (4)"], ["Sobrecalentador", "4 → 5: vapor sobrecalentado («vapor vivo»)"], ["Condensador", "6 → 1: cede calor al fluido refrigerante"] ] });
DRILLS.push({ id: "t3-c-regen", type: "classify", tema: "T3", sec: "t3-regen", title: "¿Calentador de superficie o de mezcla?", cats: ["Superficie (cerrado)", "Mezcla (abierto)"], items: [
  ["α·(hₐ − hₐ′) = h₂′ − h₂", 0], ["α·(hₐ − h₁′) = (1 − α)·(h₁′ − h₂)", 1], ["Hace de desgasificador", 1], ["La purga se lamina al depósito anterior en presión", 0],
  ["Necesita una bomba más a su salida", 1], ["Suele haber varios en la planta", 0], ["Sale líquido saturado a la presión de la extracción", 1], ["Vapor y agua separados por tubos", 0] ] });
DRILLS.push({ id: "t3-m-montaje", type: "match", tema: "T3", sec: "t3-montaje", title: "Soluciones de montaje", pairs: [
  ["Montaje en discos", "Acción, admisión parcial, sin empuje axial"], ["Montaje en tambor", "Reacción, más escalonamientos, empuje axial"], ["Raíz de abeto", "Álabes con mucha carga"],
  ["Cola de milano", "Álabes cortos de alta/media, bajo coste"], ["Horquilla con pasadores", "Últimas etapas, fácil sustitución"], ["Doble carcasa", "Alta presión: reparto de tensiones, bridas más finas"],
  ["Condensador de vahos", "Cierre de baja: extrae la mezcla vapor-aire"], ["Estelita", "Protege la zona de impacto de las gotas"] ] });

/* ===================== MNEMOTECNIA ===================== */
MNEMO["t3-maquinas"] = ["«Lo real siempre es peor»: en la motora lo real va arriba (sale menos), en la generadora abajo (cuesta más). Así ningún rendimiento pasa de 1.", "Pérdidas mecánicas: la turbina las <b>resta</b> (da menos en el eje), el compresor las <b>suma</b> (pide más en el eje)."];
MNEMO["t3-ciclos"] = ["Carnot equivalente: «mismo calor, misma η»; sus focos son las temperaturas <b>medias</b>, $\\bar T=\\Delta h/\\Delta s$.", "Toda mejora del ciclo de vapor se explica con dos palancas: subir $\\bar T_{a.c.}$ o bajar $\\bar T_{c.c.}$."];
MNEMO["t3-planta"] = ["Recorrido del agua: «<b>B-E-C-E-S-T-C</b>»: Bomba, Economizador, Calderín, Evaporador, Sobrecalentador, Turbina, Condensador.", "Puntos impares en la caldera: 3 líquido saturado, 5 vapor vivo; el 4 es el vapor saturado entre ambos."];
MNEMO["t3-simple"] = ["$q_c$ empieza en el <b>2</b> (tras la bomba), no en el 1.", "El título real es más alto que el isentrópico: las pérdidas «secan» el vapor (más entalpía a la salida)."];
MNEMO["t3-diseno"] = ["$T_5$: «todo sube» (η, w, x). $p_5$: «η sube, x baja, w duda». $p_6$ abajo: «η sube mucho, x baja poco».", "$T_6$ = «entrada + calentamiento + pinch»: $T_{er}$ (ambiente), $\\Delta T$ (caudal de refrigerante), $\\delta T$ (área)."];
MNEMO["t3-recal"] = ["Recalentar es «volver a subir a $T_5$ a mitad de camino»: equivale a más $T_5$ (η, w y x suben).", "Más presión de recalentamiento = salida más húmeda, igual que más $p_5$."];
MNEMO["t3-regen"] = ["Regenerar: «el vapor calienta su propia agua»; sube η pero baja w.", "Superficie = Separados (purga laminada); Mezcla = Mezclados (desgasificador + otra bomba). «4 a 9 extracciones, 1 desgasificador»."];
MNEMO["t3-montaje"] = ["<b>D</b>iscos = acción, «<b>D</b>escarga parcial» (admisión parcial) y sin empuje; <b>T</b>ambor = reacción y «<b>T</b>irón» axial.", "Abeto aguanta carga, milano es barato y corto, horquilla para la última etapa (se cambia fácil)."];

/* ===================== ESQUEMAS Y FIGURAS ===================== */
(function () {
const MK = `<defs><marker id="t3ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#475569"/></marker><marker id="t3ark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c2413b"/></marker><marker id="t3arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#1d4ed8"/></marker></defs>`;
const W = (vb, label, body) => `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}">${MK}${body}</svg>`;
const T = (x, y, s, cls = "small2", a = "start") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${a}">${s}</text>`;

/* 1 · Motora frente a generadora en h-s */
DIAGRAMS.push({ sec: "t3-maquinas", h4: "Motora frente a generadora", cap: "Expansión (turbina) y compresión (compresor) en el diagrama h-s, entre las mismas isobaras. En la <b>motora</b> el punto real B queda a la derecha y por encima de B<sub>s</sub>: se obtiene menos salto que el isentrópico (η = Δh real/Δh s). En la <b>generadora</b> B también queda por encima de B<sub>s</sub>: hace falta más salto que el isentrópico (η = Δh s/Δh real). Diap. 4-5.", svg: W("0 0 540 262", "Diagramas h-s de expansión en turbina y compresión en compresor con los puntos reales e isentrópicos", `
<line x1="40" y1="225" x2="250" y2="225" class="ax" marker-end="url(#t3ar)"/><line x1="40" y1="225" x2="40" y2="25" class="ax" marker-end="url(#t3ar)"/>
${T(252, 240, "s")}${T(30, 28, "h", "small2", "end")}${T(145, 18, "Motora (turbina)", "tb", "middle")}
<line x1="60" y1="90" x2="235" y2="38.5" stroke="#94a3b8" stroke-width="1.5"/>${T(236, 34, "p<tspan font-size='8'>A</tspan>")}
<line x1="60" y1="190" x2="235" y2="138.5" stroke="#94a3b8" stroke-width="1.5"/>${T(236, 134, "p<tspan font-size='8'>B</tspan>")}
<line x1="110" y1="75.3" x2="110" y2="175.3" class="dash" stroke="#1d4ed8"/>
<line x1="110" y1="75.3" x2="150" y2="163.5" stroke="#c2413b" stroke-width="2.5" marker-end="url(#t3ark)"/>
<circle cx="110" cy="75.3" r="4" fill="#1e293b"/>${T(100, 70, "A", "tb", "end")}
<circle cx="110" cy="175.3" r="4" fill="#1d4ed8"/>${T(104, 192, "B<tspan font-size='8'>s</tspan>", "tb", "end")}
<circle cx="150" cy="163.5" r="4" fill="#c2413b"/>${T(158, 176, "B", "tb")}
<line x1="150" y1="163.5" x2="200" y2="163.5" class="dash"/><line x1="110" y1="75.3" x2="200" y2="75.3" class="dash"/><line x1="110" y1="175.3" x2="225" y2="175.3" class="dash"/>
<line x1="200" y1="77" x2="200" y2="161" stroke="#c2413b" stroke-width="1.6" marker-start="url(#t3ark)" marker-end="url(#t3ark)"/>${T(196, 118, "Δh real", "small2 ko", "end")}
<line x1="225" y1="77" x2="225" y2="173" stroke="#1d4ed8" stroke-width="1.6" marker-start="url(#t3arb)" marker-end="url(#t3arb)"/>${T(229, 106, "Δh", "small2")}${T(229, 119, "isentr.", "small2")}
${T(145, 252, "η = Δh real / Δh s  (real arriba)", "small2 tb", "middle")}
<line x1="300" y1="225" x2="510" y2="225" class="ax" marker-end="url(#t3ar)"/><line x1="300" y1="225" x2="300" y2="25" class="ax" marker-end="url(#t3ar)"/>
${T(512, 240, "s")}${T(290, 28, "h", "small2", "end")}${T(405, 18, "Generadora (compresor)", "tb", "middle")}
<line x1="320" y1="205" x2="495" y2="159" stroke="#94a3b8" stroke-width="1.5"/>${T(497, 158, "p<tspan font-size='8'>A</tspan>")}
<line x1="320" y1="105" x2="495" y2="59" stroke="#94a3b8" stroke-width="1.5"/>${T(497, 58, "p<tspan font-size='8'>B</tspan>")}
<line x1="360" y1="194.5" x2="360" y2="94.5" class="dash" stroke="#1d4ed8"/>
<line x1="360" y1="194.5" x2="398" y2="86" stroke="#c2413b" stroke-width="2.5" marker-end="url(#t3ark)"/>
<circle cx="360" cy="194.5" r="4" fill="#1e293b"/>${T(352, 210, "A", "tb", "end")}
<circle cx="360" cy="94.5" r="4" fill="#1d4ed8"/>${T(352, 92, "B<tspan font-size='8'>s</tspan>", "tb", "end")}
<circle cx="398" cy="84.5" r="4" fill="#c2413b"/>${T(396, 74, "B", "tb", "end")}
<line x1="398" y1="84.5" x2="470" y2="84.5" class="dash"/><line x1="360" y1="194.5" x2="470" y2="194.5" class="dash"/><line x1="360" y1="94.5" x2="445" y2="94.5" class="dash"/>
<line x1="470" y1="86" x2="470" y2="193" stroke="#c2413b" stroke-width="1.6" marker-start="url(#t3ark)" marker-end="url(#t3ark)"/>${T(474, 136, "Δh", "small2 ko")}${T(474, 149, "real", "small2 ko")}
<line x1="445" y1="96" x2="445" y2="193" stroke="#1d4ed8" stroke-width="1.6" marker-start="url(#t3arb)" marker-end="url(#t3arb)"/>${T(441, 140, "Δh s", "small2", "end")}
${T(405, 252, "η = Δh s / Δh real  (real abajo)", "small2 tb", "middle")}`) });

/* 2 · Carnot equivalente */
DIAGRAMS.push({ sec: "t3-ciclos", h4: "Ciclo de Carnot equivalente", cap: "A la izquierda, un ciclo de vapor en T-s: el calor se aporta de 2 a 3 a temperatura variable y se cede de 4 a 1 a temperatura constante. A la derecha, su Carnot equivalente: un rectángulo con el mismo calor aportado (misma área bajo la línea superior) y el mismo cedido, con focos a las <b>temperaturas medias</b> T̄<sub>a.c.</sub> y T̄<sub>c.c.</sub>. Mismo trabajo, mismo rendimiento: η = 1 − T̄<sub>c.c.</sub>/T̄<sub>a.c.</sub> (diap. 8).", svg: W("0 0 540 250", "Ciclo de vapor y su ciclo de Carnot equivalente en el diagrama T-s", `
<line x1="30" y1="215" x2="250" y2="215" class="ax" marker-end="url(#t3ar)"/><line x1="30" y1="215" x2="30" y2="20" class="ax" marker-end="url(#t3ar)"/>${T(252, 230, "s")}${T(22, 24, "T", "small2", "end")}
<path d="M60 190 L62 172 C90 150 110 128 120 105 L175 105 C190 95 205 60 215 40 L215 190 Z" fill="#fde2e1" stroke="none" opacity=".6"/>
<path d="M60 190 L62 172 C90 150 110 128 120 105 L175 105 C190 95 205 60 215 40 L215 190 Z" fill="none" stroke="#1d4ed8" stroke-width="2.4" stroke-linejoin="round"/>
${T(54, 196, "1", "tb", "end")}${T(56, 172, "2", "tb", "end")}${T(219, 38, "3", "tb")}${T(219, 196, "4", "tb")}
<line x1="62" y1="111" x2="215" y2="111" stroke="#c2413b" stroke-width="1.6" stroke-dasharray="6 4"/>${T(236, 115, "T̄ a.c.", "small2 ko")}
${T(236, 194, "T̄ c.c.", "small2")}
${T(140, 245, "Ciclo real (aporte a T variable)", "small2 tb", "middle")}
<line x1="300" y1="215" x2="520" y2="215" class="ax" marker-end="url(#t3ar)"/><line x1="300" y1="215" x2="300" y2="20" class="ax" marker-end="url(#t3ar)"/>${T(522, 230, "s")}${T(292, 24, "T", "small2", "end")}
<rect x="332" y="111" width="153" height="79" fill="#fde2e1" opacity=".6" stroke="#c2413b" stroke-width="2.4"/>
<path d="M332 111H485" stroke="#c2413b" stroke-width="3"/>${T(408, 104, "T̄ a.c. = q a.c./(s3 − s2)", "small2 ko", "middle")}
${T(408, 205, "T̄ c.c. = T del condensador", "small2", "middle")}
<line x1="332" y1="190" x2="332" y2="215" class="dash"/><line x1="485" y1="190" x2="485" y2="215" class="dash"/>
${T(408, 155, "w = mismo área", "small2 tb", "middle")}
${T(408, 245, "Carnot equivalente: η = 1 − T̄ c.c./T̄ a.c.", "small2 tb", "middle")}`) });

/* 3 · Ciclo simple en T-s con equipos */
DIAGRAMS.push({ sec: "t3-planta", h4: "El ciclo en los diagramas T-s y h-s", cap: "Esquema del ciclo simple en T-s con la numeración de los apuntes y el equipo de cada tramo: bomba (1-2, casi un punto), economizador (2-3), evaporador (3-4, escalón a T<sub>sat</sub>(p<sub>5</sub>)), sobrecalentador (4-5), turbina real (5-6, con 6s el final isentrópico) y condensador (6-1). Diap. 13-16.", svg: W("0 0 540 262", "Ciclo de Rankine simple con sobrecalentamiento en el diagrama T-s", `
<line x1="40" y1="230" x2="520" y2="230" class="ax" marker-end="url(#t3ar)"/><line x1="40" y1="230" x2="40" y2="15" class="ax" marker-end="url(#t3ar)"/>${T(522, 246, "s")}${T(32, 20, "T", "small2", "end")}
<path d="M60 225 C120 150 170 70 245 55 C320 70 380 150 470 225" fill="none" stroke="#1e293b" stroke-width="1.8"/>${T(245, 48, "punto crítico", "small2 mut", "middle")}
<path d="M90 196 L92 186 C110 160 130 125 150 105 L330 105 C350 80 370 50 390 35 L405 196 Z" fill="none" stroke="#1d4ed8" stroke-width="2.6" stroke-linejoin="round"/>
<line x1="390" y1="35" x2="390" y2="196" class="dash"/>
<circle cx="90" cy="196" r="3.5" fill="#1d4ed8"/><circle cx="92" cy="186" r="3.5" fill="#1d4ed8"/><circle cx="150" cy="105" r="3.5" fill="#1d4ed8"/><circle cx="330" cy="105" r="3.5" fill="#1d4ed8"/><circle cx="390" cy="35" r="3.5" fill="#1d4ed8"/><circle cx="405" cy="196" r="3.5" fill="#1d4ed8"/><circle cx="390" cy="196" r="3" fill="#94a3b8"/>
${T(84, 210, "1", "tb", "end")}${T(84, 184, "2", "tb", "end")}${T(144, 100, "3", "tb", "end")}${T(336, 100, "4", "tb")}${T(396, 32, "5", "tb")}${T(411, 210, "6", "tb")}${T(386, 212, "6s", "small2 mut", "end")}
${T(60, 160, "bomba 1-2", "small2 ko", "end")}${T(112, 140, "economizador", "small2", "end")}${T(240, 98, "evaporador 3-4 (calderín)", "small2", "middle")}
${T(400, 62, "sobrecalentador 4-5", "small2")}${T(412, 120, "turbina 5-6", "small2 ko")}${T(248, 222, "condensador 6-1 (T sat del condensador)", "small2", "middle")}`) });

/* 4 · Tabla de efectos */
const up = (x, y, c = "#0f8a5f") => `<path d="M${x - 8} ${y + 5}L${x} ${y - 7}L${x + 8} ${y + 5}Z" fill="${c}"/>`;
const dn = (x, y, c = "#c2413b") => `<path d="M${x - 8} ${y - 5}L${x} ${y + 7}L${x + 8} ${y - 5}Z" fill="${c}"/>`;
const ud = (x, y) => `<path d="M${x - 15} ${y + 5}L${x - 7} ${y - 7}L${x + 1} ${y + 5}Z" fill="#0f8a5f"/><path d="M${x + 1} ${y - 5}L${x + 9} ${y + 7}L${x + 17} ${y - 5}Z" fill="#c2413b"/>`;
const rows = [["T₅ ↑ (diap. 19)", up, up, up, "materiales de la caldera"], ["p₅ ↑ (diap. 20)", up, ud, dn, "tubería, caldera, escalonamientos"], ["p₆ ↓ (diap. 21)", up, up, dn, "T del refrigerante; x₆ baja poco"], ["Recalentamiento (diap. 24)", up, up, up, "con mismos p₅ y T₆"], ["Regeneración (diap. 26-28)", up, dn, null, "x₆ no cambia; mejora decreciente"]];
DIAGRAMS.push({ sec: "t3-diseno", h4: "Diseño del ciclo simple", cap: "Resumen de los efectos de cada variable de diseño y de las dos modificaciones del ciclo sobre el rendimiento η, el trabajo específico w y el título a la salida x₆, con su límite principal. Verde: sube; rojo: baja; las dos flechas de p₅ indican que el trabajo puede subir o bajar.", svg: W("0 0 600 250", "Tabla de efectos de las variables de diseño sobre rendimiento, trabajo y título", `
${T(20, 26, "Cambio", "tb")}${T(240, 26, "η", "tb", "middle")}${T(290, 26, "w", "tb", "middle")}${T(340, 26, "x₆", "tb", "middle")}${T(375, 26, "Límite / nota", "tb")}
${rows.map((r, i) => { const y = 60 + i * 40; return `<rect x="12" y="${y - 20}" width="576" height="34" rx="6" fill="${i % 2 ? "#f8fafc" : "#eef3fb"}"/>${T(20, y + 2, r[0], "small2 tb")}${r[1](240, y - 3)}${r[2](290, y - 3)}${r[3] ? r[3](340, y - 3) : T(340, y + 2, "=", "tb", "middle")}${T(375, y + 2, r[4], "small2")}`; }).join("")}`) });

/* 5 · Temperatura de condensación */
DIAGRAMS.push({ sec: "t3-diseno", h4: "Temperatura de condensación y sistema de refrigeración", cap: "Diagrama T-q del condensador como en la diap. 22, con los números del problema de la batería de preguntas: el refrigerante entra a T<sub>er</sub> = 15 ºC, se calienta ΔT = 10 K y queda δT = 8 K por debajo del vapor, que condensa a T<sub>6</sub> = 33 ºC (p<sub>6</sub> ≈ 5 kPa). Más caudal de refrigerante reduce ΔT; más área o mejor U reducen δT.", svg: W("0 0 520 240", "Diagrama temperatura-calor del condensador con las tres contribuciones a la temperatura de condensación", `
<line x1="60" y1="215" x2="420" y2="215" class="ax" marker-end="url(#t3ar)"/><line x1="60" y1="215" x2="60" y2="20" class="ax" marker-end="url(#t3ar)"/>${T(424, 230, "q")}${T(52, 24, "T", "small2", "end")}
<line x1="380" y1="60" x2="70" y2="60" stroke="#c2413b" stroke-width="3" marker-end="url(#t3ark)"/>${T(220, 50, "vapor que condensa: T₆ = 33 ºC", "small2 ko", "middle")}
<line x1="70" y1="190" x2="380" y2="110" stroke="#1d4ed8" stroke-width="3" marker-end="url(#t3arb)"/>${T(300, 182, "refrigerante (agua de río, torre o aire)", "small2", "middle")}
<line x1="60" y1="190" x2="440" y2="190" class="dash"/><line x1="380" y1="110" x2="440" y2="110" class="dash"/><line x1="380" y1="60" x2="440" y2="60" class="dash"/>
<line x1="430" y1="188" x2="430" y2="112" stroke="#475569" stroke-width="1.5" marker-start="url(#t3ar)" marker-end="url(#t3ar)"/>${T(436, 146, "ΔT = 10 K", "small2 tb")}${T(436, 160, "f(ṁr/ṁv)", "small2")}
<line x1="430" y1="108" x2="430" y2="62" stroke="#475569" stroke-width="1.5" marker-start="url(#t3ar)" marker-end="url(#t3ar)"/>${T(436, 82, "δT = 8 K", "small2 tb")}${T(436, 96, "f(1/A, U)", "small2")}
${T(66, 206, "T er = 15 ºC = f(T amb)", "small2 tb")}${T(362, 100, "T sr = 25 ºC", "small2", "end")}`) });

/* 6 · Calentadores de superficie y de mezcla */
DIAGRAMS.push({ sec: "t3-regen", h4: "Calentador de mezcla (abierto, desgasificador)", cap: "Los dos tipos de calentador regenerativo por kg de vapor vivo. <b>Superficie</b>: el agua (todo el gasto) pasa por tubos de 2 a 2′ y el vapor extraído α condensa fuera; la purga a′ se lamina al depósito anterior. <b>Mezcla</b>: α y (1 − α) se juntan y sale 1 kg de líquido saturado 1′, que necesita otra bomba (diap. 26-27).", svg: W("0 0 540 250", "Esquemas de un calentador de superficie y de un calentador de mezcla con sus balances", `
${T(135, 20, "Superficie (cerrado)", "tb", "middle")}
<rect x="75" y="50" width="120" height="90" rx="10" class="box"/>
<path d="M20 120H85C95 120 95 70 105 70H165C175 70 175 120 185 120H250" fill="none" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#t3arb)"/>${T(22, 136, "2 (1 kg)", "small2")}${T(250, 136, "2′", "small2 tb", "end")}
<path d="M135 28V50" stroke="#c2413b" stroke-width="2.6" marker-end="url(#t3ark)"/>${T(142, 40, "α, a", "small2 ko")}
<path d="M135 140V185H170" stroke="#c2413b" stroke-width="2.2" fill="none" marker-end="url(#t3ark)"/><path d="M135 165l-7 -6v12z M135 165l7 -6v12z" fill="#475569"/>${T(145, 168, "laminación", "small2")}${T(175, 189, "a′ → depósito anterior", "small2")}
${T(135, 222, "α(h a − h a′) = h 2′ − h 2", "small2 tb", "middle")}
<line x1="270" y1="15" x2="270" y2="235" class="dash"/>
${T(405, 20, "Mezcla (abierto)", "tb", "middle")}
<rect x="355" y="55" width="100" height="80" rx="30" class="box"/>${T(405, 100, "desgasificador", "small2", "middle")}
<path d="M405 28V55" stroke="#c2413b" stroke-width="2.6" marker-end="url(#t3ark)"/>${T(412, 40, "α, a", "small2 ko")}
<path d="M290 95H355" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#t3arb)"/>${T(292, 85, "2 (1 − α)", "small2")}
<path d="M405 135V170H440" stroke="#1d4ed8" stroke-width="2.6" fill="none"/><circle cx="455" cy="170" r="14" fill="#cbd5e1" stroke="#475569"/><path d="M469 170H520" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#t3arb)"/>
${T(398, 160, "1′ (1 kg, líq. sat.)", "small2", "end")}${T(455, 196, "bomba de alimentación", "small2", "middle")}
${T(405, 222, "α(h a − h 1′) = (1 − α)(h 1′ − h 2)", "small2 tb", "middle")}`) });

/* 7 · Cuerpos de la turbina */
DIAGRAMS.push({ sec: "t3-montaje", h4: "Estructura en cuerpos", cap: "Línea de ejes de una turbina de tres secciones: cuerpo de alta (flujo en un sentido), cuerpo de media (en sentido contrario) y dos cuerpos de baja de <b>flujos contrapuestos</b>, en los que el vapor entra por el centro y sale por los dos extremos hacia el condensador: los empujes axiales se compensan (diap. 31). Entre alta y media va el recalentamiento.", svg: W("0 0 540 220", "Disposición de cuerpos de alta, media y baja presión en una línea de ejes", `
<line x1="10" y1="110" x2="530" y2="110" stroke="#64748b" stroke-width="4"/>
<path d="M40 80L80 92V128L40 140Z" fill="#fcd9b6" stroke="#c2410c" stroke-width="1.8"/>${T(60, 160, "Alta", "small2 tb", "middle")}
<path d="M110 92L170 72V148L110 128Z" fill="#fcd9b6" stroke="#c2410c" stroke-width="1.8"/>${T(140, 166, "Media", "small2 tb", "middle")}
<path d="M200 60L245 85V135L200 160Z M290 60L245 85V135L290 160Z" fill="#fcd9b6" stroke="#c2410c" stroke-width="1.8"/>${T(245, 178, "Baja 1", "small2 tb", "middle")}
<path d="M310 60L355 85V135L310 160Z M400 60L355 85V135L400 160Z" fill="#fcd9b6" stroke="#c2410c" stroke-width="1.8"/>${T(355, 178, "Baja 2", "small2 tb", "middle")}
<rect x="440" y="85" width="80" height="50" rx="6" class="sec"/>${T(480, 114, "generador", "small2", "middle")}
<path d="M75 52V88" stroke="#c2413b" stroke-width="2" marker-end="url(#t3ark)"/>${T(81, 50, "vapor", "small2 ko")}${T(81, 63, "vivo", "small2 ko")}
<path d="M40 80V28H128V82" fill="none" stroke="#c2413b" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#t3ark)"/>${T(14, 22, "recalentamiento", "small2 ko")}
<path d="M170 72V40H355" fill="none" stroke="#c2413b" stroke-width="1.6"/><line x1="245" y1="40" x2="245" y2="82" stroke="#c2413b" stroke-width="2" marker-end="url(#t3ark)"/><line x1="355" y1="40" x2="355" y2="82" stroke="#c2413b" stroke-width="2" marker-end="url(#t3ark)"/>
<line x1="72" y1="110" x2="48" y2="110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t3arb)"/><line x1="122" y1="110" x2="160" y2="110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t3arb)"/>
<line x1="238" y1="110" x2="210" y2="110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t3arb)"/><line x1="252" y1="110" x2="280" y2="110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t3arb)"/>
<line x1="348" y1="110" x2="320" y2="110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t3arb)"/><line x1="362" y1="110" x2="390" y2="110" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t3arb)"/>
${[200, 290, 310, 400].map(x => `<line x1="${x}" y1="162" x2="${x}" y2="186" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#t3arb)"/>`).join("")}
${T(245, 208, "flujos contrapuestos → empujes axiales compensados", "small2 tb", "middle")}`) });

/* Figuras originales */
DIAGRAMS.push({ sec: "t3-planta", h4: "Esquema de la planta", img: "img/fig/mmt-t3-planta.jpg", alt: "Esquema de una planta de turbina de vapor, diapositiva 13", cap: "<b>Figura original (Tema 3, diap. 13)</b>: caldera con economizador, calderín, evaporador y sobrecalentador; turbina con alternador; condensador con fluido refrigerante y bomba de condensado. Sigue los puntos 1 a 6." });
DIAGRAMS.push({ sec: "t3-planta", h4: "El ciclo en los diagramas T-s y h-s", img: "img/fig/mmt-t3-diagramas.jpg", alt: "Ciclo de la planta en los diagramas T-s y h-s, diapositiva 14", cap: "<b>Figura original (Tema 3, diap. 14)</b>: el ciclo real del agua en T-s y h-s. El círculo rojo marca la bomba (1-2), casi invisible; fíjate en el escalón de evaporación 3-4 a unos 310 ºC y en que 6 cae dentro de la campana." });
DIAGRAMS.push({ sec: "t3-diseno", h4: "Temperatura de entrada a la turbina, T5", img: "img/fig/mmt-t3-t5.jpg", alt: "Efecto de la temperatura de entrada a la turbina, diapositiva 19", cap: "<b>Figura original (Tema 3, diap. 19)</b>: ciclos con T₅ = 400 y 500 ºC. Con 500 ºC el ciclo es más alto (más η y más w) y la expansión termina más a la derecha (más título)." });
DIAGRAMS.push({ sec: "t3-diseno", h4: "Presión de entrada a la turbina, p5", img: "img/fig/mmt-t3-p5.jpg", alt: "Efecto de la presión de entrada a la turbina, diapositiva 20", cap: "<b>Figura original (Tema 3, diap. 20)</b>: p₅ = 100, 180 y 285 bar con la misma T₅. Al subir la presión, el punto 5 se mueve a la izquierda y la salida se humedece; a 285 bar (supercrítico) ya no hay escalón de evaporación." });
DIAGRAMS.push({ sec: "t3-diseno", h4: "Temperatura de condensación y sistema de refrigeración", img: "img/fig/mmt-t3-condensador.jpg", alt: "Condensador de carcasa y tubos y diagrama de temperaturas, diapositiva 22", cap: "<b>Figura original (Tema 3, diap. 22)</b>: condensador de carcasa y tubos (agua por los tubos, condensado al <i>hotwell</i>, vacío por eyectores) y el diagrama T-q con T₆ = T<sub>er</sub> + ΔT + δT." });
DIAGRAMS.push({ sec: "t3-recal", h4: "Qué es y dónde se hace", img: "img/fig/mmt-t3-recal.jpg", alt: "Ciclo con recalentamiento intermedio, diapositiva 25", cap: "<b>Figura original (Tema 3, diap. 25)</b>: T-s y h-s con T<sub>entrada</sub> = 500 ºC y x<sub>salida</sub> = 0,90: sin recalentamiento (azul) el ciclo se queda en 50 bar; con recalentamiento (naranja) llega a 200 bar recalentando a 50 bar. A la derecha, el esquema: 5 → 6′ (alta), recalentador, 5′ → 6 (baja)." });
DIAGRAMS.push({ sec: "t3-regen", h4: "Varias extracciones", img: "img/fig/mmt-t3-regen.jpg", alt: "Ciclo regenerativo con tres extracciones, diapositiva 28", cap: "<b>Figura original (Tema 3, diap. 28)</b>: tres extracciones a, b, c: calentador de superficie de alta (purga a′ laminada al desgasificador), desgasificador (b) y calentador de superficie de baja (purga c′ al condensador). Fíjate en los caudales: ṁ<sub>v</sub>(1 − α − β − γ) por el condensador y ṁ<sub>v</sub>(1 − α − β) por la bomba de condensado." });
DIAGRAMS.push({ sec: "t3-regen", h4: "Ejemplos: central de 800 MW y central de carbón", img: "img/fig/mmt-t3-central800.jpg", alt: "Esquema de una central térmica de 800 MW, diapositiva 29", cap: "<b>Figura original (Tema 3, diap. 29)</b>: central de 800 MW, 23,5 MPa y 560 ºC. Cuerpo de alta (1), de media tras el recalentamiento (2), tres de baja de doble flujo (3-5), alternador (7), condensador (6), calentadores H1-H8, desgasificador D y bomba de alimentación FP movida por la turbina auxiliar 11." });
DIAGRAMS.push({ sec: "t3-montaje", h4: "Álabes: llantas y fijación", img: "img/fig/mmt-t3-raices.jpg", alt: "Fijaciones de álabes, diapositiva 33", cap: "<b>Figura original (Tema 3, diap. 33)</b>: raíz de abeto (axial, mucha carga), cola de milano (tangencial, álabes cortos, barata) y horquilla con pasadores (radial, últimas etapas, fácil sustitución)." });
DIAGRAMS.push({ sec: "t3-montaje", h4: "Erosión por gotas condensadas", img: "img/fig/mmt-t3-erosion.jpg", alt: "Erosión por gotas en álabes de baja presión, diapositiva 36", cap: "<b>Figura original (Tema 3, diap. 36)</b>: arriba, la zona de Wilson bajo la línea de saturación y el impacto de las gotas sobre el dorso del álabe; abajo, bordes erosionados en la zona alta de los álabes de las últimas etapas." });
})();
