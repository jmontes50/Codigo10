/**
 * Los Eventos son maneras que van a desencandenar una función
 * cunado un elemento sea afectado por alguna acción del Usuario
 * Ej.: Click, pone el mouse encima, sacar el mouse del elemento
 */
let btntema = document.getElementById("btntema");

//1 FORMA
//para referenciar el evento de esta manera tenemos que darle el prefijo on => onclick
// elemento.onevento = funcion()
// btntema.onclick = () => {
//     let link = document.getElementById("estilos");

//     // console.log("elemento",link);
//     // console.log("atributo",link.getAttribute("href"));

//     // link.setAttribute("href","02-eventos-claro.css");

//     //elemento.getAttribute("atributo") => obtenemos el valor del atributo
//     if(link.getAttribute("href") == "02-eventos-claro.css"){
//         //elemento.setAttribute("atributo", "nuevo valor de ese atributo") => cambiar por un nuevo valor un atributo
//         link.setAttribute("href", "02-eventos-oscuro.css");
//     }else{
//         link.setAttribute("href", "02-eventos-claro.css");
//     }
// }

// let click = () => {
//     console.log("Cliiiiiiiiiiiiiiiiiiiiick!!!");
// }

// btntema.onclick = click;

//2da forma
//elemento.addEventListener("evento", function(){codigo a ejecutar});
btntema.addEventListener("click", () => {
  let link = document.getElementById("estilos");
  if (link.getAttribute("href") == "02-eventos-claro.css") {
    link.setAttribute("href", "02-eventos-oscuro.css");
  } else {
    link.setAttribute("href", "02-eventos-claro.css");
  }
});
