/**
 * Una academia tiene sus alumnos evaluados y requiere
 * saber cual es el grado de sus alumnos según su promedio final
 * Los grados son los siguientes:
 *          PF < 60 - F
 *          PF <70 - D
 *          PF < 80 - C
 *          PF < 90 - B
 *          PF < 100 - A
 */

let alumnos = [
  ["Diego", 83],
  ["Sol", 82],
  ["Danny", 75],
  ["Paloma", 89],
  ["Jorge", 96]
];

for (let i = 0; i < alumnos.length; i++) {
  let promedio = alumnos[i][1];

  switch (true) {
    case promedio < 60:
      console.log(`El alumno ${alumnos[i][0]} tiene una F`);
      break;
    case promedio < 70:
      console.log(`El alumno ${alumnos[i][0]} tiene una D`);
      break;
    case promedio < 80:
      console.log(`El alumno ${alumnos[i][0]} tiene una C`);
      break;
    case promedio < 90:
      console.log(`El alumno ${alumnos[i][0]} tiene una B`);
      break;
    case promedio < 100:
      console.log(`El alumno ${alumnos[i][0]} tiene una A`);
      break;
    default:
      console.log("error");
      break;
  }
}
