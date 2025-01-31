const url = 'https://jsonplaceholder.typicode.com/posts'

// OBJETIVO: Traer información en formato JSon desde una URL

fetch(url) // Devuelve una promesa (Promise)
  .then(response => response.json()) // Convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data) // Aquí podemos usar el objeto JS
    console.log(data[0].title)
  })