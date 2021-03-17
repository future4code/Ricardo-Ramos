import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToTripForm, goToTripList } from '../../routes/Coordinator';

export default function PublicHome() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => goToTripForm(history)}>Cadastre-se em uma viagem</button>
      <button onClick={() => goToTripList(history)}>Veja nossa agenda de viagens</button>
    </>
  );
};