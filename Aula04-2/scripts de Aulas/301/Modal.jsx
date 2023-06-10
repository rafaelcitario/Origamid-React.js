import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <div>
        <p>
          {modal ? 'Modal Aberto' : ''}
          <button onClick={() => setModal(false)}>Fechar</button>
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
