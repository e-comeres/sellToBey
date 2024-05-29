import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const { logOut } = useAuth();
  const signOut = () => {
    logOut();
  };
  const navigate = useNavigate();
  return (
    <div id="nav">
      <div className="topnav">
        <a
          className="active"
          href="#home"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a
          href="#sigin"
          onClick={() => {
            navigate("/sign");
          }}
        >
          Sign in
        </a>
        <button onClick={signOut}>logout</button>
        <div className="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
