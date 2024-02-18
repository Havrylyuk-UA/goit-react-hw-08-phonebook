import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { OwnSpinner } from 'components/Spiner/OwnSpinner';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <p
            style={{
              paddingTop: 65,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <OwnSpinner />
          </p>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
