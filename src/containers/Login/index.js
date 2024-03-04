import React from 'react'

import BurgerLogo from '../../assets/Login-Hamburguer.svg' // Renomeie o import para evitar conflito de nomes
import Logo from '../../assets/Login-Text.svg'
import {
  Container,
  LoginImage, // Renomeie o componente para evitar conflito de nomes
  ContainerItens,
  P,
  Input,
  Button,
  ContainerAcss,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={BurgerLogo} alt="Burger Logo" />
      <ContainerItens>
        <img src={Logo} alt="img logo" />
        <h1>Login</h1>
        <ContainerAcss>
          <P>Email</P>
          <Input />
          <P>Senha</P>
          <Input />
          <Button>Entrar</Button>
          <SignInLink>
            Não possui conta?
            <a href="/cadastro"> Cadastrar-se</a>
          </SignInLink>
        </ContainerAcss>
      </ContainerItens>
    </Container>
  )
}
export default Login
