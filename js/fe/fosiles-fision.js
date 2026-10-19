/* Temas FOS y FIS · Petróleo, gas y carbón · Energía nuclear de fisión
   fuentes: CombustiblesFosiles_FE_MII.pdf, fision_nuclear_FE_MII.pdf */

/* =====================================================================
   TEMA FOS · Petróleo, gas y carbón
   ===================================================================== */
THEORY.FOS = {
  summary: [
    "En 2025 el consumo mundial de energía primaria ronda los <b>180.000 TWh</b> y los fósiles dominan: <b>petróleo ≈ 31-32 %</b>, <b>carbón ≈ 26 %</b> y <b>gas ≈ 23-24 %</b>. En electricidad manda el <b>carbón (≈ 33 %)</b>, seguido del gas (≈ 22 %).",
    "El crudo se clasifica por <b>localización</b> (Brent, Oman…), <b>azufre</b> (<b>dulce &lt; 0,5 %</b>, <b>agrio &gt; 0,5 %</b>) y <b>gravedad API</b> = 141,5/GE(60 ºF) − 131,5: con <b>API &gt; 10º</b> el crudo es <b>menos denso que el agua</b>.",
    "Relación reservas/producción (R/P, 2020): <b>carbón 139 años</b>, <b>petróleo 56</b> y <b>gas 49</b>. La R/P cambia con nuevos descubrimientos y con la producción anual.",
    "Reservas probadas de petróleo (31-12-2024): <b>1.852,9·10<sup>9</sup> barriles</b> (R/P 49,2). Lidera <b>Venezuela (18,6 %)</b>, seguida de Arabia Saudí (15,3 %) e Irán (11,2 %); Oriente Medio tiene el <b>47,8 %</b> y la OPEP el <b>70 %</b>.",
    "Producción de petróleo 2025: <b>100.590 kb/d</b>. <b>EE. UU. (20,9 %)</b> es el primer productor, por delante de Arabia Saudí (11,3 %) y Rusia (10,7 %). La OPEP aporta el <b>34,2 %</b>.",
    "El refino «ingenuo» es una <b>destilación</b> por puntos de ebullición (cadenas más cortas, ebullición más baja) y el <b>cracking</b> modifica las proporciones. Productos: ligeros (GLP, gasolina, nafta), medios (queroseno, jet fuel, diésel), pesados (fuelóleo) y residuo (parafinas, asfaltos).",
    "España: capacidad de refino autorizada <b>83,9 Mt/año</b> (efectiva 79,2); importó <b>61.423 kt de crudo</b> en 2025, con <b>EE. UU.</b> como primer proveedor y sin crudo ruso desde 2024. Las refinerías producen sobre todo <b>gasóleos</b> (25.303 kt de 61.553).",
    "Gas natural típico: <b>metano 93,9 %</b> (87-97 %), etano 4,2 %; PCS ≈ <b>38,7 MJ/m³</b> e índice de Wobbe ≈ <b>50,4 MJ/m³</b>. Reservas 2024: <b>205,6·10<sup>3</sup> bcm</b>, con <b>Rusia (23 %)</b>, Irán (16,5 %) y Catar (11,6 %).",
    "Producción de gas 2025: <b>4.196,5 bcm</b>; <b>EE. UU. 25,6 %</b> y Rusia 14,5 %. Hidrógeno 2025: <b>1.082,3 kt</b>, <b>azul 70,7 %</b> (reformado de gas + captura de CO<sub>2</sub>) y <b>verde 29,3 %</b> (electrólisis con renovables).",
    "Comercio de gas 2025: <b>GNL 578,5 bcm</b> frente a <b>gasoducto 567,6 bcm</b>. Mayor exportador de GNL: <b>EE. UU. (25,4 %)</b>, luego Catar y Australia; mayor importador: <b>Europa (30,1 %)</b>. Por gasoducto lidera <b>Noruega (115 bcm)</b>.",
    "España (gas): 7 plantas de regasificación (Barcelona tiene la mayor capacidad, 544 GWh/día), primer proveedor <b>Argelia</b> (128.502 GWh en 2025), dos tercios importados como <b>GNL</b>, y <b>24.692 MW</b> de ciclos combinados.",
    "Metano: <b>16 %</b> de los GEI antropogénicos; <b>GWP-20 = 81,2</b> y <b>GWP-100 = 27,9</b>. Los fósiles emiten <b>121 Mt</b> de CH<sub>4</sub> (gas, petróleo e industria 23 %; minería del carbón 12 %).",
    "Carbón: <b>brown coal</b> (lignito, PCS &lt; 24 GJ/t, C &lt; 70 %, humedad ~40 %), <b>sub-bituminoso</b> (20-24 GJ/t), <b>hard coal</b> (&gt; 24 GJ/t: hulla 60-85 % C y antracita &gt; 85 % C). Reservas: bajo rango 47 %, hard coal 53 %.",
    "Carbón 2025: producción <b>9.052,7 Mt</b>, <b>China 51,5 %</b>; consumo 166 EJ (China 55,6 %); mayores exportadores <b>Indonesia</b> y Australia. España ya no extrae carbón y le quedan <b>1.258 MW</b> peninsulares (Los Barrios, Soto de Ribera 3, Aboño 1).",
    "Emisiones de CO<sub>2</sub> de la energía 2025: <b>35.806 Mt</b>. Captura: <b>post-combustión</b>, <b>pre-combustión</b> y <b>oxi-combustión</b>; capacidad CCUS 2025 = <b>258,9 Mt/año</b>. Precio del EU ETS 2025: <b>74,91 €/t</b> (máximo de 85,27 €/t en 2023)."
  ],
  sections: [
    { id: "fos-intro", title: "1. Los combustibles fósiles en el mix mundial", slides: ["FOS", 1, 6], html: `
<p>El tema recorre petróleo, gas y carbón con el mismo guion: reservas, producción y comercio, algunos datos de España y, al final, emisiones de CO<sub>2</sub> y mitigación (diap. 2). Casi todos los datos proceden del <i>Statistical Review of World Energy</i> (Energy Institute) y del anuario <i>Energía</i> de Foro Nuclear.</p>
<h4>Energía primaria mundial</h4>
<p>El uso mundial de energía primaria crece de forma casi continua desde 1800 y en 2025 ronda los <b>180.000 TWh</b> (diap. 4). La biomasa tradicional dominó hasta finales del siglo XIX; después el carbón y, desde mediados del siglo XX, el petróleo y el gas explican la mayor parte del crecimiento.</p>
<table class="tbl"><thead><tr><th>Fuente</th><th>Cuota aproximada de la energía primaria (2025)</th></tr></thead><tbody>
<tr><td>Petróleo</td><td>≈ 31-32 % (máximo ≈ 44-45 % en los años setenta)</td></tr>
<tr><td>Carbón</td><td>≈ 26 % (pico ≈ 29 % hacia 2011-2013)</td></tr>
<tr><td>Gas</td><td>≈ 23-24 % (crece casi sin interrupción desde 1970, ≈ 15 %)</td></tr>
<tr><td>Biomasa tradicional</td><td>≈ 6-7 %</td></tr>
<tr><td>Nuclear</td><td>≈ 5 %</td></tr>
<tr><td>Hidráulica</td><td>≈ 2-3 %</td></tr>
</tbody></table>
<p>Valores leídos del gráfico de la diap. 5 (Our World in Data); son aproximados.</p>
<h4>Electricidad mundial por fuente</h4>
<p>En la generación eléctrica (diap. 6) el <b>carbón</b> sigue siendo la primera fuente (≈ 33 % en 2025, tras rondar el 40 % entre 2007 y 2014), seguido del <b>gas</b> (≈ 22 %) y la <b>hidráulica</b> (≈ 14 %). La nuclear ha caído desde ≈ 17 % a mediados de los noventa hasta ≈ 9 %, y en 2025 la <b>solar</b> y la <b>eólica</b> la igualan (≈ 8,5-9 %). El petróleo, que superaba el 11 % en los ochenta, apenas llega al ≈ 3 %.</p>
` },
    { id: "fos-crudo", title: "2. Petróleo: composición, formación y reservas", slides: ["FOS", 7, 15], html: `
<h4>Composición y clasificación del crudo</h4>
<p>En el crudo hay <b>hidrocarburos</b> (alcanos, cicloalcanos, aromáticos…), <b>compuestos orgánicos con N, O y S</b> y <b>trazas de metales</b> (hierro, vanadio…) (diap. 8). Se clasifica por:</p>
<ul><li><b>Localización</b>: Brent, Oman, WTI, Arab Light, Maya…</li>
<li><b>Contenido de azufre</b>: <b>dulce</b> (&lt; 0,5 %) y <b>agrio</b> (&gt; 0,5 %).</li>
<li><b>Gravedad API</b>: liviano, mediano o pesado.</li></ul>
<div class="formula">$$\\text{gravedad API}=\\frac{141{,}5}{GE(60\\,^{o}F)}-131{,}5\\qquad GE(T)=\\frac{\\rho_{crudo}}{\\rho_{agua}(T)}$$</div>
<p>Con GE = 1 se obtiene API = 10º: <b>API &gt; 10º → menos denso que el agua</b>; <b>API &lt; 10º → más denso</b>. Cuanto mayor es el grado API, más ligero es el crudo. En el gráfico de la diap. 8, Brent y WTI son ligeros (≈ 38-40º) y dulces; Maya es pesado (≈ 22º) y agrio (≈ 3,5 % S).</p>
<h4>Formación y geología</h4>
<p>Plantas y animales marinos diminutos murieron hace <b>300-400 millones de años</b> y quedaron cubiertos de limo y arena; enterrados cada vez más profundo, el <b>calor y la presión</b> los transformaron en petróleo y gas (diap. 9). Hoy se perfora a través de capas de arena, limo y roca. El esquema geológico (IEA/IGU) muestra el gas convencional bajo una <b>roca sello</b>, el <i>tight gas</i>, el <b>metano de capas de carbón</b> (<i>coalbed methane</i>, poco profundo) y las <b>pizarras ricas en gas</b> (<i>gas-rich shale</i>, hacia 4.000 m).</p>
<h4>Relación reservas/producción</h4>
<p>Las <b>reservas probadas</b> son las que se conocen con certeza razonable y pueden recuperarse de yacimientos conocidos en las condiciones económicas y operativas existentes (diap. 12). La <b>R/P</b> mide los años de producción que quedan con las reservas conocidas y la producción actual; cambia si se descubren reservas o varía la producción. En 2020: <b>carbón 139 años, petróleo 56, gas 49</b> (diap. 11).</p>
<p>Las reservas mundiales de crudo han pasado de ≈ 100.000 millones de m³ en 1980 a ≈ 265.000 millones de m³ en 2020, con saltos bruscos (diap. 12). Por países (2021, diap. 13): Venezuela 48.310 millones de m³, Arabia Saudí 41.120, Irán 33.170, Canadá 27.080 e Irak 23.060.</p>
<h4>Reservas probadas por países (31-12-2024)</h4>
<table class="tbl"><thead><tr><th>País / zona</th><th>10<sup>9</sup> barriles</th><th>Cuota</th><th>R/P (años)</th></tr></thead><tbody>
<tr><td>Venezuela</td><td>345,4</td><td>18,6 %</td><td>986,4</td></tr>
<tr><td>Arabia Saudí</td><td>283,9</td><td>15,3 %</td><td>71,0</td></tr>
<tr><td>Irán</td><td>207,2</td><td>11,2 %</td><td>121,6</td></tr>
<tr><td>Canadá</td><td>189,5</td><td>10,2 %</td><td>85,0</td></tr>
<tr><td>Irak</td><td>144,0</td><td>7,8 %</td><td>87,6</td></tr>
<tr><td>Rusia</td><td>107,8</td><td>5,8 %</td><td>27,5</td></tr>
<tr><td>EE. UU.</td><td>66,0</td><td>3,6 %</td><td>8,9</td></tr>
<tr><td>Oriente Medio</td><td>884,9</td><td>47,8 %</td><td>80,0</td></tr>
<tr><td>OPEP / No OPEP</td><td>1.296,6 / 556,3</td><td>70 % / 30 %</td><td>108,1 / 21,6</td></tr>
<tr><td><b>Mundo</b></td><td><b>1.852,9</b></td><td>100 %</td><td><b>49,2</b></td></tr>
</tbody></table>
<p>Las reservas de Canadá incluyen <b>arenas bituminosas</b> y las de Venezuela <b>petróleo extrapesado</b>. Equivalencia del cuadro: <b>1 barril = 0,1364 t</b> (diap. 14).</p>
<h4>Fracturación hidráulica (fracking)</h4>
<p>Inyección a <b>alta presión</b> de un fluido (<b>agua, arena y agentes espesantes</b>) para agrietar formaciones rocosas y facilitar el flujo de crudo y gas natural (diap. 15). Es controvertida: a favor, la <b>independencia energética</b> y <b>sustituir carbón por petróleo y gas</b>; en contra, la <b>contaminación de aguas</b> y la posibilidad de provocar <b>pequeños terremotos</b>. Etapas del esquema: captación de agua, mezcla química, inyección en el pozo, aguas de retorno y tratamiento o eliminación de las aguas residuales.</p>
` },
    { id: "fos-mercado", title: "3. Crudo: producción, comercio y precios", slides: ["FOS", 16, 20], html: `
<h4>Producción mundial de petróleo (2025)</h4>
<p>La producción incluye crudo, petróleo de pizarra (<i>shale oil</i>), arenas bituminosas, condensados y líquidos del gas natural (NGL); excluye biocombustibles y derivados sintéticos de carbón y gas (diap. 18). Total mundial: <b>100.590 miles de barriles/día</b> (+3,5 % en 2025).</p>
<table class="tbl"><thead><tr><th>País / zona</th><th>kb/d 2025</th><th>Cuota</th></tr></thead><tbody>
<tr><td>EE. UU.</td><td>21.065</td><td>20,9 %</td></tr>
<tr><td>Arabia Saudí</td><td>11.408</td><td>11,3 %</td></tr>
<tr><td>Rusia</td><td>10.737</td><td>10,7 %</td></tr>
<tr><td>Canadá</td><td>6.164</td><td>6,1 %</td></tr>
<tr><td>Irán</td><td>5.184</td><td>5,2 %</td></tr>
<tr><td>Irak</td><td>4.396</td><td>4,4 %</td></tr>
<tr><td>China</td><td>4.340</td><td>4,3 %</td></tr>
<tr><td>Oriente Medio / Norteamérica</td><td>31.116 / 29.009</td><td>30,9 % / 28,8 %</td></tr>
<tr><td>OPEP / No OPEP</td><td>34.379 / 66.210</td><td>34,2 % / 65,8 %</td></tr>
<tr><td>Unión Europea</td><td>324</td><td>0,3 %</td></tr>
</tbody></table>
<p>Destaca <b>Guyana</b>, que pasa de 0 a 716 kb/d entre 2019 y 2025, y la caída de Venezuela (2.864 kb/d en 2015 frente a 1.104 en 2025) (diap. 17).</p>
<h4>Precios del crudo 1861-2025</h4>
<p>El gráfico (diap. 19) da el precio en dólares corrientes y en <b>dólares de 2025</b> (deflactado con el IPC de EE. UU.). Referencias: media de EE. UU. (1861-1944), Arabian Light (1945-1983) y <b>Brent dated</b> (1984-2025). Picos en dólares de 2025: el <i>boom</i> de Pensilvania (década de 1860, ≈ 165 $), la revolución iraní (≈ 140 $ hacia 1980), 2008 (≈ 140 $) y 2011-2013 (≈ 150 $); tras la guerra de Ucrania (2022) superó los 100 $ y en 2025 bajó a ≈ 65-70 $. Acontecimientos señalados: guerra del Yom Kipur, revolución iraní, invasión de Kuwait, crisis asiática, primavera árabe, COVID-19.</p>
<h4>Comercio de crudo</h4>
<p>El diagrama de flujos de 2025 (diap. 20) muestra a <b>Oriente Medio</b> como gran exportador y a <b>China</b> como mayor importador, con Europa en segundo lugar. Flujos destacados: Canadá → EE. UU. (194,7 Mt), Rusia → China (100,7 Mt) y Rusia → India (84,9 Mt).</p>
` },
    { id: "fos-refino", title: "4. Refino y productos derivados", slides: ["FOS", 21, 30], html: `
<h4>Destilación: la visión «ingenua» del refino</h4>
<p>El crudo se calienta en un horno y se <b>destila</b> en productos con distinto punto de ebullición, es decir, con distinta longitud de cadena: las cadenas <b>más cortas hierven a temperatura más baja</b> (diap. 22). Otros procesos químicos (<b>cracking</b>) permiten modificar las proporciones.</p>
<table class="tbl cmp"><thead><tr><th>Fracción</th><th>Productos</th><th>Zona de la columna (diap. 22)</th></tr></thead><tbody>
<tr><td>Destilados ligeros</td><td>GLP, gasolina, nafta</td><td>Cabeza: butano y propano a ≈ 20 ºC; gasolina ≈ 150 ºC</td></tr>
<tr><td>Destilados medios</td><td>Queroseno, jet fuel, diésel</td><td>Queroseno ≈ 200 ºC; diésel ≈ 300 ºC</td></tr>
<tr><td>Destilados pesados</td><td>Fuelóleo pesado</td><td>≈ 370 ºC</td></tr>
<tr><td>Residuo</td><td>Parafinas, asfaltos, aceites lubricantes</td><td>Fondo, ≈ 400 ºC</td></tr>
</tbody></table>
<h4>Esquema de una refinería real</h4>
<p>La diap. 23 muestra que una refinería es mucho más que la columna: destilación <b>atmosférica</b> y <b>a vacío</b>, <b>hidrotratamiento</b> (con H<sub>2</sub>), isomerización, <b>reformado catalítico</b>, <b>craqueo catalítico en lecho fluido (FCC)</b>, <b>hidrocraqueo</b>, alquilación, <b>coquización retardada</b> (coque de petróleo), soplado de asfalto, tratamientos Merox y con aminas y una planta <b>Claus</b> que recupera el <b>azufre</b> del H<sub>2</sub>S. El hidrógeno se sintetiza a partir de <b>gas natural y vapor</b>. Las corrientes de gasolina se mezclan en el <i>gasoline blending pool</i>.</p>
<h4>Capacidad de refino (crudo procesado, 2025)</h4>
<table class="tbl"><thead><tr><th>País / zona</th><th>kb/d 2025</th><th>Cuota</th></tr></thead><tbody>
<tr><td>EE. UU.</td><td>16.371</td><td>19,7 %</td></tr>
<tr><td>China</td><td>14.747</td><td>17,8 %</td></tr>
<tr><td>India</td><td>5.468</td><td>6,6 %</td></tr>
<tr><td>Rusia</td><td>4.900</td><td>5,9 %</td></tr>
<tr><td>Corea del Sur</td><td>2.812</td><td>3,4 %</td></tr>
<tr><td>España</td><td>1.280</td><td>1,5 %</td></tr>
<tr><td>Asia-Pacífico / Unión Europea</td><td>31.017 / 9.857</td><td>37,3 % / 11,9 %</td></tr>
<tr><td><b>Mundo</b></td><td><b>83.081</b></td><td>100 %</td></tr>
</tbody></table>
<p>(diap. 24-25). El mundo refina ≈ 83 Mb/d frente a una producción de ≈ 100,6 Mb/d (en la producción se incluyen NGL y condensados).</p>
<h4>Comercio de crudo y productos (2025)</h4>
<p>Comercio mundial 2025 (diap. 28): <b>2.209,0 Mt de crudo</b> y <b>1.207,4 Mt de productos</b>. Mayores importadores de crudo: <b>China (581,2 Mt)</b>, Europa (442,5), otros de Asia-Pacífico (313,8), EE. UU. (307,2) e India (262,2). Mayor exportador de crudo: <b>Arabia Saudí (326,2 Mt)</b>, seguida de Rusia (236,5) y Canadá (222,3). En productos refinados, el mayor exportador es <b>EE. UU. (273,6 Mt)</b>; Oriente Medio y EE. UU. encabezan los flujos (diap. 26-27). Europa importa 165,8 Mt de productos (diap. 28-30).</p>
` },
    { id: "fos-petesp", title: "5. Petróleo en España", slides: ["FOS", 31, 35], html: `
<h4>Infraestructura logística</h4>
<p>El mapa de CLH (diap. 32) recoge <b>39 instalaciones de almacenamiento</b>, <b>más de 4.000 km de oleoductos</b>, <b>36 instalaciones de aviación</b>, <b>8 refinerías</b> e instalaciones portuarias. La red de oleoductos une las refinerías (A Coruña, Bilbao, Tarragona, Castellón, Cartagena, Puertollano, Huelva y San Roque) con los centros de consumo.</p>
<h4>Procedencia del crudo importado</h4>
<table class="tbl"><thead><tr><th>kt</th><th>2000</th><th>2020</th><th>2024</th><th>2025</th></tr></thead><tbody>
<tr><td>EE. UU.</td><td>0</td><td>3.095</td><td>10.254</td><td><b>9.334</b></td></tr>
<tr><td>Brasil</td><td>30</td><td>3.070</td><td>9.133</td><td>8.357</td></tr>
<tr><td>México</td><td>7.622</td><td>8.443</td><td>8.456</td><td>7.569</td></tr>
<tr><td>Nigeria</td><td>9.165</td><td>10.840</td><td>7.390</td><td>6.236</td></tr>
<tr><td>Libia</td><td>6.901</td><td>1.966</td><td>3.873</td><td>4.440</td></tr>
<tr><td>Arabia Saudí</td><td>6.628</td><td>5.542</td><td>3.514</td><td>3.606</td></tr>
<tr><td>Rusia</td><td>5.141</td><td>979</td><td>0</td><td>0</td></tr>
<tr><td>Total América / África / Oriente Medio</td><td>9.214 / 22.804 / 17.157</td><td>17.397 / 17.888 / 9.049</td><td>34.458 / 19.673 / 5.429</td><td>31.663 / 18.429 / 6.573</td></tr>
<tr><td><b>Total crudo</b></td><td>57.457</td><td>54.852</td><td>64.588</td><td><b>61.423</b></td></tr>
</tbody></table>
<p>En 2025 <b>América aporta más de la mitad</b> del crudo; en 2000 el primer proveedor era Nigeria y África era la primera zona. El crudo ruso desaparece desde 2024 y el iraní desde 2020 (diap. 33). Saldo importador total 2025 (crudo + productos): 62.188 kt.</p>
<h4>Refinerías españolas</h4>
<table class="tbl"><thead><tr><th>Empresa</th><th>Refinerías (capacidad autorizada, Mt/año)</th></tr></thead><tbody>
<tr><td>Repsol</td><td>Tarragona 13; Cartagena 11; Puertollano 7,5; A Coruña 7</td></tr>
<tr><td>Moeve</td><td>San Roque 12; La Rábida 9,5; Santa Cruz de Tenerife 4,5 (sin crudo destilado en 2024)</td></tr>
<tr><td>Petronor</td><td>Somorrostro-Muskiz 12</td></tr>
<tr><td>BP</td><td>Castellón 6</td></tr>
<tr><td>ASESA</td><td>Tarragona 1,4 (asfaltos)</td></tr>
<tr><td><b>Total</b></td><td><b>83,9 Mt/año autorizada</b>; 79,2 efectiva; <b>74,43 Mt destiladas en 2024</b></td></tr>
</tbody></table>
<p>(diap. 34). La mayor capacidad autorizada individual es la de Repsol Tarragona (13 Mt/año), aunque su capacidad efectiva es de 9 Mt/año; San Roque tiene la mayor capacidad efectiva (12,2 Mt/año).</p>
<h4>Producción de las refinerías</h4>
<p>En 2025 las refinerías españolas produjeron <b>61.553 kt</b> (−2,92 %): <b>gasóleos 25.303</b>, querosenos 9.864, gasolinas 9.634, fuelóleos 3.821 (−17,96 %) y GLP 1.256 kt. En <b>1970</b> el producto principal era el <b>fuelóleo</b> (14.938 de 32.004 kt); hoy lo es el gasóleo (diap. 35, fuente CORES).</p>
` },
    { id: "fos-gas", title: "6. Gas natural e hidrógeno: composición, reservas y producción", slides: ["FOS", 36, 49], html: `
<h4>Composición del gas natural</h4>
<table class="tbl"><thead><tr><th>Componente</th><th>Análisis típico (% molar)</th><th>Intervalo</th></tr></thead><tbody>
<tr><td>Metano</td><td>93,9</td><td>87,0-97,0</td></tr>
<tr><td>Etano</td><td>4,2</td><td>1,5-9,0</td></tr>
<tr><td>Propano</td><td>0,3</td><td>0,1-1,5</td></tr>
<tr><td>Nitrógeno</td><td>1,0</td><td>0,2-5,5</td></tr>
<tr><td>Dióxido de carbono</td><td>0,5</td><td>0,05-1,0</td></tr>
<tr><td>Densidad relativa</td><td>0,59</td><td>0,57-0,62</td></tr>
<tr><td>PCS (MJ/m³, base seca)</td><td>38,7</td><td>36,0-40,2</td></tr>
<tr><td>Índice de Wobbe (MJ/m³)</td><td>50,4</td><td>47,5-51,5</td></tr>
</tbody></table>
<p>El <b>PCS</b> (<i>gross heating value</i>) es el calor total de la combustión completa a presión constante de una unidad de volumen de gas, <b>incluido el calor de condensación del vapor de agua</b> de los productos (diap. 37). Del gas bruto se <b>eliminan</b> agua, CO<sub>2</sub>, H<sub>2</sub>S y mercurio. El esquema agrupa las fracciones: <b>GLP</b> = propano + butano; <b>condensado</b> = pentanos y superiores; <b>NGL</b> (líquidos del gas natural) = etano, propano, butano y pentanos; el <b>GNL</b> y el gas de venta son esencialmente metano (con algo de etano, N<sub>2</sub> y CO<sub>2</sub>).</p>
<h4>Reservas de gas</h4>
<p>R/P del gas en 2020: <b>49 años</b> (diap. 40). Las reservas mundiales pasan de ≈ 73 billones de m³ en 1980 a ≈ 205 billones en 2020-2021, con una caída brusca en 1992 y un salto en 1997 (diap. 41-42), que coinciden con el cambio de la serie «antigua URSS» a la serie «Rusia» en el gráfico.</p>
<table class="tbl"><thead><tr><th>País / zona (31-12-2024)</th><th>bcm × 1.000</th><th>Cuota</th><th>R/P</th></tr></thead><tbody>
<tr><td>Rusia</td><td>47,15</td><td>23,0 %</td><td>66,9</td></tr>
<tr><td>Irán</td><td>33,99</td><td>16,5 %</td><td>119,2</td></tr>
<tr><td>Catar</td><td>23,83</td><td>11,6 %</td><td>129,1</td></tr>
<tr><td>EE. UU.</td><td>16,67</td><td>8,1 %</td><td>15,3</td></tr>
<tr><td>Turkmenistán</td><td>13,95</td><td>6,8 %</td><td>148,2</td></tr>
<tr><td>Arabia Saudí</td><td>9,52</td><td>4,6 %</td><td>68,6</td></tr>
<tr><td>Oriente Medio / CEI</td><td>83,05 / 65,97</td><td>40,4 % / 32,1 %</td><td>104,2 / 70,0</td></tr>
<tr><td>UE-27</td><td>0,42</td><td>0,2 %</td><td>9,8</td></tr>
<tr><td><b>Mundo</b></td><td><b>205,60</b></td><td>100 %</td><td><b>46,0</b></td></tr>
</tbody></table>
<p>(diap. 44). Irak tiene la R/P más alta del cuadro (328,4 años) y Venezuela 243,1, aunque con reservas modestas.</p>
<h4>Producción de gas natural (2025)</h4>
<p>Total: <b>4.196,5 bcm</b> (+1,6 %). <b>EE. UU. 1.073,7 bcm (25,6 %)</b>, Rusia 609,4 (14,5 %), Irán 264,8 (6,3 %), China 264,1 (6,3 %), Canadá 206,2 (4,9 %), Catar 183,5 (4,4 %), Australia 148,6 y Noruega 120,6 (2,9 %). Oriente Medio aporta el 18,1 % y Norteamérica el 31,3 %. Países Bajos se hunde (−16,3 %/año entre 2015 y 2025). Los datos se normalizan a un PCS de <b>40 MJ/m³</b> (diap. 46).</p>
<h4>Hidrógeno verde y azul</h4>
<p>Producción de hidrógeno 2025 (diap. 47): <b>1.082,3 kt/año</b> (+22,9 %), de los que <b>765,2 kt son azules (70,7 %)</b> y <b>317,1 kt verdes (29,3 %, +174 %)</b>. Por zonas: Norteamérica 482,0 kt (44,5 %), Asia-Pacífico 241,1 (22,3 %, casi todo verde), Oriente Medio 240,1 (22,2 %, azul) y Europa 105,2 (9,7 %).</p>
<table class="tbl cmp"><thead><tr><th>Tipo</th><th>Proceso (diap. 48)</th></tr></thead><tbody>
<tr><td>Hidrógeno verde</td><td>Electricidad renovable (solar, eólica) → <b>electrolizador</b> (agua → H<sub>2</sub> + O<sub>2</sub>, que se libera) → compresor → tanques</td></tr>
<tr><td>Hidrógeno azul</td><td>Gas natural (CH<sub>4</sub>) → <b>reformado con vapor</b> → H<sub>2</sub>; el CO<sub>2</sub> se <b>captura, almacena y usa</b></td></tr>
</tbody></table>
<h4>Precios del gas</h4>
<p>En 2025 (diap. 49, $/MMBtu): <b>Henry Hub (EE. UU.) 3,53</b>, TTF neerlandés 11,89, NBP británico 11,65, GNL Japón 11,12 y JKM 12,16. En <b>2022</b> se dispararon: TTF 37,09 y JKM 33,98, mientras Henry Hub solo llegó a 6,38. El gas estadounidense es estructuralmente el más barato.</p>
` },
    { id: "fos-gnl", title: "7. GNL, gasoductos, gas en España y metano", slides: ["FOS", 50, 67], html: `
<h4>Cadena de transporte del gas</h4>
<p>Esquema de la IGU (diap. 51):</p>
<ul><li><b>Gathering pipelines</b> (recogida): llevan el gas recién extraído desde los pozos hasta las plantas de procesamiento.</li>
<li><b>Procesamiento</b>: separa la corriente de NGL.</li>
<li><b>Feeder pipelines</b>: desde las plantas de procesamiento y almacenamientos hasta la red de transporte.</li>
<li><b>Transmission pipelines</b>: gasoductos de <b>gran diámetro, alta presión y acero</b> hacia grandes industrias y redes de distribución.</li>
<li><b>City gate</b> y <b>redes de distribución</b>: <b>reducen la presión, añaden odorizante</b> para detectar fugas y reparten el gas en baja presión a hogares y comercios.</li>
<li>Alternativa marítima: <b>licuefacción → buque metanero (GNL) → regasificación → almacenamiento</b>.</li></ul>
<h4>Comercio de GNL (2025)</h4>
<p>Comercio total de GNL: <b>578,5 bcm</b> (+6,4 %) (diap. 53-54).</p>
<table class="tbl"><thead><tr><th>Exportador</th><th>bcm</th><th>Cuota</th><th>Importador</th><th>bcm</th><th>Cuota</th></tr></thead><tbody>
<tr><td>EE. UU.</td><td>147,0</td><td>25,4 %</td><td>Europa</td><td>174,0</td><td>30,1 %</td></tr>
<tr><td>Catar</td><td>111,0</td><td>19,2 %</td><td>China</td><td>90,8</td><td>15,7 %</td></tr>
<tr><td>Australia</td><td>104,8</td><td>18,1 %</td><td>Japón</td><td>88,5</td><td>15,3 %</td></tr>
<tr><td>Rusia</td><td>42,6</td><td>7,4 %</td><td>Corea del Sur</td><td>63,1</td><td>10,9 %</td></tr>
<tr><td>Malasia</td><td>36,5</td><td>6,3 %</td><td>España</td><td>22,3</td><td>3,9 %</td></tr>
</tbody></table>
<p>EE. UU. exportaba solo 0,7 bcm de GNL en 2015. Asia-Pacífico importa el 62,3 % del GNL. Europa recibe 99,6 bcm de EE. UU., 20,3 de Rusia y 12,7 de Catar; España, 10,1 bcm de EE. UU. y 3,8 de Rusia (diap. 55).</p>
<h4>Comercio por gasoducto (2025)</h4>
<p>Total: <b>567,6 bcm</b>, algo menos que el GNL (diap. 57-58). Exportadores: <b>Noruega 115,0 bcm</b> (todo a Europa), Rusia 101,7 (China 36,7; Europa no UE 31,7; Bielorrusia 15,9; UE 4,3), EE. UU. 94,2 (México 66,0 y Canadá 28,2), Canadá 87,2 (a EE. UU.), Turkmenistán 37,8 (China 30,3), Argelia 32,3 (UE 28,3) y Azerbaiyán 23,5. Europa importa 211,4 bcm por tubo.</p>
<h4>Infraestructura gasista española</h4>
<p>Mapa de 2018 (diap. 61): plantas de regasificación en <b>Barcelona (6 tanques)</b>, <b>Cartagena (5)</b>, <b>Huelva (5)</b>, Sagunto (4), Bilbao (3), Mugardos (2) y El Musel (2, no operativa en 2018); almacenamientos subterráneos (Serrablo, Yela, Marismas), el almacenamiento <i>off shore</i> Gaviota y el de Castor (no operativo); yacimientos (Viura, Poseidón).</p>
<table class="tbl"><thead><tr><th>Parámetro (31-12-2025, diap. 62)</th><th>Valor</th></tr></thead><tbody>
<tr><td>Interconexión, entrada (GWh/día)</td><td>CI Tarifa 444; CI Almería 338; VIP Pirineos (Larrau + Irún) 225; VIP Ibérico (Tuy + Badajoz) 80</td></tr>
<tr><td>Almacenamiento total / útil (Mm³)</td><td>Gaviota 2.000 / 1.050; Yela 2.000 / 1.050; Serrablo 1.100 / 680; Marismas 588 / 136</td></tr>
<tr><td>Capacidad de regasificación (GWh/día)</td><td>Barcelona 544; Cartagena 377; Huelva 377; Sagunto 279; Bilbao 223; El Musel 223; Mugardos 115</td></tr>
<tr><td>Red</td><td>96.140 km; 1.826 municipios con gas; 7.964 miles de puntos de suministro</td></tr>
</tbody></table>
<p>Un <b>VIP</b> (punto virtual de interconexión) no es un punto físico, sino un agrupador comercial de varios puntos físicos; una <b>CI</b> es una conexión internacional física.</p>
<h4>Importaciones y consumo de gas en España</h4>
<p>Importaciones 2025 (diap. 63): <b>371.727 GWh</b>, de ellas <b>248.118 como GNL</b> y 123.609 por gasoducto. Proveedores: <b>Argelia 128.502 GWh</b>, EE. UU. 111.696, Rusia 42.629, Nigeria 27.157 y Angola 20.659. EE. UU. duplica su aportación respecto a 2024 (56.899). Saldo importador: 329.992 GWh.</p>
<p>Consumo 2025 (diap. 64): <b>331.500 GWh</b> (28,4 bcm; +6,3 %): industrial 167.700 (−5,2 %), <b>centrales eléctricas 99.700 (+33,4 %)</b>, doméstico-comercial 51.600 y cisternas 12.500. El máximo reciente de las centrales fue 2022 (138.000 GWh). Equivalencias del autor: 1 bcm = 10<sup>9</sup> m³; <b>1 GWh = 0,858·10<sup>6</sup> termias = 85,8 tep = 95.300 m³</b> de gas natural. Potencia de ciclos combinados peninsulares a 1-1-2026: <b>24.692 MW</b> (diap. 65).</p>
<h4>Emisiones de metano</h4>
<p>Del presupuesto mundial de GEI antropogénicos, el CO<sub>2</sub> supone el <b>76 %</b>, el <b>metano el 16 %</b>, los óxidos de nitrógeno el 6 % y los gases fluorados el 2 % (diap. 67). Fuentes antropogénicas de metano: fermentación entérica y estiércol 31 %, <b>gas, petróleo e industria 23 %</b>, vertederos y residuos 17 %, <b>minería del carbón 12 %</b>, arroz 9 %, quema de biomasa 5 % y de biocombustibles 3 %. Por grupos: <b>combustibles fósiles 121 Mt</b>, agricultura y residuos 195 Mt, biomasa y biocombustibles 30 Mt. Potencial de calentamiento del metano: <b>GWP-20 = 81,2</b>; <b>GWP-100 = 27,9</b>.</p>
` },
    { id: "fos-carbon", title: "8. Carbón: tipos, reservas, mercado y España", slides: ["FOS", 68, 85], html: `
<h4>Clasificación del carbón</h4>
<table class="tbl cmp"><thead><tr><th>Tipo</th><th>PCS (sin cenizas)</th><th>Carbono</th><th>Materia volátil</th><th>Otros</th></tr></thead><tbody>
<tr><td>Brown coal: lignito</td><td>&lt; 24 GJ/t</td><td>&lt; 70 %</td><td>&gt; 20 %</td><td>Humedad ~ 40 %</td></tr>
<tr><td>Sub-bituminoso</td><td>20-24 GJ/t</td><td>—</td><td>—</td><td>Bajo rango</td></tr>
<tr><td>Hard coal: hulla (bituminoso)</td><td>&gt; 24 GJ/t</td><td>~ 60-85 %</td><td>~ 15-30 %</td><td>Térmico o metalúrgico</td></tr>
<tr><td>Hard coal: antracita</td><td>&gt; 24 GJ/t</td><td>&gt; 85 %</td><td>&lt; 15 %</td><td>Máximo rango</td></tr>
</tbody></table>
<p>(diap. 69). La clasificación ASTM de la misma diapositiva ordena de menor a mayor rango: turba, lignito (B, A), sub-bituminoso (C, B, A), bituminoso (alto, medio y bajo en volátiles) y antracítico (semiantracita, antracita, metaantracita); el carbono fijo sube (69 → 78 → 86 → 92 → 98 %) y la materia volátil baja (31 → 22 → 14 → 8 → 2 %).</p>
<h4>Tipos, reservas y usos</h4>
<p>Al aumentar el rango crece el <b>contenido de carbono y de energía</b> y baja la <b>humedad</b> (diap. 70).</p>
<table class="tbl"><thead><tr><th>Tipo</th><th>% de las reservas mundiales</th><th>Usos</th></tr></thead><tbody>
<tr><td>Lignito</td><td>17 %</td><td>Sobre todo generación eléctrica</td></tr>
<tr><td>Sub-bituminoso</td><td>30 %</td><td>Electricidad, cemento, usos industriales</td></tr>
<tr><td>Bituminoso térmico (<i>steam coal</i>)</td><td rowspan="2">52 % (todo el bituminoso)</td><td>Electricidad, cemento, usos industriales</td></tr>
<tr><td>Bituminoso metalúrgico (<i>coking coal</i>)</td><td>Fabricación de hierro y acero</td></tr>
<tr><td>Antracita</td><td>~ 1 %</td><td>Doméstico e industrial, combustible sin humo</td></tr>
</tbody></table>
<p>Carbones de bajo rango: <b>47 %</b> de las reservas; hard coal: <b>53 %</b>.</p>
<h4>Reservas por países</h4>
<p>R/P del carbón 2020: <b>139 años</b>, la mayor de los tres fósiles (diap. 72). Reservas mundiales a 31-12-2020: <b>1.074.108 Mt</b> (753.639 de hulla y antracita y 320.469 de lignito y carbones pobres) (diap. 74).</p>
<table class="tbl"><thead><tr><th>País (2020)</th><th>Mt</th><th>Cuota</th><th>R/P</th></tr></thead><tbody>
<tr><td>EE. UU.</td><td>248.941</td><td>23,2 %</td><td>514</td></tr>
<tr><td>Rusia</td><td>162.166</td><td>15,1 %</td><td>407</td></tr>
<tr><td>Australia</td><td>150.227</td><td>14,0 %</td><td>315</td></tr>
<tr><td>China</td><td>143.197</td><td>13,3 %</td><td>37</td></tr>
<tr><td>India</td><td>111.052</td><td>10,3 %</td><td>147</td></tr>
<tr><td>Alemania (todo lignito)</td><td>35.900</td><td>3,3 %</td><td>334</td></tr>
<tr><td>España</td><td>1.187</td><td>0,1 %</td><td>282</td></tr>
<tr><td>Asia-Pacífico</td><td>459.750</td><td>42,8 %</td><td>78</td></tr>
</tbody></table>
<p>El gráfico EIA (diap. 73) da para 2019: EE. UU. 228.700, Rusia 162.200, Australia 149.100, China 141.600 e India 105.900 millones de t. Las reservas mundiales crecen de ≈ 0,9 a ≈ 1,05 billones de t entre 2008 y 2019 (diap. 75).</p>
<h4>Producción, comercio, precios y consumo</h4>
<p>Producción 2025 (diap. 77): <b>9.052,7 Mt</b>; <b>China 4.663,0 (51,5 %)</b>, India 1.084,2 (12,0 %), Indonesia 790,0 (8,7 %), EE. UU. 483,6 (5,3 %), Australia 431,4 (4,8 %), Rusia 429,2 (4,7 %); Asia-Pacífico, 79,8 %. La UE produce 244,5 Mt (2,7 %) y <b>España ya no produce</b> (−100 % en 2025).</p>
<p>Comercio 2025 (diap. 78-79): <b>35,32 EJ</b>. Exportadores: <b>Indonesia 10,45 EJ (29,6 %)</b>, Australia 8,90 (25,2 %), Rusia 4,78 (13,5 %), Mongolia 2,42 y EE. UU. 2,34. Importadores: <b>China 10,41 EJ (29,5 %)</b>, India 5,28 (14,9 %), Japón 4,24 (12,0 %) y Europa 3,01 (8,5 %).</p>
<p>Precios (diap. 80, $/t): el carbón del noroeste de Europa marcó un máximo en <b>2022 (293,63 $/t)</b> y bajó a 97,96 $/t en 2025; también hubo un pico en 2008 (147,67 $/t). La misma tabla da el uranio canadiense (72,40 $/lb en 2025).</p>
<p>Consumo 2025 (diap. 81-82): <b>166,03 EJ</b>; <b>China 92,24 EJ (55,6 %)</b>, India 23,07 (13,9 %), EE. UU. 8,73 (5,3 %); Asia-Pacífico 83,2 %, OCDE 14,8 %, UE 4,59 EJ (2,8 %). España consume 0,09 EJ.</p>
<h4>Carbón en España</h4>
<p>Importaciones 2025 (diap. 84): <b>3.448.807 t</b> (frente a 5.998.412 t en 2023): hulla coquizable 1.549.755 t (EE. UU. y Australia), carbón térmico 1.496.477 t (Colombia y Australia), antracitas 271.151 t (Perú) y otros carbones 131.425 t.</p>
<p>Centrales de carbón peninsulares a 1-1-2026 (diap. 85): <b>Los Barrios (Cádiz) 570 MW</b>, <b>Soto de Ribera 3 (Asturias) 346 MW</b> y <b>Aboño 1 (Asturias) 342 MW</b>: <b>1.258 MW</b> en total. Fuera de la península solo queda <b>Alcudia (Baleares)</b>, con limitación de horas anuales y cierre previsto en 2026 con el segundo enlace con la península ya en servicio.</p>
` },
    { id: "fos-co2", title: "9. Emisiones de CO2 y mitigación: CCS y mercados", slides: ["FOS", 86, 89], html: `
<h4>Captura y almacenamiento de carbono (CCS)</h4>
<table class="tbl cmp"><thead><tr><th>Captura</th><th>En qué consiste (diap. 87)</th></tr></thead><tbody>
<tr><td>Post-combustión</td><td>El CO<sub>2</sub> se extrae de los <b>gases de escape</b></td></tr>
<tr><td>Pre-combustión</td><td><b>Descarbonización del combustible</b> antes de quemarlo</td></tr>
<tr><td>Oxi-combustión (<i>oxy-fuel</i>)</td><td>Quemado en <b>atmósfera de oxígeno puro</b>: los humos son CO<sub>2</sub> y H<sub>2</sub>O</td></tr>
</tbody></table>
<p>El proceso tiene tres pasos: <b>capturar, transportar y almacenar</b>. Almacenamiento: <b>profundo en formaciones geológicas</b> y <b>estimulación de depósitos de petróleo y gas natural</b>. Bajo una roca sello (<i>caprock</i>) el CO<sub>2</sub> queda retenido por <b>trampa estructural</b>, <b>trampa residual</b> (CO<sub>2</sub> atrapado en los poros) y <b>trampa de solubilidad y mineral</b> (CO<sub>2</sub> disuelto en la salmuera que acaba mineralizando).</p>
<h4>Capacidad de captura (CCUS) y emisiones</h4>
<p>Capacidad de captura 2025 (diap. 88): <b>258,9 Mt/año</b> (+25,4 %; 180,1 en 2020). EE. UU. 93,9 Mt (36,3 %), Brasil 33,0 (12,8 %), China 28,5 (11,0 %), Australia 22,8, Canadá 19,3; Norteamérica 43,9 %, Europa 28,0 Mt (10,8 %). Las tecnologías incluyen captura directa del aire, oxi-combustión, pre- y post-combustión.</p>
<p>Emisiones de CO<sub>2</sub> de la energía 2025: <b>35.806,2 Mt</b> (+1,1 %): OCDE 11.161,0 (31,2 %), no OCDE 24.645,2 (68,8 %) y UE 2.480,9 (6,9 %, −2,0 %/año en 2015-2025). La captura instalada equivale a menos del 1 % de lo emitido.</p>
<h4>Mercados de carbono</h4>
<p>Precios de los mercados regulados (diap. 89): el <b>EU ETS</b> pasó de 6,87 €/t (2012) y 5,84 €/t (2017) a 53,52 (2021), <b>85,27 (máximo, 2023)</b>, 66,47 (2024) y <b>74,91 €/t (2025)</b>. Otros en 2025: UK ETS 50,17 £/t, California 29,12 $/t, RGGI 22,37 $/t, Australia 35,7 AUD/t y Corea 9.220 wones/t. En los <b>mercados voluntarios</b> los precios van de &lt; 1 $/t (energía renovable 0,85) hasta ≈ 147 $/t (biochar en EE. UU.).</p>
` }
  ],
  confusions: [
    ["<b>Crudo dulce</b> vs <b>crudo agrio</b>", "El criterio es el azufre, no la densidad: dulce &lt; 0,5 % S y agrio &gt; 0,5 % S. La densidad la da la gravedad API (liviano, mediano, pesado)."],
    ["<b>Grado API alto</b> vs <b>bajo</b>", "La relación es inversa: más grados API = crudo más ligero. API = 10º equivale a la densidad del agua; por encima flota y por debajo se hunde."],
    ["<b>Reservas</b> vs <b>R/P</b>", "Venezuela tiene las mayores reservas de petróleo, pero la R/P depende también de la producción: EE. UU. tiene pocas reservas (3,6 %) y una R/P de solo 8,9 años porque es el primer productor."],
    ["<b>Mayor productor</b> vs <b>mayor reserva</b> de petróleo", "Producción 2025: EE. UU. (20,9 %). Reservas 2024: Venezuela (18,6 %). Arabia Saudí es segunda en ambas listas."],
    ["<b>GNL</b> vs <b>GLP</b> vs <b>NGL</b>", "GNL = gas natural (metano) licuado para transportarlo en barco. GLP = propano + butano. NGL = líquidos del gas natural (etano, propano, butano, pentanos)."],
    ["<b>Hidrógeno azul</b> vs <b>verde</b>", "Azul: reformado con vapor de gas natural y captura del CO<sub>2</sub> (70,7 % del total en 2025). Verde: electrólisis del agua con electricidad renovable (29,3 %, pero crece un 174 %)."],
    ["<b>GWP-20</b> vs <b>GWP-100</b> del metano", "Con horizonte de 20 años el metano calienta 81,2 veces más que el CO<sub>2</sub>; a 100 años, 27,9 veces. Cuanto más corto el horizonte, mayor el factor, porque el metano dura poco en la atmósfera."],
    ["<b>Exportador de GNL</b> vs <b>exportador por gasoducto</b>", "GNL 2025: EE. UU. (147 bcm), Catar, Australia. Gasoducto: Noruega (115 bcm), Rusia (101,7), EE. UU. (94,2, a México y Canadá)."],
    ["<b>Lignito</b> vs <b>antracita</b>", "Lignito: PCS &lt; 24 GJ/t, C &lt; 70 %, volátiles &gt; 20 %, humedad ~40 %. Antracita: C &gt; 85 %, volátiles &lt; 15 %, apenas ~1 % de las reservas."],
    ["<b>Post-combustión</b> vs <b>pre-combustión</b> vs <b>oxi-combustión</b>", "Post: se separa el CO<sub>2</sub> de los humos. Pre: se descarboniza el combustible antes de quemarlo. Oxi: se quema con O<sub>2</sub> puro y los humos son solo CO<sub>2</sub> + H<sub>2</sub>O."]
  ]
};

