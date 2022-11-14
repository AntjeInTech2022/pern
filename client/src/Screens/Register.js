// SOURCE:
//github.com/mui/material-ui/blob/master/docs/src/pages/premium-themes/onepirate/SignUp.js

import React from 'react';

//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form } from 'react-final-form';
//COMPONENTS
import Typography from '../components/Typography';
import AppForm from '../components/c_form/AppForm';
import { email, required } from '../components/c_form/validation';

import RFTextField from '../components/c_form/RFTextField';

import { Button } from '@mui/material';
// import FormFeedback from '../components/c_form/FormFeedback';

const Register = () => {
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(
      ['firstName', 'lastName', 'email', 'password'],
      values
    );

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

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
        onSubmit={handleSubmit}
        subscription={{ submitting: true }}
        validate={validate}
      >
        {({ handleSubmit: handleSubmit2, submitting }) => (
          <Box
            component="form"
            onSubmit={handleSubmit2}
            noValidate
            sx={{ mt: 6 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  autoFocus
                  component={RFTextField}
                  disabled={submitting || sent}
                  autoComplete="given-name"
                  fullWidth
                  placeholder="First name"
                  // label="First name"
                  name="firstName"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={RFTextField}
                  disabled={submitting || sent}
                  autoComplete="family-name"
                  fullWidth
                  placeholder="Last name"
                  // label="Last name"
                  name="lastName"
                  required
                />
              </Grid>
            </Grid>
            <Field
              autoComplete="email"
              component={RFTextField}
              disabled={submitting || sent}
              fullWidth
              placeholder="Email"
              // label="Email"
              margin="normal"
              name="email"
              required
            />
            <Field
              fullWidth
              component={RFTextField}
              disabled={submitting || sent}
              required
              name="password"
              autoComplete="new-password"
              placeholder="Password"
              // label="Password"
              type="password"
              margin="normal"
            />
            <Button color="success" variant="contained">
              Sumbit registration
            </Button>
          </Box>
        )}
      </Form>
    </AppForm>
  );
};

export default Register;
