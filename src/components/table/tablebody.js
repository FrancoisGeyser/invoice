import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Id = styled.p`
  margin: 0;
  padding: 0;
  :hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const TableBody = ({ data, activeLink }) => {
  let { url } = useRouteMatch();
  return (
    data &&
    data.map(({ id, name, averageBill, numberPurchases, totalRevenue }) => {
      return (
        <tr key={id}>
          <td>
            {activeLink ? (
              <Link to={`${url}/${id}`}>
                <Id>{id}</Id>
              </Link>
            ) : (
              id
            )}
          </td>
          <td>{name}</td>
          <td>{averageBill}</td>
          <td>{numberPurchases}</td>
          <td>{totalRevenue}</td>
        </tr>
      );
    })
  );
};

export default TableBody;
