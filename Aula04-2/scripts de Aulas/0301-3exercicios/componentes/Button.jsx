import React from 'react';

const Button = ({ productName, chooseProduct }) => {
  return (
    <button style={{ margin: 10 }} onClick={chooseProduct}>
      {productName}
    </button>
  );
};

export default Button;
