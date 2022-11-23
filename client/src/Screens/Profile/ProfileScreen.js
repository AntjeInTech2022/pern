import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { AuthContext } from '../../Context/authContext';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

//COMPONENTS
import ProfileCard from './ProfileCard';

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
        <ProfileCard user={user} />
      </Container>
    </>
  );
}

export default ProfileScreen;
