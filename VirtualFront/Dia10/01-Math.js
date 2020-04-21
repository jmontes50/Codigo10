//Constante PI
let Pi = Math.PI;

console.log("Número Pi", Pi);

//Constante de Euler
let num_euler = Math.E;

console.log("Euler",num_euler);

//Redondea un número decimal hacia el piso
let decimal1 = Math.floor(10.45);

console.log("Floor",decimal1);

//Redondea un número decimal hacia su techo, su número entero superior más cercano
let decimal2 = Math.ceil(3.6);

console.log("Ceil", decimal2);

//redonde un número decimal pero hacia el entero más cercano
let redondeo = Math.round(3.3);

console.log("Redondeo", redondeo);

let num = 36;

console.log("Raíz",Math.sqrt(num));

//---------------------------------

console.log("random", Math.random());

let randomConParametros = (min, max) => {
    let resultado = Math.round(Math.random() * (max - min) + min);
    return resultado;
}

let num_aleatorio = randomConParametros(5, 20);
console.log("aleatorio",num_aleatorio);

//-----------------------------------

let generarColor = () => {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    let color = `rgb(${num1},${num2},${num3})`;
    return color;
}

console.log("color aleatorio", generarColor());