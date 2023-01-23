import { EmptyTodo } from '../EmptyTodo'
import { Container } from './styles'

export const ListTodo: React.FC = () => {
  return (
    <Container>
      <EmptyTodo />
    </Container>
  )
}
