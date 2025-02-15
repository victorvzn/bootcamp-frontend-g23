const JSONSERVER_URL = 'http://localhost:3000'

const ENDPOINT_MOVIES = `${JSONSERVER_URL}/movies`

export const fetchMovies = async () => {
  const response = await fetch(`${ENDPOINT_MOVIES}?_embed=genre`)

  return await response.json()
}

export const createMovie = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(ENDPOINT_MOVIES, options)

  return await response.json()
}

export const deleteMovie = async (id) => {
  const options = { method: 'DELETE' }

  const response = await fetch(`${ENDPOINT_MOVIES}/${id}`, options)

  return await response.json()
}

export const updateMovie = async (id, data) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(`${ENDPOINT_MOVIES}/${id}`, options)

  return await response.json()
}