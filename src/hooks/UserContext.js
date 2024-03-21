import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types' // Importe PropTypes

// Criando o contexto
const UserContext = createContext()

// Componente de contexto Provider
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = infoData => {
    setUserData(infoData)
  }
  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

// Definindo a validação de tipo para a propriedade children
UserProvider.propTypes = {
  children: PropTypes.node // Valida que a propriedade children é do tipo node e é requerida
}

// Hook personalizado para utilizar o contexto
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider')
  }
  return context
}

// Componente consumidor do contexto
const ExampleComponent = () => {
  const { username, setUsername } = useUser()

  const handleInputChange = event => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <h1>Nome de Usuário: {username}</h1>
      <input
        type="text"
        placeholder="Digite seu nome de usuário"
        value={username}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default ExampleComponent
