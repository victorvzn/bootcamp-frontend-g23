export const fetchProducts = () => {
  return fetch('https://dummyjson.com/products?delay=2000')
      .then(response => response.json())
}