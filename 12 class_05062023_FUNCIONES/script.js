/*

const alumnosMali = ['anderson', 'jefry', 'andres', 'steven'];

for(let index = 0; index < alumnosMali.length; index++) {
    console.log(index, alumnosMali[index]);
    console.log(`enviando correo a ${alumnosMali[index]}`);
    console.log(`mensaje enviado: hola ${alumnosMali[index]}, espero que todo vaya bien`);
}

const senseiDevf = ['seb', 'joel', 'francisco', 'alfredo'];
for(let index = 0; index < alumnosMali.length; index++) {
    console.log(index, senseiDevf[index]);
    console.log(`enviando correo a ${senseiDevf[index]}`);
    console.log(`mensaje enviado: hola ${senseiDevf[index]}, espero que todo vaya bien`);
}
*/

function enviarcorreos(destinatarios, mensaje) { // la fuincion trabaja es por la posicion de los ojetos
    for(let index = 0; index < destinatarios.length; index++) {
        console.log(index, senseiDevf[index]);
        console.log(`enviando correo a ${destinatarios[index]}`);
        if (mensaje) {
            console.log("mensaje que queremos);
        } else {
            console.log("mensaj que deseamos");
        }
        console.log(`mensaje enviado: hola ${destinatarios[index]}, espero que todo vaya bien`);
}

function transformarArreglo(arreglo){
    return[1.2.3].concat(arreglo);
}


function prenderLuz(hora, horaActual){
    //conectarme ala lampara
    if(hora === horaActual){
        //mandar senal 
        alert("prendimos lámpara");
        return true;
    }
    return false;
}
// lasfuncines no buscan hacerlo todo, si no ser específicas

function tiempo() {
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const tiempoEncendidoLa = 6;
    if(prenderLuz(tiempoEncendidoLa, horaActual)) {
        document.write();
        return false
    } else {
        document.write();
        return true;
    }
}

let revisar = true;
while(revisar){

    tiempo();
}

//ejercicio para encender la lámpara
function prenderLuz(horaEncedido, horaActual){
    // conectarme a la lampara (IOT)
    if(horaEncedido === horaActual) {
        // mandar señal al dispositivo para prenderlo
        document.write(`<img src="encendido.PNG" alt="Encendido">`);
        alert("Prendimos lámpara.");

        return true;
    }
    return false;
}
function mandarTiempos() {
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    console.log(horaActual);
    const tiempoDeEncendidoLampara = 6;
    prenderLuz(tiempoDeEncendidoLampara, horaActual);
}
setInterval(() => {
    mandarTiempos();
}, 1000 * 60 * 60);




//la funcion prompt ya existe por eso nombraremos esta prompt1
function prompt1(message, _default){ // las funciones se escriben con minuscula
    const mensajeCompleto = `el mensaje del prompt1 es ${message}`;
    console.log(mensajeCompleto);
    return message + message;
    //lineas de código
    //return palabra o null

    console.log(prompt1); // esto es para imprimir la funcion
    console.log (prompt1("hola ingrese número"));

    const miResultado = prompt1("hey");
    console.log(miResultado);

    const miResultado1 = prompt1("hi");

}
