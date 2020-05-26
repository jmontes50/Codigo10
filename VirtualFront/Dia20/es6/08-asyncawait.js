//Async : va a transformar una función tradicional en una que retorn una promesa.
//return =  resolve de mi promesa
//throw = reject de mi promesa
let arrCiudades = [
  "Arequipa",
  "Ica",
  "Cusco",
  "Moquegua",
  "Lima",
  "Puno",
  "Tacna",
];

//asincrono
let buscarCiudad = async (nombre) => {
  for (let i = 0; i <= arrCiudades.length; i++) {
    if (nombre === arrCiudades[i]) {
      //resolve en el caso de utilizar async va a ser el return
      return { exito: true, posicion: i }; //resolve
    }
    if (i === arrCiudades.length) {
      throw "No se encontro la ciudad"; //reject
    }
  }
};
//UTILIZANDO LA FUNCIÓN ASÍNCRONA QUE ESTA CON ASYNC, pero con then
// buscarCiudad("Santiago")
//     .then((respuesta) => {
//         console.log(respuesta) //capturamos el return
//     })
//     .catch((error) => {
//         console.error(error); //capturamos el reject
//     })

// let usarBuscarCiudad = await buscarCiudad("Puno"); //esto no se puede ejecutar tiene que estar si o si dentro de un async

let transformarMayus = async (texto) => { // retorna una promesa
    return texto.toUpperCase();
}

let obtenerDatos = async () => {
  try { //.then()
    let encontrarCiudad = await buscarCiudad("Tacna"); //si quiero encadenar promesas, me basta con poner
    let transformarCiudad = await transformarMayus("Tacna") //un await detrás de otro
    console.log(encontrarCiudad);
    console.log(transformarCiudad);
  }catch(err){ //.catch()
      console.error(err);
  }
};

obtenerDatos();
