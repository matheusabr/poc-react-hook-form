import React from "react";

import "./Signup.css";

function SignupForm(props) {
  return (
    <div className="box-signup">
      <h1>Sign up</h1>

      <form className="form-content"></form>

      <span className="btn-signin" onClick={props.changeAuthType}>
        Sign In
      </span>
    </div>
  );
}

export default SignupForm;
