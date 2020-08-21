import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Store } from '../context/context';
import BuyersRouteContainer from '../components/buyers/buyersContainer';
import TerminalsRouteContainer from '../components/terminals/terminalsContainer';
import LoginRouteContainer from '../components/login';
import ErrorRouteContainer from '../components/error';
import RouterContainer from '../components/layout/routercontainer';

const ProtectedRoute = ({ children, ...rest }) => {
  const { state } = useContext(Store);
  const { user } = state;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const RouterComponent = () => {
  return (
    <RouterContainer>
      <Switch>
        <Route exact path='/'>
          <LoginRouteContainer />
        </Route>
        <ProtectedRoute path='/buyers'>
          <BuyersRouteContainer />
        </ProtectedRoute>
        <ProtectedRoute path='/terminal'>
          <TerminalsRouteContainer />
        </ProtectedRoute>
        <Route path='*'>
          <ErrorRouteContainer />
        </Route>
      </Switch>
    </RouterContainer>
  );
};

export default RouterComponent;
