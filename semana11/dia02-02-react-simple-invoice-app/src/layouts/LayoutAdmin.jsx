import { Outlet, useNavigate } from "react-router"

import { useAuth } from "../hooks/useAuth"

export const LayoutAdmin = () => {
  const { logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    // Limpiar la clave auth desde localstorage
    logout()

    // Redirigir el usuario a /login
    navigate('/') // redirige a login page
  }

  return (
    <>
      <header className="py-4 px-6 bg-amber-300">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">Invoice app - HOME</h1>

          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </header>

      <main className="my-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}
