import React from 'react';
import {styled} from 'styled-components';

const Input = styled.input`
  width: 300px;
  &::placeholder {
    font-size: 15px;
    color: rgba(63,63,63,0.6);
  }
`;

export const SearchInput = ({value, setValue, setSortedItems}) => {
  const onInputChange = (event) => {
    if (setValue) { 
      setValue(event.nativeEvent.target.value);
      setSortedItems(null);
    }
  }

  return <Input value={value} onChange={onInputChange} placeholder='Поиск' />
}