// theme.js - simple helper to toggle light/dark on <html>
export function setTheme(theme) {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

export function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
    return saved;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? "dark" : "light");
  return prefersDark ? "dark" : "light";
}
