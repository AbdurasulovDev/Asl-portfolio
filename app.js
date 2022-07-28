window.addEventListener('scroll', function(){
    let header = this.document.getElementById('head');

    header.classList.toggle('header-active', window.scrollY > 100)
})

const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav-link');

burger.addEventListener('click', () => {
    navLink.classList.toggle('open')
})
