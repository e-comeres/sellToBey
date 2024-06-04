import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./one.css";
import Navbar from "../../navbar/Navbar";
const getoneseller = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { el } = location.state;

  const deleteSeller = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this seller?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:4000/api/seller/seller/${el.id}`)
        .then(() => {
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="seller-details">
          <h2>{el.username}</h2>
          <h3>Email: {el.email}</h3>
          <button className="delete-btn" onClick={deleteSeller}>
            Delete Seller
          </button>
        </div>
        <button className="back-btn" onClick={() => navigate("/admin")}>
          Back to Admin Page
        </button>
      </div>
    </div>
  );
};

export default getoneseller;
