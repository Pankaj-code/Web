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
var slide = document.querySelector(".slides");
var slideImg = document.querySelectorAll(".slides img");
var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn");
var counter = 0;
var i=0;
var lastVal = slideImg.length;
function slidefix(){
    for(i=1;i<lastVal;i++){
        slideImg[i].style.left=100+"%";
    }
}
function slideLeft(){
    counter--;
    for(i=0;i<lastVal;i++){
        if(i>counter){
            slideImg[i].style.left="100%";
        }
        else if(i==counter){
            slideImg[i].style.left="0%";
        }
        else if(i<counter){
            slideImg[i].style.left="-100%";
        }
        slideImg[i].style.transition="0.5s ease";
    }
    if(counter==0){
        prevBtn.style.display="none";
    }
    else{
        nextBtn.style.display="block";
    }
}
function slideRight(){
    counter++;
    for(i=0;i<lastVal;i++){
        if(i<counter){
            slideImg[i].style.left="-100%";
        }
        else if(i==counter){
            slideImg[i].style.left="0%";
        }
        else if(i>counter){
            slideImg[i].style.left="100%";
        }
        slideImg[i].style.transition="0.5s ease";
    }
    if(counter+1==lastVal){
        nextBtn.style.display="none";
    }
    else{
        prevBtn.style.display="block";
    }
}
var count=0;
setInterval(() => {
    if(counter+1<lastVal)
        slideRight();
    else
        while(counter!=0){
            slideLeft();
        }
}, 5000);