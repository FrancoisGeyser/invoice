import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const TableBody = ({ data }) => {
  let { url } = useRouteMatch();
  return (
    data &&
    data.map(({ id, name, averageBill, numberPurchases, totalRevenue }) => {
      return (
        <tr key={id}>
          <td>
            <Link to={`${url}/${id}`}>{id}</Link>
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
