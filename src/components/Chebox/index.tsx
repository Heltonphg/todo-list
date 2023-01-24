import React from 'react'
import { Check } from 'phosphor-react'
import { Container } from './styles'

interface CheboxProps {
  checked: boolean
}

export const Chebox: React.FC<CheboxProps> = ({ checked }) => {
  return <Container checked={checked}>{checked && <Check size={18} />}</Container>
}
