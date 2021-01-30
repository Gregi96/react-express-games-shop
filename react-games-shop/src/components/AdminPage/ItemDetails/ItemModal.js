import React, { useState } from 'react';
import Modal from 'react-modal';

import { gamesService } from './../../../_services';

import { gamesActions } from './../../../_actions';

import './ItemModal.scss';
import { useDispatch } from 'react-redux';

Modal.setAppElement('#modal2');

const ItemModal = ({
  isOpen,
  onRequestClose,
  title = '',
  price = 0,
  img = '',
  id,
  isEditMode = true,
}) => {
  const [titleForm, setTitleForm] = useState(title);
  const [priceForm, setPriceForm] = useState(price);
  const [imgForm, setImgForm] = useState(img);
  const [validateMessage, setValidateMessage] = useState('');

  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitleForm(e.target.value);
  };

  const handleChangeImg = (e) => {
    setImgForm(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPriceForm(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (isEditMode) {
      gamesService
        .updateGame(id, imgForm, Number(priceForm), titleForm)
        .then((response) => {
          dispatch(gamesActions.updateGames(response));
          onRequestClose();
        })
        .catch((err) => {
          setValidateMessage(err);
        });
    } else if (!isEditMode) {
      gamesService
        .addGame(imgForm, Number(priceForm), titleForm)
        .then((response) => {
          dispatch(gamesActions.updateGames(response));
          onRequestClose();
        })
        .catch((err) => {
          setValidateMessage(err);
        });
    }
  };

  const correctLabel = isEditMode ? 'Update' : 'Add new game';

  const validateMessageComponent = validateMessage.length ? (
    <p className="logging-form__validate-message">{validateMessage}</p>
  ) : null;

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="onRequestClose"
      onRequestClose={onRequestClose}
      className="ItemModal"
      overlayClassName="OverlayItemModal"
    >
      <form onSubmit={handleSubmitForm} className="ItemModal__form">
        {validateMessageComponent}
        <label>
          <p>Title:</p>
          <input type="text" value={titleForm} onChange={handleChangeTitle} />
        </label>

        <label>
          <p>Image url:</p>
          <input type="text" value={imgForm} onChange={handleChangeImg} />
        </label>

        <label>
          <p>Price:</p>
          <input type="number" value={priceForm} onChange={handleChangePrice} />
        </label>
        <section className="ItemModal__buttons">
          <button onClick={onRequestClose}>Cancel</button>
          <button type="submit">{correctLabel}</button>
        </section>
      </form>
    </Modal>
  );
};

export default ItemModal;
