// PASO-01: Creamos un store con los reducers que necesitemos

import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../store/counter'
import cartReducer from '../store/cart'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  }
})