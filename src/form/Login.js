import React from "react";
import { useForm } from "react-hook-form";

import "./Login.css";

function LoginForm() {
  const loginForm = useForm();
  const { register, handleSubmit, errors } = loginForm;

  function onSubmit(data, event) {
    console.log("data, event", data, event);
  }

  return (
    <div className="box">
      <h1>Sign in</h1>

      <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            ref={register({ required: true })}
          />
          {errors.username && <span>This field is Required</span>}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            ref={register({
              required: true,
              minLength: 6,
              pattern: /^[0-9a-zA-Z]+$/,
            })}
          />
          {errors.password && (
            <span>
              This field is Required and must be letters and numbers and at
              least 6 characters
            </span>
          )}
        </div>

        <button type="submit" className="btn-submit">
          Let me in!
        </button>
      </form>

      <span className="btn-signup">Sign Up</span>
    </div>
  );
}

export default LoginForm;
