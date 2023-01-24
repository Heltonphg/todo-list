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
  const [todos, setTodos] = useState<Todo[]>([])

  function createNewTodo(title: string) {
    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  function deleteTodoById(id: string) {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  function completedTodoById(id: string) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <>
      <Header />
      <FormTodo onCreateTodo={createNewTodo} />
      <ListTodo todos={todos} onDeleteTodo={deleteTodoById} onCompletedTodo={completedTodoById} />
    </>
  )
}
