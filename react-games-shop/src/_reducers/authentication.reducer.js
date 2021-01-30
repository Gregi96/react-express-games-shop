import { authConstants, gamesConstants } from '../_constans';
import update from 'react-addons-update';

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
const initialState = currentUser ? { loggingIn: true, currentUser } : {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.AUTH_LOGIN:
      return {
        loggingIn: true,
        currentUser: action.user,
      };
    case authConstants.AUTH_LOGOUT:
      return {};
    case gamesConstants.UPDATE_USER_GAMES:
      return update(state, {
        currentUser: {
          games: { $set: action.games },
          budget: { $set: action.budget },
        },
      });
    default:
      return state;
  }
};
