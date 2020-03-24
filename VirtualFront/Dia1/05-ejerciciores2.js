/**
 * Una farmacia vende diferentes productos (alcohol, mascarillas y jabón). Se
desea contabilizar, el lote de cada producto, y saber cuantos hay en existencia.
 */

let productos = +prompt("Cuantos productos existen?");

//  let alcohol = 0;
//  let mascarillas = 0;
//  let jabon = 0;

//mis variables que servirán como contadores
let alcohol = 0,
  mascarillas = 0,
  jabon = 0;

  //y por cada item que tenga dentro de productos, evaluare
for (let i = 0; i < productos; i++) {
  //consulto con un prompt el tipo de producto
  let prod = +prompt(
    `Ingrese 1. para alcohol 2. para mascarillas 3 para jabón, para el producto ${i +
      1}`
  );
      //y según el tipo lo clasifico
  switch (prod) {
    case 1:
      alcohol++;
      break;
    case 2:
      mascarillas++;
      break;
    case 3:
      jabon++;
      break;
    default:
      alert("Número erroneo verifique");
      i--;
      break;
  }
}
//mensaje del resultado
console.log(`En total vamos a tener ${alcohol} botellas de alcohol, ${mascarillas} mascarillas y ${jabon} jabones`);
//mando alerta con console.error
if(alcohol < 5 || mascarillas < 5 || jabon < 5){
    console.error("Bajo stock en la farmacia");
}