/* ---------- FOS · Preguntas ---------- */
L("FOS", "fos-intro", "Cuotas de energía primaria", 2, "Según el gráfico de cuotas de la energía primaria mundial de los apuntes, en 2025 el orden de las tres fuentes fósiles, de mayor a menor cuota, es…",
  ["petróleo (≈ 31-32 %), carbón (≈ 26 %) y gas (≈ 23-24 %)",
   "petróleo (≈ 31-32 %), gas (≈ 26 %) y carbón (≈ 23-24 %)",
   "carbón (≈ 31-32 %), petróleo (≈ 26 %) y gas (≈ 23-24 %)",
   "gas (≈ 31-32 %), petróleo (≈ 26 %) y carbón (≈ 23-24 %)"],
  0, "El petróleo sigue en cabeza aunque ha bajado mucho desde su máximo de los setenta; el carbón (≈ 26 %) aún supera al gas (≈ 23-24 %), que crece casi sin interrupción desde 1970.", "Apuntes FOS, diap. 5");
L("FOS", "fos-intro", "Evolución del petróleo", 2, "Respecto a la cuota del petróleo en la energía primaria mundial desde 1970, señale la afirmación correcta:",
  ["Alcanzó su máximo (≈ 44-45 %) en los años setenta y desde entonces ha bajado hasta ≈ 31-32 %",
   "Ha crecido de forma sostenida desde 1970 hasta superar el 40 % en 2025",
   "Alcanzó su máximo (≈ 44-45 %) hacia 2010 y desde entonces ha bajado hasta ≈ 26 %",
   "Se ha mantenido estable en torno al 36 % desde los años setenta hasta 2025"],
  0, "El máximo es de los años setenta (≈ 44-45 %). Tras las crisis del petróleo cae a ≈ 37 % a mediados de los ochenta y sigue bajando hasta ≈ 31-32 %. El 26 % es la cuota actual del carbón.", "Apuntes FOS, diap. 5");
