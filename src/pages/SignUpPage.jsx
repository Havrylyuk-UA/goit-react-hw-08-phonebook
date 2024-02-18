import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthLoading,
} from '../redux/auth/auth-selectors';
import { signup } from '../redux/auth/auth-operations';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { OwnSpinner } from 'components/Spiner/OwnSpinner';

const SignUpPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = newUser => dispatch(signup(newUser));

  return (
    <div className="signup_page-container">
      {authLoading ? (
        <OwnSpinner />
      ) : authError ? (
        <p style={{ color: 'red', textAlign: 'center' }}>
          This user already exists
        </p>
      ) : (
        <p>SignUp and we will save your contacts for you.</p>
      )}

      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default SignUpPage;
