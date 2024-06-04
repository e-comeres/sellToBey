import axios from "axios";
import React from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

export const getoneusers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { el } = location.state;
  const delet = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:4000/api/users/users/${el.id}`)
        .then(() => {
          console.log("deleted");
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Navbar />
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
    </>
  );
};
export default getoneusers;
