import { Trash } from 'phosphor-react'
import styled from 'styled-components'

interface TitleProps {
  checked: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  & + & {
    margin-top: 14px;
  }

  width: 100%;
  height: 4.3rem;

  gap: 1rem;

  border-radius: 8px;

  background: var(--gray-500);
`

export const Title = styled.p<TitleProps>`
  color: var(--gray-100);
  width: 90%;
  font-size: 14px;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
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
