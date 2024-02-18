import { useSelector } from 'react-redux';
import {
  selectAuthLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { OwnSpinner } from 'components/Spiner/OwnSpinner';

const RestrictedRoute = () => {
  const isLogin = useSelector(selectAuthLogin);
  const token = useSelector(selectAuthToken);

  if (!isLogin && token) {
    return <OwnSpinner />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
