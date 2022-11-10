import React from 'react';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//COMPONENTS
import HostCard from '../components/Cards';

//DUMMY HOST DATA
const data = [
  {
    src: 'https://images.unsplash.com/photo-1563281709-7af174759d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    alt: 'https://unsplash.com/photos/z8gKIE4Kz0Y',
    host_name: 'Gunda',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricie',
    location: 'Brandenburg',
    createdAt: 'a week ago',
  },
  {
    src: 'https://images.unsplash.com/photo-1582374927372-b06cb28a3bc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'https://unsplash.com/photos/fgzDK9ga43M',
    host_name: 'Daniela',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricie',
    location: 'Pfalz',
    createdAt: '3 years ago',
  },
  {
    src: 'https://images.unsplash.com/photo-1463319492205-164b553bfae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'https://unsplash.com/photos/OnKIsDLCeZ8',
    host_name: 'Markus',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricie',
    location: 'Brandenburg',
    createdAt: '10 months ago',
  },
];

function ListScreen() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom marginTop={3} marginBottom={5}>
        Featured Hosts
      </Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} md={3} lg={4}>
            <HostCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListScreen;
