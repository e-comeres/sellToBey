import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import Navbar from "../navbar/Navbar";
import Getprodact from "./prodacts/getprodact";
import axios from "axios";
import Getusers from "./users/getusers";
import Getseller from "./seller/getseller.jsx";
// import Getseller from "./component/admin/seller/getseller";

const Admin = () => {
  const [dataprodact, setdataprodact] = useState([]);
  const [datauser, setdatauser] = useState([]);
  const [dataseller, setdataseller] = useState([]);
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("products");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((response) => {
        setdataprodact(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/api/users/users")
      .then((response) => {
        setdatauser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/api/seller/seller")
      .then((response) => {
        setdataseller(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {selectedTab === "products" && (
              <h2>
                <Getprodact dataprodact={dataprodact} />
              </h2>
            )}
            {selectedTab === "users" && (
              <h2>
                <Getusers datauser={datauser} />
              </h2>
            )}
            {selectedTab === "sellers" && (
              <h2>
                <Getseller dataseller={dataseller} />
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
