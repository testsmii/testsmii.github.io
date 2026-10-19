/* =====================================================================
   CUENTAS EN LA NUBE (Firebase): inicio de sesión, guardado del
   progreso, registro de intentos de examen, ranking y modo admin.
   Para activarlo basta con pegar la configuración web del proyecto
   de Firebase en FIREBASE_CONFIG. Mientras sea null, la app funciona
   igual que antes (progreso guardado solo en el navegador).
   ===================================================================== */
const FIREBASE_CONFIG = null; /* ← pegar aquí el objeto firebaseConfig */
// Cada asignatura guarda su progreso en campos y ranking propios (Estructuras conserva los nombres originales)
const SID = (window.SUBJECT && SUBJECT.id) || "est", SFX = SID === "est" ? "" : "_" + SID;
const PROG = "progress" + SFX, STATS = "stats" + SFX, RANK = "ranking" + SFX;

/* Administración: hash SHA-256 del correo de la administradora (no se publica el correo). */
const ADMIN_EMAIL_SHA256 = ["1b267aaeeeee67c0122d9a5868c26896fac11a690b6d40fe3b29a319226376ad"];

(function () {
"use strict";
const FB_VER = "10.12.2";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
let auth = null, db = null, user = null, isAdmin = false, ready = false, syncing = false, lastSync = null, saveTimer = null, profile = null;

function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
async function sha256(t) { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)); return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join(""); }
const A = () => window.APP;
const esc = s => A().esc(s);

/* ---------- fusión de progreso local + nube ---------- */
function merge(a, b) {
  a = a || {}; b = b || {};
  const out = Object.assign({}, b, a);
  const pick = (x, y, f) => (!x ? y : !y ? x : f(x, y));
  out.qs = {}; new Set([...Object.keys(a.qs || {}), ...Object.keys(b.qs || {})]).forEach(k => out.qs[k] = pick((a.qs || {})[k], (b.qs || {})[k], (x, y) => (x.n >= y.n ? x : y)));
  out.failed = Object.assign({}, b.failed || {}, a.failed || {});
  Object.keys(out.failed).forEach(k => { const q = out.qs[k]; if (q && q.last === "ok") delete out.failed[k]; });
  const hist = {}; [...(b.history || []), ...(a.history || [])].forEach(h => hist[h.id] = h); out.history = Object.values(hist).sort((x, y) => x.t - y.t);
  const ses = {}; [...(b.sessions || []), ...(a.sessions || [])].forEach(s => ses[s.t] = s); out.sessions = Object.values(ses).sort((x, y) => x.t - y.t).slice(-200);
  out.lessons = {}; new Set([...Object.keys(a.lessons || {}), ...Object.keys(b.lessons || {})]).forEach(k => { const x = (a.lessons || {})[k] || {}, y = (b.lessons || {})[k] || {}; out.lessons[k] = Object.assign({}, y, x, { done: !!(x.done || y.done), score: Math.max(x.score || 0, y.score || 0) }); });
  out.cards = {}; new Set([...Object.keys(a.cards || {}), ...Object.keys(b.cards || {})]).forEach(k => out.cards[k] = pick((a.cards || {})[k], (b.cards || {})[k], (x, y) => (x.box >= y.box ? x : y)));
  out.days = {}; new Set([...Object.keys(a.days || {}), ...Object.keys(b.days || {})]).forEach(k => out.days[k] = Math.max((a.days || {})[k] || 0, (b.days || {})[k] || 0));
  out.drills = {}; new Set([...Object.keys(a.drills || {}), ...Object.keys(b.drills || {})]).forEach(k => out.drills[k] = pick((a.drills || {})[k], (b.drills || {})[k], (x, y) => ({ best: Math.max(x.best, y.best), n: Math.max(x.n, y.n), t: Math.max(x.t || 0, y.t || 0) })));
  out.exam = a.exam || b.exam || null; out.quiz = a.quiz || null; out.rev = a.rev || null;
  return out;
}
function summary() {
  const g = A().globalStats();
  return { mastery: g.m, accuracy: g.p, answers: g.n, best: g.best, exams: g.exams, streak: A().streak(), lessons: A().lessonsDone(), totalLessons: A().nLessons };
}

