import React from 'react';
import { useHistory } from 'react-router-dom';
import UseProtectedPage from '../../hooks/UseProtectedPage';
import { goToAdminCandidatures, goToAdminNewTrip, goToAdminTripList } from '../../routes/Coordinator';

export default function AdminHome() {
  const history = useHistory();
  UseProtectedPage();
  return (
    <>
      <button onClick={() => goToAdminCandidatures(history)}>Aprovar ou recusar candidatos</button>
      <button onClick={() => goToAdminNewTrip(history)}>Criar nova viagem</button>
      <button onClick={() => goToAdminTripList(history)}>Ver e excluir viagens</button>
    </>
  );
};