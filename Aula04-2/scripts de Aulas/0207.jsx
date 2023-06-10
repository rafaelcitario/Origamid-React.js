import React from 'react';
// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  const { cliente, idade, compras, ativa } = dados;

  // total + map = map().reduce((a, b) => a + b);
  let total = 0;
  compras.map(({ preco }) => {
    const dataFiltered = Number(preco.replace('R$', '').trim());
    total += dataFiltered;
  });

  const cor = ativa ? 'green' : 'red';
  const message = () => {
    if (total >= 10000) {
      return <p>Você esta gastando muito!</p>;
    }
  };

  return (
    <>
      <p>Nome: {cliente}</p>
      <p>idade: {idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: cor }}>{ativa ? 'Ativa' : 'Inativa'}</span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {message()}
    </>
  );
};

export default App;
