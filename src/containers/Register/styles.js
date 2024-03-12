import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const RegisterImage = styled.img`
  height: 100vh;
`

export const ContainerAcss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  gap: 3px;
  form {
    display: flex;
    flex-direction: column;
  }
`
export const Perros = styled.p`
  color: #f50000;
  margin: 5px;
`

export const ContainerItens = styled.div`
  background: #000000;
  width: 100%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  h1 {
    color: white;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
    line-height: 28px;
    text-align: center;
  }
  img {
  }
`

export const P = styled.p`
  color: white;
  font-size: 18px;
`

export const Input = styled.input`
  height: 29px;
  border-radius: 4px;
  padding-left: 7px;
  border: ${props => (props.error ? '2px solid #f50000' : 'none')};
  outline: none;
`

export const SignInLink = styled.p`
  color: #ffff;
  margin-top: 5px;
`
