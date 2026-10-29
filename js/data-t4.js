/* =====================================================================
   TEMA 4 · PRESTACIONES EXIGIDAS A LAS ESTRUCTURAS
   Basado en 04_Prestaciones_exigidas_a_las_estructuras.pdf (34 diap.;
   el número de diapositiva coincide con el del pie de página).
   Contiene: THEORY.T4, reglas apartado → sección (T4_SEC_RULES),
   preguntas del banco de aprendizaje (L), tarjetas (C), ejercicios
   (DRILLS), trucos (MNEMO), esquemas SVG y figuras originales.
   Los recuadros «Ampliación» son conocimiento general que NO está en
   las diapositivas.
   ===================================================================== */

/* ------------------------------------------------------------------ teoría */
THEORY.T4 = {
  summary: [
    "El marco normativo prescribe métodos de cálculo y <b>valores límite</b> que garantizan unos <b>requisitos mínimos</b>: hay <b>múltiples soluciones aceptables</b> y el diseño óptimo depende de cómo se ponderen las prestaciones.",
    "Marco normativo: la <b>EHE-08</b> y la <b>EAE-11</b> se derogaron el <b>10/11/2021</b> y las sustituye el <b>Código Estructural</b> (hormigón, metálicas y mixtas). Siguen el CTE, la NCSE-02 y la IAP-11; el futuro son los <b>Eurocódigos</b> (UNE-EN-199X: 10 Eurocódigos en 58 partes, con anejos nacionales).",
    "<b>ELS</b>: comportamiento adecuado ante combinaciones <b>frecuentes</b>; no afectan a la integridad estructural. El CTE contempla <b>deformaciones</b> (flechas, asientos, desplomes), <b>vibraciones</b> y <b>daños o deterioro</b>. Ejemplo: Millennium Bridge, cerrado dos días después de inaugurarse.",
    "<b>ELU</b>: seguridad de usuarios y de personas en espacios públicos cercanos. El CTE contempla la <b>pérdida de equilibrio</b> como cuerpo rígido, el <b>fallo</b> por deformación excesiva, mecanismo o rotura (incluidos apoyos, cimentación y uniones) y la <b>inestabilidad</b> (también por corrosión o fatiga).",
    "Fallo <b>dúctil</b> (gran deformación, capacidad de aviso) frente a <b>frágil</b> (poca o nula; las normas insisten en evitarlo). Fallo <b>parcial</b> frente a <b>global</b>: para impedir la propagación hace falta <b>redundancia</b>. Ronan Point (1968) obligó a dar <b>continuidad a la armadura de forjados adyacentes</b>.",
    "Comprobaciones <b>deterministas</b>, <b>probabilistas</b> (dan P<sub>f</sub>) y <b>semi-probabilistas</b> (valores nominales y coeficientes parciales). Los probabilistas sirven para <b>calibrar</b> los coeficientes de los semi-probabilistas.",
    "<b>Tensión admisible</b>: $\\sigma\\le\\sigma_y/1{,}5$ (estado de carga I) o $\\sigma_y/1{,}33$ (estado II, con viento, térmicos, puentes grúa y sismo). <b>Estados límite</b>: $S(\\gamma_S F_k)\\le R(f_k/\\gamma_R)$.",
    "Fiabilidad: <b>$R=1-P_f$</b> durante un periodo de referencia. Niveles 1 (característicos + factores parciales), 2 (distribuciones → P<sub>f</sub>) y 3 (distribuciones conjuntas y superficies de fallo exactas → P<sub>f</sub>).",
    "Caso fundamental: $P_f=\\int F_R(x)f_S(x)\\,dx$. Con R y S normales e independientes, $M=R-S$, <b>$\\beta=\\mu_M/\\sigma_M$</b> (Cornell) y $P_f=\\Phi(-\\beta)$. Cornell depende de cómo se escribe la superficie de fallo; <b>Hasofer-Lind</b> no: β es la distancia mínima al origen en variables normalizadas.",
    "β ↔ P<sub>f</sub>: 1,3 → 10⁻¹, 2,3 → 10⁻², 3,1 → 10⁻³, 3,7 → 10⁻⁴, 4,3 → 10⁻⁵, 4,8 → 10⁻⁶, 5,2 → 10⁻⁷. El CTE pide β de 0 a 4,3 según consecuencias y coste, <b>referidos a todo el periodo de servicio</b>. Vida útil nominal: 50 años en edificación y 100 en monumentales y puentes.",
    "Factores parciales de acciones (resistencia): peso propio <b>1,35/0,80</b>, empuje <b>1,35/0,70</b>, agua <b>1,20/0,90</b>, variables <b>1,50/0</b>. Estabilidad: <b>1,10/0,90</b>, 1,35/0,80, 1,05/0,95 y 1,50/0. Resistencia: $\\gamma_{M0}=\\gamma_{M1}=1{,}05$, $\\gamma_{M2}=1{,}25$; $\\gamma_c=1{,}5/1{,}3$ y $\\gamma_s=1{,}15/1{,}0$.",
    "Acciones: <b>permanentes</b> (G), <b>variables</b> (Q) y <b>accidentales</b> (A); fijas o libres; directas o indirectas. Valor <b>característico</b> $F_k$ → <b>representativo</b> $\\psi\\,F_k$ → <b>de cálculo</b> $\\gamma_f\\,F_{rep}$.",
    "Combinaciones: ELU fundamental $\\sum\\gamma_G G_k+\\gamma_{Q,1}Q_{k,1}+\\sum\\gamma_{Q,i}\\psi_{0,i}Q_{k,i}$; accidental (ψ<sub>1</sub> en la principal, ψ<sub>2</sub> en el resto); sismo (ψ<sub>2</sub> en todas). ELS característica (ψ<sub>0</sub>), frecuente (ψ<sub>1</sub>/ψ<sub>2</sub>) y casi permanente (ψ<sub>2</sub>).",
    "ELU: estabilidad <b>$E_{d,dst}\\le E_{d,stb}$</b> y resistencia <b>$E_d\\le R_d$</b>. Cada comprobación tiene dos fases: <b>análisis</b> (esfuerzos y desplazamientos) y <b>comprobación</b> (capacidades frente a solicitaciones). En ELS se suelen usar modelos <b>elásticos y lineales</b>."
  ],
  sections: [
    { id: "t4-intro", title: "1. Introducción y principios generales", slides: ["T4", 1, 4], html: `
<p>El tema se organiza en seis apartados (diap. 2): introducción, palabras clave y principios generales, marco normativo, prestaciones en servicio, prestaciones en seguridad y comprobación de las prestaciones mediante cálculo, que a su vez se divide en <b>fiabilidad estructural</b> e <b>implementación a nivel normativo</b>.</p>
<h4>Prestaciones y diseño óptimo</h4>
<p>A las estructuras se les exigen prestaciones de muy distinta índole: unas relativas a la <b>seguridad estructural</b> y otras a la <b>funcionalidad</b> o la <b>estética</b> (diap. 3). El <b>grado de cumplimiento</b> de cada una permite y facilita <b>comparar soluciones</b> para la misma estructura.</p>
<ul>
<li>La <b>mejor solución</b> o diseño óptimo depende de la <b>ponderación</b> de las diferentes prestaciones.</li>
<li>El <b>marco normativo</b> prescribe <b>procedimientos y métodos de cálculo</b> y establece <b>valores límite</b> para garantizar unos <b>requisitos mínimos</b>.</li>
<li>Por tanto, existen <b>múltiples diseños o soluciones aceptables</b> desde el punto de vista normativo: la norma no da una solución única.</li>
</ul>
<h4>Hipótesis de carga y coste</h4>
<p>Las <b>hipótesis de carga</b> tienen un impacto importante en el <b>precio final</b> de la obra. Aunque no debería ser así, en algunos países se ajustan a la baja, lo que <b>reduce el margen de seguridad</b> frente a las acciones sísmicas para abaratar la obra. El ejemplo de los apuntes es <b>Rumanía</b>, con un periodo de retorno del sismo último de <b>T = 225 años</b> (diap. 3).</p>
<h4>Palabras clave y principios generales</h4>
<p>En el proyecto estructural conviene conocer el significado de estos conceptos (diap. 4); los apuntes remiten a los documentos del módulo en Moodle:</p>
<table class="tbl"><thead><tr><th>Concepto</th><th>Idea básica</th></tr></thead><tbody>
<tr><td>Proporcionalidad</td><td>Dimensiones y medios proporcionados al problema y a sus consecuencias.</td></tr>
<tr><td>Robustez del diseño</td><td>Un evento extraordinario no debe tener consecuencias desproporcionadas (T1, diap. 5).</td></tr>
<tr><td>Redundancia estructural</td><td>Caminos de transmisión alternativos para llevar las cargas a la cimentación (T4, diap. 12).</td></tr>
<tr><td>Facilidad de construcción y de inspección</td><td>Que la estructura se pueda ejecutar, revisar y mantener con sencillez.</td></tr>
<tr><td>Norma y reglamento</td><td>Definición y contenido de una norma, y en qué se diferencia de un reglamento.</td></tr>
<tr><td>Proyecto básico y de ejecución</td><td>Soluciones concretas y su justificación, frente a la determinación completa de detalles (T1, diap. 3).</td></tr>
</tbody></table>
<div class="gen"><b>Ampliación (conocimiento general, no está en las diapositivas):</b> una <b>norma</b> técnica (UNE, EN) es un documento de consenso aprobado por un organismo de normalización y, en principio, de aplicación voluntaria. Un <b>reglamento</b> (por ejemplo el CTE o el Código Estructural, aprobados por real decreto) es una disposición de la Administración de <b>obligado cumplimiento</b> en su ámbito de aplicación, y puede hacer obligatorias determinadas normas al citarlas. La «proporcionalidad» y las facilidades de construcción e inspección se resumen aquí con su sentido habitual.</div>` },

    { id: "t4-norma", title: "2. Marco normativo para el proyecto", slides: ["T4", 5, 7], html: `
<h4>Pasado, presente y futuro de las normas</h4>
<p>En la actualidad se usan normas elaboradas en España junto con los <b>Eurocódigos</b> (UNE-EN-199X). El <b>Código Estructural</b> facilita la transición del conjunto de normas nacionales a las europeas (diap. 5).</p>
<table class="tbl"><thead><tr><th>Etapa</th><th>Norma</th><th>Ámbito</th></tr></thead><tbody>
<tr><td rowspan="2"><b>Pasado</b><br><small>derogadas el 10/11/2021</small></td><td>EHE-08</td><td>Estructuras de hormigón</td></tr>
<tr><td>EAE-11</td><td>Estructuras metálicas</td></tr>
<tr><td rowspan="4"><b>Presente</b></td><td>NCSE-02</td><td>Norma de Construcción Sismorresistente</td></tr>
<tr><td>IAP-11</td><td>Acciones para puentes de carretera</td></tr>
<tr><td>CE-21 (Código Estructural)</td><td>Estructuras de hormigón, metálicas y mixtas; sustituye a EHE-08 y EAE-11</td></tr>
<tr><td>CTE</td><td>Seguridad estructural, aspectos energéticos y de salubridad</td></tr>
<tr><td><b>Futuro</b></td><td>UNE-EN-199X</td><td>Estructuras de hormigón, metálicas, mixtas…</td></tr>
</tbody></table>
<h4>Los Eurocódigos</h4>
<p>Son <b>10 Eurocódigos</b> redactados en <b>58 partes</b>, miles de páginas en total, que se <b>revisan y actualizan periódicamente</b> (diap. 6).</p>
<table class="tbl"><thead><tr><th>Norma</th><th>Contenido</th></tr></thead><tbody>
<tr><td>EN 1990</td><td>Bases de cálculo de estructuras</td></tr>
<tr><td>EN 1991 · EC1</td><td>Acciones en estructuras</td></tr>
<tr><td>EN 1992 · EC2</td><td>Estructuras de hormigón</td></tr>
<tr><td>EN 1993 · EC3</td><td>Estructuras de acero</td></tr>
<tr><td>EN 1994 · EC4</td><td>Estructuras mixtas de acero y hormigón</td></tr>
<tr><td>EN 1995 · EC5</td><td>Estructuras de madera</td></tr>
<tr><td>EN 1996 · EC6</td><td>Estructuras de fábrica</td></tr>
<tr><td>EN 1997 · EC7</td><td>Proyecto geotécnico</td></tr>
<tr><td>EN 1998 · EC8</td><td>Estructuras sismorresistentes</td></tr>
<tr><td>EN 1999 · EC9</td><td>Estructuras de aluminio</td></tr>
</tbody></table>
<p>Cada país miembro de la UE redacta los <b>anejos nacionales</b>, que fijan algunos parámetros necesarios para aplicar los métodos de cálculo de los Eurocódigos: por ejemplo, los <b>factores parciales de seguridad</b> o el <b>mapa de peligrosidad sísmica</b>.</p>
<h4>Áreas de actuación del ingeniero industrial</h4>
<p>Edificios, construcciones representativas, naves industriales e <b>instalaciones industriales</b> (diap. 7), por ejemplo:</p>
<ul><li>depósitos y recipientes a presión (p. ej. de gas natural);</li><li>edificios de contención de centrales nucleares;</li><li>líneas de transporte de energía eléctrica;</li><li>grandes antenas parabólicas, colectores fotovoltaicos, etc.</li></ul>
<p>Con <b>menos frecuencia</b> participa en la obra civil de puentes o túneles, pero sí en el diseño de sus <b>instalaciones</b>: eléctricas, ventilación, señalización y monitorización de parámetros de interés (por ejemplo, de un puente en zona sísmica, con <i>Internet of Things</i>, IoT).</p>` },

    { id: "t4-els", title: "3. Prestaciones en servicio (ELS)", slides: ["T4", 8, 9], html: `
<h4>Objetivo de los estados límite de servicio</h4>
<p>La comprobación de los ELS busca garantizar un <b>comportamiento adecuado</b> de la estructura ante <b>combinaciones de carga frecuentes</b> (diap. 8):</p>
<ul><li>sus modos de fallo <b>no se refieren a la integridad estructural</b>;</li><li>garantizan el <b>confort de los usuarios</b> y el <b>correcto funcionamiento</b> del edificio;</li><li>la <b>aptitud al servicio</b> se valora teniendo en cuenta el <b>uso previsto</b> del edificio.</li></ul>
<h4>ELS que contempla el CTE</h4>
<table class="tbl"><thead><tr><th>ELS</th><th>Qué recoge</th></tr></thead><tbody>
<tr><td><b>Deformaciones</b></td><td>Flechas, asientos o desplomes</td></tr>
<tr><td><b>Vibraciones</b></td><td>Falta de confort de los usuarios o funcionalidad reducida de la obra</td></tr>
<tr><td><b>Daños o deterioro</b></td><td>Los que pueden afectar desfavorablemente a la apariencia, a la durabilidad o a la funcionalidad de la obra</td></tr>
</tbody></table>
<p class="note">Ojo con la «deformación excesiva»: el CTE la incluye también entre los <b>ELU</b> (diap. 10), pero allí se trata del fallo de la estructura. Una flecha que fisura la tabiquería sin poner en riesgo la integridad es un <b>ELS</b>.</p>
<h4>Ejemplo: el Millennium Bridge</h4>
<p>Ejemplo de <b>funcionalidad reducida por vibraciones</b> (diap. 9): la pasarela <i>Millennium Bridge</i> de Londres se inauguró el <b>10 de junio de 2000</b> y se <b>cerró el 12 de junio de 2000</b> por exceso de vibraciones. No hubo colapso ni riesgo de integridad: es un ELS.</p>
<p>La última diapositiva del tema (diap. 34) insiste en la idea: «<b>Cuidado con la libertad de formas… aparecen fenómenos inesperados</b>», con una viñeta de <i>The New Yorker</i> (30 de octubre de 2006): «It's a Calatrava».</p>
<div class="gen"><b>Ampliación (conocimiento general):</b> las vibraciones del Millennium Bridge fueron <b>laterales</b>: los peatones, al notar el balanceo, sincronizaban el paso con él y lo amplificaban (excitación sincronizada). Se resolvió con amortiguadores y la pasarela reabrió en 2002.</div>` },

    { id: "t4-elu", title: "4. Prestaciones en seguridad (ELU) y tipos de fallo", slides: ["T4", 10, 13], html: `
<h4>Objetivo de los estados límite últimos</h4>
<p>La comprobación de los ELU busca garantizar la <b>seguridad de los usuarios</b> y de las <b>personas que se encuentran en espacios públicos cercanos</b> (diap. 10). Sus modos de fallo se refieren a la <b>integridad estructural</b>, así que superar un ELU constituye un <b>riesgo para las personas</b>, ya sea porque produce una <b>puesta fuera de servicio</b> de la estructura o su <b>colapso total o parcial</b>.</p>
<h4>ELU que contempla el CTE</h4>
<ul>
<li><b>Pérdida del equilibrio</b> del edificio, o de una parte estructuralmente independiente, considerado como un <b>cuerpo rígido</b>.</li>
<li><b>Fallo</b> por deformación excesiva, transformación de la estructura o de parte de ella en un <b>mecanismo</b>, o <b>rotura</b> de sus elementos estructurales (incluidos los <b>apoyos y la cimentación</b>) o de sus <b>uniones</b>.</li>
<li><b>Inestabilidad</b> de elementos estructurales, incluida la originada por <b>efectos dependientes del tiempo</b> (corrosión, fatiga).</li>
</ul>
<table class="tbl cmp"><thead><tr><th></th><th>ELS (diap. 8)</th><th>ELU (diap. 10)</th></tr></thead><tbody>
<tr><td>Garantiza</td><td>Comportamiento adecuado, confort y funcionamiento</td><td>Seguridad de usuarios y personas cercanas</td></tr>
<tr><td>Combinaciones</td><td>Frecuentes</td><td>Fundamental, accidental y sísmica (diap. 32)</td></tr>
<tr><td>Integridad estructural</td><td>No afectada</td><td>Afectada: riesgo para las personas</td></tr>
<tr><td>Tipos (CTE)</td><td>Deformaciones, vibraciones, daños o deterioro</td><td>Equilibrio, fallo (deformación excesiva, mecanismo, rotura), inestabilidad</td></tr>
</tbody></table>
<h4>Ejemplo: derrumbe en Palma de Mallorca (2009)</h4>
<p>Ejemplo de superación de un ELU (diap. 11): siete muertos al derrumbarse parcialmente un edificio de <b>cuatro plantas</b> en la calle Alós de Palma. <b>Se descartó la explosión de gas</b>. Los testigos dijeron que «cayó a plomo» y «se colapsó, cayó en vertical». El edificio, «relativamente nuevo», se construyó en <b>1959</b> con <b>técnicas constructivas antiguas</b>; no había denuncias en el Ayuntamiento sobre su estado y los bomberos no pudieron confirmar que estuviera deteriorado.</p>
<h4>Fallo dúctil y fallo frágil</h4>
<p>Según la <b>capacidad del material de experimentar deformación plástica</b> (diap. 12):</p>
<table class="tbl cmp"><thead><tr><th></th><th>Fallo dúctil</th><th>Fallo frágil</th></tr></thead><tbody>
<tr><td>Antes de la rotura</td><td>Deformaciones muy importantes, que llaman la atención incluso a personas no expertas</td><td>Pocas o nulas deformaciones plásticas</td></tr>
<tr><td>Capacidad de aviso</td><td>Sí</td><td>Muy pequeña o nula</td></tr>
</tbody></table>
<p>Por la importancia de la capacidad de aviso, <b>las normas hacen hincapié en evitar la rotura frágil</b> de los elementos estructurales.</p>
<h4>Fallo parcial, global y progresivo: Ronan Point</h4>
<p>Según la <b>extensión del fallo</b> (diap. 12):</p>
<ul><li><b>Fallo parcial</b>: se limita a uno o pocos elementos y solo afecta a una parte de la estructura. Después se produce una <b>redistribución de fuerzas</b>.</li>
<li><b>Fallo global</b>: el fallo y la posterior redistribución provocan un <b>mecanismo</b> que afecta a toda la estructura.</li></ul>
<p>Para evitar fallos globales hay que <b>impedir la propagación del fallo inicial</b>. El requisito indispensable suele ser cierto grado de <b>redundancia</b> del sistema estructural: que existan <b>caminos de transmisión alternativos</b> para llevar las cargas muertas y vivas a la cimentación.</p>
<p><b>Ronan Point</b> (Londres, 1968; diap. 13) es el ejemplo de <b>fallo progresivo</b>. A las 5:45 del 16 de mayo de 1968, la Sra. Ivy Hodge encendió una cerilla para prepararse una infusión y provocó una <b>explosión de gas</b> que hizo <b>colapsar una esquina</b> del edificio: 4 fallecidos y 17 heridos. Las paredes eran <b>paneles prefabricados de hormigón</b>. A raíz del colapso, la norma británica de edificación pasó a obligar a dar <b>continuidad a la armadura de forjados adyacentes</b>.</p>` },

    { id: "t4-metodos", title: "5. Comprobación de las prestaciones mediante cálculo", slides: ["T4", 14, 15], html: `
<h4>Deterministas, probabilistas y semi-probabilistas</h4>
<p>En las últimas décadas se han empleado tres tipos de comprobación (diap. 14):</p>
<table class="tbl"><thead><tr><th>Tipo</th><th>Acciones y resistencias</th><th>Resultado</th></tr></thead><tbody>
<tr><td><b>Determinista</b></td><td>Valores perfectamente conocidos</td><td>Cumple o no cumple</td></tr>
<tr><td><b>Probabilista</b></td><td>Siguen funciones de distribución</td><td>La <b>probabilidad de fallo</b></td></tr>
<tr><td><b>Semi-probabilista</b></td><td>Valores nominales combinados con <b>coeficientes parciales de seguridad</b></td><td>Valores de cálculo para las distintas comprobaciones</td></tr>
</tbody></table>
<p>Se suelen usar <b>métodos probabilistas para calibrar los coeficientes parciales</b> de los métodos semi-probabilistas.</p>
<h4>Método clásico o de la tensión admisible</h4>
<p>Es el primero en la evolución de los conceptos de seguridad (diap. 15). Distingue <b>estados de carga</b>, cada uno con su tensión admisible, siendo σ<sub>y</sub> la tensión de fluencia:</p>
<table class="tbl"><thead><tr><th>Estado de carga</th><th>Acciones incluidas</th><th>Tensión admisible</th></tr></thead><tbody>
<tr><td><b>I</b></td><td>Cargas permanentes, sobrecargas de explotación y de nieve, efectos de asientos o movimientos de apoyos, y sobrecargas de ejecución</td><td>$\\sigma\\le\\sigma_{adm}=\\sigma_y/1{,}5$</td></tr>
<tr><td><b>II</b></td><td>Las del estado I más viento, efectos térmicos, frenado y empuje lateral de los puentes grúa, y efectos sísmicos</td><td>$\\sigma\\le\\sigma_{adm}=\\sigma_y/1{,}33$</td></tr>
</tbody></table>
<p>Al añadir acciones menos probables a la vez (estado II), se admite una tensión mayor: el divisor baja de 1,5 a 1,33.</p>
<h4>Método de los estados límite</h4>
<p>Se definen <b>estados límite</b>, las <b>situaciones a comprobar</b> y <b>factores parciales de seguridad</b> para <b>mayorar las cargas</b> y <b>minorar las resistencias</b> (diap. 15):</p>
<div class="formula">$$S(\\gamma_{Si}\\,F_{ki})\\le R\\!\\left(\\frac{f_{kj}}{\\gamma_{Rj}}\\right)$$</div>
<p>F<sub>ki</sub> son los valores característicos de las acciones y f<sub>kj</sub> los de las resistencias. Es un método semi-probabilista; el CTE lo llama <b>probabilista implícito</b> (diap. 24).</p>
<table class="tbl cmp"><thead><tr><th></th><th>Tensión admisible</th><th>Estados límite</th></tr></thead><tbody>
<tr><td>Dónde está la seguridad</td><td>En un único divisor de σ<sub>y</sub> por estado de carga</td><td>En coeficientes parciales sobre acciones (γ<sub>S</sub>) y resistencias (γ<sub>R</sub>)</td></tr>
<tr><td>Qué se compara</td><td>Tensión σ con σ<sub>adm</sub></td><td>Efecto de las acciones de cálculo con la resistencia de cálculo</td></tr>
<tr><td>Situaciones</td><td>Estados de carga I y II</td><td>Estados límite (ELU, ELS) y situaciones de proyecto</td></tr>
</tbody></table>` },

    { id: "t4-fiab", title: "6. Fiabilidad estructural", slides: ["T4", 16, 23], html: `
<h4>Fiabilidad y niveles de cálculo</h4>
<p>La <b>fiabilidad</b> de una estructura es su capacidad de <b>cumplir los objetivos</b> para los que se ha diseñado durante un <b>periodo de referencia</b> (diap. 16):</p>
<div class="formula">$$R=1-P_f\\qquad P_f:\\ \\text{probabilidad de fallo}$$</div>
<p>Las distintas formas de fallo son los <b>modos de fallo</b>. Primero se calcula la probabilidad de fallo de cada uno y después la de la estructura (<b>fiabilidad de sistemas</b>).</p>
<table class="tbl"><thead><tr><th>Nivel</th><th>Qué usa</th><th>¿Da P<sub>f</sub>?</th></tr></thead><tbody>
<tr><td><b>1</b></td><td>Valores característicos + factores parciales de «seguridad»</td><td>No</td></tr>
<tr><td><b>2</b></td><td>Funciones de distribución de las variables de carga y resistencia</td><td>Sí</td></tr>
<tr><td><b>3</b></td><td>Funciones de distribución conjuntas y superficies de fallo exactas</td><td>Sí</td></tr>
</tbody></table>
<h4>Caso fundamental de fiabilidad</h4>
<p>A veces la fiabilidad de un elemento se describe con solo <b>dos variables aleatorias independientes</b>: una de <b>carga S</b> y otra de <b>resistencia R</b>. El <b>criterio de fallo</b> es <b>$R-S\\lt0$</b> (diap. 17).</p>
<ul><li>La probabilidad de que la carga esté entre x − dx/2 y x + dx/2 es $f_S(x)\\,dx$.</li>
<li>La probabilidad de que la resistencia sea menor que esa carga es $F_R(x)$ (función de distribución de R).</li>
<li>Su producto, integrado sobre x, da la probabilidad de fallo:</li></ul>
<div class="formula">$$P_f=\\int_{-\\infty}^{\\infty}F_R(x)\\,f_S(x)\\,dx$$</div>
<p><b>Ejemplo con distribuciones triangulares</b> (diap. 18): S es triangular entre 1 y 5 (pico 0,5 en 3) y R entre 4 y 8 (pico 0,5 en 6). Solo cuenta la <b>zona de solape</b>, entre 4 y 5:</p>
<div class="formula">$$f_S(t)=0{,}5-\\tfrac{0{,}5}{2}(t-3),\\quad F_R(t)=\\int_4^t\\tfrac{0{,}5}{2}(\\tau-4)\\,d\\tau=\\tfrac{t^2}{8}-t+2\\quad(4\\le t\\le5)$$</div>
<div class="formula">$$P_f=\\int_4^5\\Big(\\tfrac{t^2}{8}-t+2\\Big)\\Big(0{,}5-\\tfrac{0{,}5}{2}(t-3)\\Big)dt=\\frac{1}{384}\\approx2{,}6\\cdot10^{-3}$$</div>
<h4>Índice de fiabilidad de Cornell</h4>
<p>La integral suele ser muy complicada. Hay solución analítica en casos especiales como este (diap. 19):</p>
<ul><li>R y S son <b>independientes</b> y <b>normales</b>: N(μ<sub>R</sub>, σ<sub>R</sub>) y N(μ<sub>S</sub>, σ<sub>S</sub>).</li>
<li>El <b>margen de seguridad</b> $M=R-S$ sigue $N(\\mu_M,\\ \\sigma_M)$, con $\\mu_M=\\mu_R-\\mu_S$ y $\\sigma_M^2=\\sigma_R^2+\\sigma_S^2$.</li>
<li>P<sub>f</sub> se obtiene con la función de distribución normal estándar Φ.</li></ul>
<div class="formula">$$P_f=P(M\\le0)=\\Phi\\!\\left(\\frac{0-\\mu_M}{\\sigma_M}\\right)=\\Phi\\!\\left(\\frac{\\mu_S-\\mu_R}{\\sqrt{\\sigma_R^2+\\sigma_S^2}}\\right)=\\Phi(-\\beta)\\ \\Rightarrow\\ \\beta=-\\Phi^{-1}(P_f)$$</div>
<p>El <b>índice de fiabilidad β de Cornell</b> es el cociente entre el valor esperado del margen de seguridad y su desviación típica: $\\beta=\\mu_M/\\sigma_M$, es decir, $\\mu_M=\\beta\\,\\sigma_M$. La media del margen está β desviaciones típicas por encima de cero.</p>
<p class="note">Ejemplo numérico: $\\mu_R=300$, $\\sigma_R=30$, $\\mu_S=180$ y $\\sigma_S=40$ (mismas unidades):</p>
<div class="formula">$$\\mu_M=300-180=120,\\qquad\\sigma_M=\\sqrt{30^2+40^2}=50$$
$$\\beta=\\frac{\\mu_M}{\\sigma_M}=\\frac{120}{50}=2{,}4,\\qquad P_f=\\Phi(-2{,}4)\\approx8\\cdot10^{-3}$$</div>
<p class="note">Si $\\mu_R=\\mu_S$, entonces $\\beta=0$ y $P_f=0{,}5$, sean cuales sean las desviaciones típicas.</p>
<h4>Índice de Hasofer-Lind</h4>
<p>El índice de Cornell tiene una desventaja: <b>depende de la función que describe la superficie de fallo</b>, y como hay infinitas funciones para describir la misma superficie es un punto débil importante (diap. 20). Por ejemplo, con $M_1=R-S$ y $M_2=1-S/R$ la probabilidad de fallo es la misma, $P_{f,M_1}=P_{f,M_2}$, pero $\\beta_{M_1}\\ne\\beta_{M_2}$.</p>
<p><b>Hasofer y Lind</b> propusieron una definición sin ese defecto. Usan <b>variables normalizadas</b>:</p>
<div class="formula">$$\\bar R=\\frac{R-\\mu_R}{\\sigma_R},\\qquad \\bar S=\\frac{S-\\mu_S}{\\sigma_S},\\qquad \\bar M=f(\\bar R,\\bar S)$$</div>
<p>y definen β como la <b>distancia mínima entre el origen</b> del espacio de coordenadas normalizadas <b>y la superficie de fallo</b>. Esta definición da reglas claras cuando la función de fallo no es lineal y se aproxima por un hiperplano. El punto de la superficie más cercano al origen es el <b>punto de proyecto</b>.</p>
<h4>β requerido por el CTE y vida útil</h4>
<p>El DB SE del CTE (tabla C.2) da valores mínimos de β <b>referidos a todo el periodo de servicio</b>, en función de las consecuencias de un fallo y del coste relativo de aumentar la fiabilidad. <b>¡Los valores cambian si el periodo de evaluación es otro, por ejemplo un año!</b> (diap. 21).</p>
<table class="tbl"><thead><tr><th>Coste relativo para incrementar la fiabilidad</th><th>Despreciables</th><th>Pequeñas</th><th>Moderadas</th><th>Grandes</th></tr></thead><tbody>
<tr><td>Elevado</td><td>0</td><td>1,5</td><td>2,3</td><td>3,1</td></tr>
<tr><td>Moderado</td><td>1,3</td><td>2,3</td><td>3,1</td><td>3,8</td></tr>
<tr><td>Bajo</td><td>2,3</td><td>3,1</td><td>3,8</td><td>4,3</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>β</th><td>1,3</td><td>2,3</td><td>3,1</td><td>3,7</td><td>4,3</td><td>4,8</td><td>5,2</td></tr></thead><tbody>
<tr><th>P<sub>f</sub></th><td>10⁻¹</td><td>10⁻²</td><td>10⁻³</td><td>10⁻⁴</td><td>10⁻⁵</td><td>10⁻⁶</td><td>10⁻⁷</td></tr>
</tbody></table>
<p>Cuanto más graves son las consecuencias y más barato es mejorar la fiabilidad, mayor es el β exigido. Valores orientativos de <b>vida útil nominal</b> (tabla 2.1 del anejo 18 del Código Estructural, diap. 22):</p>
<table class="tbl"><thead><tr><th>Categoría</th><th>Vida útil nominal</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td>1</td><td>10 años</td><td>Estructuras temporales*</td></tr>
<tr><td>2</td><td>10 a 25 años</td><td>Partes reemplazables, p. ej. vigas carril y aparatos de apoyo</td></tr>
<tr><td>3</td><td>15 a 30 años</td><td>Estructuras agrícolas y similares</td></tr>
<tr><td>4</td><td>50 años</td><td>Estructuras de edificación y otras estructuras comunes</td></tr>
<tr><td>5</td><td>100 años</td><td>Edificios monumentales, puentes y otras estructuras de ingeniería civil</td></tr>
</tbody></table>
<p class="small">* Las estructuras o partes de estructuras que pueden desmontarse con vistas a ser reutilizadas <b>no</b> deben considerarse temporales.</p>
<h4>Resumen de los métodos probabilistas</h4>
<ul>
<li>Métodos de <b>nivel I, II y III</b>: a mayor nivel, <b>más precisión</b> a cambio de <b>más información</b>, cuya disponibilidad no siempre está garantizada.</li>
<li>Variables de carga y resistencia con sus distribuciones; margen de seguridad y problema fundamental de la fiabilidad.</li>
<li><b>Cornell</b>: cociente entre el valor esperado del margen y su desviación típica. ¡Generalmente <b>depende de la expresión</b> que define el margen!</li>
<li><b>Hasofer-Lind</b>: distancia mínima entre el origen y la superficie de fallo en coordenadas normalizadas.</li>
<li>El <b>punto de proyecto</b> puede usarse para <b>calibrar los factores parciales</b> de los métodos de nivel I.</li>
<li>Con el avance de la informática se recurre cada vez más a la <b>simulación de Monte Carlo</b> para evaluar la integral de P<sub>f</sub> (diap. 23).</li>
</ul>` },

    { id: "t4-norm", title: "7. Implementación a nivel normativo", slides: ["T4", 24, 34], html: `
<h4>Métodos probabilistas implícitos</h4>
<p>El método de los factores parciales es un método <b>semi-probabilista</b>; el CTE lo llama <b>método probabilista implícito</b> (diap. 24). Se fija la probabilidad de fallo admisible mediante β y se admite que:</p>
<ul><li>las acciones actúan en <b>combinaciones predefinidas</b>;</li><li>la distribución de cada combinación responde a un <b>tipo concreto</b>;</li><li>las <b>relaciones entre acciones y solicitaciones</b> son conocidas.</li></ul>
<p>Entonces se pueden obtener γ<sub>S</sub> y γ<sub>R</sub> tales que $S(\\gamma_{Si}F_{ki})&lt;R(f_{kj}/\\gamma_{Rj})$. La <b>Administración regula</b> (diap. 25):</p>
<table class="tbl"><thead><tr><th>Qué regula</th><th>Contenido</th></tr></thead><tbody>
<tr><td>El nivel de seguridad</td><td>Índice de fiabilidad β; factores parciales γ<sub>R</sub> y γ<sub>S</sub>; valores de las acciones F y de las resistencias f</td></tr>
<tr><td>La definición de fallo</td><td>Estado límite último (ELU) y estado límite de servicio (ELS)</td></tr>
<tr><td>Las situaciones a comprobar</td><td>Permanente, transitoria, sísmica y accidental</td></tr>
</tbody></table>
<h4>Factores parciales de seguridad</h4>
<p><b>Acciones</b> (tabla 4.1, situación persistente o transitoria; diap. 26):</p>
<table class="tbl"><thead><tr><th>Verificación</th><th>Acción</th><th>Desfavorable / desestabilizadora</th><th>Favorable / estabilizadora</th></tr></thead><tbody>
<tr><td rowspan="4"><b>Resistencia</b></td><td>Peso propio, peso del terreno</td><td>1,35</td><td>0,80</td></tr>
<tr><td>Empuje del terreno</td><td>1,35</td><td>0,70</td></tr>
<tr><td>Presión del agua</td><td>1,20</td><td>0,90</td></tr>
<tr><td>Variable</td><td>1,50</td><td>0</td></tr>
<tr><td rowspan="4"><b>Estabilidad</b></td><td>Peso propio, peso del terreno</td><td>1,10</td><td>0,90</td></tr>
<tr><td>Empuje del terreno</td><td>1,35</td><td>0,80</td></tr>
<tr><td>Presión del agua</td><td>1,05</td><td>0,95</td></tr>
<tr><td>Variable</td><td>1,50</td><td>0</td></tr>
</tbody></table>
<p>¡Si las acciones actúan de manera <b>favorable o estabilizadora</b>, los factores parciales son <b>menores que 1</b>! (y 0 para las variables).</p>
<p><b>Resistencias</b> (diap. 27):</p>
<table class="tbl"><thead><tr><th>Material</th><th>Coeficiente</th><th>Uso</th></tr></thead><tbody>
<tr><td rowspan="6"><b>Estructuras metálicas</b></td><td>$\\gamma_{M0}=1{,}05$</td><td>Comprobaciones frente a f<sub>y</sub></td></tr>
<tr><td>$\\gamma_{M1}=1{,}05$</td><td>Comprobaciones de estabilidad</td></tr>
<tr><td>$\\gamma_{M2}=1{,}25$</td><td>Comprobaciones en rotura</td></tr>
<tr><td>$\\gamma_{M3}=1{,}10$</td><td>Deslizamiento de tornillos en ELS</td></tr>
<tr><td>$\\gamma_{M3}=1{,}25$</td><td>Deslizamiento de tornillos en ELU</td></tr>
<tr><td>$\\gamma_{M3}=1{,}40$</td><td>Deslizamiento de tornillos en ELU (agujeros rasgados)</td></tr>
<tr><td rowspan="2"><b>Estructuras de hormigón</b></td><td>$\\gamma_c=1{,}5$ · $\\gamma_s=1{,}15$</td><td>Situación persistente o transitoria (hormigón · acero pasivo y activo)</td></tr>
<tr><td>$\\gamma_c=1{,}3$ · $\\gamma_s=1{,}0$</td><td>Situación accidental</td></tr>
</tbody></table>
<h4>Clasificación de acciones</h4>
<p>En general se distingue entre <b>acción directa</b> (fuerza aplicada sobre el edificio) y <b>acción indirecta</b> (deformación impuesta o aceleración causada por cambios de temperatura, variaciones de humedad, <b>asientos diferenciales</b> o <b>sismos</b>) (diap. 28).</p>
<table class="tbl"><thead><tr><th>Criterio</th><th>Tipo</th><th>Ejemplos</th></tr></thead><tbody>
<tr><td rowspan="3"><b>Variación en el tiempo</b></td><td>Permanentes (G)</td><td>De valor constante (peso propio) o no constante (pretensado, acciones del terreno)</td></tr>
<tr><td>Variables (Q)</td><td>Sobrecarga de uso (efectos del uso normal), viento, nieve</td></tr>
<tr><td>Accidentales (A)</td><td>Impactos, acción sísmica</td></tr>
<tr><td rowspan="2"><b>Variación en el espacio</b></td><td>Fijas</td><td>Peso propio, elementos funcionales</td></tr>
<tr><td>Libres</td><td>Sobrecargas de uso, cargas de tráfico, nieve</td></tr>
</tbody></table>
<p>El árbol de la diap. 29 detalla: <b>permanentes</b> (peso propio, empujes, pretensado); <b>variables</b>, de <b>uso</b> (viviendas, garajes, edificios públicos) o <b>ambientales</b> (nieve, viento, temperatura); y <b>accidentales</b> (sismo, fuego, impacto).</p>
<h4>Valores característico, representativo y de cálculo</h4>
<p>Para comprobar los estados límite se modifica el valor característico de la acción según la situación de comprobación (diap. 30):</p>
<table class="tbl"><thead><tr><th>Valor</th><th>Definición</th></tr></thead><tbody>
<tr><td><b>Característico</b> F<sub>k</sub></td><td>Se define, según el caso, por su <b>valor medio</b>, por un <b>fractil superior o inferior</b>, o por un <b>valor nominal</b>.</td></tr>
<tr><td><b>Representativo</b></td><td>Producto del valor característico F<sub>k</sub> por el <b>coeficiente de simultaneidad ψ<sub>i</sub></b>. Evita hipótesis muy improbables o físicamente imposibles, como que nieve y viento alcancen a la vez sus máximos.</td></tr>
<tr><td><b>De cálculo</b></td><td>Producto del valor característico o representativo por el <b>coeficiente parcial γ<sub>f</sub></b>, que puede ser mayor o menor que 1 según la acción actúe de forma desfavorable o no.</td></tr>
</tbody></table>
<div class="formula">$$F_d=\\gamma_f\\,F_{rep}=\\gamma_f\\,\\psi_i\\,F_k$$</div>
<div class="gen"><b>Ampliación (CTE DB SE 4.2.2, no está en las diapositivas):</b> el CTE da nombre a cada valor representativo de una acción variable: <b>valor de combinación</b> $\\psi_0 Q_k$, <b>valor frecuente</b> $\\psi_1 Q_k$ y <b>valor casi permanente</b> $\\psi_2 Q_k$, con $\\psi_0\\ge\\psi_1\\ge\\psi_2$. Valores orientativos de su tabla 4.2: uso en viviendas 0,7 / 0,5 / 0,3; nieve por debajo de 1000 m 0,5 / 0,2 / 0; viento 0,6 / 0,5 / 0. En las preguntas de la app, los ψ se dan siempre como dato.</div>
<h4>Formato de las comprobaciones y combinaciones</h4>
<p>Formato de las comprobaciones de ELU (diap. 31):</p>
<table class="tbl"><thead><tr><th>Comprobación</th><th>Condición</th><th>Significado</th></tr></thead><tbody>
<tr><td><b>Estabilidad</b></td><td>$E_{d,dst}\\le E_{d,stb}$</td><td>Efecto de cálculo de las acciones desestabilizadoras ≤ el de las estabilizadoras</td></tr>
<tr><td><b>Resistencia</b></td><td>$E_d\\le R_d$</td><td>Efecto de cálculo de las acciones ≤ resistencia de cálculo correspondiente</td></tr>
</tbody></table>
<p>Valor de cálculo del efecto de las acciones en cada situación (diap. 32). $Q_{k,1}$ es la variable <b>principal</b> y $Q_{k,i}$ ($i\\gt1$) las <b>acompañantes</b>:</p>
<table class="tbl"><thead><tr><th>Situación</th><th>Combinación</th></tr></thead><tbody>
<tr><td><b>ELU fundamental</b><br><small>persistente y transitoria</small></td><td>$\\sum_j\\gamma_{G,j}G_{k,j}+\\gamma_{Q,1}Q_{k,1}+\\sum_{i&gt;1}\\gamma_{Q,i}\\psi_{0,i}Q_{k,i}$</td></tr>
<tr><td><b>ELU accidental</b></td><td>$\\sum_j\\gamma_{G,j}G_{k,j}+A_d+\\gamma_{Q,1}\\psi_{1,1}Q_{k,1}+\\sum_{i&gt;1}\\gamma_{Q,i}\\psi_{2,i}Q_{k,i}$<br><small>$\\gamma_{Q,1}=1$ (efecto desfavorable); $\\gamma_{Q,1}=0$ (favorable)</small></td></tr>
<tr><td><b>ELU sismo</b></td><td>$\\sum_j G_{k,j}+A_d+\\sum_{i\\ge1}\\psi_{2,i}Q_{k,i}$</td></tr>
<tr><td><b>ELS poco frecuente o característica</b><br><small>corta duración, efecto irreversible</small></td><td>$\\sum_j G_{k,j}+Q_{k,1}+\\sum_{i&gt;1}\\psi_{0,i}Q_{k,i}$</td></tr>
<tr><td><b>ELS frecuente</b><br><small>corta duración, efecto reversible</small></td><td>$\\sum_j G_{k,j}+\\psi_{1,1}Q_{k,1}+\\sum_{i&gt;1}\\psi_{2,i}Q_{k,i}$</td></tr>
<tr><td><b>ELS casi permanente</b><br><small>acciones de larga duración</small></td><td>$\\sum_j G_{k,j}+\\sum_{i\\ge1}\\psi_{2,i}Q_{k,i}$</td></tr>
</tbody></table>
<p class="note">Ejemplo: $G_k=20$, uso $Q_k=10$ ($\\psi_0=0{,}7$) y nieve $Q_k=5$ ($\\psi_0=0{,}5$) kN/m. ELU fundamental, probando cada variable como principal:</p>
<div class="formula">$$\\text{Uso principal: }1{,}35\\cdot20+1{,}5\\cdot10+1{,}5\\cdot0{,}5\\cdot5=\\boxed{45{,}75\\ \\text{kN/m}}$$
$$\\text{Nieve principal: }1{,}35\\cdot20+1{,}5\\cdot5+1{,}5\\cdot0{,}7\\cdot10=45{,}0\\ \\text{kN/m}$$</div>
<p class="note">Se prueban todas las variables como principal y manda la mayor.</p>
<p>En ELS no hay coeficientes γ en las fórmulas (valen 1): ni siquiera el peso propio se mayora.</p>
<h4>Organización de las comprobaciones</h4>
<p>En general, la comprobación de cada estado límite se hace en <b>dos fases</b> (diap. 33):</p>
<ul><li><b>Análisis</b>: se determinan los esfuerzos y desplazamientos globales. Por ejemplo, con un modelo de elementos finitos se obtienen los desplazamientos nodales y las reacciones; a partir de los desplazamientos se calculan esfuerzos y tensiones.</li>
<li><b>Comprobación</b>: se calculan las capacidades resistentes de secciones y elementos y se comparan con las solicitaciones.</li></ul>
<p>Tanto el análisis como la comprobación pueden hacerse en <b>régimen elástico o plástico</b>. En los ELS se suelen emplear <b>modelos elásticos y lineales</b>.</p>
<p>El tema se cierra con un aviso (diap. 34): «Cuidado con la libertad de formas… aparecen fenómenos inesperados».</p>` }
  ],
  confusions: [
    ["ELS frente a ELU", "ELS: combinaciones <b>frecuentes</b>, sin afectar a la integridad (deformaciones, vibraciones, daños). ELU: seguridad de las personas, integridad estructural (equilibrio, fallo, inestabilidad)."],
    ["Deformación excesiva: ¿ELS o ELU?", "Las flechas, asientos y desplomes que afectan a la apariencia o la funcionalidad son <b>ELS</b>. El «fallo por deformación excesiva» que compromete la integridad es <b>ELU</b> (diap. 8 y 10)."],
    ["Fallo frágil frente a fallo parcial", "Dúctil/frágil depende de la <b>deformación plástica</b> del material (capacidad de aviso). Parcial/global depende de la <b>extensión</b> del fallo (redundancia)."],
    ["Cornell frente a Hasofer-Lind", "Cornell: $\\beta=\\mu_M/\\sigma_M$, <b>depende</b> de cómo se escriba M. Hasofer-Lind: distancia mínima al origen en variables <b>normalizadas</b>, <b>no depende</b>."],
    ["Nivel 1, 2 y 3", "Nivel 1: característicos + γ, <b>no</b> da P<sub>f</sub>. Nivel 2: distribuciones de cada variable → P<sub>f</sub>. Nivel 3: distribuciones conjuntas y superficies exactas → P<sub>f</sub>."],
    ["β por periodo de servicio frente a β anual", "La tabla C.2 del CTE da β para <b>todo el periodo de servicio</b>. Para un año los valores son otros."],
    ["Valor representativo frente a valor de cálculo", "Representativo = <b>$\\psi\\,F_k$</b> (simultaneidad). De cálculo = <b>$\\gamma_f\\,F_k$</b> o $\\gamma_f\\,F_{rep}$ (seguridad). El característico no se obtiene de ninguno de ellos."],
    ["γ favorable en resistencia frente a estabilizador", "Peso propio: 0,80 favorable en resistencia y 0,90 estabilizador. Desfavorable: 1,35 en resistencia y 1,10 desestabilizador."],
    ["ψ<sub>0</sub>, ψ<sub>1</sub> y ψ<sub>2</sub>", "ψ<sub>0</sub>: acompañantes de la fundamental y de la característica. ψ<sub>1</sub>: principal de la frecuente y de la accidental. ψ<sub>2</sub>: el resto de la frecuente y la accidental, y todas en la casi permanente y en el sismo."],
    ["Acción directa frente a indirecta", "Directa: fuerza aplicada. Indirecta: deformación o aceleración impuesta (temperatura, humedad, <b>asientos diferenciales</b>, sismo)."],
    ["Tensión admisible: estado I frente a II", "I: permanentes, uso, nieve, asientos y ejecución → $\\sigma_y/1{,}5$. II: además viento, térmicos, puentes grúa y sismo → $\\sigma_y/1{,}33$ (tensión admisible mayor)."]
  ]
};

