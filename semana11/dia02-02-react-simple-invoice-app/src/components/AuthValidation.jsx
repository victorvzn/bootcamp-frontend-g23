import { Outlet, useNavigate } from "react-router"

import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"

const AuthValidation = () => {
  const { isAuth } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      // Redireccionamos al login
      navigate('/')
    }
  }, [isAuth])

  return <Outlet />
}

export default AuthValidation