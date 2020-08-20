import React, { useState } from 'react';

const TerminalsInput = ({ submitAction }) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');

  const submit = () => {
    if (Name.length > 0 && Description.length > 0) {
      submitAction({
        name: Name,
        description: Description,
      });
      setName('');
      setDescription('');
    }
  };
  return (
    <div>
      <input
        name='name'
        value={Name}
        placeholder='Enter Name'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        name='description'
        value={Description}
        placeholder='Enter decscription'
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={() => submit()}>Add</button>
    </div>
  );
};

export default TerminalsInput;
