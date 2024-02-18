import { useDispatch, useSelector } from 'react-redux';
import './UserMenu.css';
import { selectAuthUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const logOut = () => dispatch(logout());

  return (
    <div className="user_bar">
      <p className="user_bar-name">{user && user.name}</p>
      <button onClick={logOut} className="user_bar-btn">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
