const I18N = {
  pt: {
    contacts: "Contatos", rooms: "Salas", addBtn: "+ Entrar numa sala", help: "Como usar",
    attach: "Enviar imagem", placeholder: "Digite uma mensagem...", send: "Enviar",
    deleteContact: "Excluir contato", close: "Fechar",
    noContacts: "Nenhum contato ainda. Clique em \"{btn}\" e entre na mesma sala que o seu amigo.",
    noRooms: "Nenhuma sala ainda.",
    pickContact: "Selecione um contato para conversar",
    pickContactBody: "Escolha um contato na lista para ver a conversa.",
    noMessages: "Nenhuma mensagem ainda. Escreva a primeira.",
    online: "online", offline: "offline", imgAlt: "Imagem enviada",
    statusStarting: "Iniciando...", statusConnecting: "Conectando aos servidores...",
    statusReady: "Pronto para conversar", statusNoRooms: "Entre em uma sala para começar",
    statusNoLib: "O arquivo trystero.js não carregou (ausente ou bloqueado?)",
    statusBlocked: "Não consegui falar com os servidores de apresentação. Pode ser bloqueador de anúncios, firewall ou rede.",
    statusJoinError: "Sala \"{room}\": a senha pode estar diferente ou a rede bloqueia a conexão direta.",
    askName: "Seu nome (seus contatos vão ver):", anon: "Anônimo",
    storageFull: "O armazenamento do navegador está cheio. Novas mensagens não serão salvas. Exclua conversas com muitas imagens.",
    pickFirst: "Selecione um contato primeiro.",
    contactOffline: "Esse contato está offline. Os dois precisam estar com a página aberta e na mesma sala.",
    notImage: "Escolha um arquivo de imagem.", imgReadFail: "Não foi possível ler essa imagem.",
    askRoom: "Nome da sala (combine com seu amigo; os dois precisam digitar igual):",
    askRoomPass: "Senha da sala (combine com seu amigo; só quem souber a senha entra):",
    roomNeedsPass: "Informe uma senha. Sem senha a sala não fica protegida.",
    roomExists: "Você já está nessa sala.",
    leaveRoom: "Sair da sala {name}",
    confirmLeaveRoom: "Sair da sala '{name}'? Os contatos e conversas continuam salvos.",
    confirmDelete: "Excluir '{name}'? Isso apaga o histórico da conversa também.",
    helpTitle: "Como usar o Chat",
    goalTitle: "Qual é o objetivo?",
    goal: "O Projeto Chat é um chat simples para conversar com amigos e colegas direto entre computadores, enviando mensagens e imagens sem criar conta e sem um servidor guardando suas conversas. Nasceu como um projeto de estudo de redes e JavaScript, com visual inspirado no Discord.",
    howTitle: "Como funciona?",
    how: "Você e seu amigo entram na mesma sala, com o mesmo nome e a mesma senha. Quem estiver na sala aparece na sua lista de contatos, e seu navegador abre uma conexão direta (WebRTC) com o dele. As mensagens e imagens vão direto de um para o outro. Servidores públicos só ajudam vocês a se encontrarem no começo. O histórico fica salvo no seu próprio navegador.",
    stepsTitle: "Passo a passo",
    steps: [
      "Combine com seu amigo um nome de sala e uma senha (por qualquer aplicativo).",
      "Clique em \"{btn}\" e digite o nome e a senha.",
      "Seu amigo faz o mesmo, com o mesmo nome e a mesma senha.",
      "Quando ele aparecer na lista com a bolinha verde, está online. Escolha o contato e converse.",
      "Use o clipe 📎 para enviar imagens. Clique com o botão direito em um contato para excluí-lo."
    ],
    limitsTitle: "Bom saber",
    limits: [
      "Os dois precisam estar com a página aberta para trocar mensagens.",
      "Os contatos aparecem sozinhos, mas só para quem entrou na mesma sala com a mesma senha.",
      "O histórico fica salvo só neste navegador. Limpar os dados do site apaga tudo.",
      "Em redes muito restritas, ou com extensões que desligam o WebRTC, a conexão pode falhar. Se isso acontecer, aparece um aviso no topo da página.",
      "Se o contato não aparecer: confira se o nome e a senha da sala são exatamente iguais nos dois lados (maiúsculas contam), se os dois estão com a página aberta e se o topo mostra \"Pronto para conversar\". Abra o site pelo endereço do GitHub Pages, não pelo arquivo no computador."
    ],
    privacyTitle: "Privacidade",
    privacy: "As mensagens vão direto entre os navegadores, criptografadas, e não passam por um servidor. Os servidores públicos de apresentação conseguem ver que existe uma sala e os endereços de rede de quem conecta. Use uma senha que só vocês conhecem: quem souber o nome e a senha da sala entra nela."
  },
  en: {
    contacts: "Contacts", rooms: "Rooms", addBtn: "+ Join a room", help: "How to use",
    attach: "Send image", placeholder: "Type a message...", send: "Send",
    deleteContact: "Delete contact", close: "Close",
    noContacts: "No contacts yet. Click \"{btn}\" and join the same room as your friend.",
    noRooms: "No rooms yet.",
    pickContact: "Select a contact to chat",
    pickContactBody: "Choose a contact from the list to see the conversation.",
    noMessages: "No messages yet. Write the first one.",
    online: "online", offline: "offline", imgAlt: "Image sent",
    statusStarting: "Starting...", statusConnecting: "Connecting to servers...",
    statusReady: "Ready to chat", statusNoRooms: "Join a room to start",
    statusNoLib: "trystero.js failed to load (missing or blocked?)",
    statusBlocked: "I couldn't reach the introduction servers. It may be an ad blocker, a firewall or the network.",
    statusJoinError: "Room \"{room}\": the password may differ or the network blocks direct connections.",
    askName: "Your name (your contacts will see it):", anon: "Anonymous",
    storageFull: "Browser storage is full. New messages will not be saved. Delete conversations with many images.",
    pickFirst: "Select a contact first.",
    contactOffline: "This contact is offline. You both need the page open and to be in the same room.",
    notImage: "Choose an image file.", imgReadFail: "Could not read that image.",
    askRoom: "Room name (agree with your friend; you both must type it exactly the same):",
    askRoomPass: "Room password (agree with your friend; only people who know it can join):",
    roomNeedsPass: "Enter a password. Without one the room is not protected.",
    roomExists: "You are already in that room.",
    leaveRoom: "Leave room {name}",
    confirmLeaveRoom: "Leave room '{name}'? Contacts and conversations stay saved.",
    confirmDelete: "Delete '{name}'? This also erases the conversation history.",
    helpTitle: "How to use Chat",
    goalTitle: "What is it for?",
    goal: "Chat Project is a simple chat to talk with friends and coworkers directly between computers, sending messages and images with no account and no server storing your conversations. It started as a study project about networking and JavaScript, with a look inspired by Discord.",
    howTitle: "How does it work?",
    how: "You and your friend join the same room, with the same name and password. Everyone in the room shows up in your contact list, and your browser opens a direct connection (WebRTC) to theirs. Messages and images travel straight from one to the other. Public servers only help you find each other at the start. Your history is saved in your own browser.",
    stepsTitle: "Step by step",
    steps: [
      "Agree with your friend on a room name and a password (through any app).",
      "Click \"{btn}\" and type the name and the password.",
      "Your friend does the same, with the same name and the same password.",
      "When they show up in the list with a green dot, they are online. Pick the contact and start chatting.",
      "Use the paperclip 📎 to send images. Right-click a contact to delete it."
    ],
    limitsTitle: "Good to know",
    limits: [
      "Both people need to have the page open to exchange messages.",
      "Contacts show up on their own, but only for people who joined the same room with the same password.",
      "History is stored only in this browser. Clearing the site's data erases everything.",
      "On very restrictive networks, or with extensions that turn WebRTC off, the connection may fail. If that happens, a notice appears at the top of the page.",
      "If the contact does not show up: check that the room name and password are exactly the same on both sides (case matters), that you both have the page open, and that the top shows \"Ready to chat\". Open the site from its GitHub Pages address, not from the file on your computer."
    ],
    privacyTitle: "Privacy",
    privacy: "Messages go straight between browsers, encrypted, and do not pass through a server. The public introduction servers can see that a room exists and the network addresses of whoever connects. Use a password only you two know: anyone who knows the room name and password can join it."
  },
  es: {
    contacts: "Contactos", rooms: "Salas", addBtn: "+ Entrar en una sala", help: "Cómo usar",
    attach: "Enviar imagen", placeholder: "Escribe un mensaje...", send: "Enviar",
    deleteContact: "Eliminar contacto", close: "Cerrar",
    noContacts: "Aún no hay contactos. Haz clic en \"{btn}\" y entra en la misma sala que tu amigo.",
    noRooms: "Aún no hay salas.",
    pickContact: "Selecciona un contacto para conversar",
    pickContactBody: "Elige un contacto de la lista para ver la conversación.",
    noMessages: "Aún no hay mensajes. Escribe el primero.",
    online: "en línea", offline: "sin conexión", imgAlt: "Imagen enviada",
    statusStarting: "Iniciando...", statusConnecting: "Conectando a los servidores...",
    statusReady: "Listo para conversar", statusNoRooms: "Entra en una sala para empezar",
    statusNoLib: "No se cargó trystero.js (¿falta o está bloqueado?)",
    statusBlocked: "No pude comunicarme con los servidores de presentación. Puede ser un bloqueador de anuncios, un firewall o la red.",
    statusJoinError: "Sala \"{room}\": la contraseña puede ser distinta o la red bloquea la conexión directa.",
    askName: "Tu nombre (tus contactos lo verán):", anon: "Anónimo",
    storageFull: "El almacenamiento del navegador está lleno. Los mensajes nuevos no se guardarán. Elimina conversaciones con muchas imágenes.",
    pickFirst: "Selecciona un contacto primero.",
    contactOffline: "Este contacto está sin conexión. Los dos necesitan tener la página abierta y estar en la misma sala.",
    notImage: "Elige un archivo de imagen.", imgReadFail: "No se pudo leer esa imagen.",
    askRoom: "Nombre de la sala (acuérdalo con tu amigo; los dos deben escribirlo igual):",
    askRoomPass: "Contraseña de la sala (acuérdala con tu amigo; solo entra quien la sepa):",
    roomNeedsPass: "Escribe una contraseña. Sin ella la sala no está protegida.",
    roomExists: "Ya estás en esa sala.",
    leaveRoom: "Salir de la sala {name}",
    confirmLeaveRoom: "¿Salir de la sala '{name}'? Los contactos y conversaciones siguen guardados.",
    confirmDelete: "¿Eliminar '{name}'? Esto también borra el historial de la conversación.",
    helpTitle: "Cómo usar Chat",
    goalTitle: "¿Para qué sirve?",
    goal: "Projeto Chat es un chat sencillo para conversar con amigos y compañeros directamente entre computadoras, enviando mensajes e imágenes sin crear cuenta y sin un servidor que guarde tus conversaciones. Nació como un proyecto de estudio de redes y JavaScript, con un aspecto inspirado en Discord.",
    howTitle: "¿Cómo funciona?",
    how: "Tú y tu amigo entran en la misma sala, con el mismo nombre y la misma contraseña. Quien esté en la sala aparece en tu lista de contactos, y tu navegador abre una conexión directa (WebRTC) con el suyo. Los mensajes y las imágenes van directo de uno a otro. Los servidores públicos solo les ayudan a encontrarse al comienzo. El historial se guarda en tu propio navegador.",
    stepsTitle: "Paso a paso",
    steps: [
      "Acuerda con tu amigo un nombre de sala y una contraseña (por cualquier aplicación).",
      "Haz clic en \"{btn}\" y escribe el nombre y la contraseña.",
      "Tu amigo hace lo mismo, con el mismo nombre y la misma contraseña.",
      "Cuando aparezca en la lista con el punto verde, está en línea. Elige el contacto y conversa.",
      "Usa el clip 📎 para enviar imágenes. Haz clic derecho en un contacto para eliminarlo."
    ],
    limitsTitle: "Conviene saber",
    limits: [
      "Las dos personas necesitan tener la página abierta para intercambiar mensajes.",
      "Los contactos aparecen solos, pero solo para quienes entraron en la misma sala con la misma contraseña.",
      "El historial se guarda solo en este navegador. Borrar los datos del sitio elimina todo.",
      "En redes muy restrictivas, o con extensiones que desactivan WebRTC, la conexión puede fallar. Si ocurre, aparece un aviso arriba en la página.",
      "Si el contacto no aparece: revisa que el nombre y la contraseña de la sala sean exactamente iguales en los dos lados (importan las mayúsculas), que los dos tengan la página abierta y que arriba diga \"Listo para conversar\". Abre el sitio desde su dirección de GitHub Pages, no desde el archivo en tu computadora."
    ],
    privacyTitle: "Privacidad",
    privacy: "Los mensajes van directo entre los navegadores, cifrados, y no pasan por un servidor. Los servidores públicos de presentación pueden ver que existe una sala y las direcciones de red de quien se conecta. Usa una contraseña que solo ustedes conozcan: quien sepa el nombre y la contraseña de la sala puede entrar."
  }
};
const LOCALES = { pt: "pt-BR", en: "en-US", es: "es-ES" };

