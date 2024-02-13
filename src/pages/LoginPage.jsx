const LoginPage = () => {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
