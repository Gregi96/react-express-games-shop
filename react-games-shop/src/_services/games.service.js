import { authHeader } from '../_helpers';
import { handleResponse } from './../_helpers';

const getGames = () => {
  const requestOption = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`/games`, requestOption).then((response) => response.json());
};

const deleteGame = (id) => {
  const requestOption = {
    method: 'DELETE',
  };
  return fetch(`/games/${id}`, requestOption).then((response) => response);
};

const updateGame = (id, img, price, title) => {
  const requestOption = {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify({ id, title, img, price }),
  };

  return fetch(`/games`, requestOption).then(handleResponse);
};

const addGame = (img, price, title) => {
  const requestOption = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ title, img, price }),
  };

  return fetch('/games', requestOption).then(handleResponse);
};

export const gamesService = {
  getGames,
  deleteGame,
  updateGame,
  addGame,
};
