import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Actors from '../actors';
import Categories from '../categories';
import Services from '../services';

function Routing() {
  return (
    <Switch>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
    </Switch>
  );
}

export default Routing;
