import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  width: 45.4rem;
  height: 100vh;
`

export const HeaderList = styled.div`
  display: flex;
  width: 100%;

  margin-top: 4rem;

  flex-direction: row;
  justify-content: space-between;
`

export const LabelCreateText = styled.p`
  color: var(--blue);

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
`

export const LabelDoneText = styled.p`
  color: var(--purple);

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
`
export const ValueText = styled.span`
  color: var(--gray-100);
  font-size: 14px;

  padding: 4px 10px;

  border-radius: 8px;
  background: var(--gray-400);
  border-radius: 999px;

  margin-left: 10px;

  flex: none;
  order: 1;
  flex-grow: 0;
`
