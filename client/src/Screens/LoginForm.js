import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
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
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input
          required
          id="email"
          value={values.email}
          onChange={handleChange('email')}
        />
      </FormControl>
      <p>
        <br></br>
      </p>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input
          required
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange('email')}
        />
      </FormControl>
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
