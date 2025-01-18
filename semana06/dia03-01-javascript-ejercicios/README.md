# Javascript Ejercicios

**https://playcode.io/new**

### [Reto01 - Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)

```js
/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(function(oveja) {
    const nombreEnMinusculas = oveja.name.toLowerCase()
    
    const esColorRojo = oveja.color === 'rojo'
    const tieneLaLetraN = nombreEnMinusculas.includes('n')
    const tieneLaLetraA = nombreEnMinusculas.includes('a')
    
    return esColorRojo && tieneLaLetraN && tieneLaLetraA
  })
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

### [Reto 10 - La máquina de cambio](https://2021.adventjs.dev/challenges/10)

```js
/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que "calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra" en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]

  let acumulador = change // 51

  return coins
    .reverse() // [50, 20, 10, 5, 2, 1]
    .map(function (coin) {
      let quotient = Math.floor(acumulador / coin) // 51 / 50 = 1.02

      if(quotient > 0) {
        acumulador = acumulador % coin // aquí solo acumulamos el rediduo
      }

      return quotient
    })
    .reverse()
}

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

### [Reto2 (2023) - Ponemos en marcha la fábrica](https://2023.adventjs.dev/es/challenges/2023/2)

```js
/*
En el taller de Papá Noel, los elfos tienen una lista de regalos que desean hacer y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres . Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden hacer .
*/

// Método EVERY, devuelve un boolean si todos los elementos del array cumple una condición.

console.log([1, 2, 3, 4, 5].every(function (numero) {
  return numero > 3
}))

console.log([1, 2, 3, 4, 5].some(function (numero) {
  return numero % 2 === 0
}))

function manufacture(gifts, materials) {
  return gifts.filter(function(gift) {
    const copyGift = [...gift]

    return copyGift.every(function(giftLetter) {
      return materials.includes(giftLetter)
    })
  })
}

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

manufacture(gifts1, materials1) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []
```

### [Reto 01 (2024) Primer regalo repetido](https://adventjs.dev/es/challenges/2024/1)

```js
/*
  Tenemos una lista de número mágicos que representan regalos, y algunos estan repetido. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos.

  Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

function prepareGifts(gifts) {
  const uniqueGifts = new Set(gifts)

  // const uniqueGiftsToArray = [...uniqueGifts]
  const uniqueGiftsToArray = Array.from(uniqueGifts)

  return uniqueGiftsToArray.sort(function(a, b) {
    return a - b
  })
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5, 660, 101]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5, 101, 660]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía
```

### [Reto 02 (2024) - Enmarcando nombres](https://adventjs.dev/es/challenges/2024/2)

```js
/*
  Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

  Reglas:

  Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
  Cada nombre debe estar en una línea, alineado a la izquierda.
  El marco está construido con * y tiene un borde de una línea de ancho.
  La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

function createFrame(names) {
  // Code here
  return '*'
}

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']))

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']))

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))
```