import { useSelector } from 'react-redux';
import {
  selectAuthLogin,
  selectAuthToken,
} from '../../redux/auth/auth-selectors';
import { Navigate, Outlet } from 'react-router-dom';

const RestrictedRoute = () => {
  const isLogin = useSelector(selectAuthLogin);
  const token = useSelector(selectAuthToken);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default RestrictedRoute;
