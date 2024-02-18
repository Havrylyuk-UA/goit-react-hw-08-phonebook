import { useSelector } from 'react-redux';
import {
  selectAuthLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { OwnSpinner } from 'components/Spiner/OwnSpinner';

const PrivateRoute = () => {
  const isLogin = useSelector(selectAuthLogin);
  const token = useSelector(selectAuthToken);

  if (!isLogin && token) {
    return <OwnSpinner />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
