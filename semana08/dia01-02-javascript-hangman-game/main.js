const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__results')

const ANSWER_WORD = 'Javascript'

const word = ANSWER_WORD.toUpperCase()

const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

let correctGuess = ''
let tries = 0

// const renderMaskedWord = () => {
//   elMaskedWord.textContent = 
// }

// DONE: Implementar una funcion para renderizar los botones con cada letra del alfabeto de la A a la Z.

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach(letter => {
    list += `<button class="p-2 bg-blue-500 text-white font-bold text-xl cursor-pointer hover:bg-blue-400 duration-300">${letter}</button>`
  })

  elButtons.innerHTML = list
}

renderAlphabet()