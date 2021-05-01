import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrap-login">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3 mt-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
        <div>
          <ul className="error-message">
            <li>Something wrong.</li>
            <li>Something wrong.</li>
          </ul>
        </div>
        <div className="button-container">
          <p>
            Don't have an account? <Link to={"/auth/register/"}>Register</Link>
          </p>
          <p>
            Forgot password?{" "}
            <Link to={"/auth/forgot-password/"}>Reset Here</Link>
          </p>
        </div>
      </form>
      <img src="/images/login.png" className="form-image" alt="01.jpeg" />
    </div>
  );
};

export default Login;
