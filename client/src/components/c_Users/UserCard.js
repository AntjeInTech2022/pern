import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// Source:
// https.youtube.com/watch?v=ldYcgPKEZC8&t=1106s

function UserCard({ user }) {
  // console.log('user', user);

  return (
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
        <Button size="small">Add to favorites</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    // </Grid>
  );
}

export default UserCard;
