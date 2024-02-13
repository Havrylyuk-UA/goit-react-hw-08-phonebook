import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <ul className="header">
        <li className="header-link-item">
          <NavLink to="/login" className="header-link">
            <h1>Login</h1>
          </NavLink>
        </li>
        <li className="header-link-item">
          <NavLink to="/register" className="header-link">
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
