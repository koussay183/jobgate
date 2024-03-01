import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element, ...rest }) => {
  const token = Cookies.get('token');

  return token ? <Route {...rest} element={element} /> : <Navigate to="/login/c" replace />;
};

export default PrivateRoute;