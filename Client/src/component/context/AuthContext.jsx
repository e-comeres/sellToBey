import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [seller, setSeller] = useState(
    JSON.parse(localStorage.getItem("seller")) || {}
  );
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || {}
  );
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      console.log("hello");
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        data
      );
<<<<<<< HEAD
      console.log(response);
      
=======
      console.log("admin",response);

>>>>>>> 7fb96a18019b9b6aba096f24a5bead8cc5d3c62d
      if (response.status === 200) {
        toast.success(response.data.message);
        if (response.data.seller) {
          setSeller(response.data.seller);
          localStorage.setItem("seller", JSON.stringify(response.data.seller));
          setToken(response.data.tokenSeller);
          localStorage.setItem("token", response.data.tokenSeller)
          navigate("/seller");
        }
        else if(response.data.admin){
          setAdmin(response.data.admin)
          localStorage.setItem("admin",JSON.stringify(response.data.admin))
          setToken(response.data.tokenadmin)
          localStorage.setItem("token",response.data.tokenadmin)
          navigate("/admin")
        }
        
        else {
          setUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setToken(response.data.token);
<<<<<<< HEAD
          localStorage.setItem("token", response.data.token);
        }
        if (response.data.seller) {
          navigate("/seller");
        } else {
=======
          localStorage.setItem("token", response.data.token)
>>>>>>> 7fb96a18019b9b6aba096f24a5bead8cc5d3c62d
          navigate("/");
        }

       
      }
    } catch (err) {
      console.error(err)
      // toast.error(err.response.data.message);
    }
  };
  const logOut = () => {
    setUser({});
    setSeller({});
    setAdmin({})
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("seller");
    localStorage.removeItem("admin");
    toast.success("Logged out successfully");
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ token, user,admin, seller, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
