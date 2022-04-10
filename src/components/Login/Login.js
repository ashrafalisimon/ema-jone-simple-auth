import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import google from "../../images/google.png";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (user) {
    navigate(from, {replace: true});
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleLoginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleLoginUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p>{error?.message}</p>
          {loading && <p>loading....</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="container-or">
          <div className="gray-line"> </div>
          <div>
            <p>or</p>
          </div>
          <div className="gray-line"> </div>
        </div>
        <div>
          <button className="google-btn">
            <img src={google} alt="" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
