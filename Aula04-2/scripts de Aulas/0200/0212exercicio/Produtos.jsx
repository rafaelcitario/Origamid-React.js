import React from 'react';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <>
      {produtos.map(({ nome, propriedades }) => (
        <section
          key={nome}
          style={{
            border: '1px solid black',
            margin: '1rem',
            padding: '1rem',
          }}
        >
          <p>{nome}</p>
          <ul>
            {propriedades.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default Produtos;
