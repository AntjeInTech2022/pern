import React from 'react';
import Box from '@mui/material/Box';
import AppForm from '../../components/c_form/AppForm';
import Typography from '../../components/Typography';
import Link from '@mui/material/Link';

import LoginForm2 from './LoginForm2';
import { Container } from '@mui/system';

const Login = () => {
  return (
    <Container> 
         <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <AppForm>
      <React.Fragment>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Login
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="#212121" href="/register" underline="always">
            Have no account yet?
          </Link>
        </Typography>
      </React.Fragment>
      <br></br>
      <LoginForm2 />
      <>
     <br></br>
     <br></br>
    </>
    </AppForm>
    <br></br>
     <br></br>
     <br></br>
     <br></br>
    </Container>
  );
};

export default Login;
