import { useSelector, useDispatch } from 'react-redux'

import { clearCart } from '../store/cart'

export const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const isCartEmpty = cart.length === 0

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
          onClick={() => dispatch(clearCart())}
        >
          Clean cart
        </button>
      </div>

      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

      <ul className='flex flex-col gap-2'>
        {cart && cart.map(product => (
          <li
            className="flex flex-col gap-2 font-bold bg-slate-100  p-2 rounded-lg shadow"
            key={product.id}
          >
            <span>{product.title}</span>
            <span>S/ {product.price} (qty: {product.qty})</span>
            <button
              className="bg-red-400 p-1 rounded-lg cursor-pointer text-white"
            >
              ❌
            </button>
          </li>
        ))}
        
      </ul>
    </section>
  )
}
