window.onload = ()=> {
    //todo mi codigo va air aca adentro
    let contenido = document.getElementById("contenido");

    let imprimirProductos = (arrProductos) => {
        contenido.innerHTML = "";
        //recorro arrProductos
        arrProductos.forEach((prod)=>{
            let div = document.createElement("div");
            div.setAttribute("class","col-md-3");

            div.innerHTML = `<div class="card">
                                <img class="card-img-top" src="${prod.prod_img}"/>
                                <div class="card-body">
                                    <h5 class="card-title">${prod.prod_nom}</h5>
                                    <p class="card-text">
                                        ${prod.prod_descr}
                                    </p>
                                    <label>Precio:</label> ${prod.prod_prec}
                                    <div class="d-flex justify-content-between">
                                        <button class="btn btn-primary">
                                            <i class="fas fa-cart-plus"></i>
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
}