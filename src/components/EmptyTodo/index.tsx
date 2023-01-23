import React from 'react'
import clipBoard from '../../assets/Clipboard.png'
import { Container, Image, Title, SubTitle } from './styles'

export const EmptyTodo: React.FC = () => {
  return (
    <Container>
      <Image src={clipBoard} />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <SubTitle> Crie tarefas e organize seus itens a fazer</SubTitle>
    </Container>
  )
}
