const menuBars = document.getElementById('menu-bars')

function toggleNav() {
    menuBars.classList.toggle('change')
}

menuBars.addEventListener('click', toggleNav)