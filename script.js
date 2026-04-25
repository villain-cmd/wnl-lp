const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
