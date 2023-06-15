import React from 'react';

function App() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  const addOnCart = () => {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho.');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
      console.log('teste');
    }, 2000);
  };

  return (
    <>
      <p ref={timeoutRef}>{notificacao}</p>
      <button onClick={addOnCart}>Itens no carrinho: {carrinho}</button>
    </>
  );
}

export default App;
