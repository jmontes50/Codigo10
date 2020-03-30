function sumarTradicional(a,b){
    return a + b;
}

let sumarv2 = function(a,b){
    return a + b;
}

// console.log(sumarv2(5,10));

let otraFuncion = function(funcioncita, nro1, nro2){
    //func, le estoy diciendo que funcion va a ejcutar como si se tratrá de una variable
    //nro1 y nro2
    let s = funcioncita(nro1, nro2);
    console.log(s)
}

otraFuncion(sumarv2, 5, 10);