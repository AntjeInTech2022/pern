import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../App.css';
import { AuthContext } from '../Context/authContext.js';
import { useNavigate } from 'react-router-dom';

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
    <form className="form" action="submit">
      <TextField
        labelText="Email"
        id="email"
        formControlProps={{
          fullWidth: true,
        }}
        type="email"
        required
        onChange={handleChange('email')}
        value={values.email}
      />
      <p>
        <br></br>
      </p>
      <TextField
        labelText="Password"
        id="password"
        formControlProps={{
          fullWidth: true,
        }}
        // handleChange={this.handleChange}
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
        // className="form__custom-button"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
