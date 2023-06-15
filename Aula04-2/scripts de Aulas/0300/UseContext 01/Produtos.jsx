import React from 'react';
import UserContext from './UserContext';

// aqui produtos esta recebendo a props
// sem que eu tenha que realmente definir uma props no componente.
export default function Produtos() {
  const dados = React.useContext(UserContext);
  return <p>{dados.nome}</p>;
}
