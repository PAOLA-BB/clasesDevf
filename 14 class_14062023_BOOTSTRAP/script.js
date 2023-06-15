console.log(document); //hace referencia al DOM
//DOM: Document Objec Model - Modelo de Objeto de Documento
//Modelo -> Contener toda la estructura estándar de nuestro documentos.
//Objeto -> Elemento de JS al cual podemos modificar e interar por  propiedades y métodos (funciones que pertenecen a alguna entidad) del objeto.
//Document -> Documento de HTML.

//DOM es una entidad que nos permite organizar en forma de Js el documento de HTML

//crear
//leer
//actualizar
//borrar
document.getElementById("header"); // esto esta leyendo, porque nos estra trayendo un elemento

const parrafo = document.createElement("p");
parrafo.innerText = "esto es un párrafo";
console.log(parrafo);
//innerHTML hace referencia al HTML en el elemento (etiqueta)

//actualizar  lo que hay en body agregando un  nuevo elemento
document.body.appendChild(parrafo);
header.appendChild(parrafo);


//ejemplo
for(let index = 0; index < 2; index++){
    const parrafoDelFor = document.createElement("p");
    parrafoDelFor.innerText = "esto es un párrafo" + index;
    console.log(parrafo);
    if(index===0){
        header.appendChild(parrafo);
    }else{
        document.body.appendChild(parrafo);
    }
}