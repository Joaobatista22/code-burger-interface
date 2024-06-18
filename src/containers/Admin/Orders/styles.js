import ReactSelect from 'react-select'
import styled from 'styled-components'
export const Container = styled.div`
  background: #efefef;
  height: 100vh;
  margin-left: 10rem;
  .css-1ex1afd-MuiTableCell-root {
    background-color: #3c3c3c;
    color: #ffff;
    font-weight: 600;
  }
  .css-i4bv87-MuiSvgIcon-root {
    color: #ffff;
  }
`

export const ProductsImg = styled.img`
  border-radius: 5px;
  width: 60px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;
  .css-13cymwt-control {
    cursor: pointer;
  }

  .css-tj5bde-Svg {
    color: #9758a6;
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
  .css-i4bv87-MuiSvgIcon-root {
    color: #ffff;
  }
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #9758a6' : 'none'};
  padding-bottom: 5px;
`
