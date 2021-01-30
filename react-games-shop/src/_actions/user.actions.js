import { gamesConstants } from '../_constans';

const updateUserGames = (games, budget) => ({
  type: gamesConstants.UPDATE_USER_GAMES,
  games,
  budget,
});

export const userActions = {
  updateUserGames,
};
