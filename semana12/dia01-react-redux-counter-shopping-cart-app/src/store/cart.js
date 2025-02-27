import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'product 1'},
    // { id: 2, title: 'product 2'},
  ],
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action)
      const newProduct = action.payload

      // Entra aquí cuando el producto es nuevo en el carrito de compras
      return [
        ...state,
        newProduct
      ]
    },
    removeToCart: (state, action) => {

    },
    clearCart: (cart) => {

    }
  }
})

export default cartSlice.reducer // Exportando el estado inicial y a los reducers del slice

export const { addToCart, removeToCart, clearCart } = cartSlice.actions