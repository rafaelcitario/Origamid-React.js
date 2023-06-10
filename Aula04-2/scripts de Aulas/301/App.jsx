import React from 'react';
import ButtonModal from '../scripts de Aulas/301/ButtonModal';
import Modal from '../scripts de Aulas/301/Modal';

/* 
const [ativo, setAtivo] = React.useState(false);
const [dados, setDados] = React.useState({ nome: 'Rafael', idade: '27' });
function handle() {
  setAtivo(!ativo);
  setDados({
    ...dados,
    faculdade: 'Tem faculdade',
  });
}


<p>{dados.nome}</p>
<p>{dados.idade}</p>
{!ativo ? '' : <p>{dados.faculdade}</p>}
<button onClick={handle}>{ativo ? 'Ativo' : 'Inativo'}</button>
 */

const App = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;
