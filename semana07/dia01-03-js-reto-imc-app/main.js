// const buttonCalcular = document.querySelector('#calcular')
// console.log({buttonCalcular})

const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const buttonCalcular = document.getElementById('calcular')
const sectionResultado = document.getElementById('resultado')

buttonCalcular.addEventListener('click', function(event) {
  // console.log('click...')

  const peso = Number(inputPeso.value) // parseFloat
  const altura = Number(inputAltura.value) // parseFloat

  console.log(typeof peso)

  if (peso === 0 || altura === 0) {
    sectionResultado.textContent = 'Datos incorrectos, vuelva a ingresarlos.'

    return
  }

  // console.log(peso, altura)

  // IMC = peso / altura * altura
  const indiceMasaCorporal = peso / ((altura / 100) ** 2)

  console.log(indiceMasaCorporal)

  let resultado = ''

  // TODO: Mostrar el resultado según el IMC

  if (indiceMasaCorporal < 18.5) {
    resultado = 'Baja'
  } else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9) {
    resultado = 'Normal'
  } else if (indiceMasaCorporal >= 25 && indiceMasaCorporal <= 29.9) {
    resultado = 'Sobrepeso'
  } else if (indiceMasaCorporal > 30) {
    resultado = 'Obeso'
  } else {
    resultado = 'Datos incorrectos'
  }

  console.log(resultado)

  // sectionResultado.textContent = 'Tu indice de Masa Corporal es ' + resultado + ' con ' + indiceMasaCorporal.toFixed(2)
  sectionResultado.textContent = `Tu indice de Masa Corporal es ${resultado} con ${indiceMasaCorporal.toFixed(2)}`

  inputPeso.value = ''
  inputAltura.value = ''
})


// * Baja: < 18.5
// * Normal: < 18.5 - 24.9
// * Sobrepeso: < 25 - 29.9 
// * Obeso: > 30