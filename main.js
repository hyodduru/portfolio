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
    navbarMenu.classList.remove('open');
    scrollIntoView(link);

})

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
 navbarMenu.classList.toggle('open');
})




//Handle click on "contact me" button on home

const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", (event)=>{
    scrollIntoView('#contact')
    
    
})



//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;


document.addEventListener("scroll",()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


//Show "arrow up" button when scrolling down
const arrowUpBtn = document.querySelector(".arrow-up");

document.addEventListener("scroll",()=>{
    if(window.scrollY>homeHeight/2){
        arrowUpBtn.classList.add("visible");
    }else{
        arrowUpBtn.classList.remove("visible");
    }
})


//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener("click",(event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter; 
    if(filter==null){
        return;
    }
    //Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{  
    projects.forEach((project)=>{
        
        if(filter ==='*' || filter===project.dataset.type){
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
    });
        projectContainer.classList.remove('anim-out')
    },300);
    }

)

//Handle Click on the "arrow up" button
arrowUpBtn.addEventListener("click",()=>{
    scrollIntoView('#home');
})


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector) 
    scrollTo.scrollIntoView({behavior: 'smooth'});
    
}

