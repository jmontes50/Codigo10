//función tradicional
function saludar(saludo){
    console.log(saludo);
}

//función anónima
let saludarv2 = function(saludo){
    console.log(saludo);
}

//función flecha
let saludarV3 = (saludo) => {
    console.log(saludo);
    // return;
}

saludarV3("Hola Código!");