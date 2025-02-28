import { formatNumber } from '../utils'

import { useCartStore } from '../store/cart'

export const ShoppingCart = () => {
  const { cart } = useCartStore()

  const isCartEmpty = false
  // const isCartEmpty = cart.length === 0

  const total = 0
  // const total = cart.reduce((acc, product) => {
  //   const qty = product.qty
  //   const price = product.price
  //   const subtotal = qty * price

  //   return acc + subtotal
  // }, 0)

  if (isCartEmpty) {
    return (
      <div className='w-56'>
        <h3 className="text-2xl mb-2">Shopping Cart</h3>

        <div className="mb-2 bg-slate-100 h-32 rounded-lg p-4">
          <p className='text-xl text-center text-slate-500'>
            Shopping cart empty
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="w-56">
      <h3 className="text-2xl mb-2">Shopping Cart</h3>

      <div className="mb-2">
        <button
          className="bg-violet-400 p-2 min-w-14 rounded-lg cursor-pointer text-white w-full"
        >
          Clean cart
        </button>
      </div>

      <ul className='flex flex-col gap-2'>
        {cart && cart.map(product => (
          <li
            className="flex flex-col gap-2 font-bold bg-slate-100  p-2 rounded-lg shadow"
            key={product.id}
          >
            <span>{product.title}</span>
            <span>S/ {product.price} (qty: {product.quantity})</span>
            <button
              className="bg-red-400 p-1 rounded-lg cursor-pointer text-white"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className='mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between'>
        <strong>TOTAL:</strong> <span>S/ {formatNumber(total)}</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </section>
  )
}
