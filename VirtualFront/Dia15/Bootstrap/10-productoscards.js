let productos = [
    {
        nombre:"Mouse Logitech G",
        descripcion:"Mouse Logitech de Alto Rendimiento",
        precio: 48,
        imagen:"https://picsum.photos/400"
    },
    {
        nombre:"Teclado Logitech Ergonómico",
        descripcion: "Teclado ergonómico y agradable de uso diario",
        precio: 150,
        imagen:"https://picsum.photos/400"
    },
    {
        nombre:"Tabled Huawei",
        descripcion: "Tablet de 10', tactil, resolución FHD y con Stylus",
        precio: 700,
        imagen:"https://picsum.photos/400"
    },
    {
        nombre:"Laptop Nitro 5 Acer",
        descripcion: "Laptop de Alto Rendimiento para trabajo y el Maincra",
        precio: 2500,
        imagen:"https://picsum.photos/400"
    }
];

let divTarjetas = document.getElementById("tarjetas");
let inputFiltro = document.getElementById("inputfiltro");
let btnFiltro = document.getElementById("btnfiltro");

let dibujarTarjetas = (arrProd) => {
    let cards = '';

    arrProd.forEach((prod) => {
        cards = cards + `<div class="col-4">
                            <div class="card">
                                <img class='card-img-top' src='${prod.imagen}'/>
                                <div class="card-body">
                                    <h5 class="card-title">${prod.nombre}</h5>
                                    <p class="card-text">${prod.descripcion}<p/>
                                    <label class="font-weight-bold">Precio:</label>${prod.precio}
                                </div>
                                <div class="card-footer">Hasta agotar stock</div>
                            </div>
                        </div>`;
    });
    divTarjetas.innerHTML = cards;
}

dibujarTarjetas(productos);

//Aquí vamos a filtrar
btnFiltro.addEventListener("click",()=>{
    let textoFiltro = inputFiltro.value; //texto del inputfiltro
    console.log(textoFiltro)
    
    let prodFiltrados = productos.filter((prod)=>{ //prodFiltrados => [] de todos los productos que esten filtrados
        //includes va a retornar un true o false en caso encuentre un texto dentro de otro texto
        return prod.nombre.includes(textoFiltro);
    });
    dibujarTarjetas(prodFiltrados);
});