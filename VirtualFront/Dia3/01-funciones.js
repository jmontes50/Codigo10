//function nombreDeMiFuncion(params){
    // codigo a ejecutar en este bloque
//}
let resumenIngredientes = [];
//jsdoc comments -> F1, HAY UN GIF QUE TE ENSEÑA COMO
/**
 * 
 * @param {number} agua el agua que voy a utilizar
 * @param {string} pasta el tipo de pasta a utilizar
 * @param {*} olla 
 */
function hacerPasta(agua,pasta,olla){
    //AQUI SE EJECUTA EL PROCEDIMIENTO
    var pastaHecha = `La pasta se hizo con ${agua} y se puso ${pasta} en una olla de ${olla} Litros`;
    resumenIngredientes.push(agua);
    //solamente 1 return, pero no es obligatorio, puede quedarse ejecutando cosas 
    return pastaHecha;
}

console.log(hacerPasta(500,"spaggetti",1.5));

console.log(hacerPasta(300,"fideo chino",1.2));

// console.log(pastaHecha);

//-----------------------------------------------

function imprimirAlumnos(arregloAlumnos){
    for(let i = 0; i < arregloAlumnos.length; i++){
        if(arregloAlumnos[i] == arregloAlumnos[i+1]){
            console.log("Hay un alumno repetido");
            // break;
            return;
        }
        console.log(`El alumno ${i+1} es: ${arregloAlumnos[i]}`);
    }
}

let arreglo1 = ["Maritza","Alejandro","Ronaldo","Albert","Deybit","Jane","Jane","Jhonael","Julissa"];

imprimirAlumnos(arreglo1);