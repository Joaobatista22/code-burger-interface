import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/ProductsCap.svg'
import {
  Container,
  ProductsImg,
  CategoriesButton,
  ContainerMenuCategories,
  ContainerProducts
} from './styles'
import api from '../../services/api'
import { CardProduct } from '../../components'
import formatCurrency from '../../utils/formatCurrency'

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategories, setActiveCategories] = useState(0)
  const { state } = useLocation()

  useEffect(() => {
    if (state?.categoryId) {
      setActiveCategories(state.categoryId)
    }
  }, [state?.categoryId])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Tudo' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: productPricers } = await api.get('products')
      const formattedProducts = productPricers.map(product => ({
        ...product,
        formatedPrice: formatCurrency(product.price)
      }))
      setProducts(formattedProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setFilteredProducts(products)
    } else {
      const newFilterProducts = products.filter(
        product => product.category_id === activeCategories
      )
      setFilteredProducts(newFilterProducts)
    }
  }, [activeCategories, products])

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
      <ContainerProducts>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}
