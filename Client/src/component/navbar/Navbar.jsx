import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { logOut, token } = useAuth();
  const signOut = () => {
    logOut();
  };

  const navigate = useNavigate();

  return (
    <>
      <div id="topNav">
        <div className="midleText">
          Summer Sale For All Swim Suits And Free Express Delevery - OFF 50%!
          <span>ShopNow</span>
        </div>
      </div>
      <div id="nav">
        <div className="logo">
          <a href="#">Exclusive</a>
        </div>
        <div className="MidleNav">
          <ul>
            <li>
              <a href="#" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/sign">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="rightNav">
          <div className="search">
            <input
              type="text"
              placeholder="what are loking for ?"
              name="search"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="icons">
            <i className="fa-regular fa-heart"></i>
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => navigate("/panier")}
            ></i>
            {token && (
              <div className="dropdown ">
                <i className="fa-solid fa-user toggle"></i>
                <ul className="dropdown-menu">
                  <li>
                    <i class="fa-regular fa-user"></i>
                    <span>Profile</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span>Orders</span>
                  </li>
                  <li onClick={signOut}>
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Log Out</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
