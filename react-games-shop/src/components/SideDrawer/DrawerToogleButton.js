import React from 'react';
import './DrawerToogleButton.scss';

const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.drawerClickHandler}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default DrawerToggleButton;
