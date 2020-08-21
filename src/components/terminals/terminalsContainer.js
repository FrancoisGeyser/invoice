import React, { useContext, useState } from 'react';
import { Store } from '../../context/context';
import { types } from '../../context/types';

import TerminalsInput from './terminalsInput';
import TerminalDisplay from './terminalsDisplay';

const TerminalsRouteContainer = () => {
  const { state, dispatch, createAction } = useContext(Store);
  const { terminals } = state;
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');

  const submitDelAction = (id) => {
    id && dispatch(createAction(types.TERM_DEL, id));
  };

  const submit = () => {
    if (Name.length > 0 && Description.length > 0) {
      dispatch(
        createAction(types.TERM_ADD, {
          name: Name,
          description: Description,
        })
      );
      setName('');
      setDescription('');
    }
  };

  return (
    <>
      <TerminalsInput
        submit={submit}
        Name={Name}
        setName={setName}
        Description={Description}
        setDescription={setDescription}
      />
      <TerminalDisplay data={terminals} submitAction={submitDelAction} />
    </>
  );
};

export default TerminalsRouteContainer;
