/** Vamos a hacer una aplicación que me permita recibir información de una venta
 * de productos y que nos imprima una boleta
 * 
 * Que vamos a pedirle al usuario:
 * - Producto
 * - Cantidad
 * - Precio Unitario
 * Nro de filas con la información ingresada por eol usuario (generar código)
 * Total de todo (calculado por el código)
 * SubTotal antes de IGV%
 * Obtener el IGV 18% (Calcular por el código) 
 * Numeración del producto (generada automáticamente desde el código)
 */

let nroProductos = +prompt("Ingrese la cantidad de Productos a Vender");
//para crear elementos => document.createElement("p,h1,span,a,button")
let tabla = document.createElement("table");
//cabecera de mi boleta
tabla.innerHTML = `<thead>
                        <tr>
                            <th>Nro</th>
                            <th>Producto</th>
                            <th>Cant.</th>
                            <th>P.Unit.</th>
                            <th>Total</th>
                        </tr>
                    </thead>`;
//obtenemos el div con id "contenido"
let contenido = document.getElementById("contenido");
//appendChild(objetoHTML) => y agregara ese elemento como un hijo al final de los demas hijos
contenido.appendChild(tabla);

//creamos un objeto/elemento tobdy
let tbody = document.createElement("tbody");
//cuerpo contendrá la información de los productos
let cuerpo = "";
//sumatoria de los totales de c/producto
let subtotal = 0;

for(let i = 0; i < nroProductos; i++){
    //Acá ya empezamos a pedir los productitos
    let cantProd = +prompt(`Ingrese la cantidad del Prod. ${i+1}`);
    let nomProd = prompt(`Ingrese el nombre del Producto ${i+1}`);
    let precioProd = +prompt(`Ingrese el precio unitario ${i+1}`);
    let totalProd = cantProd * precioProd;
        //mis filas por c/producto
     cuerpo = cuerpo + `<tr>
                            <td>${i+1}</td>
                            <td>${nomProd}</td>
                            <td>${cantProd}</td>
                            <td>${precioProd}</td>
                            <td>${totalProd}</td>
                        </tr>`;

    subtotal = subtotal + totalProd;
}

cuerpo = cuerpo + `<tr>
                        <td colspan="4">Subtotal</td>
                        <td>S/. ${subtotal}</td>
                    </tr>
                    <tr>
                        <td colspan="4">IGV 18%</td>
                        <td>S/. ${subtotal * 0.18}</td>
                    </tr>
                    <tr>
                        <td colspan="4">TOTAL</td>
                        <td>S/. ${subtotal + (subtotal * 0.18)}</td>
                    </tr>`;
console.log(cuerpo);
tbody.innerHTML = cuerpo;
tabla.appendChild(tbody);

if(subtotal >= 50){
    let p = document.createElement("p");
    p.innerHTML = "Puedes pagar con tarjeta";
    //añade un elemento como primer hijo
    contenido.prepend(p);
}