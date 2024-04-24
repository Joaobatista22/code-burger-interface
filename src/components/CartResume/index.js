import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { Container } from './styles'
import { Button } from '../Button'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    )

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    try {
      await api.post('orders', { products: order })

      await toast.success('Pedido realizado com sucesso')
    } catch (error) {
      if (error.response) {
        toast.error('Erro do servidor ao tentar realizar o seu pedido.')
      } else if (error.request) {
        toast.error('Sem resposta do servidor ao tentar realizar o seu pedido.')
      } else {
        toast.error('Erro ao tentar realizar o seu pedido, tente novamente.')
      }
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button
        onClick={submitOrder}
        style={{ width: '100%', marginTop: 30, height: '3rem' }}
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}
