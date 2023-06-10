import React from 'react';
import Button from './Button';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  async function handle({ target }) {
    const produto = target.innerText.toLowerCase();

    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await response.json();

    setDados(json);
    setLoading(false);
  }
  return (
    <>
      <Button handle={handle} nomeProduto="Notebook" />
      <Button handle={handle} nomeProduto="Smartphone" />
      <Button handle={handle} nomeProduto="Tablet" />
      {loading && <p>............LOADING</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
