window.onload = function(){
    let inputNombre = document.getElementById("inputnombre");
    let btnNombre = document.getElementById("btnnombre");
    let spanNombre = document.getElementById("spannombre");
    let inputMsj = document.getElementById("inputmensaje");
    let btnEnviar = document.getElementById("btnenviar");
    let divMsgs = document.getElementById("mensajes");
    let nombre = '';

    btnNombre.addEventListener("click",()=>{
        nombre = inputNombre.value;
        spanNombre.innerHTML = nombre;
    });

    btnEnviar.addEventListener("click",()=>{
        if(nombre === ""){
            alert("Ingrese un nombre valido por favor");
            return;
        }

        let objMensaje = {
            nombre:nombre,
            mensaje:inputMsj.value
        }

        let chatStorage = localStorage.getItem("chat");
        //evaluar chatStorage Existe
        if(chatStorage){
            //obj, con arreglo de mensajes
            let JSONchat = JSON.parse(chatStorage);
            console.log("jsonchat",JSONchat)
            JSONchat.push(objMensaje);
            //Guardo todo el chat con el nuevo mensaje modificado
            //JSON.stringify me sirve para convertirlo a texto
            localStorage.setItem("chat",JSON.stringify(JSONchat));
        }else{
            let arrTmpChat = [objMensaje];
            localStorage.setItem("chat",JSON.stringify(arrTmpChat));
        }

        inputMsj.value = "";
    })

    //setInterval => setInterval(function,tiempo_ms) , va a ejecutar esa función cada X tiempo
    setInterval(()=>{
        let chatStorage = localStorage.getItem("chat");
        if(chatStorage){
            divMsgs.innerHTML = "";
            //lo convertimos de texto a JS
            let objMsgsObtenidos = JSON.parse(chatStorage);
            let htmlMensajes = "";

            objMsgsObtenidos.forEach(mensaje => { //cada mensaje obtenido es un objeto
                if(mensaje.nombre === nombre){
                    htmlMensajes = htmlMensajes + `<div class="row">
                                                        <div class="col-6"></div>
                                                        <div class="col-6">
                                                            <div class="card d-block border">
                                                                <div class="card-body">
                                                                    ${mensaje.mensaje}
                                                                </div>
                                                                <div class="card-footer">
                                                                    <small>${mensaje.nombre}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>`
                }else{
                    htmlMensajes = htmlMensajes + `<div class="row">
                                                        <div class="col-6">
                                                            <div class="card d-block border">
                                                                <div class="card-body">
                                                                    ${mensaje.mensaje}
                                                                </div>
                                                                <div class="card-footer">
                                                                    <small>${mensaje.nombre}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-6"></div>
                                                    </div>`
                }
                divMsgs.innerHTML = htmlMensajes;
            }) 
        }else{
            divMsgs.innerHTML = "No hay mensajes";
        }
    },300)
}