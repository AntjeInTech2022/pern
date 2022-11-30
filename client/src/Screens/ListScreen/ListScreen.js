import React from 'react';
import { useEffect, useState, useContext } from 'react';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


//COMPONENTS
import HostCard from './HostCards';
import UserCard from './UserCard';

import BeeLogo from '../../Images/bee_line.png';

//DUMMY DATA
import dummyHostData from '../../dummyData/dummyHostData';
//CONTEXT
import { UsersContext } from '../../Context/userContext';
import {AuthContext} from '../../Context/authContext'


function ListScreen() {
  const { users,getUsers } = useContext(UsersContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getUsers();
  }, [user]); 

  return (
    <Container>
   <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Discover our community members
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        // sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
     Choose a member and send them a message
      </Typography>
      <br></br>
       <img 

       src={BeeLogo}/ >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* <Grid container spacing={4}>
        {dummyHostData.map((item, index) => (
          <Grid item key={index} xs={12} md={3} lg={4}>
            <HostCard item={item} />
          </Grid>
        ))}
      </Grid> */}
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
      <br></br>
      <br></br>
      <br></br>
    </Container>
  
  );
}

export default ListScreen;
