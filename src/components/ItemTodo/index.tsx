import React from 'react'
import { Todo } from '../../screens/TodoList'
import { Chebox } from '../Chebox'
import { Container, Title, TrashIcon } from './styles'

interface IItemTodoProps {
  item: Todo
}

export const ItemTodo: React.FC<IItemTodoProps> = ({ item }) => {
  return (
    <Container>
      <Chebox checked={item.completed} />
      <Title>{item.title}</Title>
      <TrashIcon />
    </Container>
  )
}
