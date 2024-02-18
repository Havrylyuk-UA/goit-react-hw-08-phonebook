import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operations';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const HomePage = lazy(() => import('pages/HomePage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<RestrictedRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactForm />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