L("FOS", "fos-intro", "Electricidad mundial", 3, "Sobre la generación eléctrica mundial por fuentes (gráfico 1985-2025 de los apuntes), señale la afirmación correcta:",
  ["El carbón sigue siendo la primera fuente (≈ 33 %) y en 2025 la solar alcanza aproximadamente la cuota de la nuclear (≈ 9 %)",
   "El gas ya ha superado al carbón como primera fuente y la nuclear mantiene una cuota próxima al 17 %",
   "El carbón sigue siendo la primera fuente (≈ 33 %) y la hidráulica ha caído por debajo de la nuclear desde 2015",
   "La cuota del carbón ha vuelto al ≈ 40 % y la eólica supera ya claramente a la hidráulica"],
  0, "Carbón ≈ 33 % (tras rondar el 40 % en 2007-2014), gas ≈ 22 %, hidráulica ≈ 14 %, y nuclear, solar y eólica convergen en ≈ 8,5-9 % en 2025. La nuclear llegó a ≈ 17 % a mediados de los noventa.", "Apuntes FOS, diap. 6");
L("FOS", "fos-intro", "Energía primaria", 1, "Según el gráfico de uso mundial de energía primaria, el consumo de 2025 se aproxima a…",
  ["180.000 TWh", "18.000 TWh", "1.800.000 TWh", "120.000 TWh"],
  0, "El área apilada del gráfico (Our World in Data) llega a casi 180.000 TWh en 2025.", "Apuntes FOS, diap. 4");

