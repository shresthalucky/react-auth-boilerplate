import React from 'react';

import Routes from './routes';
import { userType } from './types';

const App = () => {
  const user: userType = {
    isAuthenticated: true, // true for valid user and false for invalid user
  };

  return <Routes user={user} />;
};

export default App;
