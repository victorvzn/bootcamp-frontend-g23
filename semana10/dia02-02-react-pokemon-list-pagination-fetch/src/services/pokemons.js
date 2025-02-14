const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=8'

export const fetchPokemons = async () => {
  const response = await fetch(POKEAPI_URL)

  return await response.json()
}