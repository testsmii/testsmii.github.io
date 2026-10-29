/* Temas B1 y B2 · Biomasa y residuos · fuentes: FE_Tema1_2026.pdf, FE_Tema2_2026.pdf,
   Enunciados_Problemas_FE.pdf y Resolucion P1/P2/P3.pdf */

/* =====================================================================
   TEMA B1 · Composición y propiedades de biomasa y residuos
   ===================================================================== */
THEORY.B1 = {
  summary: [
    "La <b>Directiva 2018/2001</b> define la <b>biomasa</b> como la <b>fracción biodegradable</b> de productos, residuos y desechos de origen biológico (agrarios, silvicultura, pesca, acuicultura) y de los residuos industriales y municipales de origen biológico.",
    "<b>Biolíquido</b> = combustible líquido para usos <b>distintos del transporte</b>; <b>biocarburante</b> = combustible líquido <b>para el transporte</b>; <b>biocarburante avanzado</b> = a partir de las materias primas del <b>anexo IX, parte A</b>.",
    "<b>Residuo</b> (Ley 7/2022): sustancia u objeto que su poseedor deseche o tenga la intención o la obligación de desechar. La <b>LER</b> (Decisión 2014/955/UE) tiene <b>20 capítulos</b> y marca con <b>asterisco</b> los peligrosos.",
    "Jerarquía europea de residuos: <b>prevención → preparación para la reutilización → reciclado</b> (incluye metanización) <b>→ otra valorización</b> (energética) <b>→ eliminación</b> (gas de vertedero).",
    "<b>Análisis próximo</b>: humedad, materia volátil, carbono fijo, cenizas y poder calorífico. <b>Análisis elemental (último)</b>: C, H, O, N, S y cenizas. La humedad se da en base húmeda; los componentes, respecto a la materia seca.",
    "El <b>PCS</b> se mide con <b>bomba calorimétrica</b> o se estima (Dulong: kcal/kg = 80,6·C + 339,1·(H−O/8) + 22,22·S + 5,56·N). El <b>PCI</b> descuenta el calor de vaporización del agua (humedad + agua formada).",
    "Cultivos energéticos: <b>oleaginosos</b> (biodiésel), <b>alcoholígenos</b> (bioetanol) y <b>lignocelulósicos</b> (biomasa sólida). Chopo y eucalipto: turno de corta <b>3-5 años</b>; Quercus: <b>15-18 años</b>.",
    "PCI de cultivos ≈ <b>3.300-4.400 kcal/kg MS</b>: chopo 4.100, eucalipto 4.300, Quercus 4.400, miscanto 4.000. Productividades máximas: caña y miscanto (hasta <b>35 t MS/ha·año</b>).",
    "Pellet <b>ENplus</b>: humedad ≤ 10 %, PCI ≥ <b>4,6 kWh/kg</b> (≥ 16,5 MJ/kg), cenizas ≤ 0,7 % (A1), ≤ 1,2 % (A2), ≤ 2,0 % (B). Precios del pellet con pico en <b>2022</b> (+50,5 % el saco).",
    "IEA WEO 2022: la biomasa crece en <b>todos los escenarios</b> salvo el <b>uso tradicional</b>, que se reduce y desaparece en el escenario NZE.",
    "España 2023: energía primaria <b>114.453 ktep</b> (renovables 17,5 %). La biomasa ≈ <b>30 % de la primaria renovable</b> (≈ 40 % con biogases, RSU renovables y biocombustibles).",
    "En 2019 España tenía <b>857 MW de biomasa</b> y <b>588 MW de residuos</b> (≈ 1,5 GW, ≈ 4 % de la capacidad renovable), generando ≈ <b>5,3 TWh</b> (≈ 5 % de la generación renovable).",
    "PNIEC 2023-2030: <b>32 %</b> de reducción de GEI respecto a 1990, <b>48 %</b> de renovables en energía final, <b>81 %</b> renovable en generación eléctrica y dependencia energética del <b>50 %</b>; biogás <b>20 TWh</b> en 2030.",
    "Sostenibilidad: tres pilares (social, ambiental, económico). La biomasa reduce dependencia y valoriza residuos, pero transporte, ocupación del suelo y emisiones juegan en contra. Rendimientos <b>10-90 %</b>."
  ],
  sections: [
    { id: "b1-definiciones", title: "1. Definiciones: renovables, biomasa y residuos", slides: ["B1", 1, 8], html: `
<p>El tema persigue conocer qué materiales incluyen las denominaciones <i>biomasa</i> y <i>residuos</i>, las alternativas técnicas para usarlos como fuente de energía y saber elegir la mejor opción (diap. 1-2).</p>
<h4>Energías renovables según la Directiva 2018/2001</h4>
<p>«Energía procedente de fuentes renovables no fósiles»: eólica, solar (térmica y fotovoltaica), ambiente (aire, aguas superficiales y residuales), geotérmica, mareomotriz, undimotriz y otros tipos de energía oceánica, hidráulica, <b>biomasa</b>, <b>gases de vertedero</b>, <b>gases de plantas de depuración</b> y <b>biogás</b>.</p>
<p><b>Biomasa</b>: fracción biodegradable de los productos, residuos y desechos de origen biológico procedentes de actividades agrarias (sustancias de origen vegetal y animal), de la silvicultura y de las industrias conexas (incluidas la pesca y la acuicultura), así como la fracción biodegradable de los residuos, incluidos los industriales y municipales de origen biológico.</p>
<table class="tbl cmp"><thead><tr><th>Término</th><th>Definición (Directiva 2018/2001)</th></tr></thead><tbody>
<tr><td>Biolíquido</td><td>Combustible líquido para usos energéticos <b>distintos del transporte</b> (electricidad, calor y frío) producido a partir de biomasa</td></tr>
<tr><td>Biocarburante</td><td>Combustible líquido destinado <b>al transporte</b> y producido a partir de biomasa</td></tr>
<tr><td>Biocarburante avanzado</td><td>Producido a partir de materias primas del <b>anexo IX, parte A</b> (algas, fracción de biomasa de residuos municipales mezclados, biorresiduos, residuos industriales no aptos para la cadena alimentaria…); su contribución a las cuotas mínimas puede contarse <b>dos veces</b> su contenido energético</td></tr>
<tr><td>Biogás</td><td>Combustible <b>gaseoso</b> producido a partir de biomasa</td></tr>
<tr><td>Biomasa agrícola / forestal</td><td>Producida en la agricultura / en la silvicultura</td></tr>
<tr><td>Combustibles de biomasa</td><td>Combustibles <b>gaseosos o sólidos</b> producidos a partir de biomasa</td></tr>
</tbody></table>
<h4>Residuos (Ley 7/2022)</h4>
<p><b>Residuo</b>: cualquier sustancia u objeto que su poseedor deseche o tenga la intención o la obligación de desechar. Tipos: domésticos, comerciales, industriales, peligrosos (características del Anexo I) y subproducto. <b>Residuos municipales</b>: los que gestiona un ayuntamiento (domésticos generados en hogares, comercios y servicios) según sus ordenanzas.</p>
<h4>Jerarquía europea de residuos</h4>
<ol><li><b>Prevención</b></li><li><b>Preparación para la reutilización</b></li><li><b>Reciclado</b> → incluye la transformación de la materia orgánica: metanización → biogás</li><li><b>Otro tipo de valorización</b>, por ejemplo, la <b>valorización energética</b></li><li><b>Eliminación</b> → gas de vertedero</li></ol>
<h4>Lista europea de residuos (LER)</h4>
<p>Decisión 2014/955/UE. <b>20 capítulos</b> (01 minería… 02 agricultura y alimentación, 03 madera, papel y cartón, 10 procesos térmicos, 13 aceites, 15 envases, 17 construcción y demolición, 18 servicios médicos, 19 instalaciones de tratamiento de residuos y aguas, <b>20 residuos municipales</b>). En cada categoría se señalan con <b>asterisco (*)</b> los peligrosos: p. ej. 130101* aceites hidráulicos con PCB, 160601* baterías de plomo, 200121* tubos fluorescentes con mercurio. Los <b>lodos del tratamiento de aguas residuales urbanas (19 08 05)</b> no llevan asterisco.</p>
<h4>Combustibles sólidos recuperados (CSR, UNE 15358:2011)</h4>
<p>Se producen a partir de un <b>residuo no peligroso</b>: residuo urbano → pretratamiento (selección mecánica: material reciclable y orgánico a compostaje/metanización) → rechazo → triturador → separador de metales → <b>biosecado</b> → separador neumático/balístico → materiales ligeros (combustibles) a prensa o peletizadora; los pesados son rechazo. Propiedades a declarar: clase, origen (LER), forma y tamaño de partícula, ceniza, humedad, PCI, cloro y metales pesados.</p>
<table class="tbl"><thead><tr><th>Clase CSR</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody>
<tr><td>PCI medio (MJ/kg, tal cual)</td><td>≥ 25</td><td>≥ 20</td><td>≥ 15</td><td>≥ 10</td><td>≥ 3</td></tr>
<tr><td>Cloro medio (% s.s.)</td><td>≤ 0,2</td><td>≤ 0,6</td><td>≤ 1,0</td><td>≤ 1,5</td><td>≤ 3</td></tr>
<tr><td>Hg mediana (mg/MJ)</td><td>≤ 0,02</td><td>≤ 0,03</td><td>≤ 0,08</td><td>≤ 0,15</td><td>≤ 0,50</td></tr>
<tr><td>Hg percentil 80 (mg/MJ)</td><td>≤ 0,04</td><td>≤ 0,06</td><td>≤ 0,16</td><td>≤ 0,30</td><td>≤ 1,00</td></tr>
</tbody></table>
` },
    { id: "b1-composicion", title: "2. Composición química y poder calorífico", slides: ["B1", 9, 11], html: `
<h4>Análisis próximo y elemental</h4>
<ul><li><b>Análisis próximo</b>: humedad, materia orgánica (materia volátil), carbono fijo, materia inorgánica (cenizas) y poder calorífico.</li>
<li><b>Análisis elemental</b> (o último): C, H, O, N, S y cenizas (Na, K, Ca, P, Fe, Pb, Zn, Cd, Hg…).</li></ul>
<p>La <b>humedad</b> y la <b>materia seca</b> se expresan en % en masa respecto a la <b>materia total (base húmeda)</b>; los componentes orgánicos e inorgánicos, en % respecto a la <b>materia seca</b>. La materia seca orgánica incluye celulosa, hemicelulosa, lignina, azúcares, almidón, lípidos y proteínas (que se reparten en materia volátil y carbono fijo); la inorgánica forma cenizas o escorias.</p>
<h4>Poder calorífico superior (PCS)</h4>
<p>PCS = GCV = HHV. Se mide experimentalmente con una <b>bomba calorimétrica</b> (norma UNE-EN 14918:2011). Se han publicado <b>más de 20 expresiones</b> para estimarlo:</p>
<div class="formula">$$\\text{Dulong: } PCS\\,(\\text{kcal/kg}) = 80{,}6\\,C + 339{,}1\\,(H - O/8) + 22{,}22\\,S + 5{,}56\\,N$$</div>
<div class="formula">$$\\text{Gaur y Reed: } PCS\\,(\\text{MJ/kg m.s.}) = 0{,}3491\\,C + 1{,}1783\\,H - 0{,}1034\\,O + 0{,}1005\\,S - 0{,}0151\\,N - 0{,}0211\\,\\text{cenizas}$$</div>
<p>También existe la aproximación de la EPA (en Btu/lb, con un término de cloro). C, H, O, S, N en % en masa.</p>
<h4>Poder calorífico inferior (PCI)</h4>
<p>PCI = NCV = LHV: descuenta el calor de vaporización del agua de la humedad y del agua formada por el hidrógeno.</p>
<div class="formula">$$\\text{van Loo y Koppejan: } PCI\\,(\\text{MJ/kg m.h.}) = PCS\\left(1-\\tfrac{w}{100}\\right) - 2{,}444\\tfrac{w}{100} - 2{,}444\\tfrac{H}{100}\\,8{,}936\\left(1-\\tfrac{w}{100}\\right)$$</div>
<p>con el PCS en MJ/kg de materia seca y <i>w</i> la humedad (%). EPA: $PCI=PCS-1050\\left[H_2O+9\\left(H-\\frac{Cl}{35}-\\frac{F}{19}\\right)\\right]$, donde 1050 Btu/lb es el calor de vaporización del agua a 25 ºC.</p>
<h4>Valores típicos (CIEMAT)</h4>
<table class="tbl"><thead><tr><th>Material</th><th>Humedad (1)</th><th>M. volátil (2)</th><th>C fijo (2)</th><th>Cenizas (2)</th></tr></thead><tbody>
<tr><td>Madera de pino</td><td>10,3</td><td>81,6</td><td>17,8</td><td>0,6</td></tr>
<tr><td>Cáscara de almendra</td><td>8,7</td><td>82,0</td><td>15,0</td><td>2,2</td></tr>
<tr><td>Trigo</td><td>10,3</td><td>80,0</td><td>17,2</td><td>2,8</td></tr>
<tr><td>Paja</td><td>6,8</td><td>82,0</td><td>11,9</td><td>6,1</td></tr></tbody></table>
<table class="tbl"><thead><tr><th>Análisis último (2)</th><th>C</th><th>H</th><th>O</th><th>N</th><th>S</th><th>Cenizas</th><th>Cl</th></tr></thead><tbody>
<tr><td>Cáscara de arroz</td><td>45,7</td><td>6,6</td><td>47,7</td><td>–</td><td>–</td><td>1,7</td><td>0,1</td></tr>
<tr><td>Lodo seco de depuradora</td><td>28,7</td><td>4,8</td><td>22,5</td><td>4,0</td><td>1,5</td><td>38,5</td><td>–</td></tr>
<tr><td>Antracita</td><td>85,0</td><td>2,5</td><td>9,0</td><td>1,0</td><td>2,5</td><td>–</td><td>–</td></tr>
<tr><td>Paja</td><td>40,7</td><td>7,0</td><td>50,5</td><td>1,6</td><td>0,2</td><td>–</td><td>–</td></tr></tbody></table>
<p class="mut">(1) % respecto a masa total; (2) % respecto a masa seca.</p>
<p>PCI según humedad (kcal/kg): leñas de coníferas 3.590 (20 %) y 2.550 (40 %); serrines de coníferas 3.790 (15 %); cáscara de almendra 3.940 (10 %); piñón 4.090 (10 %); hueso de aceituna 3.860 (15 %) y 2.810 (35 %); paja de cereales 3.630 (10 %) y 3.160 (20 %); cascarilla de arroz 3.370 (10 %); ramilla de uva 2.950 (25 %) y 1.770 (50 %). El <b>factor corrector</b> del PCI cae casi linealmente desde 1 (0 % de humedad) hasta ≈ 0,1 (80 %).</p>
` },
    { id: "b1-cultivos", title: "3. Cultivos energéticos", slides: ["B1", 12, 17], html: `
<h4>Origen de la biomasa para energía</h4>
<p>Residuos de explotaciones ganaderas; residuos de acuicultura y desechos pesqueros; desechos de aprovechamientos forestales; desechos de cultivos; residuos municipales e industriales biodegradables (madera y mueble, agroalimentaria) y <b>cultivos energéticos</b>, producidos con el <b>único objetivo de obtener biomasa</b>.</p>
<table class="tbl cmp"><thead><tr><th>Tipo de cultivo</th><th>Aprovechamiento final</th></tr></thead><tbody>
<tr><td>Oleaginosos</td><td>Aceites transformables en <b>biodiésel</b></td></tr>
<tr><td>Alcoholígenos</td><td><b>Bioetanol</b> por fermentación de azúcares</td></tr>
<tr><td>Lignocelulósicos</td><td>Biomasa sólida: usos térmicos (climatización, ACS, industria), astillas o pelets, cogeneración o generación eléctrica y <b>biocarburantes de 2ª generación</b></td></tr></tbody></table>
<h4>Cultivos forestales</h4>
<p><b>Monte bajo</b>: reproducción <b>vegetativa</b> por brotes de cepa, de raíz o de ambos; solo especies capaces de rebrotar (en España, encina, quejigo, rebollo, castaño). <b>Monte alto</b>: plantas fruto de reproducción <b>sexual (semilla)</b>, orientado tradicionalmente a labores protectoras o a producir madera.</p>
<h4>Cultivos forestales de corta rotación</h4>
<p>Especies más usadas en España: eucaliptos, chopos y Quercus (encina, quejigo y rebollo).</p>
<table class="tbl"><thead><tr><th>Especie</th><th>Turno de corta</th><th>PCI (kcal/kg MS)</th><th>Productividad (t MS/ha·año)</th><th>Notas</th></tr></thead><tbody>
<tr><td>Chopo (<i>Populus</i> spp.)</td><td>3-5 años</td><td>4.100</td><td>8-20</td><td>Secado al aire: 25 % de humedad</td></tr>
<tr><td>Eucalipto</td><td>3-5 años</td><td>4.300</td><td>6-25</td><td>Zonas de escasa altitud y sin inviernos fríos</td></tr>
<tr><td>Quercus</td><td>15-18 años (corto a medio)</td><td>4.400</td><td>2,9-3,0</td><td>Interior de España (falta de agua y frío); leña de alta calidad; suelos agrícolas marginales</td></tr></tbody></table>
<p>Eucaliptos en España: <i>E. camaldulensis</i> (0-600 m, 225-640 mm de lluvia, resistente a la sequía); <i>E. globulus</i> (500-1.500 mm, 0-350 m, costa de Galicia y Cornisa cantábrica); <i>E. nitens</i> (más resistente a las heladas, 600-1.200 m).</p>
<h4>Cultivos agrícolas</h4>
<table class="tbl"><thead><tr><th>Cultivo</th><th>Uso</th><th>Productividad</th><th>PCI (kcal/kg MS)</th></tr></thead><tbody>
<tr><td>Cardo (<i>Cynara cardunculus</i>)</td><td>Biodiésel (grano); térmica/eléctrica</td><td>10-15 t/ha·año al 15 % de humedad</td><td>3.300-4.100</td></tr>
<tr><td>Caña (<i>Arundo donax</i>)</td><td>Biocombustibles de 2ª generación; térmica/eléctrica</td><td>10-35 t MS/ha·año</td><td>3.600-4.200</td></tr>
<tr><td>Sorgo (<i>Sorghum bicolor</i>)</td><td>Bioetanol (azúcares del tallo); térmica/eléctrica</td><td>12-28 t MS/ha·año</td><td>3.900</td></tr>
<tr><td>Miscanto (<i>Miscanthus</i> spp.)</td><td>Térmica/eléctrica</td><td>25-35 t MS/ha·año</td><td>4.000</td></tr>
<tr><td>Mostaza etíope (<i>Brassica carinata</i>)</td><td>Biodiésel (grano); térmica/eléctrica</td><td>12-20 t MS/ha·año</td><td>4.000-4.100</td></tr></tbody></table>
<p>La mostaza etíope es más beneficiosa que el barbecho en la rotación: aumenta el rendimiento de los cereales posteriores.</p>
` },
    { id: "b1-mercado", title: "4. Precios y mercado de los biocombustibles sólidos", slides: ["B1", 18, 22], html: `
<h4>Precios de la biomasa doméstica (AVEBIOM)</h4>
<p>Índice de precios de la biomasa al consumidor (IPB) para usos térmicos:</p>
<table class="tbl"><thead><tr><th>Producto</th><th>2021</th><th>2022</th><th>2023</th><th>2025</th></tr></thead><tbody>
<tr><td>Pellet, saco de 15 kg (€/saco)</td><td>4,34</td><td><b>6,53</b> (+50,5 %)</td><td>6,21</td><td>5,15</td></tr>
<tr><td>Pellet a granel en cisterna (€/t)</td><td>263,60</td><td><b>417,51</b></td><td>383,07</td><td>335,36</td></tr>
<tr><td>Astilla a granel P31,5-P45 (€/t)</td><td>114,45</td><td>128,46</td><td>129,97</td><td>146,41</td></tr>
<tr><td>Hueso de aceituna a granel en cisterna (€/t)</td><td>166,85</td><td>258,05</td><td><b>401,17</b></td><td>227,05</td></tr></tbody></table>
<p>El pellet tuvo su pico en <b>2022</b> y el hueso de aceituna en <b>2023</b>; después bajaron. La <b>astilla</b> es la más barata (≈ 3,3 c€/kWh en 2025) y sube de forma sostenida (IPB acumulado +37,37 % desde 2014). En c€/kWh, el pellet a granel ronda 7 c€/kWh (2025).</p>
<h4>Comparación con otros combustibles (IDAE)</h4>
<p>Informe de precios energéticos (julio 2026), con impuestos: gasolina 95 1,518 €/l (17,01 c€/kWh); gasóleo A 1,535 €/l (15,45 c€/kWh); <b>gasóleo C 1,078 €/l (10,04 c€/kWh)</b>; propano en bombona de 35 kg 78,80 € (17,97 c€/kWh). Se publican también las tarifas TUR de gas natural.</p>
<h4>Fabricantes en España</h4>
<p>El Mapa de los Biocombustibles Sólidos 2025 (AVEBIOM, octubre de 2025) recoge <b>65 fábricas de pellet</b>, <b>64 de astilla</b> y <b>30 de hueso de aceituna</b>.</p>
<h4>Norma ENplus para pellets de madera</h4>
<table class="tbl"><thead><tr><th>Propiedad</th><th>ENplus A1</th><th>ENplus A2</th><th>ENplus B</th></tr></thead><tbody>
<tr><td>Diámetro / longitud (mm)</td><td colspan="3">6 ± 1 u 8 ± 1 / 3,15 &lt; L ≤ 40</td></tr>
<tr><td>Humedad (% tal cual)</td><td colspan="3">≤ 10</td></tr>
<tr><td>Cenizas (% s.s.)</td><td>≤ 0,7</td><td>≤ 1,2</td><td>≤ 2,0</td></tr>
<tr><td>Durabilidad mecánica (%)</td><td>≥ 98,0</td><td colspan="2">≥ 97,5</td></tr>
<tr><td>PCI (tal cual)</td><td colspan="3">≥ 4,6 kWh/kg (≥ 16,5 MJ/kg)</td></tr>
<tr><td>Densidad aparente (kg/m³)</td><td colspan="3">600 ≤ BD ≤ 750</td></tr>
<tr><td>Nitrógeno (% s.s.)</td><td>≤ 0,3</td><td>≤ 0,5</td><td>≤ 1,0</td></tr>
<tr><td>Cloro (% s.s.)</td><td colspan="2">≤ 0,02</td><td>≤ 0,03</td></tr>
<tr><td>T.ª de deformación de cenizas (ºC)</td><td>≥ 1200</td><td colspan="2">≥ 1100</td></tr></tbody></table>
<h4>Otros recursos: biometano en Europa</h4>
<p>European Biomethane Map 2026 (EBA): <b>8,2 bcm/año</b> de capacidad de biometano en Europa (final del 2º trimestre de 2026), +1 bcm en un año (+17 %), <b>1.975 plantas</b> en operación (desde 1.678), 327 nuevas, tamaño medio 472 Nm³/h y 36.000 M€ de inversión.</p>
` },
    { id: "b1-mundo", title: "5. La biomasa en el mundo (IEA, WEO 2022)", slides: ["B1", 23, 32], html: `
<p>Escenarios de la IEA: <b>STEPS</b> (políticas declaradas), <b>APS</b> (compromisos anunciados) y <b>NZE</b> (cero emisiones netas en 2050).</p>
<h4>Demanda mundial de energía primaria</h4>
<p>Suministro total en 2021: <b>624 EJ</b> (renovables 74 EJ). Bioenergía moderna sólida 36 EJ y <b>uso tradicional de la biomasa 24 EJ</b> en 2021. En STEPS el uso tradicional baja a 20 EJ en 2030 y 18 EJ en 2050 (−2,3 %/año hasta 2030), mientras la bioenergía sólida moderna sube a 46 EJ (2030) y 62 EJ (2050).</p>
<p>Mensaje clave: <b>la biomasa presenta tasas positivas de crecimiento en todos los escenarios, salvo los usos tradicionales</b>. Se esperan fuertes decrecimientos de todas las fuentes salvo las renovables.</p>
<h4>Bioenergía en el escenario NZE</h4>
<p>La producción de hidrógeno se multiplica casi por cinco hasta 2050, pero el suministro de bioenergía moderna, <b>limitado por el potencial sostenible</b>, aumenta unas <b>2,5 veces</b>. En el NZE no aumenta el uso de tierras de cultivo para bioenergía ni se desarrollan cultivos energéticos en terreno forestal; crecen los cultivos leñosos de corta rotación y los flujos de residuos orgánicos.</p>
<h4>Demanda de bioenergía sólida</h4>
<table class="tbl"><thead><tr><th>Escenario</th><th>2021</th><th>2030</th><th>2050</th></tr></thead><tbody>
<tr><td>STEPS</td><td rowspan="3">60 EJ</td><td>66 EJ</td><td>80 EJ</td></tr>
<tr><td>APS</td><td>62 EJ</td><td>87 EJ</td></tr>
<tr><td>NZE</td><td>58 EJ</td><td>74 EJ</td></tr></tbody></table>
<p>«El uso tradicional de la biomasa deja paso a la bioenergía sólida moderna»: disminuye sustancialmente en el APS y se <b>elimina en el NZE</b>.</p>
<h4>Consumo final y generación eléctrica</h4>
<p>La electricidad es la que más crece en el consumo final (en el NZE aporta más de la mitad del consumo final en 2050). En generación eléctrica (STEPS), la bioenergía produjo <b>746 TWh</b> en 2021 (≈ 3 % de 28.334 TWh) con 173 GW, y llegaría a 1.851 TWh en 2050. «La biomasa también jugará un papel en la generación eléctrica, contribuyendo a los descensos necesarios de emisiones».</p>
` },
    { id: "b1-espana", title: "6. La biomasa en España y el PNIEC 2023-2030", slides: ["B1", 33, 46], html: `
<h4>Estructura energética de España (Balance 2023)</h4>
<p>Energía primaria <b>114.453 ktep</b> (−3,2 %): productos petrolíferos 45,8 %, gas natural 21,9 %, <b>renovables 17,5 %</b>, nuclear 12,9 %, carbón 2,5 %. Energía final 86.317 ktep (usos energéticos 81.291 ktep). Producción eléctrica 284.543 GWh, con <b>50,2 % renovable</b>. Intensidad energética primaria 94,1 tep/M€.</p>
<h4>Papel de la biomasa en la energía primaria y final</h4>
<p>La biomasa supone <b>≈ 30 % del consumo de energía primaria renovable</b> y ≈ 40 % incluyendo biogases, RSU renovables y biocombustibles. En 2022 (ktep): biomasa 5.298, biocombustibles 1.364, biogases 333, RSU renovables 284.</p>
<p>Las renovables aportan en 2022 el <b>7 % de la energía final</b> de forma directa (la biomasa ≈ 90-92 % de ello); como suponen ya más del 50 % de la generación eléctrica, la contribución total ronda el <b>19-20 %</b>.</p>
<p>Energía final térmica renovable: biomasa y carbón vegetal 91 %, solar térmica 7,3 %, biogás 1,2 %. Por tipo de biomasa: <b>residuos forestales 82 %</b>, residuos agrícolas 9 %, otros 5 %, pellets 3 %, lejías negras 1 %. En la generación eléctrica renovable de 2023, la biomasa-biolíquidos aporta 2,8 %, el biogás 0,7 % y los RSU renovables 0,6 %.</p>
<h4>Capacidad instalada de biomasa y residuos</h4>
<p>Biomasa = biomasa sólida + biogás + residuos renovables + cogeneración con biomasa. En 2019: <b>857 MW de biomasa</b> y <b>588 MW de residuos</b> (total 1.446 MW, casi 1,5 GW, ≈ 4 % de la capacidad renovable), +9 % respecto a 2014 (1.332 MW), generando ≈ <b>5,3 TWh</b> (5.302 GWh), ≈ 5 % de la generación renovable.</p>
<h4>PNIEC 2023-2030 (aprobado en septiembre de 2024)</h4>
<table class="tbl"><thead><tr><th>Objetivo 2030</th><th>PNIEC 2020</th><th>PNIEC 2023</th></tr></thead><tbody>
<tr><td>Reducción de GEI respecto a 1990</td><td>23 %</td><td><b>32 %</b></td></tr>
<tr><td>Renovables en generación eléctrica</td><td>74 %</td><td><b>81 %</b></td></tr>
<tr><td>Renovables sobre energía final</td><td>42 %</td><td><b>48 %</b></td></tr>
<tr><td>Eficiencia (reducción de energía final)</td><td>−41,7 %</td><td><b>−43 %</b></td></tr>
<tr><td>Dependencia energética</td><td>61 %</td><td><b>50 %</b></td></tr>
<tr><td>Renovables en el transporte</td><td>15 %</td><td>28 %</td></tr>
<tr><td>Biogás</td><td>10,4 TWh</td><td><b>20 TWh</b></td></tr></tbody></table>
<p>Además: electrificación del <b>35 %</b> de la economía, 12 GW de electrolizadores, 22,5 GW de almacenamiento; neutralidad climática en 2050 (reducción de al menos el 90 % de GEI, sistema eléctrico 100 % renovable). «En 2030 se tiene que mitigar 1 de cada 2 toneladas de GEI emitidas en 2005». Los usos de la biomasa aparecen en muchas prioridades sectoriales y medidas (biogás y biometano, biocarburantes avanzados, redes de calor, suministros forestales y agrícolas…), con papel creciente del biogás.</p>
<h4>Escenario PNIEC: potencia y generación con biomasa</h4>
<p>Potencia bruta: biomasa 413 MW (2019) → <b>1.409 MW</b> (2030); biogás 203 → 440 MW. Generación: biomasa 3.009 → 8.029 GWh; biogás 699 → 2.640 GWh. Renovables en calor y frío: 17 % (2019) → 37 % (2030); en transporte: 8 % → 28 %. Renovables sobre energía final 2030: 47,86 %.</p>
<h4>Recurso disponible y residuos municipales</h4>
<p>España es el <b>tercer país de la UE en recursos biomásicos aprovechables</b> (171,9 TWh), por detrás de Francia (239,2) y Alemania (215,0), y tercero por millón de habitantes, tras Finlandia y Suecia. El potencial aprovechado pasaría del 2,0 % (2019) al 5,8 % (2030). La dependencia energética bajaría del 73 % (2019) al 50 % (2030). Residuos municipales 2020 (Eurostat): España genera 455 kg/hab, de los que 236 kg van a vertedero y solo 53 kg a recuperación energética (media UE-27: 517 kg/hab, 122 a vertedero, 134 a recuperación energética).</p>
` },
    { id: "b1-sostenibilidad", title: "7. Alternativas técnicas y sostenibilidad", slides: ["B1", 47, 52], html: `
<h4>Alternativas técnicas de aprovechamiento energético</h4>
<table class="tbl cmp"><thead><tr><th>Energía final</th><th>Tecnología (energía primaria: biomasa y residuos)</th></tr></thead><tbody>
<tr><td>Electricidad</td><td>Combustión, gasificación y pirólisis; metanización</td></tr>
<tr><td>Transporte</td><td>Obtención de bioetanol; obtención de biodiésel</td></tr>
<tr><td>Térmica</td><td>Combustión</td></tr></tbody></table>
<p>La misma tabla incluye las demás renovables: solar fotovoltaica y térmica, eólica, geotérmica (agua y vapor subterráneos), marina (agua de mar) e hidráulica (agua de ríos).</p>
<h4>Los tres pilares de la sostenibilidad</h4>
<p>Social, ambiental y económico. Sostenibilidad = asumir que la naturaleza no es una fuente inagotable de recursos ni un receptor infinito de residuos; conseguir un entorno social con niveles satisfactorios de calidad de vida, sanidad y educación; promover un crecimiento económico que genere riqueza equitativa sin dañar el medio ambiente.</p>
<h4>Sostenibilidad de la biomasa</h4>
<ul><li>Protección de ecosistemas con gran biodiversidad y del <b>carbono almacenado</b> (bosques).</li>
<li>Deforestación y degradación de bosques → pérdida de carbono terrestre: emisiones <b>LULUCF</b> (UTCUTS: uso de la tierra, cambio de uso de la tierra y silvicultura).</li>
<li>La reducción de GEI al sustituir fósiles es una de las principales razones para fomentar la bioenergía: <b>análisis de ciclo de vida (ACV)</b>.</li>
<li>Mejora del rendimiento energético: <b>rendimientos 10-90 %</b>.</li></ul>
<p><b>Criterios de sostenibilidad de biocarburantes</b> (Circular 1/2019 de la CNMC, art. 4 del RD 1597/2011): reducción de GEI (apdo. 1), usos de la tierra (apdos. 2, 3 y 4) y buenas condiciones agrarias y medioambientales (apdo. 5).</p>
<h4>Aspectos socioeconómicos</h4>
<p>Valor de las biomasas en España (2017): VAB 2.732 M€, <b>32.945 empleos</b>, recaudación fiscal 1.101 M€; ahorro medioambiental total 484 M€ (334 M€ en CO<sub>2</sub>, 150 M€ en prevención y extinción de incendios). El PNIEC considera pobreza energética, igualdad de género, población rural, empleo (560.000 personas en 2030), salud (muertes prematuras de 11.952 en 2019 a 6.095 en 2030), renta disponible…</p>
<table class="tbl cmp"><thead><tr><th>Contribuyen a la sostenibilidad</th><th>No contribuyen</th></tr></thead><tbody>
<tr><td>Menor dependencia de fósiles y de importaciones; utilización localizada; valorización de residuos; empleo; mantenimiento de pequeños núcleos de población; reducción de incendios forestales; I+D+i</td><td>Transporte de biomasa y residuos; ocupación del suelo (cultivos no alimentarios e instalaciones); biodiversidad; líneas eléctricas; emisiones atmosféricas; efluentes líquidos; residuos del aprovechamiento energético</td></tr></tbody></table>
` }
  ],
  confusions: [
    ["<b>Biolíquido</b> vs <b>biocarburante</b>", "Ambos son líquidos y de biomasa. El biocarburante es para <b>transporte</b>; el biolíquido para <b>otros usos</b> (electricidad, calor y frío)."],
    ["<b>Biocarburante</b> vs <b>biocarburante avanzado</b>", "El avanzado se produce con materias primas del <b>anexo IX, parte A</b> (algas, biorresiduos, residuos no aptos para la cadena alimentaria…) y puede contar <b>dos veces</b> su contenido energético."],
    ["<b>Combustibles de biomasa</b> vs <b>biogás</b>", "«Combustibles de biomasa» son los <b>gaseosos o sólidos</b>; el biogás es solo el gaseoso."],
    ["<b>Análisis próximo</b> vs <b>análisis elemental (último)</b>", "Próximo: humedad, materia volátil, carbono fijo, cenizas y PC. Elemental: C, H, O, N, S y cenizas."],
    ["<b>Base húmeda</b> vs <b>base seca</b>", "La humedad y la materia seca se expresan respecto a la masa <b>total</b>; los componentes orgánicos e inorgánicos, respecto a la materia <b>seca</b>."],
    ["<b>PCS</b> vs <b>PCI</b>", "El PCS (GCV, HHV) incluye el calor de condensación del agua; el PCI (NCV, LHV) lo descuenta, tanto de la humedad como del agua formada por el H. Siempre PCI &lt; PCS."],
    ["<b>Monte bajo</b> vs <b>monte alto</b>", "Bajo: reproducción <b>vegetativa</b> (brotes de cepa o raíz). Alto: reproducción <b>sexual</b> (semilla)."],
    ["<b>Turno de chopo/eucalipto</b> vs <b>turno de Quercus</b>", "Chopo y eucalipto: 3-5 años. Quercus: 15-18 años (turno corto a medio) y productividad muy baja (2,9-3,0 t MS/ha·año)."],
    ["<b>Biomasa ≈ 30 %</b> vs <b>≈ 40 %</b> de la primaria renovable", "≈ 30 % solo la biomasa (sólida); ≈ 40 % si se añaden biogases, RSU renovables y biocombustibles."],
    ["<b>857 MW</b> vs <b>588 MW</b> (2019)", "857 MW es la biomasa y 588 MW los residuos; juntos ≈ 1,5 GW (1.446 MW)."]
  ]
};

