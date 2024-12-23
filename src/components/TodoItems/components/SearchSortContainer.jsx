import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  gap: 20px;
`;

export const SearchSortContainer = ({children, style}) => {
  return <Root style={style}>{children}</Root>
}