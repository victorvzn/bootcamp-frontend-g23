import { useState } from "react"

const TodoForm = ({ onSubmit }) => {
  const [input, setInput ] = useState('')

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

    // setTodos([...todos, newTodo])
    onSubmit(newTodo)

    setInput('')
  }

  return (
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
  )
}

export default TodoForm