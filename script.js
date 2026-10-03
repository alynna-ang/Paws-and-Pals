
const menuButton = document.getElementById("menu-button");
const siteNav = document.getElementById("site-nav");

menuButton.addEventListener("click", function () {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll("#site-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
