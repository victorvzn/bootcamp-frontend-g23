import { BrowserRouter, Route, Routes } from 'react-router'

import LayoutBase from './layouts/LayoutBase'
import LayoutAuth from './layouts/LayoutAuth'

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path='/' element={<h1 className="text-3xl font-bold">Home Page</h1>} />
        </Route>

        <Route element={<LayoutAuth />}>
          <Route path='/login' element={<h1 className="text-3xl font-bold">Login Page</h1>} />
          <Route path='/register' element={<h1 className="text-3xl font-bold">Register Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



