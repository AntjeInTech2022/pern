import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Cards = () => {
  return (
    <Grid item xs={3}>
      <Paper>
        <img
          scr="https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
          className="img"
          //   alt="https://picsum.photos/images"
        />
      </Paper>
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
