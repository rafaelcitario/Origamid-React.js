import React from 'react';
import Produtos from './Produtos';
import { GlobalStorage } from './GlobalContext';
import ButtonClear from './ButtonClear';

const App = () => {
  return (
    <GlobalStorage>
      <Produtos />
      <ButtonClear />
    </GlobalStorage>
  );
};

export default App;
