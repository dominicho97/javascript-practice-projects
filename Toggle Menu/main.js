

let toggleNavStatus = false;

let toggleNav = function(){
  let getSideBar = document.querySelector(".nav-sidebar ");
  let getSideBarUl = document.querySelector(".nav-sidebar ul");
  let getSideBarTitle = document.querySelector(".nav-sidebar span");
  let getSideBarLinks = document.querySelectorAll(".nav-sidebar a");


if (toggleNavStatus === false){
getSideBarUl.style.visibility = "visible";
getSideBarTitle.style.width = "272px";
}

}