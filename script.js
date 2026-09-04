const menu = document.getElementById("site-menu");
const toggle = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-inner a");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function openMenu() {
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Close menu");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
}

toggle.addEventListener("click", () => {
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

closeButton.addEventListener("click", closeMenu);
menuLinks.forEach(link => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    closeMenu();
  }
});
