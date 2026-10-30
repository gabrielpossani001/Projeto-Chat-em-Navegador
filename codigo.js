const I18N = {
  pt: {
    idLabel: "Seu ID:", copy: "Copiar", copied: "Copiado!", copyPrompt: "Copie seu ID:",
    contacts: "Contatos", addBtn: "+ Conectar por ID", help: "Como usar",
    attach: "Enviar imagem", placeholder: "Digite uma mensagem...", send: "Enviar",
    deleteContact: "Excluir contato", close: "Fechar",
    noContacts: "Nenhum contato ainda. Clique em \"{btn}\" e cole o ID do seu amigo.",
    pickContact: "Selecione um contato para conversar",
    pickContactBody: "Escolha um contato na lista para ver a conversa.",
    noMessages: "Nenhuma mensagem ainda. Escreva a primeira.",
    online: "online", offline: "offline", imgAlt: "Imagem enviada",
    statusStarting: "Iniciando...", statusConnecting: "Conectando ao servidor...",
    statusReady: "Pronto para conversar", statusReconnecting: "Reconectando...",
    statusNoLib: "Biblioteca PeerJS não carregou (sem internet?)",
    statusIdInUse: "Seu ID já está em uso (outra aba aberta?)",
    statusError: "Erro de conexão: {type}",
    askName: "Seu nome (seus contatos vão ver):", anon: "Anônimo",
    storageFull: "O armazenamento do navegador está cheio. Novas mensagens não serão salvas. Exclua conversas com muitas imagens.",
    acceptConn: "{who} ({id}) quer conversar com você. Aceitar?",
    pickFirst: "Selecione um contato primeiro.",
    contactOffline: "Esse contato está offline. A mensagem só pode ser enviada quando ele estiver com a página aberta.",
    notImage: "Escolha um arquivo de imagem.", imgReadFail: "Não foi possível ler essa imagem.",
    askId: "ID do seu amigo (aparece no topo da página dele):",
    ownId: "Esse é o seu próprio ID.", badId: "ID inválido.",
    askNick: "Como quer chamar esse contato? (opcional)",
    confirmDelete: "Excluir '{name}'? Isso apaga o histórico da conversa também.",
    helpTitle: "Como usar o Chat",
    goalTitle: "Qual é o objetivo?",
    goal: "O Projeto Chat é um chat simples para conversar com amigos e colegas direto entre computadores, enviando mensagens e imagens sem criar conta e sem um servidor guardando suas conversas. Nasceu como um projeto de estudo de redes e JavaScript, com visual inspirado no Discord.",
    howTitle: "Como funciona?",
    how: "Cada pessoa recebe um ID. Quando você conecta no ID de alguém, seu navegador abre uma conexão direta (WebRTC) com o dele. As mensagens e imagens vão direto de um para o outro. Um servidor público só ajuda os dois a se encontrarem no começo. O histórico fica salvo no seu próprio navegador.",
    stepsTitle: "Passo a passo",
    steps: [
      "Copie seu ID no topo da página e envie para o seu amigo (por qualquer aplicativo).",
      "Peça o ID dele e clique em \"{btn}\".",
      "Cole o ID, dê um apelido (opcional) e confirme.",
      "Quando a bolinha do contato ficar verde, ele está online. Escolha o contato e converse.",
      "Use o clipe 📎 para enviar imagens. Clique com o botão direito em um contato para excluí-lo."
    ],
    limitsTitle: "Bom saber",
    limits: [
      "Os dois precisam estar com a página aberta para trocar mensagens.",
      "Não existe descoberta automática de contatos. A troca de IDs faz esse papel.",
      "O histórico fica salvo só neste navegador. Limpar os dados do site apaga tudo.",
      "Em redes muito restritas a conexão pode falhar."
    ],
    privacyTitle: "Privacidade",
    privacy: "As mensagens não passam por servidor, mas o servidor de apresentação enxerga os IDs e os endereços de rede de quem conecta. Não compartilhe seu ID com quem você não conhece: quem tiver seu ID pode pedir para conversar (você sempre pode recusar)."
  },
  en: {
    idLabel: "Your ID:", copy: "Copy", copied: "Copied!", copyPrompt: "Copy your ID:",
    contacts: "Contacts", addBtn: "+ Connect by ID", help: "How to use",
    attach: "Send image", placeholder: "Type a message...", send: "Send",
    deleteContact: "Delete contact", close: "Close",
    noContacts: "No contacts yet. Click \"{btn}\" and paste your friend's ID.",
    pickContact: "Select a contact to chat",
    pickContactBody: "Choose a contact from the list to see the conversation.",
    noMessages: "No messages yet. Write the first one.",
    online: "online", offline: "offline", imgAlt: "Image sent",
    statusStarting: "Starting...", statusConnecting: "Connecting to server...",
    statusReady: "Ready to chat", statusReconnecting: "Reconnecting...",
    statusNoLib: "PeerJS library failed to load (no internet?)",
    statusIdInUse: "Your ID is already in use (another tab open?)",
    statusError: "Connection error: {type}",
    askName: "Your name (your contacts will see it):", anon: "Anonymous",
    storageFull: "Browser storage is full. New messages will not be saved. Delete conversations with many images.",
    acceptConn: "{who} ({id}) wants to chat with you. Accept?",
    pickFirst: "Select a contact first.",
    contactOffline: "This contact is offline. Messages can only be sent while they have the page open.",
    notImage: "Choose an image file.", imgReadFail: "Could not read that image.",
    askId: "Your friend's ID (shown at the top of their page):",
    ownId: "That is your own ID.", badId: "Invalid ID.",
    askNick: "What do you want to call this contact? (optional)",
    confirmDelete: "Delete '{name}'? This also erases the conversation history.",
    helpTitle: "How to use Chat",
    goalTitle: "What is it for?",
    goal: "Chat Project is a simple chat to talk with friends and coworkers directly between computers, sending messages and images with no account and no server storing your conversations. It started as a study project about networking and JavaScript, with a look inspired by Discord.",
    howTitle: "How does it work?",
    how: "Each person gets an ID. When you connect to someone's ID, your browser opens a direct connection (WebRTC) to theirs. Messages and images travel straight from one to the other. A public server only helps the two of you find each other at the start. Your history is saved in your own browser.",
    stepsTitle: "Step by step",
    steps: [
      "Copy your ID at the top of the page and send it to your friend (through any app).",
      "Ask for their ID and click \"{btn}\".",
      "Paste the ID, give them a nickname (optional) and confirm.",
      "When the contact's dot turns green, they are online. Pick the contact and start chatting.",
      "Use the paperclip 📎 to send images. Right-click a contact to delete it."
    ],
    limitsTitle: "Good to know",
    limits: [
      "Both people need to have the page open to exchange messages.",
      "There is no automatic contact discovery. Exchanging IDs takes its place.",
      "History is stored only in this browser. Clearing the site's data erases everything.",
      "On very restrictive networks the connection may fail."
    ],
    privacyTitle: "Privacy",
    privacy: "Messages do not go through a server, but the introduction server can see the IDs and network addresses of whoever connects. Do not share your ID with people you don't know: anyone with your ID can ask to chat (you can always decline)."
  },
  es: {
    idLabel: "Tu ID:", copy: "Copiar", copied: "¡Copiado!", copyPrompt: "Copia tu ID:",
    contacts: "Contactos", addBtn: "+ Conectar por ID", help: "Cómo usar",
    attach: "Enviar imagen", placeholder: "Escribe un mensaje...", send: "Enviar",
    deleteContact: "Eliminar contacto", close: "Cerrar",
    noContacts: "Aún no hay contactos. Haz clic en \"{btn}\" y pega el ID de tu amigo.",
    pickContact: "Selecciona un contacto para conversar",
    pickContactBody: "Elige un contacto de la lista para ver la conversación.",
    noMessages: "Aún no hay mensajes. Escribe el primero.",
    online: "en línea", offline: "sin conexión", imgAlt: "Imagen enviada",
    statusStarting: "Iniciando...", statusConnecting: "Conectando al servidor...",
    statusReady: "Listo para conversar", statusReconnecting: "Reconectando...",
    statusNoLib: "No se cargó la biblioteca PeerJS (¿sin internet?)",
    statusIdInUse: "Tu ID ya está en uso (¿otra pestaña abierta?)",
    statusError: "Error de conexión: {type}",
    askName: "Tu nombre (tus contactos lo verán):", anon: "Anónimo",
    storageFull: "El almacenamiento del navegador está lleno. Los mensajes nuevos no se guardarán. Elimina conversaciones con muchas imágenes.",
    acceptConn: "{who} ({id}) quiere conversar contigo. ¿Aceptar?",
    pickFirst: "Selecciona un contacto primero.",
    contactOffline: "Este contacto está sin conexión. El mensaje solo se puede enviar cuando tenga la página abierta.",
    notImage: "Elige un archivo de imagen.", imgReadFail: "No se pudo leer esa imagen.",
    askId: "ID de tu amigo (aparece arriba en su página):",
    ownId: "Ese es tu propio ID.", badId: "ID no válido.",
    askNick: "¿Cómo quieres llamar a este contacto? (opcional)",
    confirmDelete: "¿Eliminar '{name}'? Esto también borra el historial de la conversación.",
    helpTitle: "Cómo usar o Chat",
    goalTitle: "¿Para qué sirve?",
    goal: "Projeto Chat es un chat sencillo para conversar con amigos y compañeros directamente entre computadoras, enviando mensajes e imágenes sin crear cuenta y sin un servidor que guarde tus conversaciones. Nació como un proyecto de estudio de redes y JavaScript, con un aspecto inspirado en Discord.",
    howTitle: "¿Cómo funciona?",
    how: "Cada persona recibe un ID. Cuando te conectas al ID de alguien, tu navegador abre una conexión directa (WebRTC) con el suyo. Los mensajes y las imágenes van directo de uno a otro. Un servidor público solo ayuda a que ambos se encuentren al comienzo. El historial se guarda en tu propio navegador.",
    stepsTitle: "Paso a paso",
    steps: [
      "Copia tu ID en la parte superior de la página y envíaselo a tu amigo (por cualquier aplicación).",
      "Pídele su ID y haz clic en \"{btn}\".",
      "Pega el ID, ponle un apodo (opcional) y confirma.",
      "Cuando el punto del contacto se ponga verde, está en línea. Elige el contacto y conversa.",
      "Usa el clip 📎 para enviar imágenes. Haz clic derecho en un contacto para eliminarlo."
    ],
    limitsTitle: "Conviene saber",
    limits: [
      "Las dos personas necesitan tener la página abierta para intercambiar mensajes.",
      "No hay descubrimiento automático de contactos. El intercambio de IDs ocupa ese lugar.",
      "El historial se guarda solo en este navegador. Borrar los datos del sitio elimina todo.",
      "En redes muy restrictivas la conexión puede fallar."
    ],
    privacyTitle: "Privacidad",
    privacy: "Los mensajes no pasan por un servidor, pero el servidor de presentación puede ver los IDs y las direcciones de red de quien se conecta. No compartas tu ID con personas que no conoces: quien tenga tu ID puede pedir conversar (siempre puedes rechazar)."
  }
};
const LOCALES = { pt: "pt-BR", en: "en-US", es: "es-ES" };   

