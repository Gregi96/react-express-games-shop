import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { Header, AsideMenu, Content, Toolbar, Backdrop } from 'components';

import { Provider } from 'react-redux';
import store from './_store';

function App() {
  const [sideDrawerMenuOpen, setSideDrawerMenuOpen] = useState(false);

  const drawerMenuToggleClickHandler = () => {
    console.log('pokaz');
    setSideDrawerMenuOpen((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setSideDrawerMenuOpen(false);
  };

  let backDrop;

  if (sideDrawerMenuOpen) {
    backDrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="App">
      <Provider store={store}>
        <div className="main-cointainer">
          <Header />
          <Toolbar drawerClickHandler={drawerMenuToggleClickHandler} />
          {backDrop}
          <Router>
            <AsideMenu show={sideDrawerMenuOpen} />
            <Content />
          </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;
