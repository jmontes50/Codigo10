/**
 * break; me interrumpe por completo un ciclo de una estructura repetititva.
 * 
 * continue; va interrumpir solamente una iteración de mi código
 */
// for(let i = 0; i < 10; i++){
    
//     if(i == 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }


let contador = 0;
let llamar = 0;
do{
    //Math.random() devuelve un num aleatorio entre 0 a 1
    llamar = Math.random();
    contador++;
    if(contador == 3){
        console.log("wey ya no llames");
        break;
    }
}while(llamar > 0.5);

console.log(`Has llamado ${contador} veces`);