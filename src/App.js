import React from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
