import { BrowserRouter, Link, Route, Routes } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>React Router</h1>

          <nav className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<h1 className="text-3xl font-bold">Home Page</h1>} />
        <Route path='/login' element={<h1 className="text-3xl font-bold">Login Page</h1>} />
        <Route path='/register' element={<h1 className="text-3xl font-bold">Register Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



