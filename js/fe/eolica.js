/* Tema EOL · Energía eólica · fuentes: Energia_Eolica_1.pdf (EOL1), Energia_Eolica_2.pdf (EOL2)
   y Ejercicio_Eolica_2026-2027.pdf (guion del trabajo de eólica) */

THEORY.EOL = {
  summary: [
    "Escalas del viento: <b>macroescala</b> (≈ 1000 km, hasta 12-15 km de altura, alisios y polares; calentamiento desigual + Coriolis + rozamiento), <b>mesoescala</b> (10-500 km, brisas y vientos de valle; 1-1,5 km de altura) y <b>microescala</b> (viento local, obstáculos y colinas).",
    "Perfil de velocidades (capa límite): ley potencial $v=v_{ref}(z/z_{ref})^n$ con <b>n = 0,1-0,13</b> (mar, playa) hasta <b>0,27-0,4</b> (edificios), o ley logarítmica con la longitud de rugosidad <b>z<sub>0</sub></b> (0,0002 m en el mar; 1,6 m en ciudades con rascacielos).",
    "Para caracterizar un emplazamiento se usan datos de los <b>últimos 4 o 5 años</b> a una altura determinada: velocidad media y varianza diaria, mensual y anual, <b>histograma</b> y <b>rosa de los vientos</b>.",
    "La frecuencia de velocidades se ajusta a una <b>Weibull</b> con forma <b>k (1,3-3)</b> y escala <b>c</b>; se obtienen linealizando la acumulada: $\\ln(-\\ln(1-F))=k\\ln v-k\\ln c$. Con k = 2, $v_{ave}=0{,}886\\,c$.",
    "Ventajas: renovable, sin emisiones en operación, autóctona, construcción en <b>menos de 6 meses</b>, parques de <b>600 kW a 200 MW</b>, desmantelable. Inconvenientes: impacto visual, sombra, avifauna, ruido (vivienda a ≥ <b>200 m, 43 dB(A)</b>) y, sobre todo, la <b>intermitencia</b>.",
    "Mundo 2025: <b>1299 GW</b> eólicos (1206,5 onshore + 92,5 offshore) frente a un máximo teórico de <b>72 TW</b>. China lidera onshore (49,1 %) y offshore (52,3 %); en 2020 lideraba el Reino Unido en offshore.",
    "España 2025: <b>33,3 GW</b> eólicos, <b>segunda</b> tecnología en potencia tras la fotovoltaica (41,7 GW), pero <b>primera productora</b> de electricidad: 58 801 GWh (21,6 %) sin contar el autoconsumo.",
    "Potencia: $W=\\tfrac12\\rho C_pV^3\\,\\pi D^2/4$ → crece <b>linealmente con ρ</b>, con el <b>cubo de la velocidad</b> y con el <b>cuadrado del diámetro</b>.",
    "<b>Límite de Betz</b>: con la hipótesis de velocidad en el rotor igual a la media de entrada y salida, el óptimo es <b>a = 1/3</b> y $C_{p,max}=16/27\\approx0{,}593$.",
    "<b>Velocidad específica</b> λ = ΩR/U (punta de pala / viento). El tripala de eje horizontal da el mayor C<sub>p</sub> (≈ 0,49); menos palas → más velocidad de giro.",
    "Curva de potencia: nada por debajo de la <b>velocidad de arranque</b>, crece con V³ hasta la <b>nominal</b> y se para por encima de la de <b>corte</b>. <b>Factor de carga</b> = producción anual / producción teórica a potencia nominal.",
    "Pala: resina con fibra de vidrio o carbono (infusión), <b>baja reciclabilidad</b>. Generador <b>síncrono</b> (más rendimiento, autónomo, control complejo) frente a <b>asíncrono</b> (barato, robusto, necesita red y condensadores).",
    "Offshore: más recurso y máquinas mayores, pero más caro (CAPEX 2010 ≈ <b>2845 k€/MW</b> frente a 992-1307 k€/MW en tierra). Cimentación fija hasta ≈ <b>50 m</b>; en España el mar pasa pronto de 60 m → <b>flotante</b> (PLOCAN y BIMEP).",
    "Previsión GWEC: de <b>164,6 GW</b> nuevos en 2025 a <b>211,8 GW</b> en 2030 (CAGR 5,2 %), con el offshore pasando de 9,3 a 33,3 GW/año; aun así no basta para la senda de 1,5 ºC."
  ],
  sections: [
    { id: "eol-recurso", title: "1. Introducción y recurso eólico: escalas y perfil de velocidades", slides: ["EOL1", 1, 7], html: `
<p>El aprovechamiento del viento es antiquísimo: los <b>primeros barcos de vela</b> documentados, los <b>molinos de viento</b> de Castilla-La Mancha y la <b>primera turbina eólica</b> para producir electricidad, construida en <b>1887</b> por <b>Charles F. Brush</b> (EOL1, diap. 3).</p>
<h4>Escalas del viento</h4>
<table class="tbl cmp"><thead><tr><th>Escala</th><th>Tamaño</th><th>Origen y ejemplos</th><th>Altura</th></tr></thead><tbody>
<tr><td>Macroescala</td><td>≈ 1000 km</td><td>Calentamiento desigual de la superficie terrestre, influido por la <b>aceleración de Coriolis</b> y el rozamiento con la corteza. <b>Vientos alisios y polares</b></td><td>Hasta 12-15 km</td></tr>
<tr><td>Mesoescala</td><td>10-500 km</td><td><b>Brisas marinas</b>, vientos de cordilleras y valles</td><td>1-1,5 km</td></tr>
<tr><td>Microescala</td><td>Local</td><td>Viento local: perturbaciones debidas a obstáculos, colinas, promontorios. Aquí se define el <b>perfil de velocidades</b></td><td>Capa límite</td></tr>
</tbody></table>
<h4>Brisas de mesoescala</h4>
<p>Los esquemas de la diap. 5 muestran cuatro brisas ligadas al ciclo día-noche:</p>
<ul><li><b>Brisa de valle</b> o viento <b>anabático</b> (<b>diurna</b>): el aire sube por las laderas calentadas por el sol.</li>
<li><b>Brisa de montaña</b> o viento <b>catabático</b> (<b>nocturna</b>): el aire frío baja por las laderas hacia el valle.</li>
<li><b>Brisa de mar</b> (<b>diurna</b>): en superficie el aire va del mar hacia tierra.</li>
<li><b>Brisa de tierra</b> (<b>nocturna</b>): en superficie el aire va de tierra hacia el mar.</li></ul>
<h4>Ley potencial: perfil según la rugosidad</h4>
<p>En la microescala la velocidad aumenta con la altura dentro de la <b>capa límite</b>, tanto más despacio cerca del suelo cuanto más rugoso es el terreno. Con una medida de referencia $v_{ref}$ a la altura $z_{ref}$:</p>
<div class="formula">$$v=v_{ref}\\left(\\frac{z}{z_{ref}}\\right)^{n}$$</div>
<table class="tbl"><thead><tr><th>Terreno</th><th>Rugosidad n</th></tr></thead><tbody>
<tr><td>Plano (mar, playa)</td><td>0,1-0,13</td></tr>
<tr><td>Moderado rugoso (región rural)</td><td>0,13-0,2</td></tr>
<tr><td>Rugoso (bosque)</td><td>0,2-0,27</td></tr>
<tr><td>Muy rugoso (edificios)</td><td>0,27-0,4</td></tr>
</tbody></table>
<p>La diap. 6 también muestra que sobre una <b>colina</b> el perfil se deforma: aparece un incremento de velocidad $\\Delta u_{max}$ cerca de la cima respecto al perfil sin colina.</p>
<h4>Ley logarítmica y longitud de rugosidad z<sub>0</sub></h4>
<div class="formula">$$v(h)=v_{ref}\\,\\frac{\\ln\\left(h/z_0\\right)}{\\ln\\left(h_{ref}/z_0\\right)}$$</div>
<p>Permite extrapolar la velocidad medida en una <b>torre anemométrica</b> (a $h_{ref}$) hasta la altura del buje del aerogenerador (diap. 7). La longitud de rugosidad $z_0$ se toma de la tabla de clases (European Wind Atlas):</p>
<table class="tbl"><thead><tr><th>Clase</th><th>z<sub>0</sub> (m)</th><th>Tipo de paisaje</th></tr></thead><tbody>
<tr><td>0</td><td>0,0002</td><td>Superficies de agua: mares y lagos</td></tr>
<tr><td>0,5</td><td>0,0024</td><td>Terreno abierto liso: hormigón, pistas de aeropuerto, hierba cortada</td></tr>
<tr><td>1</td><td>0,03</td><td>Tierra agrícola abierta sin vallas ni setos; algunos edificios muy separados, colinas muy suaves</td></tr>
<tr><td>1,5</td><td>0,055</td><td>Agrícola con algunas edificaciones y setos de 8 m separados más de 1 km</td></tr>
<tr><td>2</td><td>0,1</td><td>Agrícola con algunos edificios y setos de 8 m separados ≈ 500 m</td></tr>
<tr><td>2,5</td><td>0,2</td><td>Agrícola con muchos árboles y arbustos, o setos de 8 m separados ≈ 250 m</td></tr>
<tr><td>3</td><td>0,4</td><td>Pueblos, aldeas, muchos o altos setos, bosques, terreno muy accidentado</td></tr>
<tr><td>3,5</td><td>0,6</td><td>Grandes ciudades con edificios altos</td></tr>
<tr><td>4</td><td>1,6</td><td>Grandes ciudades con edificios altos y rascacielos</td></tr>
</tbody></table>
<div class="gen"><b>Ampliación (conocimiento general, no está en los apuntes):</b> las dos leyes son aproximaciones del mismo fenómeno. La potencial usa un exponente adimensional n; la logarítmica, una longitud z<sub>0</sub>. Ambas dan $v=v_{ref}$ en la altura de referencia, y con la logarítmica la velocidad se anula en $h=z_0$.</div>
` },
    { id: "eol-estad", title: "2. Caracterización estadística del viento", slides: ["EOL1", 8, 17], html: `
<h4>Muestreo y datos en crudo</h4>
<p>El espectro de frecuencias del viento (diap. 8) presenta picos en el <b>rango macrometeorológico</b> (periodos de <b>1 año</b>, unos <b>4 días</b> y <b>1 día</b>), un <b>hueco espectral</b> en torno a <b>1 hora</b> y un pico en el <b>rango micrometeorológico</b> (≈ <b>1 minuto</b>, turbulencia). Por eso los datos horarios recogen bien la variabilidad útil.</p>
<p>Los datos en crudo dan la velocidad <b>para cada hora del año</b> (en el ejemplo, en dm/s) y hay que <b>procesar los datos válidos</b>: aparecen valores anómalos (saturados en 200 dm/s) que deben descartarse (diap. 9).</p>
<h4>Caracterización del emplazamiento</h4>
<ul><li>Datos estadísticos a lo largo del <b>día, meses y años</b> para caracterizar la <b>velocidad media y la varianza</b>.</li>
<li>Datos de los <b>últimos 4 o 5 años</b>, con la velocidad <b>a una altura determinada</b> (diap. 10).</li>
<li>En el ejemplo, la velocidad horaria media es mínima de madrugada (≈ 2 m/s hacia las 8 h) y máxima por la tarde (≈ 9 m/s hacia las 19 h); por meses, más alta en invierno (≈ 5 m/s) que en verano (≈ 3,3 m/s).</li>
<li><b>Histograma de frecuencias</b> de la velocidad y <b>rosa de los vientos</b>, que indica la frecuencia en cada dirección (diap. 11). La rosa de la diap. 12 combina dirección con tramos de velocidad (de 0,5 a más de 3 m/s) y señala un <b>5 % de calmas</b>.</li></ul>
<h4>Distribución de Weibull</h4>
<p>La frecuencia de las horas contabilizadas se caracteriza con la función de densidad de Weibull, y la <b>distribución acumulada o curva de duración del viento</b> da la probabilidad de que la velocidad sea menor que un valor límite $v_0$ (diap. 14):</p>
<div class="formula">$$f(v)=\\frac{k}{c}\\left(\\frac{v}{c}\\right)^{k-1}\\exp\\left[-\\left(\\frac{v}{c}\\right)^{k}\\right]\\qquad F(v_0)=P(v\\lt v_0)=1-\\exp\\left[-\\left(\\frac{v_0}{c}\\right)^{k}\\right]$$</div>
<p><b>k</b> (factor de forma, entre <b>1,3 y 3</b>) y <b>c</b> (factor de escala, en m/s) dependen de la <b>ubicación</b> y del <b>periodo</b> observado. Al aumentar k la densidad se estrecha y su pico crece (diap. 16).</p>
<p>La <b>velocidad media</b> se aproxima en la mayoría de los casos (k = 2) como:</p>
<div class="formula">$$v_{ave}=\\frac{\\sqrt{\\pi}}{2}\\,c=0{,}886\\,c$$</div>
<h4>Ajuste por linealización</h4>
<p>Se trabaja con la frecuencia <b>acumulada</b> del histograma (diap. 13 y 15) tomando dos veces logaritmos:</p>
<div class="formula">$$\\ln\\left(-\\ln(1-F)\\right)=k\\ln v-k\\ln c$$</div>
<p>Representando $q=\\ln(-\\ln(1-F))$ frente a $p=\\ln v$ sale una recta de <b>pendiente k</b> y <b>ordenada en el origen $-k\\ln c$</b> (Guion del trabajo de eólica, pág. 3-4). En el ejemplo de la diap. 15 la recta es $y=1{,}9566x-4{,}1623$ (R² = 0,9935): k ≈ 1,96 y $c=e^{4{,}1623/1{,}9566}\\approx 8{,}4$ m/s.</p>
<h4>Bases de datos y trabajo de eólica</h4>
<p>Fuentes de datos (diap. 17): <b>NOAA</b> (NNCD Climate Data Online, datos horarios), <b>The POWER Project de la NASA</b> (datos solares y meteorológicos), <b>Puertos del Estado</b> y el <b>Atlas eólico del IDAE</b>.</p>
<p>En el trabajo de la asignatura se usan datos de NASA POWER con un periodo mínimo de <b>4 años</b> hasta 2025 o 2026, evaluando los datos erróneos de cada año y eligiendo el año más reciente de buena calidad (Guion del trabajo de eólica, pág. 1-2). Se calculan media y varianza por años, por meses y separando <b>periodo diurno (10:00-18:00)</b> y <b>nocturno (22:00-6:00)</b>, histogramas, rosa de los vientos, perfil hasta <b>200 m</b>, ajuste de Weibull a la altura del buje y, con la curva de potencia de un aerogenerador genérico de <b>1600 kW</b> (D = 100 m, buje a 95 m), la energía anual y el factor de carga (Guion del trabajo de eólica, pág. 2 y 4).</p>
` },
    { id: "eol-ventajas", title: "3. Ventajas, inconvenientes y potencia instalada", slides: ["EOL2", 3, 11], html: `
<h4>Ventajas de la energía eólica</h4>
<ul><li>Fuente de energía <b>segura y renovable</b>.</li>
<li><b>No produce emisiones</b> a la atmósfera ni genera residuos, salvo los de la fabricación de los equipos y los lubricantes.</li>
<li>Energía <b>autóctona</b>: disminuye la dependencia energética exterior.</li>
<li><b>Rápido tiempo de construcción</b> (inferior a <b>6 meses</b>).</li>
<li>Compatible con otros muchos usos del suelo; instalaciones <b>móviles</b> cuyo desmantelamiento permite <b>recuperar totalmente la zona</b>.</li>
<li>Beneficio económico para los municipios (<b>canon anual</b> por ocupación del suelo).</li>
<li><b>Versátil</b>: parques de <b>600 kW a 200 MW</b>. No requiere materiales exóticos o escasos (diap. 3).</li></ul>
<h4>Inconvenientes</h4>
<ul><li><b>Impacto visual</b> (alta modificación del paisaje) y <b>efecto sombra</b>.</li>
<li><b>Avifauna</b>: choque de las aves contra las palas; efectos desconocidos sobre migración y anidación.</li>
<li><b>Impacto sonoro</b>: el roce de las palas produce un ruido constante; la casa más cercana debe estar a <b>al menos 200 m (43 dB(A))</b>. En la tabla de decibelios la turbina eólica se sitúa en torno a <b>50 dB</b>, entre la caída de hojas y los ruidos domésticos (diap. 5).</li>
<li>Posible zona de interés arqueológico; instalación en zonas remotas de difícil acceso.</li>
<li>La <b>principal desventaja técnica</b>: la <b>no disponibilidad cuando se desee</b> (fuente <b>intermitente</b>) (diap. 4).</li></ul>
<p>La diap. 6 compara la <b>intensidad de uso del suelo</b> (ha/TWh/año) frente a las <b>emisiones de GEI en el ciclo de vida</b> (t CO<sub>2</sub>-eq/TWh): la eólica está entre las de <b>menores emisiones</b> (≈ 10<sup>4</sup> t CO<sub>2</sub>-eq/TWh), pero si se cuenta el <b>espaciado</b> entre aerogeneradores su ocupación de suelo es de las mayores (≈ 10<sup>4</sup> ha/TWh/año), frente a solo ≈ 10<sup>2</sup> si se cuenta la huella física.</p>
<h4>Potencia instalada en el mundo</h4>
<ul><li>En <b>2025</b>: <b>1299 GW</b> (<b>1206,5 GW onshore</b> y <b>92,5 GW offshore</b>), de un <b>máximo teórico de 72 TW</b>. Los últimos aumentos se deben a China y EE. UU. (diap. 7).</li>
<li>Nueva potencia anual: <b>164,6 GW en 2025</b> (155,3 onshore + 9,3 offshore). Desde 2019 el offshore es un porcentaje relevante (<b>≈ 10 %</b>) de lo instalado cada año (diap. 8).</li></ul>
<table class="tbl"><thead><tr><th>Cuota 2025 (diap. 9-10)</th><th>Onshore (1206,7 GW)</th><th>Offshore (92,5 GW)</th></tr></thead><tbody>
<tr><td>1.º</td><td>China 49,1 %</td><td>China 52,3 %</td></tr>
<tr><td>2.º</td><td>EE. UU. 13,3 %</td><td>Reino Unido 18,4 %</td></tr>
<tr><td>3.º</td><td>Alemania 5,6 %</td><td>Alemania 10,4 %</td></tr>
<tr><td>Otros</td><td>India 4,5 %, Brasil 3 %, <b>España 2,7 %</b>, Francia 2 %</td><td>Países Bajos 5,3 %, Taiwán 3,9 %</td></tr>
</tbody></table>
<p>España está entre los <b>10 países con mayor potencia onshore</b>. En offshore, el <b>Reino Unido</b> lideraba en <b>2020</b> (29 % de 35,3 GW, por delante de China 28 % y Alemania 22 %); ahora lidera China.</p>
<h4>Potencia instalada en España (2025)</h4>
<ul><li>Eólica: <b>33,3 GW</b> (incluye islas), <b>segunda</b> fuente en potencia instalada.</li>
<li>Solar fotovoltaica: <b>primera</b>, con <b>41,7 GW</b> (diap. 11).</li>
<li>En la estructura de potencia sin autoconsumo, eólica 23,9 % y fotovoltaica 29,9 %; renovable 68,7 %.</li></ul>
` },
    { id: "eol-principio", title: "4. Principio de funcionamiento: Betz, Cp y tipos de rotor", slides: ["EOL2", 12, 22], html: `
<h4>Potencia del viento</h4>
<p>El aerogenerador transforma la <b>energía cinética del viento en energía mecánica</b>. La potencia es el producto de la energía cinética por unidad de masa, el flujo másico que atraviesa el rotor y un coeficiente $C_p$ que corrige la energía residual que se lleva el aire de salida (V<sub>2</sub>) y el área cubierta (diap. 12):</p>
<div class="formula">$$W=C_p\\left(\\tfrac12V_1^2\\right)\\left(\\rho V_1\\frac{\\pi D^2}{4}\\right)=\\frac12\\rho C_pV_1^3\\frac{\\pi D^2}{4}$$</div>
<p>La máxima potencia utilizable aumenta <b>linealmente con la densidad</b>, con el <b>cubo de la velocidad</b> y con el <b>área barrida</b> (cuadrado del diámetro). Duplicar la velocidad de 8 a 16 m/s multiplica por 8 la potencia por m² (de ≈ 300 a ≈ 2500 W/m² en la gráfica de la diap. 20).</p>
<h4>Límite de Betz</h4>
<p>Hipótesis: la velocidad en la turbina es la <b>media</b> de las velocidades antes y después de ella. Con el <b>coeficiente de velocidad inducida a</b> (fracción de velocidad que se pierde al pasar por la turbina):</p>
<div class="formula">$$V=V_1(1-a)\\qquad V=\\frac{V_1+V_2}{2}\\qquad V_2=V_1(1-2a)$$</div>
<div class="formula">$$W=\\left(\\rho V\\frac{\\pi D^2}{4}\\right)\\frac12\\left(V_1^2-V_2^2\\right)=\\frac12\\rho V_1^3\\frac{\\pi D^2}{4}(1-a)\\left(1-(1-2a)^2\\right)$$</div>
<p>Hay un compromiso: <b>al aumentar a</b> se frena más el aire (se extrae más energía cinética de cada kilo), pero <b>baja la velocidad de paso y el flujo másico</b>. Derivando, $dW/da=0\\Rightarrow a=1/3$:</p>
<div class="formula">$$C_{p,max}=\\frac{16}{27}\\approx0{,}593$$</div>
<h4>Aerodinámica de la pala</h4>
<p>La pala ve la composición de la velocidad del viento V<sub>1</sub> y la velocidad de arrastre debida a la rotación, perpendicular a V<sub>1</sub>: $\\vec V=\\vec V_1+\\vec V_t=\\vec V_1-\\vec\\Omega r$ (diap. 15). En la <b>teoría del elemento de pala</b>, la velocidad relativa combina la incidente <b>V(1−a)</b> y la de rotación <b>rΩ<sub>r</sub>(1+a′)</b>; sobre el perfil actúan sustentación f<sub>L</sub> y arrastre f<sub>D</sub>, con el ángulo de ataque α y el de paso β (diap. 16).</p>
<h4>Coeficiente de potencia y velocidad específica</h4>
<div class="formula">$$\\lambda=\\frac{\\Omega R}{U}$$</div>
<ul><li><b>Velocidad específica λ</b> (TSR): velocidad de punta de pala dividida por la velocidad del viento.</li>
<li>La turbina ideal (infinitas palas) sigue el <b>límite de Glauert</b>, que considera las pérdidas por velocidad tangencial y tiende al de Betz al crecer λ.</li>
<li>La turbina real <b>ajusta su velocidad de rotación</b> a la del viento para trabajar con el <b>C<sub>p</sub> máximo</b> (diap. 17).</li></ul>
<h4>Tipos de aerogeneradores y número de palas</h4>
<p>Dos familias: <b>eje vertical</b> (Savonius, Darrieus) y <b>eje horizontal</b> (tripala, bipala, monopala) (diap. 18). <b>Menos palas permiten mayor velocidad de giro</b>, y en los diseños actuales el <b>tripala</b> de eje horizontal consigue mayor C<sub>p</sub> que con 2 o 1 pala (diap. 19).</p>
<table class="tbl cmp"><thead><tr><th>Tabla 1.1</th><th>2 palas</th><th>3 palas</th></tr></thead><tbody>
<tr><td>Ventaja 1</td><td>Menor coste del rotor (menor peso)</td><td>Mayor compensación de las fuerzas aerodinámicas</td></tr>
<tr><td>Ventaja/inconv. 2</td><td>Más ruidoso (velocidad periférica mayor)</td><td>Mayor estabilidad mecánica (fuerzas giroscópicas equilibradas)</td></tr>
<tr><td>Ventaja/inconv. 3</td><td>Instalación más simple (ensamblaje en tierra)</td><td>Par motor más uniforme</td></tr>
<tr><td>Ventaja/inconv. 4</td><td>Mayor complejidad de diseño (buje basculante)</td><td>Menor impacto visual</td></tr>
</tbody></table>
<h4>Relación potencia-tamaño</h4>
<p>Como $W \\propto D^2$, la potencia crece con el cuadrado del diámetro: en la diap. 21, <b>27 m → 225 kW</b>, 33 m → 300 kW, 40 m → 500 kW, 48 m → 750 kW, 54 m → 1000 kW, 64 m → 1500 kW, 72 m → 2000 kW y <b>80 m → 2500 kW</b>. Para offshore se diseñan máquinas enormes (diap. 22): convencional EE. UU. 2,5 MW, <b>SUMR13 de 13,2 MW</b> y el concepto <b>SUMR50 de 50 MW</b>, más alto que la torre Eiffel (306 m).</p>
` },
    { id: "eol-curva", title: "5. Curva de potencia, energía anual y factor de carga", slides: ["EOL2", 23, 27], html: `
<h4>Curva de potencia</h4>
<p>Expresa la <b>potencia eléctrica entregada en condiciones estándar</b> en función de la velocidad del viento a la altura del buje (diap. 23):</p>
<ul><li>Por debajo de la <b>velocidad de arranque</b> el aerogenerador no arranca.</li>
<li>Entre el arranque y la <b>velocidad nominal</b>, la potencia aumenta con <b>V³</b> hasta el máximo nominal.</li>
<li>De la nominal a la <b>velocidad de corte</b> entrega la potencia nominal; por encima se realiza una <b>parada y desconexión</b>.</li></ul>
<p>En el ejemplo de la diap. 23 (850 kW) el arranque está en torno a 2-3 m/s, la nominal hacia 16 m/s y el corte en 25 m/s. La máquina de la Tabla 1.3 (4,5 MW) tiene arranque <b>4 m/s</b>, nominal <b>12 m/s</b> y desconexión <b>25 m/s</b> (diap. 28). La del trabajo (1600 kW) produce desde 4 m/s, alcanza 1600 kW a 11 m/s y se para a partir de 26 m/s (Guion del trabajo de eólica, pág. 4).</p>
<h4>Energía anual generada</h4>
<p>Para calcular la energía anual hay que combinar la <b>curva de potencia</b> con la <b>distribución estadística de velocidades</b> del emplazamiento: para cada intervalo de velocidad, energía = horas al año × potencia (diap. 24).</p>
<div class="formula">$$E_{anual}=\\sum_i 8760\\,f(v_i)\\,\\Delta v\\;P(v_i)$$</div>
<p>El reparto de energía tiene el máximo a <b>mayor velocidad</b> que el de horas: en la diap. 24 las horas se concentran en ≈ 6 m/s, pero la energía en ≈ 9-10 m/s, porque la potencia crece muy deprisa con la velocidad.</p>
<h4>Factor de carga</h4>
<p>Producción anual de energía dividida entre la producción teórica (a potencia nominal todo el año) (diap. 25):</p>
<div class="formula">$$FC=\\frac{E_{anual}}{P_{nom}\\cdot 8760\\ \\text{h}}$$</div>
<p>Ejemplo de clase: aerogenerador de <b>3000 kW</b> con <b>10 000 000 kWh</b> al año → $FC=10^7/(3000\\cdot8760)=0{,}38$ (<b>≈ 38 %</b>), equivalente a ≈ 3333 horas a plena carga.</p>
<h4>Producción de un parque y efecto estela</h4>
<p>La producción real de un parque (diap. 26, en kWh por 10 minutos) muestra mucha dispersión respecto a la curva media y puntos nulos a alta velocidad (paradas). El <b>posicionamiento</b> de los aerogeneradores es crítico: la <b>estela de aire turbulento</b> de cada máquina baja el rendimiento de las que están <b>aguas abajo</b>. En el esquema de la diap. 27 se separan unos <b>5 diámetros de rotor</b> entre máquinas de una misma fila (perpendicular al viento dominante) y unos <b>7 diámetros</b> entre filas en la dirección del viento.</p>
` },
    { id: "eol-aerogen", title: "6. Descripción del aerogenerador", slides: ["EOL2", 28, 35], html: `
<h4>Esquema y características típicas</h4>
<p>Partes principales: <b>palas</b>, <b>góndola</b> y <b>torre</b>; giros de <b>orientación</b> (ángulo de guiñada, de la góndola) y de <b>pala</b> (θ, ángulo de paso) (diap. 28).</p>
<table class="tbl"><thead><tr><th>Tabla 1.3 · ejemplo</th><th>Valor</th></tr></thead><tbody>
<tr><td>Potencia nominal</td><td>4,5 MW</td></tr><tr><td>Número de palas</td><td>3</td></tr><tr><td>Diámetro del rotor</td><td>120 m</td></tr>
<tr><td>Control</td><td>Inclinación de la pala y velocidad variable</td></tr>
<tr><td>Longitud / cuerda máxima / peso de una pala</td><td>58 m / 5 m / 18 t</td></tr>
<tr><td>Peso de la góndola con rotor y palas</td><td>220 t</td></tr><tr><td>Peso de la torre (tubular de acero)</td><td>220 t</td></tr>
<tr><td>Altura de la torre</td><td>90-120 m</td></tr><tr><td>Diámetro de la torre en la base</td><td>5,5 m</td></tr>
<tr><td>Velocidad de rotación del rotor</td><td>9-15 rpm</td></tr><tr><td>Relación del multiplicador</td><td>100:1</td></tr>
<tr><td>Viento de arranque / nominal / desconexión</td><td>4 / 12 / 25 m/s</td></tr>
</tbody></table>
<h4>Góndola</h4>
<p>Componentes numerados en la diap. 29: 1 pala, 2 buje, 3 rodamiento de cambio de paso, 4 <b>eje principal de baja velocidad</b>, 5 <b>caja de cambios (multiplicador)</b>, 6 disco de freno, 7 refrigerador, 8 eje con acoplamiento flexible, 9 <b>generador</b>, 10 polipasto, 11 <b>anemómetro y veleta</b>, 12 actuador de cambio de paso, 13 bastidor, 14 torre, 15 <b>control de orientación</b>, 16 amortiguadores, 17 corona de giro, 18 reductora de giros, 19 unidad de control eléctrico, 20 grupo hidráulico.</p>
<h4>Pala</h4>
<p>Es el elemento que <b>capta la energía del viento</b>. Objetivos: maximizar la energía (diseño aerodinámico), <b>limitar la potencia máxima a la nominal</b>, evitar resonancias y amplificación de cargas dinámicas, resistir cargas extremas y de <b>fatiga</b>, evitar deflexiones excesivas y minimizar peso y coste (diap. 30).</p>
<ul><li>Material: <b>resinas poliméricas reforzadas con fibra continua</b> (vidrio o carbono), fabricadas por <b>infusión de resina</b> y ensambladas con adhesivos; <b>baja reciclabilidad</b> (diap. 31).</li>
<li>Geometría compleja: el perfil cambia de la <b>raíz</b> (casi circular) a la <b>punta</b> (fino) para aprovechar la <b>velocidad relativa</b>, suma vectorial de la incidente y la de rotación (diap. 32).</li></ul>
<h4>Generador eléctrico: síncrono frente a asíncrono</h4>
<table class="tbl cmp"><thead><tr><th></th><th>Síncrono</th><th>Asíncrono</th></tr></thead><tbody>
<tr><td>Principio</td><td>Rotor de electroimanes y estator con devanado donde se produce la corriente</td><td>Genera en el estator cuando el rotor gira <b>más rápido</b> que el campo magnético de excitación</td></tr>
<tr><td>Ventajas</td><td><b>Mayor rendimiento</b>; <b>vierte potencia reactiva</b> a la red; funciona de forma <b>autónoma</b></td><td>Fácil conexión a red; sin contactos móviles; admite un pequeño deslizamiento respecto al sincronismo; control sencillo; <b>menor coste</b>; robusto</td></tr>
<tr><td>Inconvenientes</td><td>Control complejo; conexión compleja a la red</td><td><b>Necesita estar conectado a la red</b>; requiere <b>grupos de condensadores</b> para no desestabilizarla</td></tr>
</tbody></table>
<h4>Almacenamiento</h4>
<p>Aconsejable en todas las renovables por su <b>producción discontinua</b> (diap. 35): baterías, <b>ultracondensadores</b> (para intensidades elevadas), almacenamiento mecánico (<b>bombeo de agua, volantes de inercia, aire comprimido</b>), producción electrolítica de hidrógeno y oxígeno, combustibles sintéticos y desalación de agua en invierno.</p>
` },
    { id: "eol-offshore", title: "7. Parques eólicos marinos (offshore)", slides: ["EOL2", 36, 41], html: `
<h4>Ventajas e inconvenientes del offshore</h4>
<table class="tbl cmp"><thead><tr><th></th><th>Offshore (diap. 36)</th></tr></thead><tbody>
<tr><td>Ventajas</td><td>Mayor recurso eólico (mayores velocidades); aerogeneradores de gran tamaño y mayor potencia unitaria; mayor capacidad por parque; <b>menor impacto visual y acústico</b></td></tr>
<tr><td>Inconvenientes</td><td><b>Infraestructura más costosa</b> (aunque es más fácil transportar palas grandes en buque que por carretera); ambiente marino severo (corrosión, oleaje, tormentas); <b>altos costes de mantenimiento</b></td></tr>
</tbody></table>
<p>El impacto visual decrece con la distancia a costa: el fotomontaje de la diap. 37 muestra el mismo aerogenerador a 3; 4,5; 6; 7,5; 15; 22 y 30 km, donde ya apenas se distingue.</p>
<h4>Funcionamiento y evacuación de la energía</h4>
<p>El funcionamiento es <b>idéntico a un parque en tierra</b>, con detalles propios del ambiente marino: <b>cimentación</b> y <b>subestación</b> en el mar (diap. 38). La electricidad baja por la torre; un <b>transformador</b> eleva la tensión a <b>33-66 kV</b> para el transporte dentro del parque; <b>cables submarinos</b> la llevan a la <b>subestación</b>, donde se pasa a alta tensión (<b>+150 kV</b>), y de ahí a la red. Las palas giran a 7-12 vueltas por minuto.</p>
<h4>Cimentación y tecnología flotante</h4>
<ul><li>La <b>cimentación</b> es posible en aguas de <b>menos de 50 m</b> de profundidad (diap. 39); el mar del Norte y el Báltico son someros.</li>
<li>Cimentaciones fijas: <b>monopilote</b>, <b>por gravedad</b> y <b>jacket</b> (celosía).</li>
<li>Flotantes: <b>TLP</b> (plataforma de patas tensionadas), <b>semisumergible</b> y <b>spar</b> (monopilote flotante). Ya se han probado en algunos parques y se espera que sus costes bajen hasta ser comerciales (diap. 40).</li></ul>
<h4>Offshore en España</h4>
<ul><li>Las aguas que rodean la península son <b>profundas cerca de la costa</b>, con más de <b>60 m</b> rápidamente.</li>
<li>Solo hay <b>dos plataformas de investigación</b>: <b>PLOCAN</b> (Canarias) y <b>BIMEP</b> (País Vasco).</li>
<li>La alternativa son los parques en <b>plataformas flotantes</b>, aún en desarrollo, con bajo rendimiento y necesidad de inversión (diap. 41).</li></ul>
` },
    { id: "eol-costes", title: "8. Costes y barreras de la eólica", slides: ["EOL2", 42, 47], html: `
<h4>Costes en tierra (onshore, 2010)</h4>
<p>Inversión (CAPEX) de un parque onshore de gran potencia (diap. 42), en miles de €/MW:</p>
<table class="tbl"><thead><tr><th>Partida</th><th>Mínimo</th><th>Máximo</th></tr></thead><tbody>
<tr><td>Aerogenerador</td><td>744</td><td>980</td></tr><tr><td>Obra civil e ingeniería</td><td>79</td><td>105</td></tr>
<tr><td>Instalación eléctrica</td><td>≈ 50</td><td>65</td></tr><tr><td>Subestación y conexión eléctrica</td><td>99</td><td>131</td></tr>
<tr><td>Costes de promoción</td><td>20</td><td>26</td></tr><tr><td><b>Total</b></td><td><b>992</b></td><td><b>1307</b></td></tr>
</tbody></table>
<p>El <b>aerogenerador</b> es con mucho la partida principal (≈ 75 %). Los costes operativos (OPEX, diap. 43) bajan con las horas equivalentes: de <b>2,16 c€/kWh con 1800 h</b> a <b>1,72 c€/kWh con 3000 h</b>; la mayor parte es el <b>mantenimiento del aerogenerador</b>, seguido de seguros y tasas, alquiler de terrenos y gastos generales. Los parques nuevos están en 1800-2400 h y las <b>repotenciaciones</b> en 2600-3000 h.</p>
<h4>Costes en el mar (offshore, 2010)</h4>
<p>CAPEX (diap. 44): fabricación de la turbina 810 + transporte y montaje 300 = <b>1110</b> k€/MW de turbina; cimentación y pilotaje <b>300</b>; instalación eléctrica interna 85; conexión eléctrica a red <b>1140</b>; ingeniería y promoción 210. <b>Total ≈ 2845 k€/MW</b>, muy dependiente de la distancia a la costa: <b>1,8 M€/MW a 2 km</b>, 2,0 a 10 km, 2,8 a 50 km y <b>3,9 M€/MW a 100 km</b>.</p>
<p>OPEX (diap. 45): <b>4,2 c€/kWh con 2500 h</b>, 3,5 con 3000 h, 3,0 con 3500 h y 2,6 con 4000 h. Se estiman <b>≈ 3300 horas equivalentes</b> anuales para un parque offshore tipo en 2010. Aparecen partidas propias del mar: <b>barco</b> y <b>seguros</b> elevados.</p>
<h4>Coste de generación (2010 → 2030)</h4>
<table class="tbl"><thead><tr><th>Caso (diap. 46)</th><th>2010 (c€/kWh)</th><th>2030 (c€/kWh)</th></tr></thead><tbody>
<tr><td>Onshore, viento moderado (2000 h)</td><td>8,9</td><td>7,4</td></tr>
<tr><td>Onshore, viento elevado (2400 h)</td><td>7,1</td><td>5,0</td></tr>
<tr><td>Onshore, viento muy elevado (2900 h)</td><td>5,9</td><td>4,1</td></tr>
<tr><td>Offshore a 100 km de la costa</td><td>17,3</td><td>10,7</td></tr>
<tr><td>Offshore a 50 km</td><td>13,2</td><td>8,2</td></tr>
<tr><td>Offshore a 10 km</td><td>9,9</td><td>6,1</td></tr>
<tr><td>Offshore a 2 km</td><td>9,2</td><td>5,7</td></tr>
</tbody></table>
<h4>Barreras de los parques marinos</h4>
<ul><li><b>Tecnológicas</b>: gestionar una generación con peso creciente en el mix (<b>desconexión</b> de parques cuando puedan producir en exceso, necesidad de <b>generación de apoyo</b>); evolución de cimentaciones para <b>más de 40 m</b> o tecnología flotante; dificultad de <b>predicción temporal</b> del recurso.</li>
<li><b>Infraestructuras</b>: líneas de transporte por la distancia entre zonas de alto recurso y de consumo; <b>subestación flotante</b>.</li>
<li><b>Regulatorias</b>: requisitos crecientes de limitación de <b>potencia reactiva</b> y estabilidad frente a <b>huecos de tensión</b>, que obligan a mayores CAPEX.</li>
<li><b>Medioambientales</b> (migraciones) y conflictos con <b>rutas marítimas y zonas de pesca</b> (diap. 47).</li></ul>
` },
    { id: "eol-futuro", title: "9. Tendencias de futuro y producción en España", slides: ["EOL2", 48, 56], html: `
<h4>Previsión de nueva potencia 2026-2030</h4>
<table class="tbl"><thead><tr><th>Año</th><th>2025</th><th>2026e</th><th>2027e</th><th>2028e</th><th>2029e</th><th>2030e</th></tr></thead><tbody>
<tr><td>Nueva potencia (GW)</td><td>164,6</td><td>178</td><td>186,5</td><td>193,3</td><td>199,9</td><td>211,8</td></tr>
<tr><td>de ella offshore (GW)</td><td>9,3</td><td>18</td><td>26,6</td><td>26,2</td><td>25,4</td><td>33,3</td></tr>
</tbody></table>
<p>Crecimiento anual compuesto (<b>CAGR</b>) del <b>5,2 %</b> (GWEC). Por regiones, el peso de <b>China onshore</b> en lo nuevo baja del <b>69 %</b> (2025) al <b>50 %</b> (2030) y el offshore sube del 6 % al 16 % (diap. 48).</p>
<h4>Brecha con la senda de 1,5 ºC</h4>
<p>Con el ritmo actual no se alcanza la potencia necesaria para el escenario de cero emisiones netas en 2050 / 1,5 ºC: en la gráfica izquierda (serie 2020-2030) las instalaciones debían crecer <b>×4</b> y solo se llegaría al <b>64 %</b> de la potencia requerida en 2030; en la derecha (2021-2030, GWEC Global Wind Report 2026) las instalaciones anuales deben <b>duplicarse (×2)</b> y solo se alcanzaría el <b>83 %</b> (diap. 49).</p>
<h4>Producción en España</h4>
<table class="tbl"><thead><tr><th>Año</th><th>Renovable</th><th>Eólica</th><th>Puesto de la eólica</th></tr></thead><tbody>
<tr><td>2025 (diap. 50)</td><td>55,5 %</td><td>58 801 GWh (21,6 %)</td><td><b>1.ª</b>; con autoconsumo, 2.ª tras la fotovoltaica</td></tr>
<tr><td>2024 (diap. 52)</td><td>56,8 %</td><td>60 921 GWh (23,2 %)</td><td>1.ª</td></tr>
<tr><td>2023 (diap. 53)</td><td>50,3 %</td><td>62 569 GWh (23,5 %)</td><td>1.ª</td></tr>
<tr><td>2022 (diap. 54)</td><td>42,2 %</td><td>61 176 GWh (22,1 %)</td><td><b>2.ª</b>, tras el ciclo combinado (24,7 %)</td></tr>
<tr><td>2021 (diap. 55)</td><td>46,7 %</td><td>60 496 GWh (23,3 %)</td><td>1.ª, por encima de la nuclear (20,8 %)</td></tr>
<tr><td>2020 (diap. 56)</td><td>44,9 %</td><td>21,9 %</td><td>Tras la nuclear (22,3 %)</td></tr>
</tbody></table>
<p>En 2025, sin autoconsumo, la eólica (21,6 %) supera a la nuclear (19,0 %) y a la fotovoltaica (18,4 %); con autoconsumo, la fotovoltaica pasa a <b>21,3 %</b> y la eólica queda en <b>20,6 %</b>. La eólica y la fotovoltaica han aumentado su potencia y su producción en los últimos años.</p>
` }
  ],
  confusions: [
    ["<b>Ley potencial</b> (n) vs <b>ley logarítmica</b> (z<sub>0</sub>)", "La potencial usa un exponente adimensional <b>n</b> (0,1 en el mar a 0,4 con edificios) y la altura de referencia; la logarítmica usa la <b>longitud de rugosidad z<sub>0</sub></b> en metros (0,0002 m en el mar a 1,6 m con rascacielos). En ambas, más rugosidad → menos velocidad cerca del suelo."],
    ["Factor de forma <b>k</b> vs factor de escala <b>c</b> de Weibull", "<b>k</b> (adimensional, 1,3-3) da la forma: más k, curva más estrecha y picuda (viento más regular). <b>c</b> (m/s) da la escala: con k = 2, la media es 0,886·c. En la linealización, k es la pendiente y −k·ln c la ordenada."],
    ["Densidad <b>f(v)</b> vs acumulada <b>F(v)</b>", "f(v) es la frecuencia normalizada (histograma); F(v₀) = P(v &lt; v₀) es la <b>curva de duración</b>. El ajuste de k y c se hace con la acumulada linealizada, no con la densidad."],
    ["<b>Coeficiente de velocidad inducida a</b> vs <b>C<sub>p</sub></b>", "a es la fracción de velocidad que se pierde en el rotor (V = V₁(1−a), V₂ = V₁(1−2a)); C<sub>p</sub> es la fracción de potencia del viento que se extrae. El óptimo a = <b>1/3</b> da C<sub>p</sub> = <b>16/27 ≈ 0,593</b>. No confundir 1/3 con 0,593."],
    ["<b>Límite de Betz</b> vs <b>límite de Glauert</b>", "Betz (16/27) es la cota absoluta con flujo axial. Glauert añade las pérdidas por velocidad tangencial (rotación de la estela): queda por debajo de Betz a λ bajos y tiende a él al crecer λ."],
    ["<b>Velocidad nominal</b> vs <b>velocidad de corte</b>", "En la nominal se alcanza la potencia nominal (≈ 12 m/s en la Tabla 1.3) y a partir de ahí se limita; en la de corte (≈ 25 m/s) la máquina se para y desconecta. La de arranque (≈ 4 m/s) es el umbral inferior."],
    ["<b>Potencia instalada</b> vs <b>energía producida</b> en España", "En potencia (2025) la eólica es <b>segunda</b> (33,3 GW) tras la fotovoltaica (41,7 GW); en energía es <b>primera</b> (21,6 %) si no se cuenta el autoconsumo. Con autoconsumo, la FV la supera también en energía."],
    ["Generador <b>síncrono</b> vs <b>asíncrono</b>", "Síncrono: más rendimiento, vierte reactiva, autónomo, pero control y conexión complejos. Asíncrono: barato, robusto, control sencillo, pero necesita estar conectado a la red y condensadores (consume reactiva)."],
    ["<b>Offshore 2020</b> vs <b>offshore 2025</b>", "En 2020 (35,3 GW) lideraba el <b>Reino Unido</b> (29 %), seguido de China (28 %) y Alemania (22 %). En 2025 (92,5 GW) lidera <b>China</b> (52,3 %), seguida de Reino Unido (18,4 %) y Alemania (10,4 %)."],
    ["Cimentación hasta <b>50 m</b> vs barrera de <b>40 m</b> vs España <b>60 m</b>", "La cimentación fija es posible por debajo de ≈ 50 m (diap. 39); entre las barreras figura evolucionar cimentaciones para más de 40 m (diap. 47); alrededor de la península se superan los 60 m cerca de la costa (diap. 41)."]
  ]
};

