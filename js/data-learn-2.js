/* ============================ TEMA 2.3: CIMENTACIONES ============================ */
L("T23","Superficiales: tipologías",1,"Las cimentaciones superficiales:",
["Transmiten la carga por punta y fuste","Reparten las cargas de la estructura en un plano de apoyo horizontal","Solo se usan en roca","Siempre son flexibles"],1,
"Es la definición de los apuntes. La punta y el fuste son propios de los pilotes.","Apuntes T2.3, diap. 2");
L("T23","Superficiales: tipologías",1,"¿Cuál de las siguientes NO es una cimentación superficial según los apuntes?",
["Zapata combinada","Emparrillado","Losa","Pilote flotante"],3,
"Los pilotes son cimentaciones profundas. Las superficiales son la zapata aislada, combinada y corrida, el pozo, el emparrillado y la losa.","Apuntes T2.3, diap. 2 y 22");
L("T23","ELS: asientos",1,"La distorsión angular β se define como:",
["El descenso de cualquier punto de la cimentación","La diferencia de asiento entre dos puntos","El asiento diferencial entre dos puntos dividido por la distancia que los separa","El ángulo girado respecto a la vertical"],2,
"β = δs/L. El descenso de un punto es el asiento s, la diferencia es δs y el giro respecto a la vertical es la inclinación ω.","Apuntes T2.3, diap. 3");
L("T23","ELS: asientos",2,"Según el CTE (tabla 2.2), el valor límite de distorsión angular para estructuras reticuladas con tabiquería de separación es:",
["1/300","1/500","1/700","1/2000"],1,
"1/300 para isostáticas y muros de contención; 1/500 para reticuladas con tabiquería; 1/700 para paneles prefabricados; 1/1000 y 1/2000 para muros de carga sin armar.","Apuntes T2.3, diap. 4");
L("T23","ELS: asientos",2,"¿Qué tipo de estructura admite la mayor distorsión angular según la tabla del CTE recogida en los apuntes?",
["Estructuras de paneles prefabricados","Estructuras isostáticas y muros de contención","Muros de carga sin armar con flexión cóncava hacia abajo","Estructuras reticuladas con tabiquería"],1,
"El límite menos exigente es 1/300, para estructuras isostáticas y muros de contención, que toleran mejor los asientos diferenciales.","Apuntes T2.3, diap. 4");
L("T23","ELS: asientos",3,"Dos pilares separados 6 m tienen asientos de 25 mm y 13 mm. Si la estructura es reticulada con tabiquería (límite 1/500), ¿cumple?",
["Sí, β = 1/500 justo","No, β = 1/250","Sí, β = 1/1000","No se puede saber sin el asiento total"],0,
"δs = 25 − 13 = 12 mm; β = 12/6000 = 1/500, que es justo el límite (cumple estrictamente).","Apuntes T2.3, diap. 3-4 (cálculo)");
L("T23","ELS: asientos",2,"El bulbo de presiones de dos zapatas muy próximas:",
["Es menor que el de cada zapata aislada","Forma un bulbo conjunto mayor y más profundo","Desaparece","No influye en el cálculo de asientos"],1,
"Los apuntes advierten de la proximidad entre cimentaciones: los bulbos individuales se superponen en un bulbo conjunto más profundo, lo que aumenta los asientos.","Apuntes T2.3, diap. 5");
L("T23","ELU",1,"Señalar las respuestas correctas (puede haber más de una). Son estados límite últimos de las cimentaciones superficiales:",
["Hundimiento","Deslizamiento","Vuelco","Asiento diferencial"],[0,1,2],
"ELU: hundimiento, deslizamiento, vuelco, estabilidad global y capacidad estructural del cimiento. El asiento es un ELS.","Apuntes T2.3, diap. 6");
L("T23","ELU: hundimiento",2,"En el modelo de Coulomb, la resistencia al corte del terreno es:",
["τ = c·σ·tg φ","τ = c + σ·tg φ","τ = σ/c","τ = c − σ·tg φ"],1,
"c es la cohesión y φ el ángulo de rozamiento interno.","Apuntes T2.3, diap. 8");
L("T23","ELU: hundimiento",2,"Un círculo de Mohr que corta a la curva de resistencia intrínseca representa un estado:",
["Seguro","Límite","Imposible","Elástico"],2,
"A, por debajo de la curva: seguro. B, tangente: límite. C, que la corta: imposible.","Apuntes T2.3, diap. 8");
L("T23","ELU: hundimiento",2,"En la fórmula de hundimiento del CTE, los factores Nc, Nq y Nγ:",
["Dependen de la forma de la zapata","Son adimensionales y dependen exclusivamente del ángulo de rozamiento interno","Dependen de la profundidad","Corrigen la proximidad a un talud"],1,
"Nc, Nq y Nγ son factores de capacidad de carga que solo dependen de φ. La forma, la profundidad, la inclinación y el talud se corrigen con s, d, i y t.","Apuntes T2.3, diap. 10");
L("T23","ELU: hundimiento",3,"En la fórmula de hundimiento del CTE, los coeficientes t (tc, tq, tγ) tienen en cuenta:",
["La forma en planta","La inclinación de la resultante","La proximidad del cimiento a un talud","La profundidad"],2,
"s: forma; i: inclinación de la carga; d: profundidad; t: proximidad a un talud.","Apuntes T2.3, diap. 10");
L("T23","ELU: hundimiento",2,"La carga V para la que se alcanza el hundimiento de un cimiento depende de:",
["Solo de la cohesión","La resistencia al corte del terreno, dimensiones y forma, profundidad, peso específico del terreno y condiciones del agua","Solo del material de la zapata","Solo del ancho"],1,
"Es la lista de los apuntes.","Apuntes T2.3, diap. 7");
L("T23","Rígidas y flexibles",1,"Una zapata se considera rígida cuando su vuelo máximo Vmáx y su canto h cumplen:",
["Vmáx > 2h","Vmáx ≤ 2h","Vmáx ≤ h/2","Vmáx = 4h"],1,
"Rígida: Vmáx ≤ 2h. Flexible: Vmáx > 2h.","Apuntes T2.3, diap. 11");
L("T23","Rígidas y flexibles",2,"La distribución de presiones bajo una zapata flexible se estudia habitualmente con:",
["El núcleo central","El coeficiente de balasto k (rigidez por unidad de superficie)","El método de las bielas","El cono de Abrams"],1,
"En las flexibles se usa el coeficiente de balasto. En las rígidas se supone un reparto lineal (núcleo central) y se arman por el método de las bielas.","Apuntes T2.3, diap. 18");
L("T23","Rígidas y flexibles",2,"El método de las bielas se aplica para:",
["Calcular asientos","Determinar el armado de zapatas rígidas","Estimar el empuje activo","Calcular pilotes flotantes"],1,
"Los apuntes lo presentan dentro de la capacidad estructural del cimiento: permite determinar el armado de las zapatas rígidas.","Apuntes T2.3, diap. 21");
L("T23","Excentricidad",2,"En una zapata rígida de ancho L, la carga está dentro del núcleo central (toda la base comprimida) cuando la excentricidad e cumple:",
["e ≤ L/3","e ≤ L/6","e ≤ L/2","e ≤ L/4"],1,
"Dentro del núcleo central (e ≤ L/6), σ = (N/L)(1 ± 6e/L) ≥ 0 en toda la base.","Apuntes T2.3, diap. 12-14");
L("T23","Excentricidad",3,"Una zapata corrida de 1,2 m de ancho soporta N = 24 t/m con e = 0,1 m. Las tensiones extremas en el terreno son:",
["σmáx = 3,0 y σmín = 1,0 t/m²","σmáx = 30 y σmín = 10 t/m²","σmáx = 20 y σmín = 20 t/m²","σmáx = 40 y σmín = 0 t/m²"],1,
"e = 0,1 ≤ L/6 = 0,2: dentro del núcleo. N/L = 20 t/m²; 6e/L = 0,5; σ = 20(1 ± 0,5) = 30 y 10 t/m².","Apuntes T2.3, diap. 14 (cálculo)");
L("T23","Excentricidad",3,"Si la carga cae fuera del núcleo central (e > L/6) en una zapata rígida, la tensión máxima vale:",
["N/L·(1 + 6e/L)","4N / [3(L − 2e)]","N/(L − 2e)","2N/L"],1,
"Con la base parcialmente despegada el reparto es triangular de longitud L0 = 3(L/2 − e), y σmáx = 2N/L0 = 4N/[3(L − 2e)].","Apuntes T2.3, diap. 15");
L("T23","Excentricidad",3,"En el ejemplo de los apuntes (zapata corrida bajo carga excéntrica), sin considerar el peso de la cimentación no había solución. Al tener en cuenta dicho peso se consigue cumplir porque:",
["El peso aumenta la excentricidad","El peso es una carga centradora que reduce la excentricidad equivalente","El peso reduce la tensión admisible","El peso cambia el ángulo de rozamiento"],1,
"El peso w actúa centrado: e* = p·e/(p + w) disminuye y la distribución se uniformiza. Con L ≈ 175 cm se obtiene σ ≈ 1,95 kg/cm² < 2.","Apuntes T2.3, diap. 16-17");
L("T23","Deslizamiento y vuelco",2,"El coeficiente de seguridad mínimo frente al deslizamiento y al vuelco indicado en los apuntes es:",
["1,0","1,2","1,5","3,0"],2,
"En ambos casos γt > 1,5.","Apuntes T2.3, diap. 19");
L("T23","Deslizamiento y vuelco",2,"En arenas, la fuerza de rozamiento resistente al deslizamiento de una zapata se toma como:",
["FR = (N + P)·tg(2φ/3)","FR = c·a·b/2","FR = N·c","FR = (N + P)·tg φ siempre"],0,
"Arenas: FR = (N + P)·tg(2/3·φ). Arcillas: FR = (c/2)·a·b.","Apuntes T2.3, diap. 19");
L("T23","Deslizamiento y vuelco",2,"En la comprobación de equilibrio de zapatas, el empuje pasivo del terreno:",
["Se considera siempre","En general no se considera, salvo que se garantice que el terreno que lo produce estará siempre presente","Se multiplica por 1,5","Sustituye al rozamiento"],1,
"Es la indicación literal de los apuntes.","Apuntes T2.3, diap. 19");
L("T23","Deslizamiento y vuelco",3,"Una zapata de ancho a = 2 m soporta N + P = 100 kN, un momento M = 20 kN·m y una fuerza horizontal V = 10 kN aplicada a h = 1 m de la base. Su coeficiente de seguridad al vuelco es:",
["1,5","2,0","3,33","5,0"],2,
"γ = (N + P)·(a/2)/(M + V·h) = 100·1/(20 + 10) = 3,33 > 1,5: cumple.","Apuntes T2.3, diap. 19 (cálculo)");
L("T23","Estabilidad global",1,"La estabilidad global de una cimentación se estudia mediante métodos de:",
["Elementos finitos exclusivamente","Equilibrio límite","Tensiones admisibles","Balasto"],1,
"Los apuntes indican el método de cálculo de equilibrio límite.","Apuntes T2.3, diap. 20");
L("T23","Profundas",1,"Un pilote que transmite la carga principalmente por punta a un estrato resistente se denomina:",
["Flotante","Columna","De fricción","Encepado"],1,
"Columna: trabaja por punta. Flotante: trabaja por fuste.","Apuntes T2.3, diap. 22");
L("T23","Profundas",2,"La carga de hundimiento de un pilote aislado es:",
["Rck = Rpk − Rfk","Rck = Rpk + Rfk","Rck = qp·pf","Rck = τf·Ap"],1,
"Es la suma de la resistencia por punta, Rpk = qp·Ap, y por fuste, Rfk = ∫τf·pf·dz.","Apuntes T2.3, diap. 25");
L("T23","Profundas",2,"En un grupo de pilotes con separación S = D, el coeficiente de eficiencia η vale:",
["1,0","0,7","0,5","1,3"],1,
"η = 0,7 si S = D y η = 1,0 si S ≥ 3D. En situaciones intermedias se interpola.","Apuntes T2.3, diap. 25");
L("T23","Profundas",3,"Un grupo de 4 pilotes con S = 2D y Rck = 500 kN cada uno tiene una carga de hundimiento aproximada de (interpolando η linealmente):",
["2000 kN","1700 kN","1400 kN","1000 kN"],1,
"Para S = 2D, η = 0,7 + (1,0 − 0,7)·(2 − 1)/(3 − 1) = 0,85. Rckg = 0,85·4·500 = 1700 kN.","Apuntes T2.3, diap. 25 (cálculo)");
L("T23","Profundas",2,"El rozamiento negativo en un pilote se produce cuando:",
["El pilote asienta más que el terreno","El asiento del terreno circundante es mayor que el del propio pilote","El nivel freático sube","El pilote está traccionado"],1,
"En ese caso el pilote soporta, además de la carga de la estructura, parte del peso del terreno.","Apuntes T2.3, diap. 26");
L("T23","Profundas",2,"Señalar las respuestas correctas (puede haber más de una). Son estados límite últimos de las cimentaciones profundas según los apuntes:",
["Hundimiento","Rotura por arrancamiento","Rotura horizontal del terreno","Distorsión angular"],[0,1,2],
"Además están la estabilidad global y la capacidad estructural del pilote. La distorsión angular es un parámetro de ELS.","Apuntes T2.3, diap. 24");
L("T23","Profundas",2,"Los estados límite de servicio de las cimentaciones profundas se asocian a:",
["Hundimiento y arrancamiento","Asientos y desplazamientos transversales","Rotura del pilote","Fatiga"],1,
"Las limitaciones a estos movimientos son las mismas que para cimentaciones superficiales.","Apuntes T2.3, diap. 23");
L("T23","Profundas",2,"Según los apuntes, la zona de influencia de la punta de un pilote se extiende aproximadamente:",
["3D por encima y 6D por debajo","6D por encima (zona pasiva) y 3D por debajo (zona activa)","1D en ambos sentidos","10D por debajo"],1,
"El esquema de equilibrio vertical muestra la zona pasiva ≈ 6D y la zona activa ≈ 3D.","Apuntes T2.3, diap. 25");
L("T23","Contención",1,"Las pantallas son elementos de contención que:",
["Se emplean para establecer una diferencia de niveles con relleno posterior","Se emplean para realizar excavaciones verticales donde el terreno o las construcciones próximas no serían estables sin sujeción","Son siempre de gravedad","Solo se hacen con fábrica de ladrillo"],1,
"Es la definición de los apuntes. Suelen asociarse a elementos flexibles: pantallas de hormigón, de pilotes o de tablestacas.","Apuntes T2.3, diap. 27");
L("T23","Contención",2,"Señalar las respuestas correctas (puede haber más de una). Tipos de pantallas mostrados en los apuntes:",
["Pantalla de hormigón","Pantalla de pilotes","Pantalla de tablestacas","Pantalla de bulones"],[0,1,2],
"Son los tres tipos de los apuntes. Los bulones son elementos de sostenimiento de túneles.","Apuntes T2.3, diap. 27");
L("T23","Contención",2,"El empuje activo se produce cuando el elemento de contención:",
["Es comprimido contra el terreno","Gira o se desplaza hacia el exterior hasta alcanzar el empuje mínimo","Permanece inmóvil","Se apoya en pilotes"],1,
"Activo: el elemento se aleja del terreno y el empuje es mínimo. Pasivo: el elemento es comprimido contra el terreno y el empuje es máximo. Reposo: estado tensional inicial.","Apuntes T2.3, diap. 30");
L("T23","Contención",2,"Ordenar los coeficientes de empuje de menor a mayor:",
["Kp < K0 < Ka","Ka < K0 < Kp","K0 < Ka < Kp","Ka < Kp < K0"],1,
"El activo es el mínimo, el reposo intermedio y el pasivo el máximo.","Apuntes T2.3, diap. 30");
L("T23","Contención",3,"Según el gráfico K-desplazamiento de los apuntes, para movilizar el empuje pasivo se necesita, comparado con el activo:",
["Un desplazamiento mucho menor","Un desplazamiento mucho mayor","El mismo desplazamiento","Ningún desplazamiento"],1,
"El estado activo se alcanza con desplazamientos relativos muy pequeños (≈ 10⁻³ H), mientras que el pasivo requiere desplazamientos del orden de 10⁻² H o más.","Apuntes T2.3, diap. 30-31");
L("T23","Contención",2,"Señalar las respuestas correctas (puede haber más de una). Son estados límite de servicio de las estructuras de contención:",
["Movimientos que afecten a estructuras o servicios próximos","Infiltración de agua no admisible (lavado de finos, sifonamiento)","Afección al nivel freático del entorno","Hundimiento del cimiento"],[0,1,2],
"El hundimiento es un ELU. Los otros tres figuran en los apuntes como ELS.","Apuntes T2.3, diap. 29");
L("T23","Contención",2,"La relación entre tensión horizontal y vertical en el terreno se expresa como:",
["σh = σv/K","σh = K·σv","σh = σv + K","σh = K/σv"],1,
"σh = K·σv, con K = Ka, K0 o Kp según el estado.","Apuntes T2.3, diap. 30");
L("T23","Contención",2,"Los muros son elementos de contención destinados a:",
["Realizar excavaciones sin sujeción","Establecer y mantener una diferencia de niveles con una pendiente superior a la que permitiría la resistencia del terreno","Transmitir cargas por punta","Impermeabilizar sótanos"],1,
"Es la definición literal de los apuntes.","Apuntes T2.3, diap. 28");
L("T23","Contención",3,"Una diferencia esencial entre pantallas y muros es que en las pantallas:",
["El peso propio es el factor principal de estabilidad","El empotramiento bajo el fondo de excavación es, en general, indispensable para su estabilidad","Se excava antes de construirlas","Son estructuras muy rígidas"],1,
"La pantalla es flexible, se construye antes de excavar y su estabilidad depende del empotramiento; el peso propio influye poco. (Ampliación de conocimiento general, coherente con la pregunta de examen PA1 2025.)","General · coherente con T2.3, diap. 27-28");
L("T23","Contención",1,"Señalar las respuestas correctas (puede haber más de una). Comprobaciones ELU de un muro de contención:",
["Hundimiento","Deslizamiento","Vuelco","Estabilidad global"],[0,1,2,3],
"Los cuatro forman parte de las comprobaciones, junto con la capacidad estructural del muro. Son análogas a las de las zapatas.","Apuntes T2.3, diap. 32");

