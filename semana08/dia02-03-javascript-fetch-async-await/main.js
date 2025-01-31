const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPostsSinRetorno = async () => {
  const response = await fetch(url)

  console.log(response)

  const json = await response.json()

  console.log(json)
}

const fetchPostsConRetorno = async () => { // Retorno una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

// fetchPostsSinRetorno()

fetchPostsConRetorno()
  .then(posts => console.log(posts))