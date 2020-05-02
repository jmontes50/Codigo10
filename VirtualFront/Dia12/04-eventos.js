let basededatos = ["jorge.montesinos@tecsup.edu.pe","admin@codigo.pe"];

let inputCorreo =  document.getElementById("inputCorreo");
let mensaje = document.getElementById("resultado");

// inputCorreo.onfocus = () => {}
//onfocus, focus se dispara cuando el cursos apra escribir se encuentra en un elemento
inputCorreo.addEventListener("focus", () => {
    inputCorreo.style.backgroundColor = "#40C34F";
    inputCorreo.style.borderBottom = "4px solid white";
    inputCorreo.style.borderRadius = "10px";

    mensaje.setAttribute("hidden","true");
});

// inputCorreo.onblur = () => {}
//onblur, blur se dispara cuando el cursor de escritura deja el elemento
inputCorreo.addEventListener("blur",()=>{
    inputCorreo.style.backgroundColor = "transparent";
    inputCorreo.style.borderBottom = "3px solid green";
    inputCorreo.style.borderRadius = "0px";
    //buscando el correo en mi arreglo basededatos
    let correoIngresado = inputCorreo.value;
    correoIngresado = correoIngresado.toLowerCase().trim();

    for(let i = 0; i < basededatos.length; i++){
        if(correoIngresado === basededatos[i]){
            mensaje.removeAttribute("hidden");
            break;
        }
    }
});

