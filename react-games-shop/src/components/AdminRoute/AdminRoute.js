import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const Role = currentUser ? currentUser.role : null;

  return (
    <Route
      {...rest}
      render={() => (Role === 'Admin' ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default AdminRoute;
