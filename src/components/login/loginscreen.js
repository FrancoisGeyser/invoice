import React from 'react';
import styled from 'styled-components';
import Button from '../layout/button';
import Input from '../layout/input';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LogIn = ({
  handleSubmit,
  Name,
  Pass,
  NameError,
  PassError,
  setName,
  setPass,
}) => {
  return (
    <Container>
      <p>Please log in</p>
      <FormContainer>
        <Input
          id='name'
          type='text'
          placeholder='Please enter github user name'
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id='pass'
          type='password'
          placeholder='Please enter password'
          value={Pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </FormContainer>
      <Button
        clickHandler={() => {
          handleSubmit();
        }}
      >
        Log in
      </Button>
      <p style={{ color: 'red' }}>
        {NameError}
        {PassError}
      </p>
    </Container>
  );
};

export default LogIn;
