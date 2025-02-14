const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=9'

export const fetchPokemons = async () => {
  const response = await fetch(POKEAPI_URL)

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