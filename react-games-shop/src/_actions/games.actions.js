import { gamesConstants } from '../_constans';

const getGames = (games) => ({
  type: gamesConstants.GET_GAMES,
  games,
});

const deleteGame = (id) => ({
  type: gamesConstants.DELETE_GAME,
  id,
});

const updateGames = (games) => ({
  type: gamesConstants.UPDATE_GAME,
  games,
});

export const gamesActions = {
  getGames,
  deleteGame,
  updateGames,
};
