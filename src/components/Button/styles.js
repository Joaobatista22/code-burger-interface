import styled from 'styled-components'

export const StyledButton = styled.button`
  margin-top: 20px;
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
