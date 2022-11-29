import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../Context/authContext';
import useLocalStorage from './useLocalStorage';

const ProtectedRoute = ({ children }) => {

  // const [auth, setAuth] = useLocalStorage()


  const { user } = useContext(AuthContext);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
