const JSONSERVER_URL = 'http://localhost:3000'

const ENDPOINT_MOVIES = `${JSONSERVER_URL}/movies`

export const fetchMovies = async () => {
  const response = await fetch(ENDPOINT_MOVIES)

  return await response.json()
}