import React, { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateNewUser from '../components/c_Users/createNewUser';
import Container from '@mui/material/Container';

//CONTEXT
// import { UsersContext } from '../Context/userContext';

function ProfileScreen() {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
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
    getUsers();
  }, []); //  '[]' makes sure there is only one request

  console.log('User 1', user);

  // DELETE ACCOUNT
  const deleteUser = async (pid) => {
    try {
      // const deleteUser = await fetch(`http://localhost:5000/api/users/${pid}`, {
      //   method: 'DELETE',
      // });
      const deleteUser = await fetch('http://localhost:5000/api/users/:1', {
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
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {user.user_name}
            </Typography>
            <Typography variant="h5" component="div">
              {user.pid}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              Edit
            </Button>
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
