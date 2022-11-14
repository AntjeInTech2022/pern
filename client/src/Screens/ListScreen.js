import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//COMPONENTS
import HostCard from '../components/HostCards';
import UserCard from '../components/c_Users/UserCard';

//DUMMY DATA
import dummyHostData from '../dummyData/dummyHostData';
//CONTEXT
import { UsersContext } from '../Context/userContext';

function ListScreen() {
  const { users } = useContext(UsersContext);

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
      <h1>...</h1>
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
