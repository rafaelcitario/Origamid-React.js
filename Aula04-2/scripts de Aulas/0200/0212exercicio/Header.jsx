import React from 'react';

const Header = () => {
  return (
    <header style={{ paddingLeft: '1.2rem' }}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
