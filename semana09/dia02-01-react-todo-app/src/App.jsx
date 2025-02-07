import { useState } from "react"
import TodoHeader from "./components/TodoHeader"

const App = () => {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender Javascript',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwind',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  console.log(todos)

  const handleCompleted = (event) => {
    // console.log(event.target.dataset)
    const { id } = event.target.dataset
    const isChecked = event.target.checked

    console.log(id, isChecked)

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: isChecked
        }
      }

      return todo // Dejamos el objeto sin modificaciones
    })

    setTodos(updatedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <TodoHeader title='TODO APP + React + Tailwind' color='text-blue-500' />

      <ul className="flex flex-col gap-2 mt-4">
        {todos.map(todo => {
          return (
            <li key={todo.id} className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
              <input
                type="checkbox"
                data-id={todo.id}
                checked={todo.completed}
                onChange={handleCompleted}
              />
              <div className="w-full flex justify-between items-center">
                <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
                  {todo.title}
                </span>
                <button className="bg-red-300 rounded-lg px-1 py-1 cursor-pointer">
                  ❌
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <pre className="bg-slate-100 p-4 mt-8">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App