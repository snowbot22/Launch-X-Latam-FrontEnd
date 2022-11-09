//VARIABLES
let body= document.querySelector("body")
let mobileUl= document.querySelector(".header__nav__ul--mobile");
let menuIconMobile= document.querySelector(".menu--icon");
let windowSize;
let isMobileUlOpen;

//MOBILE MENU TOGLE FUNCTION

let toggleMobileMenu = ()=>{
    mobileUl.classList.toggle("hidden");
} 

menuIconMobile.addEventListener("click", toggleMobileMenu ) 

//TABLET RESIZE MENU

let tabletMenu = () => { 
    windowSize= body.clientWidth;
    isMobileUlOpen= mobileUl.classList.contains("hidden");
    if(windowSize > 768 && !isMobileUlOpen){
        mobileUl.classList.add("hidden");
    }
}

windowSize= window.addEventListener("resize", tabletMenu);


