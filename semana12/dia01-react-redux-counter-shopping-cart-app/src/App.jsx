import { useEffect, useState } from "react"
import { Counter } from "./components/Counter"
import ProductList from "./components/ProductList"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <>
      <ProductList products={products} />
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <Counter />
    </>
  )
}

export default App