import React from 'react';

const App = () => {
  const ramdom = Math.random();
  const titulo = <h1>Este é um titulo</h1>;
  let cor;
  let ativo = true;

  function showName() {
    const name = 'Rafael';
    return name;
  }

  const estilo = {
    color: 'blue',
    fontSize: '2rem',
    border: '.2rem solid red',
    padding: '1rem',
    borderRadius: '999rem',
  };

  return (
    <>
      {showName()}
      {titulo}
      {ativo ? 'esta tivo' : 'não esta ativo'}
      <p className={ativo ? (cor = 'green') : (cor = 'red')} style={estilo}>
        {ramdom * 10}
      </p>
    </>
  );
};

export default App;
