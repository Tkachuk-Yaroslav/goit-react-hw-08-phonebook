import { Button, TextField } from '@mui/material';
import React from 'react';

const Register = () => {
  return (
    <form>
      <TextField label="Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};

export default Register;
