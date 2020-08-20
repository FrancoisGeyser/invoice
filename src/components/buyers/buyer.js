import React from 'react';
import { Link, useParams } from 'react-router-dom';

const TableHeader = () => {
  const header = [
    'Customer id',
    'Name',
    'Average Bill',
    'Number of purchases',
    'Total revenue',
  ];

  return header.map((key, index) => {
    return <th key={index}>{key}</th>;
  });
};

const TableBody = ({ data }) => {
  return (
    data &&
    data.map(({ id, name, averageBill, numberPurchases, totalRevenue }) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{averageBill}</td>
          <td>{numberPurchases}</td>
          <td>{totalRevenue}</td>
        </tr>
      );
    })
  );
};

const BuyerRouteContainer = ({ data }) => {
  const { id } = useParams();
  const clientData = data.filter((client) => client.id == id);
  return (
    <>
      <Link to='/buyers'>back</Link>
      <table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <TableBody data={clientData} />
        </tbody>
      </table>
    </>
  );
};

export default BuyerRouteContainer;
