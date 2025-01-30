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