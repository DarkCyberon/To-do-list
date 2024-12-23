import styled, {css} from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import {TodoItemCheckbox} from './TodoItemCheckbox';
import {useDeleteTodoItem} from '../../data/hooks/useData';
import {PriorityInput} from './PriorityInput';

const checkedCss = css`
  text-decoration: line-through;
`

const Title = styled.span(props => {
    return `
    font-size: 15px;
    width: 185px;
    overflow-wrap: break-word;
    ${props.checked ? checkedCss : ''};
  `;
})

const Delete = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const TodoItem = ({ title, checked, id, priority }) => {
  const {mutate} = useDeleteTodoItem();
  const onClickDeleteHandler = () => {
      if (window.confirm(`Удалить элемент ${title}?`)) {
          mutate({id});
      }
  }
  return (
    <TodoItemContainer>
      <TodoItemCheckbox checked={checked} disabled={false} id={id} priority={priority} />
      <Title checked={checked}>{title}</Title>
      <PriorityInput checked={checked} id={id} priority={priority} />
      <Delete onClick={onClickDeleteHandler} />
    </TodoItemContainer>
  )
}