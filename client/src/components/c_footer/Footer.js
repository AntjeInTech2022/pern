import * as React from 'react';
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  TextField
} from "@mui/material";
import { Box } from "@mui/system";
import Link from '@mui/material/Link';
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from "@mui/icons-material/Send";
import Popover from '@mui/material/Popover';

export default function Footer() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  return (
    <Box mt={21}
      sx={{
        backgroundColor: 'primary.main',
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <Typography variant="body1">ABOUT US</Typography>
          <Typography variant="caption2">
          Got bees but nowhere to be? You have space for bees to thrive but no hive? BuZz brings bee keepers and hosts together.
          </Typography>
          <Box
            sx={{
              mt: 4
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} />
            <LinkedInIcon  sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="body1">INFORMATION</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              <Link rel="noreferrer" color="#000000" target="_blank" href="https://github.com/AntjeInTech2022/pern" underline="none">
                ABOUT BUZZ
                </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography> */}
            </ListItemText>
            <ListItemText>
            <Button aria-describedby={id} onClick={handleClick}>
              <Typography lineHeight={2} variant="caption2" color="#000000">
              Photos Copyright
              </Typography>
              </Button>
              <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>All photos are from Unsplash. Unsplash is NOT associated with this website.</Typography>
      </Popover>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" color="#000000">
              {/* FAKE USERS COPYRIGHT */}
              </Typography>
            </ListItemText>
          </List>
        </Grid>



        <Grid item md={6} lg={2}>
          <Typography variant="body1">
            MY ACCOUNT
            </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                LOGIN
              </Typography>
            </ListItemText>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography> */}
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                REGISTER
              </Typography>
            </ListItemText>
            {/* <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Saved Contacts
              </Typography>
            </ListItemText> */}
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <Typography variant="body1">NEWSLETTER</Typography>
          <Stack>
            <TextField
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon/>}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
              color="success"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}