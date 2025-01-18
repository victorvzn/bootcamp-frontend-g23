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
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que 
"calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra"
en metálico.

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
  // ¡No olvides compartir tu solución en redes!
  return {}
}

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```