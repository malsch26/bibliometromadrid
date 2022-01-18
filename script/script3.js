// EJERCICIO 3 - PÁGINA 1A

// CARRUSEL

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}//pasa la imagen al clicar 

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
} //que la imagen que aparece haga caso a un timer y al pasar el tiempo se pase a la imagen siguiente

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {//permite que cambie la imagen segun el punto correspondiente
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 3000);//cada tres segundos se pasa la imagen
} 

// Pop Up
//abre la pestaña de clicada correspondiente
function openNav1() {
  document.getElementById("myNav").style.width = "100%";
}
//cierra la pestaña de clicada correspondiente
function closeNav1() {
  document.getElementById("myNav").style.width = "0%";
}

function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}

function openNav3() {
  document.getElementById("myNav3").style.width = "100%";
}

function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
}

function openNav4() {
  document.getElementById("myNav4").style.width = "100%";
}

function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
}

// FAQ
// es la funcion correspondiente al apartado FAQ permite que se abra y se cierre esa pestaña con la información correspondiente
var acc = document.getElementsByClassName("acordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}