L("FOS", "fos-crudo", "Contenido de azufre", 2, "Un crudo con un 1,5 % de azufre se clasifica como…",
  ["agrio, porque supera el 0,5 % de azufre",
   "dulce, porque no supera el 2 % de azufre",
   "agrio, porque supera el 1 % de azufre",
   "dulce, porque el límite entre dulce y agrio está en el 5 % de azufre"],
  0, "Dulce &lt; 0,5 % S; agrio &gt; 0,5 % S. La densidad (liviano/pesado) se mide aparte, con la gravedad API.", "Apuntes FOS, diap. 8");
L("FOS", "fos-crudo", "Gravedad API", 3, "Un crudo tiene una gravedad específica GE(60 ºF) = 0,85. Con la expresión de los apuntes, su gravedad API es aproximadamente…",
  ["35º", "11,8º", "166º", "25º"],
  0, "API = 141,5/0,85 − 131,5 = 166,5 − 131,5 ≈ 35º. 166º sale si se olvida restar 131,5; 11,8º, si se resta antes de dividir.", "Apuntes FOS, diap. 8");
L("FOS", "fos-crudo", "Gravedad API", 2, "Un crudo con una gravedad API de 8º…",
  ["es más denso que el agua, porque su GE(60 ºF) es mayor que 1",
   "es menos denso que el agua, porque su GE(60 ºF) es menor que 1",
   "es más denso que el agua, porque su GE(60 ºF) es menor que 1",
   "tiene la misma densidad que el agua, porque el umbral se sitúa en 0º API"],
  0, "Con GE = 1, API = 141,5 − 131,5 = 10º. Por debajo de 10º la GE es mayor que 1 y el crudo es más denso que el agua.", "Apuntes FOS, diap. 8");
L("FOS", "fos-crudo", "Relación R/P", 2, "Según la relación reservas/producción de 2020 recogida en los apuntes, los años de producción que quedan de carbón, petróleo y gas son, respectivamente…",
  ["139, 56 y 49 años", "139, 49 y 56 años", "56, 139 y 49 años", "93, 56 y 49 años"],
  0, "Carbón 139, petróleo 56 y gas 49 años (Energy Institute, 2025). El gas tiene la R/P más corta de los tres.", "Apuntes FOS, diap. 11");
L("FOS", "fos-crudo", "Reservas por países", 3, "Señale la afirmación correcta sobre las reservas probadas de petróleo a 31-12-2024:",
  ["Venezuela tiene la mayor cuota (18,6 %) y Oriente Medio reúne casi la mitad del total (47,8 %)",
   "Arabia Saudí tiene la mayor cuota (18,6 %) y Oriente Medio reúne casi la mitad del total (47,8 %)",
   "Venezuela tiene la mayor cuota (18,6 %) y la OPEP reúne algo menos de la mitad del total (47,8 %)",
   "Venezuela tiene la mayor cuota (15,3 %) y Oriente Medio reúne el 70 % del total"],
  0, "Venezuela 18,6 %, Arabia Saudí 15,3 %. Oriente Medio 47,8 %; la OPEP, el 70 %.", "Apuntes FOS, diap. 14");
L("FOS", "fos-crudo", "Relación R/P", 3, "EE. UU. tiene el 3,6 % de las reservas probadas de petróleo y una relación R/P de solo 8,9 años. ¿Cómo se explica una R/P tan baja?",
  ["Porque es el primer productor mundial: la R/P divide unas reservas modestas entre una producción anual muy alta",
   "Porque sus reservas incluyen arenas bituminosas, que el cuadro no computa al calcular la R/P",
   "Porque la R/P solo considera el petróleo convencional y excluye el shale oil que produce",
   "Porque pertenece a la OPEP, cuya relación R/P media es inferior a la del resto de países"],
  0, "R/P = reservas / producción del último año. EE. UU. produce el 20,9 % del petróleo mundial con solo el 3,6 % de las reservas. Las arenas bituminosas son de Canadá y EE. UU. no es de la OPEP (cuya R/P es 108,1).", "Apuntes FOS, diap. 14 y 17");
L("FOS", "fos-crudo", "Reservas no convencionales", 2, "Según la nota del cuadro de reservas probadas, las reservas de Canadá y las de Venezuela incluyen, respectivamente…",
  ["arenas bituminosas y petróleo extrapesado",
   "petróleo extrapesado y arenas bituminosas",
   "petróleo de pizarra (shale oil) y condensados",
   "arenas bituminosas y líquidos del gas natural"],
  0, "Nota del cuadro 04.14: «Las reservas de Canadá incluyen arenas bituminosas y las de Venezuela petróleo extrapesado».", "Apuntes FOS, diap. 14");
L("FOS", "fos-crudo", "Fracking", 2, "Según los apuntes, ¿cuáles de los siguientes son argumentos EN CONTRA de la fracturación hidráulica? (Puede haber varias correctas)",
  ["La contaminación de aguas", "Que puede provocar pequeños terremotos", "Que permite sustituir carbón por petróleo y gas natural", "La independencia energética"],
  [0, 1], "Es controvertida: a favor, la independencia energética y sustituir carbón por petróleo y gas; en contra, la contaminación de aguas y los pequeños terremotos.", "Apuntes FOS, diap. 15");
L("FOS", "fos-crudo", "Fracking", 2, "El fluido que se inyecta a alta presión en la fracturación hidráulica está formado, según los apuntes, por…",
  ["agua, arena y agentes espesantes",
   "agua, arena y CO<sub>2</sub> supercrítico",
   "vapor de agua, arena y disolventes aromáticos",
   "agua, gas natural y agentes espesantes"],
  0, "«Inyección a alta presión de un fluido (agua, arena y agentes espesantes) para agrietar formaciones rocosas facilitando el flujo de crudo y gas natural».", "Apuntes FOS, diap. 15");
L("FOS", "fos-crudo", "Conversión barril-tonelada", 3, "Con la equivalencia del cuadro de reservas (1 barril = 0,1364 t), las reservas probadas mundiales (1.852,9·10<sup>9</sup> barriles) equivalen aproximadamente a…",
  ["253·10<sup>9</sup> t", "25,3·10<sup>9</sup> t", "13.584·10<sup>9</sup> t", "2,53·10<sup>9</sup> t"],
  0, "1.852,9·10<sup>9</sup> × 0,1364 ≈ 252,7·10<sup>9</sup> t. 13.584·10<sup>9</sup> sale si se divide en vez de multiplicar.", "Apuntes FOS, diap. 14");
