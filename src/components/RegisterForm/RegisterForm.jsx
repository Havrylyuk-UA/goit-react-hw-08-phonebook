import { useId, useState } from 'react';

import './RegisterForm.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = user;

  return (
    <form onSubmit={handleSubmit} className="signup_form">
      <div className="signup_form-item">
        <label htmlFor={nameId}>Name:</label>
        <input
          className="signup_form-input"
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          required
        />
      </div>
      <div className="signup_form-item">
        <label htmlFor={emailId}>Email:</label>
        <input
          className="signup_form-input"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div className="signup_form-item">
        <label htmlFor={passwordId}>Password:</label>
        <input
          className="signup_form-input"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <div className="signup_form-item">
        <button type="submit" className="signup_form-btn">
          SignUp
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
