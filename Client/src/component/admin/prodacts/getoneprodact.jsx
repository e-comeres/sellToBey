import React from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const getoneprodact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { el } = location.state;
  const delet = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this prodact ?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:4000/api/products/${el.id}`)
        .then(() => {
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div>
        <h2>{el.name}</h2>
        <img src={el.imgUrl} />
        <h2>{el.category}</h2>
        <h2>{el.price}</h2>
        <h2>{el.condition}</h2>
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
    </>
  );
};

export default getoneprodact;
