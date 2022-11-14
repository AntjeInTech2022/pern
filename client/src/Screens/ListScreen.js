import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//COMPONENTS
import HostCard from '../components/Cards';
import UserCard from '../components/c_Users/showAllUsers';

//DUMMY DATA
import dummyHostData from '../dummyData/dummyHostData';
//CONTEXT
import { UsersContext } from '../Context/userContext';

function ListScreen() {
  const { users } = useContext(UsersContext);
  // const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   try {
  //     // fetch makes a get request by default
  //     const response = await fetch('http://localhost:5000/api/users');
  //     const jsonData = await response.json();
  //     // console.log(jsonData);
  //     setUsers(jsonData);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []); //  '[]' makes sure there is only one request

  // console.log(users);

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
      <Grid container spacing={4}>
        {users.map((user, pid) => (
          <Grid item key={pid} xs={12} md={3} lg={4}>
            {/* <UserCard item={[user.user_name, user.pid]} /> */}
            <UserCard item={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListScreen;
