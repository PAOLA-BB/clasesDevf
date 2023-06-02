//alert("conectado");      //sirve para ver si esta conectado mi archivo//

//let nombre;    undefined un valor no ocntraldo que no existe
//let nombre = null; //mala practica porque estoy dejando sin saber de que tipo es la variable
let nombre = ""; // se establece como tipo string
console.log(`El valor de nombre antes del prompt: ${nombre}.`);
nombre = prompt("Ingresa tu nombre");
console.log(`El nombre ingresado es: ${nombre}.`);
 // para sacar las comillas bagtips hacer: alt + 96 => ` `//
prompt("ingresa tu nombre");


let contraseniangresada = prompt('pon tu contraseña');
if ("123455" === contraseniaIngresada) {
    alert("Bienvenida Paola".);
} else if("asdfg" === contraseniaIngresada) {
    alert("Bienvenido");
} else {
    console.error("Alarma: quiere robar mi cuenta");
}

if("123455" === prompt('ingresa tu nombre') && "18" === prompt("dame tu edad")) {
        alert("Bienvenido");
} 
else if("asdfg"=== prompt('ingresa tu nombre')){
    console.error("Alarma: ingreso no permitido");
}

if(500 <= prompt('cuanto traes') || 18 <= parseInt(prompt("dame tu edad"))) { //para sacar signo or utiliza alt+124 || //
    alert("Bienvenido");
} 
else{
    document.write("ingrese edad");
    console.error("Alarma: menor de edad quiere colarse");
}

let respuestaEjercicio1 = prompt=("Eres bellisomo");

if(respuestaEjercicio1 === "si") {
    console.log("ciertamente.");
} else if(respuestaEjercicio1 === "no"){
    console.log("no te creo");
} else(respuestaEjercicio1 === "no"){
    console.log("no te entiendo");
}

let variableText = prompt("pregunta");
let variableNumero