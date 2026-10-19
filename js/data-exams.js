/* =====================================================================
   BANCO DE EXÁMENES REALES
   Fuente: Prueba adelantada PA1, 11 de noviembre de 2025 (versiones T1–T4)
   y hoja oficial de SOLUCIONES (Prueba anticipada PA1, 11/11/2025).
   Los enunciados y opciones se transcriben literalmente (incluidas erratas
   del original, p. ej. "repuesta", "defomación").
   Las cuatro versiones contienen las mismas 20 preguntas con distinto orden
   de preguntas y opciones. Cada pregunta canónica (C1..C20) se guarda con
   sus opciones en el orden de la versión T1; cada versión indica el orden.
   ===================================================================== */

const EXAM_CANON = {
  C1: { tema: "T1", apartado: "Acciones",
    q: "Señalar la repuesta correcta. Son acciones permanentes entre otras",
    o: { a: "el peso propio de los elementos estructurales de las plantas y las sobrecargas de uso",
         b: "las variaciones de temperatura",
         c: "el peso de la cubierta y la nieve",
         d: "los empujes del terreno sobre la estructura" },
    exp: "Los empujes del terreno actúan de forma continuada durante toda la vida de la estructura, por lo que se tratan como acción permanente. Las sobrecargas de uso, la temperatura y la nieve varían en el tiempo (acciones variables); por eso a y c, que mezclan una acción permanente con una variable, no son válidas. (El tema 1 de los apuntes distingue acciones permanentes, variables y accidentales; la asignación concreta de cada acción procede de la normativa, tema 4, del que no hay apuntes adjuntos.)" },

  C2: { tema: "T3", apartado: "Aceros: ductilidad",
    q: "Marcar la frase que sea verdadera",
    o: { a: "La ductilidad de un material suele ser importante para la comprobación de los Estados Límite de Servicio de una estructura.",
         b: "La ductilidad de un material suele ser importante para la comprobación de los Estados Límite Último de una estructura.",
         c: "La ductilidad de un material suele ser importante para la comprobación tanto de los Estados Límite de Servicio como de los Estados Limite Último de una estructura.",
         d: "Ninguna de las anteriores." },
    exp: "Según los apuntes (T3, diap. 12–14), el alargamiento en rotura está ligado a la redistribución de esfuerzos y la ductilidad permite grandes deformaciones antes de la fractura (reserva plástica, aviso antes del colapso, comportamiento sísmico). Todo esto se relaciona con la seguridad frente al colapso, es decir, con los ELU. En los ELS se controlan deformaciones y vibraciones en régimen de servicio, prácticamente elástico." },

  C3: { tema: "T1", apartado: "Coeficientes parciales de seguridad",
    q: "Señalar la respuesta correcta. Los coeficientes parciales de seguridad de las acciones…",
    o: { a: "no dependen del estado límite, del tipo de verificación y de si el efecto de la carga es favorable o desfavorable.",
         b: "son menores que 1 para las acciones variables desfavorables en las verificaciones correspondientes al estado límite último.",
         c: "son mayores que 1 para las verificaciones correspondientes al estado límite de servicio.",
         d: "Ninguna de las anteriores" },
    exp: "El coeficiente de mayoración γf depende del estado límite y de si la acción es favorable o desfavorable, así que a es falsa. En ELU, las acciones variables desfavorables se mayoran (γ > 1), así que b es falsa. En ELS los coeficientes valen habitualmente 1, así que c también es falsa. (Los valores concretos son normativos, tema 4; el concepto de γf aparece en T1, diap. 21.)" },

  C4: { tema: "T3", apartado: "Aceros y armaduras",
    q: "Marcar la frase que sea verdadera",
    o: { a: "En un diagrama de tensión ingenieril defomación de un acero la tensión de rotura coincide con la tensión máxima.",
         b: "Para armaduras activas sólo pueden emplearse aceros con límites elásticos inferiores a 500 MPa.",
         c: "Las barras de armadura pueden soportar deformaciones de más del 40% sin perder capacidad resistente. Esta característica es importante para el doblado.",
         d: "Ninguna de las anteriores." },
    exp: "a) En el diagrama ingenieril, tras la resistencia máxima σmax hay una rama de estricción (GH) y la rotura se produce a una tensión σr menor (T3, diap. 11). b) Las armaduras activas usan aceros de alta resistencia, por encima de 1000 MPa (T3, diap. 34). c) En el doblado se alcanzan deformaciones del orden del 20 % (ejemplo de T3, diap. 15), no «más del 40 % sin perder capacidad». Por tanto, ninguna es verdadera." },

  C5: { tema: "T2", apartado: "Túneles: sostenimiento",
    q: "¿Cuál es la función de un bulón?",
    o: { a: "\"Coser\" el sostenimiento del túnel para que no se desplace excesivamente",
         b: "Poner en tensión el sostenimiento para evitar que entre en tracción",
         c: "Conectar zonas del sostenimiento formando arriostramientos cruzados",
         d: "Formar una bóveda natural en el terreno alrededor de una excavación" },
    exp: "Apuntes T2.1, diap. 74: «Los bulones son barras de acero (frecuentemente acero corrugado de 25 mm) que tienen la misión de unir los estratos alrededor de la sección excavada para formar una bóveda natural»." },

  C6: { tema: "T3", apartado: "Suelos: arcillas",
    q: "Indicar a qué suelo corresponde una estructura floculada",
    o: { a: "arcillas con elevado índice de huecos",
         b: "arenas densas",
         c: "arcillas preconsolidadas",
         d: "arenas sueltas" },
    exp: "Apuntes T3, diap. 41: en las arcillas, las estructuras floculadas tienen mayor índice de huecos. Las estructuras dispersas (láminas ordenadas) se producen por precompresión o preconsolidación. Las arenas se describen por granulometría y compacidad, no como floculadas o dispersas." },

  C7: { tema: "T1", apartado: "Métodos probabilistas / fiabilidad",
    q: "¿Cuál de las siguientes afirmaciones es incorrecta?",
    o: { a: "Como resultado de la aplicación de un método de nivel 1 se obtiene un valor numérico para la fiabilidad.",
         b: "En el cálculo estructural se considera 10-12 como probabilidad de fallo muy baja.",
         c: "Existen métodos de nivel I, II y III para los cálculos de fiabilidad.",
         d: "La fiabilidad R de un sistema se define como sigue: R=1-Pf, donde Pf es la probabilidad de fallo." },
    exp: "Los métodos de nivel 1 (T1, diap. 18) sustituyen las distribuciones por valores característicos ponderados con coeficientes parciales de seguridad, calibrados para una fiabilidad dada. Comprueban que Rd ≥ Sd, pero no dan un valor numérico de la fiabilidad. La fiabilidad se define como 1 − pf (diap. 17)." },

  C8: { tema: "T2", apartado: "Acciones térmicas / arriostramiento",
    q: "Cuál de los pórticos tendría más esfuerzos debido a un incremento de temperatura idéntico en todos los elementos, si se tienen las mismas secciones y materiales.",
    fig: "img/pa1-2025-porticos.png",
    figAlt: "Tres pórticos de 6 vanos: Estructura 1 con un vano arriostrado (cruz de San Andrés) en el tercer vano; Estructura 2 con vanos arriostrados en ambos extremos; Estructura 3 sin arriostramientos.",
    o: { a: "2", b: "1", c: "3", d: "Todos igual ya que tienen las mismas cargas térmicas" },
    exp: "Un incremento de temperatura solo genera esfuerzos si la dilatación está coaccionada (T2.1, diap. 68: en estructuras hiperestáticas los cambios de temperatura pueden generar tensiones). En la estructura 2 los dos arriostramientos de los extremos impiden que dilate libremente la longitud entre ellos, que es prácticamente todo el pórtico. En la 1 el único arriostramiento permite dilatar a ambos lados, y en la 3 no hay coacción horizontal rígida." },

  C9: { tema: "T1", apartado: "Acciones",
    q: "Indicar cuál de las siguientes acciones se considera acción ambiental.",
    o: { a: "Fuego", b: "Viento", c: "Empuje del terreno", d: "Sismo" },
    exp: "El viento es una acción variable de origen climático o ambiental. El fuego y el sismo corresponden a situaciones accidentales o sísmicas (T1, diap. 22), y el empuje del terreno es una acción permanente." },

  C10: { tema: "T2", apartado: "Naves industriales: pórticos",
    q: "Señalar la sentencia correcta. Los pórticos de una nave industrial con pendiente a un agua están formados por pórticos monolíticos empotrados en cimientos. Los pilares bajo la acción del viento transversal…",
    o: { a: "trabajan a flexión como vigas empotradas en cimiento y apoyadas en el dintel",
         b: "trabajan a flexión como vigas biempotradas en cimiento y en el dintel con posibilidad de movimiento lateral",
         c: "trabajan a flexión como voladizos o ménsulas empotradas en el cimiento",
         d: "trabajan a flexión como vigas biempotradas en cimiento y en el dintel sin posibilidad de movimiento lateral" },
    exp: "En un pórtico monolítico los nudos pilar–dintel son rígidos (T2.1, diap. 77) y la base está empotrada, así que el pilar se comporta como biempotrado. Bajo viento transversal el pórtico es traslacional, porque la rigidez lateral en su plano la da el propio pórtico: el pilar puede desplazarse lateralmente. Sería una ménsula si la unión con el dintel fuera articulada, y no tendría movimiento lateral si hubiera arriostramiento en ese plano." },

  C11: { tema: "T3", apartado: "Suelos: tensiones efectivas",
    q: "En un semiespacio de terreno homogéneo el nivel freático se encuentra a una profundidad H (se consideran pesos específicos aparente γ y saturado γsat, por encima y debajo del nivel freático, respectivamente). Indicar cómo es la variación con la profundidad del incremento de las tensiones efectivas verticales, considerando puntos por encima y debajo de la profundidad H, cuando por efecto estacional sube el nivel freático hasta la superficie del suelo.",
    o: { a: "Entre 0 y H: constante\nDebajo de H: lineal",
         b: "Entre 0 y H: lineal\nDebajo de H: constante",
         c: "Entre 0 y H: constante\nDebajo de H: constante",
         d: "Entre 0 y H: lineal\nDebajo de H: lineal" },
    official: "<b>Resolución oficial (hoja de soluciones 2025):</b><br>Caso inicial: para 0 ≤ z ≤ H, $\\sigma=\\gamma z;\\ u=0;\\ \\sigma'=\\gamma z$. Para z ≥ H, $\\sigma=\\gamma H+\\gamma_{sat}(z-H);\\ u=\\gamma_w(z-H);\\ \\sigma'=\\gamma H+\\gamma'(z-H)$.<br>Caso final (nivel freático en superficie), en cualquier punto: $\\sigma=\\gamma_{sat} z;\\ u=\\gamma_w z;\\ \\sigma'=\\gamma' z$.<br>Variación: para 0 ≤ z ≤ H, $\\Delta\\sigma'=\\gamma' z-\\gamma z=(\\gamma'-\\gamma)z$ → lineal. Para z ≥ H, $\\Delta\\sigma'=\\gamma' z-[\\gamma H+\\gamma'(z-H)]=(\\gamma'-\\gamma)H$ → constante.",
    exp: "Se aplica el principio de Terzaghi, $\\sigma'=\\sigma-u$ (T3, diap. 46–48). La variación es lineal hasta H y constante por debajo." },

  C12: { tema: "T1", apartado: "Fiabilidad: caso fundamental",
    q: "En el caso fundamental de fiabilidad la probabilidad de fallo siempre disminuye",
    o: { a: "si el valor medio de la variable de carga aumenta y los otros parámetros de las distribuciones de las variables de carga y resistencia no cambian.",
         b: "si la desviación típica de la variable de carga aumenta y los otros parámetros de las distribuciones de las variables de carga y resistencia no cambian.",
         c: "si la desviación típica y el valor medio de la variable de resistencia aumentan y los parámetros de la distribución de la variable de carga no cambian.",
         d: "si el valor medio de la variable de resistencia es mayor que el valor medio de la variable de carga y la desviación típica de la variable de resistencia disminuye y los otros parámetros de las distribuciones de las variables de carga y resistencia no cambian." },
    exp: "En el caso fundamental, el margen M = R − S tiene índice de fiabilidad $\\beta=\\mu_M/\\sigma_M=(\\mu_R-\\mu_S)/\\sqrt{\\sigma_R^2+\\sigma_S^2}$, y pf disminuye al aumentar β. Si μR > μS (μM > 0) y σR disminuye, σM baja y β sube, así que pf baja siempre. Con a o b β disminuye. Con c el resultado depende de cuánto crezca cada parámetro, así que no es «siempre». (El desarrollo de β es conocimiento general coherente con T1, diap. 16–17.)" },

  C13: { tema: "T3", apartado: "Hormigón: fluencia",
    q: "Señalar la respuesta correcta. La fluencia del hormigón consiste en:",
    o: { a: "Un efecto que se incrementa si el hormigón está sometido a humedad relativa elevada en la fase de endurecimiento",
         b: "Un fenómeno independiente del tiempo.",
         c: "La deformación lenta y progresiva bajo carga constante.",
         d: "Una propiedad que no depende de las dimensiones de la pieza." },
    exp: "Apuntes T3, diap. 23: «Es la deformación que sufre el hormigón a lo largo del tiempo sin que se produzca un incremento en las cargas aplicadas». Depende de la humedad del ambiente (a mayor HR, menor fluencia; diap. 24), de las dimensiones de los elementos y del tiempo." },

  C14: { tema: "T23", apartado: "Estructuras de contención: pantallas",
    q: "Señalar la respuesta incorrecta. La condición esencial de las pantallas que las diferencian de los muros es:",
    o: { a: "el empotramiento de la pantalla en el terreno por debajo del fondo de la excavación es, en general, indispensable para su estabilidad, constituyendo en ocasiones el único elemento que la proporciona y siendo el peso propio de la pantalla un factor de influencia muy escasa o nula;",
         b: "son estructuras flexibles y resisten los empujes del suelo deformándose.",
         c: "se ejecutan después de la excavación",
         d: "en general alcanzan una profundidad bajo el fondo de excavación que no es pequeña en relación con la altura libre de la pantalla" },
    exp: "Las pantallas se emplean para hacer excavaciones verticales en terrenos que no serían estables sin sujeción (T2.3, diap. 27), por lo que se ejecutan antes de excavar. El muro, en cambio, se construye y se rellena su trasdós. Las demás afirmaciones describen correctamente su carácter flexible y su empotramiento." },

  C15: { tema: "T1", apartado: "Requisitos de las estructuras", multi: true,
    q: "Señalar las respuestas correctas (puede haber más de una). La normativa establece que una estructura debe garantizar:",
    o: { a: "La posibilidad de deformarse libremente sin límites.",
         b: "La resistencia mecánica frente a las acciones previstas en las situaciones persistentes únicamente",
         c: "La durabilidad para alcanzar la vida útil nominal manteniendo todos los requisitos",
         d: "La estabilidad durante su ejecución y vida útil." },
    exp: "Apuntes T1, diap. 5: resistencia y estabilidad en las fases de ejecución, uso y desmontaje; aptitud al servicio, con deformaciones admisibles (descarta a); robustez y durabilidad para alcanzar la vida útil nominal. La resistencia no se exige «únicamente» en situaciones persistentes (descarta b)." },

  C16: { tema: "T3", apartado: "Hormigón: propiedades",
    q: "Señalar la respuesta correcta. Las propiedades mecánicas de hormigón…",
    o: { a: "dependen de las condiciones de puesta en obra y curado",
         b: "no dependen de la granulometría de los áridos",
         c: "no dependen de la relación agua/cemento",
         d: "Ninguna de las anteriores" },
    exp: "Según los apuntes (T3, diap. 18–26), las propiedades del hormigón dependen de la dosificación (áridos, granulometría, agua), de la homogeneidad conseguida en amasado, transporte y colocación, y del curado (retracción). La relación agua/cemento es determinante para la resistencia (conocimiento general)." },

  C17: { tema: "T23", apartado: "Cimentaciones superficiales",
    q: "Señalar la respuesta incorrecta",
    o: { a: "Las zapatas se emplean cuando el terreno resistente se encuentra a escasa profundidad y es fácilmente accesible",
         b: "Para evitar desplazamientos laterales (p. ej. zonas sísmicas), las zapatas aisladas se pueden unir entre sí mediante vigas de atado o riostras",
         c: "Las zapatas aisladas se utilizan en situaciones con presiones medias-altas que provocan grandes asientos",
         d: "Alguna de las anteriores es correcta" },
    exp: "Las zapatas aisladas son adecuadas cuando el terreno tiene buena capacidad portante y los asientos son moderados. Con presiones altas o grandes asientos se recurre a cimentaciones más extensas (emparrillados, losas) o profundas (conocimiento general coherente con T2.3, diap. 2–5)." },

  C18: { tema: "T2", apartado: "Estructuras trianguladas",
    q: "Señalar la respuesta correcta. Las diagonales de las siguientes vigas trianguladas…",
    fig: "img/pa1-2025-cerchas.png",
    figAlt: "Tres vigas trianguladas biapoyadas con carga P en el centro. A: diagonales que suben hacia el centro. B: diagonales que bajan hacia el centro. C: celosía tipo Warren con diagonales alternas.",
    o: { a: "están trabajando en tracción en la figura B.",
         b: "están trabajando en tracción en la figura A.",
         c: "están trabajando a tracción en la figura C.",
         d: "Ninguna de las anteriores" },
    exp: "En una viga biapoyada con carga centrada el cortante de cada mitad lo resisten las diagonales. Cuando una diagonal baja desde el cordón superior en el lado del apoyo hacia el centro (figura B, tipo Pratt), trabaja a tracción. En la figura A (tipo Howe) las diagonales trabajan a compresión, y en la C (Warren) se alternan tracción y compresión. (Razonamiento de estática general, coherente con T2.1, diap. 79.)" },

  C19: { tema: "T2", apartado: "Puentes", multi: true,
    q: "Señalar las respuestas incorrectas (puede haber más de una).",
    o: { a: "Cuando la luz de un puente es muy grande la sobrecarga representa muy poco frente al peso propio por lo que se busca el peso mínimo.",
         b: "El puente colgante es que permite la máxima ligereza y con el que se salvan mayores luces.",
         c: "El puente atirantado es que permite la máxima ligereza y con el que se salvan mayores luces.",
         d: "Los puentes en arco que siguen el polígono funicular de sus cargas son los que permiten salvar mayores luces." },
    exp: "El puente colgante, cuyo sistema primario es un cable a tracción (T2.1, diap. 65), es el más ligero y el que salva mayores luces, así que b es correcta y c es incorrecta. Los arcos trabajan a compresión, con problemas de pandeo y peso propio, y no alcanzan las luces de los colgantes, así que d es incorrecta. La afirmación a es correcta porque en grandes luces domina el peso propio." },

  C20: { tema: "T3", apartado: "Hormigón: aditivos", multi: true,
    q: "Señalar las respuestas correctas (puede haber más de una). Los aditivos se emplean principalmente para:",
    o: { a: "Aumentar el contenido de agua para aumentar la trabajabilidad del hormigón",
         b: "Aumentar la resistencia característica del hormigón",
         c: "Controlar la velocidad de fraguado del hormigón.",
         d: "Mejorar el comportamiento del hormigón frente a las heladas" },
    exp: "Apuntes T3, diap. 19: los aditivos, en proporción no superior al 5 % del peso del cemento, modifican características del hormigón fresco o endurecido. Ejemplos típicos son los aceleradores y retardadores de fraguado y los aireantes frente a heladas (conocimiento general). Su objetivo no es aumentar el agua; los plastificantes, de hecho, permiten reducirla." }
};

