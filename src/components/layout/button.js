import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

const ButtonOutline = styled.div`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 5px;
  width: 10rem;
  text-align: center;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

export default ({ children, clickHandler }) => (
  <ButtonContainer onClick={clickHandler}>
    <ButtonOutline>{children}</ButtonOutline>
  </ButtonContainer>
);
