
window.onload = function () {
    document.getElementById("enviar").addEventListener("click", validar);
}

function validar() {
    event.preventDefault();
    console.log("Validando");

    cantidadOk = comprobar_cantidad();
    libroOk = comprobar_libro();
    emailOk = comprobar_email();
    telfOk = comprobar_telefono();   
    nombreOk = comprobar_nombre();

    if( nombreOk && telfOk && emailOk && libroOk && cantidadOk ){
        console.log("Enviado");
    }
}

function comprobar_nombre() {
    var error_previo = document.getElementById("error_nombre");
    let nombre = document.getElementById("nombre").value;
    console.log("Error en el nombre: " + error_previo)
    if (nombre == "") {
        
        if(error_previo == null){
            let error = document.createElement("label");
            error.innerHTML = "El campo de nombre es obligatorio"
            error.className = "error";
            error.id = "error_nombre";
            document.getElementById("nombre").parentElement.insertAdjacentElement("afterend", error);
        }
        return false;
    }
    if(error_previo != null){
        error_previo.parentNode.removeChild(error_previo);
    }
    return true;
}

function comprobar_telefono() {
    var regex = /^\d{3}-\d{3}-\d{3}$/;
    var regex2 = /^\d{9}$/;
    var error_previo = document.getElementById("error_telf");
    console.log("Error en el teléfono: " + error_previo)
    let telefono = document.getElementById("telefono").value;
    if (regex.test(telefono) || regex2.test(telefono)){
        if(error_previo != null){
            error_previo.parentNode.removeChild(error_previo);
        }
        return true;
    }else{
        if(error_previo == null){
            let error = document.createElement("label");
            error.innerHTML = "El campo del teléfono debe contener el patrón 123(-)456(-)789"
            error.className = "error";
            error.id = "error_telf";
            document.getElementById("telefono").parentElement.insertAdjacentElement("afterend", error);
        }
        return false;
    }
}

function comprobar_email() {
    var regex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var error_previo = document.getElementById("error_email");
    console.log("Error en el email: " + error_previo)
    let email = document.getElementById("email").value;
    if (regex3.test(email)){
        if(error_previo != null){
            error_previo.parentNode.removeChild(error_previo);
        }
        return true;
    }else{
        
        if(error_previo == null){
            let error = document.createElement("label");
            error.innerHTML = "El campo del email es incorrecto. Debe tener el siguiente formato: hola@gmail.com"
            error.className = "error";
            error.id = "error_email";
            document.getElementById("email").parentElement.insertAdjacentElement("afterend", error);
        }
        return false;
    }
}
function comprobar_libro() {    
    var error_previo = document.getElementById("error_libro");
    let libro = document.getElementById("libro").value;
    console.log("Error en el libro: " + error_previo)
    if (libro == "") {
        
        if(error_previo == null){
            let error = document.createElement("label");
            error.innerHTML = "- El campo del libro es obligatorio"
            error.className = "error";
            error.id = "error_libro";
            document.getElementById("errores").appendChild(error);
        }
        return false;
    }
    if(error_previo != null){
        error_previo.parentNode.removeChild(error_previo);
    }
    return true;
}
function comprobar_cantidad() {
    var error_previo = document.getElementById("error_cantidad");
    console.log("Error en cantidad: " + error_previo)
    let cantidad = document.getElementById("cantidad").value;

    if (isNaN(cantidad) || cantidad > 5 || cantidad < 0 || cantidad == "") {
        if(error_previo == null){
            let error = document.createElement("label");
            error.innerHTML = "- El campo de la cantidad debe ser un número entre 0 y 5"
            error.className = "error";
            error.id = "error_cantidad";
            document.getElementById("errores").appendChild(error);
        }
        return false;
    }
    if(error_previo != null){
        error_previo.parentNode.removeChild(error_previo);
    }
    return true;
}