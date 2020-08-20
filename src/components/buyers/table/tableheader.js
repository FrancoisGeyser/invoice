import React from 'react';

const TableHeader = ({ headerKeys }) => {
  let keys = [];
  for (let key in headerKeys) {
    keys.push(key);
  }
  return keys.map((key, index) => <th key={index}>{key}</th>);
};

export default TableHeader;
