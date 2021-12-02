// Nav Hide on click
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
let navToggle = document.querySelector('.navbar-toggler')
navBar.forEach(function(e){
    e.addEventListener('click', function(){
        navCollapse.classList.remove('show');
        navToggle.classList.remove('opened')
    })
})
let DropdownNavBar = document.querySelectorAll('.dropdown-item');
let DropdownNavCollapse = document.querySelector('.navbar-collapse.collapse');

DropdownNavBar.forEach(function(e){
    e.addEventListener('click', function(){
        DropdownNavCollapse.classList.remove('show');
    })
})
// On scroll Navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on')
    }else{
        nav.classList.remove('scroll-on')
    }
}