/* ===================== PREGUNTAS · 1. Recurso eólico ===================== */
L("EOL", "eol-recurso", "Escalas del viento", 2, "Sobre las escalas del recurso eólico descritas en los apuntes, señale la afirmación correcta:",
  ["La macroescala abarca unos 1000 km y alturas de hasta 12-15 km, e incluye los vientos alisios y polares",
   "La mesoescala abarca unos 1000 km y alturas de hasta 12-15 km, e incluye las brisas marinas y de valle",
   "La macroescala abarca 10-500 km y alturas de 1-1,5 km, e incluye los vientos alisios y polares",
   "La microescala abarca 10-500 km y alturas de 1-1,5 km, e incluye los vientos de cordilleras y valles"],
  0, "Macroescala: ≈ 1000 km, hasta 12-15 km de altura, alisios y polares. Mesoescala: 10-500 km, 1-1,5 km de altura, brisas marinas y vientos de cordilleras y valles. Microescala: viento local con obstáculos, colinas y promontorios.", "Apuntes EOL1, diap. 4");
L("EOL", "eol-recurso", "Brisas de mesoescala", 2, "Según los esquemas de mesoescala de los apuntes, ¿cuáles de estas brisas son DIURNAS?",
  ["La brisa de valle o viento anabático", "La brisa de mar", "La brisa de montaña o viento catabático", "La brisa de tierra"],
  [0, 1], "Diurnas: brisa de valle (anabática, el aire sube por las laderas calentadas) y brisa de mar (en superficie, del mar a tierra). Nocturnas: brisa de montaña (catabática, el aire frío baja) y brisa de tierra.", "Apuntes EOL1, diap. 5");
