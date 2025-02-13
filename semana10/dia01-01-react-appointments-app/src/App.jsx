const App = () => {
  return (
    <>
      <h1 className="text-3xl text-center mt-4">
        Citas médicas para mascotas
      </h1>

      <main className="container mx-auto flex gap-12 p-5 ">
        <section className="hidden w-full bg-amber-100 rounded-lg">
          <h2 className="text-2xl text-center mb-4">Listado de citas médicas</h2>

          <div className="flex justify-center items-center h-96 text-3xl">
            No hay citas disponibles.
          </div>
        </section>

        <section className=" w-full p-4 bg-amber-100 rounded-lg">
          <h2 className="text-2xl text-center mb-4">Listado de citas médicas</h2>

          <article className="flex flex-col gap-3 mb-4">
            <div className="border-2 border-sky-500 bg-sky-200 p-3 rounded-lg">
              <div className="py-2">
                <h4 className="font-semibold text-xl">Mascota</h4>
                <div><strong>Nombre:</strong> petName</div>
                <div><strong>Edad (años):</strong> petAge</div>
              </div>

              <div className="py-2">
                <h4 className="font-semibold text-xl">Dueño</h4>
                <div><strong>Nombre:</strong> ownerName</div>
              </div>

              <div className="py-2">
                <h4 className="font-semibold text-xl">Cita</h4>
                <div><strong>Fecha:</strong> appointmentDate</div>
                <div><strong>Hora:</strong> appointmentTime</div>
                <div><strong>Síntomas:</strong> symptoms</div>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <button className="p-2 bg-green-600 text-white rounded-lg cursor-pointer">Confirmar cita</button>
                <button className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer">Editar</button>
                <button className="p-2 bg-red-600 text-white rounded-lg cursor-pointer">Eliminar</button>
              </div>
            </div>
          </article>
        </section>

        <section className="w-[400px]">
          <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

          <form className="flex flex-col gap-4">
            <input
              className="border rounded-lg p-3 shadow-lg"
              type="text"
              name="petName"
              placeholder="Nombre de la mascota. Ej. Firulais"
              required
            />

            <input
              className="border rounded-lg p-3 shadow-lg"
              type="number"
              name="petAge"
              placeholder="Edad de la mascota. Ej. 2"
              required
              min="0"
              max="30"
            />

            <input
              className="border rounded-lg p-3 shadow-lg"
              type="text"
              name="ownerName"
              placeholder="Nombre del dueño. Ej. Fabricio"
              required
            />

            <input
              className="border rounded-lg p-3 shadow-lg"
              type="date"
              name="appointmentDate"
              required
            />

            <input
              className="border rounded-lg p-3 shadow-lg"
              type="time"
              name="appointmentTime"
              required
            />

            <textarea
              className="border rounded-lg p-3 shadow-lg"
              name="symptoms"
              placeholder="Síntomas"
              rows={6}
            />

            <input
              className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
              type="submit"
              value="Guardar"
            />
          </form>
        </section>
      </main>
    </>
  )
}

export default App