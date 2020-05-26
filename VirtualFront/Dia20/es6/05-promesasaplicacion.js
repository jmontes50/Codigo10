let btnProducto = document.getElementById("buscarProductos");

let buscarPorId = (id) => {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = () => {
            if(ajax.readyState === 4){
                //obtuve un respuesta del servidor // o un producto // 404 Not Found
                console.log("status",ajax.status)
                if(ajax.status === 404){
                    reject("Producto no encontrado")
                }else{
                    resolve(ajax.responseText);
                }
            }
        }

        ajax.open("GET", `https://5e22b9e7afee990014e59669.mockapi.io/productos/${id}`);
        ajax.send(null);
    })
}

btnProducto.onclick = () => {
    let inputid = document.getElementById("inputid");
    let idProd = inputid.value;

    buscarPorId(idProd)
            .then((rpta) => {
                console.log(`exito!!!!: ${rpta}`);
            }).catch((error) => {
                console.log(`:( ${error}`);
            })
}