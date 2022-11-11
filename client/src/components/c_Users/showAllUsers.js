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

function UserCard(user) {
  console.log('user', user);
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

  // return users.map((user, pid) => (
  //   <Grid item key={pid} xs={12} md={3} lg={4}>
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.user_name}
        </Typography>
        <Typography variant="h5" component="div">
          {user.pid}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    // </Grid>
  );
}

export default UserCard;
