//WINDOW LOCATION
/**
 * Me dará información acerca del origen de mi documento,
 * la URL, el origen de mi URL
 * Y se puede utilizar para declarar la URL de mi documento
 * window.location = "http://youtube.com"
 */
console.log(window.location);

//Da información del navegador en el que actualmente se esta visualizando la página web
console.log(window.navigator);

//Document (objeto), dentro de window y va a representar mi documento HTML
let elementospan = window.document.getElementById("span");
console.log("window.doc",elementospan);

//Propiedades quq ahcen referencia al ancho/alto de mi ventana en píxeles
console.log("ancho interno",window.innerWidth);
console.log("ancho externo",window.outerWidth);
console.log("alto interno", window.innerHeight);
console.log("alto externo", window.outerHeight);

//método que muestra un mensaje para pedir datos
window.prompt("Hola, ingresa tu dni");
//método que muestra una alertita
window.alert("Esta es una alertaaaaaaaaaaaaaa >:/");
//método que sirve para obtener un booleano en caso de algun acción o suceso
let validar = window.confirm("Deseas irte sin guardar los cambios???? mira que vas 10 horas investigando");
console.log(validar);

//Recibe una función y un tiempo en milisegundos, pasado ese tiempo ejecuta la función
//setTimeout(()=>{}, tiempo_en_milisegundos)
window.setTimeout(()=> {
    console.log("BOOOOOOOOOOOOOOOOOMMMMMMMMMBAAAAAAAAAA!!!!!");
}, 2000);

//Ejecuta la función que se le pase hasta el infinito, según el periodo de tiempo que se le indique
window.setInterval(()=>{
    console.log("tic tac");
}, 1000);