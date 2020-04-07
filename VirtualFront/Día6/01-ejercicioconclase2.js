//TODO LIST. Que tenemos que hacer
/**
 * 1. Objeto Empresa
 * 2. agregar sus datos y construirlo
 * 3. dentro de las propiedades que tenga Empresa tiene        que    tener un arreglo de Usuarios
 * 4. voy a necesitar objetos Usuarios
 * 5. Cada objeto Usuario dentro de ese arreglo tendrá sus propios
 *      datos
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
            usu_telf:''
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
}
//fin de la clase Empresa

let tecsup = new Empresa("Tecsup Arequipa","Av. Hartley");

tecsup.agregarUsuario();