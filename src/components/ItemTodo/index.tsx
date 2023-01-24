import React from 'react'
import { Trash } from 'phosphor-react'
import { Todo } from '../../screens/TodoList'
import { Chebox } from '../Chebox'
import { Container, Title } from './styles'

interface IItemTodoProps {
  item: Todo
}

export const ItemTodo: React.FC<IItemTodoProps> = ({ item }) => {
  return (
    <Container>
      <Chebox />
      <Title>{item.title}</Title>
      <Trash size={20} />
    </Container>
  )
}