/* Variante: en la versión T3, la pregunta 1 (equivalente a C4) tiene una opción c distinta. */
const EXAM_VARIANT_T3_C4c = "Los perfiles conformados en frío son los más utilizados habitualmente en construcción.";

/* Orden de cada versión: [pregunta canónica, orden de opciones (letras de T1) para a,b,c,d] */
const EXAM_ORDER = {
  T1: [["C1","abcd"],["C2","abcd"],["C3","abcd"],["C4","abcd"],["C5","abcd"],["C6","abcd"],["C7","abcd"],["C8","abcd"],["C9","abcd"],["C10","abcd"],
       ["C11","abcd"],["C12","abcd"],["C13","abcd"],["C14","abcd"],["C15","abcd"],["C16","abcd"],["C17","abcd"],["C18","abcd"],["C19","abcd"],["C20","abcd"]],
  T2: [["C9","cdab"],["C8","acbd"],["C11","abcd"],["C15","bcad"],["C1","bcda"],["C16","bcad"],["C20","abcd"],["C4","abcd"],["C6","bdca"],["C10","badc"],
       ["C14","dbca"],["C19","abdc"],["C13","dcab"],["C5","bacd"],["C2","bcad"],["C18","bacd"],["C17","acbd"],["C7","cbad"],["C3","acbd"],["C12","badc"]],
  T3: [["C4","abXd"],["C9","dbac"],["C7","abcd"],["C15","bdca"],["C10","cabd"],["C18","abcd"],["C14","cdab"],["C20","acdb"],["C17","bcad"],["C3","acbd"],
       ["C19","abdc"],["C13","dcab"],["C11","badc"],["C5","acbd"],["C16","bcad"],["C1","adbc"],["C2","acbd"],["C12","cabd"],["C8","abcd"],["C6","abdc"]],
  T4: [["C11","bdac"],["C20","cbda"],["C16","cabd"],["C2","abcd"],["C4","abcd"],["C15","badc"],["C14","abdc"],["C9","cabd"],["C8","abcd"],["C13","bcad"],
       ["C12","cdab"],["C3","bcad"],["C10","bdac"],["C17","cabd"],["C7","cdab"],["C18","bcad"],["C19","adbc"],["C1","dacb"],["C6","bdca"],["C5","cadb"]]
};

