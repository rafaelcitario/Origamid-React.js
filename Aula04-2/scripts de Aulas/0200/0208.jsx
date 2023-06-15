import React from 'react';

const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <>
      <ul style={{ listStyle: 'none', fontWeight: 'bold' }}>
        {livros.map(({ nome, ano }) => (
          <li key={ano}>{`${nome}, ${ano}`}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
