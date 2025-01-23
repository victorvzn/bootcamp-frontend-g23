let numeroActual = '0'
let operador = '' // + * -
let operando = '' // Cualquier número. Ejemplo: 9,

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

    if ('+-*'.includes(buttonText)) {
      // Asignamos el operador actual
      console.log('presionaste el operador', buttonText)
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      // Aquí realizo las operaciones matemáticas en base al número actual y al operando
      // console.log('presionaste el signo', buttonText)
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'CE') {
      console.log('presionaste el botón', buttonText)
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // 01- Cuando hemos presionado solo los números
      console.log('presionaste el número', buttonText)
      numeroActual = numeroActual + buttonText
    }

    inputDisplay.value = Number(numeroActual)
  })
})