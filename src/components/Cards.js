import * as React from 'react';
import card_picture from '../Images/pexels-anete-lusina-5247969.jpg';

//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Cards = () => {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={card_picture}
          alt="Photo by Anete Lusina from Pexels"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    // <Grid item xs={3}>
    //   <Paper>
    //     <img
    //       scr="https://picsum.photos/images"
    //       className="img"
    //       //   alt="https://picsum.photos/images"
    //     />
    //   </Paper>
    // </Grid>

    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: 128,
    //       height: 128,
    //     },
    //   }}
    // >
    //   <Paper>
    //     <img
    //       scr="https://picsum.photos/200"
    //       className="img"
    //       //   alt="https://picsum.photos/images"
    //     />
    //   </Paper>
    // </Box>
  );
};

export default Cards;
