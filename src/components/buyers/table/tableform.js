import React from 'react';

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
    <div>
      <label htmlFor='namelist'>
        Filter by Name:
        <select
          name='namelist'
          id='namelist'
          onChange={(e) => applyFilter(e.currentTarget.value)}
        >
          <option>All</option>
          {data.map((client) => (
            <option value={client.name}>{client.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor='columnlist'>
        Sort Columns:
        <select
          name='columnlist'
          id='columnlist'
          value={Column}
          onChange={(e) => applyColumn(e.currentTarget.value)}
        >
          <option>None</option>
          {Object.entries(headerKeys).map((key) => (
            <option value={key[0]}>{key[1]}</option>
          ))}
        </select>
      </label>
      <div onClick={() => applySort()}>Sort Direction: {Sort}</div>
    </div>
  );
};

export default TableForm;
