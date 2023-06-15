import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState(['teste1', 'teste2']);
  const [inputContent, setInputContent] = React.useState('');
  const [notificacao, setNotificacao] = React.useState(null);
  const inputEl = React.useRef();

  const addComentarie = () => {
    if (inputContent === '') {
      inputEl.current.focus();
      window.alert('Você precisa inserir uma menssagem antes de enviar');
      return;
    } else {
      setComentarios(() => [...comentarios, inputContent]);
      setInputContent('');
      setNotificacao('comentário adicionado.');
      const timeOutRef = setTimeout(() => {
        setNotificacao(null);
      }, 2000);

      console.log(timeOutRef);
      inputEl.current.focus();

      return;
    }

    //
  };

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        name="comentario"
        id="comentario"
        ref={inputEl}
        value={inputContent}
        onChange={({ target }) => setInputContent(target.value)}
      />
      <button
        style={{ margin: 5, fontWeight: 'bolder', color: 'white' }}
        onClick={addComentarie}
      >
        Enviar
      </button>
      <p>{notificacao}</p>
    </div>
  );
};

export default App;
