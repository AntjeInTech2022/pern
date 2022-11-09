import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../Button';
import Typography from '../Typography';
// import Button from '../components/Button';
// import Typography from '../components/Typography';

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
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 225,
  my: 4,
};

function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          //   src={card_picture}
          //   src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
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
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          //   href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default HowItWorks;
