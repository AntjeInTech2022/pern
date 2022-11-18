// SOURCE: TEMPLATE from:
//github.com/mui/material-ui/blob/master/docs/src/pages/premium-themes/onepirate/SignUp.js
import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//MUI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

//COMPONENTS
import Typography from '../../components/Typography';
import AppForm from '../../components/c_form/AppForm';
import RegisterForm from './RegisterForm.js';

//CNOTEXT
import { AuthContext } from '../../Context/authContext.js';

const Register = () => {
  return (
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

      <RegisterForm />
    </AppForm>
  );
};

export default Register;
