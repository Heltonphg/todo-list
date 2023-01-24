import React from 'react'
import { Todo } from '../../screens/TodoList'
import { Chebox } from '../Chebox'
import { Container, Title, TrashIcon } from './styles'

interface IItemTodoProps {
  item: Todo
  onDeleteTodo: (id: string) => void
  onCompletedTodo: (id: string) => void
}

export const ItemTodo: React.FC<IItemTodoProps> = ({ item, onDeleteTodo, onCompletedTodo }) => {
  return (
    <Container>
      <Chebox checked={item.completed} onClick={() => onCompletedTodo(item.id)} />
      <Title checked={item.completed}>{item.title}</Title>
      <TrashIcon onClick={() => onDeleteTodo(item.id)} />
    </Container>
  )
}
