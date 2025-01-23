let numeroActual = '0'
let operador = '' // + * -
let operado = '' // Cualquier número. Ejemplo: 9,

const inputDisplay = document.querySelector('.inputDisplay')
const buttons = document.querySelectorAll('button')

// console.log({ inputDisplay, buttons })

buttons.forEach(function(button) {
  // console.log({button})

  button.addEventListener('click', function(event) {
    // console.log({event: event.target})
    const buttonText = event.target.textContent

    console.log(buttonText)

    // TODO: Añadimos la lógica de la calculadora

    
  })
})