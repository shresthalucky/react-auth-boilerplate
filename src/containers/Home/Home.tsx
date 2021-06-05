import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { userType } from '../../types';

interface PropTypes {
  user: userType;
}

const Home: React.FC<PropTypes> = ({ user }) => {
  const location = useLocation();

  if (!user.isValid) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <div>Home Page</div>;
};

export default Home;
