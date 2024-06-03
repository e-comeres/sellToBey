import React from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export const getoneseller = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { el } = location.state;
  const delet = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this seller ?"
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
      <h2>{el.username}</h2>
      <h2>{el.email}</h2>
      <button
        onClick={() => {
          delet();
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          navigate("/admin");
        }}
      >
        back to admin page
      </button>
    </div>
  );
};

export default getoneseller;
