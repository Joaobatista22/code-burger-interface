import React from 'react'
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <Container>
      <LoginImage src={BurgerLogo} alt="Burger Logo" />
      <ContainerItens>
        <img src={Logo} alt="img logo" />
        <h1>Login</h1>
        <ContainerAcss>
          <form onSubmit={handleSubmit(onSubmit)}>
            <P>Email</P>
            <Input type="email" {...register('email')} />
            <P>Senha</P>
            <Input type="password" {...register('password')} />
            <Button type="submit">Entrar</Button>
          </form>
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