L("FOS", "fos-crudo", "Formación", 1, "Según el esquema de formación del petróleo y del gas natural, los pequeños organismos marinos que los originaron murieron y quedaron enterrados hace…",
  ["300-400 millones de años", "100 millones de años", "30-40 millones de años", "3.000-4.000 millones de años"],
  0, "El esquema sitúa el océano original hace 300-400 millones de años; la viñeta de «hace 100 millones de años» muestra los restos ya enterrados bajo arena y limo.", "Apuntes FOS, diap. 9");

L("FOS", "fos-mercado", "Producción de petróleo", 1, "Según la tabla de producción de petróleo de 2025, el primer productor mundial es…",
  ["EE. UU., con ≈ 21 % de la producción", "Arabia Saudí, con ≈ 21 % de la producción", "Rusia, con ≈ 21 % de la producción", "Arabia Saudí, con ≈ 11 % de la producción"],
  0, "EE. UU. 21.065 kb/d (20,9 %); Arabia Saudí 11.408 (11,3 %); Rusia 10.737 (10,7 %).", "Apuntes FOS, diap. 17");
L("FOS", "fos-mercado", "OPEP", 3, "Combinando el cuadro de reservas (2024) y la tabla de producción (2025), señale la afirmación correcta:",
  ["La OPEP posee el 70 % de las reservas probadas y produce el 34,2 % del petróleo mundial",
   "La OPEP posee el 47,8 % de las reservas probadas y produce el 30,9 % del petróleo mundial",
   "La OPEP posee el 70 % de las reservas probadas y produce el 65,8 % del petróleo mundial",
   "La OPEP posee el 34,2 % de las reservas probadas y produce el 70 % del petróleo mundial"],
  0, "OPEP: 70 % de las reservas y 34,2 % de la producción. 47,8 % y 30,9 % son las cuotas de Oriente Medio; 65,8 %, la producción no OPEP.", "Apuntes FOS, diap. 14 y 18");
L("FOS", "fos-mercado", "Precios del crudo", 2, "En el gráfico de precios del crudo 1861-2025, ¿qué referencia de precio se usa a partir de 1984?",
  ["Brent dated", "Arabian Light (precio publicado en Ras Tanura)", "Media de EE. UU.", "West Texas Intermediate (WTI)"],
  0, "1861-1944: media de EE. UU.; 1945-1983: Arabian Light en Ras Tanura; 1984-2025: Brent dated.", "Apuntes FOS, diap. 19");
L("FOS", "fos-mercado", "Precios del crudo", 3, "¿Cuál de estas afirmaciones sobre la evolución del precio del crudo es FALSA?",
  ["En dólares de 2025, el máximo hacia 1980 (revolución iraní) superó los 100 $/barril",
   "En dólares corrientes, el precio de la década de 1860 apenas alcanzó unos pocos dólares por barril",
   "En dólares de 2025, el precio medio de 2025 fue superior al de 2022",
   "En dólares de 2025, el boom de Pensilvania de la década de 1860 superó los 150 $/barril"],
  2, "En 2022 (guerra de Ucrania) el precio superó los 100 $ de 2025 y en 2025 bajó a ≈ 65-70 $. Las otras tres afirmaciones se leen en el gráfico.", "Apuntes FOS, diap. 19");
L("FOS", "fos-mercado", "Producción de petróleo", 2, "¿Qué país aparece en la tabla de producción con un salto desde prácticamente cero (2019) hasta 716 kb/d en 2025?",
  ["Guyana", "Brasil", "Argentina", "Venezuela"],
  0, "Guyana: 1 kb/d en 2019 y 716 en 2025. Brasil produce 3.881 kb/d, Argentina 1.427 y Venezuela 1.104 (frente a 2.864 en 2015).", "Apuntes FOS, diap. 17");
L("FOS", "fos-mercado", "Producción en toneladas", 3, "Con la producción mundial de 2025 (100.590 kb/d) y la equivalencia 1 barril = 0,1364 t, la producción anual de petróleo es aproximadamente…",
  ["5.000 Mt", "500 Mt", "36.700 Mt", "13,7 Mt"],
  0, "100,59·10<sup>6</sup> barriles/día × 365 = 36.715·10<sup>6</sup> barriles/año (≈ 36.700 millones de barriles); × 0,1364 ≈ 5.008 Mt. 13,7 Mt es la producción de un solo día.", "Apuntes FOS, diap. 14 y 18");
L("FOS", "fos-mercado", "Comercio de crudo", 1, "Según el diagrama de flujos de crudo de 2025, el mayor importador de crudo es…",
  ["China", "Europa", "EE. UU.", "India"],
  0, "China (581,2 Mt) por delante de Europa (442,5 Mt). EE. UU. importa sobre todo crudo canadiense (194,7 Mt).", "Apuntes FOS, diap. 20 y 28");

L("FOS", "fos-refino", "Destilación", 1, "En la destilación del crudo, las cadenas de hidrocarburos más cortas…",
  ["tienen puntos de ebullición más bajos y se extraen por la parte superior de la columna",
   "tienen puntos de ebullición más altos y se extraen por la parte superior de la columna",
   "tienen puntos de ebullición más bajos y se extraen por el fondo de la columna",
   "tienen puntos de ebullición más altos y se extraen por el fondo de la columna"],
  0, "Cadena corta = ebullición baja: butano y propano salen por la cabeza (≈ 20 ºC); el residuo (asfaltos, parafinas) sale por el fondo (≈ 400 ºC).", "Apuntes FOS, diap. 22");
L("FOS", "fos-refino", "Fracciones", 2, "Según la clasificación de los apuntes, el queroseno y el jet fuel son…",
  ["destilados medios, igual que el diésel", "destilados ligeros, igual que la nafta", "destilados pesados, igual que el fuelóleo", "destilados medios, igual que la nafta"],
  0, "Ligeros: GLP, gasolina, nafta. Medios: queroseno, jet fuel, diésel. Pesados: fuelóleo pesado. Residuo: parafinas y asfaltos.", "Apuntes FOS, diap. 22");
L("FOS", "fos-refino", "Cracking", 2, "Según los apuntes, ¿qué proceso permite modificar las proporciones de los productos que daría la simple destilación?",
  ["El cracking", "La destilación a vacío", "El proceso Claus", "La síntesis de hidrógeno"],
  0, "«Otros procesos químicos (cracking) permiten modificar las proporciones». El proceso Claus recupera azufre y la síntesis de H<sub>2</sub> alimenta los hidrotratamientos.", "Apuntes FOS, diap. 22");
L("FOS", "fos-refino", "Columna de destilación", 3, "En el esquema de la columna de destilación de los apuntes, ¿a qué temperatura aproximada se extrae el diésel?",
  ["≈ 300 ºC", "≈ 200 ºC", "≈ 370 ºC", "≈ 150 ºC"],
  0, "Butano y propano ≈ 20 ºC, gasolina ≈ 150 ºC, queroseno ≈ 200 ºC, diésel ≈ 300 ºC, fuelóleo ≈ 370 ºC y residuo ≈ 400 ºC.", "Apuntes FOS, diap. 22");
L("FOS", "fos-refino", "Esquema de refinería", 3, "En el esquema de refinería de los apuntes, la planta Claus sirve para…",
  ["obtener azufre a partir del H<sub>2</sub>S retirado de los gases",
   "producir hidrógeno a partir de gas natural y vapor",
   "transformar el residuo de vacío en coque de petróleo",
   "eliminar mercaptanos del queroseno para obtener jet fuel"],
  0, "El H<sub>2</sub>S del tratamiento con aminas y del stripper de aguas ácidas va a la planta Claus, que produce azufre. El H<sub>2</sub> sale de la unidad de síntesis de hidrógeno; el coque, del coquizador retardado; los mercaptanos se eliminan en el tratamiento Merox.", "Apuntes FOS, diap. 23");
L("FOS", "fos-refino", "Capacidad de refino", 2, "Según la tabla de crudo procesado en refinerías (2025), el país con mayor capacidad de refino es…",
  ["EE. UU., seguido muy de cerca por China", "China, seguida muy de cerca por EE. UU.", "EE. UU., seguido muy de cerca por India", "Rusia, seguida muy de cerca por China"],
  0, "EE. UU. 16.371 kb/d (19,7 %), China 14.747 (17,8 %), India 5.468 (6,6 %), Rusia 4.900 (5,9 %).", "Apuntes FOS, diap. 24-25");
L("FOS", "fos-refino", "Comercio de crudo y productos", 3, "Sobre el comercio de petróleo de 2025, señale la afirmación correcta:",
  ["Arabia Saudí es el mayor exportador de crudo y EE. UU. el mayor exportador de productos refinados",
   "Rusia es el mayor exportador de crudo y EE. UU. el mayor exportador de productos refinados",
   "Arabia Saudí es el mayor exportador tanto de crudo como de productos refinados",
   "EE. UU. es el mayor exportador de crudo y Arabia Saudí el mayor exportador de productos refinados"],
  0, "Crudo: Arabia Saudí 326,2 Mt, Rusia 236,5, Canadá 222,3, EE. UU. 202,8. Productos: EE. UU. 273,6 Mt, muy por delante de Rusia (114,8).", "Apuntes FOS, diap. 28");
L("FOS", "fos-refino", "Comercio mundial", 3, "En 2025 el comercio mundial de petróleo fue de…",
  ["2.209 Mt de crudo y 1.207 Mt de productos refinados",
   "1.207 Mt de crudo y 2.209 Mt de productos refinados",
   "2.209 Mt de crudo y 2.176 Mt de productos refinados",
   "4.197 Mt de crudo y 1.207 Mt de productos refinados"],
  0, "Tabla de comercio 2025: crudo 2.209,0 Mt; productos 1.207,4 Mt. 2.176,4 Mt es el crudo de 2024 y 4.196,5 son los bcm de gas producidos en 2025.", "Apuntes FOS, diap. 28");

L("FOS", "fos-petesp", "Procedencia del crudo", 1, "¿Cuál fue el primer país proveedor de crudo de España en 2025?",
  ["EE. UU.", "Nigeria", "México", "Brasil"],
  0, "EE. UU. 9.334 kt, Brasil 8.357, México 7.569 y Nigeria 6.236 kt. En 2000 el primero era Nigeria (9.165 kt).", "Apuntes FOS, diap. 33");
L("FOS", "fos-petesp", "Procedencia del crudo", 3, "Comparando la procedencia del crudo importado por España en 2000 y en 2025, señale la afirmación correcta:",
  ["En 2000 la primera zona proveedora era África; en 2025 lo es América, que aporta más de la mitad del crudo",
   "En 2000 la primera zona proveedora era Oriente Medio; en 2025 lo es África, que aporta más de la mitad del crudo",
   "En 2000 la primera zona proveedora era África; en 2025 lo es América, que aporta algo menos de un tercio del crudo",
   "Tanto en 2000 como en 2025 la primera zona proveedora es África, aunque con una cuota decreciente"],
  0, "2000: África 22.804 kt de 57.457. 2025: América 31.663 kt de 61.423 (≈ 52 %), África 18.429 y Oriente Medio 6.573.", "Apuntes FOS, diap. 33");
L("FOS", "fos-petesp", "Capacidad de refino", 2, "Según el cuadro de refinerías españolas, la capacidad total autorizada de tratamiento de crudo es…",
  ["83,9 Mt/año", "79,2 Mt/año", "74,4 Mt/año", "61,6 Mt/año"],
  0, "Autorizada 83,9 Mt/año; efectiva 79,2; crudo destilado en 2024, 74,43 Mt. 61,6 Mt es la producción de las refinerías en 2025.", "Apuntes FOS, diap. 34");
L("FOS", "fos-petesp", "Refinerías españolas", 3, "¿Cuál de las siguientes afirmaciones sobre las refinerías españolas es FALSA?",
  ["Repsol opera cuatro refinerías: Cartagena, A Coruña, Puertollano y Tarragona",
   "La refinería de Moeve en Santa Cruz de Tenerife no destiló crudo en 2024",
   "Petronor opera la refinería de Somorrostro-Muskiz, con 12 Mt/año autorizados",
   "BP opera en Castellón la refinería con mayor capacidad autorizada de España"],
  3, "BP Castellón tiene 6 Mt/año autorizados; la mayor capacidad autorizada es Repsol Tarragona (13 Mt/año). Las otras tres afirmaciones son ciertas.", "Apuntes FOS, diap. 34");
L("FOS", "fos-petesp", "Producción de las refinerías", 2, "¿Qué producto es el principal de las refinerías españolas en 2025 y cuál lo era en 1970?",
  ["Los gasóleos en 2025 y los fuelóleos en 1970",
   "Las gasolinas en 2025 y los fuelóleos en 1970",
   "Los gasóleos en 2025 y las gasolinas en 1970",
   "Los fuelóleos en 2025 y los gasóleos en 1970"],
  0, "2025: gasóleos 25.303 kt de 61.553. 1970: fuelóleos 14.938 kt de 32.004. En 2025 los fuelóleos caen a 3.821 kt (−17,96 %).", "Apuntes FOS, diap. 35");
L("FOS", "fos-petesp", "Crudo ruso", 2, "Según el cuadro de procedencia del crudo importado por España, el crudo ruso…",
  ["superó las 5.000 kt en 2000 y es nulo en 2024 y 2025",
   "superó las 5.000 kt en 2000 y todavía aporta unas 1.000 kt en 2025",
   "fue nulo en 2000 y alcanzó 6.665 kt en 2024",
   "se ha mantenido estable en torno a 1.000 kt desde 2020"],
  0, "Rusia: 5.141 kt (2000), 6.665 (2010), 979 (2020), 0 (2024) y 0 (2025).", "Apuntes FOS, diap. 33");
L("FOS", "fos-petesp", "Logística", 2, "En el mapa de la red logística de CLH de los apuntes aparecen…",
  ["8 refinerías y más de 4.000 km de oleoductos",
   "8 refinerías y más de 40.000 km de oleoductos",
   "39 refinerías y más de 4.000 km de oleoductos",
   "36 refinerías y más de 400 km de oleoductos"],
  0, "Leyenda: 39 instalaciones de mantenimiento, oleoductos de más de 4.000 km, 36 instalaciones de CLH Aviación y 8 refinerías.", "Apuntes FOS, diap. 32");

L("FOS", "fos-gas", "Composición del gas", 1, "Según la tabla de composición del gas natural de los apuntes, el contenido típico de metano es…",
  ["≈ 94 % molar (intervalo 87-97 %)", "≈ 84 % molar (intervalo 70-90 %)", "≈ 98 % molar (intervalo 95-99,5 %)", "≈ 75 % molar (intervalo 60-87 %)"],
  0, "Metano 93,9 % (87,0-97,0 %); le sigue el etano con 4,2 % (1,5-9,0 %).", "Apuntes FOS, diap. 37");
