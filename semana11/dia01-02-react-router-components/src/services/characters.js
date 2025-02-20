const BASE_URL = 'https://dragonball-api.com/api'

export const fetchCharacters = async () => {
  const url = `${BASE_URL}/characters`

  const response = await fetch(url)

  return await response.json()
}

export const getCharacter = async (id) => {
  const url = `${BASE_URL}/characters/${id}`

  const response = await fetch(url)

  return await response.json()
}