const KEY = "lanchat.v1";
const MAX_TEXT = 2000;      
const IMG_MAX = 800;        
const RETRY_MS = 20000;     

const $ = id => document.getElementById(id);
const list = $("contactList"), box = $("messages"), helpDlg = $("helpDialog");

function randomId() {
  const a = new Uint8Array(8);
  crypto.getRandomValues(a);
  return "lc-" + Array.from(a, b => (b % 36).toString(36)).join("");
}
function loadSaved() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
function cleanName(v) { return String(v || "").trim().slice(0, 30); }

const state = Object.assign({ name: "", peerId: "", lang: "", contacts: {} }, loadSaved());
if (!state.contacts || typeof state.contacts !== "object") state.contacts = {};
if (!state.peerId) state.peerId = randomId();

function detectLang() {
  const nav = String(navigator.language || "en").slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : "en";
}
let lang = I18N[state.lang] ? state.lang : detectLang();

function t(key, vars) {
  let s = (I18N[lang] && I18N[lang][key]) ?? I18N.pt[key] ?? key;
  if (typeof s === "string" && vars) {
    s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  }
  return s;
}

if (!state.name) state.name = cleanName(prompt(t("askName"))) || t("anon");

let saveWarned = false;
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch {
    if (!saveWarned) { saveWarned = true; alert(t("storageFull")); }
  }
}
state.lang = lang;
save();

