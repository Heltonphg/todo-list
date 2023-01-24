import styled from 'styled-components'

interface ContainerProps {
  checked: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  width: 1.8rem;
  height: 1.7rem;

  align-items: center;
  justify-content: center;

  border-radius: 1rem;

  cursor: pointer;

  background: ${(props) => (props.checked ? 'var(--purpleDark)' : 'transparent')};
  border: ${(props) => (props.checked ? 'none' : '2px solid var(--blue)')};
`
