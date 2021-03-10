import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminHome } from '../../routes/Coordinator';

export default function AdminAuth() {
  const history = useHistory();

  return (
    // O botão de cadastro não tem uma rota porque há planos específicos para ele, que serão implementados em outro momento do projeto
    <>
      <button>Trabalha conosco? Faça seu cadastro!</button>
      
      <button onClick={() => goToAdminHome(history)}>Faça seu login</button>
    </>
  );
};