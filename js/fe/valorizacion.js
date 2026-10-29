/* Tema B2 · Aprovechamiento energético de biomasa y residuos · fuentes: FE_Tema2_2026.pdf,
   Enunciados_Problemas_FE.pdf y Resolucion P1/P2/P3.pdf */

/* =====================================================================
   TEMA B2 · Alternativas de valorización, combustión, gasificación,
   pirólisis, emisiones atmosféricas y biocarburantes
   ===================================================================== */
THEORY.B2 = {
  summary: [
    "La biomasa y los residuos se valorizan para obtener <b>electricidad</b>, <b>calor</b>, <b>combustibles para el transporte</b> y <b>materias primas para la industria química</b>.",
    "En el <b>diagrama de van Krevelen</b> (H/C frente a O/C) la biomasa se sitúa en O/C ≈ 0,6-0,75 y H/C ≈ 1,3-1,7; transformarla en gasolina o diésel exige eliminar oxígeno (O/C ≈ 0, H/C ≈ 2).",
    "La biomasa se quema en hornos de <b>parrillas</b>, de <b>lecho fluidizado</b> (partículas de 3-4 cm como máximo) y de <b>cocombustión</b> (partículas &lt; 1 mm); los residuos peligrosos, en hornos <b>rotatorios</b>. Antes se seca a &lt; 10 % de humedad (uso industrial) o &lt; 30 % (doméstico).",
    "Electricidad a partir de biomasa: turbinas de vapor en ciclo <b>Rankine</b> (500 kWe-500 MWe), ciclo <b>ORC</b> (400 kWe-1,5 MWe), máquinas de vapor (25 kWe-1,5 MWe), motores <b>Stirling</b> (1-100 kWe) y turbinas de gas en ciclo cerrado (500 kWe-500 MWe).",
    "En España el <b>72 %</b> de las instalaciones de biomasa y residuos renovables (<b>187 plantas</b>) tiene ≤ 5 MW: el tamaño lo limita la disponibilidad de recurso (APPA, 2019).",
    "Horno de parrillas de RSU: parrillas inclinadas unos <b>25º</b>, gases a <b>&gt; 850 ºC durante 2 s</b>, quemadores auxiliares (gas natural y gasóleo) para alcanzar los 850 ºC y gases de escape a 160-220 ºC.",
    "<b>Gasificación</b> = oxidación parcial en condiciones subestequiométricas: con aire, gas de <b>4-7 MJ/Nm³</b>; con oxígeno, <b>10-20 MJ/Nm³</b>; con aire u oxígeno + vapor, <b>15-20 MJ/Nm³</b>. Boudouard, water-gas y los reformados son <b>endotérmicas</b>.",
    "Los <b>alquitranes</b> (de hidrocarburos ligeros a HAP) dañan líneas, inyectores y compresores; se eliminan con filtros, ciclones y lavadores, <b>craqueo térmico (&gt; 1100 ºC)</b> o catalizadores. El <b>plasma</b> gasifica a 3000-20000 ºC.",
    "<b>Pirólisis</b> = descomposición por calor (&gt; 400 ºC) <b>sin oxígeno</b>. Rápida (≈ 700 ºC, segundos): <b>20 % coque, 20 % gas, 60 % líquido</b>. Lenta o <b>carbonización</b> (≈ 400 ºC, horas): <b>80 % coque y 20 % gas</b>.",
    "Una incineradora de residuos domésticos es <b>valorización</b> si su eficiencia energética es ≥ <b>0,60</b> (autorizada antes de 2009) o ≥ <b>0,65</b> (después del 31-12-2008); la energía eléctrica se pondera ×<b>2,6</b> y el calor ×<b>1,1</b>.",
    "Las concentraciones medidas se corrigen al oxígeno de referencia: $E_s = \\frac{21-O_s}{21-O_m}\\,E_m$. Referencias: <b>6 %</b> (sólidos), <b>3 %</b> (líquidos y gases), <b>11 %</b> (incineración de residuos), <b>15 %</b> (turbinas y motores de gas).",
    "Normativa: <b>RD 815/2013</b> (≥ 50 MW térmicos), <b>RD 1042/2017</b> (medianas, 1-50 MW), <b>Reglamento 2015/1189</b> (calderas ≤ 500 kW, O<sub>2</sub> 10 %) y <b>2015/1185</b> (calefacción local ≤ 50 kW, O<sub>2</sub> 13 %).",
    "<b>Bioetanol</b>: 1.ª generación con biomasa azucarada (azúcar, uva) o amilácea (trigo, maíz, cebada); 2.ª con lignocelulósica. Subproductos: <b>DDGS</b> (pienso) y <b>vinazas</b>.",
    "<b>Biodiésel</b> por <b>transesterificación</b>: 100 kg de triglicérido + 11 kg de metanol → 100 kg de metiléster + 11 kg de glicerina. 1.ª generación: plantas comestibles y grasas; 2.ª: no comestibles y residuos; 3.ª: algas.",
    "Problemas resueltos: balance de un incinerador (P1), aire estequiométrico de la celulosa (<b>5,1 kg/kg</b>) y masa molecular de humos (P2), y biogás teórico con Buswell (<b>0,4 Nm³ CH<sub>4</sub>/kg</b>) (P3)."
  ],
  sections: [
    { id: "b2-alternativas", title: "1. Alternativas de valorización y plantas de combustión", slides: ["B2", 1, 8], html: `
<p>El tema recorre las alternativas técnicas de valorización energética de la biomasa y los residuos (combustión, gasificación y pirólisis), los requisitos de las emisiones atmosféricas y la producción de biocarburantes (diap. 1).</p>
<h4>Alternativas técnicas de valorización energética</h4>
<p>A partir de <b>biomasa y residuos</b> se pueden obtener cuatro productos finales (diap. 2): <b>electricidad</b>, <b>calor</b>, <b>combustibles para el transporte</b> y <b>materias primas para la industria química</b>.</p>
<h4>Diagrama de van Krevelen</h4>
<p>Representa la <b>relación H/C</b> (ordenadas) frente a la <b>relación O/C</b> (abscisas) de los combustibles (diap. 3, Vermeiren y Gilson, 2009):</p>
<table class="tbl"><thead><tr><th>Sustancia</th><th>O/C</th><th>H/C</th></tr></thead><tbody>
<tr><td>Diésel y gasolinas</td><td>≈ 0</td><td>≈ 1,9-2,1</td></tr>
<tr><td>Etano / propano</td><td>0</td><td>3 / ≈ 2,7</td></tr>
<tr><td>Lignina</td><td>≈ 0,35-0,4</td><td>≈ 1,2-1,3</td></tr>
<tr><td>Biomasa (nube de puntos)</td><td>≈ 0,55-0,75</td><td>≈ 1,25-1,7</td></tr>
<tr><td>Celulosa</td><td>≈ 0,8</td><td>≈ 1,7</td></tr>
<tr><td>Etanol</td><td>0,5</td><td>3</td></tr>
<tr><td>Metanol</td><td>1</td><td>4</td></tr>
<tr><td>CO / CO<sub>2</sub></td><td>1 / 2</td><td>0</td></tr>
</tbody></table>
<p>La flecha de la diapositiva va de la nube de la biomasa a la zona de diésel y gasolinas: para obtener combustibles de transporte hay que <b>reducir el oxígeno</b> y <b>aumentar la relación H/C</b>. Las cenizas quedan en la esquina inferior izquierda (H/C &lt; 0,5).</p>
<h4>Calefacción centralizada y ejemplos de plantas</h4>
<p>La combustión de biomasa se aplica en estufas de pellets domésticas, redes de calefacción centralizada (<i>district heating</i>) y sistemas mixtos de red de calor y producción eléctrica: zona de descarga, parque de almacenamiento, alimentación, caldera de vapor, turbina, generador, intercambiador de calefacción y red (diap. 4, IDAE 2007).</p>
<p>Ejemplos de plantas de combustión de biomasa (diap. 5):</p>
<table class="tbl"><thead><tr><th>Planta</th><th>Potencia</th><th>Combustible / uso</th></tr></thead><tbody>
<tr><td>Ironbridge (Reino Unido, demolida)</td><td>740 MW</td><td>Pellets; electricidad</td></tr>
<tr><td>Teesport, Middlesbrough (Reino Unido)</td><td>299 MW</td><td>Pellets</td></tr>
<tr><td>Alholmens Kraft (Finlandia)</td><td>265 MW</td><td>Residuos de papelera; calor y electricidad</td></tr>
<tr><td>Toppila (Finlandia)</td><td>210 MW</td><td>Turba</td></tr>
<tr><td>Polaniec (Polonia)</td><td>205 MW</td><td>Residuos agrícolas y forestales; electricidad</td></tr>
<tr><td>Kymijärvi II (Finlandia)</td><td>160 MW</td><td>CSR; CHP con <b>gasificación + combustión</b></td></tr>
<tr><td>Vaasa (Finlandia)</td><td>140 MW</td><td>Residuos forestales; gasificación + combustión</td></tr>
<tr><td>South Bay, Florida (EE. UU.)</td><td>140 MW</td><td>Bagazo de caña de azúcar</td></tr>
<tr><td>Estocolmo (Suecia)</td><td>130 MW</td><td>Residuos forestales y madereros; CHP</td></tr>
<tr><td>Huelva (España)</td><td>50 MW y 41 MW</td><td>Residuos forestales / cultivo energético y residuos</td></tr>
<tr><td>Navia (España)</td><td>40,3 MW (térmica) y 36,7 MW (eléctrica)</td><td>Residuos agrícolas, de jardinería, industriales y forestales</td></tr>
<tr><td>Pontevedra (España)</td><td>36,6 MW</td><td>Residuos forestales y <b>licor negro</b>; térmica</td></tr>
</tbody></table>
<h4>Plantas de biomasa en España</h4>
<p>El inventario de APPA (2011) muestra plantas de biomasa, biogás, gasificación, pellets y FORSU, y las previstas (diap. 6). Las instalaciones de biomasa y residuos renovables se <b>localizan en función de los recursos biomásicos</b>: así se reducen los costes e impactos del transporte, no se interrumpe la cadena de suministro y se maximiza la operación (diap. 7). En el mapa de 2020, Andalucía es la comunidad con más potencia instalada (P &gt; 200 MW).</p>
<table class="tbl"><thead><tr><th>Rango de potencia (2019)</th><th>Plantas</th><th>Potencia</th></tr></thead><tbody>
<tr><td>P ≤ 1 MW</td><td>89</td><td>40 MW</td></tr>
<tr><td>1 &lt; P ≤ 5 MW</td><td>98</td><td>187 MW</td></tr>
<tr><td>5 &lt; P ≤ 10 MW</td><td>30</td><td>216 MW</td></tr>
<tr><td>10 &lt; P ≤ 25 MW</td><td>26</td><td>417 MW</td></tr>
<tr><td>25 &lt; P ≤ 50 MW</td><td>16</td><td>585 MW</td></tr>
</tbody></table>
<p>El tamaño de las plantas está <b>limitado por la disponibilidad de recursos</b>: el <b>72 %</b> de las instalaciones (<b>187 plantas</b>) tiene una capacidad ≤ 5 MW (APPA Biomasa 2021).</p>
<p>Ejemplos de plantas eléctricas de biomasa en España (diap. 8): Corduente (2 MW, 20.000 t/año, 14 GWh), Villarta de San Juan (16 MW, orujillo, 92,5 GWh), Briviesca (16 MW, 102.000 t/año de <b>paja de cereal</b>, 128 GWh), Valencia de Don Juan (30 MW, 200 GWh), <b>Curtis Teixeiro</b> (la mayor de la tabla: <b>50 MW</b>, 500.000 t/año, 324 GWh, forestal), Biomasa Navia (36,65 MW, 262 GWh), Sangüesa (25 MW, 200 GWh), La Loma y Linares (16 MW, orujillo) y Biomasa Huelva (40,95 MW, 252 GWh).</p>
` },
    { id: "b2-combustion", title: "2. Combustión: hornos, ciclos e incineración de residuos", slides: ["B2", 9, 18], html: `
<h4>Tipos de hornos y pretratamiento</h4>
<p>La biomasa se incinera en (diap. 9):</p>
<ul>
<li><b>Hornos de parrillas</b>: fijas (horizontales o inclinadas) y móviles.</li>
<li><b>Hornos de lecho fluidizado</b>: requieren partículas de <b>3-4 cm</b> de dimensión máxima.</li>
<li><b>Hornos de cocombustión</b>: hornos de carbón en los que también se quema biomasa (partículas <b>&lt; 1 mm</b>). Cocombustión <b>directa</b> o <b>indirecta</b> (biomasa previamente gasificada).</li>
</ul>
<table class="tbl cmp"><thead><tr><th>Material</th><th>Hornos</th></tr></thead><tbody>
<tr><td>Residuos municipales</td><td>Parrillas y lecho fluidizado</td></tr>
<tr><td>Residuos industriales sólidos</td><td>Parrillas, lecho fluidizado y <b>rotatorios</b> (muy adecuados para residuos peligrosos); también cocombustión con combustibles sólidos</td></tr>
<tr><td>Residuos líquidos en recipientes</td><td>Hornos rotatorios</td></tr>
<tr><td>Residuos industriales líquidos</td><td>Quemadores industriales, como los combustibles líquidos</td></tr>
</tbody></table>
<p>La biomasa necesita un <b>pretratamiento</b>, generalmente troceado y secado hasta una humedad <b>&lt; 10 %</b> para combustión industrial y <b>&lt; 30 %</b> para combustión doméstica. A veces se compacta en <b>pellets</b>.</p>
<h4>Generación de energía eléctrica</h4>
<table class="tbl cmp"><thead><tr><th>Sistema</th><th>Intervalo de potencia</th></tr></thead><tbody>
<tr><td>Turbina de vapor, ciclo Rankine</td><td>500 kWe - 500 MWe</td></tr>
<tr><td>Turbina de vapor, ciclo ORC</td><td>400 kWe - 1,5 MWe</td></tr>
<tr><td>Máquina de vapor</td><td>25 kWe - 1,5 MWe</td></tr>
<tr><td>Motor Stirling (ciclo Stirling)</td><td>1 kWe - 100 kWe</td></tr>
<tr><td>Turbina de gas en ciclo cerrado (aire, hidrógeno o helio)</td><td>500 kWe - 500 MWe</td></tr>
</tbody></table>
<p>La diap. 10 muestra una caldera de parrilla con motor de vapor de tornillo (<i>screw-type engine</i>): vapor saturado a 26 bar y 225 ºC, recalentado a 25 bar y 255 ºC, y red de calor con impulsión a 80-110 ºC y retorno a 50-60 ºC.</p>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> ORC significa <i>Organic Rankine Cycle</i>: un ciclo Rankine que usa un fluido orgánico en lugar de agua, adecuado para potencias pequeñas y fuentes de menor temperatura.</div>
<p>En las parrillas (tipos <b>Martin</b>, de barras móviles y fijas, y <b>Düsseldorf</b>, de rodillos) y en los lechos fluidizados hay que controlar la <b>formación de NO<sub>x</sub></b>, la <b>depuración de gases</b> (ciclón, refrigerante de gases, filtro de mangas) y las <b>escorias</b> (diap. 11).</p>
<h4>Dos casos en España: Soria y Briviesca</h4>
<p><b>District heating de Soria</b>, el más extenso de España (diap. 12): edificio de más de 800 m² con <b>3 líneas</b>; cada una con una <b>caldera de parrilla fija de 6 MW</b> (dos entradas de aire secundario y una de primario, <b>rendimiento 85 %</b>). Depuración: <b>ciclón + filtro de mangas</b>. Genera unos <b>45·10⁶ kWh/año</b> para unos <b>8.000 clientes</b> (ampliación prevista a 16.000). Quema astillas con un <b>15 % de humedad</b>; consumo de <b>16.000 t/año</b>; almacenamiento de 150 t; 2 depósitos de inercia de 50.000 L y uno de 5.000 L; el agua llega al consumidor más alejado a <b>75-80 ºC</b>.</p>
<p><b>Briviesca</b> (Acciona, diap. 13): almacén de paja → desmenuzadora → <b>parrilla vibratoria</b> → caldera (economizador, calderín, sobrecalentador; paredes con agua circulante) → turbina de vapor y generador (transformador 11/45 kV) → condensador y torre de refrigeración. Gases: precalentador de aire, <b>filtro de mangas</b> y chimenea.</p>
<h4>Incineración de residuos municipales</h4>
<p>Una incineradora de RSU tiene recepción de camiones, foso de residuos, horno, caldera (electricidad/calor), tratamiento de gases, filtro de mangas, ventilador de tiro y chimenea (diap. 14). En el <b>horno de parrillas</b> (diap. 15):</p>
<ul>
<li><b>Parrillas metálicas</b> refrigeradas por aire o agua e <b>inclinadas unos 25º</b>, que transportan los residuos por el horno.</li>
<li>Gases en la cámara de combustión a <b>&gt; 850 ºC</b> durante <b>2 s</b>, con velocidad de 3,5-4 m/s; aire primario inyectado a 10-15 m/s (≈ 140 ºC) y aire secundario.</li>
<li><b>Quemadores auxiliares</b> (gas natural y gasóleo) para alcanzar la temperatura mínima a la que la combustión se vuelve autosuficiente (<b>850 ºC</b>).</li>
<li>Control de temperatura por <b>infrarrojos</b>; gases de escape a <b>160-220 ºC</b>.</li>
</ul>
<p>Plantas de valorización energética de residuos municipales en España (diap. 16): Cataluña (más plantas: San Adrián, Mataró, Gerona y Tarragona; ~690.000 t/a, 86 MW), Valdemingómez-Madrid (~240.000 t/a, 29 MWe), Meruelo-Cantabria (~115.000 t/a, 10,5 MWe), Cerceda-Galicia (~500.000 t/a, 50 MWe), Palma de Mallorca (~660.000 t/a, 80 MWe), Zabalgarbi-Bilbao (~230.000 t/a, 94 MWe) y Melilla (~36.000 t/a, 2,7 MWe). Capacidad <b>mundial ≈ 350·10⁶ t/a</b>; <b>España ≈ 2,4·10⁶ t/a</b>.</p>
<h4>Horno rotatorio y boquillas para líquidos</h4>
<p><b>Incinerador rotatorio</b> (diap. 17): longitud <b>8-20 m</b>, diámetro <b>1-5 m</b>, capacidad <b>0,1-20 t/h</b>, temperatura <b>500-1450 ºC</b> y tiempo de residencia <b>30-90 minutos</b>. En el esquema, el incinerador trabaja a 1093-1427 ºC, los gases salen de la caldera a 315 ºC y pasan por dos lavadores (el segundo con NaOH) hasta 85 ºC.</p>
<p>Los combustibles o residuos líquidos se inyectan con <b>boquillas de presión</b> o <b>boquillas de mezcla</b> (atomizadores de mezcla externa o interna con un fluido de atomización) (diap. 18).</p>
` },
    { id: "b2-gasificacion", title: "3. Gasificación", slides: ["B2", 19, 24], html: `
<h4>Definición y agente gasificante</h4>
<p><b>Gasificación</b> = oxidación parcial en <b>condiciones subestequiométricas</b> (diap. 19). El agente gasificante aporta el oxígeno y determina el poder calorífico del gas:</p>
<table class="tbl cmp"><thead><tr><th>Agente gasificante</th><th>Poder calorífico del gas</th></tr></thead><tbody>
<tr><td>Aire</td><td>4-7 MJ/Nm³</td></tr>
<tr><td>Oxígeno</td><td>10-20 MJ/Nm³</td></tr>
<tr><td>Aire u oxígeno + vapor de agua</td><td>15-20 MJ/Nm³</td></tr>
</tbody></table>
<p>Se gasifican residuos urbanos, lodos, biomasa vegetal, carbón, alquitranes y residuos industriales. Salen <b>escorias</b> del gasificador; tras el <b>tratamiento</b> del gas se obtiene electricidad + calor, productos para la industria química o combustible, y quedan efluentes líquidos y residuos.</p>
<h4>Reacciones de gasificación</h4>
<p>Se producen múltiples reacciones simultáneas (diap. 20):</p>
<table class="tbl"><thead><tr><th>Reacción</th><th>Ecuación</th><th>ΔH° (kJ/mol)</th></tr></thead><tbody>
<tr><td colspan="3"><b>Exotérmicas</b></td></tr>
<tr><td>Combustión completa</td><td>$\\mathrm{C + O_{2} \\rightarrow  CO_{2}}$</td><td>−393,8</td></tr>
<tr><td>Combustión incompleta</td><td>$\\mathrm{C + \\tfrac12\\, O_{2} \\rightarrow  CO}$</td><td>−123,1</td></tr>
<tr><td>Metanización</td><td>$\\mathrm{C + 2\\,H_{2} \\rightarrow  CH_{4}}$</td><td>−87,5</td></tr>
<tr><td><i>Water-gas shift</i></td><td>$\\mathrm{CO + H_{2}O \\rightarrow  H_{2} + CO_{2}}$</td><td>−40,9</td></tr>
<tr><td colspan="3"><b>Endotérmicas</b></td></tr>
<tr><td>Boudouard</td><td>$\\mathrm{C + CO_{2} \\rightarrow  2\\,CO}$</td><td>+159,9</td></tr>
<tr><td><i>Water-gas</i></td><td>$\\mathrm{C + H_{2}O \\rightarrow  H_{2} + CO}$</td><td>+118,5</td></tr>
<tr><td>Reformado (con vapor)</td><td>$\\mathrm{C_{n}H_{m} + n\\,H_{2}O \\rightarrow  n\\,CO + (n + m/2)\\,H_{2}}$</td><td>&gt; 0</td></tr>
<tr><td>Reformado seco</td><td>$\\mathrm{C_{n}H_{m} + n\\,CO_{2} \\rightarrow  2n\\,CO + (m/2)\\,H_{2}}$</td><td>&gt; 0</td></tr>
</tbody></table>
<h4>Alquitranes y acondicionamiento del gas</h4>
<p><b>Alquitranes (<i>tar</i>)</b>: compuestos orgánicos que van desde hidrocarburos de bajo peso molecular hasta <b>hidrocarburos aromáticos policíclicos (HAP)</b> de alto peso molecular (diap. 21). Según Devi et al. (2005), la biomasa da alquitranes <b>primarios</b> (muy rápido, baja temperatura), <b>secundarios</b> y <b>terciarios</b> (lento, alta temperatura).</p>
<ul><li><b>Efectos</b>: afectan a las líneas de combustible y a los inyectores de los motores, condensan en compresores y sistemas de limpieza e imposibilitan el uso del gas en ciertas aplicaciones.</li>
<li><b>Acondicionamiento</b>: eliminación de partículas (filtros, ciclones, lavadores), <b>craqueo térmico (T &gt; 1100 ºC)</b> y catalizadores.</li></ul>
<h4>Tipos de gasificadores</h4>
<table class="tbl cmp"><thead><tr><th>Gasificador</th><th>Características (diap. 22)</th></tr></thead><tbody>
<tr><td>Lecho fijo <i>up draft</i> (contracorriente)</td><td>El aire entra por abajo y el gas sale por arriba; zonas de arriba abajo: secado, pirólisis, reducción y oxidación</td></tr>
<tr><td>Lecho fijo <i>down draft</i> (corrientes paralelas)</td><td>El aire entra a media altura y el gas sale por abajo; zonas: secado, pirólisis, oxidación y reducción</td></tr>
<tr><td>Lecho fijo <i>cross draft</i> (flujo cruzado)</td><td>El aire entra por un lateral y el gas sale por el lado opuesto</td></tr>
<tr><td>Lecho fluidizado burbujeante</td><td>Lecho de arena fluidizado por el medio de fluidización; ciclón para cenizas volantes</td></tr>
<tr><td>Gasificador rotatorio</td><td>Secado, precalentamiento, desvolatilización y gasificación a lo largo del tambor; agente gasificante a contracorriente</td></tr>
</tbody></table>
<p>La diap. 23 muestra una <b>instalación de gasificación de lodos</b> planteada para un estudio de viabilidad: lodo deshidratado → <b>secado térmico</b> → gasificador (con silo de arena y dolomía) → ciclón → intercambiador → <b>lavado de gases</b> → <b>motores de combustión interna</b> con generador; antorcha, sistema de recuperación de calor (el vapor vuelve al secado) y chimenea.</p>
<h4>Gasificación por plasma</h4>
<p><b>Plasma</b> = gasificación a temperaturas muy elevadas (<b>3000-20000 ºC</b>) logradas convirtiendo <b>energía eléctrica en calor</b>; el plasma es una fuente de especies reactivas a partir de un gas (diap. 24). Admite desechos industriales, comerciales, domésticos y médicos, biomasa y neumáticos; con antorchas de plasma y aire u oxígeno se obtienen gas (a depuración y aprovechamiento) y escoria y metales recuperados (proceso Westinghouse).</p>
` },
    { id: "b2-pirolisis", title: "4. Pirólisis", slides: ["B2", 25, 27], html: `
<h4>Definición</h4>
<p><b>Pirólisis</b> = descomposición por calor (<b>&gt; 400 ºC</b>) <b>en ausencia de oxígeno</b>, con recuperación de energía y/o materia y depuración de los gases producidos (diap. 25). En el esquema de la diap. 25 (documento BREF de incineración, 2006), el residuo triturado pasa por un tambor calentado indirectamente; el gas de pirólisis se filtra en caliente y se quema con gas natural en un generador de vapor (turbina, lavador y filtro), y se separan inertes, metales y <b>coque de pirólisis</b>.</p>
<h4>Pirólisis rápida y lenta</h4>
<table class="tbl cmp"><thead><tr><th>Tipo</th><th>Condiciones</th><th>Productos</th></tr></thead><tbody>
<tr><td>Pirólisis rápida (la mayor parte de las instalaciones)</td><td>Segundos, ≈ 700 ºC</td><td>Coque 20 %, gas 20 %, <b>líquido 60 %</b> (por condensación)</td></tr>
<tr><td>Pirólisis lenta = <b>carbonización</b></td><td>Horas, ≈ 400 ºC</td><td><b>Coque 80 %</b>, gases 20 %</td></tr>
</tbody></table>
<p>En la pirólisis rápida el material debe estar <b>molido</b>: secado a <b>&lt; 10 %</b> de humedad, molienda a <b>&lt; 3 mm</b> y reactor (en el esquema, 500 ºC y &lt; 2 s) de lecho fluidizado burbujeante o circulante, cono rotatorio ablativo, tornillo Auger o flujo laminar; tras la condensación se separan gas, líquido y carbón (diap. 26).</p>
<h4>Productos y usos</h4>
<table class="tbl cmp"><thead><tr><th>Producto</th><th>Usos (diap. 27)</th></tr></thead><tbody>
<tr><td>Carbón (coque, carbón vegetal)</td><td>Uso doméstico (barbacoas, cocinas), adsorbente, productos químicos y colorantes (negro de humo), metalurgia</td></tr>
<tr><td>Líquido orgánico (alquitrán)</td><td>Combustión (con problemas), alimentación (aromáticos), producción de combustibles líquidos</td></tr>
<tr><td>Gas</td><td>Combustión, productos químicos</td></tr>
</tbody></table>
<p>Composición aproximada del gas de pirólisis: <b>48 % CO</b>, <b>20 % H<sub>2</sub></b>, 6,5 % CO<sub>2</sub>, <b>13 % CH<sub>4</sub></b> y 6 % hidrocarburos insaturados; <b>PCI ≈ 4500 kcal/Nm³</b>. Los productos se obtienen en proporciones variables según la materia prima y el proceso.</p>
` },
    { id: "b2-emisiones", title: "5. Emisiones: valorización, coincineración e incineración", slides: ["B2", 28, 34], html: `
<h4>Ámbito del RD 815/2013 y criterio de valorización</h4>
<p>El <b>Real Decreto 815/2013</b> de emisiones industriales (modificado por el RD 773/2017) se aplica a (diap. 28):</p>
<ul><li>Instalaciones de combustión con potencia térmica nominal total <b>≥ 50 MW</b>.</li>
<li>Instalaciones de gasificación y licuefacción de carbón y otros combustibles con potencia <b>≥ 20 MW</b>.</li>
<li>Instalaciones de valorización o eliminación de residuos en plantas de incineración o coincineración.</li></ul>
<p>Según la <b>Ley 7/2022</b>, la incineración de residuos domésticos solo se considera <b>valorización</b> si su eficiencia energética es ≥ <b>0,60</b> (instalaciones en funcionamiento y autorizadas antes del 1 de enero de 2009) o ≥ <b>0,65</b> (autorizadas después del 31 de diciembre de 2008):</p>
<div class="formula">$$\\text{Eficiencia energética}=\\frac{E_p-(E_f+E_i)}{0{,}97\\,(E_w+E_f)}$$</div>
<ul><li><b>$E_p$</b>: energía anual producida como calor o electricidad, $E_p=2{,}6\\cdot\\text{electricidad}+1{,}1\\cdot\\text{calor para usos comerciales}$ (GJ/año).</li>
<li><b>$E_f$</b>: aportación anual de energía de los combustibles que contribuyen a producir vapor (GJ/año).</li>
<li><b>$E_w$</b>: energía anual contenida en los residuos, con su <b>poder calorífico neto</b> (GJ/año).</li>
<li><b>$E_i$</b>: energía anual importada, excluyendo $E_w$ y $E_f$ (GJ/año).</li>
<li><b>0,97</b>: pérdidas de energía por cenizas de fondo y radiación.</li></ul>
<h4>Límites en la coincineración de residuos</h4>
<p>Valores medios diarios (mg/Nm³) con <b>O<sub>2</sub> = 6 %</b>, condiciones normales 273,15 K y 101,3 kPa (diap. 29-30):</p>
<table class="tbl"><thead><tr><th>Contaminante</th><th>&lt; 50 MWth</th><th>50-100 MWth</th><th>100-300 MWth</th><th>&gt; 300 MWth</th></tr></thead><tbody>
<tr><td colspan="5"><b>Combustible biomasa</b> (diap. 29)</td></tr>
<tr><td>SO<sub>2</sub></td><td>-</td><td>200</td><td>200</td><td>200</td></tr>
<tr><td>NO<sub>x</sub></td><td>-</td><td>350</td><td>300</td><td>200</td></tr>
<tr><td>Partículas</td><td>50</td><td>50</td><td>30</td><td>30</td></tr>
<tr><td colspan="5"><b>Combustible sólido excepto biomasa</b> (diap. 30)</td></tr>
<tr><td>SO<sub>2</sub></td><td>-</td><td>850</td><td>200</td><td>200</td></tr>
<tr><td>NO<sub>x</sub></td><td>-</td><td>400</td><td>200</td><td>200</td></tr>
<tr><td>Partículas</td><td>50</td><td>50</td><td>30</td><td>30</td></tr>
<tr><td colspan="5"><b>Comunes a ambos</b></td></tr>
<tr><td>Cd + Tl / Hg</td><td colspan="4">0,05 / 0,05 (muestreo de 30 min a 8 h)</td></tr>
<tr><td>Sb + As + Pb + Cr + Co + Cu + Mn + Ni + V</td><td colspan="4">0,5 (muestreo de 30 min a 8 h)</td></tr>
<tr><td>Dioxinas y furanos</td><td colspan="4">0,1 (muestreo de 6 a 8 h)</td></tr>
</tbody></table>
<p>La tabla de combustibles sólidos vale para los <b>líquidos</b>, salvo el SO<sub>2</sub> entre 100 y 300 MWth (de 400 a 200, disminución lineal) y con <b>O<sub>2</sub> = 3 %</b>.</p>
<h4>Límites en la incineración de residuos</h4>
<p>Con <b>O<sub>2</sub> = 11 %</b> (diap. 31):</p>
<table class="tbl"><thead><tr><th>Compuesto</th><th>Unidades</th><th>Media de ½ h</th><th>Media de 24 h</th></tr></thead><tbody>
<tr><td>Partículas totales</td><td>mg/Nm³</td><td>30</td><td>10</td></tr>
<tr><td>CO</td><td>mg/Nm³</td><td>100</td><td>50</td></tr>
<tr><td>COT</td><td>mg/Nm³</td><td>20</td><td>10</td></tr>
<tr><td>HCl</td><td>mg/Nm³</td><td>60</td><td>10</td></tr>
<tr><td>HF</td><td>mg/Nm³</td><td>4</td><td>1</td></tr>
<tr><td>SO<sub>2</sub></td><td>mg/Nm³</td><td>200</td><td>50</td></tr>
<tr><td>NO<sub>x</sub> como NO<sub>2</sub></td><td>mg/Nm³</td><td>400</td><td>400</td></tr>
<tr><td>PCDD y PCDF</td><td>ng TEQ/Nm³</td><td colspan="2">0,1 (discontinuo)</td></tr>
<tr><td>Hg / Cd + Tl</td><td>mg/Nm³</td><td colspan="2">0,05 / 0,05 (discontinuo)</td></tr>
<tr><td>As+Co+Cr+Cu+Mn+Ni+Pb+Sb+V</td><td>mg/Nm³</td><td colspan="2">0,005-0,5 (discontinuo)</td></tr>
</tbody></table>
<h4>Corrección por oxígeno y equivalencia tóxica</h4>
<p>La concentración medida se refiere al oxígeno de referencia antes de compararla con el límite (diap. 32):</p>
<div class="formula">$$E_s=\\frac{21-O_s}{21-O_m}\\,E_m$$</div>
<p><b>$E_s$</b>: concentración corregida (gas seco, condiciones normales, O<sub>2</sub> de referencia); <b>$E_m$</b>: concentración medida (gas seco, condiciones normales); <b>$O_s$</b>: oxígeno de <b>referencia</b> (% vol.); <b>$O_m$</b>: oxígeno <b>medido</b> (% vol., gas seco). Se expresan en mg/m³ (ng/m³ para dioxinas y furanos). Si O<sub>m</sub> &gt; O<sub>s</sub>, el gas está diluido y E<sub>s</sub> &gt; E<sub>m</sub>.</p>
<p>Las dioxinas y furanos se expresan como equivalente tóxico multiplicando cada congénere por su <b>factor de equivalencia</b> (diap. 33): <b>2,3,7,8-TCDD = 1</b>; 1,2,3,7,8-PeCDD = 0,5; HxCDD = 0,1; HpCDD = 0,01; <b>OCDD = 0,001</b>; 2,3,7,8-TCDF = 0,1; 2,3,4,7,8-PeCDF = 0,5; 1,2,3,7,8-PeCDF = 0,05; HxCDF = 0,1; HpCDF = 0,01; OCDF = 0,001.</p>
<h4>Aguas residuales de la depuración de gases</h4>
<p>Límites en el agua de depuración de gases de las incineradoras (diap. 34, mg/L): SST 35 (95 %) - 40 (100 %); <b>Hg 0,03</b>; Cd 0,05; Tl 0,05; As 0,15; Pb 0,2; Cr 0,5; Cu 0,5; Ni 0,5; <b>Zn 1,5</b>; dioxinas y furanos <b>0,3 ng/L</b>.</p>
` },
    { id: "b2-limites", title: "6. Límites para instalaciones de combustión y ecodiseño", slides: ["B2", 35, 37], html: `
<h4>Grandes instalaciones de combustión</h4>
<p>Valores límite (mg/Nm³) con <b>O<sub>2</sub> = 6 %</b> (sólidos), <b>3 %</b> (líquidos y gases, salvo turbinas y motores de gas) y <b>15 %</b> (turbinas y motores de gas); la potencia es la <b>térmica nominal</b> (diap. 35):</p>
<table class="tbl"><thead><tr><th>Combustible</th><th>SO<sub>2</sub> 50-100 / 100-300 / &gt;300 MW</th><th>NO<sub>x</sub> 50-100 / 100-300 / &gt;300 MW</th><th>Partículas 50-100 / 100-300 / &gt;300 MW</th></tr></thead><tbody>
<tr><td>Hulla, lignito y resto</td><td>400 / 250 / 200</td><td>300 (450) / 200 / 200</td><td>30 / 25 / 20</td></tr>
<tr><td><b>Biomasa</b></td><td>200 / 200 / 200</td><td>300 / 250 / 250</td><td>30 / 20 / 20</td></tr>
<tr><td>Turba</td><td>300 / 300 / 200</td><td>300 / 250 / 250</td><td>30 / 20 / 20</td></tr>
<tr><td>C. líquidos</td><td>350 / 250 / 200</td><td>450 / 200 / 150</td><td>30 / 25 / 20</td></tr>
<tr><td>Gas natural</td><td>35</td><td>100</td><td>5 (CO 100)</td></tr>
<tr><td>Gas licuado</td><td>5</td><td>100</td><td>5 (CO 100)</td></tr>
<tr><td>Gas de horno de coque / de alto horno</td><td>400 / 200</td><td>200 / 200</td><td>- / 10-30</td></tr>
<tr><td>Turbinas / motores de gas</td><td>-</td><td>120 / 100</td><td>- (CO 100)</td></tr>
</tbody></table>
<h4>Instalaciones medianas (RD 1042/2017)</h4>
<p>Instalaciones de combustión con potencia térmica nominal total <b>≥ 1 MW y &lt; 50 MW</b> (diap. 36). Mismas referencias de O<sub>2</sub> (6 %, 3 % y 15 %). Valores para instalaciones <b>nuevas</b> que no sean motores ni turbinas de gas (mg/Nm³):</p>
<table class="tbl"><thead><tr><th>Combustible</th><th>SO<sub>2</sub></th><th>NO<sub>x</sub></th><th>Partículas</th></tr></thead><tbody>
<tr><td>Biomasa sólida</td><td>200 (1)</td><td>300 (2)</td><td>20 (3)</td></tr>
<tr><td>Otros combustibles sólidos</td><td>400</td><td>300 (2)</td><td>20 (3)</td></tr>
<tr><td>Gasóleo</td><td>-</td><td>200</td><td>-</td></tr>
<tr><td>Otros combustibles líquidos</td><td>350</td><td>300</td><td>20</td></tr>
<tr><td>Gas natural</td><td>-</td><td>100</td><td>-</td></tr>
<tr><td>Otros combustibles gaseosos</td><td>35</td><td>200</td><td>-</td></tr>
</tbody></table>
<p>(1) No se aplica si se quema <b>exclusivamente biomasa sólida leñosa</b>. (2) <b>500 mg/Nm³</b> entre 1 y 5 MW. (3) <b>50 mg/Nm³</b> entre 1 y 5 MW y <b>30 mg/Nm³</b> entre 5 y 20 MW.</p>
<p>Motores (M) y turbinas (T) de gas nuevos: gasóleo NO<sub>x</sub> 190 (M) / 75 (T); otros líquidos SO<sub>2</sub> 120, NO<sub>x</sub> 190 (M) / 75 (T), partículas 10; gas natural NO<sub>x</sub> 95 (M) / 70 (T); otros gaseosos SO<sub>2</sub> 15 (40 en el caso de biogás), NO<sub>x</sub> 190 (M) / 75 (T).</p>
<h4>Ecodiseño de calderas y aparatos de calefacción local</h4>
<p><b>Reglamento 2015/1189</b>: calderas de combustibles sólidos de <b>≤ 500 kW</b> (desde enero de 2020), <b>O<sub>2</sub> = 10 %</b>. <b>Reglamento 2015/1185</b>: aparatos de calefacción local de <b>≤ 50 kW</b> (desde enero de 2022), <b>O<sub>2</sub> = 13 %</b> (diap. 37).</p>
<table class="tbl"><thead><tr><th>Equipo</th><th>CO</th><th>NO<sub>x</sub></th><th>COV</th><th>Partículas</th></tr></thead><tbody>
<tr><td colspan="5"><b>Calderas ≤ 500 kW</b> (2015/1189)</td></tr>
<tr><td>Automáticos</td><td>500</td><td>200</td><td>20</td><td>40</td></tr>
<tr><td>Manuales</td><td>700</td><td>200</td><td>30</td><td>60</td></tr>
<tr><td colspan="5"><b>Calefacción local ≤ 50 kW</b> (2015/1185)</td></tr>
<tr><td>Abierto</td><td>2000</td><td>200</td><td>120</td><td>50</td></tr>
<tr><td>Cerrado (estufa)</td><td>1500</td><td>200</td><td>120</td><td>40</td></tr>
<tr><td>Cerrado (estufa de pellets)</td><td>300</td><td>200</td><td>60</td><td>20</td></tr>
<tr><td>Cocina</td><td>1500</td><td>200</td><td>120</td><td>40</td></tr>
</tbody></table>
<p>En calefacción local, el límite de NO<sub>x</sub> es <b>300 mg/Nm³</b> con combustibles fósiles. Se excluyen, entre otros, las calderas de <b>biomasa no leñosa</b> o las que solo calientan agua potable o sanitaria, y los aparatos de biomasa no leñosa o para uso exclusivo en exteriores.</p>
` },
    { id: "b2-biocarburantes", title: "7. Biocarburantes: bioetanol y biodiésel", slides: ["B2", 38, 39], html: `
<h4>Rutas de obtención de bioetanol</h4>
<table class="tbl cmp"><thead><tr><th>Materia prima</th><th>Generación</th><th>Pretratamiento</th></tr></thead><tbody>
<tr><td>Biomasa azucarada (azúcar, uva)</td><td>Primera</td><td>Extracción por presión o difusión</td></tr>
<tr><td>Biomasa amilácea (trigo, maíz, cebada)</td><td>Primera</td><td>Trituración + <b>hidrólisis enzimática</b></td></tr>
<tr><td>Biomasa lignocelulósica (troncos, raíces, tallos, frutos, residuos)</td><td>Segunda</td><td>Trituración + <b>hidrólisis ácida o enzimática</b></td></tr>
</tbody></table>
<p>Las tres rutas convergen en una <b>solución azucarada fermentable</b> → <b>fermentación</b> → <b>destilación</b> → <b>bioetanol</b>. De la destilación salen los <b>DDGS</b> (<i>Dried Distillers Grains with Solubles</i>), destinados a la <b>alimentación del ganado</b>, y las <b>vinazas</b>, que van a depuración y reciclado (diap. 38).</p>
<h4>Obtención de biodiésel</h4>
<p>Generaciones (diap. 39): <b>primera</b>, plantas comestibles y grasas animales; <b>segunda</b>, plantas no comestibles y residuos; <b>tercera</b>, algas.</p>
<p>Materia prima por tonelada de biodiésel: palma de aceite ≈ <b>5,9 t</b>, jatropha ≈ <b>4,2 t</b>, sebo animal ≈ 1 t y aceite usado ≈ 1 t. De palma y jatropha se obtiene el aceite primario por <b>prensado mecánico o con disolventes</b> (subproducto: torta fibrosa para ganado); sebo y aceite usado solo requieren preparación.</p>
<ul><li>Aceites con <b>FFA &lt; 5 %</b> pasan directamente a <b>transesterificación</b> (catalizador básico y metanol).</li>
<li>Con <b>FFA &gt; 5 %</b> se hace antes una <b>esterificación</b> con catalizador ácido y metanol (sale agua química).</li>
<li>Los <b>metilésteres</b> se lavan con agua (sale glicerina y jabón), se deshidratan y se destilan (se recupera metanol) → <b>biodiésel</b>.</li>
<li>La <b>glicerina</b> se refina (con hidróxido de sodio u otros) y se desmetanoliza → glicerina refinada.</li></ul>
<div class="formula">$$\\underbrace{\\text{Triglicérido}}_{100\\ \\text{kg}}+\\underbrace{3\\,\\text{CH}_3\\text{OH}}_{11\\ \\text{kg}}\\rightleftarrows\\underbrace{3\\ \\text{metiléster}}_{100\\ \\text{kg}}+\\underbrace{\\text{glicerina}}_{11\\ \\text{kg}}$$</div>
` },
    { id: "b2-problemas", title: "8. Problemas resueltos", slides: ["P1", 1, 7], html: `
<p>Solución modelo de los tres problemas de combustión y biogás de la colección (Enunciados_Problemas_FE y Resolución P1, P2 y P3), paso a paso y con los resultados de la resolución oficial. Datos comunes: masas atómicas C = 12, H = 1, O = 16, N = 14 y S = 32 g/mol; el aire es 21 % de O<sub>2</sub> y 79 % de N<sub>2</sub> en volumen (79/21 = 3,76 mol de N<sub>2</sub> por mol de O<sub>2</sub>); en condiciones normales 1 mol de gas ocupa 22,4 L. Al final de cada problema se indican las erratas de la resolución oficial.</p>
<h4>Problema 1: balance de un horno de incineración</h4>
<p><b>Enunciado</b>: se incineran <b>6000 kg/h</b> de un residuo con <b>70 % de humedad</b> (base húmeda); la materia no combustible es el <b>43 %</b> de la materia seca. Materia seca combustible (MSC): C 64,3 %, H 8,2 %, S 2,2 %, O 21,0 % y N 4,3 %. Calor latente del agua: 550 kcal/kg. Se pide (a) el balance de materia con combustión estequiométrica con aire (C, S y H dan solo CO<sub>2</sub>, SO<sub>2</sub> y H<sub>2</sub>O; el N del aire y el del residuo salen como N<sub>2</sub>; los inquemados salen como escorias), (b) el PCS de la fracción combustible y (c) el PCS y el PCI del residuo.</p>
<p><b>Planteamiento</b> (P1, diap. 2): el horno es un sistema en régimen permanente, así que la masa que entra por hora es la que sale. Entran el residuo (E1) y el aire (E2); salen las escorias (S1), los gases de combustión (S2) y la humedad vaporizada (S3):</p>
<div class="formula">$$\\underbrace{E_1}_{\\text{residuo}}+\\underbrace{E_2}_{\\text{aire}}=\\underbrace{S_1}_{\\text{escorias}}+\\underbrace{S_2}_{\\text{gases}}+\\underbrace{S_3}_{\\text{humedad}}$$</div>
<p><b>(a.1) Reparto del residuo (E1)</b> (P1, diap. 2). Primero se quita la humedad y después se separa la materia no combustible de la materia seca:</p>
<div class="formula">$$\\dot m_{\\text{seco}}=6000\\,(1-0{,}70)=1800\\ \\text{kg/h}$$</div>
<div class="formula">$$\\dot m_{\\text{MSC}}=1800\\,(1-0{,}43)=1026\\ \\text{kg/h}$$ $$ \\dot m_{\\text{inertes}}=1800\\cdot0{,}43=774\\ \\text{kg/h}$$</div>
<table class="tbl"><thead><tr><th>Fracción del residuo (E1)</th><th>Cálculo</th><th>kg/h</th><th>Destino</th></tr></thead><tbody>
<tr><td>Humedad</td><td>$6000\\cdot0{,}70$</td><td>4200</td><td>Se vaporiza (S3)</td></tr>
<tr><td>Materia seca combustible</td><td>$6000\\cdot0{,}30\\cdot0{,}57$</td><td>1026</td><td>Se quema con el aire (S2)</td></tr>
<tr><td>Materia no combustible</td><td>$6000\\cdot0{,}30\\cdot0{,}43$</td><td>774</td><td>Escorias (S1)</td></tr>
<tr><td><b>Total</b></td><td></td><td><b>6000</b></td><td></td></tr>
</tbody></table>
<p><b>(a.2) Fórmula empírica de la MSC</b> (P1, diap. 3). En 100 g de MSC hay tantos gramos de cada elemento como su porcentaje; se pasan a moles y se dividen por los del elemento menos abundante (el S), redondeando al entero superior:</p>
<table class="tbl"><thead><tr><th>Elemento</th><th>g en 100 g</th><th>M (g/mol)</th><th>mol en 100 g</th><th>÷ 0,06875</th><th>Átomos</th></tr></thead><tbody>
<tr><td>C</td><td>64,3</td><td>12</td><td>5,35833</td><td>77,9</td><td>78</td></tr>
<tr><td>H</td><td>8,2</td><td>1</td><td>8,2</td><td>119,3</td><td>120</td></tr>
<tr><td>S</td><td>2,2</td><td>32</td><td>0,06875</td><td>1</td><td>1</td></tr>
<tr><td>O</td><td>21,0</td><td>16</td><td>1,3125</td><td>19,1</td><td>20</td></tr>
<tr><td>N</td><td>4,3</td><td>14</td><td>0,30714</td><td>4,5</td><td>5</td></tr>
</tbody></table>
<div class="formula">$$\\mathrm{C_{78}H_{120}O_{20}N_5S}$$ $$ M=78\\cdot12+120\\cdot1+20\\cdot16+5\\cdot14+1\\cdot32=\\mathbf{1478\\ g/mol}$$</div>
<p><b>(a.3) Reacción de combustión estequiométrica</b> (P1, diap. 3). El O<sub>2</sub> necesario por mol de combustible es el de los productos menos el oxígeno que ya trae el combustible (la misma regla $x+\\tfrac{y}{4}+z-\\tfrac{w}{2}$ de Apuntes B4, diap. 5):</p>
<div class="formula">$$n_{O_2}=\\underbrace{78}_{C\\to CO_2}+\\underbrace{\\tfrac{120}{4}}_{H\\to H_2O}+\\underbrace{1}_{S\\to SO_2}-\\underbrace{\\tfrac{20}{2}}_{\\text{O propio}}=99\\ \\text{mol}$$</div>
<div class="formula">$$\\mathrm{C_{78}H_{120}O_{20}N_5S}+99\\,\\mathrm{O_2}+\\tfrac{79}{21}\\,99\\,\\mathrm{N_2}\\rightarrow78\\,\\mathrm{CO_2}+60\\,\\mathrm{H_2O}+\\mathrm{SO_2}+\\left(\\tfrac{79}{21}\\,99+\\tfrac52\\right)\\mathrm{N_2}$$</div>
<p>El N<sub>2</sub> de los gases es el del aire (79/21 · 99 = 372,43 mol) más el del propio residuo (5 átomos de N = 5/2 mol de N<sub>2</sub>): 374,93 mol por mol de combustible.</p>
<p><b>(a.4) Aire estequiométrico (E2)</b> (P1, diap. 3). Caudal molar de combustible y masas de O<sub>2</sub> y N<sub>2</sub>:</p>
<div class="formula">$$\\dot n=\\frac{1026\\ \\text{kg/h}}{1478\\ \\text{kg/kmol}}=0{,}6942\\ \\text{kmol/h}$$</div>
<div class="formula">$$\\dot m_{O_2}=99\\cdot32\\cdot0{,}6942=2199\\ \\text{kg/h}$$ $$ \\dot m_{N_2}=\\tfrac{79}{21}\\cdot99\\cdot28\\cdot0{,}6942=7239\\ \\text{kg/h}$$</div>
<div class="formula">$$E_2=2199+7239=\\mathbf{9438\\ kg/h}$$ $$ E=E_1+E_2=6000+9438=\\mathbf{15.438\\ kg/h}$$</div>
<p><b>(a.5) Gases de combustión (S2)</b> (P1, diap. 5). Cada producto: kmol/h de combustible × coeficiente de la reacción × masa molar.</p>
<table class="tbl"><thead><tr><th>Gas</th><th>kmol por kmol de combustible</th><th>kmol/h</th><th>M (kg/kmol)</th><th>kg/h</th></tr></thead><tbody>
<tr><td>CO<sub>2</sub></td><td>78</td><td>54,15</td><td>44</td><td>2382,5</td></tr>
<tr><td>H<sub>2</sub>O (formada)</td><td>60</td><td>41,65</td><td>18</td><td>749,7</td></tr>
<tr><td>SO<sub>2</sub></td><td>1</td><td>0,694</td><td>64</td><td>44,4</td></tr>
<tr><td>N<sub>2</sub> (aire + residuo)</td><td>79/21 · 99 + 5/2 = 374,93</td><td>260,27</td><td>28</td><td>7287,7</td></tr>
<tr><td><b>S2</b></td><td></td><td></td><td></td><td><b>10.464</b></td></tr>
</tbody></table>
<p>Comprobación: los gases contienen exactamente la masa de la MSC más la del aire, $1026+9438=10.464$ kg/h.</p>
<p><b>(a.6) Escorias (S1) y humedad vaporizada (S3)</b> (P1, diap. 4-5):</p>
<div class="formula">$$S_1=6000\\,(1-0{,}7)\\cdot0{,}43=\\mathbf{774\\ kg/h}$$ $$ S_3=6000\\cdot0{,}7=\\mathbf{4200\\ kg/h}$$</div>
<p><b>Balance de materia global</b> (P1, diap. 5):</p>
<table class="tbl"><thead><tr><th>Entradas</th><th>kg/h</th><th>Salidas</th><th>kg/h</th></tr></thead><tbody>
<tr><td>E1 · residuo (4200 de agua + 1026 de MSC + 774 de inertes)</td><td>6000</td><td>S1 · escorias</td><td>774</td></tr>
<tr><td>E2 · aire (2199 de O<sub>2</sub> + 7239 de N<sub>2</sub>)</td><td>9438</td><td>S2 · gases (CO<sub>2</sub>, H<sub>2</sub>O, SO<sub>2</sub>, N<sub>2</sub>)</td><td>10.464</td></tr>
<tr><td></td><td></td><td>S3 · humedad vaporizada</td><td>4200</td></tr>
<tr><td><b>Total entradas</b></td><td><b>15.438</b></td><td><b>Total salidas</b></td><td><b>15.438</b></td></tr>
</tbody></table>
<p><b>(b) PCS de la fracción combustible</b> con la fórmula de Dulong modificada (P1, diap. 6), con C, H, O, S y N en % en masa de la MSC (suman 100 %):</p>
<div class="formula">$$PCS\\,(\\text{kcal/kg})=80{,}60\\,C+339{,}10\\left(H-\\frac{O}{8}\\right)+22{,}22\\,S+5{,}56\\,N$$</div>
<div class="formula">$$PCS=80{,}6\\cdot64{,}3+339{,}1\\left(8{,}2-\\frac{21}{8}\\right)+22{,}22\\cdot2{,}2+5{,}56\\cdot4{,}3$$</div>
<div class="formula">$$PCS=5182{,}6+1890{,}5+48{,}9+23{,}9=\\mathbf{7146\\ kcal/kg\\ de\\ MSC}$$</div>
<p>El término $H-O/8$ descuenta el hidrógeno que ya está unido al oxígeno del combustible (1 kg de O se combina con 1/8 kg de H para formar agua).</p>
<p><b>(c) PCS y PCI del residuo</b> (P1, diap. 7). El PCS se reduce con los mismos factores que la masa: la MSC es el 57 % de la materia seca y la materia seca el 30 % del residuo.</p>
<div class="formula">$$PCS_{\\text{m. seca}}=PCS_{\\text{MSC}}\\,(1-0{,}43)=7146\\cdot0{,}57=\\mathbf{4073\\ kcal/kg\\ de\\ materia\\ seca}$$</div>
<div class="formula">$$PCS_{\\text{residuo}}=PCS_{\\text{m. seca}}\\,(1-0{,}7)=4073\\cdot0{,}3=\\mathbf{1222\\ kcal/kg\\ de\\ residuo}$$</div>
<p>Siempre se cumple $PCS_{\\text{residuo}}\\lt PCS_{\\text{m. seca}}\\lt PCS_{\\text{MSC}}$. El PCI descuenta el calor latente de toda el agua que sale en los humos: la humedad del residuo y el agua formada al quemar el hidrógeno, ambas por kg de residuo.</p>
<div class="formula">$$\\frac{m_{H_2O\\,\\text{formada}}}{m_{\\text{residuo}}}=\\frac{0{,}6942\\cdot60\\cdot18}{6000}=\\frac{749{,}7}{6000}=0{,}125\\ \\text{kg/kg}$$</div>
<div class="formula">$$PCI=PCS-L_v\\,(w+m_{H_2O\\,\\text{formada}})=1222-550\\,(0{,}7+0{,}125)=\\mathbf{768\\ kcal/kg\\ de\\ residuo}$$</div>
<p><b>Erratas de la resolución oficial del problema 1</b></p>
<ul><li>Diap. 5, suma de S2: escribe «2.382,5 + 749,7 + <b>41,6</b> + 7.287,7 = 10.464», pero el SO<sub>2</sub> calculado justo encima es <b>44,4</b> kg/h; con 41,6 la suma daría 10.461,5. El total correcto, 10.464 kg/h, es el que corresponde a 44,4.</li>
<li>Diap. 5, línea del N<sub>2</sub>: escribe «[(<b>719</b>/21) · 99 + 5/2]»; debe ser <b>79/21</b>. El resultado (7.287,7 kg/h) sí está calculado con 79/21.</li>
<li>Diap. 3: dice que la fórmula química permite calcular la corriente de gases de combustión «(S3)»; los gases son <b>S2</b> (S3 es la humedad vaporizada).</li>
<li>Diap. 7: a la fórmula del PCI le falta cerrar un paréntesis, «PCI = PCS − L<sub>V</sub> (Humedad»; la expresión correcta es la de arriba.</li>
<li>Redondeos: «redondeando al entero superior» se aplica a todos los elementos (77,9 → 78, 119,3 → 120, 19,1 → 20, 4,5 → 5). Por ello la fórmula C<sub>78</sub>H<sub>120</sub>O<sub>20</sub>N<sub>5</sub>S no reproduce exactamente los porcentajes de partida (tiene un 63,3 % de C), pero el balance cierra porque el caudal molar se calcula con su propia masa molecular.</li></ul>
<h4>Problema 2: aire estequiométrico de la celulosa y masa molecular de los humos</h4>
<p><b>Enunciado</b>: calcular los kilos de aire estequiométrico necesarios para quemar 1 kg de celulosa, y el peso molecular medio de los gases de combustión cuando se quema con un <b>50 % de exceso de aire</b>. La resolución oficial tiene tres pasos: aire estequiométrico, masa molecular de los humos estequiométricos y masa molecular con exceso de aire.</p>
<p><b>Paso 1. Aire estequiométrico</b> (P2, diap. 2). Celulosa $\\mathrm{C_6H_{10}O_5}$: $M=6\\cdot12+10\\cdot1+5\\cdot16=162$ g/mol y $n_{O_2}=6+\\tfrac{10}{4}-\\tfrac{5}{2}=6$ mol.</p>
<div class="formula">$$\\mathrm{C_6H_{10}O_5}+6\\,\\mathrm{O_2}+\\tfrac{79}{21}\\,6\\,\\mathrm{N_2}\\rightarrow6\\,\\mathrm{CO_2}+5\\,\\mathrm{H_2O}+\\tfrac{79}{21}\\,6\\,\\mathrm{N_2}$$</div>
<div class="formula">$$m_{O_2}=6\\cdot32=192\\ \\text{g}$$ $$ m_{N_2}=\\tfrac{79}{21}\\cdot6\\cdot28=632\\ \\text{g}$$ $$ m_{\\text{aire}}=824\\ \\text{g por mol de celulosa}$$</div>
<div class="formula">$$\\frac{m_{\\text{aire}}}{m_{\\text{celulosa}}}=\\frac{824}{162}=\\mathbf{5{,}1\\ kg\\ de\\ aire/kg\\ de\\ celulosa}$$</div>
<p><b>Paso 2. Humos estequiométricos</b> (P2, diap. 3). Por mol de celulosa salen 6 mol de CO<sub>2</sub>, 5 de H<sub>2</sub>O y 79/21 · 6 = 22,57 de N<sub>2</sub> sin reaccionar: 33,57 mol. La masa molecular media es la media de las masas moleculares ponderada con las fracciones molares:</p>
<div class="formula">$$\\bar M=\\sum_i X_i\\,M_i=\\frac{\\sum_i n_i\\,M_i}{\\sum_i n_i}$$</div>
<table class="tbl"><thead><tr><th>Gas</th><th>n<sub>i</sub> (mol)</th><th>X<sub>i</sub> = n<sub>i</sub>/33,57</th><th>M<sub>i</sub> (g/mol)</th><th>X<sub>i</sub>·M<sub>i</sub></th></tr></thead><tbody>
<tr><td>CO<sub>2</sub></td><td>6</td><td>0,18</td><td>44</td><td>7,92</td></tr>
<tr><td>H<sub>2</sub>O</td><td>5</td><td>0,15</td><td>18</td><td>2,70</td></tr>
<tr><td>N<sub>2</sub></td><td>22,57</td><td>0,67</td><td>28</td><td>18,76</td></tr>
<tr><td><b>Total</b></td><td><b>33,57</b></td><td><b>1</b></td><td></td><td><b>29,38</b></td></tr>
</tbody></table>
<div class="formula">$$\\bar M_{\\text{esteq}}=0{,}18\\cdot44+0{,}15\\cdot18+0{,}67\\cdot28=\\mathbf{29{,}38\\ g/mol}$$</div>
<p><b>Paso 3. Humos con un 50 % de exceso de aire</b> (P2, diap. 4). A los 33,57 mol anteriores se suman el O<sub>2</sub> y el N<sub>2</sub> del exceso, que no reaccionan:</p>
<div class="formula">$$n_{O_2,\\,\\text{exceso}}=0{,}5\\cdot6=3\\ \\text{mol}$$ $$ n_{N_2,\\,\\text{exceso}}=0{,}5\\cdot6\\cdot\\tfrac{79}{21}=11{,}28\\ \\text{mol}\\ \\Rightarrow\\ n_{N_2}=22{,}57+11{,}28=33{,}85\\ \\text{mol}$$</div>
<table class="tbl"><thead><tr><th>Gas</th><th>n<sub>i</sub> (mol)</th><th>X<sub>i</sub> = n<sub>i</sub>/47,85</th><th>M<sub>i</sub> (g/mol)</th><th>X<sub>i</sub>·M<sub>i</sub></th></tr></thead><tbody>
<tr><td>CO<sub>2</sub></td><td>6</td><td>0,125</td><td>44</td><td>5,50</td></tr>
<tr><td>H<sub>2</sub>O</td><td>5</td><td>0,105</td><td>18</td><td>1,89</td></tr>
<tr><td>N<sub>2</sub></td><td>33,85</td><td>0,707</td><td>28</td><td>19,80</td></tr>
<tr><td>O<sub>2</sub></td><td>3</td><td>0,063</td><td>32</td><td>2,02</td></tr>
<tr><td><b>Total</b></td><td><b>47,85</b></td><td><b>1</b></td><td></td><td><b>29,21</b></td></tr>
</tbody></table>
<div class="formula">$$\\bar M_{50\\,\\%}=0{,}125\\cdot44+0{,}105\\cdot18+0{,}707\\cdot28+0{,}063\\cdot32=\\mathbf{29{,}21\\ g/mol}$$</div>
<p>La masa molecular baja ligeramente porque el exceso de aire (M ≈ 28,8 g/mol) diluye el CO<sub>2</sub>, que es el gas más pesado.</p>
<p><b>Erratas de la resolución oficial del problema 2</b>: no hay errores de planteamiento; solo redondeos. Con las fracciones molares redondeadas a dos cifras sale 29,38 g/mol, frente a 986/33,57 = 29,37 g/mol sin redondear; y 22,57 + 11,28 = 33,85 (33,86 sin redondear, 79/21 · 9 = 33,857). Los resultados oficiales, 5,1 kg/kg, 29,38 y 29,21 g/mol, no cambian a efectos prácticos.</p>
<h4>Problema 3: biogás teórico con la ecuación de Buswell</h4>
<p><b>Enunciado</b>: se dispone de 50.000 t/año de biomasa vegetal cuya materia volátil tiene C 50 %, H 8 %, O 35 %, N 6 % y S 1 %. Con la ecuación de Buswell, calcular (a) la composición teórica del biogás y (b) la producción específica de metano, si se biodegrada el <b>75 %</b> de la materia volátil.</p>
<p><b>(a.1) Fórmula empírica</b> (P3, diap. 1), con el mismo método que en el problema 1, dividiendo por los moles de S:</p>
<table class="tbl"><thead><tr><th>Elemento</th><th>g en 100 g</th><th>M (g/mol)</th><th>mol en 100 g</th><th>÷ 0,03125</th><th>Átomos</th></tr></thead><tbody>
<tr><td>C</td><td>50</td><td>12</td><td>4,1667</td><td>133,3</td><td>133</td></tr>
<tr><td>H</td><td>8</td><td>1</td><td>8</td><td>256</td><td>256</td></tr>
<tr><td>O</td><td>35</td><td>16</td><td>2,1875</td><td>70</td><td>70</td></tr>
<tr><td>N</td><td>6</td><td>14</td><td>0,4286</td><td>13,7</td><td>14</td></tr>
<tr><td>S</td><td>1</td><td>32</td><td>0,03125</td><td>1</td><td>1</td></tr>
</tbody></table>
<div class="formula">$$\\mathrm{C_{133}H_{256}O_{70}N_{14}S}$$ $$ M=133\\cdot12+256\\cdot1+70\\cdot16+14\\cdot14+1\\cdot32=\\mathbf{3200\\ g/mol}$$</div>
<p><b>(a.2) Ecuación de Buswell</b> (P3, diap. 2; forma general en Apuntes B3, diap. 14). Para $\\mathrm{C_cH_hO_oN_nS_s}$ los coeficientes son:</p>
<div class="formula">$$n_{H_2O}=c-\\tfrac{h}{4}-\\tfrac{o}{2}+\\tfrac{3n}{4}+\\tfrac{s}{2}=133-64-35+10{,}5+0{,}5=45$$</div>
<div class="formula">$$n_{CH_4}=\\tfrac{c}{2}+\\tfrac{h}{8}-\\tfrac{o}{4}-\\tfrac{3n}{8}-\\tfrac{s}{4}=66{,}5+32-17{,}5-5{,}25-0{,}25=75{,}5$$</div>
<div class="formula">$$n_{CO_2}=\\tfrac{c}{2}-\\tfrac{h}{8}+\\tfrac{o}{4}+\\tfrac{3n}{8}+\\tfrac{s}{4}=66{,}5-32+17{,}5+5{,}25+0{,}25=57{,}5$$</div>
<div class="formula">$$\\mathrm{C_{133}H_{256}O_{70}N_{14}S}+45\\,\\mathrm{H_2O}\\rightarrow57{,}5\\,\\mathrm{CO_2}+75{,}5\\,\\mathrm{CH_4}+14\\,\\mathrm{NH_3}+\\mathrm{H_2S}$$</div>
<p>Por cada mol de biomasa (3200 g) se forman, con 22,4 L/mol en condiciones normales (P3, diap. 2):</p>
<table class="tbl"><thead><tr><th>Compuesto</th><th>mol / mol de biomasa</th><th>Volumen (L, c.n.)</th><th>M (g/mol)</th><th>Masa (g)</th><th>Fracción en volumen Y<sub>i</sub></th><th>Fracción másica X<sub>i</sub></th></tr></thead><tbody>
<tr><td>CO<sub>2</sub></td><td>57,5</td><td>1288</td><td>44</td><td>2530</td><td>0,388</td><td>0,631</td></tr>
<tr><td>CH<sub>4</sub></td><td>75,5</td><td>1691,2</td><td>16</td><td>1208</td><td><b>0,51</b></td><td><b>0,301</b></td></tr>
<tr><td>NH<sub>3</sub></td><td>14</td><td>313,6</td><td>17</td><td>238</td><td>0,0946</td><td>0,059</td></tr>
<tr><td>H<sub>2</sub>S</td><td>1</td><td>22,4</td><td>34</td><td>34</td><td>0,00676</td><td>0,0085</td></tr>
<tr><td><b>Total</b></td><td><b>148</b></td><td><b>3315,2</b></td><td></td><td><b>4010</b></td><td><b>1</b></td><td><b>1</b></td></tr>
</tbody></table>
<div class="formula">$$Y_i=\\frac{n_i}{\\sum n_i}=\\frac{V_i}{\\sum V_i}$$ $$ X_i=\\frac{m_i}{\\sum m_i}$$ $$ Y_{CH_4}=\\frac{75{,}5}{148}=0{,}51$$ $$ X_{CH_4}=\\frac{1208}{4010}=0{,}301$$</div>
<p>Comprobación del balance de masa: $3200\\ \\text{g de biomasa}+45\\cdot18=810\\ \\text{g de agua}\\Rightarrow4010$ g de productos. El metano es la mitad del biogás en volumen, pero solo el 30 % en masa, porque el CO<sub>2</sub> pesa casi el triple (44 frente a 16 g/mol).</p>
<p><b>(b) Producción específica de metano</b> (P3, diap. 3), por kg de biomasa (se toma toda como materia volátil, igual que en la resolución oficial):</p>
<div class="formula">$$n_{\\text{biomasa}}=\\frac{1000\\ \\text{g}}{3200\\ \\text{g/mol}}=0{,}3125\\ \\text{mol/kg}$$ $$ n_{\\text{degradada}}=0{,}75\\cdot0{,}3125=0{,}234\\ \\text{mol/kg}$$</div>
<div class="formula">$$n_{CH_4}=0{,}234\\cdot75{,}5=17{,}67\\ \\text{mol/kg}$$ $$ V_{CH_4}=17{,}67\\cdot22{,}4=395{,}8\\ \\text{L/kg}$$</div>
<div class="formula">$$\\boxed{\\text{Producción específica}\\approx0{,}4\\ \\text{Nm}^3\\ \\text{CH}_4/\\text{kg de biomasa}}$$</div>
<p>Dato complementario (no está en la resolución oficial): con las 50.000 t/año del enunciado, y suponiendo como en ella que toda la biomasa es materia volátil, se obtendrían unos $5\\cdot10^{7}\\ \\text{kg}\\cdot0{,}396\\ \\text{Nm}^3/\\text{kg}\\approx2\\cdot10^{7}$ Nm³ de CH<sub>4</sub> al año.</p>
<p><b>Erratas de la resolución oficial del problema 3</b></p>
<ul><li>Diap. 1, fila del N: escribe «<b>0,248</b> / 0,03125 → 14»; el cociente correcto es 0,428 / 0,03125 = 13,7 → 14 (el 0,428 está bien en la columna anterior).</li>
<li>Diap. 1: la cabecera dice «redondeando al entero superior», pero el C se redondea hacia abajo (133,3 → 133). Con el entero superior saldrían 134 átomos de C (M = 3212 g/mol); los resultados oficiales usan 133.</li>
<li>Diap. 3: 0,3125 · 0,75 = 0,2344 mol (no 0,234 exacto); sin ese redondeo salen 17,70 mol y 396,4 L de CH<sub>4</sub> por kg, frente a 17,67 mol y 395,8 L. El resultado final, ≈ 0,4 Nm³/kg, no cambia.</li>
<li>Diap. 1: 35/16 = 2,1875 aparece como 2,18 (redondeo); el cociente exacto, 2,1875/0,03125 = 70, es el que se usa.</li></ul>
` }
  ],
  confusions: [
    ["<b>Gasificación</b> vs <b>pirólisis</b>", "La gasificación es una <b>oxidación parcial</b> con un agente gasificante que aporta oxígeno en defecto (subestequiométrico). La pirólisis es descomposición térmica (&gt; 400 ºC) <b>en ausencia de oxígeno</b>. La combustión, en cambio, trabaja con oxígeno suficiente o en exceso."],
    ["<b>Pirólisis rápida</b> vs <b>lenta</b>", "Rápida: segundos, ≈ 700 ºC, mayoría de instalaciones, <b>60 % líquido</b>, 20 % coque y 20 % gas. Lenta (carbonización): horas, ≈ 400 ºC, <b>80 % coque</b> y 20 % gas. El esquema de la diap. 26 indica 500 ºC y &lt; 2 s para el reactor de pirólisis rápida."],
    ["<b>Water-gas</b> vs <b>water-gas shift</b>", "<i>Water-gas</i>: C + H<sub>2</sub>O → H<sub>2</sub> + CO, <b>endotérmica</b> (+118,5 kJ/mol). <i>Water-gas shift</i>: CO + H<sub>2</sub>O → H<sub>2</sub> + CO<sub>2</sub>, <b>exotérmica</b> (−40,9 kJ/mol). La «shift» parte de CO, no de C."],
    ["<b>O<sub>s</sub></b> vs <b>O<sub>m</sub></b> en la corrección por oxígeno", "En $E_s = \\frac{21-O_s}{21-O_m}E_m$, O<sub>s</sub> es el oxígeno de <b>referencia</b> (numerador) y O<sub>m</sub> el <b>medido</b> (denominador). Si se mide más O<sub>2</sub> que el de referencia, la concentración corregida es mayor que la medida."],
    ["Oxígeno de referencia: <b>6 %, 3 %, 11 %, 15 %, 10 %, 13 %</b>", "6 %: combustibles sólidos y coincineración con biomasa o sólidos. 3 %: líquidos y gases. 11 %: incineración de residuos. 15 %: turbinas y motores de gas. 10 %: calderas ≤ 500 kW (2015/1189). 13 %: calefacción local ≤ 50 kW (2015/1185)."],
    ["<b>0,60</b> vs <b>0,65</b> de eficiencia energética", "0,60 para incineradoras en funcionamiento y autorizadas <b>antes del 1 de enero de 2009</b>; 0,65 para las autorizadas <b>después del 31 de diciembre de 2008</b>. La electricidad se multiplica por <b>2,6</b> y el calor por <b>1,1</b>; el 0,97 recoge pérdidas por cenizas de fondo y radiación."],
    ["<b>RD 815/2013</b> vs <b>RD 1042/2017</b>", "El RD 815/2013 (emisiones industriales) cubre la combustión ≥ 50 MW térmicos, la gasificación ≥ 20 MW y la incineración y coincineración de residuos. El RD 1042/2017 cubre las instalaciones <b>medianas</b>, ≥ 1 MW y &lt; 50 MW."],
    ["Bioetanol de <b>1.ª</b> vs <b>2.ª generación</b>", "Primera: biomasa <b>azucarada</b> (extracción por presión o difusión) y <b>amilácea</b> (hidrólisis enzimática). Segunda: <b>lignocelulósica</b> (hidrólisis ácida o enzimática). En biodiésel hay tercera generación (algas)."],
    ["<b>DDGS</b> vs <b>vinazas</b>", "Ambos salen de la destilación del bioetanol: los DDGS (granos secos de destilería con solubles) van a <b>alimentación del ganado</b>; las vinazas, a <b>depuración y reciclado</b>. La glicerina es el subproducto del biodiésel, no del bioetanol."],
    ["Fracción en <b>volumen</b> vs fracción <b>másica</b> del biogás", "En el problema 3 el CH<sub>4</sub> es el <b>51 % en volumen</b> (moles) pero solo el <b>30 % en masa</b>, porque su masa molecular (16) es mucho menor que la del CO<sub>2</sub> (44), que es el 39 % en volumen y el 63 % en masa."]
  ]
};

