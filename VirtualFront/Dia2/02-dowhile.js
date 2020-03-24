// do {
//   //codigo a ejecutar que se ejecutará al menos una vez
//   console.log("codigo ejecutado");
// } while (false); //la condicion a evaluar ejecutará de nuevo el código siempre y cuando sea true

//---------------------------------------
// let pass = "123";

// let intento = "";

// let contador = 0;

// let acceso = false;
// do{
//     intento = prompt("Pasa la contraseña");
//     contador = contador + 1; //contador++

//     if(intento == pass){
//         console.log("Bienvenido, Acceso Autorizado!!!!!");
//         acceso = true;
//     }
// }while(acceso == false && contador < 3);

// if(acceso == false){
//     console.log("Tu cuenta ha sido bloqueada, excediste los intentos");
// }

//-------------------------------

// let contador = 0;
// let llamar = 0;
// do{
//     llamar = Math.random();
//     console.log(llamar);
//     contador++;
// }while(llamar > 0.5);

// console.log(`La llamada entro después de ${contador} intentos`);

//--------------------------------------

/**
 * dado un conjuntito de nombres (un arreglo) tengo que saber si es que ese nombre existe en ese arreglo
 */

 let alumnos = ["Albert","Alejandro","Dario","Deybit","Herbert","Jane","Julissa","Maritza","Santiago"];

 do{
    var palabra = prompt("Escriba el nombre a buscar o escriba salir para finalizar el sistema");
    let encontrado = "";
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i] == palabra){
            encontrado = alumnos[i];
        }
    }
    if (encontrado != ""){
        console.log(`Alumno ${encontrado} dentro de la lista`);
    }else{
        console.log("No se encontro el alumnito");
    }

 }while(palabra != "salir");