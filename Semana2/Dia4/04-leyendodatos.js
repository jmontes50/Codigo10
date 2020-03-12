// mostrar un mensajito
// alert("Este es un mensaje");

//PROMPT capturará lo ingresado por el usuario en forma de string
var edad = prompt("Introduce tu edad");
console.log(typeof edad);
console.log(edad);

//para convertir de String a Entero puedo utilizar parseInt
var edadConvertidoNumero = parseInt(edad);
console.log(typeof edadConvertidoNumero);
console.log(edadConvertidoNumero);

var edadConvertidoNumero = edadConvertidoNumero+1;
console.log(edadConvertidoNumero);

// puedo convertir a numero añadiendo un +nombrevariable
var edadNumero = +edad;
console.log(edadNumero + 1);