/* apartado → sección. Se aplican en orden y sin distinguir mayúsculas. */
window.T4_SEC_RULES = [
  [/Fiabilidad|Cornell|Hasofer|caso fundamental|β requerido|Vida útil|Métodos probabilistas|punto de proyecto/, "t4-fiab"],
  [/Factores parciales|Coeficientes parciales|\bacciones\b|Combinaci|simultaneidad|Valor(es)? (característico|representativo|de cálculo)|Formato|Implementación|Organización de las comprobaciones/, "t4-norm"],
  [/Tensión admisible|Tipos de comprobación/, "t4-metodos"],
  [/servicio|ELS|Millennium|vibraci/, "t4-els"],
  [/seguridad|ELU|fallo|Ronan|Estados límite|Palma/, "t4-elu"],
  [/Normativa|Marco normativo|Eurocódigo|Código Estructural|Norma|Reglamento/, "t4-norma"],
  [/./, "t4-intro"]
];

/* ------------------------------------------------- banco de aprendizaje (L) */
/* ---- 1. Introducción ---- */
L("T4","Introducción",2,"Señalar la respuesta correcta según la introducción del tema 4.",
["El marco normativo prescribe procedimientos y métodos de cálculo y fija valores límite que garantizan unos requisitos mínimos, por lo que existen múltiples soluciones aceptables desde el punto de vista normativo.",
 "El marco normativo prescribe procedimientos y métodos de cálculo y fija valores límite que conducen, para cada estructura, a una única solución aceptable, que es además el diseño óptimo.",
 "El diseño óptimo no depende de la ponderación de las prestaciones, ya que la norma fija el peso relativo de la seguridad, la funcionalidad y la estética.",
 "Ninguna de las anteriores."],0,
"La diap. 3 dice que el marco normativo prescribe procedimientos y métodos de cálculo y establece valores límite para garantizar unos requisitos mínimos, «por tanto existen múltiples diseños/soluciones aceptables». La segunda opción invierte esa conclusión: la norma no da una solución única. La tercera contradice que «la mejor solución o el diseño óptimo depende de la ponderación de las diferentes prestaciones», que no fija la norma. Como la primera es correcta, «Ninguna» no procede.","Apuntes T4, diap. 3");
L("T4","Introducción",3,"Según la introducción del tema, en algunos países se ajustan a la baja las hipótesis de carga sísmica (ejemplo de Rumanía, periodo de retorno del sismo último T = 225 años). Señalar la afirmación correcta.",
["Esa práctica reduce el coste de la obra a costa de reducir el margen de seguridad de las estructuras frente a las acciones sísmicas, y los apuntes advierten de que no debería hacerse.",
 "Esa práctica aumenta el periodo de retorno del sismo último y, por tanto, la seguridad, aunque encarece la obra.",
 "Esa práctica no afecta al precio final, porque las hipótesis de carga solo influyen en las comprobaciones de servicio.",
 "Esa práctica es la que recomiendan los Eurocódigos para países de sismicidad moderada, a través de sus anejos nacionales."],0,
"La diap. 3 explica que las hipótesis de carga tienen un impacto importante en el precio final y que, «aunque no debería ser así», en algunos países se ajustan a la baja, reduciendo el margen de seguridad frente al sismo para reducir costes. Un sismo último con T = 225 años es una hipótesis más suave, no más exigente; las hipótesis de carga afectan a las comprobaciones de seguridad, no solo a las de servicio, y los apuntes no presentan el ejemplo como una recomendación de los Eurocódigos.","Apuntes T4, diap. 3");
L("T4","Palabras clave",1,"Señalar la respuesta incorrecta. Entre las palabras clave y los principios generales que la diap. 4 pide conocer para el proyecto estructural figuran…",
["la proporcionalidad y la robustez del diseño.",
 "la redundancia estructural y la facilidad de construcción y de inspección.",
 "la definición y el contenido de una norma, su diferencia con un reglamento, y el proyecto básico y el de ejecución.",
 "la ductilidad del acero y la durabilidad del hormigón."],3,
"La lista de la diap. 4 es: proporcionalidad, robustez del diseño, redundancia estructural, facilidad de construcción, facilidad de inspección, definición y contenido de una norma, diferencia entre norma y reglamento, y proyecto básico y de ejecución. La ductilidad y la durabilidad de los materiales son contenidos de otros temas (T3) y no aparecen en esa lista.","Apuntes T4, diap. 4");
L("T4","Introducción",2,"Según la diap. 3, el grado de cumplimiento de cada una de las prestaciones exigidas a una estructura…",
["permite y facilita la comparación de diferentes soluciones para la misma estructura.",
 "determina por sí solo la solución que exige la norma, ya que cada prestación tiene un valor límite único.",
 "solo se puede evaluar para las prestaciones de seguridad estructural; la funcionalidad y la estética no se comparan.",
 "es irrelevante en la elección de la solución, porque cualquier diseño que cumpla la norma es igualmente bueno."],0,
"La diap. 3 lo dice literalmente: «El grado de cumplimiento de cada una de ellas permite y facilita la comparación de diferentes soluciones para la misma estructura». Las prestaciones son de muy distinta índole (seguridad, funcionalidad, estética), la norma solo fija mínimos y entre las soluciones aceptables la óptima depende de la ponderación, así que no da igual una u otra.","Apuntes T4, diap. 3");

