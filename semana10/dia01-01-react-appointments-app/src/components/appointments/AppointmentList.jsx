const AppointmentList = ({
  appointments
}) => {
  return (
    <>
      <section className="hidden w-full bg-amber-100 rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de citas médicas</h2>

        <div className="flex justify-center items-center h-96 text-3xl">
          No hay citas disponibles.
        </div>
      </section>

      <section className=" w-full p-4 bg-amber-100 rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de citas médicas</h2>

        {/* TODO: 01. Renderizar las citas a partir de la propiedad appointments */}

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

        <pre>{JSON.stringify(appointments, null, 2)}</pre>
      </section>

    </>
  )
}

export default AppointmentList