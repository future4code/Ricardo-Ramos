import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToTripForm } from '../../routes/Coordinator';

export default function TripList() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => goToTripForm(history)}>Curtiu? Então, se candidate!</button>
    </>
  );
};