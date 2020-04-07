//TODO LIST. Que tenemos que hacer
/**
 * 1. Objeto Empresa
 * 2. agregar sus datos y construirlo
 * 3. dentro de las propiedades que tenga Empresa tiene        que    tener un arreglo de Usuarios
 * 4. voy a necesitar objetos Usuarios
 * 5. Cada objeto Usuario dentro de ese arreglo tendrá sus propios datos
 * 6. Cada Usuario tendrá un arreglo de mensajes
 * 7. tengo que hallar la manera de poder identificar al 
 *      usuario que quiera mandar el mensaje
 * 8. Y mandar el mensaje a ese Usuario
 *
 * NT: no modificar directamente las propiedades de los objetos
 * hacer todo con metodos (funciones) dentro de mi Clase
 */

class Empresa{
    emp_nom; //nombre
    emp_dir; //direccion
    emp_usu; //arr Usuarios

    constructor(nombre, direccion){
        this.emp_nom = nombre;
        this.emp_dir = direccion;
        this.emp_usu = [];
    }
    agregarUsuario(){
        let usuarioTmp = {
            usu_nom:'',
            usu_telf:'',
            usu_msjs:[]
        }
        //capturo los datos para ingresar un usuario
        usuarioTmp.usu_nom = prompt("Ingrese el nombre del usuario");
        usuarioTmp.usu_telf = prompt("Ingrese su número de teléfono");

        let telf = usuarioTmp.usu_telf;

        for(let i = 0; i < this.emp_usu.length; i++){

            let iTelf = this.emp_usu[i].usu_telf;

            if(telf == iTelf){
                console.log("oe el usuario ya existe");
                //con el return termina la ejecución de este método
                return;
            }
        }
        //agregar el usuario
        this.emp_usu.push(usuarioTmp);
    }

    mandarMensaje(){
        let destinatario = prompt("Ingresa el núm. de teléfono");

        for(let i=0; i < this.emp_usu.length;i++){
            if(destinatario == this.emp_usu[i].usu_telf){
                //obtenemos el usuario para mandar el mensaje, agergaremos el mensaje
                let mensaje = prompt(`Ingresa el mensaje para ${this.emp_usu[i].usu_nom}`);
                //estamos agregando el mensage obtenido por el prompt en la propiedad usu_msjs
                this.emp_usu[i].usu_msjs.push(mensaje);
                //imprimirmos los mensajes del usuario
                console.log(this.emp_usu[i].usu_msjs);
            }else{
                console.log("El telf. Ingresado no existe");
            }
        }
    }

    verMensajes(){
        /**0. Opción 3
         * 1. que el usuario ingrese su numero de telefono
         * 2. segun el numero de telefono, me imprima sus mensajes
         */
        let telefono = prompt("Ingrese su numero de teléfono");

        for(let i=0; i < this.emp_usu.length; i++){
            if(telefono == this.emp_usu[i].usu_telf){
                console.table(this.emp_usu[i].usu_msjs);
            }else{
                console.log("Teléfono no existe");
            }
        }
    }

}
//fin de la clase Empresa

let tecsup = new Empresa("Tecsup Arequipa","Av. Hartley");

do{
    //aca adentro el codigo a ejecutar
    opcion = +prompt(`
                    :::::::::::Bienvenido:::::::::::
                    Escoja entre las siguientes opciones
                    1. Agregar un Usuario
                    2. mandar un mensaje a un usuario
                    3. vea sus mensajes
                    4. Salir`);

    switch(opcion){
        case 1:
            tecsup.agregarUsuario();
            break;
        case 2:
            tecsup.mandarMensaje();
            break;
        case 3:
            tecsup.verMensajes();
            break;
        case 4:
            console.log("Bye, salio del sistema");
            break;
        default:
            console.log("La opción ingresada no es valida");
            break;
    }
}while(opcion != 4)