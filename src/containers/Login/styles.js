import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const LoginImage = styled.img`
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
  border: none;
  outline: none;
`

export const Button = styled.button`
  margin-top: 10px;
  height: 35px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: white;
  background: linear-gradient(to right, #8a2be2, #008000);
  background-size: 200% 100%;
  animation: gradientAnimation 5s ease infinite;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%; /* Inicia o gradiente à esquerda */
    }
    50% {
      background-position: 100% 50%; /* Move o gradiente para a direita */
    }
    100% {
      background-position: 0% 50%; /* Retorna o gradiente à posição inicial */
    }
  }
  &:active {
    background: linear-gradient(
      to right,
      #008000,
      #578622
    ); /* Altera a cor de fundo ao clicar */
  }
  &:hover {
    transform: scale(1.01);
    transform-origin: bottom;
  }
`

export const SignInLink = styled.p`
  color: #ffff;
  margin-top: 5px;
`
