import React from 'react'
import { FormTodo } from '../../components/FormTodo'
import Header from '../../components/Header'
import { ListTodo } from '../../components/ListTodo'

export const TodoList: React.FC = () => {
  return (
    <>
      <Header />
      <FormTodo />
      <ListTodo />
    </>
  )
}
