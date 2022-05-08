import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import Social from "../Social/Social";
import "./Register.css";

const Register = () => {


  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [error1, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
     useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password === confirmPassword) {
     await createUserWithEmailAndPassword(email, password);

    
    } else setError("Password didn't match");
  };

  if (user) {
    navigate("/home");
  }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="register">
          <input type="text" name="name" id="1" placeholder="Name" required />
          <input
            type="email"
            name="email"
            id="2"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            id=""
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <br />

          <input
            type="password"
            name="confirmPassword"
            id=""
            ref={confirmPasswordRef}
            placeholder="Confirm Password"
            required
          />
          <br />
          <input type="submit" value="register" />
          <br />
        </div>
        <p>
          Already have an account?{" "}
          <Link className="text-decoration-none" to={"/login"}>
            Login
          </Link>
        </p>
        <p style={{ color: "red" }}>{error?.message}</p>
        <p style={{ color: "red" }}>{error1}</p>
      </form>
      <Social></Social>
    </div>
  );
};

export default Register;