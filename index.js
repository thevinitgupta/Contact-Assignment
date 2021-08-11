let menuList = document.querySelectorAll(".menu-list");
console.log(menuList)
menuList.forEach((listItem,index)=>{
    let opacity = 1 - (index+1)/10;
    listItem.style.backgroundColor = `rgb(2, 87, 132,${opacity})`;
    if(index===menuList.length-1) {
        listItem.classList.add("active");
        console.log("last",listItem.classList)
    }
})
