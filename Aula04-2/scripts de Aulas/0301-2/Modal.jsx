import React from 'react';

const Modal = ({ modal }) => {
  if (!modal) {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <p>Este é um modal</p>
          <button>Fechar</button>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Modal;
