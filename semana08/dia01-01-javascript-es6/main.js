// console.log('Hola JS')

// FUNCIONES

// Funciones sin parámetros

function nombeDeMiFuncion() { // Estamos declarando un función
  console.log('Hola a todos')
}

nombeDeMiFuncion() // Estamos ejecutando la función

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSiEsMayorDe18(edad = 1) {
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calcularSiEsMayorDe18())
console.log(calcularSiEsMayorDe18(28))

// ARROW FUNCTIONS (Funciones flecha) =>

// Funciones sin parámetros en una línea

// function suma(numero1, numero2) {
//   return numero1 + numero2
// }

// console.log(suma(4, 9))

const impriendoSaludo = () => console.log('Hola a todos nuevamente!')

impriendoSaludo()

// Funciones con parámetros en una línea

const suma = (numero1, numero2) => numero1 + numero2 // Está retornando la suma de los números

console.log(suma(4, 9))

// Funciones con parámetros y retorno en múltiples líneas

const saludoEnMayusculas = (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return '¡Hola, ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas('Carlos'))

// Funciones con parámetros por defecto y retorno en múltiples líneas

const otroSaludoEnMayusculas = (nombre = 'Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return '¡Hola, ' + nombreEnMayusculas + '!'
}

console.log(otroSaludoEnMayusculas())
console.log(otroSaludoEnMayusculas('Carlos'))

// SPREAD OPERATOR (...)
// Sirve para expandir un arreglo, llamar a funciones, incluso objetos

const frutas = ['Manzanas', 'Naranjas', 'Plátanos', 'Sandías', 'Duraznos']

const verduras = ['Papas', 'Cebollas']

// const frutasYVerduras = frutas.concat(verduras) // Manera con concat
const frutasYVerduras = [...verduras, ...frutas] // Manera con spread operator

console.log(frutasYVerduras)

const persona = {
  nombre: 'Victor',
  apellido: 'Villazón',
  edad: 38,
  color: 'Azúl'
}

const stack = {
  javascript: 'React.js',
  python: 'Django',
  nodejs: 'Express.js',
  color: 'Rosado'
}

const personaYSuStack = {
  ...persona,
  ...stack
}

console.log(personaYSuStack)

const personaYSuStack2 = {
  persona: persona,
  stack: stack
}

console.log(personaYSuStack2)

const personaYSuStack3 = {
  persona,
  stack
}

console.log(personaYSuStack3)

// Template strings

const nombre = 'Victor'
const edad = 38

console.log(`
  Soy ${nombre}
  y tengo ${edad} años
`)

// PARÁMETROS REST (operador rest -> ...)

const numeros = [4, 6]

function miSuma(numero1, numero2) {
  return numero1 + numero2
}

console.log(miSuma(6, 9))
console.log(miSuma(...numeros))

const listaDeNumeros = [6, 33, 998, -66, 1, 453]

console.log(
  Math.max(25, 8, 65, 120),
  Math.max(...listaDeNumeros)
)

console.log(
  Math.min(25, 8, 65, 120),
  Math.min(...listaDeNumeros)
)