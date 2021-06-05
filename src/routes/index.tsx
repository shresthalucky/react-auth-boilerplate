import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import { AuthRoute } from './auth-route';

const Routes = (props: any) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/login"
        render={renderProps => <Login {...renderProps} {...props} />}
      />

      <AuthRoute path="/" {...props}>
        <Switch>
          <Route
            path="/"
            render={renderProps => <Home {...renderProps} {...props} />}
          />

          {/* add other routes that requires authentication here */}
        </Switch>
      </AuthRoute>
    </Switch>
  </Router>
);

export default Routes;