L("B1", "b1-definiciones", "Biomasa", 1, "Según la Directiva 2018/2001, la biomasa es…",
  ["la fracción biodegradable de productos, residuos y desechos de origen biológico, incluida la fracción biodegradable de los residuos industriales y municipales",
   "la totalidad de los productos, residuos y desechos de origen biológico, incluidos los residuos industriales y municipales, sea cual sea su fracción biodegradable",
   "la fracción biodegradable de productos y desechos agrarios y forestales, excluidos expresamente los residuos industriales y municipales",
   "la materia orgánica de origen vegetal producida en cultivos energéticos con el único objetivo de obtener energía"],
  0, "La definición incluye solo la fracción biodegradable, pero sí abarca los residuos industriales y municipales de origen biológico. Los cultivos energéticos son solo una de las fuentes.", "Apuntes B1, diap. 3");
L("B1", "b1-definiciones", "Biolíquido y biocarburante", 2, "Un combustible líquido producido a partir de biomasa y destinado a producir electricidad y calor en una planta de cogeneración es, según la Directiva 2018/2001, un…",
  ["biolíquido", "biocarburante", "biocarburante avanzado", "combustible de biomasa"],
  0, "Biolíquido = líquido para usos energéticos distintos del transporte. Biocarburante = para transporte. «Combustibles de biomasa» son solo los gaseosos o sólidos.", "Apuntes B1, diap. 4");
