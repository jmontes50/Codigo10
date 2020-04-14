let autos = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  }
];

//1. imprimir la marca, modelo y año de cada auto

autos.forEach((auto)=>{
    console.log(`El ${auto.marca} ${auto.modelo} es del año ${auto.year} con un costo de ${auto.precio} USD`);
});

//2. en un arreglo solamente obtener las marcas de los autos

let marcas = autos.map((auto)=>{
    return auto.marca;
});

console.log("marcas map",marcas);

//3. obtener un arreglo de Autos de solamente color Rojo

let autosRojos = autos.filter((auto)=>{
    return auto.color == "Rojo";
});

console.table("AUTOS ROJOS", autosRojos);

//4. a partir de las mi arreglo donde tengo las marcas de mios autos voy a filtrarlo de tal manera que
//ninguna marca se repita

// console.log("indexOf ford",marcas.indexOf("Ford"));

let marcaUnica = marcas.filter((marca,indice)=>{
    console.log("marca",marca);
    console.log("indice",indice);
    console.log("indexOf(marca)",marcas.indexOf(marca));

    return marcas.indexOf(marca) == indice
});

console.log("filter indexOf", marcaUnica);

//5. Saber cuanto me suman todos los autos, cuanto volor tienen todos juntos

let valorInventario = autos.reduce((total, auto) => {
    return total + auto.precio;
},0);

console.log("inventario reduce",valorInventario);

