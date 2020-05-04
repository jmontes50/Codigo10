let inputActividad = document.getElementById("inputactividad");
let btnAgregar = document.getElementById("btnagregar");
let listaActividades = document.getElementById("listaactividades");

let actividades = [];

let agregarActividad = () => {
    actividades.push(inputActividad.value);

    listaActividades.innerHTML = ""; //ul

    for(let i=0; i<actividades.length; i++){
        let li = document.createElement("li");
        li.innerHTML = actividades[i];
        listaActividades.appendChild(li);
    }
}

btnAgregar.addEventListener("click",agregarActividad);

//keyUp es un evento que se activa cuando la tecla se levanta
inputActividad.addEventListener("keyup",(evento)=>{
    //la tecla que yo estoy presionando
    console.log(evento.key)
    if(evento.key === "Enter"){
        agregarActividad();
    }
});