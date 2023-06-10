import React from 'react';
const style = {
  margin: '1rem',
};

const Button = ({ nomeProduto, handle }) => {
  return (
    <button style={style} onClick={handle}>
      {nomeProduto}
    </button>
  );
};

export default Button;
