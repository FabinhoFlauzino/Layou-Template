const navigation = document.querySelector("#navigation");
const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const links = document.querySelectorAll(".menu a");



window.addEventListener("scroll", () => {
  //mostrandto menu
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }

  ativarMenuSessaoCorrente(home);
  ativarMenuSessaoCorrente(services);
  ativarMenuSessaoCorrente(about);
  ativarMenuSessaoCorrente(contact);

});

function ativarMenuSessaoCorrente(section) {

  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const passedTargetLine = targetLine >= sectionTop


  const finalSection = sectionTop + sectionHeight
  const finalSectionPassedTarget = finalSection <= targetLine

  const sectionLimits = passedTargetLine && !finalSectionPassedTarget

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if(sectionLimits){
    menuElement.classList.add('active')
  }


}

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
