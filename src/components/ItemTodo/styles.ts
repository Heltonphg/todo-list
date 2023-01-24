import { Trash } from 'phosphor-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  width: 100%;
  height: 4.3rem;

  gap: 1rem;

  border-radius: 8px;

  background: var(--gray-500);
`

export const Title = styled.p`
  color: var(--gray-100);
  font-size: 14px;
`

export const TrashIcon = styled(Trash)`
  cursor: pointer;
  color: var(--gray-100);

  width: 24px;
  height: 24px;

  &:hover {
    color: var(--danger);
    border-radius: 8px;
  }
`
