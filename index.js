let menuList = document.querySelectorAll(".menu-list");
let navbar = document.querySelector(".navbar");
let menuIcon = document.querySelector(".menu-icon");
let closeMenu = document.querySelector(".close-menu")
//console.log(navbar.classList.add("navbar-hidden"))
if(window.innerWidth < 950){
    navbar.style.left = "-46vw";
}
console.log(menuList,typeof window.innerWidth)
menuList.forEach((listItem,index)=>{
    let opacity = 1 - (index+1)/10;
    listItem.style.backgroundColor = `rgb(2, 87, 132,${opacity})`;
    if(index===menuList.length-1) {
        listItem.classList.add("active");
        console.log("last",listItem.classList)
    }
})

menuIcon.addEventListener("click",openNav);
closeMenu.addEventListener("click",closeNav)

function openNav() {
    console.log("Menu Open");
    navbar.style.left = "0";
}

function closeNav(){
    console.log("Menu Open");
    navbar.style.left = "-46vw";
}