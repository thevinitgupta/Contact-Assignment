let menuList = document.querySelectorAll(".menu-list");
let navbar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-icon");
let closeMenu = document.querySelector(".close-menu")
//console.log(navbar.classList.add("navbar-hidden"))
if(window.innerWidth < 950){
    closeNav();
}

menuList.forEach((listItem,index)=>{
    let opacity = 1 - (index+1)/10;
    listItem.style.backgroundColor = `rgb(2, 87, 132,${opacity})`;
    if(index===menuList.length-1) {
        listItem.classList.add("active");
    }
})

menuIcon.addEventListener("click",openNav);
closeMenu.addEventListener("click",closeNav)

function openNav() {
    navbar.style.left = "0";
}

function closeNav(){
    navbar.style.left = `-${getHideValue()}vw`;
}

function getHideValue(){
    return window.innerWidth;
}