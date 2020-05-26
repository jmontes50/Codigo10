let arrNum = [20,15,13,11];

// let arrNum2 = arrNum;
// arrNum2.push(50);

let arrNum2 = [...arrNum, 50];
console.log(`arr2: ${arrNum2}`);

let objPerrete = {
    raza:"Siberiano",
    edad:"4",
    color:"gris"
}

let objPerro = {
    ...objPerrete,
    personalidad:"Dramático"
}

console.log("Perro: ",objPerro)