L("FOS", "fos-gas", "Poder calorífico", 3, "Según la nota de la tabla de composición, el poder calorífico superior (gross heating value) del gas natural…",
  ["es el calor total de la combustión completa a presión constante e incluye el calor de condensación del vapor de agua",
   "es el calor de la combustión completa a presión constante, excluido el calor de condensación del vapor de agua",
   "es el calor de la combustión completa a volumen constante, excluido el calor de condensación del vapor de agua",
   "es el calor de la combustión completa a volumen constante, incluido el calor de condensación del vapor de agua"],
  0, "Nota de la tabla: calor total de la combustión completa a presión constante de una unidad de volumen de gas en aire, incluido el calor liberado al condensar el vapor de agua de los productos. Valor típico: 38,7 MJ/m³ (36,0-40,2).", "Apuntes FOS, diap. 37");
L("FOS", "fos-gas", "Fracciones del gas", 2, "Según el esquema de fracciones del gas natural, ¿cuáles de los siguientes forman parte de los líquidos del gas natural (NGL)? (Puede haber varias correctas)",
  ["Etano", "Propano", "Butano", "Metano"],
  [0, 1, 2], "NGL = etano, propano, butano y pentanos y superiores. El GLP es solo propano + butano; el condensado, pentanos y superiores. El metano es la base del GNL y del gas de venta.", "Apuntes FOS, diap. 37");
L("FOS", "fos-gas", "Reservas de gas", 3, "Con los datos del cuadro de reservas probadas de gas (31-12-2024), señale la afirmación correcta:",
  ["Oriente Medio reúne el 40,4 % de las reservas y la UE-27 solo el 0,2 %, con una R/P de 9,8 años",
   "La CEI reúne el 40,4 % de las reservas y la UE-27 solo el 0,2 %, con una R/P de 9,8 años",
   "Oriente Medio reúne el 40,4 % de las reservas y la UE-27 el 2,0 %, con una R/P de 46 años",
   "Oriente Medio reúne el 32,1 % de las reservas y la R/P mundial es de 66,9 años"],
  0, "Oriente Medio 40,4 %, CEI 32,1 %, UE-27 0,2 % (R/P 9,8). La R/P mundial es 46,0 años; 66,9 es la de Rusia.", "Apuntes FOS, diap. 44");
L("FOS", "fos-gas", "Hidrógeno", 3, "Según la tabla de producción de hidrógeno de 2025, señale la afirmación correcta:",
  ["El hidrógeno azul supone ≈ 71 % del total, aunque el verde crece un 174 % en el año",
   "El hidrógeno verde supone ≈ 71 % del total, aunque el azul crece un 174 % en el año",
   "El hidrógeno azul supone ≈ 71 % del total y el verde se produce sobre todo en Oriente Medio",
   "El total mundial es de ≈ 1.082 Mt/año, de los que ≈ 71 % es hidrógeno azul"],
  0, "Total 1.082,3 kt (no Mt): azul 765,2 kt (70,7 %), verde 317,1 kt (29,3 %, +174,1 %). El verde se concentra en Asia-Pacífico (200,7 kt); Oriente Medio produce azul.", "Apuntes FOS, diap. 47");
L("FOS", "fos-gas", "Hidrógeno azul", 1, "Según el esquema de los apuntes, el hidrógeno azul se obtiene mediante…",
  ["reformado con vapor de gas natural, con captura, almacenamiento y uso del CO<sub>2</sub>",
   "electrólisis del agua con electricidad renovable, almacenando después el O<sub>2</sub>",
   "electrólisis del agua con electricidad de la red, con captura del CO<sub>2</sub>",
   "gasificación de carbón, con captura, almacenamiento y uso del CO<sub>2</sub>"],
  0, "Azul: gas natural → reformado con vapor → H<sub>2</sub> y CO<sub>2</sub> capturado. Verde: renovables → electrolizador (el O<sub>2</sub> se libera) → compresor → tanques.", "Apuntes FOS, diap. 48");
L("FOS", "fos-gas", "Precios del gas", 3, "En 2022 el precio del gas en el TTF neerlandés llegó a 37,09 $/MMBtu. Según la tabla de precios, ¿qué ocurrió ese año con el Henry Hub de EE. UU.?",
  ["Subió hasta ≈ 6,4 $/MMBtu, muy por debajo del TTF",
   "Subió por encima de 30 $/MMBtu, a la par que el TTF",
   "Cayó por debajo de 2 $/MMBtu por exceso de oferta",
   "Ninguna de las otras opciones"],
  0, "Henry Hub 2022: 6,38 $/MMBtu (frente a 3,84 en 2021 y 3,53 en 2025). El TTF (37,09) y el JKM (33,98) se multiplicaron; el gas estadounidense siguió siendo mucho más barato.", "Apuntes FOS, diap. 49");

L("FOS", "fos-gnl", "Exportadores", 3, "Según las tablas de comercio de gas de 2025, el primer exportador de GNL y el primer exportador por gasoducto son, respectivamente…",
  ["EE. UU. y Noruega", "Catar y Rusia", "EE. UU. y Rusia", "Australia y Noruega"],
  0, "GNL: EE. UU. 147,0 bcm, Catar 111,0, Australia 104,8. Gasoducto: Noruega 115,0 bcm, Rusia 101,7, EE. UU. 94,2.", "Apuntes FOS, diap. 54 y 58");
L("FOS", "fos-gnl", "Cadena del gas", 2, "Según el esquema de transporte del gas natural de la IGU, las redes de distribución…",
  ["reducen la presión del gas, le añaden odorizante y lo reparten por tuberías de baja presión",
   "elevan la presión del gas y lo transportan por tuberías de acero de gran diámetro",
   "llevan el gas desde los pozos hasta las plantas de procesamiento",
   "separan los líquidos del gas natural y lo odorizan antes de licuarlo"],
  0, "Distribución: menos presión, odorizante para detectar fugas y líneas pequeñas de baja presión. Las tuberías de acero de gran diámetro y alta presión son las de transporte (transmission); las de pozo a planta, las de recogida (gathering).", "Apuntes FOS, diap. 51");
L("FOS", "fos-gnl", "Importaciones de España", 3, "Sobre las importaciones de gas natural de España en 2025, señale la afirmación correcta:",
  ["Argelia es el primer proveedor y unos dos tercios del gas importado llegan como GNL",
   "EE. UU. es el primer proveedor y unos dos tercios del gas importado llegan como GNL",
   "Argelia es el primer proveedor y unos dos tercios del gas importado llegan por gasoducto",
   "Rusia es el primer proveedor y aproximadamente la mitad del gas llega como GNL"],
  0, "Argelia 128.502 GWh, EE. UU. 111.696, Rusia 42.629. GNL 248.118 de 371.727 GWh (≈ 67 %).", "Apuntes FOS, diap. 63");
L("FOS", "fos-gnl", "Regasificación", 2, "Según el cuadro de capacidades de la infraestructura gasista española, la planta de regasificación con mayor capacidad nominal es…",
  ["Barcelona (544 GWh/día)", "Cartagena (377 GWh/día)", "Huelva (444 GWh/día)", "Sagunto (544 GWh/día)"],
  0, "Barcelona 544, Cartagena 377, Huelva 377, Sagunto 279 GWh/día. 444 GWh/día es la entrada por la conexión internacional de Tarifa.", "Apuntes FOS, diap. 62");
L("FOS", "fos-gnl", "Metano", 3, "Con los potenciales de calentamiento de los apuntes, la emisión de 10 Mt de metano equivale, en un horizonte de 100 años, a…",
  ["279 Mt de CO<sub>2</sub>-eq", "812 Mt de CO<sub>2</sub>-eq", "27,9 Mt de CO<sub>2</sub>-eq", "2.790 Mt de CO<sub>2</sub>-eq"],
  0, "GWP-100 = 27,9 → 10 × 27,9 = 279 Mt CO<sub>2</sub>-eq. Con el GWP-20 (81,2) serían 812 Mt.", "Apuntes FOS, diap. 67");

L("FOS", "fos-carbon", "Clasificación", 1, "Un carbón con PCS (sin cenizas) inferior a 24 GJ/t, menos del 70 % de carbono, más del 20 % de materia volátil y humedad del orden del 40 % es…",
  ["lignito", "sub-bituminoso", "hulla", "antracita"],
  0, "Es la descripción del lignito (brown coal). El sub-bituminoso está entre 20 y 24 GJ/t; hulla y antracita son hard coal (&gt; 24 GJ/t).", "Apuntes FOS, diap. 69");
L("FOS", "fos-carbon", "Clasificación", 2, "Un carbón con un 90 % de carbono y un 10 % de materia volátil se clasifica como…",
  ["antracita, dentro del hard coal", "hulla bituminosa, dentro del hard coal", "antracita, dentro del brown coal", "sub-bituminoso, entre el brown coal y el hard coal"],
  0, "Antracita: C &gt; 85 % y volátiles &lt; 15 %. Hulla: C ~ 60-85 % y volátiles ~ 15-30 %. Ambas son hard coal (PCS &gt; 24 GJ/t).", "Apuntes FOS, diap. 69");
L("FOS", "fos-carbon", "Reservas por tipo", 3, "Según el esquema de tipos de carbón, el reparto de las reservas mundiales es…",
  ["bajo rango 47 % (lignito 17 % y sub-bituminoso 30 %) y hard coal 53 % (bituminoso 52 % y antracita ~1 %)",
   "bajo rango 53 % (lignito 30 % y sub-bituminoso 23 %) y hard coal 47 % (bituminoso 46 % y antracita ~1 %)",
   "bajo rango 47 % (lignito 30 % y sub-bituminoso 17 %) y hard coal 53 % (bituminoso 52 % y antracita ~1 %)",
   "bajo rango 47 % (lignito 17 % y sub-bituminoso 30 %) y hard coal 53 % (bituminoso 41 % y antracita 12 %)"],
  0, "Low rank coals 47 % (lignito 17 %, sub-bituminoso 30 %); hard coal 53 % (bituminoso 52 %, antracita ~1 %).", "Apuntes FOS, diap. 70");
L("FOS", "fos-carbon", "Usos", 2, "Según el esquema de tipos de carbón, ¿qué usos se atribuyen al carbón sub-bituminoso? (Puede haber varias correctas)",
  ["Generación eléctrica", "Fabricación de cemento", "Usos industriales", "Fabricación de hierro y acero"],
  [0, 1, 2], "Sub-bituminoso: electricidad, cemento y usos industriales. El hierro y el acero usan carbón metalúrgico (coking coal); la antracita se usa como combustible sin humo.", "Apuntes FOS, diap. 70");
L("FOS", "fos-carbon", "China", 3, "Sobre el papel de China en el mercado del carbón en 2025, señale la afirmación correcta:",
  ["Produce el 51,5 % del carbón mundial, consume el 55,6 % y es el primer importador",
   "Produce el 55,6 % del carbón mundial, consume el 51,5 % y es el primer exportador",
   "Produce el 51,5 % del carbón mundial, consume el 55,6 % y es el primer exportador",
   "Produce el 51,5 % del carbón mundial, consume el 29,5 % y es el segundo importador"],
  0, "Producción 4.663 de 9.052,7 Mt (51,5 %); consumo 92,24 de 166,03 EJ (55,6 %); importaciones 10,41 EJ (29,5 % del comercio, primer importador). Indonesia es el primer exportador.", "Apuntes FOS, diap. 77, 79 y 82");
L("FOS", "fos-carbon", "Centrales en España", 2, "Según los apuntes, a 1-1-2026 quedan en la península centrales de carbón con una potencia neta total de…",
  ["2.516 MW, repartidos en seis centrales de Andalucía y Asturias",
   "1.258 MW: Los Barrios, Soto de Ribera 3 y Aboño 1",
   "1.258 MW: Los Barrios, Alcudia y Aboño 1",
   "Ninguna de las otras opciones"],
  1, "Los Barrios (Cádiz) 570 MW, Soto de Ribera 3 (Asturias) 346 MW y Aboño 1 (Asturias) 342 MW = 1.258 MW. Alcudia está en Baleares, fuera de la península, con cierre previsto en 2026.", "Apuntes FOS, diap. 85");

L("FOS", "fos-co2", "Captura de carbono", 1, "Quemar el combustible en una atmósfera de oxígeno puro, de modo que los gases resultantes sean CO<sub>2</sub> y H<sub>2</sub>O, corresponde a la captura…",
  ["post-combustión", "pre-combustión", "por combustión oxy-fuel", "Ninguna de las otras opciones"],
  2, "Oxy-fuel: quemado en O<sub>2</sub> puro → CO<sub>2</sub> + H<sub>2</sub>O. Post-combustión: el CO<sub>2</sub> se extrae de los gases de escape. Pre-combustión: se descarboniza el combustible.", "Apuntes FOS, diap. 87");
L("FOS", "fos-co2", "Captura de carbono", 2, "Señale la afirmación correcta sobre las técnicas de captura de carbono de los apuntes:",
  ["En pre-combustión se descarboniza el combustible y en post-combustión el CO<sub>2</sub> se extrae de los gases de escape",
   "En pre-combustión el CO<sub>2</sub> se extrae de los gases de escape y en post-combustión se descarboniza el combustible",
   "En pre-combustión el combustible se quema con oxígeno puro y en post-combustión se descarboniza",
   "En post-combustión el combustible se quema con oxígeno puro y en pre-combustión se separa el CO<sub>2</sub> de los humos"],
  0, "Pre = antes de quemar (descarbonizar el combustible); post = después (separar el CO<sub>2</sub> de los humos); oxy-fuel = quemar con O<sub>2</sub> puro.", "Apuntes FOS, diap. 87");
L("FOS", "fos-co2", "Almacenamiento geológico", 2, "En el esquema de almacenamiento geológico de CO<sub>2</sub> bajo una roca sello, ¿qué mecanismos de retención aparecen? (Puede haber varias correctas)",
  ["Trampa estructural", "Trampa residual", "Trampa de solubilidad y mineral", "Trampa por adsorción en la roca sello"],
  [0, 1, 2], "El esquema muestra (a) trampa estructural, (b) trampa residual (CO<sub>2</sub> atrapado en los poros) y (c) trampa de solubilidad y mineral (CO<sub>2</sub> disuelto en la salmuera).", "Apuntes FOS, diap. 87");
L("FOS", "fos-co2", "CCUS frente a emisiones", 3, "La capacidad mundial de captura de CO<sub>2</sub> en 2025 (258,9 Mt/año) frente a las emisiones de CO<sub>2</sub> de la energía de ese año (35.806 Mt) representa aproximadamente…",
  ["0,7 %", "7 %", "0,07 %", "14 %"],
  0, "258,9 / 35.806 ≈ 0,0072 → 0,7 %. La capacidad de captura crece rápido (+25,4 % en 2025), pero sigue siendo marginal frente a las emisiones.", "Apuntes FOS, diap. 88");
L("FOS", "fos-co2", "Mercado europeo de carbono", 3, "Según la tabla de precios del carbono, el EU ETS…",
  ["alcanzó su máximo en 2023 (85,27 €/t) y cerró 2025 en 74,91 €/t",
   "alcanzó su máximo en 2022 (81,17 €/t) y cerró 2025 en 74,91 €/t",
   "alcanzó su máximo en 2023 (85,27 €/t) y cerró 2025 en 66,47 €/t",
   "Ninguna de las otras opciones"],
  0, "EU ETS: 81,17 €/t (2022), 85,27 (2023, máximo), 66,47 (2024) y 74,91 (2025). En 2017 apenas llegaba a 5,84 €/t.", "Apuntes FOS, diap. 89");

