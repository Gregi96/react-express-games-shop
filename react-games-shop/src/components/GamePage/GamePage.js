import React from 'react';
import { useSelector } from 'react-redux';
import './GamePage.scss';

import GameItem from './../GameItem';

const GamePage = () => {
  const games = useSelector((store) => store.gamesReducer);
  const { currentUser } = useSelector((store) => store.authReducer);

  const userGamesId = currentUser ? currentUser.games : [];

  const gamesItems = games.map((item) => (
    <GameItem
      key={item.id}
      {...item}
      isShopContext={true}
      userGamesId={userGamesId}
    />
  ));

  return (
    <section className="game-page">
      <p className="game-page__title">Browse Games</p>
      <ul className="game-page__list">{gamesItems}</ul>
    </section>
  );
};

export default GamePage;
