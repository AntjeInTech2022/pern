import React, { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CreateNewUser from '../../archiv/createNewUser';
import Container from '@mui/material/Container';

// import EditUserBtn from '../components/c_Users/editUserBtn';

import { AuthContext } from '../Context/authContext';

//CONTEXT
// import { UsersContext } from '../Context/userContext';

function ProfileScreen() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>ProfileScreen</h1>
      <p>Hello {user ? user.user_name : 'stranger'}</p>
      <p>
        <br></br>
        <br></br>
      </p>
      {/* <CreateNewUser /> */}
      <p>
        <br></br>
        <br></br>
      </p>
      <Container fixed>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {/* {user.user_name} */}
              User Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* {user.profile_header}  */}
              Profile Header
            </Typography>
          </CardContent>
          <CardActions>
            {/* <EditUserBtn user={user} /> */}
            <Button
              variant="contained"
              size="small"
              // onClick={(deleteUser) => user.pid}
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
