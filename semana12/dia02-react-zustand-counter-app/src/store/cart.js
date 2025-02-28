import { create } from "zustand";

export const useCartStore = create(
  (set, get) => ({
    // Estado INICIAL
    cart: [
      // { id: 1, title: 'product 1', quantity: 1 },
      // { id: 2, title: 'product 2', quantity: 1 }
    ],

    // Actions
    addToCart: (newProduct) => {
      // Esta línea seejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, quantity: 1 }]
      }))
    },
    removeFromCart: (id) => {},
    clearCart: () => {}
  })
)