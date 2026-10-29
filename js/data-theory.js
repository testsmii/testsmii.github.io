/* =====================================================================
   TEMARIO — basado en los apuntes adjuntos:
   01_Introducción_y_Objetivos.pdf (T1)
   02.1_Tipologías_Estructurales.pdf (T2)
   02.4_Tipologías_Estructurales_cimentaciones.pdf (T23; su portada lo titula 2.3)
   03_Materiales.pdf (T3)
   Los recuadros "Ampliación" contienen conocimiento general de ingeniería
   que NO aparece en los apuntes; se marcan explícitamente.
   ===================================================================== */

const TOPICS = [
  { id: "T1", num: "1", short: "Introducción", title: "Introducción y objetivos", file: "01_Introducción_y_Objetivos.pdf", color: "#2563eb" },
  { id: "T2", num: "2.1", short: "Tipologías", title: "Tipologías estructurales", file: "02.1_Tipologías_Estructurales.pdf", color: "#0891b2" },
  { id: "T23", num: "2.3", short: "Cimentaciones", title: "Estructuras que interaccionan con el suelo: cimentaciones", file: "02.4_Tipologías_Estructurales_cimentaciones.pdf", color: "#7c3aed" },
  { id: "T3", num: "3", short: "Materiales", title: "Materiales", file: "03_Materiales.pdf", color: "#0d9488" },
  { id: "T4", num: "4", short: "Prestaciones", title: "Prestaciones exigidas a las estructuras", file: "04_Prestaciones_exigidas_a_las_estructuras.pdf", color: "#c2410c" }
];

const MISSING_TOPICS = [
  { num: "5", title: "Cálculo estructural", note: "No hay apuntes adjuntos de este tema." }
];

