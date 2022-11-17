import { Button, Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../Context/authContext.js';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [values, setValues] = useState({
    password: '',
    email: '',
    error: '',
  });
  const navigate = useNavigate();

  const handleChange = () => (event) => {
    setValues(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { success, error } = await login(values.email, values.password);
    if (success) {
      navigate('/profile');
    } else {
      error && setValues({ ...values, error: error });
    }
  };

  return (
    <div>
      <Box component="form" sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Required"
              defaultValue="Email"
              variant="filled"
              type="email"
              required
              onChange={handleChange}
              value={values.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Required"
              defaultValue="Password"
              variant="filled"
              type="email"
              required
              onChange={handleChange}
              value={values.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          onClick={handleSubmit}
          color="success"
          variant="contained"
        >
          Submit registration
        </Button>
      </Box>
    </div>
  );
};

export default Login;
