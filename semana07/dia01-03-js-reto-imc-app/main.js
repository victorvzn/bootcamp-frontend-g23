// const buttonCalcular = document.querySelector('#calcular')
// console.log({buttonCalcular})

const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const buttonCalcular = document.getElementById('calcular')
const sectionResultado = document.getElementById('resultado')

buttonCalcular.addEventListener('click', function(event) {
  // console.log('click...')

  const peso = inputPeso.value
  const altura = inputAltura.value

  // console.log(peso, altura)

  // IMC = peso / altura * altura
  const indiceMasaCorporal = peso / ((altura / 100) ** 2)

  console.log(indiceMasaCorporal)

  let resultado = ''

  // TODO: Mostrar el resultado según el IMC

  console.log(resultado)
})


// * Baja: < 18.5
// * Normal: < 18.5 - 24.9
// * Sobrepeso: < 25 - 29.9 
// * Obeso: > 30