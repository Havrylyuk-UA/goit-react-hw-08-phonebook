import { useId, useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          required
        />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
