import { useState } from "react"

const App = () => {
  // TODO: Hacer la calculadora usando React.js

  // numeroActual
  // operador
  // operando
  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = (event) => {
    const buttonText = event.target.textContent

    if ('+-*'.includes(buttonText)) {
      setOperador(buttonText)
      setOperando(Number(numeroActual))
      setNumeroActual('0')
    } else if (buttonText === '=') {
      if (operador === '+') {
        setNumeroActual(Number(operando) + Number(numeroActual))
      } else if (operador === '-') {
        setNumeroActual(Number(operando) - Number(numeroActual))
      } else if (operador === '*') {
        setNumeroActual(Number(operando) * Number(numeroActual))
      }
    } else if (buttonText === 'CE') {
      setNumeroActual('0')
      setOperador('')
      setOperando('')
    } else {
      console.log(Number(numeroActual + buttonText))
      setNumeroActual(Number(numeroActual + buttonText))
    }
  }

  return (
    <main className="bg-orange-100 w-80 mx-auto text-center mt-5 p-5 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Calculadora</h1>

      <section className="flex flex-col gap-4">
        <input
          className="inputDisplay border px-2 py-2 text-right text-xl font-bold bg-white"
          type="text"
          value={numeroActual}
          readOnly
        />

        <div className="grid grid-cols-3 gap-2">
          <button onClick={handleButton} className="bg-red-300 p-2 hover:bg-red-400 duration-300 font-bold">+</button>
          <button onClick={handleButton} className="bg-red-300 p-2 hover:bg-red-400 duration-300 font-bold">-</button>
          <button onClick={handleButton} className="bg-red-300 p-2 hover:bg-red-400 duration-300 font-bold">*</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">7</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">8</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">9</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">4</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">5</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">6</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">1</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">2</button>
          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">3</button>

          <button onClick={handleButton} className="bg-blue-300 p-2 hover:bg-blue-400 duration-300 font-bold">0</button>
          <button onClick={handleButton} className="bg-green-300 p-2 hover:bg-green-400 duration-300 font-bold">CE</button>
          <button onClick={handleButton} className="bg-green-300 p-2 hover:bg-green-400 duration-300 font-bold">=</button>
        </div>
      </section>
    </main>
  )
}

export default App