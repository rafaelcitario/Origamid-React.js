import React from 'react';

/**
 * Ao clicar no botão o modal abre e fecha
 * pois estamos passando o estado inicial dentro do setModal()
 *
 * Nota-se que não estou passando modal como parametro,
 * isto funciona por que setModal puxa o estado inicial da variavel.
 *
 */
const Buttons = ({ setModal }) => {
  const [idade, setIdade] = React.useState([]);
  function handleClick() {
    let aleatorio = Math.random() * 1;

    setIdade([aleatorio, ...idade]);
    setModal((modal) => !modal);
    console.log(aleatorio);
    console.log(idade);
  }
  return (
    <>
      <p>{idade[0]}</p>
      <button onClick={handleClick}>Abrir</button>
    </>
  );
};

export default Buttons;
