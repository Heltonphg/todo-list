import React from 'react'
import { TodoList } from './screens/TodoList'
import GlobalStyles from './styles/global.styles'

export const App: React.FC = () => {
  return (
    <>
      <TodoList />
      <GlobalStyles />
    </>
  )
}
