import React, { useContext, useState } from 'react';
import { Store } from '../context/context';
import { types } from '../context/types';
import API from '../components/user/API';

const LoggedOut = ({ handleUser }) => {
  const [Name, setName] = useState('');
  const [Pass, setPass] = useState('');
  const [NameError, setNameError] = useState(null);
  const [PassError, setPassError] = useState(null);

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
  return (
    <>
      <p>Please log in</p>
      <div>
        <label htmlFor='name'>
          <input
            id='name'
            type='text'
            placeholder='Please enter github user name'
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          {NameError}
        </label>
        <label htmlFor='pass'>
          <input
            id='pass'
            type='password'
            placeholder='Please enter password'
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {PassError}
        </label>
      </div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Log in
      </button>
    </>
  );
};

const LoggedIn = ({ handleUser }) => {
  return (
    <>
      <p>Please use the button to log out</p>
      <button
        onClick={() => {
          handleUser(false);
        }}
      >
        Log out
      </button>
    </>
  );
};

const LoginRouteContainer = () => {
  const { state, dispatch, createAction } = useContext(Store);
  const { user } = state;

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

  return user.loggedIn ? (
    <LoggedIn handleUser={handleUser} />
  ) : (
    <LoggedOut handleUser={handleUser} />
  );
};

export default LoginRouteContainer;
