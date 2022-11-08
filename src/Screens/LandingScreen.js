import React from 'react';

//MUI
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//COMPONENTS
import Cards from '../components/Cards';

function LandingScreen() {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          Looking for a place to bee?
        </Typography>
        <Typography variant="h5" gutterBottom>
          You have space for bees to thrive but no hive?
          <br />
          Got bees but nowhere to be?
          <br /> BuZz brings you together.
        </Typography>
      </Container>
    </>
  );
}

export default LandingScreen;
