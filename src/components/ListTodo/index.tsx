import { Line } from '../Line'
import { Container, Content, HeaderList, LabelCreateText, LabelDoneText } from './styles'

export const ListTodo: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderList>
          <LabelCreateText>Tarefas criadas</LabelCreateText>
          <LabelDoneText>Concluídas</LabelDoneText>
        </HeaderList>

        <Line />
      </Content>
    </Container>
  )
}
