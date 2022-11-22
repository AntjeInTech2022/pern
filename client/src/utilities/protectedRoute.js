import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../Context/authContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user === null) {
    // if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
