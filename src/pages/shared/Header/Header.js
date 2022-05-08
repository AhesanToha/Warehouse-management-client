import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header>
      <nav className=" container">
        <div>
          <Link to={"/"}>
            <img className="align-middle" src={logo} alt="" />
          </Link>
        </div>

        <div className="nav-link">
          <Link to="/home">HOME</Link>
          {user && (
            <>
              {" "}
              <Link to="/blogs">BLOGS</Link>
              <Link to="/manage">MANAGE</Link>
              <Link to="/addItem">ADD</Link>
              <Link to="/home">ALL ITEMS</Link>
            </>
          )}
          <Link to="/about">ABOUT ME</Link>
          {user ? (
            <Link to={"/"} onClick={handleSignOut} className="signout">
              SIGN OUT
            </Link>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
