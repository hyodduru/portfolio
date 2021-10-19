'use strict';

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;


//Make navbar transparent when it is on the top
document.addEventListener('scroll', ()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})


//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');



navbarMenu.addEventListener('click', (event)=>{

    const link = event.target.dataset.link;
    if(link ==null){
        return;
    }
    scrollIntoView(link);

})

//Handle click on "contact me" button on home

const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", (event)=>{
    scrollIntoView('#contact')
    
    
})


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

