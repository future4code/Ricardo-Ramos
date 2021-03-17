import React from 'react';
import { useHistory } from 'react-router-dom';
import UseProtectedPage from '../../hooks/UseProtectedPage';
import { goToAdminHome } from '../../routes/Coordinator';

export default function AdminTripList() {
  const history = useHistory();
  UseProtectedPage();

  return (
    <>
      <button onClick={() => goToAdminHome(history)}>Voltar para a página inicial da administração</button>
    </>
  );
};