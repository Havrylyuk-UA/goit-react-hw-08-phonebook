import { useState, useId } from 'react';

import './LoginForm.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [user, setUser] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setUser({
      ...user,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...user });
    reset();
  };

  const reset = () => {
    setUser({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = user;

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <div className="login_form-item">
        <label htmlFor={emailId}>Email:</label>
        <input
          className="login_form-input"
          type="email"
          name="email"
          value={email}
          id={emailId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login_form-item">
        <label htmlFor={passwordId}>Password:</label>
        <input
          className="login_form-input"
          type="password"
          name="password"
          value={password}
          id={passwordId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login_form-item">
        <button className="login_form-btn">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
