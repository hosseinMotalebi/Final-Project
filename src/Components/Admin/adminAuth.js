const ADMIN_HASH =
  "915b9844c31971a9bd08974f46d93c4f50929511dbbcea4e3c0435890fd37b51";

const SESSION_KEY = "admin_session";
const USERS_KEY = "app_users_db";

async function sha256(text) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Admin login needs https:// or localhost.");
  }
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ---------- admin session ----------
export async function tryAdminLogin(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const hash = await sha256(`${cleanEmail}:${password}`);
  if (hash !== ADMIN_HASH) return false;
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ email: cleanEmail, loginAt: new Date().toISOString() }),
  );
  return true;
}

export function getAdminSession() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

export function adminLogout() {
  sessionStorage.removeItem(SESSION_KEY);
}

// ---------- registered users (localStorage) ----------
export function getUsers() {
  try {
    const list = JSON.parse(localStorage.getItem(USERS_KEY));
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function addUser({ fullName, email, password }) {
  const users = getUsers();
  const cleanEmail = email.trim().toLowerCase();
  if (users.some((u) => u.email === cleanEmail)) {
    return { ok: false, error: "This email is already registered." };
  }
  const nextId = Math.max(1000, ...users.map((u) => Number(u.id) || 0)) + 1;
  const newUser = {
    id: nextId,
    fullName: fullName.trim(),
    email: cleanEmail,
    password,
    joinDate: new Date().toLocaleDateString("fa-IR"),
  };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
  return { ok: true, user: newUser };
}

export function findUser(email, password) {
  const cleanEmail = email.trim().toLowerCase();
  return (
    getUsers().find((u) => u.email === cleanEmail && u.password === password) ||
    null
  );
}
