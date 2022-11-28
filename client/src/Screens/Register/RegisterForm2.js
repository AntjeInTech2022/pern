import React, { useContext, useState } from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button,
} from '@mui/material';
import { AuthContext } from '../../Context/authContext.js';
import { useNavigate } from 'react-router-dom';
// TOASTIFY
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//SELF_MADE





const RegisterForm2 = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',

  
  });

  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const handleChange = (property) => (event) => {
    setValues({ ...values, [property]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { success, error } = await register(
        values.name,
        values.email,
        values.password
      );
      if (success) {
        toast.success('🐝  Registration successful!');
        navigate('/profile');
      } else {
        error && setValues({ ...values, error: error });

        toast.error(' 🪲   Registration failed');
      }
    } catch (e) {
      setValues({ ...values, error: 'e.message' });
    }
  };
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
              label="Name"
              type={'text'}
              required
              id="name"
              value={values.name}
              onChange={handleChange('name')}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type={'email'}
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
          {/* <Grid item xs={12}>
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
          </Grid> */}
          <Grid item xs={12}>
            <Button
              //   fullWidth
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              Register
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

export default RegisterForm2;
