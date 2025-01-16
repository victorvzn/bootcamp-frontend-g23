// https://lenguajejs.com/javascript/

// COMENTARIOS

// console.log('Hola a todos!')

/*
  Esto
  es
  un
  comentario
  de
  múltiples
  líneas
*/

// TIPOS DE DATOS

// PRIMITIVOS: Number, String, Boolean(true, false), undefined, null, BigInt, Symbol

// NUMBER

console.log(20)
console.log(15.69)
console.log(0.999)
console.log(-36)
console.log(0b1010)

console.log(typeof 20) // number
console.log(typeof 15.69) // number
console.log(typeof 0.999) // number
console.log(typeof -36) // number
console.log(typeof 0b1010) // number

// STRING (Cadenas de texto)

console.log('Cesar')
console.log("Carlos")
console.log("2000")
console.log("🏀")

console.log(typeof 'Cesar') // string
console.log(typeof "Carlos") // string
console.log(typeof "2000") // string
console.log(typeof "🏀") // string

// BOOLEAN -> true or false

console.log(true)
console.log(false)

console.log(typeof true) // boolean
console.log(typeof false) // boolean

// UNDEFINED

let nombre // Declaración de una variable
console.log(nombre)
console.log(typeof nombre)

// NULL

let apellido = null
console.log(apellido) // null
console.log(typeof apellido) // object === null

// BigInt (Permite almacenar número muy grandes)
// Symbol (Ayudan a crear valores únicos e irrepetibles)


// VARIABLES Y CONSTANTES

// ES5 === ECMASCRIPT 5
// ES6 === ECMASCRIPT 6

// var -> ES5 (Formar de declarar una variable pero no es recomendado su uso, la declaración es a nivel de la función)

var minombre = 'victor'
// var minombre = 'xxxxx'

// CONST -> ES6 (El uso de const es lo recomendado) ✅

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijoMayor = 15
const PI = 3.1415
const empresa = 'JS Company'
const esMayorDeEdad = false
// const mi variable = 'xyz' // Uncaught SyntaxError ❌
// edad = 99 // Uncaught TypeError: Assignment to constant variable ❌

console.log(edad)
console.log(empresa)

// LET -> ES6 (El uso de let es lo recomendado) ✅

let edad2 = 38 // NO es necesario inicializarlo

edad2 = 39 // Estamos reasignando un valor númerico/string/boolean/etc

console.log(edad2)
console.log(typeof edad2) // number

edad2 = "Victor"

console.log(edad2)
console.log(typeof edad2) // string

edad2 = true

console.log(edad2)
console.log(typeof edad2) // boolean