import axios from "axios";
import React, { useState } from "react";
import "./Cats.css";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const cats = ["sport", "gaming", "phones", "pcs", "kitchen", "fishing"];
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();
  const getByCategory = (category) => {
    axios
      .get(`http://localhost:4000/api/products/category/${category}`)
      .then((response) => {
        console.log(response.data);
        setCat(response.data);
        navigate("/oneCath", { state: { cat: response.data } });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="cats-container">
        {cats.map((cat) => {
          return (
            <div>
              <div
                className="cats"
                onClick={() => {
                  getByCategory(cat);
                }}
              >
                {cat}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
