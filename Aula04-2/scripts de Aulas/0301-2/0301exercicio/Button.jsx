import React from 'react';

/** Cria um componente de botão com um nome de produto fornecido e uma função para buscar dados.
 *@param {string} productName - O nome do produto para ser exibido no botão.
 *@param {function} getData - A função a ser chamada quando o botão é clicado.
 *@returns {JSX.Element} Um componente de botão com o nome do produto e a função onClick fornecidos.
 */

const Button = ({ productName, getData }) => {
  return (
    <button style={{ margin: 10 }} onClick={getData}>
      {productName}
    </button>
  );
};

export default Button;
