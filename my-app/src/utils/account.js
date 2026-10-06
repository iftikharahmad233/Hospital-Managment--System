export function hasSavedAccount() {
  return (
    localStorage.getItem("isLoggedIn") === "true" ||
    Boolean(localStorage.getItem("user"))
  );
}

export function getSavedUser() {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
}

export function clearSavedAccount() {
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
}