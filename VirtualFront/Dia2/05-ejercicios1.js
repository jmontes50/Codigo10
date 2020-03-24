// let alumnos = [
//     ["Juan",16],
//     ["Meche",15]
// ];
/**
 * Dada una matriz cuadradita
 * determinar si la diagonal principal
 * tiene el mismo número
 */
// let matrizCuadrada = [
//     [0,3,4,7],
//     [1,0,2,1],
//     [8,1,0,3],
//     [5,2,9,0]
// ];

// let rpta = true;
// let elemInicial = matrizCuadrada[0][0];

// for(let i = 0; i < matrizCuadrada.length; i++){
//     if(elemInicial != matrizCuadrada[i][i]){
//         rpta = false;
//         break;
//     }
// }

// if(rpta == true) {
//     console.log("la matriz tiene una diagonal principal con un mismo número");
// }else{
//     console.log("Nel la matriz tiene su diagonal principal con núm. diferentes");
// }

//que la consola imprima lo siguiente :
// *
// **
// ***
// ****
// *****
// ******
// let x;
// let y;
// let caracter = '';

// for(x = 0; x < 10; x++){
//     for(y = 0; y < x; y++){
//         caracter = caracter + "*";
//     }
//     console.log(caracter);
//     caracter = '';
// }
//----------------------------------

//Tenemos un arreglito de númeritos enteros,+
//la idea es desarrollar un algoritmo que me
//permita ordenarlos de menor a mayor

let arrNum = [8,-4,0,3,1,4,2];
// => -4 0 1 2 3 4 8

let arregloOrdenado = [];

//solamente para controlar si ese ordenamiento
//ya esta hecho
let hecho =  false;

while(hecho == false){
    hecho = true;
    for(let i = 1; i < arrNum.length; i++){
        if(arrNum[i - 1] > arrNum[i]){
            hecho = false;
            let tmp = arrNum[i - 1];
            arrNum[i - 1] = arrNum[i];
            arrNum[i] = tmp;
        }
    }
    console.log(arrNum);
}

arregloOrdenado = arrNum.sort();
console.log("ordenado",arregloOrdenado)