/* ---- 2. Marco normativo ---- */
L("T4","Marco normativo",2,"Según el esquema del marco normativo de los apuntes, señalar la respuesta correcta.",
["La EHE-08 y la EAE-11 se derogaron el 10/11/2021 y su contenido pasa al Código Estructural, que abarca las estructuras de hormigón, metálicas y mixtas.",
 "La NCSE-02 y la IAP-11 se derogaron el 10/11/2021, al entrar en vigor el Código Estructural, que incluye la acción sísmica y las acciones en puentes.",
 "El CTE quedó derogado por el Código Estructural, que regula la seguridad estructural y los aspectos energéticos y de salubridad.",
 "El Código Estructural sustituye a los Eurocódigos (UNE-EN-199X), que pasan a ser normas del pasado."],0,
"En la diap. 5 la flecha «Derogados en 10/11/2021» sale de la EHE-08 (hormigón) y la EAE-11 (metálicas) y llega al CE-21, Código Estructural (hormigón, metálicas y mixtas). La NCSE-02, la IAP-11 y el CTE siguen en el «presente», y el CTE es el que trata la seguridad estructural junto con aspectos energéticos y de salubridad. Los Eurocódigos son el «futuro»: el Código Estructural facilita la transición hacia ellos.","Apuntes T4, diap. 5");
L("T4","Marco normativo",3,"Señalar las respuestas correctas (puede haber más de una). Según el esquema pasado → presente → futuro de la diap. 5…",
["la IAP-11 recoge las acciones para puentes de carretera y figura entre las normas del presente.",
 "el CTE abarca la seguridad estructural y también aspectos energéticos y de salubridad.",
 "la NCSE-02 es la instrucción de estructuras metálicas que sustituyó a la EAE-11.",
 "las normas UNE-EN-199X aparecen como el futuro, hacia el que el Código Estructural facilita la transición."],[0,1,3],
"En la diap. 5, la IAP-11 (acciones para puentes de carretera), el CE-21 y el CTE (seguridad estructural, aspectos energéticos y de salubridad) forman el presente, junto con la NCSE-02, y las UNE-EN-199X el futuro. La NCSE-02 es la Norma de Construcción Sismorresistente, no una instrucción de estructuras metálicas; la EAE-11 la sustituye el Código Estructural.","Apuntes T4, diap. 5");
L("T4","Eurocódigos",2,"Según los apuntes, los Eurocódigos…",
["son 10 documentos redactados en 58 partes, que suman miles de páginas y se revisan y actualizan periódicamente.",
 "son 58 Eurocódigos agrupados en 10 partes, que se mantienen sin cambios desde su publicación.",
 "son 10 documentos que se aplican igual en todos los países de la UE, sin ningún parámetro nacional.",
 "son 9 documentos, uno por cada material estructural, más la EN 1990 de bases de cálculo."],0,
"Diap. 6: «Los 10 Eurocódigos están redactados en 58 partes. En total son miles de páginas. Se revisan y actualizan periódicamente». Cada país redacta anejos nacionales con algunos parámetros, como los factores parciales o el mapa sísmico. La lista incluye, además de los materiales, las acciones (EN 1991), la geotecnia (EN 1997) y el sismo (EN 1998).","Apuntes T4, diap. 6");
L("T4","Eurocódigos",3,"Señalar la asociación correcta entre la norma europea y su contenido según la lista de la diap. 6.",
["EN 1990: bases de cálculo; EN 1991: acciones; EN 1997: proyecto geotécnico; EN 1998: estructuras sismorresistentes.",
 "EN 1990: acciones; EN 1991: bases de cálculo; EN 1997: estructuras sismorresistentes; EN 1998: proyecto geotécnico.",
 "EN 1992: estructuras de acero; EN 1993: estructuras de hormigón; EN 1994: estructuras mixtas; EN 1999: aluminio.",
 "EN 1995: estructuras de fábrica; EN 1996: estructuras de madera; EN 1997: proyecto geotécnico; EN 1999: aluminio."],0,
"La lista de la diap. 6 es: EN 1990 bases de cálculo, EN 1991 acciones, EN 1992 hormigón, EN 1993 acero, EN 1994 mixtas, EN 1995 madera, EN 1996 fábrica, EN 1997 geotecnia, EN 1998 sismo y EN 1999 aluminio. Las otras opciones intercambian parejas contiguas: bases de cálculo y acciones, geotecnia y sismo, hormigón y acero, o madera y fábrica.","Apuntes T4, diap. 6");
L("T4","Eurocódigos: anejos nacionales",2,"Según la diap. 6, los anejos nacionales que redacta cada país miembro de la UE…",
["fijan algunos parámetros necesarios para aplicar los métodos de cálculo de los Eurocódigos, por ejemplo los factores parciales de seguridad o el mapa de peligrosidad sísmica.",
 "sustituyen los métodos de cálculo de los Eurocódigos por los de la normativa nacional anterior.",
 "se limitan a traducir el texto de los Eurocódigos, sin modificar ningún parámetro.",
 "fijan exclusivamente el mapa de peligrosidad sísmica, ya que los factores parciales de seguridad son comunes a toda la UE."],0,
"Diap. 6: «Cada país miembro de la UE redacta los anejos nacionales en los que se fijan algunos parámetros que hacen falta para la aplicación de los métodos de cálculo descritos en los Eurocódigos, p.e. factores parciales de seguridad, mapa de peligrosidad sísmica, etc.». Los métodos de cálculo son los del Eurocódigo; el anejo solo fija parámetros, y entre ellos están precisamente los factores parciales.","Apuntes T4, diap. 6");
L("T4","Marco normativo: áreas de actuación",1,"Señalar la respuesta incorrecta. Según los apuntes, entre las áreas de actuación del ingeniero industrial en el proyecto de estructuras están…",
["los depósitos y recipientes a presión, por ejemplo de gas natural.",
 "los edificios de contención de las centrales nucleares y las líneas de transporte de energía eléctrica.",
 "las grandes antenas parabólicas y los colectores fotovoltaicos.",
 "la obra civil de puentes y túneles, en la que interviene con más frecuencia que en el diseño de sus instalaciones."],3,
"La diap. 7 cita edificios, naves e instalaciones industriales: depósitos y recipientes a presión, edificios de contención de centrales nucleares, líneas eléctricas, grandes antenas y colectores fotovoltaicos. De puentes y túneles dice justo lo contrario: con menos frecuencia participa en la obra civil, pero sí en el diseño de las instalaciones (eléctricas, ventilación, señalización, monitorización con IoT).","Apuntes T4, diap. 7");

