/**1. Si tengo que usar un constructor si o si y si puedo tener varios constructores */

//rpta, si solo puedo tener 1 constructor

class Persona{
    // nombre;
    // edad;
    constructor(name,age){
        //configurando la propiedades de la clase Persona
        this.nombre = name;
        this.edad = age;
        this.hobbies = [];
        //llamar a un método
        this.saludar();
    }

    operacionesprevias(){
        //operaciones a ejecutar
    }

    saludar(){//saludar:function(){consol.log("hola....")}
        console.log(`Hola que tal, soy ${this.nombre}`)
    }
}

let persona1 = new Persona("Osmar",29);

console.log("Imprimiendo propiedades de persona1",persona1);

persona1.dni = 78687212;

console.log("actualizacion de persona1", persona1);