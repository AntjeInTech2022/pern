import React from 'react';

//MUI
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//COMPONENTS
import Cards from '../components/Cards';

function LandingScreen() {
  return (
    <Container maxWidth="sm">
      <h1>
        <strong>Looking for a place to bee</strong>?
      </h1>
      <p>
        You have space for bees to thrive but no hive?
        <br />
        Got bees but nowhere to be?
      </p>
      <p>BUZZ brings you together</p>
      <Button variant="contained">MUI Button</Button>
      <Grid container spacing={5}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </Container>
  );
}

export default LandingScreen;