const now = () =>
  new Date().toLocaleTimeString(LOCALES[lang], { hour: "2-digit", minute: "2-digit", hour12: false });

let current = null;   
let peer = null; 
const conns = {}; 
const isOnline = id => !!(conns[id] && conns[id].open);

let statusInfo = { key: "statusStarting", ok: false, vars: null };
function setStatus(key, ok, vars) { statusInfo = { key, ok, vars: vars || null }; renderStatus(); }
function renderStatus() {
  const s = $("status");
  s.textContent = t(statusInfo.key, statusInfo.vars);
  s.className = "status" + (statusInfo.ok ? " ok" : "");
}

function startPeer() {
  if (typeof Peer === "undefined") { setStatus("statusNoLib", false); return; }
  setStatus("statusConnecting", false);
  peer = new Peer(state.peerId);
  peer.on("open", () => { setStatus("statusReady", true); connectAllSaved(); });
  peer.on("connection", conn => setupConn(conn, true));
  peer.on("disconnected", () => {
    setStatus("statusReconnecting", false);
    setTimeout(() => { if (peer && !peer.destroyed) peer.reconnect(); }, 3000);
  });
  peer.on("error", err => {
    if (err.type === "peer-unavailable") return;   
    if (err.type === "unavailable-id") setStatus("statusIdInUse", false);
    else setStatus("statusError", false, { type: err.type });
  });
}

