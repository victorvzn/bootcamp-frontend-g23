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
      // ¿Existe el nuevo producto en el carrito de compras?
      const currentCartState = get().cart

      const productInCartIndex = currentCartState.findIndex(
        product => product.id === newProduct.id
      )

      console.log(productInCartIndex)

      if (productInCartIndex >= 0) {
        // TODO: Añadir la lógica para cuando el producto ya existe en el carrito de compras
        // TODO: Aquí incrementaremos el campo quantity
        const newCart = currentCartState.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: product.quantity + 1
            }
          }

          return product
        })

        set(() => ({ cart: newCart }))

        return
      }

      // Esta línea se ejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, quantity: 1 }]
      }))
    },
    removeFromCart: (id) => {
      // TODO: Remover el producto usando el id que tenemos en el parámetro de la función
      set(state => {
        const newCart = state.cart.filter(product => product.id !== id)

        return { cart: newCart }
      })
    },
    clearCart: () => {
      // TODO: Limpiar el carrito de compras
      set(state => ({ cart: [] }))
    }
  })
)