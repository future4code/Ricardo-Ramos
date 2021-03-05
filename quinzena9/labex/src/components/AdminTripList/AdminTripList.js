import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminHome } from '../../routes/Coordinator';

export default function AdminTripList() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => goToAdminHome(history)}>Voltar para a página inicial da administração</button>
    </>
  );
};