const KEY = "lanchat.v1";
const APP_ID = "lanchat-web-7f3a91";
const MAX_TEXT = 2000;
const MAX_ROOM = 40;
const IMG_MAX = 800;
const BLOCKED_AFTER_MS = 15000;
const TURN_URL = "";
const ID_RE = /^[A-Za-z0-9][A-Za-z0-9_-]{0,62}[A-Za-z0-9]$/;

const $ = id => document.getElementById(id);
const list = $("contactList"), box = $("messages"), helpDlg = $("helpDialog"), roomList = $("roomList");

function randomId() {
  const a = new Uint8Array(8);
  crypto.getRandomValues(a);
  return "lc-" + Array.from(a, b => (b % 36).toString(36)).join("");
}
function loadSaved() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
function cleanName(v) { return String(v || "").trim().slice(0, 30); }
function cleanRoom(v) { return String(v || "").trim().slice(0, MAX_ROOM); }

const state = Object.assign({ name: "", peerId: "", lang: "", rooms: [], contacts: {} }, loadSaved());
if (!state.contacts || typeof state.contacts !== "object") state.contacts = {};
if (!Array.isArray(state.rooms)) state.rooms = [];
state.rooms = state.rooms.filter(r => r && typeof r.name === "string" && typeof r.password === "string");
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
let T = null;
let turnConfig = [];
let waitStart = 0;
let joinProblem = null;
const handles = {};
const links = {};
const isOnline = id => !!(links[id] && links[id].length);

