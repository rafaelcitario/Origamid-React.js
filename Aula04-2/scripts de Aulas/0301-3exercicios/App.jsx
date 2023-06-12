import React from 'react';
import Button from './componentes/Button';
import Titulo from './componentes/Titulo';
import Produto from './componentes/Produto';

/** ....mostrar dois botões na tela
 * mostrar preferencias
 *
 * quando clicar no botão adicionar a tela a preferencia, ex: Notebook.
 *
 * salvar em local storage como Key = produto, Value = Notebook ou Smartphone.
 *
 * sempre que clicar no botão, fazer um fetch
 * mostrar o produto
 * mostrar o valor
 */

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [data, setData] = React.useState(null);

  // recuperando produto de localStorage
  React.useEffect(() => {
    if (localStorage.length !== 0) {
      return setProduto(localStorage.getItem('produto'));
    }
  }, []);

  // realizando fetch e setando data
  React.useEffect(() => {
    const getFetch = async () => {
      const request = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
      );
      const responseJson = await request.json();
      setData(responseJson);
    };

    produto !== '' && getFetch();
  }, [produto]);

  // setando produto em localStorage.
  React.useEffect(() => {
    if (produto !== '') {
      localStorage.setItem('produto', produto);
    }
  }, [produto]);

  React.useEffect(() => {
    document.title = `Preferencia: ${produto}`;
  }, [produto]);

  //escolhendo a preferencia
  const chooseProduct = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <>
      <Titulo preferences={`⭐ ${produto}`} />
      <Button productName="Notebook" chooseProduct={chooseProduct} />
      <Button productName="Smartphone" chooseProduct={chooseProduct} />
      {data && <Produto data={data} preferences={produto.toUpperCase()} />}
    </>
  );
};

export default App;
