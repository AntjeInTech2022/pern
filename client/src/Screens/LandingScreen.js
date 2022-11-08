import React from 'react';

//MUI
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

//IMAGES
import card_picture from '../Images/pexels-anete-lusina-5247969.jpg';

//COMPONENTS
import Cards from '../components/Cards';

function LandingScreen() {
  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <Container sx={{ width: 900 }}>
        <Box marginTop={3} sx={{ display: 'flex' }}>
          <img src={card_picture} height={325} />
        </Box>
        <Typography variant="h2" gutterBottom marginTop={3}>
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
