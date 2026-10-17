/* =====================================================================
   BANCO DE APRENDIZAJE (preguntas NUEVAS, generadas a partir de los
   apuntes; no son preguntas de examen). Formato:
   L(tema, apartado, dificultad 1-3, enunciado, [opciones], correctas, explicación, referencia)
   - correctas: índice (0-3) o array de índices si hay varias.
   - Las explicaciones no citan letras porque las opciones se barajan.
   ===================================================================== */
const LEARN = [];
function L(t, s, d, q, o, a, e, r) {
  LEARN.push({ id: "L" + (LEARN.length + 1), tema: t, apartado: s, d: d, q: q, o: o,
    a: Array.isArray(a) ? a : [a], multi: Array.isArray(a), exp: e, ref: r });
}

/* ============================ TEMA 1 ============================ */
L("T1","Proyecto estructural",1,"¿Qué fase del proyecto desarrolla la determinación completa de detalles y especificaciones de todos los materiales, elementos, sistemas constructivos y equipos?",
["Anteproyecto","Proyecto básico","Proyecto de ejecución","Plan de mantenimiento"],2,
"El proyecto de ejecución desarrolla el proyecto básico con la determinación completa de detalles y especificaciones. El anteproyecto solo expone los aspectos fundamentales, y el básico define las características generales con soluciones concretas y su justificación.","Apuntes T1, diap. 3");
L("T1","Proyecto estructural",1,"El documento que expone los aspectos fundamentales y las características generales de la intervención es:",
["El proyecto de ejecución","El anteproyecto","El proyecto básico","El catálogo de soluciones de reparación"],1,
"Según los apuntes, el anteproyecto «expone los aspectos fundamentales y las características generales de la intervención».","Apuntes T1, diap. 3");
L("T1","Proyecto estructural",2,"¿Cuál de las siguientes asociaciones entre etapa de la construcción y tipo de gestión es correcta?",
["Proyecto → gestión de la demolición","Uso → gestión durante su vida de servicio","Construcción → gestión de la calidad del proyecto","Demolición → gestión de la calidad de los productos"],1,
"La etapa de uso se asocia a la gestión durante la vida de servicio. Las demás asociaciones correctas son: proyecto con calidad del proyecto, construcción con calidad de los productos y de la ejecución, y demolición con gestión de la demolición y deconstrucción.","Apuntes T1, diap. 2");
L("T1","Requisitos",1,"Según los apuntes, ¿cuál NO es uno de los requisitos de seguridad y funcionalidad estructural?",
["Resistencia y estabilidad","Aptitud al servicio","Robustez y redundancia","Estética de la fachada"],3,
"Los requisitos de seguridad y funcionalidad son: resistencia y estabilidad, aptitud al servicio (rigidez), robustez y redundancia, y durabilidad. La estética no es un requisito estructural.","Apuntes T1, diap. 5");
L("T1","Requisitos",1,"El requisito de que un evento extraordinario no produzca consecuencias desproporcionadas respecto a la causa original se denomina:",
["Durabilidad","Aptitud al servicio","Robustez y redundancia","Estabilidad"],2,
"La robustez y la redundancia buscan que un evento extraordinario no provoque consecuencias desproporcionadas respecto a su causa.","Apuntes T1, diap. 5");
L("T1","Requisitos",1,"La aptitud al servicio se relaciona principalmente con:",
["La rigidez: deformaciones admisibles, confort y ausencia de fisuras inaceptables","La carga de colapso de la estructura","La protección activa contra incendios","El reciclaje de materiales tras la demolición"],0,
"En los apuntes la aptitud al servicio aparece como «rigidez»: deformaciones admisibles, confortabilidad de los usuarios y que no se produzcan degradaciones o fisuras inaceptables.","Apuntes T1, diap. 5");
L("T1","Requisitos",2,"La durabilidad, como requisito estructural, consiste en:",
["Resistir cualquier carga sin deformarse","Alcanzar la vida útil nominal manteniendo todos los requisitos","Evitar la fatiga en materiales dúctiles","Que la estructura sea desmontable y reutilizable"],1,
"Los apuntes definen la durabilidad como «alcanzar la vida útil nominal manteniendo todos los requisitos».","Apuntes T1, diap. 5");
L("T1","Requisitos",2,"Según los apuntes, la resistencia y la estabilidad deben garantizarse frente a las acciones previsibles…",
["solo durante el uso","solo en situaciones persistentes","en fase de ejecución, uso y desmontaje","solo durante la ejecución"],2,
"Los apuntes indican que no deben generarse riesgos inadmisibles por las acciones previsibles «en fase de ejecución, uso y desmontaje».","Apuntes T1, diap. 5");
L("T1","Requisitos",2,"Señalar las respuestas correctas (puede haber más de una). Son exigencias según la normativa recogidas en los apuntes:",
["Seguridad y funcionalidad estructural","Seguridad en caso de incendio","Higiene, salud y protección del medio ambiente","Rentabilidad económica máxima del promotor"],[0,1,2],
"Los apuntes recogen tres exigencias normativas: seguridad y funcionalidad estructural, seguridad en caso de incendio, e higiene, salud y protección del medio ambiente. Las exigencias del cliente se mencionan aparte como pregunta abierta.","Apuntes T1, diap. 4");
L("T1","Modos de fallo",1,"¿Qué ventaja tiene la rotura dúctil frente a la frágil?",
["Se produce con deformaciones muy pequeñas","Permite reajustes de tensiones y advierte del peligro","Elimina el riesgo de fatiga","Hace innecesarios los coeficientes de seguridad"],1,
"La rotura dúctil, con grandes deformaciones, permite reajustar tensiones que descargan la zona peligrosa y en último caso advierte del peligro.","Apuntes T1, diap. 7");
L("T1","Modos de fallo",2,"Sobre el uso de materiales dúctiles como el acero en régimen plástico, es cierto que:",
["Los estados plásticos son totalmente reversibles","Admiten sin problema la alternancia de cargas","No admiten repeticiones o alternancia de cargas sin riesgo de fatiga","La fatiga solo aparece con tensiones superiores a la resistencia"],2,
"Los estados plásticos son menos reversibles y no admiten repeticiones ni alternancia de cargas: aparece la fatiga, que es la rotura tras cierto número de ciclos con tensiones muy por debajo de la resistencia estática.","Apuntes T1, diap. 7");
L("T1","Modos de fallo",2,"La fatiga es:",
["La rotura tras un número de repeticiones de carga con tensiones muy inferiores a la resistencia con carga no repetitiva","La pérdida de resistencia del hormigón bajo carga lenta","La deformación del hormigón bajo carga constante","El pandeo de barras esbeltas comprimidas"],0,
"Es la definición de los apuntes. La pérdida de resistencia bajo carga lenta es el cansancio del hormigón y la deformación bajo carga constante es la fluencia; los dos se ven en el T3.","Apuntes T1, diap. 7");
L("T1","Cálculo elástico y plástico",1,"Al diseñar el mismo elemento con teoría plástica (rotura) frente a teoría elástica, se obtienen:",
["Mayores dimensiones y cuantía","Menores dimensiones y cuantía de material","Las mismas dimensiones","Dimensiones mayores solo en acero"],1,
"Según los apuntes, el diseño a rotura da dimensiones y cuantías menores, porque mantener el material en el rango elástico ante el mismo esfuerzo exige más material.","Apuntes T1, diap. 9");
L("T1","Cálculo elástico y plástico",2,"En el cálculo plástico:",
["Los elementos deben permanecer en el rango elástico","Se determinan las cargas y mecanismos de colapso","Los esfuerzos se calculan en régimen lineal","No se considera el diagrama momento-curvatura"],1,
"En el caso plástico se permite entrar en el rango plástico y se determinan las cargas y los mecanismos de colapso. Lo demás describe el cálculo elástico.","Apuntes T1, diap. 8-9");
L("T1","Fuego",1,"La pintura intumescente es un ejemplo de:",
["Sistema activo de protección contra el fuego","Sistema pasivo de protección contra el fuego","Sistema de evacuación","Sector de incendio"],1,
"Los sistemas pasivos protegen el elemento (pintura intumescente, mortero ignífugo, placa rígida). Los activos detectan, controlan y extinguen el incendio (sprinklers).","Apuntes T1, diap. 11");
L("T1","Fuego",1,"Un sistema de sprinklers es:",
["Protección pasiva","Protección activa","Un sector de incendio","Una condición de ventilación"],1,
"Los sistemas activos están diseñados para detectar, controlar y extinguir el incendio; el ejemplo de los apuntes son los sprinklers.","Apuntes T1, diap. 11");
L("T1","Medio ambiente",2,"Según los apuntes, en relación con los residuos el enfoque debe ponerse en:",
["El reciclaje antes que la reutilización","La reutilización y no en el reciclaje","El vertido controlado","La incineración"],1,
"Los apuntes indican: «Foco en la reutilización y no en el reciclaje (mínimos residuos en fabricación ~10 % de reutilización y 95 % de reciclaje)».","Apuntes T1, diap. 12");
L("T1","Medio ambiente",2,"La modularidad, como criterio de diseño recogido en los apuntes, implica:",
["Máximo trabajo en obra y mínimo en taller","Máximo trabajo en taller y mínimo en obra","Usar siempre piezas de hormigón in situ","Evitar uniones atornilladas"],1,
"La modularidad significa máximo trabajo en taller y mínimo en obra, junto con ligereza y sencillez de detalles.","Apuntes T1, diap. 12");
L("T1","Vida de servicio",2,"¿Qué documento forma parte de los criterios generales para la reparación de estructuras?",
["El catálogo de daños y el mapa de daños","El anteproyecto","El cálculo plástico","La ficha de combinaciones de acciones"],0,
"La reparación incluye la clasificación de deterioros, el catálogo y mapa de daños, el catálogo de soluciones, el proyecto de reparación y el plan de inspección y mantenimiento.","Apuntes T1, diap. 13");
L("T1","Métodos",1,"El método de tensiones admisibles tiene base:",
["Probabilista de nivel 2","Determinista","Probabilista de nivel 1","Semiprobabilista con coeficientes parciales"],1,
"Es el método clásico de base determinista. Los estados límite tienen base probabilista y se aplican como nivel 1.","Apuntes T1, diap. 14-15");
L("T1","Métodos",2,"En el método de tensiones admisibles se verifica:",
["σ ≥ σmat·FS","σ ≤ σmat / FS","σ ≤ σmat · FS","Rd ≥ Sd con coeficientes parciales"],1,
"Se verifica σ ≤ σadm = σmat/FS, donde FS es el factor de seguridad.","Apuntes T1, diap. 15");
L("T1","Métodos",2,"Señalar las respuestas correctas (puede haber más de una). Consecuencias del método de tensiones admisibles según los apuntes:",
["Mayor desaprovechamiento de la capacidad resistente del material","No da información sobre el margen de seguridad hasta rotura","Conduce a estructuras más caras e inciertas en cuanto a seguridad","Considera explícitamente la readaptación plástica"],[0,1,2],
"El método no considera la readaptación plástica; precisamente por eso desaprovecha el material. Tampoco informa del margen hasta la rotura, por lo que da estructuras más caras e inciertas.","Apuntes T1, diap. 15");
L("T1","Métodos",2,"Una barra se diseñó con un factor de seguridad inicial FS. Si la tensión de trabajo se duplica y el material no cambia, el nuevo factor de seguridad es:",
["2·FS","FS","FS/2","FS²"],2,
"FS = σadm/σ. Si σ se duplica, FS se reduce a la mitad. Es el mismo planteamiento que el «ejercicio factor de seguridad» de la hoja oficial de 2025, donde FSfinal/FSinicial = σinicial/σfinal = 0,5.","Apuntes T1, diap. 15 · Hoja de soluciones 2025");
L("T1","Métodos",2,"El método de los estados límite permite tener en cuenta de forma sencilla el carácter aleatorio de:",
["Solo las acciones","Las acciones, las propiedades de los materiales y los datos geométricos","Solo las propiedades del material","Solo la geometría"],1,
"Permite considerar el carácter aleatorio de las variables de solicitación (acciones), de resistencia (materiales) y dimensionales (geometría).","Apuntes T1, diap. 14");
L("T1","Fiabilidad",1,"La fiabilidad de una estructura se define como:",
["pf","1 − pf","1/pf","β·pf"],1,
"Los apuntes la definen como 1 − pf, donde pf es la probabilidad de fallo.","Apuntes T1, diap. 17");
L("T1","Fiabilidad",2,"En los métodos probabilistas de nivel 2:",
["Se usan solo valores característicos y coeficientes parciales","Las variables de carga y resistencia se representan por sus funciones estadísticas de distribución","No se considera la variabilidad","Se usa un único factor de seguridad global"],1,
"Nivel 2: distribuciones estadísticas de las variables. El nivel 1 simplifica con valores característicos y coeficientes parciales.","Apuntes T1, diap. 18");
L("T1","Fiabilidad",2,"¿En qué nivel de métodos probabilistas se basan el CE, el CTE y los Eurocódigos?",
["Nivel 3","Nivel 2","Nivel 1","En ninguno: son deterministas"],2,
"Los apuntes indican que el CE, el CTE, los EC y casi todos los códigos se basan en el nivel 1 de diseño.","Apuntes T1, diap. 18");
L("T1","Fiabilidad",3,"Señalar las respuestas correctas (puede haber más de una). Características de los métodos de nivel 1:",
["Engloban las incertidumbres en dos factores: resistencia (R) y acciones (S)","Sustituyen las funciones de distribución por valores característicos","Ponderan esos valores con coeficientes parciales definidos para una fiabilidad dada","Proporcionan como resultado el valor numérico de pf de la estructura"],[0,1,2],
"Las tres primeras son literales de los apuntes. El nivel 1 no calcula pf: verifica estados límite con coeficientes calibrados.","Apuntes T1, diap. 18");
L("T1","Fiabilidad",3,"En el caso fundamental (R y S normales e independientes), si aumenta la desviación típica de la resistencia y no cambia nada más, la probabilidad de fallo:",
["Disminuye","Aumenta","No cambia","Depende del valor de γm"],1,
"Con β = (μR − μS)/√(σR² + σS²) y μR > μS, aumentar σR aumenta el denominador y reduce β, así que pf = Φ(−β) aumenta. (Desarrollo de conocimiento general; los apuntes solo presentan la idea gráfica con β·s.)","General · coherente con T1, diap. 16-17");
L("T1","Fiabilidad",3,"Para R con media 235 MPa y desviación 14 MPa, y S con media 118,6 MPa y desviación 26,36 MPa, el índice de fiabilidad β vale aproximadamente:",
["1,2","2,5","3,9","8,3"],2,
"μM = 235 − 118,6 = 116,4 MPa; σM = √(14² + 26,36²) = 29,85 MPa; β = 116,4/29,85 ≈ 3,9. Es el ejercicio de fiabilidad resuelto en la hoja oficial de soluciones de 2024.","Hoja de soluciones PA1 2024");
L("T1","Acciones",1,"Según los apuntes, una acción es:",
["Solo una fuerza exterior","Cualquier causa (fuerza o deformación) capaz de producir o modificar estados tensionales","Solo el peso propio","El valor de cálculo de un esfuerzo"],1,
"Es la definición literal de los apuntes. Las acciones pueden ser permanentes, variables o accidentales, y libres o fijas en el espacio.","Apuntes T1, diap. 19");
L("T1","Acciones",2,"Según su variación en el tiempo, las acciones se clasifican en:",
["Libres y fijas","Permanentes, variables y accidentales","Estáticas y dinámicas solamente","Favorables y desfavorables"],1,
"En el tiempo: permanentes, variables o accidentales. En el espacio: libres o fijas.","Apuntes T1, diap. 19");
L("T1","Situaciones",2,"En las situaciones relativas a la rigidez, la situación de corta duración e irreversible se denomina:",
["Frecuente","Casi permanente","Poco frecuente","Fundamental"],2,
"Rigidez: poco frecuente (corta duración e irreversible), frecuente (corta duración y reversible) y casi permanente (larga duración).","Apuntes T1, diap. 19");
L("T1","Situaciones",2,"En las situaciones relativas a la resistencia, los apuntes distinguen:",
["Frecuente y casi permanente","Fundamental (permanente o transitoria) y extraordinaria","Poco frecuente y frecuente","Elástica y plástica"],1,
"Para la resistencia, las situaciones son fundamental (permanente o transitoria) y extraordinaria.","Apuntes T1, diap. 19");
L("T1","Valores característicos",1,"El valor característico de la resistencia es aquel para el cual existe una probabilidad del 5 % de que existan valores…",
["más altos","más bajos","iguales","nulos"],1,
"Resistencia: un 5 % de valores más bajos. Acción: un 5 % de valores más altos.","Apuntes T1, diap. 20");
L("T1","Valores característicos",1,"El valor característico de una acción es aquel con una probabilidad del 5 % de que existan valores…",
["más bajos","más altos","negativos","iguales a la media"],1,
"En las acciones el lado inseguro son los valores altos: el característico deja un 5 % de valores superiores.","Apuntes T1, diap. 20");
L("T1","Coeficientes parciales",1,"El coeficiente γm es un coeficiente de:",
["Mayoración de acciones","Minoración de resistencias","Combinación de acciones","Simultaneidad"],1,
"γm minora las resistencias y γf mayora las acciones.","Apuntes T1, diap. 21");
L("T1","Coeficientes parciales",2,"La determinación de los coeficientes parciales de seguridad es un compromiso entre:",
["El coste de construcción y conservación, que aumenta con el coeficiente, y el coste de los daños potenciales, que disminuye al aumentarlo","La resistencia a tracción y la de compresión","El peso propio y la sobrecarga","Los ELS y la estética"],0,
"Es el compromiso económico que recogen los apuntes.","Apuntes T1, diap. 21");
L("T1","Coeficientes parciales",2,"Aplicando los coeficientes parciales de seguridad sobre los valores característicos se obtienen:",
["Valores medios","Valores de cálculo","Valores de servicio","Valores frecuentes"],1,
"Los valores de cálculo resultan de aplicar γ a los valores característicos.","Apuntes T1, diap. 21");
L("T1","Estados límite",1,"Los estados límite de servicio se relacionan con:",
["El colapso total o parcial","La funcionalidad, estética y durabilidad","La rotura por fatiga","El vuelco de la estructura"],1,
"Los ELS son situaciones de riesgo relativas a la funcionalidad: funcionalidad, estética y durabilidad.","Apuntes T1, diap. 23");
L("T1","Estados límite",2,"En los ELU se utilizan combinaciones de carga con ___ probabilidad de ocurrencia y los parámetros de control son ___.",
["alta / desplazamientos","baja / esfuerzos o tensiones","alta / esfuerzos","baja / aceleraciones"],1,
"ELU: baja probabilidad y control de esfuerzos o tensiones. ELS: alta probabilidad y control de desplazamientos y aceleraciones.","Apuntes T1, diap. 23-25");
L("T1","Estados límite",2,"La comprobación general de un estado límite de servicio se expresa como:",
["Rd ≥ Sd","Cd ≥ Ed","σ ≤ σmat/FS","Ed ≥ Cd"],1,
"ELS: Cd (valor límite admisible) ≥ Ed (valor de cálculo del efecto). ELU: Rd ≥ Sd.","Apuntes T1, diap. 24");
L("T1","Estados límite",2,"Señalar las respuestas correctas (puede haber más de una). Son estados límite últimos según los apuntes:",
["Equilibrio","Pandeo","Fatiga","Vibraciones"],[0,1,2],
"ELU: equilibrio, agotamiento, pandeo, fatiga y adherencia. Las vibraciones son un ELS.","Apuntes T1, diap. 24-26");
L("T1","Estados límite",2,"¿Cuál de los siguientes es un estado límite de servicio según los apuntes?",
["Adherencia","Deslizamiento de tornillos","Agotamiento","Equilibrio"],1,
"El esquema de ELS incluye flechas, vibraciones (verticales y horizontales) y otros, como el deslizamiento de tornillos. Adherencia, agotamiento y equilibrio son ELU.","Apuntes T1, diap. 24");
L("T1","Estados límite",2,"Las situaciones de proyecto «transitorias» se refieren a:",
["Condiciones de uso normal","Condiciones temporales como la ejecución o la reparación","Fuego o impacto","Sismo"],1,
"Persistentes: uso normal. Transitorias: condiciones temporales (ejecución o reparación). Accidentales: fuego, impacto o fallo localizado. Sísmicas.","Apuntes T1, diap. 22");
L("T1","Estados límite",3,"Un forjado presenta una flecha excesiva que fisura la tabiquería, pero no hay riesgo de colapso. Se ha superado un:",
["Estado límite último de agotamiento","Estado límite de servicio","Estado límite último de equilibrio","Estado límite de fatiga"],1,
"Afecta a la funcionalidad y la durabilidad (deformación no admisible) pero no a la seguridad frente al colapso: es un ELS de flechas.","Apuntes T1, diap. 23-24");
L("T1","Estados límite",3,"Si una estructura vuelca como sólido rígido sin que ningún elemento se agote, el estado límite superado es:",
["ELS de inclinación","ELU de equilibrio","ELU de agotamiento","ELU de adherencia"],1,
"La pérdida de equilibrio estático del conjunto es un ELU de equilibrio, distinto del agotamiento resistente de las secciones.","Apuntes T1, diap. 10 y 26");
L("T1","Parámetros de diseño",1,"Según los apuntes, los parámetros de diseño estructural se deben principalmente a:",
["Materiales; tipos, formas y dimensiones resistentes; proceso constructivo","Solo el material","Solo la normativa","Solo el presupuesto"],0,
"Es la lista de los apuntes; se indica que el proceso constructivo no forma parte de la asignatura.","Apuntes T1, diap. 28");
L("T1","Métodos",3,"¿Cuál es el orden correcto del proceso de cálculo mediante estados límite?",
["Respuesta → estructura → acción → aceptación","Acción normalizada → estructura (idealización) → respuesta → ¿cumple criterios? → aceptación o modificación","Aceptación → acción → respuesta","Estructura → aceptación → acción"],1,
"Es el diagrama de flujo de los apuntes. Si no se cumplen los criterios, se modifica la estructura y se repite.","Apuntes T1, diap. 27");
L("T1","Estabilidad",1,"El requisito de estabilidad consiste en que:",
["La estructura no se desmorone por inestabilidad total o parcial","No haya fisuras","Se alcance la vida útil","No se superen las flechas"],0,
"Es la definición de los apuntes. Se distinguen equilibrio estable, inestable y sin equilibrio.","Apuntes T1, diap. 10");

