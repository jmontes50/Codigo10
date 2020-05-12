/**window onload, es un evento que se dispará de forma automatica, después que se carguen todos los recursos
 * que ejecute el navegador
 */
window.onload = function() {
//va a ser el código
    console.log("Ya todo cargo!!!");
    let btnGuardar = document.getElementById("btnGuardar");
    let inputNombre = document.getElementById("nombre");
    let inputApellido = document.getElementById("apellido");

    let btnMostrar = document.getElementById("mostrardatos");
    btnGuardar.addEventListener("click",(e)=>{
        e.preventDefault();
        //setItem("nombre_data",datos)
        // localStorage.setItem("nombre",inputNombre.value);
        // localStorage.setItem("apellido",inputApellido.value);

        let objPersona = {
            nombres: inputNombre.value,
            apellidos: inputApellido.value,
            dni:123456321,
            estado:"Soltero"
        }
        localStorage.setItem("datos", JSON.stringify(objPersona)); //stringify => obj ---> texto
        console.log("datos guardados");
    })

    btnMostrar.addEventListener("click",()=>{
        let datos = localStorage.getItem("datos");
        let datosJSON = JSON.parse(datos) //.parse convierte un texto a un objeto
        alert(`Nombre:${datosJSON.nombres}
                Apellidos:${datosJSON.apellidos}
                DNI: ${datosJSON.dni},
                Estado Civil: ${datosJSON.estado}`)
    });
}