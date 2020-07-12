const toggle = document.querySelector(".toggle");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const about = document.querySelector(".about");

 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");


        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
        logo.querySelector("a").innerHTML = "<h1 class='logo-text'></h1>";

    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);