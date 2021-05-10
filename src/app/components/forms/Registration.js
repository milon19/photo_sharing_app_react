import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = (props) => {
  const { serverErrors, onSubmit } = props;
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();
  return (
    <div className="wrap-login">
      <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
        <input
          id="email-input"
          className="form-control"
          placeholder="Enter your email address"
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
          type="text"
          id="username-input"
          class="form-control"
          placeholder="Username"
          {...register("username", {
            required: true,
          })}
        />
        {errors.email && (
          <ul className="error-message">Username is required.</ul>
        )}
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <ul className="error-message">{errors.password.message}</ul>
        )}
        <input
          type="password"
          id="confirmPassword-input"
          name="confirmPassword"
          className="form-control"
          placeholder="Verify Password"
          {...register("confirmPassword", {
            required: "Please confirm password!",
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              },
            },
          })}
        />
        {errors.confirmPassword && (
          <ul className="error-message">{errors.confirmPassword.message}</ul>
        )}

        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">
          Register
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
