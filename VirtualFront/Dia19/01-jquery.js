//obtener un elemento con Jquery, Jqwuery es un $
//window.onload = function(){}
$(document).ready(function(){

    //En el caso de Jquery, voy a utilizar selectores de tipo css
    let btnCambiarColor = $("#btnCambiarColor");

    //onclick o un addeventlistener
    btnCambiarColor.click(function (event){
        // console.log("click por Jquery",event);
        //hasClass, hace la consulta si tiene la clase bg dark
        //removeClass, remueve las clases que yo le indique
        //addClass, añade una clase
        if($(".card-header").hasClass("bg-dark")){
            $(".card-header").removeClass("bg-dark text-white");
        }else{
            $(".card-header").addClass("bg-dark text-white");
        }

        // document.querySelectorAll(".card-header").forEach(e => {
        //     e.classList.add("bg-dark")
        //     e.classList.add("text-white")
        // })
    })

    let btnAgregarContenido = $("#btnAgregarContenido");
    btnAgregarContenido.click(() => {
        //creando un elemento con Jquery
        let parrafo = $("<p></p>");
        parrafo.html("Hola soy un parrafito");
        //obteniog el 2do card-body
        $(".card-body:eq(1)").append(parrafo)
    })

    $("#btnModificarEstilos").click(()=>{
        $(".cuadradito").css("border-radius", "50%").css("border","4px solid blue").css("background-color","green");
    })

    $(".cuadradito").mousemove(()=>{
        Swal.fire({
            icon:"info",
            text:"Pasaste el mouse por aquí"
        })
    })
});