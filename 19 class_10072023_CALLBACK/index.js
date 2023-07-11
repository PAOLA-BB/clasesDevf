const saludar = nombre => {
    console.log("Hola "+ nombre);
};
const despedirse = nombre => {
    console.log("Adiós "+ nombre);
};
function nombreFunction(){
    console.log("Soy una función");
}

const elAdministrador =  (callback, numero, nombre) => {
    console.log(callback, numero);
    callback(`${nombre} - ${numero}`);
};

elAdministrador(despedirse, 5, "Helado");

saludar("mali");