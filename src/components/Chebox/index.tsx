import React from 'react'
import { Check } from 'phosphor-react'
import { Container } from './styles'

interface CheboxProps {
  checked: boolean
  onClick: () => void
}

export const Chebox: React.FC<CheboxProps> = ({ checked, ...rest }) => {
  return (
    <Container checked={checked} {...rest}>
      {checked && <Check size={18} />}
    </Container>
  )
}
