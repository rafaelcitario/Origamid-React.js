import React from 'react';
import Header from '../scripts de Aulas/0212exercicio]/Header';
import Titulo from '../scripts de Aulas/0212exercicio]/Titulo';
import Home from '../scripts de Aulas/0212exercicio]/Home';
import Produtos from '../scripts de Aulas/0212exercicio]/Produtos';
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  const routes = {
    '/': 'Home',
    '/produtos': 'Produtos',
  };

  const { pathname } = window.location;
  console.log(pathname);

  const Pagina = () => (routes[pathname] == 'Home' ? <Home /> : <Produtos />);
  console.log(routes[pathname]);

  return (
    <>
      <Header />
      <Titulo titulo={routes[pathname]} />
      <Pagina />
    </>
  );
};

export default App;
