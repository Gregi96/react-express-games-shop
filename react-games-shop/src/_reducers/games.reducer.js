import { gamesConstants } from '../_constans';

export const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case gamesConstants.GET_GAMES:
      return action.games;
    case gamesConstants.DELETE_GAME:
      return state.filter((item) => item.id !== action.id);
    case gamesConstants.UPDATE_GAME:
      return action.games;
    default:
      return state;
  }
};
