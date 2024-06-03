import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import Navbar from "../navbar/Navbar";
// import Getprodact from "./component/admin/prodacts/Getprodact";
// import Getseller from "./component/admin/seller/getseller";

const Admin = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("products");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Navbar />
      <div id="admin">
        <div className="container-admin">
          <div className="sidenav-admin">
            <button onClick={() => handleTabClick("products")}>Products</button>
            <button onClick={() => handleTabClick("users")}>Users</button>
            <button onClick={() => handleTabClick("sellers")}>Sellers</button>
          </div>
          <div className="content-admin">
            {selectedTab === "products" && <h2>Products Content</h2>}
            {selectedTab === "users" && <h2>ezfzerfze</h2>}
            {selectedTab === "sellers" && <h2>Sellers Content</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
