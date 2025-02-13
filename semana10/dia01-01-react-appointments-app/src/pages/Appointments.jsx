import { useState } from "react"
import AppointmentForm from "../components/appointments/AppointmentForm"
import AppointmentList from "../components/appointments/AppointmentList"

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  const handleSave = (newAppointment) => {
    console.log('Me estan llamando al guardar el form desde el componente padre', newAppointment)

    // TODO: Manejar el guardado de una cita cuando se está editando

    setAppointments([...appointments, newAppointment])
  }

  const handleRemove = (appointmentToRemove) => {
    console.log(appointmentToRemove)

    const newAppointments = appointments.filter(
      appointment => appointment.id !== appointmentToRemove.id
    )

    setAppointments(newAppointments)
  }

  // TODO: Añadir funcionalidad al botón editar
  const handleEdit = (appointmentToEdit) => {
    console.log(appointmentToEdit)
  }

  // TODO: Manejar la confirmación y cancelación de una cita (Esta funcionalidad es libre)
  const handleConfirm = (appointmentToConfirm) => {
    console.log(appointmentToConfirm)
  }

  return (
    <>
      <AppointmentList
        appointments={appointments}
        onRemove={handleRemove}
        onEdit={handleEdit}
        onConfirm={handleConfirm}
      />

      <AppointmentForm
        onSave={handleSave}
      />
    </>
  )
}

export default Appointments