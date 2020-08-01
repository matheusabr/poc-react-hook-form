import React from "react";
import { useForm } from "react-hook-form";

import "./Login.css";

function LoginForm() {
  const loginForm = useForm();
  const { register, handleSubmit } = loginForm;

  function onSubmit(data, event) {
    console.log("data, event", data, event);
  }

  return (
    <div className="box">
      <h1>Sign in</h1>

      <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" ref={register} />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input name="password" type="text" ref={register} />
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
