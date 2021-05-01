import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="wrap-login">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="Username"
          required
          autofocus
        />
        <input
          type="password"
          id="password1"
          className="form-control"
          placeholder="Password"
          required
        />
        <input
          type="password"
          id="password2"
          className="form-control"
          placeholder="Verify Password"
          required
        />
        <div className="checkbox mb-3 mt-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
        <div>
          <ul className="error-message">
            <li>Something wrong.</li>
            <li>Something wrong.</li>
          </ul>
        </div>
        <div className="button-container">
          <p>
            Already have an account? <Link to={"/auth/login/"}>Login</Link>
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

export default Registration;
