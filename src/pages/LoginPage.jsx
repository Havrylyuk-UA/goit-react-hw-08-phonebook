import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../redux/auth/auth-selectors';
import { login } from '../redux/auth/auth-operations';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = user => {
    dispatch(login(user));
  };

  return (
    <div className="login_page-container">
      {authLoading && <p>...Loading in progress</p>}
      <h1>Please Login</h1>
      <LoginForm onSubmit={handleLogin} />

      {authError && (
        <p style={{ color: 'red', textAlign: 'center' }}>{authError}</p>
      )}
    </div>
  );
};

export default LoginPage;