L("B1", "b1-definiciones", "Biocarburante avanzado", 3, "¿Qué afirmación sobre los biocarburantes avanzados es correcta según los apuntes?",
  ["Se producen con materias primas del anexo IX, parte A, y su contribución a las cuotas mínimas puede considerarse dos veces su contenido energético",
   "Se producen con materias primas del anexo IX, parte B, y su contribución a las cuotas mínimas puede considerarse dos veces su contenido energético",
   "Se producen con materias primas del anexo IX, parte A, y su contribución a las cuotas mínimas se limita a un máximo del 1,7 %",
   "Se producen a partir de cultivos alimentarios y forrajeros, y su contribución a las cuotas mínimas se cuenta dos veces"],
  0, "Anexo IX parte A (algas, biorresiduos, fracción biomasa de residuos municipales mezclados…) con doble cómputo. El límite del 1,7 % corresponde a las materias del anexo IX parte B (tabla del PNIEC).", "Apuntes B1, diap. 4");
L("B1", "b1-definiciones", "Combustibles de biomasa", 2, "Según la Directiva 2018/2001, los «combustibles de biomasa» son…",
  ["combustibles gaseosos o sólidos producidos a partir de biomasa",
   "combustibles líquidos o gaseosos producidos a partir de biomasa",
   "combustibles sólidos, líquidos o gaseosos producidos a partir de biomasa",
   "combustibles sólidos producidos a partir de biomasa agrícola o forestal"],
  0, "La Directiva separa los líquidos (biolíquidos y biocarburantes) de los «combustibles de biomasa», que son gaseosos o sólidos.", "Apuntes B1, diap. 4");