L("EOL", "eol-recurso", "Ley potencial", 1, "En la ley potencial del perfil de velocidades, ¿qué rango del exponente n asignan los apuntes a un terreno rugoso tipo bosque?",
  ["0,2-0,27", "0,13-0,2", "0,27-0,4", "0,1-0,13"],
  0, "Plano (mar, playa) 0,1-0,13; moderadamente rugoso (región rural) 0,13-0,2; rugoso (bosque) 0,2-0,27; muy rugoso (edificios) 0,27-0,4.", "Apuntes EOL1, diap. 6");
L("EOL", "eol-recurso", "Ley potencial", 3, "Una torre mide 6 m/s de media a 10 m de altura en una región rural con n = 0,2. Con la ley potencial de los apuntes, la velocidad estimada a 100 m es aproximadamente…",
  ["9,5 m/s", "12,0 m/s", "7,6 m/s", "60 m/s"],
  0, "Ley potencial del perfil de velocidades (Apuntes EOL1, diap. 6): $$v=v_{ref}\\left(\\frac{z}{z_{ref}}\\right)^{n}$$ $$=6\\left(\\frac{100}{10}\\right)^{0{,}2}$$ $$=6\\cdot10^{0{,}2}$$ $$=6\\cdot1{,}585\\approx\\boxed{9{,}5\\ \\text{m/s}}$$ 7,6 m/s saldría con n ≈ 0,1 (mar) y 12 m/s con n ≈ 0,3 (edificios); 60 m/s supone proporcionalidad lineal con la altura.", "Apuntes EOL1, diap. 6");
L("EOL", "eol-recurso", "Longitud de rugosidad", 2, "En la tabla de clases de rugosidad de los apuntes, ¿qué longitud de rugosidad z<sub>0</sub> corresponde a la clase 1 (tierra agrícola abierta sin vallas ni setos, algunos edificios muy separados y colinas muy suaves)?",
  ["0,03 m", "0,0024 m", "0,1 m", "0,3 m"],
  0, "Clase 0: 0,0002 m; 0,5: 0,0024 m; 1: 0,03 m; 1,5: 0,055 m; 2: 0,1 m; 2,5: 0,2 m; 3: 0,4 m; 3,5: 0,6 m; 4: 1,6 m.", "Apuntes EOL1, diap. 7");
L("EOL", "eol-recurso", "Ley logarítmica", 3, "Con la ley logarítmica de los apuntes, una medida de 5 m/s a 10 m sobre terreno agrícola abierto (z<sub>0</sub> = 0,03 m) se extrapola a 100 m como…",
  ["≈ 7,0 m/s", "≈ 6,1 m/s", "≈ 8,0 m/s", "≈ 50 m/s"],
  0, "Ley logarítmica (Apuntes EOL1, diap. 7): $$v=v_{ref}\\,\\frac{\\ln(z/z_0)}{\\ln(z_{ref}/z_0)}$$ $$=5\\cdot\\frac{\\ln(100/0{,}03)}{\\ln(10/0{,}03)}$$ $$=5\\cdot\\frac{8{,}11}{5{,}81}\\approx\\boxed{7{,}0\\ \\text{m/s}}$$ Sobre el mar ($z_0$ = 0,0002 m) saldría ≈ 6,1 m/s: el terreno liso «gana» menos al subir. 50 m/s supone proporcionalidad lineal con la altura.", "Apuntes EOL1, diap. 7");
L("EOL", "eol-recurso", "Perfil de velocidades", 3, "Respecto al perfil de velocidades en la capa límite, ¿cuál de estas afirmaciones es FALSA?",
  ["Sobre el mar el viento aumenta con la altura más deprisa que sobre una ciudad, porque su exponente n es menor",
   "Con la misma velocidad medida a 10 m, la ley potencial estima a 100 m más viento sobre un bosque que sobre el mar",
   "Sobre una colina el perfil se deforma y aparece un incremento de velocidad cerca de la cima",
   "La longitud de rugosidad z₀ de una gran ciudad con rascacielos es del orden de 10⁴ veces la del mar"],
  0, "Es falsa: con n menor (mar) la velocidad crece MENOS con la altura. El terreno rugoso frena el viento cerca del suelo y por eso, partiendo de la misma medida a 10 m, el factor (100/10)ⁿ es mayor con n grande. z₀: 1,6 m frente a 0,0002 m (factor 8000, orden 10⁴).", "Apuntes EOL1, diap. 6-7");

/* ===================== PREGUNTAS · 2. Estadística del viento ===================== */
L("EOL", "eol-estad", "Muestreo", 3, "En el espectro de frecuencias de la velocidad del viento de los apuntes, el «hueco espectral» (spectral gap) se sitúa en torno a periodos de…",
  ["1 hora, entre el rango macrometeorológico (días-año) y el micrometeorológico (minutos)",
   "1 día, entre el pico anual y el pico de unos 4 días del rango macrometeorológico",
   "1 minuto, entre el rango micrometeorológico y la turbulencia de alta frecuencia",
   "4 días, entre el rango macrometeorológico y el micrometeorológico"],
  0, "Picos macrometeorológicos en 1 año, ≈ 4 días y 1 día; hueco espectral alrededor de 1 hora; pico micrometeorológico en torno a 1 minuto.", "Apuntes EOL1, diap. 8");
