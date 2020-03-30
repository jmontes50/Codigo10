//función flecha

//... SPREAD OPERATOR
let ingredientes = (ing1,ing2,ing3, ...resto) => {
    console.log(ing1);
    console.log(ing2);
    console.log(ing3);
    console.log(resto);
}

// // ingredientes("Pollo","Aji Verde","Papa");
ingredientes("Pollo","Aji Verde","Papa","Arroz","Queso","Leche","Watacay","Cebolla","Mani","GalletaVainilla");

// let arrNum = [4,5,2,6,9,50,2];

// let nuevoArreglo = [...arrNum];

// console.log(nuevoArreglo);

/**
 * Crear una función que me reciba en sus parámetros un arreglo de números
 * y que me devuelva el mayor de esos números
 * Hacerlo con una funcion flecha
 * 
 * let obtenerMayor = (arreglo) => {}
 */

 let obtenerMayor = (arregloNumeros) => {
     //el 1er valor en la posición 0 de arregloNumeros
     let mayorNum = arregloNumeros[0];
     //recorro
     for(let i = 0; i < arregloNumeros.length; i++){
        if(arregloNumeros[i] > mayorNum){
            mayorNum = arregloNumeros[i];
        }
     }
     return mayorNum;
 } 

 let arreglo = [5,1,16,45,-2,7,90];
 let numeroMayor = obtenerMayor(arreglo);
 console.log(numeroMayor);

 /**
  * crear una función flecha, que reciba una palabra y me permita saber si una palabra es palindroma
  * con minúscula
  * Ej.: ojo , sometemos, amor a roma
  */

