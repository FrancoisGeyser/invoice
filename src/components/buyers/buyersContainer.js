import React, { useContext } from 'react';
import { Store } from '../../context/context';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Buyer from './buyer';
import BuyersDisplay from './buyersDisplay';

const BuyersRouteContainer = () => {
  const { state } = useContext(Store);
  const { buyers } = state;
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <BuyersDisplay data={buyers} />
      </Route>
      <Route path={`${path}/:id`}>
        <Buyer data={buyers} />
      </Route>
    </Switch>
  );
};

export default BuyersRouteContainer;
