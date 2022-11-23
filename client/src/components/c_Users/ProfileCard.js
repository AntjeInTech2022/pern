import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import avatarPic from '../../Images/pexels-anete-lusina-5247969.jpg';

function ProfilePictureCard({ user }) {
  // console.log('user', user);

  return (
    <Card sx={{ minWidth: 300, maxWidth: 600 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="240"
          src={avatarPic}
          alt="user profile picture"
        />
        {/* <Typography gutterBottom variant="h5" component="div">
          {user.user_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.user_email}
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.profile_header}
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Add to favorites</Button>
        <Button size="small">Learn More</Button> */}
        <Button
          variant="contained"
          //   size="small"
          // onClick={(deleteUser) => user.pid}
        >
          Change picture
        </Button>
      </CardActions>
      <p>
        <br></br>
        <br></br>
      </p>
    </Card>
    // </Grid>
  );
}

export default ProfilePictureCard;
