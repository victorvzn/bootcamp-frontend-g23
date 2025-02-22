import { useEffect, useState } from "react"

const ENDPOINT_URL = 'https://dummyjson.com/products'

const fetchProducts = async () => {
  const response = await fetch(ENDPOINT_URL)

  return await response.json()
}

const ProductsList = () => {
  // TODO: Renderizar los productos del endpoint https://dummyjson.com/products
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log(data.products)
        setProducts(data.products)
      })
  }, [])

  return (
    <main>
      <h2 className="text-xl font-bold">ProductsList</h2>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>* {product.title}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default ProductsList