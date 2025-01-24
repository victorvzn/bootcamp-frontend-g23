const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  console.log('añadiendo tarea...', taskInput.value)

  const elementLi = document.createElement('li')

  elementLi.textContent = taskInput.value

  // TODO: Añadir un botón al li con el texto 'Borrar'

  taskList.appendChild(elementLi)

  // const button = document.createElement('button')
  // button.textContent = '¡Hola soy un botón!'
  // console.log(button)
  // document.body.appendChild(button)
})