L("EOL", "eol-estad", "Caracterización del viento", 1, "Según los apuntes, para caracterizar estadísticamente el viento de un emplazamiento se recomienda emplear datos de…",
  ["los últimos 4 o 5 años, con la velocidad a una altura determinada",
   "los últimos 10 a 20 años, con la velocidad a la altura del buje",
   "un año completo representativo, con la velocidad a 10 m de altura",
   "los últimos 2 o 3 años, con la velocidad media diaria a cualquier altura"],
  0, "Diap. 10: datos estadísticos a lo largo del día, meses y años para caracterizar media y varianza; datos de los últimos 4 o 5 años; velocidad a una altura determinada.", "Apuntes EOL1, diap. 10");
L("EOL", "eol-estad", "Rosa de los vientos", 1, "La rosa de los vientos, según los apuntes, indica…",
  ["la frecuencia del viento en cada dirección",
   "la velocidad máxima registrada en cada dirección",
   "la potencia media disponible en cada dirección",
   "la dirección media del viento en cada mes del año"],
  0, "«Rosa de los vientos, indica la frecuencia en las direcciones». El ejemplo de la diap. 12 la combina además con tramos de velocidad y un 5 % de calmas.", "Apuntes EOL1, diap. 11-12");
L("EOL", "eol-estad", "Distribución de Weibull", 1, "En la distribución de Weibull que usan los apuntes para la velocidad del viento, ¿qué rango se da para el parámetro k?",
  ["1,3-3", "0,5-1,3", "2-5", "3-10"],
  0, "«En donde k (1,3 - 3) y c son parámetros que dependen de la ubicación y el periodo de tiempo observado».", "Apuntes EOL1, diap. 14");
L("EOL", "eol-estad", "Distribución de Weibull", 3, "Un emplazamiento sigue una Weibull con k = 2 y c = 8 m/s. Con las expresiones de los apuntes, la probabilidad de que la velocidad sea inferior a 8 m/s y la velocidad media son, respectivamente…",
  ["63 % y 7,1 m/s", "50 % y 8,0 m/s", "37 % y 7,1 m/s", "63 % y 8,0 m/s"],
  0, "Distribución de Weibull de los apuntes (Apuntes EOL1, diap. 14 y 16) con k = 2 y c = 8 m/s: $$F(v)=1-\\exp\\left[-\\left(\\frac{v}{c}\\right)^{k}\\right]$$ $$\\Rightarrow F(8) =1-e^{-1}$$ $$=0{,}632\\approx\\boxed{63\\ \\%}$$ $$v_{ave}=\\frac{\\sqrt{\\pi}}{2}\\,c$$ $$=0{,}886\\cdot8\\approx\\boxed{7{,}1\\ \\text{m/s}}$$ El 37 % es la probabilidad de superar c; c no es ni la media ni la mediana.", "Apuntes EOL1, diap. 14 y 16");
L("EOL", "eol-estad", "Ajuste por linealización", 3, "Al linealizar la frecuencia acumulada representando ln(−ln(1−F)) frente a ln(v), se obtiene la recta y = 2,1·x − 4,4. Los parámetros de Weibull son aproximadamente…",
  ["k = 2,1 y c ≈ 8,1 m/s", "k = 4,4 y c ≈ 1,6 m/s", "k = 2,1 y c ≈ 4,4 m/s", "k = 2,1 y c ≈ 0,12 m/s"],
  0, "Linealización de la Weibull (Apuntes EOL1, diap. 15): $$\\ln\\left[-\\ln(1-F)\\right]=k\\ln v-k\\ln c\\quad\\Leftrightarrow\\quad y$$ $$=k\\,x+b$$ La pendiente es k y la ordenada en el origen es b = −k·ln c: $$k=\\boxed{2{,}1}$$ $$\\ln c=\\frac{4{,}4}{2{,}1} =2{,}095$$ $$\\Rightarrow c$$ $$=e^{2{,}095}\\approx\\boxed{8{,}1\\ \\text{m/s}}$$ Tomar 4,4 directamente como c olvida el logaritmo y el factor k; intercambiar pendiente y ordenada da k = 4,4 y c = e^(2,1/4,4) ≈ 1,6; equivocarse de signo da c = e^(−2,095) ≈ 0,12. El ejemplo de clase (y = 1,9566x − 4,1623) da k ≈ 1,96 y c ≈ 8,4 m/s.", "Apuntes EOL1, diap. 15");
L("EOL", "eol-estad", "Distribución de Weibull", 2, "Observando las curvas de Weibull de los apuntes (mismo c, k = 1,5; 2; 2,5 y 3), al aumentar k…",
  ["la densidad se estrecha y su máximo es más alto, lo que indica un viento más regular",
   "la densidad se ensancha y su máximo es más bajo, lo que indica un viento más regular",
   "la densidad se desplaza entera hacia velocidades mayores sin cambiar de forma",
   "la acumulada crece más deprisa a bajas velocidades y hay más horas de calma"],
  0, "Con k = 3 el pico ronda 0,19 frente a ≈ 0,12 con k = 1,5. Con k bajo la acumulada sube antes (más horas de poco viento) y la cola es más larga.", "Apuntes EOL1, diap. 16");
L("EOL", "eol-estad", "Velocidad media", 2, "Según los apuntes, la velocidad media de una distribución de Weibull se puede aproximar en la mayoría de los casos como…",
  ["$v_{ave}=\\frac{\\sqrt{\\pi}}{2}c=0{,}886\\,c$, válido para k = 2",
   "$v_{ave}=\\frac{\\pi}{2}c=1{,}571\\,c$, válido para k = 2",
   "$v_{ave}=\\frac{\\sqrt{\\pi}}{2}c=0{,}886\\,c$, válido para cualquier k",
   "$v_{ave}=\\frac{2}{\\sqrt{\\pi}}c=1{,}128\\,c$, válido para k = 2"],
  0, "Los apuntes dan $v_{ave}=\\sqrt{\\pi}/2\\cdot c=0{,}886c$ con k = 2 (caso Rayleigh). Para otro k el factor cambia.", "Apuntes EOL1, diap. 16");
L("EOL", "eol-estad", "Bases de datos", 2, "¿Cuál de las siguientes NO figura entre las bases de datos de viento citadas en los apuntes?",
  ["El servicio de reanálisis ERA5 de Copernicus",
   "The POWER Project de la NASA",
   "El Atlas eólico del IDAE",
   "Puertos del Estado"],
  0, "Los apuntes citan NOAA (NNCD Climate Data Online), The POWER Project (NASA), Puertos del Estado y el Atlas eólico del IDAE. ERA5 no aparece.", "Apuntes EOL1, diap. 17");
L("EOL", "eol-estad", "Trabajo de eólica", 3, "Según el guion del trabajo de eólica, en el análisis estacional diurno/nocturno se consideran como periodos…",
  ["diurno 10:00-18:00 y nocturno 22:00-6:00",
   "diurno 8:00-20:00 y nocturno 20:00-8:00",
   "diurno 6:00-18:00 y nocturno 18:00-6:00",
   "diurno 12:00-18:00 y nocturno 0:00-6:00"],
  0, "El guion pide distinguir periodos diurnos (10:00-18:00) y nocturnos (22:00-6:00), dejando fuera las horas de transición.", "Guion del trabajo de eólica, pág. 2");

/* ===================== PREGUNTAS · 3. Ventajas, inconvenientes y potencia ===================== */
L("EOL", "eol-ventajas", "Ventajas", 2, "¿Cuál de las siguientes es una ventaja de la energía eólica recogida en los apuntes?",
  ["Rápido tiempo de construcción, inferior a 6 meses, con parques versátiles de 600 kW a 200 MW",
   "Rápido tiempo de construcción, inferior a 6 semanas, con parques versátiles de 600 kW a 2 GW",
   "Baja variabilidad de la producción, lo que permite prescindir de generación de apoyo",
   "Impacto ambiental nulo durante todo el ciclo de vida, incluida la fabricación de los equipos"],
  0, "Diap. 3: construcción en menos de 6 meses y parques de 600 kW a 200 MW. No genera residuos «salvo los de la fabricación de los equipos y lubricantes», y la intermitencia es su principal desventaja técnica.", "Apuntes EOL2, diap. 3");
L("EOL", "eol-ventajas", "Inconvenientes", 2, "Según los apuntes, la principal desventaja de la energía eólica desde el punto de vista técnico es…",
  ["la no disponibilidad cuando se desee, al ser una fuente intermitente",
   "el impacto sonoro, que obliga a alejar las viviendas al menos 200 m",
   "el impacto sobre la avifauna por el choque de las aves con las palas",
   "la necesidad de materiales exóticos o escasos en el aerogenerador"],
  0, "Los apuntes la señalan expresamente: «la principal desventaja desde el punto de vista técnico es la no disponibilidad cuando se desee». Además, la eólica NO requiere materiales exóticos o escasos (es una ventaja).", "Apuntes EOL2, diap. 3-4");
L("EOL", "eol-ventajas", "Impacto sonoro", 3, "Respecto al impacto sonoro de los aerogeneradores, los apuntes indican que…",
  ["la casa más cercana deberá estar al menos a 200 m (43 dB(A)) y la turbina aparece hacia 50 dB en la tabla de decibelios",
   "la casa más cercana deberá estar al menos a 500 m (43 dB(A)) y la turbina aparece hacia 80 dB en la tabla de decibelios",
   "la casa más cercana deberá estar al menos a 200 m (63 dB(A)) y la turbina aparece hacia 60 dB en la tabla de decibelios",
   "la casa más cercana deberá estar al menos a 2 km (43 dB(A)) y la turbina aparece hacia 50 dB en la tabla de decibelios"],
  0, "Diap. 4: al menos 200 m (43 dB(A)). En la tabla de decibelios de la diap. 5 la turbina eólica está en torno a 50 dB, entre la caída de hojas y los ruidos domésticos.", "Apuntes EOL2, diap. 4-5");
L("EOL", "eol-ventajas", "Uso del suelo y emisiones", 3, "En la figura de intensidad de uso del suelo frente a emisiones de GEI del ciclo de vida, la eólica…",
  ["está entre las de menores emisiones (≈ 10⁴ t CO₂-eq/TWh), pero si se cuenta el espaciado entre máquinas su uso del suelo es de los mayores (≈ 10⁴ ha/TWh/año)",
   "está entre las de menores emisiones (≈ 10⁴ t CO₂-eq/TWh) y también entre las de menor uso del suelo, se cuente o no el espaciado",
   "está entre las de mayores emisiones (≈ 10⁵ t CO₂-eq/TWh), comparable al gas natural, pero con muy poco uso del suelo",
   "tiene emisiones similares al carbón (≈ 10⁶ t CO₂-eq/TWh) por la fabricación de las palas, y poco uso del suelo"],
  0, "Wind (footprint) ≈ 100 ha/TWh/año y Wind (spacing) ≈ 10 000 ha/TWh/año, ambos con ≈ 10⁴ t CO₂-eq/TWh; el carbón está cerca de 10⁶.", "Apuntes EOL2, diap. 6");
L("EOL", "eol-ventajas", "Potencia mundial", 2, "Según los apuntes (GWEC), la potencia eólica total instalada en el mundo en 2025 era de…",
  ["1299 GW, de ellos 1206,5 GW onshore y 92,5 GW offshore, frente a un máximo teórico de 72 TW",
   "1136 GW, de ellos 1052,9 GW onshore y 83,2 GW offshore, frente a un máximo teórico de 72 TW",
   "1299 GW, de ellos 1206,5 GW onshore y 92,5 GW offshore, frente a un máximo teórico de 7,2 TW",
   "164,6 GW, de ellos 155,3 GW onshore y 9,3 GW offshore, frente a un máximo teórico de 72 TW"],
  0, "2025: 1299 GW acumulados (1206,5 + 92,5). 1136 GW es el dato de 2024 y 164,6 GW es la nueva potencia instalada en 2025, no la acumulada.", "Apuntes EOL2, diap. 7-8");
L("EOL", "eol-ventajas", "Reparto por países", 3, "En la potencia offshore mundial, los apuntes muestran que…",
  ["en 2020 lideraba el Reino Unido (29 % de 35,3 GW) y en 2025 lidera China (52,3 % de 92,5 GW)",
   "en 2020 lideraba China (29 % de 35,3 GW) y en 2025 lidera el Reino Unido (52,3 % de 92,5 GW)",
   "en 2020 lideraba Alemania (29 % de 35,3 GW) y en 2025 lidera China (52,3 % de 92,5 GW)",
   "en 2020 lideraba el Reino Unido (29 % de 92,5 GW) y en 2025 lidera China (49,1 % de 1206,7 GW)"],
  0, "Offshore 2020: Reino Unido 29 %, China 28 %, Alemania 22 % (35,3 GW). Offshore 2025: China 52,3 %, Reino Unido 18,4 %, Alemania 10,4 % (92,5 GW). El 49,1 % es la cuota china onshore.", "Apuntes EOL2, diap. 9-10");
L("EOL", "eol-ventajas", "Potencia en España", 2, "Sobre la potencia instalada en España en 2025, señale la correcta:",
  ["La eólica tiene 33,3 GW (incluidas islas) y es la segunda fuente en potencia, tras la fotovoltaica con 41,7 GW",
   "La eólica tiene 41,7 GW (incluidas islas) y es la primera fuente en potencia, por delante de la fotovoltaica con 33,3 GW",
   "La eólica tiene 33,3 GW (solo península) y es la primera fuente en potencia, por delante del ciclo combinado",
   "La eólica tiene 23 GW (incluidas islas) y es la segunda fuente en potencia, tras el ciclo combinado"],
  0, "Diap. 11: eólica 33,3 GW (incluye islas), segunda en potencia; la fotovoltaica es la primera con 41,7 GW. En energía producida (sin autoconsumo) la eólica sí es primera.", "Apuntes EOL2, diap. 11");
L("EOL", "eol-ventajas", "Potencia mundial", 3, "Señale las afirmaciones correctas sobre la potencia eólica mundial según los apuntes:",
  ["España está entre los 10 países con mayor potencia onshore, con un 2,7 % del total",
   "Desde 2019 la nueva potencia offshore es una fracción relevante (≈ 10 %) de lo instalado cada año",
   "Estados Unidos es el segundo país en potencia onshore, con un 13,3 %",
   "El Reino Unido es el segundo país en potencia onshore, con un 18,4 %"],
  [0, 1, 2], "España 2,7 % del onshore (top 10), EE. UU. 13,3 % (segundo tras China, 49,1 %). El 18,4 % del Reino Unido es su cuota offshore, no onshore.", "Apuntes EOL2, diap. 8-9");

/* ===================== PREGUNTAS · 4. Principio de funcionamiento ===================== */
L("EOL", "eol-principio", "Potencia del viento", 1, "La potencia disponible de una corriente de viento que atraviesa un rotor de diámetro D es, según los apuntes…",
  ["proporcional al cubo de la velocidad y lineal con la densidad del aire",
   "proporcional al cuadrado de la velocidad y lineal con la densidad del aire",
   "proporcional al cubo de la velocidad y al cuadrado de la densidad del aire",
   "proporcional al cubo de la velocidad e inversamente proporcional al área barrida"],
  0, "$W=\\frac12\\rho C_pV^3\\pi D^2/4$: lineal con ρ, cúbica con V y proporcional al área barrida (D²). El V² es la energía cinética por unidad de masa; el otro V viene del flujo másico.", "Apuntes EOL2, diap. 12 y 20");
L("EOL", "eol-principio", "Potencia del viento", 3, "Un rotor de 100 m de diámetro con C<sub>p</sub> = 0,4 recibe viento de 10 m/s (ρ = 1,225 kg/m³). La potencia extraída es aproximadamente…",
  ["1,9 MW", "4,8 MW", "0,6 MW", "7,7 MW"],
  0, "Potencia extraída por el rotor (Apuntes EOL2, diap. 20): $$W=\\tfrac12\\,\\rho\\,C_p\\,V^3\\,\\frac{\\pi D^2}{4}$$ $$=\\tfrac12\\cdot1{,}225\\cdot0{,}4\\cdot10^3\\cdot\\frac{\\pi\\cdot100^2}{4}$$ $$W=245\\cdot7854\\approx1{,}92\\cdot10^{6}\\ \\text{W}$$ $$=\\boxed{1{,}9\\ \\text{MW}}$$ Olvidar el /4 del área da 7,7 MW; olvidar el $C_p$ (potencia disponible) da 4,8 MW; olvidar π da 0,6 MW.", "Apuntes EOL2, diap. 20");
L("EOL", "eol-principio", "Potencia del viento", 2, "Si la velocidad media del viento pasa de 6 a 9 m/s, manteniendo el resto de condiciones, la potencia disponible se multiplica por…",
  ["≈ 3,4", "1,5", "2,25", "≈ 5,1"],
  0, "La potencia del viento crece con el cubo de la velocidad (Apuntes EOL2, diap. 20): $$\\frac{W_2}{W_1}=\\left(\\frac{V_2}{V_1}\\right)^3$$ $$=\\left(\\frac{9}{6}\\right)^3$$ $$=1{,}5^3\\approx\\boxed{3{,}4}$$ 2,25 supone una dependencia cuadrática y 1,5 lineal; 5,1 sería 1,5⁴. La gráfica de los apuntes lo ilustra: de 8 a 16 m/s se pasa de ≈ 300 a ≈ 2.500 W/m² (×8).", "Apuntes EOL2, diap. 20");
