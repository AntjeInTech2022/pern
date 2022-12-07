
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

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        // color: 'primary.dark', // text color
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
              mt: 4,
            //   color: Colors.dove_gray,
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
              <Link href="#" underline="none"> About BuZz </Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography> */}
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="body1">MY ACCOUNT</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              {/* <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography> */}
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
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