import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types' // Importe PropTypes

// Criando o contexto
const CartContext = createContext()

// Componente de contexto Provider
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProduts] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(
      produto => produto.id === product.id
    )

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProduts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProduts(newCartProducts)
    }
    await localStorage.setItem(
      'codeburger:cartInfo',
      JSON.stringify(newCartProducts)
    )
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')
      if (clientCartData) {
        setCartProduts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])
  return (
    <CartContext.Provider value={{ putProductInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}
// Definindo a validação de tipo para a propriedade children
CartProvider.propTypes = {
  children: PropTypes.node // Valida que a propriedade children é do tipo node e é requerida
}

// Hook personalizado para utilizar o contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um CartProvider')
  }
  return context
}

// Componente consumidor do contexto
const ExampleComponent = () => {
  const { username, setUsername } = useCart()

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
