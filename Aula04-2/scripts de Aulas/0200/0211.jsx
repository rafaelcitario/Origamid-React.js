import React from 'react';
// props

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} - {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor="red" texto="Meu titulo 1" />
      <Titulo cor="blue" texto="Meu titulo 2" />
      <Titulo cor="green" texto="Meu titulo 3">
        Este é o children - Para que o texto escrito aqui dentro apareça no
        componente/elemento é necessario adicionar a propriedade children no
        componente.
      </Titulo>
    </>
  );
};

export default App;
