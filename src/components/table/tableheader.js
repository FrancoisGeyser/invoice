import React from 'react';

const TableHeader = ({ headerKeys }) => {
  return Object.entries(headerKeys).map((key) => (
    <th key={key[0]} value={key[0]}>
      {key[1]}
    </th>
  ));
};

export default TableHeader;
