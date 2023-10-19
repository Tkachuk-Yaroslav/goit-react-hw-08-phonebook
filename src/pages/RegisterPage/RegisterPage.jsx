import { signUp } from 'api/auth';
import Register from 'components/Register/Register';
import React from 'react';

const RegisterPage = () => {
  const registration = async body => {
    try {
      console.log(body);
      const resp = await signUp(body);
      console.log('resp', resp);
    } catch (error) {
      console.log('error', error);
    }
  };

  return <Register registration={registration} />;
};

export default RegisterPage;
