import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.2);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 10px;
  grid-gap: 10px 15px;
  img {
    border-radius: 10px;
    width: 120px;
  }
  p {
    margin-top: 5px;
    font-size: 19px;
    color: #000000;
  }
  .quantity-container {
    display: flex;
    gap: 20px;
    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    p {
      margin-top: 5px;
    }
  }
`
export const EmptyCart = styled.p`
  padding: 30px;
  text-align: center;
  font-weight: bold;
`
