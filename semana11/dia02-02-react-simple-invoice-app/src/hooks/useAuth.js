import { useState } from "react"

export const useAuth = () => {
  const [user, setUser] = useState(
    () => {
      return JSON.parse(localStorage.getItem('auth')) ?? null
    }
  )

  const isAuth = Boolean(user?.email) // Si estas logueado

  const setAuth = (data) => {
    setUser(data)

    localStorage.setItem('auth', JSON.stringify(data))
  }

  const logout = () => localStorage.removeItem('auth')

  return {
    user,
    isAuth,
    setAuth,
    logout
  }
}