/* ============================ TEMA 3: MATERIALES ============================ */
L("T3","Introducción",1,"Según los apuntes, ¿cuál de las siguientes es una propiedad NO mecánica?",
["Dureza","Resistencia a la fatiga","Densidad","Resistencia a la deformación"],2,
"La densidad es una propiedad física no mecánica (influye en la solicitación). Dureza, fatiga y resistencia a la deformación son mecánicas.","Apuntes T3, diap. 4 y 8");
L("T3","Introducción",2,"Las propiedades no mecánicas de un material:",
["Determinan la ley de comportamiento σ-ε","No influyen en la ley de comportamiento del material","Solo incluyen la estética","Son irrelevantes en el proyecto"],1,
"Los apuntes lo indican expresamente, aunque algunas, como las térmicas, influyen en la resistencia al fuego.","Apuntes T3, diap. 8");
L("T3","Introducción",2,"El módulo de elasticidad del acero recogido en los apuntes es aproximadamente:",
["70 GPa","207 GPa","30 GPa","2000 GPa"],1,
"Acero: E = 207 GPa y ν = 0,27. El aluminio tiene 69–75 GPa y el hormigón 14–40 GPa.","Apuntes T3, diap. 6");
L("T3","Introducción",2,"Según la tabla de los apuntes, el coeficiente de Poisson del hormigón está en torno a:",
["0,49","0,11–0,21","0,33","0,35"],1,
"Hormigón: ν = 0,11–0,21. La goma blanda tiene 0,49 y el aluminio 0,33.","Apuntes T3, diap. 6");
L("T3","Introducción",1,"La dureza de un material se refiere a:",
["Su resistencia al corte de la superficie, abrasión y desgaste","Su capacidad de deformarse sin romper","Su pérdida de resistencia con ciclos","Su densidad"],0,
"Es la definición de los apuntes. La capacidad de deformarse sin romper es la ductilidad y la pérdida con ciclos es la fatiga.","Apuntes T3, diap. 4");
L("T3","Aceros: tipos",1,"¿Cuál es el tipo de perfil de acero más empleado en construcción?",
["Conformado en frío","Laminado en caliente","Trefilado","Fundido"],1,
"Los apuntes: «Perfiles laminados en caliente: es el tipo más empleado en construcción» (IPN, IPE, HE…).","Apuntes T3, diap. 10");
L("T3","Aceros: tipos",2,"El acero trefilado se emplea principalmente en:",
["Perfiles IPE","Cables de puentes colgantes y atirantados y hormigón pretensado","Tornillos 4.6","Chapas gruesas"],1,
"El trefilado proporciona alta resistencia y se usa en cables y pretensado.","Apuntes T3, diap. 10");
L("T3","Aceros: tipos",2,"Un tornillo de calidad 10.9 tiene, según los apuntes, un límite elástico de:",
["240 MPa","900 MPa","1090 MPa","500 MPa"],1,
"Calidades de 4.6 (fy = 240 MPa) a 10.9 (fy = 900 MPa).","Apuntes T3, diap. 10");
L("T3","Aceros: diagrama",2,"En el diagrama ingenieril tensión-deformación de un acero de dureza natural, la tensión de rotura σr:",
["Coincide con σmax","Es menor que σmax por la estricción","Es mayor que σmax","Coincide con el límite elástico"],1,
"Tras σmax comienza la estricción (tramo GH) y la tensión ingenieril baja hasta la rotura.","Apuntes T3, diap. 11");
L("T3","Aceros: diagrama",2,"El límite elástico convencional σe se asocia a una deformación residual de:",
["0,2 ‰","2 ‰","2 %","20 %"],1,
"Los apuntes: «σe: límite elástico (def. residual 2 ‰)».","Apuntes T3, diap. 11");
L("T3","Aceros: diagrama",3,"En la rama de descarga y recarga O′F del diagrama del acero:",
["Se recupera toda la deformación","Queda una deformación plástica εp y se recupera la elástica εe","No hay deformación elástica","La pendiente es nula"],1,
"Al descargar desde la zona plástica se recupera εe y permanece εp.","Apuntes T3, diap. 11");
L("T3","Aceros: características",2,"La característica del acero en que se basan las comprobaciones de los estados límite últimos, según los apuntes, es:",
["El módulo de elasticidad","El límite elástico fy","La resiliencia","La estricción"],1,
"Los apuntes asocian fy a los ELU y el alargamiento en rotura εu a la redistribución de esfuerzos.","Apuntes T3, diap. 12");
L("T3","Aceros: características",2,"La resiliencia KV de un acero es:",
["La resistencia a la propagación de grietas bajo tensión cíclica","La energía absorbida en la rotura durante un ensayo de impacto (péndulo de Charpy)","El alargamiento en rotura","La reducción de sección en la estricción"],1,
"La resiliencia se mide con el péndulo de Charpy. La tenacidad cuantifica la resistencia a la propagación de grietas.","Apuntes T3, diap. 12");
L("T3","Aceros: ductilidad",1,"La ductilidad del acero se define como:",
["Su resistencia a la corrosión","La capacidad de alcanzar grandes deformaciones sin llegar a la fractura","Su aptitud para ser soldado","Su dureza superficial"],1,
"Cuanto mayor es el área de la zona plástica del diagrama, mayor es la ductilidad.","Apuntes T3, diap. 14");
L("T3","Aceros: ductilidad",2,"Señalar las respuestas correctas (puede haber más de una). Circunstancias que favorecen la rotura frágil del acero:",
["Mayores espesores","Disminución de la temperatura de servicio","Soldaduras con enfriamiento rápido y cruce de cordones","Uso de aceros de grado J2"],[0,1,2],
"Las tres primeras están en la lista de los apuntes, junto con la ejecución descuidada y las singularidades. El grado J2 implica especiales exigencias de resiliencia, es decir, mejor comportamiento frente a la rotura frágil.","Apuntes T3, diap. 14 y 16");
L("T3","Aceros: ductilidad",2,"La ductilidad del acero es muy importante en:",
["El cálculo de flechas","El proyecto sísmico de estructuras","El cálculo de peso propio","La designación del hormigón"],1,
"Los apuntes la destacan en el proyecto sísmico. Además, los aceros dúctiles tienen mejor comportamiento a fatiga.","Apuntes T3, diap. 14");
L("T3","Aceros: tecnológicas",2,"El desgarro laminar se produce en piezas soldadas sometidas a:",
["Compresión paralela a la superficie","Tracciones en dirección perpendicular a su superficie","Torsión","Cortante puro"],1,
"Se evita con aceros de resistencia mejorada en la dirección perpendicular y con detalles constructivos adecuados.","Apuntes T3, diap. 15");
L("T3","Aceros: tecnológicas",3,"Al doblar una barra de diámetro φ alrededor de un mandril, de modo que su eje pasa de un radio de 2,5φ a una fibra exterior de radio 3φ, la deformación de la fibra exterior es aproximadamente:",
["2 %","20 %","50 %","0,2 %"],1,
"ε = (3 − 2,5)/2,5 = 0,2, es decir, un 20 %. Es el ejemplo de los apuntes para ilustrar las deformaciones elevadas en el doblado.","Apuntes T3, diap. 15");
L("T3","Aceros: designación",1,"En la designación S 355 J2, el número 355 indica:",
["La resistencia a tracción en MPa","El valor mínimo garantizado del límite elástico en MPa","La temperatura del ensayo","El espesor máximo"],1,
"S indica acero (steel); el número es fy mínimo en MPa; J2 es el grado.","Apuntes T3, diap. 16");
L("T3","Aceros: designación",2,"El grado J0 de un acero estructural indica aplicación en construcción con:",
["Construcción ordinaria","Altas exigencias de soldabilidad","Especiales exigencias de resistencia, resiliencia y soldabilidad","Resistencia a la corrosión atmosférica"],1,
"JR: ordinaria. J0: altas exigencias de soldabilidad. J2: especiales exigencias de resistencia, resiliencia y soldabilidad.","Apuntes T3, diap. 16");
L("T3","Aceros: designación",2,"En los símbolos del grupo 2, la letra W indica:",
["Soldable","Resistente a la corrosión atmosférica","Perfil hueco","Baja temperatura"],1,
"W: resistente a la corrosión atmosférica. H: perfil hueco. L: baja temperatura. C: conformado especial en frío. N: normalizado.","Apuntes T3, diap. 16");
L("T3","Aceros: valores",2,"Para un acero S 275 con espesor 40 < t ≤ 80 mm, el límite elástico es:",
["275 MPa","255 MPa","235 MPa","215 MPa"],1,
"Al aumentar el espesor disminuye fy: S 275 tiene 275 MPa para t ≤ 40 y 255 MPa para 40 < t ≤ 80.","Apuntes T3, diap. 17");
L("T3","Aceros: valores",2,"Según la tabla de los apuntes, ¿qué grado existe para el S 355 pero no para el S 235 ni el S 275?",
["JR","J0","J2","K2"],3,
"El S 355 K2 solo aparece para el S 355.","Apuntes T3, diap. 17");
L("T3","Hormigón: componentes",1,"El clínker se obtiene:",
["Pulverizando yeso","Por calcinación de una mezcla de calizas y arcillas","Moliendo áridos gruesos","Mezclando cemento y agua"],1,
"Calizas + arcillas mezcladas y calcinadas dan el clínker. Clínker + yeso pulverizados dan el cemento.","Apuntes T3, diap. 18");
L("T3","Hormigón: componentes",1,"Se consideran áridos finos o arenas los de tamaño:",
["φ ≤ 4 mm","φ > 4 mm","φ ≤ 40 mm","φ > 20 mm"],0,
"Árido fino o arena: φ ≤ 4 mm. Árido grueso o grava: φ > 4 mm.","Apuntes T3, diap. 18");
L("T3","Hormigón: componentes",2,"Señalar las respuestas correctas (puede haber más de una). Según los apuntes, NO son aguas aceptables en general para el hormigón:",
["Agua de mar","Agua de alta montaña","Aguas pantanosas","Agua potable de red"],[0,1,2],
"El agua de mar por sus cloruros, la de alta montaña por su agresividad y las pantanosas por los limos, algas y residuos que dificultan la adherencia pasta-árido.","Apuntes T3, diap. 18");
L("T3","Hormigón: componentes",2,"La proporción máxima de aditivos en el hormigón, según la definición de los apuntes, es:",
["El 1 % del peso del agua","El 5 % del peso del cemento","El 10 % del peso de los áridos","El 15 % del peso del cemento"],1,
"Los aditivos se incorporan en una proporción no superior al 5 % del peso del cemento.","Apuntes T3, diap. 19");
L("T3","Hormigón: componentes",2,"Respecto a los áridos, los apuntes indican que su superficie total debe ser:",
["La mayor posible en relación con su volumen","La menor posible en relación con su volumen","Igual a la del cemento","Irrelevante"],1,
"La menor superficie relativa reduce la pasta necesaria; se consigue con una dosificación adecuada.","Apuntes T3, diap. 18");
L("T3","Hormigón: tecnológicas",1,"La docilidad del hormigón se mide mediante:",
["El ensayo Charpy","El asiento del cono de Abrams","El ensayo edométrico","El beam test"],1,
"Cono de Abrams: molde troncocónico de 30 cm que se llena, se voltea y se mide cuánto asienta la masa.","Apuntes T3, diap. 20-21");
L("T3","Hormigón: tecnológicas",2,"La decantación del hormigón consiste en:",
["La separación horizontal de gruesos y finos","La caída de los granos gruesos al fondo quedando el mortero en superficie, en mezclas muy líquidas","La pérdida de agua por evaporación","La deformación bajo carga"],1,
"La decantación aparece cuando la mezcla es muy líquida. La segregación es la separación de gruesos y finos.","Apuntes T3, diap. 22");
L("T3","Hormigón: tecnológicas",2,"Señalar las respuestas correctas (puede haber más de una). La segregación y la decantación aumentan con:",
["El contenido de agua","El tamaño de los áridos","Las vibraciones durante el transporte","Una colocación cuidadosa sin caída libre"],[0,1,2],
"También aumentan con la puesta en obra en caída libre; una colocación cuidadosa las reduce.","Apuntes T3, diap. 22");
L("T3","Hormigón: reológicas",1,"La fluencia del hormigón es:",
["La deformación que sufre a lo largo del tiempo sin incremento de las cargas aplicadas","La deformación por pérdida de agua","La pérdida de resistencia con cargas lentas","La deformación instantánea elástica"],0,
"Es la definición de los apuntes. La deformación por pérdida de agua es la retracción y la pérdida de resistencia con cargas lentas es el cansancio.","Apuntes T3, diap. 23");
L("T3","Hormigón: reológicas",2,"Señalar las respuestas correctas (puede haber más de una). La fluencia del hormigón depende de:",
["La humedad del ambiente","Las dimensiones de los elementos","La edad del hormigón en el momento de puesta en carga","El color del árido"],[0,1,2],
"Depende también de la composición y de la magnitud y duración de la carga.","Apuntes T3, diap. 23");
L("T3","Hormigón: reológicas",2,"Según las gráficas de los apuntes, al aumentar la humedad relativa del ambiente, el coeficiente de fluencia:",
["Aumenta","Disminuye","No varía","Se anula"],1,
"Las curvas muestran φ0 menor para HR = 100 que para HR = 50.","Apuntes T3, diap. 24");
L("T3","Hormigón: reológicas",3,"En la expresión de la deformación por fluencia εcσ(t,t0) = σ(t0)·[1/E0,t0 + φ(t,t0)/E0,28], el segundo sumando representa:",
["La deformación instantánea","La deformación diferida","La retracción","La deformación térmica"],1,
"El primer término es la deformación instantánea y el segundo la diferida, con φ(t,t0) = φ0·βc(t − t0).","Apuntes T3, diap. 23");
L("T3","Hormigón: reológicas",3,"Según las gráficas de los apuntes, cuanto mayor es la edad del hormigón en el momento de su puesta en carga (t0), el coeficiente de fluencia:",
["Es mayor","Es menor","No depende de t0","Es nulo para t0 < 28 días"],1,
"Las curvas de φ0(t0) decrecen al aumentar t0: un hormigón más maduro fluye menos.","Apuntes T3, diap. 24");
L("T3","Hormigón: reológicas",2,"La retracción del hormigón:",
["Se debe a la aplicación de cargas constantes","Se debe al gradiente de humedades entre el material y el ambiente","Solo ocurre en hormigón pretensado","No depende de la armadura"],1,
"La armadura se opone a la contracción, lo que origina fisuración superficial y tensiones internas.","Apuntes T3, diap. 26");
L("T3","Hormigón: reológicas",2,"La retracción plástica:",
["Se produce tras años de servicio","Se produce al principio del fraguado, con el material aún en estado plástico","Es la deformación bajo carga","Solo se da en hormigón seco"],1,
"La retracción plástica (asentamiento plástico por exudación y retracción por enfriamiento) ocurre al inicio. La hidráulica, en el resto del fraguado y curado.","Apuntes T3, diap. 26");
L("T3","Hormigón: reológicas",2,"El cansancio del hormigón es:",
["La deformación lenta bajo carga constante","La disminución de su capacidad resistente ante cargas lentas comparada con cargas rápidas","La fisuración por retracción","La fatiga por cargas cíclicas"],1,
"El ensayo de compresión con carga constante muestra un valor de ≈ 0,85 de la resistencia rápida.","Apuntes T3, diap. 27");
L("T3","Hormigón: mecánicas",1,"La deformación correspondiente a la tensión máxima en compresión del hormigón (para fck ≤ 50 MPa) es aproximadamente:",
["0,0002","0,002","0,02","0,0035"],1,
"εc0 = 0,002. La deformación última es εcu = 0,0035.","Apuntes T3, diap. 28 y 30");
L("T3","Hormigón: mecánicas",2,"En el diagrama parábola-rectángulo para fck ≤ 50 N/mm², la deformación última εcu es:",
["0,002","0,0035","0,01","0,0026"],1,
"Para fck ≤ 50: n = 2, εc0 = 0,002 y εcu = 0,0035.","Apuntes T3, diap. 30");
L("T3","Hormigón: mecánicas",2,"El coeficiente parcial de seguridad del hormigón γc en situación persistente o transitoria es:",
["1,15","1,3","1,5","1,0"],2,
"γc = 1,5 en situación persistente o transitoria y 1,3 en accidental.","Apuntes T3, diap. 30");
L("T3","Hormigón: mecánicas",3,"Para un HA-30 con αcc = 1 y γc = 1,5, la resistencia de cálculo fcd es:",
["30 MPa","20 MPa","25,5 MPa","45 MPa"],1,
"fcd = αcc·fck/γc = 1·30/1,5 = 20 MPa.","Apuntes T3, diap. 30 (cálculo)");
L("T3","Hormigón: mecánicas",3,"En el diagrama parábola-rectángulo, el exponente n para fck ≤ 50 N/mm² vale:",
["1,4","2","9,6","0,5"],1,
"n = 2 para fck ≤ 50. Para fck > 50, n = 1,4 + 9,6·[(100 − fck)/100]⁴.","Apuntes T3, diap. 30");
L("T3","Hormigón: mecánicas",3,"La resistencia media a tracción de un hormigón de fck = 27 MPa según la expresión de los apuntes (fct,m = 0,30·fck^(2/3)) es:",
["1,89 MPa","2,70 MPa","3,51 MPa","8,1 MPa"],1,
"27^(2/3) = 9, así que fct,m = 0,30·9 = 2,7 MPa (la característica sería 0,21·9 = 1,89 MPa).","Apuntes T3, diap. 31 (cálculo)");
L("T3","Hormigón: mecánicas",2,"Sobre la resistencia a tracción del hormigón, los apuntes indican que:",
["Es el parámetro principal de proyecto","Tiene escasa aplicación en proyecto","Es mayor que la de compresión","No depende de fck"],1,
"Los apuntes la califican de «escasa aplicación en proyecto».","Apuntes T3, diap. 31");
L("T3","Hormigón: rigidez",2,"El módulo instantáneo Ec,sec45 del hormigón es:",
["La pendiente de la tangente en el origen","La pendiente de la secante cuando se alcanza el 45 % de la resistencia característica","La pendiente tangente en el pico","El módulo a 45 días"],1,
"El módulo inicial es la tangente en el origen y el tangente mide la inclinación de la tangente en cada punto.","Apuntes T3, diap. 32");
L("T3","Hormigón: rigidez",2,"Las deformaciones elásticas del hormigón dependen en gran medida de:",
["El color del cemento","La dosificación, fundamentalmente de los áridos","La armadura","El encofrado"],1,
"Además, la rama elástica es muy corta y el módulo de deformación no es constante.","Apuntes T3, diap. 32");
L("T3","Hormigón: designación",1,"En la designación HA-30/B/20/XC2, la letra B indica:",
["Hormigón blanco","Consistencia blanda","Tamaño de árido","Ambiente"],1,
"T-R/C/TM/A: tipo HA, resistencia 30 N/mm², consistencia B (blanda), tamaño máximo de árido 20 mm y ambiente XC2.","Apuntes T3, diap. 33");
L("T3","Hormigón: designación",2,"La clase de exposición XS corresponde a:",
["Corrosión inducida por cloruros de origen marino","Carbonatación","Ataque hielo-deshielo","Erosión"],0,
"XS: cloruros marinos. XD: cloruros de origen no marino. XC: carbonatación. XF: hielo-deshielo. XA: ataque químico. XM: erosión.","Apuntes T3, diap. 33");
L("T3","Hormigón: designación",2,"¿Qué clase de exposición corresponde al ataque por hielo-deshielo?",
["XA","XF","XM","XC"],1,
"XF1 a XF4: ataque hielo-deshielo.","Apuntes T3, diap. 33");
L("T3","Hormigón: designación",1,"La designación HP corresponde a:",
["Hormigón en masa","Hormigón armado","Hormigón pretensado","Hormigón proyectado"],2,
"HM: en masa. HA: armado. HP: pretensado.","Apuntes T3, diap. 33");
L("T3","Armaduras",1,"Las armaduras activas:",
["Se usan en hormigón armado convencional con fy = 400 MPa","Se emplean en hormigón pretensado y solo con aceros de alta resistencia (> 1000 MPa)","Son mallas electrosoldadas","Resisten las cargas pasivamente"],1,
"Activas: pretensado, más de 1000 MPa. Pasivas: 400 o 500 MPa.","Apuntes T3, diap. 34");
L("T3","Armaduras",2,"En la designación B 500 SD, la letra D indica:",
["Diámetro grande","Características especiales de ductilidad","Doblado en frío","Dureza natural"],1,
"B: acero para hormigón. 500: fy en MPa. S: soldable. D: alta ductilidad.","Apuntes T3, diap. 35");
L("T3","Armaduras",2,"La designación B 500 T corresponde a:",
["Barras corrugadas soldables","Alambres de acero trefilado (lisos o corrugados)","Tornillos de alta resistencia","Perfiles tubulares"],1,
"T indica alambres de acero trefilado, usados por ejemplo en mallas electrosoldadas.","Apuntes T3, diap. 35");
L("T3","Armaduras",2,"¿Cuál de los siguientes diámetros NO figura entre los tamaños característicos de barras corrugadas de los apuntes?",
["12 mm","18 mm","25 mm","32 mm"],1,
"Diámetros característicos: 6, 8, 10, 12, 14, 16, 20, 25, 32 y 40 mm. No figura el de 18 mm.","Apuntes T3, diap. 36");
L("T3","Armaduras",2,"La adherencia hormigón-acero es fundamental porque:",
["Aumenta el peso propio","Asegura el anclaje de las barras y controla la fisuración","Elimina la retracción","Reduce la fluencia"],1,
"Es lo que permite que el hormigón armado funcione como material estructural.","Apuntes T3, diap. 38");
L("T3","Armaduras",3,"Señalar las respuestas correctas (puede haber más de una). Mecanismos de adherencia hormigón-acero según los apuntes:",
["Físico-químicos: adhesión por fuerzas capilares en la interfase","Rozamiento por penetración del cemento en las irregularidades de la barra","Efecto de cuña de las corrugas","Soldadura entre barra y hormigón"],[0,1,2],
"Los mecanismos mecánicos incluyen el rozamiento y la cuña de las corrugas. No existe soldadura acero-hormigón.","Apuntes T3, diap. 38");
L("T3","Armaduras",1,"El ensayo para caracterizar la adherencia mostrado en los apuntes es:",
["Ensayo Charpy","Ensayo tipo viga (beam test)","Cono de Abrams","Ensayo edométrico"],1,
"Los apuntes muestran el ensayo de adherencia tipo viga (beam test).","Apuntes T3, diap. 38");
L("T3","Suelos",1,"Señalar la respuesta incorrecta sobre las particularidades del suelo como material:",
["No es posible su elección","No es un material homogéneo","El contenido de agua tiene gran importancia","Sus propiedades son las mismas en cualquier emplazamiento"],3,
"El suelo viene dado por el emplazamiento, no es homogéneo y depende mucho del agua; sus propiedades varían de un emplazamiento a otro.","Apuntes T3, diap. 39");
L("T3","Suelos",1,"Las arenas proceden de:",
["La alteración química de las rocas","La alteración física de las rocas","La materia orgánica","Los geles amorfos"],1,
"Arenas: alteración física. Arcillas: alteración química.","Apuntes T3, diap. 40-41");
L("T3","Suelos",2,"Las arenas se clasifican mediante ___ y las arcillas mediante ___.",
["límites de Atterberg / curvas granulométricas","curvas granulométricas / límites de Atterberg","ensayo edométrico / cono de Abrams","índice de huecos / peso específico"],1,
"Arenas: granulometría por tamizado. Arcillas: límites de Atterberg (plasticidad frente a humedad).","Apuntes T3, diap. 40-41");
L("T3","Suelos",2,"Las propiedades de las arenas dependen principalmente de:",
["Su composición química y humedad","El tamaño de partículas y su compacidad","Su plasticidad","El contenido en geles"],1,
"Además, las arenas no tienen resistencia a tracción.","Apuntes T3, diap. 40");
L("T3","Suelos",2,"La estructura dispersa de las arcillas:",
["Tiene mayor índice de huecos","Se produce por preconsolidación y es irreversible","Tiene mayor resistencia al corte","Es propia de las arenas"],1,
"Es la «memoria de las arcillas». Las láminas ordenadas dan menor resistencia al corte; la floculada tiene más huecos.","Apuntes T3, diap. 41");
L("T3","Suelos",2,"En la plasticidad de las arcillas, el agua adsorbida actúa como:",
["Cemento","Lubricante","Árido","Aditivo aireante"],1,
"Según los apuntes, el agua adsorbida hace la función de lubricante.","Apuntes T3, diap. 41");
L("T3","Suelos",2,"Ordenar los estados de una arcilla al aumentar su humedad:",
["Plástico → sólido → semisólido → semilíquido","Sólido → semisólido → plástico → semilíquido","Semilíquido → plástico → sólido","Sólido → plástico → semisólido → semilíquido"],1,
"Las fronteras son el límite de retracción (sólido-semisólido), el límite plástico PL (semisólido-plástico) y el límite líquido LL (plástico-semilíquido).","Apuntes T3, diap. 41");
L("T3","Suelos: fases",2,"El peso específico sumergido γ′ es:",
["γsat + γw","γsat − γw","γd − γw","Ws/Vs"],1,
"γ′ = γsat − γw.","Apuntes T3, diap. 43");
L("T3","Suelos: fases",2,"La porosidad n se relaciona con el índice de huecos e mediante:",
["n = e/(1 + e)","n = (1 + e)/e","n = 1 − e","n = e²"],0,
"n = (Va + Vw)/Vm = e/(1 + e).","Apuntes T3, diap. 44");
L("T3","Suelos: fases",2,"La humedad w de un suelo se define como:",
["Vw/Vm","Ww/Ws","Ww/Wm","Vw/(Va + Vw)"],1,
"w = Ww/Ws = (Wm − Ws)/Ws. Vw/(Va + Vw) es el grado de saturación S.","Apuntes T3, diap. 44");
L("T3","Suelos: fases",3,"Un suelo tiene Gs = 2,7 y e = 1,5. Con γw = 1 t/m³, su peso específico saturado es:",
["1,08 t/m³","1,68 t/m³","2,70 t/m³","1,50 t/m³"],1,
"γsat = (Gs + e)γw/(1 + e) = (2,7 + 1,5)/2,5 = 1,68 t/m³. El seco es γd = 2,7/2,5 = 1,08 t/m³. Datos del ejercicio de la hoja oficial de soluciones de 2024.","Apuntes T3, diap. 43-44 · Hoja de soluciones 2024");
L("T3","Suelos: fases",2,"La gravedad específica Gs de las partículas sólidas del suelo suele estar entre:",
["1,0 y 1,5","2,3 y 2,8","3,5 y 4,5","0,5 y 1,0"],1,
"Los apuntes indican Gs ∼ 2,3 a 2,8.","Apuntes T3, diap. 43");
L("T3","Suelos: fases",1,"Un suelo con todos sus huecos llenos de agua se denomina:",
["Seco","Saturado","Parcialmente saturado","Capilar"],1,
"Seco: huecos con aire. Saturado: huecos con agua. Parcialmente saturado: aire y agua.","Apuntes T3, diap. 42");
L("T3","Terzaghi",1,"El principio de Terzaghi establece que:",
["σ′ = σ + u","σ′ = σ − u","σ = σ′ − u","u = σ·σ′"],1,
"σ′ij = σij − u·δij. El equilibrio se plantea en totales y el comportamiento en efectivas.","Apuntes T3, diap. 46");
L("T3","Terzaghi",2,"Según el principio de tensiones efectivas, el comportamiento del suelo (deformación, resistencia) depende de:",
["Las tensiones totales","Las tensiones efectivas","Solo de la presión intersticial","Del peso específico seco"],1,
"Equilibrio: tensiones totales. Comportamiento: tensiones efectivas.","Apuntes T3, diap. 46");
L("T3","Terzaghi",2,"Si sobre un terreno saturado aumenta la altura de una lámina de agua libre hw, las tensiones efectivas en el terreno:",
["Aumentan","No cambian: no dependen de hw y no hay deformación","Disminuyen","Se anulan"],1,
"Caso 1 de los apuntes: σ′ = γ′(z − hw), referida a la superficie del terreno. El aumento de σ se compensa con el de u.","Apuntes T3, diap. 46");
L("T3","Terzaghi",2,"Al descender el nivel freático en un terreno, las tensiones efectivas a una profundidad H por debajo de ambos niveles:",
["Disminuyen","Aumentan, lo que produce asientos","No cambian","Se hacen negativas"],1,
"σ′ = (γ − γ′)Hw + γ′H crece al aumentar Hw porque γ > γ′. Por eso los descensos de nivel freático generan asientos.","Apuntes T3, diap. 48");
L("T3","Terzaghi",3,"Terreno con γ = 1,8 t/m³ por encima y γsat = 2,0 t/m³ por debajo del nivel freático, situado a 2 m. Con γw = 1 t/m³, la tensión efectiva vertical a 5 m de profundidad es:",
["10,0 t/m²","6,6 t/m²","9,6 t/m²","3,0 t/m²"],1,
"σ = 1,8·2 + 2,0·3 = 9,6 t/m²; u = 1·3 = 3 t/m²; σ′ = 6,6 t/m² (equivale a 1,8·2 + 1,0·3).","Apuntes T3, diap. 46-48 (cálculo)");
L("T3","Terzaghi",3,"Si el nivel freático de un terreno sube desde la profundidad H hasta la superficie, el incremento de tensión efectiva en puntos por debajo de H es:",
["Lineal con la profundidad","Constante e igual a (γ′ − γ)H","Nulo","Igual a γw·z"],1,
"Resolución oficial de la PA1 2025: para z ≥ H, Δσ′ = (γ′ − γ)H, constante (y negativo, porque γ′ < γ). Entre 0 y H es lineal.","Hoja de soluciones PA1 2025");
L("T3","Consolidación",2,"La consolidación de un suelo es:",
["La deformación instantánea al cargar","El asiento diferido en el tiempo debido a la permeabilidad, mientras se disipan las presiones intersticiales","La compactación con rodillo","La retracción por secado"],1,
"La permeabilidad hace que las presiones neutras varíen con el tiempo hasta un nuevo equilibrio, lo que produce un asiento diferido.","Apuntes T3, diap. 50");
L("T3","Consolidación",2,"El coeficiente de cambio volumétrico mv obtenido en el ensayo edométrico es:",
["mv = dσ′/dεv","mv = −dεv/dσ′a","mv = e/(1 + e)","mv = γsat − γw"],1,
"mv = −dεv/dσ′a.","Apuntes T3, diap. 51");
L("T3","Introducción",2,"Según la tabla C.1 del DB-SE-AE recogida en los apuntes, el peso específico aparente del acero está en torno a:",
["24 kN/m³","77–78,5 kN/m³","27 kN/m³","10 kN/m³"],1,
"Acero: 77,0 a 78,5 kN/m³. El hormigón normal está en torno a 24 kN/m³.","Apuntes T3, diap. 9");
L("T3","Aceros: tipos",2,"Señalar la respuesta incorrecta sobre los perfiles conformados en frío:",
["Se fabrican con conformadoras de rodillo en frío a partir de chapas finas","El conformado les confiere características específicas de sección y resistencia","Son los más utilizados habitualmente en construcción","Ejemplos: perfiles en L, U, Z y paneles"],2,
"Los más utilizados son los laminados en caliente. Esta misma idea aparece como opción en una de las versiones del examen PA1 2025.","Apuntes T3, diap. 10");