/* ---------- sincronización ---------- */
async function pull() {
  if (!user) return;
  syncing = true; paintBadge();
  try {
    const ref = db.collection("users").doc(user.uid);
    const snap = await ref.get();
    const cloud = snap.exists ? snap.data() : null;
    profile = cloud ? cloud.profile || {} : {};
    let state = A().S;
    if (cloud && cloud[PROG]) state = merge(state, JSON.parse(cloud[PROG]));
    A().S = state;
    await push(true);
    A().route();
  } catch (e) { console.error(e); toast("No se pudo sincronizar. Se reintentará."); }
  syncing = false; paintBadge();
}
async function push(now) {
  if (!user || !db) return;
  clearTimeout(saveTimer);
  const doIt = async () => {
    try {
      const sum = summary();
      profile = Object.assign({ alias: defaultAlias(), ranking: false }, profile || {});
      await db.collection("users").doc(user.uid).set({
        profile: Object.assign({}, profile, { name: user.displayName || "", email: user.email || "", lastSeen: Date.now(), createdAt: profile.createdAt || Date.now() }),
        [STATS]: sum, [PROG]: JSON.stringify(A().S)
      }, { merge: true });
      const rref = db.collection(RANK).doc(user.uid);
      if (profile.ranking) await rref.set({ alias: profile.alias, best: sum.best, mastery: sum.mastery, streak: sum.streak, lessons: sum.lessons, updated: Date.now() });
      else await rref.delete().catch(() => {});
      lastSync = Date.now(); paintBadge();
    } catch (e) { console.error(e); }
  };
  if (now) { saveTimer = null; return doIt(); }
  saveTimer = setTimeout(() => { saveTimer = null; doIt(); }, 2500);
}
const defaultAlias = () => ((user && (user.displayName || user.email || "Estudiante")) + "").split(/[ @]/)[0];

/* ---------- interfaz: botón de cuenta en la cabecera ---------- */
function paintBadge() {
  let el = $("#acct");
  if (!el) {
    el = document.createElement("a"); el.id = "acct"; el.className = "acct"; el.href = "#/cuenta";
    const tb = $(".topbar"); tb.insertBefore(el, $("#mainnav").nextSibling);
  }
  if (user) { const ini = (profile && profile.alias || defaultAlias() || "?").slice(0, 1).toUpperCase();
    el.innerHTML = `<span class="av">${esc(ini)}</span><span class="acct-t">${syncing ? "Sincronizando…" : "Guardado ✓"}</span>`; el.title = "Tu cuenta"; }
  else { el.innerHTML = `<span class="av ghost">👤</span><span class="acct-t">Iniciar sesión</span>`; el.title = "Inicia sesión y guarda tu progreso"; }
}
function toast(msg) { let t = $("#toast"); if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); } t.textContent = msg; t.classList.add("on"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("on"), 3000); }

