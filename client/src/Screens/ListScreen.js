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
      <Typography variant="h2" gutterBottom marginTop={3} marginBottom={5}>
        Featured Hosts
      </Typography>
      <Grid
        container
        // spacing={4}
        // direction="row"
        // columns={16}
        //rowSpacing={1}
        //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* <Grid item xs={12} sm={6} md={4}> */}
        {/* <Grid item> */}
        <HostCards />
        {/* <BeeKeeper_Cards /> */}
        {/* </Grid> */}
      </Grid>
    </Container>
  );
}

export default ListScreen;