/* ---------- Preguntas B2 ---------- */
/* Sección 1 · Alternativas y plantas */
L("B2", "b2-alternativas", "Alternativas de valorización", 1, "Según el esquema de alternativas técnicas de valorización energética, a partir de biomasa y residuos se obtienen…",
  ["electricidad, calor, combustibles para el transporte y materias primas para la industria química",
   "electricidad, calor, combustibles para el transporte y enmiendas orgánicas (compost) para la agricultura",
   "electricidad, calor, biogás para inyección en la red de gas y materias primas para la industria química",
   "electricidad y calor, pero no combustibles para el transporte ni materias primas para la industria química"],
  0, "El esquema tiene cuatro salidas: electricidad, calor, combustibles para el transporte y materias primas para la industria química. El compost y la inyección de biogás no figuran como salidas de ese esquema.", "Apuntes B2, diap. 2");
L("B2", "b2-alternativas", "Diagrama de van Krevelen", 2, "En el diagrama de van Krevelen de los apuntes, la nube de puntos de la biomasa se diferencia de la zona de diésel y gasolinas porque tiene…",
  ["una relación O/C mucho mayor (≈ 0,6-0,7) y una relación H/C algo menor (≈ 1,3-1,7)",
   "una relación O/C mucho menor (≈ 0) y una relación H/C algo mayor (≈ 2-2,5)",
   "una relación O/C parecida (≈ 0,1) y una relación H/C mucho menor (≈ 0,5)",
   "una relación O/C próxima a 1, como el metanol, y una relación H/C próxima a 2"],
  0, "Diésel y gasolinas están en O/C ≈ 0 y H/C ≈ 2; la biomasa, en O/C ≈ 0,55-0,75 y H/C ≈ 1,3-1,7. La flecha del diagrama indica que hay que eliminar oxígeno y ganar hidrógeno relativo. Las cenizas son las que tienen H/C < 0,5.", "Apuntes B2, diap. 3");
