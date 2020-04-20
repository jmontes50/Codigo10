import { comentarios } from "./fakedata/data.js";

/**
 * funcion que busque en comentarios - []
 * un comentario con el id que yo le pase
 * y me retorne el comentario con toda su información
 *
 * y si no encuentra nada que me retorne un objeto, un objeto con esta estructura
 * {
 *  error: true,
 *  info: "No se encontró el comentario"
 * }
 *  */
//RPTA CON UN FOR
// let buscarComentarioPorId = (id) => {
//     for(let i=0; i < comentarios.length; i++){
//         if(id == comentarios[i].id){
//             return comentarios[i]
//         }
//     }
//     let respuesta = {
//         error:true,
//         info:"No encontre el comentario"
//     }
//     return respuesta;
// }
let buscarComentarioPorId = (id) => {
  let respuesta = comentarios.find((comentario) => {
    return comentario.id == id;
  });
  if (typeof respuesta == "undefined"){
      let mensaje = {error:true, info:"No hay comentario"};
      return mensaje;
  }else{
    return respuesta;
  }
};

console.log(buscarComentarioPorId(3));
// console.log(buscarComentarioPorId(501));

/**
 * funcion que me retorne todos los correos que termine en .ca
 */

let obtenerLasTerminaciones = (dom) => {
    let resultados = comentarios.filter((comment)=>{
        return comment.email.endsWith(dom);
    });

    return resultados;
}

console.log(obtenerLasTerminaciones(".org"));

/**
 * Función que me de un arreglo de objetos donde esos objetos tengan dentro del body una palabra especificada
 * 
 */

 let buscarPalabraEnElBody = (palabra) => {
    let resultado = [];
    comentarios.forEach((comment) => {
        if(comment.body.indexOf(palabra) != -1){
            // let objTmp = {
            //     nombre:comment.name,
            //     correo:comment.email
            // }
            // resultado.push(objTmp);
            resultado.push(comment);
        }
    })
    return resultado;
 }
 console.log(buscarPalabraEnElBody("libero"));

 let filtrado = buscarPalabraEnElBody("libero"); //un arreglo filtrado con la palabra libero, pero con to2 los objetos

 let mapeado = filtrado.map((com) => {
    return {nombre:com.name, correo: com.email} //solo retornamos las propiedades que nos interesan
 })
console.log("mapeado",mapeado);