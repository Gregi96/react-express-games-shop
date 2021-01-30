import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './AsideMenu.scss';

import LoginModal from './subcomponents';

import { authenticationService } from '../../_services';

import { authActions } from '../../_actions';

const AsideMenu = ({ show }) => {
  const currentUser = useSelector((store) => store.authReducer);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  let drawerClasses = 'navigation-aside-menu';
  if (show) {
    drawerClasses = 'navigation-aside-menu open';
  }

  const loggedIn = currentUser.loggingIn ? currentUser.loggingIn : null;

  const Role = currentUser.loggingIn
    ? currentUser.currentUser.id === 1
      ? 'ADMIN'
      : 'USER'
    : null;

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const logout = () => {
    console.log('Wylogowanie');
    authenticationService.logout();
    dispatch(authActions.authLogout());
    history.push('/');
  };

  return (
    <nav className={drawerClasses}>
      <NavLink to="/" exact className="navigation-aside-menu__item">
        News
      </NavLink>
      <NavLink to="/games" className="navigation-aside-menu__item">
        Game overview
      </NavLink>
      {loggedIn && Role === 'USER' && (
        <NavLink to="/user" className="navigation-aside-menu__item">
          Yours games
        </NavLink>
      )}

      {loggedIn && Role === 'ADMIN' && (
        <>
          <p className="navigation-aside-menu__item navigation-aside-menu__item--admin-panel">
            Admin Panel
          </p>
          <NavLink to="/admin" className="navigation-aside-menu__item">
            Game management
          </NavLink>
        </>
      )}

      {!loggedIn ? (
        <button
          onClick={handleOpenModal}
          className="navigation-aside-menu__button"
        >
          Log in
        </button>
      ) : (
        <button onClick={logout} className="navigation-aside-menu__button">
          Log out
        </button>
      )}

      <LoginModal isOpen={showModal} onRequestClose={handleCloseModal} />
    </nav>
  );
};

export default AsideMenu;
