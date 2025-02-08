import { TbEdit, TbTrash } from "react-icons/tb";
import Avatar from 'boring-avatars'
import { useState } from "react";

const App = () => {
  const DEFAULT_STUDENTS = [
    {
      id: '1',
      name: 'Bulma',
      city: 'Chiclayo'
    },
    {
      id: '2',
      name: 'Goku',
      city: 'Trujillo'
    },
    {
      id: '3',
      name: 'Vegeta',
      city: 'Lima'
    }
  ]

  const [students, setStudents] = useState(DEFAULT_STUDENTS)

  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl font-semibold text-center mb-3">Student List - CRUD</h1>

      <form className="flex flex-col gap-3 bg-slate-300 p-3 rounded-lg border border-slate-200">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            type="text"
            placeholder="Ex. Victor Villazón"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            type="text"
            placeholder="Ex. Chiclayo"
          />
        </label>
        
        <input
          className="bg-blue-800 text-white hover:bg-blue-900 font-medium rounded-lg text-sm w-full py-2.5 cursor-pointer"
          type="submit"
          value="Save student"
        />
      </form>

      <div className="student__list mt-3 flex flex-col gap-2">
        {students.map(student => {
          return (
            <div
              className="student__row flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200"
              key={student.id}
            >
              <Avatar size={48} variant="beam" name={student.name} />
              <div className="text-left font-semibold">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button className="text-blue-500 cursor-pointer">
                  <TbEdit size={20} />
                </button>
                <button className="text-red-500 cursor-pointer">
                  <TbTrash size={20} />
                </button>
              </div>
            </div>
          )
        })}

        <pre className="border border-slate-200 p-3 rounded-lg bg-slate-50">{JSON.stringify(students, null, 2)}</pre>
      </div>
    </main>
  )
}

export default App