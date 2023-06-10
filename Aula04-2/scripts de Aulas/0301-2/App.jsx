import React from 'react';
import Buttons from './Button';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(true);

  return (
    <>
      <Modal modal={modal} />
      <Buttons setModal={setModal} />
    </>
  );
};

export default App;
