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

// Animation
gsap.registerPlugin(ScrollTrigger);
gsap.from(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});
gsap.from(".animate-services", {
  scrollTrigger: ".animate-services",
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});
