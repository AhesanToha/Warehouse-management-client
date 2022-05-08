import React, { useRef } from "react";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import Social from "../Social/Social";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleLogin = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);

    event.preventDefault();
  };
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Email Sent");
    } else {
      toast.warn("Please enter you email address");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login">
          <input
            type="email"
            name="email"
            id=""
            ref={emailRef}
            placeholder="Email"
            required
          />
          <br />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
          <br />
        </div>
      </form>

      <p>
        Haven't Account?{" "}
        <Link className="text-decoration-none" to={"/register"}>
          Please Register
        </Link>
        <p>
          Forget Password?{" "}
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>{" "}
        </p>
      </p>
      <p className="text-center" style={{ color: "red" }}>
        {error?.message}
      </p>
      <Social></Social>
    </div>
  );
};

export default Login;
