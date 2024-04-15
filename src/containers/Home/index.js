import React from 'react'

import HomeLogo from '../../assets/pagelogo.svg'
import { Container, HomeImg } from './styles'
import { CategoryCarousel, OffersCarousel } from '../../components'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logoHome" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