L("B1", "b1-definiciones", "Jerarquía de residuos", 2, "En la jerarquía europea de residuos, la metanización de la materia orgánica para producir biogás se encuadra en…",
  ["el reciclado", "otro tipo de valorización (valorización energética)", "la preparación para la reutilización", "la eliminación"],
  0, "Los apuntes la incluyen en el reciclado («incluye la transformación de MO → metanización → biogás»). El gas de vertedero, en cambio, pertenece a la eliminación.", "Apuntes B1, diap. 5");
L("B1", "b1-definiciones", "Jerarquía de residuos", 3, "Ordene correctamente, de mayor a menor prioridad, la jerarquía europea de residuos:",
  ["Prevención, preparación para la reutilización, reciclado, otro tipo de valorización, eliminación",
   "Prevención, reciclado, preparación para la reutilización, otro tipo de valorización, eliminación",
   "Preparación para la reutilización, prevención, reciclado, otro tipo de valorización, eliminación",
   "Prevención, preparación para la reutilización, otro tipo de valorización, reciclado, eliminación"],
  0, "El orden es prevención → preparación para la reutilización → reciclado → otra valorización (p. ej. energética) → eliminación.", "Apuntes B1, diap. 5");
L("B1", "b1-definiciones", "LER", 2, "Sobre la Lista europea de Residuos (Decisión 2014/955/UE), señale la correcta:",
  ["Tiene 20 capítulos y en cada uno se marcan con asterisco los residuos peligrosos; los residuos municipales son el capítulo 20",
   "Tiene 20 capítulos y en cada uno se marcan con asterisco los residuos no peligrosos; los residuos municipales son el capítulo 20",
   "Tiene 19 capítulos y en cada uno se marcan con asterisco los residuos peligrosos; los residuos municipales son el capítulo 19",
   "Tiene 20 capítulos y los residuos peligrosos se agrupan todos en un capítulo específico, el 16"],
  0, "20 categorías, peligrosos con asterisco en cada una; el capítulo 20 es residuos municipales (el 19, instalaciones de tratamiento de residuos y aguas).", "Apuntes B1, diap. 5-7");
L("B1", "b1-definiciones", "LER", 3, "¿Cuál de los siguientes residuos aparece en los apuntes SIN asterisco en la LER (es decir, no peligroso)?",
  ["19 08 05 Lodos del tratamiento de aguas residuales urbanas", "160601 Baterías de plomo", "200121 Tubos fluorescentes y otros residuos que contienen mercurio", "190702 Lixiviados de vertedero que contienen sustancias peligrosas"],
  0, "Los lodos de EDAR urbana (19 08 05) no llevan asterisco; los otros tres figuran como 160601*, 200121* y 190702*.", "Apuntes B1, diap. 7");
L("B1", "b1-definiciones", "CSR", 3, "Según la UNE 15358:2011, un combustible sólido recuperado de clase 3 debe tener…",
  ["PCI medio ≥ 15 MJ/kg (tal cual) y cloro medio ≤ 1,0 % (base seca)",
   "PCI medio ≥ 20 MJ/kg (tal cual) y cloro medio ≤ 0,6 % (base seca)",
   "PCI medio ≥ 15 MJ/kg (base seca) y cloro medio ≤ 1,5 % (tal cual)",
   "PCI medio ≥ 10 MJ/kg (tal cual) y cloro medio ≤ 1,0 % (base seca)"],
  0, "Clases 1-5: PCI ≥ 25/20/15/10/3 MJ/kg (ar) y Cl ≤ 0,2/0,6/1,0/1,5/3 % (d). Clase 3: ≥ 15 MJ/kg y ≤ 1,0 %.", "Apuntes B1, diap. 8");
L("B1", "b1-definiciones", "CSR", 2, "En la cadena de producción de combustibles sólidos recuperados de la diapositiva, ¿qué etapa utiliza un aporte de calor antes de la separación neumática/balística?",
  ["El biosecado", "El tratamiento biológico de compostaje", "La peletización", "El pretratamiento por selección mecánica"],
  0, "El esquema muestra triturador → separador de metales → biosecado (con aporte de calor) → separador neumático/balístico → materiales ligeros a prensa/peletizadora.", "Apuntes B1, diap. 8");

L("B1", "b1-composicion", "Análisis próximo y elemental", 1, "¿Qué determinaciones componen el análisis próximo de una biomasa?",
  ["Humedad, materia volátil, carbono fijo, cenizas y poder calorífico",
   "Carbono, hidrógeno, oxígeno, nitrógeno, azufre y cenizas",
   "Celulosa, hemicelulosa, lignina, azúcares y almidón",
   "Humedad, carbono, hidrógeno, cenizas y poder calorífico"],
  0, "El análisis próximo da humedad, materia orgánica (volátil), carbono fijo, cenizas y PC; el elemental (último) da C, H, O, N, S y cenizas.", "Apuntes B1, diap. 9");
L("B1", "b1-composicion", "Bases de expresión", 2, "Según los apuntes, ¿cómo se expresan la humedad y los componentes orgánicos e inorgánicos de una biomasa?",
  ["La humedad respecto a la materia total (base húmeda) y los componentes respecto a la materia seca",
   "La humedad respecto a la materia seca y los componentes respecto a la materia total (base húmeda)",
   "Ambos respecto a la materia total (base húmeda)",
   "Ambos respecto a la materia seca"],
  0, "Humedad y materia seca: % en masa respecto a la materia total. Componentes orgánicos e inorgánicos: % respecto a la materia seca.", "Apuntes B1, diap. 9");
L("B1", "b1-composicion", "Poder calorífico superior", 2, "Sobre el PCS de la biomasa, ¿cuál es la afirmación correcta?",
  ["Se mide con una bomba calorimétrica y se han publicado más de 20 expresiones para estimarlo",
   "Se mide con una bomba calorimétrica y la única expresión aceptada para estimarlo es la de Dulong",
   "No puede medirse experimentalmente y se estima siempre con la aproximación de van Loo y Koppejan",
   "Se mide con un analizador elemental y la norma UNE-EN 14918 fija la fórmula de la EPA"],
  0, "Diapositiva 10: más de 20 expresiones; medida con bomba calorimétrica (UNE-EN 14918:2011). Van Loo y Koppejan es una aproximación del PCI.", "Apuntes B1, diap. 10");
L("B1", "b1-composicion", "Dulong", 3, "Aplicando la aproximación de Dulong a la paja del análisis último de los apuntes (C 40,7 %; H 7,0 %; O 50,5 %; N 1,6 %; S 0,2 %), el PCS resulta aproximadamente…",
  ["3.527 kcal/kg", "5.667 kcal/kg", "3.294 kcal/kg", "4.073 kcal/kg"],
  0, "Datos: análisis último de la paja (Apuntes B1, diap. 10): C = 40,7; H = 7,0; O = 50,5; N = 1,6; S = 0,2 (% en masa). Se aplica la aproximación de Dulong, que da el PCS en kcal/kg con los porcentajes en masa: $$PCS=80{,}6\\,C+339{,}1\\left(H-\\frac{O}{8}\\right)$$ $$+22{,}22\\,S+5{,}56\\,N$$ Sustitución término a término: $$80{,}6\\cdot40{,}7=3280{,}4$$ $$339{,}1\\left(7{,}0-\\frac{50{,}5}{8}\\right)=339{,}1\\cdot0{,}6875$$ $$=233{,}1$$ $$22{,}22\\cdot0{,}2=4{,}4$$ $$5{,}56\\cdot1{,}6=8{,}9$$ $$PCS=3280{,}4+233{,}1+4{,}4+8{,}9$$ $$\\approx\\boxed{3527\\ \\text{kcal/kg}}$$ Distractores: olvidar restar O/8 da 3280,4 + 339,1·7,0 + … ≈ 5.667 kcal/kg; omitir el término del hidrógeno da ≈ 3.294 kcal/kg; 4.073 kcal/kg es el PCS de la materia seca del problema 1.", "Apuntes B1, diap. 10-11");
L("B1", "b1-composicion", "Dulong", 3, "En la fórmula de Dulong, el término 339,1·(H − O/8) refleja que…",
  ["parte del hidrógeno se considera ya combinado con el oxígeno del combustible y no aporta calor",
   "el oxígeno del combustible aporta calor adicional al oxidarse con el hidrógeno",
   "el agua de la humedad debe evaporarse, por lo que se resta del PCS",
   "el hidrógeno solo aporta calor si se forma agua en estado vapor"],
  0, "Se resta O/8 porque 1 kg de O se combina con 1/8 kg de H para formar agua; ese H ya está «oxidado». La corrección por evaporación de agua es la que pasa del PCS al PCI.", "Apuntes B1, diap. 10");
L("B1", "b1-composicion", "PCI", 3, "Con la aproximación de van Loo y Koppejan, ¿cuál es el PCI de una biomasa con PCS = 20 MJ/kg m.s., humedad w = 20 % y H = 6 % (m.s.)?",
  ["≈ 14,5 MJ/kg m.h.", "≈ 16,0 MJ/kg m.h.", "≈ 15,5 MJ/kg m.h.", "≈ 18,7 MJ/kg m.h."],
  0, "Datos: PCS = 20 MJ/kg m.s., w = 20 % y H = 6 % (m.s.). La aproximación de van Loo y Koppejan (Apuntes B1, diap. 11) descuenta del PCS de la parte seca el calor de vaporización (2,444 MJ/kg) de la humedad y del agua que forma el hidrógeno (8,936 kg de agua por kg de H): $$PCI=PCS\\left(1-\\tfrac{w}{100}\\right)-2{,}444\\,\\tfrac{w}{100}$$ $$-2{,}444\\,\\tfrac{H}{100}\\,8{,}936\\left(1-\\tfrac{w}{100}\\right)$$ $$PCI=20\\cdot0{,}8-2{,}444\\cdot0{,}2$$ $$-2{,}444\\cdot0{,}06\\cdot8{,}936\\cdot0{,}8$$ $$PCI=16-0{,}489-1{,}048$$ $$\\approx\\boxed{14{,}5\\ \\text{MJ/kg m.h.}}$$ Distractores: 16,0 solo corrige por la masa seca; 15,5 olvida el agua formada por el hidrógeno; 18,7 olvida la humedad (20 − 1,31, en base seca).", "Apuntes B1, diap. 10");
