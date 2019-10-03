//importando o react (criando um estado)
import React, { useState } from 'react';

//importando a api
import api from './services/api';

//importando arquivo css
import './App.css';

//importando uma imagem
import logo from './assets/logo.svg';

//retornando um conteúdo html
function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.post('/sessions', { email });

    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

    <div className="content">
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL *</label>
      <input 
        id="email"
        type="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <button className="btn" type="submit">Entrar</button>
    </form>
    </div>
    </div>
  );
}

export default App;