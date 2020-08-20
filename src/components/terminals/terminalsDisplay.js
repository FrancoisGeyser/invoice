import React from 'react';
const TerminalDisplay = ({ data, submitAction }) => {
  if (data.length === 0) {
    return <p>No data</p>;
  }
  return data.map((terminal) => {
    const { id, name, description } = terminal;

    return (
      <div key={id}>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>description: {description}</p>
        <button onClick={() => submitAction(id)}>Delete</button>
      </div>
    );
  });
};

export default TerminalDisplay;
