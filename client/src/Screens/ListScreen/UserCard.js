import { useEffect, useState } from 'react';
import * as React from 'react';
//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';

// COMPONENTS

import avatarPic from '../../Images/user.png';


function UserCard({ user }) {
  // console.log('user', user);

  return (
    <Card sx={{ minWidth: 275 }}>
    <CardHeader
      avatar={
        <Avatar
          alt="User picture"
          src={avatarPic}
     
        >
     
        </Avatar>
      }
      title={user.user_name}
      subheader="Member since March 2020"
    />
    <CardMedia 
    component="img" 
    height="140" 
    src={avatarPic} 
    // alt={item.alt} 
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {user.profile_header !== null
                      ? user.profile_header
                      : 'Lorem ipsum dolor sit amet!'}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {user.profile_description !== null
                      ? user.profile_description
                      : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="add to favorites">
        <MailIcon />
      </IconButton>
      <Button size="small">Learn More</Button>
      {/* <Button size="small">Contact</Button> */}
    </CardActions>
  </Card>


    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {user.user_name}
    //     </Typography>
    //     <Typography variant="body2">{user.profile_header}</Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Add to favorites</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  
  );
}

export default UserCard;
