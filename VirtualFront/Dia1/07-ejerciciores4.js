/**
 * DE un arreglo de números enteros armar dos arreglos con numeros pares e impares por separado y mostrarlos en pantalla
 */

 let numeros = [2, 7, 15, 4, 25, 32, 23, 33, 10, 36, 34, 134, 520, 318, 1024, 1917, 799];

 let pares = [];

 let impares = [];

 for(let i = 0; i < numeros.length; i++){
     switch (true){
         case numeros[i] % 2 == 0:
             pares.push(numeros[i]);
             break;
         case numeros[i] % 2 != 0:
             impares.push(numeros[i]);  
             break;
        default:
            alert("algo muy extraño ha pasado ");
            break;
     }
 }

 console.log("arreglo de pares", pares);
 console.log("cant. pares", pares.length);

 console.log("arreglo de impares", impares);
 console.log("cant. impares", impares.length);