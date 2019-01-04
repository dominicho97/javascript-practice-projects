

let toggleNavStatus = false;

let toggleNav = function(){
  let getSidebar = document.querySelector(".nav-sidebar ");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");


  if (toggleNavStatus === false){
  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "272px";
  getSidebarTitle.style.opacity = "0.5";


  let arrayLength = getSidebarLinks.length;
  for (let i = 0; i < arraylength; i++) {
  getSidebarLinks[0].style.opacity = "1";
      
    }
  }
}
