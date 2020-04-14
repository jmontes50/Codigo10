let notas = [["Juan",15],["Oscar",16],["Ciro",9],["Judyth",18],["Juan",12]];

let aprobados = notas.filter((alumno,indice,arr)=>{
    // console.log(indice);
    // console.log(arr)
    if(alumno[1] > 10 && alumno[0] == "Juan"){
        return alumno;
    }
    /** switch(algo){
     * case condicion1
     * return algo
     * case condicion2
     * return algo
     * }
     * */ 
})

console.log("filter de aprobados",aprobados);