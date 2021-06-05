import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { userType } from '../types';

interface PropTypes {
  children: any;
  user: userType;
}

export const AuthRoute = ({ children, user, ...rest }: PropTypes) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};