L("B2", "b2-alternativas", "Diagrama de van Krevelen", 3, "En el diagrama de van Krevelen de los apuntes, ¿qué compuesto aparece con relación O/C = 1 y relación H/C = 3?",
  ["El etilenglicol (EG)", "El glicerol", "El etanol", "El metanol"],
  0, "En O/C = 1 aparecen, de arriba abajo, metanol (H/C = 4), EG (H/C = 3), glicerol (≈ 2,7), ácido láctico (2) y CO (0). El etanol tiene H/C = 3 pero O/C = 0,5.", "Apuntes B2, diap. 3");
L("B2", "b2-alternativas", "Parque por rango de potencia", 2, "Según los datos de APPA (2019) sobre el parque de generación de biomasa y residuos renovables en España, ¿qué afirmación es correcta?",
  ["El 72 % de las instalaciones (187 plantas) tiene ≤ 5 MW, aunque entre todas solo suman 227 MW",
   "El 72 % de las instalaciones (187 plantas) tiene ≤ 1 MW, porque el recurso está muy disperso",
   "Las 16 plantas de 25 a 50 MW suman 417 MW, la mayor potencia de todos los rangos",
   "El rango de 1 a 5 MW es el que acumula más potencia instalada, con 98 plantas"],
  0, "≤ 1 MW: 89 plantas y 40 MW; 1-5 MW: 98 plantas y 187 MW (en total, 187 plantas y 227 MW, el 72 %). Las 16 plantas de 25-50 MW suman 585 MW, el rango con más potencia; 417 MW corresponde a las 26 plantas de 10-25 MW.", "Apuntes B2, diap. 7");
