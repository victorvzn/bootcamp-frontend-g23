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

// MÉTODO SORT, nos ayuda a ordenar un arreglo de elementos. MUTA el arreglo original.

console.log(languages)

// const ordernandoLanguages = languages.sort() // Mutando el arreglo original
const ordernandoLanguages = [...languages].sort() // No muta el arreglo original

console.log(ordernandoLanguages)
console.log(languages)

// Ordenar números tanto ascendentemente como descendentemente

const edades = [35, 99, 16, 5, 29, 66, 1]

console.log(edades)

console.log([...edades].sort())

console.log([...edades].sort(function(a, b) {
  return a - b // Ordenando asc
}))

console.log([...edades].sort(function(a, b) {
  return b - a // Ordenando desc
}))

// MÉTODO FOREACH, nos ayuda a recorrer un arreglo sin tener ningún retorno de datos.

const miArreglo = []

languages.forEach(function(language) {
  // console.log(language)
  miArreglo.push('El mejor: ' + language)
})

console.log(miArreglo)

// MÉTODO REDUCE, nos ayuda a acumular los valores de un arreglo.

const numbers = [3, 40, 100, 7, 50]

// Con un FOR

let sum = 0 // Acumulador

for(let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]
}

console.log(sum)

// Con Reduce

const sumatoria = numbers.reduce(function(acumulador, valorActual) {
  return acumulador + valorActual
}, 0)

console.log(sumatoria)


// OBJETOS

/*
  {
    KEY1: VALUE1,
    KEY2: VALUE2,
    KEY3: VALUE3,
    ...
  }

  VALUE: number, string, boolean, array, object, undefined, null, etc.
*/

const miObjetoVacio = {}

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 38,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  cursos: [
    {
      id: 1,
      nombre: 'Matemática',
      nota: 13
    },
    {
      id: 2,
      nombre: 'Algoritmos',
      nota: 20
    }
  ],
  devolverCursosAprobados: function() { // función anónima
    return this.cursos.filter(function(curso) {
      return curso.nota > 13
    })
  }
}

console.log(miObjetoVacio)
console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO (Notación de punto y de corchete)

console.log(miObjeto.nombre)   // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad)     // undefined

// console.log(miObjeto.mi edad) // BAD ❌ - Uncaught SyntaxError: missing ) after argument list
console.log(miObjeto['mi edad']) // OK ✅ - 38

console.log(miObjeto.coloresFavoritos)    // [...]
console.log(miObjeto.coloresFavoritos[1]) // rojo

console.log(miObjeto.cursos) // Array
console.log(miObjeto.cursos[1]) // {id: 2, nombre: 'Algoritmos', nota: 20}
console.log(miObjeto.cursos[1].nota) // 20
console.log(miObjeto.cursos[1]['nota']) // 20

console.log(miObjeto.devolverCursosAprobados) // ƒ()

const resultadoCursosAprobados = miObjeto.devolverCursosAprobados()
console.log(resultadoCursosAprobados) // [{id: 2, nombre: 'Algoritmos', nota: 20}]
console.log(resultadoCursosAprobados[0].nombre) // Algoritmos
console.log(resultadoCursosAprobados[0]['nombre']) // Algoritmos

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)

delete miObjeto['mi edad']
delete miObjeto.cursos

console.log(miObjeto)

// INSERTAR UNA NUEVA PROPIEDADES A UN OBJETO

miObjeto.platilloFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING DE ARREGLOS Y OBJETOS

// Una forma de extraer los elementos/propiedades de un objeto o un arreglo en nuevas variables/constantes.

// DESTRUCTURING EN OBJETOS

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const colorFavoritoValue = miObjeto.colorFavorito

console.log(nombreValue, apellidoValue, colorFavoritoValue)

const { nombre, apellido, colorFavorito } = miObjeto

console.log(nombre, apellido, colorFavorito)

const {
  nombre: nombreConAlias,
  apellido: apellidoConAlias,
  colorFavorito: colorFavoritoConAlias
} = miObjeto

console.log(nombreConAlias, apellidoConAlias, colorFavoritoConAlias)

// DESTRUCTURING EN ARRAYS

const amigos = ['leo', 'cesar', 'carlos', 'diego', 'victor']

const amigoLeo = amigos[0]
const amigoCesar = amigos[1]
const amigoVictor = amigos[4]

const [ amigo1, amigo2, amigo3, amigo4, amigo5 ] = amigos

console.log(amigo1, amigo2, amigo3, amigo4, amigo5)

const [a1, a2, ...mejoresAmigos] = amigos

console.log(a1, a2, mejoresAmigos)

// SPREAD OPERATOR (operator ...)

// Extraer las propiedeades de un objeto/arreglo para reutilizarlo en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 4800,
  categoria: 'tech'
}

const cliente = {
  nombre: 'Alessandro',
  isVip: true
}

console.log(producto + cliente) // ❌ [object Object][object Object]

const nuevoObjetoConColisiones = { ...producto, ...cliente } // ⛔ Cuidado con la extracción de propiedades

console.log(nuevoObjetoConColisiones)

// SPREAD OPERATOR, para evitar colisiones en las propiedades

const nuevoObjetoSinColisiones = {
  producto: { ...producto },
  cliente: { ...cliente }
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.producto.nombre) // Laptop
console.log(nuevoObjetoSinColisiones.cliente.nombre) // Alessandro

// OTROS MÉTODOS DE OBJETOS

// Obtenemos solo las claves (keys) del objeto dentro de un arreglo de cadenas
console.log(Object.keys(producto)) 
// Obtenemos solo los valores (values) del objeto dentro de un arreglo de cadenas
console.log(Object.values(producto))
// Convierte un objeto a un arreglo
console.log(Object.entries(producto))

// EJEMPLO FINAL CON OBJETOS

const hero = 'Victor'

if (hero === 'Batman') {
  console.log('Hola soy Bruce')
} else if (hero === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (hero === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe 😉')
}

const SUPER_HEROS = {
  'Batman': 'Hola soy Bruce',
  'Spiderman': 'Hola soy Peter',
  'Ironman': 'Hola soy Tony',
}

if (!SUPER_HEROS[hero]) {
  console.log('No soy un heroe 😉')
} else {
  console.log(SUPER_HEROS[hero])
}

console.log(SUPER_HEROS[hero] ?? 'No soy un heroe 😉')

// TODO: Resolver tres retos del siguiente link para mañana y comparten su solución en el chat
// https://adventjs.dev/es