/* ---------- modal de inicio de sesión ---------- */
function openLogin() {
  const m = $("#modal");
  if (!FIREBASE_CONFIG) {
    m.innerHTML = `<div class="box" role="dialog" aria-modal="true"><h3>Inicia sesión y guarda tu progreso</h3>
    <p class="muted">El inicio de sesión estará disponible en cuanto se active la cuenta del servicio. Mientras tanto, tu progreso se guarda en este navegador.</p>
    <p class="small muted">Para pasar el progreso a otro dispositivo, ve a <b>Progreso → Guardar o reiniciar el progreso → Exportar</b> e impórtalo en el otro dispositivo.</p>
    <div class="actions"><button class="btn primary" id="m-ok">Entendido</button></div></div>`;
    m.hidden = false; $("#m-ok").onclick = () => { m.hidden = true; m.innerHTML = ""; }; return;
  }
  let mode = "login";
  const paint = () => {
    m.innerHTML = `<div class="box loginbox" role="dialog" aria-modal="true">
      <img src="img/logo.svg" width="48" height="48" alt="" class="lg-logo">
      <h3>Inicia sesión y guarda tu progreso</h3>
      <p class="muted small">Tus lecciones, tarjetas, test y exámenes se guardan en tu cuenta y se sincronizan entre ordenador, iPad y móvil.</p>
      <button class="btn big google" id="lg-google"><svg viewBox="0 0 48 48" width="20" height="20"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg> Continuar con Google</button>
      <div class="or"><span>o con tu correo</span></div>
      <form id="lg-form">
        ${mode === "signup" ? `<input class="inp" id="lg-name" placeholder="Nombre o alias" autocomplete="nickname" required>` : ""}
        <input class="inp" id="lg-email" type="email" placeholder="Correo electrónico" autocomplete="email" required>
        <input class="inp" id="lg-pass" type="password" placeholder="Contraseña (mín. 6 caracteres)" autocomplete="${mode === "signup" ? "new-password" : "current-password"}" minlength="6" required>
        <div class="lg-err" id="lg-err"></div>
        <button class="btn primary big btn-block" type="submit">${mode === "signup" ? "Crear cuenta" : "Entrar"}</button>
      </form>
      <p class="small center">${mode === "signup" ? `¿Ya tienes cuenta? <a href="javascript:void 0" id="lg-sw">Inicia sesión</a>` : `¿No tienes cuenta? <a href="javascript:void 0" id="lg-sw">Regístrate</a> · <a href="javascript:void 0" id="lg-reset">¿Olvidaste la contraseña?</a>`}</p>
      <p class="tiny muted center">Tu progreso actual de este dispositivo se añadirá a tu cuenta.</p>
      <div class="actions"><button class="btn ghost" id="lg-x">Ahora no</button></div></div>`;
    m.hidden = false;
    const close = () => { m.hidden = true; m.innerHTML = ""; };
    $("#lg-x").onclick = close; m.onclick = e => { if (e.target === m) close(); };
    const err = t => { $("#lg-err").textContent = t; };
    const errMsg = e => ({ "auth/invalid-credential": "Correo o contraseña incorrectos.", "auth/wrong-password": "Contraseña incorrecta.", "auth/user-not-found": "No existe una cuenta con ese correo.", "auth/email-already-in-use": "Ya hay una cuenta con ese correo. Inicia sesión.", "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.", "auth/invalid-email": "El correo no es válido.", "auth/popup-closed-by-user": "Se cerró la ventana de Google.", "auth/unauthorized-domain": "Este dominio aún no está autorizado en Firebase." }[e.code] || "No se pudo iniciar sesión (" + (e.code || e.message) + ").");
    $("#lg-google").onclick = async () => { try { const p = new firebase.auth.GoogleAuthProvider(); p.setCustomParameters({ prompt: "select_account" }); await auth.signInWithPopup(p); close(); } catch (e) { if (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") { await auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); } else err(errMsg(e)); } };
    $("#lg-sw").onclick = () => { mode = mode === "login" ? "signup" : "login"; paint(); };
    const rs = $("#lg-reset"); if (rs) rs.onclick = async () => { const em = $("#lg-email").value.trim(); if (!em) return err("Escribe tu correo y vuelve a pulsar."); try { await auth.sendPasswordResetEmail(em); err("Te hemos enviado un correo para restablecer la contraseña."); } catch (e) { err(errMsg(e)); } };
    $("#lg-form").onsubmit = async ev => { ev.preventDefault(); const em = $("#lg-email").value.trim(), pw = $("#lg-pass").value;
      try { if (mode === "signup") { const c = await auth.createUserWithEmailAndPassword(em, pw); const nm = $("#lg-name").value.trim(); if (nm) { await c.user.updateProfile({ displayName: nm }); profile = Object.assign({}, profile, { alias: nm }); } } else await auth.signInWithEmailAndPassword(em, pw); close(); } catch (e) { err(errMsg(e)); } };
  };
  paint();
}

/* ---------- vistas: cuenta, ranking, admin ---------- */
function viewAccount() {
  const app = $("#app");
  if (!user) {
    app.innerHTML = `<div class="card center-card"><img src="img/logo.svg" width="64" height="64" alt=""><h2>Inicia sesión y guarda tu progreso</h2>
    <p class="muted">Con una cuenta tu progreso se guarda en la nube y lo tienes en todos tus dispositivos. ${FIREBASE_CONFIG ? "" : "<br><b>El inicio de sesión aún no está activado.</b>"}</p>
    <button class="btn primary big" id="ac-login">Iniciar sesión</button></div>`;
    $("#ac-login").onclick = openLogin; return;
  }
  const s = summary();
  app.innerHTML = `<h1>Tu cuenta</h1>
  <div class="card acct-card"><span class="av big">${esc((profile.alias || defaultAlias()).slice(0, 1).toUpperCase())}</span>
    <div><b>${esc(user.displayName || profile.alias || "")}</b><div class="small muted">${esc(user.email || "")}</div>
    <div class="tiny muted">${lastSync ? "Última sincronización: " + A().fmtDate(lastSync) : "Sincronizando…"}</div></div></div>
  <div class="grid g2 mt">
    <div class="card"><div class="card-h"><h3>Tu resumen</h3></div>
      <div class="mini-stats"><div><b>${s.mastery}%</b><span>dominio</span></div><div><b>${s.lessons}/${s.totalLessons}</b><span>lecciones</span></div><div><b>${s.best != null ? A().fmt1(s.best) : "—"}</b><span>mejor nota</span></div></div></div>
    <div class="card"><div class="card-h"><h3>Ranking</h3></div>
      <label class="field"><span class="lbl">Tu alias público</span><input class="inp" id="ac-alias" maxlength="24" value="${esc(profile.alias || defaultAlias())}"></label>
      <label class="switch"><input type="checkbox" id="ac-rank" ${profile.ranking ? "checked" : ""}> Aparecer en el ranking con mi alias</label>
      <div class="row mt"><button class="btn soft" id="ac-save">Guardar</button><a class="btn ghost" href="#/ranking">Ver ranking</a></div></div>
  </div>
  <div class="row mt">${isAdmin ? `<a class="btn primary" href="#/admin">🛠️ Panel de administración</a>` : ""}<button class="btn ghost danger" id="ac-out">Cerrar sesión</button></div>
  <p class="tiny muted mt">Guardamos tu nombre, correo y progreso de estudio para sincronizarlo entre dispositivos. La administradora de la app puede ver el progreso y las notas de los usuarios. En el ranking solo aparece tu alias, y solo si lo activas.</p>`;
  $("#ac-save").onclick = async () => { profile.alias = $("#ac-alias").value.trim().slice(0, 24) || defaultAlias(); profile.ranking = $("#ac-rank").checked; await push(true); paintBadge(); toast("Guardado"); };
  $("#ac-out").onclick = async () => { await push(true); await auth.signOut(); toast("Sesión cerrada"); A().go("#/"); };
}
async function viewRanking() {
  const app = $("#app");
  if (!user) { app.innerHTML = `<div class="card center-card"><h2>Ranking</h2><p class="muted">Inicia sesión para ver el ranking.</p><button class="btn primary" id="rk-l">Iniciar sesión</button></div>`; $("#rk-l").onclick = openLogin; return; }
  app.innerHTML = `<h1>Ranking</h1><div class="card"><div class="empty">Cargando…</div></div>`;
  try {
    const cfg = await db.collection("config").doc("ranking").get();
    if (cfg.exists && cfg.data().enabled === false) { app.innerHTML = `<h1>Ranking</h1><div class="card empty">El ranking está desactivado por la administradora.</div>`; return; }
    const snap = await db.collection(RANK).get();
    const rows = snap.docs.map(d => Object.assign({ uid: d.id }, d.data()));
    const tab = (title, key, fmt) => { const r = rows.filter(x => x[key] != null).sort((a, b) => b[key] - a[key]).slice(0, 20);
      return `<div class="card"><div class="card-h"><h3>${title}</h3></div>${r.length ? `<ol class="rank">${r.map((x, i) => `<li class="${x.uid === user.uid ? "me" : ""}"><span class="pos">${i < 3 ? ["🥇", "🥈", "🥉"][i] : i + 1}</span><span class="nm">${esc(x.alias || "Anónimo")}</span><b>${fmt(x[key])}</b></li>`).join("")}</ol>` : `<div class="empty">Aún no hay nadie.</div>`}</div>`; };
    app.innerHTML = `<h1>Ranking</h1><p class="muted small">Solo aparecen quienes lo han activado en su cuenta, y siempre con su alias. ${profile.ranking ? "" : `<a href="#/cuenta">Activa el tuyo</a>.`}</p>
    <div class="grid g2">${tab("Mejor nota de examen", "best", v => A().fmt1(v))}${tab("Dominio del temario", "mastery", v => v + "%")}${tab("Racha de días", "streak", v => v + " días")}${tab("Lecciones completadas", "lessons", v => v)}</div>`;
  } catch (e) { app.innerHTML = `<h1>Ranking</h1><div class="card empty">No se pudo cargar el ranking.</div>`; }
}
async function viewAdmin() {
  const app = $("#app");
  if (!isAdmin) { app.innerHTML = `<div class="card empty">Acceso restringido.</div>`; return; }
  app.innerHTML = `<h1>Panel de administración</h1><div class="card"><div class="empty">Cargando usuarios…</div></div>`;
  try {
    const [us, at, cfg] = await Promise.all([db.collection("users").get(), db.collection("attempts").orderBy("t", "desc").limit(300).get(), db.collection("config").doc("ranking").get()]);
    const users = us.docs.map(d => Object.assign({ uid: d.id }, d.data().profile || {}, { stats: d.data()[STATS] || {} })).sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0));
    const atts = at.docs.map(d => d.data());
    const enabled = !(cfg.exists && cfg.data().enabled === false);
    const avg = k => { const v = users.map(u => u.stats[k]).filter(x => x != null); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : 0; };
    const week = Date.now() - 7 * 864e5;
    app.innerHTML = `<h1>Panel de administración</h1>
    <div class="grid g4">
      <div class="card"><div class="kstat"><b>${users.length}</b><span>usuarios registrados</span></div></div>
      <div class="card"><div class="kstat"><b>${users.filter(u => (u.lastSeen || 0) > week).length}</b><span>activos esta semana</span></div></div>
      <div class="card"><div class="kstat"><b>${atts.length}</b><span>intentos de examen</span></div></div>
      <div class="card"><div class="kstat"><b>${avg("mastery")}%</b><span>dominio medio</span></div></div>
    </div>
    <div class="card mt"><div class="card-h"><h3>Usuarios</h3><div class="row"><label class="switch"><input type="checkbox" id="ad-rank" ${enabled ? "checked" : ""}> Ranking activado</label><button class="btn sm" id="ad-csv">Exportar CSV</button></div></div>
    <div style="overflow-x:auto"><table class="tbl" style="display:table"><thead><tr><th>Usuario</th><th>Correo</th><th>Dominio</th><th>Aciertos</th><th>Lecciones</th><th>Mejor nota</th><th>Exámenes</th><th>Racha</th><th>Última vez</th></tr></thead><tbody>
    ${users.map(u => `<tr><td><b>${esc(u.name || u.alias || "—")}</b>${u.ranking ? ` <span class="tag">ranking</span>` : ""}</td><td class="small">${esc(u.email || "")}</td><td>${u.stats.mastery ?? "—"}%</td><td>${u.stats.accuracy ?? "—"}%</td><td>${u.stats.lessons ?? 0}/${u.stats.totalLessons ?? ""}</td><td>${u.stats.best != null ? A().fmt1(u.stats.best) : "—"}</td><td>${u.stats.exams ?? 0}</td><td>${u.stats.streak ?? 0}</td><td class="small">${u.lastSeen ? A().fmtDate(u.lastSeen) : "—"}</td></tr>`).join("")}
    </tbody></table></div></div>
    <div class="card mt"><div class="card-h"><h3>Registro de intentos de examen</h3><span class="small muted">últimos ${atts.length}</span></div>
    <div style="overflow-x:auto"><table class="tbl" style="display:table"><thead><tr><th>Fecha</th><th>Usuario</th><th>Examen</th><th>Modo</th><th>Nota</th><th>✓</th><th>✗</th><th>◐</th><th>○</th><th>Tiempo</th></tr></thead><tbody>
    ${atts.map(a => `<tr><td class="small">${A().fmtDate(a.t)}</td><td>${esc(a.name || a.email || "")}</td><td>${esc(a.exam || a.examId)}${a.official === false ? "*" : ""}</td><td>${a.mode === "sim" ? "simulacro" : "sin tiempo"}</td><td><b>${A().fmt1(a.grade)}</b></td><td>${a.ok}</td><td>${a.ko}</td><td>${a.partial}</td><td>${a.blank}</td><td>${Math.round((a.dur || 0) / 60)} min</td></tr>`).join("")}
    </tbody></table></div><p class="tiny muted mb0">* Nota estimada con solución no oficial.</p></div>`;
    $("#ad-rank").onchange = async e => { await db.collection("config").doc("ranking").set({ enabled: e.target.checked }); toast(e.target.checked ? "Ranking activado" : "Ranking desactivado"); };
    $("#ad-csv").onclick = () => {
      const head = ["nombre", "correo", "alias", "dominio", "aciertos", "lecciones", "mejor_nota", "examenes", "racha", "ultima_vez"];
      const lines = [head.join(";")].concat(users.map(u => [u.name, u.email, u.alias, u.stats.mastery, u.stats.accuracy, u.stats.lessons, u.stats.best, u.stats.exams, u.stats.streak, u.lastSeen ? new Date(u.lastSeen).toISOString() : ""].map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(";")));
      const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + lines.join("\n")], { type: "text/csv" })); a.download = "usuarios-estructuras.csv"; a.click();
    };
  } catch (e) { console.error(e); app.innerHTML = `<h1>Panel de administración</h1><div class="card empty">No se pudieron cargar los datos (${esc(e.code || e.message)}).</div>`; }
}

