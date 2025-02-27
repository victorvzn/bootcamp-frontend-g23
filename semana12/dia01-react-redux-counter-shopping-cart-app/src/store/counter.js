import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1
    },
    decrement: (state) => state - 1,
    incrementBy: (state, action) => state + action.payload
    
    // payload es la data que se pasa como parámetro al llamar a una accion desde el componente
  }
})

export default counterSlice.reducer // Exportando el estado incial y a los reducers del slice

export const { increment, decrement, incrementBy } = counterSlice.actions // Exportamos las acciones