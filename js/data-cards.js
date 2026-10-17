/* =====================================================================
   TARJETAS DE REPASO (repetición espaciada). Basadas en los apuntes.
   C(tema, sección, anverso, reverso)
   ===================================================================== */
const CARDS = [];
function C(t, sec, f, b) { CARDS.push({ id: "K" + (CARDS.length + 1), tema: t, sec: sec, f: f, b: b }); }

/* T1 */
C("T1","t1-proyecto","Fases del proyecto (de menos a más detalle)","<b>Anteproyecto</b> (aspectos fundamentales) → <b>proyecto básico</b> (soluciones concretas y su justificación) → <b>proyecto de ejecución</b> (todos los detalles y especificaciones).");
C("T1","t1-requisitos","Los 4 requisitos de seguridad y funcionalidad","Resistencia y estabilidad · aptitud al servicio (rigidez) · robustez y redundancia · durabilidad.");
C("T1","t1-requisitos","¿Qué es la robustez?","Que un evento extraordinario no produzca consecuencias <b>desproporcionadas</b> respecto a su causa.");
C("T1","t1-requisitos","¿Por qué se prefiere la rotura dúctil?","Las grandes deformaciones permiten <b>redistribuir tensiones</b> y <b>avisan del peligro</b> antes del colapso.");
C("T1","t1-requisitos","Fatiga","Rotura tras muchos ciclos de carga con tensiones muy por debajo de la resistencia estática.");
C("T1","t1-requisitos","Cálculo plástico frente a elástico: ¿cuál da secciones menores?","El <b>plástico</b>: admite rótulas y mecanismos de colapso y aprovecha la reserva entre M<sub>y</sub> y M<sub>p</sub>.");
C("T1","t1-requisitos","Protección activa y pasiva contra el fuego","Activa: detectar o extinguir (sprinklers). Pasiva: proteger el elemento (pintura intumescente, mortero ignífugo, placas).");
C("T1","t1-metodos","Tensiones admisibles: fórmula e inconvenientes","$\\sigma\\le\\sigma_{mat}/FS$. Desaprovecha el material (no considera la plasticidad), no informa del margen hasta la rotura y da estructuras más caras e inciertas.");
C("T1","t1-metodos","Definición de fiabilidad","$R = 1 - p_f$, donde $p_f$ es la probabilidad de fallo.");
C("T1","t1-metodos","Métodos de nivel 1 frente a nivel 2","Nivel 2: distribuciones estadísticas completas. Nivel 1: valores característicos y coeficientes parciales (CE, CTE, EC). El nivel 1 <b>no</b> da un número de fiabilidad.");
C("T1","t1-metodos","Valor característico de la resistencia","Valor con un <b>5 %</b> de probabilidad de que haya resistencias <b>menores</b>.");
C("T1","t1-metodos","Valor característico de una acción","Valor con un <b>5 %</b> de probabilidad de que haya acciones <b>mayores</b>.");
C("T1","t1-metodos","γ<sub>m</sub> y γ<sub>f</sub>","γ<sub>m</sub> <b>minora</b> resistencias: $X_d=X_k/\\gamma_m$. γ<sub>f</sub> <b>mayora</b> acciones: $F_d=\\gamma_f F_k$.");
C("T1","t1-metodos","¿Entre qué costes es un compromiso el coeficiente parcial?","Coste de construcción y conservación (crece con γ) frente a coste de los daños potenciales (decrece con γ).");
C("T1","t1-metodos","Clasificación de las acciones","En el tiempo: permanentes, variables y accidentales. En el espacio: libres o fijas.");
C("T1","t1-metodos","Situaciones de rigidez","Poco frecuente (corta duración, irreversible) · frecuente (corta duración, reversible) · casi permanente (larga duración).");
C("T1","t1-el","Situaciones de proyecto","Persistentes (uso normal) · transitorias (ejecución, reparación) · accidentales (fuego, impacto) · sísmicas.");
C("T1","t1-el","ELS: qué controla y cómo se comprueba","Funcionalidad, estética y durabilidad. Combinaciones de <b>alta</b> probabilidad. Desplazamientos y aceleraciones. $C_d\\ge E_d$.");
C("T1","t1-el","ELU: qué controla y cómo se comprueba","Colapso total o parcial. Combinaciones de <b>baja</b> probabilidad. Esfuerzos y tensiones. $R_d\\ge S_d$.");
C("T1","t1-el","Tipos de ELU","Equilibrio, agotamiento, pandeo, fatiga y adherencia.");
C("T1","t1-el","Tipos de ELS","Flechas (verticales y horizontales), vibraciones (verticales y horizontales) y otros (deslizamiento de tornillos).");