L("B2", "b2-alternativas", "Plantas de biomasa en España", 3, "Una planta de biomasa de la tabla de los apuntes tiene 16 MW y produce 128 GWh/año. ¿Cuántas horas equivalentes a plena potencia funciona al año?",
  ["8.000 h", "6.480 h", "7.000 h", "800 h"],
  0, "Las horas equivalentes son la energía anual dividida por la potencia (Apuntes B2, tabla de plantas de biomasa): $$h_{eq}=\\frac{E}{P}$$ $$=\\frac{128\\ \\text{GWh}}{16\\ \\text{MW}}$$ $$=\\frac{128.000\\ \\text{MWh}}{16\\ \\text{MW}}$$ $$=\\boxed{8000\\ \\text{h}}$$ Es el caso de Briviesca o Miajadas. 6.480 h corresponde a Curtis Teixeiro (324 GWh / 50 MW) y 7.000 h a Corduente (14 GWh / 2 MW); 800 h es un error de un factor 10 en las unidades.", "Apuntes B2, diap. 8");
L("B2", "b2-alternativas", "Ejemplos de plantas", 3, "Entre los ejemplos de plantas de combustión de biomasa de los apuntes, ¿cuáles trabajan con gasificación + combustión? (varias respuestas)",
  ["Kymijärvi II (Finlandia), 160 MW, alimentada con CSR",
   "Vaasa (Finlandia), 140 MW, alimentada con residuos forestales",
   "Toppila (Finlandia), 210 MW, alimentada con turba",
   "Alholmens Kraft (Finlandia), 265 MW, con residuos de papelera"],
  [0, 1], "Solo Kymijärvi II (CSR, CHP) y Vaasa (residuos forestales) se indican como gasificación + combustión. Toppila quema turba y Alholmens Kraft, residuos de la papelera.", "Apuntes B2, diap. 5");

/* Sección 2 · Combustión */
L("B2", "b2-combustion", "Tipos de hornos", 2, "¿Qué tamaño de partícula indican los apuntes para los hornos de lecho fluidizado y para los de cocombustión?",
  ["Lecho fluidizado: 3-4 cm de dimensión máxima; cocombustión: < 1 mm",
   "Lecho fluidizado: < 1 mm; cocombustión: 3-4 cm de dimensión máxima",
   "Lecho fluidizado: 3-4 mm de dimensión máxima; cocombustión: < 1 cm",
   "Lecho fluidizado: < 3 mm; cocombustión: < 1 mm, como en la pirólisis rápida"],
  0, "Lecho fluidizado: partículas de 3-4 cm como máximo. Cocombustión en hornos de carbón: < 1 mm. La molienda a < 3 mm es la de la pirólisis rápida.", "Apuntes B2, diap. 9");
L("B2", "b2-combustion", "Pretratamiento", 1, "Antes de incinerarla, la biomasa se trocea y se seca hasta una humedad de…",
  ["< 10 % para combustión industrial y < 30 % para combustión doméstica",
   "< 30 % para combustión industrial y < 10 % para combustión doméstica",
   "< 15 % para combustión industrial y < 30 % para combustión doméstica",
   "< 10 % en ambos casos, el mismo valor que exige el pellet ENplus"],
  0, "Industrial < 10 %, doméstica < 30 %. El 15 % es la humedad de las astillas del district heating de Soria.", "Apuntes B2, diap. 9");
L("B2", "b2-combustion", "Hornos para residuos", 2, "Sobre los hornos empleados para residuos, ¿cuál de las siguientes afirmaciones es FALSA?",
  ["Los residuos líquidos contenidos en recipientes se incineran en quemadores industriales, como los combustibles líquidos",
   "Los residuos municipales se incineran en hornos de parrillas y de lecho fluidizado",
   "El horno rotatorio es una opción muy adecuada para los residuos industriales peligrosos",
   "En la cocombustión indirecta, la biomasa se gasifica antes de entrar en el horno de carbón"],
  0, "Los residuos líquidos en recipientes van a hornos rotatorios; a quemadores industriales van los residuos industriales líquidos (no envasados). El resto de afirmaciones son correctas.", "Apuntes B2, diap. 9");
L("B2", "b2-combustion", "Generación eléctrica", 2, "¿Qué pareja de intervalos de potencia corresponde a los apuntes?",
  ["Ciclo ORC: 400 kWe-1,5 MWe; motor Stirling: 1-100 kWe",
   "Ciclo ORC: 25 kWe-1,5 MWe; motor Stirling: 1-100 kWe",
   "Ciclo ORC: 400 kWe-1,5 MWe; motor Stirling: 500 kWe-500 MWe",
   "Ciclo ORC: 500 kWe-500 MWe; máquina de vapor: 400 kWe-1,5 MWe"],
  0, "Rankine y turbina de gas en ciclo cerrado: 500 kWe-500 MWe; ORC: 400 kWe-1,5 MWe; máquina de vapor: 25 kWe-1,5 MWe; Stirling: 1-100 kWe.", "Apuntes B2, diap. 10");
L("B2", "b2-combustion", "District heating de Soria", 3, "¿Qué descripción corresponde a la central de district heating de Soria?",
  ["3 líneas con calderas de parrilla fija de 6 MW (rendimiento 85 %), ciclón + filtro de mangas y astillas con un 15 % de humedad",
   "3 líneas con calderas de lecho fluidizado de 6 MW (rendimiento 85 %), ciclón + filtro de mangas y astillas con un 15 % de humedad",
   "2 líneas con calderas de parrilla móvil de 9 MW (rendimiento 90 %), ciclón + electrofiltro y astillas con un 30 % de humedad",
   "3 líneas con calderas de parrilla fija de 6 MW (rendimiento 85 %), lavador de gases y pellets con un 10 % de humedad"],
  0, "Soria: 3 líneas, parrilla fija de 6 MW con dos entradas de aire secundario y una de primario, rendimiento 85 %, ciclón seguido de filtro de mangas, astillas al 15 %, 16.000 t/año y unos 45·10⁶ kWh/año para 8.000 clientes.", "Apuntes B2, diap. 12");
