const AppointmentForm = () => {
  return (
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
  )
}

export default AppointmentForm