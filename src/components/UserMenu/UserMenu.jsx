import React from 'react';
import { useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const username = useSelector(getUsername);
  return (
    <div>
      <p>Welcome, {username}!</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
