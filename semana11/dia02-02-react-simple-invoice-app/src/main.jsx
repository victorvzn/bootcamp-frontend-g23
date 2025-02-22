import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'

import { Login } from './pages/Login'
import { Home } from './pages/Home'

import { LayoutAuth } from './layouts/LayoutAuth'
import { LayoutAdmin } from './layouts/LayoutAdmin'

import AuthValidation from './components/AuthValidation'

import ProductsList from './pages/ProductsList'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path='/' element={<Login />} />
      </Route>

      <Route element={<AuthValidation />}>

        <Route element={<LayoutAdmin />}>
          <Route path='/home' element={<Home />} />

          <Route path='/products' element={<ProductsList />} />

          
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>,
)
