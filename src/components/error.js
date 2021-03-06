import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const ErrorRouteContainer = () => {
  return (
    <Container>
      <h3>This is not the page you were looking for...</h3>
    </Container>
  );
};

export default ErrorRouteContainer;
