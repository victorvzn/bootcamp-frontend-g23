import { TbEdit, TbTrash } from "react-icons/tb";
import Avatar from 'boring-avatars'

const App = () => {
  return (
    <main className="w-96 mx-auto border rounded-lg mt-6 p-3">
      <h1 className="text-2xl font-semibold text-center">Student List</h1>

      <form className="flex flex-col gap-3 bg-slate-300 p-3 rounded-lg border border-slate-200">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg p-2.5"
            type="text"
            placeholder="Ex. Victor Villazón"
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
          className="bg-blue-800 text-white hover:bg-blue-900 font-medium rounded-lg text-sm w-full py-2.5"
          type="submit"
          value="Save student"
        />
      </form>

      <div className="student__list mt-3 flex flex-col gap-2">
        <div className="student__row flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200">
          <Avatar size={48} variant="beam" name="Student name" />
          <div className="text-left font-semibold">Student name</div>
          <div className="text-left">Student city</div>
          <div className="flex gap-2">
            <button className="text-blue-500">
              <TbEdit size={20} />
            </button>
            <button className="text-red-500">
              <TbTrash size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App