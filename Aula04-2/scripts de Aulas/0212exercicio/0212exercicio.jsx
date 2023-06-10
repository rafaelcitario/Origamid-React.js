import React from 'react';

// não se esquecer de utilizar o spreed
const Input = ({ id, name, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input id={id} name={name} type="text" {...props} />
    </>
  );
};

const Button = ({ content }) => {
  return <button>{content}</button>;
};

const Form = () => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
      action=""
    >
      <>
        <Input id="name" name="Nome" required />
        <Input id="password" name="Senha" type="password" />
        <Button content="Enviar" />
      </>
    </form>
  );
};

/**
 * Adicionei os componentes aqui somenta para não perder muito tempo.
 * Mas o ideal é sempre criar um arquivo jsx para cada Componente e importar.
 */

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;
