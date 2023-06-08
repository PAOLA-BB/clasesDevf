const alunmosMali = ['camilo', 'sara', 'alison', 'julieta']
const alumnoSpan = document.querySelector('#alumno') //querySelectro devuelve el primer elemento de la consulta
let index = 0;

/* 1RA FORMA
setInterval(saludar, 1500) // setInterval es un ciclo infinito
function saludar(){
    alumnoSpan.innerHTML = alunmosMali[index % alunmosMali.length]
    index++
}
*/
//OTRA FORMA
setInterval(() => { //funcion de flecha, es anonima
    alumnoSpan.innerHTML = alunmosMali[index % alunmosMali.length]
    index++   
}, interval);


//2DA EJEMPLO
const alumnosMali = ['Yinedth', 'Steven', 'Sharon', 'Sebastián','David']
const alumnoSpan = document.querySelector('#alumno') // .getElementById('alumno')
let index = 0;

setInterval(() => {
    alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length]
    index++
},1500)

  const saludar = () => {
  alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length]
  index++
}

//setInterval(saludar,1500)

function saludar(){
  alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length]
  index++
}

//funcion para el botón
function saludar({
    alert()
})

//codigo para el parrafo que se agregó al html
const parrafo1 = document.getElementById('parrafo1')
const parrafo2 = document.getElementById('parrafo2')

console.log(parrafo1)
console.log(parrafo2) */

/* const parrafos = document.getElementsByTagName('p')
const code = document.getElementsByTagName('code')

console.log(code) */

const parrafoLargo = document.getElementsByClassName("long")
const parrafosCortos = document.getElementsByClassName("short")

console.log(parrafosCortos)


