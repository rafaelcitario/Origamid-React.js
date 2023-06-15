import React from 'react';
import Product from './Product';
import Button from './Button';
/**
 * Renderiza um componente que exibe os dados do produto
 * quando um botão é clicado.
 */
export default function App() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  /**
   * Busca os dados do produto na API com base no nome do produto selecionado.
   * @param {Object} event - O objeto de evento gerado ao clicar em um botão.
   */
  const getData = async (event) => {
    // Extrai o nome do produto do texto do botão
    const productName = event.target.innerText.toLowerCase();
    setLoading(true);

    // Busca os dados do produto na API
    const request = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${productName}`,
    );
    const reqJson = await request.json();

    setLoading(false);
    setData(reqJson);
  };

  // Renderiza botões e dados do produto
  return (
    <>
      <Button getData={getData} productName="Notebook" />
      <Button getData={getData} productName="Smartphone" />
      <Button getData={getData} productName="Tablet" />
      {loading && <p>Carregando...</p>}
      {!loading && data && <Product data={data} />}
    </>
  );
}
