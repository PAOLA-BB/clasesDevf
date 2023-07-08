 /*
 //Las clases son plantillas para objetos
 class Persona{constructor(nombre) {
    this.nombre = nombre
 }

 saludar(){
    console.log('Hola, soy '+this.nombre)
}
}
// Aquí crear objetos, una instancia de la clase 
const persona2 = new Persona('Sandra')
const persona3 = new Persona('Jefry')
persona2.saludar()
persona3.saludar()
*/

// Las clases son plantillas para objetos
class Persona{
  constructor(nombre, cedula) {
    this.nombre = nombre
    this.cedula = cedula
  }

  saludar(){
    console.log('Hola, soy '+this.nombre)
  }

  despedirse() {
    console.log('Adios '+this.nombre)
  }
}

// Aquí crear objetos, una instancia de la clase
const persona2 = new Persona('Sandra',123)
const persona3 = new Persona('Jefry',123)

persona2.saludar()
persona3.saludar()

persona2.despedirse()

const identificador = Symbol('devf')

const perro = {
    [identificador]: 'firulais'

}
console.log(perro.nombre)
//console.log(perro[Symbol.keyFor('devf')])
console.log(perro[identificador])
console.log(identificador)
console.log(Symbol('devf') === identificador)


// map y set

const mapa1 = new Map()

mapa1.set('cedula', 1235673432)

mapa1.set('nombre', 'Sebas')
console.log(mapa1.get('nombre'))

mapa1.set('nombre', 'Pablo')
console.log(mapa1.get('nombre'))

const cedulas = new Set()

cedulas.add(12345)
console.log(cedulas)
cedulas.add(98764)
console.log(cedulas)
cedulas.add(12345)
console.log(cedulas)