L("B2", "b2-combustion", "District heating de Soria", 3, "La central de Soria genera unos 45·10⁶ kWh/año consumiendo 16.000 t/año de astillas. ¿Cuánta energía útil obtiene, aproximadamente, por tonelada de astilla?",
  ["≈ 2.800 kWh/t", "≈ 28.000 kWh/t", "≈ 280 kWh/t", "≈ 3.300 kWh/t"],
  0, "La energía útil por tonelada es la energía generada al año dividida por el combustible consumido al año (central de Soria, Apuntes B2): $$e=\\frac{45\\cdot10^{6}\\ \\text{kWh/año}}{16.000\\ \\text{t/año}}$$ $$=2812{,}5\\ \\text{kWh/t}\\approx\\boxed{2800\\ \\text{kWh/t}}$$ 28.000 y 280 kWh/t son errores de un factor 10. Dividir además por el rendimiento (2812,5 / 0,85 ≈ 3.300 kWh/t) da la energía del combustible, no la útil.", "Apuntes B2, diap. 12");
L("B2", "b2-combustion", "Horno de parrillas de RSU", 2, "¿Qué datos corresponden al horno de parrillas para RSU de los apuntes? (varias respuestas)",
  ["Parrillas metálicas refrigeradas por aire o agua e inclinadas unos 25º", "Gases en la cámara de combustión a más de 850 ºC durante 2 s", "Gases de escape a 315 ºC que pasan por dos lavadores, el segundo con NaOH", "Tiempo de residencia del residuo de 30 a 90 minutos a 500-1450 ºC"],
  [0, 1], "Parrillas inclinadas unos 25º y refrigeradas; gases a > 850 ºC durante 2 s (quemadores auxiliares de gas natural y gasóleo para alcanzar los 850 ºC); escape a 160-220 ºC. Los 315 ºC con lavadores y los 30-90 min a 500-1450 ºC son del incinerador rotatorio.", "Apuntes B2, diap. 15");
L("B2", "b2-combustion", "Horno rotatorio", 2, "¿Qué conjunto de datos corresponde al incinerador rotatorio de los apuntes?",
  ["Longitud 8-20 m, diámetro 1-5 m, 0,1-20 t/h, 500-1450 ºC y residencia de 30-90 min",
   "Longitud 1-5 m, diámetro 8-20 m, 0,1-20 t/h, 500-1450 ºC y residencia de 30-90 min",
   "Longitud 8-20 m, diámetro 1-5 m, 0,1-20 t/h, > 850 ºC y residencia de 2 s",
   "Longitud 8-20 m, diámetro 1-5 m, 1-50 t/h, 3000-20000 ºC y residencia de 30-90 min"],
  0, "Horno rotatorio: 8-20 m de longitud, 1-5 m de diámetro, 0,1-20 t/h, 500-1450 ºC y 30-90 min. Los 850 ºC y 2 s son del horno de parrillas; 3000-20000 ºC, del plasma.", "Apuntes B2, diap. 17");

/* Sección 3 · Gasificación */
L("B2", "b2-gasificacion", "Definición", 1, "Según los apuntes, la gasificación es…",
  ["una oxidación parcial en condiciones subestequiométricas",
   "una descomposición por calor en ausencia de oxígeno",
   "una oxidación completa con un exceso de aire controlado",
   "una oxidación parcial en condiciones sobreestequiométricas"],
  0, "Gasificación = oxidación parcial con oxígeno en defecto (subestequiométrico), aportado por el agente gasificante. La descomposición térmica sin oxígeno es la pirólisis; con exceso de aire se tiene una combustión.", "Apuntes B2, diap. 19");
L("B2", "b2-gasificacion", "Agente gasificante", 2, "Si se gasifica una biomasa con oxígeno (sin añadir vapor de agua), el poder calorífico del gas obtenido es, según los apuntes, de…",
  ["4-7 MJ/Nm³", "15-20 MJ/Nm³", "10-20 MJ/Nm³", "Ninguna de las otras opciones"],
  2, "Aire: 4-7 MJ/Nm³ (el N₂ diluye el gas); oxígeno: 10-20 MJ/Nm³; aire u oxígeno + vapor de agua: 15-20 MJ/Nm³.", "Apuntes B2, diap. 19");
L("B2", "b2-gasificacion", "Reacciones endotérmicas", 3, "¿Cuáles de las siguientes reacciones de la gasificación son endotérmicas según los apuntes? (varias respuestas)",
  ["Boudouard: $\\mathrm{C + CO_2 \\rightarrow 2\\,CO}$", "Water-gas: $\\mathrm{C + H_2O \\rightarrow H_2 + CO}$", "Water-gas shift: $\\mathrm{CO + H_2O \\rightarrow H_2 + CO_2}$", "Reformado seco: $\\mathrm{C_nH_m + n\\,CO_2 \\rightarrow 2n\\,CO + (m/2)\\,H_2}$"],
  [0, 1, 3], "Endotérmicas: Boudouard (+159,9 kJ/mol), water-gas (+118,5 kJ/mol), reformado con vapor y reformado seco (ΔH° > 0). La water-gas shift es exotérmica (−40,9 kJ/mol).", "Apuntes B2, diap. 20");
L("B2", "b2-gasificacion", "Entalpías de reacción", 3, "¿Qué pareja reacción–entalpía estándar es correcta según la tabla de los apuntes?",
  ["Metanización, $\\mathrm{C + 2\\,H_2 \\rightarrow CH_4}$: $\\Delta H^\\circ = -87{,}5$ kJ/mol",
   "Water-gas shift, $\\mathrm{CO + H_2O \\rightarrow H_2 + CO_2}$: $\\Delta H^\\circ = +118{,}5$ kJ/mol",
   "Combustión incompleta, $\\mathrm{C + \\tfrac12\\,O_2 \\rightarrow CO}$: $\\Delta H^\\circ = -393{,}8$ kJ/mol",
   "Boudouard, $\\mathrm{C + CO_2 \\rightarrow 2\\,CO}$: $\\Delta H^\\circ = -159{,}9$ kJ/mol"],
  0, "Valores de la diapositiva: combustión completa −393,8; incompleta −123,1; metanización −87,5; shift −40,9; Boudouard +159,9; water-gas +118,5 kJ/mol.", "Apuntes B2, diap. 20");
L("B2", "b2-gasificacion", "Alquitranes", 2, "Para acondicionar el gas de gasificación y eliminar los alquitranes, los apuntes citan…",
  ["la eliminación de partículas (filtros, ciclones, lavadores), el craqueo térmico a T > 1100 ºC y los catalizadores",
   "la eliminación de partículas (filtros, ciclones, lavadores), el craqueo térmico a T > 850 ºC y la adición de caliza",
   "la condensación a baja temperatura, el craqueo térmico a T > 400 ºC y los catalizadores",
   "la eliminación de partículas en electrofiltros y la gasificación por plasma a 3000-20000 ºC"],
  0, "Acondicionamiento: eliminación de partículas (filtros, ciclones, lavadores), craqueo térmico (T > 1100 ºC) y catalizadores. 850 ºC es la temperatura mínima del horno de parrillas; 400 ºC, la de la pirólisis.", "Apuntes B2, diap. 21");
L("B2", "b2-gasificacion", "Tipos de gasificadores", 3, "En un gasificador de lecho fijo <i>down draft</i> como el de los apuntes…",
  ["el aire entra a media altura y el gas de síntesis sale por la parte inferior, tras atravesar la zona de reducción",
   "el aire entra por la parte inferior y el gas de síntesis sale por arriba, tras atravesar la zona de secado",
   "el aire entra por un lateral y el gas de síntesis sale por el lateral opuesto, junto a la zona de oxidación",
   "el aire entra por arriba con el combustible y el gas de síntesis sale por un lateral, tras la zona de pirólisis"],
  0, "Down draft: secado, pirólisis, oxidación (entrada de aire) y reducción, con salida del gas por abajo. En el up draft el aire entra por abajo y el gas sale por arriba; en el cross draft entra por un lateral y sale por el opuesto.", "Apuntes B2, diap. 22");
L("B2", "b2-gasificacion", "Plasma", 1, "La gasificación por plasma descrita en los apuntes se caracteriza por…",
  ["temperaturas de 3000-20000 ºC obtenidas convirtiendo energía eléctrica en calor",
   "temperaturas de 3000-20000 ºC obtenidas quemando parte del residuo con oxígeno puro",
   "temperaturas de 1100-3000 ºC obtenidas con quemadores auxiliares de gas natural",
   "temperaturas de 500-1450 ºC obtenidas en un tambor rotatorio calentado externamente"],
  0, "Plasma: 3000-20000 ºC convirtiendo energía eléctrica en calor; el plasma es una fuente de especies reactivas a partir de un gas. 500-1450 ºC es el intervalo del horno rotatorio.", "Apuntes B2, diap. 24");

/* Sección 4 · Pirólisis */
L("B2", "b2-pirolisis", "Definición", 1, "Según los apuntes, la pirólisis es…",
  ["una descomposición por calor (> 400 ºC) en ausencia de oxígeno, con recuperación de energía y/o materia",
   "una oxidación parcial (> 400 ºC) en condiciones subestequiométricas, con recuperación de energía",
   "una descomposición por calor (> 850 ºC) con exceso de aire y depuración de los gases",
   "una descomposición por calor (> 1100 ºC) en ausencia de oxígeno, sin recuperación de materia"],
  0, "Pirólisis = descomposición por calor (> 400 ºC) en ausencia de oxígeno con recuperación de energía y/o materia y depuración de los gases. La oxidación parcial subestequiométrica es la gasificación.", "Apuntes B2, diap. 25");
L("B2", "b2-pirolisis", "Pirólisis rápida", 1, "En la pirólisis rápida (la de la mayor parte de las instalaciones), el material de partida se descompone en…",
  ["coque 20 %, gas 20 % y líquido por condensación 60 %",
   "coque 60 %, gas 20 % y líquido por condensación 20 %",
   "coque 80 % y gas 20 %, sin fracción líquida",
   "coque 20 %, gas 60 % y líquido por condensación 20 %"],
  0, "Rápida (segundos, ≈ 700 ºC): 20 % coque, 20 % gas y 60 % líquido. La lenta (horas, ≈ 400 ºC, carbonización) da 80 % coque y 20 % gas.", "Apuntes B2, diap. 26");
L("B2", "b2-pirolisis", "Pirólisis lenta", 1, "La pirólisis que se conoce como carbonización…",
  ["dura horas, trabaja a ≈ 400 ºC y da un 80 % de coque y un 20 % de gases",
   "dura segundos, trabaja a ≈ 700 ºC y da un 80 % de coque y un 20 % de gases",
   "dura horas, trabaja a ≈ 700 ºC y da un 60 % de líquido y un 20 % de coque",
   "dura segundos, trabaja a ≈ 400 ºC y da un 20 % de coque y un 80 % de gases"],
  0, "La pirólisis lenta (horas, ≈ 400 ºC) produce 80 % de coque y 20 % de gases y se denomina carbonización.", "Apuntes B2, diap. 26");
L("B2", "b2-pirolisis", "Pirólisis rápida", 3, "Según el esquema de pirólisis rápida de los apuntes, la biomasa se prepara y trata con…",
  ["secado a < 10 % de humedad, molienda a < 3 mm y reactor a 500 ºC con < 2 s",
   "secado a < 30 % de humedad, molienda a 3-4 cm y reactor a 700 ºC durante horas",
   "secado a < 10 % de humedad, molienda a < 1 mm y reactor a 400 ºC con < 2 s",
   "secado a < 15 % de humedad, molienda a < 3 mm y reactor a 850 ºC durante 2 s"],
  0, "El material debe estar molido: secado < 10 %, molienda < 3 mm, pirólisis rápida a 500 ºC y < 2 s, y condensación que separa gas, líquido y carbón. El texto de la misma diapositiva habla de ≈ 700 ºC para la pirólisis rápida en general.", "Apuntes B2, diap. 26");
L("B2", "b2-pirolisis", "Gas de pirólisis", 2, "La composición aproximada del gas de pirólisis que dan los apuntes es…",
  ["48 % CO, 20 % H₂, 13 % CH₄, 6,5 % CO₂ y 6 % de hidrocarburos insaturados, con PCI ≈ 4500 kcal/Nm³",
   "20 % CO, 48 % H₂, 13 % CH₄, 6,5 % CO₂ y 6 % de hidrocarburos insaturados, con PCI ≈ 4500 kcal/Nm³",
   "48 % CO, 20 % H₂, 13 % CH₄, 6,5 % CO₂ y 6 % de hidrocarburos insaturados, con PCI ≈ 4-7 MJ/Nm³",
   "51 % CH₄, 39 % CO₂, 9 % NH₃ y 1 % H₂S, con PCI ≈ 4500 kcal/Nm³"],
  0, "Gas de pirólisis: 48 % CO, 20 % H₂, 6,5 % CO₂, 13 % CH₄, 6 % insaturados y PCI 4500 kcal/Nm³. 4-7 MJ/Nm³ es el gas de gasificación con aire, y la composición con 51 % de CH₄ es el biogás teórico del problema 3.", "Apuntes B2, diap. 27");
L("B2", "b2-pirolisis", "Usos de los productos", 2, "Sobre los usos de los productos de pirólisis que recogen los apuntes, ¿cuál de las siguientes afirmaciones es FALSA?",
  ["El gas se emplea como adsorbente y en metalurgia",
   "El carbón se emplea en usos domésticos (barbacoas, cocinas) y como adsorbente",
   "Del carbón se obtienen productos químicos y colorantes como el negro de humo",
   "El líquido orgánico se usa en alimentación (aromáticos) y para producir combustibles líquidos"],
  0, "Adsorbente y metalurgia son usos del carbón (coque, carbón vegetal). El gas se destina a combustión y a productos químicos. El líquido (alquitrán) se usa en combustión (con problemas), alimentación y producción de combustibles líquidos.", "Apuntes B2, diap. 27");

/* Sección 5 · Emisiones: valorización, coincineración e incineración */
L("B2", "b2-emisiones", "Ámbito del RD 815/2013", 2, "Según los apuntes, el Real Decreto 815/2013 de emisiones industriales se aplica a…",
  ["instalaciones de combustión de ≥ 50 MW térmicos, gasificación y licuefacción de ≥ 20 MW e incineración o coincineración de residuos",
   "instalaciones de combustión de ≥ 20 MW térmicos, gasificación y licuefacción de ≥ 50 MW e incineración o coincineración de residuos",
   "instalaciones de combustión de ≥ 1 MW y < 50 MW térmicos, incluidos los motores y las turbinas de gas",
   "calderas de combustibles sólidos de ≤ 500 kW y aparatos de calefacción local de ≤ 50 kW"],
  0, "RD 815/2013 (modificado por el RD 773/2017): combustión ≥ 50 MW, gasificación y licuefacción ≥ 20 MW, e incineración y coincineración de residuos. El intervalo 1-50 MW es el del RD 1042/2017 y los ≤ 500 kW y ≤ 50 kW, los de los reglamentos de ecodiseño.", "Apuntes B2, diap. 28");
L("B2", "b2-emisiones", "Eficiencia energética", 2, "Una incineradora de residuos domésticos autorizada en 2015 se considera instalación de valorización si su eficiencia energética es…",
  ["≥ 0,60", "≥ 0,97", "≥ 0,65", "Ninguna de las otras opciones"],
  2, "0,65 para las autorizadas después del 31 de diciembre de 2008; 0,60 para las que funcionaban y estaban autorizadas antes del 1 de enero de 2009. El 0,97 es el factor de pérdidas por cenizas de fondo y radiación.", "Apuntes B2, diap. 28");
L("B2", "b2-emisiones", "Eficiencia energética", 2, "En la fórmula de eficiencia energética de la Ley 7/2022, la energía producida E<sub>p</sub> se calcula multiplicando…",
  ["la electricidad por 2,6 y el calor para usos comerciales por 1,1",
   "la electricidad por 1,1 y el calor para usos comerciales por 2,6",
   "la electricidad por 2,6 y el calor para usos comerciales por 0,97",
   "la electricidad y el calor para usos comerciales por 0,97"],
  0, "La fórmula de eficiencia energética de la Ley 7/2022 (Apuntes B2, diap. 28) pondera la electricidad por 2,6 y el calor para usos comerciales por 1,1: $$E_p=2{,}6\\,E_{elec}+1{,}1\\,E_{calor}\\quad(\\text{GJ/año})$$ $$\\eta=\\frac{E_p-(E_f+E_i)}{0{,}97\\,(E_w+E_f)}$$ El 0,97 va en el denominador y representa las pérdidas por cenizas de fondo y radiación.", "Apuntes B2, diap. 28");
L("B2", "b2-emisiones", "Eficiencia energética", 3, "Una incineradora de residuos domésticos produce al año 200.000 GJ de electricidad y 100.000 GJ de calor para usos comerciales, con E<sub>f</sub> = 10.000 GJ, E<sub>i</sub> = 5.000 GJ y E<sub>w</sub> = 1.000.000 GJ. Su eficiencia energética es…",
  ["≈ 0,63: es valorización solo si estaba autorizada antes del 1 de enero de 2009",
   "≈ 0,63: es valorización en cualquier caso, porque supera los dos umbrales",
   "≈ 0,52: no alcanza ninguno de los dos umbrales de valorización",
   "≈ 0,29: no alcanza ninguno de los dos umbrales de valorización"],
  0, "Se aplica la fórmula de eficiencia energética de la Ley 7/2022 (Apuntes B2, diap. 28). Primero, la energía producida ponderada: $$E_p=2{,}6\\cdot200.000+1{,}1\\cdot100.000$$ $$=630.000\\ \\text{GJ}$$ Después, la eficiencia: $$\\eta=\\frac{E_p-(E_f+E_i)}{0{,}97\\,(E_w+E_f)}$$ $$=\\frac{630.000-15.000}{0{,}97\\,(1.000.000+10.000)}$$ $$=\\frac{615.000}{979.700}\\approx\\boxed{0{,}63}$$ Supera el umbral de 0,60 (instalaciones autorizadas antes del 1-1-2009) pero no el de 0,65, así que solo es valorización si estaba autorizada antes de esa fecha. Olvidar el calor da ≈ 0,52 y no aplicar los factores 2,6 y 1,1 da ≈ 0,29.", "Apuntes B2, diap. 28");
L("B2", "b2-emisiones", "Coincineración con biomasa", 2, "En una instalación de combustión de 80 MWth que coincinera residuos con biomasa como combustible, el valor límite diario de NO<sub>x</sub> (O<sub>2</sub> = 6 %) es…",
  ["350 mg/Nm³", "400 mg/Nm³", "300 mg/Nm³", "200 mg/Nm³"],
  0, "Biomasa: NOₓ 350 (50-100 MWth), 300 (100-300) y 200 (> 300). Con combustibles sólidos distintos de la biomasa, 400 mg/Nm³ en 50-100 MWth.", "Apuntes B2, diap. 29-30");
L("B2", "b2-emisiones", "Corrección por oxígeno", 3, "En esa instalación de coincineración con biomasa de 80 MWth se miden 300 mg/Nm³ de NO<sub>x</sub> (gas seco) con un 9 % de O<sub>2</sub>. Corrigiendo al oxígeno de referencia…",
  ["se obtienen 375 mg/Nm³, que superan el límite de 350 mg/Nm³",
   "se obtienen 240 mg/Nm³, que cumplen el límite de 350 mg/Nm³",
   "se obtienen 375 mg/Nm³, que cumplen el límite de 400 mg/Nm³",
   "no hay que corregir, porque 300 mg/Nm³ ya cumple el límite de 350 mg/Nm³"],
  0, "Los límites se comparan siempre con la concentración corregida al oxígeno de referencia, que es el 6 % para combustibles sólidos (Apuntes B2): $$E_s=\\frac{21-O_s}{21-O_m}\\,E_m$$ $$=\\frac{21-6}{21-9}\\cdot300$$ $$=\\frac{15}{12}\\cdot300$$ $$=\\boxed{375\\ \\text{mg/Nm}^3}$$ Como 375 mg/Nm³ supera los 350 mg/Nm³ (límite de NOₓ para biomasa de 50-100 MWth), la instalación no cumple. Invertir la fracción da 240 mg/Nm³; 400 mg/Nm³ es el límite de los combustibles sólidos distintos de la biomasa.", "Apuntes B2, diap. 29 y 32");