L("EOL", "eol-principio", "Límite de Betz", 2, "En el desarrollo del límite de Betz de los apuntes, con a el coeficiente de velocidad inducida, se cumple que…",
  ["$V=V_1(1-a)$ en el rotor y $V_2=V_1(1-2a)$ aguas abajo, y el óptimo es a = 1/3",
   "$V=V_1(1-2a)$ en el rotor y $V_2=V_1(1-a)$ aguas abajo, y el óptimo es a = 1/3",
   "$V=V_1(1-a)$ en el rotor y $V_2=V_1(1-2a)$ aguas abajo, y el óptimo es a = 1/2",
   "$V=V_1(1-a)$ en el rotor y $V_2=V_1(1-a)^2$ aguas abajo, y el óptimo es a = 16/27"],
  0, "Desarrollo de Betz (Apuntes EOL2, diap. 13-14). Hipótesis: la velocidad en el rotor es la media de la de entrada y la de salida: $$V=\\frac{V_1+V_2}{2},$$ $$V=V_1(1-a) \\Rightarrow V_2 =V_1(1-2a)$$ Derivando la potencia respecto de a e igualando a cero: $$\\frac{dW}{da}=0 \\Rightarrow a =\\frac13$$ $$\\Rightarrow C_{\\text{p,máx}}$$ $$=\\frac{16}{27}\\approx0{,}593$$ 16/27 es el valor de $C_p$ máximo, no el de a; con a = 1/2 la velocidad aguas abajo se anularía.", "Apuntes EOL2, diap. 13-14");
L("EOL", "eol-principio", "Límite de Betz", 3, "Un viento de 12 m/s atraviesa una turbina ideal que trabaja en el óptimo de Betz. Las velocidades del aire en el rotor y aguas abajo son…",
  ["8 m/s y 4 m/s", "6 m/s y 0 m/s", "8 m/s y 6 m/s", "4 m/s y 8 m/s"],
  0, "En el óptimo de Betz a = 1/3 (Apuntes EOL2, diap. 13-14): $$V=V_1(1-a) =12\\cdot\\frac23$$ $$=\\boxed{8\\ \\text{m/s}}$$ $$V_2=V_1(1-2a) =12\\cdot\\frac13$$ $$=\\boxed{4\\ \\text{m/s}}$$ Comprobación: V = (V₁ + V₂)/2 = (12 + 4)/2 = 8 m/s, la hipótesis de Betz.", "Apuntes EOL2, diap. 13-14");
L("EOL", "eol-principio", "Límite de Betz", 3, "Según los apuntes, al aumentar el factor de velocidad inducida a de una turbina…",
  ["disminuyen la velocidad de paso por la turbina y su flujo másico, por lo que existe un valor óptimo de a que maximiza la potencia",
   "aumentan la velocidad de paso por la turbina y su flujo másico, por lo que conviene trabajar con el mayor valor posible de a",
   "disminuyen la velocidad de paso por la turbina y su flujo másico, por lo que conviene trabajar con el menor valor posible de a",
   "aumenta la velocidad del aire aguas abajo V₂, por lo que existe un valor óptimo de a que maximiza la potencia"],
  0, "Más a = más frenado del aire: cambia la energía cinética que cede cada kilo, pero baja la velocidad de paso V = V₁(1−a) y con ella el flujo másico. El compromiso da el óptimo a = 1/3. V₂ = V₁(1−2a) disminuye al crecer a.", "Apuntes EOL2, diap. 14");
L("EOL", "eol-principio", "Velocidad específica", 1, "La velocidad específica λ de un aerogenerador se define en los apuntes como…",
  ["la velocidad de punta de pala dividida por la velocidad del viento, $\\lambda = \\Omega R/U$",
   "la velocidad del viento dividida por la velocidad de punta de pala, $\\lambda = U/\\Omega R$",
   "la velocidad angular del rotor dividida por la velocidad del viento, $\\lambda = \\Omega/U$",
   "la velocidad de punta de pala dividida por la velocidad nominal del viento"],
  0, "Diap. 17: «velocidad máxima de las palas (velocidad de punta de pala) dividida por la velocidad del viento», λ = ΩR/U (TSR, tip speed ratio).", "Apuntes EOL2, diap. 17");
L("EOL", "eol-principio", "Velocidad específica", 3, "Un rotor de 120 m de diámetro gira a 12 rpm con un viento de 10 m/s. Su velocidad específica es aproximadamente…",
  ["7,5", "3,8", "15,1", "0,13"],
  0, "Velocidad específica = velocidad de punta de pala / velocidad del viento (Apuntes EOL2, diap. 17 y 28): $$\\Omega=12\\ \\tfrac{\\text{rev}}{\\text{min}}\\cdot\\frac{2\\pi}{60}$$ $$=1{,}257\\ \\text{rad/s}$$ $$\\lambda=\\frac{\\Omega R}{U}$$ $$=\\frac{1{,}257\\cdot60}{10}\\approx\\boxed{7{,}5}$$ Usar el diámetro en lugar del radio da 15,1 y la relación invertida U/(ΩR) da 0,13. Es la zona del máximo $C_p$ del tripala en la figura de la diap. 17.", "Apuntes EOL2, diap. 17 y 28");
L("EOL", "eol-principio", "Coeficiente de potencia", 3, "En la figura de C<sub>p</sub> frente a λ de los apuntes, ¿qué afirmación es correcta?",
  ["El tripala alcanza el mayor $C_{p}$ (≈ 0,49) hacia λ ≈ 7; el monopala trabaja a λ más altos con menor $C_{p}$",
   "El bipala alcanza el mayor $C_{p}$ (≈ 0,49) hacia λ ≈ 7; el tripala trabaja a λ más altos con menor $C_{p}$",
   "El Darrieus alcanza el mayor $C_{p}$ (≈ 0,59) hacia λ ≈ 5, igualando el límite de Betz",
   "El multipala americano alcanza el mayor $C_{p}$ (≈ 0,49) hacia λ ≈ 1 por su gran número de palas"],
  0, "Máximos aproximados: Savonius ≈ 0,15 (λ ≈ 1), multipala ≈ 0,30 (λ ≈ 1), holandés ≈ 0,28, Darrieus ≈ 0,40 (λ ≈ 5), tripala ≈ 0,49 (λ ≈ 7), bipala ≈ 0,47 (λ ≈ 10), monopala ≈ 0,42 (λ ≈ 15). Ninguno llega a Betz.", "Apuntes EOL2, diap. 17");
L("EOL", "eol-principio", "Número de palas", 2, "En la comparación de los apuntes entre rotores de 2 y 3 palas, ¿cuál es una característica del rotor de 2 palas?",
  ["Más ruidoso por su mayor velocidad periférica, y necesita un buje basculante",
   "Par motor más uniforme y mayor estabilidad mecánica por fuerzas giroscópicas equilibradas",
   "Menor impacto visual y mayor compensación de las fuerzas aerodinámicas",
   "Mayor coste del rotor por su mayor peso, aunque con instalación más sencilla"],
  0, "2 palas: menor coste del rotor (menos peso), más ruidoso (velocidad periférica mayor), instalación más simple, mayor complejidad (buje basculante). Las demás ventajas son del tripala.", "Apuntes EOL2, diap. 19");
L("EOL", "eol-principio", "Relación potencia-tamaño", 2, "En la figura de relación potencia-tamaño de los apuntes, un rotor de 80 m de diámetro corresponde a 2500 kW. Según esa misma figura, a un rotor de 40 m le corresponden…",
  ["500 kW", "1250 kW", "625 kW", "225 kW"],
  0, "La figura de los apuntes (Apuntes EOL2, diap. 21) asigna 40 m → 500 kW (27 m → 225 kW, 54 m → 1.000 kW, 72 m → 2.000 kW). La proporcionalidad estricta con el área barrida daría: $$W\\propto D^2$$ $$\\Rightarrow2500\\cdot\\left(\\frac{40}{80}\\right)^2$$ $$=625\\ \\text{kW}$$ pero la figura no es exactamente proporcional, porque las máquinas también cambian de altura y de diseño: la respuesta según la figura es 500 kW. 1.250 kW supone proporcionalidad lineal con D y 225 kW es el rotor de 27 m.", "Apuntes EOL2, diap. 21");

/* ===================== PREGUNTAS · 5. Curva de potencia y factor de carga ===================== */
L("EOL", "eol-curva", "Curva de potencia", 2, "Sobre la curva de potencia de un aerogenerador, según los apuntes, señale la correcta:",
  ["Expresa la potencia eléctrica entregada en condiciones estándar; crece con V³ desde la velocidad de arranque hasta la nominal",
   "Expresa la potencia mecánica en el eje en condiciones de máximo $C_{p}$; crece con V² desde la velocidad de arranque hasta la nominal",
   "Expresa la potencia eléctrica entregada en condiciones estándar; crece con V³ desde la velocidad nominal hasta la de corte",
   "Expresa la potencia eléctrica media anual del emplazamiento; crece linealmente desde la velocidad de arranque hasta la de corte"],
  0, "Diap. 23: potencia eléctrica en condiciones estándar; aumenta con V³ hasta el máximo nominal; por debajo de la de arranque no arranca y por encima de la de corte se para y desconecta. Entre nominal y corte la potencia es constante.", "Apuntes EOL2, diap. 23");
L("EOL", "eol-curva", "Velocidades características", 2, "En el aerogenerador de 4,5 MW de la tabla de características de los apuntes, las velocidades de arranque, nominal y de desconexión son…",
  ["4, 12 y 25 m/s", "3, 15 y 25 m/s", "4, 12 y 30 m/s", "2, 16 y 25 m/s"],
  0, "Tabla 1.3: arranque 4 m/s, nominal 12 m/s y desconexión 25 m/s. La curva de 850 kW de la diap. 23 tiene la nominal hacia 16 m/s.", "Apuntes EOL2, diap. 28");
L("EOL", "eol-curva", "Factor de carga", 2, "Con el ejemplo de los apuntes, un aerogenerador de 3000 kW que produce 10 000 000 kWh al año tiene un factor de carga de aproximadamente…",
  ["38 %", "33 %", "46 %", "3,8 %"],
  0, "Factor de carga = energía real / energía a plena potencia todo el año (Apuntes EOL2, diap. 25): $$FC=\\frac{10^{7}\\ \\text{kWh}}{3000\\ \\text{kW}\\cdot8760\\ \\text{h}}$$ $$=\\frac{10^{7}}{2{,}628\\cdot10^{7}}\\approx\\boxed{0{,}38=38\\ \\%}$$ Equivale a 10⁷/3.000 ≈ 3.333 horas a plena carga; el 33 % sale de confundir esas horas equivalentes con el porcentaje y el 3,8 % es un error de un factor 10.", "Apuntes EOL2, diap. 25");
L("EOL", "eol-curva", "Energía anual", 3, "En el guion del trabajo, la curva del aerogenerador genérico de 1600 kW da 1109 kW a 8 m/s. Si en el emplazamiento se registran 500 horas al año en el intervalo de 8 m/s a la altura del buje, la energía aportada por ese intervalo es…",
  ["≈ 555 MWh", "≈ 800 MWh", "≈ 1,1 MWh", "≈ 4,9 GWh"],
  0, "Energía de un intervalo de velocidad = potencia de la curva en ese intervalo × horas registradas (Guion del trabajo de eólica, pág. 4): $$E=P(8\\ \\text{m/s})\\cdot h$$ $$=1109\\ \\text{kW}\\cdot500\\ \\text{h}$$ $$=554.500\\ \\text{kWh}\\approx\\boxed{555\\ \\text{MWh}}$$ Usar la potencia nominal (1.600 kW) daría 800 MWh; multiplicar por 8.760 h confunde las horas del intervalo con las del año.", "Guion del trabajo de eólica, pág. 4");
L("EOL", "eol-curva", "Energía anual", 2, "Según la gráfica de energía producida de los apuntes, comparando el reparto anual de horas con el de energía frente a la velocidad…",
  ["el máximo de energía aparece a mayor velocidad que el máximo de horas, porque la potencia crece rápidamente con la velocidad",
   "el máximo de energía coincide con el máximo de horas, porque la energía es proporcional a las horas de cada intervalo",
   "el máximo de energía aparece a menor velocidad que el máximo de horas, porque a alta velocidad el aerogenerador se desconecta",
   "el máximo de energía aparece en la velocidad nominal, donde la máquina entrega toda su potencia, sea cual sea el recurso"],
  0, "Diap. 24: las horas tienen su máximo hacia 6 m/s, pero la energía (horas × potencia) lo tiene hacia 9-10 m/s. Para calcularla hay que combinar curva de potencia y distribución estadística de velocidades.", "Apuntes EOL2, diap. 24");
L("EOL", "eol-curva", "Efecto estela", 2, "En el esquema de posicionamiento de aerogeneradores de los apuntes, la separación recomendada es de…",
  ["unos 5 diámetros entre máquinas de una fila perpendicular al viento dominante y unos 7 diámetros entre filas",
   "unos 7 diámetros entre máquinas de una fila perpendicular al viento dominante y unos 5 diámetros entre filas",
   "unos 3 diámetros entre máquinas de una fila perpendicular al viento dominante y unos 10 diámetros entre filas",
   "unos 5 diámetros en cualquier dirección, ya que la estela turbulenta se disipa por igual en todas"],
  0, "Diap. 27: 5 veces el diámetro del rotor dentro de la fila y 7 veces entre filas en la dirección del viento, porque la estela turbulenta baja el rendimiento de las máquinas aguas abajo.", "Apuntes EOL2, diap. 27");

/* ===================== PREGUNTAS · 6. Descripción del aerogenerador ===================== */
L("EOL", "eol-aerogen", "Pala", 1, "El dispositivo del aerogenerador que capta la energía del viento es…",
  ["la pala", "el buje", "el generador eléctrico", "el multiplicador"],
  0, "Diap. 30: la pala es el «elemento que capta la energía del viento». El buje une las palas al eje; el multiplicador eleva la velocidad de giro y el generador convierte la energía mecánica en eléctrica.", "Apuntes EOL2, diap. 30");
L("EOL", "eol-aerogen", "Características típicas", 3, "En el ejemplo de aerogenerador de 4,5 MW de los apuntes (Tabla 1.3), ¿qué combinación es correcta?",
  ["Rotor de 120 m, palas de 58 m y 18 t, torre de 90-120 m y rotor a 9-15 rpm con multiplicador 100:1",
   "Rotor de 120 m, palas de 58 m y 18 t, torre de 90-120 m y rotor a 90-150 rpm con multiplicador 10:1",
   "Rotor de 58 m, palas de 120 m y 18 t, torre de 90-120 m y rotor a 9-15 rpm con multiplicador 100:1",
   "Rotor de 120 m, palas de 58 m y 220 t, torre de 220 m y rotor a 9-15 rpm con multiplicador 100:1"],
  0, "Tabla 1.3: 3 palas, D = 120 m, pala de 58 m, cuerda 5 m y 18 t; góndola con rotor y palas 220 t; torre de acero 220 t y 90-120 m; 5,5 m de diámetro en la base; 9-15 rpm; multiplicador 100:1.", "Apuntes EOL2, diap. 28");
L("EOL", "eol-aerogen", "Pala", 2, "Sobre las palas de los aerogeneradores actuales, los apuntes indican que…",
  ["se fabrican con resinas poliméricas reforzadas con fibra continua de vidrio o carbono, por infusión, y tienen baja reciclabilidad",
   "se fabrican con aleaciones de aluminio estampadas y remachadas, y tienen alta reciclabilidad",
   "se fabrican con resinas poliméricas reforzadas con fibra corta de vidrio, por inyección, y tienen alta reciclabilidad",
   "se fabrican con acero tubular soldado y recubierto de resina, y tienen baja reciclabilidad"],
  0, "Diap. 31: resinas poliméricas reforzadas con fibra continua (vidrio o carbono), fabricación por infusión de resina, ensamblaje con adhesivos, baja reciclabilidad.", "Apuntes EOL2, diap. 31");
L("EOL", "eol-aerogen", "Generador eléctrico", 3, "Señale las ventajas del generador ASÍNCRONO recogidas en los apuntes:",
  ["Admite un pequeño desplazamiento respecto a la velocidad de sincronismo",
   "Sistema de control sencillo, menor coste y robustez",
   "Vierte potencia reactiva a la red",
   "Puede funcionar de forma autónoma, sin estar conectado a la red"],
  [0, 1], "Asíncrono: fácil conexión, sin contactos móviles, admite pequeño deslizamiento, control sencillo, menor coste, robusto; pero necesita la red y grupos de condensadores. Verter reactiva, funcionar de forma autónoma y el mayor rendimiento son ventajas del síncrono.", "Apuntes EOL2, diap. 33-34");
L("EOL", "eol-aerogen", "Almacenamiento", 2, "¿Cuál de estas opciones NO figura entre los sistemas de almacenamiento citados en los apuntes de eólica?",
  ["Almacenamiento térmico en sales fundidas",
   "Ultracondensadores para intensidades elevadas",
   "Volantes de inercia y aire comprimido",
   "Desalación de agua en invierno"],
  0, "Diap. 35: baterías, ultracondensadores, almacenamiento mecánico (bombeo, volantes de inercia, aire comprimido), hidrógeno y oxígeno electrolíticos, combustibles sintéticos y desalación en invierno. Las sales fundidas son de la termosolar.", "Apuntes EOL2, diap. 35");

/* ===================== PREGUNTAS · 7. Offshore ===================== */
L("EOL", "eol-offshore", "Ventajas e inconvenientes", 2, "¿Cuáles de las siguientes son ventajas de los parques eólicos marinos según los apuntes?",
  ["Mayor recurso eólico, con mayores velocidades de viento",
   "Mayor capacidad instalada por parque y mayor potencia por aerogenerador",
   "Menores costes de mantenimiento gracias a un viento más regular",
   "Infraestructura más barata, al no pagar canon por ocupación del suelo"],
  [0, 1], "Diap. 36. Ventajas: mayor recurso, máquinas y parques mayores, menor impacto visual y acústico. Inconvenientes: infraestructura más costosa (aunque es más fácil transportar palas grandes en buque), ambiente severo (corrosión, oleaje) y altos costes de mantenimiento.", "Apuntes EOL2, diap. 36");
L("EOL", "eol-offshore", "Evacuación de la energía", 3, "En el esquema de un parque offshore de los apuntes, el transformador del aerogenerador eleva la tensión a ___ para el transporte dentro del parque, y en la subestación se pasa a ___",
  ["33-66 kV; alta tensión (+150 kV)", "+150 kV; 33-66 kV", "6-12 kV; 33-66 kV", "33-66 kV; corriente continua a 400 V"],
  0, "Diap. 38: el transformador eleva a 33-66 kV para la red interna; los cables submarinos llegan a la subestación, que convierte a alto voltaje (+150 kV) antes de la red de distribución.", "Apuntes EOL2, diap. 38");
