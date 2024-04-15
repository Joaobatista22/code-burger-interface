import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import BurgerLogo from '../../assets/Login-Hamburguer.svg'
import Logo from '../../assets/Login-Text.svg'
import { Button } from '../../components'
import {
  Container,
  LoginImage,
  ContainerItens,
  P,
  Perros,
  Input,
  ContainerAcss,
  SignInLink
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido!')
      .required('E-mail obrigatório!'),
    password: yup
      .string()
      .required('Senha obrigatória!')
      .min(6, 'A senha deve conter no mínimo 6 caracteres!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { data } = await api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })

      putUserData(data)
      toast.success('Login realizado com sucesso!')
      // Redireciona para a página principal do site após o login ser bem sucedido
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      toast.error('Erro no login, verifique seus dados!')
      console.error('Erro ao fazer login:', error)
    }
  }

  return (
    <Container>
      <LoginImage src={BurgerLogo} alt="Burger Logo" />
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
            {errors.email && <Perros>{errors.email.message}</Perros>}
            <P>Senha</P>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            {errors.password && <Perros>{errors.password.message}</Perros>}
            <Button type="submit" style={{ marginTop: 10 }}>
              Entrar
            </Button>
          </form>
          <SignInLink>
            Não possui conta?{' '}
            <Link
              style={{ textDecoration: 'none', color: '#AD0EC2' }}
              to="/register"
            >
              Cadastrar-se
            </Link>
          </SignInLink>
        </ContainerAcss>
      </ContainerItens>
    </Container>
  )
}