L("B2", "b2-emisiones", "Incineración de residuos", 3, "En una incineradora de residuos se miden 40 mg/Nm³ de SO<sub>2</sub> (gas seco) con un 15 % de O<sub>2</sub>. Según los apuntes…",
  ["corregida al 11 % de O₂ son ≈ 66,7 mg/Nm³: supera la media de 24 h (50) pero no la de ½ h (200)",
   "corregida al 11 % de O₂ son 24 mg/Nm³: cumple la media de 24 h (50) y la de ½ h (200)",
   "corregida al 6 % de O₂ son 90 mg/Nm³: supera la media de 24 h (50) pero no la de ½ h (200)",
   "corregida al 11 % de O₂ son ≈ 66,7 mg/Nm³: cumple, porque el límite de SO₂ es 200 en ambas medias"],
  0, "En incineración de residuos el oxígeno de referencia es el 11 % (Apuntes B2). Corrección: $$E_s=\\frac{21-11}{21-15}\\cdot40$$ $$=\\frac{10}{6}\\cdot40\\approx\\boxed{66{,}7\\ \\text{mg/Nm}^3}$$ Límites de SO₂: 50 mg/Nm³ (media de 24 h) y 200 mg/Nm³ (media de ½ h). 66,7 supera el primero pero no el segundo. Invertir la fracción da 24 mg/Nm³; corregir al 6 % daría 100 mg/Nm³ (la opción que dice 90 está además mal calculada).", "Apuntes B2, diap. 31-32");
L("B2", "b2-emisiones", "Equivalencia tóxica", 3, "Una muestra contiene 0,2 ng de 2,3,7,8-TCDD, 0,4 ng de 1,2,3,7,8-PeCDD y 1 ng de OCDD. Su contenido expresado como equivalente tóxico es…",
  ["0,401 ng TEQ", "1,6 ng TEQ", "0,221 ng TEQ", "0,41 ng TEQ"],
  0, "El equivalente tóxico es la suma de cada masa por su factor de equivalencia (TEF) de la tabla de los apuntes: TCDD = 1; 1,2,3,7,8-PeCDD = 0,5; OCDD = 0,001. $$TEQ=\\sum m_i\\,TEF_i$$ $$=0{,}2\\cdot1+0{,}4\\cdot0{,}5+1\\cdot0{,}001$$ $$TEQ=0{,}2+0{,}2+0{,}001$$ $$=\\boxed{0{,}401\\ \\text{ng TEQ}}$$ 1,6 es la suma sin ponderar; 0,221 usa el 0,05 del 1,2,3,7,8-PeCDF y 0,41 el 0,01 de las heptacloradas.", "Apuntes B2, diap. 33");
L("B2", "b2-emisiones", "Aguas de depuración de gases", 2, "¿Qué valores límite de las aguas residuales de la depuración de gases de las incineradoras son correctos? (varias respuestas)",
  ["Mercurio y sus compuestos: 0,03 mg/L",
   "Dioxinas y furanos: 0,3 ng/L",
   "Zinc y sus compuestos: 0,15 mg/L",
   "Cadmio y sus compuestos: 0,5 mg/L"],
  [0, 1], "Aguas: Hg 0,03 mg/L y dioxinas y furanos 0,3 ng/L (Cd y Tl 0,05; As 0,15; Pb 0,2; Cr, Cu y Ni 0,5; Zn 1,5): el 0,15 es el del arsénico y el 0,5 el del cromo, cobre y níquel. Los 0,05 mg/Nm³ de Hg y los 0,1 ng TEQ/Nm³ son límites de emisión atmosférica.", "Apuntes B2, diap. 34");
L("B2", "b2-emisiones", "Oxígeno de referencia", 1, "En los límites de emisión de las instalaciones de combustión de residuos (incineración), el contenido de oxígeno de referencia es…",
  ["6 %", "3 %", "15 %", "11 %"],
  3, "Incineración de residuos: 11 % de O₂. La coincineración con biomasa o sólidos usa el 6 %, los líquidos el 3 % y las turbinas y motores de gas el 15 %.", "Apuntes B2, diap. 31");

/* Sección 6 · Límites de combustión y ecodiseño */
L("B2", "b2-limites", "Grandes instalaciones", 3, "Para una instalación de combustión de biomasa de 50-100 MW térmicos, los valores límite de SO<sub>2</sub>, NO<sub>x</sub> y partículas (O<sub>2</sub> = 6 %) son…",
  ["200, 300 y 30 mg/Nm³", "400, 300 y 30 mg/Nm³", "300, 300 y 30 mg/Nm³", "200, 250 y 20 mg/Nm³"],
  0, "Biomasa 50-100 MW: SO₂ 200, NOₓ 300, partículas 30. Hulla y lignito: 400/300/30; turba: 300/300/30; biomasa de 100-300 MW: 200/250/20.", "Apuntes B2, diap. 35");
L("B2", "b2-limites", "Gas natural", 3, "En la tabla de límites para instalaciones de combustión de ≥ 50 MW, el valor límite de partículas para el gas natural es…",
  ["30 mg/Nm³", "20 mg/Nm³", "10-30 mg/Nm³", "Ninguna de las otras opciones"],
  3, "Para el gas natural: SO₂ 35, NOₓ 100, partículas 5 y CO 100 mg/Nm³. El intervalo 10-30 corresponde al gas de alto horno; 30 y 20, a combustibles sólidos.", "Apuntes B2, diap. 35");
L("B2", "b2-limites", "Oxígeno de referencia", 1, "En las tablas de límites para instalaciones de combustión, el contenido de O<sub>2</sub> de referencia para las turbinas y los motores de gas es…",
  ["15 %", "3 %", "6 %", "11 %"],
  0, "6 % sólidos, 3 % líquidos y gases, salvo turbinas y motores de gas, que usan el 15 %. El 11 % es el de la incineración de residuos.", "Apuntes B2, diap. 35-36");
L("B2", "b2-limites", "RD 1042/2017", 3, "Una caldera nueva de biomasa sólida de 4 MW térmicos, regulada por el RD 1042/2017, tiene como límites de NO<sub>x</sub> y de partículas…",
  ["500 y 50 mg/Nm³", "300 y 20 mg/Nm³", "300 y 30 mg/Nm³", "500 y 30 mg/Nm³"],
  0, "Valores generales: NOₓ 300 y partículas 20 mg/Nm³, pero las notas fijan 500 mg/Nm³ de NOₓ y 50 mg/Nm³ de partículas entre 1 y 5 MW. El valor de 30 mg/Nm³ de partículas es para 5-20 MW.", "Apuntes B2, diap. 36");
L("B2", "b2-limites", "RD 1042/2017", 2, "Según la nota (1) de la tabla del RD 1042/2017, el límite de 200 mg/Nm³ de SO<sub>2</sub> para la biomasa sólida no se aplica a…",
  ["las instalaciones que queman exclusivamente biomasa sólida leñosa",
   "las instalaciones con una potencia térmica nominal entre 1 y 5 MW",
   "las instalaciones que queman biomasa sólida no leñosa",
   "los motores y turbinas de gas alimentados con biogás"],
  0, "Nota (1): el valor de SO₂ no se aplica si se quema exclusivamente biomasa sólida leñosa. Las notas (2) y (3) modifican NOₓ y partículas según la potencia; la (4) fija 40 mg/Nm³ de SO₂ para el biogás en motores y turbinas.", "Apuntes B2, diap. 36");
L("B2", "b2-limites", "Ecodiseño", 2, "Sobre los reglamentos de ecodiseño de los apuntes, ¿qué afirmaciones son correctas? (varias respuestas)",
  ["El 2015/1189 regula calderas de combustibles sólidos ≤ 500 kW, con O₂ de referencia del 10 %",
   "El 2015/1185 regula aparatos de calefacción local ≤ 50 kW, con O₂ de referencia del 13 %",
   "El 2015/1189 se aplica desde enero de 2022 y el 2015/1185 desde enero de 2020",
   "Ambos reglamentos incluyen las calderas y estufas de biomasa no leñosa"],
  [0, 1], "Las fechas están invertidas (calderas desde enero de 2020; calefacción local desde enero de 2022) y la biomasa no leñosa queda excluida de ambos. Reglamento 2015/1189: calderas de combustibles sólidos ≤ 500 kW (desde enero de 2020), O₂ 10 %. Reglamento 2015/1185: aparatos de calefacción local ≤ 50 kW (desde enero de 2022), O₂ 13 %.", "Apuntes B2, diap. 37");
L("B2", "b2-limites", "Ecodiseño", 3, "Según el Reglamento 2015/1185, los límites de una estufa de pellets (CO, NO<sub>x</sub>, COV y partículas, en mg/Nm³) son…",
  ["300, 200, 60 y 20", "1500, 200, 120 y 40", "500, 200, 20 y 40", "300, 300, 60 y 20"],
  0, "Estufa de pellets: CO 300, NOₓ 200, COV 60, partículas 20. La estufa cerrada y la cocina: 1500/200/120/40; la caldera automática (2015/1189): 500/200/20/40. El NOₓ de 300 mg/Nm³ es para combustibles fósiles.", "Apuntes B2, diap. 37");

/* Sección 7 · Biocarburantes */
L("B2", "b2-biocarburantes", "Bioetanol", 2, "En las rutas de obtención de bioetanol de los apuntes, ¿qué materias primas son de primera generación? (varias respuestas)",
  ["Biomasa azucarada (azúcar, uva)", "Biomasa amilácea (trigo, maíz, cebada)", "Biomasa lignocelulósica (troncos, raíces, tallos)", "Residuos lignocelulósicos de frutos"],
  [0, 1], "Primera generación: azucarada (azúcar, uva) y amilácea (trigo, maíz, cebada). Segunda generación: lignocelulósica (troncos, raíces, tallos, frutos, residuos).", "Apuntes B2, diap. 38");
L("B2", "b2-biocarburantes", "Bioetanol", 2, "¿Qué asociación materia prima–pretratamiento es correcta en el esquema de bioetanol de los apuntes?",
  ["Lignocelulósica: trituración e hidrólisis ácida o enzimática",
   "Amilácea: extracción por presión o difusión",
   "Azucarada: trituración e hidrólisis enzimática",
   "Lignocelulósica: extracción por presión e hidrólisis enzimática"],
  0, "Azucarada: extracción por presión o difusión. Amilácea: trituración e hidrólisis enzimática. Lignocelulósica: trituración e hidrólisis ácida o enzimática. Todas acaban en una solución azucarada fermentable.", "Apuntes B2, diap. 38");
L("B2", "b2-biocarburantes", "Subproductos", 2, "En la producción de bioetanol, los DDGS y las vinazas salen de la etapa de…",
  ["destilación; los DDGS van a alimentación del ganado y las vinazas a depuración y reciclado",
   "fermentación; los DDGS van a alimentación del ganado y las vinazas a depuración y reciclado",
   "destilación; los DDGS van a depuración y reciclado y las vinazas a alimentación del ganado",
   "hidrólisis; los DDGS van a combustión en caldera y las vinazas a alimentación del ganado"],
  0, "Tras la fermentación, en la destilación se separan los DDGS (Dried Distillers Grains with Solubles), destinados a pienso, y las vinazas, que se depuran y reciclan.", "Apuntes B2, diap. 38");
L("B2", "b2-biocarburantes", "Biodiésel", 3, "En el esquema de producción de biodiésel de los apuntes, un aceite usado con más de un 5 % de ácidos grasos libres (FFA)…",
  ["pasa por una esterificación previa con catalizador ácido y metanol antes de la transesterificación",
   "pasa directamente a la transesterificación con catalizador básico y metanol",
   "se refina con hidróxido de sodio antes de la transesterificación con catalizador ácido",
   "se somete a prensado mecánico o a extracción con disolventes para obtener el aceite primario"],
  0, "FFA > 5 %: esterificación (catalizador ácido + metanol, sale agua química) y después transesterificación. FFA < 5 %: transesterificación directa con catalizador básico. El hidróxido de sodio se usa en la refinación de la glicerina.", "Apuntes B2, diap. 39");
L("B2", "b2-biocarburantes", "Transesterificación", 2, "Según el balance de masas de la transesterificación de los apuntes, al procesar 1.000 kg de triglicérido se obtienen aproximadamente…",
  ["110 kg de glicerina", "11 kg de glicerina", "100 kg de glicerina", "330 kg de glicerina"],
  0, "Balance de masas de la transesterificación de los apuntes (Apuntes B2, diap. 39): $$\\underbrace{\\text{triglicérido}}_{100\\ \\text{kg}}+\\underbrace{3\\,\\text{CH}_3\\text{OH}}_{11\\ \\text{kg}}\\rightarrow\\underbrace{3\\ \\text{metiléster}}_{100\\ \\text{kg}}+\\underbrace{\\text{glicerina}}_{11\\ \\text{kg}}$$ Escalando a 1.000 kg de triglicérido (×10): $$m_{glicerina}=11\\cdot\\frac{1000}{100}$$ $$=\\boxed{110\\ \\text{kg}}$$ (y se consumen 110 kg de metanol). 11 kg sería no escalar; 100 kg confunde la glicerina con el metiléster.", "Apuntes B2, diap. 39");
L("B2", "b2-biocarburantes", "Materias primas del biodiésel", 2, "Según el esquema de los apuntes, para producir una tonelada de biodiésel se necesitan aproximadamente…",
  ["5,9 t de palma de aceite o 4,2 t de jatropha",
   "4,2 t de palma de aceite o 5,9 t de jatropha",
   "5,9 t de palma de aceite o 5,9 t de sebo animal",
   "1 t de palma de aceite o 4,2 t de aceite usado"],
  0, "Palma ≈ 5,9 t, jatropha ≈ 4,2 t, sebo animal ≈ 1 t y aceite usado ≈ 1 t por tonelada de biodiésel.", "Apuntes B2, diap. 39");

/* Sección 8 · Problemas resueltos (cálculo con los métodos oficiales) */
L("B2", "b2-problemas", "P1 · Escorias", 2, "Con el método del problema 1, se incineran 5.000 kg/h de un residuo con un 60 % de humedad (base húmeda) y un 40 % de materia no combustible en la materia seca. Si todos los inquemados salen como escorias, el caudal de escorias es…",
  ["800 kg/h", "1.200 kg/h", "2.000 kg/h", "3.000 kg/h"],
  0, "Método del problema 1 (Apuntes P1, diap. 2-4): primero se quita la humedad y después se separa la materia no combustible, que sale como escorias. $$\\dot m_{seco}=5000\\,(1-0{,}6)$$ $$=2000\\ \\text{kg/h}$$ $$\\dot m_{escorias}=2000\\cdot0{,}4$$ $$=\\boxed{800\\ \\text{kg/h}}$$ 1.200 kg/h es la materia seca combustible (2.000 · 0,6), 2.000 kg/h toda la materia seca y 3.000 kg/h la humedad vaporizada.", "Apuntes P1, diap. 3-4");
L("B2", "b2-problemas", "P1 · Oxígeno estequiométrico", 3, "Ajustando la combustión completa como en el problema 1 (C → CO₂, H → H₂O, S → SO₂, N → N₂), ¿cuántos moles de O₂ estequiométrico necesita un mol de un combustible de fórmula C<sub>10</sub>H<sub>16</sub>O<sub>4</sub>S?",
  ["13", "12", "11", "15"],
  0, "Para un combustible $C_xH_yO_zS$ que se quema por completo (C → CO₂, H → H₂O, S → SO₂, N → N₂), el oxígeno estequiométrico es (Apuntes B4, diap. 5, y P1): $$n_{O_2}=x+\\frac{y}{4}+s-\\frac{z}{2}$$ $$n_{O_2}=10+\\frac{16}{4}+1-\\frac{4}{2}$$ $$=10+4+1-2 =\\boxed{13\\ \\text{mol}}$$ Olvidar el azufre da 12; restar los 4 átomos de O sin dividir por 2 da 11; no descontar el oxígeno propio da 15. Con la misma regla, C₇₈H₁₂₀O₂₀N₅S necesita 78 + 30 + 1 − 10 = 99 mol.", "Apuntes P1, diap. 4");
L("B2", "b2-problemas", "P1 · Balance de materia", 3, "Sobre el balance de materia del horno del problema 1 (6.000 kg/h de residuo), ¿qué afirmación es correcta?",
  ["Entradas y salidas suman 15.438 kg/h: 6.000 de residuo + 9.438 de aire = 774 de escorias + 10.464 de gases + 4.200 de humedad",
   "Entradas y salidas suman 15.438 kg/h: 6.000 de residuo + 9.438 de aire = 2.580 de escorias + 8.658 de gases + 4.200 de humedad",
   "Entradas y salidas suman 11.238 kg/h, porque la humedad del residuo no entra en el balance del horno",
   "Entradas y salidas suman 15.438 kg/h, y el N₂ de los gases procede exclusivamente del aire de combustión"],
  0, "Balance del problema 1 (Apuntes P1, diap. 2-5): entradas = residuo + aire; salidas = escorias + gases + humedad vaporizada. $$S_1=6000\\cdot0{,}3\\cdot0{,}43$$ $$=774\\ \\text{kg/h}$$ $$S_3=6000\\cdot0{,}7 =4200\\ \\text{kg/h}$$ $$S_2=2382{,}5+749{,}7+44{,}4+7287{,}7$$ $$=10.464\\ \\text{kg/h}\\ (\\text{CO}_2+\\text{H}_2\\text{O}+\\text{SO}_2+\\text{N}_2)$$ $$\\underbrace{6000+9438}_{E_1+E_2}=\\underbrace{774+10.464+4200}_{S_1+S_2+S_3}$$ $$=\\boxed{15.438\\ \\text{kg/h}}$$ La segunda opción toma las escorias como 6.000 · 0,43 = 2.580 kg/h (olvida quitar antes la humedad). La humedad sí entra y sale del horno. El N₂ de los gases incluye los 5/2 mol de N₂ del propio residuo, no solo el del aire.", "Apuntes P1, diap. 4-5");
L("B2", "b2-problemas", "P1 · Dulong", 3, "Aplicando la fórmula de Dulong modificada del problema 1 a la celulosa (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>: C ≈ 44,4 %, H ≈ 6,2 %, O ≈ 49,4 %), se obtiene un PCS de…",
  ["≈ 3.580 kcal/kg, porque el término (H − O/8) se anula", "≈ 5.680 kcal/kg, porque el término (H − O/8) se anula", "≈ 4.073 kcal/kg, igual que la materia seca del problema 1", "≈ 7.146 kcal/kg, igual que la fracción combustible del problema 1"],
  0, "Composición de la celulosa (C₆H₁₀O₅, M = 162 g/mol): C = 72/162 = 44,4 %, H = 10/162 = 6,2 % y O = 80/162 = 49,4 %. En la fórmula de Dulong modificada (Apuntes P1, diap. 6) el término del hidrógeno se anula porque la masa de H es exactamente O/8: $$H-\\frac{O}{8}=6{,}17-\\frac{49{,}38}{8}$$ $$=6{,}17-6{,}17 =0$$ $$PCS=80{,}6\\cdot44{,}4+339{,}1\\cdot0\\approx\\boxed{3580\\ \\text{kcal/kg}}$$ Sumar 339,1·H sin restar O/8 da ≈ 5.680 kcal/kg. 7.146 y 4.073 kcal/kg son resultados del problema 1.", "Apuntes P1, diap. 6");
L("B2", "b2-problemas", "P1 · PCS del residuo", 2, "La materia seca combustible de un residuo tiene un PCS de 7.146 kcal/kg. Si el residuo tiene un 50 % de humedad y la materia no combustible es el 20 % de la materia seca, el PCS del residuo es…",
  ["≈ 2.858 kcal/kg de residuo", "≈ 5.717 kcal/kg de residuo", "≈ 3.573 kcal/kg de residuo", "≈ 1.429 kcal/kg de residuo"],
  0, "Igual que en el problema 1 (Apuntes P1, diap. 7), el PCS se reduce con los mismos factores que la masa: primero la materia no combustible (20 % de la materia seca) y después la humedad (50 %). $$PCS_{m.s.}=PCS_{MSC}\\,(1-0{,}2)$$ $$=7146\\cdot0{,}8 =5717\\ \\text{kcal/kg}$$ $$PCS_{residuo}=PCS_{m.s.}\\,(1-0{,}5)$$ $$=5717\\cdot0{,}5\\approx\\boxed{2858\\ \\text{kcal/kg}}$$ 5.717 es el PCS de la materia seca (falta la humedad), 3.573 solo descuenta la humedad (7.146 · 0,5) y 1.429 multiplica por la fracción no combustible (7.146 · 0,2) en lugar de por la combustible.", "Apuntes P1, diap. 7");
L("B2", "b2-problemas", "P1 · PCI del residuo", 2, "Un residuo tiene un PCS de 2.000 kcal/kg, un 40 % de humedad y su combustión forma 0,2 kg de agua por kg de residuo. Con L<sub>v</sub> = 550 kcal/kg y el método del problema 1, su PCI es…",
  ["1.670 kcal/kg", "1.780 kcal/kg", "1.890 kcal/kg", "2.330 kcal/kg"],
  0, "Método del problema 1 (Apuntes P1, diap. 7): al PCS se le resta el calor latente del agua que sale en los humos, que es la humedad del residuo más el agua formada en la combustión. $$PCI=PCS-L_v\\,(w+m_{H_2O\\,formada})$$ $$PCI=2000-550\\,(0{,}4+0{,}2) =2000-330$$ $$=\\boxed{1670\\ \\text{kcal/kg}}$$ Descontar solo la humedad da 1.780; solo el agua formada, 1.890; sumar en lugar de restar, 2.330.", "Apuntes P1, diap. 7");
