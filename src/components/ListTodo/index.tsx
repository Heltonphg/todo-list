import { Todo } from '../../screens/TodoList'
import { EmptyTodo } from '../EmptyTodo'
import { ItemTodo } from '../ItemTodo'
import { Line } from '../Line'
import { Container, Content, HeaderList, LabelCreateText, LabelDoneText } from './styles'

interface IListTodoProps {
  todos: Todo[]
}

export const ListTodo: React.FC<IListTodoProps> = ({ todos }) => {
  return (
    <Container>
      <Content>
        <HeaderList>
          <LabelCreateText>Tarefas criadas</LabelCreateText>
          <LabelDoneText>Concluídas</LabelDoneText>
        </HeaderList>

        <Line />
        {todos.length > 0 ? (
          todos.map((todo) => <ItemTodo key={todo.id} item={todo} />)
        ) : (
          <EmptyTodo />
        )}
      </Content>
    </Container>
  )
}
