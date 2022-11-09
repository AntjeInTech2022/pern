import React from 'react';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//COMPONENTS
import HostCards from '../components/Cards';

function ListScreen() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom marginTop={3}>
        Featured Hosts
      </Typography>
      <Grid container>
        {/* <Grid container spacing={5}> */}
        {/* <Grid container wrap="nowrap"> */}
        <HostCards />
        {/* <BeeKeeper_Cards /> */}
      </Grid>
    </Container>
  );
}

export default ListScreen;
