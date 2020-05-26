//DESTRUCTURACIÓN EN ARREGLOS
let frutos = ["paltita","fresa","manzana","platano"];

let [pri,seg,ter,cuar] = frutos;

console.log(pri);
console.log(seg);
console.log(ter);
console.log(cuar);

let matriz = [90,2,[5,6],75];

let [,,[cinco]] = matriz;

console.log("matriz",cinco);

let numeros = [1,10,20,35];

let sumaDosPrimeros = ([a, b]) => {
    console.log("suma",a + b);
}

sumaDosPrimeros(numeros);

//DESTRUCTURACIÓN DE OBJETOS

let objPersona = {
    nombre:"Alfredo",
    apellido:"Saire",
    dni:412412412,
    edad:48,
    origen:{
        pais: "Perú",
        ciudad: "Arequipa"
    },
    hobbies: ["Jugar Frontón", "hacer robots", "aprender"]
}
// let nombreTmp = objPersona.nombre;

let {nombre} = objPersona;
console.log("objnom",nombre);

//
let {apellido: ape} = objPersona;
console.log("apellido:", ape);

let {dni, edad} = objPersona;
console.log(`Edad: ${edad}` );
console.log(`DNI: ${dni}`);

let {origen: {pais}} = objPersona;
console.log("País:",pais);

let {hobbies: [,,hobbie3]} = objPersona;
console.log(`3rd: ${hobbie3}`);