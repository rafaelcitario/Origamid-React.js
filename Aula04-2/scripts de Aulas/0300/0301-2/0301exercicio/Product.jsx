import React from 'react';

/**
 * Renderiza um produto com seu nome, preço e imagem.
 *
 * @param {Object} data - Um objeto contendo as informações do produto.
 * @param {string} data.nome - O nome do produto.
 * @param {number} data.preco - O preço do produto.
 * @param {Array} data.fotos - Um array contendo objetos com informações sobre as fotos do produto.
 * @param {string} data.fotos.src - A URL de origem da foto do produto.
 * @return {JSX.Element} Um elemento React representando o produto.
 */

const Product = ({ data }) => {
  return (
    <>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco}</p>
      <img src={data.fotos[0].src} alt="" />
    </>
  );
};

export default Product;
