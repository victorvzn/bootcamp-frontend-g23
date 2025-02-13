import { useState } from "react"
import AppointmentForm from "../components/appointments/AppointmentForm"
import AppointmentList from "../components/appointments/AppointmentList"

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  const handleSave = (newAppointment) => {
    console.log('Me estan llamando al guardar el form desde el componente padre', newAppointment)
  }

  return (
    <>
      <AppointmentList
        appointments={appointments}
      />

      <AppointmentForm
        onSave={handleSave}
      />
    </>
  )
}

export default Appointments