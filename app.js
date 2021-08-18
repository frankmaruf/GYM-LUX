const menu = document.querySelector("#mobile-menu"),
  menuLinks = document.querySelector(".navbar__menu"),
  navLogo = document.querySelector("#navbar__logo"),
  body = document.querySelector("body");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);
