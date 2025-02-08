import { useState } from "react"

const TodoItem = ({ todo, onCompleted, onRemoveTodo, onSave }) => {
  // TODO: 02 - Darle funcionalidad al botón remover para quitar una tarea del estado todos.

  // TODO: 04 - Editar el titulo del todo haciendo doble click en el titulo, esto hará que aparezca una caja de texto. Y para guardarlo solo debemos presionar enter en la caja de texto.

  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(todo.title)


  const handleCancelOrSave = (event) => {
    // Averiguar si presionamos la tecla ESC o ENTER u otro más.

    // console.log(event.code)

    if (event.code === 'Escape') {
      console.log('Cancelling...')
      setIsEditing(false)
      return
    }

    if (event.code === 'Enter') {
      console.log('Saving...')
      // Hay que guardar el todo editado
      onSave()

      setIsEditing(false)
    }
  }

  return (
    <li className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
      <input
        type="checkbox"
        data-id={todo.id}
        checked={todo.completed}
        onChange={onCompleted}
      />
      <div className="w-full flex justify-between items-center gap-2">
        {
          isEditing
            ? (
              
              <input
                className="w-full border-2 border-yellow-400 p-2 rounded-lg"
                onKeyDown={handleCancelOrSave}
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            )
            : (
              <span
                className={`font-medium ${todo.completed ? 'line-through' : ''}`}
                onDoubleClick={() => setIsEditing(true)}
              >
                {todo.title}
              </span>
            )
        }
        <button
          className="bg-red-300 rounded-lg px-1 py-1 cursor-pointer"
          data-id={todo.id}
          onClick={onRemoveTodo}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem