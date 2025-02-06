const App = () => {
  return (
    <section className="w-[400px] mx-auto bg-slate-200 p-4 mt-8">
      <h1 className="text-3xl font-bold text-red-600 text-center">
        IMC Calculator
      </h1>

      <div className="pt-4">
        <p>Weight: 0 kg</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <div className="pt-4">
        <p>Height: 0 cm</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <p className="font-bold">Tu IMC es 0.00</p>

      <p className="font-bold text-2xl">Estado de IMC: ????</p>
    </section>
  )
}

export default App