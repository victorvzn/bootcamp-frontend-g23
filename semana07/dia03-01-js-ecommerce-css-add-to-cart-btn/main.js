// const btnMenos = document.getElementById('btnMenos')
const btnMenos = document.querySelector('#btnMenos')
const btnMas = document.querySelector('#btnMas')
const cantidad = document.querySelector('#cantidad')

let contador = 0

btnMas.addEventListener('click', function(event) {
  contador = contador + 1

  console.log(contador)

  // DONE: Validar que el número sea como máximo 10

  if(contador > 10) {
    contador = 10
    return
  }

  cantidad.value = contador
})

// TODO: Añadir el evento click al botón btnMenos y validar que no se ingresen números menores a 1