const THEORY = {
/* ------------------------------------------------------------------ T1 */
T1: {
  summary: [
    "Una estructura debe cumplir requisitos de <b>seguridad y funcionalidad estructural</b>, de <b>seguridad en caso de incendio</b> y de <b>higiene, salud y medio ambiente</b>.",
    "Requisitos de seguridad y funcionalidad: <b>resistencia y estabilidad</b>, <b>aptitud al servicio</b> (rigidez), <b>robustez y redundancia</b> y <b>durabilidad</b>.",
    "<b>Tensiones admisibles</b> (determinista): $\\sigma\\le\\sigma_{adm}=\\sigma_{mat}/FS$. Desaprovecha el material y no informa del margen real de seguridad.",
    "<b>Estados límite</b> (probabilista de nivel 1): valores característicos más coeficientes parciales γ<sub>m</sub> (minoran resistencias) y γ<sub>f</sub> (mayoran acciones).",
    "Valor característico: un 5 % de probabilidad de que la <b>resistencia</b> sea menor, o de que la <b>acción</b> sea mayor.",
    "<b>ELS</b>: funcionalidad, estética y durabilidad; combinaciones de alta probabilidad; se controlan desplazamientos y aceleraciones; $C_d\\ge E_d$.",
    "<b>ELU</b>: seguridad frente al colapso; combinaciones de baja probabilidad; se controlan esfuerzos y tensiones; $R_d\\ge S_d$. Comprenden equilibrio, agotamiento, pandeo, fatiga y adherencia.",
    "Fiabilidad $=1-p_f$. Métodos de nivel 2: distribuciones estadísticas. Métodos de nivel 1: simplificación con coeficientes parciales (CE, CTE, EC)."
  ],
  sections: [
    { id: "t1-proyecto", title: "1. Proyecto estructural", html: `
<p>La <b>construcción</b> tiene por objeto <b>dar un servicio</b> (industrial, residencial, comercial). El <b>proyecto</b> (especificaciones, análisis, dimensionamiento…) debe <b>garantizar el uso durante el periodo de vida</b>. El ciclo completo tiene cuatro etapas, cada una con su gestión:</p>
<table class="tbl"><thead><tr><th>Etapa</th><th>Contenido</th><th>Gestión asociada</th></tr></thead><tbody>
<tr><td>Proyecto</td><td>Especificaciones, análisis, dimensionamiento</td><td>Gestión de la calidad del proyecto</td></tr>
<tr><td>Construcción</td><td>Fabricación, montaje, medios auxiliares</td><td>Calidad de los productos y de la ejecución</td></tr>
<tr><td>Uso</td><td>Acciones, mantenimiento, cambio de uso</td><td>Gestión durante su vida de servicio</td></tr>
<tr><td>Demolición</td><td>Molestias, precio</td><td>Gestión de la demolición y deconstrucción</td></tr>
</tbody></table>
<h4>Fases del proyecto</h4>
<ul>
<li><b>Anteproyecto</b>: expone los aspectos fundamentales y las características generales de la intervención.</li>
<li><b>Proyecto básico</b>: define con precisión las características generales mediante soluciones concretas y su justificación.</li>
<li><b>Proyecto de ejecución</b>: desarrolla el básico con la determinación completa de detalles y especificaciones de todos los materiales, elementos, sistemas constructivos y equipos.</li>
</ul>` },
    { id: "t1-requisitos", title: "2. Requisitos de las estructuras", html: `
<h4>Exigencias según normativa</h4>
<ul>
<li><b>Seguridad y funcionalidad estructural</b>: reducir a límites aceptables el riesgo de un comportamiento mecánico inadecuado frente a las acciones e influencias previsibles durante la construcción y el uso previsto, considerando toda la vida útil.</li>
<li><b>Seguridad en caso de incendio</b>: reducir a límites aceptables el riesgo de que los usuarios sufran daños por un incendio de origen accidental.</li>
<li><b>Higiene, salud y protección del medio ambiente</b>: uso de materiales secundarios y reciclados, y reutilización y reciclabilidad tras la demolición.</li>
</ul>
<h4>Requisitos de seguridad y funcionalidad</h4>
<table class="tbl"><thead><tr><th>Requisito</th><th>Qué exige</th></tr></thead><tbody>
<tr><td><b>Resistencia y estabilidad</b></td><td>Que no se generen riesgos inadmisibles por las acciones previsibles <i>en fase de ejecución, uso y desmontaje</i>.</td></tr>
<tr><td><b>Aptitud al servicio</b> (rigidez)</td><td>Deformaciones admisibles, confort de los usuarios y ausencia de degradaciones o fisuras inaceptables.</td></tr>
<tr><td><b>Robustez y redundancia</b></td><td>Que un evento extraordinario no produzca consecuencias desproporcionadas respecto a su causa.</td></tr>
<tr><td><b>Durabilidad</b></td><td>Alcanzar la <i>vida útil nominal</i> manteniendo todos los requisitos.</td></tr>
</tbody></table>
<p><b>Requisito de resistencia</b>: el material de cada elemento debe soportar las tensiones internas que resultan del estado de carga general y de las acciones locales de cada fuerza exterior. Hay que intuir el estado de deformación y tensión y los modos de fallo.</p>
<h4>Modos de fallo: dúctil y frágil</h4>
<p>La <b>rotura dúctil</b>, con grandes deformaciones, permite reajustar tensiones que descargan la zona peligrosa y, en último caso, <b>advierte del peligro</b>. Los materiales dúctiles como el acero admiten el régimen plástico, pero esos estados son menos reversibles y no admiten repeticiones o alternancia de cargas: aparece la <b>fatiga</b>, es decir, la rotura tras cierto número de ciclos con tensiones muy por debajo de la resistencia estática.</p>
<h4>Cálculo elástico y plástico</h4>
<table class="tbl"><thead><tr><th></th><th>Cálculo elástico</th><th>Cálculo plástico</th></tr></thead><tbody>
<tr><td>Hipótesis</td><td>Los elementos permanecen en el rango elástico; esfuerzos y deformaciones en régimen lineal</td><td>Se permite entrar en el rango plástico; se determinan las cargas y los mecanismos de colapso</td></tr>
<tr><td>Dimensiones obtenidas</td><td>Mayores</td><td><b>Menores</b> dimensiones y cuantía de material</td></tr>
</tbody></table>
<p><b>Requisito de estabilidad</b>: la estructura no debe desmoronarse por inestabilidad total o parcial. El equilibrio puede ser estable, inestable o inexistente.</p>
<h4>Seguridad contra el fuego</h4>
<p>Intervienen el riesgo de incendio (probabilidad, propagación, duración, carga de fuego, severidad), la ventilación, el sector de incendio, el sistema estructural, la evacuación, la seguridad de los bomberos y el riesgo para edificios adyacentes. La protección puede ser:</p>
<ul><li><b>Activa</b>: detectar, controlar y extinguir (p. ej. sprinklers).</li><li><b>Pasiva</b>: pintura intumescente, mortero ignífugo, placa rígida…</li></ul>
<h4>Higiene, seguridad y medio ambiente</h4>
<ul><li>Calidad medioambiental de la ejecución: minimizar impactos y residuos.</li><li>Reutilización y reciclabilidad.</li><li>Otros: modularidad (máximo trabajo en taller y mínimo en obra), ligereza, sencillez de detalles, aislamientos, protección anticorrosiva y contra el fuego (pinturas con garantía de 5 años) y plan de mantenimiento.</li><li><b>Foco en la reutilización, no en el reciclaje</b> (mínimos residuos en fabricación: ~10 % de reutilización y 95 % de reciclaje).</li></ul>
<h4>Gestión durante la vida de servicio</h4>
<p>Comprende la evaluación de estructuras existentes (documentación y ensayos no destructivos), la reparación (catálogo y mapa de daños, soluciones, proyecto de reparación), el refuerzo y el plan y programa de inspección y mantenimiento.</p>` },
    { id: "t1-metodos", title: "3. Métodos para el cumplimiento de los requisitos", html: `
<table class="tbl"><thead><tr><th>Base</th><th>Métodos</th></tr></thead><tbody>
<tr><td>Determinista</td><td>Cálculo clásico: <b>tensiones admisibles</b></td></tr>
<tr><td>Probabilista</td><td><b>Estados límite</b> (CE, CTE, EC…) y métodos de cálculo en rotura</td></tr>
</tbody></table>
<p>El método de los estados límite permite tener en cuenta de forma sencilla el <b>carácter aleatorio</b> de las variables de solicitación (acciones), de resistencia (propiedades de los materiales) y dimensionales (geometría).</p>
<h4>Tensiones admisibles (base determinista)</h4>
<div class="formula">$$\\sigma \\le \\sigma_{adm} = \\frac{\\sigma_{mat}}{FS}$$</div>
<p>Consecuencias, según los apuntes:</p>
<ul><li>Mayor desaprovechamiento del material, porque no se considera su readaptación plástica.</li><li>No da información sobre el margen de seguridad (cuánta carga más admite hasta la rotura).</li><li>Conduce a estructuras <b>más caras e inciertas</b> en cuanto a seguridad.</li></ul>
<h4>Base probabilista</h4>
<p>Existe incertidumbre en las propiedades del material, en las cargas, en la idealización y el cálculo, en la geometría real y en la variación temporal de propiedades y acciones. Toda esa variabilidad se estima estadísticamente mediante <b>funciones de densidad de probabilidad</b>. En el ejemplo de los apuntes (ménsula con carga F) se comparan el momento solicitante $M = F\\cdot L$ y la capacidad $M_c=\\sigma_{yd}\\cdot W$.</p>
<p>La <b>fiabilidad</b> de una estructura se define como $1-p_f$, donde $p_f$ es la probabilidad de fallo. Se obtiene a partir de la distribución de la variable resistencia − solicitación, cuya separación respecto a cero se mide con β·s.</p>
<p class="note"><b>Desarrollado en el tema 4</b> (T4, diap. 17-19): en el «caso fundamental» con R y S normales e independientes, el margen es $M=R-S$, con $\\mu_M=\\mu_R-\\mu_S$ y $\\sigma_M=\\sqrt{\\sigma_R^2+\\sigma_S^2}$. El índice de fiabilidad es $\\beta=\\mu_M/\\sigma_M$ y $p_f=\\Phi(-\\beta)$. Si β aumenta, p<sub>f</sub> disminuye. Este planteamiento aparece resuelto en la hoja oficial de soluciones de 2024 (ejercicio de fiabilidad: $\\beta=3{,}899$).</p>
<h4>Métodos probabilistas: niveles</h4>
<table class="tbl"><thead><tr><th>Nivel</th><th>Descripción</th></tr></thead><tbody>
<tr><td><b>Nivel 2</b></td><td>Las variables de carga y resistencia se representan por sus funciones estadísticas de distribución.</td></tr>
<tr><td><b>Nivel 1</b></td><td>Simplificación del nivel 2: agrupa las incertidumbres en <b>R</b> (resistencia) y <b>S</b> (acciones), sustituye las distribuciones por <b>valores característicos</b> y los pondera con <b>coeficientes parciales de seguridad</b> definidos para una fiabilidad dada. En él se basan el CE, el CTE, los EC y casi todos los códigos.</td></tr>
</tbody></table>
<p class="note"><b>En el tema 4</b> (T4, diap. 16) se añade el <b>nivel 3</b>: distribuciones conjuntas y superficies de fallo exactas. Los niveles 2 y 3 dan P<sub>f</sub>; un método de nivel 1 <u>no</u> proporciona un valor numérico de la fiabilidad, solo verifica $R_d\\ge S_d$ con coeficientes calibrados.</p>
<h4>Normas: bases de cálculo</h4>
<ul>
<li><b>Acciones</b>: cualquier causa (fuerza o deformación) capaz de producir o modificar estados tensionales. Pueden ser <b>permanentes</b>, <b>variables</b> o <b>accidentales</b>, y <b>libres o fijas</b> en el espacio.</li>
<li><b>Situación</b>: condiciones en que puede estar la estructura durante su vida útil.<br>• Rigidez: <i>poco frecuente</i> (corta duración e irreversible), <i>frecuente</i> (corta duración y reversible), <i>casi permanente</i> (larga duración).<br>• Resistencia: <i>fundamental</i> (permanente o transitoria) y <i>extraordinaria</i>.</li>
<li><b>Combinación de acciones</b>: las acciones se combinan ponderándolas según su importancia y simultaneidad.</li>
</ul>
<h4>Valores característicos</h4>
<table class="tbl"><thead><tr><th>Magnitud</th><th>Definición</th></tr></thead><tbody>
<tr><td>Resistencia característica</td><td>Valor con un <b>5 %</b> de probabilidad de que existan valores <b>más bajos</b></td></tr>
<tr><td>Acción característica</td><td>Valor con un <b>5 %</b> de probabilidad de que existan valores <b>más altos</b></td></tr>
</tbody></table>
<h4>Coeficientes parciales de seguridad</h4>
<ul><li>Recogen las incertidumbres de los factores aleatorios del proyecto.</li>
<li><b>γ<sub>m</sub></b>: coeficiente de <b>minoración de resistencias</b>. <b>γ<sub>f</sub></b>: coeficiente de <b>mayoración de acciones</b>.</li>
<li>Aplicados sobre los valores característicos dan los <b>valores de cálculo</b>.</li>
<li>Su elección es un compromiso entre el <b>coste de construcción y conservación</b>, que crece con γ, y el <b>coste de los daños potenciales</b>, que decrece con γ.</li></ul>
<div class="formula">$$X_d=\\frac{X_k}{\\gamma_m}\\qquad F_d=\\gamma_f\\,F_k$$</div>` },
    { id: "t1-el", title: "4. Estados límite", html: `
<p>Los estados límite son la expresión precisa de los conceptos de fallo: son situaciones que, si se superan, implican que la estructura no cumple alguna de sus funciones. Se asocian a <b>situaciones de proyecto</b>:</p>
<ul><li><b>Persistentes</b>: condiciones de uso normal.</li><li><b>Transitorias</b>: condiciones temporales, como la ejecución o la reparación.</li><li><b>Accidentales</b>: condiciones excepcionales, como fuego, impacto o fallo localizado.</li><li><b>Sísmicas</b>.</li></ul>
<table class="tbl cmp"><thead><tr><th></th><th>E.L. de Servicio (ELS)</th><th>E.L. Último (ELU)</th></tr></thead><tbody>
<tr><td>Riesgo relativo a</td><td>La <b>funcionalidad</b>: funcionalidad, estética y durabilidad</td><td>La <b>seguridad</b> frente al colapso total o parcial</td></tr>
<tr><td>Combinaciones</td><td>Alta probabilidad de ocurrencia</td><td>Baja probabilidad de ocurrencia</td></tr>
<tr><td>Parámetros de control</td><td>Desplazamientos, aceleraciones…</td><td>Esfuerzos y tensiones</td></tr>
<tr><td>Tipos</td><td>Flechas (verticales y horizontales), vibraciones (verticales y horizontales), otros (deslizamiento de tornillos)</td><td>Equilibrio, agotamiento, pandeo, fatiga, adherencia</td></tr>
<tr><td>Comprobación</td><td>$C_d \\ge E_d$ (valor límite admisible ≥ valor de cálculo del efecto)</td><td>$R_d \\ge S_d$ (capacidad de respuesta ≥ valor de cálculo del efecto)</td></tr>
</tbody></table>
<h4>Cálculo mediante estados límite</h4>
<p>Consiste en dimensionar e interconectar los elementos para que soporten un conjunto de cargas sin superar los límites establecidos. El proceso es: <b>acción normalizada</b> → <b>estructura</b> (idealización) → <b>respuesta</b> (esfuerzos, desplazamientos) → ¿cumple los criterios? Si no cumple, se modifica; si cumple, se acepta.</p>
<h4>Parámetros de diseño estructural</h4>
<p>Dependen sobre todo de los <b>materiales</b>, de los <b>tipos, formas y dimensiones resistentes</b> y del <b>proceso constructivo</b> (este último no forma parte de la asignatura). Estructura del curso: cap. 2, tipologías; cap. 3, materiales (hormigón, acero y suelo); cap. 4, normativa (prestaciones exigidas a las estructuras: ver el tema 4); cap. 5, cálculo estructural.</p>` }
  ],
  confusions: [
    ["γ<sub>m</sub> frente a γ<sub>f</sub>", "γ<sub>m</sub> <b>minora resistencias</b> (se divide); γ<sub>f</sub> <b>mayora acciones</b> (se multiplica)."],
    ["Característico de resistencia frente a característico de acción", "Resistencia: 5 % de valores <b>inferiores</b>. Acción: 5 % de valores <b>superiores</b>. Los dos van del lado de la seguridad."],
    ["ELS frente a ELU", "ELS: funcionalidad, combinaciones frecuentes, desplazamientos ($C_d\\ge E_d$). ELU: colapso, combinaciones poco probables, esfuerzos ($R_d\\ge S_d$)."],
    ["Nivel 1 frente a nivel 2", "El nivel 2 usa distribuciones completas. El nivel 1 usa valores característicos y coeficientes parciales y <b>no da un número de fiabilidad</b>."],
    ["Tensiones admisibles frente a estados límite", "Tensiones admisibles: un único FS, base determinista, desaprovecha la plasticidad. Estados límite: probabilista, coeficientes parciales, varias comprobaciones."],
    ["Cálculo elástico frente a plástico", "El plástico admite rótulas y mecanismos de colapso y da <b>menores</b> dimensiones que el elástico."],
    ["Protección activa frente a pasiva contra el fuego", "Activa: detectar o extinguir (sprinklers). Pasiva: proteger el elemento (pintura intumescente, mortero ignífugo, placas)."]
  ]
},

/* ------------------------------------------------------------------ T2 */
T2: {
  summary: [
    "Tipo estructural (Torroja): «conjunto de elementos resistentes capaz de mantener sus formas y cualidades a lo largo del tiempo». No hay solución única.",
    "<b>Escala</b> (Galileo): el peso crece con $\\lambda^3$ y la resistencia y rigidez con $\\lambda^2$. Con peso propio importante se pierde la semejanza geométrica.",
    "<b>Geometría</b>: la curvatura y el alabeo determinan los mecanismos resistentes. Desarrollable = una curvatura principal nula.",
    "Losas: Grupo 1 (N<sub>x</sub>, N<sub>y</sub>, N<sub>xy</sub>) y Grupo 2 (M, V). <b>Laja</b>: solo Grupo 1. <b>Placa</b>: solo Grupo 2. <b>Membrana</b>: solo Grupo 1, con curvatura.",
    "Cable: solo tracción. Polígono funicular. Flecha óptima: D/2 con una carga; D/3 en la parábola y ≈ D/3 en la catenaria.",
    "Viga: acción de viga (flexión + cortante). Con extremos inmovilizados se suma la acción de cable. En el perfil I las alas resisten la flexión y el alma el cortante.",
    "Losa: acción de placa (dos direcciones + torsión; en placa cuadrada la torsión transmite el 50 %). Reservas: redistribución (líneas de articulación) y acción de membrana.",
    "Acciones horizontales en edificios: pórticos, pantallas, pórtico + pantalla, triangulaciones, pórticos excéntricos, pantallas acopladas, núcleos y tubos; acción diafragma; efectos P-Δ.",
    "Puentes: tablero + sistema primario (superestructura) + subestructura. Tipos: arco, tablero sobre pilas, colgante, atirantado y voladizo.",
    "Térmica: en estructuras isostáticas, movimientos sin tensiones; en hiperestáticas, tensiones. $\\Delta L=L\\,\\alpha\\,\\Delta T$.",
    "Túneles: sostenimiento con dovelas, gunita, bulones (bóveda natural) y cerchas. Subsidencia.",
    "Naves: pórticos de nudos rígidos (flexión) o cerchas articuladas (axiles). Torres eléctricas según su material y su función."
  ],
  sections: [
    { id: "t2-intro", title: "2.1 Introducción: escala, geometría y resistencia", html: `
<p>Hay que conocer las formas resistentes para elegir el tipo «óptimo» que cumpla la <b>función utilitaria</b>, la <b>función estructural</b>, las <b>exigencias estéticas</b> y las <b>limitaciones económicas</b>. En el tipo estructural influyen el material, los procesos constructivos y la geometría. Fijados material y proceso, <b>la escala fija la relación entre acciones, resistencias y rigideces</b>. No hay solución única: la misma geometría y carga con distintas rigideces produce distintos esfuerzos y desplazamientos.</p>
<h4>Escala (Galileo, 1638)</h4>
<div class="formula">$$\\text{Peso}\\propto\\lambda^3_L\\qquad \\text{Resistencia, rigidez}\\propto\\lambda^2_L$$</div>
<p>Si el peso propio es muy importante no se puede aumentar la forma proporcionalmente: se pierde la semejanza geométrica, salvo que se usen mejores materiales.</p>
<h4>Geometría: curvatura y alabeo</h4>
<ul>
<li><b>Curvatura</b>: en cada punto hay dos direcciones perpendiculares (direcciones principales de curvatura) con curvatura máxima y mínima. Sus envolventes forman las líneas principales de curvatura. Las superficies con una curvatura principal nula y la otra de signo constante son <b>desarrollables</b>: se pueden aplanar sin cortarlas.</li>
<li><b>Alabeo</b>: diferencia de pendientes entre lados opuestos. Un elemento rectangular con lados paralelos a las direcciones principales de curvatura <b>no tiene alabeo</b>.</li>
<li>La geometría puede «filtrar» esfuerzos: el <b>cable</b> solo resiste tracciones y la <b>viga cajón</b> flexiones y torsiones.</li>
</ul>
<h4>Tres aspectos del proyecto (Torroja)</h4>
<ul><li><b>Equilibrio</b>: inmovilidad del conjunto y de cada parte respecto al cimiento.</li><li><b>Resistencia</b>: cada volumen elemental debe soportar las fuerzas internas.</li><li><b>Estabilidad</b>: evitar el pandeo o la inestabilidad global.</li></ul>
<h4>Resistencia: tensiones principales e isostáticas</h4>
<p>En cada punto hay tres direcciones perpendiculares (<b>direcciones principales</b>) en las que la tensión es normal al plano (<b>tensiones principales</b>). Sus envolventes forman las <b>líneas isostáticas</b>. <b>No hay que confundir</b> las direcciones principales de curvatura, que dependen solo de la geometría, con las direcciones principales de tensión, que dependen también de las cargas y del contorno.</p>` },
    { id: "t2-clasif", title: "2.2.1 Clasificaciones de los elementos", html: `
<h4>Según su geometría</h4>
<table class="tbl"><thead><tr><th></th><th>Monodimensionales</th><th>Bidimensionales</th></tr></thead><tbody>
<tr><td><b>Sin curvatura</b></td><td>Cables (tracción), barras comprimidas biarticuladas (compresión)</td><td>Losas (lajas, placas) y láminas plegadas</td></tr>
<tr><td><b>Con curvatura</b> (simple)</td><td>Arcos</td><td>Bóvedas</td></tr>
<tr><td><b>Doble curvatura</b></td><td>—</td><td>Del mismo signo (<b>sinclásticas</b>) o de distinto signo (<b>anticlásticas</b>)</td></tr>
</tbody></table>
<h4>Esfuerzos en elementos bidimensionales</h4>
<table class="tbl"><thead><tr><th>Grupo</th><th>Esfuerzos</th><th>Elemento que solo tiene ese grupo</th></tr></thead><tbody>
<tr><td>Grupo 1: en el plano medio o tangente</td><td>N<sub>x</sub>, N<sub>y</sub>, N<sub>xy</sub></td><td><b>Laja</b> (sin curvatura) / <b>Membrana</b> (con curvatura)</td></tr>
<tr><td>Grupo 2: perpendiculares al plano</td><td>M<sub>x</sub>, M<sub>y</sub>, M<sub>xy</sub>, M<sub>yx</sub>, V<sub>x</sub>, V<sub>y</sub></td><td><b>Placa</b> (sin curvatura) / <b>Lámina a flexión pura</b> (con curvatura)</td></tr>
</tbody></table>
<h4>Según la dirección de transmisión de la carga</h4>
<ul><li><b>Unidireccional</b>: de directriz recta (cable, barra a tracción o compresión, viga) o no recta (arco, arco funicular).</li>
<li><b>Bidireccional</b>: sin curvatura (entramados, lajas, placas o losas, estructuras espaciales) o con curvatura (láminas, bóvedas, cúpulas, paraboloides).</li></ul>` },
    { id: "t2-mono", title: "2.2.2 Elementos monodimensionales", html: `
<h4>Cables</h4>
<ul><li>Dimensión transversal pequeña frente a la longitud; trabajan a <b>tracción</b>.</li>
<li><b>Ventaja</b>: aprovechan toda la sección, lo que les da eficiencia y economía. <b>Inconveniente</b>: se adaptan a las cargas cambiantes y eso los hace <b>inestables</b>. En los puentes colgantes, las armaduras que cuelgan del cable deben además rigidizarlo frente a cargas móviles.</li>
<li>Con una carga vertical, el cable debe formar ángulo con la horizontal. La <b>flecha óptima</b> (mínimo volumen de cable para una luz horizontal D) es <b>D/2</b>.</li>
<li>Con varias cargas adopta tramos rectos entre ellas: es el <b>polígono funicular</b>. Con muchas cargas se obtiene una <b>curva funicular</b>:</li></ul>
<table class="tbl"><thead><tr><th>Cargas iguales…</th><th>Curva</th><th>Flecha óptima</th></tr></thead><tbody>
<tr><td>separadas la misma distancia <b>horizontal</b></td><td><b>Parábola</b></td><td>D/3</td></tr>
<tr><td>distribuidas a distancias iguales <b>a lo largo del cable</b></td><td><b>Catenaria</b></td><td>≈ D/3</td></tr>
</tbody></table>
<p>Con la flecha óptima, la parábola y la catenaria son muy parecidas.</p>
<h4>Barras a compresión y arcos funiculares</h4>
<ul><li>Si se invierte un cable y se dimensionan las barras a compresión, se obtiene una estructura de compresión pura.</li>
<li>Las barras esbeltas comprimidas pueden <b>pandear</b>: al alcanzar la carga de pandeo, además de acortarse se curvan. La carga de pandeo depende del <b>material, la longitud, la sección y las condiciones de extremo</b>.</li>
<li>Al invertir la parábola del cable con cargas uniformes en horizontal se obtiene el <b>arco funicular</b>, que solo trabaja a compresión con esa carga. Basta con que el antifunicular quede dentro del espesor del arco.</li>
<li>Ejemplos de los apuntes: la seguridad de la cúpula vaticana según Poleni (1748) y las maquetas antifuniculares de Gaudí.</li></ul>
<h4>Vigas</h4>
<ul><li>Mecanismo: combinación de flexión y cortante (<b>acción de viga</b>). Si los extremos tienen impedido el desplazamiento longitudinal, aparecen tracciones (<b>acción de cable</b>).</li>
<li>La sección rectangular es poco eficiente a flexión porque solo las fibras extremas alcanzan la tensión máxima. El <b>perfil I</b> lleva el material a los extremos: las <b>alas resisten la flexión y el alma el cortante</b>.</li>
<li>Si el alma o el ala comprimida son muy delgadas pueden pandear. El ala comprimida se curva en su plano horizontal y la sección gira: es el <b>pandeo lateral por flexión-torsión</b>. El cortante equivale a tracciones y compresiones a 45°, y estas compresiones pueden provocar el <b>pandeo local del alma</b>.</li>
<li>Viga biapoyada: en régimen elástico, isostáticas; en régimen plástico hay reserva por redistribución hasta formar una <b>rótula plástica</b>.</li>
<li>Con extremos inmovilizados, cuando se forman suficientes rótulas la viga se convierte en mecanismo y ya no resiste más por acción de viga, pero <b>puede seguir resistiendo por acción de cable</b>.</li></ul>` },
    { id: "t2-bi", title: "2.2.3 Elementos bidimensionales", html: `
<h4>Entramados (emparrillados)</h4>
<ul><li>Retícula de vigas en dos direcciones que moviliza flexión, cortante y torsión.</li>
<li><b>Unión no rígida</b>: en la intersección los desplazamientos son iguales y la carga se reparte <b>según la rigidez a flexión</b>. Para repartir de forma similar entre vigas de distinta longitud, <b>la más larga debe tener más inercia</b>.</li></ul>
<div class="formula">$$\\frac{P}{\\delta}=\\frac{48EI}{L^3}\\quad\\text{(viga biapoyada con carga centrada)}$$</div>
<ul><li><b>Unión rígida</b>: la flexión de una viga genera torsión en la perpendicular. Esto <b>aumenta la rigidez</b> y reduce los desplazamientos.</li>
<li>Con entramados se llega a relaciones <b>canto/luz de 1/30 a 1/40</b>, frente a <b>1/10 a 1/24</b> en sistemas unidireccionales. Se completan con una loseta superior que da monolitismo.</li></ul>
<h4>Losas</h4>
<ul><li>Elemento superficial monolítico de poco espesor que funciona como un entramado de infinitas vigas rígidamente unidas y busca el mecanismo de menores tensiones.</li>
<li><b>Acción de placa</b>: acción de viga en dos direcciones más torsión. La torsión transmite un % importante de la carga: <b>el 50 % en placas cuadradas</b>.</li>
<li><b>Reserva de resistencia</b>:<br>• <b>Redistribución de tensiones</b>: la fluencia plástica forma <b>líneas de articulación</b> hasta llegar al mecanismo.<br>• <b>Acción de membrana</b>: la losa deformada adopta superficies no desarrollables, el plano medio se estira y aparecen tracciones. Existe aunque los bordes se muevan libremente, pero es mucho mayor si están impedidos. Es el equivalente bidimensional de la acción de cable.</li>
<li>En una losa cuadrada apoyada con carga uniforme, las isostáticas dan el recorrido de las tensiones. En las esquinas se invierte la curvatura (inversión de momentos).</li>
<li><b>Losas nervadas</b>: llevan el material lejos del plano medio con nervios en una, dos (forjados reticulares) o más direcciones.</li></ul>
<h4>Láminas plegadas</h4>
<ul><li>Dos placas en ángulo equivalen a una viga rectangular. La acción de placa plegada combina una <b>viga transversal</b> (franja continua apoyada en los pliegues, con reacciones R) y una <b>viga longitudinal</b> (pares de placas que llevan R a los pórticos o muros extremos).</li>
<li>Ejemplo de los apuntes: el antiguo canódromo de Madrid.</li></ul>
<h4>Membranas</h4>
<ul><li>Elementos curvos de muy poco espesor con esfuerzos solo en el plano tangente (N<sub>x</sub>, N<sub>y</sub>, N<sub>xy</sub>).</li>
<li>Dos mecanismos: <b>acción de cable</b> en dos direcciones ortogonales, debida a la curvatura (la dirección con mayor relación flecha/luz absorbe más carga), y <b>acción de corte</b> en la superficie, debida al alabeo.</li>
<li><b>Membrana cilíndrica</b>: las generatrices rectas no absorben carga, porque no tienen curvatura ni alabeo. Toda la carga va por acción de cable en las líneas perpendiculares al eje.</li></ul>
<h4>Láminas (cáscaras delgadas)</h4>
<ul><li>Tienen esfuerzos en el plano (Grupo 1) y perpendiculares (Grupo 2). Su eficiencia procede de la curvatura y el alabeo: acción de membrana = acción de cable + acción de corte.</li>
<li>Clasificación geométrica: <b>de revolución</b> (cono, esfera, toro…), <b>de traslación</b> (cilindro, paraboloide elíptico, paraboloide hiperbólico), <b>regladas</b> (cilindro, cono, paraboloide hiperbólico, conoide, hiperboloide de una hoja) y <b>complejas</b>.</li>
<li>En la «silla de montar» (paraboloide hiperbólico) una dirección trabaja como catenaria, a tracción, y la otra como arco, a compresión.</li>
<li>Ejemplos: Frontón Recoletos (1935), Panteón, Los Manantiales en Xochimilco (1958) y la capilla de Lomas de Cuernavaca (1958).</li></ul>` },
    { id: "t2-edif", title: "2.3.1 Soluciones para estructuras de edificación", html: `
<h4>Sistemas para acciones verticales</h4>
<table class="tbl"><thead><tr><th>Sistema</th><th>Características</th></tr></thead><tbody>
<tr><td>Pórticos + forjados unidireccionales</td><td>Vigas, pilares y viguetas que transmiten la carga en una dirección. Uniones rígidas viga-pilar y viguetas unidas por losa superior con mallazo.</td></tr>
<tr><td>Pórticos + placas (losas bidireccionales)</td><td>Placas que transmiten la carga en dos direcciones. Adecuados para grandes luces, en especial en edificios industriales.</td></tr>
<tr><td>Placas sobre pilares aislados</td><td>Unión rígida pilar-placa. Grandes luces y libertad para colocar los pilares en planta.</td></tr>
</tbody></table>
<h4>Sistemas para acciones horizontales</h4>
<table class="tbl"><thead><tr><th>Sistema</th><th>Claves</th></tr></thead><tbody>
<tr><td>Pórticos + forjados</td><td>Eficientes si las cargas horizontales o la altura no son grandes. Los forjados reparten las cargas entre pórticos (<b>acción diafragma</b>). Desplazamiento = flexión global (por alargamiento y acortamiento de pilares, irrelevante salvo en edificios altos y esbeltos) + <b>cortante</b> (flexión de las barras).</td></tr>
<tr><td>Pantallas + forjados</td><td>La pantalla actúa como gran viga vertical en voladizo. Eficientes para cargas horizontales importantes y edificios altos. Se deforman sobre todo por <b>flexión</b>.</td></tr>
<tr><td>Pórticos + pantallas o núcleos</td><td>Trabajan en paralelo con los mismos desplazamientos: hay <b>interacción pórtico-pantalla</b>.</td></tr>
<tr><td>Pórticos + triangulaciones</td><td>Dos caminos: flexión en el pórtico (más <b>dúctil</b>) y axiles en las diagonales (menos dúctil). Arriostrar siempre el mismo vano da reacciones excesivas en la cimentación; repartir en distintos vanos las reduce. Las grandes vigas cada cierto número de plantas hacen colaborar a las columnas exteriores frente al vuelco.</td></tr>
<tr><td>Pórticos excéntricos</td><td>La diagonal no llega al nudo sino a un punto de la viga, dejando un tramo corto e (<b>shear link</b>) con fuerte cortante. Se usan frente a terremotos: concentran la plastificación y el daño en los links y reducen la rigidez lateral.</td></tr>
<tr><td>Pantallas acopladas</td><td>Varias pantallas unidas por <b>vigas de acoplamiento</b> muy deformables en régimen plástico. Se usan frente a sismo y concentran la disipación en esas vigas y en el arranque de los muros.</td></tr>
<tr><td>Núcleos, tubos y «tubo en tubo»</td><td>Pantallas unidas por los lados, para edificios altos y esbeltos. El tubo puede ser la propia fachada (framed tube), con pilares separados 1–3 m. Efecto <b>shear lag</b>: concentración de esfuerzos en las esquinas por la deformación a cortante.</td></tr>
</tbody></table>
<h4>Diafragma rígido</h4>
<p>Si la unión es monolítica y el forjado es rígido en su plano, se trata como un sólido rígido que se traslada y gira en su plano (EHE-08: espesor $\\ge50$ mm, mallazo y $L/h\\le4$). Si no es rígido, se calcula como una viga horizontal sobre apoyos elásticos k<sub>i</sub>.</p>
<h4>Efectos P-Δ</h4>
<p>Son solicitaciones adicionales que aparecen porque las cargas gravitatorias actúan sobre la estructura desplazada lateralmente:</p>
<div class="formula">$$M_{ext}=P_{tot}\\,\\Delta=V_i'\\,h\\;\\Rightarrow\\; k'=\\frac{V_i'}{\\Delta}=\\frac{P_{tot}}{h}$$</div>
<p>k′ es la <b>reserva de rigidez lateral</b> que necesita la estructura para compensar el efecto P-Δ.</p>` },
    { id: "t2-civil", title: "2.3.2 Obras civiles: puentes y túneles", html: `
<h4>Partes de un puente</h4>
<ul><li><b>Tablero</b>: recibe directamente las sobrecargas del tráfico.</li><li><b>Sistema primario</b>: soporta el tablero y lleva las cargas a los apoyos (vigas, arcos…).</li><li><b>Subestructura</b>: pilas y estribos con sus cimentaciones.</li><li>Tablero + sistema primario = <b>superestructura</b>.</li></ul>
<table class="tbl"><thead><tr><th>Tipo</th><th>Sistema primario y claves</th></tr></thead><tbody>
<tr><td>Tablero sobre pilas o muros</td><td>Viga continua (en I, cajón, artesa) o losa. Apoyos que permiten el desplazamiento horizontal (elastómeros) frente a dilataciones y sismo.</td></tr>
<tr><td>Arco</td><td>Arco a compresión. En los apoyos la carga se descompone en horizontal y vertical. Tablero inferior, intermedio o superior (p. ej. puente María Pía, Eiffel, 1887, L = 160 m).</td></tr>
<tr><td>Colgante</td><td>Cable principal apoyado en torres del que cuelga el tablero con tirantes verticales. El tablero (a menudo reticulado de acero) <b>estabiliza los cables</b>.</td></tr>
<tr><td>Atirantado</td><td>Tirantes y torres. Los tirantes introducen <b>grandes fuerzas horizontales en el tablero</b>. Variantes: una o dos torres; uno o dos planos; disposición en <b>arpa</b> o en <b>abanico</b>; torres en A, H o Y invertida…</td></tr>
<tr><td>Voladizo (ménsula)</td><td>Grandes voladizos desde las pilas que pueden soportar tramos suspendidos (puente de Forth, Escocia).</td></tr>
</tbody></table>
<h4>Deformaciones térmicas</h4>
<p>En estructuras <b>isostáticas</b> los cambios de temperatura producen <b>movimientos pero no tensiones</b>, y las juntas de dilatación los absorben. En las <b>hiperestáticas</b> pueden generar tensiones y movimientos.</p>
<div class="formula">$$\\Delta L = L\\,\\alpha\\,\\Delta T = 100\\cdot10^{-5}\\cdot40=0{,}04\\ \\text{m}$$
$$\\varepsilon=\\varepsilon_T+\\varepsilon_m=0\\Rightarrow \\varepsilon_m=-\\alpha\\Delta T=-0{,}0004\\ \\text{(compresión)}$$</div>
<p>Como referencia, el máximo de la ley tensión-deformación del hormigón corresponde a una deformación de compresión de ≈ 0,002.</p>
<h4>Túneles</h4>
<ul><li>Sección con tres superficies: excavación total, sostenimiento (cara exterior) y revestimiento (cara interior). Partes: <b>bóveda</b>, <b>hastiales</b> y <b>contrabóveda o solera</b>.</li>
<li>Excavación por <b>voladura</b> o <b>mecánica</b> (rozadoras, excavadoras, tuneladoras).</li>
<li><b>Subsidencia</b>: deformaciones en superficie causadas por alteraciones del equilibrio interno del terreno, no por cargas en superficie. En túneles metropolitanos se han medido asientos de hasta 20 cm. Afectan a cimentaciones superficiales y también pueden afectar a las profundas. De forma simplificada son desplazamientos radiales hacia el centro del túnel.</li></ul>
<table class="tbl"><thead><tr><th>Sostenimiento</th><th>Claves</th></tr></thead><tbody>
<tr><td>Dovelas prefabricadas</td><td>Anillo de segmentos de fundición u hormigón colocados tras la máquina, con inyección de mortero en el trasdós. Tipos: solera, adyacentes, contrallave y <b>clave o llave</b> (la última). Juntas radiales (tornillos) y circunferenciales (presión de la tuneladora). <b>Las juntas reducen la rigidez</b>.</td></tr>
<tr><td>Hormigón gunitado</td><td>Mortero u hormigón proyectado neumáticamente (vía seca, semihúmeda o húmeda) en capas de ≤ 10 cm, la primera de sellado. Armado con mallazo o con fibras metálicas.</td></tr>
<tr><td><b>Bulones</b></td><td>Barras de acero (a menudo corrugado de 25 mm) que <b>unen los estratos alrededor de la excavación para formar una bóveda natural</b>. Anclados por adherencia (mortero o resina) o por expansión mecánica, con tuerca y placa en el exterior.</td></tr>
<tr><td>Cerchas metálicas</td><td>Para macizos de calidad media. Ligeras, medias o pesadas, arriostradas con tresillones y combinadas con chapas o mallazos. Su rigidez depende mucho del acuñado (madera o acero).</td></tr>
</tbody></table>` },
    { id: "t2-ind", title: "2.3.3 Estructuras e instalaciones industriales", html: `
<table class="tbl cmp"><thead><tr><th></th><th>Pórticos de nudos rígidos</th><th>Estructuras trianguladas (cerchas)</th></tr></thead><tbody>
<tr><td>Uniones</td><td>Rígidas, a menudo reforzadas con <b>cartelas</b></td><td>Articuladas</td></tr>
<tr><td>Esfuerzos</td><td>Sobre todo <b>flexión</b> en las barras</td><td><b>Axiles</b> en las barras</td></tr>
<tr><td>Ventaja / inconveniente</td><td>La rigidez lateral en su plano la da el propio pórtico</td><td>Buen aprovechamiento de la sección / <b>pandeo</b> de las barras comprimidas</td></tr>
<tr><td>Rigidez fuera del plano</td><td colspan="2">Arriostrando uno o más vanos con diagonales o muros (arriostramiento de cubierta, pórtico frontal)</td></tr>
</tbody></table>
<p>Tipologías: pórticos poligonales, a dos aguas, de un vano o adosados; cerchas de cordones paralelos o no paralelos. Los <b>puentes grúa</b> pueden ir en estructura porticada o triangulada. También hay estructuras prefabricadas de hormigón.</p>
<h4>Torres eléctricas</h4>
<p>Soportan conductores de alta tensión, separándolos del terreno. Son importantes por el peligro de contacto y la dependencia social del servicio. Reglamentos: Decreto 3151/1968 y <b>RD 223/2008</b>.</p>
<ul><li>Partes: cabeza (cruceta, castillete), cuerpo (montantes, diagonales, encuadramiento) y aisladores.</li>
<li><b>Según el material</b>: metálicas (de celosía o tubulares), de hormigón, de madera o de materiales compuestos.</li>
<li><b>Según la función</b>: alineación y ángulo (equilibradas), y amarre y fin de línea (desequilibradas), además de especiales. El amarre evita el «efecto dominó».</li>
<li><b>Acciones</b>: permanentes, viento, hielo, hielo + viento, desequilibrio de tracciones, rotura de conductores y resultante de ángulo.</li>
<li><b>Comprobaciones</b>: rotura de cables, vibraciones (amortiguadores y separadores), flechas máximas, rotura de herrajes y aisladores, resistencia de la torre e inestabilidad local y global.</li></ul>
<p>Otras estructuras: torres de antenas, antenas parabólicas, chimeneas, aerogeneradores, heliostatos, seguidores solares, silos, depósitos a presión y tanques.</p>` }
  ],
  confusions: [
    ["Laja, placa, membrana y lámina", "Laja: plana, solo esfuerzos en su plano. Placa: plana, solo flexión y cortante. Membrana: curva, solo esfuerzos en su plano. Lámina: curva, ambos grupos."],
    ["Parábola frente a catenaria", "Parábola: cargas iguales por unidad de <b>longitud horizontal</b>. Catenaria: cargas iguales <b>a lo largo del cable</b>, como el peso propio. Flecha óptima ≈ D/3 en ambas; con una sola carga, D/2."],
    ["Direcciones principales de curvatura frente a direcciones principales de tensión", "Las primeras dependen solo de la geometría; las segundas, también de las cargas y del contorno."],
    ["Acción de cable frente a acción de membrana", "La acción de membrana es el equivalente <b>bidimensional</b> de la acción de cable."],
    ["Pórtico frente a pantalla bajo carga horizontal", "Pórtico: domina la deformación por cortante. Pantalla: domina la deformación por flexión (voladizo)."],
    ["Colgante frente a atirantado", "Colgante: cable principal entre torres con péndolas verticales; el más ligero y el de mayores luces. Atirantado: tirantes rectos desde las torres que comprimen el tablero horizontalmente."],
    ["Isostática frente a hiperestática bajo temperatura", "Isostática: se mueve sin tensiones. Hiperestática: el movimiento coaccionado genera tensiones."],
    ["Pórtico excéntrico frente a pantallas acopladas", "Los dos son soluciones antisísmicas que concentran el daño: en el <b>shear link</b> de la viga o en las <b>vigas de acoplamiento</b>."],
    ["Bulón frente a cercha", "El bulón cose los estratos para formar una <b>bóveda natural</b> en el terreno. La cercha es un arco metálico de sostenimiento arriostrado con tresillones."]
  ]
},

/* ------------------------------------------------------------------ T23 */
T23: {
  summary: [
    "Cimentaciones superficiales: zapata aislada, combinada y corrida, pozo, emparrillado y losa. Reparten la carga en un plano horizontal.",
    "ELS: asiento s, asiento diferencial δs, distorsión angular $\\beta=\\delta_s/L$ e inclinación ω. Límites del CTE en β: 1/300 (isostáticas), 1/500 (reticuladas con tabiquería), 1/700 (paneles prefabricados).",
    "Bulbo de presiones: las zapatas próximas forman un bulbo conjunto más profundo (isobara 0,1·p).",
    "ELU: hundimiento, deslizamiento, vuelco, estabilidad global y capacidad estructural del cimiento.",
    "Coulomb: $\\tau=c+\\sigma\\,\\mathrm{tg}\\,\\varphi$. Círculo de Mohr seguro, límite o imposible.",
    "Zapata rígida: $V_{\\text{máx}}\\le2h$, reparto lineal de presiones y núcleo central $L/6$. Zapata flexible: $V_{\\text{máx}}\\gt2h$, coeficiente de balasto k.",
    "Deslizamiento y vuelco: γ > 1,5. No se cuenta con el empuje pasivo salvo que esté garantizado.",
    "Pilotes: $R_{ck}=R_{pk}+R_{fk}$ (punta + fuste). Grupo: $R=\\eta\\,n\\,R_{ck}$, con $\\eta=0{,}7$ si $S=D$ y $\\eta=1$ si $S\\ge3D$.",
    "Rozamiento negativo: el terreno asienta más que el pilote y lo carga.",
    "Pantallas: contención flexible para excavaciones verticales. Muros: mantienen una diferencia de nivel. Empujes activo (mínimo), reposo y pasivo (máximo)."
  ],
  sections: [
    { id: "t23-sup", title: "2.3.1 Cimentaciones superficiales", html: `
<p>Reparten las cargas de la estructura en un <b>plano de apoyo horizontal</b>. Tipos: <b>zapata aislada</b>, <b>zapata combinada</b>, <b>zapata corrida</b> (p. ej. bajo muro), <b>pozo de cimentación</b>, <b>emparrillado</b> y <b>losa</b>. También hay zapatas medianeras y de esquina en el límite de la parcela.</p>
<h4>Estados límite de servicio: asientos</h4>
<table class="tbl"><thead><tr><th>Magnitud</th><th>Definición</th></tr></thead><tbody>
<tr><td>Asiento s</td><td>Descenso de cualquier punto de la cimentación</td></tr>
<tr><td>Asiento diferencial δs</td><td>Diferencia de asiento entre dos puntos</td></tr>
<tr><td>Distorsión angular β</td><td>Asiento diferencial dividido por la distancia entre los dos puntos</td></tr>
<tr><td>Inclinación ω</td><td>Ángulo girado respecto a la vertical por la línea media de la cimentación deformada</td></tr>
</tbody></table>
<p><b>Valores límite de distorsión angular según el CTE (tabla 2.2):</b></p>
<table class="tbl"><thead><tr><th>Tipo de estructura</th><th>Límite</th></tr></thead><tbody>
<tr><td>Estructuras isostáticas y muros de contención</td><td>1/300</td></tr>
<tr><td>Estructuras reticuladas con tabiquería de separación</td><td>1/500</td></tr>
<tr><td>Estructuras de paneles prefabricados</td><td>1/700</td></tr>
<tr><td>Muros de carga sin armar con flexión cóncava hacia arriba</td><td>1/1000</td></tr>
<tr><td>Muros de carga sin armar con flexión cóncava hacia abajo</td><td>1/2000</td></tr>
</tbody></table>
<p>Distorsión horizontal (tabla 2.3): muros de carga, 1/2000.</p>
<p><b>Bulbo de presiones</b>: con zapatas próximas (separaciones de 2B o 1B en los apuntes) los bulbos se superponen y forman un <b>bulbo conjunto</b>, mayor y más profundo que los individuales (se dibuja la isobara 0,1·p). Hay que tenerlo en cuenta en el cálculo.</p>
<h4>Estados límite últimos</h4>
<p><b>Hundimiento</b>, <b>deslizamiento</b>, <b>vuelco</b>, <b>estabilidad global</b> y <b>capacidad estructural del cimiento</b>.</p>
<h4>Hundimiento: presión de hundimiento</h4>
<p>Con una carga V creciente el asiento aumenta. Las curvas presión-asiento dependen de la forma y el tamaño de la zapata, del suelo y del tipo de carga. La carga de hundimiento depende de la resistencia al corte del terreno, de las dimensiones y la forma, de la profundidad, del peso específico y del agua.</p>
<p><b>Resistencia al corte (modelo de Coulomb):</b></p>
<div class="formula">$$\\tau=c+\\sigma\\,\\mathrm{tg}\\,\\varphi$$</div>
<p>c es la cohesión y φ el ángulo de rozamiento interno. Respecto a la curva de resistencia intrínseca, un círculo de Mohr puede ser <b>seguro</b> (A), <b>límite</b> (B, tangente) o <b>imposible</b> (C, la corta).</p>
<p><b>Presión de hundimiento según el CTE (ec. 4.8):</b></p>
<div class="formula">$$q_h=c_K N_c d_c s_c i_c t_c+q_{0K}N_q d_q s_q i_q t_q+\\tfrac12 B^*\\gamma_K N_\\gamma d_\\gamma s_\\gamma i_\\gamma t_\\gamma$$</div>
<p>Los tres términos son cohesión, sobrecarga al nivel de la base y peso propio del terreno. N<sub>c</sub>, N<sub>q</sub> y N<sub>γ</sub> son factores de capacidad de carga que dependen solo de φ. Los factores d (profundidad), s (forma), i (inclinación de la carga) y t (proximidad a talud) los corrigen.</p>
<h4>Zapatas rígidas y flexibles</h4>
<table class="tbl cmp"><thead><tr><th></th><th>Rígida</th><th>Flexible</th></tr></thead><tbody>
<tr><td>Criterio (vuelo V<sub>máx</sub>, canto h)</td><td>$V_{max}\\le 2h$</td><td>$V_{max}>2h$</td></tr>
<tr><td>Reparto de presiones</td><td>Lineal (núcleo central). Distribución real según el suelo sea cohesivo o no</td><td>Coeficiente de balasto k (rigidez por unidad de superficie)</td></tr>
<tr><td>Armado</td><td>Método de las bielas</td><td>Flexión</td></tr>
</tbody></table>
<p><b>Zapata rígida con carga excéntrica</b> (zapata corrida de ancho L por metro):</p>
<div class="formula">$$e\\le \\frac{L}{6}:\\ \\sigma_{1,2}=\\frac{N}{L}\\left(1\\pm\\frac{6e}{L}\\right)\\qquad e>\\frac{L}{6}:\\ \\sigma_{max}=\\frac{4N}{3(L-2e)},\\ L_0=3\\left(\\tfrac{L}{2}-e\\right)$$</div>
<p>En el ejemplo resuelto de los apuntes ($p=7{,}5\\text{ t/m}=75\\text{ kg/cm}$ en el borde de un muro de 30 cm y $\\sigma_{adm}=2\\text{ kg/cm}^2$), sin el peso de la zapata no hay solución: la carga queda fuera del núcleo central con $e=L/2-15$ cm, y $L-2e=30$ cm sea cual sea L.</p>
<div class="formula">$$\\sigma_{max}=\\frac{4p}{3(L-2e)}=\\frac{4\\cdot75}{3\\cdot30}=3{,}33\\ \\text{kg/cm}^2\\gt2$$</div>
<p>Hay que contar con el <b>peso de la cimentación, que es una carga centradora</b>: $e^*=p\\,e/(p+w)$ con $w=\\gamma_c L H$ y $H=\\max(50;\\ L/2-15)$ cm. Con $L\\approx175$ cm:</p>
<div class="formula">$$H=72{,}5\\ \\text{cm},\\quad w=31{,}72\\ \\text{kg/cm},\\quad e^*=\\frac{75\\cdot72{,}5}{75+31{,}72}=50{,}95\\ \\text{cm}\\gt\\frac{L}{6}$$
$$\\sigma_{max}=\\frac{4(p+w)}{3(L-2e^*)}=\\frac{4\\cdot106{,}72}{3\\cdot73{,}1}\\approx1{,}95\\ \\text{kg/cm}^2\\lt2$$</div>
<h4>Deslizamiento y vuelco</h4>
<div class="formula">$$\\gamma_t=\\frac{F_R}{H}>1{,}5\\qquad F_R=(N+P)\\,\\mathrm{tg}\\tfrac23\\varphi\\ \\text{(arenas)}\\qquad F_R=\\tfrac{c}{2}\\,a\\,b\\ \\text{(arcillas)}$$
$$\\gamma_t=\\frac{\\sum M_{estab}}{\\sum M_{vuelco}}=\\frac{(N+P)\\,a/2}{M+V\\,h}>1{,}5$$</div>
<p>En general <b>no se considera el empuje pasivo</b>, salvo que se garantice que el terreno que lo produce estará siempre presente.</p>
<p><b>Estabilidad global</b>: se calcula por métodos de equilibrio límite.</p>
<h4>Capacidad estructural: método de las bielas (zapatas rígidas)</h4>
<p>Permite determinar el armado. La tracción en la armadura inferior vale:</p>
<div class="formula">$$T_d=\\frac{R_{1d}}{0{,}85\\,d}\\,(x_1-0{,}25\\,a)=A_s f_{yd}$$</div>` },
    { id: "t23-prof", title: "2.3.2 Cimentaciones profundas", html: `
<p>Según cómo transmiten la carga, los pilotes son <b>flotantes</b> (trabajan sobre todo por fuste) o <b>columna</b> (trabajan por punta, apoyados en un estrato resistente).</p>
<h4>ELS</h4>
<p>Asientos y desplazamientos transversales, con las mismas limitaciones que en cimentación superficial. Hay que considerar la interacción suelo-estructura y el <b>efecto grupo</b>, ya que los pilotes suelen ir en grupos bajo un encepado. Si algún movimiento es crítico, deben hacerse pruebas de campo.</p>
<h4>ELU</h4>
<ul><li><b>Hundimiento</b>: la carga en cabeza supera la resistencia del terreno.</li><li><b>Arrancamiento</b>: tracción en cabeza mayor que la resistencia al arranque.</li><li><b>Rotura horizontal</b> del terreno.</li><li><b>Estabilidad global</b>, con superficies de fallo más profundas o que cortan los pilotes.</li><li><b>Capacidad estructural</b> del pilote.</li></ul>
<div class="formula">$$R_{ck}=R_{pk}+R_{fk},\\quad R_{pk}=q_p\\,A_p,\\quad R_{fk}=\\int_0^L\\tau_f\\,p_f\\,dz$$</div>
<p>q<sub>p</sub> es la resistencia unitaria por punta, A<sub>p</sub> el área de la punta, τ<sub>f</sub> la resistencia unitaria por fuste y p<sub>f</sub> el perímetro. La zona de influencia de la punta llega a ≈ 6D por encima (zona pasiva) y ≈ 3D por debajo (zona activa).</p>
<h4>Efecto grupo</h4>
<div class="formula">$$R_{ckg}=\\eta\\,n\\,R_{ck}\\qquad \\eta=0{,}7\\ (S=D);\\ \\eta=1{,}0\\ (S\\ge 3D)$$</div>
<p>Para separaciones intermedias se interpola.</p>
<h4>Esfuerzos sobre los pilotes</h4>
<ul><li>Acciones de la estructura repartidas entre los pilotes (encepado rígido y pilote articulado).</li><li>Empujes horizontales causados por sobrecargas.</li><li><b>Rozamiento negativo</b>: aparece cuando el terreno alrededor del pilote asienta más que el propio pilote. El pilote soporta entonces, además de la carga de la estructura, parte del peso del terreno.</li></ul>` },
    { id: "t23-cont", title: "2.3.3 Estructuras de contención", html: `
<table class="tbl cmp"><thead><tr><th></th><th>Pantallas</th><th>Muros</th></tr></thead><tbody>
<tr><td>Definición</td><td>Contienen tierras para hacer <b>excavaciones verticales</b> donde el terreno o las construcciones cercanas no serían estables sin sujeción</td><td>Establecen y mantienen una <b>diferencia de niveles</b> con una pendiente mayor de la que el terreno permitiría</td></tr>
<tr><td>Rigidez</td><td>Elementos <b>flexibles</b></td><td>Más rígidos (estabilidad por peso y cimiento)</td></tr>
<tr><td>Tipos</td><td>De hormigón, de pilotes o de tablestacas</td><td>De gravedad, en ménsula, etc.</td></tr>
</tbody></table>
<div class="gen"><b>Ampliación (conocimiento general):</b> la pantalla se ejecuta <u>antes</u> de excavar, con un empotramiento bajo el fondo de excavación que suele ser imprescindible para su estabilidad, y su peso propio influye poco. El muro se construye y luego se rellena su trasdós.</div>
<h4>ELS de las estructuras de contención</h4>
<ul><li>Movimientos o deformaciones que afecten al colapso, la apariencia o el uso de la estructura o de las construcciones cercanas.</li><li>Infiltración de agua no admisible (lavado de finos, sifonamiento).</li><li>Afección al nivel freático del entorno.</li></ul>
<h4>Estados de empuje</h4>
<table class="tbl"><thead><tr><th>Estado</th><th>Movimiento del elemento</th><th>Empuje</th></tr></thead><tbody>
<tr><td><b>Activo</b> (K<sub>a</sub>)</td><td>Gira o se desplaza <b>hacia fuera</b> bajo la presión del relleno</td><td><b>Mínimo</b></td></tr>
<tr><td><b>Reposo</b> (K<sub>0</sub>)</td><td>Estado intermedio, que corresponde al estado tensional inicial</td><td>Intermedio</td></tr>
<tr><td><b>Pasivo</b> (K<sub>p</sub>)</td><td>Es <b>comprimido contra el terreno</b></td><td><b>Máximo</b></td></tr>
</tbody></table>
<div class="formula">$$\\sigma_h=K\\,\\sigma_v$$</div>
<p>El estado activo se alcanza con desplazamientos muy pequeños y el pasivo requiere desplazamientos mucho mayores (gráfico K frente a x/H en terreno granular denso o suelto). También influyen el rozamiento en el trasdós y las sobrecargas.</p>
<h4>ELU de los muros</h4>
<p>Hundimiento, deslizamiento, vuelco, estabilidad global y capacidad estructural del muro, de forma análoga a las zapatas.</p>` }
  ],
  confusions: [
    ["Zapata rígida frente a flexible", "Rígida: $V_{\\text{máx}}\\le2h$, presiones lineales, bielas. Flexible: $V_{\\text{máx}}\\gt2h$, balasto k."],
    ["Asiento diferencial frente a distorsión angular", "δs es una diferencia de asientos (longitud). β = δs/distancia es adimensional y es lo que limita el CTE."],
    ["$e\\le L/6$ frente a $e\\gt L/6$", "Dentro del núcleo central toda la base está comprimida (trapecio). Fuera, una parte se despega y se usa el triángulo, con $\\sigma=\\dfrac{4N}{3(L-2e)}$."],
    ["Peso de la zapata", "Es una <b>carga centradora</b>: reduce la excentricidad ($e^*=\\dfrac{p\\,e}{p+w}$)."],
    ["Pilote flotante frente a columna", "Flotante: trabaja por fuste. Columna: trabaja por punta sobre un estrato firme."],
    ["Rozamiento negativo", "Lo produce el terreno que asienta <b>más</b> que el pilote y lo «arrastra», añadiendo carga."],
    ["Empuje activo frente a pasivo", "Activo: el muro se aleja del terreno y el empuje es mínimo. Pasivo: el muro empuja contra el terreno y el empuje es máximo. El reposo es el estado inicial."],
    ["Pantalla frente a muro", "La pantalla es flexible, se ejecuta antes de excavar y su estabilidad depende del empotramiento. El muro mantiene un desnivel con su peso y su cimiento."]
  ]
},

/* ------------------------------------------------------------------ T3 */
T3: {
  summary: [
    "Materiales más usados: acero, hormigón, áridos, fábrica y mezclas bituminosas. También madera, aluminio, vidrio, plásticos, materiales compuestos… y el suelo.",
    "Propiedades mecánicas: resistencia, resistencia a la deformación, dureza y fatiga. Las no mecánicas (densidad, propiedades térmicas, durabilidad…) no influyen en la ley de comportamiento.",
    "Acero: E ≈ 207 GPa, ν ≈ 0,27. Diagrama con zona elástica, fluencia, endurecimiento y estricción; $\\sigma_r\\lt\\sigma_{max}$ en el diagrama ingenieril.",
    "Perfiles laminados en caliente (los más usados), conformados en frío, cables (acero trefilado) y tornillos (4.6 a 10.9).",
    "Ductilidad: grandes deformaciones sin fractura. Favorece la fatiga y el comportamiento sísmico. La rotura frágil la favorecen entallas, grandes espesores, soldaduras y bajas temperaturas.",
    "Designación S 355 J2: S (acero) + f<sub>y</sub> mínimo en MPa + grado (JR, J0, J2: tenacidad y soldabilidad crecientes).",
    "Hormigón: cemento + áridos + agua (+ aditivos $\\le5$ % del peso del cemento). Árido fino $\\le4$ mm; árido grueso $\\gt4$ mm.",
    "Docilidad (cono de Abrams, 30 cm) y homogeneidad (se pierde por segregación y decantación).",
    "Fluencia: deformación en el tiempo bajo carga constante. Retracción: pérdida de agua (plástica e hidráulica). Cansancio: menor resistencia bajo carga lenta (≈ 0,85).",
    "Parábola-rectángulo: $f_{cd}=\\alpha_{cc}\\,f_{ck}/\\gamma_c$ ($\\gamma_c=1{,}5$ o $1{,}3$), $\\varepsilon_{c0}=0{,}002$, $\\varepsilon_{cu}=0{,}0035$ ($f_{ck}\\le50$).",
    "Designación T-R/C/TM/A, p. ej. HA-30/B/20/XC2. Clases de exposición: X0, XC, XD, XS, XF, XA, XM.",
    "Armaduras pasivas (400 o 500 MPa: B 400 S, B 500 SD, B 500 T) y activas (> 1000 MPa). Adherencia físico-química y mecánica.",
    "Suelos: arenas (alteración física, granulometría) y arcillas (alteración química, límites de Atterberg). Floculada = más huecos; dispersa = preconsolidada.",
    "Terzaghi: $\\sigma'=\\sigma-u$. El equilibrio se plantea con tensiones totales y el comportamiento con efectivas. Al bajar el nivel freático aumenta σ′.",
    "Consolidación: asiento diferido por la permeabilidad. Ensayo edométrico: $m_v=-d\\varepsilon_v/d\\sigma'$."
  ],
  sections: [
    { id: "t3-intro", title: "3.1 Introducción", html: `
<p>Los materiales más empleados son el <b>acero, el hormigón, los áridos, la fábrica y las mezclas bituminosas y asfaltos</b>. Otros frecuentes son la madera, el aluminio, el vidrio, los plásticos y los materiales compuestos, sin olvidar el <b>suelo como estructura</b>. Entre los materiales emergentes están los polímeros, adhesivos, compuestos, geotextiles, metales conformados en frío y los nuevos aditivos. Hay que tener en cuenta también los materiales reciclados y reciclables.</p>
<h4>Propiedades mecánicas</h4>
<p>Caracterizan la respuesta ante acciones externas:</p>
<ul><li><b>Resistencia</b>: varía con el tipo de esfuerzo, la edad, la humedad y la temperatura.</li><li><b>Resistencia a la deformación</b>: depende de la rigidez, la ductilidad, la edad y la temperatura.</li><li><b>Dureza</b>: resistencia al corte de la superficie, la abrasión y el desgaste.</li><li><b>Resistencia a la fatiga</b>: pérdida de resistencia con el tiempo ante acciones repetidas.</li></ul>
<p>La <b>ley de comportamiento</b> es la curva σ-ε del ensayo de caracterización. Los apuntes comparan la del vidrio, el acero, la aleación de aluminio, el hormigón y la goma.</p>
<table class="tbl"><thead><tr><th>Material</th><th>E (GPa)</th><th>ν</th></tr></thead><tbody>
<tr><td>Acero</td><td>207</td><td>0,27</td></tr><tr><td>Fundición de hierro</td><td>75–169</td><td>0,17</td></tr><tr><td>Cobre</td><td>110</td><td>0,35</td></tr><tr><td>Aluminio</td><td>69–75</td><td>0,33</td></tr><tr><td>Hormigón</td><td>14–40</td><td>0,11–0,21</td></tr><tr><td>Ladrillo</td><td>10–17</td><td>0,23–0,40</td></tr><tr><td>Roca caliza</td><td>58</td><td>—</td></tr><tr><td>Vidrio</td><td>62–70</td><td>0,25</td></tr><tr><td>Madera</td><td>6–15</td><td>—</td></tr><tr><td>Epoxy</td><td>3–140</td><td>—</td></tr><tr><td>Goma blanda</td><td>0,001–0,014</td><td>0,49</td></tr>
</tbody></table>
<h4>Propiedades no mecánicas</h4>
<p>No influyen en la ley de comportamiento: <b>densidad</b> (influye en la solicitación), propiedades <b>térmicas</b> (algunas influyen en la resistencia al fuego), <b>durabilidad</b>, propiedades eléctricas y magnéticas, trabajabilidad, estética, disponibilidad y coste. Los pesos específicos aparentes se recogen en el DB-SE-AE (tabla C.1), por ejemplo acero 77–78,5 kN/m³ y hormigón normal 24 kN/m³.</p>` },
    { id: "t3-acero", title: "3.2 Aceros estructurales", html: `
<h4>Tipos</h4>
<table class="tbl"><thead><tr><th>Tipo</th><th>Claves</th></tr></thead><tbody>
<tr><td><b>Laminados en caliente</b></td><td><b>Los más empleados en construcción.</b> Trenes de laminación a alta temperatura. Series IPN, IPE, HE, chapas, redondos…</td></tr>
<tr><td>Conformados en frío</td><td>Conformadoras de rodillo a partir de chapa fina. Perfiles en L, U, Z y paneles.</td></tr>
<tr><td>Cables</td><td>Acero <b>trefilado</b> de alta resistencia, para puentes atirantados y colgantes, grandes cubiertas y hormigón pretensado.</td></tr>
<tr><td>Tornillos</td><td>De 4.6 (f<sub>y</sub> = 240 MPa) a 10.9 (f<sub>y</sub> = 900 MPa).</td></tr>
</tbody></table>
<h4>Diagrama tensión-deformación (acero de dureza natural)</h4>
<ul><li>OA: zona elástica lineal (σ<sub>p</sub>, límite de proporcionalidad). AB: zona elástica.</li><li>σ<sub>e</sub>: límite elástico (deformación residual del 2 ‰).</li><li>BCDG: zona plástica, con σ<sub>f</sub> (límite de fluencia) y σ<sub>D</sub> (límite inferior de fluencia).</li><li>σ<sub>max</sub>: resistencia a tracción. GH: estricción y rotura; σ<sub>r</sub> es la tensión de rotura.</li><li>O′F: rama de descarga y recarga, con ε<sub>p</sub> plástica y ε<sub>e</sub> elástica.</li></ul>
<p>En el diagrama <b>ingenieril</b> la tensión de rotura σ<sub>r</sub> es <b>menor</b> que σ<sub>max</sub> por la estricción. En el diagrama de tensión <b>verdadera</b> la tensión sigue creciendo.</p>
<div class="gen"><b>Ampliación: otra forma de nombrar las zonas.</b> En muchos libros la misma curva se divide en tres tramos: <b>zona elástica</b> (hasta el límite de fluencia), <b>zona elástico-plástica</b> (el escalón de fluencia, donde la deformación crece casi sin aumentar la tensión) y <b>zona plástica</b> (endurecimiento, carga máxima y estricción hasta la rotura). Es la misma curva con otros nombres. <b>Para el examen, usa la división de los apuntes</b>: elástica OA + AB; <b>zona plástica BCDG</b>, que ya incluye la fluencia C–D y el endurecimiento hasta σ<sub>max</sub>; y estricción y rotura GH.</div>
<h4>Características mecánicas garantizadas por el fabricante</h4>
<p>Diagrama σ-ε, resistencia a tracción f<sub>u</sub>, <b>límite elástico f<sub>y</sub></b> (base de los ELU), deformación bajo carga máxima ε<sub>máx</sub>, <b>alargamiento en rotura ε<sub>u</sub></b> (base de la redistribución de esfuerzos), módulo E, estricción Z (%), <b>resiliencia KV</b> (energía absorbida en el ensayo de impacto Charpy) y <b>tenacidad</b> (resistencia a la propagación de grietas).</p>
<h4>Ductilidad</h4>
<p>Es la capacidad de alcanzar grandes deformaciones sin fracturarse. Cuanto mayor es el área de la zona plástica, mayor es la ductilidad. Los aceros dúctiles se comportan mejor a fatiga, y la ductilidad es muy importante en el <b>proyecto sísmico</b>.</p>
<p><b>Circunstancias que favorecen la rotura frágil</b>: ejecución descuidada (ángulos entrantes, oxicorte manual, entallas), <b>mayores espesores</b>, singularidades (agujeros, taladros), <b>soldaduras</b> (enfriamiento rápido, defectos, cruce de cordones) y <b>baja temperatura de servicio</b>.</p>
<h4>Características tecnológicas</h4>
<ul><li><b>Soldabilidad</b>: aptitud para soldarse sin fisuración en frío.</li><li><b>Desgarro laminar</b>: fisuras en piezas soldadas con tracción perpendicular a la superficie. Se evita con aceros de resistencia mejorada en esa dirección y con detalles constructivos adecuados.</li><li><b>Aptitud al doblado</b>: índice de ductilidad. En el doblado de armaduras (ganchos, patillas) se alcanzan deformaciones elevadas:</li></ul>
<div class="formula">$$L_0=\\tfrac14\\,2\\pi\\,2{,}5\\phi;\\quad L_f=\\tfrac14\\,2\\pi\\,3\\phi;\\quad \\varepsilon=\\frac{L_f-L_0}{L_0}=\\frac{3-2{,}5}{2{,}5}=0{,}2$$</div>
<h4>Designación: S 355 J2</h4>
<ul><li><b>S</b>: acero (steel). <b>355</b>: valor mínimo garantizado de f<sub>y</sub> en MPa.</li><li>Grupo 1: <b>JR</b> para construcción ordinaria; <b>J0</b> para altas exigencias de soldabilidad; <b>J2</b> para especiales exigencias de resistencia, resiliencia y soldabilidad.</li><li>Grupo 2: C (conformado en frío), H (perfil hueco), N (normalizado), W (resistente a la corrosión atmosférica)…</li></ul>
<table class="tbl"><thead><tr><th>Tipo</th><th>f<sub>y</sub> (t ≤ 40)</th><th>f<sub>u</sub> (t ≤ 40)</th><th>f<sub>y</sub> (40 &lt; t ≤ 80)</th><th>f<sub>u</sub> (40 &lt; t ≤ 80)</th></tr></thead><tbody>
<tr><td>S 235</td><td>235</td><td>360–510</td><td>215</td><td>360–510</td></tr>
<tr><td>S 275</td><td>275</td><td>430–580</td><td>255</td><td>410–560</td></tr>
<tr><td>S 355</td><td>355</td><td>490–680</td><td>335</td><td>470–630</td></tr>
<tr><td>S 450</td><td>450</td><td>550–720</td><td>410</td><td>530–700</td></tr>
</tbody></table>
<p class="note">Al aumentar el espesor disminuye f<sub>y</sub>. Grados disponibles: S 235 (JR, J0, J2), S 275 (JR, J0, J2), S 355 (JR, J0, J2, K2) y S 450 (J0).</p>` },
    { id: "t3-horm", title: "3.3 Hormigón", html: `
<p>Está formado por <b>cemento, áridos y agua</b> y, a veces, <b>aditivos</b>.</p>
<ul><li><b>Cemento</b>: calizas + arcillas, mezcladas y calcinadas, dan el clínker. Clínker + yeso pulverizados dan el cemento.</li><li><b>Áridos</b>: arenas, gravas, rocas machacadas o escoria siderúrgica. Áridos finos o arenas, $\\phi\\le4$ mm; áridos gruesos o gravas, $\\phi\\gt4$ mm. La superficie total de los áridos debe ser la menor posible respecto a su volumen, lo que exige una dosificación adecuada.</li><li><b>Agua</b>: en general cualquiera vale, <b>excepto la de mar</b> (cloruros), la de <b>alta montaña</b> (agresividad) y las <b>pantanosas</b> (limos, algas y residuos que dificultan la adherencia pasta-árido).</li><li><b>Aditivos</b>: se incorporan antes o durante el amasado en proporción <b>no superior al 5 % del peso del cemento</b> y modifican alguna característica en estado fresco o endurecido.</li></ul>
<h4>Características tecnológicas</h4>
<ul><li><b>Docilidad</b>: capacidad de rellenar el molde sin huecos. Se mide con el asiento del <b>cono de Abrams</b>: molde troncocónico de 30 cm que se llena, se voltea y se mide cuánto asienta la masa.</li><li><b>Homogeneidad</b>: los componentes deben estar distribuidos regularmente. Se consigue con buen amasado, transporte cuidadoso y colocación adecuada. Se pierde por <b>segregación</b> (separación de gruesos y finos) y por <b>decantación</b> (los gruesos caen al fondo en mezclas muy líquidas). Ambos fenómenos aumentan con el contenido de agua, el tamaño del árido, las vibraciones en el transporte y la puesta en obra en caída libre.</li></ul>
<h4>Características reológicas (comportamiento en el tiempo)</h4>
<table class="tbl"><thead><tr><th>Fenómeno</th><th>Definición y dependencias</th></tr></thead><tbody>
<tr><td><b>Fluencia</b></td><td>Deformación a lo largo del tiempo <b>sin incremento de la carga</b>. Depende de la humedad ambiente, de las dimensiones, de la composición, de la <b>edad de puesta en carga t<sub>0</sub></b> y de la magnitud y duración de la carga. A mayor HR, menor fluencia.</td></tr>
<tr><td><b>Retracción</b></td><td>Deformación en el tiempo por el gradiente de humedad con el ambiente. La armadura se opone a la contracción, lo que causa fisuración superficial y tensiones internas. Tipos: <b>plástica</b> (al inicio del fraguado: asentamiento plástico por exudación y retracción plástica por enfriamiento) e <b>hidráulica</b> (pérdida de agua en el resto del fraguado y curado).</td></tr>
<tr><td><b>Cansancio</b></td><td>Disminución de la resistencia bajo cargas lentas frente a cargas rápidas (≈ 0,85).</td></tr>
</tbody></table>
<div class="formula">$$\\varepsilon_{c\\sigma}(t,t_0)=\\sigma(t_0)\\left[\\frac{1}{E_{0,t_0}}+\\frac{\\varphi(t,t_0)}{E_{0,28}}\\right],\\qquad \\varphi(t,t_0)=\\varphi_0\\,\\beta_c(t-t_0)$$</div>
<p>El primer término es la deformación instantánea y el segundo la diferida. φ<sub>0</sub> es el coeficiente básico y β<sub>c</sub> describe el desarrollo en el tiempo.</p>
<h4>Características mecánicas</h4>
<p>A compresión con carga instantánea, el máximo se alcanza hacia $\\varepsilon\\approx0{,}002$ (curvas para f<sub>ck</sub> = 25 y 50 MPa). En los apuntes se distinguen la curva instantánea, la característica, la de t→∞ y la de cálculo.</p>
<p><b>Diagrama parábola-rectángulo:</b></p>
<div class="formula">$$f_{cd}=\\alpha_{cc}\\frac{f_{ck}}{\\gamma_c},\\quad 0{,}85\\le\\alpha_{cc}\\le1;\\quad \\gamma_c=1{,}5\\ \\text{(persistente o transitoria)},\\ 1{,}3\\ \\text{(accidental)}$$
$$\\sigma_c=f_{cd}\\left[1-\\left(1-\\frac{\\varepsilon_c}{\\varepsilon_{c0}}\\right)^n\\right]\\ (0\\le\\varepsilon_c\\le\\varepsilon_{c0});\\qquad \\sigma_c=f_{cd}\\ (\\varepsilon_{c0}\\le\\varepsilon_c\\le\\varepsilon_{cu})$$</div>
<table class="tbl"><thead><tr><th></th><th>f<sub>ck</sub> ≤ 50 N/mm²</th><th>f<sub>ck</sub> &gt; 50 N/mm²</th></tr></thead><tbody>
<tr><td>n</td><td>2</td><td>$1{,}4+9{,}6\\left[(100-f_{ck})/100\\right]^4$</td></tr>
<tr><td>ε<sub>c0</sub></td><td>0,002</td><td>$0{,}002+0{,}000085(f_{ck}-50)^{0{,}5}$</td></tr>
<tr><td>ε<sub>cu</sub></td><td>0,0035</td><td>$0{,}0026+0{,}0144\\left[(100-f_{ck})/100\\right]^4$</td></tr>
</tbody></table>
<p><b>Resistencia a tracción</b> (escasa aplicación en proyecto):</p>
<div class="formula">$$f_{ct,k}=0{,}21\\sqrt[3]{f_{ck}^2}\\ \\text{(característica)};\\quad f_{ct,m}=0{,}30\\sqrt[3]{f_{ck}^2}\\ \\text{(media)};\\quad f_{ct,k,0.95}=0{,}39\\sqrt[3]{f_{ck}^2}$$</div>
<p><b>Rigidez</b>: depende sobre todo de la dosificación, especialmente de los áridos. La rama elástica es muy corta y se habla de módulo de deformación, que no es constante: <b>tangente</b>, <b>secante</b>, <b>inicial</b> (tangente en el origen) e <b>instantáneo E<sub>c,sec45</sub></b> (secante al 45 % de f<sub>ck</sub>).</p>
<h4>Designación: T-R/C/TM/A</h4>
<ul><li><b>T</b>: HM (en masa), HA (armado), HP (pretensado).</li><li><b>R</b>: resistencia característica en N/mm² (20, 25, 30… 100).</li><li><b>C</b>: consistencia, S (seca), P (plástica), B (blanda) o F (fluida).</li><li><b>TM</b>: tamaño máximo del árido en mm.</li><li><b>A</b>: ambiente. X0 sin riesgo; XC1–4 carbonatación; XD1–3 cloruros de origen no marino; XS1–3 cloruros marinos; XF1–4 hielo-deshielo; XA1–3 ataque químico; XM1–3 erosión.</li></ul>
<p>Ejemplo: <b>HA-30/B/20/XC2</b>.</p>` },
    { id: "t3-arm", title: "3.4 Armaduras", html: `
<table class="tbl cmp"><thead><tr><th></th><th>Armaduras pasivas</th><th>Armaduras activas</th></tr></thead><tbody>
<tr><td>Uso</td><td>Hormigón armado convencional; resisten <b>pasivamente</b></td><td>Hormigón <b>pretensado</b> (tendones o barras); resisten <b>activamente</b></td></tr>
<tr><td>Resistencia</td><td>Habitual: <b>400 o 500 MPa</b></td><td>Solo aceros de alta resistencia (<b>&gt; 1000 MPa</b>)</td></tr>
<tr><td>Formatos</td><td>Barras corrugadas o rollos, mallas electrosoldadas (forjados, muros, losas, zapatas, depósitos) y armaduras básicas en celosía (prelosas, viguetas)</td><td>Alambres, cordones y barras</td></tr>
</tbody></table>
<h4>Designación de los aceros para armaduras pasivas</h4>
<ul><li><b>B 400 S</b> / <b>B 500 S</b>: B = acero para hormigón (béton); número = f<sub>y</sub> en MPa; S = barras corrugadas soldables.</li><li><b>B 400 SD</b> / <b>B 500 SD</b>: D = soldable con características especiales de <b>ductilidad</b>.</li><li><b>B 500 T</b>: alambres de acero <b>trefilado</b>, lisos o corrugados (mallas).</li></ul>
<p>Diámetros característicos: <b>6, 8, 10, 12, 14, 16, 20, 25, 32 y 40 mm</b>. Las corrugas identifican el tipo (B 400 S o B 500 S), el país (España: 7 corrugas) y el fabricante.</p>
<h4>Adherencia hormigón-acero</h4>
<p>Es fundamental para que el hormigón armado funcione: asegura el <b>anclaje</b> de las barras y controla la <b>fisuración</b>. Sus mecanismos son <b>físico-químicos</b> (adhesión por fuerzas capilares en la interfase) y <b>mecánicos</b> (rozamiento por la penetración del cemento en las irregularidades y efecto de cuña de las corrugas). Se caracteriza con el <b>ensayo tipo viga (beam test)</b>.</p>` },
    { id: "t3-suelo", title: "3.5 Suelos", html: `
<p><b>Rocas</b>: masas minerales de forma no constante, estudiadas por la mecánica de rocas. <b>Suelos</b>: resultado de la alteración de las rocas, estudiados por la mecánica del suelo. Particularidades del suelo:</p>
<ul><li><b>No se puede elegir</b>: viene dado por el emplazamiento.</li><li><b>No es homogéneo</b>.</li><li>El <b>contenido de agua</b> es muy importante en su comportamiento.</li></ul>
<table class="tbl cmp"><thead><tr><th></th><th>Arenas</th><th>Arcillas</th></tr></thead><tbody>
<tr><td>Origen</td><td>Alteración <b>física</b> de las rocas</td><td>Alteración <b>química</b>: geles amorfos y partículas laminares</td></tr>
<tr><td>Tracción</td><td>Sin resistencia a tracción</td><td>—</td></tr>
<tr><td>Propiedades dependen de</td><td>Tamaño de partícula y <b>compacidad</b></td><td><b>Composición y humedad</b></td></tr>
<tr><td>Clasificación</td><td><b>Curvas granulométricas</b> (tamizado)</td><td><b>Límites de Atterberg</b> (plasticidad frente a humedad)</td></tr>
</tbody></table>
<h4>Estructura de las arcillas</h4>
<ul><li><b>Floculada</b>: <b>mayor índice de huecos</b>.</li><li><b>Dispersa</b>: láminas ordenadas, con <b>menor resistencia al corte</b>. Se produce por <b>precompresión (preconsolidación)</b> y es un proceso irreversible: es la «memoria de las arcillas».</li><li><b>Plasticidad</b>: el agua adsorbida actúa como lubricante. Al aumentar la humedad w el suelo pasa de sólido a semisólido (límite de retracción), a plástico (límite plástico PL) y a semilíquido (límite líquido LL).</li></ul>
<h4>Fases y agua en el suelo</h4>
<p>El suelo tiene tres fases: sólida, líquida y gaseosa. Puede estar <b>seco</b> (huecos con aire), <b>saturado</b> (huecos con agua) o <b>parcialmente saturado</b>. El agua puede ser freática (acuíferos) o estar por encima del nivel freático como agua higroscópica, adsorbida o capilar.</p>
<table class="tbl"><thead><tr><th>Peso específico</th><th>Expresión</th></tr></thead><tbody>
<tr><td>Aparente</td><td>$\\gamma=W_m/V_m$</td></tr>
<tr><td>Seco</td><td>$\\gamma_d=W_s/V_m$</td></tr>
<tr><td>Saturado</td><td>$\\gamma_{sat}=(W_s+V_h\\gamma_w)/V_m$</td></tr>
<tr><td>Sumergido</td><td>$\\gamma'=\\gamma_{sat}-\\gamma_w$</td></tr>
<tr><td>Fase sólida</td><td>$\\gamma_s=W_s/V_s=G_s\\gamma_w$, con G<sub>s</sub> ≈ 2,3–2,8</td></tr>
</tbody></table>
<table class="tbl"><thead><tr><th>Índice</th><th>Expresión</th></tr></thead><tbody>
<tr><td>Índice de huecos</td><td>$e=(V_a+V_w)/V_s$</td></tr>
<tr><td>Porosidad</td><td>$n=(V_a+V_w)/V_m=e/(1+e)$</td></tr>
<tr><td>Humedad</td><td>$w=W_w/W_s$</td></tr>
<tr><td>Saturación</td><td>$S=V_w/(V_a+V_w)$</td></tr>
</tbody></table>
<p class="note">Ejemplo de la hoja oficial de soluciones de 2024: con $G_s=2{,}7$ y $e=1{,}5$ ($V_s=1$, $V_m=1+e=2{,}5$):</p>
<div class="formula">$$\\gamma_d=\\frac{G_s\\,\\gamma_w}{1+e}=\\frac{2{,}7}{2{,}5}=1{,}08\\ \\text{t/m}^3$$
$$\\gamma_{sat}=\\frac{(G_s+e)\\,\\gamma_w}{1+e}=\\frac{2{,}7+1{,}5}{2{,}5}=1{,}68\\ \\text{t/m}^3$$</div>
<h4>Principio de Terzaghi (tensiones efectivas)</h4>
<div class="formula">$$\\sigma'_{ij}=\\sigma_{ij}-u\\,\\delta_{ij}$$</div>
<p>El <b>equilibrio</b> se plantea con tensiones <b>totales</b> y el <b>comportamiento</b> depende de las <b>efectivas</b>. Los apuntes usan la analogía de una esponja sumergida en una bañera.</p>
<ul><li><b>Caso 1</b>, lámina de agua h<sub>w</sub> sobre el terreno: $\\sigma=\\gamma_w h_w+\\gamma_{sat}(z-h_w)$ y $u=\\gamma_w z$, así que $\\sigma'=\\gamma'(z-h_w)$. Las tensiones efectivas <b>no dependen de h<sub>w</sub></b> y no hay deformación.</li>
<li><b>Caso 2</b>, relleno de peso γ<sub>r</sub>: $\\sigma'=\\gamma_r h_w+\\gamma'(z-h_w)$. Las tensiones efectivas <b>sí dependen</b> del relleno y hay deformación.</li>
<li><b>Descenso del nivel freático</b> de $H_{W1}$ a $H_{W2}\\gt H_{W1}$: $\\sigma'=(\\gamma-\\gamma')\\,H_W+\\gamma' H$, que <b>aumenta</b> al bajar el nivel freático. Por eso los descensos de nivel producen asientos.</li></ul>
<div class="gen"><b>Aplicación (examen PA1 2025, resolución oficial):</b> si el nivel freático sube desde H hasta la superficie, $\\Delta\\sigma'=(\\gamma'-\\gamma)\\,z$ para $0\\le z\\le H$ (<b>lineal</b>) y $\\Delta\\sigma'=(\\gamma'-\\gamma)\\,H$ para $z\\ge H$ (<b>constante</b>).</div>
<h4>ELS del suelo: asientos (CTE)</h4>
<p>Asiento s, asiento diferencial δs, distorsión angular β e inclinación ω, definidos como en el tema de cimentaciones.</p>
<h4>Consolidación</h4>
<p>Por la coexistencia de fases, la ley de comportamiento debe expresarse en tensiones efectivas y requiere ensayos. La <b>permeabilidad</b> (resistencia al paso del agua) hace que las presiones intersticiales varíen con el tiempo hasta un nuevo equilibrio, lo que produce un <b>asiento diferido</b>: la <b>consolidación</b>.</p>
<p><b>Ensayo edométrico</b>: terreno homogéneo con carga uniforme y distintas condiciones de drenaje.</p>
<div class="formula">$$m_v=-\\frac{d\\varepsilon_v}{d\\sigma'_a}\\quad\\text{(coeficiente de cambio volumétrico)}$$</div>` }
  ],
  confusions: [
    ["Fluencia frente a retracción", "La fluencia la causa una <b>carga mantenida</b>. La retracción, la <b>pérdida de agua</b>, y aparece aunque no haya carga."],
    ["Fluencia frente a cansancio", "Fluencia: aumento de deformación con el tiempo. Cansancio: <b>menor resistencia</b> ante cargas lentas (≈ 0,85 f<sub>c</sub>)."],
    ["Segregación frente a decantación", "Segregación: gruesos y finos se separan. Decantación: los gruesos caen al fondo en mezclas muy líquidas."],
    ["Tensión de rotura frente a resistencia a tracción", "En el diagrama ingenieril $\\sigma_r\\lt\\sigma_{max}\\ (=f_u)$ por la estricción."],
    ["Resiliencia frente a tenacidad", "Resiliencia (KV): energía absorbida en el impacto Charpy. Tenacidad: resistencia a la propagación de grietas."],
    ["JR, J0 y J2", "JR: construcción ordinaria. J0: altas exigencias de soldabilidad. J2: exigencias especiales de resistencia, resiliencia y soldabilidad."],
    ["B 500 S, B 500 SD y B 500 T", "S: barra corrugada soldable. SD: además, alta ductilidad. T: alambre trefilado (mallas)."],
    ["Armadura pasiva frente a activa", "Pasiva: 400 o 500 MPa, hormigón armado. Activa: más de 1000 MPa, pretensado."],
    ["Floculada frente a dispersa", "Floculada: más huecos. Dispersa: láminas ordenadas por preconsolidación, menor resistencia al corte."],
    ["Tensión total frente a efectiva", "La total sirve para el equilibrio. La efectiva (σ − u) gobierna el comportamiento: deformación y resistencia."],
    ["Peso saturado frente a sumergido", "$\\gamma'=\\gamma_{sat}-\\gamma_w$. Es el que aparece en σ′ bajo el nivel freático."]
  ]
}
};
