import { Link, Outlet, useNavigate } from "react-router"

import { useAuth } from "../hooks/useAuth"

export const LayoutAdmin = () => {
  const { logout, user } = useAuth()

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
          <Link to='/home'>
            <h1 className="font-bold">Invoice app - HOME</h1>
          </Link>

          <div className="flex gap-2">
            <span className="font-bold">Bienvenid@ {user?.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="mt-3 flex gap-3">
          <Link to='/products'>Products</Link>
          <Link to='/invoices/list'>Invoices</Link>
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
