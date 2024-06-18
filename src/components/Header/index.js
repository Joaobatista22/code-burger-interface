import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
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

  const { logout, userData } = useUser()

  const handleLinkClick = path => {
    navigate(path)
  }
  const logoutUser = () => {
    logout()
    navigate('/login')
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
        <PageLink onClick={() => handleLinkClick('/carrinho')}>
          <img src={CartImg} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink onClick={() => handleLinkClick('/perfil')}>
          <img src={PersonImg} alt="person" />
        </PageLink>
        <ContainerTax>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerTax>
      </ContainerRight>
    </Container>
  )
}

export default Header
