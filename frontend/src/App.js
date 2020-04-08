//importando o react (criando um estado)
import React from 'react';

//importando arquivo css
import './App.css';

//importando uma imagem
import logo from './assets/logo.svg';

//importando as rotas
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

    <div className="content">
      <Routes />
    </div>
    </div>
  );
}

export default App;