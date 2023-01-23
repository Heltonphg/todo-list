import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-top: -1.5rem;

  gap: 1.2rem;
`

export const Input = styled.input`
  width: 39rem;
  height: 3.375rem;

  background: var(--gray-500);
  color: var(--gray-200);

  border: 1px solid var(--gray-700);
  border-radius: 8px;

  padding: 0 1rem;

  ::placeholder {
    color: var(--gray-300);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--purple);
  }
`

export const Button = styled.button`
  display: flex;

  width: 5.625rem;
  height: 3.25rem;

  padding: 0 10px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;

  background: var(--blueDark);
  color: var(--gray-100);

  gap: 0.3rem;

  cursor: pointer;

  transition: all 0.3s ease-out;

  &:hover {
    background: var(--blue);
  }
`
