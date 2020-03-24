let ingresemes = +prompt("Ingrese el número del mes de nacimiento");

// if(ingresemes == "1"){
//     alert("El mes enero");
// }else{}

switch (ingresemes) {
  case 1:
    alert("Tu mes es enero");
    //break me permite cortar la ejecución de un código;
    break;
  case 2:
    alert("Tu mes es febrero");
    break;
  case 3:
    alert("Tu mes es Marzo");
    break;
  case 4:
    alert("Tu mes es Abril");
    break;
  case 5:
    alert("Tu mes es Mayo");
    break;
  case 6:
    alert("Tu mes es Junio");
    break;
  case 7:
    alert("Tu mes es Julio");
    break;
  case 8:
    alert("Tu mes es Agosto");
    break;
    //cuando ninguna de estas condiciones se cumpla, ejecutaremos el default predeterminadamente
  default:
    alert("El mes ingresado no corresponde a ninguno, ingrese correctamente");
}
