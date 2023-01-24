import React, { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { Button, Form, Input } from './styles'

interface FormTodoProps {
  onCreateTodo: (title: string) => void
}

export const FormTodo: React.FC<FormTodoProps> = ({ onCreateTodo }) => {
  const [title, setTitle] = useState('')

  function createTodo(event: FormEvent) {
    event.preventDefault()
    onCreateTodo(title)
  }

  return (
    <Form onSubmit={createTodo}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        autoFocus
      />

      <Button onClick={createTodo}>
        <span>Criar</span>
        <PlusCircle size={22} />
      </Button>
    </Form>
  )
}
