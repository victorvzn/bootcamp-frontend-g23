import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'

import { Login } from './pages/Login'
import { Home } from './pages/Home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>,
)