L("B1", "b1-composicion", "PCI", 2, "En la aproximación EPA del PCI, el valor 1050 Btu/lb corresponde a…",
  ["el calor de vaporización del agua a 25 ºC", "el PCS medio de la biomasa seca", "el calor de combustión del hidrógeno", "el calor de vaporización del agua a 100 ºC"],
  0, "La aproximación de la EPA (Apuntes B1, diap. 11) da el PCI en Btu/lb restando al PCS el calor de vaporización del agua de humedad y del agua formada por el hidrógeno (9 kg de agua por kg de H, descontando el H ligado al cloro y al flúor): $$PCI=PCS-1050\\left[H_2O+9\\left(H-\\frac{Cl}{35}-\\frac{F}{19}\\right)\\right]$$ El coeficiente 1050 Btu/lb es el calor de vaporización del agua a 25 ºC (no a 100 ºC).", "Apuntes B1, diap. 10");
L("B1", "b1-composicion", "Valores típicos", 2, "Según la tabla de análisis próximo de los apuntes, ¿qué material tiene el mayor contenido en cenizas (% sobre masa seca)?",
  ["Paja (6,1 %)", "Trigo (2,8 %)", "Cáscara de almendra (2,2 %)", "Madera de pino (0,6 %)"],
  0, "Cenizas: pino 0,6; cáscara de almendra 2,2; trigo 2,8; paja 6,1 %.", "Apuntes B1, diap. 11");
L("B1", "b1-composicion", "Valores típicos", 3, "Según la tabla de CIEMAT, ¿cómo varía el PCI de las leñas y ramas de coníferas al pasar del 20 % al 40 % de humedad?",
  ["Pasa de 3.590 a 2.550 kcal/kg", "Pasa de 3.790 a 2.760 kcal/kg", "Pasa de 3.310 a 2.340 kcal/kg", "Pasa de 3.650 a 2.650 kcal/kg"],
  0, "Leñas de coníferas: 3.590 (20 %) → 2.550 (40 %). 3.790/2.760 son serrines de coníferas (15/35 %); 3.310/2.340 leñas de frondosas; 3.650/2.650 cortezas de coníferas.", "Apuntes B1, diap. 11");
L("B1", "b1-composicion", "Valores típicos", 2, "En el análisis último de los apuntes, el lodo seco de depuradora se distingue de la paja y de la cáscara de arroz por…",
  ["un contenido en cenizas muy alto (38,5 %) y presencia de N y S apreciables",
   "un contenido en carbono mayor que el de la paja (45,7 %)",
   "un contenido en oxígeno superior al 50 %",
   "ser el único material con cloro en su composición"],
  0, "Lodo seco: C 28,7; H 4,8; O 22,5; N 4,0; S 1,5; cenizas 38,5 %. El 45,7 % de C es la cáscara de arroz, que es la que tiene cloro (0,1 %); la paja tiene 50,5 % de O.", "Apuntes B1, diap. 11");

L("B1", "b1-cultivos", "Clasificación", 1, "Los cultivos alcoholígenos se destinan a…",
  ["la producción de bioetanol por fermentación de azúcares", "la producción de aceites transformables en biodiésel", "la generación de biomasa sólida para usos térmicos", "la obtención de biocarburantes de segunda generación"],
  0, "Oleaginosos → biodiésel; alcoholígenos → bioetanol; lignocelulósicos → biomasa sólida (térmica, pelets, cogeneración, biocarburantes de 2ª generación).", "Apuntes B1, diap. 12");
L("B1", "b1-cultivos", "Clasificación", 2, "¿Cuál de los siguientes usos NO aparece en los apuntes como aplicación de los cultivos lignocelulósicos?",
  ["Producción de aceites transformables en biodiésel", "Fabricación de astillas o pelets", "Cogeneración industrial o generación eléctrica simple", "Obtención de biocarburantes de segunda generación"],
  0, "Los aceites para biodiésel provienen de los cultivos oleaginosos. Los lignocelulósicos sirven para usos térmicos, astillas/pelets, cogeneración/electricidad y biocarburantes de 2ª generación.", "Apuntes B1, diap. 12");
L("B1", "b1-cultivos", "Monte bajo y monte alto", 2, "El monte bajo se caracteriza por…",
  ["una reproducción vegetativa por brotes de cepa, de raíz o de ambos, limitada a especies capaces de rebrotar",
   "una reproducción sexual a partir de semilla, orientada tradicionalmente a labores protectoras",
   "una reproducción vegetativa por semilla, aplicable a cualquier especie forestal",
   "plantaciones de corta rotación de eucalipto y chopo con turnos de 3-5 años"],
  0, "Monte bajo: brotes de cepa o raíz (encina, quejigo, rebollo, castaño). Monte alto: reproducción sexual (semilla).", "Apuntes B1, diap. 13");
L("B1", "b1-cultivos", "Corta rotación", 2, "¿Qué turno de corta indican los apuntes para el chopo y el Quercus en cultivos de corta rotación, respectivamente?",
  ["3-5 años y 15-18 años", "15-18 años y 3-5 años", "3-5 años y 8-10 años", "1-2 años y 15-18 años"],
  0, "Chopo (y eucalipto): 3-5 años; Quercus: turno corto a medio de 15-18 años.", "Apuntes B1, diap. 14-15");
L("B1", "b1-cultivos", "Corta rotación", 3, "¿Cuál de las siguientes afirmaciones sobre los cultivos forestales de corta rotación es FALSA?",
  ["El Quercus es la especie de mayor productividad, por eso se planta en el interior de España",
   "El chopo tiene un PCI de 4.100 kcal/kg MS y una productividad de 8-20 t MS/ha·año",
   "El eucalipto requiere zonas de escasa altitud y sin inviernos fríos",
   "La madera de chopo secada al aire tiene un 25 % de humedad"],
  0, "El Quercus tiene la productividad más baja (2,9-3,0 t MS/ha·año); se usa en el interior porque la falta de agua y el frío impiden plantar chopo y eucalipto. El resto es literal de los apuntes.", "Apuntes B1, diap. 14-15");
L("B1", "b1-cultivos", "Eucalipto", 3, "¿Qué especie de eucalipto destacan los apuntes como más resistente a las heladas, con límites de altitud de 600-1.200 m?",
  ["E. nitens", "E. globulus", "E. camaldulensis", "Ninguna de las otras opciones"],
  0, "E. nitens: heladas, 600-1.200 m. E. globulus: 0-350 m, Galicia y Cornisa cantábrica. E. camaldulensis: 0-600 m, resistente a la sequía.", "Apuntes B1, diap. 15");
L("B1", "b1-cultivos", "Cultivos agrícolas", 2, "¿Qué cultivo agrícola de los apuntes se destina a producir bioetanol a partir de los azúcares del tallo?",
  ["Sorgo (Sorghum bicolor)", "Cardo (Cynara cardunculus)", "Caña (Arundo donax)", "Mostaza etíope (Brassica carinata)"],
  0, "Sorgo: bioetanol (azúcares del tallo). Cardo y mostaza etíope: biodiésel a partir del grano. Caña: biocombustibles de 2ª generación.", "Apuntes B1, diap. 16-17");
L("B1", "b1-cultivos", "Cultivos agrícolas", 3, "Según los apuntes, ¿qué cultivo energético alcanza el mayor límite inferior de productividad, con 25-35 t MS/ha·año?",
  ["Miscanto", "Caña (Arundo donax)", "Sorgo", "Eucalipto"],
  0, "Miscanto: 25-35 t MS/ha·año. Caña: 10-35; sorgo: 12-28; eucalipto: 6-25.", "Apuntes B1, diap. 14-17");
L("B1", "b1-cultivos", "Cálculo de energía", 3, "Una chopera energética produce 10 t MS/ha·año con el PCI de los apuntes. ¿Cuánta energía (PCI) produce por hectárea y año?",
  ["4,1·10⁷ kcal", "4,1·10⁶ kcal", "4,3·10⁷ kcal", "4,1·10⁴ kcal"],
  0, "Datos: productividad 10 t MS/ha·año y PCI del chopo de la tabla de cultivos forestales (Apuntes B1): 4.100 kcal/kg MS. La energía anual es masa × PCI, con la masa en kg: $$E=10\\ \\text{t}\\cdot1000\\ \\tfrac{\\text{kg}}{\\text{t}}\\cdot4100\\ \\tfrac{\\text{kcal}}{\\text{kg}}$$ $$=4{,}1\\cdot10^{7}\\ \\text{kcal}$$ $$\\boxed{E=4{,}1\\cdot10^{7}\\ \\text{kcal/ha·año}}$$ Distractores: 4,1·10⁶ y 4,1·10⁴ son errores de potencias de 10 al pasar de toneladas a kilogramos; 4,3·10⁷ usaría el PCI del eucalipto (4.300 kcal/kg).", "Apuntes B1, diap. 14");
L("B1", "b1-cultivos", "Mostaza etíope", 1, "Según los apuntes, ¿qué ventaja agronómica tiene la mostaza etíope?",
  ["Es más beneficiosa que el barbecho en la rotación y aumenta el rendimiento del cereal posterior",
   "Es la especie con mayor PCI de los cultivos agrícolas, 4.400 kcal/kg MS",
   "Puede cultivarse en monte bajo con turnos de 15-18 años",
   "Sus azúcares del tallo se fermentan directamente a bioetanol"],
  0, "Diapositiva 17. El PCI de 4.400 kcal/kg MS es el del Quercus; el bioetanol del tallo es el sorgo.", "Apuntes B1, diap. 17");

L("B1", "b1-mercado", "Precios", 2, "Según el índice de precios de AVEBIOM, ¿en qué año alcanzó su máximo el precio medio anual del pellet en saco de 15 kg?",
  ["2022", "2021", "2023", "2025"],
  0, "Saco de 15 kg: 4,34 € (2021) → 6,53 € (2022, +50,5 %) → 6,21 € (2023). El hueso de aceituna tuvo el máximo en 2023.", "Apuntes B1, diap. 18");
L("B1", "b1-mercado", "Precios", 3, "Comparando los precios de la diapositiva de AVEBIOM, ¿qué afirmación es correcta?",
  ["La astilla es el biocombustible más barato por kWh y su precio medio anual ha subido cada año entre 2021 y 2025",
   "El hueso de aceituna es el más barato por kWh y alcanzó su máximo en 2022",
   "El pellet a granel es más barato por kWh que la astilla gracias a su mayor densidad",
   "Los tres biocombustibles alcanzaron su máximo de precio en 2023 y no han bajado"],
  0, "Astilla ≈ 2,5-3,4 c€/kWh y al alza (114,45 → 146,41 €/t de 2021 a 2025); pellet ≈ 7 c€/kWh; hueso con pico en 2023 y bajada posterior.", "Apuntes B1, diap. 18");
L("B1", "b1-mercado", "ENplus", 2, "Según la norma ENplus, ¿qué contenido máximo de cenizas se admite para el pellet de clase A1?",
  ["0,7 %", "1,2 %", "2,0 %", "1,0 %"],
  0, "Cenizas: A1 ≤ 0,7 %, A2 ≤ 1,2 %, B ≤ 2,0 % (base seca). El 1,0 % es el límite de nitrógeno para la clase B.", "Apuntes B1, diap. 21");
L("B1", "b1-mercado", "ENplus", 3, "¿Qué combinación de requisitos es la que exige ENplus a todos los pellets de madera (A1, A2 y B)?",
  ["Humedad ≤ 10 % y PCI ≥ 4,6 kWh/kg", "Humedad ≤ 15 % y PCI ≥ 4,6 kWh/kg", "Humedad ≤ 10 % y PCI ≥ 16,5 kWh/kg", "Humedad ≤ 10 % y PCI ≥ 5,6 kWh/kg"],
  0, "Humedad ≤ 10 % y PCI ≥ 4,6 kWh/kg (equivalente a ≥ 16,5 MJ/kg) en tal cual. 16,5 son MJ/kg, no kWh/kg.", "Apuntes B1, diap. 21");
L("B1", "b1-mercado", "Fabricantes", 2, "Según el Mapa de Biocombustibles Sólidos 2025 de AVEBIOM, en España se inventariaron…",
  ["65 fábricas de pellet, 64 de astilla y 30 de hueso de aceituna",
   "64 fábricas de pellet, 65 de astilla y 30 de hueso de aceituna",
   "65 fábricas de pellet, 30 de astilla y 64 de hueso de aceituna",
   "86 fábricas de pellet, 64 de astilla y 30 de hueso de aceituna"],
  0, "65 de pellet, 64 de astilla y 30 de hueso de aceituna (octubre de 2025).", "Apuntes B1, diap. 20");
