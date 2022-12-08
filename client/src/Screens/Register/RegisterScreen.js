// SOURCE: TEMPLATE from:
//github.com/mui/material-ui/blob/master/docs/src/pages/premium-themes/onepirate/SignUp.js
import React from 'react';
//MUI
import Link from '@mui/material/Link';
//COMPONENTS
import Typography from '../../components/Typography';
import AppForm from '../../components/c_form/AppForm';
import { Container } from '@mui/system';
import RegisterForm2 from './RegisterForm2.js';

const Register = () => {
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
          Register
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="#212121" href="/login" underline="always">
            Already have an account?
          </Link>
        </Typography>
      </React.Fragment>
        <br></br>
      <RegisterForm2 />
    </AppForm>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </Container>
  );
};

export default Register;
