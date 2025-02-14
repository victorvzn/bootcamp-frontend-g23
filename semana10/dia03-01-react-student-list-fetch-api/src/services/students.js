const MOCKAPI_URL = 'https://67ad6dbf3f5a4e1477dda225.mockapi.io/students'

export const fetchStudents = async () => {
  const response = await fetch(MOCKAPI_URL)

  return await response.json()
}