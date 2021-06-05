import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';

const Routes = (props: any) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/login"
        render={renderProps => <Login {...renderProps} {...props} />}
      />
      <Route
        path="/"
        render={renderProps => <Home {...renderProps} {...props} />}
      />

      {/* add other routes here */}
    </Switch>
  </Router>
);

export default Routes;
