import { TbEdit, TbTrash } from "react-icons/tb";
import Avatar from 'boring-avatars'
import { useState } from "react";

// TODO: Reto 2 - Persistir los datos de los estudiantes en localstorage

const App = () => {
  // const DEFAULT_STUDENTS = [
    // {
    //   id: '1',
    //   name: 'Bulma',
    //   city: 'Chiclayo'
    // },
    // {
    //   id: '2',
    //   name: 'Goku',
    //   city: 'Trujillo'
    // },
    // {
    //   id: '3',
    //   name: 'Vegeta',
    //   city: 'Lima'
    // }
  // ]

  const DEFAULT_FORM = {
    id: '',
    name: '',
    city: ''
  }

  const [students, setStudents] = useState(() => {
    const localStorageStudents = JSON.parse(localStorage.getItem('STUDENTS') ?? '[]')
    console.log(localStorageStudents)
    return localStorageStudents
  })

  const [form, setForm] = useState(DEFAULT_FORM)

  const handleChange = (event) => {
    // console.log({ input: event.target })

    // Uso destructuring para obtener el name y el value del objeto target
    const { name, value } = event.target

    console.log(name, value)

    setForm({
      ...form,
      [name]: value
    })
  }

  // TODO: Reto 1 - Guardar un nuevo studiante en el estado students manejando el formulario.

  const handleSave = (event) => {
    event.preventDefault();

    const isNewStudent = form.id === ''
    
    if (isNewStudent) {
      const newStudent = {
        id: crypto.randomUUID(),
        name: form.name,
        city: form.city
      }

      const updatedStudents = [...students, newStudent]

      setStudents(updatedStudents)

      localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
    } else {
      // Update Student
      const updatedStudents = students.map(student => {
        if (student.id === form.id) {
          return {
            ...student,
            name: form.name,
            city: form.city
          }
        }

        return student
      })

      setStudents(updatedStudents)

      localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
    }

    setForm(DEFAULT_FORM)
  }

  const handleRemove = (id) => {
    console.log('Deleting student', id)

    const updatedStudents = students.filter(student => student.id !== id)

    setStudents(updatedStudents)

    localStorage.setItem('STUDENTS', JSON.stringify(updatedStudents))
  }

  // Opción 1: Update 🥺
  // const handleUpdate = (id) => {
  //   console.log('Updating student', id)

  //   const studentFound = students.find(student => student.id === id)

  //   setForm(studentFound)
  // }

  // Opción 2: Update ✅
  const handleUpdate = (student) => {
    setForm(student)
  }

  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl font-semibold text-center mb-3">Student List - CRUD</h1>

      <form
        className="flex flex-col gap-3 bg-slate-300 p-3 rounded-lg border border-slate-200"
        onSubmit={handleSave}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            name="name"
            type="text"
            placeholder="Ex. Victor Villazón"
            required
            onChange={handleChange}
            value={form.name}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            name="city"
            type="text"
            placeholder="Ex. Chiclayo"
            onChange={handleChange}
            value={form.city}
          />
        </label>
        
        <input
          className="bg-blue-800 text-white hover:bg-blue-900 font-medium rounded-lg text-sm w-full py-2.5 cursor-pointer"
          type="submit"
          value="Save student"
        />
      </form>

      <div className="student__list mt-3 flex flex-col gap-2">
        {students && students.map(student => {
          return (
            <div
              className="student__row flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200"
              key={student.id}
            >
              <Avatar size={48} variant="beam" name={student.name} />
              <div className="text-left font-semibold">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleUpdate(student)}
                >
                  <TbEdit size={20} />
                </button>
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleRemove(student.id)}
                >
                  <TbTrash size={20} />
                </button>
              </div>
            </div>
          )
        })}
        
        <pre className="border border-slate-200 p-3 rounded-lg bg-slate-50">{JSON.stringify(form, null, 2)}</pre>
        <pre className="border border-slate-200 p-3 rounded-lg bg-slate-50">{JSON.stringify(students, null, 2)}</pre>
      </div>
    </main>
  )
}

export default App