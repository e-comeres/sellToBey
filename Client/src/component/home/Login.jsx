import axios from "axios";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { useAuth } from "../context/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { loginAction } = useAuth();
  console.log("hola", loginAction);
  console.log("hola", useAuth);
  const handleLogin = async (e) => {
    e.preventDefault();
    loginAction({ username: username, password: password, role: role });
    navigate("/");
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
              <label htmlFor="password">Password:</label>
            </div>
            <button onClick={handleLogin}>Log in</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
