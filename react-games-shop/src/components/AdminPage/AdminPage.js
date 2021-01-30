import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ItemDetails, ItemModal } from './ItemDetails';
import './AdminPage.scss';

const AdminPage = () => {
  const games = useSelector((store) => store.gamesReducer);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const gamesItems = games.map((item) => (
    <ItemDetails key={item.id} {...item} />
  ));

  return (
    <>
      <section className="state-management">
        <p className="state-management__title">Condition management</p>
        {gamesItems}
        <button onClick={handleOpenModal}>Add new game</button>
      </section>
      <ItemModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        isEditMode={false}
      />
    </>
  );
};

export default AdminPage;