L("B1", "b1-mercado", "Biometano", 3, "Según el European Biomethane Map 2026 recogido en los apuntes, la capacidad de biometano en Europa a mediados de 2026 era…",
  ["8,2 bcm/año, con 1.975 plantas en operación", "1,0 bcm/año, con 327 plantas en operación", "8,2 bcm/año, con 1.678 plantas en operación", "17 bcm/año, con 1.975 plantas en operación"],
  0, "8,2 bcm/año y 1.975 plantas (desde 1.678); +1 bcm en un año (+17 %) y 327 plantas nuevas.", "Apuntes B1, diap. 22");

L("B1", "b1-mundo", "Escenarios IEA", 2, "Según el WEO 2022 de la IEA recogido en los apuntes, la biomasa…",
  ["presenta tasas de crecimiento positivas en todos los escenarios, salvo los usos tradicionales",
   "presenta tasas de crecimiento positivas solo en el escenario NZE",
   "presenta tasas negativas en todos los escenarios por la competencia con la electrificación",
   "presenta tasas positivas en todos los escenarios, incluidos los usos tradicionales"],
  0, "Mensaje literal de la diapositiva 23: crecimiento positivo en todos los escenarios salvo el uso tradicional de la biomasa.", "Apuntes B1, diap. 23");
L("B1", "b1-mundo", "Uso tradicional", 3, "En la tabla de demanda mundial de energía primaria (STEPS) de los apuntes, el uso tradicional de la biomasa en 2021 era de…",
  ["24 EJ, frente a 36 EJ de bioenergía sólida moderna", "36 EJ, frente a 24 EJ de bioenergía sólida moderna", "24 EJ, frente a 74 EJ de bioenergía sólida moderna", "60 EJ, frente a 36 EJ de bioenergía sólida moderna"],
  0, "2021: uso tradicional 24 EJ, bioenergía sólida moderna 36 EJ (renovables totales 74 EJ; demanda de bioenergía sólida total ≈ 60 EJ).", "Apuntes B1, diap. 23");
L("B1", "b1-mundo", "NZE", 3, "En el escenario NZE de la IEA, ¿cómo evoluciona el suministro de bioenergía moderna hasta 2050?",
  ["Aumenta unas dos veces y media, limitado por el potencial sostenible", "Se multiplica casi por cinco, igual que el hidrógeno", "Se mantiene constante porque se elimina el uso tradicional", "Aumenta unas dos veces y media gracias a nuevos cultivos en terreno forestal"],
  0, "La diapositiva 27: el hidrógeno se multiplica casi por cinco; la bioenergía moderna, limitada por potenciales sostenibles, × 2,5. En NZE no se desarrollan cultivos en terrenos forestales.", "Apuntes B1, diap. 27 y 31");
L("B1", "b1-mundo", "Bioenergía sólida", 3, "Según la figura de demanda de bioenergía sólida por escenario, ¿qué valor corresponde al escenario APS en 2050?",
  ["87 EJ", "80 EJ", "74 EJ", "66 EJ"],
  0, "2021: 60 EJ. STEPS 66 (2030) y 80 (2050); APS 62 y 87; NZE 58 y 74.", "Apuntes B1, diap. 31");
L("B1", "b1-mundo", "Uso tradicional", 1, "¿Qué ocurre con el uso tradicional de la biomasa en el escenario NZE?",
  ["Se elimina", "Se duplica", "Se mantiene en 24 EJ", "Disminuye ligeramente pero sigue siendo la principal forma de bioenergía"],
  0, "«Traditional use of biomass decreases substantially in the APS and is eliminated in the NZE Scenario».", "Apuntes B1, diap. 31");
L("B1", "b1-mundo", "Generación eléctrica", 2, "Según las tablas de generación eléctrica del WEO 2022 (STEPS), la bioenergía generó en 2021 en el mundo aproximadamente…",
  ["746 TWh, alrededor del 3 % del total", "1.851 TWh, alrededor del 6 % del total", "746 TWh, alrededor del 10 % del total", "173 TWh, alrededor del 1 % del total"],
  0, "Bioenergy 2021: 746 TWh de 28.334 TWh (≈ 3 %); 1.851 TWh es la proyección STEPS para 2050; 173 son GW de capacidad.", "Apuntes B1, diap. 30");

L("B1", "b1-espana", "Energía primaria", 2, "Según el Balance energético 2023, ¿qué porcentaje de la energía primaria española fue renovable?",
  ["17,5 %", "50,2 %", "15,6 %", "21,9 %"],
  0, "Primaria 2023 (114.453 ktep): renovables 17,5 %. 50,2 % es la cuota renovable de la producción eléctrica; 15,6 % la de 2022; 21,9 % el gas natural.", "Apuntes B1, diap. 33");
L("B1", "b1-espana", "Papel de la biomasa", 2, "Según los apuntes, la biomasa supone en España alrededor del ___ del consumo de energía primaria renovable, y alrededor del ___ incluyendo biogases, RSU renovables y biocombustibles.",
  ["30 % / 40 %", "40 % / 50 %", "20 % / 30 %", "50 % / 60 %"],
  0, "≈ 30 % solo la biomasa; ≈ 40 % con biogases, RSU renovables y biocombustibles.", "Apuntes B1, diap. 34");
L("B1", "b1-espana", "Energía final", 3, "Sobre la contribución de las renovables a la energía final en España en 2022, señale la correcta:",
  ["Aportan de forma directa el 7 % (la biomasa ≈ 90-92 % de ello) y, contando la electricidad renovable, en torno al 19-20 %",
   "Aportan de forma directa el 19-20 % (la biomasa ≈ 90-92 % de ello) y, contando la electricidad renovable, en torno al 30 %",
   "Aportan de forma directa el 7 % (la biomasa ≈ 30 % de ello) y, contando la electricidad renovable, en torno al 50 %",
   "Aportan de forma directa el 7,2 % y la biomasa solo representa un 40 % de esa aportación directa"],
  0, "Diapositiva 35: 7 % directo, biomasa 90-92 %; con más del 50 % de generación eléctrica renovable, total ≈ 19-20 %.", "Apuntes B1, diap. 35");
L("B1", "b1-espana", "Biomasa térmica", 2, "Según la distribución de la biomasa como energía final con fines térmicos, el tipo de biomasa dominante es…",
  ["los residuos forestales (82 %)", "los residuos agrícolas (82 %)", "los pellets (9 %)", "las lejías negras (82 %)"],
  0, "Residuos forestales 82 %, agrícolas 9 %, otros 5 %, pellets 3 %, lejías negras 1 %.", "Apuntes B1, diap. 36");
L("B1", "b1-espana", "Capacidad instalada", 2, "¿Qué potencia instalada de biomasa y de residuos tenía España en 2019, según APPA Biomasa 2021?",
  ["857 MW de biomasa y 588 MW de residuos", "588 MW de biomasa y 857 MW de residuos", "1.446 MW de biomasa y 588 MW de residuos", "857 MW de biomasa y 375 MW de residuos"],
  0, "Biomasa 857 MW y residuos 588 MW (total 1.446 MW, +9 % respecto a 2014).", "Apuntes B1, diap. 37");
L("B1", "b1-espana", "Capacidad instalada", 3, "La potencia de biomasa y residuos renovables de España (2019) generó alrededor de 5,3 TWh. ¿Qué representa respecto a la capacidad y la generación renovables nacionales?",
  ["≈ 4 % de la capacidad renovable y ≈ 5 % de la generación renovable",
   "≈ 5 % de la capacidad renovable y ≈ 4 % de la generación renovable",
   "≈ 9 % de la capacidad renovable y ≈ 5 % de la generación renovable",
   "≈ 4 % de la capacidad renovable y ≈ 30 % de la generación renovable"],
  0, "Casi 1,5 GW ≈ 4 % de la capacidad renovable; 5,3 TWh ≈ 5 % de la generación renovable. El 9 % es el crecimiento 2014-2019.", "Apuntes B1, diap. 37");
L("B1", "b1-espana", "PNIEC", 2, "Según el PNIEC 2023-2030, ¿qué objetivo de reducción de emisiones de GEI respecto a 1990 se fija para 2030?",
  ["32 %", "23 %", "55 %", "90 %"],
  0, "PNIEC 2023: 32 % respecto a 1990 (23 % en el PNIEC 2020). El 55 % es el objetivo Fit for 55 de la UE; el 90 %, la reducción mínima para la neutralidad en 2050.", "Apuntes B1, diap. 38");
L("B1", "b1-espana", "PNIEC", 3, "¿Qué combinación de objetivos 2030 corresponde al PNIEC 2023-2030?",
  ["48 % de renovables sobre energía final, 81 % en generación eléctrica y dependencia energética del 50 %",
   "42 % de renovables sobre energía final, 74 % en generación eléctrica y dependencia energética del 61 %",
   "48 % de renovables sobre energía final, 74 % en generación eléctrica y dependencia energética del 50 %",
   "42,5 % de renovables sobre energía final, 81 % en generación eléctrica y dependencia energética del 39 %"],
  0, "PNIEC 2023: 48 %, 81 % y 50 %. Los valores 42 %, 74 % y 61 % son del PNIEC 2020; 42,5 % es el objetivo Fit for 55.", "Apuntes B1, diap. 38-39");
L("B1", "b1-espana", "PNIEC biogás", 2, "En los objetivos sectoriales del PNIEC 2023-2030, el objetivo de biogás para 2030 es…",
  ["20 TWh", "10,4 TWh", "12 GW", "2.640 GWh"],
  0, "Biogás: 10,4 TWh (PNIEC 2020) → 20 TWh (PNIEC 2023). 12 GW son electrolizadores; 2.640 GWh es la generación eléctrica con biogás en 2030.", "Apuntes B1, diap. 40 y 44");
L("B1", "b1-espana", "PNIEC potencia", 3, "En el escenario PNIEC 2023-2030, la potencia bruta de biomasa pasa de 413 MW (2019) a…",
  ["1.409 MW en 2030", "440 MW en 2030", "8.029 MW en 2030", "1.009 MW en 2030"],
  0, "Biomasa: 413 → 609 → 1.009 (2025) → 1.409 MW (2030). 440 MW es el biogás en 2030; 8.029 son GWh de biomasa.", "Apuntes B1, diap. 44");
L("B1", "b1-espana", "Recurso", 3, "Según los apuntes, ¿qué posición ocupa España en la UE en recursos biomásicos aprovechables?",
  ["Tercera, por detrás de Francia y Alemania", "Primera, por delante de Francia y Alemania", "Segunda, por detrás de Francia", "Tercera, por detrás de Finlandia y Suecia"],
  0, "Tercera en recursos aprovechables (171,9 TWh) tras Francia y Alemania; tercera también por millón de habitantes, pero allí tras Finlandia y Suecia.", "Apuntes B1, diap. 45");
L("B1", "b1-espana", "Residuos municipales", 3, "Según los datos de Eurostat (2020) de los apuntes, en España…",
  ["se generaron 455 kg/hab de residuos municipales y solo 53 kg/hab fueron a recuperación energética, frente a 236 kg/hab a vertedero",
   "se generaron 517 kg/hab de residuos municipales y 134 kg/hab fueron a recuperación energética",
   "se generaron 455 kg/hab de residuos municipales y 236 kg/hab fueron a recuperación energética, frente a 53 kg/hab a vertedero",
   "se generaron 455 kg/hab de residuos municipales y no se valorizó energéticamente ninguno"],
  0, "España: 455 generados, 236 a vertedero, 53 a recuperación energética (R1). 517 y 134 son la media UE-27.", "Apuntes B1, diap. 46");

L("B1", "b1-sostenibilidad", "Alternativas técnicas", 1, "Según la tabla de alternativas técnicas, ¿qué tecnologías permiten obtener energía para el transporte a partir de biomasa y residuos?",
  ["La obtención de bioetanol y de biodiésel", "La combustión y la metanización", "La gasificación y la pirólisis", "La combustión, la gasificación y la pirólisis"],
  0, "Transporte: bioetanol y biodiésel. Electricidad: combustión, gasificación y pirólisis, y metanización. Térmica: combustión.", "Apuntes B1, diap. 47");
L("B1", "b1-sostenibilidad", "Sostenibilidad", 2, "¿Qué significan las siglas LULUCF que aparecen en el apartado de sostenibilidad?",
  ["Uso de la tierra, cambio de uso de la tierra y silvicultura", "Análisis de ciclo de vida de la biomasa", "Límites de emisión de combustión de biomasa", "Criterios de sostenibilidad de biocarburantes"],
  0, "LULUCF (Land Use, Land-Use Change and Forestry) = UTCUTS. El ACV es la herramienta para evaluar la reducción de GEI.", "Apuntes B1, diap. 48");
