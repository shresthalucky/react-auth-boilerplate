import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { locationStateType, userType } from '../../types';

interface PropTypes {
  user: userType;
}

const Login: React.FC<PropTypes> = ({ user }) => {
  const location = useLocation<locationStateType>();
  const { from } = location.state || { from: { pathname: '/' } };

  if (user.isAuthenticated) {
    return <Redirect to={from} />;
  }

  return <div>Login Page</div>;
};

export default Login;
