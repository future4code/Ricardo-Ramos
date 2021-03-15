import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

export default function Home() {

  return (
    <>
      <Typography variant="h1">LabeX</Typography>

      <Link to={"/publico/home"}>
        <Button variant="contained" color="secondary"> Viaje com a LabeX </Button>
      </Link>

      <Link to={"/admin"}>
        <Button variant="outlined"color="primary"> Login de funcionários </Button>
      </Link>
    </>
  );
};