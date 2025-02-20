// DESPUÉS

import { useProducts } from "../hooks/useProducts"

const ProductList = () => {
  // https://dummyjson.com/products
  const { products, loading } = useProducts()

  return (
    <>
      <h1>Product List</h1>

      {/* TODO: Listar los productos del endpoint products(https://dummyjson.com/products) */}

      {loading && <p>Loading products...</p>}

      {!loading && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h5>{product.id} - {product.title}</h5>
              <p>{product.description}</p>
              <img src={product.thumbnail} width={100} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

// ANTES

// const ProductList = () => {
//   // https://dummyjson.com/products
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data.products)
//       })
//   }, [])

//   return (
//     <>
//       <h1>Product List</h1>

//       {/* TODO: Listar los productos del endpoint products(https://dummyjson.com/products) */}
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <h5>{product.id} - {product.title}</h5>
//             <p>{product.description}</p>
//             <img src={product.thumbnail} width={100} />
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

export default ProductList