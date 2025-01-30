const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__results')
const elStartAgain = document.querySelector('.hangman__startagain')

const ANSWER_WORD = 'Javascript'

const word = ANSWER_WORD.toUpperCase()

const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

let correctGuess = ''
let tries = 0

const MAX_TRIES = 10

// DONE: Implementar una funcion para renderizar los botones con cada letra del alfabeto de la A a la Z.

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach(letter => {
    let statusClass = ''

    const isInCorrectGuesses = correctGuess.includes(letter)
    const isInAnswerWord = word.includes(letter)
  
    if (isInCorrectGuesses && isInAnswerWord) {
      statusClass = 'bg-green-500 hover:bg-green-400'
    } else if (isInCorrectGuesses) {
      statusClass = 'bg-red-500 hover:bg-red-400'
    } else {
      statusClass = 'bg-blue-500 hover:bg-blue-400'
    }

    list += `<button class="p-2 text-white font-bold text-xl cursor-pointer  duration-300 ${statusClass}" onclick="selectLetter('${letter}')">${letter}</button>`
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

  renderAlphabet()
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

  if (!elMaskedWord.textContent.includes('_')) {
    console.log('YOU WON!')
    elResult.classList.toggle('hidden')
    elResult.textContent = 'YOU WON!'
  } else if (tries > MAX_TRIES) {
    console.log('YOU LOST!')
    elResult.classList.toggle('hidden')
    elResult.textContent = 'YOU LOST!'
  }
}

elStartAgain.addEventListener('click', (event) => {
  correctGuess = ''
  tries = 0

  elResult.classList.toggle('hidden')

  renderMaskedWord()

  renderAlphabet()
})

renderAlphabet()