import React from 'react';
import styled from 'styled-components';

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  p:last-child {
    color: red;
    :hover {
      cursor: pointer;
    }
  }
`;
const DataRow = styled.div`
  display: flex;
  justify-content: flex-start;
  p:first-child {
    margin-right: 5rem;
  }
`;
const TerminalItem = styled.div`
  padding: 0rem 1rem;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 5px;
`;

const TerminalDisplayContainer = styled.div`
  max-height: 75%;
  overflow-y: scroll;
`;

const TerminalItemDisplay = ({ data, submitAction }) => {
  if (data.length === 0) {
    return <p>No data</p>;
  }
  return data.map((terminal) => {
    const { id, name, description } = terminal;

    return (
      <TerminalItem key={id}>
        <HeaderRow>
          <p>ID: {id}</p>
          <p onClick={() => submitAction(id)}>Delete</p>
        </HeaderRow>
        <DataRow>
          <p>Name: {name}</p>
          <p>Description: {description}</p>
        </DataRow>
      </TerminalItem>
    );
  });
};

const TerminalDisplay = ({ data, submitAction }) => {
  return (
    <TerminalDisplayContainer>
      <TerminalItemDisplay data={data} submitAction={submitAction} />
    </TerminalDisplayContainer>
  );
};

export default TerminalDisplay;
