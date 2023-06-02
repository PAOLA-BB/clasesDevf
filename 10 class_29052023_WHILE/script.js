//ejemplo de objetos
const casa = {
    puertas: 5,
    habitaciones: 4,
    apagadores: 16,
    infocasa: function(color){
        console.log("la casa tiene: " + this.puertas + "puertas" + "de color: " + color) // this palabra reservada, toma el valor del que habla el objeto
    }
}

console.log(casa.infocasa("verde"))
console.log(`la casa tiene ${this.puertas} de color ${color}`)



//ejercicio de arreglos - arrives
//los arreglosnos dirven para guardar cosas, es como una caja
// con el metodo length nos muestra cuantos elementos tiene el arreglo


const casa0 = {
    puertas: 5,
    habitaciones: 4,
    apagadores: 16,
    propietario: "carlos",
}

const casa1 = {
    puertas: 5,
    habitaciones: 4,
    apagadores: 16,
    propietario: "sara",
}

const casa2 = {
    puertas: 5,
    habitaciones: 4,
    apagadores: 16,
    propietario: "liliana",
}
const colonia = [casa0, casa1, casa2]

for (let i = 0; i <= 2; i++){ 

    if (i === undefined){
        break
    }
    console.log("tienes que comprar " + colonia[i])
    
}
console.log(colonia[1].propietario)





//ejemplo de while
let condicion = 0;

while (contador <= 5){
  console.log("el contador es: " + contador)
  //contador = contador + 1; // esto es igual que el contador++
  contador++ //al poner el ++ hace incremento en uno y va sumando
}


let contador = false
while (contador) {
  console.log("hola son un while")
}

do {
  console.log("hola soy un do while")
}while(contador)

console.log("fin del bucle")


//ejemplo de for
for (let contador = 0; contador <= 5; contador ++){
    //codigo a ejecutar en cada iteración
    console.log("el contador es : " + contador)
  }
  console.log("fin del bucle")
  