import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = async body => {
  const response = await axios.post('/users/signup', body);
  console.log(response.data);
  return response.data;
};
