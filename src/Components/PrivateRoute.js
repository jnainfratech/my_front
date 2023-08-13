import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, element, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;