function connectTo(id) {
  if (!peer || !peer.open || id === state.peerId || isOnline(id)) return;
  const conn = peer.connect(id, { reliable: true, metadata: { name: state.name } });
  setupConn(conn, false);
}

function connectAllSaved() {
  Object.keys(state.contacts).forEach(id => { if (state.peerId < id) connectTo(id); });
}
setInterval(() => { if (peer && peer.open) connectAllSaved(); }, RETRY_MS);

function preferred(conn, incoming) {
  const initiator = incoming ? conn.peer : state.peerId;
  const smaller = state.peerId < conn.peer ? state.peerId : conn.peer;
  return initiator === smaller;
}

function setupConn(conn, incoming) {
  const id = conn.peer;

  conn.on("open", () => {
    if (incoming && !state.contacts[id]) {
      const who = cleanName(conn.metadata && conn.metadata.name) || id;
      if (!confirm(t("acceptConn", { who, id }))) { conn.close(); return; }
    }
    const old = conns[id];
    if (old && old.open && old !== conn) {
      if (!preferred(conn, incoming)) { conn.close(); return; }
      conns[id] = conn;
      old.close();
    } else {
      conns[id] = conn;
    }
    ensureContact(id, incoming ? cleanName(conn.metadata && conn.metadata.name) : "", false);
    conn.send({ type: "hello", name: state.name });
    refresh();
  });

  conn.on("data", data => onData(id, data));

  const gone = () => { if (conns[id] === conn) { delete conns[id]; refresh(); } };
  conn.on("close", gone);
  conn.on("error", gone);
}

function ensureContact(id, name, custom) {
  let c = state.contacts[id];
  if (!c) {
    c = state.contacts[id] = { name: name || id, custom: !!custom, messages: [], unread: 0 };
    save();
  }
  return c;
}

function onData(id, data) {
  const c = state.contacts[id];
  if (!c || !data || typeof data !== "object") return;

  if (data.type === "hello") {
    if (!c.custom && cleanName(data.name)) { c.name = cleanName(data.name); save(); refresh(); }
  } else if (data.type === "text" && typeof data.text === "string") {
    addMessage(id, { own: false, type: "text", text: data.text.slice(0, MAX_TEXT), time: now() });
  } else if (data.type === "image" && typeof data.data === "string"
             && data.data.startsWith("data:image/") && data.data.length < 2000000) {
    addMessage(id, { own: false, type: "image", data: data.data, time: now() });
  }
}

function addMessage(id, msg) {
  const c = state.contacts[id];
  if (!c) return;
  c.messages.push(msg);
  if (id === current) renderMessages();
  else if (!msg.own) c.unread = (c.unread || 0) + 1;
  save();
  refresh();
}