let statusInfo = { key: "statusStarting", ok: false, vars: null };
function setStatus(key, ok, vars) { statusInfo = { key, ok, vars: vars || null }; renderStatus(); }
function renderStatus() {
  const s = $("status");
  s.textContent = t(statusInfo.key, statusInfo.vars);
  s.className = "status" + (statusInfo.ok ? " ok" : "");
}

function updateStatus() {
  if (!T) { setStatus("statusNoLib", false); return; }
  if (!state.rooms.length) { setStatus("statusNoRooms", false); return; }
  let open = 0;
  try {
    open = Object.values(T.getRelaySockets()).filter(w => w && w.readyState === 1).length;
  } catch {}
  if (!open) {
    setStatus(waitStart && Date.now() - waitStart > BLOCKED_AFTER_MS ? "statusBlocked" : "statusConnecting", false);
    return;
  }
  if (joinProblem) { setStatus("statusJoinError", false, { room: joinProblem }); return; }
  setStatus("statusReady", true);
}
setInterval(updateStatus, 2500);

const quiet = p => Promise.resolve(p).catch(() => {});

function openRoom(r) {
  if (!T || handles[r.name]) return;
  waitStart = waitStart || Date.now();
  const cfg = { appId: APP_ID, password: r.password };
  if (turnConfig.length) cfg.turnConfig = turnConfig;
  const room = T.joinRoom(cfg, r.name, {
    onJoinError: () => { joinProblem = r.name; updateStatus(); }
  });
  const hello = room.makeAction("hello");
  const text = room.makeAction("text");
  const image = room.makeAction("image");
  handles[r.name] = { room, hello, text, image, peers: {} };
  room.onPeerJoin = pid => quiet(hello.send({ id: state.peerId, name: state.name }, { target: pid }));
  room.onPeerLeave = pid => unlink(r.name, pid);
  hello.onMessage = (d, m) => onHello(r.name, m.peerId, d);
  text.onMessage = (d, m) => onText(r.name, m.peerId, d);
  image.onMessage = (d, m) => onImage(r.name, m.peerId, d);
}

