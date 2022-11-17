import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../App.css';
import { AuthContext } from '../Context/authContext.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [values, setValues] = useState({
    password: 'Password',
    email: 'Email',
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
    <Box sx={{ mt: 6 }} component="form" noValidate autoComplete="off">
      <TextField
        label="Email"
        id="email"
        type="email"
        required
        onChange={handleChange('email')}
        value={values.email}
      />
      <p>
        <br></br>
      </p>
      <TextField
        id="password"
        label="Password"
        type="password"
        required
        onChange={handleChange('password')}
        value={values.password}
      />
      <legend color="red">{values.error}</legend>
      <p>
        <br></br>
      </p>
      <Button
        color="primary"
        variant="outlined"
        type="submit"
        onClick={handleSubmit}
      >
        Sign in
      </Button>
    </Box>
  );
};

export default LoginForm;
