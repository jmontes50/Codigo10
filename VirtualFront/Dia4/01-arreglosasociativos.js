/**
 * Sistema de Almacén
 * Agregar Productitos por su codigo, nombre y precio
 */

 //cuantos productos yo quiero ingresar
 let productos = [];

 let cant = +prompt("Causa cuantos productos para ingresar tienes");

 for (let i = 0; i < cant; i++){
     let nombre = prompt(`Ingresa el nombre del producto ${i+1}`);
     let codigo = prompt(`Ingresa el codigo del producto ${i+1}`);
     let precio = prompt(`Ingresa el precio del producto ${i+1}`);

     let productoTmp = [];

     productoTmp["nom"] = nombre;
     //producto[0] = nombre
     //producto["nombre"] = nombre
     productoTmp["cod"] = codigo;
     //producto["codigo"] = codigo
     productoTmp["prec"] = precio;

     productos.push(productoTmp);
 }

 console.table(productos);

 let imprimirProductos = (arreglo) => {
     for(let i = 0; i < arreglo.length; i++){
         console.log(arreglo[i]["nom"] + " su precio es => " + arreglo[i]["prec"]);
     }
 }

 imprimirProductos(productos);