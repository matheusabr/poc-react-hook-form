import React, { useState } from "react";

import LoginForm from "../../form/Login";
import SignupForm from "../../form/Signup";

import "./Auth.css";

const AuthTypes = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
};

function AuthPage() {
  const [authType, setAuthType] = useState(AuthTypes.LOGIN);

  return (
    <div className="container">
      {authType === AuthTypes.LOGIN && (
        <LoginForm changeAuthType={() => setAuthType(AuthTypes.SIGNUP)} />
      )}
      {authType === AuthTypes.SIGNUP && (
        <SignupForm changeAuthType={() => setAuthType(AuthTypes.LOGIN)} />
      )}
    </div>
  );
}

export default AuthPage;
