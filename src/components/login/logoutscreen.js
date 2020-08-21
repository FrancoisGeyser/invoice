import React from 'react';
import Button from '../layout/button';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogOut = ({ handleUser }) => {
  return (
    <Container>
      <p>Please use the button to log out</p>
      <Button clickHandler={() => handleUser(false)}>Log out</Button>
    </Container>
  );
};

export default LogOut;
