import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header container">
        <div>
          <Link to={"/"}>
            <img height={40} src={logo} alt="" />
          </Link>
        </div>

        <div className="nav-link">
          <Link to="/home">HOME</Link>
          <Link to="/blogs">BLOGS</Link>
          <Link to="/about">ABOUT ME</Link>
          {/*  {user ? (
            <Link to={"/"} onClick={handleSignOut} className="signout">
              SIGN OUT
            </Link>
          ) : (
            <Link to="/login">LOGIN</Link>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
