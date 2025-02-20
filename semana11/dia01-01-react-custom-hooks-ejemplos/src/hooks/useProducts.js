import { useEffect, useState } from "react"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('https://dummyjson.com/products?delay=2000')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    products,
    loading
  }
}