import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../App.css';
import { AuthContext } from '../Context/authContext.js';
import { useNavigate } from 'react-router-dom';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: 'Name',
    email: 'Email',
    password: 'Password',
    error: '',
  });

  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const handleChange = () => (event) => {
    setValues(event.target.value);
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
        navigate('/profile');
      } else {
        error && setValues({ ...values, error: error });
      }
    } catch (e) {
      setValues({ ...values, error: 'e.message' });
    }
  };

  return (
    // <form className="form" action="submit">
    <Box sx={{ mt: 6 }} component="form" noValidate autoComplete="off">
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          required
          id="name"
          value={values.name}
          onChange={handleChange('name')}
        />
      </FormControl>
      <p>
        <br></br>
      </p>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange('email')}
          required
        />
      </FormControl>
      <p>
        <br></br>
      </p>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange('password')}
          required
        />
      </FormControl>

      {/* <legend color="red">{values.error}</legend> */}
      <p>
        <br></br>
        <br></br>
      </p>
      <Button
        color="success"
        variant="outlined"
        type="submit"
        onClick={handleSubmit}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default RegisterForm;