L("B2", "b2-problemas", "P2 · Aire estequiométrico", 3, "Con el método del problema 2, la masa de aire estequiométrico necesaria para quemar 1 kg de glucosa (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, M = 180 g/mol; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O₂ → 6 CO₂ + 6 H₂O) es…",
  ["≈ 4,58 kg", "≈ 5,1 kg", "≈ 1,07 kg", "≈ 3,51 kg"],
  0, "Método del problema 2 (Apuntes P2, diap. 2): el aire lleva 79/21 mol de N₂ por cada mol de O₂. $$m_{O_2}=6\\cdot32 =192\\ \\text{g}$$ $$m_{N_2}=\\tfrac{79}{21}\\cdot6\\cdot28$$ $$=632\\ \\text{g}$$ $$m_{aire}=192+632$$ $$=824\\ \\text{g por mol de glucosa}$$ $$\\frac{m_{aire}}{m_{glucosa}}=\\frac{824}{180}\\approx\\boxed{4{,}58\\ \\text{kg aire/kg}}$$ La glucosa necesita el mismo O₂ por mol que la celulosa, pero pesa más (180 frente a 162 g/mol). 5,1 kg es el de la celulosa (824/162); 1,07 kg solo cuenta el O₂ (192/180) y 3,51 kg solo el N₂ (632/180).", "Apuntes P2, diap. 2");
L("B2", "b2-problemas", "P2 · Exceso de aire", 3, "En el problema 2, al quemar 1 mol de celulosa con un 50 % de exceso de aire, los gases de combustión contienen…",
  ["3 mol de O₂ sin reaccionar y 47,85 mol de gases en total",
   "9 mol de O₂ sin reaccionar y 47,85 mol de gases en total",
   "3 mol de O₂ sin reaccionar y 36,57 mol de gases en total",
   "3 mol de O₂ sin reaccionar y 33,57 mol de gases en total"],
  0, "Método del problema 2 (Apuntes P2, diap. 4). Con un 50 % de exceso sobra la mitad del O₂ estequiométrico y entra un 50 % más de N₂: $$O_2\\ \\text{sobrante}=0{,}5\\cdot6$$ $$=3\\ \\text{mol}$$ $$N_2=\\tfrac{79}{21}\\cdot6\\cdot1{,}5$$ $$=22{,}57+11{,}28 =33{,}85\\ \\text{mol}$$ $$n_{gases}=\\underbrace{6}_{CO_2}+\\underbrace{5}_{H_2O}+\\underbrace{3}_{O_2}+\\underbrace{33{,}85}_{N_2}$$ $$=\\boxed{47{,}85\\ \\text{mol}}$$ con una masa molecular media de 29,21 g/mol (29,38 g/mol y 33,57 mol en condiciones estequiométricas). 36,57 mol olvida el N₂ del exceso; 9 mol de O₂ sería 1,5 · 6, el O₂ que entra, no el que sobra.", "Apuntes P2, diap. 3-4");
L("B2", "b2-problemas", "P3 · Composición del biogás", 2, "En el problema 3 (C<sub>133</sub>H<sub>256</sub>O<sub>70</sub>N<sub>14</sub>S con la ecuación de Buswell), el metano del biogás teórico representa…",
  ["el 51 % en volumen y el 30,1 % en masa", "el 30,1 % en volumen y el 51 % en masa", "el 38,8 % en volumen y el 63,1 % en masa", "el 63,1 % en volumen y el 38,8 % en masa"],
  0, "Problema 3 (Apuntes P3, diap. 2): por cada mol de biomasa se forman 57,5 mol de CO₂, 75,5 de CH₄, 14 de NH₃ y 1 de H₂S (148 mol en total; 4.010 g). $$Y_{CH_4}=\\frac{75{,}5}{148} =0{,}51$$ $$X_{CH_4}=\\frac{75{,}5\\cdot16}{4010}$$ $$=\\frac{1208}{4010} =0{,}301$$ $$\\boxed{CH_4:\\ 51\\ \\%\\ \\text{en volumen y}\\ 30{,}1\\ \\%\\ \\text{en masa}}$$ En volumen cuentan los moles; en masa pesa más el CO₂ (44 g/mol frente a 16), que es el 38,8 % en volumen y el 63,1 % en masa.", "Apuntes P3, diap. 2");
L("B2", "b2-problemas", "P3 · Producción específica", 3, "Si en el problema 3 solo se biodegradara el 60 % de la materia volátil (en lugar del 75 %), la producción específica de metano sería…",
  ["≈ 0,32 Nm³ CH₄/kg", "≈ 0,40 Nm³ CH₄/kg", "≈ 0,53 Nm³ CH₄/kg", "≈ 0,24 Nm³ CH₄/kg"],
  0, "Método del problema 3 (Apuntes P3, diap. 3) cambiando solo la fracción degradada: $$n_{biomasa}=\\frac{1000\\ \\text{g}}{3200\\ \\text{g/mol}}$$ $$=0{,}3125\\ \\text{mol/kg}$$ $$n_{CH_4}=0{,}3125\\cdot0{,}6\\cdot75{,}5$$ $$=14{,}16\\ \\text{mol/kg}$$ $$V_{CH_4}=14{,}16\\cdot22{,}4\\approx317\\ \\text{L}\\approx\\boxed{0{,}32\\ \\text{Nm}^3\\ \\text{CH}_4/\\text{kg}}$$ 0,40 es el resultado oficial con el 75 %; 0,53 supone degradación total; 0,24 usa los 57,5 mol de CO₂ en lugar de los 75,5 de CH₄.", "Apuntes P3, diap. 3");

/* ---------- Tarjetas B2 ---------- */
C("B2", "b2-alternativas", "¿Qué se obtiene al valorizar biomasa y residuos?", "<b>Electricidad</b>, <b>calor</b>, <b>combustibles para el transporte</b> y <b>materias primas para la industria química</b>.");
C("B2", "b2-alternativas", "Diagrama de van Krevelen: ejes y posición de la biomasa", "H/C frente a O/C. Biomasa: O/C ≈ 0,55-0,75 y H/C ≈ 1,3-1,7; diésel y gasolinas: O/C ≈ 0 y H/C ≈ 2.");
C("B2", "b2-alternativas", "Parque español de biomasa y residuos por tamaño (2019)", "El <b>72 %</b> de las plantas (<b>187</b>) tiene ≤ 5 MW: el tamaño lo limita la disponibilidad de recurso.");
C("B2", "b2-combustion", "Tamaño de partícula: lecho fluidizado y cocombustión", "Lecho fluidizado: <b>3-4 cm</b> como máximo. Cocombustión en horno de carbón: <b>&lt; 1 mm</b>.");
C("B2", "b2-combustion", "Humedad de la biomasa antes de quemarla", "&lt; <b>10 %</b> combustión industrial; &lt; <b>30 %</b> combustión doméstica.");
C("B2", "b2-combustion", "Intervalos de potencia: Rankine, ORC, máquina de vapor, Stirling, TG ciclo cerrado", "500 kWe-500 MWe · 400 kWe-1,5 MWe · 25 kWe-1,5 MWe · 1-100 kWe · 500 kWe-500 MWe.");
C("B2", "b2-combustion", "Horno de parrillas de RSU: cifras clave", "Parrillas a <b>25º</b>; gases &gt; <b>850 ºC</b> durante <b>2 s</b>; quemadores auxiliares de gas natural y gasóleo; escape a 160-220 ºC.");
C("B2", "b2-combustion", "Incinerador rotatorio", "8-20 m de largo, Ø 1-5 m, 0,1-20 t/h, <b>500-1450 ºC</b>, residencia <b>30-90 min</b>. Muy adecuado para residuos peligrosos.");
C("B2", "b2-gasificacion", "Poder calorífico del gas según el agente gasificante", "Aire <b>4-7</b> · oxígeno <b>10-20</b> · aire u O<sub>2</sub> + vapor <b>15-20</b> MJ/Nm³.");
C("B2", "b2-gasificacion", "Reacciones endotérmicas de la gasificación", "Boudouard (+159,9), water-gas (+118,5 kJ/mol), reformado con vapor y reformado seco.");
C("B2", "b2-gasificacion", "¿Cómo se eliminan los alquitranes?", "Eliminación de partículas (filtros, ciclones, lavadores), <b>craqueo térmico &gt; 1100 ºC</b> y catalizadores.");
C("B2", "b2-gasificacion", "Gasificación por plasma", "<b>3000-20000 ºC</b> convirtiendo energía eléctrica en calor; el plasma aporta especies reactivas.");
C("B2", "b2-pirolisis", "Pirólisis rápida frente a lenta", "Rápida: segundos, ≈ 700 ºC, 20 % coque, 20 % gas, <b>60 % líquido</b>. Lenta (carbonización): horas, ≈ 400 ºC, <b>80 % coque</b>, 20 % gas.");
C("B2", "b2-pirolisis", "Composición y PCI del gas de pirólisis", "48 % CO, 20 % H<sub>2</sub>, 13 % CH<sub>4</sub>, 6,5 % CO<sub>2</sub>, 6 % insaturados; PCI ≈ <b>4500 kcal/Nm³</b>.");
C("B2", "b2-emisiones", "¿Cuándo es valorización una incineradora de residuos domésticos?", "Eficiencia ≥ <b>0,60</b> (autorizada antes de 2009) o ≥ <b>0,65</b> (después del 31-12-2008). E<sub>p</sub> = 2,6·electricidad + 1,1·calor.");
C("B2", "b2-emisiones", "Fórmula de corrección por oxígeno", "$E_s=\\frac{21-O_s}{21-O_m}E_m$, con O<sub>s</sub> de referencia y O<sub>m</sub> medido (gas seco).");
C("B2", "b2-emisiones", "Límites de la incineración de residuos (O<sub>2</sub> 11 %): partículas, SO<sub>2</sub>, NO<sub>x</sub>", "Partículas 30 (½ h) / 10 (24 h); SO<sub>2</sub> 200 / 50; NO<sub>x</sub> 400 / 400 mg/Nm³; dioxinas 0,1 ng TEQ/Nm³.");
C("B2", "b2-limites", "Ámbitos: RD 815/2013, RD 1042/2017, Reglamentos 2015/1189 y 2015/1185", "≥ 50 MW · 1-50 MW · calderas ≤ 500 kW (O<sub>2</sub> 10 %) · calefacción local ≤ 50 kW (O<sub>2</sub> 13 %).");
C("B2", "b2-biocarburantes", "Subproductos del bioetanol", "<b>DDGS</b> (alimentación del ganado) y <b>vinazas</b> (depuración y reciclado), ambos de la destilación.");
C("B2", "b2-biocarburantes", "Balance de la transesterificación", "100 kg de triglicérido + 11 kg de metanol → 100 kg de metiléster + <b>11 kg de glicerina</b>.");
C("B2", "b2-problemas", "P1: fórmula, aire, PCS y PCI", "C<sub>78</sub>H<sub>120</sub>O<sub>20</sub>N<sub>5</sub>S (1478 g/mol), 99 O<sub>2</sub>; aire 9438 kg/h; PCS 7146 kcal/kg MSC; residuo PCS 1222 y <b>PCI 768 kcal/kg</b>.");
C("B2", "b2-problemas", "P2 y P3: resultados", "Celulosa: <b>5,1 kg aire/kg</b>; M humos 29,38 (esteq.) y 29,21 g/mol (50 % exceso). Buswell: CH<sub>4</sub> 51 % vol., <b>≈ 0,4 Nm³ CH<sub>4</sub>/kg</b>.");

/* ---------- Ejercicios B2 ---------- */
DRILLS.push({ id: "b2-c-reacciones", type: "classify", tema: "B2", sec: "b2-gasificacion", title: "Reacciones de gasificación: ¿exotérmica o endotérmica?", cats: ["Exotérmica", "Endotérmica"], items: [
  ["C + O₂ → CO₂ (combustión completa)", 0], ["C + ½ O₂ → CO (combustión incompleta)", 0], ["C + 2 H₂ → CH₄ (metanización)", 0], ["CO + H₂O → H₂ + CO₂ (water-gas shift)", 0],
  ["C + CO₂ → 2 CO (Boudouard)", 1], ["C + H₂O → H₂ + CO (water-gas)", 1], ["CₙHₘ + n H₂O → n CO + (n + m/2) H₂ (reformado)", 1], ["CₙHₘ + n CO₂ → 2n CO + (m/2) H₂ (reformado seco)", 1] ] });
DRILLS.push({ id: "b2-c-procesos", type: "classify", tema: "B2", sec: "b2-pirolisis", title: "¿Combustión, gasificación o pirólisis?", cats: ["Combustión", "Gasificación", "Pirólisis"], items: [
  ["Parrilla tipo Martin o Düsseldorf", 0], ["Quemadores auxiliares para alcanzar 850 ºC", 0], ["Cocombustión en horno de carbón", 0], ["District heating de Soria", 0],
  ["Oxidación parcial subestequiométrica", 1], ["Lecho fijo up draft / down draft", 1], ["Gas de 4-7 MJ/Nm³ con aire", 1], ["Antorchas de plasma (3000-20000 ºC)", 1],
  ["Descomposición por calor sin oxígeno", 2], ["Carbonización: 80 % coque", 2], ["Reactor de cono rotatorio ablativo", 2], ["Gas con 48 % CO y PCI 4500 kcal/Nm³", 2] ] });
DRILLS.push({ id: "b2-m-oxigeno", type: "match", tema: "B2", sec: "b2-emisiones", title: "Instalación ↔ O₂ de referencia", pairs: [
  ["Incineración de residuos", "11 %"], ["Coincineración con biomasa o sólidos", "6 %"], ["Combustibles líquidos y gases", "3 %"],
  ["Turbinas y motores de gas", "15 %"], ["Calderas ≤ 500 kW (2015/1189)", "10 %"], ["Calefacción local ≤ 50 kW (2015/1185)", "13 %"] ] });
DRILLS.push({ id: "b2-m-cifras", type: "match", tema: "B2", sec: "b2-combustion", title: "Proceso ↔ condición de operación", pairs: [
  ["Horno de parrillas de RSU", "&gt; 850 ºC durante 2 s"], ["Incinerador rotatorio", "500-1450 ºC, 30-90 min"], ["Craqueo térmico de alquitranes", "&gt; 1100 ºC"],
  ["Gasificación por plasma", "3000-20000 ºC"], ["Pirólisis rápida", "≈ 700 ºC, segundos"], ["Pirólisis lenta", "≈ 400 ºC, horas"], ["Gases de escape del horno de parrillas", "160-220 ºC"] ] });
DRILLS.push({ id: "b2-c-biocarb", type: "classify", tema: "B2", sec: "b2-biocarburantes", title: "¿Ruta del bioetanol o del biodiésel?", cats: ["Bioetanol", "Biodiésel"], items: [
  ["DDGS para el ganado", 0], ["Vinazas a depuración", 0], ["Hidrólisis enzimática del almidón", 0], ["Fermentación de la solución azucarada", 0], ["Biomasa amilácea (trigo, maíz)", 0],
  ["Transesterificación con metanol", 1], ["Glicerina como subproducto", 1], ["Esterificación previa si FFA &gt; 5 %", 1], ["Tercera generación: algas", 1], ["Jatropha (≈ 4,2 t/t)", 1] ] });

/* ---------- Trucos de memoria B2 ---------- */
MNEMO["b2-alternativas"] = ["Van Krevelen: la biomasa «tiene oxígeno de sobra»; para llegar al diésel (O/C ≈ 0, H/C ≈ 2) la flecha va hacia la izquierda y hacia arriba.", "«72 % pequeñitas»: 187 plantas de ≤ 5 MW, porque el recurso manda.", "Curtis Teixeiro, la reina de la tabla: 50 MW y 500.000 t/año."];
MNEMO["b2-combustion"] = ["Partículas «de mayor a menor»: lecho fluidizado 3-4 <b>cm</b>, cocombustión &lt; 1 <b>mm</b>.", "Secado «10 en la fábrica, 30 en casa».", "Horno de parrillas «25-850-2»: 25º de inclinación, 850 ºC, 2 segundos.", "Rotatorio «8-20 de largo, 1-5 de ancho, 30-90 minutos»: largo, lento y para peligrosos."];
MNEMO["b2-gasificacion"] = ["Agente gasificante «4-7, 10-20, 15-20»: el aire diluye con nitrógeno, el oxígeno concentra y el vapor remata.", "Las reacciones que <b>rompen</b> C con CO₂ o H₂O (Boudouard, water-gas, reformados) piden calor: endotérmicas. La «shift» parte de CO y desprende calor.", "Up draft: el aire «sube» desde abajo y el gas sale arriba; down draft: el gas «baja» y sale abajo."];
MNEMO["b2-pirolisis"] = ["Rápida «20-20-60»: el líquido gana. Lenta «80-20»: el carbón gana (carbonización).", "«Sin oxígeno, piro; con poco, gasifico; con mucho, quemo».", "Gas de pirólisis «48-20-13»: CO, H₂ y CH₄; 4500 kcal/Nm³."];
MNEMO["b2-emisiones"] = ["Valorización «60 los viejos, 65 los nuevos» (frontera: 2009). Electricidad ×2,6, calor ×1,1, pérdidas 0,97.", "Corrección: «21 menos la referencia arriba, 21 menos lo medido abajo». Más oxígeno medido ⇒ concentración corregida mayor.", "Incineración «al 11»: media de 24 h de SO₂ = 50 y de partículas = 10."];
MNEMO["b2-limites"] = ["Biomasa en grandes instalaciones: SO₂ «200 siempre».", "RD 1042 «1-5 se suaviza»: entre 1 y 5 MW, NOₓ 500 y partículas 50.", "Ecodiseño «1189-500-10» (calderas) y «1185-50-13» (calefacción local)."];
MNEMO["b2-biocarburantes"] = ["Bioetanol «azúcar y almidón primero, madera después»: 1.ª azucarada y amilácea, 2.ª lignocelulósica.", "«DDGS al ganado, vinazas a depurar».", "Transesterificación «100 + 11 = 100 + 11»: triglicérido + metanol = metiléster + glicerina."];
MNEMO["b2-problemas"] = ["Cadena del P1: residuo × (1 − humedad) = seco; seco × (1 − cenizas) = combustible. El PCS se reduce con los mismos factores.", "PCI = PCS − 550·(humedad + agua formada): no olvides el agua que forma el hidrógeno.", "Aire: por cada mol de O₂, 79/21 = 3,76 mol de N₂. Celulosa: 824 g de aire por mol ⇒ 5,1 kg/kg.", "Buswell (P3): 51 % de CH₄ en volumen, pero solo 30 % en masa; ≈ 0,4 Nm³ CH₄/kg."];

/* ---------- Diagramas B2 ---------- */
DIAGRAMS.push({ sec: "b2-alternativas", h4: "Diagrama de van Krevelen", cap: "Diagrama de van Krevelen simplificado (valores leídos de la diap. 3): la biomasa tiene mucho más oxígeno que los combustibles de transporte; convertirla en diésel o gasolina exige desplazarla hacia O/C ≈ 0 y H/C ≈ 2.", svg: `<svg class="dg" viewBox="0 0 520 292" role="img" aria-label="Diagrama de van Krevelen con la posición de biomasa, celulosa, lignina y combustibles">
<defs><marker id="b2Ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="#1e40af"/></marker></defs>
<g class="grid"><line x1="170" y1="30" x2="170" y2="250"/><line x1="280" y1="30" x2="280" y2="250"/><line x1="390" y1="30" x2="390" y2="250"/><line x1="60" y1="195" x2="500" y2="195"/><line x1="60" y1="140" x2="500" y2="140"/><line x1="60" y1="85" x2="500" y2="85"/><line x1="60" y1="30" x2="500" y2="30"/></g>
<line x1="60" y1="250" x2="500" y2="250" class="ax"/><line x1="60" y1="250" x2="60" y2="30" class="ax"/>
<g class="small2 mut" text-anchor="middle"><text x="60" y="265">0</text><text x="170" y="265">0,5</text><text x="280" y="265">1</text><text x="390" y="265">1,5</text><text x="500" y="265">2</text></g>
<g class="small2 mut" text-anchor="end"><text x="54" y="254">0</text><text x="54" y="199">1</text><text x="54" y="144">2</text><text x="54" y="89">3</text><text x="54" y="34">4</text></g>
<text x="280" y="285" text-anchor="middle" class="tb">Relación O/C</text><text x="20" y="140" text-anchor="middle" class="tb" transform="rotate(-90 20 140)">Relación H/C</text>
<ellipse cx="203" cy="167" rx="24" ry="12" fill="#dcfce7" stroke="#0d9488"/><text x="232" y="186" class="small2 tb">Biomasa</text>
<ellipse cx="82" cy="233" rx="22" ry="11" fill="none" stroke="#64748b" stroke-dasharray="3 3"/><text x="108" y="237" class="small2 mut">Cenizas</text>
<g fill="#c2413b"><circle cx="62" cy="140" r="4"/><circle cx="60" cy="85" r="3.5"/><circle cx="60" cy="101" r="3.5"/><circle cx="133" cy="137" r="3.5"/><circle cx="170" cy="85" r="3.5"/><circle cx="280" cy="30" r="3.5"/><circle cx="280" cy="85" r="3.5"/><circle cx="280" cy="101" r="3.5"/><circle cx="280" cy="140" r="3.5"/><circle cx="240" cy="156" r="3.5"/><circle cx="141" cy="184" r="3"/><circle cx="149" cy="188" r="3"/><circle cx="150" cy="180" r="3"/><circle cx="280" cy="250" r="3.5"/><circle cx="500" cy="250" r="3.5"/></g>
<g class="small2"><text x="68" y="81">Etano</text><text x="68" y="106">Propano</text><text x="66" y="168">Diésel / gasolinas</text><text x="124" y="128">Acetona</text><text x="176" y="81">Etanol</text><text x="288" y="34">Metanol</text><text x="288" y="82">EG</text><text x="288" y="106">Glicerol</text><text x="288" y="144">Ácido láctico</text><text x="248" y="153">Celulosa</text><text x="112" y="204">Lignina</text><text x="288" y="246">CO</text><text x="494" y="242" text-anchor="end">CO₂</text></g>
<line x1="190" y1="156" x2="74" y2="139" stroke="#1e40af" stroke-width="2" marker-end="url(#b2Ar1)"/>
</svg>` });

