//Pizzerias 
//manejar la pizzeria (nombre y direccion)
//agregar pizzas a esta pizzeria
//3 opciones pizza
//y el usuario puede elñegir entre estas opciones
//salir de la aplicación

//Version 1 de AppPizzeria

// class Pizzeria {
//     nombre;
//     direccion;
//     platos;

//     constructor(nombre, direccion){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.platos = [];
//     }
// }

// let nom = prompt("Ingresa el nombre de la Pizzeria");
// let dir = prompt("Ingrese su dirección");

// let objPizzeria1 = new Pizzeria(nom, dir);

// let opcion = 0;

// do{
//     //Mostrar las opciones que le vamos a ofrecer al usuario
//     //y pedir que ingrese una opción
//     opcion = +prompt(`|+|+|+|+|+| Menú Pizzeria |+|+|+|+|+|
//                         Ingrese el número según la opción:
//                        1. Agregar un nuevo Plato
//                        2. Mostrar los platos existentes
//                        3. Mostrar Info de la Pizzeria
//                        4. Salir de la Aplicación`);
//     switch(opcion){
//         case 1:
//             //Agregar un nuevo Plato
//             //Nombre del Plato, Calorias del Plato, Precio del Plato
//             let platoTmp = {
//                 nombre:'',
//                 calorias:0,
//                 precio:0
//             }
//             //pedimos los datos de ese nuevo plato al usuario
//             platoTmp.nombre = prompt("Ingrese el nombre del nuevo plato");
//             platoTmp.calorias = prompt("Ingrese las calorias del nuevo plato");
//             platoTmp.precio = prompt("Ingrese el precio del nuevo plato");
//             //Ese nuevo objeto platoTmp lo agregamos en la propiedad 'platos' de objPizzeria1
//             objPizzeria1.platos.push(platoTmp);
//             break;
//         case 2:
//             console.table(objPizzeria1.platos);
//             break;
//         case 3:
//             console.log(`${objPizzeria1.nombre} ubicado en ${objPizzeria1.direccion}`);
//             break;
//         case 4:
//             console.log("Hasta luego cliente, regrese pronto");
//             break;    
//         default:
//             console.log("Error, no ha ingresado una opcion valida");
//             break;
//     }

// }while(opcion != 4);

//AppPizzeria 1.1

class Pizzeria {
    nombre;
    direccion;
    platos;

    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.platos = [];
    }

    agregarPlato(objPlato){
        //recibo un objeto
        console.log("Impr objPlato",objPlato)
        //cambiando el precio de solo números a el precio con el símbolo de la moneda
        objPlato.precio = `S/. ${objPlato.precio * 1.18}`;
        //agrego recién objPrecio después de la modificación del Precio
        this.platos.push(objPlato)
    }

    mostrarPlatos(){
        console.log(`::::::::Mostrando Platos::::::::::`);
        console.table(this.platos)
        console.log(`::::::::Fin de la carta::::::::::`);
    }
}

let nom = prompt("Ingresa el nombre de la Pizzeria");
let dir = prompt("Ingrese su dirección");

let objPizzeria1 = new Pizzeria(nom, dir);

let opcion = 0;

do{
    //Mostrar las opciones que le vamos a ofrecer al usuario
    //y pedir que ingrese una opción
    opcion = +prompt(`|+|+|+|+|+| Menú Pizzeria |+|+|+|+|+|
                        Ingrese el número según la opción:
                       1. Agregar un nuevo Plato
                       2. Mostrar los platos existentes
                       3. Mostrar Info de la Pizzeria
                       4. Salir de la Aplicación`);
    switch(opcion){
        case 1:
            //Agregar un nuevo Plato
            //Nombre del Plato, Calorias del Plato, Precio del Plato
            let platoTmp = {
                nombre:'',
                calorias:0,
                precio:0
            }
            //pedimos los datos de ese nuevo plato al usuario
            platoTmp.nombre = prompt("Ingrese el nombre del nuevo plato");
            platoTmp.calorias = prompt("Ingrese las calorias del nuevo plato");
            platoTmp.precio = prompt("Ingrese el precio del nuevo plato");
            //Ese nuevo objeto platoTmp lo agregamos en la propiedad 'platos' de objPizzeria1
            objPizzeria1.agregarPlato(platoTmp);
            break;
        case 2:
            //MOSTRAR UN MENSAJE QUE ESTOY MOSTRANDO LOS PLATOS
            objPizzeria1.mostrarPlatos();
            break;
        case 3:
            console.log(`${objPizzeria1.nombre} ubicado en ${objPizzeria1.direccion}`);
            break;
        case 4:
            console.log("Hasta luego cliente, regrese pronto");
            break;    
        default:
            console.log("Error, no ha ingresado una opcion valida");
            break;
    }

}while(opcion != 4);