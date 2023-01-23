import React from 'react'
import logoTodo from '../../assets/Logo.png'
import { Container, Logo } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoTodo} />
    </Container>
  )
}

export default Header