/* T2 */
C("T2","t2-intro","Ley de escala de Galileo","Peso ∝ λ³; resistencia y rigidez ∝ λ². Si el peso propio es importante se pierde la semejanza geométrica.");
C("T2","t2-intro","Superficie desarrollable","Una curvatura principal nula y la otra de signo constante: se puede aplanar sin cortarla.");
C("T2","t2-intro","Alabeo","Diferencia de pendientes entre lados opuestos de la superficie.");
C("T2","t2-clasif","Laja frente a placa","Laja: solo esfuerzos en el plano (N<sub>x</sub>, N<sub>y</sub>, N<sub>xy</sub>). Placa: solo flexión y cortante (M, V).");
C("T2","t2-clasif","Membrana","Elemento curvo de muy poco espesor con esfuerzos solo en su plano tangente (Grupo 1).");
C("T2","t2-clasif","Sinclástica frente a anticlástica","Sinclástica: dos curvaturas del mismo signo (cúpula). Anticlástica: de signo opuesto (silla de montar).");
C("T2","t2-mono","Flecha óptima de un cable","Con una carga: D/2. Parábola: D/3. Catenaria: ≈ D/3.");
C("T2","t2-mono","Parábola frente a catenaria","Parábola: cargas iguales repartidas en horizontal. Catenaria: cargas iguales a lo largo del cable (peso propio).");
C("T2","t2-mono","Arco funicular","Inversión de la forma del cable: con esa carga trabaja solo a compresión.");
C("T2","t2-mono","Perfil I: reparto del trabajo","Las alas resisten la flexión y el alma el cortante. Riesgos: pandeo lateral por flexión-torsión y abolladura del alma.");
C("T2","t2-mono","Viga con extremos inmovilizados convertida en mecanismo","Puede seguir resistiendo por <b>acción de cable</b>.");
C("T2","t2-bi","Emparrillado de unión no rígida: reparto de carga","Según la rigidez a flexión, $48EI/L^3$. La viga más larga necesita más inercia para repartir igual.");
C("T2","t2-bi","Relación canto/luz con entramados","1/30 a 1/40, frente a 1/10 a 1/24 en sistemas unidireccionales.");
C("T2","t2-bi","Torsión en placa cuadrada","Transmite ≈ el <b>50 %</b> de la carga.");
C("T2","t2-bi","Reservas de resistencia de una losa","Redistribución de tensiones (líneas de articulación) y acción de membrana.");
C("T2","t2-bi","Membrana cilíndrica con peso propio","Las generatrices rectas no trabajan (ni curvatura ni alabeo). Toda la carga va por acción de cable en las directrices.");
C("T2","t2-edif","Acción diafragma","Los forjados reparten las acciones horizontales entre pórticos y pantallas como grandes vigas horizontales.");
C("T2","t2-edif","Pórtico frente a pantalla bajo carga horizontal","Pórtico: domina la deformación por cortante. Pantalla: domina la flexión (voladizo).");
C("T2","t2-edif","Pórtico excéntrico (shear link)","La diagonal llega a la viga, no al nudo. Concentra la plastificación en el link y reduce la rigidez lateral (solución antisísmica).");
C("T2","t2-edif","Efecto shear lag","En un tubo, los esfuerzos se concentran en las esquinas por la deformación a cortante.");
C("T2","t2-edif","Reserva de rigidez frente al efecto P-Δ","$k' = P_{tot}/h$.");
C("T2","t2-civil","Partes de un puente","Tablero + sistema primario (= superestructura) y subestructura (pilas, estribos y cimentaciones).");
C("T2","t2-civil","Colgante frente a atirantado","Colgante: cable principal y péndolas; el tablero estabiliza el cable; las mayores luces. Atirantado: tirantes desde las torres que comprimen el tablero; en arpa o en abanico.");
C("T2","t2-civil","Temperatura en estructura isostática e hiperestática","Isostática: movimiento ΔL = LαΔT sin tensiones. Hiperestática: el movimiento impedido genera tensiones.");
C("T2","t2-civil","Función del bulón","Coser los estratos alrededor de la excavación para formar una <b>bóveda natural</b>.");
C("T2","t2-civil","Subsidencia","Deformación en superficie por alteración del equilibrio interno del terreno, no por cargas en superficie.");
C("T2","t2-civil","Dovela de clave o llave","Es la última que se coloca. Las juntas entre dovelas reducen la rigidez del anillo.");
C("T2","t2-ind","Pórtico rígido frente a cercha articulada","Pórtico: flexión en barras, rigidez en su plano. Cercha: axiles, buen aprovechamiento, riesgo de pandeo de las barras comprimidas.");
C("T2","t2-ind","Torres eléctricas equilibradas y desequilibradas","Equilibradas: alineación y ángulo. Desequilibradas: amarre y fin de línea. Reglamento: RD 223/2008.");

