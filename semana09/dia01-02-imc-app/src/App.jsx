import { useState } from "react"

const App = () => {
  // useState => Este hook nos ayuda a generar un estado para manipular datos dentro de nuestro componente
  // useState => devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado

  // const weight = useState(1)

  // const getWeight = weight[0]
  // const setWeight = weight[1]

  const [weight, setWeight] = useState(1)
  const [height, setHeight] = useState(1)

  return (
    <section className="w-[400px] mx-auto bg-slate-200 p-4 mt-8">
      <h1 className="text-3xl font-bold text-red-600 text-center">
        IMC Calculator
      </h1>

      <div className="pt-4">
        <p>Weight: {weight} kg</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>

      <div className="pt-4">
        <p>Height: {height} cm</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>

      <p className="font-bold">Tu IMC es 0.00</p>

      <p className="font-bold text-2xl">Estado de IMC: ????</p>
    </section>
  )
}

export default App