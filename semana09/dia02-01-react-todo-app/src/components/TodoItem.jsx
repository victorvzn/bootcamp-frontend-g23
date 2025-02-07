const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
  // TODO: 02 - Darle funcionalidad al botón remover para quitar una tarea del estado todos.

  // TODO: 04 - Editar el titulo del todo haciendo doble click en el titulo, esto hará que aparezca una caja de texto. Y para guardarlo solo debemos presionar enter en la caja de texto.

  return (
    <li className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
      <input
        type="checkbox"
        data-id={todo.id}
        checked={todo.completed}
        onChange={onCompleted}
      />
      <div className="w-full flex justify-between items-center">
        <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
          {todo.title}
        </span>
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