DIAGRAMS.push({ sec: "b2-alternativas", h4: "Plantas de biomasa en España", cap: "Parque de generación de biomasa y residuos renovables en España por rango de potencia (APPA, 2019): muchas plantas pequeñas y poca potencia en ellas; las 16 plantas de 25-50 MW concentran 585 MW.", svg: `<svg class="dg" viewBox="0 0 520 252" role="img" aria-label="Número de plantas y potencia instalada por rango de potencia">
<text x="140" y="18" text-anchor="middle" class="tb">Nº de plantas</text><text x="390" y="18" text-anchor="middle" class="tb">Potencia instalada (MW)</text>
<line x1="40" y1="215" x2="255" y2="215" class="ax"/><line x1="290" y1="215" x2="505" y2="215" class="ax"/>
<g class="fl" stroke="#2563eb"><rect x="50" y="90.4" width="30" height="124.6"/><rect x="92" y="77.8" width="30" height="137.2"/><rect x="134" y="173" width="30" height="42"/><rect x="176" y="178.6" width="30" height="36.4"/><rect x="218" y="192.6" width="30" height="22.4"/></g>
<g fill="#fef3c7" stroke="#d97706"><rect x="300" y="205.6" width="30" height="9.4"/><rect x="342" y="171" width="30" height="44"/><rect x="384" y="164.2" width="30" height="50.8"/><rect x="426" y="117" width="30" height="98"/><rect x="468" y="77.5" width="30" height="137.5"/></g>
<g class="small2 tb" text-anchor="middle"><text x="65" y="86">89</text><text x="107" y="73">98</text><text x="149" y="168">30</text><text x="191" y="174">26</text><text x="233" y="188">16</text>
<text x="315" y="201">40</text><text x="357" y="166">187</text><text x="399" y="159">216</text><text x="441" y="112">417</text><text x="483" y="72">585</text></g>
<g class="small2 mut" text-anchor="middle"><text x="65" y="230">≤ 1</text><text x="107" y="230">1-5</text><text x="149" y="230">5-10</text><text x="191" y="230">10-25</text><text x="233" y="230">25-50</text>
<text x="315" y="230">≤ 1</text><text x="357" y="230">1-5</text><text x="399" y="230">5-10</text><text x="441" y="230">10-25</text><text x="483" y="230">25-50</text>
<text x="147" y="246">Rango de potencia (MW)</text><text x="397" y="246">Rango de potencia (MW)</text></g>
<path d="M50,62 L50,56 L122,56 L122,62" fill="none" stroke="#c2413b"/><text x="86" y="50" text-anchor="middle" class="small2 ko">72 % (187) ≤ 5 MW</text>
</svg>` });

DIAGRAMS.push({ sec: "b2-combustion", h4: "Incineración de residuos municipales", cap: "Recorrido del residuo y de los gases en una incineradora de RSU con horno de parrillas (diap. 14-15). Los quemadores auxiliares de gas natural o gasóleo garantizan los 850 ºC a partir de los cuales la combustión es autosuficiente.", svg: `<svg class="dg" viewBox="0 0 520 226" role="img" aria-label="Esquema de flujo de una incineradora de residuos municipales">
<defs><marker id="b2Ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<rect x="15" y="20" width="140" height="54" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="85" y="43" text-anchor="middle" class="tb small2">Foso de residuos</text><text x="85" y="60" text-anchor="middle" class="small2">recepción de camiones</text>
<rect x="190" y="20" width="140" height="54" rx="8" class="box"/><text x="260" y="43" text-anchor="middle" class="tb small2">Horno de parrillas</text><text x="260" y="60" text-anchor="middle" class="small2">inclinadas ≈ 25º</text>
<rect x="365" y="20" width="140" height="54" rx="8" fill="#fef3c7" stroke="#c2413b"/><text x="435" y="43" text-anchor="middle" class="tb small2">Cámara de combustión</text><text x="435" y="60" text-anchor="middle" class="small2">&gt; 850 ºC durante 2 s</text>
<rect x="365" y="140" width="140" height="54" rx="8" fill="#eef3fb" stroke="#2563eb"/><text x="435" y="163" text-anchor="middle" class="tb small2">Caldera</text><text x="435" y="180" text-anchor="middle" class="small2">electricidad / calor</text>
<rect x="190" y="140" width="140" height="54" rx="8" class="box"/><text x="260" y="163" text-anchor="middle" class="tb small2">Tratamiento de gases</text><text x="260" y="180" text-anchor="middle" class="small2">+ filtro de mangas</text>
<rect x="15" y="140" width="140" height="54" rx="8" class="box"/><text x="85" y="163" text-anchor="middle" class="tb small2">Ventilador y chimenea</text><text x="85" y="180" text-anchor="middle" class="small2">gases a 160-220 ºC</text>
<g stroke="#64748b" fill="none"><line x1="155" y1="47" x2="188" y2="47" marker-end="url(#b2Ar2)"/><line x1="330" y1="47" x2="363" y2="47" marker-end="url(#b2Ar2)"/><line x1="435" y1="74" x2="435" y2="138" marker-end="url(#b2Ar2)"/><line x1="365" y1="167" x2="332" y2="167" marker-end="url(#b2Ar2)"/><line x1="190" y1="167" x2="157" y2="167" marker-end="url(#b2Ar2)"/><line x1="215" y1="118" x2="215" y2="76" marker-end="url(#b2Ar2)"/></g>
<text x="223" y="98" class="small2 mut">aire primario y secundario</text><text x="270" y="116" class="small2 mut">escorias e inquemados ↓</text>
<text x="445" y="104" class="small2 mut">humos</text>
<text x="260" y="216" text-anchor="middle" class="small2 ko">Quemadores auxiliares (gas natural, gasóleo) hasta 850 ºC</text>
</svg>` });

DIAGRAMS.push({ sec: "b2-gasificacion", h4: "Tipos de gasificadores", cap: "Gasificadores de lecho fijo (diap. 22): en el <i>up draft</i> el aire entra por abajo y el gas sale por arriba; en el <i>down draft</i> el aire entra a media altura y el gas sale por abajo tras la reducción; en el <i>cross draft</i> el aire entra por un lateral y el gas sale por el opuesto.", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Zonas de los gasificadores de lecho fijo up draft, down draft y cross draft">
<defs><marker id="b2Ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#1e40af"/></marker></defs>
<g class="tb" text-anchor="middle"><text x="80" y="18">Up draft</text><text x="250" y="18">Down draft</text><text x="420" y="18">Cross draft</text></g>
<g stroke="#64748b" stroke-width="0.8">
<rect x="25" y="50" width="110" height="34" fill="#fef3c7"/><rect x="25" y="84" width="110" height="34" fill="#c2413b" fill-opacity="0.2"/><rect x="25" y="118" width="110" height="34" fill="#d97706" fill-opacity="0.22"/><rect x="25" y="152" width="110" height="34" fill="#2563eb" fill-opacity="0.22"/>
<rect x="195" y="50" width="110" height="34" fill="#fef3c7"/><rect x="195" y="84" width="110" height="34" fill="#c2413b" fill-opacity="0.2"/><rect x="195" y="118" width="110" height="34" fill="#2563eb" fill-opacity="0.22"/><rect x="195" y="152" width="110" height="34" fill="#d97706" fill-opacity="0.22"/>
<rect x="365" y="50" width="110" height="34" fill="#fef3c7"/><rect x="365" y="84" width="110" height="34" fill="#c2413b" fill-opacity="0.2"/><rect x="365" y="118" width="55" height="34" fill="#2563eb" fill-opacity="0.22"/><rect x="420" y="118" width="55" height="34" fill="#d97706" fill-opacity="0.22"/><rect x="365" y="152" width="110" height="34" fill="#f1f5fd"/></g>
<g class="small2" text-anchor="middle"><text x="80" y="71">Secado</text><text x="80" y="105">Pirólisis</text><text x="80" y="139">Reducción</text><text x="80" y="173">Oxidación</text>
<text x="250" y="71">Secado</text><text x="250" y="105">Pirólisis</text><text x="250" y="139">Oxidación</text><text x="250" y="173">Reducción</text>
<text x="420" y="71">Secado</text><text x="420" y="105">Pirólisis</text><text x="392" y="139">Oxid.</text><text x="447" y="139">Reduc.</text><text x="420" y="173">Cenizas</text></g>
<g stroke="#64748b" fill="none"><line x1="80" y1="32" x2="80" y2="48" marker-end="url(#b2Ar3)"/><line x1="250" y1="32" x2="250" y2="48" marker-end="url(#b2Ar3)"/><line x1="420" y1="32" x2="420" y2="48" marker-end="url(#b2Ar3)"/></g>
<g stroke="#1e40af" stroke-width="1.6" fill="none">
<line x1="80" y1="214" x2="80" y2="189" marker-end="url(#b2Ar3)"/><line x1="135" y1="60" x2="166" y2="60" marker-end="url(#b2Ar3)"/>
<line x1="168" y1="135" x2="193" y2="135" marker-end="url(#b2Ar3)"/><line x1="332" y1="135" x2="307" y2="135" marker-end="url(#b2Ar3)"/><line x1="250" y1="187" x2="250" y2="214" marker-end="url(#b2Ar3)"/>
<line x1="340" y1="135" x2="363" y2="135" marker-end="url(#b2Ar3)"/><line x1="475" y1="135" x2="504" y2="135" marker-end="url(#b2Ar3)"/></g>
<g class="small2 tb"><text x="80" y="230" text-anchor="middle">Aire</text><text x="152" y="52" text-anchor="middle">Gas</text><text x="178" y="126" text-anchor="middle">Aire</text><text x="320" y="126" text-anchor="middle">Aire</text><text x="250" y="230" text-anchor="middle">Gas</text><text x="350" y="152" text-anchor="middle">Aire</text><text x="490" y="126" text-anchor="middle">Gas</text></g>
<text x="420" y="230" text-anchor="middle" class="small2 mut">El combustible entra por arriba</text>
</svg>` });

DIAGRAMS.push({ sec: "b2-pirolisis", h4: "Pirólisis rápida y lenta", cap: "Reparto de productos de la pirólisis (diap. 26): la rápida maximiza el líquido; la lenta (carbonización), el coque.", svg: `<svg class="dg" viewBox="0 0 520 196" role="img" aria-label="Reparto de productos de la pirólisis rápida y lenta">
<text x="10" y="56" class="tb">Rápida</text><text x="10" y="72" class="small2 mut">≈ 700 ºC, s</text>
<text x="10" y="136" class="tb">Lenta</text><text x="10" y="152" class="small2 mut">≈ 400 ºC, h</text>
<rect x="100" y="42" width="80" height="38" fill="#475569" fill-opacity="0.35" stroke="#64748b"/><rect x="180" y="42" width="80" height="38" fill="#f1f5fd" stroke="#0891b2"/><rect x="260" y="42" width="240" height="38" fill="#fef3c7" stroke="#d97706"/>
<rect x="100" y="122" width="320" height="38" fill="#475569" fill-opacity="0.35" stroke="#64748b"/><rect x="420" y="122" width="80" height="38" fill="#f1f5fd" stroke="#0891b2"/>
<g class="small2 tb" text-anchor="middle"><text x="140" y="65">Coque 20 %</text><text x="220" y="65">Gas 20 %</text><text x="380" y="65">Líquido 60 %</text><text x="260" y="145">Coque 80 %</text><text x="460" y="145">Gas 20 %</text></g>
<g class="small2 mut" text-anchor="middle"><text x="100" y="186">0 %</text><text x="300" y="186">50 %</text><text x="500" y="186">100 %</text></g>
<line x1="100" y1="172" x2="500" y2="172" class="ax"/>
<text x="300" y="112" text-anchor="middle" class="small2 mut">Pirólisis lenta = carbonización</text>
<text x="300" y="30" text-anchor="middle" class="small2 mut">La mayor parte de las instalaciones</text>
</svg>` });

DIAGRAMS.push({ sec: "b2-emisiones", h4: "Corrección por oxígeno", cap: "Factor de corrección (21 − O<sub>s</sub>)/(21 − O<sub>m</sub>) en función del oxígeno medido, para las referencias del 6 % (coincineración, sólidos) y del 11 % (incineración). Medir más oxígeno que el de referencia multiplica la concentración: con O<sub>m</sub> = 9 % y O<sub>s</sub> = 6 %, ×1,25.", svg: `<svg class="dg" viewBox="0 0 520 262" role="img" aria-label="Factor de corrección por oxígeno frente al oxígeno medido">
<g class="grid"><line x1="60" y1="160" x2="490" y2="160"/><line x1="60" y1="100" x2="490" y2="100"/><line x1="60" y1="40" x2="490" y2="40"/><line x1="159.2" y1="40" x2="159.2" y2="220"/><line x1="324.6" y1="40" x2="324.6" y2="220"/><line x1="456.9" y1="40" x2="456.9" y2="220"/></g>
<line x1="60" y1="220" x2="490" y2="220" class="ax"/><line x1="60" y1="220" x2="60" y2="36" class="ax"/>
<g class="small2 mut" text-anchor="end"><text x="54" y="224">0</text><text x="54" y="164">1</text><text x="54" y="104">2</text><text x="54" y="44">3</text></g>
<g class="small2 mut" text-anchor="middle"><text x="60" y="236">3</text><text x="159.2" y="236">6</text><text x="258.5" y="236">9</text><text x="324.6" y="236">11</text><text x="456.9" y="236">15</text><text x="490" y="236">16</text></g>
<text x="275" y="255" text-anchor="middle" class="tb">O₂ medido (%)</text><text x="18" y="130" text-anchor="middle" class="tb" transform="rotate(-90 18 130)">Factor de corrección</text>
<line x1="60" y1="160" x2="490" y2="160" class="dash" stroke="#64748b"/>
<polyline class="ln" fill="none" points="60.0,170.0 76.5,168.6 93.1,167.1 109.6,165.5 126.2,163.8 142.7,161.9 159.2,160.0 175.8,157.9 192.3,155.7 208.8,153.3 225.4,150.8 241.9,148.0 258.5,145.0 275.0,141.7 291.5,138.2 308.1,134.3 324.6,130.0 341.2,125.3 357.7,120.0 374.2,114.1 390.8,107.5 407.3,100.0 423.8,91.4 440.4,81.5 456.9,70.0 473.5,56.4 490.0,40.0"/>
<polyline class="ln3" fill="none" points="60.0,186.7 76.5,185.7 93.1,184.7 109.6,183.6 126.2,182.5 142.7,181.3 159.2,180.0 175.8,178.6 192.3,177.1 208.8,175.6 225.4,173.8 241.9,172.0 258.5,170.0 275.0,167.8 291.5,165.5 308.1,162.9 324.6,160.0 341.2,156.8 357.7,153.3 374.2,149.4 390.8,145.0 407.3,140.0 423.8,134.3 440.4,127.7 456.9,120.0 473.5,110.9 490.0,100.0"/>
<circle cx="258.5" cy="145" r="4.5" fill="#c2413b"/><text x="250" y="130" text-anchor="end" class="small2 ko">9 % medido, ref. 6 %: ×1,25</text>
<circle cx="456.9" cy="120" r="4.5" fill="#0891b2"/><text x="468" y="140" class="small2">×1,67</text>
<text x="400" y="60" text-anchor="end" class="small2 tb" fill="#2563eb">Referencia 6 %</text>
<text x="300" y="188" class="small2 tb" fill="#0891b2">Referencia 11 %</text>
<text x="486" y="174" text-anchor="end" class="small2 mut">factor = 1</text>
</svg>` });

DIAGRAMS.push({ sec: "b2-biocarburantes", h4: "Rutas de obtención de bioetanol", cap: "Rutas de obtención de bioetanol (diap. 38): tres materias primas, un pretratamiento propio de cada una y un tronco común de fermentación y destilación, con DDGS y vinazas como subproductos.", svg: `<svg class="dg" viewBox="0 0 520 346" role="img" aria-label="Diagrama de flujo de las rutas de obtención de bioetanol">
<defs><marker id="b2Ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#0d9488"/></marker></defs>
<rect x="15" y="14" width="150" height="44" rx="6" fill="#dcfce7" stroke="#0d9488"/><text x="90" y="32" text-anchor="middle" class="small2 tb">Azucarada (1.ª gen.)</text><text x="90" y="49" text-anchor="middle" class="small2">azúcar, uva</text>
<rect x="185" y="14" width="150" height="44" rx="6" fill="#dcfce7" stroke="#0d9488"/><text x="260" y="32" text-anchor="middle" class="small2 tb">Amilácea (1.ª gen.)</text><text x="260" y="49" text-anchor="middle" class="small2">trigo, maíz, cebada</text>
<rect x="355" y="14" width="150" height="44" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="430" y="32" text-anchor="middle" class="small2 tb">Lignocelulósica (2.ª)</text><text x="430" y="49" text-anchor="middle" class="small2">troncos, tallos, residuos</text>
<rect x="15" y="78" width="150" height="44" rx="6" class="box"/><text x="90" y="96" text-anchor="middle" class="small2">Extracción por</text><text x="90" y="113" text-anchor="middle" class="small2">presión o difusión</text>
<rect x="185" y="78" width="150" height="44" rx="6" class="box"/><text x="260" y="96" text-anchor="middle" class="small2">Trituración +</text><text x="260" y="113" text-anchor="middle" class="small2">hidrólisis enzimática</text>
<rect x="355" y="78" width="150" height="44" rx="6" class="box"/><text x="430" y="96" text-anchor="middle" class="small2">Trituración + hidrólisis</text><text x="430" y="113" text-anchor="middle" class="small2">ácida o enzimática</text>
<rect x="15" y="142" width="490" height="30" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="260" y="162" text-anchor="middle" class="small2 tb">Solución azucarada fermentable</text>
<rect x="185" y="192" width="150" height="30" rx="6" class="box"/><text x="260" y="212" text-anchor="middle" class="small2">Fermentación</text>
<rect x="185" y="242" width="150" height="30" rx="6" class="box"/><text x="260" y="262" text-anchor="middle" class="small2">Destilación</text>
<rect x="185" y="300" width="150" height="34" rx="6" fill="#dcfce7" stroke="#0d9488"/><text x="260" y="322" text-anchor="middle" class="tb">Bioetanol</text>
<g stroke="#0d9488" fill="none"><line x1="90" y1="58" x2="90" y2="76" marker-end="url(#b2Ar4)"/><line x1="260" y1="58" x2="260" y2="76" marker-end="url(#b2Ar4)"/><line x1="430" y1="58" x2="430" y2="76" marker-end="url(#b2Ar4)"/>
<line x1="90" y1="122" x2="90" y2="140" marker-end="url(#b2Ar4)"/><line x1="260" y1="122" x2="260" y2="140" marker-end="url(#b2Ar4)"/><line x1="430" y1="122" x2="430" y2="140" marker-end="url(#b2Ar4)"/>
<line x1="260" y1="172" x2="260" y2="190" marker-end="url(#b2Ar4)"/><line x1="260" y1="222" x2="260" y2="240" marker-end="url(#b2Ar4)"/><line x1="260" y1="272" x2="260" y2="298" marker-end="url(#b2Ar4)"/>
<line x1="185" y1="257" x2="150" y2="257" marker-end="url(#b2Ar4)"/><line x1="335" y1="257" x2="370" y2="257" marker-end="url(#b2Ar4)"/></g>
<text x="145" y="254" text-anchor="end" class="small2 tb">DDGS</text><text x="145" y="270" text-anchor="end" class="small2 mut">→ alimentación ganado</text>
<text x="375" y="254" class="small2 tb">Vinazas</text><text x="375" y="270" class="small2 mut">→ depuración y reciclado</text>
</svg>` });
