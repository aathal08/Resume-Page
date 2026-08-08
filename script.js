const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀" : "☾";
  localStorage.setItem("theme", dark ? "dark" : "light");
});
