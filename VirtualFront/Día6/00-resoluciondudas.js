//?:Profesor podria yo poner dentro de una clase ....var nombre, var direccion .??

//R:dentro de un metodo yo si puedo declarar variables con let, las propiedades que se declaren dentro de una clase van tal cual solo el nombre


class Persona{
    // var nombre;
    // let direccion;
    //yo no puedo utilizar var let para indicar que propiedades voy a tener
    nombre;
    direccion;
    //?: ESPECIFICAMENTE .QUE DEBE IR DENTRO DE UN CONSTRUCTOR ??
    //r: Debe construir el objeto que requiero, pero no siempre recibira todos los valores que componen mi objeto
    constructor(nom){
        this.nombre = nom;
        //direccion podria quedar en blanco 
        this.direccion = "";
        //ejecute un método
        this.notificacionCreado();
    }
    modificarDatos(nom, dir){
        let nuevoNombre = nom; //convertir a mayuscúlas
    }
    notificacionCreado(){
        console.log("Objeto creado");
    }
    saludar(){
        console.log(`hola soy ${this.nombre}`);
    }
}

let personita = new Persona("Juan","Los Palotes S/N");

// let personita = {nombre:"Juan",direccion:"Los Palotes S/N"};

console.log(personita.nombre); //Juan

/** ?: EN LOS METODOS O FUNCIONES .... PUEDO UTILIZARLAS COMO UNA FUNCION GLOBAL ...O  TENE ALGUNAS RESTRICCIONES ????
 * R:Se puede utilizar siempre y cuando instanciemos (o sea creemos un nuevo objeto a partir de la clase, ver abajo )
 * la otra solución es utilizar métodos estáticos pero eso lo vemos mas adelante
 */
//por eso como abajo creo personita a partir de class Persona y recien llamo a su metodo modicarDatos
// personita.modificarDatos(); 

let persona5 = new Persona("Daniel");

persona5.saludar();

