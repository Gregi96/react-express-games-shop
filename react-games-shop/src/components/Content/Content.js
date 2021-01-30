import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Content.scss';

import HomePage from '../HomePage';
import GamePage from '../GamePage';
import UserPage from '../UserPage';
import UserRoute from '../UserRoute';
import AdminPage from '../AdminPage';
import AdminRoute from '../AdminRoute';
import { useDispatch } from 'react-redux';

import { gamesService } from './../../_services';
import { gamesActions } from './../../_actions';

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    gamesService.getGames().then((response) => {
      const { games } = response;
      dispatch(gamesActions.getGames(games));
    });
  }, []);

  return (
    <main className="main-content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/games" component={GamePage} />
        <UserRoute path="/user" component={UserPage} />
        <AdminRoute path="/admin" component={AdminPage} />
      </Switch>
    </main>
  );
};

export default Content;
