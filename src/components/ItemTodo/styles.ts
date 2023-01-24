import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  width: 100%;
  height: 4.3rem;

  border-radius: 8px;

  background: var(--gray-500);
`

export const Title = styled.p`
  color: var(--gray-100);
  font-size: 14px;
`
