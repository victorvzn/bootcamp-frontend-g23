import { useState } from "react"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"

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
  const [input, setInput ] = useState('')

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

  const handleRemoveTodo = (event) => {
    const { id } = event.target.dataset

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleChange = (event) => {
    // Vamos a capturar lo que escribimos en la caja de texto
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    console.log(newTodo)

    setTodos([...todos, newTodo])

    setInput('')
  }
 
  return (
    <main
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <TodoHeader title='TODO APP + React + Tailwind' color='text-blue-500' />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-yellow-400 my-3 p-2 rounded-lg"
          placeholder="¿Qué deseas hacer hoy?"
          required
          value={input}
          onChange={handleChange}
        />

        {/* {input} */}
      </form>

      <TodoList
        todos={todos}
        onCompleted={handleCompleted}
        onRemoveTodo={handleRemoveTodo}
      />

      <pre className="bg-slate-100 p-4 mt-8">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App