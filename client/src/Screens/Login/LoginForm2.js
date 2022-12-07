import React, { useContext, useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from '@mui/material';
// CONTEXT
import { AuthContext } from '../../Context/authContextTSX';
// import { AuthContext } from '../../Context/authContext.js';
import { useNavigate } from 'react-router-dom';
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// input form adapted from:
// https://codesandbox.io/s/simple-react-login-form-using-material-ui-with-custom-theme-lwic5?file=/src/App.js:163-1287

const LoginForm2 = () => {
  const [checked, setChecked] = useState(true);

  const handleChange2 = (event) => {
    setChecked(event.target.checked);
  };

  const { login } = useContext(AuthContext);
  const [values, setValues] = useState({
    password: '',
    email: '',
    error: '',
  });
  const navigate = useNavigate();

  const handleChange = (property) => (event) => {
    setValues({ ...values, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { success, error } = await login(values.email, values.password);
    if (success) {
      toast.success('🐝 You are signed in now!');
      navigate('/profile');
    } else {
      error && setValues({ ...values, error: error });
      toast.error(values.error);
    }
  };
  console.log('values', values);

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <p>
              <br></br>
            </p>
            <TextField
              label="Email"
              required
              id="email"
              value={values.email}
              onChange={handleChange('email')}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={'password'}
              required
              id="password"
              value={values.password}
              onChange={handleChange('password')}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange2}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  disabled
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              //   fullWidth
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
          <p>
            <br></br>
          </p>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginForm2;
