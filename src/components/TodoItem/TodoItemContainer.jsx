import styled from 'styled-components';

const Root = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px 0
`

export const TodoItemContainer = ({children, style}) => {
  return <Root style={style}>{children}</Root>
}