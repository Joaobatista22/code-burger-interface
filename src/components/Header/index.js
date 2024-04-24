import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import PersonImg from '../../assets/person.svg'
import CartImg from '../../assets/cart.svg'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerTax,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLinkClick = path => {
    navigate(path)
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => handleLinkClick('/')}
          isActive={location.pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => handleLinkClick('/produtos')}
          isActive={location.pathname.includes('/produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img src={CartImg} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={PersonImg} alt="person" />
        </PageLink>
        <ContainerTax>
          <p>Olá João</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerTax>
      </ContainerRight>
    </Container>
  )
}

export default Header
