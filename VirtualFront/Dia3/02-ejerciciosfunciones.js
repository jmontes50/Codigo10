/**
 * * Función que recibe un arreglo de nombres y un nombre a buscar
 * Si el nombre buscado, se encuentra en el arreglo, la función
 * retornará la posición en la que se encuentre el nombre buscado
 * En caso no se encuentre el nombre, la función retornará -1
 */

//  function buscarAlumno(arreglo, nombre){
//      for(let i = 0; i < arreglo.length; i++){
//          if(arreglo[i] == nombre){
//              return i;
//          }
//      }
//      return -1;
//  }

//  let alumnos = ["Maritza","Alejandro","Ronaldo","Albert","Deybit","Jane","Jane","Jhonael","Julissa"];

// let nombreBusqueda = prompt("Ingrese el alumno a buscar");

//  let existe = buscarAlumno(alumnos, nombreBusqueda);

//  if(existe != -1){
//      console.log(`Se encontro al alumno en la posicion ${existe}`);
//  }else{
//      console.log("No se encontro el alumno buscado");
//  }

//------------------------------------------------------

// let alumnos = ['Jorge','Cecilia','Daniel'];
// let cursos = [['Comida Criolla','Bebidas'],['Resposteria'],['Chifa','Sushi']];
// let notas = [[18,14],[16],[17,11]];

// /**
//  * Funcion que busque un alumno, y si es que existe me devuelva 
//  * los cursos que esta llevando más sus notas, si no lo encuentra que me devuelva -1
//  */

// function obtenerCursos(nombre){
//     let posicion = -1;
//     for(let i = 0; i < alumnos.length; i++){
//         if(alumnos[i] === nombre){
//             posicion = i;
//             break;
//         }
//     }

//     if(posicion != -1){
//         console.log(`los cursos que tiene el alumno ${nombre} son: ${cursos[posicion]}`);
//     }else{
//         console.log("no existen cursos para este alumno");
//     }
// }

// obtenerCursos("Jorge");

//------------------------------------------------------------------

//yo puedo tratar a los string, como si fueran un arreglo de caracteres
// let texto = "Osmar";

// console.log(texto[0]);

//una función que me permita obtener un texto y mostrarla como un arreglo pero con su contenido invertido

//let miTexto = "Mouse";
//=> ["e","s","u","o","M"];

function voltearTexto(texto){
    // let nuevoTexto = [];
    let miTexto = "";
    for(let i = texto.length - 1; i >=0; i--){
        // nuevoTexto.push(texto[i]);
        miTexto += texto[i];
    }
    return miTexto;
}

console.log(voltearTexto("Mouse"));