/* ---------- API pública para app.js ---------- */
window.CLOUD = {
  enabled: !!FIREBASE_CONFIG,
  async init() {
    paintBadge();
    if (!FIREBASE_CONFIG) return;
    try {
      await loadScript(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-app-compat.js`);
      await Promise.all([loadScript(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-auth-compat.js`), loadScript(`https://www.gstatic.com/firebasejs/${FB_VER}/firebase-firestore-compat.js`)]);
      firebase.initializeApp(FIREBASE_CONFIG);
      auth = firebase.auth(); db = firebase.firestore();
      auth.onAuthStateChanged(async u => {
        user = u; isAdmin = false; profile = null;
        if (u && u.email) isAdmin = ADMIN_EMAIL_SHA256.includes(await sha256(u.email.toLowerCase()));
        paintBadge();
        if (u) { await pull(); toast("Sesión iniciada · progreso sincronizado"); }
        else if (/^#\/(cuenta|admin|ranking)/.test(location.hash)) A().route();
        ready = true;
      });
    } catch (e) { console.error("Firebase no disponible", e); }
  },
  onSave() { if (user) push(false); },
  recordAttempt(h, ex) {
    if (!user || !db) return;
    push(true);
    db.collection("attempts").add({ subject: SID, uid: user.uid, name: user.displayName || (profile && profile.alias) || "", email: user.email || "", examId: h.examId, exam: ex ? ex.short + " " + ex.version : h.examId, official: h.official !== false, mode: h.mode, grade: h.grade, ok: h.ok, ko: h.ko, partial: h.partial, blank: h.blank, dur: h.dur, t: h.t, auto: !!h.auto, answers: JSON.stringify(h.ans) }).catch(e => console.error(e));
  },
  homeBanner() {
    if (user) return "";
    return `<a class="card login-banner" href="javascript:void 0" onclick="CLOUD.login()"><span class="ic-sq">☁️</span><div><b>Inicia sesión y guarda tu progreso</b><div class="small muted">Sincroniza tus lecciones, tarjetas y exámenes entre el ordenador, el iPad y el móvil.</div></div><span class="btn primary sm">Iniciar sesión</span></a>`;
  },
  login: openLogin,
  view(p0) {
    if (p0 === "cuenta") { viewAccount(); return true; }
    if (p0 === "ranking") { viewRanking(); return true; }
    if (p0 === "admin") { viewAdmin(); return true; }
    return false;
  }
};
const flush = () => { if (user && saveTimer) push(true); };
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });
window.addEventListener("pagehide", flush);
document.addEventListener("click", e => { const a = e.target.closest("#acct"); if (a && !user) { e.preventDefault(); openLogin(); } });
})();
