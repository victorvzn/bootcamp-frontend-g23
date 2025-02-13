import Appointments from "./pages/Appointments"

const App = () => {
  return (
    <>
      <h1 className="text-3xl text-center mt-4">
        Citas médicas para mascotas
      </h1>

      <main className="container mx-auto flex gap-12 p-5 ">
        <Appointments />
      </main>
    </>
  )
}

export default App