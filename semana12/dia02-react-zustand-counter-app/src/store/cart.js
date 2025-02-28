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
      // TODO: Añadir la lógica para cuando el producto ya existe en el carrito de compras
      // TODO: Aquí incrementaremos el campo quantity

      // Esta línea seejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, quantity: 1 }]
      }))
    },
    removeFromCart: (id) => {
      // TODO: Remover el producto usando el id que tenemos en el parámetro de la función
    },
    clearCart: () => {
      // TODO: Limpiar el carrito de compras
    }
  })
)