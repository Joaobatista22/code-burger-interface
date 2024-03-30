import React from 'react'

import HomeLogo from '../../assets/loginBackgrond.jpg'
import { Container, HomeImg } from './styles'
import CategoryCarousel from '../../components/CategoryCarousel'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logoHome" />

      <HomeImg src={HomeLogo} alt="logohome" />

      <CategoryCarousel />
    </Container>
  )
}

export default Home
