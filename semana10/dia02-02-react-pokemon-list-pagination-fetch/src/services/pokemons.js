const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemons = async (page = 1) => {
  const limit = 9
  const offset = (page - 1) * limit

  const response = await fetch(`${POKEAPI_URL}?offset=${offset}&limit=${limit}`)

  const data = await response.json()

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

    return {
      ...pokemon,
      id,
      image
    }
  })

  // const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'

  return {
    ...data,
    results: dataResults
  }
}