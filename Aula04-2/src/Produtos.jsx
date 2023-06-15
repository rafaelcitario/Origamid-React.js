import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produtos = () => {
  const { data } = React.useContext(GlobalContext);

  if (data !== null) {
    return (
      <>
        <ul>
          {data.map(({ id, fotos, nome, preco }) => (
            <li
              key={id}
              style={{
                border: '1px solid',
                padding: 10,
                display: 'flex',
                gap: 5,
                borderRadius: 5,
              }}
            >
              <img
                style={{
                  width: '10%',
                  height: '100%',
                  borderRadius: 5,
                }}
                src={fotos[0].src}
                alt={fotos[0].titulo}
                title={fotos[0].titulo}
              />
              <ul style={{ listStyle: 'none' }}>
                <li>Produto: {nome}</li>
                <li>Preço: R${preco}</li>
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return <p>Você limpou os produtos</p>;
  }
};

export default Produtos;
