// EJERCICIO 2 - PÁGINA 2A

// UPDATE PROFILE
document.getElementById('fotoPerfil').src="images" +"/"+ localStorage.getItem("image").split("\\").pop();
 
// VALIDATE FORM
function validateForm(){
    //Primero validamos el formulario
     
    let x = document.forms["form1"];
      console.log(x["image"].value);
      if (x["fname"].value == "") {
        alert("Por favor rellene el campo Nombre");
         return false;
    }
        else if (x["lname"].value == "") {
        alert("Por favor rellene el campo Apellido");
         return false;
    }
        else if (x["email"].value == "") {
        alert("Por favor rellene el campo correo electrónico");
         return false;
    }
        else if (x["confirmarEmail"].value == "") {
        alert("Por favor rellene el campo confirmar correo electrónico");
         return false;
    }
        else if (x["email"].value != x["confirmarEmail"].value) {
        alert("Los emails no coinciden");
         return false;
    }
        else if (x["permiso"].checked != true) {
        alert("Por favor acepte las condiciones de uso");
         return false;
    }
        else{ //Si esta todo correcto, almacenamos datos en local
     
        //console.log( getBase64Image(x["image"]));
        localStorage.setItem("fname", x["fname"].value);
        localStorage.setItem("lname", x["lname"].value);
        localStorage.setItem("email", x["email"].value);
        localStorage.setItem("birth", x["birth"].value);
        localStorage.setItem("image", x["image"].value);
         console.log(localStorage);
     
     
      //Despues de almacenar, redirigimos a la pagina 2b
     
      window.location.href="ejercicio2b.html"
      return false;
      }
    }
