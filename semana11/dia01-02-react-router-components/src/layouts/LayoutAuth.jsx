import { Link, Outlet } from "react-router"

const LayoutAuth = () => {
  return (
    <>
      <header className='bg-sky-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>React Router - Auth</h1>

          <nav className='flex gap-4'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto my-6 px-6">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutAuth