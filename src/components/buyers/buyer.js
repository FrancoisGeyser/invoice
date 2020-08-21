import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Table from '../table';
import Title from '../layout/title';

const Container = styled.div`
  margin: 1rem auto;
`;

const BackButton = styled.p`
  color: red;
  font-weight: bold;
  margin: 1rem 0;
`;

const BuyerRouteContainer = ({ data }) => {
  const { id } = useParams();
  const clientData = data.filter((client) => client.id == id);
  const headerKeys = {
    id: 'Customer id',
    name: 'Name',
    averageBill: 'Average Bill',
    numberPurchases: 'Number of purchases',
    totalRevenue: 'Total revenue',
  };
  return (
    <Container>
      <Link to='/buyers'>
        <BackButton>Back to Buyers</BackButton>
      </Link>
      <Title>Buyer Details</Title>
      <Table headerKeys={headerKeys} data={clientData} activeLink={false} />
    </Container>
  );
};

export default BuyerRouteContainer;
