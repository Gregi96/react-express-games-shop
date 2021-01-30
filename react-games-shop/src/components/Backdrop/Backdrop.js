import React from 'react';

import './Backdrop.scss';

const Backdrop = ({ click }) => (
  <div className="backdrop" onClick={click}></div>
);

export default Backdrop;
