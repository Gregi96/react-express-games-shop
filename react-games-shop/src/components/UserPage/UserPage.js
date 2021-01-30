import React from 'react';
import { useSelector } from 'react-redux';

import GameItem from './../GameItem';

const UserPage = () => {
  const userGamesId = useSelector(
    (store) => store.authReducer.currentUser.games
  );

  const allGames = useSelector((store) => store.gamesReducer);

  const userGames = allGames
    .filter((item) => userGamesId.includes(item.id))
    .map((item) => <GameItem key={item.id} {...item} />);

  return (
    <section className="game-page">
      <p className="game-page__title">Yours Games</p>
      <ul className="game-page__list">{userGames}</ul>
    </section>
  );
};

export default UserPage;
