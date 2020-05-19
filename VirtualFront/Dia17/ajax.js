let btntraerdatos = document.getElementById("btntraerusuarios");
let tbody = document.getElementById("tbody");
let inputNombre = document.getElementById("nombre");
let inputUsername = document.getElementById("username");
let inputEmail = document.getElementById("email");
let inputTelefono = document.getElementById("telefono");
let btnCrearUsuario = document.getElementById("crearusuario");

let dibujarDatos = (arrUsuarios) => {

    arrUsuarios.forEach((usu) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${usu.id}</td>
                        <td>${usu.name}</td>
                        <td>${usu.username}</td>
                        <td>${usu.email}</td>
                        <td>${usu.phone}</td>
                        <td>${usu.website}</td>`;
        tbody.appendChild(tr);
    });
}

btntraerdatos.onclick = () => {
    console.log("click!")
  //Creamos nuestro objeto AJAX que se encargara de hacer la petición
  let postman = new XMLHttpRequest();

  //onreadystatechange se le asigna una fucnion que se ejecuta cada vez que cambie 
  //el estado de mi petición (open´, send, data, responsetext)
  postman.onreadystatechange = () => {

    //postman.readystate -> propiedad de ajax que me indica en que estado esta mi petición en forma de número
        switch(postman.readyState){
            case 1:
                console.log("Se ejecuta OPEN, el paso 1");
                break;
            case 2:
                console.log("Se ejecuta SEND, el paso 2");
                break;
            case 3:
                console.log("Esperando al servidor ...v, el paso 3");
                break;
            case 4:
                console.log("La respuesta YA ESTA AQUÍ!!!!, el paso 4");
                console.log("response",JSON.parse(postman.responseText));
                console.log("estado http", postman.status);
                if(postman.status === 200){
                    let arrObjUsuarios = JSON.parse(postman.responseText);
                    dibujarDatos(arrObjUsuarios);
                    
                    let alertCargando = document.getElementById("cargando")
                    alertCargando.setAttribute("hidden","hidden");

                    let tabla = document.getElementById("tabla");
                    tabla.removeAttribute("hidden");
                }
                break;
                
        }
  }
  //postman.open("TIPO DE PETICION, GET,POST,PUT,DELETE", URL), configurando mi petición
  postman.open("GET","https://jsonplaceholder.typicode.com/users")

  //send, mandar nuestra petición
  postman.send(null);
};

btnCrearUsuario.onclick = () => {
    //mostramos una alert con SweetAlert,
    Swal.fire({
        icon:'info',
        title:'Espere por favor',
        // para remover el botoncito que me aparecia en mi alert
        showConfirmButton: false
    });

    let objUsuario = {
        name:inputNombre.value,
        username:inputUsername.value,
        email:inputEmail.value,
        phone:inputTelefono.value
    }

    let ajax = new XMLHttpRequest();

    //el tiempo máximo de espera de mi petición, se da en milisegundos
    ajax.timeout = 20000;

    //Es el evento, que dispara una función en case se alcance el tiempo máximo de espera configurado
    ajax.ontimeout = () => {
        Swal.close();
        Swal.fire({
            icon:'error',
            title:"Ha ocurrido algo",
            text:"No se obtuvo respuesta del Servidor"
        })
    }

    //se dispara cada vez que readyState cambia
    ajax.onreadystatechange = () => {
        if(ajax.readyState === 4){
            console.log(ajax.responseText);
            console.log(ajax.status);
        }
        //codigod e peticiones HTTP
        //https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
        if(ajax.status === 201){
            //cerrar el alert anterior de Espere por favor
            Swal.close();
            //otro alert
            Swal.fire({
                icon:'success',
                title: 'Usuario Creado',
                text: 'Operación exitosa'
            })
        }
    }
    //configuro mi peticion con el tipo de peticion y la url
    ajax.open("POST","https://jsonplaceholder.typicode.com/users");
    
    //configuro los headers de mi petición, es información acerca de mi transaccion
    //https://es.wikipedia.org/wiki/Anexo:Cabeceras_HTTP
    ajax.setRequestHeader("Content-Type","application/json");

    //mando mi peticion, con el objeto creado previamente convertido a texto
    ajax.send(JSON.stringify(objUsuario));
}


