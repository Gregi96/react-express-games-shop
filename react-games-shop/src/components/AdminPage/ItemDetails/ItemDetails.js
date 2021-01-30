import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gamesService } from './../../../_services';
import { gamesActions } from './../../../_actions';

import ItemModal from './ItemModal';

const ItemDetails = ({ title, id, price, img }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteGame = () => {
    gamesService.deleteGame(id).then((response) => {
      if (response.status === 200) {
        dispatch(gamesActions.deleteGame(id));
      }
    });
  };

  return (
    <details className="itemDetails">
      <summary className="itemDetails__title">{title}</summary>
      <button onClick={handleOpenModal}>Edit</button>
      <button onClick={handleDeleteGame}>Delete</button>
      <ItemModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        title={title}
        price={price}
        img={img}
        id={id}
      />
    </details>
  );
};

export default ItemDetails;
