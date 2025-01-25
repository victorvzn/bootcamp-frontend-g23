const questions = [
  {
    id: 1111,
    order: 1,
    question: '¿Cómo se llama el método en JS que se utiliza para imprimir mensajes en la consola?',
    correctAnswer: 1,
    answerList: ['print()', 'console.log()', 'display()']
  },
  {
    id: 2222,
    order: 2,
    question: '¿Cuál es el operador utilizado para comparar el valor y el tipo de dos variables en JS?',
    correctAnswer: 2,
    answerList: ['==', '=', '===']
  },
  {
    id: 3333,
    order: 3,
    question: '¿Cuál es la función en JS que se utiliza para redondear hacia abajo el valor de un número decimal?',
    correctAnswer: 0,
    answerList: ['floor()', 'ceil()', 'round()']
  },
  {
    id: 4444,
    order: 4,
    question: '¿Qué tipo de valor devuelve el operador typeof null en JavaScript?',
    correctAnswer: 1,
    answerList: ['null', 'object', 'undefined']
  }
]

let correctAnswerCounter = 0 // Contador
let currentQuestionIndex = 0

const questionsAndResults = document.querySelector('#questions-and-results')

function respondQuestion(event, questionSelectedIndex) {
  const currentQuestion = questions[currentQuestionIndex]

  // Incrementar el número de respuestas correctas
  if (questionSelectedIndex === currentQuestion.correctAnswer) {
    correctAnswerCounter++
  }

  console.log(correctAnswerCounter)

  // TODO: Mostrar las respuetas correctas e incorrectas con sus colores respectivos después de presionado alguna alternativa(verde o rojo) y los botones de las alternativas deben deshabilitarse.

  const answerButtons = document.querySelectorAll('[data-answer]')

  answerButtons.forEach(function(button) {
    if (Number(button.dataset.answer) === currentQuestion.correctAnswer) {
      button.className = 'border border-green-500 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-white text-left bg-green-500'
    } else {
      button.className = 'border border-red-500 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-white text-left bg-red-500'
    }

    button.setAttribute('disabled', 'disabled2')
  })
}

function nextQuestion(event) {
  // TODO: Validar el problema cuando no tenemos más preguntas por mostrar

  currentQuestionIndex = currentQuestionIndex + 1

  renderQuestions()
}

function startAgain(event) {
  currentQuestionIndex = 0
  correctAnswerCounter = 0

  renderQuestions()
}

function showResultsPage(event) {
  const questionsCount = questions.length
  const isWinner = correctAnswerCounter === questionsCount

  questionsAndResults.innerHTML = `
    <section class=" flex-col px-4 py-6 text-center bg-green-600 rounded-lg shadow ">
      <p class="text-3xl font-medium mb-4 text-white">
        ${isWinner ? '¡GANASTE!' : '¡MEJOR SUERTE LA PRÓXIMA!'}
      </p>

      <p class="text-md font-medium text-white mb-4">
        Respondiste ${correctAnswerCounter} de ${questionsCount}
      </p>

      <p class="text-md font-medium text-white mb-4">
        Y este es tu puntaje: ${correctAnswerCounter * 10}
      </p>

      <img src="https://placehold.co/300x100" />

      <div class="flex justify-end mt-10">
        <button
          class="text-gray-800 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
          onclick="startAgain(event)"
        >
          Empezar de nuevo
        </button>
      </div>
    </section>
  `
}

function renderQuestions() {
  const currentQuestion = questions[currentQuestionIndex]

  console.log(currentQuestion)

  questionsAndResults.innerHTML = `
    <section class="flex flex-col px-4 py-6 border border-gray-300 rounded-lg shadow">
      <!-- Aqui van las preguntas -->
      <p class="text-md font-medium text-gray-800 mb-4">
        ${currentQuestion.order}. ${currentQuestion.question}
      </p>

      <div class="flex flex-col items-start mb-10 gap-2">
        <button class="border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-blue-700 text-left hover:bg-blue-800 hover:text-white cursor-pointer"
          onclick="respondQuestion(event, 0)"
          data-answer="0"
        >
          ${currentQuestion.answerList[0]}
        </button>
        <button class="border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-blue-700 text-left hover:bg-blue-800 hover:text-white cursor-pointer"
          onclick="respondQuestion(event, 1)"
          data-answer="1"
        >
          ${currentQuestion.answerList[1]}
        </button>
        <button class="border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-blue-700 text-left hover:bg-blue-800 hover:text-white cursor-pointer"
          onclick="respondQuestion(event, 2)"
          data-answer="2"
        >
          ${currentQuestion.answerList[2]}
        </button>
        <button class="hidden border border-red-500 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-white text-left cursor-pointer bg-red-500">Respuesta incorrecta</button>
        <button class="hidden border border-green-500 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-white text-left cursor-pointer bg-green-500">Respuesta correcta</button>
      </div>

      <div class="flex justify-end gap-2">
        <button class="hidden text-gray-800 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer">
          <img src="./images/icon-arrow-left.svg" width="32" height="32" />
        </button>
        <button
          class="${(currentQuestionIndex === questions.length - 1) ? 'hidden' : ''} text-gray-800 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
          onclick="nextQuestion(event)"
        >
          <img src="./images/icon-arrow-right.svg" width="32" height="32" />
        </button>
        <button
          class="${(currentQuestionIndex === questions.length - 1) ? '' : 'hidden'} text-gray-800 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
          onclick="showResultsPage(event)"
        >Ver Resultados</button>
      </div>
    </section>
  `
}

renderQuestions()