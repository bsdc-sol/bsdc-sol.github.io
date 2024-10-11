const menu = document.querySelector('.hamMenu');
const services = document.getElementById("services");
const about = document.getElementById("about");
const help = document.getElementById("help");

const offScreenMenu = document.querySelector('.offScreenMenu')

menu.addEventListener("click", function (){
    menu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});
services.addEventListener("click", function(){
    window.locatoin.href("servicesMobile.html")
});
about.addEventListener("click", function(){
    window.location.href("aboutMobile.html")
});
help.addEventListener("click", function(){
    window.location.href("helpMobile.html")
});
