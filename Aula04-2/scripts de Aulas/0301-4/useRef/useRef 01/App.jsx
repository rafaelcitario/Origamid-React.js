import React from 'react';

export default function App() {
  // este hook é para referenciar um elemento.
  // Basicamente me parece que tem o mesmo efeito de quando capturamos utilizando o document.q ou document.get
  const inputEl = React.useRef(null);
  const buttonClick = () => {
    //....inputEl.current - Dentro do input
    //....inputEl.current.focus() - Foco dentro do Input
    //....inputEl.current.value - pega o valor de dentro do input
    //....Qualquer coisa que vier depois de `current` esta interagindo com o que esta dentro do elemento em questão.
  };
  return (
    <>
      <input ref={inputEl} type="text" name="" id="" />
      <button onClick={buttonClick}>Enviar</button>
    </>
  );
}
