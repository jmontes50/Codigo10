let perrete = {
  orejas: "largas",
  tamano: "grande",
  pelaje: "rizado",
  cola: true,
  color: "crema",
  edad: 10
};

console.log(perrete);

perrete.cola = false;
perrete.edad = 11;

console.log("perro updated", perrete);

console.log(perrete.tamano);

/////////////////////////////////////////////

let persona = {
  nombre: "Lucia",
  apellido: "Llayqui",
  coloresFavoritos: ["Morado", "Vino", "Rosa"],
  saludar: console.log("Hola")
};

console.log(persona.coloresFavoritos);

persona.saludar;

////////////////////////////////////////////////

let pelicula = {
  nombre: "Interstellar",
  director: "Christopher Nolan",
  tipo: ["Ciencia", "Ficción", "Aventura"],
  anio: 2014,
  actores: [
    {
      actornombre: "Anne Hathaway",
      rol: "Cientifica Astronauta",
      genero: "femenino"
    },
    {
      actornombre: "Michael Cain",
      rol: "Profesor de Física",
      genero: "masculino"
    },
    {
      actornombre: "Matthew McConaughey",
      rol: "Piloto, Astronauta",
      genero: "masculino"
    }
  ]
};

console.log(pelicula.actores[1].rol);

//-------------------------------------

let cine = {
    nombre: "Cinepolis Cerro Colorado",
    direccion: "Aviacion 602",
    capacidad:200,
    cartelera:[
        {
            id:1,
            pelicula:"Geo Tormenta",
            anio:2017,
            tipo:"Acción"
        },
        {
            id:2,
            pelicula:"Weathering with You",
            anio:2019,
            tipo:"Animación"
        },
        {
            id:3,
            pelicula:"La isla",
            anio:2005,
            tipo:"Accion, Ficción"
        }
    ],
    mostrarCartelera: () => {
        console.log("::::::::Mostrando Cartelera de Hoy:::::::::");
        console.table(cine.cartelera);
    }
}

cine.mostrarCartelera();

//---------------------------------------------

/**
 * Creemos un objFactura que tenga esta estructura:
 * 1.cabecera (objeto)
 *      1.1 razon social (string)
 *      1.2 ruc (string)
 *      1.3 direccion (string)
 *      1.4 fecha (string)
 *      1.5 guia de remision (string)
 *  2. detalle (array de objetos)
 *      2.1 cantidad (number)
 *      2.2 descripcion (string)
 *      2.3 precioUnitario (number)
 *      2.4 valorVenta (number)
 *  3. Total factura (number)
 *  4. agregarDetalle (funcion)
 *         agregar un objeto detalle a mi
 *          arreglo de detalle
 */ 

 //codeshare.io   -> Share code now
 //peguen su codigo y me comparten su URL

 let objFactura = {
     cabecera:{
        razonSocial:'',
        ruc:0,
        direccion:'',
        fecha:'',
        guiaDeRemision:''
     },
     detalle: [
         {
            cantidad:0,
            descripcion:"",
            precioUnitario:0,
            valorVenta:0
         },
         {
            cantidad:0,
            descripcion:"",
            precioUnitario:0,
            valorVenta:0
         },
     ],
     totalFactura:123,
     agregarDetalle: () => {
         let detalleTmp = {
             cantidad:1,
             descripcion:"mango",
             precioUnitario:1.5,
             valorVenta:1.5
         };
         objFactura.detalle.push(detalleTmp);
     }
 }