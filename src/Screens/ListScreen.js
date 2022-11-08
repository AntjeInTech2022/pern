import React from 'react';

//MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//COMPONENTS
import Cards from '../components/Cards';

function ListScreen() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </Container>
  );
}

export default ListScreen;
