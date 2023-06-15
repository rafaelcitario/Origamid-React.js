import React from 'react';
import { GlobalContext } from './GlobalContext';

const ButtonClear = () => {
  const { limparDados, data } = React.useContext(GlobalContext);
  return (
    <button
      onClick={limparDados}
      style={{
        position: 'fixed',
        bottom: 5,
        right: 5,
      }}
    >
      {data ? 'Limpar dados' : 'Mostrar dados'}
    </button>
  );
};

export default ButtonClear;
