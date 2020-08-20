import React, { useReducer } from 'react';
import { Store } from './context';
import { initialState } from './initialstate';
import { reducer } from './reducer';

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createAction = (type, payload) => {
    return {
      type,
      payload,
    };
  };
  return (
    <Store.Provider value={{ state, dispatch, createAction }}>
      {props.children}
    </Store.Provider>
  );
};

export default StoreProvider;
