import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToPublicHome } from '../../routes/Coordinator';

export default function AdminAuth() {
  const history = useHistory();

  return (
    // O botão de cadastro não tem uma rota porque há planos específicos para ele, que serão implementados em outro momento do projeto
    <>
      <button>Quer viajar? Vamos começar pelo cadastro!</button>
      
      <div>
        <input placeholder="email" />
        <input placeholder="senha" />
        <button onClick={() => goToPublicHome(history)}>Mala pronta? Faça login e veja a lista de viagens!</button>
      </div>
    </>
  );
};