var X1 = +prompt("Introduzca X1");
var Y1 = +prompt("Introduzca Y1");
var X2 = +prompt("Introduzca X2");
var Y2 = +prompt("Introduzca Y2");

var X = X1 - X2;
var Y = Y1 - Y2;

var resultado = Math.sqrt( X * X + Y * Y);
console.log(`La distancia entre 2 puntos es:  ${resultado}`);