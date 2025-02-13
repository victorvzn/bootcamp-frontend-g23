import { useState } from "react"

const AppointmentForm = ({ onSave }) => {
  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: '',
  }

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

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
          onChange={handleChange}
        />

        <input
          className="border rounded-lg p-3 shadow-lg"
          type="number"
          name="petAge"
          placeholder="Edad de la mascota. Ej. 2"
          required
          min="0"
          max="30"
          onChange={handleChange}
        />

        <input
          className="border rounded-lg p-3 shadow-lg"
          type="text"
          name="ownerName"
          placeholder="Nombre del dueño. Ej. Fabricio"
          required
          onChange={handleChange}
        />

        <input
          className="border rounded-lg p-3 shadow-lg"
          type="date"
          name="appointmentDate"
          required
          onChange={handleChange}
        />

        <input
          className="border rounded-lg p-3 shadow-lg"
          type="time"
          name="appointmentTime"
          required
          onChange={handleChange}
        />

        <textarea
          className="border rounded-lg p-3 shadow-lg"
          name="symptoms"
          placeholder="Síntomas"
          rows={6}
          onChange={handleChange}
        />

        <input
          className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
          type="submit"
          value="Guardar"
        />
      </form>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </section>
  )
}

export default AppointmentForm