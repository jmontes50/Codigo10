//Creando un nuevo objeto date
let hoy = new Date();
console.log(hoy);

//año, mes, dias, horas, minutos y segundos
//en el caso de los meses se cuentan a partir de 0
//0 es enero
let findeanio = new Date(2020, 11, 31, 23, 59, 59);
console.log(findeanio);

//Mes dia y año
let arequipaaniversario = new Date("August 15 2020");
console.log(arequipaaniversario);

console.log("Año", findeanio.getFullYear());
console.log("Dia", findeanio.getDate());
console.log("Mes", findeanio.getMonth());
console.log("Horas", findeanio.getHours());

//restamos 2 fechas
let rpta = findeanio - arequipaaniversario; //obtenemos la dif. en milisegundos
console.log("rpta", rpta);
//1 segundo va a tener 1000 milisegundos
let segundos = rpta / 1000;
let minutos = segundos / 60;
let horas = minutos / 60;
let dias = horas / 24;
let semanas = dias / 7;

console.log(`Desde el ${arequipaaniversario} hasta ${findeanio} hay ${semanas} semanas`);

let descubrimientoDeAmerica = new Date(1492,9,12);
console.log(descubrimientoDeAmerica);

 descubrimientoDeAmerica.setFullYear(1950);
 console.log(descubrimientoDeAmerica);
 descubrimientoDeAmerica.setDate(descubrimientoDeAmerica.getDate()+5);
 console.log(descubrimientoDeAmerica);

 