C("FOS", "fos-intro", "Cuotas fósiles de la energía primaria mundial (2025)", "Petróleo ≈ 31-32 %, carbón ≈ 26 %, gas ≈ 23-24 %. Total ≈ 180.000 TWh.");
C("FOS", "fos-intro", "Primera fuente de electricidad mundial (2025)", "El <b>carbón</b> (≈ 33 %), seguido del gas (≈ 22 %) y la hidráulica (≈ 14 %). Nuclear, solar y eólica ≈ 9 %.");
C("FOS", "fos-crudo", "Crudo dulce y agrio", "Dulce: &lt; 0,5 % de azufre. Agrio: &gt; 0,5 % de azufre.");
C("FOS", "fos-crudo", "Gravedad API", "API = 141,5/GE(60 ºF) − 131,5. API &gt; 10º: menos denso que el agua; API &lt; 10º: más denso.");
C("FOS", "fos-crudo", "R/P de los fósiles (2020)", "Carbón <b>139</b> años, petróleo <b>56</b>, gas <b>49</b>.");
C("FOS", "fos-crudo", "Reservas probadas de petróleo (2024)", "1.852,9·10<sup>9</sup> barriles (R/P 49,2). Venezuela 18,6 %, Arabia Saudí 15,3 %, Irán 11,2 %. Oriente Medio 47,8 %; OPEP 70 %.");
C("FOS", "fos-crudo", "Fracking: qué se inyecta y por qué es polémico", "Agua, arena y agentes espesantes a alta presión. A favor: independencia energética, sustituir carbón. En contra: contaminación de aguas y pequeños terremotos.");
C("FOS", "fos-mercado", "Producción de petróleo 2025", "100.590 kb/d. EE. UU. 20,9 %, Arabia Saudí 11,3 %, Rusia 10,7 %. OPEP 34,2 %.");
C("FOS", "fos-refino", "Fracciones del refino", "Ligeros: GLP, gasolina, nafta. Medios: queroseno, jet fuel, diésel. Pesados: fuelóleo. Residuo: parafinas, asfaltos.");
C("FOS", "fos-refino", "Comercio de petróleo 2025", "Crudo 2.209 Mt (primer exportador Arabia Saudí, primer importador China); productos 1.207 Mt (primer exportador EE. UU.).");
C("FOS", "fos-petesp", "Refino en España", "Capacidad autorizada 83,9 Mt/año (efectiva 79,2). Producción 2025: 61.553 kt, sobre todo <b>gasóleos</b> (25.303 kt).");
C("FOS", "fos-petesp", "Crudo importado por España (2025)", "61.423 kt. Primer proveedor <b>EE. UU.</b> (9.334 kt); América aporta más de la mitad; Rusia, 0 desde 2024.");
C("FOS", "fos-gas", "Gas natural típico", "Metano 93,9 % (87-97 %), etano 4,2 %. PCS 38,7 MJ/m³; Wobbe 50,4 MJ/m³; densidad relativa 0,59.");
C("FOS", "fos-gas", "Reservas y producción de gas", "Reservas 2024: 205,6·10<sup>3</sup> bcm (Rusia 23 %, Irán 16,5 %, Catar 11,6 %). Producción 2025: 4.196,5 bcm (EE. UU. 25,6 %, Rusia 14,5 %).");
C("FOS", "fos-gas", "Hidrógeno 2025", "1.082,3 kt: azul 70,7 % (reformado de gas + captura de CO<sub>2</sub>), verde 29,3 % (electrólisis con renovables).");
C("FOS", "fos-gnl", "GNL frente a gasoducto (2025)", "GNL 578,5 bcm (EE. UU. 25,4 %, Catar 19,2 %, Australia 18,1 %) frente a gasoducto 567,6 bcm (Noruega 115 bcm).");
C("FOS", "fos-gnl", "Gas en España (2025)", "Importa 371.727 GWh (≈ 2/3 como GNL); primer proveedor Argelia. Consumo 331.500 GWh (28,4 bcm). Ciclos combinados 24.692 MW.");
C("FOS", "fos-gnl", "Metano: peso en los GEI y GWP", "16 % de los GEI antropogénicos. GWP-20 = 81,2; GWP-100 = 27,9. Fósiles: 121 Mt de CH<sub>4</sub>.");
C("FOS", "fos-carbon", "Clases de carbón", "Lignito: PCS &lt; 24 GJ/t, C &lt; 70 %. Sub-bituminoso: 20-24 GJ/t. Hulla: C 60-85 %. Antracita: C &gt; 85 %, volátiles &lt; 15 %.");
C("FOS", "fos-carbon", "Carbón 2025: producción, comercio y consumo", "Producción 9.052,7 Mt (China 51,5 %). Primer exportador Indonesia (29,6 %); primer importador China. Consumo 166 EJ (China 55,6 %).");
C("FOS", "fos-carbon", "Centrales de carbón en España (1-1-2026)", "Los Barrios 570 MW, Soto de Ribera 3 346 MW, Aboño 1 342 MW = <b>1.258 MW</b>; además, Alcudia (Baleares), con cierre previsto en 2026.");
C("FOS", "fos-co2", "Tres técnicas de captura de CO<sub>2</sub>", "Post-combustión (de los humos), pre-combustión (descarbonizar el combustible) y oxi-combustión (O<sub>2</sub> puro → CO<sub>2</sub> + H<sub>2</sub>O).");
C("FOS", "fos-co2", "CCUS, emisiones y EU ETS (2025)", "Captura 258,9 Mt/año; emisiones de CO<sub>2</sub> de la energía 35.806 Mt; EU ETS 74,91 €/t (máximo 85,27 en 2023).");

DRILLS.push({ id: "fos-c-destilados", type: "classify", tema: "FOS", sec: "fos-refino", title: "¿En qué fracción del refino sale cada producto?", cats: ["Destilado ligero", "Destilado medio", "Pesado / residuo"], items: [
  ["GLP (butano y propano)", 0], ["Gasolina", 0], ["Nafta", 0], ["Queroseno", 1], ["Jet fuel", 1], ["Diésel", 1],
  ["Fuelóleo pesado", 2], ["Parafinas", 2], ["Asfaltos", 2], ["Aceites lubricantes", 2] ] });
DRILLS.push({ id: "fos-c-carbones", type: "classify", tema: "FOS", sec: "fos-carbon", title: "¿A qué tipo de carbón corresponde cada dato?", cats: ["Lignito", "Sub-bituminoso", "Hulla (bituminoso)", "Antracita"], items: [
  ["Humedad ~ 40 %", 0], ["C &lt; 70 % y volátiles &gt; 20 %", 0], ["17 % de las reservas", 0], ["Uso: sobre todo electricidad", 0],
  ["PCS entre 20 y 24 GJ/t", 1], ["30 % de las reservas", 1],
  ["C ~ 60-85 % y volátiles ~ 15-30 %", 2], ["52 % de las reservas", 2], ["Coking coal para hierro y acero", 2],
  ["C &gt; 85 % y volátiles &lt; 15 %", 3], ["~ 1 % de las reservas", 3], ["Combustible sin humo", 3] ] });
DRILLS.push({ id: "fos-m-lideres", type: "match", tema: "FOS", sec: "fos-mercado", title: "Récord mundial ↔ país o zona", pairs: [
  ["Mayores reservas de petróleo (2024)", "Venezuela"], ["Mayor productor de petróleo (2025)", "EE. UU."], ["Mayor exportador de crudo (2025)", "Arabia Saudí"],
  ["Mayores reservas de gas (2024)", "Rusia"], ["Mayor exportador por gasoducto", "Noruega"], ["Mayor importador de GNL", "Europa"],
  ["Mayor exportador de carbón", "Indonesia"], ["Mayor productor de carbón", "China"] ] });
DRILLS.push({ id: "fos-m-cadena", type: "match", tema: "FOS", sec: "fos-gnl", title: "Tramo de la cadena del gas ↔ función", pairs: [
  ["Gathering pipelines", "Del pozo a la planta de proceso"], ["Planta de procesamiento", "Separa la corriente de NGL"], ["Feeder pipelines", "Del proceso a la red de transporte"],
  ["Transmission pipelines", "Acero, gran diámetro, alta presión"], ["Red de distribución", "Baja presión y odorizante"], ["Regasificación", "Devuelve el GNL a estado gaseoso"] ] });
DRILLS.push({ id: "fos-m-espana", type: "match", tema: "FOS", sec: "fos-petesp", title: "Cifra ↔ dato energético de España", pairs: [
  ["83,9 Mt/año", "Capacidad de refino autorizada"], ["61.423 kt", "Crudo importado en 2025"], ["25.303 kt", "Gasóleos producidos en 2025"],
  ["24.692 MW", "Ciclos combinados peninsulares"], ["1.258 MW", "Carbón peninsular (1-1-2026)"], ["544 GWh/día", "Regasificación de Barcelona"], ["331.500 GWh", "Consumo de gas en 2025"] ] });

MNEMO["fos-intro"] = ["Primaria: «P-C-G = 31-26-23»: Petróleo, Carbón, Gas, en orden decreciente.", "Electricidad: el carbón sigue «en un tercio» (≈ 33 %); nuclear, sol y viento empatan a ≈ 9 %."];
MNEMO["fos-crudo"] = ["«Dulce hasta medio»: dulce si el azufre no pasa del 0,5 %.", "API: «10 es agua»; más grados = más ligero (flota).", "R/P «139-56-49»: el carbón dura más del doble que petróleo y gas."];
MNEMO["fos-mercado"] = ["«Venezuela guarda, EE. UU. bombea»: más reservas frente a más producción.", "Precio: «Brent desde el 84»; antes, Arabian Light (1945-1983) y media de EE. UU."];
MNEMO["fos-refino"] = ["Columna «20-150-200-300-370-400»: GLP, gasolina, queroseno, diésel, fuelóleo, residuo.", "«Claus = azufre» y «Merox = mercaptanos».", "Refino: «EE. UU. un pelo por delante de China» (19,7 frente a 17,8 %)."];
MNEMO["fos-petesp"] = ["Refino español «84-79-74»: autorizada, efectiva y destilada en 2024 (Mt).", "España: crudo «made in USA» y diésel «made in Spain» (el gasóleo es el primer producto)."];
MNEMO["fos-gas"] = ["Gas «94-4»: 94 % metano, 4 % etano; PCS ≈ 39 y Wobbe ≈ 50 MJ/m³.", "Reservas «R-I-Q» (Rusia, Irán, Catar = Qatar): 23-16,5-11,6 %.", "Hidrógeno «7 de cada 10 azules»."];
MNEMO["fos-gnl"] = ["GNL por mar: «EE. UU., Catar, Australia»; por tubo: «Noruega, Rusia».", "Distribución = «baja la presión y huele» (odorizante).", "Metano «81 a 20 años, 28 a 100»."];
MNEMO["fos-carbon"] = ["«Lignito 24-70-20-40»: PCS &lt; 24 GJ/t, C &lt; 70 %, volátiles &gt; 20 %, humedad ~40 %.", "Reservas «17-30 | 52-1»: lignito, sub-bituminoso | bituminoso, antracita.", "España: «570 + 346 + 342 = 1.258 MW»."];
MNEMO["fos-co2"] = ["Captura «antes, después o con oxígeno»: pre, post y oxy-fuel.", "EU ETS: «85 en 2023, 75 en 2025» (€/t)."];

DIAGRAMS.push({ sec: "fos-crudo", h4: "Relación reservas/producción", cap: "Relación reservas/producción (R/P) de los tres combustibles fósiles en 2020: años de producción que quedan con las reservas probadas y la producción actual.", svg: `<svg class="dg" viewBox="0 0 520 200" role="img" aria-label="Relación reservas/producción de los combustibles fósiles">
<text x="10" y="22" class="tb">Años de producción restantes (R/P, 2020)</text>
<line x1="100" y1="36" x2="100" y2="176" class="ax"/>
<text x="92" y="65" text-anchor="end" class="tb">Carbón</text><rect x="100" y="45" width="330" height="30" rx="3" fill="#64748b"/><text x="436" y="65" class="tb">139 años</text>
<text x="92" y="111" text-anchor="end" class="tb">Petróleo</text><rect x="100" y="91" width="133" height="30" rx="3" fill="#c2413b"/><text x="239" y="111" class="tb">56 años</text>
<text x="92" y="157" text-anchor="end" class="tb">Gas</text><rect x="100" y="137" width="116" height="30" rx="3" fill="#2563eb"/><text x="222" y="157" class="tb">49 años</text>
<text x="100" y="194" class="small2 mut">Fuente: Energy Institute (2025), vía Our World in Data</text>
</svg>` });

