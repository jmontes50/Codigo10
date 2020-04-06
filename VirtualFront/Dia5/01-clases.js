let Alumnito = function (nom, ape, ed, telf){
    //creo mi objeto alumno
    let alum = {
        nombre:nom,
        apellido:ape,
        edad:ed,
        telefono:telf,
        //UTILIZO this. para autoreferenciar el objeto
        mostrarInfo: function(){
            console.log(`nombre: ${this.nombre}, apellido: ${this.apellido} con edad ${this.edad}`);
        }
    }
    //returno mi objeto creado
    return alum;
}

let objMauricio = new Alumnito('Mauricio','Surco',24,"23456789");
objMauricio.mostrarInfo();




class Prosor{
    //esta parte donde declaro las propiedades no es obligatoria, se puede hacer directamente en el constructor
    nombre;
    apellido; //

    //método -> funciones que van a estar dentro de una clase
    constructor(nom, ape){
        this.nombre = nom;
        this.apellido = ape;
    }

    //metodo mostrarInfo -> 
    mostrarInfo(){
        console.log(`El nombre completo del Prosor es: ${this.nombre} ${this.apellido}`);
    }
    // mostrarNombre(){
    // }
}

let objAlfredo = new Prosor('Alfredo','Saire'); //Instanciando a partir de la clase Prosor un nuevo objeto

objAlfredo.mostrarInfo();