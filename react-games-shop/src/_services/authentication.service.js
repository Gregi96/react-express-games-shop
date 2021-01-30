import { handleResponse } from './../_helpers';

const login = (username, password) => {
  const requestOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`/users/authenticate`, requestOption)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));

      return user;
    });
};

const logout = () => {
  localStorage.removeItem('currentUser');
};

export const authenticationService = {
  login,
  logout,
};
