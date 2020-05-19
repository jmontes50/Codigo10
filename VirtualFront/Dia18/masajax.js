window.onload = ()=> {
    //todo mi codigo va air aca adentro
    let contenido = document.getElementById("contenido");
    let linkModal = document.getElementById("crearproducto");
    let formulario = document.getElementById("formulario");

    let imprimirProductos = (arrProductos) => {
        contenido.innerHTML = "";
        //recorro arrProductos
        arrProductos.forEach((prod)=>{
            let div = document.createElement("div");
            div.setAttribute("class","col-md-3 mb-2");

            div.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${prod.prod_img}"/>
                                <div class="card-body">
                                    <h5 class="card-title">${prod.prod_nom}</h5>
                                    <p class="card-text">
                                        ${prod.prod_descr}
                                    </p>
                                    <label>Precio:</label> ${prod.prod_prec}
                                    <div class="d-flex justify-content-between">
                                        <button class="btn btn-primary btncarrito" nombre="${prod.prod_nom}" precio="${prod.prod_prec}">
                                            <i class="fas fa-cart-plus">
                                            </i>
                                        </button>
                                        <button class="btn btn-warning">
                                            <i class="fas fa-folder-plus"></i>
                                        </button>
                                        <button class="btn btn-danger">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>`;
            contenido.appendChild(div);
        })
        //esto nos devuelve un arreglo de elementitos btn con la clase btncarrito
        let btnsCarrito = document.getElementsByClassName("btncarrito");
        console.log("btnCarrito", btnsCarrito)

        //recorremos ese arreglo de botones
         for(let i = 0; i<btnsCarrito.length; i++){
             btnsCarrito[i].onclick = (e) => {
                //  e.target va a hacer referencia al mismo objeto que estoy referenciando
                console.log(e.target)
                 console.log(e.target.getAttribute("nombre"));
                 console.log(e.target.getAttribute("precio"));
             }
         }      
    }

    let traerProductos = () => {
        let ajax = new XMLHttpRequest();

        //eon el evento onreadystatechange escuchamos la respuesta
        ajax.onreadystatechange = () => {
            //Aca ya vencimos ya tenemos una respuesta del servidor
            if(ajax.readyState === 4){
                console.log("estado",ajax.status);
                // console.log("respuesta",ajax.responseText);
                let JSONrespuesta = JSON.parse(ajax.responseText);
                console.log("respuesta",JSONrespuesta);
                if(ajax.status === 200){
                    imprimirProductos(JSONrespuesta);
                }
            }
        }
        //configuramos
        ajax.open("GET","https://5e22b9e7afee990014e59669.mockapi.io/productos");
        //mandamos
        ajax.send(null);
    }
    traerProductos();

    let crearProducto = (objProducto) => {
        let ajax = new XMLHttpRequest();

        ajax.onreadystatechange = () => {
           if(ajax.readyState === 4){
            //    console.log("estado",ajax.status); //201 si ha sido creado
            //    console.log("rpta", ajax.responseText);
            if(ajax.status === 201){
                traerProductos();
                formulario.reset();
                $("#modalproducto").modal("hide");
            }
           }
        }

        ajax.open("POST","https://5e22b9e7afee990014e59669.mockapi.io/productos");
        ajax.setRequestHeader("Content-type", "application/json");
        ajax.send(JSON.stringify(objProducto));
    }

    formulario.onsubmit = (e) => {
        e.preventDefault();
        //crear un objeto que sea identico a los objetos que maneja MOckapi
        let objProducto = {
            //estoy haciendo referencia al nombre de cada input dentro de mi formulario -> nombre_form["name_del_input"].value
            prod_nom: formulario["nombre"].value,
            prod_descr: formulario["descripcion"].value,
            prod_prec: formulario["precio"].value
        }
        crearProducto(objProducto)
    }

    //abrir modal
    linkModal.onclick = () => {
        //$ = document.querySelector
        $("#modalproducto").modal("show");
    }
}