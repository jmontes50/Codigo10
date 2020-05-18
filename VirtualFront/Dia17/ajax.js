let btntraerdatos = document.getElementById("btntraerusuarios");
let tbody = document.getElementById("tbody");

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
