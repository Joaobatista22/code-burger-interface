import styled from 'styled-components'

export const Container = styled.div`
  background: #ffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.2);
  border-radius: 25px;
  display: flex;
  gap: 12px;
  padding: 10px 30px 10px 10px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
`
export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  font-style: normal;
  font-weight: 600;
  padding-top: 10px;
  font-size: 18px;
  line-height: 19px;
  color: #000000;
`
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 900;
  padding-top: 30px;
  font-size: 21px;
  line-height: 21px;
  color: #000000;
`
