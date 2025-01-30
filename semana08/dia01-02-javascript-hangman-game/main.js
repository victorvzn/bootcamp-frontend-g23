const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__results')

const ANSWER_WORD = 'Javascript'

const word = ANSWER_WORD.toUpperCase()

const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

let correctGuess = ''
let tries = 0

// DONE: Implementar una funcion para renderizar los botones con cada letra del alfabeto de la A a la Z.

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach(letter => {
    list += `<button class="p-2 bg-blue-500 text-white font-bold text-xl cursor-pointer hover:bg-blue-400 duration-300" onclick="selectLetter('${letter}')">${letter}</button>`
  })

  elButtons.innerHTML = list
}

const selectLetter = (letter) => {
  tries++

  console.log(tries)

  console.log('seleccionando la letra', letter)

  correctGuess = correctGuess + letter

  console.log('intentos', correctGuess)

  renderMaskedWord()
}

const renderMaskedWord = () => {
  // console.log('rendering masked word')

  elMaskedWord.textContent = word
    .split('')
    .map(
      letter => correctGuess.includes(letter) ? letter : '_'
    )
    .join('')

  // TODO: Si gana el juego hay que agregar la lógica respectiva
}

renderAlphabet()