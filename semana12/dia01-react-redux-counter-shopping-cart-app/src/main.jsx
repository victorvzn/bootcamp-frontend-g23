import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'

import { store } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Categorias /> El componente Categorias no tiene acceso al store de redux */}

    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
