const url = 'https://jsonplaceholder.typicode.com/posts'

// OBJETIVO: Traer información en formato JSON desde una URL

// URL
// MÉTODOS: GET, POST, PUT, DELETE (PATCH, OPTIONS)
// ESTADOS: 
// * 200 OK
// * 201 Created
// * 204 No Content
// * 400 Bad Request
// * 401 Unauthorized
// * 403 Forbidden
// * 404 Not Found
// * 500 Internal Server Error

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data) // Aquí podemos usar el objeto JS
//     console.log(data[0].title)
//   })

const renderPosts = (posts = []) => {
  const divApp = document.querySelector('#app')

  let postList = ''

  posts.forEach(post => {
    postList += `
      <article>
        <h2>${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
      </article>
    `
  })

  divApp.innerHTML = postList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    renderPosts(data)
  })
  .catch(error => {
    console.log('ERROR INESPERADO:', error)
  })