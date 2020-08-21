import React, { useContext, useState } from 'react';
import { Store } from '../../context/context';
import { types } from '../../context/types';
import API from '../../lib/API';
import LogOut from './logoutscreen';
import LogIn from './loginscreen';

const LoginRouteContainer = () => {
  const { state, dispatch, createAction } = useContext(Store);
  const { user } = state;
  const [Name, setName] = useState('');
  const [Pass, setPass] = useState('');
  const [NameError, setNameError] = useState(null);
  const [PassError, setPassError] = useState(null);

  const handleUser = (authData) => {
    const logIn = () => {
      dispatch(
        createAction(types.USER_LOGIN, {
          userName: authData.name,
          avatar: authData.avatar_url,
        })
      );
    };
    authData ? logIn() : dispatch(createAction(types.USER_LOGOUT));
  };

  const handleSubmit = () => {
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const githubUser = new API();
    const userData = githubUser.fetchUser(Name);

    if (passRegex.test(Pass)) {
      setPassError(null);
      userData.then((res) => {
        if (res.name !== undefined) {
          handleUser(res);
        } else setNameError('User does not exist');
      });
    } else {
      setPassError('Password Error');
    }
  };

  return user.loggedIn ? (
    <LogOut handleUser={handleUser} />
  ) : (
    <LogIn
      handleSubmit={handleSubmit}
      Name={Name}
      setName={setName}
      Pass={Pass}
      setPass={setPass}
      NameError={NameError}
      PassError={PassError}
    />
  );
};

export default LoginRouteContainer;
