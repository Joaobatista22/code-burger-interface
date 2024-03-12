import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '../../components/Button'
import api from '../../services/api'
import RegisterImg from '../../assets/register_img.svg' // Renomeie o import para evitar conflito de nomes
import Logo from '../../assets/Login-Text.svg'
import {
  Container,
  RegisterImage, // Renomeie o componente para evitar conflito de nomes
  ContainerItens,
  P,
  Perros,
  Input,
  ContainerAcss,
  SignInLink
} from './styles'

function Register() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido!')
      .required('E-mail obrigatório!'),
    password: yup
      .string()
      .required('Senha obrigatória!')
      .min(6, 'A senha deve conter 6 digitos!')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register Logo" />
      <ContainerItens>
        <img src={Logo} alt="img logo" />
        <h1>Login</h1>
        <ContainerAcss>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <P>Email</P>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Perros>{errors.email?.message}</Perros>
            <P>Senha</P>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <Perros>{errors.password?.message}</Perros>
            <Button type="submit" style={{ marginTop: 10 }}>
              Entrar
            </Button>
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
export default Register
