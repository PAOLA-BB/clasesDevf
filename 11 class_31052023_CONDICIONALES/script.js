// CONDICIONAL MIENTRAS / WHILE

//El while se repite miles de veces "ciclos" a diferencia de un if que solo se repite una vez

let index = 0;
while (index < 11) {
   console.log(`te toque la puerta ${index} vences`);
    index++; //index = index + 1;
}


const arreglo = [];
let userInput; //undefined
while (!(userInput == "")) {
    userInput = prompt("ingresa cualquier caracter");
    arreglo.push(userInput);
}
console.log("introdusiste estos valores: " + arreglo);
console.log(arreglo);


// Ejemplo #2
// Guarda un arreglo de valores introducidos
// Si el usuario no introduce un valor, termina el ciclo.
const arreglo = [];

let userInput; // undefined
while (!(userInput=="")) {
  userInput = prompt("Ingresa cualquier carácter"); // ""
  if (userInput !== "") arreglo.push(userInput);
  console.log(typeof userInput);
}
console.log("Introduciste estos valores: " + arreglo);
console.log(arreglo);

//do while es similar al while, la diferencia es que el do while despues de ejecutar el primer ciclo, pregunta si continua con el segundo ciclo

do{
    let userInputDo = userInputDo = prompt("ingresa cualquier caracter");
    if (userInputDo !== "") arreglo.push(userInputDo);
    console.log(typeof userInputDo);
} while (!(userInputDo == ""));

console.log("Introduciste estos valores: " + arregloDo);
console.log(arregloDo);


// CONDICIONAL PARA / FOR

for (let index = 0; index <= 10; index++){
    console.log(index);
}


// el for sirve para dar seguimientos a listas o arreglos
const alumnosMali = ['Anderson', 'Jeffry', 'Andres', 'Steven', 'William', 'Jose Fernando'];
for (let index = 0; index < alumnosMali.length; index++){
    console.log(index, alumnosMali[index]);
}