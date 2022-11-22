import React from 'react';
import Box from '@mui/material/Box';
import AppForm from '../../components/c_form/AppForm';
import Typography from '../../components/Typography';
import Link from '@mui/material/Link';

import LoginForm2 from './LoginForm2';

const Login = () => {
  return (
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
      <p>
        <br></br>
      </p>
      {/* <LoginForm /> */}
      <LoginForm2 />
    </AppForm>
  );
};

export default Login;
