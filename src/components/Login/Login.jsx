import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
      <h5>
        Go to <NavLink to="/register">Register</NavLink>
      </h5>
    </form>
  );
};

export default Login;
