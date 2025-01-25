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

