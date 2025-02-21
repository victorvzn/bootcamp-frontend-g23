const API_URL = 'https://dummyjson.com'

export const login = async (username, password) => {
  const url = `${API_URL}/auth/login`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }

  const response = await fetch(url, options)

  return response.json()
}