function sendMessage(msg) {
  if (!current) { alert(t("pickFirst")); return false; }
  const conn = conns[current];
  if (!conn || !conn.open) { alert(t("contactOffline")); return false; }
  conn.send(msg.type === "image" ? { type: "image", data: msg.data } : { type: "text", text: msg.text });
  addMessage(current, msg);
  return true;
}

$("sendBtn").onclick = sendText;
$("msgInput").addEventListener("keydown", e => { if (e.key === "Enter") sendText(); });
function sendText() {
  const input = $("msgInput"), text = input.value.trim().slice(0, MAX_TEXT);
  if (!text) return;
  if (sendMessage({ own: true, type: "text", text, time: now() })) input.value = "";
}

function shrinkImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, IMG_MAX / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.round(img.width * k);
      cv.height = Math.round(img.height * k);
      const g = cv.getContext("2d");
      g.fillStyle = "#fff";
      g.fillRect(0, 0, cv.width, cv.height);
      g.drawImage(img, 0, 0, cv.width, cv.height);
      URL.revokeObjectURL(url);
      resolve(cv.toDataURL("image/jpeg", 0.8));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("invalid image")); };
    img.src = url;
  });
}

$("attachBtn").onclick = () => $("fileInput").click();
$("fileInput").onchange = e => {
  const file = e.target.files[0];
  e.target.value = "";
  if (!file) return;
  if (!file.type.startsWith("image/")) { alert(t("notImage")); return; }
  shrinkImage(file)
    .then(data => sendMessage({ own: true, type: "image", data, time: now() }))
    .catch(() => alert(t("imgReadFail")));
};

function refresh() {
  renderContacts();
  renderHeader();
  const total = Object.values(state.contacts).reduce((n, c) => n + (c.unread || 0), 0);
  document.title = (total ? `(${total}) ` : "") + "LAN Chat";
}

function renderContacts() {
  list.innerHTML = "";
  const ids = Object.keys(state.contacts)
    .sort((a, b) => state.contacts[a].name.localeCompare(state.contacts[b].name, LOCALES[lang]));
  if (!ids.length) {
    const p = document.createElement("li");
    p.className = "list-empty";
    p.textContent = t("noContacts", { btn: t("addBtn") });
    list.appendChild(p);
    return;
  }
  ids.forEach(id => {
    const c = state.contacts[id];
    const li = document.createElement("li");
    li.className = "contact" + (id === current ? " active" : "");
    li.tabIndex = 0;
    const dot = document.createElement("span");
    dot.className = "dot" + (isOnline(id) ? " on" : "");
    const nm = document.createElement("span");
    nm.className = "name"; nm.textContent = c.name;
    li.append(dot, nm);
    if (c.unread > 0) {
      const b = document.createElement("span");
      b.className = "badge"; b.textContent = c.unread;
      li.appendChild(b);
    }
    li.onclick = () => selectContact(id);
    li.onkeydown = e => { if (e.key === "Enter") selectContact(id); };
    li.oncontextmenu = e => { e.preventDefault(); showCtx(e.clientX, e.clientY, id); };
    list.appendChild(li);
  });
}

function renderHeader() {
  const el = $("chatTitle");
  el.textContent = "";
  const c = current && state.contacts[current];
  if (!c) { el.textContent = t("pickContact"); return; }
  const dot = document.createElement("span");
  dot.className = "dot" + (isOnline(current) ? " on" : "");
  const nm = document.createElement("span");
  nm.textContent = c.name;
  const st = document.createElement("span");
  st.className = "chat-state";
  st.textContent = t(isOnline(current) ? "online" : "offline");
  el.append(dot, nm, st);
}

function selectContact(id) {
  current = id;
  state.contacts[id].unread = 0;
  save();
  refresh();
  renderMessages();
}

