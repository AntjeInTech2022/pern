import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { amber } from '@mui/material/colors';

//COMPONENTS
import HostCard from './HostCards';
import UserCard from './UserCard';
import UserDetails from './DetailsScreen';
import beePic from '../../Images/bee_line.png';

//DUMMY DATA
import dummyHostData from '../../dummyData/dummyHostData';
//CONTEXT
import { UsersContext } from '../../Context/userContext';

//IMAGES
import pic1 from '../../Images/pexels-anete-lusina-5247969.jpg';
import pic2 from '../../Images/simon-wilkes-RbjSCrgH5to-unsplash.jpg';
import pic3 from '../../Images/boba-jaglicic-TxA8cgFnfNQ-unsplash.jpg';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: amber[500],
  fontWeight: 'medium',
};

const image = {
  height: 225,
  my: 4,
  borderRadius: 2,
};

function ListScreen() {
  const { users } = useContext(UsersContext);

  return (
    <Container>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>1.</Box>
              <Box
                component="img"
                src={pic1}
                alt="pexels-anete-lusina-5247969.jpg"
                sx={image}
              />
              <Typography variant="h5" align="center">
                Got bees but nowhere to be?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>2.</Box>
              <Box
                component="img"
                src={pic2}
                alt="Photo by Simon Wilkes on Unsplash"
                // Photo by <a href="https://unsplash.com/@simonfromengland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Simon Wilkes</a> on <a href="https://unsplash.com/s/photos/fields?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                sx={image}
              />
              <Typography variant="h5" align="center">
                You have space for bees to thrive but no hive?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>3.</Box>
              <Box
                component="img"
                src={pic3}
                alt="Photo by Boba Jaglicic on Unsplash"
                //<a href="https://unsplash.com/@bobajaglicic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Boba Jaglicic</a> on <a href="https://unsplash.com/s/photos/honey-bee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText

                sx={image}
              />
              <Typography variant="h5" align="center">
                {'BuZz brings bee keepers and hosts together.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={4}>
        {dummyHostData.map((item, index) => (
          <Grid item key={index} xs={12} md={3} lg={4}>
            <HostCard item={item} />
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      {/* <Typography variant="h4" gutterBottom marginTop={3} marginBottom={5}>
        Bee keepers
      </Typography> */}
      <Grid container spacing={4}>
        {users.map((user, pid) => (
          <Grid item key={pid} xs={12} md={3} lg={4}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListScreen;
