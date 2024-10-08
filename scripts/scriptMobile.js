const menu = document.querySelector('.hamMenu');

const offScreenMenu = document.querySelector('.offScreenMenu')

menu.addEventListener("click",function (){
    menu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});