import { NavLink } from 'react-router-dom';

import './AuthBar.css';

const AuthBar = () => {
  return (
    <ul className="nav_auth">
      <li className="nav_auth-link-item">
        <NavLink to="/login" className="nav_auth-link">
          Login
        </NavLink>
      </li>
      <li className="nav_auth-link-item">
        <NavLink to="/register" className="nav_auth-link">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthBar;
