import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (

      <AppBar position="fixed" color="primary" 
       sx={{ top: 'auto', bottom: 0 }}
       sm={{ top: 'auto', bottom: 0 }}
      md={{ top: 'auto', bottom: 0 }}
      >
        
        <Toolbar>
        <Grid item>
            <Typography variant="caption">
              {'Template created by the '}
              <Link color="inherit" target="_blank"  href="https://mui.com/store/items/onepirate/">
                MUI Community
            </Link>
              {' under a '} 
              <Link
                href="https://opensource.org/licenses/MIT"
                title="The MIT License"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
               MIT license
              </Link>
            </Typography>
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
          <GitHubIcon fontSize="large"/>
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon fontSize="large"   />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}