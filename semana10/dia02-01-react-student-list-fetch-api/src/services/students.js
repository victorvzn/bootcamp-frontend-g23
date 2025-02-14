const MOCKAPI_URL = 'https://67ad6dbf3f5a4e1477dda225.mockapi.io'

const ENDPOINT_STUDENTS = `${MOCKAPI_URL}/students`

export const fetchStudents = async () => {
  const response = await fetch(ENDPOINT_STUDENTS) // Por defecto usa el método GET

  return await response.json()
}

export const createStudent = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Mimetypes
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(ENDPOINT_STUDENTS, options)

  return await response.json()
}

export const removeStudent = async (id) => {
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(`${ENDPOINT_STUDENTS}/${id}`, options)

  return await response.json()
}

export const updateStudent = async(data) => {
  const student = {
    name: data.name,
    city: data.city
  }

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  }


  const response = await fetch(`${ENDPOINT_STUDENTS}/${data.id}`, options)

  return await response.json()
}