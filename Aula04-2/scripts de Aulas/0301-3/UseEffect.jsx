import React from 'react';

export default function App() {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    document.title = contar;
  }, [contar]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => {
        setDados(json);
      });
  }, []);

  return (
    <>
      {dados && <h1>{dados.nome}</h1>}
      <p>{`${dados?.preco} - Numero de itens: ${contar}`}</p>
      <p>Valor da compra: R$ {contar * +dados?.preco}</p>

      {ativo && <p style={{ height: '200vh' }}>Evento Ativo</p>}
      <button
        onClick={() => {
          setAtivo(!ativo);
          setContar(contar + 1);
        }}
      >
        Comprar
      </button>
    </>
  );
}