L("B1", "b1-sostenibilidad", "Rendimientos", 2, "Según los apuntes, ¿qué intervalo de rendimientos energéticos se cita para el aprovechamiento de la biomasa?",
  ["10-90 %", "30-45 %", "60-65 %", "85-95 %"],
  0, "«La mejora del rendimiento energético es otro objetivo de la sostenibilidad. Rendimientos 10-90 %».", "Apuntes B1, diap. 48");
L("B1", "b1-sostenibilidad", "Factores", 3, "¿Cuál de los siguientes factores aparece en los apuntes entre los que NO contribuyen a la sostenibilidad del uso de la biomasa?",
  ["El transporte de biomasa y residuos", "La reducción de incendios forestales", "La contribución al mantenimiento de pequeños núcleos de población", "La posibilidad de utilización localizada"],
  0, "Transporte, ocupación del suelo, biodiversidad, líneas eléctricas, emisiones, efluentes y residuos no contribuyen; los otros tres sí.", "Apuntes B1, diap. 51");
L("B1", "b1-sostenibilidad", "Biocarburantes", 3, "Los «criterios de sostenibilidad de biocarburantes» de la Circular 1/2019 de la CNMC remiten al artículo 4 del RD 1597/2011, que se refiere a…",
  ["la reducción de GEI, los usos de la tierra y las buenas condiciones agrarias y medioambientales",
   "la reducción de GEI, el empleo rural y la igualdad de género",
   "los límites de emisión de SO₂, NOₓ y partículas de las plantas de biocarburantes",
   "el contenido energético doble de las materias primas del anexo IX"],
  0, "Art. 4: apartado 1 reducción de GEI; apartados 2-4 usos de la tierra; apartado 5 buenas condiciones agrarias y medioambientales.", "Apuntes B1, diap. 49");
L("B1", "b1-sostenibilidad", "Socioeconomía", 3, "Según el balance socioeconómico de las biomasas en España (2017) de los apuntes, el empleo total asociado era de…",
  ["32.945 puestos de trabajo", "2.732 puestos de trabajo", "560.000 puestos de trabajo", "11.952 puestos de trabajo"],
  0, "32.945 empleos (VAB 2.732 M€). 560.000 es el empleo del PNIEC en 2030; 11.952 son muertes prematuras en 2019.", "Apuntes B1, diap. 49-50");

C("B1", "b1-definiciones", "¿Qué diferencia un biolíquido de un biocarburante?", "Ambos son líquidos de biomasa: el <b>biocarburante</b> es para <b>transporte</b>; el <b>biolíquido</b>, para otros usos (electricidad, calor y frío).");
C("B1", "b1-definiciones", "¿De dónde salen las materias primas de los biocarburantes avanzados?", "Del <b>anexo IX, parte A</b> de la Directiva 2018/2001 (algas, biorresiduos, fracción biomasa de residuos municipales e industriales…); cuentan <b>doble</b>.");
C("B1", "b1-definiciones", "Jerarquía europea de residuos", "Prevención → preparación para la reutilización → reciclado (incl. metanización) → otra valorización (energética) → eliminación (gas de vertedero).");
C("B1", "b1-definiciones", "LER: nº de capítulos y marca de peligrosos", "<b>20 capítulos</b> (Decisión 2014/955/UE); peligrosos con <b>asterisco</b>. Cap. 20 = residuos municipales.");
C("B1", "b1-definiciones", "Clases de CSR (UNE 15358) por PCI", "Clase 1 ≥ 25, 2 ≥ 20, 3 ≥ 15, 4 ≥ 10, 5 ≥ 3 MJ/kg (tal cual). Cl ≤ 0,2/0,6/1,0/1,5/3 %.");
C("B1", "b1-composicion", "Fórmula de Dulong", "PCS (kcal/kg) = 80,6·C + 339,1·(H − O/8) + 22,22·S + 5,56·N (en % en masa).");
C("B1", "b1-composicion", "¿Cómo se mide el PCS?", "Con <b>bomba calorimétrica</b> (UNE-EN 14918:2011). Hay más de 20 expresiones para estimarlo.");
C("B1", "b1-composicion", "Análisis próximo vs elemental", "Próximo: humedad, M. volátil, C fijo, cenizas, PC. Elemental: C, H, O, N, S, cenizas.");
C("B1", "b1-cultivos", "Turno de corta: chopo, eucalipto, Quercus", "Chopo y eucalipto <b>3-5 años</b>; Quercus <b>15-18 años</b>.");
C("B1", "b1-cultivos", "PCI de chopo, eucalipto y Quercus", "4.100 / 4.300 / 4.400 kcal/kg MS.");
C("B1", "b1-cultivos", "Cultivos agrícolas para biodiésel según los apuntes", "<b>Cardo</b> y <b>mostaza etíope</b> (a partir del grano). El sorgo es para bioetanol.");
C("B1", "b1-mercado", "Requisitos básicos del pellet ENplus", "Humedad ≤ 10 %, PCI ≥ 4,6 kWh/kg (16,5 MJ/kg), Ø 6 u 8 mm, densidad 600-750 kg/m³, cenizas A1 ≤ 0,7 %.");
C("B1", "b1-mercado", "Fábricas de biocombustibles sólidos en España (AVEBIOM 2025)", "65 de pellet, 64 de astilla y 30 de hueso de aceituna.");
C("B1", "b1-mundo", "Mensaje IEA (WEO 2022) sobre la biomasa", "Crece en todos los escenarios salvo el <b>uso tradicional</b>, que se elimina en NZE.");
C("B1", "b1-espana", "Biomasa en la primaria renovable española", "≈ <b>30 %</b> (≈ 40 % con biogases, RSU renovables y biocombustibles).");
C("B1", "b1-espana", "Potencia de biomasa y residuos en España (2019)", "<b>857 MW</b> biomasa + <b>588 MW</b> residuos ≈ 1,5 GW; ≈ 5,3 TWh (≈ 5 % de la generación renovable).");
C("B1", "b1-espana", "PNIEC 2023-2030: cifras clave", "GEI −32 % vs 1990; 48 % renovable en final; 81 % en electricidad; dependencia 50 %; biogás 20 TWh.");
C("B1", "b1-sostenibilidad", "Tres pilares de la sostenibilidad", "Social, ambiental (environmental) y económico.");

DRILLS.push({ id: "b1-c-cultivos", type: "classify", tema: "B1", sec: "b1-cultivos", title: "¿Para qué se usa principalmente cada cultivo?", cats: ["Biodiésel", "Bioetanol", "Biomasa sólida / 2ª generación"], items: [
  ["Cardo (Cynara cardunculus)", 0], ["Mostaza etíope (Brassica carinata)", 0], ["Sorgo (azúcares del tallo)", 1], ["Cultivos alcoholígenos", 1],
  ["Cultivos oleaginosos", 0], ["Caña (Arundo donax)", 2], ["Miscanto", 2], ["Chopo de corta rotación", 2], ["Eucalipto", 2], ["Quercus", 2] ] });
DRILLS.push({ id: "b1-m-cifras", type: "match", tema: "B1", sec: "b1-espana", title: "Cifra ↔ dato de España", pairs: [
  ["114.453 ktep", "Energía primaria 2023"], ["17,5 %", "Renovables en la primaria 2023"], ["857 MW", "Biomasa instalada 2019"], ["588 MW", "Residuos instalados 2019"],
  ["20 TWh", "Objetivo de biogás 2030"], ["82 %", "Residuos forestales en la biomasa térmica"], ["32 %", "Reducción de GEI vs 1990 (PNIEC)"] ] });
DRILLS.push({ id: "b1-m-definiciones", type: "match", tema: "B1", sec: "b1-definiciones", title: "Término ↔ definición", pairs: [
  ["Biolíquido", "Líquido para usos distintos del transporte"], ["Biocarburante", "Líquido para el transporte"], ["Biocarburante avanzado", "Materias del anexo IX, parte A"],
  ["Biogás", "Combustible gaseoso de biomasa"], ["Combustibles de biomasa", "Gaseosos o sólidos de biomasa"], ["Residuo municipal", "El que gestiona un ayuntamiento"] ] });
DRILLS.push({ id: "b1-c-sosten", type: "classify", tema: "B1", sec: "b1-sostenibilidad", title: "¿Contribuye o no a la sostenibilidad?", cats: ["Contribuye", "No contribuye"], items: [
  ["Menor dependencia de importaciones", 0], ["Valorización de residuos", 0], ["Reducción de incendios forestales", 0], ["Mantenimiento de pequeños núcleos", 0], ["Investigación e innovación", 0],
  ["Transporte de biomasa", 1], ["Ocupación del suelo de las instalaciones", 1], ["Emisiones atmosféricas", 1], ["Efluentes líquidos", 1], ["Líneas de transporte eléctrico", 1] ] });

MNEMO["b1-definiciones"] = ["«Bio<b>carb</b>urante = <b>carr</b>etera»: el biocarburante va al transporte; el biolíquido, a la caldera.", "Combustibles de biomasa = «<b>S</b>ólidos y <b>G</b>aseosos» (SG): los líquidos tienen nombre propio.", "Jerarquía «<b>P-P-R-V-E</b>»: Prevenir, Preparar, Reciclar, Valorizar, Eliminar."];
MNEMO["b1-composicion"] = ["Próximo = lo que «ves» al quemar (humedad, volátiles, carbono fijo, cenizas); elemental = la tabla periódica (C, H, O, N, S).", "Dulong: «80-339-22-5» y el H «paga» O/8 porque ese hidrógeno ya está unido al oxígeno."];
MNEMO["b1-cultivos"] = ["Chopo y eucalipto «de 3 a 5»; el Quercus, lento como una encina: 15-18 años y solo ~3 t MS/ha·año.", "PCI que sube con la dureza de la madera: chopo 4.100 &lt; eucalipto 4.300 &lt; Quercus 4.400.", "Grano → biodiésel (cardo, mostaza); tallo dulce → bioetanol (sorgo)."];
MNEMO["b1-mercado"] = ["ENplus «10 y 4,6»: humedad ≤ 10 % y PCI ≥ 4,6 kWh/kg.", "Fábricas «65-64-30»: pellet, astilla y hueso, en orden decreciente."];
MNEMO["b1-mundo"] = ["«Todo crece menos lo tradicional»: el uso tradicional de biomasa se extingue en NZE.", "Bioenergía sólida 2021 = 60 EJ (24 tradicional + 36 moderna)."];
MNEMO["b1-espana"] = ["«30 sola, 40 con la familia»: biomasa ≈ 30 % de la primaria renovable; ≈ 40 % con biogás, RSU y biocombustibles.", "PNIEC 2023 «32-48-81-50»: GEI, renovables en final, renovables eléctricas, dependencia.", "2019: «857 + 588 ≈ 1.446 MW»."];
MNEMO["b1-sostenibilidad"] = ["Tres pilares: Social, Ambiental, Económico; la sostenibilidad está en la intersección de los tres.", "LULUCF = «la tierra, su cambio y el bosque»."];

