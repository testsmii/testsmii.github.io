/* Registra los exámenes antiguos de la PEC (js/data-exams-old.js) como exámenes de la app. */
(function () {
  const MES = { E: "enero", J: "julio", O: "octubre" };
  Object.keys(OLD_EXAMS).forEach(code => {
    const set = "OLD-" + code, rec = code === "R";
    const mes = rec ? "" : MES[code[0]], year = rec ? "" : "20" + code.slice(1);
    EXAM_SETS[set] = { title: rec ? "Recopilatorio temas 1–4" : "PEC " + mes + " " + year, date: rec ? "varias convocatorias" : mes + " de " + year,
      short: rec ? "Recopilatorio" : mes[0].toUpperCase() + mes.slice(1) + " " + year, kind: "Antiguas", official: false };
    EXAMS.push({ id: set, set, year: rec ? 0 : +year, conv: OLD_TITLES[code], short: EXAM_SETS[set].short, version: rec ? "Mix" : "PEC",
      time: OLD_EXAMS[code].length * 2, official: false, kind: "Antiguas", toTen: true });
  });
  const base = buildExamQuestions;
  buildExamQuestions = function (ex) {
    if (!/^OLD-/.test(ex.set)) return base(ex);
    const code = ex.set.slice(4);
    return OLD_EXAMS[code].map((x, i) => ({
      id: ex.id + "-P" + x.n, n: i + 1, canon: "I" + x.item, tema: x.tema, sec: x.sec, apartado: x.apartado, q: x.q, o: x.o, a: x.a, multi: x.multi,
      fig: x.figs[0] || null, fig2: x.figs[1] || null, figAlt: "Figura del examen", exp: "", expHtml: x.exp, official: null,
      src: OLD_TITLES[code] + " · pregunta " + x.n + (x.also.length ? " · también en " + x.also.join(", ") : ""),
      keyText: x.a.map(k => "abcd"[k]).join(", "), keyBy: "doc", unofficial: true, noKey: !x.o.length, open: !x.o.length, part: null
    }));
  };
  // Para practicar y medir el dominio: cada pregunta una sola vez (primera aparición)
  window.OLD_POOL = EQ => { const seen = new Set(), ids = []; Object.keys(OLD_EXAMS).forEach(code => (EQ["OLD-" + code] || []).forEach(q => { if (!q.noKey && !seen.has(q.canon)) { seen.add(q.canon); ids.push(q.id); } })); return ids; };
})();
