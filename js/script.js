document.querySelector("bars__menu").addEventListener("click", animateBars);


var bars__menu = document.querySelector(".line1__bars__menu");
var bars__menu = document.querySelector(".line2__bars__menu");
var bars__menu = document.querySelector(".line3__bars__menu");


function animateBars ("bars__menu"){
    line1__bars__menu .classList.toggle(".activate .line1__bars__menu");
    line2__bars__menu .classList.toggle(".active .line2__bars__menu");
    line3__bars__menu .classList.toggle(".activate .line3__bars__menu");
}