DIAGRAMS.push({ sec: "b1-definiciones", h4: "Jerarquía europea de residuos", cap: "Jerarquía europea de residuos: de la opción preferente (arriba) a la menos deseable (abajo). La metanización se incluye en el reciclado; el gas de vertedero, en la eliminación.", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Pirámide invertida de la jerarquía de residuos">
<polygon points="40,20 480,20 436,62 84,62" fill="#dcfce7" stroke="#0d9488"/>
<polygon points="84,66 436,66 392,108 128,108" fill="#eef3fb" stroke="#2563eb"/>
<polygon points="128,112 392,112 348,154 172,154" fill="#f1f5fd" stroke="#2563eb"/>
<polygon points="172,158 348,158 304,200 216,200" fill="#fef3c7" stroke="#d97706"/>
<polygon points="216,204 304,204 282,240 238,240" fill="#fde2e1" stroke="#c2413b"/>
<text x="260" y="46" text-anchor="middle" class="tb">1. Prevención</text>
<text x="260" y="85" text-anchor="middle" class="tb">2. Preparación para la reutilización</text>
<text x="260" y="128" text-anchor="middle" class="tb">3. Reciclado</text>
<text x="260" y="145" text-anchor="middle" class="small2">incluye metanización → biogás</text>
<text x="260" y="175" text-anchor="middle" class="tb">4. Otra valorización</text>
<text x="260" y="192" text-anchor="middle" class="small2">p. ej. valorización energética</text>
<text x="260" y="226" text-anchor="middle" class="small2 tb">5. Eliminación</text>
<text x="330" y="232" class="small2 mut">→ gas de vertedero</text>
<text x="500" y="40" text-anchor="end" class="small2 ok2">más preferible</text>
<text x="500" y="200" text-anchor="end" class="small2 ko">menos preferible</text>
</svg>` });

DIAGRAMS.push({ sec: "b1-composicion", h4: "Análisis próximo y elemental", cap: "Composición de una biomasa: la humedad se refiere a la masa total; la materia orgánica e inorgánica, a la materia seca. A la derecha, qué mide cada tipo de análisis.", svg: `<svg class="dg" viewBox="0 0 540 260" role="img" aria-label="Árbol de composición de la biomasa">
<defs><marker id="b1Ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<rect x="10" y="110" width="110" height="40" rx="6" class="box"/><text x="65" y="128" text-anchor="middle" class="tb">Biomasa</text><text x="65" y="143" text-anchor="middle" class="small2">(masa total)</text>
<rect x="160" y="30" width="120" height="36" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="220" y="53" text-anchor="middle">Agua (humedad)</text>
<rect x="160" y="170" width="120" height="36" rx="6" fill="#dcfce7" stroke="#0d9488"/><text x="220" y="193" text-anchor="middle">Materia seca</text>
<line x1="120" y1="125" x2="158" y2="52" stroke="#64748b" marker-end="url(#b1Ar)"/>
<line x1="120" y1="138" x2="158" y2="186" stroke="#64748b" marker-end="url(#b1Ar)"/>
<text x="160" y="90" class="small2 mut">% base húmeda</text>
<rect x="320" y="120" width="210" height="58" rx="6" fill="#f1f5fd" stroke="#2563eb"/>
<text x="330" y="137" class="tb small2">Orgánica (M. volátil + C fijo)</text>
<text x="330" y="153" class="small2">celulosa, hemicelulosa, lignina,</text>
<text x="330" y="168" class="small2">azúcares, almidón, lípidos, proteínas</text>
<rect x="320" y="196" width="210" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/>
<text x="330" y="212" class="tb small2">Inorgánica → cenizas / escorias</text>
<text x="330" y="226" class="small2">Na, K, Ca, P, Fe, Pb, Zn, Cd, Hg…</text>
<line x1="280" y1="184" x2="318" y2="152" stroke="#64748b" marker-end="url(#b1Ar)"/>
<line x1="280" y1="192" x2="318" y2="212" stroke="#64748b" marker-end="url(#b1Ar)"/>
<text x="232" y="244" class="small2 mut">% sobre materia seca</text>
<rect x="320" y="12" width="210" height="44" rx="6" fill="#fff" stroke="#64748b" class="dash"/>
<text x="330" y="29" class="tb small2">Análisis próximo</text><text x="330" y="45" class="small2">humedad, M. volátil, C fijo, cenizas, PC</text>
<rect x="320" y="64" width="210" height="44" rx="6" fill="#fff" stroke="#64748b" class="dash"/>
<text x="330" y="81" class="tb small2">Análisis elemental (último)</text><text x="330" y="97" class="small2">C, H, O, N, S y cenizas</text>
</svg>` });

DIAGRAMS.push({ sec: "b1-cultivos", h4: "Cultivos agrícolas", cap: "Intervalos de productividad de los cultivos energéticos de los apuntes (t de materia seca por hectárea y año). El cardo se da a 15 % de humedad. Destacan la caña y el miscanto; el Quercus apenas llega a 3.", svg: `<svg class="dg" viewBox="0 0 540 290" role="img" aria-label="Productividad de cultivos energéticos">
<text x="270" y="18" text-anchor="middle" class="tb">Productividad (t MS/ha·año)</text>
<g class="small2">
<text x="150" y="54" text-anchor="end">Chopo</text><text x="150" y="80" text-anchor="end">Eucalipto</text><text x="150" y="106" text-anchor="end">Quercus</text><text x="150" y="132" text-anchor="end">Cardo (15 % hum.)</text>
<text x="150" y="158" text-anchor="end">Caña (Arundo)</text><text x="150" y="184" text-anchor="end">Sorgo</text><text x="150" y="210" text-anchor="end">Miscanto</text><text x="150" y="236" text-anchor="end">Mostaza etíope</text></g>
<g stroke="#e2e8f0"><line x1="208.6" y1="36" x2="208.6" y2="250"/><line x1="257.1" y1="36" x2="257.1" y2="250"/><line x1="305.7" y1="36" x2="305.7" y2="250"/><line x1="354.3" y1="36" x2="354.3" y2="250"/><line x1="402.9" y1="36" x2="402.9" y2="250"/><line x1="451.4" y1="36" x2="451.4" y2="250"/><line x1="500" y1="36" x2="500" y2="250"/></g>
<rect x="237.7" y="43" width="116.6" height="14" fill="#0d9488"/><text x="360" y="54" class="small2">8–20</text>
<rect x="218.3" y="69" width="184.6" height="14" fill="#0d9488"/><text x="409" y="80" class="small2">6–25</text>
<rect x="188.2" y="95" width="3" height="14" fill="#c2413b"/><text x="197" y="106" class="small2">2,9–3,0</text>
<rect x="257.1" y="121" width="48.6" height="14" fill="#d97706"/><text x="312" y="132" class="small2">10–15</text>
<rect x="257.1" y="147" width="242.9" height="14" fill="#d97706"/><text x="251" y="158" text-anchor="end" class="small2">10–35</text>
<rect x="276.6" y="173" width="155.4" height="14" fill="#d97706"/><text x="438" y="184" class="small2">12–28</text>
<rect x="402.9" y="199" width="97.1" height="14" fill="#d97706"/><text x="397" y="210" text-anchor="end" class="small2">25–35</text>
<rect x="276.6" y="225" width="77.7" height="14" fill="#d97706"/><text x="360" y="236" class="small2">12–20</text>
<line x1="160" y1="250" x2="500" y2="250" class="ax"/>
<g class="small2" text-anchor="middle"><text x="160" y="266">0</text><text x="208.6" y="266">5</text><text x="257.1" y="266">10</text><text x="305.7" y="266">15</text><text x="354.3" y="266">20</text><text x="402.9" y="266">25</text><text x="451.4" y="266">30</text><text x="500" y="266">35</text></g>
<rect x="160" y="276" width="10" height="8" fill="#0d9488"/><text x="174" y="284" class="small2">forestal</text>
<rect x="240" y="276" width="10" height="8" fill="#d97706"/><text x="254" y="284" class="small2">agrícola</text>
<rect x="320" y="276" width="10" height="8" fill="#c2413b"/><text x="334" y="284" class="small2">Quercus (turno 15-18 años)</text>
</svg>` });

DIAGRAMS.push({ sec: "b1-espana", h4: "Capacidad instalada de biomasa y residuos", cap: "Capacidad instalada de biomasa y residuos renovables con fines eléctricos en España (MW) y generación (GWh) según APPA Biomasa 2021. Entre 2014 y 2019 crece un 9 %; en 2019, 857 MW de biomasa y 588 MW de residuos.", svg: `<svg class="dg" viewBox="0 0 520 260" role="img" aria-label="Capacidad instalada 2014-2019">
<line x1="50" y1="220" x2="500" y2="220" class="ax"/>
<g class="small2 mut" text-anchor="end"><text x="44" y="224">0</text><text x="44" y="164">500</text><text x="44" y="104">1000</text><text x="44" y="44">1500</text></g>
<g stroke="#e2e8f0"><line x1="50" y1="160" x2="500" y2="160"/><line x1="50" y1="100" x2="500" y2="100"/><line x1="50" y1="40" x2="500" y2="40"/></g>
<g fill="#93c5fd">
<rect x="70" y="60.2" width="46" height="159.8"/><rect x="142" y="59.2" width="46" height="160.8"/><rect x="214" y="59" width="46" height="161"/>
<rect x="286" y="59.6" width="46" height="160.4"/><rect x="358" y="58.1" width="46" height="161.9"/></g>
<rect x="430" y="117.2" width="46" height="102.8" fill="#0d9488"/><rect x="430" y="46.6" width="46" height="70.6" fill="#d97706"/>
<g class="small2 tb" text-anchor="middle"><text x="93" y="55">1.332</text><text x="165" y="54">1.340</text><text x="237" y="54">1.342</text><text x="309" y="54">1.337</text><text x="381" y="53">1.349</text><text x="453" y="41">1.446</text></g>
<text x="453" y="172" text-anchor="middle" class="small2" fill="#fff">857</text><text x="453" y="86" text-anchor="middle" class="small2" fill="#fff">588</text>
<g class="small2" text-anchor="middle"><text x="93" y="236">2014</text><text x="165" y="236">2015</text><text x="237" y="236">2016</text><text x="309" y="236">2017</text><text x="381" y="236">2018</text><text x="453" y="236">2019</text></g>
<g class="small2 mut" text-anchor="middle"><text x="93" y="252">5.340</text><text x="165" y="252">5.428</text><text x="237" y="252">5.252</text><text x="309" y="252">5.436</text><text x="381" y="252">5.261</text><text x="453" y="252">5.302</text></g>
<text x="8" y="252" class="small2 mut">GWh</text><text x="8" y="16" class="small2 mut">MW</text>
<rect x="70" y="10" width="10" height="9" fill="#0d9488"/><text x="84" y="18" class="small2">biomasa</text>
<rect x="150" y="10" width="10" height="9" fill="#d97706"/><text x="164" y="18" class="small2">residuos</text>
<text x="250" y="18" class="small2 tb">+9 % (2014 → 2019)</text>
</svg>` });

DIAGRAMS.push({ sec: "b1-sostenibilidad", h4: "Alternativas técnicas de aprovechamiento energético", cap: "Rutas de aprovechamiento de la biomasa y los residuos según la tabla de alternativas técnicas: cada tecnología y la energía final que proporciona.", svg: `<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="Alternativas técnicas de aprovechamiento energético">
<defs><marker id="b1Ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="#64748b"/></marker></defs>
<rect x="10" y="100" width="110" height="50" rx="8" fill="#dcfce7" stroke="#0d9488"/><text x="65" y="122" text-anchor="middle" class="tb">Biomasa</text><text x="65" y="138" text-anchor="middle" class="tb">y residuos</text>
<rect x="170" y="20" width="170" height="34" rx="6" class="box"/><text x="255" y="42" text-anchor="middle" class="small2">Combustión</text>
<rect x="170" y="66" width="170" height="34" rx="6" class="box"/><text x="255" y="88" text-anchor="middle" class="small2">Gasificación y pirólisis</text>
<rect x="170" y="112" width="170" height="34" rx="6" class="box"/><text x="255" y="134" text-anchor="middle" class="small2">Metanización</text>
<rect x="170" y="158" width="170" height="34" rx="6" class="box"/><text x="255" y="180" text-anchor="middle" class="small2">Obtención de bioetanol</text>
<rect x="170" y="204" width="170" height="34" rx="6" class="box"/><text x="255" y="226" text-anchor="middle" class="small2">Obtención de biodiésel</text>
<g stroke="#64748b" fill="none"><line x1="120" y1="118" x2="168" y2="38" marker-end="url(#b1Ar2)"/><line x1="120" y1="122" x2="168" y2="84" marker-end="url(#b1Ar2)"/><line x1="120" y1="126" x2="168" y2="129" marker-end="url(#b1Ar2)"/><line x1="120" y1="132" x2="168" y2="174" marker-end="url(#b1Ar2)"/><line x1="120" y1="136" x2="168" y2="220" marker-end="url(#b1Ar2)"/></g>
<rect x="400" y="20" width="110" height="34" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="455" y="42" text-anchor="middle" class="small2 tb">Térmica</text>
<rect x="400" y="82" width="110" height="34" rx="6" fill="#eef3fb" stroke="#2563eb"/><text x="455" y="104" text-anchor="middle" class="small2 tb">Electricidad</text>
<rect x="400" y="180" width="110" height="34" rx="6" fill="#f1f5fd" stroke="#0891b2"/><text x="455" y="202" text-anchor="middle" class="small2 tb">Transporte</text>
<g stroke="#64748b" fill="none"><line x1="340" y1="34" x2="398" y2="34" marker-end="url(#b1Ar2)"/><line x1="340" y1="42" x2="398" y2="94" marker-end="url(#b1Ar2)"/><line x1="340" y1="84" x2="398" y2="99" marker-end="url(#b1Ar2)"/><line x1="340" y1="129" x2="398" y2="106" marker-end="url(#b1Ar2)"/><line x1="340" y1="175" x2="398" y2="194" marker-end="url(#b1Ar2)"/><line x1="340" y1="221" x2="398" y2="202" marker-end="url(#b1Ar2)"/></g>
</svg>` });
