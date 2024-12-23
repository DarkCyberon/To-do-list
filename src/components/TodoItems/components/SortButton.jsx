import React from 'react';
import styled, {css} from 'styled-components';

const selectedCss = css`
  opacity: 1;
  transition: opacity 0.3s;
`

const nonSelectedCss = css`
  opacity: 0.5;
  transition: opacity 0.3s;
`

const Button = styled.button(props => {
  return `
    font-family: Inter-Bold;
    padding: 5px;
    border: 2px solid #413F3F; 
    border-radius: 6px;
    &::placeholder {
      font-size: 15px;
      color: #8B7F73;
    }
    ${props.isSorted ? selectedCss : nonSelectedCss};
  `;
})

export const SortButton = ({onClick, isSorted}) => {
  return (
    <Button onClick={onClick} isSorted={isSorted} title="Сортировка по приоритету">Сортировка</Button>
  );
};