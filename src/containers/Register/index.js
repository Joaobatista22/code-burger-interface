import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '../../components/Button'
import api from '../../services/api'
import RegisterImg from '../../assets/register_img.svg'
import Logo from '../../assets/Login-Text.svg'
import {
  Container,
  RegisterImage,
  ContainerItens,
  P,
  Perros,
  Input,
  ContainerAcss,
  SignInLink
} from './styles'

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido!')
      .required('E-mail obrigatório!'),
    password: yup
      .string()
      .required('Senha obrigatória!')
      .min(6, 'A senha deve conter 6 digitos!'),
    confirmpassword: yup
      .string()
      .required('Senha obrigatória!')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
      .min(6)
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register Logo" />{' '}
      {/* Mantido o uso do RegisterImage */}
      <ContainerItens>
        <img src={Logo} alt="img logo" />
        <h1>Cadastre-se</h1>
        <ContainerAcss>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <P>Nome</P>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <Perros>{errors.name?.message}</Perros>
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
            <P>Confirmar Senha</P>
            <Input
              type="password"
              {...register('confirmpassword')}
              error={errors.confirmpassword?.message}
            />
            <Perros>{errors.confirmpassword?.message}</Perros>
            <Button type="submit" style={{ marginTop: 10 }}>
              Cadastrar
            </Button>
          </form>
          <SignInLink>
            Já possui conta?
            <a href="/cadastro"> Entrar</a>
          </SignInLink>
        </ContainerAcss>
      </ContainerItens>
    </Container>
  )
}
export default Register
