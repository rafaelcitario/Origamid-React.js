import React from 'react';
import UserContext from './UserContext';
import Produtos from './Produtos';

// ..... importamos o componente UserContext que tem uma instancia
// de React.createContext

//.... esta instancia tem uma propriedade chamada provider
// que irá prover um tipo de props

export default function App() {
  return (
    //... envolvemos nossos componentes com este provider como se fosse um fragment
    <UserContext.Provider value={{ nome: 'Rafael' }}>
      <Produtos />
    </UserContext.Provider>
  );
}


//... quando passamos a "props" no providers
// tudo que esta dentro recebe esta "props"