/* T23 */
C("T23","t23-sup","Asiento, asiento diferencial y distorsión angular","s: descenso de un punto. δs: diferencia entre dos puntos. β = δs/L.");
C("T23","t23-sup","Límites de β según el CTE","1/300 isostáticas y muros de contención · 1/500 reticuladas con tabiquería · 1/700 paneles prefabricados · 1/1000 y 1/2000 muros de carga sin armar.");
C("T23","t23-sup","ELU de una cimentación superficial","Hundimiento, deslizamiento, vuelco, estabilidad global y capacidad estructural del cimiento.");
C("T23","t23-sup","Criterio de Mohr-Coulomb","$\\tau = c+\\sigma\\,\\mathrm{tg}\\,\\varphi$. Círculo seguro, límite (tangente) o imposible (corta la recta).");
C("T23","t23-sup","Zapata rígida frente a flexible","Rígida: $V_{max}\\le 2h$, reparto lineal, bielas. Flexible: $V_{max}>2h$, balasto k.");
C("T23","t23-sup","Presiones con e ≤ L/6","$\\sigma=\\frac{N}{L}\\left(1\\pm\\frac{6e}{L}\\right)$: toda la base comprimida.");
C("T23","t23-sup","Presiones con e > L/6","$\\sigma_{max}=\\frac{4N}{3(L-2e)}$ sobre $L_0=3(L/2-e)$.");
C("T23","t23-sup","Efecto del peso de la zapata","Es una carga <b>centradora</b>: $e^*=p\\,e/(p+w)$.");
C("T23","t23-sup","Seguridad a deslizamiento y vuelco","γ > 1,5. No se cuenta con el empuje pasivo salvo que esté garantizado.");
C("T23","t23-prof","Carga de hundimiento de un pilote","$R_{ck}=R_{pk}+R_{fk}=q_pA_p+\\int\\tau_f p_f\\,dz$.");
C("T23","t23-prof","Efecto grupo","$R_{ckg}=\\eta\\,n\\,R_{ck}$, con η = 0,7 si S = D y η = 1 si S ≥ 3D (se interpola entre ambos).");
C("T23","t23-prof","Rozamiento negativo","El terreno asienta más que el pilote y le añade carga.");
C("T23","t23-prof","Pilote flotante frente a columna","Flotante: trabaja por fuste. Columna: trabaja por punta sobre un estrato firme.");
C("T23","t23-cont","Empujes activo, reposo y pasivo","K<sub>a</sub> &lt; K<sub>0</sub> &lt; K<sub>p</sub>. Activo: el muro se aleja del terreno (mínimo). Pasivo: empuja contra el terreno (máximo). Reposo: estado inicial.");
C("T23","t23-cont","Pantalla frente a muro","Pantalla: flexible, para excavaciones verticales; se ejecuta antes de excavar y depende del empotramiento. Muro: mantiene un desnivel.");

