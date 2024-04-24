import styled from 'styled-components'

export const Container = styled.div`
  background: #ffff;
  height: 62px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.2);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #555555;
  font-size: 16px;
  line-height: 19px;
`
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
export const ContainerTax = styled.div`
  p {
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #555555;
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9758a6;
  cursor: pointer;
`
