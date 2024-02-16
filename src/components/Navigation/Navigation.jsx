import UserMenu from 'components/UserMenu/UserMenu';
import AuthBar from 'components/AuthBar/AuthBar';

import './Navigation.css';
import { useSelector } from 'react-redux';
import { selectAuthLogin } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLogin = useSelector(selectAuthLogin);

  return (
    <nav className="navbar_menu">{isLogin ? <UserMenu /> : <AuthBar />}</nav>
  );
};

export default Navigation;
