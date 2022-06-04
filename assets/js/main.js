const navigation = document.querySelector("#navigation");
const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
});

if (menuOpen) {
  menuOpen.addEventListener("click", () => {
    document.body.classList.add("menu-expanded");
  });
}

if (menuClose) {
  menuClose.addEventListener("click", () => {
    document.body.classList.remove("menu-expanded");
  });
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-expanded");
  });
});

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 700,
}).reveal(`#home, #home img, #home .stats, 
            #services
        `);