/* ---- 3. Prestaciones en servicio ---- */
L("T4","Prestaciones en servicio",2,"Según los apuntes, el objetivo de la comprobación de los estados límite de servicio consiste en garantizar un comportamiento adecuado de la estructura…",
["ante combinaciones de carga frecuentes; sus modos de fallo no se refieren a la integridad estructural.",
 "ante combinaciones de carga poco probables; sus modos de fallo se refieren a la integridad estructural.",
 "ante combinaciones de carga frecuentes; sus modos de fallo se refieren a la integridad de los apoyos y de la cimentación.",
 "ante la acción sísmica; sus modos de fallo afectan a la seguridad de las personas que se encuentran en espacios públicos cercanos."],0,
"Diap. 8: el objetivo de los ELS es garantizar un comportamiento adecuado «ante combinaciones de carga frecuentes», y sus modos de fallo «no se refieren a la integridad estructural»; buscan el confort y el correcto funcionamiento. La integridad estructural (incluida la de apoyos y cimentación) y la seguridad de las personas en espacios cercanos son propias de los ELU (diap. 10).","Apuntes T4, diap. 8");
L("T4","Prestaciones en servicio",3,"Señalar las respuestas correctas (puede haber más de una). Según los apuntes, el CTE contempla como estados límite de servicio…",
["las deformaciones: flechas, asientos o desplomes.",
 "las vibraciones que causan falta de confort de los usuarios o funcionalidad reducida de la obra.",
 "los daños o el deterioro que pueden afectar desfavorablemente a la apariencia, a la durabilidad o a la funcionalidad de la obra.",
 "la inestabilidad de elementos estructurales, incluida la originada por efectos dependientes del tiempo, como la fatiga."],[0,1,2],
"Los tres primeros son exactamente los ELS del CTE que recoge la diap. 8. La inestabilidad de elementos estructurales, incluida la debida a corrosión o fatiga, es un ELU (diap. 10): afecta a la integridad estructural.","Apuntes T4, diap. 8");
L("T4","Millennium Bridge",1,"Según los apuntes, el Millennium Bridge de Londres es un ejemplo de…",
["funcionalidad reducida por vibraciones (ELS): se inauguró el 10 de junio de 2000 y se cerró el 12 de junio de 2000 por exceso de vibraciones.",
 "superación de un estado límite último: colapsó parcialmente dos días después de su inauguración.",
 "funcionalidad reducida por flechas excesivas del tablero (ELS): se cerró un año después de su inauguración.",
 "fallo progresivo provocado por una explosión de gas."],0,
"La diap. 9 lo presenta dentro de las prestaciones en servicio como «ejemplo de funcionalidad reducida por vibraciones»: inaugurado el 10/06/2000 y cerrado el 12/06/2000 por exceso de vibraciones. No hubo colapso, el problema no fueron las flechas, y el fallo progresivo por explosión de gas es el caso Ronan Point (diap. 13).","Apuntes T4, diap. 9");
L("T4","Prestaciones en servicio",3,"Un forjado presenta flechas que fisuran la tabiquería que soporta, sin que exista riesgo para la integridad de la estructura. Según la clasificación del CTE recogida en los apuntes, se ha superado…",
["un estado límite de servicio: deformaciones (flechas) y daños que afectan a la apariencia y la funcionalidad de la obra.",
 "un estado límite último, porque el CTE incluye el fallo por deformación excesiva entre los ELU.",
 "un estado límite último de pérdida de equilibrio, porque el forjado deja de estar en equilibrio con la tabiquería.",
 "ningún estado límite, porque la tabiquería no es un elemento estructural y su fisuración no se comprueba."],0,
"Las flechas y los daños que afectan a la apariencia, la durabilidad o la funcionalidad son ELS del CTE (diap. 8), y aquí no hay riesgo para la integridad. El «fallo por deformación excesiva» de la diap. 10 es un ELU porque se refiere a la integridad estructural, que no está en juego. No hay pérdida de equilibrio como sólido rígido, y los daños a elementos no estructurales sí forman parte de los ELS.","Apuntes T4, diap. 8 y 10");
L("T4","Prestaciones en servicio: libertad de formas",1,"La última diapositiva del tema (viñeta de The New Yorker, «It's a Calatrava») advierte de que…",
["hay que tener cuidado con la libertad de formas, porque aparecen fenómenos inesperados.",
 "el CTE prohíbe las formas libres en estructuras de uso público.",
 "las formas singulares no necesitan comprobaciones de servicio, porque su rigidez es mayor.",
 "las formas libres solo pueden calcularse con el método de la tensión admisible."],0,
"La diap. 34 dice: «Cuidado con la libertad de formas … aparecen fenómenos inesperados». Es un aviso, no una prohibición normativa, y encaja con ejemplos como las vibraciones del Millennium Bridge (diap. 9), que obligan precisamente a comprobar el servicio. Nada indica que esas formas deban calcularse con tensión admisible.","Apuntes T4, diap. 34");

/* ---- 4. Prestaciones en seguridad ---- */
L("T4","Prestaciones en seguridad",2,"Según los apuntes, superar un estado límite último constituye un riesgo para las personas…",
["ya sea porque produce una puesta fuera de servicio de la estructura o el colapso total o parcial de la misma.",
 "solo si produce el colapso total de la estructura; el colapso parcial se trata como estado límite de servicio.",
 "solo para los usuarios de la estructura, no para las personas que se encuentran en espacios públicos cercanos.",
 "solo si el fallo es frágil; un fallo dúctil, al avisar, no se considera estado límite último."],0,
"Diap. 10: los modos de fallo de los ELU se refieren a la integridad estructural, «así que superar un estado límite último constituye un riesgo para las personas, ya sea porque produce una puesta fuera de servicio de la estructura o el colapso total o parcial de la misma». El objetivo incluye a los usuarios y a quienes están en espacios públicos cercanos. Que el fallo sea dúctil o frágil (diap. 12) no cambia que sea un ELU.","Apuntes T4, diap. 10");
L("T4","Prestaciones en seguridad",3,"Señalar las respuestas correctas (puede haber más de una). Según los apuntes, el CTE contempla como estados límite últimos…",
["la pérdida del equilibrio del edificio, o de una parte estructuralmente independiente, considerado como un cuerpo rígido.",
 "la transformación de la estructura, o de parte de ella, en un mecanismo.",
 "la rotura de los elementos estructurales, incluidos los apoyos y la cimentación, o de sus uniones.",
 "los desplomes que afectan desfavorablemente a la apariencia de la obra."],[0,1,2],
"La diap. 10 recoge como ELU la pérdida de equilibrio como cuerpo rígido; el fallo por deformación excesiva, por transformación en mecanismo o por rotura de elementos (incluidos apoyos y cimentación) o de uniones; y la inestabilidad. Los desplomes que afectan a la apariencia son deformaciones de servicio (ELS, diap. 8).","Apuntes T4, diap. 10");
L("T4","Prestaciones en seguridad",2,"En una estructura de acero, la corrosión y la fatiga acaban provocando la inestabilidad de un elemento estructural. Según la clasificación del CTE recogida en los apuntes, esta situación…",
["es un estado límite último: inestabilidad de elementos estructurales, incluida la originada por efectos dependientes del tiempo.",
 "es un estado límite de servicio, porque se trata de un deterioro que afecta a la durabilidad de la obra.",
 "no es un estado límite, sino un problema de mantenimiento, porque los efectos dependientes del tiempo no se comprueban.",
 "es un estado límite último de pérdida de equilibrio del elemento como sólido rígido."],0,
"La diap. 10 incluye entre los ELU la «inestabilidad de elementos estructurales incluyendo los originados por efectos dependientes del tiempo (corrosión, fatiga)». El deterioro que afecta a la durabilidad es un ELS solo mientras no comprometa la integridad (diap. 8). Los efectos dependientes del tiempo sí se consideran, y la pérdida de equilibrio como cuerpo rígido es otro ELU distinto.","Apuntes T4, diap. 10");
L("T4","Prestaciones en seguridad: Palma",2,"Respecto al derrumbe de Palma de Mallorca (2009) que recogen los apuntes como ejemplo, señalar la afirmación correcta.",
["Se descartó la explosión de gas; el edificio, de cuatro plantas y construido en 1959 con técnicas constructivas antiguas, se colapsó en vertical: es un ejemplo de superación de un estado límite último.",
 "Una explosión de gas hizo colapsar una esquina del edificio, construido con paneles prefabricados de hormigón: es el ejemplo de fallo progresivo del tema.",
 "El edificio se desalojó por exceso de vibraciones antes del colapso: es un ejemplo de estado límite de servicio.",
 "El Ayuntamiento tenía varias denuncias sobre el muy mal estado del inmueble, que tenía más de cien años."],0,
"Diap. 11: siete muertos en un edificio de cuatro plantas de la calle Alós; se descarta la explosión de gas; «cayó a plomo», «cayó en vertical»; construido en 1959 con técnicas constructivas antiguas; no había denuncias en el Ayuntamiento. La explosión de gas en una esquina con paneles prefabricados es Ronan Point (diap. 13), y las vibraciones son el ejemplo de ELS del Millennium Bridge (diap. 9).","Apuntes T4, diap. 11");
L("T4","Tipos de fallo",2,"Según los apuntes, la distinción entre fallo dúctil y fallo frágil se basa en…",
["la capacidad del material de experimentar deformación plástica; las normas hacen hincapié en evitar la rotura frágil por su capacidad de aviso muy pequeña o nula.",
 "la extensión del fallo; las normas hacen hincapié en evitar la rotura dúctil porque se extiende a toda la estructura.",
 "la capacidad del material de experimentar deformación plástica; las normas hacen hincapié en evitar la rotura dúctil, porque sus grandes deformaciones alarman incluso a personas no expertas.",
 "la velocidad de aplicación de la carga; el fallo frágil solo aparece ante impactos y explosiones."],0,
"Diap. 12: «Basado en la capacidad del material de experimentar deformación plástica». El dúctil produce deformaciones muy importantes que llaman la atención incluso a personas no expertas, lo que da capacidad de aviso; el frágil, pocas o nulas, con una capacidad de aviso muy pequeña o nula. Por eso las normas insisten en evitar la rotura frágil. La extensión del fallo es el otro criterio, el de fallo parcial o global.","Apuntes T4, diap. 12");
L("T4","Tipos de fallo",3,"Señalar la respuesta incorrecta sobre las definiciones de fallo según su extensión.",
["En el fallo parcial, el fallo se limita a uno o pocos elementos estructurales, solo afecta a una parte de la estructura y después se produce una redistribución de fuerzas.",
 "En el fallo global, el fallo y la posterior redistribución de fuerzas provocan un mecanismo que afecta a toda la estructura.",
 "Para evitar fallos globales hay que impedir la propagación del fallo inicial, y para ello suele ser indispensable cierto grado de redundancia del sistema estructural.",
 "Un sistema estructural sin caminos de transmisión alternativos es la mejor forma de impedir la propagación de un fallo inicial, porque no hay redistribución de fuerzas."],3,
"Las tres primeras afirmaciones reproducen la diap. 12. La cuarta es la falsa: el requisito indispensable para impedir la propagación es la redundancia, es decir, que existan caminos de transmisión alternativos para llevar las cargas a la cimentación. Sin ellos, el fallo de un elemento deja sin soporte a lo que dependía de él.","Apuntes T4, diap. 12");
L("T4","Tipos de fallo: Ronan Point",2,"Respecto al caso Ronan Point (Londres, 1968), señalar la afirmación correcta.",
["Una explosión de gas al encender una cerilla hizo colapsar una esquina de un edificio con paredes de paneles prefabricados de hormigón, y la norma británica pasó a obligar a dar continuidad a la armadura de forjados adyacentes.",
 "Una explosión de gas al encender una cerilla hizo colapsar una esquina del edificio, y la norma británica pasó a prohibir los paneles prefabricados de hormigón en edificios de viviendas.",
 "Una explosión de gas provocó el colapso completo del edificio por rotura frágil de los pilares de acero; hubo 4 fallecidos y 17 heridos.",
 "El colapso de una esquina se debió a vibraciones excesivas, y la norma británica pasó a exigir amortiguadores en los edificios altos."],0,
"Diap. 13: el 16 de mayo de 1968 la Sra. Ivy Hodge encendió una cerilla, una explosión de gas hizo colapsar una esquina del edificio (4 fallecidos y 17 heridos), las paredes eran paneles prefabricados de hormigón y «se cambió la norma británica de edificación obligando a dar continuidad a la armadura de forjados adyacentes». No se prohibieron los prefabricados, no colapsó todo el edificio ni fallaron pilares de acero, y no hubo vibraciones.","Apuntes T4, diap. 13");
L("T4","Tipos de comprobación",2,"Según los apuntes, en las comprobaciones semi-probabilistas…",
["las acciones y resistencias se caracterizan con valores nominales que se combinan con coeficientes parciales de seguridad para determinar los valores de cálculo.",
 "las acciones y resistencias siguen funciones de distribución y como resultado se obtiene la probabilidad de fallo.",
 "los valores de las acciones y resistencias se consideran perfectamente conocidos.",
 "los coeficientes parciales se fijan de antemano y con ellos se calcula la probabilidad de fallo de cada estructura."],0,
"La diap. 14 define las tres comprobaciones: deterministas (valores perfectamente conocidos), probabilistas (funciones de distribución, resultado $P_f$) y semi-probabilistas (valores nominales combinados con coeficientes parciales para obtener los valores de cálculo). El método semi-probabilista no da la $P_f$: son los probabilistas los que sirven para calibrar sus coeficientes.","Apuntes T4, diap. 14");
L("T4","Tipos de comprobación",2,"Según los apuntes, ¿qué relación hay entre los métodos probabilistas y los semi-probabilistas?",
["Se suelen utilizar métodos probabilistas para calibrar los coeficientes parciales de seguridad de los métodos semi-probabilistas.",
 "Se suelen utilizar métodos semi-probabilistas para calibrar las funciones de distribución de los métodos probabilistas.",
 "Son equivalentes: ambos dan como resultado la probabilidad de fallo de la estructura.",
 "Ninguna de las anteriores."],0,
"Diap. 14: «Se suelen utilizar métodos probabilistas para calibrar los coeficientes parciales de seguridad de los métodos semi-probabilistas». La calibración va en ese sentido y no al revés. Solo los probabilistas dan $P_f$; el semi-probabilista da valores de cálculo y verifica desigualdades. Como la primera es correcta, «Ninguna» no procede.","Apuntes T4, diap. 14");
L("T4","Tensión admisible",2,"En el método clásico de la tensión admisible, ¿qué acciones añade el estado de carga II a las del estado de carga I y qué tensión admisible le corresponde?",
["El viento, los efectos térmicos, el frenado y el empuje lateral de los puentes grúa y los efectos sísmicos; $\\sigma_{adm}=\\sigma_y/1{,}33$.",
 "Las sobrecargas de nieve y las de ejecución; $\\sigma_{adm}=\\sigma_y/1{,}33$.",
 "El viento y los efectos térmicos; $\\sigma_{adm}=\\sigma_y/1{,}5$.",
 "Los asientos y los posibles movimientos de los apoyos; $\\sigma_{adm}=\\sigma_y/1{,}5$."],0,
"Diap. 15: el estado de carga I incluye cargas permanentes, sobrecargas de explotación y de nieve, asientos o movimientos de apoyos y sobrecargas de ejecución; el II añade viento, efectos térmicos, frenado y empuje lateral de puentes grúa y efectos sísmicos: $$\\text{Estado I:}\\ \\sigma_{adm}=\\frac{\\sigma_y}{1{,}5}\\qquad\\text{Estado II:}\\ \\sigma_{adm}=\\frac{\\sigma_y}{1{,}33}$$ La nieve, la ejecución y los asientos ya están en el estado I.","Apuntes T4, diap. 15");
L("T4","Tensión admisible",3,"Una barra de acero con σy = 275 MPa trabaja a σ = 195 MPa bajo cargas permanentes, sobrecarga de uso y viento. Según el método clásico de la tensión admisible de los apuntes…",
["Cumple: al incluir el viento es el estado de carga II, con $\\sigma_{adm}=275/1{,}33\\approx206{,}8\\text{ MPa}\\ge195\\text{ MPa}$.",
 "No cumple: $\\sigma_{adm}=275/1{,}5\\approx183{,}3\\text{ MPa}\\lt195\\text{ MPa}$.",
 "Cumple con holgura: $\\sigma_{adm}=275/1{,}05\\approx261{,}9\\text{ MPa}$.",
 "No cumple: con viento hay que aplicar ambos factores, $\\sigma_{adm}=\\dfrac{275}{1{,}5\\cdot1{,}33}\\approx137{,}8\\text{ MPa}$."],0,
"Con viento estamos en el estado de carga II (diap. 15), cuyo divisor es 1,33: $$\\sigma_{adm}=\\frac{\\sigma_y}{1{,}33}=\\frac{275}{1{,}33}\\approx206{,}8\\text{ MPa}$$ $$\\sigma=195\\text{ MPa}\\le206{,}8\\text{ MPa}\\ \\Rightarrow\\ \\boxed{\\text{cumple}}$$ El divisor 1,5 (183,3 MPa) es el del estado I, que no incluye el viento. 1,05 es el γM0 del método de estados límite (diap. 27), no un factor de tensión admisible. Los dos divisores no se multiplican: cada estado de carga tiene el suyo.","Apuntes T4, diap. 15");
L("T4","Tensión admisible y estados límite",2,"Señalar la respuesta incorrecta sobre la evolución de los conceptos de seguridad.",
["En el método de la tensión admisible, el factor 1,5 o 1,33 divide a la tensión de fluencia σy para obtener σadm.",
 "En el método de los estados límite se mayoran las cargas con γS y se minoran las resistencias con γR.",
 "En el método de los estados límite se definen los estados límite, las situaciones a comprobar y los factores parciales de seguridad.",
 "En el método de la tensión admisible, el factor de seguridad depende de que cada acción sea favorable o desfavorable, igual que en el de estados límite."],3,
"Las tres primeras reproducen la diap. 15: $$\\sigma\\le\\sigma_{adm}=\\frac{\\sigma_y}{1{,}5}\\ \\left(\\text{o}\\ \\frac{\\sigma_y}{1{,}33}\\right),\\qquad S\\left(\\gamma_{Si}\\,F_{ki}\\right)\\le R\\left(\\frac{f_{kj}}{\\gamma_{Rj}}\\right)$$ con estados límite, situaciones y factores parciales que mayoran cargas y minoran resistencias. En la tensión admisible el factor depende del estado de carga (I o II), no de que cada acción sea favorable o desfavorable; esa distinción es propia de los factores parciales (diap. 26).","Apuntes T4, diap. 15");
L("T4","Tipos de comprobación: estados límite",2,"La expresión S(γSi·Fki) ≤ R(fkj/γRj) del método de los estados límite indica que…",
["el efecto de las acciones características multiplicadas por sus factores parciales no debe superar la resistencia obtenida con las resistencias características divididas por los suyos.",
 "la suma de las acciones características divididas por γS no debe superar las resistencias características multiplicadas por γR.",
 "γS y γR deben ser iguales para que la comprobación sea equilibrada.",
 "S y R son variables aleatorias y la expresión proporciona directamente la probabilidad de fallo."],0,
"En la diap. 15, los factores parciales sirven «para mayorar las cargas y minorar las resistencias»: $$S(\\gamma_{Si}\\,F_{ki})\\le R\\!\\left(\\frac{f_{kj}}{\\gamma_{Rj}}\\right)$$ Fki se multiplica por γSi y fkj se divide por γRj. No tienen por qué ser iguales (por ejemplo γ = 1,35 o 1,5 en acciones y γM0 = 1,05 en acero, diap. 26-27). La expresión trabaja con valores característicos y no da la $P_f$: es un método semi-probabilista.","Apuntes T4, diap. 15");

