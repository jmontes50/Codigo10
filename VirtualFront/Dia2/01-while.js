// let contador = 0;

// while(contador < 10){
//     console.log(`El contador es ${contador}`);
//     contador++; //contador = contador + 1;
// }

// let rpta = false;

// while(rpta == false){
//     let pregunta = prompt("te lavaste las manos?");

//     if(pregunta == "si"){
//         rpta = true;
//     }
// }

// console.log("fin de mi código");

/**
 * hagamos un programita que me calcule la multiplicación de 2 números
 * pero sin utilizar * solamente con sumitas y restas y utilizando while
 *
 */

//  let a = +prompt("Ingrese el primer número");1
//  let b = +prompt("Ingrese un segundo número");

//  var total = 0;
// console.log(`se multiplicará ${a} x ${b}`);

// while(a > 0){
//     console.log("total",total);
//     console.log("1er valor",a);
//     console.log("2do valor",b);
//     total = total + b;
//     a--; //a = a - 1
// }
// console.log(total);

/**
 * Un programita que me calcule la división entera de
 * dos números utilizando de nuevo sumas y restas
 * Obtengamos el Cociente y el residuo
 */

let D = +prompt("Ingrese el divisor");
let d = +prompt("Ingrese el dividendo");
let q = 0;

while((D - d) >= 0){
    //q++; 
    q = q + 1;
    D = D - d;
}

console.log("Cociente: " + q);
console.log(`Residuo: ${D}`);