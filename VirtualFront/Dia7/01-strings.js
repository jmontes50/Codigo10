let texto = "Patata";

let texto2 = new String("Papa Ojo Rosado");

console.log(texto);

console.log(texto2);

console.log("longitud",texto.length);

console.log("longitud2",texto2.length);

let arr1 = [10,20,30,40,50,70,80,90,100];

let arr2 = new Array(1,2,3,4,5,6,7,8,9); //let arr2 = [0,1,2,3,4,5,6,7,8,9];

console.log("arr1",arr1);

console.log("arr2",arr2);

//TODO EN JS SON OBJETOS

let modelo = new String("ThinkPad T460");

console.log("///////////////////////////////////");
//Propiedades del objeto String

//.length me devuelve la longitud que tiene un texto, como si se tratará de un arreglo
console.log("longitud=>",modelo.length);

//.toLowerCase() => devuelve en minúscula un string
console.log("minus=>",modelo.toLowerCase());

//.toUpperCase() => devuelve el valor en mayúscula
console.log("mayus=>",modelo.toUpperCase());

//.trim() => remover los espacios en blanco que tenga mi texto en los extremos;
/**
 * ej: text = " patatas con pollo           ";
 * text.trim() => "patatas con pollo"
 */
let oracion = " tres tristes tigres comen trigo en un trigal   ";
console.log("trim=>",oracion.trim());

//substr(inicio,cantletras) => devolver segun los parámetros la cantidad de texto inidcada a partir de la posición que le indique
//inicio: desde donde va a empezar a contar
//cantLetras: cuantas letras va a contar a partir del inicio que le especifiquemos
console.log("substr=>",modelo.substr(2, 9));

//substring(inicio, final) => deolver según ese inicio y final un string a partir del string original
//NT: Si no especificamos el final, asumira que el final es el final del string
console.log("substring=>", modelo.substring(2,8));

//IMPRIMIR LOS ULTIMOS 6 CARACTERES/LETRAS DE UN TEXTO
console.log("6 ultimos", modelo.substring(modelo.length-6));

//.startsWith("texto")=>devolver true|false dependiendo si mi string comienza con el texto que le paso en los parámetros
console.log("startWith=>", modelo.startsWith("Thi"));

//.endsWith("texto")=>devuelve true|false dependiendo si mi string termina con el texto que le paso en los parámetros
console.log("endsWith=>", modelo.endsWith("460"));

//.indexOf("texto")=> devuelve la posición en la que un texto inicia dentro de otro texto, si no encuentra el texto, me devolverá un -1
console.log("indexof=>",oracion.indexOf("tigres"));

//chartAt(número)=> devuelve la letra que se encuentra en la posición indicada por el número
console.log("charat=>", modelo.charAt(4));
console.log("sincharat=>", modelo[4]);

//Ejercicios

/**
 * 1. Una función que reciba un string me cuente cuantas vocales tiene
 * 2. una funcion que reciba un string y me cuente cuantas palabras tiene
 */
