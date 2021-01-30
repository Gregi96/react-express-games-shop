import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomePage.scss';

const HomePage = () => {
  let history = useHistory();

  return (
    <section className="HomePage">
      <button
        className="HomePage__button"
        onClick={() => {
          history.push('/games');
        }}
      >
        See news
      </button>
    </section>
  );
};

export default HomePage;
