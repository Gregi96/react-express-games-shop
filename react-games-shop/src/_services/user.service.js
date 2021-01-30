import { authHeader } from '../_helpers';

const buyGame = (username, id) => {
  const requestOption = {
    method: 'PATCH',
    headers: authHeader(),
    body: JSON.stringify({ username, id }),
  };

  return fetch(`/users`, requestOption).then((user) => user.json());
};

export const userService = {
  buyGame,
};
