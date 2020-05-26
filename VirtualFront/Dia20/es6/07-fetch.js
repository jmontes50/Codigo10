let url1 = "https://jsonplaceholder.typicode.com/users";

//hacer peticiones, consumir API, pero de una forma más sencilla ya integrando promesas

fetch(url1) //con peticiones de tipo GET
.then((respuesta) => {
    console.log(respuesta);
    return respuesta.json(); //.json(), me devuelve otra promesa
})
.then((data) => {
    console.log("mis datos: ",data)
})
.catch((error)=>{
    console.error(error);
});

let url2 = "https://5e22b9e7afee990014e59669.mockapi.io/cliente"

let objCliente = {
    cli_nom:"Eduardo"
}

//fetch(URL_PETICION, {configuracion_petición}, body:Info_que_envio_en_formato_texto)
fetch(url2, {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify(objCliente) //la info transformada a texto
}).then((respuesta) => {
    return respuesta.json();
}).then((datos) => {
    console.log(datos)
}).catch((error) => {
    console.error(error);
})

