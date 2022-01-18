// EJERCICIO 1 - PÁGINA 2B

// Popup cerrar sesión

function myFunction() {
    var txt;
    if (confirm("¿Quieres cerrar sesión?")) {
        window.location = "index.html";
    } else {
      txt = "Cancelar";
    }
  }

  // Contador de los iconos más leídos

  window.onload = function () {

     // UPDATE PROFILE
     document.getElementById('bienvenida').innerHTML='¡Hola '+localStorage.getItem("fname")+'!'; //agrega el nombre del usuario
     document.getElementById('fotoPerfil').src='images/'+localStorage.getItem("image").split("\\").pop(); //agrega la foto de perfil elegida por el usuario. Se recomienda seleccionar la galaeria de fotos llamadas perfil
     document.getElementById('imagenoculta').src='images/'+localStorage.getItem("image").split("\\").pop(); //que aparezca la imagen del usuario en su comentario
     document.getElementById('nombre').innerHTML=localStorage.getItem("fname")+'.'; // que aparezca el nombre del usuario en su comentario

// cuenta los carritos al hacer click y cambia la imagen
    var contador = 0;

    document.getElementById("carro1").onclick = function () {
        contador++;
        document.getElementById("contador").innerHTML = contador
        document.getElementById('carro1').src='images/carros.png'
    };
    document.getElementById("carro2").onclick = function () {
        contador++;
        document.getElementById("contador").innerHTML = contador
        document.getElementById('carro2').src='images/carros.png'
    };
    document.getElementById("carro3").onclick = function () {
        contador++;
        document.getElementById("contador").innerHTML = contador
        document.getElementById('carro3').src='images/carros.png'
    };
    document.getElementById("carro4").onclick = function () {
        contador++;
        document.getElementById("contador").innerHTML = contador
        document.getElementById('carro4').src='images/carros.png'
    };
}

// Contenido checkbox

function myCheck() {
  var checkBox = document.getElementById("myCheck"); //cuando se haga click se ponga el aspita
  var x = document.getElementById("previo2"); //aparezca el contenedor previo2 con la informacion correspondiente
  if (checkBox.checked == true){ // si se cumple la funcion que aparezca o no
      x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var checkBox = document.getElementById("myCheck1");
  var x = document.getElementById("previo3");
  if (checkBox.checked == true){
      x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var checkBox = document.getElementById("myCheck2");
  var x = document.getElementById("previo4");
  if (checkBox.checked == true){
      x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var checkBox = document.getElementById("myCheck3");
  var x = document.getElementById("previo5");
  if (checkBox.checked == true){
      x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Comentar

function miComentario() {
  var x = document.getElementById("respuesta").value;
  document.getElementById("contenedortexto").innerHTML = x;
if (document.getElementById("contenedor-previo4").style.display == "none") { // permite que aparezca el contenedor o desaparezca segun si se hace click en el boton
  document.getElementById("contenedor-previo4").style.display = "block";
} else {
  document.getElementById("contenedor-previo4").style.display = "none";
}
}