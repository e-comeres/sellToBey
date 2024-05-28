import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const signup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        { username: username, password: password }
      );
      setMessage("Signup successful!");
    } catch (error) {
      console.log(error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signin">
        create ur account
        <div className="inputs">
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          {/* <input type="text" />
          <br />
          <br /> */}
        </div>
        <button
          onClick={() => {
            // navigate("/home");
            signup();
          }}
        >
          sign up
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signin;
