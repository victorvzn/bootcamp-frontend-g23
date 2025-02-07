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
      completed: false
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwind',
      completed: true
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  console.log(todos)

  return (
    <main
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <TodoHeader title='TODO APP + React + Tailwind' color='text-blue-500' />

      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>{todo.title}</li>
          )
        })}
      </ul>

      <pre className="bg-slate-100 p-4 mt-8">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App