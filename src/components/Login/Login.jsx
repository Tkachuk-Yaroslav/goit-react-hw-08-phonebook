import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import React from 'react';

const Login = () => {
  return (
    <form>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default Login;
