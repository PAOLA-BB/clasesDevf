const axios = require('axios'); // importa la biblioteca Axios a mi archivo JS

//Definir la función
// async se utiliza para declarar una función asincrónica, una función que realiza operaciones asíncronas y devuelve una promesa
async function peticionAutor(idAutor) {
    {
        try {
          const response = await axios.get(`('http://openlibrary.org/search.json?author=asimov`);
          return response.data;
        } catch (error) {
          console.error('Error al obtener la lista de libros:', error);
        }
      }
}

const idAutor = "Isaac Asimov"; 

peticionAutor(idAutor)
  .then((libros) => {
    console.log('Lista de libros del autor:', libros);
    // Aquí puedes realizar cualquier operación con la lista de libros
  })
  .catch((error) => {
    console.error('Error al obtener la lista de libros:', error);
  });

