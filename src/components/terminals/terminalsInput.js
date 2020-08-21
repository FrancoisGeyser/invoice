import React from 'react';
import styled from 'styled-components';
import Input from '../layout/input';
import Button from '../layout/button';
import Title from '../layout/title';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
`;

const TerminalsInput = ({
  Name,
  setName,
  Description,
  setDescription,
  submit,
}) => {
  return (
    <>
      <Title>Terminals</Title>
      <InputContainer>
        <Input
          name='name'
          value={Name}
          placeholder='Enter Name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name='description'
          value={Description}
          placeholder='Enter decscription'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button clickHandler={() => submit()}>Add</Button>
      </InputContainer>
    </>
  );
};

export default TerminalsInput;
