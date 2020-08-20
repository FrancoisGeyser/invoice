import React, { useState, useEffect } from 'react';
import Table from './table';
import TableForm from './table/tableform';

const dataFilter = (data, Column, Filter, Sort) => {
  if (Filter) {
    let newData = data.filter((item) => item.name === Filter);
    if (Column && Sort) {
      if (Sort === 'Highest') {
        return newData.sort((x, y) => y[Column] - x[Column]);
      } else if (Sort === 'Lowest') {
        return newData.sort((x, y) => x[Column] - y[Column]);
      }
    }
    return newData;
  } else if (Column && Sort) {
    if (Sort === 'Highest') {
      return data.sort((x, y) => y[Column] - x[Column]);
    } else if (Sort === 'Lowest') {
      return data.sort((x, y) => x[Column] - y[Column]);
    }
  }
  return data;
};

const BuyersDisplay = ({ data }) => {
  const [Filter, setFilter] = useState(null);
  const [Column, setColumn] = useState('averageBill');
  const [Sort, setSort] = useState('Highest');
  let Data = dataFilter(data, Column, Filter, Sort);
  const headerKeys = {
    id: 'Customer id',
    name: 'Name',
    averageBill: 'Average Bill',
    numberPurchases: 'Number of purchases',
    totalRevenue: 'Total revenue',
  };

  const applyFilter = (name) => {
    name === 'All' ? setFilter(null) : setFilter(name);
  };

  const applyColumn = (column) => {
    column === 'None' ? setColumn('id') : setColumn(column);
  };

  const applySort = () => {
    Sort === 'Highest' ? setSort('Lowest') : setSort('Highest');
  };

  useEffect(() => {
    Data = dataFilter(data, Column, Filter, Sort);
  }, [data, Column, Filter, Sort]);

  return (
    <>
      <TableForm
        headerKeys={headerKeys}
        data={data}
        applyColumn={applyColumn}
        applyFilter={applyFilter}
        applySort={applySort}
        Column={Column}
        Sort={Sort}
      />
      <Table headerKeys={headerKeys} data={Data} />
    </>
  );
};

export default BuyersDisplay;
