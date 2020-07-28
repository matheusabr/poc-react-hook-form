import React from "react";

import "./Login.css";

function LoginForm() {
  return (
    <div className="box">
      <h1>Sign in</h1>

      <form className="form-content">
        <div className="field">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
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
