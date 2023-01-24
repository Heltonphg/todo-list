import React, { useState } from 'react'
import { FormTodo } from '../../components/FormTodo'
import Header from '../../components/Header'
import { ListTodo } from '../../components/ListTodo'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: false
    }
  ])

  return (
    <>
      <Header />
      <FormTodo />
      <ListTodo todos={todos} />
    </>
  )
}
