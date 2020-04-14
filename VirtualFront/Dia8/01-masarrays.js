let numeros = [10,20,30,5,12,15,20];

//map(()=>{}) recibe una funcion para aplicar una operación a cada elemento del arreglo y retorno un nuevo arreglo con los elementos transformados
let dobles = numeros.map((num,index)=>{
    // return num * 2;
    if(index % 2 == 0){
        return num * 2;
    }
    return num;
});
console.log("original",numeros);
console.log("map dobles", dobles);

//
//find se podria entender como una especie de filter
//find((elemento)=>{return condicional}) si existe algun valor que cumpla esta condicional me retorna el primero que encuentre
let existe = numeros.find((num) => {
    return num == 21;
});

console.log("find",existe);
//////////////////////////

//reduce((acumalador,elemento)=>{return operacion},valor_inicial_acumulador) va a ejcutar una funcion que retornará un valor acumulado único

// let total = numeros.reduce((acc, num) => acc + num, 8);
let total = numeros.reduce((acc, num)=>{
    return acc + num;
}, 0);

console.log("reduce suma", total);

