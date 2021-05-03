import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { serverErrors, onSubmit } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="wrap-login">
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
        <input
          id="email-input"
          className="form-control"
          placeholder="Email address"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        {errors.email && (
          <ul className="error-message">{errors.email.message}</ul>
        )}

        <input
          type="password"
          id="password-input"
          name="password"
          className="form-control"
          placeholder="Password"
          {...register("password", {
            required: "You must specify a password",
          })}
        />
        {errors.password && (
          <ul className="error-message">{errors.password.message}</ul>
        )}

        <div className="checkbox mb-3 mt-3">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              id="remember-input"
              {...register("rememberMe", { required: false })}
            />{" "}
            Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
        <div
          style={{
            display: serverErrors?.length > 0 ? "block" : "none",
          }}
        >
          <ul className="error-message">
            {serverErrors?.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
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
