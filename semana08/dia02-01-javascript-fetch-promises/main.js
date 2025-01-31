const url = 'https://jsonplaceholder.typicode.com/posts'

// OBJETIVO: Traer información en formato JSon desde una URL

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