L("EOL", "eol-offshore", "Cimentación", 1, "Según los apuntes, la cimentación de aerogeneradores en el mar es posible en aguas con profundidades…",
  ["menores de 50 m", "menores de 200 m", "menores de 5 m", "de entre 60 y 200 m"],
  0, "Diap. 39: la cimentación es posible en profundidades menores de 50 metros. Más allá hay que pasar a tecnología flotante.", "Apuntes EOL2, diap. 39");
L("EOL", "eol-offshore", "Tecnología flotante", 3, "De las siguientes soluciones mostradas en los apuntes, ¿cuáles son de tecnología FLOTANTE?",
  ["Plataforma de patas tensionadas (TLP)", "Plataforma semisumergible", "Spar (monopilote flotante)", "Jacket (celosía)"],
  [0, 1, 2], "Flotantes (Figure 16, MITECO-IDAE): TLP, semisumergible y spar. Cimentaciones fijas (Figure 8): monopilote, gravedad y jacket.", "Apuntes EOL2, diap. 40");
L("EOL", "eol-offshore", "Offshore en España", 3, "Sobre la eólica marina en España, los apuntes indican que…",
  ["las aguas peninsulares superan pronto los 60 m de profundidad y solo hay dos plataformas de investigación: PLOCAN (Canarias) y BIMEP (País Vasco)",
   "las aguas peninsulares superan pronto los 60 m de profundidad y solo hay dos plataformas de investigación: PLOCAN (País Vasco) y BIMEP (Canarias)",
   "las aguas peninsulares son someras hasta 50 m de profundidad y ya hay varios parques comerciales de cimentación fija",
   "las aguas peninsulares superan pronto los 200 m de profundidad y la tecnología flotante ya es comercial y de alto rendimiento"],
  0, "Diap. 41: aguas profundas cerca de la costa (más de 60 m), solo PLOCAN en Canarias y BIMEP en el País Vasco; la alternativa flotante está aún en desarrollo, con bajo rendimiento, y necesita inversión.", "Apuntes EOL2, diap. 41");

/* ===================== PREGUNTAS · 8. Costes y barreras ===================== */
L("EOL", "eol-costes", "CAPEX onshore", 2, "Según la estimación de costes de inversión de los apuntes para un parque onshore de gran potencia en 2010, el total estaba entre…",
  ["992 y 1307 miles de €/MW, con el aerogenerador como partida principal (744-980)",
   "744 y 980 miles de €/MW, con la obra civil como partida principal (79-105)",
   "992 y 1307 miles de €/MW, con la subestación y conexión como partida principal (99-131)",
   "1800 y 3900 miles de €/MW, con el aerogenerador como partida principal (810-1110)"],
  0, "Diap. 42: total 992-1307 k€/MW; aerogenerador 744-980; obra civil 79-105; instalación eléctrica ≈ 50-65; subestación 99-131; promoción 20-26. 1,8-3,9 M€/MW es el rango offshore según distancia.", "Apuntes EOL2, diap. 42");
L("EOL", "eol-costes", "OPEX", 3, "Sobre los costes operativos (OPEX) estimados en 2010, señale la afirmación correcta:",
  ["En tierra bajan de 2,16 a 1,72 c€/kWh al pasar de 1800 a 3000 horas equivalentes; en el mar, de 4,2 a 2,6 c€/kWh entre 2500 y 4000 horas",
   "En tierra bajan de 4,2 a 2,6 c€/kWh al pasar de 1800 a 3000 horas equivalentes; en el mar, de 2,16 a 1,72 c€/kWh entre 2500 y 4000 horas",
   "En tierra suben de 1,72 a 2,16 c€/kWh al pasar de 1800 a 3000 horas equivalentes, por el mayor desgaste de las máquinas",
   "En tierra y en el mar el OPEX es prácticamente el mismo, ≈ 2 c€/kWh, porque la partida principal es el seguro"],
  0, "Diap. 43: onshore 2,16 (1800 h) → 1,72 c€/kWh (3000 h). Diap. 45: offshore 4,2 (2500 h), 3,5 (3000 h), 3,0 (3500 h) y 2,6 c€/kWh (4000 h), con ≈ 3300 h equivalentes para un parque tipo. En tierra la partida principal es el mantenimiento del aerogenerador.", "Apuntes EOL2, diap. 43 y 45");
L("EOL", "eol-costes", "Coste de generación", 3, "Según los apuntes, el coste de generación offshore de gran potencia en 2010 para un parque a 100 km de la costa y su previsión para 2030 eran…",
  ["17,3 y 10,7 c€/kWh", "13,2 y 8,2 c€/kWh", "8,9 y 7,4 c€/kWh", "9,2 y 5,7 c€/kWh"],
  0, "Diap. 46, offshore: 100 km 17,3 → 10,7; 50 km 13,2 → 8,2; 10 km 9,9 → 6,1; 2 km 9,2 → 5,7 c€/kWh. Onshore con viento moderado (2000 h): 8,9 → 7,4 c€/kWh.", "Apuntes EOL2, diap. 46");
L("EOL", "eol-costes", "Barreras offshore", 2, "Entre las barreras de los parques eólicos marinos recogidas en los apuntes, ¿cuál se clasifica como REGULATORIA?",
  ["Los crecientes requisitos de limitación de potencia reactiva y de estabilidad frente a huecos de tensión, que obligan a mayores CAPEX",
   "La necesidad de líneas de transporte por la distancia entre las zonas de alto recurso eólico y las de consumo",
   "La necesidad de evolucionar las cimentaciones para profundidades de más de 40 m o la tecnología flotante",
   "La desconexión de parques cuando puedan producir en exceso y la necesidad de generación de apoyo"],
  0, "Diap. 47. Regulatorias: reactiva y huecos de tensión. Infraestructuras: líneas de transporte y subestación flotante. Tecnológicas: gestión de la generación (desconexión, apoyo), cimentaciones de más de 40 m o flotantes y predicción del recurso.", "Apuntes EOL2, diap. 47");

/* ===================== PREGUNTAS · 9. Tendencias y producción en España ===================== */
L("EOL", "eol-futuro", "Previsión GWEC", 2, "Según la previsión del GWEC recogida en los apuntes, la nueva potencia eólica instalada al año pasará de ___ en 2025 a ___ en 2030",
  ["164,6 GW; 211,8 GW (CAGR 5,2 %)", "164,6 GW; 211,8 GW (CAGR 12 %)", "117,3 GW; 164,6 GW (CAGR 5,2 %)", "211,8 GW; 1299 GW (CAGR 5,2 %)"],
  0, "Diap. 48: 164,6 GW (2025) → 178 → 186,5 → 193,3 → 199,9 → 211,8 GW (2030e), CAGR 5,2 %. El +12 % es el CAGR del último tramo histórico de la diap. 8 y 117,3 GW lo instalado en 2024.", "Apuntes EOL2, diap. 48");
L("EOL", "eol-futuro", "Senda de 1,5 ºC", 3, "Según el GWEC Global Wind Report 2026 recogido en los apuntes, para limitar el calentamiento a 1,5 ºC…",
  ["las instalaciones anuales deben duplicarse hacia 2030; al ritmo actual solo se alcanzaría el 83 % de la potencia necesaria",
   "las instalaciones anuales deben multiplicarse por 4 hacia 2030; al ritmo actual solo se alcanzaría el 64 % de la potencia necesaria",
   "las instalaciones anuales deben duplicarse hacia 2030; al ritmo actual solo se alcanzaría el 64 % de la potencia necesaria",
   "basta con mantener el ritmo actual de instalaciones, ya que se alcanzaría el 100 % de la potencia necesaria"],
  0, "Diap. 49, gráfica derecha: «Annual installations need to grow by 2x» y «we reach only 83 %». La gráfica izquierda (serie desde 2020) hablaba de ×4 y del 64 %.", "Apuntes EOL2, diap. 49");
L("EOL", "eol-futuro", "Producción en España", 2, "En 2025, según los apuntes (REE), la energía eólica en España…",
  ["fue la primera productora de electricidad con 58 801 GWh (21,6 %), aunque con autoconsumo queda segunda tras la fotovoltaica",
   "fue la primera productora de electricidad con 62 569 GWh (23,5 %), por delante incluso de la fotovoltaica con autoconsumo",
   "fue la segunda productora de electricidad con 58 801 GWh (21,6 %), por detrás del ciclo combinado",
   "fue la segunda productora de electricidad con 60 921 GWh (23,2 %), por detrás de la nuclear"],
  0, "Diap. 50: 2025, renovables 55,5 %; eólica primera con 58 801 GWh (21,6 %); con autoconsumo, FV 21,3 % y eólica 20,6 %. 62 569 GWh es 2023 y 60 921 GWh es 2024.", "Apuntes EOL2, diap. 50");
L("EOL", "eol-futuro", "Producción en España", 3, "Según los apuntes, ¿en qué año la eólica fue la SEGUNDA productora de electricidad en España, por detrás del ciclo combinado?",
  ["2022", "2021", "2023", "Ninguna de las otras opciones"],
  0, "Diap. 54: en 2022 (renovables 42,2 %) la eólica produjo 61 176 GWh (22,1 %), segunda tras el ciclo combinado (24,7 %). En 2021, 2023, 2024 y 2025 fue primera; en 2020 la superó la nuclear (22,3 % frente a 21,9 %), no el ciclo combinado.", "Apuntes EOL2, diap. 54");

/* ===================== TARJETAS ===================== */
C("EOL", "eol-recurso", "Escalas del viento: tamaño y altura", "Macro ≈ 1000 km, hasta 12-15 km (alisios, polares). Meso 10-500 km, 1-1,5 km (brisas, valles). Micro: viento local (obstáculos, colinas).");
C("EOL", "eol-recurso", "Anabático vs catabático", "<b>Anabático</b> = brisa de valle, diurna (sube). <b>Catabático</b> = brisa de montaña, nocturna (baja).");
C("EOL", "eol-recurso", "Exponente n de la ley potencial", "Mar/playa 0,1-0,13 · rural 0,13-0,2 · bosque 0,2-0,27 · edificios 0,27-0,4.");
C("EOL", "eol-recurso", "Ley logarítmica del perfil", "$v(h)=v_{ref}\\ln(h/z_0)/\\ln(h_{ref}/z_0)$; z<sub>0</sub> de 0,0002 m (mar) a 1,6 m (rascacielos).");
C("EOL", "eol-estad", "Weibull: densidad y acumulada", "$f=\\frac{k}{c}(v/c)^{k-1}e^{-(v/c)^k}$; $F(v_0)=1-e^{-(v_0/c)^k}$. k = 1,3-3.");
C("EOL", "eol-estad", "¿Cómo se obtienen k y c?", "Linealizando la acumulada: $\\ln(-\\ln(1-F))=k\\ln v-k\\ln c$ → pendiente k, ordenada −k·ln c.");
C("EOL", "eol-estad", "Velocidad media con k = 2", "$v_{ave}=\\frac{\\sqrt\\pi}{2}c=0{,}886\\,c$.");
C("EOL", "eol-ventajas", "Potencia eólica mundial 2025", "<b>1299 GW</b>: 1206,5 onshore + 92,5 offshore (máximo teórico 72 TW). Nueva en 2025: 164,6 GW.");
C("EOL", "eol-ventajas", "España 2025: potencia instalada", "Eólica <b>33,3 GW</b> (2.ª) tras la fotovoltaica <b>41,7 GW</b> (1.ª).");
C("EOL", "eol-ventajas", "Distancia mínima a viviendas por ruido", "Al menos <b>200 m</b> (43 dB(A)).");
C("EOL", "eol-principio", "Potencia extraída del viento", "$W=\\frac12\\rho C_pV^3\\pi D^2/4$: lineal en ρ, cúbica en V, cuadrática en D.");
C("EOL", "eol-principio", "Límite de Betz", "Óptimo con a = 1/3 → $C_{p,max}=16/27\\approx0{,}593$. V = V₁(1−a), V₂ = V₁(1−2a).");
C("EOL", "eol-principio", "Velocidad específica λ", "λ = ΩR/U: velocidad de punta de pala / velocidad del viento. Tripala: C<sub>p</sub> máx ≈ 0,49 a λ ≈ 7.");
C("EOL", "eol-curva", "Tres velocidades de la curva de potencia", "Arranque (≈ 4 m/s), nominal (≈ 12 m/s) y corte/desconexión (≈ 25 m/s) en la máquina de 4,5 MW.");
C("EOL", "eol-curva", "Factor de carga del ejemplo de clase", "3000 kW y 10⁷ kWh/año → 10⁷ / (3000 · 8760) ≈ <b>38 %</b>.");
C("EOL", "eol-aerogen", "Síncrono vs asíncrono (en una línea)", "Síncrono: rendimiento, reactiva, autónomo / control complejo. Asíncrono: barato, robusto, sencillo / necesita red y condensadores.");
C("EOL", "eol-offshore", "Profundidad máxima para cimentar", "≈ <b>50 m</b>. En España se superan los 60 m cerca de costa → flotante (PLOCAN, BIMEP).");
C("EOL", "eol-costes", "CAPEX 2010: tierra vs mar", "Onshore 992-1307 k€/MW; offshore ≈ 2845 k€/MW (1,8 M€/MW a 2 km; 3,9 M€/MW a 100 km).");
C("EOL", "eol-futuro", "Producción eólica en España 2025", "58 801 GWh (21,6 %), 1.ª productora sin autoconsumo; renovables 55,5 %.");
C("EOL", "eol-futuro", "¿Cuándo no fue primera la eólica?", "2022: 2.ª tras el ciclo combinado (24,7 %). 2020: tras la nuclear (22,3 % vs 21,9 %).");

/* ===================== EJERCICIOS ===================== */
DRILLS.push({ id: "eol-c-generador", type: "classify", tema: "EOL", sec: "eol-aerogen", title: "¿Generador síncrono o asíncrono?", cats: ["Síncrono", "Asíncrono"], items: [
  ["Mayor rendimiento", 0], ["Vierte potencia reactiva a la red", 0], ["Funciona de forma autónoma", 0], ["Complejo sistema de control", 0], ["Conexión compleja a la red", 0], ["Rotor de electroimanes", 0],
  ["Facilidad de conexión a la red", 1], ["Sin contactos móviles", 1], ["Admite pequeño deslizamiento", 1], ["Menor coste y robusto", 1], ["Necesita estar conectado a la red", 1], ["Necesita grupos de condensadores", 1] ] });
DRILLS.push({ id: "eol-c-offshore", type: "classify", tema: "EOL", sec: "eol-offshore", title: "Offshore: ¿ventaja o inconveniente?", cats: ["Ventaja", "Inconveniente"], items: [
  ["Mayores velocidades de viento", 0], ["Mayor potencia por aerogenerador", 0], ["Mayor capacidad por parque", 0], ["Menor impacto visual y acústico", 0], ["Palas grandes más fáciles de llevar en buque", 0],
  ["Infraestructura más costosa", 1], ["Corrosión por ambiente marino", 1], ["Cargas por oleaje y tormentas", 1], ["Altos costes de mantenimiento", 1] ] });
DRILLS.push({ id: "eol-m-rugosidad", type: "match", tema: "EOL", sec: "eol-recurso", title: "Paisaje ↔ longitud de rugosidad z₀", pairs: [
  ["Mares y lagos", "0,0002 m"], ["Hormigón, pistas, hierba cortada", "0,0024 m"], ["Tierra agrícola abierta", "0,03 m"],
  ["Setos de 8 m cada ≈ 500 m", "0,1 m"], ["Pueblos, bosques, terreno accidentado", "0,4 m"], ["Ciudad con rascacielos", "1,6 m"] ] });
DRILLS.push({ id: "eol-m-cifras", type: "match", tema: "EOL", sec: "eol-ventajas", title: "Cifra ↔ dato eólico", pairs: [
  ["1299 GW", "Potencia mundial 2025"], ["72 TW", "Máximo teórico mundial"], ["33,3 GW", "Potencia en España 2025"], ["41,7 GW", "Fotovoltaica en España 2025"],
  ["49,1 %", "Cuota china onshore"], ["16/27", "Límite de Betz"], ["200 m", "Distancia mínima a viviendas"], ["≈ 50 m", "Profundidad máxima para cimentar"] ] });
DRILLS.push({ id: "eol-c-barreras", type: "classify", tema: "EOL", sec: "eol-costes", title: "Tipo de barrera de la eólica marina", cats: ["Tecnológica", "Infraestructuras", "Regulatoria", "Ambiental / usos"], items: [
  ["Desconexión de parques por exceso de producción", 0], ["Necesidad de generación de apoyo", 0], ["Cimentaciones para más de 40 m", 0], ["Predicción temporal del recurso", 0],
  ["Líneas de transporte hasta el consumo", 1], ["Subestación flotante", 1],
  ["Limitación de potencia reactiva", 2], ["Estabilidad frente a huecos de tensión", 2],
  ["Migraciones de aves", 3], ["Rutas marítimas y zonas de pesca", 3] ] });

