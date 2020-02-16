
// select Dom Ele 
const menuBtn = document.querySelector(".main-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-brand");
const navItems = document.querySelectorAll(".nav-item");

//? initial state menu


let showMenu = false;

menuBtn.addEventListener("click",toggleMenu);

function toggleMenu(){
    
    if (!showMenu){

        menuBtn.classList.add("close");
        menu.classList.add("show"); 
        menuNav.classList.add("show");
        menuBrand.classList.add("show");
        navItems.forEach(item => item.classList.add("show")); 

        //? set menu state
        showMenu = true;

    }else{

        menuBtn.classList.remove("close");
        menu.classList.remove("show"); 
        menuNav.classList.remove("show");
        menuBrand.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show")); 

        //? set menu state
        showMenu = false; 
    
    }
}