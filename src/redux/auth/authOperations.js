import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const unsetToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', body);
      // setToken(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const resp = await axios.post('/users/login', body);
    // setToken(resp.data.token);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // unsetToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const signUp = async body => {
//   const response = await axios.post('/users/signup', body);
//   console.log(response.data);
//   return response.data;
// };
