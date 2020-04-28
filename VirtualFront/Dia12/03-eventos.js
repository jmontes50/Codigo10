let link = document.getElementById("link");
let formulario = document.getElementById("form");
let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");

link.addEventListener("click",(event) => {
    console.log(event);
    event.preventDefault();
});

let nombre = "Oscar";

formulario.addEventListener("submit",(evento)=> {
    console.log(nombre);
    console.log(evento);
    evento.preventDefault();
    //capturar datos de los input y quiero validarlos, de quiero hacer alguna peticion a una API, imprimir datos en el navegador
});

let hacerClick = (e) => {
    console.log(e);
    //target va a hacer referencia al objetivo del evento, en este caso al elementoHTML de donde se disparo el evento;
    console.log(e.target)
    //Como e.target representa el objeto Element (el elemento HTML) yo puedo utilizar los métodos y propiedades de un objeto HTML
    //y utilizarlas
    console.log("getAttribute", e.target.getAttribute("name"));
    //por ejemplo e.target le estamos aplicando getAttribute y setAttribute 
    if(e.target.getAttribute("name") == "contenedor2"){
        e.target.setAttribute("class","circulo");
    }
}

caja1.onclick = hacerClick;

caja2.onclick = hacerClick;