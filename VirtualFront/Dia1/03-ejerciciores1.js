//en cantidades almacenarfe mis números
var cantidades = [];
//cantidad es la cantidad de números que pondré dentro de cantidades
var cantidad = +prompt("Ingrese cuantas cantidades se va a evaluar");
console.log(cantidad);

//arreglo.push(elementonuevo)   .push() me permite añadir un elemento al final de un arreglo
for(let i = 0; i < cantidad; i++){
    cantidades.push(+prompt(`Ingrese el número ${i+1} a evaluar `));
}
console.log(cantidades);

let igualesACero = 0;
let positivas = 0;
let negativas = 0;

for(let i = 0; i < cantidades.length; i++){
    if(cantidades[i] == 0){
        // igualesACero = igualesACero + 1;
        igualesACero++;
    }else if(cantidades[i] > 0){
        positivas++;
    }else{
        negativas++;
    }
}

console.log(`Hay ${igualesACero} números iguales a 0`);
console.log(`Hay ${positivas} números mayores a 0`);
console.log(`Hay ${negativas} números menores a 0`);





//EXPLICACIÓN DE PUSH
// var numeritos = [0,1,2,3,4,5,6];

// console.log("numeritos",numeritos);

// numeritos.push(20);

// console.log("numeritos después del push",numeritos);