/* ===================== MNEMOTECNIA ===================== */
MNEMO["eol-recurso"] = ["Macro «mil y doce»: ≈ 1000 km y hasta 12-15 km de altura; meso «de 10 a 500», hasta 1,5 km.", "<b>Ana</b>bático <b>a</b>sciende (de día); <b>cata</b>bático <b>cae</b> (de noche).", "n «0,1 – 0,4»: del mar a la ciudad; z<sub>0</sub> «de 2 diezmilésimas a 1,6 m»."];
MNEMO["eol-estad"] = ["Weibull «k da la forma, c da la escala»: k entre 1,3 y 3.", "Con k = 2, «la media es el 89 % de c» (0,886·c).", "Doble logaritmo, línea recta: pendiente = k; ordenada = −k·ln c."];
MNEMO["eol-ventajas"] = ["«Seis meses y de 600 kW a 200 MW»: rapidez y versatilidad de la eólica.", "«200 metros, 43 decibelios»: la casa más cercana.", "2025: «1299 = 1206,5 + 92,5»; España «33,3 eólica frente a 41,7 FV»."];
MNEMO["eol-principio"] = ["«Un tercio frena, dieciséis veintisieteavos gana»: a = 1/3 → C<sub>p</sub> = 16/27 ≈ 0,59.", "ρ·V³·D²: «densidad una vez, velocidad tres, diámetro dos».", "Menos palas, más rápido giran: Savonius y multipala a λ ≈ 1; tripala a λ ≈ 7; monopala a λ ≈ 15."];
MNEMO["eol-curva"] = ["«4-12-25»: arranque, nominal y corte de la máquina de 4,5 MW.", "Factor de carga = lo que produce / (potencia nominal · 8760 h).", "Estela «5 y 7»: 5 diámetros en la fila, 7 entre filas."];
MNEMO["eol-aerogen"] = ["Tabla 1.3 «120-58-18»: diámetro, longitud de pala y toneladas de pala; «9-15 rpm y 100 a 1».", "El síncrono es «independiente» (autónomo, da reactiva); el asíncrono «necesita» (red y condensadores)."];
MNEMO["eol-offshore"] = ["«50 se cimenta, 60 en España»: por eso aquí toca flotar (PLOCAN en Canarias, BIMEP en el País Vasco).", "Flotantes «TSS»: TLP, Semisumergible, Spar. Fijas «MGJ»: Monopilote, Gravedad, Jacket."];
MNEMO["eol-costes"] = ["Onshore «cerca de 1 M€/MW» (992-1307 k€); offshore «casi el triple» (≈ 2845 k€/MW).", "Barreras «TIRA»: Tecnológicas, Infraestructuras, Regulatorias y Ambientales (más rutas y pesca)."];
MNEMO["eol-futuro"] = ["«De 165 a 212»: GW nuevos al año entre 2025 y 2030 (CAGR 5,2 %).", "La eólica es primera salvo en 2022 (ciclo combinado) y 2020 (nuclear).", "2025: «58 801 GWh, 21,6 %»."];

/* ===================== DIAGRAMAS ===================== */
DIAGRAMS.push({ sec: "eol-recurso", h4: "Ley potencial", cap: "Ley potencial v = v<sub>ref</sub>·(z/z<sub>ref</sub>)<sup>n</sup> con z<sub>ref</sub> = 10 m para los dos extremos de la tabla de rugosidad (n = 0,1 y n = 0,4). Cuanto más rugoso es el terreno, menor es la velocidad cerca del suelo y más «gana» el viento al subir: con n = 0,4 la velocidad a 200 m es 3,3 veces la de 10 m; sobre el mar, solo 1,35 veces. Cálculo de la app con las fórmulas de EOL1, diap. 6.", svg: `<svg class="dg" viewBox="0 0 540 300" role="img" aria-label="Perfil vertical de velocidades para dos rugosidades">
<line class="grid" x1="70" y1="200" x2="470" y2="200"/><text class="small2 mut" x="62" y="204" text-anchor="end">50</text>
<line class="grid" x1="70" y1="150" x2="470" y2="150"/><text class="small2 mut" x="62" y="154" text-anchor="end">100</text>
<line class="grid" x1="70" y1="100" x2="470" y2="100"/><text class="small2 mut" x="62" y="104" text-anchor="end">150</text>
<line class="grid" x1="70" y1="50" x2="470" y2="50"/><text class="small2 mut" x="62" y="54" text-anchor="end">200</text>
<line class="grid" x1="184" y1="50" x2="184" y2="250"/><text class="small2 mut" x="184" y="266" text-anchor="middle">1</text>
<line class="grid" x1="299" y1="50" x2="299" y2="250"/><text class="small2 mut" x="299" y="266" text-anchor="middle">2</text>
<line class="grid" x1="413" y1="50" x2="413" y2="250"/><text class="small2 mut" x="413" y="266" text-anchor="middle">3</text>
<line class="ax" x1="70" y1="250" x2="470" y2="250"/><line class="ax" x1="70" y1="250" x2="70" y2="45"/>
<text class="small2" x="270" y="286" text-anchor="middle">v / v<tspan baseline-shift="sub" font-size="9">ref</tspan>  (v<tspan baseline-shift="sub" font-size="9">ref</tspan> medida a z<tspan baseline-shift="sub" font-size="9">ref</tspan> = 10 m)</text>
<text class="small2" x="20" y="40">z (m)</text>
<line class="dash" x1="70" y1="240" x2="470" y2="240"/><text class="small2 mut" x="466" y="236" text-anchor="end">z = 10 m</text>
<path d="M154.7 249.5 L160.8 249.0 L167.3 248.0 L174.3 246.0 L178.6 244.0 L184.3 240.0 L192.5 230.0 L201.3 210.0 L206.7 190.0 L210.7 170.0 L213.9 150.0 L217.7 120.0 L220.8 90.0 L224.2 50.0" fill="none" stroke="#0891b2" stroke-width="2.5"/>
<path d="M104.5 249.5 L115.5 249.0 L130.0 248.0 L149.2 246.0 L163.2 244.0 L184.3 240.0 L220.8 230.0 L269.0 210.0 L304.0 190.0 L332.6 170.0 L357.1 150.0 L388.8 120.0 L416.4 90.0 L448.8 50.0" fill="none" stroke="#c2413b" stroke-width="2.5"/>
<text class="small2 tb" x="230" y="62" fill="#0891b2">n = 0,1 (mar, playa)</text>
<text class="small2" x="230" y="76" fill="#0891b2">a 200 m: ×1,35</text>
<text class="small2 tb" x="470" y="190" text-anchor="end" fill="#c2413b">n = 0,4 (edificios)</text>
<text class="small2" x="470" y="204" text-anchor="end" fill="#c2413b">a 200 m: ×3,31</text>
</svg>` });

DIAGRAMS.push({ sec: "eol-estad", h4: "Distribución de Weibull", cap: "Función de densidad de Weibull para tres valores del factor de forma k (rango de los apuntes: 1,3-3) con el mismo factor de escala c. Al subir k la curva se estrecha y se hace más picuda (viento más regular); con k bajo hay más horas de calma y más horas de vientos fuertes. Curvas calculadas por la app; compárense con EOL1, diap. 16.", svg: `<svg class="dg" viewBox="0 0 540 290" role="img" aria-label="Densidad de Weibull para varios k">
<line class="grid" x1="60" y1="202" x2="480" y2="202"/><text class="small2 mut" x="54" y="206" text-anchor="end">0,05</text>
<line class="grid" x1="60" y1="164" x2="480" y2="164"/><text class="small2 mut" x="54" y="168" text-anchor="end">0,10</text>
<line class="grid" x1="60" y1="126" x2="480" y2="126"/><text class="small2 mut" x="54" y="130" text-anchor="end">0,15</text>
<line class="grid" x1="60" y1="88" x2="480" y2="88"/><text class="small2 mut" x="54" y="92" text-anchor="end">0,20</text>
<line class="grid" x1="60" y1="50" x2="480" y2="50"/><text class="small2 mut" x="54" y="54" text-anchor="end">0,25</text>
<text class="small2 mut" x="60" y="256" text-anchor="middle">0</text>
<text class="small2 mut" x="165" y="256" text-anchor="middle">5</text>
<text class="small2 mut" x="270" y="256" text-anchor="middle">10</text>
<text class="small2 mut" x="375" y="256" text-anchor="middle">15</text>
<text class="small2 mut" x="480" y="256" text-anchor="middle">20</text>
<line class="ax" x1="60" y1="240" x2="480" y2="240"/><line class="ax" x1="60" y1="240" x2="60" y2="40"/>
<text class="small2" x="270" y="276" text-anchor="middle">Velocidad del viento (m/s)</text><text class="small2" x="14" y="32">f(v)</text>
<path d="M60.0 240.0 L65.2 201.5 L70.5 186.5 L75.8 175.7 L81.0 167.5 L86.2 161.1 L91.5 156.2 L96.8 152.3 L102.0 149.5 L107.2 147.5 L112.5 146.3 L117.8 145.7 L123.0 145.7 L128.2 146.1 L133.5 147.1 L138.8 148.4 L144.0 150.0 L149.2 151.9 L154.5 154.1 L159.8 156.4 L165.0 158.9 L170.2 161.6 L175.5 164.4 L180.8 167.2 L186.0 170.1 L191.2 173.0 L196.5 176.0 L201.8 178.9 L207.0 181.8 L212.2 184.7 L217.5 187.5 L222.8 190.3 L228.0 192.9 L233.2 195.6 L238.5 198.1 L243.8 200.6 L249.0 202.9 L254.2 205.2 L259.5 207.4 L264.8 209.5 L270.0 211.5 L275.2 213.4 L280.5 215.2 L285.8 216.9 L291.0 218.5 L296.2 220.0 L301.5 221.5 L306.8 222.8 L312.0 224.1 L317.2 225.3 L322.5 226.4 L327.8 227.5 L333.0 228.5 L338.2 229.4 L343.5 230.2 L348.8 231.0 L354.0 231.8 L359.2 232.5 L364.5 233.1 L369.8 233.7 L375.0 234.2 L380.2 234.7 L385.5 235.2 L390.8 235.6 L396.0 236.0 L401.2 236.4 L406.5 236.7 L411.8 237.0 L417.0 237.3 L422.2 237.5 L427.5 237.8 L432.8 238.0 L438.0 238.2 L443.2 238.4 L448.5 238.5 L453.8 238.7 L459.0 238.8 L464.2 238.9 L469.5 239.0 L474.8 239.1 L480.0 239.2" fill="none" stroke="#2563eb" stroke-width="2.5"/>
<path d="M60.0 240.0 L65.2 229.5 L70.5 219.0 L75.8 208.8 L81.0 198.9 L86.2 189.5 L91.5 180.5 L96.8 172.1 L102.0 164.4 L107.2 157.5 L112.5 151.3 L117.8 145.9 L123.0 141.4 L128.2 137.7 L133.5 134.8 L138.8 132.9 L144.0 131.7 L149.2 131.4 L154.5 131.7 L159.8 132.8 L165.0 134.6 L170.2 136.9 L175.5 139.8 L180.8 143.1 L186.0 146.8 L191.2 150.8 L196.5 155.1 L201.8 159.6 L207.0 164.2 L212.2 168.9 L217.5 173.6 L222.8 178.3 L228.0 182.9 L233.2 187.4 L238.5 191.8 L243.8 196.0 L249.0 199.9 L254.2 203.7 L259.5 207.3 L264.8 210.6 L270.0 213.7 L275.2 216.6 L280.5 219.3 L285.8 221.7 L291.0 223.9 L296.2 225.9 L301.5 227.7 L306.8 229.3 L312.0 230.7 L317.2 232.0 L322.5 233.1 L327.8 234.1 L333.0 235.0 L338.2 235.7 L343.5 236.4 L348.8 237.0 L354.0 237.4 L359.2 237.9 L364.5 238.2 L369.8 238.5 L375.0 238.8 L380.2 239.0 L385.5 239.2 L390.8 239.3 L396.0 239.4 L401.2 239.6 L406.5 239.6 L411.8 239.7 L417.0 239.8 L422.2 239.8 L427.5 239.9 L432.8 239.9 L438.0 239.9 L443.2 239.9 L448.5 239.9 L453.8 240.0 L459.0 240.0 L464.2 240.0 L469.5 240.0 L474.8 240.0 L480.0 240.0" fill="none" stroke="#d97706" stroke-width="2.5"/>
<path d="M60.0 240.0 L65.2 239.3 L70.5 237.4 L75.8 234.1 L81.0 229.5 L86.2 223.7 L91.5 216.6 L96.8 208.5 L102.0 199.3 L107.2 189.3 L112.5 178.6 L117.8 167.5 L123.0 156.2 L128.2 144.9 L133.5 134.0 L138.8 123.7 L144.0 114.4 L149.2 106.4 L154.5 99.8 L159.8 95.0 L165.0 92.1 L170.2 91.1 L175.5 92.2 L180.8 95.3 L186.0 100.2 L191.2 106.8 L196.5 114.9 L201.8 124.2 L207.0 134.3 L212.2 144.9 L217.5 155.8 L222.8 166.5 L228.0 176.9 L233.2 186.6 L238.5 195.6 L243.8 203.6 L249.0 210.7 L254.2 216.9 L259.5 222.0 L264.8 226.3 L270.0 229.7 L275.2 232.4 L280.5 234.5 L285.8 236.1 L291.0 237.3 L296.2 238.2 L301.5 238.8 L306.8 239.2 L312.0 239.5 L317.2 239.7 L322.5 239.8 L327.8 239.9 L333.0 239.9 L338.2 240.0 L343.5 240.0 L348.8 240.0 L354.0 240.0 L359.2 240.0 L364.5 240.0 L369.8 240.0 L375.0 240.0 L380.2 240.0 L385.5 240.0 L390.8 240.0 L396.0 240.0 L401.2 240.0 L406.5 240.0 L411.8 240.0 L417.0 240.0 L422.2 240.0 L427.5 240.0 L432.8 240.0 L438.0 240.0 L443.2 240.0 L448.5 240.0 L453.8 240.0 L459.0 240.0 L464.2 240.0 L469.5 240.0 L474.8 240.0 L480.0 240.0" fill="none" stroke="#0d9488" stroke-width="2.5"/>
<text class="small2 tb" x="200" y="84" fill="#0d9488">k = 3 (viento regular)</text>
<text class="small2 tb" x="249" y="137" fill="#d97706">k = 2</text>
<text class="small2 tb" x="302" y="183" fill="#2563eb">k = 1,5 (más disperso)</text>
<text class="small2 mut" x="470" y="58" text-anchor="end">c = 6 m/s en las tres curvas</text>
</svg>` });

DIAGRAMS.push({ sec: "eol-principio", h4: "Límite de Betz", cap: "Coeficiente de potencia ideal C<sub>p</sub> = 4a(1−a)², que se obtiene de la expresión de la potencia extraída de EOL2, diap. 13-14. El máximo está en a = 1/3 y vale 16/27 ≈ 0,593 (límite de Betz). Con a &gt; 1/2 el modelo deja de tener sentido físico (la velocidad aguas abajo saldría negativa), por eso la figura de los apuntes dibuja ese tramo discontinuo.", svg: `<svg class="dg" viewBox="0 0 540 290" role="img" aria-label="Coeficiente de potencia frente al factor de inducción axial">
<line class="grid" x1="60" y1="213" x2="480" y2="213"/><text class="small2 mut" x="54" y="217" text-anchor="end">0,1</text>
<line class="grid" x1="60" y1="186" x2="480" y2="186"/><text class="small2 mut" x="54" y="190" text-anchor="end">0,2</text>
<line class="grid" x1="60" y1="159" x2="480" y2="159"/><text class="small2 mut" x="54" y="163" text-anchor="end">0,3</text>
<line class="grid" x1="60" y1="131" x2="480" y2="131"/><text class="small2 mut" x="54" y="135" text-anchor="end">0,4</text>
<line class="grid" x1="60" y1="104" x2="480" y2="104"/><text class="small2 mut" x="54" y="108" text-anchor="end">0,5</text>
<line class="grid" x1="60" y1="77" x2="480" y2="77"/><text class="small2 mut" x="54" y="81" text-anchor="end">0,6</text>
<line class="grid" x1="60" y1="50" x2="480" y2="50"/><text class="small2 mut" x="54" y="54" text-anchor="end">0,7</text>
<text class="small2 mut" x="60" y="256" text-anchor="middle">0,0</text>
<text class="small2 mut" x="144" y="256" text-anchor="middle">0,2</text>
<text class="small2 mut" x="228" y="256" text-anchor="middle">0,4</text>
<text class="small2 mut" x="312" y="256" text-anchor="middle">0,6</text>
<text class="small2 mut" x="396" y="256" text-anchor="middle">0,8</text>
<text class="small2 mut" x="480" y="256" text-anchor="middle">1,0</text>
<line class="ax" x1="60" y1="240" x2="480" y2="240"/><line class="ax" x1="60" y1="240" x2="60" y2="40"/>
<text class="small2" x="270" y="276" text-anchor="middle">Factor de inducción axial a</text><text class="small2" x="14" y="32">C<tspan baseline-shift="sub" font-size="9">p</tspan></text>
<path d="M60.0 240.0 L64.2 229.4 L68.4 219.1 L72.6 209.4 L76.8 200.0 L81.0 191.0 L85.2 182.4 L89.4 174.3 L93.6 166.5 L97.8 159.1 L102.0 152.1 L106.2 145.4 L110.4 139.1 L114.6 133.2 L118.8 127.6 L123.0 122.3 L127.2 117.4 L131.4 112.8 L135.6 108.6 L139.8 104.7 L144.0 101.0 L148.2 97.7 L152.4 94.7 L156.6 91.9 L160.8 89.5 L165.0 87.3 L169.2 85.4 L173.4 83.8 L177.6 82.4 L181.8 81.3 L186.0 80.4 L190.2 79.8 L194.4 79.3 L198.6 79.2 L202.8 79.2 L207.0 79.4 L211.2 79.9 L215.4 80.6 L219.6 81.4 L223.8 82.4 L228.0 83.7 L232.2 85.0 L236.4 86.6 L240.6 88.3 L244.8 90.2 L249.0 92.2 L253.2 94.4 L257.4 96.7 L261.6 99.1 L265.8 101.6 L270.0 104.3" fill="none" stroke="#d97706" stroke-width="2.5"/>
<path d="M270.0 104.3 L274.2 107.1 L278.4 109.9 L282.6 112.9 L286.8 115.9 L291.0 119.1 L295.2 122.3 L299.4 125.6 L303.6 128.9 L307.8 132.3 L312.0 135.8 L316.2 139.3 L320.4 142.8 L324.6 146.4 L328.8 149.9 L333.0 153.6 L337.2 157.2 L341.4 160.8 L345.6 164.4 L349.8 168.0 L354.0 171.6 L358.2 175.2 L362.4 178.7 L366.6 182.2 L370.8 185.7 L375.0 189.1 L379.2 192.5 L383.4 195.8 L387.6 199.0 L391.8 202.2 L396.0 205.3 L400.2 208.3 L404.4 211.2 L408.6 214.0 L412.8 216.7 L417.0 219.2 L421.2 221.7 L425.4 224.0 L429.6 226.2 L433.8 228.3 L438.0 230.2 L442.2 232.0 L446.4 233.6 L450.6 235.1 L454.8 236.3 L459.0 237.4 L463.2 238.3 L467.4 239.1 L471.6 239.6 L475.8 239.9 L480.0 240.0" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="6 4"/>
<line class="dash" x1="200" y1="79" x2="200" y2="240"/><line class="dash" x1="60" y1="79" x2="200" y2="79"/><circle cx="200" cy="79" r="5" fill="#c2413b"/>
<text class="small2 tb" x="234" y="63" fill="#c2413b">a = 1/3 → C<tspan baseline-shift="sub" font-size="9">p</tspan> = 16/27 ≈ 0,593</text>
<text class="small2" x="234" y="83">V = 2/3·V<tspan baseline-shift="sub" font-size="9">1</tspan> ; V<tspan baseline-shift="sub" font-size="9">2</tspan> = 1/3·V<tspan baseline-shift="sub" font-size="9">1</tspan></text>
<text class="small2 mut" x="320" y="110">tramo discontinuo: a &gt; 0,5</text>
<text class="small2 mut" x="320" y="124">(V<tspan baseline-shift="sub" font-size="9">2</tspan> = V<tspan baseline-shift="sub" font-size="9">1</tspan>(1−2a) sería &lt; 0)</text>
</svg>` });

