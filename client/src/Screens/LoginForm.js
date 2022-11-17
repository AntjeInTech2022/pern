import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../App.css';

import { AuthContext } from '../Context/authContext.js';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppForm from '../components/c_form/AppForm';
import Typography from '../components/Typography';
import Link from '@mui/material/Link';

const LoginForm = () => {
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
    <form className="form">
      <TextField
        labelText="Email"
        id="email"
        formControlProps={{
          fullWidth: true,
        }}
        // handleChange={this.handleChange}
        type="text"
      />
      <TextField
        labelText="Password"
        id="password"
        formControlProps={{
          fullWidth: true,
        }}
        // handleChange={this.handleChange}
        type="password"
      />

      <Button type="button" color="primary" className="form__custom-button">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
