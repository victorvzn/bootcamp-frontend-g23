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

// Insertar un elemento en una posición determinada

listaDeNombres2.splice(0, 0, 'Código')
listaDeNombres2.splice(3, 0, 'Tecsup')

console.log(listaDeNombres2) // Después

// Eliminar un elemento en una posición determinada

listaDeNombres2.splice(3, 1)

console.log(listaDeNombres2) // Después

// Eliminar e insertar un elemneto en una posición determinada

listaDeNombres2.splice(5, 1, 'HOLA')

console.log(listaDeNombres2) // Después

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres2.length) // 6
console.log('bienvenido'.length) // 10

// Obtener el último elemento de un arreglo

console.log(listaDeNombres2[5])
console.log(listaDeNombres2[listaDeNombres2.length - 1])
console.log(listaDeNombres2.at(0))
console.log(listaDeNombres2.at(-1)) // Devuelve el último elemento del arreglo más fácilemente
console.log(listaDeNombres2.at(-2))

// DOC: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// TODO: Investigar otras funciones de arrays como slice


// MÉTODOS DE ARREGLOS

// ESENCIALES: INCLUDES, FILTER, MAP, SORT, FOREACH, REDUCE

// MÉTODO INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java'))  // true
console.log(languages.includes('cobol')) // false

// MÉTODO FILTER, nos ayudar a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo nuevo con los elementos que cumplieron la condición.

console.log(languages)

const resultado = languages.filter(function (item) {
  // return item === 'java'
  // return item === 'python'
  return item.toLowerCase().includes('c')
})

console.log(resultado)

// MÉTODO MAP, evalua un arreglo, lo modifica. Hay que pasarle una función.

const nombresConTitulo = languages.map(function (language) {
  // return 'hola'
  // return language
  return '*' + language + '*'
})

console.log(nombresConTitulo)

