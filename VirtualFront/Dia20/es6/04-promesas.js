//Las promesas nos sirven en entornos con operaciones asincronas
let buscarPersona = (nombre) => {
    //resolve para cuando tenemos exito, reject para cuando fallamos
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //seria el codigo asíncrono
            resolve("hey! Exito!!!!!")
            // reject("Error 404 Not Found")
        }, 5000);
    })
}

console.log("ejecutando...");

buscarPersona("Mauricio").then((rptaExitosa) => {
    console.log(rptaExitosa);
    console.log("la promesa se resolvio");
}).catch((error) => {
    console.log("Ha ocurrido un error: ", error)
})