//inicio

var PR = +prompt("Ingrese el Precio del traje");
//todavia no voy a inicializar el descuento, porque no se que descuento aplicar
var DE;

var PF;

//Vamos a comparar el precio del traje
if(PR > 2500){
    //aplicamos el desceunto del 15%
    DE = PR * 0.15;
}else{
    //como solo tenemos 2 situaciones me basta con un else, si no podria poner un else if
    DE = PR * 0.08;
}
//Obtenemos el precio final aplicando el Descuento que debe ser, según lo evaluado anteriormente
PF = PR - DE;

//mostramos el precio final y el descuento
console.log("El precio final es: " + PF + " S/");
console.log(`El descuento es ${DE}`);