function renderMessages() {
  box.innerHTML = "";
  const c = current && state.contacts[current];
  const note = key => {
    const p = document.createElement("p");
    p.className = "empty"; p.textContent = t(key);
    box.appendChild(p);
  };
  if (!c) { note("pickContactBody"); return; }
  if (!c.messages.length) { note("noMessages"); return; }
  c.messages.forEach(m => {
    const row = document.createElement("div");
    row.className = "row" + (m.own ? " own" : "");
    const b = document.createElement("div");
    b.className = "bubble";
    const s = document.createElement("span");
    s.className = "sender"; s.textContent = m.own ? state.name : c.name;
    b.appendChild(s);
    if (m.type === "image" && typeof m.data === "string" && m.data.startsWith("data:image/")) {
      const img = document.createElement("img");
      img.src = m.data; img.alt = t("imgAlt");
      b.appendChild(img);
    } else {
      const tx = document.createElement("span");
      tx.className = "text"; tx.textContent = m.text || "";
      b.appendChild(tx);
    }
    const tm = document.createElement("span");
    tm.className = "time"; tm.textContent = m.time;
    b.appendChild(tm);
    row.appendChild(b);
    box.appendChild(row);
  });
  box.scrollTop = box.scrollHeight;
}

function applyLang() {
  document.documentElement.lang = LOCALES[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  renderStatus();
  refresh();
  renderMessages();
  if (helpDlg.open) renderHelp();
}

$("lang").value = lang;
$("lang").onchange = e => {
  lang = I18N[e.target.value] ? e.target.value : "en";
  state.lang = lang;
  save();
  applyLang();
};

function renderHelp() {
  $("helpTitle").textContent = t("helpTitle");
  const body = $("helpBody");
  body.textContent = "";
  const heading = key => {
    const h = document.createElement("h3"); h.textContent = t(key); body.appendChild(h);
  };
  const para = key => {
    const p = document.createElement("p"); p.textContent = t(key); body.appendChild(p);
  };
  const items = (key, tag) => {
    const ul = document.createElement(tag);
    t(key, { btn: t("addBtn") }).forEach(txt => {
      const li = document.createElement("li");
      li.textContent = typeof txt === "string" ? txt.replace("{btn}", t("addBtn")) : "";
      ul.appendChild(li);
    });
    body.appendChild(ul);
  };
  heading("goalTitle");    para("goal");
  heading("howTitle");     para("how");
  heading("stepsTitle");   items("steps", "ol");
  heading("limitsTitle");  items("limits", "ul");
  heading("privacyTitle"); para("privacy");
}

let helpOpener = null;
$("helpBtn").onclick = e => {
  helpOpener = e.currentTarget;
  renderHelp();
  helpDlg.showModal();
  $("helpClose").focus();
};
$("helpClose").onclick = () => helpDlg.close();
helpDlg.addEventListener("click", e => { if (e.target === helpDlg) helpDlg.close(); });
helpDlg.addEventListener("close", () => { if (helpOpener) helpOpener.focus(); });

$("addBtn").onclick = () => {
  const id = (prompt(t("askId")) || "").trim();
  if (!id) return;
  if (id === state.peerId) { alert(t("ownId")); return; }
  if (!/^[A-Za-z0-9][A-Za-z0-9_-]{0,62}[A-Za-z0-9]$/.test(id)) { alert(t("badId")); return; }
  const nick = cleanName(prompt(t("askNick")));
  const c = ensureContact(id, nick, !!nick);
  if (nick) { c.name = nick; c.custom = true; }
  save();
  connectTo(id);
  selectContact(id);
};

$("copyBtn").onclick = () => {
  const btn = $("copyBtn");
  const done = () => { btn.textContent = t("copied"); setTimeout(() => { btn.textContent = t("copy"); }, 1500); };
  if (navigator.clipboard) navigator.clipboard.writeText(state.peerId).then(done, () => prompt(t("copyPrompt"), state.peerId));
  else prompt(t("copyPrompt"), state.peerId);
};

const ctx = $("ctx");
let ctxTarget = null;
function showCtx(x, y, id) {
  ctxTarget = id;
  ctx.style.left = x + "px"; ctx.style.top = y + "px"; ctx.style.display = "block";
}
document.addEventListener("click", () => { ctx.style.display = "none"; });
$("ctxDelete").onclick = () => {
  const id = ctxTarget;
  if (!id || !state.contacts[id]) return;
  if (!confirm(t("confirmDelete", { name: state.contacts[id].name }))) return;
  if (conns[id]) { const c = conns[id]; delete conns[id]; c.close(); }
  delete state.contacts[id];
  if (current === id) current = null;
  save();
  refresh();
  renderMessages();
};

$("whoami").textContent = "Projeto Chat — " + state.name;
$("myId").textContent = state.peerId;
applyLang();
startPeer();
