const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
const remove = document.getElementById('remove-menu')
menu.addEventListener('click', toggleMenu)

function toggleMenu() {
   menu.classList.toggle('active')
   nav.classList.toggle('active')
   remove.classList.toggle('active')
}