/* ---- 6. Fiabilidad estructural ---- */
L("T4","Fiabilidad",2,"Según los apuntes, la fiabilidad de una estructura…",
["es su capacidad de cumplir los objetivos para los que ha sido diseñada durante un periodo de referencia, y vale $R=1-P_f$.",
 "es su capacidad de cumplir los objetivos para los que ha sido diseñada durante un año, y vale $R=1/P_f$.",
 "es la probabilidad de que la estructura falle durante su vida útil, $R=P_f$.",
 "es su capacidad de resistir la combinación de carga más desfavorable sin superar la tensión admisible, $R=\\sigma_{adm}/\\sigma$."],0,
"Diap. 16: «La fiabilidad de una estructura es la capacidad de cumplir los objetivos por los que ha sido diseñada durante un periodo de referencia», con $$R=1-P_f$$ El periodo de referencia no tiene por qué ser un año (la tabla del CTE se refiere a todo el periodo de servicio, diap. 21). R es el complemento de Pf, no Pf ni su inverso, y no es un cociente de tensiones.","Apuntes T4, diap. 16");
L("T4","Fiabilidad: niveles",2,"Señalar la respuesta correcta sobre los métodos de cálculo de la probabilidad de fallo.",
["Nivel 1: valores característicos y factores parciales; nivel 2: funciones de distribución de las variables de carga y resistencia → Pf; nivel 3: funciones de distribución conjuntas y superficies de fallo exactas → Pf.",
 "Nivel 1: funciones de distribución conjuntas y superficies de fallo exactas; nivel 3: valores característicos y factores parciales.",
 "Nivel 2: valores característicos y factores parciales → Pf; nivel 3: funciones de distribución de cada variable por separado.",
 "Los tres niveles proporcionan la Pf; solo se diferencian en el tiempo de cálculo."],0,
"Es el esquema de la diap. 16. El nivel 1 usa valores característicos y factores parciales y no da Pf; los niveles 2 y 3 sí la dan, el 3 con distribuciones conjuntas y superficies de fallo exactas. A mayor nivel, más precisión a cambio de más información, no solo de más tiempo de cálculo (diap. 23).","Apuntes T4, diap. 16 y 23");
L("T4","Fiabilidad: caso fundamental",3,"En el caso fundamental de fiabilidad (carga S y resistencia R independientes), la probabilidad de fallo se obtiene…",
["integrando sobre x el producto FR(x)·fS(x): la probabilidad de que la carga esté en torno a x por la de que la resistencia sea menor que x.",
 "integrando sobre x el producto fR(x)·FS(x): la densidad de la resistencia por la probabilidad de que la carga sea menor que x.",
 "como el área bajo la función de densidad de R a la izquierda del valor medio de S.",
 "como el producto FR(μS)·fS(μR), evaluado en los valores medios."],0,
"Diap. 17: la probabilidad de que la carga esté entre x − dx/2 y x + dx/2 es fS(x)dx, y la de que la resistencia sea menor es FR(x). El fallo en ese intervalo tiene probabilidad FR(x)·fS(x)dx, y se integra sobre x: $$P_f=\\int_{-\\infty}^{\\infty}F_R(x)\\,f_S(x)\\,dx$$ fR·FS mide la probabilidad de que la carga sea menor que la resistencia, es decir, de no fallar. Los atajos con valores medios ignoran la dispersión de la carga.","Apuntes T4, diap. 17");
L("T4","Fiabilidad: caso fundamental",3,"En el ejemplo de los apuntes con distribuciones triangulares (S entre 1 y 5 con pico 0,5 en 3; R entre 4 y 8 con pico 0,5 en 6), señalar la respuesta correcta.",
["Solo contribuye la zona de solape, $4\\le t\\le5$, y resulta $P_f=1/384\\approx2{,}6\\cdot10^{-3}$, que corresponde a un β entre 2,3 y 3,1.",
 "Hay que integrar en todo el dominio, $1\\le t\\le8$, y resulta $P_f=1/384\\approx2{,}6\\cdot10^{-3}$.",
 "Solo contribuye la zona de solape y resulta $P_f=1/384\\approx2{,}6\\cdot10^{-4}$, que corresponde a un $\\beta\\approx3{,}7$.",
 "Solo contribuye la zona de solape y resulta $P_f=F_R(5)=1/8$, porque en $t=5$ se acaba la carga."],0,
"Diap. 18: fuera de 4 ≤ t ≤ 5 el producto FR·fS es nulo (FR = 0 por debajo de 4 y fS = 0 por encima de 5), así que solo cuenta la zona de solape: $$f_S(t)=0{,}5-0{,}25\\,(t-3),\\qquad F_R(t)=\\frac{t^2}{8}-t+2\\qquad(4\\le t\\le5)$$ $$P_f=\\int_4^5\\Big(\\frac{t^2}{8}-t+2\\Big)\\big(0{,}5-0{,}25\\,(t-3)\\big)\\,dt=\\boxed{\\frac{1}{384}\\approx2{,}6\\cdot10^{-3}}$$ Ese valor está entre 10⁻³ (β = 3,1) y 10⁻² (β = 2,3) en la tabla de la diap. 21 (β ≈ 2,8). 2,6·10⁻⁴ es un error de un orden de magnitud. FR(5) = 1/8 es solo la probabilidad de que R < 5, sin ponderar por la densidad de la carga.","Apuntes T4, diap. 18 y 21");
L("T4","Índices de fiabilidad: Cornell",1,"Según los apuntes, el índice de fiabilidad β de Cornell se define como…",
["el cociente entre el valor esperado del margen de seguridad y su desviación típica, $\\beta=\\mu_M/\\sigma_M$.",
 "el cociente entre la desviación típica del margen de seguridad y su valor esperado, $\\beta=\\sigma_M/\\mu_M$.",
 "la distancia mínima entre el origen y la superficie de fallo en el espacio de coordenadas normalizadas.",
 "el cociente entre los valores medios de la resistencia y la carga, $\\beta=\\mu_R/\\mu_S$."],0,
"Diap. 19: «El índice de fiabilidad β de Cornell está definido como cociente entre el valor esperado del margen de seguridad y su desviación típica»: $$\\beta=\\frac{\\mu_M}{\\sigma_M}\\ \\Rightarrow\\ \\mu_M=\\beta\\,\\sigma_M$$ La distancia mínima en coordenadas normalizadas es la definición de Hasofer-Lind (diap. 20). μR/μS sería un coeficiente de seguridad central, que no tiene en cuenta la dispersión.","Apuntes T4, diap. 19");
L("T4","Índices de fiabilidad: Cornell",3,"La resistencia R y la carga S de un elemento son normales e independientes, con μR = 300, σR = 30, μS = 180 y σS = 40 (mismas unidades). Según el caso fundamental de los apuntes, el índice de fiabilidad y la probabilidad de fallo valen aproximadamente:",
["$\\beta=2{,}4$ y $P_f\\approx8\\cdot10^{-3}$",
 "$\\beta\\approx1{,}71$ y $P_f\\approx4\\cdot10^{-2}$",
 "$\\beta=3{,}0$ y $P_f\\approx1{,}3\\cdot10^{-3}$",
 "$\\beta=4{,}0$ y $P_f\\approx3\\cdot10^{-5}$"],0,
"Caso fundamental (diap. 19): el margen M = R − S es normal, con μM = μR − μS y σM² = σR² + σS². $$\\mu_M=300-180=120,\\qquad\\sigma_M=\\sqrt{30^2+40^2}=50$$ $$\\beta=\\frac{\\mu_M}{\\sigma_M}=\\frac{120}{50}=\\boxed{2{,}4},\\qquad P_f=\\Phi(-2{,}4)\\approx\\boxed{8\\cdot10^{-3}}$$ Es algo menos que el 10⁻² que la diap. 21 asocia a β = 2,3. Sumar las desviaciones (120/70 ≈ 1,71), usar solo la de la carga (120/40 = 3,0) o solo la de la resistencia (120/30 = 4,0) son errores: se suman las varianzas, no las desviaciones típicas.","Apuntes T4, diap. 19 y 21");
L("T4","Índices de fiabilidad: Cornell",3,"Una barra de sección A = 1000 mm² soporta una carga axial P normal de media 150 kN y desviación típica 30 kN. Su tensión de fluencia es normal con media 275 MPa y desviación típica 20 MPa. Si falla cuando la tensión axial supera fy, el índice de fiabilidad β de Cornell vale aproximadamente:",
["$3{,}47$; $P_f$ entre $10^{-4}$ y $10^{-3}$",
 "$2{,}50$; $P_f$ del orden de $10^{-2}$",
 "$4{,}17$; $P_f$ del orden de $10^{-5}$",
 "$6{,}25$; $P_f$ despreciable"],0,
"Se pasa la carga a tensión dividiendo por el área y se aplica el caso fundamental (diap. 19): $$\\mu_S=\\frac{150\\,000\\text{ N}}{1000\\text{ mm}^2}=150\\text{ MPa},\\qquad\\sigma_S=\\frac{30\\,000}{1000}=30\\text{ MPa}$$ $$\\mu_M=275-150=125\\text{ MPa},\\qquad\\sigma_M=\\sqrt{20^2+30^2}=36{,}06\\text{ MPa}$$ $$\\beta=\\frac{125}{36{,}06}\\approx\\boxed{3{,}47},\\qquad P_f=\\Phi(-3{,}47)\\approx2{,}6\\cdot10^{-4}$$ Pf queda entre los valores de β = 3,1 y 3,7 de la tabla de la diap. 21 (10⁻³ y 10⁻⁴). 2,50 sale de sumar desviaciones (125/50), 4,17 de usar solo σS y 6,25 de usar solo σR. Es el mismo planteamiento que el ejercicio oficial de la PA1 2024.","Apuntes T4, diap. 19 y 21");
L("T4","Índices de fiabilidad: Cornell y Hasofer-Lind",3,"Señalar la respuesta correcta sobre los índices de fiabilidad.",
["El índice de Cornell depende de la función elegida para describir la superficie de fallo: con $M_1=R-S$ y $M_2=1-S/R$ la probabilidad de fallo es la misma, pero β puede ser distinto.",
 "Con $M_1=R-S$ y $M_2=1-S/R$ se obtiene el mismo índice de Cornell, pero distinta probabilidad de fallo.",
 "El índice de Hasofer-Lind tiene el mismo defecto que el de Cornell, pero es más fácil de calcular.",
 "Hasofer y Lind definen β como el cociente $\\mu_M/\\sigma_M$, pero usando las variables sin normalizar."],0,
"Diap. 20: el índice de Cornell depende de la función que describe la superficie de fallo, y como hay infinitas funciones para la misma superficie es un punto débil importante: $$P_{f,M_1}=P_{f,M_2}\\quad\\text{pero}\\quad\\beta_{M_1}\\ne\\beta_{M_2}$$ La superficie de fallo, y por tanto Pf, es la misma; lo que cambia es β. Hasofer y Lind propusieron una definición sin ese defecto, con variables normalizadas y β como distancia mínima al origen.","Apuntes T4, diap. 20");
L("T4","Índices de fiabilidad: Hasofer-Lind",2,"Según la definición de Hasofer y Lind recogida en los apuntes…",
["se normalizan las variables, $\\bar R=\\dfrac{R-\\mu_R}{\\sigma_R}$ y $\\bar S=\\dfrac{S-\\mu_S}{\\sigma_S}$, y β es la distancia mínima entre el origen del espacio normalizado y la superficie de fallo.",
 "β es la distancia máxima entre el origen y la superficie de fallo, medida en las coordenadas originales R y S.",
 "se normalizan las variables dividiéndolas por su media, $\\bar R=R/\\mu_R$ y $\\bar S=S/\\mu_S$, y β es la pendiente de la superficie de fallo.",
 "β es la distancia entre el punto de valores medios $(\\mu_R,\\ \\mu_S)$ y la superficie de fallo, en las coordenadas originales."],0,
"Diap. 20: se normalizan las variables restando la media y dividiendo por la desviación típica, $$\\bar R=\\frac{R-\\mu_R}{\\sigma_R},\\qquad\\bar S=\\frac{S-\\mu_S}{\\sigma_S},\\qquad\\bar M=f(\\bar R,\\bar S)$$ y β es la distancia mínima entre el origen de coordenadas normalizadas y la superficie de fallo, lo que da reglas claras si la función de fallo no es lineal y se aproxima por un hiperplano. Medir en coordenadas originales mezcla unidades y escalas, y dividir solo por la media no normaliza la dispersión.","Apuntes T4, diap. 20");
L("T4","Fiabilidad: caso fundamental",3,"En el caso fundamental con R y S normales e independientes, si los valores medios de resistencia y carga coinciden (μR = μS), la probabilidad de fallo…",
["vale 0,5, sean cuales sean las desviaciones típicas de R y S.",
 "vale 0, porque el margen de seguridad medio es nulo.",
 "depende de σR y σS: cuanto mayores son, mayor es la probabilidad de fallo.",
 "vale 1, porque la carga media alcanza la resistencia media."],0,
"Con μR = μS el margen M = R − S tiene media nula (diap. 19): $$\\mu_M=\\mu_R-\\mu_S=0\\ \\Rightarrow\\ \\beta=\\frac{\\mu_M}{\\sigma_M}=0\\ \\Rightarrow\\ P_f=\\Phi(0)=\\boxed{0{,}5}$$ La distribución normal de M es simétrica respecto a cero. Las desviaciones típicas cambian el ancho de la campana, pero no la mitad que queda por debajo de cero. Pf = 0 o Pf = 1 exigirían un margen siempre positivo o siempre negativo.","Apuntes T4, diap. 19");
L("T4","β requerido según el CTE",3,"Según la tabla C.2 del DB SE del CTE recogida en los apuntes, para una estructura cuyo fallo tendría consecuencias moderadas y en la que incrementar la fiabilidad tiene un coste relativo moderado, el índice de fiabilidad requerido es…",
["$\\beta=3{,}1$, es decir, $P_f\\approx10^{-3}$, referida a todo el periodo de servicio.",
 "$\\beta=3{,}8$, es decir, $P_f\\approx10^{-4}$, referida a un periodo de un año.",
 "$\\beta=2{,}3$, es decir, $P_f\\approx10^{-2}$, referida a todo el periodo de servicio.",
 "$\\beta=3{,}1$, es decir, $P_f\\approx10^{-3}$ en cada año de servicio."],0,
"En la tabla C.2 (diap. 21), la fila de coste moderado y la columna de consecuencias moderadas dan $$\\beta=3{,}1\\ \\Rightarrow\\ P_f\\approx10^{-3}$$ que es la probabilidad que la misma diapositiva asocia a ese índice. Los valores son «nominales, referidos a todo el periodo de servicio», y los apuntes advierten de que cambian para otros periodos de evaluación, como un año. 3,8 es el de consecuencias grandes con coste moderado (o moderadas con coste bajo), y 2,3 el de consecuencias moderadas con coste elevado.","Apuntes T4, diap. 21");
L("T4","β requerido según el CTE",3,"Señalar las respuestas correctas (puede haber más de una) sobre la tabla C.2 del CTE de los apuntes.",
["Para unas mismas consecuencias de fallo, el β requerido aumenta cuanto menor es el coste relativo de incrementar la fiabilidad.",
 "Para un mismo coste relativo, el β requerido aumenta con la gravedad de las consecuencias de un fallo.",
 "El valor más alto de la tabla es 4,3, para consecuencias grandes y coste relativo bajo.",
 "Los valores son válidos para cualquier periodo de evaluación, por ejemplo un año."],[0,1,2],
"En la tabla de la diap. 21, β crece hacia la derecha (despreciables 0–2,3, pequeñas 1,5–3,1, moderadas 2,3–3,8, grandes 3,1–4,3) y hacia abajo (coste elevado, moderado, bajo): si mejorar la fiabilidad es barato, se exige más. El máximo es 4,3 (grandes, coste bajo). La diapositiva advierte expresamente: «¡Ojo, los valores cambian si se contemplan periodos de evaluación diferentes p.e. un año!».","Apuntes T4, diap. 21");
L("T4","β requerido según el CTE",3,"Un elemento tiene σR = 20 kN y σS = 15 kN (normales e independientes) y μS = 100 kN. Su fallo tendría consecuencias grandes y el coste relativo de incrementar la fiabilidad es moderado. Según la tabla del CTE de los apuntes, la resistencia media mínima μR es:",
["195 kN",
 "157 kN",
 "176 kN",
 "233 kN"],0,
"La tabla C.2 (diap. 21) da β = 3,8 para consecuencias grandes y coste moderado. Con μM = β·σM (diap. 19): $$\\sigma_M=\\sqrt{20^2+15^2}=25\\text{ kN}$$ $$\\mu_M=\\beta\\,\\sigma_M=3{,}8\\cdot25=95\\text{ kN}$$ $$\\mu_R=\\mu_S+\\mu_M=100+95=\\boxed{195\\text{ kN}}$$ 157 usa solo σS (3,8·15), 176 solo σR (3,8·20) y 233 suma las desviaciones (3,8·35).","Apuntes T4, diap. 19 y 21");
L("T4","Fiabilidad",2,"Una estructura tiene un índice de fiabilidad β = 3,7 para todo su periodo de servicio. Según la relación entre β y Pf de los apuntes, su fiabilidad R es aproximadamente:",
["0,9999",
 "0,999",
 "0,99999",
 "0,63"],0,
"La diap. 21 asocia β = 3,7 a Pf = 10⁻⁴, y la diap. 16 define la fiabilidad como el complemento de la probabilidad de fallo: $$\\beta=3{,}7\\ \\Rightarrow\\ P_f\\approx10^{-4}$$ $$R=1-P_f=1-0{,}0001=\\boxed{0{,}9999}$$ 0,999 corresponde a β = 3,1 (Pf = 10⁻³) y 0,99999 a β = 4,3 (Pf = 10⁻⁵). 0,63 no tiene relación con la tabla.","Apuntes T4, diap. 16 y 21");
L("T4","Vida útil",1,"Según la tabla de vida útil nominal del anejo 18 del Código Estructural que recogen los apuntes, señalar la respuesta correcta.",
["Estructuras de edificación y otras estructuras comunes: 50 años; edificios monumentales, puentes y otras estructuras de ingeniería civil: 100 años.",
 "Estructuras de edificación y otras estructuras comunes: 100 años; puentes y otras estructuras de ingeniería civil: 50 años.",
 "Estructuras agrícolas y similares: 50 años; estructuras temporales: 15 a 30 años.",
 "Partes reemplazables de la estructura, como vigas carril y aparatos de apoyo: 100 años."],0,
"Tabla 2.1 (diap. 22): categoría 1, temporales, 10 años; 2, partes reemplazables (vigas carril, aparatos de apoyo), 10 a 25; 3, agrícolas y similares, 15 a 30; 4, edificación y estructuras comunes, 50; 5, edificios monumentales, puentes y otras de ingeniería civil, 100. Las demás opciones intercambian categorías.","Apuntes T4, diap. 22");
L("T4","Vida útil",3,"Una nave metálica se proyecta para desmontarla a los 10 años y volver a montarla en otro emplazamiento. Según la tabla de vida útil nominal de los apuntes…",
["no debe considerarse estructura temporal, aunque se desmonte a los 10 años, porque está pensada para reutilizarse.",
 "es una estructura temporal (categoría 1), con una vida útil nominal de 10 años.",
 "es una parte reemplazable (categoría 2), con una vida útil nominal de 10 a 25 años.",
 "es una estructura agrícola o similar (categoría 3), con una vida útil nominal de 15 a 30 años."],0,
"La nota (1) de la tabla 2.1 (diap. 22) dice: «Las estructuras o partes de estructuras que pueden desmontarse con vistas a ser reutilizadas no deben considerarse como temporales». Por eso no le corresponde la categoría 1 aunque su primer montaje dure 10 años. Tampoco es una parte reemplazable (vigas carril, aparatos de apoyo) ni una estructura agrícola.","Apuntes T4, diap. 22");
L("T4","Métodos probabilistas",2,"Señalar la respuesta incorrecta según el resumen de métodos probabilistas de los apuntes.",
["A mayor nivel del método, más precisión, a cambio de necesitar más información, cuya disponibilidad no siempre está garantizada.",
 "El punto de proyecto puede utilizarse para calibrar los factores parciales de seguridad de los métodos de nivel I.",
 "Con el avance de la informática se recurre cada vez más a simulaciones de tipo Monte Carlo para evaluar la integral de la probabilidad de fallo.",
 "El índice de Cornell es independiente de la expresión que define el margen de seguridad, y por eso se prefiere al de Hasofer-Lind."],3,
"Las tres primeras son literales de la diap. 23. La cuarta invierte la idea: el índice de Cornell «generalmente depende de la expresión que define el margen de seguridad» (diap. 20 y 23), y esa es precisamente la ventaja del de Hasofer-Lind, que no depende de ella.","Apuntes T4, diap. 20 y 23");

