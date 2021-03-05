import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminArea, goToPublicArea } from '../../routes/Coordinator';

export default function Home() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => goToPublicArea(history)}>Seja nosso viajante</button>
      <button onClick={() => goToAdminArea(history)}>Acesso para funcionários LabeX</button>
    </>
  );
};