/* ============================ TEMA 2.1 ============================ */
L("T2","Introducción",1,"Según Torroja, el tipo estructural es:",
["El material empleado en la estructura","El conjunto de elementos resistentes capaz de mantener sus formas y cualidades a lo largo del tiempo bajo las cargas y agentes exteriores","La geometría exterior del edificio","El método de cálculo empleado"],1,
"Es la definición de Torroja que recogen los apuntes.","Apuntes T2.1, diap. 2");
L("T2","Escala",2,"Si se multiplican por 2 todas las dimensiones de una estructura (semejanza geométrica), su peso propio se multiplica por ___ y la sección resistente por ___.",
["2 / 2","4 / 8","8 / 4","8 / 2"],2,
"El peso crece con el volumen (λ³ = 8) y la sección con el área (λ² = 4). Por eso, al crecer la escala el peso propio penaliza cada vez más.","Apuntes T2.1, diap. 3");
L("T2","Escala",2,"Cuando el peso propio es muy importante, al aumentar la escala de una estructura:",
["Se puede mantener la semejanza geométrica sin problemas","Se pierde la semejanza geométrica, salvo que se usen mejores materiales","La resistencia crece con el cubo de las dimensiones","El peso crece con el cuadrado"],1,
"Es la conclusión de Galileo (1638) recogida en los apuntes.","Apuntes T2.1, diap. 3");
L("T2","Geometría",2,"Una superficie desarrollable es aquella que:",
["Tiene las dos curvaturas principales del mismo signo","Tiene una curvatura principal nula y la otra del mismo signo en todos los puntos","Tiene curvaturas principales de signo opuesto","Tiene alabeo en todos sus puntos"],1,
"Las superficies desarrollables (se pueden aplanar sin cortarlas) tienen una curvatura principal nula y la otra de signo constante.","Apuntes T2.1, diap. 4");
L("T2","Geometría",2,"El alabeo de una superficie se define como:",
["La curvatura máxima en un punto","La diferencia de pendientes entre lados opuestos de su geometría","El espesor de la lámina","La flecha relativa al vano"],1,
"El alabeo es la diferencia de pendientes entre lados opuestos. Un rectángulo con lados paralelos a las direcciones principales de curvatura no tiene alabeo.","Apuntes T2.1, diap. 4");
L("T2","Geometría",3,"Señalar la respuesta incorrecta sobre direcciones principales:",
["Las direcciones principales de curvatura dependen solo de la geometría","Las direcciones principales de tensión dependen de las cargas y condiciones de contorno","Las envolventes de las direcciones principales de tensión forman las líneas isostáticas","Las direcciones principales de curvatura y de tensión coinciden siempre"],3,
"Los apuntes advierten expresamente de no confundirlas: unas dependen solo de la geometría y las otras también de las cargas y del contorno, así que no coinciden en general.","Apuntes T2.1, diap. 6");
L("T2","Geometría",1,"¿Qué esfuerzos «filtra» la geometría de una viga cajón, según los apuntes?",
["Solo tracciones","Flexiones y torsiones","Solo compresiones","Solo cortantes"],1,
"Los apuntes ponen como ejemplos que el cable solo resiste tracciones y la viga cajón flexiones y torsiones.","Apuntes T2.1, diap. 5");
L("T2","Proyecto",1,"Señalar las respuestas correctas (puede haber más de una). Los tres aspectos que han de considerarse en el proyecto y cálculo de una estructura son:",
["Equilibrio","Resistencia","Estabilidad","Estética"],[0,1,2],
"Equilibrio (inmovilidad respecto al cimiento), resistencia (cada volumen elemental soporta sus fuerzas internas) y estabilidad (evitar el pandeo o la inestabilidad global).","Apuntes T2.1, diap. 5");
L("T2","Clasificación",1,"Una losa en la que solo aparecen esfuerzos contenidos en su plano medio (Nx, Ny, Nxy) se denomina:",
["Placa","Laja","Lámina a flexión pura","Bóveda"],1,
"Laja: solo esfuerzos del Grupo 1. Placa: solo esfuerzos del Grupo 2 (momentos y cortantes).","Apuntes T2.1, diap. 7");
L("T2","Clasificación",1,"Una placa se caracteriza por presentar:",
["Solo esfuerzos Nx, Ny, Nxy","Solo esfuerzos Mx, My, Mxy, Myx, Vx, Vy","Solo tracciones","Esfuerzos de ambos grupos y curvatura"],1,
"La placa solo tiene esfuerzos perpendiculares al plano medio (Grupo 2).","Apuntes T2.1, diap. 7");
L("T2","Clasificación",2,"Una membrana es un elemento bidimensional curvo que desarrolla:",
["Solo esfuerzos del Grupo 2","Solo esfuerzos en el plano tangente (Nx, Ny, Nxy)","Flexión pura","Esfuerzos de ambos grupos"],1,
"Membrana: caso particular de lámina con solo esfuerzos del Grupo 1.","Apuntes T2.1, diap. 8 y 33");
L("T2","Clasificación",2,"Las láminas de doble curvatura con curvaturas de diferente signo se denominan:",
["Sinclásticas","Anticlásticas","Desarrollables","Plegadas"],1,
"Mismo signo: sinclásticas, como la cúpula esférica. Diferente signo: anticlásticas, como la silla de montar.","Apuntes T2.1, diap. 8");
L("T2","Clasificación",2,"Un arco es, según la clasificación geométrica de los apuntes, un elemento:",
["Bidimensional sin curvatura","Monodimensional de simple curvatura","Bidimensional de doble curvatura","Monodimensional sin curvatura"],1,
"Las láminas de simple curvatura incluyen los arcos (monodimensionales) y las bóvedas (bidimensionales).","Apuntes T2.1, diap. 8");
L("T2","Clasificación",2,"Según la dirección de transmisión de la carga, un arco funicular es un elemento de transferencia:",
["Bidireccional con curvatura","Unidireccional de directriz no recta","Unidireccional de directriz recta","Bidireccional sin curvatura"],1,
"Unidireccional de directriz no recta: arco y arco funicular. De directriz recta: cable, barra y viga.","Apuntes T2.1, diap. 9");
L("T2","Clasificación",2,"¿Cuál de los siguientes elementos transfiere la carga de forma bidireccional y sin curvatura?",
["Cúpula","Entramado (emparrillado)","Arco","Cable"],1,
"Bidireccional sin curvatura: entramados, lajas, placas o losas y estructuras espaciales. Bidireccional con curvatura: láminas, bóvedas, cúpulas y paraboloides.","Apuntes T2.1, diap. 9");
L("T2","Cables",1,"La principal ventaja de los cables es:",
["Su rigidez frente a cargas móviles","El uso completo de la sección, con eficiencia y economía","Que resisten compresiones","Que no necesitan anclajes"],1,
"Ventaja: uso completo de la sección. Inconveniente: se adaptan a las cargas cambiantes y eso los hace inestables.","Apuntes T2.1, diap. 10");
L("T2","Cables",2,"En un puente colgante, las armaduras que cuelgan del cable deben, además de sostener la calzada:",
["Aumentar el peso propio","Conferir rigidez a los cables frente a cargas cambiantes o móviles","Trabajar a compresión","Sustituir a las torres"],1,
"Como el cable es inestable frente a cargas cambiantes, el tablero y sus armaduras deben rigidizarlo.","Apuntes T2.1, diap. 10");
L("T2","Cables",2,"La flecha óptima (mínimo volumen de cable) para un cable con una única carga vertical y una distancia horizontal D es:",
["D/3","D/2","D/4","D"],1,
"Con una carga vertical la flecha óptima es D/2; en la parábola y la catenaria es D/3 o aproximadamente D/3.","Apuntes T2.1, diap. 11");
L("T2","Cables",2,"Si un cable soporta muchas cargas iguales separadas horizontalmente la misma distancia, su curva funicular es:",
["Una catenaria","Una parábola","Una circunferencia","Una elipse"],1,
"Cargas iguales con la misma separación horizontal dan una parábola. Cargas iguales distribuidas a lo largo del cable dan una catenaria.","Apuntes T2.1, diap. 12");
L("T2","Cables",2,"Un cable que soporta únicamente su propio peso adopta la forma de:",
["Parábola","Catenaria","Polígono funicular de un solo vértice","Recta"],1,
"El peso propio es una carga uniforme a lo largo del cable, que da una catenaria. Con la flecha óptima es muy parecida a la parábola.","Apuntes T2.1, diap. 12");
L("T2","Cables",1,"La configuración de equilibrio de un cable con varias cargas verticales, con lados rectos entre cargas, se llama:",
["Catenaria","Polígono funicular","Isostática","Línea de articulación"],1,
"Es el polígono funicular, «la forma natural de soportar cargas por tracción».","Apuntes T2.1, diap. 11");
L("T2","Compresión y pandeo",2,"La carga de pandeo de una barra comprimida depende de:",
["Solo del material","Del material, la longitud, la sección transversal y las restricciones de los extremos","Solo de la longitud","De la carga aplicada"],1,
"Es la enumeración literal de los apuntes.","Apuntes T2.1, diap. 13");
L("T2","Arcos",2,"El arco funicular se obtiene:",
["Invirtiendo la curva que toma un cable bajo las mismas cargas","Uniendo dos voladizos","Con una sección en I","Sumando acción de viga y de cable"],0,
"Al invertir el polígono o la curva del cable se obtiene una forma que, con esas cargas, solo trabaja a compresión.","Apuntes T2.1, diap. 14");
L("T2","Arcos",3,"Para que un arco de fábrica trabaje solo a compresión basta, según la idea de los apuntes, con que:",
["El arco sea parabólico exacto","El antifunicular de las cargas esté contenido en el espesor del arco","El arco sea de acero","La flecha sea D/2"],1,
"Los apuntes muestran el «antifunicular contenido en el espesor»: no hace falta que el eje coincida exactamente con el antifunicular. Es la idea del análisis de Poleni de la cúpula vaticana.","Apuntes T2.1, diap. 14-15");
L("T2","Vigas",1,"El mecanismo resistente de una viga (acción de viga) implica:",
["Solo tracción","Combinación de flexión y cortante","Solo torsión","Solo compresión"],1,
"Acción de viga: flexión más cortante. Con los extremos inmovilizados longitudinalmente se suma la acción de cable.","Apuntes T2.1, diap. 18");
L("T2","Vigas",2,"En un perfil I sometido a flexión simple:",
["Las alas resisten fundamentalmente el cortante y el alma la flexión","Las alas resisten fundamentalmente la flexión y el alma el cortante","Todo el material trabaja a la tensión máxima","El alma no trabaja"],1,
"Llevar el material a las alas aumenta la eficiencia a flexión; el alma resiste el cortante.","Apuntes T2.1, diap. 19");
L("T2","Vigas",2,"El pandeo lateral por flexión-torsión de un perfil I se produce porque:",
["El ala traccionada se curva en su plano vertical","El ala comprimida se curva en su plano horizontal y la sección gira","El alma se alarga","La viga está biempotrada"],1,
"El ala comprimida pandea en su plano horizontal (el alma le impide hacerlo en vertical) y la sección rota.","Apuntes T2.1, diap. 19");
L("T2","Vigas",3,"El pandeo local del alma de un perfil I puede deberse al cortante porque:",
["El cortante genera tracciones longitudinales","Las tensiones tangenciales equivalen a tracciones y compresiones a 45º, y estas compresiones pueden pandear el alma","El cortante es nulo en el alma","El alma solo resiste flexión"],1,
"Es la explicación de los apuntes: el estado de cortante equivale a tensiones principales a ±45º.","Apuntes T2.1, diap. 19");
L("T2","Vigas",2,"La sección rectangular es poco eficiente a flexión porque:",
["Pesa poco","La mayoría de las fibras no trabajan a la tensión máxima, solo las extremas","No resiste cortante","Tiene demasiada inercia"],1,
"Solo las fibras extremas alcanzan la tensión máxima; el perfil I mejora esto llevando material a los extremos.","Apuntes T2.1, diap. 19");
L("T2","Vigas",3,"Una viga biapoyada con ambos extremos inmovilizados longitudinalmente ha formado suficientes rótulas plásticas para convertirse en mecanismo. Según los apuntes:",
["Ya no puede soportar ninguna carga adicional","Puede seguir soportando carga por acción de cable","Pasa a trabajar por acción de placa","Se comporta como un arco"],1,
"Agotada la acción de viga, la viga con extremos inmovilizados puede seguir resistiendo por acción de cable, gracias a las tracciones de la fibra media.","Apuntes T2.1, diap. 21");
L("T2","Entramados",2,"Dos vigas perpendiculares biapoyadas, unidas no rígidamente en su cruce, reparten una carga en ese cruce:",
["A partes iguales siempre","Según su rigidez a flexión","Toda a la viga más larga","Según su peso"],1,
"Como sufren igual desplazamiento en la intersección, cada una toma carga en proporción a su rigidez (48EI/L³ para carga centrada).","Apuntes T2.1, diap. 22");
L("T2","Entramados",3,"En un emparrillado con dos vigas perpendiculares de distinta longitud, para conseguir un reparto similar de la carga en las dos direcciones:",
["La viga más corta debe tener mayor inercia","La viga más larga debe tener mayor inercia","Ambas deben tener la misma inercia","No influye la inercia"],1,
"La rigidez es 48EI/L³; al ser L mayor, hace falta más I para igualar rigideces.","Apuntes T2.1, diap. 22");
L("T2","Entramados",3,"Una viga A de luz L y otra B de luz 2L, biapoyadas, perpendiculares y con la misma EI, se cruzan en su punto medio, donde actúa una carga P (unión no rígida). ¿Qué fracción de P toma la viga A?",
["1/2","2/3","8/9","1/9"],2,
"Las rigideces son kA = 48EI/L³ y kB = 48EI/(8L³), así que kA = 8kB. La carga se reparte en proporción a la rigidez: A toma 8/9 de P.","Apuntes T2.1, diap. 22 (cálculo)");
L("T2","Entramados",2,"Con entramados de unión rígida se alcanzan económicamente relaciones canto/luz de:",
["1/10 a 1/24","1/30 a 1/40","1/5 a 1/8","1/100"],1,
"Entramados: 1/30 a 1/40. Sistemas convencionales unidireccionales: 1/10 a 1/24.","Apuntes T2.1, diap. 24");
L("T2","Entramados",2,"En un entramado con uniones rígidas entre vigas, la flexión de una viga genera en la perpendicular:",
["Tracción pura","Torsión, que aumenta la rigidez del conjunto","Compresión pura","Ningún efecto"],1,
"La unión rígida introduce torsión en la viga perpendicular. Esto aumenta la rigidez, reduce los desplazamientos y permite transmitir parte de la carga.","Apuntes T2.1, diap. 24");
L("T2","Losas",2,"En una placa cuadrada, la acción de torsión transfiere aproximadamente:",
["El 5 % de la carga","El 50 % de la carga","El 100 % de la carga","Nada"],1,
"Los apuntes indican que la torsión transfiere un % importante de la carga, el 50 % en placas cuadradas.","Apuntes T2.1, diap. 25");
L("T2","Losas",2,"Señalar las respuestas correctas (puede haber más de una). Las fuentes de reserva de resistencia de una losa son:",
["Redistribución de tensiones (líneas de articulación)","Acción de membrana","Acción de corte por alabeo de los apoyos","Pandeo lateral"],[0,1],
"Los apuntes indican dos fuentes separadas: redistribución de tensiones y acción de membrana.","Apuntes T2.1, diap. 26");
L("T2","Losas",3,"Sobre la acción de membrana en losas es FALSO que:",
["Aparece porque la deformada es una superficie no desarrollable","Solo se produce si los lados de la losa están impedidos de moverse","Es mucho mayor cuando los bordes están impedidos","Es el equivalente bidimensional de la acción de cable"],1,
"La acción de membrana se produce incluso con los lados libres, aunque es mucho mayor si están impedidos.","Apuntes T2.1, diap. 26");
L("T2","Losas",2,"En una losa cuadrada simplemente apoyada con carga uniforme, en las esquinas:",
["Los momentos son nulos","Se invierte la curvatura (inversión de momentos)","Se forma una rótula plástica inicial","No hay isostáticas"],1,
"Los apuntes señalan que en las esquinas se invierte la curvatura.","Apuntes T2.1, diap. 27");
L("T2","Losas",1,"El objetivo de las losas nervadas y de los forjados reticulares es:",
["Aumentar el peso","Disponer la mayor cantidad de material lejos del plano medio para aumentar la eficiencia","Eliminar la flexión","Trabajar solo a tracción"],1,
"Los nervios alejan el material del plano neutro, como el perfil I en las vigas.","Apuntes T2.1, diap. 28");
L("T2","Láminas plegadas",2,"La acción de placa plegada es una combinación de:",
["Acción de cable y acción de corte","Viga transversal (franja apoyada en los pliegues) y viga longitudinal (pares de placas en ángulo)","Arco y tirante","Torsión y pandeo"],1,
"La franja transversal se apoya en los pliegues con reacciones R, que los pares de placas en ángulo llevan longitudinalmente a los apoyos extremos.","Apuntes T2.1, diap. 29-30");
L("T2","Membranas",2,"En una membrana, la acción de cable en la dirección principal de mayor relación flecha/luz:",
["Absorbe menos carga","Absorbe más carga que la de menor relación","No absorbe carga","Solo absorbe cortante"],1,
"La dirección con mayor curvatura (mayor r = flecha/luz) absorbe más carga.","Apuntes T2.1, diap. 33");
L("T2","Membranas",2,"En una membrana, la acción de corte se debe a:",
["La curvatura","El alabeo de su geometría","El peso propio","La torsión de los bordes"],1,
"La acción de cable se debe a la curvatura y la de corte al alabeo (diferencia de pendientes entre lados opuestos).","Apuntes T2.1, diap. 33");
L("T2","Membranas",3,"En una membrana cilíndrica apoyada en dos generatrices rectas y sometida a su propio peso:",
["Las generatrices absorben la mayor parte de la carga por acción cable","Toda la carga se absorbe por acción de cable según las líneas perpendiculares al eje","La acción de corte absorbe la mitad de la carga","Se comporta como una placa"],1,
"Las generatrices rectas no tienen curvatura ni alabeo, así que no absorben carga. Toda va por acción de cable en las directrices.","Apuntes T2.1, diap. 34");
L("T2","Láminas",2,"El paraboloide hiperbólico puede generarse como superficie:",
["Solo de revolución","De traslación y también reglada","Solo compleja","Desarrollable"],1,
"Los apuntes lo incluyen entre las superficies de traslación (2) y entre las regladas (3).","Apuntes T2.1, diap. 35");
L("T2","Láminas",2,"En una superficie en forma de «silla de montar»:",
["Las dos direcciones trabajan a compresión","Una dirección trabaja como catenaria a tracción y la otra como arco a compresión","Las dos trabajan a tracción","No hay esfuerzos de membrana"],1,
"Es la ilustración de los apuntes para la superficie anticlástica.","Apuntes T2.1, diap. 36");
L("T2","Láminas",2,"El toro es una superficie de revolución que se obtiene al girar una curva plana alrededor de un eje vertical:",
["Que la corta","Que no la corta","Contenido en la curva","Horizontal"],1,
"Las superficies de revolución se obtienen girando una curva alrededor de un eje que la corta (cono, esfera…) o que no la corta (toro).","Apuntes T2.1, diap. 35");
L("T2","Edificación",1,"La acción diafragma de los forjados consiste en:",
["Resistir el punzonamiento","Repartir las acciones horizontales entre los pórticos o pantallas actuando como grandes vigas horizontales","Transmitir la carga vertical a los pilares","Aislar acústicamente"],1,
"Los forjados trabajan como grandes vigas horizontales que reparten las cargas horizontales.","Apuntes T2.1, diap. 47");
L("T2","Edificación",2,"En un pórtico sometido a cargas horizontales, la deformación por flexión global (alargamiento y acortamiento de pilares) es:",
["Siempre la dominante","Irrelevante salvo en edificios altos y esbeltos","Nula","Igual a la de cortante"],1,
"Los apuntes señalan que es irrelevante salvo en edificios altos y esbeltos; en los pórticos domina la deformación por cortante.","Apuntes T2.1, diap. 47");
L("T2","Edificación",2,"En un sistema de pantallas con forjados, los desplazamientos horizontales se deben fundamentalmente a:",
["Deformación por cortante de las barras","Deformación por flexión de la pantalla","Alargamiento de las vigas","Torsión de los forjados"],1,
"La pantalla trabaja como gran viga vertical en voladizo y se deforma sobre todo por flexión, salvo pantallas muy poco esbeltas.","Apuntes T2.1, diap. 48");
L("T2","Edificación",3,"En un pórtico con triangulaciones, la estructura será más dúctil cuando las fuerzas horizontales se conducen predominantemente:",
["Por axiles en las diagonales","Por flexión en las barras del pórtico","Por la cimentación","Por el diafragma"],1,
"Según los apuntes, según predomine el camino de flexión o el de axiles la estructura será más o menos dúctil, respectivamente.","Apuntes T2.1, diap. 50");
L("T2","Edificación",3,"Disponer los arriostramientos en el mismo vano en todas las plantas de un edificio muy alto puede:",
["Reducir las reacciones en cimentación","Generar reacciones excesivas en la cimentación","Eliminar el efecto P-Δ","Anular la acción diafragma"],1,
"Los apuntes lo advierten. Repartir las triangulaciones en distintos vanos reduce esas reacciones.","Apuntes T2.1, diap. 50-51");
L("T2","Edificación",3,"Señalar las respuestas correctas (puede haber más de una). Con los pórticos excéntricos (shear links) se busca:",
["Plastificar zonas muy concretas de las vigas y concentrar en ellas el daño","Reducir la rigidez lateral","Que las diagonales concurran al centro del nudo","Evitar toda plastificación"],[0,1],
"Los apuntes indican ambos objetivos. Por definición la diagonal no concurre al nudo sino a un punto intermedio de la viga.","Apuntes T2.1, diap. 52");
L("T2","Edificación",2,"Las vigas de acoplamiento en un sistema de pantallas acopladas se proyectan para:",
["Ser muy rígidas y frágiles","Tener elevada capacidad de deformación en régimen plástico","No trabajar ante sismo","Transmitir solo axiles"],1,
"Son soluciones antisísmicas que concentran la disipación de energía en las vigas de acoplamiento y en el arranque de los muros.","Apuntes T2.1, diap. 53");
L("T2","Edificación",2,"El efecto «shear lag» en estructuras tubo consiste en:",
["Una distribución uniforme de tensiones en las caras","Una fuerte concentración de esfuerzos en las esquinas del tubo por las deformaciones a cortante","El pandeo del núcleo","La pérdida de la acción diafragma"],1,
"El tubo se comporta como un perfil tubular de pared delgada y las deformaciones por cortante concentran los esfuerzos en las esquinas.","Apuntes T2.1, diap. 55");
L("T2","Edificación",2,"Según la EHE-08 citada en los apuntes, para considerar un forjado como diafragma rígido se requiere, entre otros:",
["Espesor ≥ 50 mm, mallazo y L/h ≤ 4","Espesor ≥ 300 mm","Sin armadura","L/h ≥ 10"],0,
"Los apuntes citan: espesor ≥ 50 mm, mallazo y (L/h) ≤ 4.","Apuntes T2.1, diap. 56");
L("T2","Edificación",3,"El efecto P-Δ requiere una «reserva» de rigidez lateral k′ igual a:",
["Ptot·h","Ptot/h","Vtot/Δ","h/Ptot"],1,
"Ptot·Δ = Vi′·h, así que k′ = Vi′/Δ = Ptot/h.","Apuntes T2.1, diap. 57");
L("T2","Edificación",2,"Las placas sobre pilares aislados:",
["Requieren uniones articuladas","Son adecuadas para grandes luces y dan libertad para organizar los pilares en planta","Solo transmiten la carga en una dirección","No pueden ser aligeradas"],1,
"Combinan pilares y placas macizas o aligeradas con unión rígida y transmisión bidireccional.","Apuntes T2.1, diap. 46");
L("T2","Puentes",1,"En un puente, la superestructura está formada por:",
["Pilas y estribos","Tablero y sistema primario","Solo las cimentaciones","Tablero y estribos"],1,
"Tablero + sistema primario = superestructura. Las pilas y estribos con sus cimentaciones son la subestructura.","Apuntes T2.1, diap. 59");
L("T2","Puentes",2,"En un puente arco, las cargas llegan a los apoyos:",
["Solo como carga vertical","Por compresión del arco, transformándose en una carga horizontal y una vertical","Por tracción del arco","Solo como momento"],1,
"El arco trabaja a compresión y en los apoyos genera componentes horizontal (empuje) y vertical.","Apuntes T2.1, diap. 61");
L("T2","Puentes",2,"En un puente atirantado, los tirantes:",
["No transmiten fuerzas al tablero","Introducen importantes fuerzas horizontales en el tablero que deben ser absorbidas por éste","Son siempre verticales","Cuelgan de un cable principal"],1,
"Es una característica clave del atirantado. Las péndolas verticales colgadas de un cable principal son propias del colgante.","Apuntes T2.1, diap. 66");
L("T2","Puentes",2,"Las disposiciones típicas de los tirantes en un puente atirantado son:",
["En arpa o en abanico","En arco o en ménsula","Solo verticales","En celosía Warren"],0,
"Los apuntes citan las variantes «en arpa» y «en abanico».","Apuntes T2.1, diap. 66");
L("T2","Puentes",2,"En un puente colgante, el tablero suele resolverse con una estructura de acero reticulada que tiene entre sus funciones:",
["Comprimir los cables","Estabilizar los cables","Sustituir las torres","Anclar los estribos"],1,
"Así se indica en los apuntes, coherente con la inestabilidad de los cables frente a cargas cambiantes.","Apuntes T2.1, diap. 65");
L("T2","Puentes",1,"El puente de Forth (Escocia) es un ejemplo de puente:",
["Colgante","Atirantado","En voladizo (ménsula)","Arco de tablero inferior"],2,
"Es el ejemplo de puente en voladizo de los apuntes.","Apuntes T2.1, diap. 67");
L("T2","Puentes",2,"En los puentes de tablero sobre pilas, el apoyo del sistema primario sobre las pilas se realiza normalmente mediante:",
["Empotramientos rígidos","Dispositivos que permiten el desplazamiento horizontal (elastómeros)","Soldadura","Pilotes inclinados"],1,
"Permiten resolver los problemas de dilataciones y sismo.","Apuntes T2.1, diap. 60");
L("T2","Térmica",2,"Un tablero isostático de 50 m con α = 10⁻⁵ ºC⁻¹ sufre un aumento de temperatura de 30 ºC. Su alargamiento libre es:",
["1,5 mm","15 mm","150 mm","0,15 mm"],1,
"ΔL = L·α·ΔT = 50·10⁻⁵·30 = 0,015 m = 15 mm.","Apuntes T2.1, diap. 68 (cálculo)");
L("T2","Térmica",2,"En una estructura isostática, un cambio uniforme de temperatura produce:",
["Tensiones pero no movimientos","Movimientos pero no tensiones","Ni movimientos ni tensiones","Tensiones y movimientos siempre"],1,
"Isostática: movimientos sin tensiones, absorbidos por juntas de dilatación. Hiperestática: puede haber tensiones y movimientos.","Apuntes T2.1, diap. 68");
L("T2","Térmica",3,"Si se impide totalmente el alargamiento de un tablero con α = 10⁻⁵ ºC⁻¹ y ΔT = 40 ºC, la deformación mecánica necesaria es:",
["+0,0004 (tracción)","−0,0004 (compresión)","−0,004","0"],1,
"ε = εT + εm = 0, así que εm = −α·ΔT = −0,0004, una deformación de compresión. Para comparar, el máximo del hormigón está en ≈ 0,002.","Apuntes T2.1, diap. 68");
L("T2","Túneles",1,"Las partes estructurales de un túnel son:",
["Bóveda, hastiales y contrabóveda o solera","Tablero, pilas y estribos","Zapata, fuste y punta","Cordón superior, inferior y diagonales"],0,
"Los hastiales son los muros laterales y la contrabóveda o solera es la parte inferior.","Apuntes T2.1, diap. 69");
L("T2","Túneles",2,"La subsidencia es:",
["La deformación en superficie producida por sobrecargas aplicadas en dicha superficie","La deformación en superficie originada por alteraciones del equilibrio interno del terreno, no por sobrecargas en superficie","La rotura de las dovelas","El hinchamiento de arcillas"],1,
"Es la definición de los apuntes. En túneles metropolitanos se han medido asientos de hasta 20 cm.","Apuntes T2.1, diap. 70");
L("T2","Túneles",2,"En el sostenimiento con dovelas prefabricadas, la dovela de clave o llave es:",
["La primera que se coloca","La que va en la solera","La última pieza en ser colocada","Una junta circunferencial"],2,
"La dovela de clave o llave es la última que se coloca y cierra el anillo.","Apuntes T2.1, diap. 72");
L("T2","Túneles",2,"Las juntas entre dovelas en un sostenimiento prefabricado:",
["Aumentan la rigidez del sistema","Reducen la rigidez (presión/deformación radial) del sistema","No influyen","Impiden la inyección de mortero"],1,
"Según los apuntes, las juntas reducen la rigidez del sostenimiento.","Apuntes T2.1, diap. 72");
L("T2","Túneles",2,"La gunita se aplica en varias capas de espesor máximo aproximado de 10 cm para:",
["Ahorrar cemento","Evitar problemas de adherencia","Aumentar la porosidad","Facilitar la excavación"],1,
"Las capas se limitan a unos 10 cm para evitar problemas de adherencia; la primera es de sellado.","Apuntes T2.1, diap. 73");
L("T2","Túneles",2,"Las cerchas metálicas de sostenimiento de túneles:",
["Se emplean en roca de excelente calidad sin otros elementos","Se suelen emplear en macizos de calidad media y deben arriostrarse con tresillones","No requieren acuñado","Sustituyen a las dovelas en tuneladoras"],1,
"Además, su rigidez depende mucho del material de acuñado (madera o acero).","Apuntes T2.1, diap. 75");
L("T2","Naves",2,"En una estructura metálica porticada de nudos rígidos, la transmisión de cargas hasta la cimentación moviliza fundamentalmente:",
["Esfuerzos axiles","Esfuerzos de flexión en las barras","Solo torsión","Solo cortante"],1,
"Pórticos de nudos rígidos: flexión. Estructuras trianguladas articuladas: axiles.","Apuntes T2.1, diap. 77 y 79");
L("T2","Naves",2,"La rigidez lateral perpendicular al plano de los pórticos de una nave se consigue:",
["Con el propio pórtico","Arriostrando uno o más vanos con barras diagonales o muros","Aumentando la sección de los dinteles","Con cartelas en los nudos"],1,
"En su plano, la rigidez la da el pórtico. Fuera de su plano hay que arriostrar.","Apuntes T2.1, diap. 77");
L("T2","Naves",2,"El principal inconveniente de las estructuras trianguladas de nudos articulados es:",
["El mal aprovechamiento de la sección","La inestabilidad (pandeo) de las barras comprimidas","La flexión de las barras","El peso excesivo"],1,
"Ventaja: buen aprovechamiento de la sección. Inconveniente: pandeo de las barras comprimidas.","Apuntes T2.1, diap. 79");
L("T2","Naves",1,"Las cartelas en los nudos de pórticos metálicos se disponen para:",
["Reducir el peso","Mejorar la rigidez y la capacidad resistente del nudo","Permitir el giro libre","Arriostrar la cubierta"],1,
"Aumentan la sección de los nudos para mejorar su rigidez y su capacidad resistente.","Apuntes T2.1, diap. 77");
L("T2","Torres eléctricas",2,"Según su función, las torres eléctricas «desequilibradas» son:",
["Alineación y ángulo","Amarre y fin de línea","Solo las de alineación","Las de hormigón"],1,
"Los apoyos de alineación y ángulo son equilibrados; los de amarre y fin de línea, desequilibrados. El amarre se relaciona con el efecto dominó.","Apuntes T2.1, diap. 86");
L("T2","Torres eléctricas",2,"El reglamento vigente sobre líneas eléctricas de alta tensión citado en los apuntes es:",
["Decreto 3151/1968","Real Decreto 223/2008","EHE-08","CTE DB-SE-AE"],1,
"El RD 223/2008, de 15 de febrero. El Decreto 3151/1968 es el reglamento antiguo de líneas aéreas.","Apuntes T2.1, diap. 84");
L("T2","Torres eléctricas",2,"Señalar las respuestas correctas (puede haber más de una). Acciones a considerar en torres eléctricas:",
["Sobrecargas debidas al hielo","Desequilibrios de tracciones","Efectos longitudinales por rotura de conductores","Empuje pasivo del terreno"],[0,1,2],
"Las tres primeras están en la lista de los apuntes, junto con las cargas permanentes, el viento, el hielo con viento y la resultante de ángulo.","Apuntes T2.1, diap. 87");
L("T2","Estructuras",1,"Según los apuntes, las presas son ejemplo de estructuras formadas por:",
["Elementos lineales","Elementos superficiales","Macizos de tres dimensiones comparables","Cables"],2,
"Los apuntes distinguen elementos lineales (pórticos), superficiales (estructuras abovedadas) y macizos 3D (presas).","Apuntes T2.1, diap. 42");
