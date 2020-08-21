import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const Select = styled.select`
  margin-left: 0.5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  color: black;
  background-color: transparent;
  outline: none;
`;

const SortContainer = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  :hover {
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
  }
`;

const TableForm = ({
  applyColumn,
  applyFilter,
  applySort,
  headerKeys,
  data,
  Column,
  Sort,
}) => {
  return (
    <Container>
      <label htmlFor='namelist'>
        Filter by Name:
        <Select
          name='namelist'
          id='namelist'
          onChange={(e) => applyFilter(e.currentTarget.value)}
        >
          <option>All</option>
          {data.map((client) => (
            <option key={client.id} value={client.name}>
              {client.name}
            </option>
          ))}
        </Select>
      </label>
      <label htmlFor='columnlist'>
        Sort Columns:
        <Select
          name='columnlist'
          id='columnlist'
          value={Column}
          onChange={(e) => applyColumn(e.currentTarget.value)}
        >
          {Object.entries(headerKeys)
            .filter((key) => key[0] !== 'name')
            .map((key) => (
              <option key={key[0]} value={key[0]}>
                {key[1]}
              </option>
            ))}
        </Select>
      </label>
      <SortContainer onClick={() => applySort()}>
        {Sort === 'Highest' ? (
          <p>Sort Direction: &uArr;</p>
        ) : (
          <p>Sort Direction: &dArr;</p>
        )}
      </SortContainer>
    </Container>
  );
};

export default TableForm;
