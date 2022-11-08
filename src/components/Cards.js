import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Cards = () => {
  return (
    <Grid item xs={3}>
      <Paper>Paper Card</Paper>
    </Grid>

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
    //   <Paper />
    //   <Paper elevation={3} />
    // </Box>
  );
};

export default Cards;
