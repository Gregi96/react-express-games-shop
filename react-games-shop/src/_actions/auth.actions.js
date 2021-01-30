import { authConstants } from '../_constans';

const authLogin = (user) => ({
  type: authConstants.AUTH_LOGIN,
  user,
});

const authLogout = () => ({
  type: authConstants.AUTH_LOGOUT,
});

export const authActions = {
  authLogin,
  authLogout,
};
