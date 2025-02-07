import { useState } from "react"
import TodoHeader from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import TodoStats from "./components/TodoStats"

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

  const handleRemoveTodo = (event) => {
    const { id } = event.target.dataset

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleSubmit = (newTodo) => {
    setTodos([...todos, newTodo])
  }
 
  const handleClearCompletedTodos = () => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-lg p-4"
    >
      <TodoHeader title='TODO APP + React + Tailwind' color='text-blue-500' />

      <TodoForm
        onSubmit={handleSubmit}
      />

      {/* TODO: 03 - Añadir una estadística de cuantas tareas estan completadas y el total de tareas. */}

      {/* Renderizado condicional */}

      {
        todos.length > 0
          ? (
            <>
              <TodoStats
                todos={todos}
                onClearCompletedTodos={handleClearCompletedTodos}
              />
              <TodoList
                todos={todos}
                onCompleted={handleCompleted}
                onRemoveTodo={handleRemoveTodo}
              />
            </>

          )
          : (
            <div className="text-center font-medium text-gray-500">
              Agrega más tareas en la parte superior.
            </div>
          )
      }

      <pre className="bg-slate-100 p-4 mt-8">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App