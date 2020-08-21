import React from 'react';
import styled from 'styled-components';
import TableHeader from './tableheader';
import TableBody from './tablebody';

const TableContainer = styled.table`
  width: 100%;
  th {
    height: 50px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.gold};
  }
  td {
    padding: 0.5rem 0;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.gold};
  }
  tr:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.gold};
  }
`;

const Table = ({ headerKeys, data, activeLink }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <TableHeader headerKeys={headerKeys} />
        </tr>
      </thead>
      <tbody>
        <TableBody data={data} activeLink={activeLink} />
      </tbody>
    </TableContainer>
  );
};

export default Table;
