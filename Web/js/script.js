var sec = document.querySelector(".section");
var show = document.querySelector(".open");
var hide = document.querySelector(".close");
function opennav(){
    sec.style.left="0";
    sec.style.transition="0.5s";
    show.style.display="none";
    hide.style.display="block";
}
function closenav(){
    sec.style.left="-250px";
    sec.style.transition="0.5s";
    show.style.display="block";
    hide.style.display="none";
}
var bar = document.querySelector("nav");
var showbar = document.querySelector(".arrow");
var hidebar = document.querySelector(".closing");
function openbar(){
    bar.style.display="block";
    showbar.style.display="none";
    hidebar.style.display="block";
}
function closebar(){
    bar.style.display="none";
    showbar.style.display="block";
    hidebar.style.display="none";
}