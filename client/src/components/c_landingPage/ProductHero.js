import * as React from 'react';
// import Button from '../Button';
// import Button from '@mui/material/Button';
import Button from '../Button';
import Typography from '../Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1590334280249-a8f0c9f46a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Looking for a place to bee?
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        BuZz brings bee keepers and hosts together.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}
