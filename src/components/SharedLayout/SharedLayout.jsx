import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <p style={{ textAlign: 'center', paddingTop: 65 }}>...Loading page</p>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
