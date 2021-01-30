import React from 'react';

import './Toolbar.scss';
import DrawerToggleButton from './../SideDrawer';

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton drawerClickHandler={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default Toolbar;
