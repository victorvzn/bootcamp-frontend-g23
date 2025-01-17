// console.log('Hola JS')

// TIPOS DE DATOS NO PRIMITIVOS

// ARRAYS

// Un arreglo tiene elementos de cualquier de tipo de dato:
// cadena, números, boolean, null, arrays, objetos, etc.

// DECLARACIÓN DE UN ARRAY

const arregloVacio = []
let listaDeNumeros = [25, 36, 89, 1560]
const listaDeNombres = ['Victor', 'Alexander', 'Cesar', 'Diego', 'Fernando']
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [9, 8]]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeNombres)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // ?? -> Villazón
console.log(listaDeValores[5]) // ?? -> true
console.log(listaDeValores[99]) // ?? -> undefined

// Escritura en un arreglo

console.log(listaDeValores) // Antes

listaDeValores[0] = 'Diego'
listaDeValores[3] = 9999

console.log(listaDeValores) // Después

listaDeValores[0] = 'Hola'

console.log(listaDeValores) // Después

// Inserta nuevos elementos en arreglo al final

const listaDeNombres2 = ['Victor', 'Alexander', 'Cesar', 'Diego', 'Fernando']

console.log(listaDeNombres2) // Antes

listaDeNombres2.push('Javascript')
listaDeNombres2.push('CSS')

console.log(listaDeNombres2) // Después

// Remover elementos del final del arreglo

listaDeNombres2.pop()
listaDeNombres2.pop()

console.log(listaDeNombres2) // Después

