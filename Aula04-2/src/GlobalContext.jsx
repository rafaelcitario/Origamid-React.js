import React from 'react';

export const GlobalContext = React.createContext();
export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [ativo, setAtivo] = React.useState(true);

  React.useEffect(() => {
    getProdutos();
  }, []);

  function limparDados() {
    setAtivo(!ativo);
    if (ativo) {
      return setData((data) => null);
    }
    getProdutos();
  }

  async function getProdutos() {
    try {
      const req = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      const resp = await req.json();
      setData(resp);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <GlobalContext.Provider value={{ data, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
