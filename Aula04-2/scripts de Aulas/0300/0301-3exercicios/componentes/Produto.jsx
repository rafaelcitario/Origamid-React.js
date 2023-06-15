import React from 'react';
import Titulo from './Titulo';

const Produto = ({ data, preferences }) => {
  return (
    <>
      <Titulo preferences={preferences} />
      <p>
        <strong>R$ </strong> {data.preco}
      </p>
      <img
        src={data.fotos[0].src}
        alt={data.fotos[0].titulo}
        title={data.fotos[0].titulo}
      />
    </>
  );
};

export default Produto;
