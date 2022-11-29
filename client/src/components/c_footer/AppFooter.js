// SOURCE: https://github.com/mui/material-ui/blob/master/docs/src/pages/premium-themes/onepirate/modules/views/AppFooter.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
  return (
    <React.Fragment>
         {'Made by '}
      <Link target="_blank" color="inherit" href="https://github.com/AntjeInTech2022/pern">
        Räuberschnecke 
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'primary.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'de-DE',
    name: 'German',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.main' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a"
                sx={iconStyle}
                >
                <GitHubIcon fontSize="large" />
                </Box>
                <Box component="a" 
                sx={iconStyle}
                >
                <LinkedInIcon fontSize="large"/>
                </Box>
              </Grid>
              <Grid item>
              {/* <Copyright /> */}
              </Grid>
           
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              About
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link underline="hover" color="inherit">
                Contact
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link underline="hover" color="inherit" >
                About this project
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
           
           </Grid>
          
         <Grid item>
           <Copyright />
          </Grid> 
        </Grid> 
      
      </Container>
    </Typography>
  );
}
