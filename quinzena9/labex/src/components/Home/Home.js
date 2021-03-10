import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminAuth, goToPublicAuth } from '../../routes/Coordinator';

export default function Home() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => goToPublicAuth(history)}>Seja nosso viajante</button>
      <button onClick={() => goToAdminAuth(history)}>Acesso para funcionários LabeX</button>
    </>
  );
};