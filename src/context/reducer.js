import { types } from './types';

const idGenerator = () =>
  `${Math.floor(Math.random() * 64)}-${Math.floor(
    Math.random() * 64
  )}-${Math.floor(Math.random() * 64)}`;

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case types.USER_LOGIN:
      return { ...state, user: { loggedIn: true, detail: action.payload } };
    case types.USER_LOGOUT:
      return { ...state, user: { loggedIn: false } };
    case types.TERM_ADD:
      return {
        ...state,
        terminals: [
          ...state.terminals,
          { id: idGenerator(), ...action.payload },
        ],
      };
    case types.TERM_DEL:
      let newTerminalList = state.terminals.filter(
        (term) => term.id !== action.payload
      );
      return {
        ...state,
        terminals: [...newTerminalList],
      };
    default:
      return state;
  }
};
