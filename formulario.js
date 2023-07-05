function validarIngreso() {
    var validar = true;
    var usuario = document.getElementById("usuario");
     var usuario1 = usuario.value;
    if (usuario1 == ""  ) {
        usuario.style.border = "3px solid red";
        usuario.style.backgroundColor = "pink";
        validar = false;
    } else  {
        usuario.style.border = "3px solid green"
        usuario.style.backgroundColor = "lightgreen"
        validar = true;
    }

    var contrasenia = document.getElementById("contra");
    var contrasenia1 = contrasenia.value;
    var valor = contrasenia1.length;
    if (contrasenia1 == "") {
        contrasenia.style.border = "3px solid red";
        contrasenia.style.backgroundColor = "pink";
        validar = false;
    } else if (valor < 8 && valor>20) {
        contrasenia.style.borderColor = "3px solid red";
        contrasenia.style.backgroundColor = "pink";
        validar = false;
        alert("Cumpla con la cantidad de caracteres")
    } else {
        contrasenia.style.border = "3px solid green"
        contrasenia.style.backgroundColor = "lightgreen";
        validar = true;
    }

    return validar;  
}

function validarRegistro(){

    var nombre = document.getElementById("nombre"); 
    var  nombre1 = nombre.value;
    if ( (nombre1 == "") || !(/^[a-zA-Z]+$/.test(nombre1))) { 
        nombre.style.border = "3px solid red";
        nombre.style.backgroundColor = "pink";
    } else {
        nombre.style.border= "2px solid green";
        nombre.style.backgroundColor = "lightgreen";
    }

    var apellido = document.getElementById("apellido");
    var apellido1 = apellido.value; 
    if ((apellido1 =="") || !(/^[a-zA-Z]+$/.test(apellido1)) ) {
        apellido.style.border = "3px solid red"; 
        apellido.style.backgroundColor = "pink";
    } else {
        apellido.style.border= "3px solid green";
        apellido.style.backgroundColor = "lightgreen";
    }

    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var anio = document.getElementById("anio");

    var dia1 = dia.value;
    var mes1= mes.value;
    var anio1 = anio.value;
    if (dia1 == "") {
        dia.style.border = "3px solid red"; 
        dia.style.backgroundColor = "pink";
    }
    if (mes1 == "") {
        mes.style.border = "3px solid red";
        mes.style.backgroundColor = "pink";
    }
    if (anio1 == "") { 
        anio.style.border = "3px solid red"; 
        dia.style.backgroundColor = "pink";
    } 

    if (isNaN(dia1)) {       
        dia.style.border= "3px solid red";
        dia.style.backgroundColor = "pink"
    } else {
        if (dia1<1 || dia1>31) {
            dia.style.border = "3px solid red";
            dia.style.backgroundColor = "pink";
        } else  {
            dia.style.border = "3px solid green";
            dia.style.backgroundColor = "lightgreen";
        }
    }
    if (isNaN(mes1)) { 
        mes.style.border = "3px solid red";
        mes.style.backgroundColor = "pink"
    } else  { 
        if (mes1<1 || mes1>12) {
            mes.style.border = "3px solid red";
            mes.style.backgroundColor = "pink";
        } else { 
            mes.style.border = "3px solid green";
            mes.style.backgroundColor = "lightgreen"; 
        }
    }
    if (isNaN(anio1)) {
        anio.style.border = "3px solid red"; 
        anio.style.backgroundColor = "pink";
    } else { 
        if (anio1>2023 || anio1<1900) {
            anio.style.border = "3px solid red"; 
            anio.style.backgroundColor = "pink";
        } else {
            anio.style.border = "3px solid green"; 
            anio.style.backgroundColor = "lightgreen";
        }
    }
    if ((anio1%4 !=0) && (mes1 ==2) && (dia1>28)) {
        anio.style.border = "3px solid red"; 
        anio.style.backgroundColor = "pink";
        dia.style.border = "3px solid red";
        dia.style.backgroundColor = "pink";
    } else {
        if (((mes1==4) || (mes1==6) || (mes1 ==9) || (mes1 ==11)) && (dia1>30) || ((mes1==2) && (dia1>29))) {
            dia.style.border = "3px solid red";
            dia.style.backgroundColor = "pink";
            mes.style.border = "3px solid red";
            mes.style.backgroundColor = "pink"
        }
    }

    var correo = document.getElementById("correo"); 
    var correo1 =correo.value;
    if ( (correo1 == "") || (!(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})/.test(correo1)))) {
        correo.style.border = "3px solid red";
        correo.style.backgroundColor = "pink"; 
    } else  {
        correo.style.border = "3px solid green";
        correo.style.backgroundColor = "lightgreen"; 
    }

    var pais = document.getElementById("paises");
    var pais1 = pais.value;
    if ( pais1 == "Seleccionar") { 
        pais.style.border = "3px solid red";
        pais.style.backgroundColor = "pink"; 
    } else {
        pais.style.border = "3px solid green";
        pais.style.backgroundColor = "lightgreen"; 
    }

    var contrasenia = document.getElementById("contra");
    var contrasenia1 = contrasenia.value;
    var valor = contrasenia1.length;
    if (contrasenia1 == "") {
        contrasenia.style.border = "3px solid red";
        contrasenia.style.backgroundColor = "pink";
        validar = false;
    } else if (valor < 8 && valor>20) {
        contrasenia.style.borderColor = "3px solid red";
        contrasenia.style.backgroundColor = "pink";
        validar = false;
        alert("Cumpla con la cantidad de caracteres")
    } else {
        contrasenia.style.border = "3px solid green"
        contrasenia.style.backgroundColor = "lightgreen";
        validar = true;
    }
    return false;
}


