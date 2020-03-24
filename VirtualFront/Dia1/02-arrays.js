var alumnos = ["Alejandro", "Maritza", "Jane", "Albert", "Deybit", "Jhonael", "Julissa", "Ronaldo","Daniel"];

console.log(alumnos[6]);

console.log(alumnos.length);
console.log(typeof alumnos.length);

//for(desde donde va iniciar; donde va a terminar; como va a crecer esta condicional)
for(let index = alumnos.length-1; index>=0; index--){
    
    console.log(alumnos[index]);
}

var estado = true;

if(estado == true){
    //diferencia entre var y let
    var mensaje = "Hola chicos es un gusto tenerlos aquí!";
    // let mensaje = "Hola chicos es un gusto tenerlos aquí!";
    // console.log(mensaje);
}

console.log(mensaje);

//incremento
//x = x + 1      ....   x++;
//x = x - 1      ....   x--;

//var tiene un ámbito global y puedo acceder a el desde cualquier parte del documento

//let si esta dentro de un for o un if (o alguna estructura condicional, solamente sera accesible desde ese bloque de código)

//para verificar si puedo acceder a la variable 
console.log(index);