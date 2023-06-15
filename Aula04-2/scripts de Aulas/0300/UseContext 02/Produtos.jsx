import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produtos = () => {
  const globalProps = React.useContext(GlobalContext);
  console.log(globalProps);

  return <h1>Produto: {globalProps.nome}</h1>;
};

export default Produtos;
