let numeritos = new Array();  //let numeritos = [];

console.log(numeritos);
//.push(elementos) => recibe un o varios elementos y los inserta al final de mi arreglo
numeritos.push(10,20,30,40,50);

console.log(numeritos);

//.pop() => EXTRAER el último elemento de mi arreglo
//modificar mi arreglo
console.log("pop",numeritos.pop());
console.log("después de .pop",numeritos);

//concat(arreglo)=> concatenas mi arreglo con el arreglo que yo le pase como parámetro a concat
//NO MODIFICA EL ARREGLO ORIGINAL
console.log("concat",numeritos.concat([60,70,80,90]));
console.log("después de concat",numeritos);

//splice(posicion, cantElementos, ...variosElementos) => remover una cantidad de elementos a partir de la posición/indice que yo le diga

let lista = ["Papas","Huevos","Mango","Papaya","Espinaca"];
console.log("antes de splice",lista)
//lista.splice(2,1);
lista.splice(2, 0, "Manzana", "Piña");
console.log("splice",lista);

//FILTER
let notas = [20,19,18,18,15,14,5,11,9,17];
//filter lo quye va a ahacer va a iterar por cada elemento de mi arreglo y creará un arreglo nuevo con los 
//elementos que cumplan esa condición

//filter(funcion(elem_de_mi_arreglo)=>{condicion y retornar los elementos que cumplan esta condicion})

let aprobados = notas.filter((elemento)=>{
    //condicional
    if(elemento > 10){
        return elemento;
    }
});
console.log("filtrado",aprobados);

//FOREACH
//forEach((elemento_de_mi_arreglo)=>{ por cada uno de los elementos ejecutar código})
//NO RETORNA NINGUN TIPO DE VALOR
notas.forEach((elemento,indice,arr)=>{
    console.log(`La posición es: ${indice}`);
    console.log(`Mi elemento es: ${elemento}`);
    console.log(`El arreglo es: ${arr}`);
});

// lista.forEach((producto,i,arreglito)=>{
//     console.log(producto);
//     console.log(i);
//     console.log(arreglito);
// })





