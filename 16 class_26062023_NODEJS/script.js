/*
// canal de entrada de datos abiertos
console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    //process.exit();
})


let acumulador = 0;
const calificaciones = []
let totalCalificaciones = 0;

console.log("ingrese calificaciones totales: "):
stdin.addListener("data", (data) => {
    totalCalificaciones = parseInt(data.toString())
})

//los arreglos empiezan de 0, por eso se acostumbra a empezar de cero, pero podramos empezar de 1 sino es un arreglo
for(let contador = 0; contador <= totalCalificaciones; contador++){
    let calificacion 
    stdin.addListener("data", (data) => {
    calificacion = parseInt(data.toString())
})
    //acumulador = acumulador + calificacion
    calificaciones.push(calificacion)
}

const promedio = acumulador / totalCalificaciones
console.log("tus calificacione son:" + calificaciones);
console.log("tu promedio total es: " + promedio);

    //process.exit();




    const prompt = require('prompt')
    let acumulador = 0
    const calificaciones = []

    prompt.start()
    prompt.get(['totalCalificaciones'], function(error, result){
        totalCalificaciones = result.totalCalificaciones
    });
    
    for(let contador = 0; contador <= totalCalificaciones; contador++){
        let calificacion 

        prompt.get(['cal'], function(error, result){
            totalCalificaciones = result.totalCalificaciones


        stdin.addListener("data", (data) => {
        calificacion = parseInt(data.toString())
    })
// para empezar un proyecto con NODE necesitamos:
//
*/

//ejercicio de como exportar un modulo
const modulo1 = require('./modulo1')
const modulo1 = require('./modulo2')

console.log(modulo1.miNombre)
console.log(modulo1.artistaFavorito)