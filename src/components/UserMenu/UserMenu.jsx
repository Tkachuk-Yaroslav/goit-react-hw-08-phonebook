import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUsername } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  return (
    <div>
      <p>Welcome, {username}!</p>
      <button
        onClick={() => {
          dispatch(logOut());
          console.log('dispatch', dispatch);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