DIAGRAMS.push({ sec: "eol-principio", h4: "Coeficiente de potencia y velocidad específica", cap: "Máximo aproximado del coeficiente de potencia de cada tipo de rotor y la velocidad específica a la que se alcanza, leídos de la figura de EOL2, diap. 17 (valores aproximados). Los rotores lentos (Savonius, multipala) trabajan a λ ≈ 1 con C<sub>p</sub> bajo; el tripala da el mayor C<sub>p</sub> (≈ 0,49 a λ ≈ 7) y, cuantas menos palas, más rápido gira. Ninguno supera el límite de Betz.", svg: `<svg class="dg" viewBox="0 0 540 300" role="img" aria-label="Máximos del coeficiente de potencia por tipo de rotor">
<line class="grid" x1="60" y1="213" x2="500" y2="213"/><text class="small2 mut" x="54" y="217" text-anchor="end">0,1</text>
<line class="grid" x1="60" y1="186" x2="500" y2="186"/><text class="small2 mut" x="54" y="190" text-anchor="end">0,2</text>
<line class="grid" x1="60" y1="159" x2="500" y2="159"/><text class="small2 mut" x="54" y="163" text-anchor="end">0,3</text>
<line class="grid" x1="60" y1="131" x2="500" y2="131"/><text class="small2 mut" x="54" y="135" text-anchor="end">0,4</text>
<line class="grid" x1="60" y1="104" x2="500" y2="104"/><text class="small2 mut" x="54" y="108" text-anchor="end">0,5</text>
<line class="grid" x1="60" y1="77" x2="500" y2="77"/><text class="small2 mut" x="54" y="81" text-anchor="end">0,6</text>
<text class="small2 mut" x="60" y="256" text-anchor="middle">0</text>
<text class="small2 mut" x="133" y="256" text-anchor="middle">3</text>
<text class="small2 mut" x="207" y="256" text-anchor="middle">6</text>
<text class="small2 mut" x="280" y="256" text-anchor="middle">9</text>
<text class="small2 mut" x="353" y="256" text-anchor="middle">12</text>
<text class="small2 mut" x="427" y="256" text-anchor="middle">15</text>
<text class="small2 mut" x="500" y="256" text-anchor="middle">18</text>
<line class="ax" x1="60" y1="240" x2="500" y2="240"/><line class="ax" x1="60" y1="240" x2="60" y2="40"/>
<text class="small2" x="280" y="276" text-anchor="middle">Velocidad específica λ = ΩR/U</text><text class="small2" x="14" y="32">C<tspan baseline-shift="sub" font-size="9">p,máx</tspan></text>
<line x1="60" y1="79" x2="500" y2="79" stroke="#0d9488" stroke-width="2" stroke-dasharray="6 4"/><text class="small2 tb" x="496" y="73" text-anchor="end" fill="#0d9488">Límite de Betz 0,593</text>
<circle cx="80" cy="199" r="5" fill="#2563eb"/>
<text class="small2" x="88" y="203" text-anchor="start">Savonius ≈ 0,15</text>
<circle cx="84" cy="159" r="5" fill="#2563eb"/>
<text class="small2" x="92" y="151" text-anchor="start">Tipo americano (multipala) ≈ 0,30</text>
<circle cx="119" cy="164" r="5" fill="#2563eb"/>
<text class="small2" x="127" y="178" text-anchor="start">Molino holandés ≈ 0,28</text>
<circle cx="182" cy="131" r="5" fill="#2563eb"/>
<text class="small2" x="182" y="119" text-anchor="middle">Darrieus ≈ 0,40</text>
<circle cx="231" cy="107" r="5" fill="#c2413b"/>
<text class="small2" x="231" y="95" text-anchor="middle">Tripala ≈ 0,49</text>
<circle cx="312" cy="112" r="5" fill="#2563eb"/>
<text class="small2" x="312" y="100" text-anchor="middle">Bipala ≈ 0,47</text>
<circle cx="434" cy="126" r="5" fill="#2563eb"/>
<text class="small2" x="434" y="114" text-anchor="middle">Monopala ≈ 0,42</text>
</svg>` });

DIAGRAMS.push({ sec: "eol-curva", h4: "Curva de potencia", cap: "Curva de potencia del aerogenerador genérico de 1600 kW (D = 100 m, buje a 95 m) que se usa en el trabajo de eólica (Guion del trabajo de eólica, pág. 4, Tabla 2). Las tres velocidades características son las de EOL2, diap. 23: por debajo del arranque no produce, entre arranque y nominal la potencia crece como v³, y por encima de la de corte la máquina se para y desconecta.", svg: `<svg class="dg" viewBox="0 0 540 290" role="img" aria-label="Curva de potencia de un aerogenerador de 1600 kW">
<defs><marker id="eolAr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<line class="grid" x1="60" y1="198" x2="490" y2="198"/><text class="small2 mut" x="54" y="202" text-anchor="end">400</text>
<line class="grid" x1="60" y1="156" x2="490" y2="156"/><text class="small2 mut" x="54" y="160" text-anchor="end">800</text>
<line class="grid" x1="60" y1="113" x2="490" y2="113"/><text class="small2 mut" x="54" y="117" text-anchor="end">1200</text>
<line class="grid" x1="60" y1="71" x2="490" y2="71"/><text class="small2 mut" x="54" y="75" text-anchor="end">1600</text>
<text class="small2 mut" x="60" y="256" text-anchor="middle">0</text>
<text class="small2 mut" x="137" y="256" text-anchor="middle">5</text>
<text class="small2 mut" x="214" y="256" text-anchor="middle">10</text>
<text class="small2 mut" x="290" y="256" text-anchor="middle">15</text>
<text class="small2 mut" x="367" y="256" text-anchor="middle">20</text>
<text class="small2 mut" x="444" y="256" text-anchor="middle">25</text>
<line class="ax" x1="60" y1="240" x2="490" y2="240"/><line class="ax" x1="60" y1="240" x2="60" y2="40"/>
<text class="small2" x="275" y="276" text-anchor="middle">Velocidad a la altura del buje (m/s)</text><text class="small2" x="10" y="32">P (kW)</text>
<path d="M60.0 240.0 L75.4 240.0 L90.7 240.0 L106.1 240.0 L121.4 234.7 L136.8 219.2 L152.1 191.0 L167.5 157.9 L182.9 122.9 L198.2 91.4 L213.6 76.7 L228.9 71.1 L244.3 71.1 L259.6 71.1 L275.0 71.1 L290.4 71.1 L305.7 71.1 L321.1 71.1 L336.4 71.1 L351.8 71.1 L367.1 71.1 L382.5 71.1 L397.9 71.1 L413.2 71.1 L428.6 71.1 L443.9 71.1 L443.9 240.0" class="fl" stroke="#2563eb" stroke-width="2.5" fill-opacity="0.5"/>
<circle cx="75.4" cy="240.0" r="2.5" fill="#1e40af"/>
<circle cx="90.7" cy="240.0" r="2.5" fill="#1e40af"/>
<circle cx="106.1" cy="240.0" r="2.5" fill="#1e40af"/>
<circle cx="121.4" cy="234.7" r="2.5" fill="#1e40af"/>
<circle cx="136.8" cy="219.2" r="2.5" fill="#1e40af"/>
<circle cx="152.1" cy="191.0" r="2.5" fill="#1e40af"/>
<circle cx="167.5" cy="157.9" r="2.5" fill="#1e40af"/>
<circle cx="182.9" cy="122.9" r="2.5" fill="#1e40af"/>
<circle cx="198.2" cy="91.4" r="2.5" fill="#1e40af"/>
<circle cx="213.6" cy="76.7" r="2.5" fill="#1e40af"/>
<circle cx="228.9" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="244.3" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="259.6" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="275.0" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="290.4" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="305.7" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="321.1" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="336.4" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="351.8" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="367.1" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="382.5" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="397.9" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="413.2" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="428.6" cy="71.1" r="2.5" fill="#1e40af"/>
<circle cx="443.9" cy="71.1" r="2.5" fill="#1e40af"/>
<line x1="94" y1="200" x2="114" y2="236" stroke="#475569" marker-end="url(#eolAr)"/><text class="small2 tb" x="90" y="196">Arranque</text><text class="small2" x="90" y="182">(≈ 3-4 m/s)</text>
<text class="small2 tb" x="229" y="53">Nominal 1600 kW (desde 11 m/s)</text>
<line x1="414" y1="150" x2="440" y2="150" stroke="#475569" marker-end="url(#eolAr)"/><text class="small2 tb" x="410" y="146" text-anchor="end">Corte</text><text class="small2" x="410" y="160" text-anchor="end">(&gt; 25 m/s → 0)</text>
<text class="small2 mut" x="140" y="145" text-anchor="end">tramo ∝ v³</text>
</svg>` });

DIAGRAMS.push({ sec: "eol-futuro", h4: "Producción en España", cap: "Cuota de las renovables y de la eólica en la electricidad producida en España (EOL2, diap. 50 y 52-55). La eólica fue la <b>primera</b> productora en 2021, 2023, 2024 y 2025 (sin autoconsumo) y la <b>segunda</b> en 2022, detrás del ciclo combinado. Porcentajes tal como aparecen en cada diapositiva (para 2021-2024 los apuntes los expresan como «% del consumo eléctrico satisfecho»).", svg: `<svg class="dg" viewBox="0 0 540 300" role="img" aria-label="Peso de la eólica y de las renovables en la electricidad española">
<line class="grid" x1="60" y1="208" x2="500" y2="208"/><text class="small2 mut" x="54" y="212" text-anchor="end">10 %</text>
<line class="grid" x1="60" y1="177" x2="500" y2="177"/><text class="small2 mut" x="54" y="181" text-anchor="end">20 %</text>
<line class="grid" x1="60" y1="145" x2="500" y2="145"/><text class="small2 mut" x="54" y="149" text-anchor="end">30 %</text>
<line class="grid" x1="60" y1="113" x2="500" y2="113"/><text class="small2 mut" x="54" y="117" text-anchor="end">40 %</text>
<line class="grid" x1="60" y1="82" x2="500" y2="82"/><text class="small2 mut" x="54" y="86" text-anchor="end">50 %</text>
<line class="grid" x1="60" y1="50" x2="500" y2="50"/><text class="small2 mut" x="54" y="54" text-anchor="end">60 %</text>
<line class="ax" x1="60" y1="240" x2="500" y2="240"/>
<rect x="80" y="92" width="30" height="148" fill="#dcfce7" stroke="#0d9488"/>
<rect x="112" y="166" width="30" height="74" fill="#2563eb"/>
<text class="small2" x="95" y="87" text-anchor="middle">46,7</text>
<text class="small2 tb" x="127" y="161" text-anchor="middle">23,3</text>
<text class="small2" x="111" y="256" text-anchor="middle">2021</text>
<rect x="164" y="106" width="30" height="134" fill="#dcfce7" stroke="#0d9488"/>
<rect x="196" y="170" width="30" height="70" fill="#2563eb"/>
<text class="small2" x="179" y="101" text-anchor="middle">42,2</text>
<text class="small2 tb" x="211" y="165" text-anchor="middle">22,1</text>
<text class="small2" x="195" y="256" text-anchor="middle">2022</text>
<rect x="248" y="81" width="30" height="159" fill="#dcfce7" stroke="#0d9488"/>
<rect x="280" y="166" width="30" height="74" fill="#2563eb"/>
<text class="small2" x="263" y="76" text-anchor="middle">50,3</text>
<text class="small2 tb" x="295" y="161" text-anchor="middle">23,5</text>
<text class="small2" x="279" y="256" text-anchor="middle">2023</text>
<rect x="332" y="60" width="30" height="180" fill="#dcfce7" stroke="#0d9488"/>
<rect x="364" y="167" width="30" height="73" fill="#2563eb"/>
<text class="small2" x="347" y="55" text-anchor="middle">56,8</text>
<text class="small2 tb" x="379" y="162" text-anchor="middle">23,2</text>
<text class="small2" x="363" y="256" text-anchor="middle">2024</text>
<rect x="416" y="64" width="30" height="176" fill="#dcfce7" stroke="#0d9488"/>
<rect x="448" y="172" width="30" height="68" fill="#2563eb"/>
<text class="small2" x="431" y="59" text-anchor="middle">55,5</text>
<text class="small2 tb" x="463" y="167" text-anchor="middle">21,6</text>
<text class="small2" x="447" y="256" text-anchor="middle">2025</text>
<rect x="80" y="270" width="12" height="12" fill="#dcfce7" stroke="#0d9488"/><text class="small2" x="97" y="280">Renovables (% de la electricidad)</text>
<rect x="320" y="270" width="12" height="12" fill="#2563eb"/><text class="small2" x="337" y="280">Eólica (%)</text>
</svg>` });

DIAGRAMS.push({ sec: "eol-offshore", h4: "Cimentación y tecnología flotante", cap: "Soluciones para fijar el aerogenerador en el mar (EOL2, diap. 39-41; figuras MITECO-IDAE). La cimentación fija es posible por debajo de unos 50 m de profundidad; en aguas más profundas, como las que rodean la península, hay que recurrir a plataformas flotantes, todavía en desarrollo.", svg: `<svg class="dg" viewBox="0 0 540 270" role="img" aria-label="Clasificación de soluciones de cimentación offshore">
<defs><marker id="eolAr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#475569"/></marker></defs>
<rect class="box" x="170" y="12" width="200" height="40" rx="8"/><text class="tb" x="270" y="30" text-anchor="middle">Aerogenerador offshore</text><text class="small2 mut" x="270" y="45" text-anchor="middle">¿profundidad del agua?</text>
<line x1="230" y1="52" x2="140" y2="88" stroke="#475569" marker-end="url(#eolAr2)"/><line x1="310" y1="52" x2="400" y2="88" stroke="#475569" marker-end="url(#eolAr2)"/>
<rect x="30" y="90" width="220" height="44" rx="8" fill="#eef3fb" stroke="#2563eb"/><text class="tb" x="140" y="108" text-anchor="middle">Cimentación fija</text><text class="small2" x="140" y="124" text-anchor="middle">aguas de menos de 50 m</text>
<rect x="290" y="90" width="220" height="44" rx="8" fill="#fef3c7" stroke="#d97706"/><text class="tb" x="400" y="108" text-anchor="middle">Tecnología flotante</text><text class="small2" x="400" y="124" text-anchor="middle">aguas profundas (en desarrollo)</text>
<rect x="40" y="148" width="200" height="28" rx="6" fill="#f1f5fd" stroke="#94a3b8"/><text class="small2" x="140" y="166" text-anchor="middle">(a) Monopilote</text>
<rect x="40" y="184" width="200" height="28" rx="6" fill="#f1f5fd" stroke="#94a3b8"/><text class="small2" x="140" y="202" text-anchor="middle">(b) Gravedad</text>
<rect x="40" y="220" width="200" height="28" rx="6" fill="#f1f5fd" stroke="#94a3b8"/><text class="small2" x="140" y="238" text-anchor="middle">(c) Celosía (jacket)</text>
<rect x="300" y="148" width="200" height="28" rx="6" fill="#fffbeb" stroke="#d6b36a"/><text class="small2" x="400" y="166" text-anchor="middle">(a) Patas tensionadas (TLP)</text>
<rect x="300" y="184" width="200" height="28" rx="6" fill="#fffbeb" stroke="#d6b36a"/><text class="small2" x="400" y="202" text-anchor="middle">(b) Plataforma semisumergible</text>
<rect x="300" y="220" width="200" height="28" rx="6" fill="#fffbeb" stroke="#d6b36a"/><text class="small2" x="400" y="238" text-anchor="middle">(c) Monopilote flotante o spar</text>
<text class="small2 mut" x="270" y="262" text-anchor="middle">España: más de 60 m cerca de la costa → la alternativa es flotante</text>
</svg>` });
