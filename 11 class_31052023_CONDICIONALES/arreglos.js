//ARREGLOS O ARRAYS

let clima = prompt(`esta lloviendo`);
clima = clima.toLowerCase();

if(clima == `si`){
    console.log(`llevar paraguas`)
} else {
    console.log(`no llevar paraguas`);
}

//arreglos de este modo son poco productivos y ocupan mucho espacio
let nombre1 = "Andres";
let nombre2 = "Andrea";
let nombre3 = "Adriana";

//[] se usan para arreglos arrays que es como una caja
const alumnosMaliVacio = []; //crear un arreglo vacio

const alumnosMali = ['Andres', 'Andrea', 'Adriana'];
// index o indice       0         1         2  
//posicion              1          2        3 
console.log("ALumnos de mali");

alumnosMali.push('stiven'); // adiciona u elemento a nuestro arreglo
alumnosMali.pop(); // quitas el último elemento del arreglo

//modificar arreglos
alumnosMali[1] = "Jeffry"; // cambia el elemento de posicion 1 por Jeffry

alumnosMali.length // el metodo es una acción que se va a ejecutar .algo
//.length nos muestr la longitud de un arreglo

const alumnosSeb = alumnosMali.slice(0,4); //el método .slice copia una parte de la cadena

const alumnosSeb = alumnosMali.splice(2,3,"william");//el metodo .splice borra elementos de una lista o adiciona con ""
//el 2 es el indix del elemento y el 3 la cantidad de elementos a borrar, agrega "william" al arreglo

//el arreglo va a ser una estructura que permite trabajar con ella por medio de acciones ya prehechas para poder cambiarlo
//a estas acciones pertenecientes al arreglo les llamaremos métodos.

//estructura de control
console.log("conectando el mensaje con el nombre");
console.log("hecer el corrreo");
console.log("enviar el correo");