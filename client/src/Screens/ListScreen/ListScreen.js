import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//COMPONENTS
import HostCard from './HostCards';
import UserCard from './UserCard';
import UserDetails from './DetailsScreen';
import beePic from '../../Images/bee_line.png';

//DUMMY DATA
import dummyHostData from '../../dummyData/dummyHostData';
//CONTEXT
import { UsersContext } from '../../Context/userContext';

function ListScreen() {
  const { users } = useContext(UsersContext);

  return (
    <Container>
      <br></br>
      <br></br>
      <img src={beePic} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <Typography variant="h4" gutterBottom marginTop={3} marginBottom={5}>
        Hosts
      </Typography> */}
      <Grid container spacing={4}>
        {dummyHostData.map((item, index) => (
          <Grid item key={index} xs={12} md={3} lg={4}>
            <HostCard item={item} />
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      {/* <Typography variant="h4" gutterBottom marginTop={3} marginBottom={5}>
        Bee keepers
      </Typography> */}
      <Grid container spacing={4}>
        {users.map((user, pid) => (
          <Grid item key={pid} xs={12} md={3} lg={4}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListScreen;
