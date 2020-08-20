import React, { useContext } from 'react';
import { Store } from '../../context/context';
import { types } from '../../context/types';

import TerminalsInput from './terminalsInput';
import TerminalDisplay from './terminalsDisplay';

const TerminalsRouteContainer = () => {
  const { state, dispatch, createAction } = useContext(Store);
  const { terminals } = state;

  const submitAddAction = (payload) => {
    payload && dispatch(createAction(types.TERM_ADD, payload));
  };
  const submitDelAction = (id) => {
    id && dispatch(createAction(types.TERM_DEL, id));
  };

  return (
    <>
      <TerminalsInput submitAction={submitAddAction} />
      <TerminalDisplay data={terminals} submitAction={submitDelAction} />
    </>
  );
};

export default TerminalsRouteContainer;
