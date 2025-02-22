import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

const ENDPOINT_URL = 'https://dummyjson.com/auth/products'

const fetchProducts = async (accessToken) => {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
  
  const response = await fetch(ENDPOINT_URL, options)
  
  return await response.json()
}

const ProductsList = () => {
  const { user } = useAuth()

  console.log(user)

  // TODO: Renderizar los productos del endpoint https://dummyjson.com/products
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts(user.accessToken)
      .then((data) => {
        console.log(data.products)
        setProducts(data.products)
      })
  }, [])

  return (
    <main>
      <h2 className="text-xl font-bold">ProductsList</h2>

      <ul>
        {products && products.map(product => {
          return (
            <li key={product.id}>* {product.title}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default ProductsList