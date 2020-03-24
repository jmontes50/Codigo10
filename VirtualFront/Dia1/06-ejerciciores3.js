/**
 * Realice un algoritmo que determine el sueldo semanal de N trabajadores
considerando que se les descuenta 5% de su sueldo si ganan
entre 0 y 150 pesos. Se les descuenta 7% si ganan más de 150 pero
menos de 300, y 9% si ganan más de 300 pero menos de 450. Los
datos son horas trabajadas, sueldo por hora y nombre de cada trabajador.
 */

//MIS VARIABLES
//numero de trabagadores
//Descuento
//Sueldoxhora
//Nombre de cada trabajdor
// sueldo total , ganancia

let nombre = prompt("Ingrese el nombre del trabajador");
let horas = +prompt("Ingrese las horas trabajadas");
let sueldoXHora = +prompt("Ingrese el sueldo por hora");
let sueldototal = horas * sueldoXHora;

switch (true) {
  case sueldototal > 0 && sueldototal <= 150:
    // sueldototal = sueldototal * 0.95;
    sueldototal *= 0.95;
    break;
  case sueldototal > 150 && sueldototal <= 300:
    sueldototal *= 0.93;
    break;
  case sueldototal > 300 && sueldototal <= 450:
    sueldototal *= 0.91;
    break;
  default:
    sueldototal = sueldototal;
    break;
}

console.log(`El trabajador ${nombre} ha trabajado ${horas} horas y su sueldo es ${sueldototal} con descuentos ya aplicados`);