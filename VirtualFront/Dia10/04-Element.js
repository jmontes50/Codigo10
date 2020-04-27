let cont = document.getElementById("contenedor");
//la propiedad style me permite añadir o cambiar
// los estilos de mis elementos dentro de document
//elemento.style.<propiedad> => color, paddingh, border, margin, etc...
cont.style.color = "#EE6971";
cont.style.padding = "30px";
cont.style.border = "1px solid blue";
cont.style.opacity = "0.5";
//ya estamos modificando directamente el HTML (sus elementos)
//directamente desde el JS
//Si la propiedad en CSS tiene guiones 
//o sea esta en skewer-case => background-color
//la convertimos a camelCase => backgroundColor
cont.style.backgroundColor = "green";

//Propiedades de Elementos

//clientWidth: Obtener su ancho del elemento
console.log(`Ancho de contenedor ${cont.clientWidth}`);
//clientHeight: Obtener su altura del elemento
console.log(`Alto de contenedor ${cont.clientHeight}`);
//OffsetTop: obtenemos la cantidad de pixeles de desplazamiento
//a apartir del borde superior de su contenedor
console.log(`Offset Top ${cont.offsetTop}`);
//OffsetLeft: me devolverá la acntidad de píxeles de desplazamiento 
//a partir de la izquierda
console.log(`Offset Left ${cont.offsetLeft}`);
//className: obtenemos o asigna el nombre de la clase que tiene e
//elemento
console.log(`clase contenedor ${cont.className}`);
// cont.className = "sol";
//si yo cambiaba el valor de className, me cambiaba los estilos que 
//previamente haya podido tener

//classList.add(nueva_clase_css): me permite añadir una nueva clase a las clases que 
//previamente yo ya tenia en mi elemento
cont.classList.add("sol");

//classList.remove(clase_css_a_quitar): me permite remover una clase
//de la lista de clases que tiene un elemento, siempre y cuando esta
//clase exista dentro de la lista de clases del elemento
cont.classList.remove("sol");

//classList.toggle("nombre_clase_css"): verifica si la clase existe,
//si es que existe la removerá de la lista y si no existe la agrega.
setInterval(()=>{
    cont.classList.toggle("sol");
},500);

//obtenemos el h1 por su selector
let h1 = document.querySelector("h1");
//innerHTML : devuelve el conteido que tiene un elemento
//<p>YO SOY EL CONTENIDO</p>
console.log("contenido HTML",h1.innerHTML);
h1.innerHTML = "AppStore";

console.log("innerHtml cont",cont.innerHTML);
// cont.innerHTML = "<p><code>Ahora yo soy el contenido</code><p>";

// cont.innerHTML = `<h4>Titulo</h4>
//                     <p>Hola</p>
//                     <p>
//                         <code>codigo</code>
//                     </p>`;

let arrParrafos = document.getElementsByTagName("p");
console.log(arrParrafos); //Esto es un arreglo de elementos p

//Por cada párrafo le cambio su contenido
for(let i = 0; i < arrParrafos.length; i++){
    arrParrafos[i].innerHTML = "<code>Nuevo Contenido del For!!!</code>";
}