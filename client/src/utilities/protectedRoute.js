import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../Context/authContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  // const jwt = localStorage.getItem("jwt")
  // console.log('jwt',jwt)

  if (user === null) {
    // if (jwt === null) {
  // if (jwt === "") {
    // if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