function closeRoom(name) {
  const h = handles[name];
  if (h) {
    try { h.room.leave(); } catch {}
    Object.keys(h.peers).forEach(pid => unlink(name, pid));
    delete handles[name];
  }
  state.rooms = state.rooms.filter(r => r.name !== name);
  if (joinProblem === name) joinProblem = null;
  save();
  renderRooms();
  refresh();
  updateStatus();
}

function contactOf(roomName, pid) {
  const h = handles[roomName];
  const id = h && h.peers[pid];
  return id && state.contacts[id] ? id : null;
}

function onHello(roomName, pid, d) {
  const h = handles[roomName];
  if (!h || !d || typeof d !== "object" || typeof d.id !== "string") return;
  if (!ID_RE.test(d.id) || d.id === state.peerId) return;
  const name = cleanName(d.name);
  h.peers[pid] = d.id;
  const l = links[d.id] || (links[d.id] = []);
  if (!l.some(x => x.room === roomName && x.peerId === pid)) l.push({ room: roomName, peerId: pid });
  const c = ensureContact(d.id, name, false);
  if (!c.custom && name && c.name !== name) { c.name = name; save(); }
  if (joinProblem === roomName) joinProblem = null;
  refresh();
  updateStatus();
}

function unlink(roomName, pid) {
  const h = handles[roomName];
  const id = h && h.peers[pid];
  if (h) delete h.peers[pid];
  if (!id || !links[id]) return;
  links[id] = links[id].filter(x => !(x.room === roomName && x.peerId === pid));
  if (!links[id].length) delete links[id];
  refresh();
}

