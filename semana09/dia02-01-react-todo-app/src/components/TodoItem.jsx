import { useState } from "react"

const TodoItem = ({ todo, onCompleted, onRemoveTodo, onSaveTodo }) => {
  // TODO: 02 - Darle funcionalidad al botón remover para quitar una tarea del estado todos.

  // TODO: 04 - Editar el titulo del todo haciendo doble click en el titulo, esto hará que aparezca una caja de texto. Y para guardarlo solo debemos presionar enter en la caja de texto.

  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(todo?.title)

  const handleEditTodo = () => {
    setIsEditing(true)
  }

  const handleCancelOrSave = (event) => {
    console.log(event.code)
    if (event.code === 'Enter') {
      setIsEditing(false)
    }

    if (event.code === 'Escape') {
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
        {!isEditing
        ? (
          <span className={`font-medium w-full ${todo.completed ? 'line-through' : ''}`} onDoubleClick={handleEditTodo}>
            {todo.title}
          </span>
        )
        : (
          <input type="text" className="w-full border border-yellow-400 my-3 p-2 rounded-lg" value={input} onKeyUp={handleCancelOrSave} onChange={(event) => setInput(event.target.value)}  />
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