(() => {
  "use strict";

  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    if (themeToggle) {
      themeToggle.textContent = isDark ? "☀" : "☾";
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }
  };

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme");
  } catch (error) {
    // The page still works when browser storage is unavailable.
  }
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {
      // Theme changes remain active for this page view.
    }
  });

  const closeMenu = () => {
    primaryNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    if (menuToggle) menuToggle.textContent = "☰";
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = primaryNav?.classList.toggle("open") ?? false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  primaryNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeMenu();
  });
})();