DIAGRAMS.push({ sec: "fos-mercado", h4: "Producción mundial de petróleo (2025)", cap: "Mayores productores de petróleo en 2025, en miles de barriles diarios y cuota del total mundial (100.590 kb/d).", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Mayores productores de petróleo en 2025">
<text x="10" y="20" class="tb">Producción de petróleo 2025 (kb/d y cuota)</text>
<line x1="118" y1="30" x2="118" y2="232" class="ax"/>
<g class="small2">
<text x="110" y="47" text-anchor="end">EE. UU.</text><rect x="118" y="34" width="280" height="18" fill="#1e40af"/><text x="404" y="47">21.065 (20,9 %)</text>
<text x="110" y="75" text-anchor="end">Arabia Saudí</text><rect x="118" y="62" width="152" height="18" fill="#2563eb"/><text x="276" y="75">11.408 (11,3 %)</text>
<text x="110" y="103" text-anchor="end">Rusia</text><rect x="118" y="90" width="143" height="18" fill="#2563eb"/><text x="267" y="103">10.737 (10,7 %)</text>
<text x="110" y="131" text-anchor="end">Canadá</text><rect x="118" y="118" width="82" height="18" fill="#0891b2"/><text x="206" y="131">6.164 (6,1 %)</text>
<text x="110" y="159" text-anchor="end">Irán</text><rect x="118" y="146" width="69" height="18" fill="#0891b2"/><text x="193" y="159">5.184 (5,2 %)</text>
<text x="110" y="187" text-anchor="end">Irak</text><rect x="118" y="174" width="58" height="18" fill="#0891b2"/><text x="182" y="187">4.396 (4,4 %)</text>
<text x="110" y="215" text-anchor="end">China</text><rect x="118" y="202" width="58" height="18" fill="#0891b2"/><text x="182" y="215">4.340 (4,3 %)</text>
</g>
<text x="118" y="246" class="small2 mut">OPEP: 34,2 % · No OPEP: 65,8 % · UE: 0,3 %</text>
</svg>` });

DIAGRAMS.push({ sec: "fos-refino", h4: "Destilación", cap: "Columna de destilación atmosférica: las cadenas más cortas (punto de ebullición más bajo) salen por arriba y el residuo por el fondo. Temperaturas del esquema de los apuntes.", svg: `<svg class="dg" viewBox="0 0 550 330" role="img" aria-label="Columna de destilación del crudo">
<defs><marker id="fosAr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<rect x="190" y="30" width="80" height="270" rx="36" fill="#eef3fb" stroke="#1e40af"/>
<g class="small2" text-anchor="middle"><text x="230" y="66">20 ºC</text><text x="230" y="106">150 ºC</text><text x="230" y="146">200 ºC</text><text x="230" y="186">300 ºC</text><text x="230" y="226">370 ºC</text><text x="230" y="276">400 ºC</text></g>
<g stroke="#94a3b8"><line x1="196" y1="82" x2="264" y2="82"/><line x1="196" y1="122" x2="264" y2="122"/><line x1="196" y1="162" x2="264" y2="162"/><line x1="196" y1="202" x2="264" y2="202"/><line x1="196" y1="242" x2="264" y2="242"/></g>
<g stroke="#64748b" fill="none"><line x1="270" y1="62" x2="318" y2="62" marker-end="url(#fosAr1)"/><line x1="270" y1="102" x2="318" y2="102" marker-end="url(#fosAr1)"/><line x1="270" y1="142" x2="318" y2="142" marker-end="url(#fosAr1)"/><line x1="270" y1="182" x2="318" y2="182" marker-end="url(#fosAr1)"/><line x1="270" y1="222" x2="318" y2="222" marker-end="url(#fosAr1)"/><line x1="270" y1="282" x2="318" y2="282" marker-end="url(#fosAr1)"/></g>
<g class="small2"><text x="324" y="66">Butano y propano (GLP)</text><text x="324" y="106">Gasolina</text><text x="324" y="146">Queroseno, jet fuel</text><text x="324" y="186">Diésel</text><text x="324" y="226">Fuelóleo</text><text x="324" y="278">Lubricantes, parafinas,</text><text x="324" y="292">asfaltos (residuo)</text></g>
<g stroke="#d97706" stroke-width="2"><line x1="470" y1="52" x2="470" y2="112"/><line x1="476" y1="132" x2="476" y2="192"/></g>
<g class="small2 tb" fill="#d97706"><text x="480" y="86">Ligeros</text><text x="484" y="166">Medios</text></g>
<rect x="30" y="230" width="110" height="46" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="85" y="250" text-anchor="middle" class="small2">Crudo calentado</text><text x="85" y="265" text-anchor="middle" class="small2">en horno</text>
<line x1="140" y1="253" x2="188" y2="253" stroke="#c2413b" stroke-width="2" marker-end="url(#fosAr1)"/>
<line x1="60" y1="200" x2="60" y2="60" stroke="#64748b" marker-end="url(#fosAr1)"/>
<text x="70" y="90" class="small2 mut">cadenas</text><text x="70" y="104" class="small2 mut">más cortas,</text><text x="70" y="118" class="small2 mut">ebullición</text><text x="70" y="132" class="small2 mut">más baja</text>
</svg>` });

DIAGRAMS.push({ sec: "fos-gas", h4: "Reservas de gas", cap: "Países con mayores reservas probadas de gas natural a 31-12-2024 (miles de bcm, es decir, billones de m³) y cuota del total mundial (205,6·10³ bcm).", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Reservas probadas de gas por países">
<text x="10" y="20" class="tb">Reservas de gas, 31-12-2024 (10³ bcm y cuota)</text>
<line x1="118" y1="30" x2="118" y2="232" class="ax"/>
<g class="small2">
<text x="110" y="47" text-anchor="end">Rusia</text><rect x="118" y="34" width="280" height="18" fill="#7c3aed"/><text x="404" y="47">47,15 (23,0 %)</text>
<text x="110" y="75" text-anchor="end">Irán</text><rect x="118" y="62" width="202" height="18" fill="#8b5cf6"/><text x="326" y="75">33,99 (16,5 %)</text>
<text x="110" y="103" text-anchor="end">Catar</text><rect x="118" y="90" width="142" height="18" fill="#8b5cf6"/><text x="266" y="103">23,83 (11,6 %)</text>
<text x="110" y="131" text-anchor="end">EE. UU.</text><rect x="118" y="118" width="99" height="18" fill="#a78bfa"/><text x="223" y="131">16,67 (8,1 %)</text>
<text x="110" y="159" text-anchor="end">Turkmenistán</text><rect x="118" y="146" width="83" height="18" fill="#a78bfa"/><text x="207" y="159">13,95 (6,8 %)</text>
<text x="110" y="187" text-anchor="end">Arabia Saudí</text><rect x="118" y="174" width="57" height="18" fill="#a78bfa"/><text x="181" y="187">9,52 (4,6 %)</text>
<text x="110" y="215" text-anchor="end">Emiratos</text><rect x="118" y="202" width="49" height="18" fill="#a78bfa"/><text x="173" y="215">8,21 (4,0 %)</text>
</g>
<text x="118" y="246" class="small2 mut">Oriente Medio 40,4 % · CEI 32,1 % · UE-27 0,2 %</text>
</svg>` });

DIAGRAMS.push({ sec: "fos-gnl", h4: "Cadena de transporte del gas", cap: "Del pozo al consumidor: tras la recogida y el procesamiento, el gas viaja por gasoducto (transporte en alta presión, city gate y distribución) o por mar como GNL (licuefacción, buque metanero y regasificación).", svg: `<svg class="dg" viewBox="0 0 520 260" role="img" aria-label="Cadena de transporte del gas natural">
<defs><marker id="fosAr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<g class="small2" text-anchor="middle">
<rect x="10" y="20" width="105" height="44" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="62" y="46">Pozo de gas</text>
<rect x="140" y="20" width="105" height="44" rx="6" class="box"/><text x="192" y="38">Recogida</text><text x="192" y="54">(gathering)</text>
<rect x="270" y="20" width="105" height="44" rx="6" class="box"/><text x="322" y="38">Procesamiento</text><text x="322" y="54">separa los NGL</text>
<rect x="400" y="20" width="105" height="44" rx="6" class="box"/><text x="452" y="38">Feeder</text><text x="452" y="54">pipelines</text>
<rect x="30" y="118" width="105" height="44" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="82" y="136">Transporte</text><text x="82" y="152">alta presión</text>
<rect x="155" y="118" width="105" height="44" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="207" y="144">City gate</text>
<rect x="280" y="118" width="105" height="44" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="332" y="136">Distribución</text><text x="332" y="152">baja P, odorizante</text>
<rect x="405" y="118" width="105" height="44" rx="6" fill="#dcfce7" stroke="#0d9488"/><text x="457" y="136">Hogares y</text><text x="457" y="152">comercios</text>
<rect x="30" y="200" width="105" height="44" rx="6" fill="#f1f5fd" stroke="#0891b2"/><text x="82" y="226">Licuefacción</text>
<rect x="155" y="200" width="105" height="44" rx="6" fill="#f1f5fd" stroke="#0891b2"/><text x="207" y="218">Buque</text><text x="207" y="234">metanero (GNL)</text>
<rect x="280" y="200" width="105" height="44" rx="6" fill="#f1f5fd" stroke="#0891b2"/><text x="332" y="226">Regasificación</text>
<rect x="405" y="200" width="105" height="44" rx="6" fill="#f1f5fd" stroke="#0891b2"/><text x="457" y="218">Almacenamiento</text><text x="457" y="234">y red</text>
</g>
<g stroke="#64748b" fill="none">
<line x1="115" y1="42" x2="138" y2="42" marker-end="url(#fosAr2)"/><line x1="245" y1="42" x2="268" y2="42" marker-end="url(#fosAr2)"/><line x1="375" y1="42" x2="398" y2="42" marker-end="url(#fosAr2)"/>
<polyline points="452,64 452,84 15,84 15,222 28,222" marker-end="url(#fosAr2)"/><line x1="15" y1="140" x2="28" y2="140" marker-end="url(#fosAr2)"/>
<line x1="135" y1="140" x2="153" y2="140" marker-end="url(#fosAr2)"/><line x1="260" y1="140" x2="278" y2="140" marker-end="url(#fosAr2)"/><line x1="385" y1="140" x2="403" y2="140" marker-end="url(#fosAr2)"/>
<line x1="135" y1="222" x2="153" y2="222" marker-end="url(#fosAr2)"/><line x1="260" y1="222" x2="278" y2="222" marker-end="url(#fosAr2)"/><line x1="385" y1="222" x2="403" y2="222" marker-end="url(#fosAr2)"/>
</g>
<text x="30" y="110" class="small2 tb">Por gasoducto</text><text x="30" y="194" class="small2 tb">Por mar (GNL)</text>
</svg>` });

DIAGRAMS.push({ sec: "fos-carbon", h4: "Tipos, reservas y usos", cap: "Tipos de carbón ordenados por rango: al subir el rango aumenta el carbono y la energía y baja la humedad. Porcentaje de las reservas mundiales y usos principales.", svg: `<svg class="dg" viewBox="0 0 540 290" role="img" aria-label="Tipos de carbón, reservas y usos">
<defs><marker id="fosAr3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<line x1="20" y1="20" x2="520" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#fosAr3)"/><text x="270" y="15" text-anchor="middle" class="small2 mut">más carbono y más energía →</text>
<line x1="470" y1="44" x2="20" y2="44" stroke="#d97706" stroke-width="2" marker-end="url(#fosAr3)"/><text x="245" y="39" text-anchor="middle" class="small2" fill="#d97706">← más humedad</text>
<text x="112" y="76" text-anchor="middle" class="tb">Bajo rango · 47 %</text><text x="400" y="76" text-anchor="middle" class="tb">Hard coal · 53 %</text>
<g stroke="#94a3b8" fill="none"><polyline points="60,108 60,88 165,88 165,108"/><polyline points="342,108 342,88 485,88 485,108"/><polyline points="290,168 290,154 395,154 395,168"/></g>
<g text-anchor="middle" class="small2">
<rect x="10" y="108" width="100" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="60" y="124" class="tb">Lignito</text><text x="60" y="138">17 %</text>
<rect x="115" y="108" width="100" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="165" y="124">Sub-bituminoso</text><text x="165" y="138">30 %</text>
<rect x="292" y="108" width="100" height="36" rx="6" class="box"/><text x="342" y="124" class="tb">Bituminoso</text><text x="342" y="138">52 %</text>
<rect x="435" y="108" width="100" height="36" rx="6" class="box"/><text x="485" y="124" class="tb">Antracita</text><text x="485" y="138">~ 1 %</text>
<rect x="240" y="168" width="100" height="36" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="290" y="184">Térmico</text><text x="290" y="198">(steam coal)</text>
<rect x="345" y="168" width="100" height="36" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="395" y="184">Metalúrgico</text><text x="395" y="198">(coking coal)</text>
</g>
<line x1="10" y1="222" x2="530" y2="222" stroke="#d97706"/>
<text x="10" y="216" class="small2 mut">USOS</text>
<g text-anchor="middle" class="small2">
<text x="60" y="242">Sobre todo</text><text x="60" y="256">electricidad</text>
<text x="165" y="242">Electricidad,</text><text x="165" y="256">cemento,</text><text x="165" y="270">industria</text>
<text x="290" y="242">Electricidad,</text><text x="290" y="256">cemento,</text><text x="290" y="270">industria</text>
<text x="395" y="242">Hierro</text><text x="395" y="256">y acero</text>
<text x="485" y="242">Doméstico e</text><text x="485" y="256">industrial,</text><text x="485" y="270">sin humo</text>
</g>
</svg>` });

DIAGRAMS.push({ sec: "fos-co2", h4: "Captura y almacenamiento de carbono", cap: "Las tres vías de captura de CO<sub>2</sub> de los apuntes y el destino común del CO<sub>2</sub> capturado: transporte y almacenamiento geológico o estimulación de yacimientos de petróleo y gas.", svg: `<svg class="dg" viewBox="0 0 540 250" role="img" aria-label="Vías de captura y almacenamiento de CO2">
<defs><marker id="fosAr4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<g class="small2" text-anchor="middle">
<rect x="10" y="20" width="105" height="46" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="62" y="47" class="tb">Post-combustión</text>
<rect x="135" y="20" width="130" height="46" rx="6" class="box"/><text x="200" y="39">Combustión</text><text x="200" y="55">con aire</text>
<rect x="285" y="20" width="130" height="46" rx="6" class="box"/><text x="350" y="39">Separar el CO₂ de</text><text x="350" y="55">los gases de escape</text>
<rect x="10" y="98" width="105" height="46" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="62" y="125" class="tb">Pre-combustión</text>
<rect x="135" y="98" width="130" height="46" rx="6" class="box"/><text x="200" y="117">Descarbonizar</text><text x="200" y="133">el combustible</text>
<rect x="285" y="98" width="130" height="46" rx="6" class="box"/><text x="350" y="117">Se quema ya</text><text x="350" y="133">descarbonizado</text>
<rect x="10" y="176" width="105" height="46" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="62" y="203" class="tb">Oxi-combustión</text>
<rect x="135" y="176" width="130" height="46" rx="6" class="box"/><text x="200" y="195">Combustión con</text><text x="200" y="211">O₂ puro</text>
<rect x="285" y="176" width="130" height="46" rx="6" class="box"/><text x="350" y="195">Humos:</text><text x="350" y="211">solo CO₂ + H₂O</text>
<rect x="440" y="20" width="92" height="202" rx="8" fill="#dcfce7" stroke="#0d9488"/>
<text x="486" y="62" class="tb">CO₂</text><text x="486" y="88">capturar</text><text x="486" y="104">↓</text><text x="486" y="120">transportar</text><text x="486" y="136">↓</text><text x="486" y="152">almacenar:</text><text x="486" y="170">formaciones</text><text x="486" y="184">geológicas o</text><text x="486" y="198">yacimientos</text>
</g>
<g stroke="#64748b" fill="none">
<line x1="115" y1="43" x2="133" y2="43" marker-end="url(#fosAr4)"/><line x1="265" y1="43" x2="283" y2="43" marker-end="url(#fosAr4)"/><line x1="415" y1="43" x2="438" y2="43" marker-end="url(#fosAr4)"/>
<line x1="115" y1="121" x2="133" y2="121" marker-end="url(#fosAr4)"/><line x1="265" y1="121" x2="283" y2="121" marker-end="url(#fosAr4)"/><path d="M200,144 C200,160 420,160 438,140" marker-end="url(#fosAr4)"/>
<line x1="115" y1="199" x2="133" y2="199" marker-end="url(#fosAr4)"/><line x1="265" y1="199" x2="283" y2="199" marker-end="url(#fosAr4)"/><line x1="415" y1="199" x2="438" y2="199" marker-end="url(#fosAr4)"/>
</g>
</svg>` });
