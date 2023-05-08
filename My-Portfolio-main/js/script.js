
let links = {
    navtoggle: '.nav-toggle',
    navopen: 'nav-open',
    navlink: '.nav__link'
};

const navToggle = document.querySelector(links.navtoggle);
const navLinks = document.querySelectorAll(links.navlink);

navToggle.addEventListener('click', () => {
    document.body.classList.toggle(links.navopen);
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove(links.navopen);
    })
});