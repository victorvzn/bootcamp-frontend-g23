// TODO: Listar los productos en lista como una grilla de 1 columna con botones que contengan el title y el thumbnail


export default function ProductList({ products }) {
  return (
    <section className="flex flex-col p-4">
      <h3 className="text-2xl mb-4">Product List</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products && products.map(product => (
          <div
            key={product.id}
            className="bg-amber-100 p-2 min-w-14 rounded-lg flex flex-col items-center gap-2"
          >
            <img src={product.thumbnail} width={150} />
            <p className="text-center font-bold ">{product.title}</p>
            <button className="bg-blue-400 p-2 min-w-14 rounded-lg cursor-pointer text-white">Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
