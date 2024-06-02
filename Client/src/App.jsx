import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Signin from "./component/home/Signin";
import Home from "./component/home/Home";

import SellerInterface from "./component/seller/SellerInterface";
import NewProduct from "./component/seller/NewProduct";
import OneProduct from "./component/seller/OneProduct";
import Admin from "./component/admin/adminapp";
import Getprodact from "./component/admin/prodacts/getprodact";

import Getoneprodact from "./component/admin/prodacts/getoneprodact";
import Getusers from "./component/admin/users/getusers";
import Getoneusers from "./component/admin/users/getoneusers";
import EditSellerProduct from "./component/seller/EditSellerProduct";
import Getseller from "./component/admin/seller/getseller";
import Profile from "./component/profile/Profile";
import axios from "axios";
import OneCategory from "./component/home/OneCategory";
import Login from "./component/home/Login";
import { AuthProvider } from "./component/context/AuthContext";
import { Toaster } from "react-hot-toast";
import Panier from "./component/pannier/Panier";
import Navbar from "./component/navbar/Navbar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products", {
        headers: localStorage.getItem("token"),
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home data={data} />} />
            <Route exact path="/sign" element={<Signin />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/oneCath" element={<OneCategory />} />
            <Route exact path="/panier" element={<Panier />} />

            <Route exact path="/seller" element={<SellerInterface />} />
            <Route exact path="/sellerNewProduct" element={<NewProduct />} />
            <Route exact path="/sellerOneProduct" element={<OneProduct />} />
            <Route exact path="/sellerEdit" element={<EditSellerProduct />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/allprodact" element={<Getprodact />} />
            <Route exact path="/alluseres" element={<Getusers />} />
            <Route exact path="/oneuser" element={<Getoneusers />} />
            <Route exact path="/allseller" element={<Getseller />} />
          </Routes>
        </AuthProvider>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
