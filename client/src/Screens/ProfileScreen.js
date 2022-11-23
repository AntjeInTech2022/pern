import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { AuthContext } from '../Context/authContext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

//COMPONENTS
import ProfilePictureCard from '../components/c_Users/ProfileCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProfileScreen() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <p>
        <br></br>
        <br></br>
      </p>
      <Container>
        <Typography variant="h4" gutterBottom marginTop={3} marginBottom={5}>
          👋 Hello '{user ? user.user_name : 'stranger'}'
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <ProfilePictureCard user={user} />
          </Grid>
          <Grid item xs={6}>
            <Item>Your profile description</Item>
          </Grid>
          <Grid item xs>
            <Item>Your profile header</Item>
          </Grid>
        </Grid>

        <p>
          <br></br>
          <br></br>
        </p>
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default ProfileScreen;
