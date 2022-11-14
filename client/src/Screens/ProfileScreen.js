import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateNewUser from '../components/c_Users/createNewUser';

function ProfileScreen() {
  return (
    <div>
      <h1>ProfileScreen</h1>
      <h1>...</h1>
      <CreateNewUser />
      <h1>...</h1>
      {/* <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.user_name}
          </Typography>
          <Typography variant="h5" component="div">
            {user.pid}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card> */}
    </div>
  );
}

export default ProfileScreen;
