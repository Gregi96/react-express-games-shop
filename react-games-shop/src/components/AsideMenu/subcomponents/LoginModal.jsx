import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginModal.scss';
import { authenticationService } from '../../../_services';
import { useDispatch } from 'react-redux';
import { authActions } from './../../../_actions';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#modal');

const LoginModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validateMessage, setValidateMessage] = useState('');

  const handleOnChangeLogin = ({ target: { value } }) => {
    setLogin(value);
  };

  const handleOnChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const resetInputValue = () => {
    setLogin('');
    setPassword('');
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (username.indexOf(' ') !== -1 || password.indexOf(' ') !== -1) {
      setValidateMessage('There can be no spaces');
      return;
    }

    const encodeUsername = encodeURI(username);
    const encodePassword = encodeURI(password);

    authenticationService
      .login(encodeUsername, encodePassword)
      .then((user) => {
        dispatch(authActions.authLogin(user));
        history.push('/');
        resetInputValue();
        onRequestClose();
      })
      .catch((err) => {
        setValidateMessage(err);
      });
  };

  const handleCancelButton = () => {
    setValidateMessage('');
    resetInputValue();
    onRequestClose();
  };

  const validateMessageComponent = validateMessage.length ? (
    <p className="logging-form__validate-message">{validateMessage}</p>
  ) : null;

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="onRequestClose"
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <form className="logging-form" onSubmit={handleOnSubmit}>
        <p className="logging-form__title">Log in to your account</p>
        <div className="logging-form__message">
          <p>
            <span style={{ fontWeight: 'bold' }}>User:</span> Log: user; pass:
            user
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}> Admin:</span> Log: admin;
            pass: admin
          </p>
          <p>Remember that the server shoud be turn on</p>
        </div>

        {validateMessageComponent}
        <input
          onChange={handleOnChangeLogin}
          type="text"
          placeholder="Address e-mail or Login"
          value={username}
          className="logging-form__input"
          required
          minLength="4"
        />

        <input
          onChange={handleOnChangePassword}
          type="password"
          value={password}
          placeholder="Password"
          className="logging-form__input"
          required
          minLength="4"
        />
        <section className="logging-form__buttons">
          <button className="logging-form__button">Log in</button>
          <button className="logging-form__button" onClick={handleCancelButton}>
            Cancel
          </button>
        </section>
      </form>
    </Modal>
  );
};

export default LoginModal;
