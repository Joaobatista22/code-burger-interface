import React from 'react'

import { Container, ContainerItems } from './styles'
import Orders from './Orders'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import { SideMenuAdmin } from '../../components'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin path={location.pathname} />
      <ContainerItems>
        {location.pathname === paths.Order && <Orders />}
        {location.pathname === paths.Products && <ListProducts />}
        {location.pathname === paths.NewProduct && <NewProduct />}
        {location.pathname === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  )
}
