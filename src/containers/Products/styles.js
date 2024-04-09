import styled from 'styled-components'

export const Container = styled.div``
export const ProductsImg = styled.img`
  width: 100%;
`

export const ContainerMenuCategories = styled.div`
  display: flex;
  justify-content: space-around;
`
export const CategoriesButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && ' 2px solid #9758a6'};
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  font-weight: bold;
  padding-bottom: 5px;
`
