import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../App.css';
import { AuthContext } from '../Context/authContext.js';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
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

  return (
    <form className="form" action="submit">
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
        Login
      </Button>
    </form>
  );
};

export default RegisterForm;
