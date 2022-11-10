//VARIABLES
let body= document.querySelector("body")
let mobileUl= document.querySelector(".header__nav__ul--mobile");
let menuIconMobile= document.querySelector(".menu--icon");
let windowSize;
let isMobileUlOpen;
let title1= document.getElementById("t--1");
let p1= document.getElementById("p--1");
let title2= document.getElementById("t--2");
let p2=document.getElementById("p--2");
let title3= document.getElementById("t--3");
let p3= document.getElementById("p--3");
let title4= document.getElementById("t--4");
let p4= document.getElementById("p--4");
let title5= document.getElementById("t--5");
let p5=document.getElementById("p--5");


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


//ARTICLE 4 TOGLE PARAGRAPH

let togleP = () =>{
    p1.classList.toggle("hidden")
}
let toggleP2= () =>{
    p2.classList.toggle("hidden");
};
let toggleP3= () =>{
    p3.classList.toggle("hidden");
};
let toggleP4= () =>{
    p4.classList.toggle("hidden");
};
let toggleP5= () =>{
    p5.classList.toggle("hidden");
};


title1.addEventListener("click", togleP);
title2.addEventListener("click",toggleP2);
title3.addEventListener("click", toggleP3);
title4.addEventListener("click", toggleP4);
title5.addEventListener("click", toggleP5);