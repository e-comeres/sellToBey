import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || {});
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        data
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        console.log(response.data);
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setRole(response.data.role);
        localStorage.setItem("role", JSON.stringify(response.data.role));
        if (response.data.user.role === "admin") {
          navigate("/home");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
      //   toast.error(err.response.data.message);
    }
  };

  const logOut = () => {
    setUser({});
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
