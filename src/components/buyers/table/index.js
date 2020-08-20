import React from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';

const Table = ({ headerKeys, data }) => {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader headerKeys={headerKeys} />
        </tr>
      </thead>
      <tbody>
        <TableBody data={data} />
      </tbody>
    </table>
  );
};

export default Table;
