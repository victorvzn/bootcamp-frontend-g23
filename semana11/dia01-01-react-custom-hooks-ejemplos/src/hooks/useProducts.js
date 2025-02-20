import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetchProducts()
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