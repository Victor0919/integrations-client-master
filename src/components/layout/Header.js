import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

const Header = () => {
  const authContext = useContext(AuthContext)
  const { authenticatedUser, user, logout } = authContext

  useEffect(() => {
    authenticatedUser()
    // eslint-disable-next-line
  }, [])

  return (
    <header className="app-header">
      {user && (
        <p className="nombre-usuario">
          Hola <span>{user.name}</span>
        </p>
      )}
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" onClick={logout}>
          Cerrar sesión
        </button>
      </nav>
    </header>
  )
}

export default Header
