/* Tema GEN · Introducción y sistema eléctrico. No hay apuntes adjuntos de estos
   bloques (solo aparecen en el examen de 2018): todo es conocimiento general. */
THEORY.GEN = {
  summary: [
    "No hay diapositivas de este bloque: lo que sigue es <b>conocimiento general</b> para entender las preguntas del examen de 2018.",
    "<b>Intensidad energética</b> = consumo de energía / PIB. En España tiende a bajar.",
    "<b>Reservas</b> ≠ recursos: cambian con descubrimientos, tecnología y precio.",
    "Potencia solar interceptada por la Tierra ≈ <b>175 000 TW</b>; consumo humano ≈ <b>2 kW por persona</b>.",
    "Sistema eléctrico español: <b>generación, transporte, distribución y comercialización</b>.",
    "La generación debe seguir en cada instante al <b>perfil de demanda</b>, que tiene variaciones diarias y estacionales."
  ],
  sections: [
    { id: "gen-intro", title: "1. Introducción: consumo y reservas", html: `
<div class="gen"><b>Ampliación (conocimiento general, no hay apuntes de este bloque):</b> resumen para las preguntas de introducción del examen de 2018.</div>
<h4>Consumo de energía primaria</h4>
<p>El consumo mundial de energía primaria crece por el <b>aumento de la población</b> y la <b>mejora del nivel de vida</b> en los países en desarrollo. Las recesiones lo frenan temporalmente.</p>
<table class="tbl cmp"><tbody>
<tr><td>Intensidad energética</td><td>Energía consumida / PIB. Mide la eficiencia energética de una economía. En España ha bajado en la última década.</td></tr>
<tr><td>Consumo per cápita</td><td>Energía / población.</td></tr>
<tr><td>Intensidad de carbono</td><td>Emisiones de CO<sub>2</sub> / energía consumida.</td></tr></tbody></table>
<h4>Órdenes de magnitud</h4>
<p>Potencia solar interceptada por la Tierra: ≈ 1361 W/m² × π R<sub>T</sub>² ≈ <b>1,7·10<sup>17</sup> W ≈ 175 000 TW</b>. Potencia media consumida por la humanidad: ≈ 18-19 TW, del orden de <b>2 kW por persona</b>.</p>
<h4>Recursos y reservas</h4>
<p>Los <b>recursos</b> son todo lo que existe; las <b>reservas</b>, la parte que se puede explotar de forma rentable con la tecnología y los precios actuales. Por eso las reservas cambian con <b>nuevos descubrimientos</b>, <b>nuevas tecnologías</b> y el <b>precio de mercado</b>. Tienes los datos de reservas de petróleo, gas y carbón en el tema 5.</p>` },
    { id: "gen-sistema", title: "2. Sistema eléctrico español", html: `
<div class="gen"><b>Ampliación (conocimiento general, no hay apuntes de este bloque):</b> resumen para las preguntas de sistema eléctrico del examen de 2018.</div>
<h4>Actividades del sistema</h4>
<table class="tbl"><thead><tr><th>Actividad</th><th>Qué hace</th></tr></thead><tbody>
<tr><td><b>Generación</b></td><td>Producción en las centrales (en régimen de libre competencia).</td></tr>
<tr><td><b>Transporte</b></td><td>Red de alta tensión. Red Eléctrica de España es transportista y operador del sistema.</td></tr>
<tr><td><b>Distribución</b></td><td>Media y baja tensión hasta el consumidor. Es una actividad distinta del transporte.</td></tr>
<tr><td><b>Comercialización</b></td><td>Venta de la energía al consumidor final.</td></tr></tbody></table>
<h4>Demanda y generación</h4>
<p>La demanda tiene <b>variaciones diarias</b> (valle nocturno y puntas) y <b>estacionales</b> (invierno y verano). Como la electricidad apenas se almacena, la <b>generación se ajusta al perfil de demanda</b> en tiempo real.</p>
<p>Potencia instalada: en 2018 la eólica (≈ 23 GW) iba por delante de la hidráulica (≈ 17-20 GW). Hoy la fotovoltaica es la primera (≈ 41,7 GW) y la eólica tiene ≈ 33,3 GW, según Eólica II.</p>` }
  ],
  confusions: [["<b>Transporte</b> vs <b>distribución</b>", "No son sinónimos: el transporte es la red de alta tensión (REE) y la distribución lleva la energía en media y baja tensión hasta el consumidor."],
    ["<b>Intensidad energética</b> (energía/PIB) vs <b>PIB/energía</b>", "La IE pone la energía en el numerador. Si baja, la economía es más eficiente."],
    ["<b>Recursos</b> vs <b>reservas</b>", "Las reservas son la parte rentable de los recursos, así que cambian con el precio y la tecnología."]]
};
C("GEN", "gen-intro", "Intensidad energética", "Consumo de energía / PIB (en España, tendencia descendente).");
C("GEN", "gen-intro", "¿Qué hace cambiar las reservas de una fuente?", "Nuevos descubrimientos, nuevas tecnologías de explotación y el precio de mercado.");
C("GEN", "gen-sistema", "Actividades del sistema eléctrico español", "Generación · transporte · distribución · comercialización.");
