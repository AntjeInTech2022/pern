import React from 'react';
import { useEffect, useState, useContext } from 'react';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//COMPONENTS
import UserCard from './UserCard';
import beeLogo from '../../Images/bee_line.png';
// import {BeeLogo }from '../../Images/bee_line.png';
// import {beeLogo} from '../../Images/bee_line.png'
//CONTEXT
import { UsersContext } from '../../Context/userContextTSX';
import {AuthContext} from '../../Context/authContextTSX'
import { User } from '../../@types';
import { Users } from '../../@types';




function ListScreen() {
  const { users, getUsers } = useContext(UsersContext);
  const { user } = useContext(AuthContext);
  
// The effect should run each time a dependency (here: user) changes: 
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
      <Typography color="inherit" align="center" variant="h2" 
      sx={{textAlign: 'center'}}
      >
      Discover our community members
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
      >
     Choose a member and send them a message
      </Typography>
      <br></br>
       <img 
       src={beeLogo}/ >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={4}>
        {users && users.map((user: User) => (
          <Grid item key={user.pid} xs={12} md={3} lg={4}>
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
