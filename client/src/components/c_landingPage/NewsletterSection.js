import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { amber } from '@mui/material/colors';
import picture from '../../Images/hansjorg-keller-OJHxRwXWXBs-unsplash.jpg'

const color_amber = amber[50];

function NewsletterSection() {
    
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'primary.light',
              py: 8,
              px: 3,
              borderRadius: 2,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Subscribe to our newsletter
              </Typography>
              <Typography variant="h5">
              Get inspiration, event updates, beautifull photos, bee keeper stories, recipes and more.
              </Typography>
              <TextField
            
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color = "success"
                variant='contained'
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
            //   background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src={picture}
            alt="Busy activity in front of the beehive."
            // Photo by <a href="https://unsplash.com/@kel_foto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hansjörg Keller</a> on <a href="https://unsplash.com/s/photos/bee-hive?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
      {/* <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      /> */}
    </Container>
   
  );
}

export default NewsletterSection;