function ensureContact(id, name, custom) {
  let c = state.contacts[id];
  if (!c) {
    c = state.contacts[id] = { name: name || id, custom: !!custom, messages: [], unread: 0 };
    save();
  }
  return c;
}

function onText(roomName, pid, d) {
  const id = contactOf(roomName, pid);
  if (!id || typeof d !== "string") return;
  addMessage(id, { own: false, type: "text", text: d.slice(0, MAX_TEXT), time: now() });
}

function onImage(roomName, pid, d) {
  const id = contactOf(roomName, pid);
  if (!id || typeof d !== "string" || !d.startsWith("data:image/") || d.length >= 2000000) return;
  addMessage(id, { own: false, type: "image", data: d, time: now() });
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
  const link = links[current] && links[current][0];
  const h = link && handles[link.room];
  if (!h) { alert(t("contactOffline")); return false; }
  quiet(msg.type === "image"
    ? h.image.send(msg.data, { target: link.peerId })
    : h.text.send(msg.text, { target: link.peerId }));
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
  document.title = (total ? `(${total}) ` : "") + "Projeto Chat";
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

function renderRooms() {
  roomList.innerHTML = "";
  if (!state.rooms.length) {
    const li = document.createElement("li");
    li.className = "room-empty";
    li.textContent = t("noRooms");
    roomList.appendChild(li);
    return;
  }
  state.rooms.forEach(r => {
    const li = document.createElement("li");
    li.className = "room-chip";
    const nm = document.createElement("span");
    nm.textContent = r.name;
    const x = document.createElement("button");
    x.textContent = "✕";
    x.setAttribute("aria-label", t("leaveRoom", { name: r.name }));
    x.title = t("leaveRoom", { name: r.name });
    x.onclick = () => { if (confirm(t("confirmLeaveRoom", { name: r.name }))) closeRoom(r.name); };
    li.append(nm, x);
    roomList.appendChild(li);
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
  renderRooms();
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
    t(key).forEach(txt => {
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
  const name = cleanRoom(prompt(t("askRoom")));
  if (!name) return;
  if (state.rooms.some(r => r.name === name)) { alert(t("roomExists")); return; }
  const password = (prompt(t("askRoomPass")) || "").trim();
  if (!password) { alert(t("roomNeedsPass")); return; }
  const r = { name, password };
  state.rooms.push(r);
  save();
  openRoom(r);
  renderRooms();
  updateStatus();
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
  delete state.contacts[id];
  if (current === id) current = null;
  save();
  refresh();
  renderMessages();
};

async function boot() {
  try { T = await import("./trystero.js"); } catch { T = null; }
  if (T && TURN_URL) {
    try {
      const turn = await fetch(TURN_URL).then(r => r.json());
      if (Array.isArray(turn)) turnConfig = turn;
    } catch {}
  }
  state.rooms.forEach(openRoom);
  updateStatus();
}

$("whoami").textContent = "Projeto Chat — " + state.name;
applyLang();
boot();
