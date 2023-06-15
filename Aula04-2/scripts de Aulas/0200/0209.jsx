import React from 'react';

const App = () => {
  // passando o evento como espreção
  return <button onClick={({ target }) => console.log(target)}>Clique</button>;
};

export default App;