/* Hoja oficial de SOLUCIONES PA1 2025 (literal) */
const EXAM_KEYS_2025 = {
  T1: ["d","b","d","d","d","a","a","a","b","b","b","d","c","c","c,d","a","c","a","c,d","c,d"],
  T2: ["d","a","b","b,d","c","c","c,d","d","d","a","c","c,d","b","d","a","b","b","c","d","c"],
  T3: ["d","b","a","b,c","c","a","a","b,c","b","d","c,d","b","a","d","c","b","c","d","a","a"],
  T4: ["a","a,c","b","b","d","c,d","d","c","a","b","b","d","a","a","c","c","b,d","a","d","c"]
};

/* Hoja oficial de SOLUCIONES PA1 2024 (12/11/2024). No se dispone de los enunciados. */
const EXAM_KEYS_2024 = {
  T1: ["c","a","b","d","c","b","b (tri)","a y d (acción)","a, b y c (zap)","b","c","a","b","a y c (corte)","a y b (horm)","b","d","c y d (acero)","b (norma)","d"],
  T2: ["a","d","b (norma)","a y d (acero)","d","b y c (horm)","a","c (tri)","b","d","b","d","d","c","a","a, b y c (zap)","c y d (acción)","b y c (corte)","a","b"],
  T3: ["b","d (norma)","b y c (acción)","b","d","c y d (acero)","a","a","a","a, b y d (zap)","a","b","d","c","d","a y c (horm)","b","c","c y d (corte)","b (tri)"],
  T4: ["d","c","a y c (corte)","c","d","c","d","d","b, c y d (zap)","a (tri)","a (norma)","b","b","b","b y c (acción)","a","a y d (acero)","b","c","a y c (horm)"]
};

const EXAMS = [
  { id: "PA1-2025-T1", year: 2025, conv: "Prueba adelantada PA1 · 11/11/2025", version: "T1", time: 40 },
  { id: "PA1-2025-T2", year: 2025, conv: "Prueba adelantada PA1 · 11/11/2025", version: "T2", time: 40 },
  { id: "PA1-2025-T3", year: 2025, conv: "Prueba adelantada PA1 · 11/11/2025", version: "T3", time: 40 },
  { id: "PA1-2025-T4", year: 2025, conv: "Prueba adelantada PA1 · 11/11/2025", version: "T4", time: 40 }
];

