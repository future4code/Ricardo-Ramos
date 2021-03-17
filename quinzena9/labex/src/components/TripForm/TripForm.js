import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome, goToTripList } from '../../routes/Coordinator';

export default function TripForm() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => goToTripList(history)}>Voltar à lista de viagens</button>
      <button onClick={() => goToHome(history)}>Voltar à página inicial</button>
    </>
  );
};