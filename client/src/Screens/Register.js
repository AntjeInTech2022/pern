// SOURCE: TEMPLATE from:
//github.com/mui/material-ui/blob/master/docs/src/pages/premium-themes/onepirate/SignUp.js
import React from 'react';
import { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import { Field, Form } from 'react-final-form';
//COMPONENTS
import Typography from '../components/Typography';
import AppForm from '../components/c_form/AppForm';
import { email, required } from '../components/c_form/validation';
import RFTextField from '../components/c_form/RFTextField';
//CNOTEXT
import { AuthContext } from '../Context/authContext.js';

// import FormFeedback from '../components/c_form/FormFeedback';

const Register = () => {
  const [values, setValues] = useState();

  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { success, error } = await register(
        values.email,
        values.password,
        values.name
      );
      if (success) {
        navigate('/');
      } else {
        error && setValues({ ...values, error: error });
      }
    } catch (e) {
      setValues({ ...values, error: 'e.message' });
    }
  };

  // const [sent, setSent] = React.useState(false);

  // const validate = (values) => {
  //   const errors = required(
  //     ['firstName', 'lastName', 'email', 'password'],
  //     values
  //   );

  //   if (!errors.email) {
  //     const emailError = email(values.email);
  //     if (emailError) {
  //       errors.email = emailError;
  //     }
  //   }

  //   return errors;
  // };

  // const handleSubmit = () => {
  //   setSent(true);
  // };

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

      <Form
      // onSubmit={handleSubmit}
      // subscription={{ submitting: true }}
      // validate={validate}
      >
        {/* {({ handleSubmit: handleSubmit2, submitting }) => ( */}
        <Box
          component="form"
          // onSubmit={handleSubmit2}
          // noValidate
          sx={{ mt: 6 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                autoFocus
                component={RFTextField}
                // disabled={submitting || sent}
                autoComplete="given-name"
                fullWidth
                placeholder="First name"
                // label="First name"
                name="firstName"
                required
                type="text"
                id="name"
                onChange={handleChange('name')}
                value={values.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={RFTextField}
                // disabled={submitting || sent}
                autoComplete="family-name"
                fullWidth
                placeholder="Last name"
                // label="Last name"
                name="lastName"
                // required
              />
            </Grid>
          </Grid>
          <Field
            autoComplete="email"
            component={RFTextField}
            // disabled={submitting || sent}
            fullWidth
            placeholder="Email"
            // label="Email"
            margin="normal"
            name="email"
            required
            type="email"
            id="email"
            onChange={handleChange('email')}
            value={values.email}
          />
          <Field
            fullWidth
            component={RFTextField}
            // disabled={submitting || sent}
            required
            name="password"
            autoComplete="new-password"
            placeholder="Password"
            // label="Password"
            type="password"
            margin="normal"
            id="password"
            onChange={handleChange('password')}
            value={values.password}
          />
          <p>
            <legend color="red">{values.error}</legend>
            <br></br>
            <br></br>
          </p>
          <Button
            type="button"
            onClick={handleSubmit}
            color="success"
            variant="contained"
          >
            Submit registration
          </Button>
        </Box>
        {/* )} */}
      </Form>
    </AppForm>
  );
};

export default Register;
