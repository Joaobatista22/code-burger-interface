import React from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'
export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  const addToCart = () => {
    putProductInCart(product)
    toast.success('Produto adicionado ao carrinho!')
  }

  return (
    <Container>
      <Image src={product.url} alt="Img do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={addToCart}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
