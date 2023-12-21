import React from 'react';
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='popup'>
        <h2>Login</h2>
        <form>
          <div className='input-box'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          </div>

          <div className='input-box'>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          </div>

          <div className="forget-password">
            <a href="#">Forget Password?</a>
          </div>

          <NavLink to="/"><button type="submit">Login</button></NavLink>
        </form>

        <div className="register-link">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
