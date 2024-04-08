import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`
export const CategoryImg = styled.img`
  width: 20%;
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const Image = styled.img`
  width: 240px;
  border-radius: 10px;
`
export const Button = styled.button`
  background-color: #9758a6;
  border-radius: 8px;
  width: 58%;
  padding: 6px;
  border: none;
  font-size: medium;
  color: #ffff;
  :hover {
    background-color: #9758ce;
    cursor: pointer;
    /* Altera a cor de fundo do botão quando o cursor está sobre ele */
  }
`
