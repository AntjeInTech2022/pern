import * as React from 'react';

//IMAGES
// import card_picture from '../Images/pexels-anete-lusina-5247969.jpg';

//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//DUMMY HOSTS
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

const HostCards = () => {
  return (
    <>
      {/* <Grid
        container 
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      > */}
      {data.map((item, index) => (
        // <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ minWidth: 345 }} key={index}>
          <CardMedia
            component="img"
            height="140"
            src={item.src}
            alt={item.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.host_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to favorites</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        // </Grid>
      ))}
      {/* </Grid> */}
    </>
  );
};

export default HostCards;
