let primos = ["Ronald", "Jorge", "Gersson", "Wilson", "Ivan"];

let buscarARonald = (arreglo, func) => {
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] == "Ronald"){
            func(i);
            //si encuentra a Ronald me devolverá su posición
            return;
        }
    }
    //Y si no me devolverá -1
    func(-1);
}

buscarARonald(primos, (posicion) => {
    if(posicion != -1){
        console.log(`Ronald esta en la posición ${posicion}`)
    }else{
        console.log("Nancy, no esta, no hay");
    }
})