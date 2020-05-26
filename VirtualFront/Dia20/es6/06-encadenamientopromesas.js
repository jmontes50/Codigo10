let btnBuscar = document.getElementById("buscarProductos");
let idProducto = document.getElementById("inputid");
let idCliente = document.getElementById("inputidcliente");

let buscarProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        let ajax1 = new XMLHttpRequest();
        ajax1.onreadystatechange = () => {
            //evaluo si obtuve una respuesta exitosa
            if(ajax1.readyState === 4 && ajax1.status === 200){
                resolve(ajax1.responseText);
            }
            //evaluo si obtuve un error not found en mi respuesta
            if(ajax1.readyState === 4 && ajax1.status === 404){
                reject("Nel, no encontre el producto");
            }
        }
        ajax1.open("GET", `https://5e22b9e7afee990014e59669.mockapi.io/productos/${id}`);
        ajax1.send(null)
    });
}

let buscarCliente = (id) => {
    return new Promise((resolve, reject) => {
        let ajax2 = new XMLHttpRequest();
        ajax2. onreadystatechange = () => {
            if(ajax2.readyState === 4 && ajax2.status === 200){
                resolve(ajax2.responseText)
            }
            if(ajax2.readyState === 4 && ajax2.status === 404){
                reject("Nel, no se encontro al usuario")
            }
        }
        ajax2.open("GET", `https://5e22b9e7afee990014e59669.mockapi.io/cliente/${id}`);
        ajax2.send(null)
    });
}

btnBuscar.onclick = () => {
    let idProd = idProducto.value;
    let idCli = idCliente.value;

    if(idProd === "" || idCli === ""){
        console.log("No deje vacios los campos..");
        return;
    }

    buscarProductoPorId(idProd)
    .then((rpta) => {
        console.log("producto encontrado",rpta);
        return buscarCliente(idCli);
    })
    .then((cliente) => {
        console.log("tambien se encontro al cliente : " +  cliente);
    })
    .catch((error) => {
        console.error(error);
    });
}

