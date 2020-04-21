/**
 * El objeto document sirve para manipular todos los elementos (nodos)
 * que tenga dentro del DOM, getElementById(id) captura un elemento
 * por su id y nos devuelve el primero que encuentre
 */

let parrafo = document.getElementById("parrafo");
parrafo.style.color = "Red";
parrafo.style.margin = "20px";
console.log(parrafo);
/**
 * getElementByClassName(claseCSS), devuelve un arreglo de Elementos
 * que compartan esa claseCSS
 */
let elementosPeru = document.getElementsByClassName("peru");
console.log(elementosPeru);
/**
 * getElementsByTagName(etiqqueta), devuelve un arreglo con todos los
 * elementos que sean de la misma especie
 */
let cajas = document.getElementsByTagName("div");
console.log(cajas);

//querySelector(selectorCSS), devuelve el elemento que coincida, tal como
//si fuera un selector de CSS
let query = document.querySelector(".peru");
console.log(query);

let queries = document.querySelectorAll(".peru");
console.log(queries);