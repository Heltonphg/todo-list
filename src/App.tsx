import React from 'react'
import { FormTodo } from './components/FormTodo'
import Header from './components/Header'
import GlobalStyles from './styles/global.styles'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <FormTodo />
      <GlobalStyles />
    </>
  )
}
