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
    for(let i = 0; i < arr.length; i++){
        contenido = contenido + `<tr>
                                    <td>${arr[i].nombre}</td>
                                    <td>${arr[i].cantidad}</td>
                                    <td>${arr[i].precio}</td>
                                </tr>`
    }
    tabla.innerHTML = contenido;
    tabla.border = 1;
    tabla.style.margin = "10px";
    div.appendChild(tabla);

    //agregamos la cabecera, si lo estamos agregando después - DIA12
    let thead = document.createElement("thead"); //<thead></thead>
    let tr = document.createElement("tr"); //<tr></tr>
    let th1 = document.createElement("th"); //<th></th>
    let th2 = document.createElement("th"); //<th></th>
    let th3 = document.createElement("th"); //<th></th>
    th1.innerHTML = "Nombre";//<th>Nombre</th>
    th2.innerHTML = "Cantidad";//<th>Cantidad</th>
    th3.innerHTML = "Precio";//<th>Precio</th>
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3); //<tr><th>...</th></tr>
    thead.appendChild(tr);//<thead><tr><th>....</thead>
    thead.style.backgroundColor = "blue";
    thead.style.color = "white";
    tabla.prepend(thead);

//     let span = document.createElement("span");
//     console.log(span);
}

