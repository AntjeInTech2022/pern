import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../Context/authContext';


const ProtectedRoute2 = ({ children }) => {

  // const [auth, setAuth] = useLocalStorage()


  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/profile" />;
  }
  return children;
};

export default ProtectedRoute2;