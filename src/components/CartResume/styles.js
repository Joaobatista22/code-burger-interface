import styled from 'styled-components'

export const Container = styled.div`
  background: #ffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.2);
  border-radius: 20px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 5px 50px;
    font-size: 16px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    .title {
      grid-area: title;
      margin-bottom: 20px;
    }
    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }
    .delivery-tax {
      grid-area: delivery-tax;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }
  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 15px;
  }
`
