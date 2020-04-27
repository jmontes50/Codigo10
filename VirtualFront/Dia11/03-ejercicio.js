let productos = [];

let btnagregar = document.getElementById("btnagregar");
let div = document.getElementById("contenido");

btnagregar.addEventListener("click", () => {
    let nomProd = prompt("Ingrese nombre de producto");
    let cantProd = +prompt("Ingrese la cantidad");
    let precioProd = +prompt("Ingrese el precio del producto");

    let objProd = {
        nombre:nomProd,
        cantidad:cantProd,
        precio:precioProd
    }

    productos.push(objProd);
    imprimirProductos(productos);
})

let contenido = "";

let imprimirProductos = (arr) => {
    let tabla = document.createElement("table");
    contenido = "";
    div.innerHTML = "";
    console.log(tabla)
    for(let i = 0; i < arr.length; i++){
        contenido = contenido + `<tr>
                                    <td>${arr[i].nombre}</td>
                                    <td>${arr[i].cantidad}</td>
                                    <td>${arr[i].precio}</td>
                                </tr>`
    }
    tabla.innerHTML = contenido;
    div.appendChild(tabla);
}