import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/ProductsCap.svg'
import {
  Container,
  ProductsImg,
  CategoriesButton,
  ContainerMenuCategories
} from './styles'
import api from '../../services/api'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategories, setActiveCategories] = useState(0)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Tudo' }, ...data]
      setCategories(newCategories)
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logoHome" />
      <ContainerMenuCategories>
        {categories &&
          categories.map(category => (
            <CategoriesButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategories === category.id}
              onClick={() => {
                setActiveCategories(category.id)
              }}
            >
              {category.name}
            </CategoriesButton>
          ))}
      </ContainerMenuCategories>
    </Container>
  )
}

export default Products
