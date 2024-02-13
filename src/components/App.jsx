import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactList = lazy(() => import('./ContactList/ContactList'));

const App = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactList />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <RestrictedRoute>
              <NotFoundPage />
            </RestrictedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

{
  /* <div className="contact-container">
  <h1>Phonebook</h1>
  <ContactForm />
  {isLoading && !error && <b>Request in progress...</b>}
  {contacts.length === 0 ? (
    ''
  ) : (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  )}
</div> */
}
