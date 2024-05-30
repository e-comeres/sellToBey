import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import "./Sign.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const signup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        { username: username, email: email, password: password, role: role }
      );
      setMessage("Signup successful!");
      console.log(message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div id="sign" style={{ marginTop: "200px" }}>
        <div className="session">
          <div className="left">
            <svg
              enableBackground="new 0 0 300 302.5"
              version="1.1"
              viewBox="0 0 300 302.5"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#fff;}\n" }}
              />
            </svg>
          </div>
          <form action="" className="log-in" autoComplete="off">
            <h4>
              We are <span>HERE</span>
            </h4>
            <p>Welcome! Sign up to view today's products:</p>
            <div className="floating-label">
              <input
                placeholder="username"
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label htmlFor="username">username:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="email"
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="username">email:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <label htmlFor="password">Password:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="Role"
                type="role"
                name="role"
                id="role"
                autoComplete="off"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              <label htmlFor="password">Role:</label>
            </div>
            <button onClick={signup}>Sign up</button>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              log in
            </button>
          </form>
          {message && <p>{message}</p>}
          {console.log(message)}
        </div>
      </div>
    </div>
  );
};

export default Signin;
