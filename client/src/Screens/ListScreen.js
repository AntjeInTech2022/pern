import React from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//COMPONENTS
import HostCard from '../components/Cards';

//DUMMY DATA
import dummyHostData from '../dummyData/dummyHostData';

function ListScreen() {
  // const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" gutterBottom marginTop={3} marginBottom={5}>
        Featured Hosts
      </Typography>
      <Grid container spacing={4}>
        {dummyHostData.map((item, index) => (
          <Grid item key={index} xs={12} md={3} lg={4}>
            <HostCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListScreen;