/* ---- 7. Implementación normativa ---- */
L("T4","Implementación normativa",1,"Según los apuntes, el CTE denomina «métodos probabilistas implícitos» a…",
["los métodos semi-probabilistas, como el de los factores parciales.",
 "los métodos de nivel 3, con distribuciones conjuntas y superficies de fallo exactas.",
 "el método clásico de la tensión admisible.",
 "las simulaciones de tipo Monte Carlo."],0,
"Diap. 24: «El método de los factores parciales pertenece a los métodos semi-probabilistas. A estos métodos el CTE les denomina métodos probabilistas implícitos». La probabilidad de fallo está implícita en los coeficientes calibrados, aunque no se calcula. Los métodos de nivel 3 y Monte Carlo la calculan explícitamente, y la tensión admisible es un método clásico sin base probabilista.","Apuntes T4, diap. 24");
L("T4","Implementación normativa",3,"Según los apuntes, ¿bajo qué hipótesis es posible obtener los coeficientes γS y γR del método de los factores parciales?",
["Fijando la probabilidad de fallo admisible mediante β y admitiendo que las acciones actúan en combinaciones predefinidas, que la distribución de cada combinación responde a un tipo concreto y que las relaciones entre acciones y solicitaciones son conocidas.",
 "Fijando la probabilidad de fallo admisible mediante β y admitiendo que todas las acciones alcanzan simultáneamente su valor máximo.",
 "Admitiendo que las acciones y las resistencias son deterministas y perfectamente conocidas, de modo que β no interviene.",
 "Fijando γS y γR de antemano y obteniendo después, para cada estructura concreta, su índice de fiabilidad, que es lo que comprueba el CTE."],0,
"Son las tres condiciones de la diap. 24, más el valor de β fijado. Suponer que todas las acciones alcanzan a la vez su máximo es lo que se evita con los coeficientes de simultaneidad (diap. 30). Con valores deterministas no habría probabilidad de fallo que fijar. Y el camino es el inverso: se fija β y de él salen γS y γR; el CTE no calcula β para cada estructura.","Apuntes T4, diap. 24 y 30");
L("T4","Factores parciales para las acciones",2,"Según la tabla 4.1 de coeficientes parciales recogida en los apuntes, en una comprobación de resistencia en situación persistente o transitoria se toma…",
["peso propio: 1,35 desfavorable y 0,80 favorable; acciones variables: 1,50 desfavorable y 0 favorable.",
 "peso propio: 1,35 desfavorable y 1,00 favorable; acciones variables: 1,50 desfavorable y 1,00 favorable.",
 "peso propio: 1,10 desfavorable y 0,90 favorable; acciones variables: 1,50 desfavorable y 0 favorable.",
 "peso propio: 1,50 desfavorable y 0,80 favorable; acciones variables: 1,35 desfavorable y 0 favorable."],0,
"Tabla 4.1 (diap. 26), resistencia: peso propio y peso del terreno 1,35/0,80, empuje del terreno 1,35/0,70, presión del agua 1,20/0,90 y variables 1,50/0. Si la acción es favorable, el factor es menor que 1 (y 0 para las variables), nunca 1,00. 1,10/0,90 son los del peso propio en las comprobaciones de estabilidad, y la cuarta opción intercambia 1,35 y 1,50.","Apuntes T4, diap. 26");
L("T4","Factores parciales: estabilidad",3,"Se comprueba el vuelco de un muro. El peso propio produce un momento estabilizador característico de 500 kN·m; el empuje del terreno, uno desestabilizador de 200 kN·m, y el viento (variable), otro desestabilizador de 100 kN·m. Con la tabla 4.1 de los apuntes, la comprobación de estabilidad queda:",
["$E_{d,dst}=1{,}35\\cdot200+1{,}5\\cdot100=420\\text{ kN}\\cdot\\text{m}\\le E_{d,stb}=0{,}90\\cdot500=450\\text{ kN}\\cdot\\text{m}$: cumple.",
 "$E_{d,dst}=200+100=300\\text{ kN}\\cdot\\text{m}\\le E_{d,stb}=500\\text{ kN}\\cdot\\text{m}$: cumple, porque en estabilidad no se aplican coeficientes parciales.",
 "$E_{d,dst}=1{,}10\\cdot200+1{,}5\\cdot100=370\\text{ kN}\\cdot\\text{m}\\le E_{d,stb}=0{,}90\\cdot500=450\\text{ kN}\\cdot\\text{m}$: cumple.",
 "$E_{d,dst}=1{,}35\\cdot200+1{,}5\\cdot100=420\\text{ kN}\\cdot\\text{m}\\gt E_{d,stb}=0{,}80\\cdot500=400\\text{ kN}\\cdot\\text{m}$: no cumple."],0,
"Formato de estabilidad: Ed,dst ≤ Ed,stb (diap. 31), con los coeficientes de la parte de estabilidad de la tabla 4.1 (diap. 26): empuje del terreno desestabilizador 1,35, variable desestabilizadora 1,50 y peso propio estabilizador 0,90. $$E_{d,dst}=1{,}35\\cdot200+1{,}5\\cdot100=270+150=420\\text{ kN}\\cdot\\text{m}$$ $$E_{d,stb}=0{,}90\\cdot500=450\\text{ kN}\\cdot\\text{m}$$ $$420\\le450\\ \\Rightarrow\\ \\boxed{\\text{cumple}}$$ 1,10 es el del peso propio desestabilizador, no el del empuje; 0,80 es el del peso propio favorable en resistencia; y en estabilidad sí se aplican coeficientes parciales.","Apuntes T4, diap. 26 y 31");
L("T4","Factores parciales para las acciones",3,"Señalar la respuesta incorrecta sobre la tabla 4.1 de coeficientes parciales para las acciones de los apuntes.",
["La presión del agua tiene $\\gamma=1{,}20$ como acción desfavorable en resistencia y $\\gamma=1{,}05$ como acción desestabilizadora en estabilidad.",
 "El empuje del terreno tiene el mismo coeficiente, 1,35, como acción desfavorable en resistencia y como desestabilizadora en estabilidad.",
 "Las acciones variables favorables o estabilizadoras se toman con $\\gamma=0$.",
 "El peso propio estabilizador se toma con $\\gamma=0{,}80$, el mismo valor que el peso propio favorable en las comprobaciones de resistencia."],3,
"En la tabla 4.1 (diap. 26) el peso propio estabilizador lleva 0,90, mientras que el favorable en resistencia lleva 0,80: no son iguales. Las otras tres afirmaciones son correctas: agua 1,20 (resistencia) y 1,05 (estabilidad); empuje 1,35 en ambos casos (sus valores favorable y estabilizador sí difieren: 0,70 y 0,80); y variables con 0 cuando son favorables.","Apuntes T4, diap. 26");
L("T4","Factores parciales para la resistencia",2,"Según los apuntes, en estructuras metálicas los coeficientes parciales de la resistencia son…",
["$\\gamma_{M0}=1{,}05$ en las comprobaciones frente a $f_y$, $\\gamma_{M1}=1{,}05$ en las de estabilidad y $\\gamma_{M2}=1{,}25$ en las de rotura.",
 "$\\gamma_{M0}=1{,}10$ en las comprobaciones frente a $f_y$, $\\gamma_{M1}=1{,}25$ en las de estabilidad y $\\gamma_{M2}=1{,}40$ en las de rotura.",
 "$\\gamma_{M0}=1{,}05$ en las comprobaciones frente a $f_y$, $\\gamma_{M1}=1{,}25$ en las de estabilidad y $\\gamma_{M2}=1{,}05$ en las de rotura.",
 "$\\gamma_{M0}=1{,}15$ en las comprobaciones frente a $f_y$, $\\gamma_{M1}=1{,}15$ en las de estabilidad y $\\gamma_{M2}=1{,}50$ en las de rotura."],0,
"Diap. 27: $$\\gamma_{M0}=1{,}05\\ (f_y),\\qquad\\gamma_{M1}=1{,}05\\ (\\text{estabilidad}),\\qquad\\gamma_{M2}=1{,}25\\ (\\text{rotura})$$ y $\\gamma_{M3}=1{,}10/1{,}25/1{,}40$ para el deslizamiento de tornillos. 1,10, 1,25 y 1,40 son los valores de γM3. 1,15 y 1,5 son los del acero de armar (γs) y el hormigón (γc) en situación persistente.","Apuntes T4, diap. 27");
L("T4","Factores parciales para la resistencia",2,"Según los apuntes, el deslizamiento de las uniones atornilladas se comprueba con…",
["$\\gamma_{M3}=1{,}10$ en ELS, $\\gamma_{M3}=1{,}25$ en ELU y $\\gamma_{M3}=1{,}40$ en ELU con agujeros rasgados.",
 "$\\gamma_{M3}=1{,}25$ en ELS, $\\gamma_{M3}=1{,}10$ en ELU y $\\gamma_{M3}=1{,}40$ en ELU con agujeros rasgados.",
 "$\\gamma_{M3}=1{,}40$ en ELS, por ser la comprobación más exigente, y $\\gamma_{M3}=1{,}25$ en ELU.",
 "$\\gamma_{M3}=1{,}25$ solo en ELU; en ELS el deslizamiento de tornillos no se comprueba."],0,
"Diap. 27, deslizamiento de tornillos: $$\\gamma_{M3}=1{,}10\\ (\\text{ELS}),\\qquad\\gamma_{M3}=1{,}25\\ (\\text{ELU}),\\qquad\\gamma_{M3}=1{,}40\\ (\\text{ELU, agujeros rasgados})$$ El coeficiente es menor en servicio que en rotura, como es lógico. El deslizamiento de tornillos sí se comprueba en ELS: es un ELS clásico (en T1 aparece como «otros» ELS).","Apuntes T4, diap. 27");
L("T4","Factores parciales para la resistencia",3,"Un elemento de hormigón armado tiene fck = 30 MPa y armaduras de fyk = 500 MPa. Con los coeficientes parciales de los apuntes, en situación accidental las resistencias de cálculo son:",
["$f_{cd}\\approx23{,}1\\text{ MPa}$ y $f_{yd}=500\\text{ MPa}$",
 "$f_{cd}=20{,}0\\text{ MPa}$ y $f_{yd}\\approx434{,}8\\text{ MPa}$",
 "$f_{cd}\\approx23{,}1\\text{ MPa}$ y $f_{yd}\\approx434{,}8\\text{ MPa}$",
 "$f_{cd}=20{,}0\\text{ MPa}$ y $f_{yd}=500\\text{ MPa}$"],0,
"En situación accidental (diap. 27) γc = 1,3 y γs = 1,0: $$f_{cd}=\\frac{f_{ck}}{\\gamma_c}=\\frac{30}{1{,}3}\\approx\\boxed{23{,}1\\text{ MPa}}$$ $$f_{yd}=\\frac{f_{yk}}{\\gamma_s}=\\frac{500}{1{,}0}=\\boxed{500\\text{ MPa}}$$ 20,0 y 434,8 MPa son los valores de la situación persistente o transitoria (γc = 1,5 y γs = 1,15). Las opciones mixtas combinan un coeficiente de cada situación.","Apuntes T4, diap. 27");
L("T4","Clasificación de acciones",2,"Según los apuntes, una acción indirecta es…",
["una deformación impuesta o una aceleración causada por cambios de temperatura, variaciones de humedad, asientos diferenciales o sismos.",
 "una fuerza aplicada sobre el edificio, como el peso propio o la sobrecarga de uso.",
 "una acción variable que actúa de forma intermitente, como la nieve o el viento.",
 "una acción accidental de corta duración, como un impacto o una explosión."],0,
"Diap. 28: acción directa es la «fuerza aplicada sobre el edificio» y acción indirecta la «deformación impuesta o aceleración causada por cambios de temperatura, variaciones de humedad, asientos diferenciales o sismos». Que una acción sea variable o accidental es otra clasificación, según su variación en el tiempo; la nieve, el viento y un impacto se aplican como fuerzas.","Apuntes T4, diap. 28");
L("T4","Clasificación de acciones",3,"Señalar las respuestas correctas (puede haber más de una) sobre la clasificación de acciones de los apuntes.",
["El pretensado es una acción permanente de valor no constante.",
 "Las sobrecargas de uso, las cargas de tráfico y la nieve son acciones libres en el espacio.",
 "La temperatura es una acción variable de tipo ambiental.",
 "El fuego es una acción variable de tipo ambiental, igual que el viento."],[0,1,2],
"Diap. 28: permanentes de valor no constante son el pretensado y las acciones del terreno; acciones libres, las sobrecargas de uso, las cargas de tráfico y la nieve. En el árbol de la diap. 29, las variables ambientales son nieve, viento y temperatura, mientras que el fuego figura entre las accidentales, junto con el sismo y el impacto.","Apuntes T4, diap. 28-29");
L("T4","Clasificación de acciones",2,"Señalar la respuesta incorrecta sobre la clasificación de acciones de los apuntes.",
["El peso propio es una acción permanente de valor constante y fija en el espacio.",
 "Las acciones del terreno son acciones permanentes de valor no constante.",
 "El sismo es una acción indirecta y, según su variación en el tiempo, una acción accidental.",
 "La sobrecarga de uso de un garaje es una acción permanente, porque los vehículos están aparcados durante la mayor parte de la vida útil."],3,
"La sobrecarga de uso, también la de garajes, es una acción variable de uso (diap. 28-29): «efectos derivados del uso normal». Las otras tres son correctas: el peso propio es permanente de valor constante y fijo en el espacio; las acciones del terreno son permanentes de valor no constante; y el sismo es indirecto (aceleración impuesta) y accidental.","Apuntes T4, diap. 28-29");
L("T4","Valores representativos",1,"Según los apuntes, el valor representativo de una acción es…",
["el producto del valor característico Fk por el coeficiente de simultaneidad ψi.",
 "el producto del valor de cálculo por el coeficiente de simultaneidad ψi.",
 "el producto del valor característico por el coeficiente parcial de seguridad γf.",
 "el valor medio de la acción durante el periodo de referencia."],0,
"Diap. 30: valor representativo es el «producto del valor característico Fk y el coeficiente de simultaneidad ψi». El producto por γf (del característico o del representativo) es el valor de cálculo, y el valor medio es una de las formas posibles de definir el característico.","Apuntes T4, diap. 30");
L("T4","Valor característico",2,"Según los apuntes, el valor característico Fk de una acción…",
["se define, según el caso, por su valor medio, por un fractil superior o inferior, o por un valor nominal.",
 "es siempre el fractil superior del 95 %, sea cual sea la acción.",
 "es el producto del valor representativo por el coeficiente de simultaneidad ψi.",
 "es siempre menor que el valor de cálculo, porque el coeficiente γf es siempre mayor o igual que 1."],0,
"Diap. 30: el valor característico «se define, según el caso, por su valor medio, por un fractil superior o inferior, o por un valor nominal». No siempre es un fractil del 95 %. El representativo se obtiene del característico (ψ·Fk), y no al revés. Y γf puede ser menor que 1 si la acción es favorable (diap. 26 y 30), así que el valor de cálculo puede ser menor que el característico.","Apuntes T4, diap. 26 y 30");
L("T4","Valor de cálculo",2,"Señalar la respuesta correcta según los apuntes.",
["El valor de cálculo es el producto del valor característico o representativo por el coeficiente parcial γf, que puede ser mayor o menor que la unidad según la acción actúe de manera desfavorable o no.",
 "El valor de cálculo de una acción es siempre mayor que su valor característico.",
 "Los coeficientes de simultaneidad sirven para generar las hipótesis en las que la nieve y el viento alcanzan a la vez sus valores máximos.",
 "Ninguna de las anteriores."],0,
"La primera es literal de la diap. 30. El valor de cálculo puede ser menor que el característico cuando γf < 1 (acciones favorables, diap. 26). Los coeficientes de simultaneidad se usan justo para lo contrario: «para no generar hipótesis de cálculo muy improbables o físicamente imposibles como p.e. que la carga de nieve y la de viento alcancen simultáneamente sus valores máximos».","Apuntes T4, diap. 26 y 30");
L("T4","Combinaciones: ELU fundamental",3,"Una viga soporta Gk = 20 kN/m (permanente, desfavorable), una sobrecarga de uso Qk = 10 kN/m (ψ0 = 0,7) y nieve Qk = 5 kN/m (ψ0 = 0,5). Con la combinación fundamental y los coeficientes de la tabla 4.1 de los apuntes, el valor de cálculo determinante de la carga es:",
["45,75 kN/m, con la sobrecarga de uso como acción variable principal.",
 "45,0 kN/m, con la nieve como acción variable principal.",
 "49,5 kN/m, con todas las acciones variables con su valor característico.",
 "41,25 kN/m, con todas las acciones variables reducidas con su ψ0."],0,
"ELU fundamental (diap. 32), con γG = 1,35 y γQ = 1,50 (diap. 26). Hay que probar cada acción variable como principal: $$E_d=\\sum\\gamma_G\\,G_k+\\gamma_{Q,1}\\,Q_{k,1}+\\sum_{i\\gt1}\\gamma_{Q,i}\\,\\psi_{0,i}\\,Q_{k,i}$$ $$\\text{Uso principal: }1{,}35\\cdot20+1{,}5\\cdot10+1{,}5\\cdot0{,}5\\cdot5=\\boxed{45{,}75\\text{ kN/m}}$$ $$\\text{Nieve principal: }1{,}35\\cdot20+1{,}5\\cdot5+1{,}5\\cdot0{,}7\\cdot10=45{,}0\\text{ kN/m}$$ Manda la mayor, con el uso como principal. Tomar todas sin ψ (49,5) o reducir también la principal (41,25) no es la combinación de la norma.","Apuntes T4, diap. 26 y 32");
L("T4","Combinaciones: ELS",3,"Para las mismas acciones (Gk = 20 kN/m; uso Qk = 10 kN/m con ψ0 = 0,7, ψ1 = 0,5 y ψ2 = 0,3; nieve Qk = 5 kN/m con ψ0 = 0,5, ψ1 = 0,2 y ψ2 = 0), el valor de la combinación frecuente de ELS, con el uso como acción principal, es:",
["25 kN/m",
 "32,5 kN/m",
 "23 kN/m",
 "26 kN/m"],0,
"Combinación frecuente (diap. 32), sin coeficientes γ: $$E=\\sum G_k+\\psi_{1,1}\\,Q_{k,1}+\\sum_{i\\gt1}\\psi_{2,i}\\,Q_{k,i}$$ $$E=20+0{,}5\\cdot10+0\\cdot5=\\boxed{25\\text{ kN/m}}$$ 32,5 es la característica (20 + 10 + 0,5·5) y 23 la casi permanente (20 + 0,3·10 + 0·5). 26 sale de usar ψ1 también en la acompañante (20 + 5 + 0,2·5).","Apuntes T4, diap. 32");
L("T4","Combinaciones: ELU accidental",3,"En una situación accidental actúan Gk = 20 kN/m, un impacto de valor de cálculo Ad = 50 kN/m, una sobrecarga de uso Qk = 10 kN/m (principal, desfavorable; ψ1 = 0,5) y nieve Qk = 5 kN/m (ψ2 = 0). Con γG = 1 y la combinación accidental de los apuntes, el valor de cálculo es:",
["75 kN/m",
 "80 kN/m",
 "77,5 kN/m",
 "84,5 kN/m"],0,
"Combinación accidental (diap. 32), con γG = 1 y γQ,1 = 1 por ser desfavorable: $$E_d=\\sum\\gamma_G\\,G_k+A_d+\\gamma_{Q,1}\\,\\psi_{1,1}\\,Q_{k,1}+\\sum_{i\\gt1}\\gamma_{Q,i}\\,\\psi_{2,i}\\,Q_{k,i}$$ $$E_d=20+50+0{,}5\\cdot10+0\\cdot5=\\boxed{75\\text{ kN/m}}$$ 80 toma el uso entero; 77,5 añade la nieve con ψ0 = 0,5; 84,5 aplica a G y Q los coeficientes de la combinación fundamental (1,35·20 + 50 + 1,5·0,5·10).","Apuntes T4, diap. 32");
L("T4","Combinaciones",2,"Según los apuntes, en la combinación frecuente de los estados límite de servicio…",
["la acción variable principal se toma con ψ1 y las acompañantes con ψ2; corresponde a acciones de corta duración y efecto reversible.",
 "la acción variable principal se toma con ψ0 y las acompañantes con ψ1; corresponde a acciones de corta duración y efecto irreversible.",
 "todas las acciones variables se toman con ψ2; corresponde a acciones de larga duración.",
 "la acción variable principal se toma con su valor característico y las acompañantes con ψ0; corresponde a acciones de corta duración y efecto reversible."],0,
"Diap. 32. La frecuente (corta duración, efecto reversible) es $$\\sum G_k+\\psi_{1,1}\\,Q_{k,1}+\\sum_{i\\gt1}\\psi_{2,i}\\,Q_{k,i}$$ La característica o poco frecuente, ΣGk + Qk,1 + Σψ0,i·Qk,i, es de corta duración y efecto irreversible. La casi permanente, ΣGk + Σψ2,i·Qk,i para todas las variables, corresponde a acciones de larga duración.","Apuntes T4, diap. 32");
L("T4","Formato de las comprobaciones",1,"Según los apuntes, el formato de las comprobaciones de los estados límite últimos es…",
["estabilidad: $E_{d,dst}\\le E_{d,stb}$; resistencia: $E_d\\le R_d$.",
 "estabilidad: $E_{d,stb}\\le E_{d,dst}$; resistencia: $R_d\\le E_d$.",
 "estabilidad: $E_d\\le R_d$; resistencia: $E_{d,dst}\\le E_{d,stb}$.",
 "Ninguna de las anteriores."],0,
"Diap. 31: en estabilidad, el efecto de cálculo de las acciones desestabilizadoras no debe superar el de las estabilizadoras (Ed,dst ≤ Ed,stb); en resistencia, el efecto de cálculo de las acciones no debe superar la resistencia de cálculo (Ed ≤ Rd). La segunda opción invierte las desigualdades y la tercera intercambia los dos formatos.","Apuntes T4, diap. 31");
L("T4","Organización de las comprobaciones",2,"Según los apuntes, sobre la organización de las comprobaciones de cada estado límite, señalar la respuesta correcta.",
["En el análisis se determinan esfuerzos y desplazamientos globales (por ejemplo, con un modelo de elementos finitos) y en la comprobación se comparan las capacidades resistentes con las solicitaciones; ambas fases pueden ser elásticas o plásticas.",
 "En el análisis se calculan las capacidades resistentes de las secciones y en la comprobación se obtienen los esfuerzos y desplazamientos globales.",
 "El análisis debe hacerse siempre en régimen elástico y la comprobación siempre en régimen plástico.",
 "En las comprobaciones de los estados límite de servicio se emplean normalmente modelos no lineales."],0,
"Diap. 33: el análisis obtiene esfuerzos y desplazamientos globales (con elementos finitos, desplazamientos nodales y reacciones, y de ellos esfuerzos y tensiones) y la comprobación calcula las capacidades resistentes y las compara con las solicitaciones. «Tanto el análisis como la comprobación puede hacerse en régimen elástico o plástico», y en ELS normalmente se emplean modelos elásticos y lineales.","Apuntes T4, diap. 33");

