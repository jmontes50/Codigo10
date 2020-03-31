let crearGatete = () => {

    let claseGato = {
        tamanio:'mediano',
        color:'cafe',
        genero:'hembra',
        colorOrejas:'negro',
        personalidad:'juguetona',
        mostrarInfo: function() {
            console.log(`personalidad: ${this.personalidad} y genero: ${this.genero} color: ${this.color}`);
        }
    };

    return claseGato;
}
//que puedo duplicar muchos objetos y autollamar al mismo objeto con this
//crear objGatita
let gatita = crearGatete();
gatita.color = 'blanco';

console.log("gatita",gatita);

//crear objGatete
let gatete = crearGatete();
console.log("gatete",gatete);

gatita.mostrarInfo();

gatete.mostrarInfo();

console.log("////////////////////////////////////");
//---------------------------------------------------
// let pelicula = () => {}
let pelicula = function (name,year,type,dir) {
    let clasePelicula = {
        nombre:name,
        anio:year,
        tipo:type,
        director:dir,
        imprimirInfo: function() {
            console.log(`La Pelicula ${this.nombre} del año ${this.anio} del director ${this.director}`);
        }
    }
    return clasePelicula;
}

//crear un nuevo objetoPelicula gracias a esa función pelicula que me construye el objeto
let pelicula1 = new pelicula('Interstellar',2014,"Ciencia/Ficción",'Christopher Nolan');

pelicula1.imprimirInfo();

let pelicula2 = new pelicula('Your Name',2018,'Animación','Makoto Shinkai');

pelicula2.imprimirInfo();

//////........................................................

let Usuario = function(nombres, apellidos, dni, edad) {
    let claseUsuario = {
        _nombres:nombres,
        _apellidos:apellidos,
        _dni:dni,
        _edad:edad,
        imprimirUsuario: function() {
            console.log(`Usuario: ${this._nombres} ${this._apellidos} de ${this._edad} y con DNI ${this._dni}`);
        }
    }
    return claseUsuario;
}

let nuevoNombre = prompt("Ingrese sus nombres");
let nuevoApellido = prompt("Ingrese sus apellidos");
let nuevoDni = prompt("Ingrese su DNI");
let nuevaEdad = +prompt("Ingrese su edad");

let objUsuario1 = new Usuario(nuevoNombre, nuevoApellido, nuevoDni, nuevaEdad);

objUsuario1.imprimirUsuario();

console.log("imprimiendo propiedad",objUsuario1._dni);

let celular = {
    marca:'Xiaomi',
    color:'Oro',
    pantalla:'6'
}