export const ShoppingCart = () => {
  return (
    <section className="w-52">
      <h3 className="text-2xl mb-2">Shopping Cart</h3>

      <div className="mb-2">
        <button className="bg-violet-400 p-2 min-w-14 rounded-lg cursor-pointer text-white w-full">Clean cart</button>
      </div>

      <ul>
        <li className="flex flex-col gap-2 font-bold bg-slate-100  p-2 rounded-lg">
          <span>title</span>
          <span>S/ 0.00 (qty: 0)</span>
          <button
            className="bg-red-400 p-1 rounded-lg cursor-pointer text-white"
          >
            ❌
          </button>
        </li>
      </ul>
    </section>
  )
}
