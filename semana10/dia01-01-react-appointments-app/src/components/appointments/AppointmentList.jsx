const AppointmentList = ({
  appointments,
  onConfirm,
  onEdit,
  onRemove
}) => {

  if (appointments.length === 0) {
    return (
      <section className="w-full bg-amber-100 rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de citas médicas</h2>

        <div className="flex justify-center items-center h-96 text-3xl">
          No hay citas disponibles.
        </div>
      </section>
    )
  }

  return (
    <>
      <section className=" w-full p-4 bg-amber-100 rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de citas médicas</h2>

        {/* TODO: 01. Renderizar las citas a partir de la propiedad appointments */}

        {appointments.map(appointment => {
          return (
            <article className="flex flex-col gap-3 mb-4" key={appointment.id}>
              <div className="border-2 border-sky-500 bg-sky-200 p-3 rounded-lg">
                <div className="py-2">
                  <h4 className="font-semibold text-xl">Mascota</h4>
                  <div><strong>Nombre:</strong> {appointment.petName}</div>
                  <div><strong>Edad (años):</strong> {appointment.petAge}</div>
                </div>

                <div className="py-2">
                  <h4 className="font-semibold text-xl">Dueño</h4>
                  <div><strong>Nombre:</strong> {appointment.ownerName}</div>
                </div>

                <div className="py-2">
                  <h4 className="font-semibold text-xl">Cita</h4>
                  <div><strong>Fecha:</strong> {appointment.appointmentDate}</div>
                  <div><strong>Hora:</strong> {appointment.appointmentTime}</div>
                  <div><strong>Síntomas:</strong> {appointment.symptoms}</div>
                </div>

                <div className="flex flex-col gap-3 mt-3">
                  <button
                    className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
                    onClick={() => onConfirm(appointment)}
                  >
                    Confirmar cita
                  </button>
                  <button
                    className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer"
                    onClick={() => onEdit(appointment)}
                  >
                    Editar
                  </button>
                  <button
                    className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
                    onClick={() => onRemove(appointment)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </article>
          )
        })}
        

        <pre>{JSON.stringify(appointments, null, 2)}</pre>
      </section>

    </>
  )
}

export default AppointmentList