/* T3 */
C("T3","t3-intro","E y ν del acero","E ≈ 207 GPa; ν ≈ 0,27.");
C("T3","t3-intro","¿Influyen las propiedades no mecánicas en la ley σ-ε?","No (densidad, propiedades térmicas, durabilidad…), aunque algunas afectan a la resistencia al fuego.");
C("T3","t3-acero","Perfil más usado en construcción","El <b>laminado en caliente</b> (IPE, HE, IPN…).");
C("T3","t3-acero","σ<sub>r</sub> frente a σ<sub>max</sub> en el diagrama ingenieril","σ<sub>r</sub> &lt; σ<sub>max</sub>, por la estricción.");
C("T3","t3-acero","Resiliencia frente a tenacidad","Resiliencia (KV): energía absorbida en el impacto Charpy. Tenacidad: resistencia a la propagación de grietas.");
C("T3","t3-acero","Factores de rotura frágil","Entallas y ejecución descuidada, grandes espesores, agujeros, soldaduras y bajas temperaturas.");
C("T3","t3-acero","S 355 J2","S: acero. 355: f<sub>y</sub> mínimo en MPa. J2: especiales exigencias de resistencia, resiliencia y soldabilidad.");
C("T3","t3-acero","Grados JR, J0 y J2","JR: construcción ordinaria. J0: altas exigencias de soldabilidad. J2: especiales exigencias de resistencia, resiliencia y soldabilidad.");
C("T3","t3-horm","Árido fino y árido grueso","Fino (arena): φ ≤ 4 mm. Grueso (grava): φ > 4 mm.");
C("T3","t3-horm","Aguas no aptas para el hormigón","Agua de mar (cloruros), de alta montaña (agresiva) y pantanosa (limos, algas).");
C("T3","t3-horm","Aditivos","≤ 5 % del peso del cemento. Modifican propiedades en estado fresco o endurecido (fraguado, heladas…).");
C("T3","t3-horm","Docilidad","Capacidad de llenar el molde sin huecos. Se mide con el cono de Abrams (30 cm).");
C("T3","t3-horm","Segregación frente a decantación","Segregación: gruesos y finos se separan. Decantación: los gruesos caen al fondo en mezclas muy líquidas.");
C("T3","t3-horm","Fluencia","Deformación en el tiempo bajo carga constante. Disminuye con más humedad y con más edad de puesta en carga.");
C("T3","t3-horm","Retracción","Deformación por pérdida de agua: plástica (inicio del fraguado) e hidráulica.");
C("T3","t3-horm","Cansancio","Menor resistencia ante cargas lentas que ante cargas rápidas (≈ 0,85).");
C("T3","t3-horm","Parábola-rectángulo (f<sub>ck</sub> ≤ 50)","$f_{cd}=\\alpha_{cc}f_{ck}/\\gamma_c$, n = 2, ε<sub>c0</sub> = 0,002, ε<sub>cu</sub> = 0,0035. γ<sub>c</sub> = 1,5 (1,3 en accidental).");
C("T3","t3-horm","Resistencia a tracción del hormigón","$f_{ct,m}=0{,}30\\,f_{ck}^{2/3}$ (media); $f_{ct,k}=0{,}21\\,f_{ck}^{2/3}$ (característica).");
C("T3","t3-horm","HA-30/B/20/XC2","Hormigón armado, f<sub>ck</sub> = 30 N/mm², consistencia blanda, árido máximo de 20 mm, ambiente de carbonatación XC2.");
C("T3","t3-horm","Clases de exposición","X0 sin riesgo · XC carbonatación · XD cloruros no marinos · XS cloruros marinos · XF hielo-deshielo · XA químico · XM erosión.");
C("T3","t3-arm","Armaduras pasivas frente a activas","Pasivas: 400 o 500 MPa, hormigón armado. Activas: más de 1000 MPa, pretensado.");
C("T3","t3-arm","B 500 S, B 500 SD y B 500 T","S: corrugada soldable. SD: además, alta ductilidad. T: alambre trefilado.");
C("T3","t3-arm","Mecanismos de adherencia","Físico-químicos (adhesión capilar) y mecánicos (rozamiento y efecto de cuña de las corrugas). Se ensaya con el beam test.");
C("T3","t3-suelo","Arenas frente a arcillas","Arenas: alteración física, granulometría, compacidad, sin tracción. Arcillas: alteración química, composición y humedad, límites de Atterberg.");
C("T3","t3-suelo","Estructura floculada frente a dispersa","Floculada: mayor índice de huecos. Dispersa: preconsolidada (irreversible), menor resistencia al corte.");
C("T3","t3-suelo","Índice de huecos y porosidad","$e=V_h/V_s$; $n=V_h/V_m=e/(1+e)$.");
C("T3","t3-suelo","Peso específico sumergido","$\\gamma'=\\gamma_{sat}-\\gamma_w$.");
C("T3","t3-suelo","Principio de Terzaghi","$\\sigma'=\\sigma-u$. Equilibrio en tensiones totales; comportamiento en tensiones efectivas.");
C("T3","t3-suelo","¿Qué pasa con σ′ si baja el nivel freático?","Aumenta, lo que produce asientos.");
C("T3","t3-suelo","El nivel freático sube de H a la superficie: Δσ′","Lineal entre 0 y H, $(\\gamma'-\\gamma)z$; constante por debajo de H, $(\\gamma'-\\gamma)H$.");
C("T3","t3-suelo","Consolidación","Asiento diferido por la baja permeabilidad mientras se disipan las presiones intersticiales. $m_v=-d\\varepsilon_v/d\\sigma'$.");
