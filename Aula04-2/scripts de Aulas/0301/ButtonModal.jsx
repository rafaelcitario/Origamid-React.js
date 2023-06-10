import React from 'react';

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Ativar</button>;
};

export default ButtonModal;
