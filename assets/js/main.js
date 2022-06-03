const navigation = document.querySelector('#navigation')
const menuOpen = document.querySelector('.open-menu')
const menuClose = document.querySelector('.close-menu')

window.addEventListener('scroll', () => {

    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }

})

if(menuOpen) {
    menuOpen.addEventListener('click', () => {
        document.body.classList.add('menu-expanded')
    })
}

if(menuClose) {
    menuClose.addEventListener('click', () => {
        document.body.classList.remove('menu-expanded')
    })
}

