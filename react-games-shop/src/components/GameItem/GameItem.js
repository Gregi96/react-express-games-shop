import React from 'react';
import { useSelector } from 'react-redux';
import './GameItem.scss';

import { userService } from './../../_services';

import { userActions } from './../../_actions';
import { useDispatch } from 'react-redux';

const GameItem = ({
  price,
  title,
  img,
  id,
  isShopContext = false,
  userGamesId = [],
}) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((store) => store.authReducer);

  const isLoggedIn = currentUser.loggingIn ? currentUser.loggingIn : null;

  const userRole = currentUser.loggingIn
    ? currentUser.currentUser.role === 'User'
      ? true
      : null
    : null;

  const boughtGame =
    userGamesId.length > 0 ? (userGamesId.includes(id) ? true : false) : null;

  const shouldBeBuyButtonVisible =
    isLoggedIn && userRole && isShopContext && !boughtGame;

  const handleOnClick = () => {
    userService
      .buyGame(currentUser.currentUser.username, id)
      .then((response) => {
        dispatch(userActions.updateUserGames(response.games, response.budget));
      });
  };

  return (
    <li className="gameItem">
      <img src={img} alt={title} className="gameItem__image" />
      <p className="gameItem__title">{title}</p>
      {shouldBeBuyButtonVisible && (
        <button onClick={handleOnClick} className="gameItem__buy-button">
          Buy: {price}zł
        </button>
      )}
      {boughtGame && <p className="gameItem__bought-game">Bought</p>}
    </li>
  );
};

export default GameItem;
