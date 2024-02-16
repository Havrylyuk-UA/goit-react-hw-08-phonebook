import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../redux/auth/auth-selectors';
import { signup } from '../redux/auth/auth-operations';
import RegisterForm from '../components//RegisterForm/RegisterForm';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = newUser => dispatch(signup(newUser));

  return (
    <>
      <h1>Please Sign Up</h1>
      {authLoading && <p>....Register in progress</p>}
      <RegisterForm onSubmit={handleSignup} />
      {authError && (
        <p style={{ color: 'red', textAlign: 'center' }}>{authError}</p>
      )}
    </>
  );
};

export default RegisterPage;
