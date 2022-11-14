import React, { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateNewUser from '../components/c_Users/createNewUser';
import Container from '@mui/material/Container';

import EditUserBtn from '../components/c_Users/editUserBtn';

//CONTEXT
// import { UsersContext } from '../Context/userContext';

function ProfileScreen() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      // fetch makes a get request by default
      const response = await fetch('http://localhost:5000/api/users/1');
      const jsonData = await response.json();
      console.log(jsonData);
      setUser(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []); //  '[]' makes sure there is only one request

  console.log('User 1', user);

  // DELETE ACCOUNT
  const deleteUser = async (pid) => {
    try {
      // const deleteUser = await fetch(`http://localhost:5000/api/users/${pid}`, {
      //   method: 'DELETE',
      // });
      const deleteUser = await fetch('http://localhost:5000/api/users/1', {
        method: 'DELETE',
      });
      console.log('deleted user', deleteUser);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>ProfileScreen</h1>
      <h1>...</h1>
      <CreateNewUser />
      <h1>...</h1>
      <Container fixed>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.user_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.profile_header}
            </Typography>
          </CardContent>
          <CardActions>
            <EditUserBtn user={user} />
            <Button
              variant="contained"
              size="small"
              onClick={(deleteUser) => user.pid}
            >
              Delete account
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default ProfileScreen;
