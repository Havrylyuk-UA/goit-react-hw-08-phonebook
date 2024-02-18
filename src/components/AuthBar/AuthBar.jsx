import { NavLink, useLocation } from 'react-router-dom';

import { handleClearError } from '../../redux/auth/auth-slice';

import './AuthBar.css';
import { useState } from 'react';

const AuthBar = () => {
  const [active, setActive] = useState(true);

  const location = useLocation();

  const handleToggleLink = () => {
    setActive(!active);
  };

  return (
    <ul className="nav_auth">
      <li className="nav_auth-link-item">
        <NavLink
          to="/login"
          className={`nav_auth-link ${
            location.pathname === '/login' || location.pathname === '/'
              ? 'auth_is-active'
              : ''
          }`}
          onClick={() => {
            handleToggleLink();
            handleClearError();
          }}
        >
          Login
        </NavLink>
      </li>
      <li className="nav_auth-link-item">
        <NavLink
          to="/signup"
          className={`nav_auth-link ${
            location.pathname === '/signup' ? 'auth_is-active' : ''
          }`}
          onClick={() => {
            handleToggleLink();
            handleClearError();
          }}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthBar;
