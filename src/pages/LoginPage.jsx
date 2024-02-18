import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../redux/auth/auth-selectors';
import { login } from '../redux/auth/auth-operations';
import { OwnSpinner } from 'components/Spiner/OwnSpinner';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = user => {
    dispatch(login(user));
  };

  return (
    <div className="login_page-container">
      {authLoading ? (
        <OwnSpinner />
      ) : authError ? (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Email or password is incorrect
        </p>
      ) : (
        <p>Please Login and we'll show your contacts.</p>
      )}

      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
