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

      const productInCartIndex = state.findIndex(
        item => item.id === newProduct.id
      )

      // Entra aquí cuando el produto ya existe en el carrito de compras
      if (productInCartIndex >= 0) {
        return state.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              qty: product.qty + 1
            }
          }

          return product
        })
      }

      // Entra aquí cuando el producto es nuevo en el carrito de compras
      return [
        ...state,
        {
          ...newProduct,
          qty: 1
        }
      ]
    },
    removeToCart: (state, action) => {
      // TODO: remover el producto del carrito de compras
      const productId = action.payload

      return state.filter(product => product.id !== productId)
    },
    clearCart: (state) => {
      // DONE: limpiar el carrito
      return [] // Estamos devolviendo el nuevo estado de nuestro slice
    }
  }
})

export default cartSlice.reducer // Exportando el estado inicial y a los reducers del slice

export const { addToCart, removeToCart, clearCart } = cartSlice.actions