/* ------------------------------------------------------------ tarjetas (C) */
C("T4","t4-intro","¿Por qué hay muchas soluciones aceptables según la norma?","La norma prescribe métodos y fija <b>valores límite</b> que garantizan <b>requisitos mínimos</b>. El diseño óptimo depende de la <b>ponderación</b> de las prestaciones (diap. 3).");
C("T4","t4-norma","Normas derogadas el 10/11/2021","<b>EHE-08</b> (hormigón) y <b>EAE-11</b> (metálicas). Las sustituye el <b>Código Estructural</b> (CE-21: hormigón, metálicas y mixtas). Siguen NCSE-02, IAP-11 y CTE.");
C("T4","t4-norma","Eurocódigos y anejos nacionales","<b>10</b> Eurocódigos en <b>58 partes</b>, revisados periódicamente. El <b>anejo nacional</b> fija parámetros como los factores parciales o el mapa sísmico.");
C("T4","t4-els","Objetivo y tipos de ELS (CTE)","Comportamiento adecuado ante combinaciones <b>frecuentes</b>, sin afectar a la integridad. Tipos: <b>deformaciones</b> (flechas, asientos, desplomes), <b>vibraciones</b> y <b>daños o deterioro</b>. Ej.: Millennium Bridge, abierto el 10/06/2000 y cerrado el 12/06/2000.");
C("T4","t4-elu","Objetivo de los ELU","Seguridad de los usuarios y de las personas en <b>espacios públicos cercanos</b>. Se refieren a la integridad: <b>puesta fuera de servicio</b> o <b>colapso total o parcial</b>.");
C("T4","t4-elu","Los tres ELU del CTE","1) <b>Pérdida de equilibrio</b> como cuerpo rígido. 2) <b>Fallo</b> por deformación excesiva, mecanismo o rotura (también apoyos, cimentación y uniones). 3) <b>Inestabilidad</b>, también por corrosión o fatiga.");
C("T4","t4-elu","Fallo dúctil frente a frágil","Criterio: <b>deformación plástica</b> del material. Dúctil: grandes deformaciones, <b>avisa</b>. Frágil: pocas o nulas, sin aviso. Las normas insisten en <b>evitar el frágil</b>.");
C("T4","t4-elu","Fallo parcial, global y Ronan Point","Parcial: pocos elementos y redistribución. Global: mecanismo de toda la estructura. Se evita con <b>redundancia</b> (caminos alternativos). Ronan Point (1968): explosión de gas, colapso de una esquina → <b>continuidad de la armadura de forjados adyacentes</b>.");
C("T4","t4-metodos","Deterministas, probabilistas y semi-probabilistas","Deterministas: valores conocidos. Probabilistas: distribuciones → <b>P<sub>f</sub></b>. Semi-probabilistas: valores nominales + <b>coeficientes parciales</b>. Los probabilistas <b>calibran</b> los coeficientes.");
C("T4","t4-metodos","Tensión admisible: estados de carga","<b>I</b> (permanentes, uso, nieve, asientos, ejecución): σ<sub>y</sub>/<b>1,5</b>. <b>II</b> (además viento, térmicos, puentes grúa, sismo): σ<sub>y</sub>/<b>1,33</b>.");
C("T4","t4-fiab","Fiabilidad y probabilidad de fallo","Capacidad de cumplir los objetivos durante un <b>periodo de referencia</b>. $R=1-P_f$. Se calcula P<sub>f</sub> de cada modo de fallo y luego la del sistema.");
C("T4","t4-fiab","Caso fundamental","Dos variables independientes, carga S y resistencia R; fallo si R − S &lt; 0. $P_f=\\int F_R(x)f_S(x)\\,dx$. Ejemplo triangular: P<sub>f</sub> = 1/384.");
C("T4","t4-fiab","β de Cornell","Normales e independientes: $\\beta=\\mu_M/\\sigma_M=(\\mu_R-\\mu_S)/\\sqrt{\\sigma_R^2+\\sigma_S^2}$ y $P_f=\\Phi(-\\beta)$. <b>Depende</b> de cómo se escriba M (M = R − S o M = 1 − S/R).");
C("T4","t4-fiab","β de Hasofer-Lind","Variables normalizadas $\\bar R=(R-\\mu_R)/\\sigma_R$, $\\bar S=(S-\\mu_S)/\\sigma_S$. β = <b>distancia mínima</b> del origen a la superficie de fallo; el punto más cercano es el <b>punto de proyecto</b>.");
C("T4","t4-fiab","Tabla β ↔ P<sub>f</sub>","1,3 → 10⁻¹ · 2,3 → 10⁻² · 3,1 → 10⁻³ · 3,7 → 10⁻⁴ · 4,3 → 10⁻⁵ · 4,8 → 10⁻⁶ · 5,2 → 10⁻⁷.");
C("T4","t4-fiab","β requerido por el CTE (tabla C.2)","Coste elevado: 0 / 1,5 / 2,3 / 3,1. Moderado: 1,3 / 2,3 / 3,1 / 3,8. Bajo: 2,3 / 3,1 / 3,8 / 4,3 (consecuencias despreciables / pequeñas / moderadas / grandes). Para <b>todo el periodo de servicio</b>.");
C("T4","t4-fiab","Vida útil nominal (Código Estructural)","Temporales 10 · reemplazables 10–25 · agrícolas 15–30 · edificación <b>50</b> · monumentales y puentes <b>100</b> años. Lo desmontable para reutilizar <b>no</b> es temporal.");
C("T4","t4-norm","Qué regula la Administración","El <b>nivel de seguridad</b> (β, γ<sub>R</sub>, γ<sub>S</sub>, F, f), la <b>definición de fallo</b> (ELU, ELS) y las <b>situaciones</b> (permanente, transitoria, sísmica, accidental).");
C("T4","t4-norm","Tabla 4.1: γ de las acciones","Resistencia: peso propio 1,35/0,80 · empuje 1,35/0,70 · agua 1,20/0,90 · variable 1,50/0. Estabilidad: 1,10/0,90 · 1,35/0,80 · 1,05/0,95 · 1,50/0.");
C("T4","t4-norm","γ de las resistencias","Acero: γ<sub>M0</sub> = 1,05 (f<sub>y</sub>), γ<sub>M1</sub> = 1,05 (estabilidad), γ<sub>M2</sub> = 1,25 (rotura), γ<sub>M3</sub> = 1,10/1,25/1,40 (tornillos ELS/ELU/rasgados). Hormigón: γ<sub>c</sub> = 1,5 y γ<sub>s</sub> = 1,15; accidental 1,3 y 1,0.");
C("T4","t4-norm","Característico, representativo y de cálculo","F<sub>k</sub>: media, fractil o valor nominal. Representativo: <b>ψ·F<sub>k</sub></b>. De cálculo: <b>γ<sub>f</sub>·F<sub>k</sub></b> o γ<sub>f</sub>·F<sub>rep</sub> (γ<sub>f</sub> &lt; 1 si es favorable).");
C("T4","t4-norm","Las seis combinaciones","ELU fundamental: γG + γQ<sub>1</sub> + γψ<sub>0</sub>Q. Accidental: γG + A<sub>d</sub> + ψ<sub>1</sub>Q<sub>1</sub> + ψ<sub>2</sub>Q. Sismo: G + A<sub>d</sub> + ψ<sub>2</sub>Q. ELS característica: G + Q<sub>1</sub> + ψ<sub>0</sub>Q. Frecuente: G + ψ<sub>1</sub>Q<sub>1</sub> + ψ<sub>2</sub>Q. Casi permanente: G + ψ<sub>2</sub>Q.");

/* ------------------------------------------------- ejercicios (DRILLS) */
DRILLS.push(
{ id: "t4-c-acciones", type: "classify", tema: "T4", sec: "t4-norm", title: "¿Permanente, variable o accidental?", cats: ["Permanente (G)", "Variable (Q)", "Accidental (A)"],
  items: [["Peso propio", 0], ["Pretensado", 0], ["Empujes y acciones del terreno", 0], ["Sobrecarga de uso en viviendas", 1], ["Sobrecarga de uso en garajes", 1], ["Nieve", 1], ["Viento", 1], ["Temperatura", 1], ["Sismo", 2], ["Fuego", 2], ["Impacto", 2]] },
{ id: "t4-c-elsu", type: "classify", tema: "T4", sec: "t4-elu", title: "ELS o ELU (CTE)", cats: ["ELS · servicio", "ELU · último"],
  items: [["Flechas, asientos o desplomes", 0], ["Vibraciones con falta de confort (Millennium Bridge)", 0], ["Daños que afectan a la apariencia o la durabilidad", 0], ["Pérdida de equilibrio como cuerpo rígido", 1], ["Transformación de la estructura en un mecanismo", 1], ["Rotura de apoyos, cimentación o uniones", 1], ["Inestabilidad por corrosión o fatiga", 1], ["Deslizamiento de tornillos con γM3 = 1,10", 0], ["Comportamiento adecuado ante combinaciones frecuentes", 0], ["Riesgo para personas en espacios públicos cercanos", 1], ["Se suele comprobar con modelos elásticos y lineales", 0]] },
{ id: "t4-c-psi", type: "classify", tema: "T4", sec: "t4-norm", title: "¿Con qué valor entra la acción variable?", cats: ["Qk entero", "ψ0·Qk", "ψ1·Qk", "ψ2·Qk"],
  items: [["Variable principal en la combinación fundamental (ELU)", 0], ["Variable principal en la combinación característica (ELS)", 0], ["Acompañantes en la combinación fundamental", 1], ["Acompañantes en la combinación característica", 1], ["Variable principal en la combinación frecuente", 2], ["Variable principal en la combinación accidental", 2], ["Acompañantes en la combinación frecuente", 3], ["Acompañantes en la combinación accidental", 3], ["Todas las variables en la casi permanente", 3], ["Todas las variables en la combinación sísmica", 3]] },
{ id: "t4-m-gamma", type: "match", tema: "T4", sec: "t4-norm", title: "Coeficiente parcial ↔ comprobación", pairs: [["γM0 = 1,05", "Acero: comprobaciones frente a fy"], ["γM2 = 1,25", "Acero: comprobaciones en rotura"], ["γM3 = 1,10", "Deslizamiento de tornillos en ELS"], ["γM3 = 1,40", "Deslizamiento en ELU con agujeros rasgados"], ["γc = 1,3", "Hormigón en situación accidental"], ["γs = 1,15", "Acero pasivo y activo, situación persistente"], ["γ = 0,90", "Peso propio estabilizador"], ["γ = 0,70", "Empuje del terreno favorable (resistencia)"]] },
{ id: "t4-m-fiab", type: "match", tema: "T4", sec: "t4-fiab", title: "Fiabilidad: β, Pf y vida útil", pairs: [["β = 2,3", "Pf = 10⁻²"], ["β = 3,1", "Pf = 10⁻³"], ["β = 3,8", "Consecuencias grandes, coste moderado"], ["β = 4,3", "Consecuencias grandes, coste bajo"], ["50 años", "Edificación y estructuras comunes"], ["100 años", "Monumentales, puentes e ingeniería civil"], ["15 a 30 años", "Estructuras agrícolas y similares"]] }
);

/* Trucos de memoria (elaborados para la app; no están en los apuntes) */
Object.assign(MNEMO, {
  "t4-intro": ["La norma marca el <b>suelo</b>, no el techo: <b>mínimos</b> que dejan <b>muchas</b> soluciones aceptables.", "<b>Rumanía 225</b>: rebajar el sismo abarata la obra y <b>recorta la seguridad</b>."],
  "t4-norma": ["<b>«EHE y EAE se van en 2021»</b>: las dos instrucciones de material se funden en el <b>Código Estructural</b>.", "Eurocódigos <b>10 en 58</b>. Truco de números: el <b>7</b> es la tierra (geotecnia), el <b>8</b> el terremoto y el <b>9</b> el aluminio, el último en llegar."],
  "t4-els": ["ELS = <b>«lo que se ve y se nota»</b>: se <b>ve</b> (flechas, desplomes, daños) y se <b>nota</b> (vibraciones).", "<b>Millennium: dos días</b> abierto (10 → 12 de junio de 2000) y cerrado por <b>vibrar</b>, sin caerse."],
  "t4-elu": ["Los ELU del CTE, <b>«E-F-I»</b>: <b>E</b>quilibrio, <b>F</b>allo (deformación, mecanismo, rotura) e <b>I</b>nestabilidad.", "<b>Dúctil = Delata</b> (avisa); <b>frágil = fulminante</b>. Parcial/global va de la <b>extensión</b>, no del material.", "<b>Ronan Point: cerilla → esquina → continuidad</b> de armaduras entre forjados."],
  "t4-metodos": ["<b>1,5 en tiempo de paz, 1,33 con viento</b>: el estado II admite más tensión porque es menos probable que todo coincida.", "Estados límite: <b>las cargas suben (×γ) y las resistencias bajan (÷γ)</b>."],
  "t4-fiab": ["<b>Cornell = cociente</b> (μ/σ). <b>Hasofer-Lind = distancia</b> (al origen, normalizado).", "β ↔ P<sub>f</sub>: <b>«1,3 · 2,3 · 3,1 · 3,7 · 4,3»</b> = 10⁻¹ a 10⁻⁵. Truco: β ≈ 3 → <b>1 entre mil</b>.", "Las varianzas se <b>suman</b>, las desviaciones no: $\\sigma_M=\\sqrt{\\sigma_R^2+\\sigma_S^2}$.", "Vida útil: <b>10 · 25 · 30 · 50 · 100</b>. Si se puede desmontar para reutilizar, <b>no es temporal</b>."],
  "t4-norm": ["<b>ψ0 combina, ψ1 frecuenta, ψ2 permanece</b>. Cuanto más dura la situación, menor es el ψ.", "Peso propio: <b>1,35 para hundir y 0,80 para ayudar</b> en resistencia; <b>1,10 y 0,90</b> en estabilidad. Las variables favorables valen <b>0</b>.", "En la accidental, <b>«uno y dos»</b>: ψ<sub>1</sub> a la principal y ψ<sub>2</sub> al resto. En el sismo, <b>todo ψ<sub>2</sub></b>."]
});

