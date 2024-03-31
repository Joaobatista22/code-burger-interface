import React from 'react'

import HomeLogo from '../../assets/pagelogo.svg'
import { Container, HomeImg } from './styles'
import CategoryCarousel from '../../components/CategoryCarousel'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logoHome" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
