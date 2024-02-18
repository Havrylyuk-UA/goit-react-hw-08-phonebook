import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuthLogin } from '../redux/auth/auth-selectors';

const HomePage = () => {
  const isLogin = useSelector(selectAuthLogin);

  return (
    <>
      {isLogin ? (
        <p
          style={{
            textAlign: 'center',
            fontSize: '24px',
            marginTop: '45px',
            color: '#fff',
          }}
        >
          Thank you for using our project, you can return to your{' '}
          <Link to="/contacts" style={{ textDecoration: 'underline' }}>
            contacts
          </Link>
          !
        </p>
      ) : (
        <p
          style={{
            textAlign: 'center',
            fontSize: '24px',
            marginTop: '45px',
            color: '#fff',
          }}
        >
          Here you can save your contacts, please{' '}
          <Link to="/login" style={{ textDecoration: 'underline' }}>
            Login
          </Link>{' '}
          or{' '}
          <Link to="/signup" style={{ textDecoration: 'underline' }}>
            SignUp
          </Link>
        </p>
      )}
    </>
  );
};

export default HomePage;
