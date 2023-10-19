import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            //     flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '600px',
            //     backgroundColor: '#58c800',
            //     borderRadius: '20px',
            //     padding: '40px 20px',
            //     outline: 'auto #280a0a00',
            //     outlineOffset: '-20px',
          }}
        >
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </div>
      </header>
      <main>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
