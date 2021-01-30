import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const UserRoute = ({ component: Component, ...rest }) => {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const Role = currentUser ? currentUser.role : null;

  return (
    <Route
      {...rest}
      render={() => (Role === 'User' ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default UserRoute;