/* ------------------------------------------- esquemas SVG y figuras originales */
(function () {
const T = (x, y, s, cls = "", a = "start") => `<text x="${x}" y="${y}" class="${cls}" text-anchor="${a}">${s}</text>`;
const W = (vb, body, label) => `<svg class="dg" viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;
const MK = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#475569"/></marker><marker id="${id}r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c2413b"/></marker></defs>`;
const g = (x, mu, sd, amp) => amp * Math.exp(-0.5 * ((x - mu) / sd) ** 2);
const curve = (mu, sd, amp, x0, x1, base) => { let d = ""; for (let x = x0; x <= x1; x += 2) d += (d ? "L" : "M") + x + " " + (base - g(x, mu, sd, amp)).toFixed(1); return d; };
const D = [];

/* ---------- 3 · ELS ---------- */
D.push({ sec: "t4-els", h4: "Millennium Bridge", img: "img/fig/t4-millennium-bridge.jpg", alt: "Millennium Bridge de Londres sobre el Támesis, diapositiva 9", cap: "<b>Figura original (T4, diap. 9)</b>: el Millennium Bridge de Londres. Fíjate en lo esbelto y ligero que es el tablero: se inauguró el 10 de junio de 2000 y se cerró el 12 por exceso de vibraciones, un <b>ELS</b> (funcionalidad reducida), sin colapso." });

/* ---------- 2 · Marco normativo ---------- */
D.push({ sec: "t4-norma", h4: "Pasado, presente y futuro", img: "img/fig/t4-marco-normativo.jpg", alt: "Esquema pasado, presente y futuro de la normativa estructural española, diapositiva 5", cap: "<b>Figura original (T4, diap. 5)</b>: la flecha «Derogados en 10/11/2021» lleva la <b>EHE-08</b> y la <b>EAE-11</b> al <b>Código Estructural</b>. NCSE-02, IAP-11, CE-21 y CTE forman el presente; las UNE-EN-199X (Eurocódigos), el futuro." });

/* ---------- 4 · ELU y fallo progresivo ---------- */
// fallo parcial con redundancia frente a fallo progresivo sin continuidad
(function () {
  const bay = 62, h = 44, x0 = 30, yb = 210;
  const cols = [0, 1, 2, 3].map(i => x0 + i * bay);
  let L = "";
  for (let f = 1; f <= 3; f++) L += `<path d="M${x0} ${yb - f * h}H${x0 + 3 * bay}" class="beam2" stroke-width="3"/>`;
  cols.forEach((x, i) => { for (let f = 0; f < 3; f++) { const lost = i === 1 && f === 0; L += `<path d="M${x} ${yb - f * h}V${yb - (f + 1) * h}" stroke="${lost ? "#c2413b" : "#334155"}" stroke-width="${lost ? 2 : 3}" ${lost ? 'stroke-dasharray="5 4"' : ""}/>`; } });
  L += `<path d="M${cols[1] - 8} ${yb - 30}l16 16M${cols[1] + 8} ${yb - 30}l-16 16" stroke="#c2413b" stroke-width="2.5"/>`;
  // caminos alternativos
  L += `<path d="M${cols[1]} ${yb - h - 6}Q${cols[1] - 30} ${yb - h - 26} ${cols[0] + 4} ${yb - h - 4}" fill="none" stroke="#0f8a5f" stroke-width="2" marker-end="url(#t4fpg)"/>`;
  L += `<path d="M${cols[1]} ${yb - h - 6}Q${cols[1] + 30} ${yb - h - 26} ${cols[2] - 4} ${yb - h - 4}" fill="none" stroke="#0f8a5f" stroke-width="2" marker-end="url(#t4fpg)"/>`;
  L += `<path d="M${x0 - 12} ${yb}H${x0 + 3 * bay + 12}" stroke="#334155" stroke-width="4"/>`;
  // derecha: paneles apilados con una esquina que cae en cascada
  const px = 330, pw = 54, ph = 26;
  let R = "";
  for (let f = 0; f < 5; f++) for (let c = 0; c < 3; c++) {
    const corner = c === 2 && f >= 1, y = yb - (f + 1) * ph;
    R += corner ? "" : `<rect x="${px + c * pw}" y="${y}" width="${pw - 3}" height="${ph - 3}" fill="#e2e8f0" stroke="#64748b"/>`;
  }
  [[2, 3], [1, 5], [0, 7]].forEach(([k, n], j) => { R += `<rect x="${px + 2 * pw + 8 + j * 9}" y="${yb - 8 - k * 7}" width="${pw - 12}" height="10" fill="#fecaca" stroke="#c2413b" transform="rotate(${8 + j * 9} ${px + 2 * pw + 30} ${yb - k * 7})"/>`; });
  R += `<circle cx="${px + 2 * pw + 26}" cy="${yb - 3.5 * ph}" r="11" fill="#fde68a" stroke="#b26a00" stroke-width="1.5"/>${T(px + 2 * pw + 26, yb - 3.5 * ph + 4, "!", "tb", "middle")}`;
  R += `<path d="M${px + 2 * pw + 26} ${yb - 3.5 * ph + 16}V${yb - 34}" stroke="#c2413b" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#t4fpr)"/>`;
  R += `<path d="M${px - 12} ${yb}H${px + 3 * pw + 40}" stroke="#334155" stroke-width="4"/>`;
  D.push({ sec: "t4-elu", h4: "Fallo parcial, global y progresivo", cap: "<b>Izquierda</b>: estructura <b>redundante</b>. Falla un pilar (en rojo) y las cargas que soportaba encuentran <b>caminos alternativos</b> (en verde): el fallo queda <b>parcial</b> y se redistribuyen las fuerzas (T4, diap. 12). <b>Derecha</b>: muros de <b>paneles prefabricados</b> apilados sin continuidad, como en Ronan Point (diap. 13). Una explosión en un piso elimina un panel, los de encima pierden el apoyo y la esquina se desploma en cascada: <b>fallo progresivo</b>. La solución fue dar continuidad a la armadura de forjados adyacentes. Esquema elaborado para la app.",
    svg: W("0 0 560 270", `<defs><marker id="t4fpg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#0f8a5f"/></marker><marker id="t4fpr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c2413b"/></marker></defs>
    ${T(123, 22, "Con redundancia", "tb", "middle")}${T(123, 40, "fallo parcial + redistribución", "small2", "middle")}
    ${L}
    ${T(123, 234, "falla 1 pilar →", "small2 ko", "middle")}${T(123, 252, "cargas por caminos alternativos", "small2 ok2", "middle")}
    <line x1="268" y1="14" x2="268" y2="258" class="dash"/>
    ${T(420, 22, "Sin continuidad", "tb", "middle")}${T(420, 40, "fallo progresivo (Ronan Point)", "small2", "middle")}
    ${R}
    ${T(420, 234, "explosión en un piso →", "small2 ko", "middle")}${T(420, 252, "cae toda la esquina", "small2 ko", "middle")}`, "Fallo parcial con caminos alternativos frente a fallo progresivo de una esquina de paneles") });
})();
D.push({ sec: "t4-elu", h4: "Fallo parcial, global y progresivo", img: "img/fig/t4-ronan-point.jpg", alt: "Torre Ronan Point con una esquina colapsada, diapositiva 13", cap: "<b>Figura original (T4, diap. 13)</b>: Ronan Point (Londres, 1968). Mira la <b>esquina derecha</b>: falta de arriba abajo. La explosión de gas en un piso intermedio bastó para que se desplomaran en cadena los paneles prefabricados de toda la esquina." });

/* ---------- 5 · Métodos de comprobación ---------- */
D.push({ sec: "t4-metodos", h4: "Deterministas, probabilistas", cap: "Los tres tipos de comprobación de la diap. 14. El <b>determinista</b> trabaja con valores conocidos; el <b>probabilista</b>, con distribuciones, y obtiene la probabilidad de fallo; el <b>semi-probabilista</b> parte de valores nominales y aplica coeficientes parciales. La flecha roja indica que los métodos probabilistas sirven para <b>calibrar</b> los coeficientes del semi-probabilista, el que usan las normas (el CTE lo llama probabilista implícito, diap. 24). Esquema elaborado para la app.",
  svg: W("0 0 560 250", `${MK("t4me")}
  ${[["Determinista", 20], ["Semi-probabilista", 200], ["Probabilista", 380]].map(([t, x]) => `<rect x="${x}" y="20" width="160" height="160" rx="10" class="box"/>${T(x + 80, 44, t, "tb", "middle")}`).join("")}
  <path d="M40 140H160" class="ax"/><path d="M100 140V80" stroke="#1e40af" stroke-width="3"/><circle cx="100" cy="78" r="5" fill="#1e40af"/>
  ${T(100, 160, "valor conocido", "small2", "middle")}
  <path d="M220 140H340" class="ax"/><path d="M255 140V96" stroke="#1e40af" stroke-width="3"/><path d="M305 140V110" stroke="#0891b2" stroke-width="3"/>
  <path d="M255 96V72" stroke="#c2413b" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#t4mer)"/><path d="M305 110V128" stroke="#c2413b" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#t4mer)"/>
  ${T(240, 68, "×γ", "small2 ko", "end")}${T(316, 104, "÷γ", "small2 ko")}
  ${T(280, 160, "Fk·γ  ≤  fk/γ", "small2", "middle")}
  <path d="M400 140H540" class="ax"/>
  <path d="${curve(440, 14, 62, 400, 500, 140)}" class="ln"/><path d="${curve(495, 13, 58, 450, 540, 140)}" class="ln3"/>
  ${T(432, 70, "S", "tb", "middle")}${T(503, 76, "R", "tb", "middle")}
  ${T(460, 160, "→ Pf", "small2", "middle")}
  <path d="M450 186Q370 236 290 190" fill="none" stroke="#c2413b" stroke-width="2" marker-end="url(#t4mer)"/>
  ${T(370, 238, "calibran los coeficientes γ", "small2 ko", "middle")}`, "Comprobación determinista, semi-probabilista y probabilista") });

/* ---------- 6 · Fiabilidad ---------- */
// caso fundamental: densidades de S y R, y margen M con β·σM
(function () {
  const base = 196;
  let ov = ""; for (let x = 60; x <= 200; x += 2) { const y = Math.min(g(x, 100, 26, 120), g(x, 175, 22, 128)); ov += (ov ? "L" : "M") + x + " " + (base - y).toFixed(1); }
  ov += `L200 ${base}L60 ${base}Z`;
  let pf = ""; for (let x = 300; x <= 350; x += 2) pf += (pf ? "L" : "M") + x + " " + (base - g(x, 440, 42, 125)).toFixed(1); pf += `L350 ${base}L300 ${base}Z`;
  D.push({ sec: "t4-fiab", h4: "Índice de fiabilidad de Cornell", cap: "<b>Izquierda</b>: caso fundamental (diap. 17). La carga S y la resistencia R son independientes; el solape de sus densidades (en rojo) indica dónde puede ser R &lt; S y da una idea de P<sub>f</sub>. El valor exacto es $\\int F_R f_S\\,dx$, no el área de solape. <b>Derecha</b>: con R y S normales, el margen $M=R-S$ es normal, con $\\mu_M=\\mu_R-\\mu_S$ y $\\sigma_M^2=\\sigma_R^2+\\sigma_S^2$ (diap. 19). P<sub>f</sub> es el área a la izquierda de 0, y la media está a <b>$\\beta\\,\\sigma_M$</b> de 0: $\\beta=\\mu_M/\\sigma_M$. Esquema elaborado para la app.",
    svg: W("0 0 560 250", `${MK("t4cf")}
    <path d="M20 ${base}H262M20 ${base}V40" class="ax" marker-end="url(#t4cf)"/>
    <path d="${ov}" fill="#fecaca" stroke="none"/>
    <path d="${curve(100, 26, 120, 24, 220, base)}" class="ln"/><path d="${curve(175, 22, 128, 100, 258, base)}" class="ln3"/>
    ${T(84, 62, "carga S", "tb", "middle")}${T(196, 56, "resistencia R", "tb", "middle")}
    ${T(140, 222, "solape: R &lt; S posible", "small2 ko", "middle")}
    ${T(140, 242, "Pf = ∫ FR(x)·fS(x) dx", "small2", "middle")}
    <line x1="280" y1="14" x2="280" y2="240" class="dash"/>
    <path d="M296 ${base}H548" class="ax" marker-end="url(#t4cf)"/>
    <path d="${pf}" fill="#fecaca" stroke="#c2413b"/>
    <path d="M350 ${base + 4}V46" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/>${T(350, 40, "0", "tb", "middle")}
    <path d="${curve(440, 42, 125, 300, 546, base)}" class="ln"/>
    <path d="M440 ${base}V${base - 125}" class="dash"/>${T(440, base + 16, "μM", "small2", "middle")}
    <path d="M352 ${base - 98}H436" stroke="#c2413b" stroke-width="2" marker-start="url(#t4cfr)" marker-end="url(#t4cfr)"/>
    ${T(394, base - 106, "β·σM", "small2 ko", "middle")}
    ${T(520, 60, "M = R − S", "tb", "middle")}
    ${T(318, 222, "Pf = Φ(−β)", "small2 ko")}
    ${T(440, 242, "β = μM / σM", "small2 tb", "middle")}`, "Densidades de carga y resistencia y distribución del margen de seguridad con beta por sigma") });
})();

// Hasofer-Lind: espacio normalizado, recta de fallo, distancia mínima
(function () {
  const O = [360, 200], A = [70, 222], B = [470, 26];
  const dx = B[0] - A[0], dy = B[1] - A[1], t = ((O[0] - A[0]) * dx + (O[1] - A[1]) * dy) / (dx * dx + dy * dy);
  const P = [A[0] + t * dx, A[1] + t * dy];
  const nx = -dy / Math.hypot(dx, dy), ny = dx / Math.hypot(dx, dy);
  let hatch = ""; for (let s = 0.06; s < 0.97; s += 0.06) { const x = A[0] + s * dx, y = A[1] + s * dy; hatch += `<path d="M${x.toFixed(1)} ${y.toFixed(1)}l${(-nx * 10 - dx / Math.hypot(dx, dy) * 4).toFixed(1)} ${(-ny * 10 - dy / Math.hypot(dx, dy) * 4).toFixed(1)}" stroke="#c2413b" stroke-width="1.4"/>`; }
  const ux = dx / Math.hypot(dx, dy), uy = dy / Math.hypot(dx, dy), q = 10;
  D.push({ sec: "t4-fiab", h4: "Índice de Hasofer-Lind", cap: "Definición de Hasofer-Lind (diap. 20). Se normalizan las variables, $\\bar R=(R-\\mu_R)/\\sigma_R$ y $\\bar S=(S-\\mu_S)/\\sigma_S$, de modo que el punto de valores medios pasa a ser el <b>origen</b>. La superficie de fallo M̄ = 0 separa la región de fallo (rayada) de la segura, y <b>β es la distancia mínima</b> del origen a esa superficie. El pie de la perpendicular es el <b>punto de proyecto</b>, el que sirve para calibrar los factores parciales (diap. 23). Esquema elaborado para la app, inspirado en la figura de la diapositiva.",
    svg: W("0 0 560 260", `${MK("t4hl")}
    <path d="M30 ${O[1]}H540" class="ax" marker-end="url(#t4hl)"/><path d="M${O[0]} 246V22" class="ax" marker-end="url(#t4hl)"/>
    ${T(536, O[1] + 20, "R̄", "tb", "end")}${T(O[0] + 10, 30, "S̄", "tb")}
    <path d="M${A[0]} ${A[1]}L${B[0]} ${B[1]}" stroke="#1e3a8a" stroke-width="3"/>${hatch}
    ${T(36, 56, "Región de fallo", "tb ko")}${T(36, 74, "M̄ &lt; 0", "small2 ko")}
    ${T(484, 104, "Región segura", "tb ok2", "middle")}${T(484, 122, "M̄ &gt; 0", "small2 ok2", "middle")}
    <circle cx="${O[0]}" cy="${O[1]}" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>${T(O[0] + 10, O[1] + 20, "origen = (μR, μS)", "small2")}
    <path d="M${O[0]} ${O[1]}L${P[0].toFixed(1)} ${P[1].toFixed(1)}" stroke="#c2413b" stroke-width="2.5"/>
    <path d="M${(P[0] + ux * q).toFixed(1)} ${(P[1] + uy * q).toFixed(1)}l${(-nx * q).toFixed(1)} ${(-ny * q).toFixed(1)}l${(-ux * q).toFixed(1)} ${(-uy * q).toFixed(1)}" fill="none" stroke="#c2413b" stroke-width="1.3"/>
    <circle cx="${P[0].toFixed(1)}" cy="${P[1].toFixed(1)}" r="5" fill="#c2413b"/>
    ${T((O[0] + P[0]) / 2 - 12, (O[1] + P[1]) / 2 + 8, "β", "tb ko", "end")}
    <path d="M374 160L${(P[0] + 6).toFixed(1)} ${(P[1] + 5).toFixed(1)}" stroke="#c2413b" stroke-width="1" stroke-dasharray="3 2"/>${T(378, 168, "punto de proyecto", "small2 ko")}
    ${T(30, 244, "β = distancia mínima del origen a M̄ = 0", "small2 tb")}`, "Espacio normalizado de Hasofer-Lind con la superficie de fallo y beta como distancia mínima") });
})();
D.push({ sec: "t4-fiab", h4: "β requerido por el CTE", img: "img/fig/t4-vida-util.jpg", alt: "Tabla 2.1 de vida útil nominal del Código Estructural, diapositiva 22", cap: "<b>Figura original (T4, diap. 22)</b>: tabla 2.1 de vida útil nominal (anejo 18 del Código Estructural). Fíjate en las categorías 4 (<b>50 años</b>, edificación) y 5 (<b>100 años</b>, monumentales y puentes), y en la nota (1): lo que se desmonta para reutilizarse <b>no</b> es temporal." });
D.push({ sec: "t4-fiab", h4: "β requerido por el CTE", img: "img/fig/t4-tabla-beta-cte.jpg", alt: "Tabla C.2 del CTE con el índice de fiabilidad requerido y relación entre beta y probabilidad de fallo, diapositiva 21", cap: "<b>Figura original (T4, diap. 21)</b>: tabla C.2 del DB SE. Lee el título: los valores se refieren a <b>todo el periodo de servicio</b>. β crece hacia la derecha (consecuencias más graves) y hacia abajo (es más barato mejorar la fiabilidad). Debajo, la correspondencia β ↔ P<sub>f</sub>." });

/* ---------- 7 · Implementación normativa ---------- */
D.push({ sec: "t4-norm", h4: "Factores parciales de seguridad", img: "img/fig/t4-gamma-acciones.jpg", alt: "Tabla 4.1 de coeficientes parciales de seguridad para las acciones, diapositiva 26", cap: "<b>Figura original (T4, diap. 26)</b>: tabla 4.1. Compara las dos mitades: en <b>resistencia</b> el peso propio va con 1,35/0,80 y en <b>estabilidad</b> con 1,10/0,90. Las variables favorables o estabilizadoras valen <b>0</b>." });
D.push({ sec: "t4-norm", h4: "Clasificación de acciones", img: "img/fig/t4-clasificacion-acciones.jpg", alt: "Árbol de clasificación de acciones en permanentes, variables y accidentales, diapositiva 29", cap: "<b>Figura original (T4, diap. 29)</b>: árbol de clasificación de acciones. Fíjate en que las variables se dividen en <b>uso</b> y <b>ambientales</b> (nieve, viento, temperatura), y en que el <b>fuego</b> y el <b>sismo</b> son accidentales." });
// escalera de valores representativos
(function () {
  const rows = [["Qk", "característico", 1, "principal en la fundamental y en la característica"], ["ψ0·Qk", "de combinación", 0.7, "acompañantes en la fundamental y en la característica"], ["ψ1·Qk", "frecuente", 0.5, "principal en la frecuente y en la accidental"], ["ψ2·Qk", "casi permanente", 0.3, "acompañantes en frecuente y accidental; todas en casi permanente y sismo"]];
  const cols = ["#1e40af", "#2563eb", "#0891b2", "#0d9488"];
  D.push({ sec: "t4-norm", h4: "Valores característico, representativo", cap: "Escalera de valores de una acción variable. El valor característico Q<sub>k</sub> se reduce con los coeficientes de simultaneidad (valor representativo ψ·Q<sub>k</sub>, diap. 30) para no combinar máximos que no coinciden. Debajo de cada barra, dónde se usa según las fórmulas de la diap. 32. Las longitudes de las barras siguen el ejemplo de la vivienda del CTE (0,7 / 0,5 / 0,3), que no está en las diapositivas. Los nombres «de combinación», «frecuente» y «casi permanente» son los del CTE. Esquema elaborado para la app.",
    svg: W("0 0 560 316", `${rows.map(([s, n, f, use], i) => { const y = 24 + i * 70; return `${T(20, y + 16, s, "tb")}${T(20, y + 34, n, "small2 mut")}<rect x="150" y="${y}" width="${(f * 380).toFixed(0)}" height="24" rx="4" fill="${cols[i]}" opacity=".85"/>${T(150 + f * 380 - 8, y + 17, f === 1 ? "100 %" : "×" + String(f).replace(".", ","), "small2", "end").replace('class="small2"', 'class="small2" style="fill:#fff;font-weight:700"')}${T(20, y + 54, "→ " + use, "small2")}`; }).join("")}
    ${T(20, 308, "Fd = γf · ψ · Qk  (valor de cálculo)", "small2 tb")}`, "Escalera de valores característico, de combinación, frecuente y casi permanente") });
})();
D.push({ sec: "t4-norm", h4: "Formato de las comprobaciones", img: "img/fig/t4-combinaciones.jpg", alt: "Combinaciones de acciones para estados límite últimos y de servicio, diapositiva 32", cap: "<b>Figura original (T4, diap. 32)</b>: las seis combinaciones. Sigue el subíndice de ψ: <b>ψ<sub>0</sub></b> en la fundamental y la característica, <b>ψ<sub>1</sub></b> en la principal de la accidental y la frecuente, y <b>ψ<sub>2</sub></b> en el resto. En ELS no aparece ningún γ." });
// flujo característico → representativo → cálculo → análisis → comprobación
D.push({ sec: "t4-norm", h4: "Organización de las comprobaciones", cap: "Del dato a la comprobación. <b>Arriba</b>: cada acción pasa de su valor característico al representativo (×ψ) y al de cálculo (×γ<sub>f</sub>), y se agrupa en las combinaciones (diap. 30 y 32). <b>Abajo</b>: con cada combinación se hace el <b>análisis</b> (esfuerzos y desplazamientos, por ejemplo con elementos finitos) y la <b>comprobación</b> (capacidades frente a solicitaciones) con los formatos de la diap. 31. Ambas fases pueden ser elásticas o plásticas; en ELS se suelen usar modelos elásticos y lineales (diap. 33). Esquema elaborado para la app.",
  svg: W("0 0 560 250", `${MK("t4fl")}
  ${[["Fk", "característico", 14], ["ψ·Fk", "representativo", 200], ["γf·ψ·Fk", "de cálculo", 386]].map(([a, b, x]) => `<rect x="${x}" y="20" width="160" height="58" rx="10" class="box"/>${T(x + 80, 44, a, "tb", "middle")}${T(x + 80, 64, b, "small2", "middle")}`).join("")}
  <path d="M176 49H196" class="ah2" marker-end="url(#t4fl)"/><path d="M362 49H382" class="ah2" marker-end="url(#t4fl)"/>
  ${T(186, 100, "×ψ", "small2 ko", "middle")}${T(372, 100, "×γf", "small2 ko", "middle")}
  <path d="M466 80V120H280V138" class="ah2" marker-end="url(#t4fl)"/>${T(290, 116, "combinaciones ELU / ELS", "small2 tb")}
  <rect x="40" y="142" width="220" height="70" rx="10" fill="#eef6ff" stroke="#2563eb" stroke-width="1.5"/>
  ${T(150, 166, "1 · Análisis", "tb", "middle")}${T(150, 186, "esfuerzos y desplazamientos", "small2", "middle")}${T(150, 203, "(p. ej. elementos finitos)", "small2 mut", "middle")}
  <rect x="300" y="142" width="220" height="70" rx="10" fill="#ecfdf5" stroke="#0f8a5f" stroke-width="1.5"/>
  ${T(410, 166, "2 · Comprobación", "tb", "middle")}${T(410, 186, "Ed ≤ Rd", "small2", "middle")}${T(410, 203, "Ed,dst ≤ Ed,stb", "small2", "middle")}
  <path d="M262 177H296" class="ah2" marker-end="url(#t4fl)"/>
  ${T(280, 238, "elástico o plástico · en ELS, elástico y lineal", "small2 mut", "middle")}`, "Flujo del valor característico al de cálculo y fases de análisis y comprobación") });

D.forEach(d => window.DIAGRAMS.push(d));
})();
